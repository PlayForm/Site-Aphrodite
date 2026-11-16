import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro, m as Routes, t as $$Base } from "./Base_Bs2-mKm9.mjs";
import { a as $$Related } from "./DocsSidebar_DymFAMH3.mjs";
import { n as $$PageShell, t as $$ZineTape } from "./ZineTape_BXk9fOqY.mjs";
import { t as $$PageHeader } from "./PageHeader_CFtxK5wU.mjs";
import { t as $$ZineSource } from "./ZineSource_DoCsU3-s.mjs";
import { t as $$ZineStatBar } from "./ZineStatBar_GGT-P2uW.mjs";
import { t as $$ZineLesson } from "./ZineLesson_nkzxNSlk.mjs";
import { t as $$ZineFold } from "./ZineFold_DB-HSLxR.mjs";
import { t as $$ZineReveal } from "./ZineReveal_DKzkwlF7.mjs";
import { a as Figure, c as Provenance, d as SourceRevision, f as Study, i as ClassId, n as Benchmark, o as Figures, r as Cite, s as Narrative, t as Band } from "./Numbers_JGgF5DxR.mjs";
import { t as $$CodeFence } from "./CodeFence_C7YwxHhg.mjs";
// Source/Component/ZineLedger.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineLedger = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineLedger;
	const { Rows, Headers } = Astro.props;
	const Delta = {
		up: "ledger__cell--up",
		down: "ledger__cell--down"
	};
	const Tag = {
		teal: "telemetry-tag telemetry-tag--teal",
		canary: "telemetry-tag telemetry-tag--canary",
		crimson: "telemetry-tag telemetry-tag--crimson",
		plain: "telemetry-tag"
	};
	return renderTemplate`${maybeRenderHead($$result)}<!-- The table cannot shrink below its content's min-content width, so on a
	narrow viewport it widened the PAGE (/versions/ by 226px) instead of
	scrolling. The box is the scroll container: the border stays put, the rows
	move. Same pattern as every hand-written table on the site.

	The scroll container is the INNER box and the grunge plate is the OUTER one,
	which is not cosmetic: \`overflow\` on the plate would clip the ink's own
	bleed (\`.grunge__ink\` paints past the plate edge by design) and its negative
	offsets would register as scrollable overflow, putting scrollbars on the
	matrix for a drawing that is behind it. --><div class="grunge grunge--faint zine-box-subtle well" data-grunge data-grunge-mode="edge"> <div class="ledger__scroll"> <table class="ledger"> ${Headers && renderTemplate`<thead class="ledger__band"> <tr class="ledger__bandrow"> ${Headers.map((Header) => renderTemplate`<th scope="col" class="ledger__head type-meta"> ${Header} </th>`)} </tr> </thead>`} <tbody> ${Rows.map((Row) => renderTemplate`<tr class="ledger__row"> ${Row.Cells.map((Cell) => renderTemplate`<td${addAttribute([
		"ledger__cell",
		"ledger__cell--numeric",
		Cell.Delta ? Delta[Cell.Delta] : "",
		Cell.Align === "right" ? "ledger__value" : ""
	], "class:list")}> ${Cell.Delta && renderTemplate`<span class="ledger__arrow"> ${Cell.Delta === "up" ? "▲" : "▼"} </span>`} ${Cell.Tag ? renderTemplate`<span${addAttribute(Tag[Cell.Tag], "class")}>${Cell.Text}</span>` : Cell.Text} </td>`)} </tr>`)} </tbody> </table> </div> </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineLedger.astro", void 0);
// Source/Component/StudyLedger.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$StudyLedger = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$StudyLedger;
	const { Scale = "compact" } = Astro.props;
	const Reduction = Figure("study.reduction.center");
	const Band = Figure("study.reduction.band");
	const Sessions = Figure("study.sessions");
	const SavedTokens = Figure("study.tokens.saved");
	const LeadSize = Scale === "full" ? "metric" : "metric metric--compact";
	const Rows = [
		{
			Id: "study.tokens.recorded",
			Label: "Recorded context"
		},
		{
			Id: "study.tokens.expanded",
			Label: "Expanded reconstruction"
		},
		{
			Id: "study.tokens.saved",
			Label: "Estimated tokens saved"
		},
		{
			Id: "study.reduction.percent",
			Label: "Estimated context reduction (point estimate)"
		},
		{
			Id: "study.reduction.band",
			Label: "Sensitivity band"
		},
		{
			Id: "study.api-calls",
			Label: "Calls analysed"
		},
		{
			Id: "study.sessions.saved",
			Label: "Sessions with nonzero estimated reduction"
		},
		{
			Id: "study.sessions.unsaved",
			Label: "Sessions with no estimated reduction"
		},
		{
			Id: "study.median-ratio",
			Label: "Median session ratio"
		},
		{
			Id: "study.average-per-call",
			Label: "Average saved per call"
		},
		{
			Id: "study.retrieval.tokens",
			Label: "Tokens returned by retrieval (the re-entry toll)"
		},
		{
			Id: "study.retrieval.calls",
			Label: "Retrieval calls"
		},
		{
			Id: "study.retrieval.share",
			Label: "Retrieval as a share of the saving"
		},
		{
			Id: "study.retrieval.factor",
			Label: "Full output paid again instead would have cost"
		}
	].map(({ Id, Label }) => ({
		Label,
		Fact: Figure(Id)
	}));
	const KindTag = {
		measured: {
			Tag: "MEASURED",
			Class: "telemetry-tag telemetry-tag--teal"
		},
		estimated: {
			Tag: "ESTIMATED",
			Class: "telemetry-tag telemetry-tag--canary"
		},
		simulated: {
			Tag: "SIMULATED",
			Class: "telemetry-tag telemetry-tag--crimson"
		},
		derived: {
			Tag: "DERIVED",
			Class: "telemetry-tag"
		}
	};
	return renderTemplate`${maybeRenderHead($$result)}<div class="blueprint-section"> <!-- THE MATRIX PLATE. \`grunge\` + \`data-grunge\` put the ink at the plate's
	     EDGE (\`mode="edge"\`), never under the readings: a splatter across a
	     column of digits is a stain on the instrument, and the readings are the
	     one thing on this block that must stay sharp. --><div class="grunge shell-card" data-grunge data-grunge-mode="edge"> <!-- RIBBON: what was measured, then the corpus it was taken over. Two
		     telemetry tags - metadata, not a sentence, which is why they are
		     chips on their own band and not prose. --><div class="ledger__ribbon"> <span class="telemetry-tag telemetry-tag--teal">
MEASURED, ${Study.Measured.toUpperCase()} </span> <span class="telemetry-tag"> ${Study.Sessions} HERMES SESSIONS &bull; ${Study.ApiCalls} API CALLS &bull;${" "} ${Study.Period.toUpperCase()} </span> </div> <!-- THE LEAD CELL: one figure, at the metric scale, with its unit as a
		     child so the two never separate on a narrow viewport. The crimson
		     spine is this cell's identity - it is the result, and the grid below
		     is what the result is computed from. --> <div class="ledger__lead"> <div class="section-index">ESTIMATED CONTEXT REDUCTION</div> <div${addAttribute(`mt-2 !text-stamped-canary ${LeadSize}`, "class")}> ${Reduction.Value} <span class="metric__unit">${Reduction.Unit}</span> </div> <p class="mt-3 max-w-2xl type-body text-bone-newsprint">
Across ${Sessions.Value} recorded sessions, with a sensitivity band of ${Band.Value}. The
				band is the result: ${SavedTokens.Value} tokens is the same reconstruction counted at the
				centre of that range.
</p> <p class="mt-2 max-w-2xl type-body text-zinc-dust"> <span class="type-meta">${Reduction.Kind.toUpperCase()}</span> &bull; ${Reduction.Scope} </p> </div> <!-- THE GRID: one question per row, every row carrying its own unit, its
		     own kind and its own scope. Recessed into the plate (the fill-only
		     \`tier-well\`, so the plate's own 1px edge stays the frame and no
		     second edge paints beside it), separated by hairlines, every figure
		     tabular so the digits line up down the column. The scroll container
		     is the inner box: the plate's frame stays put, the rows move. --> <div class="tier-well overflow-x-auto border-t border-[color:var(--tier-well-edge)]"> <table class="w-full min-w-[46rem] border-collapse font-mono text-base"> <thead class="bg-asphalt-panel"> <tr class="border-b border-[color:var(--tier-well-edge)]"> <th scope="col"${addAttribute(["type-meta text-left !font-black text-zinc-dust", Cell], "class:list")}>
MEASURE
</th> <th scope="col"${addAttribute(["type-meta whitespace-nowrap text-right !font-black text-zinc-dust", Cell], "class:list")}>
VALUE
</th> <th scope="col"${addAttribute(["type-meta whitespace-nowrap text-left !font-black text-zinc-dust", Cell], "class:list")}>
UNIT
</th> <th scope="col"${addAttribute(["type-meta whitespace-nowrap text-left !font-black text-zinc-dust", Cell], "class:list")}>
KIND
</th> <th scope="col"${addAttribute(["type-meta text-left !font-black text-zinc-dust", Cell], "class:list")}>
SCOPE
</th> </tr> </thead> <tbody> ${Rows.map(({ Label, Fact }) => renderTemplate`<tr class="border-b border-oxblood-dark/60 align-top last:border-b-0 hover:bg-[color-mix(in_srgb,var(--raw-blood)_10%,transparent)]"> <td${addAttribute(["leading-tight text-bone-newsprint", Cell], "class:list")}>${Label}</td> <td${addAttribute(["whitespace-nowrap text-right font-black tabular-nums text-bone-white", Cell], "class:list")}> ${Fact.Value} </td> <td${addAttribute(["type-meta whitespace-nowrap text-zinc-dust", Cell], "class:list")}> ${Fact.Unit} </td> <td${addAttribute(["whitespace-nowrap", Cell], "class:list")}> <span${addAttribute(KindTag[Fact.Kind].Class, "class")}>${KindTag[Fact.Kind].Tag}</span> </td> <td${addAttribute(["type-body text-zinc-dust", Cell], "class:list")}>${Fact.Scope}</td> </tr>`)} </tbody> </table> </div> </div> <!-- HOW IT WAS MEASURED: the method as a block, not a footnote. The study is
	     a reconstruction by the author, and a reconstruction establishes nothing
	     about task success or about anyone else's sessions. The canary spine is
	     the qualifier's identity - it is what separates a limit from a reading. --> <div class="mt-8 border-l-4 border-stamped-canary tier-shell p-4"> <div class="type-meta font-black text-stamped-canary">HOW THIS WAS MEASURED</div> <p class="mt-3 max-w-3xl type-body text-bone-newsprint">
The study is the author's own work - multi-agent atomization fan-outs, merge/PR work,
			plugin integration - reconstructed payload-by-payload from the session transcripts.
</p> <p class="mt-3 max-w-3xl type-body text-bone-newsprint">
It is an author-run reconstruction, not a randomised comparison: it establishes neither
			better task success nor universal cost savings. What it measures is how much context the
			markers replaced in these sessions, and what that reconstruction cost in tokens.
</p> <p class="mt-3 max-w-3xl type-body text-zinc-dust">
Every figure above carries its own method and the pinned revision it was extracted from
			- the register on the benchmarks page lists all of them with their IDs.
</p> </div> <!-- CAVEAT: its own bordered note, visually distinct --> <div class="mt-4 border-l-4 border-stamped-canary tier-shell p-4 font-mono text-base leading-relaxed text-bone-newsprint"> <span class="font-black uppercase tracking-widest text-stamped-canary">CAVEAT &bull; </span>
THE EXACT PERCENTAGE IS A BAND: ${Study.Band} ACROSS A ${Study.CharsPerTok} CHARS/TOKEN
		SENSITIVITY RANGE, CENTERED ${Study.BandCenter}.
</div> <!-- SRC: the plain citation token the CodeMentions pass links at build time --> <div class="mt-3 type-meta text-zinc-dust">SRC: ${Cite(Study.From)}.</div> </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/StudyLedger.astro", void 0);
// Source/pages/benchmarks.astro
var benchmarks_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Benchmarks,
	file: () => $$file,
	url: () => $$url
});
var $$Benchmarks = createComponent(($$result, $$props, $$slots) => {
	const AccentInk = {
		crimson: "--raw-blood",
		canary: "--stamped-canary",
		teal: "--weathered-teal",
		bone: "--bone-newsprint"
	};
	const Chart = {
		"benchmark.class.browser-snapshot": {
			Label: "BROWSER SNAPSHOT",
			Color: "teal",
			Corpus: "one serialised page: every element, every attribute, the same wrapper nesting repeated to the leaves"
		},
		"benchmark.class.build-output": {
			Label: "BUILD OUTPUT",
			Color: "raw",
			Corpus: "a compiler and linker log - repeated paths, repeated warning shapes, one error restated at the end"
		},
		"benchmark.class.json-blob": {
			Label: "JSON",
			Color: "canary",
			Corpus: "one structured API payload: keys, nesting, and the values a reader needs kept byte-exact"
		},
		"benchmark.class.git-diff": {
			Label: "GIT DIFF",
			Color: "raw",
			Corpus: "a patch: hunk headers, context lines, and the same file path on both sides of every change"
		},
		"benchmark.class.terminal-output": {
			Label: "TERMINAL",
			Color: "canary",
			Corpus: "shell output - listings, test runners, the progress lines that carry no verdict"
		}
	};
	const Classes = [...Benchmark.Classes].sort((Left, Right) => Right.Ratio - Left.Ratio).map((Entry) => {
		const Id = ClassId(Entry.Label);
		const Vocabulary = Chart[Id];
		if (Vocabulary === void 0) throw new Error(`[Benchmarks] the per-type table registers "${Id}" (README label "${Entry.Label}"), which this page has no label or corpus sentence for. Add it to the Chart map in Source/pages/benchmarks.astro.`);
		return {
			Id,
			...Vocabulary,
			Fact: Figure(Id),
			Ratio: Entry.Savings,
			Percent: Entry.Percent,
			Scale: Entry.Ratio,
			Without: Entry.Without,
			With: Entry.With
		};
	});
	const Peak = Classes[0];
	const RunnerUp = Classes[1];
	const Floor = Classes[Classes.length - 1];
	const Ticks = [
		1,
		10,
		100
	].map((Value) => ({
		Label: `${Value}×`,
		Left: Math.log10(Value) / Math.log10(Peak.Scale) * 100
	}));
	const Ceiling = {
		Id: "benchmark.ceiling",
		Tape: "MAX COMPRESSION",
		TapeColor: "raw",
		Accent: "crimson",
		Caption: "THE CEILING // THE BEST CASE, ON ONE DOCUMENT",
		Body: [
			"Best case on large low-entropy prose.",
			`${Benchmark.Overall} overall on the same corpus, ${Benchmark.CorpusIn} → ${Benchmark.CorpusOut}.`,
			`The best case is not part of the per-type chart - that chart peaks at ${Peak.Ratio}.`
		],
		Src: `SRC: ${Cite(Benchmark.From)}`
	};
	const Median = {
		Id: "benchmark.median",
		Tape: "MEDIAN // THE TYPICAL CASE",
		TapeColor: "bone",
		Accent: "bone",
		Caption: "MEDIAN REDUCTION ACROSS THE REPORTED SAMPLES",
		Body: [
			"Fewer tokens on tool output - the median the README reports for its per-type table.",
			`It is the number the README reports for that table, and it is the one to plan a context budget against.`,
			`That over-reads a median across ${Classes.length} selected samples. What a session actually saves depends on the output type, on the size of that output, on how much of it repeats, on where the per-type thresholds sit, and on how often the agent retrieves instead of reading the preview.`
		],
		Src: `SRC: ${Cite(Benchmark.From)}`
	};
	const Latency = {
		Id: "benchmark.latency",
		Tape: "END-TO-END",
		TapeColor: "canary",
		Accent: "canary",
		Caption: "THE LATENCY BAND",
		Body: [`Including the HTTP round-trip; the headline figure is ${Benchmark.LatencyHeadline}.`, "Eight milliseconds is the fast case, forty the slow one: one call, compression and retrieve path included."],
		Src: `SRC: ${Cite(Benchmark.From)}`
	};
	const Classification = {
		Id: "benchmark.classify",
		Tape: "CLASSIFICATION",
		TapeColor: "teal",
		Accent: "teal",
		Caption: "THE FLOOR",
		Body: ["Classification is the step before it: naming the content type costs nanoseconds, and it runs on every call."],
		Src: `SRC: ${Cite(Benchmark.From)}`
	};
	const CompressStep = {
		Id: "benchmark.compress-step",
		Tape: "THE COMPRESS STEP",
		TapeColor: "teal",
		Accent: "teal",
		Caption: "THE STEP BEFORE THE PREVIEW",
		Body: [`The whole compress step is ${Narrative.CompressStep}.`],
		Src: `SRC: ${Cite(Narrative.From)}`
	};
	const CeilingFact = Figure(Ceiling.Id);
	const MedianFact = Figure(Median.Id);
	const LatencyFact = Figure(Latency.Id);
	const ClassificationFact = Figure(Classification.Id);
	const CompressStepFact = Figure(CompressStep.Id);
	const Harness = [
		{
			Tag: "01",
			Label: "bench_01_corpus - the standard corpus, end to end",
			Body: "Spawns the cache and token proxies on benchmark ports, pushes one sample per content type through <code>/ccr/create</code>, retrieves each one through <code>/retrieve</code>, then prints the per-label table. Exits non-zero on any retrieve miss, so a ratio it prints is a ratio that survived the round-trip."
		},
		{
			Tag: "02",
			Label: "bench_02_threshold - the size boundaries",
			Body: "Sweeps <code>/ccr/create</code> and <code>/retrieve</code> across the threshold-adjacent sizes - the inline zone, then 1 KB, 4 KB and 8 KB - in both cache and token mode. Content is always stored, a hash is always returned, and the stored bytes come back byte-for-byte; a boundary violation exits non-zero."
		},
		{
			Tag: "03",
			Label: "bench_03_retrieve - retrieval correctness",
			Body: "Ten labelled cases: same-port retrieve in both modes, cross-port isolation in both directions, the inline zone, UTF-8 content retrieved byte-for-byte, a fifty-insert storm with no misses, deletion, and a double store of the same content. This is the example that proves a marker is a promise and not a summary."
		},
		{
			Tag: "04",
			Label: "bench_04_ema - the auto-tune loop",
			Body: "Drives the compression-ratio EMA through three phases: ten highly repetitive payloads, then ten near-incompressible ones, then ten more repetitive ones. The EMA must climb, decay, and partially recover - and the per-type threshold multipliers must not flip a linter or build-output sample to the wrong half."
		},
		{
			Tag: "05",
			Label: "bench_05_type_coverage - one sample per class",
			Body: "Pushes one representative sample per content type through a token-mode proxy and reports each type's ratio plus the classifier's verdict. Build, diff, git, gitlog, ls, test, grep, Rust, Python, Go, JavaScript, JSON, error, log, linter and plain text: a type that fails to compress, or whose retrieve round-trip misses, exits non-zero."
		}
	];
	const Needs = [
		{
			Label: "A source checkout",
			Text: "The examples live in the aphrodite crate, not in the published binary - clone the repository, because cargo install ships the binary and not the harness."
		},
		{
			Label: "A Rust toolchain",
			Text: "The versions the site builds against are on the SETUP page; the harness is ordinary cargo, so a toolchain that builds the crate builds the benchmarks."
		},
		{
			Label: "Initialised submodules",
			Text: "The plugin and the vendored Headroom fork are submodules - without them the crate resolves but the integration path does not."
		},
		{
			Label: "The release profile",
			Text: "Every figure is a release run - the harness commands pass --release - and a debug build is not comparable to the plates."
		}
	];
	const Shapes = [
		{
			Id: "study.band.chat-only",
			Label: "CHAT-ONLY SESSIONS",
			Color: "zinc"
		},
		{
			Id: "study.band.light-developer",
			Label: "LIGHT DEVELOPER SESSIONS",
			Color: "teal"
		},
		{
			Id: "study.band.tool-heavy",
			Label: "TOOL-HEAVY SESSIONS",
			Color: "teal"
		},
		{
			Id: "study.band.pure-tool",
			Label: "SIMULATED PURE-TOOL LOOP",
			Color: "raw",
			Note: "a simulated diff+ls+build+search workload - a stress test, not real usage"
		}
	].map(({ Id, Label, Color, ...Rest }) => ({
		Id,
		Label,
		Color,
		...Rest,
		...Band(Id)
	}));
	const RecordedShapes = Shapes.filter(({ Kind }) => Kind !== "simulated");
	const SimulatedShapes = Shapes.filter(({ Kind }) => Kind === "simulated");
	const Audit = [
		{
			Label: "COVERAGE // SESSIONS WITH A SAVING",
			Tone: "telemetry-tag--teal",
			Fact: Figure("study.sessions.saved")
		},
		{
			Label: "RATES // MEDIAN SESSION",
			Tone: "telemetry-tag--canary",
			Fact: Figure("study.median-ratio")
		},
		{
			Label: "RATES // AVERAGE PER CALL",
			Tone: "telemetry-tag--canary",
			Fact: Figure("study.average-per-call")
		},
		{
			Label: "THE RETRIEVAL TAX // THE COST SIDE",
			Tone: "telemetry-tag--crimson",
			Fact: Figure("study.retrieval.share")
		}
	];
	const BarColor = {
		zinc: "bg-zinc-dust",
		teal: "bg-weathered-teal",
		raw: "bg-raw-blood"
	};
	const BarText = {
		zinc: "text-zinc-dust",
		teal: "text-weathered-teal",
		raw: "text-bone-white"
	};
	const ProvenanceRows = [
		{
			Fact: "the measured study",
			From: Provenance.Study,
			Feeds: "the session ledger, the session-shape bands, the retrieval tax"
		},
		{
			Fact: "the benchmark corpus",
			From: Provenance.Benchmark,
			Feeds: "the four plates and the per-type chart: the ceiling, the corpus totals, the per-type rows, the latency band, the classification floor"
		},
		{
			Fact: "the classification surface",
			From: Provenance.Narrative,
			Feeds: "the catalog count and the threshold tiers"
		},
		{
			Fact: "the classification registry",
			From: Provenance.Registry,
			Feeds: "the registry size the catalog footnote quotes"
		},
		{
			Fact: "the release history",
			From: Provenance.Releases,
			Feeds: "the release register on /versions/"
		}
	].map(({ Fact, From, Feeds }) => ({ Cells: [
		{ Text: Fact },
		{ Text: From },
		{ Text: Feeds }
	] }));
	const KindTag = {
		measured: "teal",
		estimated: "canary",
		simulated: "crimson",
		derived: "plain"
	};
	const RegisterRows = Figures.map(({ Id, Kind, Value, Unit, Scope, Method }) => ({ Cells: [
		{ Text: Id },
		{
			Text: Kind,
			Tag: KindTag[Kind]
		},
		{
			Text: Value,
			Align: "right"
		},
		{ Text: Unit },
		{ Text: Scope },
		{ Text: Method }
	] }));
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "BENCHMARKS // APHRODITE",
		"Description": `Aphrodite benchmarks: up to ${Benchmark.Ceiling} best case on the standard corpus (${Benchmark.Overall} overall, ${Benchmark.CorpusIn} to ${Benchmark.CorpusOut}), ${Benchmark.Latency} end-to-end, ${Benchmark.Classify} classification, and the ${Study.Sessions}-session real-world study.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageShell", $$PageShell, {
		"Rhythm": "wide",
		"Crumbs": true
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHeader", $$PageHeader, {
		"Tape": "BENCHMARKS // MEASURED FIGURES",
		"Title": "Benchmarks",
		"Lead": [
			`A tool call's output becomes part of the model's context, and a long result is paid for on every turn that carries it. These are the measurements of what Aphrodite leaves of it.`,
			`They come from the project's own benchmarks and from a study of the author's real Hermes sessions.`,
			`Benchmark ratios are measured; session savings are estimated, and the uncertainty band is stated with the estimate.`,
			`Every plate carries the corpus it was measured on and the SRC line that contains it, and the harness at the foot of the page re-derives the measured figures from a checkout.`,
			`Every figure is extracted from a pinned revision of the repository - ${SourceRevision.Branch} at ${SourceRevision.Short} for this build - so what a reader checks is the number the tree carried, not a number someone typed here.`
		]
	})}  ${maybeRenderHead($$result)}<section class="relative w-full" data-reveal> <div class="max-w-3xl"> <p class="type-body text-bone-newsprint">
Read the four together and the shape of the product is in them:
</p> <ul class="prose-flow mt-4 max-w-3xl type-body text-bone-newsprint"> <li class="border-l-4 border-raw-blood pl-4">
a ceiling that belongs to one long document
</li> <li class="border-l-4 border-raw-blood pl-4">a band for the round-trip</li> <li class="border-l-4 border-raw-blood pl-4">
a floor for the step that runs on every call
</li> <li class="border-l-4 border-raw-blood pl-4">
and a median for the ordinary case.
</li> </ul> <p class="mt-4 max-w-3xl type-body text-bone-newsprint">
The ceiling and the median belong to the next section - how much output a marker
					replaces. The round-trip band and the classification floor belong to the one
					after it - what that replacement costs. The per-class mechanism follows, then
					the recorded sessions and the field audit, the harness, and the limits, in that
					order.
</p> <p class="mt-3 max-w-3xl type-body text-zinc-dust">
The ceiling is the number quoted in the repository's first line; the median is
					the ordinary case - the one to plan a context budget against, as far as a median
					over ${Classes.length} selected samples can tell you.
</p> </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [`SRC: ${Cite(Benchmark.From)} (the ceiling, the corpus, the latency band, the classification floor)`, `SRC: ${Cite(Study.From)} (the ${Study.Sessions}-session study)`] })} </section>  <section class="blueprint-section relative w-full" data-reveal> <p class="section-index">01 // BENCHMARKS // THE HEADLINE // FOUR FIGURES</p> <h2 id="headline" class="mt-3 max-w-4xl type-section text-bone-white">
How much output is replaced?
</h2> <p class="mt-6 max-w-3xl type-body text-bone-newsprint">
What follows is the best case and the corpus it belongs to, with the per-class
				detail in the mechanism chapter. Every figure in this section is measured -
				arithmetic on a fixed corpus - and the method that computes it is stated before the
				first one so the unit is never in doubt.
</p> <!-- THE CEILING: the page's one expressive assembly, and its brand moment.
			     The inverted sand pod - a bone sheet pasted on the dark table with the
			     grammar's hard offset plane. Its caption and body carry the qualifier
			     that keeps it honest. The grunge ink is oxblood here rather than the
			     default bone: the drawing that reads as a light bloom on a dark plate
			     reads as a stain on a printed sheet, which is what this one is. --> <article class="grunge grunge--oxblood tier-inverted zine-box-crimson relative mt-16 flex -rotate-[1.8deg] flex-col border-4 border-blood-crimson p-8 max-sm:rotate-0 sm:p-12" data-grunge> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "corner",
		"Label": Ceiling.Tape,
		"Color": Ceiling.TapeColor
	})} <div class="mt-2 type-meta font-black">${Ceiling.Caption}</div> <div class="metric mt-3 !text-carbon-void drop-shadow-[3px_3px_0px_#520612]"> ${CeilingFact.Value} <span class="metric__unit !text-carbon-void">${CeilingFact.Unit}</span> </div> <div class="mt-3 type-body">${CeilingFact.Scope}</div> <div class="mt-4 border-t border-carbon-void pt-3 prose-flow"> ${Ceiling.Body.map((Sentence) => renderTemplate`<p class="type-body">${Sentence}</p>`)} </div> <div class="mt-auto pt-6 type-meta text-carbon-void">${Ceiling.Src}</div> </article> <!-- THE WHOLE CORPUS, as records: the totals the ceiling is a best case of.
			     Three shell cards rather than three ruled columns, so each total is a
			     module with its own edge rather than a value floating on the ground. --> <div class="mt-16"> <div class="section-kicker">THE WHOLE CORPUS, COUNTED AT ONCE</div> <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3"> ${[
		{
			Id: "benchmark.corpus.in",
			Label: "CORPUS IN"
		},
		{
			Id: "benchmark.corpus.out",
			Label: "CORPUS OUT"
		},
		{
			Id: "benchmark.overall",
			Label: "OVERALL RATIO"
		}
	].map(({ Id, Label }) => {
		const Fact = Figure(Id);
		return renderTemplate`<article class="grunge shell-card flex flex-col p-6" data-grunge> <div class="type-meta font-bold text-zinc-dust">${Label}</div> <div class="mt-3 font-headline text-2xl font-black tracking-tight text-bone-white"> ${Fact.Value} </div> <div class="mt-2 type-body text-zinc-dust"> <span class="type-meta">${Fact.Unit}</span> &bull; ${Fact.Scope} </div> </article>`;
	})} </div> </div> <!-- THE METHOD: what the number is before it is a number. A well, because a
			     definition is a channel cut into the page rather than a module laid on
			     top of it. --> <div id="method" class="mt-16"> <div class="grunge well p-6 sm:p-8" data-grunge> <div class="section-kicker">METHOD // ONE PAYLOAD, COUNTED TWICE</div> <h3 class="mt-3 max-w-3xl type-sub text-bone-white">How a ratio is computed</h3> <div class="prose-flow mt-6 max-w-3xl"> <p class="type-body text-bone-newsprint">
A ratio is one payload counted twice: the tokens the tool produced, the
							tokens the model actually reads, and the first divided by the second.
</p> <p class="type-body text-bone-newsprint">
Nothing else enters the number - no weighting, no projection, no
							averaging across calls.
</p> <p class="type-body text-bone-newsprint">
The denominator is not the raw output minus a preview.
</p> <p class="type-body text-bone-newsprint">
It is the whole replacement the model receives: the marker, its type,
							its size, and the short preview that lets the model decide whether the
							bytes are worth retrieving.
</p> </div> <div class="mt-8"> ${renderComponent($$result, "ZineLedger", $$ZineLedger, {
		"Headers": [
			"STEP",
			"WHAT IS COUNTED",
			"WHERE IT COMES FROM"
		],
		"Rows": [
			{ Cells: [
				{ Text: "BEFORE" },
				{ Text: "the payload as the tool produced it, in tokens" },
				{ Text: "the corpus sample" }
			] },
			{ Cells: [
				{ Text: "AFTER" },
				{ Text: "the marker plus its preview, in tokens" },
				{ Text: "the compressed sample" }
			] },
			{ Cells: [
				{
					Text: "RATIO",
					Delta: "up"
				},
				{ Text: "before ÷ after, reported as a whole multiple" },
				{
					Text: "the before and after counts",
					Delta: "up"
				}
			] }
		]
	})} </div> <div class="prose-flow mt-8 max-w-3xl"> <p class="type-body text-bone-newsprint">
The corpus is fixed, and it is the same corpus for every row: the
							per-type table takes one representative sample per output class, and the
							headline figure aggregates the whole set - ${Benchmark.CorpusIn} in,${" "} ${Benchmark.CorpusOut} out, ${Benchmark.Overall} overall, with the single
							best document reaching ${Benchmark.Ceiling}.
</p> <p class="type-body text-zinc-dust">
The three figures that are timed rather than counted are in the next
							section, on their own axis: the classification floor, the compress step,
							and the round-trip a client waits for.
</p> </div> </div> </div> <!-- THE MEDIAN: the ordinary case, a record under the method that defines
			     it. Bone accent - the plainest of the four figures, and its colour
			     says so. --> <div class="mt-16"> <article class="grunge shell-card flex flex-col p-6 sm:p-8"${addAttribute(`border-left: 4px solid var(${AccentInk[Median.Accent]})`, "style")} data-grunge> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "corner",
		"Label": Median.Tape,
		"Color": Median.TapeColor
	})} <div class="section-kicker">${Median.Caption}</div> <div class="mt-3 font-headline text-3xl font-black tracking-tighter text-bone-white"> ${MedianFact.Value} </div> <div class="mt-2 type-body text-zinc-dust"> <span class="type-meta">${MedianFact.Unit}</span> &bull; ${MedianFact.Scope} </div> <div class="mt-4 prose-flow"> ${Median.Body.map((Sentence) => renderTemplate`<p class="type-body text-bone-newsprint">${Sentence}</p>`)} </div> <div class="mt-auto pt-6 type-meta text-zinc-dust">${Median.Src}</div> </article> </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [`SRC: ${Cite(Benchmark.From)} (the ceiling, the corpus)`] })} </section>  <section class="blueprint-section relative w-full" data-reveal> <p class="section-index">02 // PILLARS // OVERHEAD</p> <h2 id="overhead" class="mt-3 max-w-4xl type-section text-bone-white">
What overhead does it add?
</h2> <p class="mt-6 max-w-3xl type-body text-bone-newsprint">
Timing is reported on a different axis on purpose. A ratio says how much is
				replaced; it says nothing about what the replacement costs to produce, and a reader
				deciding whether to put a proxy in front of their client needs the second number
				more than the first.
</p> <!-- THE ROUND-TRIP: the pillar a reader weighing the proxy actually needs,
			     so it takes the full width and the canary accent. --> <div class="mt-12"> <article class="grunge shell-card flex flex-col p-6 sm:p-8"${addAttribute(`border-left: 4px solid var(${AccentInk[Latency.Accent]})`, "style")} data-grunge> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "corner",
		"Label": Latency.Tape,
		"Color": Latency.TapeColor
	})} <div class="section-kicker">${Latency.Caption}</div> <div class="mt-3 font-headline text-3xl font-black tracking-tighter text-bone-white"> ${LatencyFact.Value} </div> <div class="mt-2 type-body text-zinc-dust"> <span class="type-meta">${LatencyFact.Unit}</span> &bull; ${LatencyFact.Scope} </div> <div class="mt-4 prose-flow"> ${Latency.Body.map((Sentence) => renderTemplate`<p class="type-body text-bone-newsprint">${Sentence}</p>`)} </div> <div class="mt-auto pt-6 type-meta text-zinc-dust">${Latency.Src}</div> </article> </div> <!-- THE FLOOR AND THE STEP: the two costs too small to see on a millisecond
			     axis, which is exactly why they are stated. One card each, both teal,
			     because both belong to the classification stage. --> <div class="mt-16"> <div class="section-kicker">TWO COSTS TOO SMALL FOR THE SAME AXIS</div> <div class="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2"> ${[{
		Pillar: Classification,
		Fact: ClassificationFact
	}, {
		Pillar: CompressStep,
		Fact: CompressStepFact
	}].map(({ Pillar, Fact }) => renderTemplate`<article class="grunge shell-card flex flex-col p-6 sm:p-8"${addAttribute(`border-left: 4px solid var(${AccentInk[Pillar.Accent]})`, "style")} data-grunge> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "corner",
		"Label": Pillar.Tape,
		"Color": Pillar.TapeColor
	})} <div class="section-kicker">${Pillar.Caption}</div> <div class="mt-3 font-headline text-3xl font-black tracking-tighter text-bone-white"> ${Fact.Value} </div> <div class="mt-2 type-body text-zinc-dust"> <span class="type-meta">${Fact.Unit}</span> &bull; ${Fact.Scope} </div> <div class="mt-4 prose-flow"> ${Pillar.Body.map((Sentence) => renderTemplate`<p class="type-body text-bone-newsprint">${Sentence}</p>`)} </div> <div class="mt-auto pt-6 type-meta text-zinc-dust">${Pillar.Src}</div> </article>`)} </div> </div> <!-- WHAT THE OVERHEAD BUYS: the round-trip is not a fee for nothing. Two
			     records, then the prose that ties the three timed figures together. --> <div class="mt-16"> <div class="section-kicker">WHAT THE OVERHEAD BUYS</div> <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"> ${[{
		Id: "benchmark.round-trips",
		Label: "ROUND TRIPS"
	}, {
		Id: "narrative.marker-tokens",
		Label: "THE REPLACEMENT ITSELF"
	}].map(({ Id, Label }) => {
		const Fact = Figure(Id);
		return renderTemplate`<article class="grunge shell-card flex flex-col p-6" data-grunge> <div class="type-meta font-bold text-zinc-dust"> ${Label} &bull; ${Fact.Kind.toUpperCase()} </div> <div class="mt-3 font-headline text-xl font-black tracking-tight text-bone-white"> ${Fact.Value} </div> <div class="mt-2 type-body text-zinc-dust"> <span class="type-meta">${Fact.Unit}</span> &bull; ${Fact.Scope} </div> </article>`;
	})} </div> <div class="prose-flow mt-8 max-w-3xl"> <p class="type-body text-bone-newsprint">
Classification is ${Benchmark.Classify} and is timed on its own because it
						runs on every call.
</p> <p class="type-body text-bone-newsprint">
The whole compress step is ${Narrative.CompressStep}.
</p> <p class="type-body text-bone-newsprint"> ${Benchmark.Latency} is what a client waits once the HTTP round-trip is
						included.
</p> <p class="type-body text-bone-newsprint">
And the ${Benchmark.LatencyHeadline} headline sits near the fast end of that
						band.
</p> </div> </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [`SRC: ${Cite(Benchmark.From)} (the latency band, the classification floor, the round trips)`, `SRC: ${Cite(Narrative.From)} (the compress step and the marker format)`] })} </section>  <section class="blueprint-section relative w-full" data-reveal> <p class="section-index">03 // MECHANISM // MEASURED // PER-TYPE COMPRESSION</p> <h2 id="per-type" class="mt-3 max-w-4xl type-section text-bone-white">
Ratio by output class
</h2> <p class="mt-6 max-w-3xl type-body text-bone-newsprint">
The bars are drawn at the ratios' log-scale positions, so the top row sits at full
				width and each subsequent row reads as a step down. Because a log position is a
				ranking rather than a proportion, the counts behind each row are stated first.
</p>  <div class="grunge well mt-8" data-grunge data-grunge-mode="edge"> <div class="overflow-x-auto"> <table class="w-full min-w-[46rem] border-collapse font-mono text-base"> <thead class="bg-asphalt-panel"> <tr class="border-b-2 border-blood-crimson"> <th class="type-meta whitespace-nowrap px-4 py-2 text-left !font-black uppercase text-zinc-dust sm:px-5">
SAMPLE
</th> <th class="type-meta whitespace-nowrap px-4 py-2 text-right !font-black uppercase text-zinc-dust sm:px-5">
ORIGINAL TOKENS
</th> <th class="type-meta whitespace-nowrap px-4 py-2 text-right !font-black uppercase text-zinc-dust sm:px-5">
REPLACEMENT TOKENS
</th> <th class="type-meta whitespace-nowrap px-4 py-2 text-right !font-black uppercase text-zinc-dust sm:px-5">
RATIO
</th> </tr> </thead> <tbody> ${Classes.map(({ Label, Corpus, Without, With, Ratio }) => renderTemplate`<tr class="border-b border-oxblood-dark/60 align-top last:border-b-0 hover:bg-[color-mix(in_srgb,var(--raw-blood)_10%,transparent)]"> <td class="px-4 py-2 text-left sm:px-5"> <div class="font-black text-bone-white">${Label}</div> <div class="mt-1 max-w-md type-body text-zinc-dust"> ${Corpus} </div> </td> <td class="whitespace-nowrap px-4 py-2 text-right tabular-nums text-bone-newsprint sm:px-5"> ${Without} </td> <td class="whitespace-nowrap px-4 py-2 text-right tabular-nums text-bone-newsprint sm:px-5"> ${With} </td> <td class="whitespace-nowrap px-4 py-2 text-right font-black tabular-nums text-weathered-teal sm:px-5"> ${Ratio} </td> </tr>`)} </tbody> </table> </div> </div> <div class="mt-12"> <div class="type-meta font-bold text-zinc-dust">
RATIO BY OUTPUT CLASS (README STANDARD CORPUS, LOG SCALE):
</div> <div class="mt-6 space-y-8"> ${Classes.map(({ Label, Ratio, Percent, Color, Corpus }) => renderTemplate`<div> ${renderComponent($$result, "ZineStatBar", $$ZineStatBar, {
		"Label": Label,
		"Ratio": Ratio,
		"Percent": Percent,
		"Color": Color
	})} <p class="mt-2 max-w-3xl type-body text-zinc-dust">${Corpus}</p> </div>`)} </div> <!-- THE AXIS: the decade marks, so the log scale is readable rather than
				     assumed. Same function the generator used for the bar widths. --> <div class="mt-10"> <div class="relative h-2 border-t border-oxblood-dark"> ${Ticks.map(({ Label, Left }, Index) => renderTemplate`<div${addAttribute(Index === 0 ? "absolute top-0" : "absolute top-0 -translate-x-1/2", "class")}${addAttribute(`left: ${Left}%`, "style")}> <div class="h-2 w-px bg-zinc-dust"></div> <div class="mt-1 whitespace-nowrap type-meta text-zinc-dust"> ${Label} </div> </div>`)} </div> <p class="mt-10 max-w-3xl type-body text-zinc-dust">
Decade marks on the log axis: ${Ticks.map(({ Label }) => Label).join(", ")}.
						The top bar reaches ${Peak.Ratio}, which is why the last mark sits short of
						the right edge.
</p> </div> </div> <div class="prose-flow mt-12 border-t border-oxblood-dark pt-8 max-w-3xl"> <p class="type-body text-bone-newsprint">
The chart peaks at <span class="text-stamped-canary">${Peak.Ratio}</span>, on the
					browser snapshot: a serialised DOM repeats the same wrapper nesting down to the
					leaves, and the ratio is a measure of exactly that repetition.
</p> <p class="type-body text-bone-newsprint">
The ${Benchmark.Ceiling} plate is deliberately outside this chart.
</p> <p class="type-body text-bone-newsprint">
It is not a sixth class: it is the best case on a single long low-entropy
					document, while the ${Classes.length} per-class figures are one representative
					sample each and ${Benchmark.Overall} is the whole corpus counted at once.
</p> <p class="type-body text-bone-newsprint">
Plotting a best case beside five class samples would invite a comparison the
					number cannot support.
</p> <p class="type-body text-zinc-dust">
Read the chart as a ranking, not a promise: a diff, a build log and a terminal
					session are the ordinary material of an agent turn, and they land between${" "} ${Floor.Ratio} and ${RunnerUp.Ratio}, while the median the README reports for the
					same table is ${Benchmark.Median}.
</p> </div> <div class="mt-8"> ${renderComponent($$result, "ZineReveal", $$ZineReveal, {
		"Tag": "SUPPRESSED",
		"Cover": `the smallest row, ${Floor.Label} at ${Floor.Ratio}, is still a fifth of the tokens`,
		"Raw": `<span class="font-bold text-stamped-canary">${Floor.Ratio}</span> - the floor of the chart, and the floor is the useful number: a terminal dump that compresses ${Floor.Ratio} is a dump the model can afford to keep.`
	})} </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [`SRC: ${Cite(Benchmark.From)} (the per-type table)`] })} </section>  <section class="blueprint-section relative w-full" data-reveal> <p class="section-index">04 // PROFILE // THE SHAPE OF A SESSION // FOUR PAYOFFS</p> <h2 id="study" class="mt-3 max-w-4xl type-section text-bone-white">
What happened in recorded sessions?
</h2> <p class="mt-6 max-w-3xl type-body text-bone-newsprint">
The study takes ${Study.Sessions} real Hermes sessions -${" "} <span class="text-stamped-canary">${Study.ApiCalls}</span> API calls over three days
				- and reconstructs every call's payload from the session transcript.
</p> <p class="mt-3 max-w-3xl type-body text-bone-newsprint">
Each payload is counted twice: as the model saw it, with the CCR markers in place,
				and with every marker expanded back to the content it replaced, which is what stock
				Hermes would have sent.
</p> <p class="mt-3 max-w-3xl type-body text-bone-newsprint">
The difference between those two counts is the saving.
</p> <p class="mt-3 max-w-3xl type-body text-bone-newsprint">
Nothing is simulated in that arithmetic - the markers, the retrieval calls and the
				expansions are the ones the transcripts contain - but the expansion depends on a
				tokenizer, so the result is a band rather than a point.
</p> <div class="mt-12"> ${renderComponent($$result, "StudyLedger", $$StudyLedger, { "Scale": "full" })} </div> <!-- THE SHAPE OF A SESSION: three recorded shapes, then the simulated one in
			     its own block. A simulated workload is not a fourth observation. --> <div class="mt-16 border-t border-oxblood-dark pt-8"> <div class="section-kicker">THE SHAPE OF A SESSION // FOUR PAYOFFS</div> <h3 id="shape" class="mt-3 max-w-3xl type-sub text-bone-white">
Why the same engine reports four numbers
</h3> <div class="prose-flow mt-6 max-w-3xl"> <p class="type-body text-bone-newsprint">
Savings track tool-output volume, not session count.
</p> <p class="type-body text-bone-newsprint">
A chat-only session has nothing to compress, so it saves${" "} ${Band("study.band.chat-only").Range}.
</p> <p class="type-body text-bone-newsprint">
A light developer session saves ${Band("study.band.light-developer").Range}.
</p> <p class="type-body text-bone-newsprint">
A tool-heavy session lands in the ${Band("study.band.tool-heavy").Range}${" "}
band.
</p> <p class="type-body text-bone-newsprint">
And a simulated pure-tool loop - a diff, an ls, a build and a search on
						repeat - reaches ${Band("study.band.pure-tool").Range}.
</p> <p class="type-body text-bone-newsprint">
That last figure is a stress test, not real usage, and it is labelled as one
						where it is printed.
</p> </div> <div class="mt-10"> <div class="type-meta font-bold text-zinc-dust">
RECORDED SESSION SHAPES &bull; ESTIMATED &bull; PERCENT OF THE SESSION'S
						CONTEXT BUDGET
</div> <div class="mt-6 space-y-6"> ${RecordedShapes.map(({ Label, Range, Percent, Color }) => renderTemplate`<div> <div class="mb-1 flex flex-wrap justify-between gap-2 text-base font-bold"> <span class="text-bone-newsprint">${Label}</span> <span${addAttribute(BarText[Color], "class")}>${Range}</span> </div> <div class="flex h-4 w-full overflow-hidden border border-oxblood-dark bg-soot-black"> <div${addAttribute(`h-full ${BarColor[Color]}`, "class")}${addAttribute(`width: ${Percent}%;`, "style")}></div> </div> </div>`)} </div> </div> <div class="mt-10 border-l-4 border-raw-blood bg-asphalt-panel p-5">  <div class="type-meta font-black text-stamped-canary">
SIMULATED WORKLOAD // NOT A RECORDED SESSION
</div> ${SimulatedShapes.map(({ Label, Range, Percent, Note }) => renderTemplate`<div class="mt-4"> <div class="mb-1 flex flex-wrap justify-between gap-2 text-base font-bold"> <span class="text-bone-newsprint">${Label}</span> <span class="text-stamped-canary">${Range}</span> </div> <div class="flex h-4 w-full overflow-hidden border border-oxblood-dark bg-soot-black"> <div class="h-full bg-raw-blood"${addAttribute(`width: ${Percent}%;`, "style")}></div> </div> ${Note && renderTemplate`<div class="mt-2 max-w-3xl type-body text-zinc-dust">${Note}</div>`} </div>`)} <p class="mt-4 max-w-3xl type-body text-zinc-dust">
This range comes from a scripted loop, not from the study's sessions. It is
						the engine's behaviour on an input nobody's day produced, and it is here to
						show where the ceiling of the recorded shapes sits - never to be quoted as a
						session result.
</p> </div> </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [`SRC: ${Cite(Study.From)} (the session study and its band)`, `SRC: ${Cite(Benchmark.From)} (the session-shape bands)`] })} </section>  <section class="blueprint-section relative w-full" data-reveal> <p class="section-index">05 // FIELD AUDIT // RECORDED SESSIONS // COUNTED</p> <h2 class="mt-3 max-w-4xl type-section text-bone-white">
What did the field data show?
</h2> <!-- THE AUDIT MATRIX: what the study's own records say when they are read
			     as an audit rather than as a headline - how many sessions were
			     touched at all, what the two rates measure, and what the bytes cost
			     to get back. FOUR readings in ONE dense matrix, no card per row: the
			     family chip is a FIXED first column and its colour is identity rather
			     than rank (teal coverage, canary rates, crimson the cost side), the
			     figure is right-aligned in tabular figures so the column of numbers
			     aligns on its digits, and the notes that explain each reading follow
			     the plate as prose. --> <div class="grunge shell-card mt-10" data-grunge data-grunge-mode="edge"> <div class="overflow-x-auto"> <table class="w-full min-w-[46rem] border-collapse font-mono text-base"> <thead class="bg-asphalt-panel"> <tr class="border-b border-[color:var(--tier-well-edge)]"> <th scope="col" class="type-meta whitespace-nowrap px-4 py-2 text-left !font-black uppercase text-zinc-dust sm:px-5">
READING
</th> <th scope="col" class="type-meta whitespace-nowrap px-4 py-2 text-right !font-black uppercase text-zinc-dust sm:px-5">
VALUE
</th> <th scope="col" class="type-meta whitespace-nowrap px-4 py-2 text-left !font-black uppercase text-zinc-dust sm:px-5">
UNIT
</th> <th scope="col" class="type-meta whitespace-nowrap px-4 py-2 text-left !font-black uppercase text-zinc-dust sm:px-5">
SCOPE
</th> </tr> </thead> <tbody> ${Audit.map(({ Label, Tone, Fact }) => renderTemplate`<tr class="border-b border-oxblood-dark/60 align-top last:border-b-0 hover:bg-[color-mix(in_srgb,var(--raw-blood)_10%,transparent)]"> <td class="px-4 py-2 sm:px-5"> <span${addAttribute(["telemetry-tag", Tone], "class:list")}> ${Label} </span> </td> <td class="whitespace-nowrap px-4 py-2 text-right font-headline text-xl font-black tabular-nums text-bone-white sm:px-5"> ${Fact.Value} </td> <td class="type-meta whitespace-nowrap px-4 py-2 text-zinc-dust sm:px-5"> ${Fact.Unit} </td> <td class="px-4 py-2 type-body text-zinc-dust sm:px-5"> ${Fact.Scope} </td> </tr>`)} </tbody> </table> </div> </div> <!-- THE NOTES: one block per family of reading, in the matrix's own order,
			     each introduced by the same chip its row carries - so a paragraph
			     joins back to a row without a second numbering scheme. Label to note
			     is the tight distance; note to note is the group distance. --> <div class="mt-8 max-w-3xl space-y-6"> <div> <div class="type-meta !font-black uppercase text-weathered-teal">
COVERAGE // SESSIONS WITH A SAVING
</div> <p class="mt-2 type-body text-bone-newsprint">
The ${Study.SessionsSaved} row is the other way to read the same data: in${" "} ${Study.SessionsSaved.split("/")[0].trim()} of the ${Study.Sessions}${" "}
sessions something was saved.
</p> </div> <div> <div class="type-meta !font-black uppercase text-stamped-canary">
RATES // TWO QUESTIONS, TWO ANSWERS
</div> <p class="mt-2 type-body text-bone-newsprint">
The two rates above answer different questions - ${Study.MedianRatio}${" "}
is the median session's saved ratio, ${Study.AvgPerCall} is what an
						average call did not have to carry - and both are reported because
						neither alone describes the study.
</p> </div> <div> <!-- The cost side's identity is the crimson CHIP in the matrix row.
					     \`--raw-blood\` is a FILL token: as text on this ground it measures
					     2.23:1 and fails the 4.5:1 floor, so the note's label takes the
					     heading voice rather than an illegible red. --><div class="type-meta !font-black uppercase text-bone-white">
THE RETRIEVAL TAX // THE COST SIDE
</div> <p class="mt-2 type-body text-bone-newsprint">
The retrieval tax is the cost side of the ledger:${" "} <span class="text-stamped-canary">${Study.TaxCalls}</span> retrieve calls
						returned <span class="text-stamped-canary">${Study.TaxTokens}</span>${" "}
tokens, roughly ${Study.TaxPct} of what was saved.
</p> <p class="mt-3 type-body text-zinc-dust">
Savings are gross; this row is what the model paid to get its bytes
						back.
</p> </div> <!-- ONE citation for the four readings. The three cards each repeated
				     the same SRC line; the fact is the citation, not the repetition. --> <p class="type-meta text-zinc-dust">SRC: ${Cite(Study.From)}</p> </div> <div class="prose-flow mt-12 max-w-3xl"> <p class="type-body text-zinc-dust">
The same engine, four payoffs - savings track tool-output volume.
</p> </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [`SRC: ${Cite(Study.From)}.`] })} </section>  <section class="blueprint-section relative w-full" data-reveal> <p class="section-index">06 // REPRODUCE // REPRODUCTION</p> <h2 id="reproduce" class="mt-3 max-w-4xl type-section text-bone-white">
How can I reproduce this?
</h2> <p class="mt-6 max-w-3xl type-body text-bone-newsprint">
The harness is five examples in the aphrodite crate, and each one prints the figure
				its own row quotes.
</p> <p class="mt-3 max-w-3xl type-body text-bone-newsprint">
Nothing in the table is a vendor number: a reader with a checkout can re-derive
				every row on their own machine.
</p> <div class="mt-8"> ${renderComponent($$result, "CodeFence", $$CodeFence, {
		"Copy": true,
		"CopyLabel": "BASH",
		"Class": "border border-oxblood-dark",
		"CopyPayload": `git clone https://github.com/PlayForm/Aphrodite.git && cd Aphrodite
git submodule update --init --recursive
cargo run --release -p aphrodite --example bench_01_corpus
cargo run --release -p aphrodite --example bench_02_threshold
cargo run --release -p aphrodite --example bench_03_retrieve
cargo run --release -p aphrodite --example bench_04_ema
cargo run --release -p aphrodite --example bench_05_type_coverage`,
		"Code": `# requires a source checkout + Rust (see the SETUP page for versions)
$ git clone https://github.com/PlayForm/Aphrodite.git && cd Aphrodite
$ git submodule update --init --recursive
$ cargo run --release -p aphrodite --example bench_01_corpus
$ cargo run --release -p aphrodite --example bench_02_threshold
$ cargo run --release -p aphrodite --example bench_03_retrieve
$ cargo run --release -p aphrodite --example bench_04_ema
$ cargo run --release -p aphrodite --example bench_05_type_coverage`
	})} </div> <p class="mt-4 type-meta text-zinc-dust">SRC: ${Cite(Benchmark.From)}</p> <div class="mt-16 border-t border-oxblood-dark pt-8"> <div class="section-kicker">FIVE EXAMPLES // WHAT EACH ONE PROVES</div> <h3 id="examples" class="mt-3 max-w-3xl type-sub text-bone-white">
What a run actually does
</h3> <p class="mt-4 max-w-3xl type-body text-bone-newsprint">
Each example starts its own proxies, drives them over HTTP, and exits non-zero
					the moment a promise breaks - so a green run is a verdict, not a printout.
</p> <div class="mt-6 space-y-3"> ${Harness.map(({ Tag, Label, Body }) => renderTemplate`${renderComponent($$result, "ZineFold", $$ZineFold, {
		"Tag": Tag,
		"Label": Label,
		"Body": Body
	})}`)} </div> </div> <div class="mt-16 border-t border-oxblood-dark pt-8"> <div class="section-kicker">WHAT A RUN NEEDS // PRECONDITIONS</div> <h3 id="needs" class="mt-3 max-w-3xl type-sub text-bone-white">
Before the first command
</h3> <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"> ${Needs.map(({ Label, Text }) => renderTemplate`<article class="grunge shell-card flex flex-col p-5"${addAttribute(`border-left: 4px solid var(${AccentInk.crimson})`, "style")} data-grunge> <div class="type-meta font-black text-stamped-canary">${Label}</div> <p class="mt-2 type-body text-bone-newsprint">${Text}</p> </article>`)} </div> <p class="mt-8 max-w-3xl type-body text-zinc-dust">
The versions the site builds against are on${" "} <a class="text-weathered-teal underline transition-colors hover:text-bone-white"${addAttribute(Routes.Setup, "href")}>
SETUP
</a>
, and the crate layout that holds the examples is on${" "} <a class="text-weathered-teal underline transition-colors hover:text-bone-white"${addAttribute(Routes.Crates, "href")}>
CRATES
</a>
.
</p> </div> <!-- PROVENANCE: where every figure on this page comes from. A page that can
			     silently keep an old number is a page that cannot be cited, so the build
			     reads these files on every run and stops when one stops carrying the
			     figure the page prints. --> <div id="provenance" class="mt-16 border-t border-oxblood-dark pt-8"> <div class="section-kicker">PROVENANCE // WHERE THESE NUMBERS COME FROM</div> <h3 class="mt-3 max-w-3xl type-sub text-bone-white">
Extracted from a pinned revision
</h3> <div class="prose-flow mt-6 max-w-3xl"> <p class="type-body text-bone-newsprint">
Nothing is typed by hand: every figure is extracted from the repository on
						the build that produces the site - not copied into a template once and
						trusted afterwards.
</p> <p class="type-body text-bone-newsprint">
The generator reads the README and the docs tree, writes the numbers into a
						generated record, and the page renders that record. A figure the repository
						stops carrying stops the build; it never survives as a stale plate.
</p> <p class="type-body text-bone-newsprint">
The revision for this build is ${SourceRevision.Branch} at${" "} ${SourceRevision.Short} (${SourceRevision.Commit}). That is the pin the
						generator read, so "generated" here means generated from an address a reader
						can check out - not merely that no one retyped the number.
</p> <p class="type-body text-bone-newsprint">
The provenance chain is the whole of it: the fact, the file it is read from,
						and the section it feeds.
</p> </div> <div class="mt-8"> ${renderComponent($$result, "ZineLedger", $$ZineLedger, {
		"Headers": [
			"FACT",
			"READ FROM",
			"WHAT IT FEEDS"
		],
		"Rows": ProvenanceRows
	})} </div> </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [
		`SRC: ${Cite(Benchmark.From)}`,
		"SRC: crates/aphrodite/examples/bench_01_corpus.rs",
		"SRC: crates/aphrodite/examples/bench_05_type_coverage.rs"
	] })} </section>  <section class="blueprint-section relative w-full" data-reveal> <p class="section-index">07 // INTEGRITY // LIMITATIONS // WHAT THE NUMBERS ARE NOT</p> <h2 id="limits" class="mt-3 max-w-4xl type-section text-bone-white">
Where the figures stop
</h2> <!-- WHAT IS MEASURED AND WHAT IS ESTIMATED: the page's two halves, stated
			     before the individual limits so a reader knows which half each one
			     applies to. --> <div id="confidence" class="mt-10"> <div class="section-kicker">TWO HALVES // TWO CONFIDENCE LEVELS</div> <h3 class="mt-3 max-w-3xl type-sub text-bone-white">
What is measured and what is estimated
</h3> <div class="prose-flow mt-6 max-w-3xl"> <p class="type-body text-bone-newsprint">
The page has two halves and they do not carry the same confidence.
</p> <p class="type-body text-bone-newsprint">
Everything in the plates and the per-type chart is measured: a fixed payload
						goes in, a marker comes out, and the quotient is arithmetic.
</p> <p class="type-body text-bone-newsprint">
The session study is an estimate by construction: it reconstructs what each
						API call would have carried with every marker expanded, so its figure
						depends on the tokenizer used to count that reconstruction.
</p> <p class="type-body text-bone-newsprint">
That is why it ships as a band with a stated sensitivity range rather than
						as a single percentage.
</p> <p class="type-body text-bone-newsprint">Neither half is a vendor number.</p> <p class="type-body text-zinc-dust">
A reader with a checkout can re-derive the measured half exactly and the
						estimated half to within its band - the harness section is the first half of
						that sentence, and${" "} <a class="text-weathered-teal underline transition-colors hover:text-bone-white"${addAttribute(Routes.CaseStudy, "href")}>
the case study
</a>${" "}
is where the second half is argued.
</p> </div> </div> <!-- THE REGISTER: every figure, with its ID, its kind, its unit, its scope
			     and its method. This is the page's evidence record made readable: a
			     reader can refuse to trust any single line on stated grounds. The four
			     kinds are the page's evidence badges - a word AND a colour, because a
			     colour alone is not a distinction a reader can recover. --> <div class="mt-16 border-t border-oxblood-dark pt-8"> <div class="section-kicker">THE FIGURE REGISTER // ONE ROW PER FIGURE</div> <p class="mt-4 max-w-3xl type-body text-bone-newsprint">
Every figure is a record with a stable ID. The kind says how it came to exist -${" "} <strong class="telemetry-tag telemetry-tag--teal">measured</strong> is
					arithmetic on a fixed corpus,${" "} <strong class="telemetry-tag telemetry-tag--canary">estimated</strong> is a
					reconstruction that depends on a tokenizer,${" "} <strong class="telemetry-tag telemetry-tag--crimson">simulated</strong> is a
					workload that never happened, and${" "} <strong class="telemetry-tag telemetry-tag--bone">derived</strong> is a quotient
					of two other records.
</p> <p class="mt-3 max-w-3xl type-body text-zinc-dust">
The page joins each record by ID, never by position, so a label cannot drift
					onto a neighbouring figure's value. A missing record stops the build and names
					the ID.
</p> <div class="mt-6"> ${renderComponent($$result, "ZineLedger", $$ZineLedger, {
		"Headers": [
			"FIGURE",
			"KIND",
			"VALUE",
			"UNIT",
			"SCOPE",
			"METHOD"
		],
		"Rows": RegisterRows
	})} </div> <div class="prose-flow mt-12 max-w-3xl"> <p class="type-body text-zinc-dust">
A wrong figure is fixed in the repository and the pin advances - never in
						the generated record, which the next build overwrites.
</p> <p class="type-body text-zinc-dust">
That is what makes the SRC line under each plate an address rather than a
						formality: the line numbers beside it come from the same pass that produced
						the number it describes.
</p> </div> </div> <div class="mt-12 space-y-5"> ${renderComponent($$result, "ZineLesson", $$ZineLesson, {
		"Label": "NOT A TYPICAL CASE",
		"Color": "raw",
		"Text": `${Benchmark.Ceiling} is the ceiling on one long low-entropy document. The per-type chart peaks at ${Peak.Ratio}, and the median the same table reports is ${Benchmark.Median} - quote the ceiling only with the corpus attached.`
	})} ${renderComponent($$result, "ZineLesson", $$ZineLesson, {
		"Label": "NOT A SINGLE PERCENTAGE",
		"Color": "canary",
		"Text": `The session saving is a band, not a point: ${Study.Band} across a ${Study.CharsPerTok} chars/token sensitivity range, centered ${Study.BandCenter}. Any single number inside that band is a reading of the same data, not a better measurement.`
	})} ${renderComponent($$result, "ZineLesson", $$ZineLesson, {
		"Label": "NOT REAL USAGE",
		"Color": "teal",
		"Text": `The ${Band("study.band.pure-tool").Range} pure-tool figure comes from a simulated diff+ls+build+search loop. It is a stress test of the engine, and the real sessions it sits beside saved ${Band("study.band.tool-heavy").Range} when they were tool-heavy.`
	})} ${renderComponent($$result, "ZineLesson", $$ZineLesson, {
		"Label": "NOT NET OF RETRIEVAL",
		"Color": "canary",
		"Text": `Savings are counted before retrieval. The study's own tax row - ${Study.TaxCalls} calls, ${Study.TaxTokens} tokens - is what the model spent getting bytes back, roughly ${Study.TaxPct} of the tokens saved.`
	})} ${renderComponent($$result, "ZineLesson", $$ZineLesson, {
		"Label": "NOT A CONTROLLED COMPARISON",
		"Color": "raw",
		"Text": `The session study is an author-run reconstruction of one person's sessions, not a randomised comparison against a control. It establishes neither better task success nor universal cost savings: it measures how much context the markers replaced, and nothing else.`
	})} </div> <div class="prose-flow mt-12 border-t border-oxblood-dark pt-8 max-w-3xl"> <p class="type-body text-bone-newsprint">
None of this weakens the claim the page makes.
</p> <p class="type-body text-bone-newsprint">
A compression proxy earns its place on the ordinary turn - a diff, a build log,
					a terminal dump - where the ratio is ${Floor.Ratio} to ${RunnerUp.Ratio} and the
					model keeps working from the preview.
</p> <p class="type-body text-bone-newsprint">
The ceiling is what the engine can do; the median is what a session gets.
</p> <p class="type-body text-zinc-dust">
If a number here disagrees with your own run, the harness is the arbiter: the
					examples ship with the crate, and the SRC lines name the README section each
					figure is copied from.
</p> </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [
		`SRC: ${Cite(Benchmark.From)}`,
		`SRC: ${Cite(Study.From)}`,
		"SRC: crates/aphrodite/examples/"
	] })} </section>  ${renderComponent($$result, "Related", $$Related, { "Links": [
		{
			Href: "/case-study/",
			Label: "CASE STUDY"
		},
		{
			Href: "/versions/",
			Label: "VERSIONS"
		},
		{
			Href: "/crates/",
			Label: "CRATES"
		},
		{
			Href: "/setup/",
			Label: "SETUP"
		}
	] })} ` })} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/benchmarks.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/benchmarks.astro";
var $$url = "/benchmarks";
// \0virtual:astro:page:Source/pages/benchmarks@_@astro
var page = () => benchmarks_exports;
export { page };
