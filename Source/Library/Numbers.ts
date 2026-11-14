// Numbers.ts - the generated narrative figures, validated on read.
//
// Every number the three story pages print (the landing, the case study, the
// benchmarks) comes from a `Source/Generated/Facts/*.json` file that
// `Scripts/Prepare.ts` wrote out of `Module/Aphrodite`. This module is the one
// reader: it imports those files, asserts that every field the pages render is
// present, and throws with the file and the field names when one is not.
//
// WHY THIS THROWS INSTEAD OF FALLING BACK
//
// A fallback constant is how a stale figure survives a release: the generator
// stops finding the number, the page keeps printing the old one, and nothing
// says so. The generator already fails when the README stops carrying a figure;
// this is the second gate, for the case where the file was written and a page
// reads a field that moved. A missing field must stop the build, not render
// "undefined" in a monument.
//
// BUILD-TIME ONLY: this module imports JSON and is read by the .astro
// frontmatter (the server). It must never be imported from a browser bundle.

import BenchmarkJson from "../Generated/Facts/Benchmark.json";
import NarrativeJson from "../Generated/Facts/Narrative.json";
import ReleasesJson from "../Generated/Facts/Releases.json";
import StudyJson from "../Generated/Facts/Study.json";

/** A field the pages render, or a build that stops and names it. */
function Require<Value>(Value: Value | undefined | null, Path: string): Value {
	if (Value === undefined || Value === null || Value === "") {
		throw new Error(
			`[Numbers] ${Path} is missing from the generated facts. Run \`pnpm run Prepare\` and check the manifest row in Scripts/Prepare/Manifest.ts that writes it.`,
		);
	}

	return Value;
}

/** Every named key of one generated record, or a build that stops and names them. */
function Complete<Shape extends object>(Record: Shape, Path: string, Keys: (keyof Shape)[]): Shape {
	const Missing = Keys.filter((Key) => {
		const Value = Record[Key];

		return Value === undefined || Value === null || Value === "";
	});

	if (Missing.length > 0) {
		throw new Error(
			`[Numbers] ${Path} is missing ${Missing.map(String).join(", ")}. The generator emitted the file but not this field - check Scripts/Prepare/Transform.ts.`,
		);
	}

	return Record;
}

/** The SRC token a page prints: the module path relative to the repository root. */
export function Cite(From: string): string {
	return From.replace(/^Module\/Aphrodite\//, "");
}

/**
 * The measured study: the 200-session ledger, the session-shape bands, and the
 * sensitivity band the README's confidence note states.
 *
 * `Bands` is the study's four ranges in the order the README lists them
 * (chat-only, light developer, long tool-heavy, pure-tool). The page supplies
 * the four labels, because a label is the site's voice and the range is the
 * repository's fact - and `AssertBands` is what keeps the two in step.
 */
export const Study = Complete(Require(StudyJson.Study, "Facts/Study.json -> Study"), "Study", [
	"Measured",
	"Sessions",
	"ApiCalls",
	"Period",
	"TokensWithMarkers",
	"TokensExpanded",
	"TokensSaved",
	"SavedPct",
	"SavedMillions",
	"AvgPerCall",
	"SessionsSaved",
	"MedianRatio",
	"TaxCalls",
	"TaxTokens",
	"TaxPct",
	"CharsPerTok",
	"Band",
	"BandCenter",
	"Bands",
	"From",
]);

/** The benchmark figures, with the bar widths the generator computed from the ratios. */
export const Benchmark = Complete(
	Require(BenchmarkJson.Benchmark, "Facts/Benchmark.json -> Benchmark"),
	"Benchmark",
	[
		"Ceiling",
		"Overall",
		"CorpusIn",
		"CorpusOut",
		"Median",
		"Latency",
		"LatencyHeadline",
		"Classify",
		"RoundTrips",
		"Classes",
		"RealWorld",
		"From",
	],
);

/** The narrative's counted claims: the catalog size, the tiers, the shipped multiplier. */
export const Narrative = Complete(
	Require(NarrativeJson.Narrative, "Facts/Narrative.json -> Narrative"),
	"Narrative",
	["CatalogTypes", "Tiers", "CodeMultiplier", "CodeMultiplierKey", "From"],
);

/** The classification registry's size, from the docs tree. */
export const Registry = Complete(
	Require(NarrativeJson.Registry, "Facts/Narrative.json -> Registry"),
	"Registry",
	["Types", "From"],
);

/** Every release the CHANGELOG records, newest first. */
export const Releases = Complete(
	Require(ReleasesJson.Releases, "Facts/Releases.json -> Releases"),
	"Releases",
	["Count", "Entries", "From"],
);

/**
 * Four labels for the study's four session-shape ranges. The count is the
 * contract: a README that states five shapes, or three, is a README whose
 * sentence moved, and the page must not silently mislabel a range.
 */
export function AssertBands<Label>(Labels: Label[]): Label[] {
	if (Labels.length !== Study.Bands.length) {
		throw new Error(
			`[Numbers] Study.Bands carries ${Study.Bands.length} range(s) and the page supplies ${Labels.length} label(s). Update the labels beside the figures.`,
		);
	}

	return Labels;
}

/** Five tier notes for the README's five threshold tiers, in its own order. */
export function AssertTiers<Note>(Notes: Note[]): Note[] {
	if (Notes.length !== Narrative.Tiers.length) {
		throw new Error(
			`[Numbers] Narrative.Tiers carries ${Narrative.Tiers.length} tier(s) and the page supplies ${Notes.length} note(s). Update the notes beside the tiers.`,
		);
	}

	return Notes;
}

/**
 * A release the page names in prose - an arc's version span, a quoted tag -
 * must exist in the CHANGELOG. This is how a history section stops citing a
 * release the repository never cut.
 */
export function HasRelease(Version: string): boolean {
	const Bare = Version.replace(/^v/, "");

	return Releases.Entries.some((Entry) => Entry.Version === Bare);
}

/** The release entry for a version, or a build that stops and names it. */
export function Release(Version: string) {
	const Bare = Version.replace(/^v/, "");
	const Entry = Releases.Entries.find((Candidate) => Candidate.Version === Bare);

	if (Entry === undefined) {
		throw new Error(
			`[Numbers] CHANGELOG.md records no release ${Version}. Either the page cites a release that was never cut, or the entry was renamed.`,
		);
	}

	return Entry;
}

/** The provenance lines a page prints under its figures. */
export const Provenance = {
	Study: Cite(Study.From),
	Benchmark: Cite(Benchmark.From),
	Narrative: Cite(Narrative.From),
	Registry: Cite(Registry.From),
	Releases: Cite(Releases.From),
} as const;
