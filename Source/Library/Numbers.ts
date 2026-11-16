// Numbers.ts - the generated narrative figures, as records with stable IDs.
//
// TWO LAYERS, and the second one is what the pages read.
//
// THE GENERATED LAYER. Every number the story pages print comes from a
// `Source/Generated/Facts/*.json` file that `Scripts/Prepare.ts` wrote out of
// `Module/Aphrodite` at a pinned revision. Nothing in this module types a
// figure: `Study`, `Benchmark`, `Narrative`, `Registry` and `Releases` ARE
// those files, read once and validated for field presence.
//
// THE RECORD LAYER. A figure on a page is a claim, and a claim without a unit,
// a scope and a method is a poster. Every figure the pages render is therefore
// registered below as an evidence record:
//
//   Id            the stable name a page joins by - never a position
//   Kind          measured | estimated | simulated | derived
//   Value         the generated figure, byte-exact
//   Unit          what the number counts
//   Scope         what it was measured over
//   SourceCommit  the pinned revision the generator read
//   Method        how it was produced, in one sentence
//
// `Figure(Id)` is the only way a page gets a value. It throws naming the ID when
// no record carries it, so a page cannot print a number that has no unit, and a
// label cannot drift onto a neighbouring figure's value.
//
// The three kinds are not decoration - they are the page's honesty mechanism.
// `measured` is arithmetic on a fixed corpus, `estimated` is a reconstruction
// that depends on a tokenizer, `simulated` is a workload that never happened,
// and `derived` is a quotient of two other records. Two figures of different
// kinds may sit near each other; they may never be presented as peers.
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
import ModuleJson from "../Generated/Module.json";
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

/** A stable ID segment from a README label: "Browser snapshot (342 el)" -> "browser-snapshot". */
function Slug(Label: string): string {
	return Label.replace(/\s*\(.*?\)\s*/g, " ")
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}

/**
 * The measured study: the 200-session ledger, the session-shape bands, and the
 * sensitivity band the README's confidence note states.
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
	"TaxFactor",
	"SessionsUnsaved",
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
	[
		"CatalogTypes",
		"Tiers",
		"CodeMultiplier",
		"CodeMultiplierKey",
		"PreviewTokens",
		"MarkerTokens",
		"CompressStep",
		"From",
	],
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

/** The provenance lines a page prints under its figures. */
export const Provenance = {
	Study: Cite(Study.From),
	Benchmark: Cite(Benchmark.From),
	Narrative: Cite(Narrative.From),
	Registry: Cite(Registry.From),
	Releases: Cite(Releases.From),
} as const;

/**
 * The pinned revision the generator read - a fact about the checkout, written
 * by `Scripts/Prepare.ts` from `Module/Aphrodite` itself. A page that states
 * where its figures came from states this, because "generated" without a
 * revision is a claim a reader cannot check.
 */
const Pin = Complete(Require(ModuleJson.Module, "Module.json -> Module"), "Module", [
	"Commit",
	"Branch",
]);

/** `Current@a03481bc7` - the branch and the short commit, in one token. */
export const SourceCommit = `${Pin.Branch}@${Pin.Commit.slice(0, 9)}`;

/** The full commit, for a page that prints the address rather than the shorthand. */
export const SourceRevision = {
	Branch: Pin.Branch,
	Commit: Pin.Commit,
	Short: Pin.Commit.slice(0, 9),
} as const;

/** How a figure came to exist. Two figures of different kinds are not peers. */
export type FigureKind = "measured" | "estimated" | "simulated" | "derived";

/** One figure, with everything a reader needs in order to refuse to trust it blindly. */
export interface Figure {
	/** The stable name a page joins by. Never a position, never a label. */
	Id: string;

	/** measured | estimated | simulated | derived. */
	Kind: FigureKind;

	/** The generated figure, byte-exact. */
	Value: string;

	/** What the number counts: ×, ms, ns, tokens, %, sessions, bytes. */
	Unit: string;

	/** What it was measured over - the corpus, the population, the workload. */
	Scope: string;

	/** The pinned revision the generator read, e.g. Current@a03481bc7. */
	SourceCommit: string;

	/** How it was produced, in one sentence. */
	Method: string;
}

const Register = new Map<string, Figure>();

/**
 * Register one figure. Every field is required and every ID is unique: an
 * evidence record with a blank scope is the same defect as a figure with no
 * unit, and two records sharing an ID is a page joining the wrong one.
 */
function Evidence(Entry: Omit<Figure, "SourceCommit"> & { SourceCommit?: string }): Figure {
	const Full: Figure = { ...Entry, SourceCommit: Entry.SourceCommit ?? SourceCommit };
	const Keys = ["Id", "Kind", "Value", "Unit", "Scope", "SourceCommit", "Method"] as const;
	const Missing = Keys.filter((Key) => String(Full[Key] ?? "").trim() === "");

	if (Missing.length > 0) {
		throw new Error(
			`[Numbers] the figure registered as "${Full.Id || "(no id)"}" is missing ${Missing.join(", ")}. Every figure the pages print needs a unit, a scope and a method - see the record layer in Source/Library/Numbers.ts.`,
		);
	}

	if (Register.has(Full.Id)) {
		throw new Error(
			`[Numbers] two figures are registered as "${Full.Id}". A page joins by ID, so the second one would silently win.`,
		);
	}

	Register.set(Full.Id, Full);

	return Full;
}

/** The ID a per-type corpus sample is registered under, so a page can join by it. */
export function ClassId(Label: string): string {
	return `benchmark.class.${Slug(Label)}`;
}

/** The ID a recorded per-output row is registered under. */
export function RealWorldId(Type: string): string {
	return `benchmark.realworld.${Slug(Type.replace(/_/g, " "))}`;
}

const CorpusMethod =
	"one payload counted twice: the tokens the tool produced over the tokens the model actually reads, on a fixed corpus";

const StudyMethod =
	"reconstructed payload-by-payload from the session transcripts, with every marker expanded and counted through a calibrated chars/token ratio";

/** The corpus rows: one representative sample per output class, five of them. */
const ClassFigures = Benchmark.Classes.map((Entry) =>
	Evidence({
		Id: ClassId(Entry.Label),
		Kind: "measured",
		Value: Entry.Savings,
		Unit: "×",
		Scope: `standard corpus, one sample: ${Entry.Label}, ${Entry.Without} in and ${Entry.With} out`,
		Method: CorpusMethod,
	}),
);

/** The recorded per-output rows: the study's own ratios, one per content type. */
const RealWorldFigures = Benchmark.RealWorld.map((Entry) =>
	Evidence({
		Id: RealWorldId(Entry.Type),
		Kind: "estimated",
		Value: Entry.Ratio,
		Unit: "×",
		Scope: `recorded sessions, one row per output type: ${Entry.Type.replace(/_/g, " ")}`,
		Method: `the study's per-output ratio for that type, orig tokens to a ~${Narrative.MarkerTokens.replace("~", "").replace(" tok", "")}-token marker`,
	}),
);

/** Every figure the story pages print. The register a page can iterate. */
export const Figures: readonly Figure[] = [
	// ---- the replacement: how much output a marker stands in for ----------
	Evidence({
		Id: "benchmark.ceiling",
		Kind: "measured",
		Value: Benchmark.Ceiling,
		Unit: "×",
		Scope: "standard corpus, the single best document: large low-entropy prose",
		Method: CorpusMethod,
	}),
	Evidence({
		Id: "benchmark.overall",
		Kind: "measured",
		Value: Benchmark.Overall,
		Unit: "×",
		Scope: `standard corpus, the whole set at once: ${Benchmark.CorpusIn} in, ${Benchmark.CorpusOut} out`,
		Method: CorpusMethod,
	}),
	Evidence({
		Id: "benchmark.corpus.in",
		Kind: "measured",
		Value: Benchmark.CorpusIn,
		Unit: "bytes",
		Scope: "standard corpus, the whole set as the tool produced it",
		Method: "measured size of the corpus input",
	}),
	Evidence({
		Id: "benchmark.corpus.out",
		Kind: "measured",
		Value: Benchmark.CorpusOut,
		Unit: "bytes",
		Scope: "standard corpus, the whole set after replacement",
		Method: "measured size of the replacement the model receives",
	}),
	Evidence({
		Id: "benchmark.median",
		Kind: "measured",
		Value: Benchmark.Median,
		Unit: "×",
		Scope: "the five per-type samples, median of their ratios - not a median over sessions",
		Method: "median of the per-type table's ratios",
	}),
	Evidence({
		Id: "benchmark.round-trips",
		Kind: "measured",
		Value: Benchmark.RoundTrips,
		Unit: "round trips",
		Scope: "the standard corpus, token mode, one retrieve per sample",
		Method: "each sample stored, retrieved and compared byte-for-byte; a miss exits non-zero",
	}),
	...ClassFigures,
	...RealWorldFigures,
	Evidence({
		Id: "narrative.preview-tokens",
		Kind: "measured",
		Value: Narrative.PreviewTokens,
		Unit: "tokens",
		Scope: "one replacement: the metadata preview the model reads instead of the output",
		Method: "the shipped preview budget, counted on the format the engine emits",
	}),
	Evidence({
		Id: "narrative.marker-tokens",
		Kind: "measured",
		Value: Narrative.MarkerTokens,
		Unit: "tokens",
		Scope: "one replacement: the marker line, its type and its size",
		Method: "the shipped marker format, counted on the format the engine emits",
	}),

	// ---- the overhead: what the replacement costs -------------------------
	Evidence({
		Id: "benchmark.latency",
		Kind: "measured",
		Value: Benchmark.Latency,
		Unit: "ms",
		Scope: "end-to-end, one call, compression and retrieve path included, HTTP round-trip included",
		Method: "timed on a release build; the band spans the fast case to the slow one",
	}),
	Evidence({
		Id: "benchmark.latency.headline",
		Kind: "measured",
		Value: Benchmark.LatencyHeadline,
		Unit: "ms",
		Scope: "end-to-end, the fast end of the same band",
		Method: "the headline reading of the latency band",
	}),
	Evidence({
		Id: "benchmark.classify",
		Kind: "measured",
		Value: Benchmark.Classify,
		Unit: "ns",
		Scope: "one classification, one invocation, first match wins",
		Method: "timed on its own because it runs on every call",
	}),
	Evidence({
		Id: "benchmark.compress-step",
		Kind: "measured",
		Value: Narrative.CompressStep,
		Unit: "wall time",
		Scope: "the whole compress step, one payload, classification and preview included",
		Method: "timed on a release build",
	}),

	// ---- the recorded sessions: what happened, and what was reconstructed --
	Evidence({
		Id: "study.sessions",
		Kind: "measured",
		Value: Study.Sessions,
		Unit: "sessions",
		Scope: `the author's own Hermes sessions, ${Study.Period}`,
		Method: "counted from the session transcripts",
	}),
	Evidence({
		Id: "study.api-calls",
		Kind: "measured",
		Value: Study.ApiCalls,
		Unit: "API calls",
		Scope: `the same ${Study.Sessions} sessions, ${Study.Period}`,
		Method: "counted from the session transcripts",
	}),
	Evidence({
		Id: "study.period",
		Kind: "measured",
		Value: Study.Period,
		Unit: "days",
		Scope: `the window the ${Study.Sessions} sessions were recorded in`,
		Method: "the first and last session timestamps in the transcripts",
	}),
	Evidence({
		Id: "study.tokens.recorded",
		Kind: "measured",
		Value: Study.TokensWithMarkers,
		Unit: "tokens",
		Scope: `every call's payload as the model saw it, markers in place, across ${Study.Sessions} sessions`,
		Method: "the recorded payloads counted as sent",
	}),
	Evidence({
		Id: "study.tokens.expanded",
		Kind: "estimated",
		Value: Study.TokensExpanded,
		Unit: "tokens",
		Scope: `the same payloads with every marker expanded back to its content - what stock Hermes would have sent`,
		Method: StudyMethod,
	}),
	Evidence({
		Id: "study.tokens.saved",
		Kind: "estimated",
		Value: Study.TokensSaved,
		Unit: "tokens",
		Scope: `expanded reconstruction minus recorded context, across ${Study.Sessions} sessions`,
		Method: StudyMethod,
	}),
	Evidence({
		Id: "study.reduction.percent",
		Kind: "estimated",
		Value: Study.SavedPct,
		Unit: "%",
		Scope: `the share of the expanded context budget the markers deflected, across ${Study.Sessions} sessions`,
		Method: StudyMethod,
	}),
	Evidence({
		Id: "study.reduction.band",
		Kind: "estimated",
		Value: Study.Band,
		Unit: "%",
		Scope: `the same figure at ${Study.CharsPerTok} chars/token - the sensitivity range, not a second measurement`,
		Method: `the same reconstruction recounted across a ${Study.CharsPerTok} chars/token range`,
	}),
	Evidence({
		Id: "study.reduction.center",
		Kind: "estimated",
		Value: Study.BandCenter,
		Unit: "%",
		Scope: "the centre of the sensitivity band - the single figure to quote, with the band attached",
		Method: `the same reconstruction recounted across a ${Study.CharsPerTok} chars/token range`,
	}),
	Evidence({
		Id: "study.median-ratio",
		Kind: "estimated",
		Value: Study.MedianRatio,
		Unit: "%",
		Scope: "the median session's saved ratio, across the sessions that saved something",
		Method: StudyMethod,
	}),
	Evidence({
		Id: "study.average-per-call",
		Kind: "estimated",
		Value: Study.AvgPerCall,
		Unit: "tokens",
		Scope: `per API call, averaged over ${Study.ApiCalls} calls`,
		Method: StudyMethod,
	}),
	Evidence({
		Id: "study.sessions.saved",
		Kind: "estimated",
		Value: Study.SessionsSaved,
		Unit: "sessions",
		Scope: `sessions with a nonzero estimated reduction, of ${Study.Sessions} recorded`,
		Method: StudyMethod,
	}),
	Evidence({
		Id: "study.sessions.unsaved",
		Kind: "estimated",
		Value: Study.SessionsUnsaved,
		Unit: "sessions",
		Scope: `sessions where the reconstruction found nothing to save, of ${Study.Sessions} recorded`,
		Method: StudyMethod,
	}),
	Evidence({
		Id: "study.retrieval.calls",
		Kind: "measured",
		Value: Study.TaxCalls,
		Unit: "retrieve calls",
		Scope: `every retrieval the transcripts record, across ${Study.Sessions} sessions`,
		Method: "counted from the session transcripts",
	}),
	Evidence({
		Id: "study.retrieval.tokens",
		Kind: "measured",
		Value: Study.TaxTokens,
		Unit: "tokens",
		Scope: `the tokens those ${Study.TaxCalls} retrievals returned`,
		Method: "the retrieved payloads counted as returned",
	}),
	Evidence({
		Id: "study.retrieval.share",
		Kind: "derived",
		Value: Study.TaxPct,
		Unit: "%",
		Scope: "retrieval traffic as a share of the estimated tokens saved - the cost side of the ledger",
		Method: "study.retrieval.tokens over study.tokens.saved",
	}),
	Evidence({
		Id: "study.retrieval.factor",
		Kind: "derived",
		Value: `${Study.TaxFactor}×`,
		Unit: "×",
		Scope: "what paying the full output again would have cost, against paying retrieval instead",
		Method: "study.tokens.saved over study.retrieval.tokens",
	}),
];

/** One figure by its stable ID, or a build that stops and names the ID. */
export function Figure(Id: string): Figure {
	const Entry = Register.get(Id);

	if (Entry === undefined) {
		throw new Error(
			`[Numbers] no figure is registered as "${Id}". Pages join figures by ID, never by position - add the record in Source/Library/Numbers.ts or fix the ID at the call site.`,
		);
	}

	return Entry;
}

/**
 * The study's four session-shape ranges, joined BY IDENTITY.
 *
 * The generated file states four ranges in the README's order and carries no
 * IDs of its own, so the identity lives here: each ID declares the range it
 * expects, and `Band` finds the generated row whose `Range` matches. That is
 * the difference between this and the positional check it replaces - a README
 * that reorders its shapes changes nothing, a README that renames a range stops
 * the build naming both the ID and the range, and no label can slide onto a
 * neighbouring figure.
 *
 * `Kind` travels with the band because one of the four never happened: the
 * pure-tool loop is a simulated workload, and a page that prints it beside the
 * three recorded shapes has to say so.
 */
const BandSpecs = [
	{ Id: "study.band.chat-only", Expected: "~0%", Kind: "estimated" as const },
	{ Id: "study.band.light-developer", Expected: "~5%", Kind: "estimated" as const },
	{ Id: "study.band.tool-heavy", Expected: "20-25%", Kind: "estimated" as const },
	{ Id: "study.band.pure-tool", Expected: "76-82%", Kind: "simulated" as const },
];

/** One session-shape band by ID: the generated range, plus the identity that claims it. */
export function Band(Id: string): { Id: string; Kind: FigureKind; Range: string; Percent: number } {
	const Spec = BandSpecs.find((Candidate) => Candidate.Id === Id);

	if (Spec === undefined) {
		throw new Error(
			`[Numbers] no session-shape band is registered as "${Id}". The IDs live in Source/Library/Numbers.ts.`,
		);
	}

	const Row = Study.Bands.find((Candidate) => Candidate.Range === Spec.Expected);

	if (Row === undefined) {
		throw new Error(
			`[Numbers] the study states no "${Spec.Expected}" range, which "${Spec.Id}" is joined to. README.md's session-shape sentence changed - update the expected range beside the ID in Source/Library/Numbers.ts, or the page is labelling a figure that moved.`,
		);
	}

	return { Id: Spec.Id, Kind: Spec.Kind, Range: Row.Range, Percent: Row.Percent };
}

/** The four bands in the README's order, each joined by its own ID. */
export const Bands = BandSpecs.map(({ Id }) => Band(Id));

/**
 * One threshold tier by the name the README's table states, or a build that
 * stops and names it. Tiers are joined by that name rather than by position,
 * so a reordered table relabels nothing and a renamed tier cannot inherit its
 * neighbour's multiplier.
 */
export function Tier(Name: string) {
	const Row = Narrative.Tiers.find((Candidate) => Candidate.Tier === Name);

	if (Row === undefined) {
		throw new Error(
			`[Numbers] README.md's threshold table states no "${Name}" tier. The page joins tiers by name - check the tier labels in Source/pages/case-study.astro against the README's table.`,
		);
	}

	return Row;
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
