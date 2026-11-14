// Prepare/Transform.ts - the parsers and the provenance headers.
//
// The manifest (`Scripts/Prepare/Manifest.ts`) names a parser per row; this
// file is the only place a parser is implemented. Every parser is a pure
// function of the source text (plus, for the pin, `git`), and every one of
// them THROWS on a shape it cannot read rather than returning a silent null:
// a generated file that quietly lost a fact is worse than a build that stops
// and names the file.
//
// The parsers are deliberately narrow. They read the one line or block the
// site actually renders - a `version` field, a YAML list, a TOML key - and
// nothing else, because a wider parser is a second implementation of the
// repository's formats and would drift from the first.

import { execFileSync } from "node:child_process";

import type { Parser, Row } from "./Manifest.ts";

/** What a parser is given: the source text, its path, and the module root. */
export interface Input {
	/** The source file's bytes, CRLF already normalised to LF. */
	Text: string;

	/** The source path inside `Module/Aphrodite`, for the error message. */
	Source: string;

	/** The resolved module root, for the parsers that need `git`. */
	Module: string;
}

/** A parsed fragment: the object a row contributes to its destination. */
export type Fragment = Record<string, unknown>;

/** Read a `git` subcommand's stdout in the module, or null when git cannot answer. */
function Git(Module: string, Argument: string[]): string | null {
	try {
		return execFileSync("git", ["-C", Module, ...Argument], {
			encoding: "utf8",
			stdio: ["ignore", "pipe", "ignore"],
		}).trim();
	} catch {
		// A missing `git`, a sandboxed build, or a checkout that is not a
		// repository: provenance degrades to null and the build continues.
		return null;
	}
}

/** The `version = "x.y.z"` field of a Cargo manifest. */
function CargoVersion({ Text, Source }: Input): Fragment {
	const Version = Text.match(/^version\s*=\s*"([^"]+)"/m)?.[1];

	if (Version === undefined) {
		throw new Error(`[Prepare] ${Source} carries no top-level \`version = "..."\` field.`);
	}

	return { Version };
}

/** The `version: x.y.z` key of a YAML manifest. */
function YamlVersion({ Text, Source }: Input): Fragment {
	const Version = Text.match(/^version:\s*([^\s#]+)/m)?.[1];

	if (Version === undefined) {
		throw new Error(`[Prepare] ${Source} carries no \`version:\` key.`);
	}

	return { Version };
}

/** A file whose whole content is the version, like `BINARY_VERSION`. */
function VersionFile({ Text, Source }: Input): Fragment {
	const Version = Text.trim();

	if (Version === "") {
		throw new Error(`[Prepare] ${Source} is empty; it should hold one version.`);
	}

	return { Version };
}

/** A YAML block list under a key, as bare strings. */
function YamlList(Text: string, Key: string): string[] {
	const Block = Text.match(new RegExp(`^${Key}:\\s*\\n((?:[ \\t]*- .*\\n)+)`, "m"))?.[1];

	switch (Block === undefined) {
		case true:
			return [];
		default:
			return Block.split("\n")
				.filter((Line) => Line.trim() !== "")
				.map((Line) => Line.trim().replace(/^-\s+/, "").trim())
				.filter((Value) => Value !== "");
	}
}

/** A YAML literal block (`key: |`) as text, de-indented. */
function YamlBlock(Text: string, Key: string): string | null {
	const Block = Text.match(new RegExp(`^${Key}:\\s*\\|\\s*\\n((?:[ \\t]+.*\\n?)+)`, "m"))?.[1];

	if (Block === undefined) return null;

	const Lines = Block.split("\n").filter((Line) => Line.trim() !== "");
	const Indent = Math.min(...Lines.map((Line) => Line.length - Line.trimStart().length));

	return Lines.map((Line) => Line.slice(Indent)).join("\n").trimEnd();
}

/**
 * The CHANGELOG head: the newest entry's version, date, title, and the version
 * pairing it declares. The same shapes `Source/Library/Versions.ts` reads, so
 * the generated file and the library agree by construction.
 */
function ChangelogHead({ Text, Source }: Input): Fragment {
	const Head = Text.match(/^##\s+v([^\s-]+)(?:\s+-\s+([^\n(]*))?\s*(?:\(([^)]*)\))?/m);

	if (Head === null) {
		throw new Error(`[Prepare] ${Source} carries no \`## v<version> - <title> (<date>)\` head.`);
	}

	const Pairing = Text.match(/Binary\s+`([^`]+)`,\s*plugin\s+`([^`]+)`/);

	// The pairing wraps across lines in the source ("Binary `1.7.0 →" / "1.8.0`"),
	// so the captured text is flattened: the page renders one line, and a
	// newline inside a value would be invisible until it broke a template.
	const Flat = (Value: string): string => Value.replace(/\s+/g, " ").trim();

	return {
		Version: Head[1] ?? "",
		Date: Head[3]?.trim() ?? "",
		Title: Head[2]?.trim() ?? "",
		Pairing: Pairing ? `Binary \`${Flat(Pairing[1])}\`, plugin \`${Flat(Pairing[2])}\`` : "",
	};
}

/**
 * The line number (1-based) a character offset falls on. Every generated
 * figure carries the line range it was read from, so the page's SRC citation
 * is produced by the same pass that produced the number - a stale anchor is
 * not something a later editor has to notice.
 */
function LineAt(Text: string, Offset: number): number {
	return Text.slice(0, Offset).split("\n").length;
}

/**
 * One markdown section, by its heading, with the line range it occupies. The
 * range runs to the next `##` heading, so a `###` subsection stays inside the
 * section that owns it.
 */
function SectionOf(Text: string, Heading: RegExp, Source: string): { Body: string; From: string } {
	const Match = Heading.exec(Text);

	if (Match === null) {
		throw new Error(
			`[Prepare] ${Source} carries no \`${Heading.source}\` heading. The source's shape moved; update Scripts/Prepare/Transform.ts.`,
		);
	}

	const Start = Match.index;
	const Rest = Text.slice(Start + Match[0].length);
	const Next = Rest.search(/^##\s/m);
	const Body = Next === -1 ? Rest : Rest.slice(0, Next);

	return {
		Body,
		From: `${Source}:${LineAt(Text, Start)}-${LineAt(Text, Start + Match[0].length + Body.length)}`,
	};
}

/**
 * Markdown prose flattened: blockquote markers dropped, hard wraps joined, runs
 * of whitespace collapsed. Prose figures wrap across lines in the source, so a
 * pattern written against the rendered sentence has to read the flat form; the
 * tables are read from the raw body instead.
 */
function Flatten(Body: string): string {
	return Body.replace(/^>\s?/gm, "")
		.replace(/\n/g, " ")
		.replace(/\s+/g, " ")
		.trim();
}

/** One required match, or a failure that names the file and what went missing. */
function Need(Pattern: RegExp, Text: string, What: string, Source: string): RegExpMatchArray {
	const Match = Text.match(Pattern);

	if (Match === null) {
		throw new Error(
			`[Prepare] ${Source} carries no match for ${What}. The source's shape moved; update Scripts/Prepare/Transform.ts.`,
		);
	}

	return Match;
}

/** A percentage range ("~24-33%") as the bar width its midpoint implies. */
function Midpoint(Range: string): number {
	const [Low, High] = Range.replace(/[~%]/g, "").split("-").map(Number);

	return High === undefined || Number.isNaN(High)
		? Math.round(Low ?? 0)
		: Math.round(((Low ?? 0) + High) / 2);
}

/**
 * Ratios read as log-scale bar widths, the largest at full width. The per-type
 * chart compares magnitudes across two orders, so a linear width would flatten
 * everything below the ceiling into the same stub.
 */
function LogScale(Ratios: number[]): number[] {
	if (Ratios.length === 0) return [];

	const Top = Math.log(Math.max(...Ratios));

	return Ratios.map((Ratio) => Math.round((Math.log(Ratio) / Top) * 100));
}

/**
 * The measured study: the 200-session ledger, the session-shape bands and the
 * sensitivity band the confidence note states.
 *
 * The README carries these as a table and as one sentence of prose. The parser
 * reads the FIGURES out of both and never the paragraph: the page composes its
 * own sentence around each number, so the copy stays the site's and the fact
 * stays the repository's.
 */
function ReadmeStudy({ Text, Source }: Input): Fragment {
	const Section = SectionOf(Text, /^###\s+Real-world savings[^\n]*/m, Source);
	const Flat = Flatten(Section.Body);
	const Table = Section.Body;

	const Measured = Need(
		/###\s+Real-world savings \(measured, ([^)]+)\)/,
		Text,
		"the `### Real-world savings (measured, <period>)` heading",
		Source,
	)[1]!;

	const Sessions = Need(/analysis of (\d+) real Hermes sessions/, Flat, "the study's session count", Source)[1]!;
	const Scope = Need(/\(([\d,]+) API calls, ([^)]+)\)/, Flat, "the study's API-call count and period", Source);

	/** One two-column row of the ledger table, by its label. */
	const Row = (Label: string): string =>
		Need(
			new RegExp(`^\\|\\s*${Label}[^|\\n]*\\|\\s*([^|\\n]+?)\\s*\\|`, "m"),
			Table,
			`the "${Label}" ledger row`,
			Source,
		)[1]!;

	const Saved = Need(
		/\*\*Context tokens saved\*\*\s*\|\s*\*\*([\d,]+) \(([\d.]+%)\)\*\*/,
		Table,
		"the saved-tokens ledger row",
		Source,
	);
	const Tax = Need(
		/^([\d,]+) calls \/ ([\d,]+) tok$/,
		Row("Retrieval re-entry \\(tax\\)"),
		"the retrieval-tax call and token pair",
		Source,
	);

	const TokensSaved = Saved[1]!;
	const TaxTokens = Tax[2]!;
	const Numeric = (Value: string): number => Number(Value.replace(/,/g, ""));

	// The tax as a share of what was saved. Derived, not extracted, because the
	// README states the two counts and leaves the ratio to the reader - and a
	// derived figure has to be computed in one place or it disagrees with itself.
	const TaxPct = `${((Numeric(TaxTokens) / Numeric(TokensSaved)) * 100).toFixed(1)}%`;

	// The session-shape bands, in the order the sentence lists them. The labels
	// are the page's; the ranges are the study's.
	const Shape = Need(
		/Savings scale with[\s\S]*?76-82%\*\*/,
		Flat,
		"the session-shape sentence (chat-only through pure-tool)",
		Source,
	)[0];
	const Ranges = [...Shape.matchAll(/(~?\d+(?:\.\d+)?(?:-\d+(?:\.\d+)?)?%)/g)].map((Match) => Match[1]!);

	if (Ranges.length !== 4) {
		throw new Error(
			`[Prepare] ${Source} states ${Ranges.length} session-shape band(s); the page renders four. Update the page's labels or the parser.`,
		);
	}

	const Confidence = Need(
		/sensitivity across ([\d.]+-[\d.]+) chars\/tok spans (~[\d.]+-[\d.]+%), centered (~[\d.]+%)/,
		Flat,
		"the chars/token sensitivity band in the confidence note",
		Source,
	);

	return {
		Measured,
		Sessions,
		ApiCalls: Scope[1]!,
		Period: Scope[2]!.trim(),
		TokensWithMarkers: Row("Context tokens with markers \\(what the model saw\\)"),
		TokensExpanded: Row("Context tokens expanded \\(stock Hermes, no CCR\\)"),
		TokensSaved,
		SavedPct: Saved[2]!,
		SavedMillions: `${Math.round(Numeric(TokensSaved) / 1_000_000)}M+`,
		AvgPerCall: Row("Average saved per API call").replace(/\s*tok$/, ""),
		SessionsSaved: Row("Sessions that saved anything"),
		MedianRatio: Row("Median session saved ratio"),
		TaxCalls: Tax[1]!,
		TaxTokens,
		TaxPct,
		CharsPerTok: Confidence[1]!,
		Band: Confidence[2]!,
		BandCenter: Confidence[3]!,
		Bands: Ranges.map((Range) => ({ Range, Percent: Midpoint(Range) })),
		From: `Module/Aphrodite/${Section.From}`,
	};
}

/**
 * The benchmark figures: the corpus headline, the per-type table, the
 * real-world per-output table, the latency band and the classification floor.
 *
 * The bar widths are computed here rather than typed on the page, so a width
 * can never disagree with the ratio it draws.
 */
function ReadmeBenchmark({ Text, Source }: Input): Fragment {
	const Section = SectionOf(Text, /^##\s+Performance[^\n]*/m, Source);
	const Flat = Flatten(Section.Body);
	const Table = Section.Body;

	const Head = Need(
		/up to \*\*(\d+)×\*\* on large low-entropy prose, \*\*(\d+)×\*\* overall/,
		Flat,
		"the corpus headline (the ceiling and the overall ratio)",
		Source,
	);
	const Corpus = Need(/\((\d+) KB → (\d+) B\)/, Flat, "the corpus size pair", Source);

	const Classes = [
		...Table.matchAll(
			/^\|\s*([^|]+?)\s*\|\s*(~[\d,]+ tok)\s*\|\s*(~[\d,]+ tok)\s*\|\s*\*\*(\d+)×\*\*\s*\|/gm,
		),
	].map((Match) => ({
		Label: Match[1]!,
		Without: Match[2]!,
		With: Match[3]!,
		Savings: `×${Match[4]!}`,
		Ratio: Number(Match[4]!),
	}));

	if (Classes.length === 0) {
		throw new Error(`[Prepare] ${Source} carries no per-type table row (label | ~N tok | ~N tok | **N×**).`);
	}

	const Widths = LogScale(Classes.map((Entry) => Entry.Ratio));

	const RealWorld = [
		...Table.matchAll(/^\|\s*`([a-z_]+)`\s*\|\s*\*\*(\d+)×\*\*\s*\|/gm),
	].map((Match) => ({
		Type: Match[1]!,
		Ratio: `×${Match[2]!}`,
		Percent: Math.min(100, Number(Match[2]!)),
	}));

	if (RealWorld.length === 0) {
		throw new Error(`[Prepare] ${Source} carries no real-world per-output row (\`type\` | **N×**).`);
	}

	return {
		Ceiling: `×${Head[1]!}`,
		Overall: `×${Head[2]!}`,
		CorpusIn: `${Corpus[1]!} KB`,
		CorpusOut: `${Corpus[2]!} B`,
		Median: `×${Need(/\*\*Median: (\d+)× fewer tokens/, Flat, "the median ratio", Source)[1]!}`,
		Latency: Need(/End-to-end latency is ([\d-]+ ms)/, Flat, "the end-to-end latency band", Source)[1]!,
		LatencyHeadline: Need(/(~[\d]+ ms) end-to-end/, Flatten(Text), "the `~10 ms end-to-end` headline", Source)[1]!,
		Classify: Need(/classification alone is ([\d-]+ ns)/, Flat, "the classification figure", Source)[1]!,
		RoundTrips: Need(
			/(\d+\/\d+ compressed, \d+\/\d+ retrieve round-trips OK)/,
			Flat,
			"the round-trip count",
			Source,
		)[1]!,
		Classes: Classes.map((Entry, Index) => ({ ...Entry, Percent: Widths[Index]! })),
		RealWorld,
		From: `Module/Aphrodite/${Section.From}`,
	};
}

/**
 * The narrative's other counted claims: how many content types the catalog
 * renders, the threshold tiers each type maps to, and the `code_multiplier`
 * the shipped example config carries.
 *
 * The tiers are the README's table verbatim - tier, types and multiplier - so
 * the page cannot claim a multiplier the repository does not ship. The one
 * thing the page adds is the sentence under the table, and that sentence now
 * reads the multiplier instead of remembering it.
 */
function ReadmeNarrative({ Text, Source }: Input): Fragment {
	const Catalog = SectionOf(Text, /^###\s+Output Type Catalog[^\n]*/m, Source);
	const CatalogTypes = [...Catalog.Body.matchAll(/^\|\s*`[^`]+`/gm)].length;

	if (CatalogTypes === 0) {
		throw new Error(`[Prepare] ${Source} carries no catalog row (\`type\` | ...). The table's shape moved.`);
	}

	const Section = SectionOf(Text, /^###\s+Threshold Tiers[^\n]*/m, Source);

	const Tiers = [
		...Section.Body.matchAll(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*(×[^|]+?)\s*\|$/gm),
	].map((Match) => {
		const Value = /^×([\d.]+)/.exec(Match[3]!)?.[1];

		if (Value === undefined) {
			throw new Error(`[Prepare] ${Source} states the "${Match[1]!.trim()}" tier's multiplier as "${Match[3]!}".`);
		}

		return {
			Tier: Match[1]!.trim().toUpperCase(),
			Types: Match[2]!.replace(/`/g, "").replace(/,\s*/g, " · ").trim(),
			Multiplier: `×${Value}`,
			Qualifier: (Match[3]!.match(/\(([^)]+)\)/)?.[1] ?? "").replace(/`/g, ""),
		};
	});

	if (Tiers.length === 0) {
		throw new Error(`[Prepare] ${Source} carries no threshold-tier row (tier | types | ×N).`);
	}

	const Code = Tiers.find((Entry) => Entry.Tier === "CODE");

	return {
		CatalogTypes,
		Tiers,
		CodeMultiplier: Code?.Multiplier ?? null,
		CodeMultiplierKey: "code_multiplier",
		From: `Module/Aphrodite/${Catalog.From}`,
	};
}

/** The classification registry's own size, from the docs tree's heading. */
function RegistryTypes({ Text, Source }: Input): Fragment {
	const Match = Need(
		/^##\s+Complete Registry \((\d+) Types\)/m,
		Text,
		"the `## Complete Registry (N Types)` heading",
		Source,
	);

	return {
		Types: Number(Match[1]!),
		From: `${Source}:${LineAt(Text, Match.index ?? 0)}`,
	};
}

/**
 * Every release the CHANGELOG records, oldest last, from the
 * `## v<version> - <title> (<date>)` headers. The page keeps its own `Why` and
 * `Tag` prose; this row is the SET of releases, so a register row can be
 * checked against the tree instead of trusted.
 */
function ChangelogReleases({ Text, Source }: Input): Fragment {
	const Entries = [...Text.matchAll(/^##\s+v([^\s]+)\s+-\s+(.+?)\s+\((\d{4}-\d{2}-\d{2})\)\s*$/gm)].map((Match) => ({
		Version: Match[1]!,
		Title: Match[2]!.replace(/\s+/g, " ").trim(),
		Date: Match[3]!,
		Line: LineAt(Text, Match.index ?? 0),
	}));

	if (Entries.length === 0) {
		throw new Error(`[Prepare] ${Source} carries no \`## v<version> - <title> (<date>)\` header.`);
	}

	return {
		Count: Entries.length,
		Entries,
		From: `${Source}:${Entries[Entries.length - 1]!.Line}-${Entries[0]!.Line}`,
	};
}

/** The plugin manifest: identity, requirements, and the two registries. */
function PluginManifest({ Text, Source }: Input): Fragment {
	const Name = Text.match(/^name:\s*(\S+)/m)?.[1];
	const Version = Text.match(/^version:\s*([^\s#]+)/m)?.[1];
	const Hooks = YamlList(Text, "provides_hooks");
	const Tools = YamlList(Text, "provides_tools");

	if (Name === undefined || Version === undefined) {
		throw new Error(`[Prepare] ${Source} carries no \`name:\` / \`version:\` pair.`);
	}

	if (Hooks.length === 0 || Tools.length === 0) {
		throw new Error(
			`[Prepare] ${Source} declares ${Hooks.length} hook(s) and ${Tools.length} tool(s). The plugin registers at least one of each, so an empty list means the manifest shape moved.`,
		);
	}

	return {
		Name,
		Version,
		Kind: Text.match(/^kind:\s*(\S+)/m)?.[1] ?? null,
		RequiresHermes: Text.match(/^requires_hermes:\s*"([^"]+)"/m)?.[1] ?? null,
		RequiresHooks: Text.match(/^requires_hooks:\s*(\S+)/m)?.[1] === "true",
		ContextEngine: Text.match(/^provides_context_engine:\s*(\S+)/m)?.[1] === "true",
		Hooks,
		Tools,
		InstallMessage: YamlBlock(Text, "install_message"),
	};
}

/**
 * Every key of a TOML file with the default it ships, section by section.
 *
 * This is not a TOML parser. It reads the two files whose whole purpose is a
 * flat list of defaults, where a key is one line and its value is on that
 * line. A value that starts with a quote keeps its content verbatim (a `#`
 * inside a string is not a comment); an unquoted value loses its trailing
 * comment. Nested tables and arrays are recorded as their raw text, because
 * the pages render them as text.
 */
function TomlKeys({ Text, Source }: Input): Fragment {
	const Keys: { Section: string; Key: string; Value: string }[] = [];
	const Sections: string[] = [];

	let Section = "";

	for (const Line of Text.split("\n")) {
		const Head = Line.match(/^\s*\[\[?([^\]]+)\]\]?\s*$/);

		if (Head !== null) {
			Section = Head[1].trim();

			if (!Sections.includes(Section)) Sections.push(Section);

			continue;
		}

		const Pair = Line.match(/^([A-Za-z0-9_.-]+)\s*=\s*(.+)$/);

		if (Pair === null) continue;

		const Raw = Pair[2].trim();

		Keys.push({
			Section,
			Key: Pair[1],
			Value: /^["']/.test(Raw) ? Raw : Raw.replace(/\s+#.*$/, "").trim(),
		});
	}

	if (Keys.length === 0) {
		throw new Error(`[Prepare] ${Source} carries no \`key = value\` line; the shape moved.`);
	}

	return { Sections, Keys };
}

/** The module pin: which tree these bytes came from, and what it carries nested. */
function ModulePin({ Text, Source, Module }: Input): Fragment {
	let Package: { name?: string; version?: string };

	try {
		Package = JSON.parse(Text);
	} catch {
		throw new Error(`[Prepare] ${Source} is not valid JSON.`);
	}

	const Status = Git(Module, ["submodule", "status"]);
	const Nested =
		Status === null
			? []
			: Status.split("\n")
					.filter((Line) => Line.trim() !== "")
					.map((Line) => {
						// The state column is a leading space for a clean pin, which
						// `trim()` strips from the first line of the output - so it is
						// optional here, and an absent column reads as clean.
						const Match = Line.match(/^([ +\-U]?)([0-9a-f]{40})\s+(\S+)(?:\s+\((.*)\))?$/);

						return {
							Path: Match?.[3] ?? Line.trim(),
							Commit: Match?.[2] ?? null,
							Describe: Match?.[4] ?? null,
							State:
								Match === null || Match[1] === "" || Match[1] === " "
									? "clean"
									: ({ "+": "ahead", "-": "uninitialised", U: "conflict" }[Match[1]] ??
										"unknown"),
						};
					});

	return {
		Name: Package.name ?? null,
		Version: Package.version ?? null,
		Commit: Git(Module, ["rev-parse", "HEAD"]),
		Branch: Git(Module, ["rev-parse", "--abbrev-ref", "HEAD"]),
		Nested,
	};
}

/** The parser registry: the one place a `Parser` name becomes code. */
const Parsers: Record<Parser, (Input: Input) => Fragment> = {
	CargoVersion,
	YamlVersion,
	VersionFile,
	ChangelogHead,
	ChangelogReleases,
	PluginManifest,
	TomlKeys,
	ModulePin,
	ReadmeStudy,
	ReadmeBenchmark,
	ReadmeNarrative,
	RegistryTypes,
};

/** Run a named parser over one source. Throws when the source does not parse. */
export function Parse(Parser: Parser, Input: Input): Fragment {
	const Run = Parsers[Parser];

	if (Run === undefined) {
		throw new Error(`[Prepare] "${Parser}" is not a parser. Add it to Scripts/Prepare/Transform.ts.`);
	}

	return Run(Input);
}

/** The provenance every generated file carries, as data. */
export function Provenance(Rows: Row[]): Fragment {
	return {
		By: "Scripts/Prepare.ts",
		From: Rows.map((Row) => `Module/Aphrodite/${Row.Source}`),
		Transform: [...new Set(Rows.map((Row) => Row.Transform))],
		Note: "Generated. Change the source in PlayForm/Aphrodite, push it, then advance the Module/Aphrodite pin - never this file.",
	};
}

/**
 * The provenance header for a text destination, in that format's comment
 * syntax. A JSON destination carries the same facts as a `_Generated` key
 * instead (see `Provenance`), because JSON has no comments.
 */
export function Comment(Destination: string, Rows: Row[]): string {
	const Line = Rows.map((Row) => `Module/Aphrodite/${Row.Source}`).join(", ");
	const Body = `Generated by Scripts/Prepare.ts from ${Line}. Do not edit: change the source in PlayForm/Aphrodite, push it, then advance the Module/Aphrodite pin.`;

	switch (true) {
		case Destination.endsWith(".md"):
			return `<!-- ${Body} -->\n\n`;
		case Destination.endsWith(".mmd"):
			return `%% ${Body}\n`;
		default:
			return `# ${Body}\n`;
	}
}
