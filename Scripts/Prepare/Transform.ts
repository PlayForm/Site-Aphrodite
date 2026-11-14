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
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import type { Parser, Row } from "./Manifest.ts";

/** Read a module file as LF text, so a CRLF checkout parses like an LF one. */
function Read(Path: string): string {
	return readFileSync(Path, "utf8").replace(/\r\n/g, "\n");
}

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

// ---------------------------------------------------------------------------
// THE REFERENCE SURFACE
//
// The pages that document the shipped product - tools, hooks, config keys,
// crates - are generated from the module's own declarations. Four parsers
// below read four kinds of machine-readable source, and every one of them
// throws rather than returning a short list: a page that silently renders
// eleven of thirteen tools is the failure this whole surface exists to
// prevent.
// ---------------------------------------------------------------------------

/**
 * A Rust source, lexed: every string literal is replaced by a `\u0001<id>\u0001`
 * placeholder and its value collected, so what remains is brace- and
 * colon-structured text in which no literal can hide a brace, a colon or a
 * newline. Everything below reads the clean form and resolves placeholders.
 *
 * Rust's line-continuation rule is honoured (`\` at end of line drops the
 * newline and the next line's leading whitespace), because every schema
 * description in `schemas.rs` is written that way.
 */
function RustLex(Text: string): { Clean: string; Values: string[] } {
	const Values: string[] = [];
	const Escapes: Record<string, string> = { n: "\n", t: "\t", r: "\r", '"': '"', "\\": "\\", "0": "\0" };

	let Clean = "";
	let Index = 0;

	while (Index < Text.length) {
		if (Text[Index] !== '"') {
			Clean += Text[Index];
			Index += 1;
			continue;
		}

		let Value = "";
		let Cursor = Index + 1;

		while (Cursor < Text.length) {
			const Char = Text[Cursor];

			if (Char === "\\") {
				const Next = Text[Cursor + 1] ?? "";

				// A line continuation: drop the newline and the next line's indent.
				if (Next === "\n" || (Next === "\r" && Text[Cursor + 2] === "\n")) {
					Cursor += Next === "\n" ? 2 : 3;

					while (Cursor < Text.length && (Text[Cursor] === " " || Text[Cursor] === "\t")) Cursor += 1;

					continue;
				}

				Value += Escapes[Next] ?? Next;
				Cursor += 2;
				continue;
			}

			if (Char === '"') {
				Cursor += 1;
				break;
			}

			Value += Char;
			Cursor += 1;
		}

		Values.push(Value);
		Clean += `\u0001${Values.length - 1}\u0001`;
		Index = Cursor;
	}

	return { Clean, Values };
}

/** The placeholder that starts at `Index` in a lexed string, or null. */
function Placeholder(Clean: string, Index: number): { Id: number; End: number } | null {
	const Match = /^\u0001(\d+)\u0001/.exec(Clean.slice(Index, Index + 14));

	return Match === null ? null : { Id: Number(Match[1]), End: Index + Match[0].length };
}

/** The index of the bracket that closes the one at `Open`, or -1. */
function Closing(Clean: string, Open: number): number {
	let Depth = 0;

	for (let Index = Open; Index < Clean.length; Index += 1) {
		const Char = Clean[Index];

		if (Char === "{" || Char === "[") Depth += 1;
		else if (Char === "}" || Char === "]") {
			Depth -= 1;

			if (Depth === 0) return Index;
		}
	}

	return -1;
}

/** Skip whitespace from `Index`; return the first non-space index. */
function Skip(Clean: string, Index: number): number {
	let Cursor = Index;

	while (Cursor < Clean.length && /\s/.test(Clean[Cursor] ?? "")) Cursor += 1;

	return Cursor;
}

/**
 * One `"key": value` pair in a lexed string.
 *
 * `Value` is the placeholder id of the value when the value is a string, and
 * -1 otherwise (a number, a bool, a nested object); `ValueAt` is always the
 * index of the value, so a caller can brace-match a nested object from it.
 */
interface Pair {
	Key: string;
	Value: string | null;
	/** The value as text: the literal for a string, the token for anything else. */
	Raw: string;
	ValueAt: number;
	Depth: number;
}

/** Every `"key": value` pair in `Clean`, with the nesting depth of the key. */
function AllPairs(Clean: string, Values: string[]): Pair[] {
	const Found: Pair[] = [];

	let Depth = 0;
	let Index = 0;

	while (Index < Clean.length) {
		const Char = Clean[Index];

		if (Char === "{" || Char === "[") {
			Depth += 1;
			Index += 1;
			continue;
		}

		if (Char === "}" || Char === "]") {
			Depth -= 1;
			Index += 1;
			continue;
		}

		const Key = Placeholder(Clean, Index);

		if (Key === null) {
			Index += 1;
			continue;
		}

		const Colon = Skip(Clean, Key.End);

		if (Clean[Colon] === ":") {
			const ValueAt = Skip(Clean, Colon + 1);
			const Value = Placeholder(Clean, ValueAt);

			Found.push({
				Key: Values[Key.Id] ?? "",
				Value: Value === null ? null : (Values[Value.Id] ?? ""),
				Raw: Value === null ? Raw(Clean, ValueAt) : (Values[Value.Id] ?? ""),
				ValueAt,
				Depth,
			});
		}

		Index = Key.End;
	}

	return Found;
}

/** A non-string value's literal text (`1024`, `true`, `null`), up to its delimiter. */
function Raw(Clean: string, At: number): string {
	const Match = /^[^,\]\}\s]+/.exec(Clean.slice(At, At + 64));

	return Match?.[0] ?? "";
}

/** The first pair named `Key` at exactly `Depth`, or undefined. */
function Pair(Pairs: Pair[], Key: string, Depth: number): Pair | undefined {
	return Pairs.find((Candidate) => Candidate.Key === Key && Candidate.Depth === Depth);
}

/** A JSON-schema constraint list (`enum`, `required`) as plain strings. */
function ArrayOf(Clean: string, Values: string[], At: number): string[] {
	if (Clean[At] !== "[") return [];

	const Close = Closing(Clean, At);

	if (Close === -1) return [];

	const Found: string[] = [];

	for (let Index = At; Index < Close; Index += 1) {
		const Value = Placeholder(Clean, Index);

		if (Value === null) continue;

		Found.push(Values[Value.Id] ?? "");
		Index = Value.End - 1;
	}

	return Found;
}

/** One tool parameter, in the shape the /tools/ page renders. */
interface ToolParameter {
	Name: string;
	Type: string;
	Required: boolean;
	Description: string;
}

/**
 * The tool schemas: `crates/aphrodite-hermes/src/schemas.rs`.
 *
 * One block per `fn schema_<name>()`, each a single `json!({...})` literal.
 * The parser reads the block's `name`, its `description` (line continuations
 * already flattened by `RustLex`) and every property of its `parameters`
 * object, so a parameter the code declares cannot be missing from the site
 * and a parameter the site shows cannot be absent from the code.
 */
function ToolSchemas({ Text, Source }: Input): Fragment {
	const { Clean, Values } = RustLex(Text);
	const Heads = [...Clean.matchAll(/fn\s+schema_[A-Za-z0-9_]+\s*\(/g)];
	const Tools: { Name: string; Description: string; Parameters: ToolParameter[] }[] = [];

	Heads.forEach((Head, Index) => {
		const Start = Head.index ?? 0;
		const End = Heads[Index + 1]?.index ?? Clean.length;
		const Slice = Clean.slice(Start, End);
		const Pairs = AllPairs(Slice, Values);

		// The root object is the one `json!({` opens; the function body's own
		// brace sits above it, so the depth is counted rather than assumed.
		const Root = (() => {
			const Json = Slice.indexOf("json!(");
			const Open = Json === -1 ? -1 : Slice.indexOf("{", Json);

			if (Open === -1) return 1;

			let Depth = 0;

			for (let Cursor = 0; Cursor < Open; Cursor += 1) {
				const Char = Slice[Cursor];

				if (Char === "{" || Char === "[") Depth += 1;
				else if (Char === "}" || Char === "]") Depth -= 1;
			}

			return Depth + 1;
		})();

		const Name = Pair(Pairs, "name", Root);
		const Description = Pair(Pairs, "description", Root);

		if (Name?.Value == null || Description?.Value == null) {
			throw new Error(`[Prepare] ${Source}: a schema block carries no name/description pair.`);
		}

		const Parameters: ToolParameter[] = [];
		const Properties = Pairs.find(
			(Candidate) => Candidate.Key === "properties" && Candidate.Depth === Root + 1,
		);
		const Required = Pairs.find(
			(Candidate) => Candidate.Key === "required" && Candidate.Depth === Root + 1,
		);
		const RequiredNames = Required === undefined ? [] : ArrayOf(Slice, Values, Required.ValueAt);

		if (Properties !== undefined) {
			const Close = Closing(Slice, Properties.ValueAt);

			if (Close === -1) {
				throw new Error(`[Prepare] ${Source}: the parameters object of ${Name.Value} is unclosed.`);
			}

			// The property names are the keys one level inside `properties`.
			for (const Candidate of Pairs) {
				if (Candidate.Depth !== Root + 2) continue;
				if (Candidate.ValueAt < Properties.ValueAt || Candidate.ValueAt > Close) continue;
				if (Slice[Candidate.ValueAt] !== "{") continue;

				const PropertyClose = Closing(Slice, Candidate.ValueAt);
				const Fields = Pairs.filter(
					(Field) =>
						Field.Depth === Root + 3 &&
						Field.ValueAt > Candidate.ValueAt &&
						Field.ValueAt < PropertyClose,
				);
				const Field = (Key: string): Pair | undefined => Fields.find((Entry) => Entry.Key === Key);

				const Type = Field("type")?.Value ?? "string";
				const Enum = Field("enum");
				const Pattern = Field("pattern")?.Value;
				const Minimum = Field("minLength");
				const Default = Field("default");

				const Gloss = [
					Type,
					Enum === undefined ? null : `enum: ${ArrayOf(Slice, Values, Enum.ValueAt).join(" | ")}`,
					Pattern == null ? null : `pattern ${Pattern}`,
					Minimum === undefined ? null : `minLength ${Minimum.Raw}`,
					Default === undefined ? null : `default ${Default.Raw}`,
				].filter((Part): Part is string => Part !== null && Part !== "");

				Parameters.push({
					Name: Candidate.Key,
					Type: Gloss.join(" · "),
					Required: RequiredNames.includes(Candidate.Key),
					Description: Field("description")?.Value ?? "",
				});
			}
		}

		Tools.push({ Name: Name.Value, Description: Description.Value, Parameters });
	});

	if (Tools.length === 0) {
		throw new Error(`[Prepare] ${Source} carries no \`fn schema_*\` block; the shape moved.`);
	}

	return { Tools };
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
		// The two readings the page's prose needs beside the tax: how many times
		// over the tax would have cost to pay for every output again, and how many
		// sessions the ledger counts as having saved nothing.
		TaxFactor: Math.round(Numeric(TokensSaved) / Numeric(TaxTokens)),
		SessionsUnsaved: String(
			Number(Sessions) - Number(Row("Sessions that saved anything").replace(/\s*\/\s*\d+$/, "")),
		),
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
		Savings: `${Match[4]!}×`,
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
		Ratio: `${Match[2]!}×`,
		Percent: Math.min(100, Number(Match[2]!)),
	}));

	if (RealWorld.length === 0) {
		throw new Error(`[Prepare] ${Source} carries no real-world per-output row (\`type\` | **N×**).`);
	}

	return {
		Ceiling: `${Head[1]!}×`,
		Overall: `${Head[2]!}×`,
		CorpusIn: `${Corpus[1]!} KB`,
		CorpusOut: `${Corpus[2]!} B`,
		Median: `${Need(/\*\*Median: (\d+)× fewer tokens/, Flat, "the median ratio", Source)[1]!}×`,
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
	const Flat = Flatten(Text);

	return {
		CatalogTypes,
		Tiers,
		CodeMultiplier: Code?.Multiplier ?? null,
		CodeMultiplierKey: "code_multiplier",
		// The three costs the pages state in prose: what the agent reads instead
		// of the output, what the marker itself costs, and what the compress step
		// is allowed to spend.
		PreviewTokens: `${Need(/The agent sees (~\d+) tokens of metadata/, Flat, "the preview's token cost", Source)[1]!} tok`,
		MarkerTokens: `${Need(/orig tokens -> (~\d+)-tok marker/, Flat, "the marker's token cost", Source)[1]!} tok`,
		CompressStep: Need(/whole compress step (sub-millisecond)/, Flat, "the compress step's budget", Source)[1]!,
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

// ---------------------------------------------------------------------------
// THE CONFIGURATION SURFACE
//
// One record per key, joined from the two files that both declare it: the
// shipped `aphrodite.toml.example` (the value a user actually gets, plus the
// per-key annotation that says which parser reads it and whether it
// hot-reloads) and `docs/config/aphrodite-toml.md` (the compiled default, the
// env override, and the one-line meaning).
//
// A key in either file is a key on the site: the join is a UNION, never an
// intersection, so neither source can quietly shrink the page.
// ---------------------------------------------------------------------------

/** A markdown table: its header cells, its rows, and the heading above it. */
interface Table {
	Heading: string;
	Head: string[];
	Rows: string[][];
}

/** Split a table row on unescaped pipes. */
function Cells(Line: string): string[] {
	const Trimmed = Line.trim().replace(/^\|/, "").replace(/\|$/, "");
	const Found: string[] = [];

	let Cell = "";

	for (let Index = 0; Index < Trimmed.length; Index += 1) {
		const Char = Trimmed[Index];

		if (Char === "\\" && Trimmed[Index + 1] === "|") {
			Cell += "|";
			Index += 1;
			continue;
		}

		if (Char === "|") {
			Found.push(Cell.trim());
			Cell = "";
			continue;
		}

		Cell += Char;
	}

	Found.push(Cell.trim());

	// Backticks are markdown emphasis, never part of a value.
	return Found.map((Entry) => Entry.replace(/`/g, "").trim());
}

/** Every table in a markdown document, with the nearest `##` heading above it. */
function MarkdownTables(Text: string): Table[] {
	const Lines = Text.split("\n");
	const Tables: Table[] = [];

	let Heading = "";

	for (let Index = 0; Index < Lines.length; Index += 1) {
		const Line = Lines[Index] ?? "";

		const Head = Line.match(/^##+\s+(.*)$/);

		if (Head !== null) {
			Heading = (Head[1] ?? "").replace(/`/g, "").trim();
			continue;
		}

		if (!Line.trimStart().startsWith("|")) continue;

		const Next = Lines[Index + 1] ?? "";

		if (!/^\s*\|[\s:|-]+\|\s*$/.test(Next)) continue;

		const Rows: string[][] = [];

		let Cursor = Index + 2;

		while (Cursor < Lines.length && (Lines[Cursor] ?? "").trimStart().startsWith("|")) {
			Rows.push(Cells(Lines[Cursor] ?? ""));
			Cursor += 1;
		}

		Tables.push({ Heading, Head: Cells(Line), Rows });
		Index = Cursor - 1;
	}

	return Tables;
}

/** The doc's own gloss for a value: no trailing period, first letter kept. */
function Gloss(Text: string): string {
	return Text.replace(/\s+/g, " ").trim().replace(/\.$/, "");
}

/** A TOML scalar's type, as the config table's TYPE column reads it. */
function ConfigType(Value: string, Meaning: string): string {
	const Lower = Meaning.toLowerCase();

	if (/^(true|false)$/.test(Value)) return "bool";
	if (Value.startsWith("[")) return "array of strings";
	if (Value.startsWith('"')) return "string";
	if (/^-?[0-9]+\.[0-9]+$/.test(Value)) return "float";

	if (/^-?[0-9]+$/.test(Value)) {
		switch (true) {
			case Lower.includes("byte"):
				return "int (bytes)";
			case Lower.includes("second"):
				return "int (seconds)";
			case Lower.includes("token"):
				return "int (tokens)";
			case Lower.includes("turn"):
				return "int (turns)";
			case Lower.includes("row"):
				return "int (rows)";
			case Lower.includes("percent") || Lower.includes("%"):
				return "int (%)";
			default:
				return "int";
		}
	}

	// A key with no shipped value still has a type: the doc's meaning says what
	// the value counts. `max_request_body_size` ships unset and is still bytes.
	switch (true) {
		case Lower.includes("byte"):
			return "int (bytes)";
		case Lower.includes("second"):
			return "int (seconds)";
		case Lower.includes("turn"):
			return "int (turns)";
		case Lower.includes("row"):
			return "int (rows)";
		default:
			return "string";
	}
}

/**
 * The hot-reload set, transcribed from `docs/config/aphrodite-toml.md`
 * section "Hot-reload" and the shipped example's own header comment. The two
 * name the same fields: the four `[compression]` thresholds (annotated
 * "(hot-reloads)" per key in the example) plus `auto_expand` /
 * `auto_expand_limit`, `[previews] preview_max_chars`, the process-global
 * marker format/hint, and the `ccr_marker_hint` knob.
 *
 * A key that gains a hot-reload path upstream must gain its annotation in
 * `aphrodite.toml.example` first; this set only covers the ones the docs
 * describe in prose rather than per key.
 */
const Hot = new Set([
	"auto_expand",
	"auto_expand_limit",
	"preview_max_chars",
	"ccr_marker_hint",
	"marker.format / marker.hint",
]);

/** One annotated `key = value` line of the shipped example. */
interface ExampleKey {
	Section: string;
	Key: string;
	Value: string;
	Comment: string;
}

/** The shipped example, key by key, with its trailing annotation. */
function ExampleKeys(Text: string): ExampleKey[] {
	const Found: ExampleKey[] = [];

	let Section = "";
	let InBlockString = false;

	for (const Line of Text.split("\n")) {
		// `session_inject = """` opens a multi-line string whose body is text,
		// not TOML; its lines must not be read as keys.
		if (InBlockString) {
			if (Line.includes('"""')) InBlockString = false;
			continue;
		}

		const Head = Line.match(/^\s*\[\[?([^\]]+)\]\]?\s*(?:#.*)?$/);

		if (Head !== null) {
			Section = Head[1].trim();
			continue;
		}

		const Pair = Line.match(/^([A-Za-z0-9_.-]+)\s*=\s*(.+)$/);

		if (Pair === null) continue;

		const Raw = Pair[2].trim();

		if (Raw.startsWith('"""')) {
			if (!Raw.slice(3).includes('"""')) InBlockString = true;

			Found.push({ Section, Key: Pair[1], Value: '"""', Comment: "" });
			continue;
		}

		// A `#` inside a quoted value is not a comment.
		const CommentAt = (() => {
			if (Raw.startsWith('"') || Raw.startsWith("'")) {
				const Quote = Raw[0];
				const Close = Raw.indexOf(Quote, 1);

				return Close === -1 ? -1 : Raw.indexOf("#", Close);
			}

			return Raw.indexOf("#");
		})();

		Found.push({
			Section,
			Key: Pair[1],
			Value: (CommentAt === -1 ? Raw : Raw.slice(0, CommentAt)).trim(),
			Comment: CommentAt === -1 ? "" : Raw.slice(CommentAt + 1).trim(),
		});
	}

	return Found;
}

/** Strip the TOML quoting from a value so two spellings of one value compare. */
function Bare(Value: string): string {
	return Value.trim().replace(/^["']|["']$/g, "");
}

/**
 * The config key records: every key either source declares, with the type,
 * the default, the env override, which parser reads it, and when a change
 * takes effect.
 *
 * `Source` is `aphrodite.toml.example`; the row's Note names the second file
 * this parser joins, because a record built from one of the two would be
 * wrong in exactly the ways the two files differ.
 */
function ConfigSchema({ Text, Source, Module }: Input): Fragment {
	const ExamplePath = join(Module, "aphrodite.toml.example");

	if (!existsSync(ExamplePath)) {
		throw new Error(
			`[Prepare] aphrodite.toml.example is missing from ${Module}. ${Source} documents the schema, but the shipped values live in the example.`,
		);
	}

	const Doc = MarkdownTables(Text);
	const Example = ExampleKeys(Read(ExamplePath));

	/** The doc's row for a key, flattened into the fields the record needs. */
	const Rows = new Map<
		string,
		{ Section: string; Meaning: string; Env?: string; Compiled?: string; Shipped?: string; Reader: string }
	>();

	for (const Table of Doc) {
		const Head = Table.Head.join("|");
		const Column = (Row: string[], Name: string): string | undefined => {
			const At = Table.Head.findIndex((Cell) => Cell.toLowerCase() === Name.toLowerCase());

			return At === -1 ? undefined : (Row[At] ?? "").trim() || undefined;
		};

		// The proxies table: Field | Meaning | Default.
		if (Head === "Field|Meaning|Default") {
			for (const Row of Table.Rows) {
				const Key = Column(Row, "Field");

				if (Key === undefined) continue;

				for (const Name of Key.split(" / ")) {
					Rows.set(Name.trim(), {
						Section: "[[proxies]]",
						Meaning: Gloss(Column(Row, "Meaning") ?? ""),
						Compiled: Column(Row, "Default"),
						Reader: "proxy",
					});
				}
			}

			continue;
		}

		// The compression tables: two of them, one per consumer.
		if (Head === "Field|Meaning|Env override|Compiled default|Shipped example") {
			for (const Row of Table.Rows) {
				const Key = Column(Row, "Field");

				if (Key === undefined) continue;

				Rows.set(Key, {
					Section: "[compression]",
					Meaning: Gloss(Column(Row, "Meaning") ?? ""),
					Env: Column(Row, "Env override"),
					Compiled: Column(Row, "Compiled default"),
					Shipped: Column(Row, "Shipped example"),
					Reader: "proxy",
				});
			}

			continue;
		}

		if (Head === "Field|Meaning|Env override|Default") {
			for (const Row of Table.Rows) {
				const Key = Column(Row, "Field");

				if (Key === undefined) continue;

				Rows.set(Key, {
					Section: "[compression]",
					Meaning: Gloss(Column(Row, "Meaning") ?? ""),
					Env: Column(Row, "Env override"),
					Compiled: Column(Row, "Default"),
					Reader: "dylib",
				});
			}

			continue;
		}

		// [previews] and [prompts] share one table, and the section is a column.
		if (Head === "Section|Field|Meaning|Status") {
			for (const Row of Table.Rows) {
				const Key = Column(Row, "Field");

				if (Key === undefined) continue;

				const Status = Column(Row, "Status") ?? "";

				Rows.set(Key, {
					Section: Column(Row, "Section") ?? "",
					Meaning: Gloss(Column(Row, "Meaning") ?? ""),
					Reader: /reserved|no reader/i.test(Status) ? "none" : "dylib",
					Compiled: /reserved|no reader/i.test(Status) ? undefined : undefined,
				});
			}

			continue;
		}

		// [flow]: Field | Meaning | Env override | Default | Shipped example.
		if (Table.Heading === "[flow]") {
			for (const Row of Table.Rows) {
				const Key = Column(Row, "Field");

				if (Key === undefined) continue;

				Rows.set(Key, {
					Section: "[flow]",
					Meaning: Gloss(Column(Row, "Meaning") ?? ""),
					Env: Column(Row, "Env override"),
					Compiled: Column(Row, "Default"),
					Shipped: Column(Row, "Shipped example"),
					Reader: "dylib",
				});
			}

			continue;
		}

		// [directives]: Field | Meaning.
		if (Table.Heading === "[directives]") {
			for (const Row of Table.Rows) {
				const Key = Column(Row, "Field");

				if (Key === undefined) continue;

				Rows.set(Key, {
					Section: "[directives]",
					Meaning: Gloss(Column(Row, "Meaning") ?? ""),
					Reader: "dylib",
				});
			}

			continue;
		}

		// [templates.*]: Block | Purpose, one row per block.
		if (Head === "Block|Purpose") {
			const Names: Record<string, string> = {
				"[templates.preview.<family>.<ctype>]": "preview.<family>.<ctype>",
				"[templates.marker]": "marker.format / marker.hint",
				"[templates.prompts]": "prompts.<name>",
				"[templates.reverse]": "reverse.<ctype>",
			};

			for (const Row of Table.Rows) {
				const Block = Column(Row, "Block");

				if (Block === undefined) continue;

				const Key = Names[Block] ?? Block.replace(/^\[templates\.?|]$/g, "");

				Rows.set(Key, {
					Section: "[templates]",
					Meaning: Gloss(Column(Row, "Purpose") ?? ""),
					Reader: "both",
				});
			}
		}
	}

	// The keys the doc names only in prose, under "Parsed for schema
	// compatibility, echoed by /reload for visibility (no live effect)". They
	// are rows in every sense but their layout; the alternative is a page that
	// documents two of the three and calls the third absent.
	// The sentence wraps across lines in the source, so the capture runs to the
	// end of its paragraph rather than to the end of its line.
	const Prose = /Parsed for schema compatibility[^:]*:\s*([\s\S]*?)(?:\n\s*\n|\n##|$)/.exec(Text);

	for (const Name of (Prose?.[1] ?? "").match(/`([a-z0-9_]+)`/g) ?? []) {
		const Key = Name.replace(/`/g, "");

		// The paragraph names a tool (`aphrodite_prefetch`) alongside the keys;
		// a tool is not a key, and the schema source already declares it.
		if (Key.startsWith("aphrodite_")) continue;

		if (!Rows.has(Key)) {
			Rows.set(Key, { Section: "[compression]", Meaning: "", Reader: "none" });
		}
	}

	// The union: a key either file declares is a record.
	const Keys = new Set<string>([...Rows.keys(), ...Example.map((Entry) => Entry.Key)]);
	const Records = [...Keys].map((Key) => {
		const Row = Rows.get(Key);
		const Shipped = Example.find((Entry) => Entry.Key === Key);

		const Compiled = Row?.Compiled === undefined ? undefined : Bare(Row.Compiled);
		const Value = Shipped?.Value;

		// The doc states some defaults as "1024 (shipped example: 256)" - the
		// pair in one cell. Split it, so the record carries the compiled default
		// and the shipped value in the two fields the page prints separately.
		const Split = /^(.*?)\s*\(shipped example:?\s*([^)]+)\)$/.exec(Compiled ?? "");
		const Base = Split === null ? Compiled : Split[1];
		const ShippedCell = Split === null ? undefined : Split[2];

		const Meaning = Row?.Meaning || Gloss(Shipped?.Comment ?? "");

		const Reader = Row?.Reader ?? (/UNWIRED/i.test(Shipped?.Comment ?? "") ? "none" : "proxy");

		const Live = (() => {
			if (/UNWIRED/i.test(Shipped?.Comment ?? "")) return "unwired";
			if (/hot-reload/i.test(Shipped?.Comment ?? "")) return "hot";
			if (Hot.has(Key)) return "hot";
			if (Reader === "none") return "unwired";
			if (Reader === "proxy") return "startup";

			return "load";
		})();

		const Default = (() => {
			const ExampleValue = Shipped === undefined ? undefined : Bare(Value ?? "");
			const ShippedValue =
				ExampleValue ?? (ShippedCell === undefined ? undefined : Bare(ShippedCell));

			// "Compiled (example X)" is the doc's own convention, but only for a
			// compiled default that IS a value. A prose default ("the listen
			// address") already says what it is; appending the shipped value
			// would read as a contradiction rather than a pair.
			const IsValue = Base !== undefined && /^(true|false|-?[0-9]|")/.test(Base);

			switch (true) {
				case IsValue && ShippedValue !== undefined && Bare(Base) !== ShippedValue:
					return `${Base} (example ${ShippedValue})`;
				case Base !== undefined && !/^none/i.test(Base):
					return Base;
				case ShippedValue !== undefined:
					return ShippedValue;
				default:
					return "none";
			}
		})();

		return {
			Key,
			Section: Row?.Section ?? Shipped?.Section ?? "",
			Type: ConfigType(Value ?? Base ?? ShippedCell ?? "", `${Meaning} ${Shipped?.Comment ?? ""}`),
			Default,
			...(Row?.Env === undefined ? {} : { Env: Row.Env }),
			Reader,
			Live,
			Effect: Meaning === "" ? `Parses; see aphrodite.toml.example` : Meaning,
			// The annotation is the DETAIL only when the doc has its own gloss;
			// otherwise the annotation already IS the effect, and printing it
			// twice would read as two facts.
			...(Row?.Meaning === undefined ||
			Row.Meaning === "" ||
			Shipped?.Comment === undefined ||
			Shipped.Comment === ""
				? {}
				: { Detail: Gloss(Shipped.Comment) }),
		};
	});

	if (Records.length === 0) {
		throw new Error(`[Prepare] ${Source} and docs/config/aphrodite-toml.md yielded no config key.`);
	}

	return { Records };
}

/** One environment variable, in the shape the /config/ page renders. */
interface EnvVarRecord {
	Variable: string;
	Surface: string;
	Precedence?: string;
	Default?: string;
	Effect: string;
}

/**
 * The environment variables: `docs/config/env-vars.md`.
 *
 * Every table row is a variable; the `##` heading above the table is the
 * surface that reads it. The two inline lists at the bottom - "Documented but
 * currently inactive" and "Build-time metadata" - are variables too, and they
 * are read as such: a variable with no reader is the one a reader most needs
 * told about.
 */
function EnvVars({ Text, Source }: Input): Fragment {
	const Tables = MarkdownTables(Text);
	const Variables: EnvVarRecord[] = [];

	const Seen = new Set<string>();

	for (const Table of Tables) {
		const At = (Name: string): number =>
			Table.Head.findIndex((Cell) => Cell.toLowerCase() === Name.toLowerCase());

		const VariableAt = At("Variable");

		if (VariableAt === -1) continue;

		for (const Row of Table.Rows) {
			const Names = (Row[VariableAt] ?? "").split(" / ");

			for (const Name of Names) {
				const Variable = Name.trim();

				if (Variable === "" || Seen.has(Variable)) continue;

				Seen.add(Variable);

				Variables.push({
					Variable,
					Surface: Table.Heading,
					...(Row[At("Precedence")] ? { Precedence: Row[At("Precedence")] } : {}),
					...(Row[At("Default")] || Row[At("Default (no override)")]
						? { Default: Row[At("Default")] ?? Row[At("Default (no override)")] }
						: {}),
					Effect: Gloss(Row[At("Effect")] ?? ""),
				});
			}
		}
	}

	// The two inline lists: names only, so the effect is the section's own.
	const Inline = [
		{ Heading: "Documented but currently inactive", Effect: "No reader anywhere - setting it is a silent no-op" },
		{ Heading: "Build-time metadata", Effect: "Read during the build, not at runtime - exporting it has no effect on a running proxy" },
	];

	for (const Section of Inline) {
		const Start = Text.indexOf(`## ${Section.Heading}`);

		if (Start === -1) continue;

		const Rest = Text.slice(Start + 3);
		const End = Rest.indexOf("\n## ");
		const Body = End === -1 ? Rest : Rest.slice(0, End);

		for (const Match of Body.matchAll(/`([A-Z_][A-Z0-9_]*)`/g)) {
			const Variable = Match[1] ?? "";

			if (Variable === "" || Seen.has(Variable)) continue;

			Seen.add(Variable);
			Variables.push({ Variable, Surface: Section.Heading, Effect: Section.Effect });
		}
	}

	if (Variables.length === 0) {
		throw new Error(`[Prepare] ${Source} yielded no environment variable; the shape moved.`);
	}

	return { Variables };
}

// ---------------------------------------------------------------------------
// THE CRATE SURFACE
// ---------------------------------------------------------------------------

/**
 * The workspace's published crates: the members `Cargo.toml` declares, plus
 * the vendored fork the binary links.
 *
 * The row's Source is the workspace manifest, which is what declares the
 * members; each member's own manifest is read from the module root the same
 * way, so adding a crate to the workspace adds it to the site with no other
 * edit. A member that declares no version or description is an error, not a
 * blank row.
 */
function CargoWorkspace({ Text, Source, Module }: Input): Fragment {
	const Members = (() => {
		const Block = Text.match(/^members\s*=\s*\[([\s\S]*?)\]/m)?.[1];

		if (Block === undefined) {
			throw new Error(`[Prepare] ${Source} declares no \`members = [...]\` list.`);
		}

		return [...Block.matchAll(/"([^"]+)"/g)].map((Match) => Match[1] ?? "").filter(Boolean);
	})();

	const Vendored = "vendor/headroom/crates/headroom-core/Cargo.toml";

	const Read1 = (Path: string, Vendored: boolean) => {
		const Manifest = join(Module, Path);

		if (!existsSync(Manifest)) {
			throw new Error(`[Prepare] ${Path} is missing from ${Module}; ${Source} declares it as a workspace crate.`);
		}

		const Body = Read(Manifest);
		const Name = Body.match(/^name\s*=\s*"([^"]+)"/m)?.[1];
		const Version = Body.match(/^version\s*=\s*"([^"]+)"/m)?.[1];
		const Description = Body.match(/^description\s*=\s*"([^"]+)"/m)?.[1];

		if (Name === undefined || Version === undefined || Description === undefined) {
			throw new Error(`[Prepare] ${Path} carries no name/version/description triple.`);
		}

		return { Name, Version, Description, Path, Vendored };
	};

	const Crates = [
		...Members.map((Member) => Read1(`${Member}/Cargo.toml`, false)),
		...(existsSync(join(Module, Vendored)) ? [Read1(Vendored, true)] : []),
	];

	return { Crates };
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
	ToolSchemas,
	ConfigSchema,
	EnvVars,
	CargoWorkspace,
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
