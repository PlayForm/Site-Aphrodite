// Prepare/Manifest.ts - the extraction manifest, as DATA.
//
// One row per source path inside `Module/Aphrodite`: where its bytes land in
// the site, and how they become that destination. `Scripts/Prepare.ts` reads
// this table and does nothing the table does not say, so extending the site's
// generated surface is a ROW, never a code change. The next cards add rows;
// they do not add generators.
//
// THE ADDITIVE LAW THIS TABLE ENCODES
//
// - A source file with no row is a GAP in the manifest, not a licence to skip
//   content. Add the row.
// - A Destination is written only by this generator. A file a human edits by
//   hand never appears as a Destination, so generation can never overwrite a
//   hand-written page.
// - `Stage: "Hold"` rows are declared and verified but NOT written. They exist
//   so a tree that is reachable but not yet wired is visible in the table
//   instead of silently absent. Flipping one to `"Emit"` is the extraction
//   card's change, and it is only safe once the site's own improvements to
//   that content have been pushed UP into `PlayForm/Aphrodite` - the sync is
//   bidirectional, so generation over an ahead-of-the-repo copy would truncate
//   the site's work.
// - No row deletes a destination. A file under `Source/Generated/` that this
//   run did not write is REPORTED, never removed: removing it would be the
//   one way a generator could reduce the site.

/** How a row's bytes become its destination. */
export type Transform = "Facts" | "Copy" | "Doc" | "Mermaid";

/** Written by this run (`Emit`), or declared and verified only (`Hold`). */
export type Stage = "Emit" | "Hold";

/** The parser a `Facts` row runs. Implemented in `Scripts/Prepare/Transform.ts`. */
export type Parser =
	| "CargoVersion"
	| "YamlVersion"
	| "VersionFile"
	| "ChangelogHead"
	| "ChangelogReleases"
	| "PluginManifest"
	| "TomlKeys"
	| "ModulePin"
	| "ReadmeStudy"
	| "ReadmeBenchmark"
	| "ReadmeNarrative"
	| "RegistryTypes";

export interface Row {
	/** The source path inside `Module/Aphrodite`. A trailing `/**` means a tree. */
	Source: string;

	/** The destination path inside the site, relative to the Site root. */
	Destination: string;

	/** How the bytes become the destination. */
	Transform: Transform;

	/** The parser a `Facts` row runs. */
	Parser?: Parser;

	/**
	 * The key this row's fragment takes in the destination object. Two rows
	 * may share one destination (the version file has six sources), and the
	 * fragment key is what keeps them apart.
	 */
	Fact?: string;

	/** Written by this run, or declared and verified only. */
	Stage: Stage;

	/** The site surface that reads the destination. */
	Consumer: string;

	/** What a missing source means: a broken build, or a warning. */
	Absent: "Fail" | "Warn";

	/** Why a row is held, or anything else the next reader needs. */
	Note?: string;
}

// The version file: the six primaries the version stamps are composed from.
// `Source/Library/Versions.ts` reads the same files directly today; the
// extraction card repoints it at this file so the site has ONE reader.
const Versions = "Source/Generated/Facts/Versions.json";

// The plugin's public contract: the manifest the hook and tool registries are
// generated from.
const Plugin = "Source/Generated/Facts/Plugin.json";

// Every configuration key with the default the repository ships, from both
// files a reader can find it in: the annotated example and the template
// `aphrodite setup` writes.
const Config = "Source/Generated/Facts/Config.json";

// The pin itself: which commit of the module these bytes came from. Every
// generated file's header names its source path; this file names the tree.
const Pin = "Source/Generated/Module.json";

// The measured study: the 200-session ledger the README carries as a table,
// plus the sensitivity band its confidence note states. The case study's spine
// and the ledger on /benchmarks/ both render from here.
const Study = "Source/Generated/Facts/Study.json";

// The benchmark figures: the corpus headline, the per-type table, the
// real-world per-output table, the latency band and the classification floor.
const Benchmark = "Source/Generated/Facts/Benchmark.json";

// The narrative's other counted claims: how many content types the catalog
// renders, the threshold tiers, and the shipped `code_multiplier`.
const Narrative = "Source/Generated/Facts/Narrative.json";

// The release history, one entry per `## v<version> - <title> (<date>)` header
// in the CHANGELOG. The register on /versions/ is the annotated view of it.
const Releases = "Source/Generated/Facts/Releases.json";

const Manifest: Row[] = [
	// ── The version primaries.
	{
		Source: "crates/aphrodite/Cargo.toml",
		Destination: Versions,
		Transform: "Facts",
		Parser: "CargoVersion",
		Fact: "Binary",
		Stage: "Emit",
		Consumer: "Source/Library/Versions.ts, /versions/",
		Absent: "Fail",
	},
	{
		Source: "crates/aphrodite-hermes/Cargo.toml",
		Destination: Versions,
		Transform: "Facts",
		Parser: "CargoVersion",
		Fact: "Hermes",
		Stage: "Emit",
		Consumer: "Source/Library/Versions.ts, /versions/",
		Absent: "Fail",
	},
	{
		Source: "plugins/aphrodite/plugin.yaml",
		Destination: Versions,
		Transform: "Facts",
		Parser: "YamlVersion",
		Fact: "Plugin",
		Stage: "Emit",
		Consumer: "Source/Library/Versions.ts, the footer stamp, /plugin/",
		Absent: "Fail",
		Note: "A nested submodule: plugins/aphrodite is Aphrodite-Hermes. Absent means the recursive checkout did not run.",
	},
	{
		Source: "plugins/aphrodite/BINARY_VERSION",
		Destination: Versions,
		Transform: "Facts",
		Parser: "VersionFile",
		Fact: "BinaryVersionFile",
		Stage: "Emit",
		Consumer: "/setup/, /plugin/ (the version the downloader pins)",
		Absent: "Fail",
	},
	{
		Source: "vendor/headroom/crates/headroom-core/Cargo.toml",
		Destination: Versions,
		Transform: "Facts",
		Parser: "CargoVersion",
		Fact: "Headroom",
		Stage: "Emit",
		Consumer: "/versions/ (the vendored fork's library version)",
		Absent: "Warn",
		Note: "A nested submodule (vendor/headroom). A missing fork costs one version row, not the build.",
	},
	{
		Source: "CHANGELOG.md",
		Destination: Versions,
		Transform: "Facts",
		Parser: "ChangelogHead",
		Fact: "Changelog",
		Stage: "Emit",
		Consumer: "/versions/ (the release monument), /history/ (the quoted entries)",
		Absent: "Fail",
	},
	// ── The plugin's public contract.
	{
		Source: "plugins/aphrodite/plugin.yaml",
		Destination: Plugin,
		Transform: "Facts",
		Parser: "PluginManifest",
		Fact: "Manifest",
		Stage: "Emit",
		Consumer: "/plugin/, /tools/, /hooks/ (the hook and tool registries)",
		Absent: "Fail",
	},
	// ── The configuration surface.
	{
		Source: "aphrodite.toml.example",
		Destination: Config,
		Transform: "Facts",
		Parser: "TomlKeys",
		Fact: "Example",
		Stage: "Emit",
		Consumer: "/config/, /setup/ (every key with the default the repo ships)",
		Absent: "Fail",
	},
	{
		Source: "crates/aphrodite/templates/aphrodite.toml",
		Destination: Config,
		Transform: "Facts",
		Parser: "TomlKeys",
		Fact: "Template",
		Stage: "Emit",
		Consumer: "/config/ (the structure `aphrodite setup` writes)",
		Absent: "Fail",
	},
	// ── The pin.
	{
		Source: "package.json",
		Destination: Pin,
		Transform: "Facts",
		Parser: "ModulePin",
		Fact: "Module",
		Stage: "Emit",
		Consumer: "every generated header's provenance, the README's pin line",
		Absent: "Fail",
	},
	// ── The verbatim primaries a page renders or quotes in full.
	{
		Source: "README.md",
		Destination: "Source/Generated/Primary/README.md",
		Transform: "Copy",
		Stage: "Emit",
		Consumer: "/versions/ (the release badges, the tier table), /setup/",
		Absent: "Fail",
	},
	{
		Source: "plugins/aphrodite/plugin.yaml",
		Destination: "Source/Generated/Primary/plugin.yaml",
		Transform: "Copy",
		Stage: "Emit",
		Consumer: "/plugin/ (the manifest a reader can read in full)",
		Absent: "Fail",
	},
	// ── The narrative half: every measured number the three story pages print.
	{
		Source: "README.md",
		Destination: Study,
		Transform: "Facts",
		Parser: "ReadmeStudy",
		Fact: "Study",
		Stage: "Emit",
		Consumer: "the case study's hero monument and evidence plates, /benchmarks/ (StudyLedger), the landing stat badges",
		Absent: "Fail",
		Note: "Extracts the figures, never the paragraph: the page composes its own sentence around each one. A number the README stops carrying stops the build.",
	},
	{
		Source: "README.md",
		Destination: Benchmark,
		Transform: "Facts",
		Parser: "ReadmeBenchmark",
		Fact: "Benchmark",
		Stage: "Emit",
		Consumer: "/benchmarks/ (the four plates, the per-type chart, the limits), the case study's corpus plates",
		Absent: "Fail",
		Note: "The bar widths are computed here from the ratios (log scale for the per-type chart, the ratio itself for the real-world plate), so a width cannot disagree with the figure it draws.",
	},
	{
		Source: "README.md",
		Destination: Narrative,
		Transform: "Facts",
		Parser: "ReadmeNarrative",
		Fact: "Narrative",
		Stage: "Emit",
		Consumer: "the case study (the catalog count, the threshold tiers, the shipped code_multiplier)",
		Absent: "Fail",
	},
	{
		Source: "docs/classification/content-types.md",
		Destination: Narrative,
		Transform: "Facts",
		Parser: "RegistryTypes",
		Fact: "Registry",
		Stage: "Emit",
		Consumer: "the case study (the registry size the catalog footnote quotes)",
		Absent: "Fail",
		Note: "The catalog renders a subset of the registry, so the page states both numbers and the file each comes from.",
	},
	{
		Source: "CHANGELOG.md",
		Destination: Releases,
		Transform: "Facts",
		Parser: "ChangelogReleases",
		Fact: "Releases",
		Stage: "Emit",
		Consumer: "/versions/ (the release register's versions and dates, the stamp count)",
		Absent: "Fail",
		Note: "The register's `Why` and `Tag` lines are the site's own prose and stay in the page; the version, the date and the set of releases come from here, so the page cannot list a release the tree does not carry.",
	},
	// ── Held: reachable, declared, not yet written.
	{
		Source: "docs/**",
		Destination: "Source/Content/Docs/**",
		Transform: "Doc",
		Stage: "Hold",
		Consumer: "the /docs/[...slug] content collection",
		Absent: "Fail",
		Note: "Held for the docs extraction card. The module tree is the same one the committed collection was generated from, so that card's work is repointing Scripts/Docs/Generate.ts and Source/Library/Versions.ts at the module - not re-extracting text. Prepare verifies the tree on every run and reports its file count.",
	},
	{
		Source: "docs/**",
		Destination: "Source/Content/Mermaid/**",
		Transform: "Mermaid",
		Stage: "Hold",
		Consumer: "the diagram panels (Scripts/Diagrams/Extract.ts, Diagrams.json)",
		Absent: "Fail",
		Note: "Downstream of the docs row: the extractor reads the generated markdown, so this row cannot land before that one.",
	},
];

export default Manifest;
