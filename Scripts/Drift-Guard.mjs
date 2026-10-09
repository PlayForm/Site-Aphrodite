// Drift-Guard.mjs - the content-integrity check: does what the site RENDERS
// still match what the repo IS? Re-derives every dynamic figure the site's
// pages and diagram sources carry, from the primary sources, and compares:
//
//   - the version pairings: the README's release badge vs the binary crate's
//     Cargo.toml version, the README's plugin badge vs plugin.yaml's version,
//     and the CHANGELOG head carrying both;
//   - the threshold multipliers: the README's Code tier row vs the
//     code_multiplier default in aphrodite.toml.example and the shipped
//     template, and vs the site's own docs (content-types, lifecycle) - the
//     exact class of drift that once shipped "x4" against a 3.0 config;
//   - the manifest vs the docs: plugin.yaml's provides_hooks (6) and
//     provides_tools (13) vs the tool-relay doc's registry table, and the
//     marker constant (<<<CCR:...>>>) present in the README and the
//     marker-format doc;
//   - the headline figures: every Nx multiplier token a page carries
//     (610x, 132x, ...) must appear in the root README - an invented or
//     drifted figure fails;
//   - the showcase lines: the preview shapes the pages quote must exist
//     verbatim in the docs' preview-form catalog (no invented samples);
//   - the diagram freshness: every .mmd source has an .svg at least as new,
//     so a stale diagram can never claim a stale implementation.
//
// Run with `pnpm run Drift` (in Site/) - CI-ready: exit 0 on pass, 1 on any
// drift, with a per-check pass/fail line and the full check count.

import { readFile, stat, readdir } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const Here = dirname(fileURLToPath(import.meta.url));
const SiteRoot = dirname(Here);
const Root = dirname(SiteRoot);
const Docs = join(SiteRoot, "Source/Content/Docs");

let Failures = 0;
let Checks = 0;
function Check(Label, Expected, Actual) {
	Checks += 1;
	const Ok = JSON.stringify(Expected) === JSON.stringify(Actual);
	if (!Ok) Failures += 1;
	console.log(
		`${Ok ? "PASS" : "FAIL"}  ${Label}${Ok ? "" : `  (expected ${JSON.stringify(Expected)}, got ${JSON.stringify(Actual)})`}`,
	);
}

const Read = (Path) => readFile(Path, "utf8");
const CargoVersion = (Text) => Text.match(/^version\s*=\s*"([^"]+)"/m)?.[1] ?? null;
const YamlList = (Text, Key) => {
	const Match = Text.match(new RegExp(`^${Key}:\\n((?:\\s{2}- .+\\n)+)`, "m"));
	return Match ? Match[1].match(/- (.+)/g).map((Line) => Line.slice(2)) : null;
};

// --- The primaries ---
// Hermetic guard: the standalone deploy repo (PlayForm/Site-Aphrodite) does
// not carry the monorepo primaries (its own README.md exists, so the guard
// keys on a monorepo-only marker) - the guard runs where they exist and
// passes trivially otherwise, so prepublishOnly never fails the deploy.
const HasPrimaries = await stat(join(Root, "plugins/aphrodite/plugin.yaml")).then(
	() => true,
	() => false,
);

switch (HasPrimaries) {
	case false:
		console.log("Drift: monorepo primaries absent (standalone deploy) - skipped");

		process.exit(0);
}

const Readme = await Read(join(Root, "README.md"));
const PluginYaml = await Read(join(Root, "plugins/aphrodite/plugin.yaml"));
const Cargo = await Read(join(Root, "crates/aphrodite/Cargo.toml"));
const Changelog = await Read(join(Root, "CHANGELOG.md"));
const TomlExample = await Read(join(Root, "aphrodite.toml.example"));
const TomlTemplate = await Read(join(Root, "crates/aphrodite/templates/aphrodite.toml"));

// --- 1. The version pairings ---
const BinaryVersion = CargoVersion(Cargo);
const PluginVersion = PluginYaml.match(/^version:\s*(\S+)/m)?.[1] ?? null;
Check(
	"README release badge = the binary crate's Cargo.toml version",
	`[![release](https://img.shields.io/static/v1?label=release&message=v${BinaryVersion}&color=blue)]`,
	Readme.match(/\[!\[release\][^\n]+\]/)?.[0] ?? null,
);
Check(
	"README plugin badge = plugin.yaml's version",
	`[![plugin](https://img.shields.io/static/v1?label=plugin&message=v${PluginVersion}&color=purple)]`,
	Readme.match(/\[!\[plugin\][^\n]+\]/)?.[0] ?? null,
);
Check(
	"CHANGELOG head carries the binary version",
	true,
	Changelog.slice(0, 2000).includes(BinaryVersion),
);
Check(
	"CHANGELOG head carries the plugin version",
	true,
	Changelog.slice(0, 2000).includes(PluginVersion),
);

// --- 2. The threshold multipliers (the README x4 class of drift) ---
// The README's Code tier row must state the same multiplier the config
// ships as the default, and the site's docs must agree with both.
const CodeMultiplier = TomlExample.match(/^code_multiplier\s*=\s*([\d.]+)/m)?.[1] ?? null;
const TemplateMultiplier = TomlTemplate.match(/^code_multiplier\s*=\s*([\d.]+)/m)?.[1] ?? null;
Check("aphrodite.toml.example code_multiplier = the shipped template's", TemplateMultiplier, CodeMultiplier);
const ReadmeCodeTier = Readme.match(/^\| Code\s*\|[^|]+\|\s*([^|]+?)\s*\|$/m)?.[1] ?? null;
Check("README Code tier multiplier = the config's code_multiplier", CodeMultiplier, ReadmeCodeTier?.replace(/^×/, ""));
const LifecycleDoc = await Read(join(Docs, "ccr/lifecycle.md"));
const TypesDoc = await Read(join(Docs, "classification/content-types.md"));
Check(
	"Site docs lifecycle: Code tier = x code multiplier (default 3.0)",
	true,
	/x code multiplier \(default 3\.0\)/.test(LifecycleDoc),
);
Check(
	"Site docs content-types: the code multiplier defaults to 3.0",
	true,
	/defaults to 3\.0/.test(TypesDoc),
);

// --- 3. The manifest vs the docs ---
const Hooks = YamlList(PluginYaml, "provides_hooks");
const Tools = YamlList(PluginYaml, "provides_tools");
Check("plugin.yaml provides 6 hooks", 6, Hooks?.length ?? null);
const ToolsDoc = await Read(join(Docs, "tool-relay/tools.md"));
const DocTools = [...ToolsDoc.matchAll(/^\|\s*\d+\s*\|\s*`([a-z_]+)`/gm)].map((Match) => Match[1]);
// Order is presentation (the manifest and the doc's numbered table differ);
// the registry is the same 13 names.
Check(
	"tool-relay doc's registry = plugin.yaml's provides_tools (as a set)",
	[...Tools].sort(),
	[...DocTools].sort(),
);
const MarkerConstant = "&lt;&lt;&lt;CCR:hash|type|size&gt;&gt;&gt;".replace("&lt;", "<").replace("&gt;", ">").replace(/&lt;|&gt;/g, (E) => (E === "&lt;" ? "<" : ">"));
Check("README carries the marker constant", true, Readme.includes("<<<CCR:"));
const MarkerDoc = await Read(join(Docs, "ccr/marker-format.md"));
Check("marker-format doc carries the marker constant", true, MarkerDoc.includes(MarkerConstant));

// --- 4. The headline figures ---
// Every Nx token a page carries must appear in the root README or, as the
// secondary figure-primary, the root CHANGELOG.md: an invented or drifted
// figure fails, and a figure both sources drop fails too. The CHANGELOG is the
// primary for figures a page cites directly from it (the history content cites
// CHANGELOG.md anchors, so the unrounded values like 132.82× verify against
// the CHANGELOG itself - the page value must match the cited source).
const PageDir = join(SiteRoot, "Source/pages");
const Walk = async (Base, Out = []) => {
	for (const Entry of await readdir(Base, { withFileTypes: true })) {
		const Path = join(Base, Entry.name);
		if (Entry.isDirectory()) await Walk(Path, Out);
		else Out.push(Path);
	}
	return Out;
};
const Pages = (await readdir(PageDir)).filter((Name) => Name.endsWith(".astro")).map((Name) => join(PageDir, Name));
const FigurePattern = /\b\d+(?:[.,]\d+)?×/g;
for (const Page of Pages) {
	const Text = await Read(Page);
	const Label = relative(PageDir, Page);
	const Figures = new Set(Text.match(FigurePattern) ?? []);
	for (const Figure of Figures) {
		Check(
			`page figure ${Label}: "${Figure}" appears in the README or the CHANGELOG`,
			true,
			Readme.includes(Figure) || Changelog.includes(Figure),
		);
	}
}

// --- 5. The showcase lines ---
// The preview shapes the primary sources define are the only lines a page may
// quote as stream-pane samples. Every such literal a page carries must exist
// verbatim in the corpus (the site's docs, the root README, the root docs
// guides); the corpus itself must still contain the canonical 12 shapes of
// the schemas catalog. Template-literal fragments (${...} in generated
// markup) are not quotes and are skipped - FLAG, never silently fix.
const CorpusDirs = [join(Docs), join(Root, "docs")];
const Corpus = [];
for (const Dir of CorpusDirs) {
	const WalkDocs = async (Base, Out = []) => {
		let Entries = [];
		try {
			Entries = await readdir(Base, { withFileTypes: true });
		} catch {
			return Out;
		}
		for (const Entry of Entries) {
			const Path = join(Base, Entry.name);
			if (Entry.isDirectory()) await WalkDocs(Path, Out);
			else if (Entry.name.endsWith(".md")) Out.push(Path);
		}
		return Out;
	};
	Corpus.push(...(await WalkDocs(Dir)));
}
Corpus.push(join(Root, "README.md"));
const CorpusText = await Promise.all(Corpus.map(async (Path) => [Path, await Read(Path)]));
const Catalog = new Set();
for (const [, Text] of CorpusText) {
	// Not anchored: sources often append commentary after the sample line
	// ("[build:0E 0W 1L]  <- a few tokens...").
	for (const Match of Text.matchAll(/\[[a-z_]+:.*\]/g)) {
		Catalog.add(Match[0].trim());
	}
}
// The injection labels (the [directives:]/[nudge:]/[recall] blocks of
// pre_ll_call) are block prefixes, not preview samples - they are judged
// by the hooks doc, not by the catalog.
const InjectionLabels = /^\[(directives|nudge|recall|aphrodite):/;
Check("preview catalog: at least 12 canonical shapes", true, Catalog.size >= 12);
for (const Page of Pages) {
	const Text = await Read(Page);
	const Label = relative(PageDir, Page);
	for (const Line of Text.split("\n")) {
		for (const Match of Line.matchAll(/\[[a-z_]+:.*\]/g)) {
			const Sample = Match[0];
			if (Sample.includes("${")) continue;
			if (InjectionLabels.test(Sample)) continue;
			const Hit = Catalog.has(Sample.trim());
			Check(`showcase line ${Label}: "${Sample}" is in the corpus`, true, Hit);
		}
	}
}

// --- 6. The diagram freshness ---
const MermaidDir = join(SiteRoot, "Source/Content/Mermaid");
const MermaidFiles = await readdir(MermaidDir);
const Sources = MermaidFiles.filter((Name) => Name.endsWith(".mmd"));
Check("the mermaid directory has diagram sources", true, Sources.length > 0);
const Mtime = async (Path) => (await stat(Path)).mtimeMs;
for (const Source of Sources) {
	const Id = Source.replace(/\.mmd$/, "");
	const SvgPath = join(MermaidDir, `${Id}.svg`);
	let SvgTime = null;
	try {
		SvgTime = await Mtime(SvgPath);
	} catch {
		SvgTime = null;
	}
	Check(`diagram ${Id}: the .svg exists and is at least as new as the .mmd`, true, SvgTime !== null && SvgTime >= (await Mtime(join(MermaidDir, Source))));
}

// --- Verdict ---
console.log(`\n${Checks} checks run.`);
if (Failures > 0) {
	console.error(`DRIFT DETECTED: ${Failures} check(s) failed - the content no longer matches the primaries.`);
	process.exit(1);
} else {
	console.log("All content-integrity checks passed - the rendered values match the primaries.");
}
