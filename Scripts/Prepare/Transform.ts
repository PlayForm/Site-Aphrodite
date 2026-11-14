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
	PluginManifest,
	TomlKeys,
	ModulePin,
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
