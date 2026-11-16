var Benchmark_default = {
	_Generated: {
		"By": "Scripts/Prepare.ts",
		"From": ["Module/Aphrodite/README.md"],
		"Transform": ["Facts"],
		"Note": "Generated. Change the source in PlayForm/Aphrodite, push it, then advance the Module/Aphrodite pin - never this file."
	},
	Benchmark: {
		"Ceiling": "610×",
		"Overall": "132×",
		"CorpusIn": "106 KB",
		"CorpusOut": "800 B",
		"Median": "23×",
		"Latency": "8-40 ms",
		"LatencyHeadline": "~10 ms",
		"Classify": "40-123 ns",
		"RoundTrips": "20/20 compressed, 20/20 retrieve round-trips OK",
		"Classes": [
			{
				"Label": "Git diff (42L)",
				"Without": "~350 tok",
				"With": "~15 tok",
				"Savings": "23×",
				"Ratio": 23,
				"Percent": 52
			},
			{
				"Label": "Build output (142L)",
				"Without": "~1,400 tok",
				"With": "~10 tok",
				"Savings": "140×",
				"Ratio": 140,
				"Percent": 82
			},
			{
				"Label": "Terminal output",
				"Without": "~200 tok",
				"With": "~10 tok",
				"Savings": "20×",
				"Ratio": 20,
				"Percent": 50
			},
			{
				"Label": "JSON blob (30 keys)",
				"Without": "~400 tok",
				"With": "~10 tok",
				"Savings": "40×",
				"Ratio": 40,
				"Percent": 61
			},
			{
				"Label": "Browser snapshot (342 el)",
				"Without": "~5,000 tok",
				"With": "~12 tok",
				"Savings": "416×",
				"Ratio": 416,
				"Percent": 100
			}
		],
		"RealWorld": [
			{
				"Type": "terminal",
				"Ratio": "74×",
				"Percent": 74
			},
			{
				"Type": "table",
				"Ratio": "61×",
				"Percent": 61
			},
			{
				"Type": "source_code",
				"Ratio": "45×",
				"Percent": 45
			},
			{
				"Type": "ls",
				"Ratio": "37×",
				"Percent": 37
			},
			{
				"Type": "diff",
				"Ratio": "23×",
				"Percent": 23
			},
			{
				"Type": "build",
				"Ratio": "23×",
				"Percent": 23
			},
			{
				"Type": "search",
				"Ratio": "20×",
				"Percent": 20
			}
		],
		"From": "Module/Aphrodite/README.md:671-740"
	}
};
var Module_default = {
	_Generated: {
		"By": "Scripts/Prepare.ts",
		"From": ["Module/Aphrodite/package.json"],
		"Transform": ["Facts"],
		"Note": "Generated. Change the source in PlayForm/Aphrodite, push it, then advance the Module/Aphrodite pin - never this file."
	},
	Module: {
		"Name": "@playform/aphrodite",
		"Version": "1.8.1",
		"Commit": "b2b79653b400137e0018e34e10dc8d6f46a3bcd2",
		"Branch": "Current",
		"Nested": [
			{
				"Path": "plugins/aphrodite",
				"Commit": "47e7fa3b47cc57e6531b4ad54a7f2c521475b968",
				"Describe": "v2.3.2",
				"State": "clean"
			},
			{
				"Path": "vendor/headroom",
				"Commit": "d425dac1bba2fb65da2bae756a634b56f6494736",
				"Describe": "aphrodite-v0.12.0-3-gd425dac1b",
				"State": "clean"
			},
			{
				"Path": "vendor/rtk",
				"Commit": "1b2c07c7cea817541992995753acdab7ffd4a831",
				"Describe": "dev-0.43.0-rc.278-7-g1b2c07c",
				"State": "clean"
			}
		]
	}
};
var Narrative_default = {
	_Generated: {
		"By": "Scripts/Prepare.ts",
		"From": ["Module/Aphrodite/README.md", "Module/Aphrodite/docs/classification/content-types.md"],
		"Transform": ["Facts"],
		"Note": "Generated. Change the source in PlayForm/Aphrodite, push it, then advance the Module/Aphrodite pin - never this file."
	},
	Narrative: {
		"CatalogTypes": 20,
		"Tiers": [
			{
				"Tier": "ERROR",
				"Types": "error",
				"Multiplier": "×8",
				"Qualifier": ""
			},
			{
				"Tier": "CODE",
				"Types": "code_rust · code_python · code_go · code_js · code",
				"Multiplier": "×1.0",
				"Qualifier": "scaled by code_multiplier"
			},
			{
				"Tier": "DIFF / TRACKED",
				"Types": "diff · git · text",
				"Multiplier": "×2",
				"Qualifier": ""
			},
			{
				"Tier": "DEFAULT",
				"Types": "tool_output · json · everything else",
				"Multiplier": "×1",
				"Qualifier": ""
			},
			{
				"Tier": "NOISY (BASE)",
				"Types": "linter · build_output · log",
				"Multiplier": "×1",
				"Qualifier": "never halved"
			}
		],
		"CodeMultiplier": "×1.0",
		"CodeMultiplierKey": "code_multiplier",
		"PreviewTokens": "~15 tok",
		"MarkerTokens": "~33 tok",
		"CompressStep": "sub-millisecond",
		"From": "Module/Aphrodite/README.md:305-371"
	},
	Registry: {
		"Types": 30,
		"From": "docs/classification/content-types.md:120"
	}
};
var Releases_default = {
	_Generated: {
		"By": "Scripts/Prepare.ts",
		"From": ["Module/Aphrodite/CHANGELOG.md"],
		"Transform": ["Facts"],
		"Note": "Generated. Change the source in PlayForm/Aphrodite, push it, then advance the Module/Aphrodite pin - never this file."
	},
	Releases: {
		"Count": 34,
		"Entries": [
			{
				"Version": "1.8.1",
				"Title": "Docs catch up to the engine, ASCII ellipsis markers, compile-time debug gate",
				"Date": "2026-11-14",
				"Line": 3
			},
			{
				"Version": "1.8.0",
				"Title": "Bounded CCR store: retention caps, index-driven sweep, truthful telemetry",
				"Date": "2026-11-08",
				"Line": 74
			},
			{
				"Version": "1.7.0",
				"Title": "Feature port: TOML templates, auto-expand, context engine, live containers, scripting, caps",
				"Date": "2026-10-13",
				"Line": 151
			},
			{
				"Version": "1.6.6",
				"Title": "Catalog review: prefetch path guard, setup hardening, opt-in context engine",
				"Date": "2026-10-07",
				"Line": 192
			},
			{
				"Version": "1.6.5",
				"Title": "Catalog review: mandatory in-tree checksums + no legacy home adoption",
				"Date": "2026-10-05",
				"Line": 228
			},
			{
				"Version": "1.6.4",
				"Title": "Publish chaining + shim import hygiene + cross-repo child push",
				"Date": "2026-09-25",
				"Line": 258
			},
			{
				"Version": "1.6.3",
				"Title": "One runtime-home decision for both halves",
				"Date": "2026-09-25",
				"Line": 293
			},
			{
				"Version": "1.6.2",
				"Title": "Release-infra SHA256SUMS regeneration + version track",
				"Date": "2026-09-24",
				"Line": 345
			},
			{
				"Version": "1.6.1",
				"Title": "Plugin manifest cleanup + version track",
				"Date": "2026-09-24",
				"Line": 354
			},
			{
				"Version": "1.6.0",
				"Title": "Config diagnostics + opt-in config auto-reload",
				"Date": "2026-09-24",
				"Line": 364
			},
			{
				"Version": "1.5.1",
				"Title": "Headroom fork publication 0.1.3",
				"Date": "2026-09-21",
				"Line": 380
			},
			{
				"Version": "1.5.0",
				"Title": "Edition-2024 + atomization + debug tool",
				"Date": "2026-09-20",
				"Line": 389
			},
			{
				"Version": "1.4.5",
				"Title": "Config template refresh + provider-neutral defaults",
				"Date": "2026-09-16",
				"Line": 404
			},
			{
				"Version": "1.4.4",
				"Title": "Setup reliability hotfix",
				"Date": "2026-09-16",
				"Line": 422
			},
			{
				"Version": "1.4.3",
				"Title": "Development-branch release pipeline, directives override, and plugin hardening",
				"Date": "2026-09-15",
				"Line": 445
			},
			{
				"Version": "1.4.2",
				"Title": "Exclude experimental `s2` from the release workspace (cgmath advisory)",
				"Date": "2026-08-15",
				"Line": 506
			},
			{
				"Version": "1.4.1",
				"Title": "Release-tooling fixes (clippy build break + headroom crate-name rename misses)",
				"Date": "2026-08-15",
				"Line": 530
			},
			{
				"Version": "1.4.0",
				"Title": "Packaging, runtime-cache, and config-default fixes from 1.3.9 feedback",
				"Date": "2026-08-15",
				"Line": 551
			},
			{
				"Version": "1.3.9",
				"Title": "Fix packaged crate missing built-in directive files",
				"Date": "2026-08-14",
				"Line": 597
			},
			{
				"Version": "1.3.8",
				"Title": "Tool Schema Self-Documentation + Lazy Directive + Release Channel Fix",
				"Date": "2026-08-14",
				"Line": 641
			},
			{
				"Version": "1.3.6",
				"Title": "Preview Pipe Sanitization Fix",
				"Date": "2026-07-24",
				"Line": 762
			},
			{
				"Version": "1.3.5",
				"Title": "S2 Context Navigation & Delta Catalog",
				"Date": "2026-07-22",
				"Line": 776
			},
			{
				"Version": "1.3.4",
				"Title": "Preview Intelligence & Release Hardening",
				"Date": "2026-07-14",
				"Line": 795
			},
			{
				"Version": "1.3.3",
				"Title": "Self-Bootstrapping Setup & FFI Hardening",
				"Date": "2026-07-14",
				"Line": 826
			},
			{
				"Version": "1.3.2",
				"Title": "Correctness Sweep: Compression Losslessness, Proxy Security, Release Channel",
				"Date": "2026-07-14",
				"Line": 848
			},
			{
				"Version": "1.3.0",
				"Title": "Hermes Wrapper-Unwrap Fix, cargo install Support",
				"Date": "2026-07-13",
				"Line": 1012
			},
			{
				"Version": "1.2.6",
				"Title": "CHANGELOG Backfill, Docs Sync",
				"Date": "2026-07-13",
				"Line": 1060
			},
			{
				"Version": "1.2.5",
				"Title": "macOS Gatekeeper Fix",
				"Date": "2026-07-13",
				"Line": 1075
			},
			{
				"Version": "1.2.3",
				"Title": "Conversational Directives System",
				"Date": "2026-07-13",
				"Line": 1095
			},
			{
				"Version": "1.2.2",
				"Title": "crates.io Publish + Doc Sync",
				"Date": "2026-07-13",
				"Line": 1137
			},
			{
				"Version": "1.2.1",
				"Title": "Silent Startup Failures",
				"Date": "2026-07-11",
				"Line": 1174
			},
			{
				"Version": "1.2.0",
				"Title": "Headroom Upstream Sync",
				"Date": "2026-07-11",
				"Line": 1216
			},
			{
				"Version": "1.1.0",
				"Title": "Configurable Proxy Ports",
				"Date": "2026-07-03",
				"Line": 1265
			},
			{
				"Version": "0.7.0",
				"Title": "Atomization + Live Containers",
				"Date": "2026-06-17",
				"Line": 1290
			}
		],
		"From": "CHANGELOG.md:1290-3"
	}
};
var Study_default = {
	_Generated: {
		"By": "Scripts/Prepare.ts",
		"From": ["Module/Aphrodite/README.md"],
		"Transform": ["Facts"],
		"Note": "Generated. Change the source in PlayForm/Aphrodite, push it, then advance the Module/Aphrodite pin - never this file."
	},
	Study: {
		"Measured": "Sep 2026",
		"Sessions": "200",
		"ApiCalls": "6,843",
		"Period": "Sep 18-20",
		"TokensWithMarkers": "424,959,588",
		"TokensExpanded": "581,302,405",
		"TokensSaved": "156,342,817",
		"SavedPct": "26.9%",
		"SavedMillions": "156M+",
		"AvgPerCall": "22,921",
		"SessionsSaved": "183 / 200",
		"MedianRatio": "22.9%",
		"TaxCalls": "2,275",
		"TaxTokens": "2,011,583",
		"TaxPct": "1.3%",
		"TaxFactor": 78,
		"SessionsUnsaved": "17",
		"CharsPerTok": "3.0-4.5",
		"Band": "~24-33%",
		"BandCenter": "~27%",
		"Bands": [
			{
				"Range": "~0%",
				"Percent": 0
			},
			{
				"Range": "~5%",
				"Percent": 5
			},
			{
				"Range": "20-25%",
				"Percent": 23
			},
			{
				"Range": "76-82%",
				"Percent": 79
			}
		],
		"From": "Module/Aphrodite/README.md:694-740"
	}
};
// Source/Library/Numbers.ts
/** A field the pages render, or a build that stops and names it. */
function Require(Value, Path) {
	if (Value === void 0 || Value === null || Value === "") throw new Error(`[Numbers] ${Path} is missing from the generated facts. Run \`pnpm run Prepare\` and check the manifest row in Scripts/Prepare/Manifest.ts that writes it.`);
	return Value;
}
/** Every named key of one generated record, or a build that stops and names them. */
function Complete(Record, Path, Keys) {
	const Missing = Keys.filter((Key) => {
		const Value = Record[Key];
		return Value === void 0 || Value === null || Value === "";
	});
	if (Missing.length > 0) throw new Error(`[Numbers] ${Path} is missing ${Missing.map(String).join(", ")}. The generator emitted the file but not this field - check Scripts/Prepare/Transform.ts.`);
	return Record;
}
/** The SRC token a page prints: the module path relative to the repository root. */
function Cite(From) {
	return From.replace(/^Module\/Aphrodite\//, "");
}
/** A stable ID segment from a README label: "Browser snapshot (342 el)" -> "browser-snapshot". */
function Slug(Label) {
	return Label.replace(/\s*\(.*?\)\s*/g, " ").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
/**
* The measured study: the 200-session ledger, the session-shape bands, and the
* sensitivity band the README's confidence note states.
*/
var Study = Complete(Require(Study_default.Study, "Facts/Study.json -> Study"), "Study", [
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
	"From"
]);
/** The benchmark figures, with the bar widths the generator computed from the ratios. */
var Benchmark = Complete(Require(Benchmark_default.Benchmark, "Facts/Benchmark.json -> Benchmark"), "Benchmark", [
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
	"From"
]);
/** The narrative's counted claims: the catalog size, the tiers, the shipped multiplier. */
var Narrative = Complete(Require(Narrative_default.Narrative, "Facts/Narrative.json -> Narrative"), "Narrative", [
	"CatalogTypes",
	"Tiers",
	"CodeMultiplier",
	"CodeMultiplierKey",
	"PreviewTokens",
	"MarkerTokens",
	"CompressStep",
	"From"
]);
/** The classification registry's size, from the docs tree. */
var Registry = Complete(Require(Narrative_default.Registry, "Facts/Narrative.json -> Registry"), "Registry", ["Types", "From"]);
/** Every release the CHANGELOG records, newest first. */
var Releases = Complete(Require(Releases_default.Releases, "Facts/Releases.json -> Releases"), "Releases", [
	"Count",
	"Entries",
	"From"
]);
/** The provenance lines a page prints under its figures. */
var Provenance = {
	Study: Cite(Study.From),
	Benchmark: Cite(Benchmark.From),
	Narrative: Cite(Narrative.From),
	Registry: Cite(Registry.From),
	Releases: Cite(Releases.From)
};
/**
* The pinned revision the generator read - a fact about the checkout, written
* by `Scripts/Prepare.ts` from `Module/Aphrodite` itself. A page that states
* where its figures came from states this, because "generated" without a
* revision is a claim a reader cannot check.
*/
var Pin = Complete(Require(Module_default.Module, "Module.json -> Module"), "Module", ["Commit", "Branch"]);
/** `Current@a03481bc7` - the branch and the short commit, in one token. */
var SourceCommit = `${Pin.Branch}@${Pin.Commit.slice(0, 9)}`;
/** The full commit, for a page that prints the address rather than the shorthand. */
var SourceRevision = {
	Branch: Pin.Branch,
	Commit: Pin.Commit,
	Short: Pin.Commit.slice(0, 9)
};
var Register = /* @__PURE__ */ new Map();
/**
* Register one figure. Every field is required and every ID is unique: an
* evidence record with a blank scope is the same defect as a figure with no
* unit, and two records sharing an ID is a page joining the wrong one.
*/
function Evidence(Entry) {
	const Full = {
		...Entry,
		SourceCommit: Entry.SourceCommit ?? SourceCommit
	};
	const Missing = [
		"Id",
		"Kind",
		"Value",
		"Unit",
		"Scope",
		"SourceCommit",
		"Method"
	].filter((Key) => String(Full[Key] ?? "").trim() === "");
	if (Missing.length > 0) throw new Error(`[Numbers] the figure registered as "${Full.Id || "(no id)"}" is missing ${Missing.join(", ")}. Every figure the pages print needs a unit, a scope and a method - see the record layer in Source/Library/Numbers.ts.`);
	if (Register.has(Full.Id)) throw new Error(`[Numbers] two figures are registered as "${Full.Id}". A page joins by ID, so the second one would silently win.`);
	Register.set(Full.Id, Full);
	return Full;
}
/** The ID a per-type corpus sample is registered under, so a page can join by it. */
function ClassId(Label) {
	return `benchmark.class.${Slug(Label)}`;
}
/** The ID a recorded per-output row is registered under. */
function RealWorldId(Type) {
	return `benchmark.realworld.${Slug(Type.replace(/_/g, " "))}`;
}
var CorpusMethod = "one payload counted twice: the tokens the tool produced over the tokens the model actually reads, on a fixed corpus";
var StudyMethod = "reconstructed payload-by-payload from the session transcripts, with every marker expanded and counted through a calibrated chars/token ratio";
/** The corpus rows: one representative sample per output class, five of them. */
var ClassFigures = Benchmark.Classes.map((Entry) => Evidence({
	Id: ClassId(Entry.Label),
	Kind: "measured",
	Value: Entry.Savings,
	Unit: "×",
	Scope: `standard corpus, one sample: ${Entry.Label}, ${Entry.Without} in and ${Entry.With} out`,
	Method: CorpusMethod
}));
/** The recorded per-output rows: the study's own ratios, one per content type. */
var RealWorldFigures = Benchmark.RealWorld.map((Entry) => Evidence({
	Id: RealWorldId(Entry.Type),
	Kind: "estimated",
	Value: Entry.Ratio,
	Unit: "×",
	Scope: `recorded sessions, one row per output type: ${Entry.Type.replace(/_/g, " ")}`,
	Method: `the study's per-output ratio for that type, orig tokens to a ~${Narrative.MarkerTokens.replace("~", "").replace(" tok", "")}-token marker`
}));
/** Every figure the story pages print. The register a page can iterate. */
var Figures = [
	Evidence({
		Id: "benchmark.ceiling",
		Kind: "measured",
		Value: Benchmark.Ceiling,
		Unit: "×",
		Scope: "standard corpus, the single best document: large low-entropy prose",
		Method: CorpusMethod
	}),
	Evidence({
		Id: "benchmark.overall",
		Kind: "measured",
		Value: Benchmark.Overall,
		Unit: "×",
		Scope: `standard corpus, the whole set at once: ${Benchmark.CorpusIn} in, ${Benchmark.CorpusOut} out`,
		Method: CorpusMethod
	}),
	Evidence({
		Id: "benchmark.corpus.in",
		Kind: "measured",
		Value: Benchmark.CorpusIn,
		Unit: "bytes",
		Scope: "standard corpus, the whole set as the tool produced it",
		Method: "measured size of the corpus input"
	}),
	Evidence({
		Id: "benchmark.corpus.out",
		Kind: "measured",
		Value: Benchmark.CorpusOut,
		Unit: "bytes",
		Scope: "standard corpus, the whole set after replacement",
		Method: "measured size of the replacement the model receives"
	}),
	Evidence({
		Id: "benchmark.median",
		Kind: "measured",
		Value: Benchmark.Median,
		Unit: "×",
		Scope: "the five per-type samples, median of their ratios - not a median over sessions",
		Method: "median of the per-type table's ratios"
	}),
	Evidence({
		Id: "benchmark.round-trips",
		Kind: "measured",
		Value: Benchmark.RoundTrips,
		Unit: "round trips",
		Scope: "the standard corpus, token mode, one retrieve per sample",
		Method: "each sample stored, retrieved and compared byte-for-byte; a miss exits non-zero"
	}),
	...ClassFigures,
	...RealWorldFigures,
	Evidence({
		Id: "narrative.preview-tokens",
		Kind: "measured",
		Value: Narrative.PreviewTokens,
		Unit: "tokens",
		Scope: "one replacement: the metadata preview the model reads instead of the output",
		Method: "the shipped preview budget, counted on the format the engine emits"
	}),
	Evidence({
		Id: "narrative.marker-tokens",
		Kind: "measured",
		Value: Narrative.MarkerTokens,
		Unit: "tokens",
		Scope: "one replacement: the marker line, its type and its size",
		Method: "the shipped marker format, counted on the format the engine emits"
	}),
	Evidence({
		Id: "benchmark.latency",
		Kind: "measured",
		Value: Benchmark.Latency,
		Unit: "ms",
		Scope: "end-to-end, one call, compression and retrieve path included, HTTP round-trip included",
		Method: "timed on a release build; the band spans the fast case to the slow one"
	}),
	Evidence({
		Id: "benchmark.latency.headline",
		Kind: "measured",
		Value: Benchmark.LatencyHeadline,
		Unit: "ms",
		Scope: "end-to-end, the fast end of the same band",
		Method: "the headline reading of the latency band"
	}),
	Evidence({
		Id: "benchmark.classify",
		Kind: "measured",
		Value: Benchmark.Classify,
		Unit: "ns",
		Scope: "one classification, one invocation, first match wins",
		Method: "timed on its own because it runs on every call"
	}),
	Evidence({
		Id: "benchmark.compress-step",
		Kind: "measured",
		Value: Narrative.CompressStep,
		Unit: "wall time",
		Scope: "the whole compress step, one payload, classification and preview included",
		Method: "timed on a release build"
	}),
	Evidence({
		Id: "study.sessions",
		Kind: "measured",
		Value: Study.Sessions,
		Unit: "sessions",
		Scope: `the author's own Hermes sessions, ${Study.Period}`,
		Method: "counted from the session transcripts"
	}),
	Evidence({
		Id: "study.api-calls",
		Kind: "measured",
		Value: Study.ApiCalls,
		Unit: "API calls",
		Scope: `the same ${Study.Sessions} sessions, ${Study.Period}`,
		Method: "counted from the session transcripts"
	}),
	Evidence({
		Id: "study.period",
		Kind: "measured",
		Value: Study.Period,
		Unit: "days",
		Scope: `the window the ${Study.Sessions} sessions were recorded in`,
		Method: "the first and last session timestamps in the transcripts"
	}),
	Evidence({
		Id: "study.tokens.recorded",
		Kind: "measured",
		Value: Study.TokensWithMarkers,
		Unit: "tokens",
		Scope: `every call's payload as the model saw it, markers in place, across ${Study.Sessions} sessions`,
		Method: "the recorded payloads counted as sent"
	}),
	Evidence({
		Id: "study.tokens.expanded",
		Kind: "estimated",
		Value: Study.TokensExpanded,
		Unit: "tokens",
		Scope: `the same payloads with every marker expanded back to its content - what stock Hermes would have sent`,
		Method: StudyMethod
	}),
	Evidence({
		Id: "study.tokens.saved",
		Kind: "estimated",
		Value: Study.TokensSaved,
		Unit: "tokens",
		Scope: `expanded reconstruction minus recorded context, across ${Study.Sessions} sessions`,
		Method: StudyMethod
	}),
	Evidence({
		Id: "study.reduction.percent",
		Kind: "estimated",
		Value: Study.SavedPct,
		Unit: "%",
		Scope: `the share of the expanded context budget the markers deflected, across ${Study.Sessions} sessions`,
		Method: StudyMethod
	}),
	Evidence({
		Id: "study.reduction.band",
		Kind: "estimated",
		Value: Study.Band,
		Unit: "%",
		Scope: `the same figure at ${Study.CharsPerTok} chars/token - the sensitivity range, not a second measurement`,
		Method: `the same reconstruction recounted across a ${Study.CharsPerTok} chars/token range`
	}),
	Evidence({
		Id: "study.reduction.center",
		Kind: "estimated",
		Value: Study.BandCenter,
		Unit: "%",
		Scope: "the centre of the sensitivity band - the single figure to quote, with the band attached",
		Method: `the same reconstruction recounted across a ${Study.CharsPerTok} chars/token range`
	}),
	Evidence({
		Id: "study.median-ratio",
		Kind: "estimated",
		Value: Study.MedianRatio,
		Unit: "%",
		Scope: "the median session's saved ratio, across the sessions that saved something",
		Method: StudyMethod
	}),
	Evidence({
		Id: "study.average-per-call",
		Kind: "estimated",
		Value: Study.AvgPerCall,
		Unit: "tokens",
		Scope: `per API call, averaged over ${Study.ApiCalls} calls`,
		Method: StudyMethod
	}),
	Evidence({
		Id: "study.sessions.saved",
		Kind: "estimated",
		Value: Study.SessionsSaved,
		Unit: "sessions",
		Scope: `sessions with a nonzero estimated reduction, of ${Study.Sessions} recorded`,
		Method: StudyMethod
	}),
	Evidence({
		Id: "study.sessions.unsaved",
		Kind: "estimated",
		Value: Study.SessionsUnsaved,
		Unit: "sessions",
		Scope: `sessions where the reconstruction found nothing to save, of ${Study.Sessions} recorded`,
		Method: StudyMethod
	}),
	Evidence({
		Id: "study.retrieval.calls",
		Kind: "measured",
		Value: Study.TaxCalls,
		Unit: "retrieve calls",
		Scope: `every retrieval the transcripts record, across ${Study.Sessions} sessions`,
		Method: "counted from the session transcripts"
	}),
	Evidence({
		Id: "study.retrieval.tokens",
		Kind: "measured",
		Value: Study.TaxTokens,
		Unit: "tokens",
		Scope: `the tokens those ${Study.TaxCalls} retrievals returned`,
		Method: "the retrieved payloads counted as returned"
	}),
	Evidence({
		Id: "study.retrieval.share",
		Kind: "derived",
		Value: Study.TaxPct,
		Unit: "%",
		Scope: "retrieval traffic as a share of the estimated tokens saved - the cost side of the ledger",
		Method: "study.retrieval.tokens over study.tokens.saved"
	}),
	Evidence({
		Id: "study.retrieval.factor",
		Kind: "derived",
		Value: `${Study.TaxFactor}×`,
		Unit: "×",
		Scope: "what paying the full output again would have cost, against paying retrieval instead",
		Method: "study.tokens.saved over study.retrieval.tokens"
	})
];
/** One figure by its stable ID, or a build that stops and names the ID. */
function Figure(Id) {
	const Entry = Register.get(Id);
	if (Entry === void 0) throw new Error(`[Numbers] no figure is registered as "${Id}". Pages join figures by ID, never by position - add the record in Source/Library/Numbers.ts or fix the ID at the call site.`);
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
var BandSpecs = [
	{
		Id: "study.band.chat-only",
		Expected: "~0%",
		Kind: "estimated"
	},
	{
		Id: "study.band.light-developer",
		Expected: "~5%",
		Kind: "estimated"
	},
	{
		Id: "study.band.tool-heavy",
		Expected: "20-25%",
		Kind: "estimated"
	},
	{
		Id: "study.band.pure-tool",
		Expected: "76-82%",
		Kind: "simulated"
	}
];
/** One session-shape band by ID: the generated range, plus the identity that claims it. */
function Band(Id) {
	const Spec = BandSpecs.find((Candidate) => Candidate.Id === Id);
	if (Spec === void 0) throw new Error(`[Numbers] no session-shape band is registered as "${Id}". The IDs live in Source/Library/Numbers.ts.`);
	const Row = Study.Bands.find((Candidate) => Candidate.Range === Spec.Expected);
	if (Row === void 0) throw new Error(`[Numbers] the study states no "${Spec.Expected}" range, which "${Spec.Id}" is joined to. README.md's session-shape sentence changed - update the expected range beside the ID in Source/Library/Numbers.ts, or the page is labelling a figure that moved.`);
	return {
		Id: Spec.Id,
		Kind: Spec.Kind,
		Range: Row.Range,
		Percent: Row.Percent
	};
}
BandSpecs.map(({ Id }) => Band(Id));
/**
* One threshold tier by the name the README's table states, or a build that
* stops and names it. Tiers are joined by that name rather than by position,
* so a reordered table relabels nothing and a renamed tier cannot inherit its
* neighbour's multiplier.
*/
function Tier(Name) {
	const Row = Narrative.Tiers.find((Candidate) => Candidate.Tier === Name);
	if (Row === void 0) throw new Error(`[Numbers] README.md's threshold table states no "${Name}" tier. The page joins tiers by name - check the tier labels in Source/pages/case-study.astro against the README's table.`);
	return Row;
}
/** The release entry for a version, or a build that stops and names it. */
function Release(Version) {
	const Bare = Version.replace(/^v/, "");
	const Entry = Releases.Entries.find((Candidate) => Candidate.Version === Bare);
	if (Entry === void 0) throw new Error(`[Numbers] CHANGELOG.md records no release ${Version}. Either the page cites a release that was never cut, or the entry was renamed.`);
	return Entry;
}
export { Figure as a, Provenance as c, SourceRevision as d, Study as f, ClassId as i, Registry as l, Benchmark as n, Figures as o, Tier as p, Cite as r, Narrative as s, Band as t, Release as u };
