import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { E as unescapeHTML, _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, c as DocsRoute, m as Routes, n as $$ZineKicker, t as $$Base } from "./Base_B3YGMVwW.mjs";
import { n as $$PageShell } from "./ZineTape_SD5UQe0y.mjs";
import { a as $$Related } from "./DocsSidebar_DfVitkgG.mjs";
import { t as $$SectionNav } from "./SectionNav_B6_enHog.mjs";
import { t as $$ZineDiagramNav } from "./ZineDiagramNav_CN7ukSrg.mjs";
import { t as $$ZinePipeline } from "./ZinePipeline_B3GzGLqL.mjs";
import { t as $$ZineSource } from "./ZineSource_B5XPnKZs.mjs";
import { t as dual_listener_default } from "./dual-listener_DGrw5eCM.mjs";
import { t as config_resolution_default } from "./config-resolution_DPyisu12.mjs";
// Source/pages/workbench.astro
var workbench_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Workbench,
	file: () => $$file,
	url: () => $$url
});
var $$Workbench = createComponent(($$result, $$props, $$slots) => {
	const Sections = [
		{
			Id: "boundary",
			Label: "BOUNDARY"
		},
		{
			Id: "pipeline",
			Label: "PIPELINE"
		},
		{
			Id: "knobs",
			Label: "KNOBS"
		},
		{
			Id: "states",
			Label: "STATES"
		},
		{
			Id: "topology",
			Label: "TOPOLOGY"
		},
		{
			Id: "arc",
			Label: "THE ARC"
		}
	];
	const Knobs = [
		{
			Key: "tool_threshold_token",
			Min: 64,
			Max: 4096,
			Step: 64,
			Default: 256,
			Unit: "B",
			Note: "token proxy threshold (bytes)",
			Line: "The token proxy measured every tool result against this limit: a result over it was compressed into a marker, a result under it stayed in the transcript as it arrived."
		},
		{
			Key: "tool_threshold_cache",
			Min: 256,
			Max: 16384,
			Step: 256,
			Default: 2048,
			Unit: "B",
			Note: "cache proxy threshold (bytes)",
			Line: "The cache proxy answered on its own port with its own limit, which is what let one binary tune the two lanes independently."
		},
		{
			Key: "inline_threshold",
			Min: 256,
			Max: 16384,
			Step: 256,
			Default: 1024,
			Unit: "B",
			Note: "inline-vs-durable CCR storage cutoff",
			Line: "This is a storage cutoff, not a compression one: under it a stored blob lived inline in the session, over it the blob went to durable CCR."
		},
		{
			Key: "code_multiplier",
			Min: 1,
			Max: 8,
			Step: .5,
			Default: 1,
			Unit: "x",
			Note: "threshold multiplier for code_* types",
			Line: "Code types multiplied the token limit by this factor, and the effect the config doc names is that code stayed inline while prose of the same size was compressed (docs/config/aphrodite-toml.md:159)."
		}
	];
	const Compaction = {
		Key: "engine_threshold_pct",
		Default: 30,
		Unit: "%",
		Note: "100+ = engine-off escape hatch",
		Line: "The context engine's fill percentage: middle turns were archived to CCR once the session passed it, 0 meant never, and 100+ switched the engine off (README.md:580).",
		Why: "It is a compaction knob, not a compression one. The four proxy thresholds keep working whatever it is set to, which is why the engine standing down never turned the pipeline off - the two dimensions are separate, and only one of them is measurable without a session."
	};
	const States = [
		{
			Label: "below threshold, kept inline",
			When: "bytes <= tool_threshold_token (x code_multiplier for code_* types)",
			Holds: "the bytes themselves - nothing to resolve",
			Note: ["The sample never crossed the token limit, so the classifier typed it and the preview line was built, but nothing was hashed and no marker was minted.", "The bytes stayed in the transcript, which is why this state costs the turn nothing: the agent already reads what it would otherwise have to retrieve."]
		},
		{
			Label: "preview enough, marker stored",
			When: "bytes > tool_threshold_token (x code_multiplier for code_* types)",
			Holds: "the preview line, the address and the marker",
			Note: ["The sample crossed the limit, so the digest hashed the original bytes and the marker was stored under that hash.", "The preview line answered the question, so the agent reasoned on the preview and left the marker as a receipt rather than a debt."]
		},
		{
			Label: "engine OFF - the 100+ escape hatch, nothing archived mid-session",
			When: "engine_threshold_pct >= 100",
			Holds: "the raw turn, un-archived by the engine - the proxy thresholds still compress tool output",
			Note: [
				"Past 100 the context engine stood down: no middle turn was archived mid-session and nothing was marked by it.",
				"The four proxy thresholds kept working on their own, so tool output was still compressed - the knob switches off one engine, not the pipeline.",
				"This is a compaction state, not a compression one, which is why the readout never prints it: the two dimensions answer different questions, and conflating them is a contradiction."
			]
		}
	];
	const Diagrams = [{
		Id: "dual-listener",
		Caption: "M5 // DUAL LISTENER",
		Svg: dual_listener_default,
		Note: [
			"One binary serves both lanes: the cache listener answers on :9797 from a 10K-entry DashMap for content over 8 KB, and the token listener answers on :9798 from SQLite for content over 1 KB plus the tool relay.",
			"Both lanes share the BLAKE3 hash and the marker wire format, so a marker minted by one resolves through the other - the address is the contract, not the port.",
			"SSE streams pass through uncompressed, and a healthy running proxy is reused at startup rather than a second being spawned."
		]
	}, {
		Id: "config-resolution",
		Caption: "M7 // CONFIG RESOLUTION",
		Svg: config_resolution_default,
		Note: [
			"The file is found by the same three-step search on every start: APHRODITE_CONFIG_PATH first, ./aphrodite.toml in the working directory second, the copy under the Hermes home last.",
			"Inside the file, values resolve env over TOML over default - except mode and listen, which get no blanket env override and keep their ports per-mode through APHRODITE_CACHE_PORT and APHRODITE_TOKEN_PORT.",
			"A Modify event on aphrodite.toml debounces 500 ms and resolves the thresholds into the four atomics; POST /reload does the same thing on demand."
		]
	}];
	const Arc = [
		{
			Label: "v1.2.2 · REAL-WORLD EXAMPLE",
			Parts: [
				{ Count: 216 },
				" KB → ",
				{ Count: 12 },
				" markers"
			],
			Note: "54K → 240 tokens · the CHANGELOG entry prints the ratio as 225×"
		},
		{
			Label: "v1.2.2 · CLASSIFICATION & CCR STORE (APPLE M2 MAX)",
			Parts: [
				"classify 40-123 ns · put ",
				{ Count: 453 },
				" ns · get 119.4 ns"
			],
			Size: "text-base",
			Note: "CCR mixed MT, 8 threads: DashMap 229 µs vs Mutex 1.15 ms"
		},
		{
			Label: "WHY THE STORE LOOKS LIKE IT DOES",
			Parts: [{ Count: 5 }, "× at 8 threads"],
			Tone: "text-weathered-teal",
			Note: "The DashMap-over-Mutex result is why the in-memory CCR backend is a sharded map, not one guarded table."
		},
		{
			Label: "v1.3.4 · RETRIEVAL INTEGRITY",
			Parts: ["20/20 retrieve OK"],
			Note: "Every compressed blob in the standard corpus was retrieved byte-exact; the corpus ratios themselves live on the benchmarks page."
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Workbench - Aphrodite",
		"Description": "A browser simulation of the Aphrodite preview workbench: paste any tool output and the preview line, the illustrative marker and the threshold knobs respond - client-side, illustrative, with no engine benchmark and no server-side retrieval."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageShell", $$PageShell, {
		"Rhythm": "dense",
		"Grow": true
	}, { "default": ($$result) => renderTemplate`  ${maybeRenderHead($$result)}<div data-enter> <header class="wb-skew motion-wipe-host relative border-l-4 border-blood-crimson bg-carbon-void p-8 shadow-[6px_6px_0px_#7a0a1e]"> <span class="motion-wipe" data-wipe aria-hidden="true"></span> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "canary" }, { "default": ($$result) => renderTemplate`THE UNEXPLAINABLE BECOMES EFFORTLESS` })} <h1 class="mt-6 font-headline text-3xl font-black uppercase tracking-tight text-bone-white drop-shadow-[4px_4px_0px_#520612] sm:text-5xl">
The pipeline, live
</h1> <p class="mt-6 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
A tool call's output is appended to the model's context, and the model reads every
					line of it. Aphrodite runs four steps over that output before it arrives: the
					enriched preview line the agent would read, the
					marker the store would hold, and the mechanical outcome the pipeline reaches -
					pass-through, or preview plus marker. Any tool output can be put through those
					steps: a build log, a test run, a grep result.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The four live-reloadable compression thresholds are yours to turn. The engine's
					compaction knob is documented further down rather than wired in, because the path
					modelled is the tool-output path and nothing else.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The thresholds the sliders move are the shipped ones, and
					every figure is measured from the bytes of the input and recomputed
					as they turn - so no number can disagree with the payload it describes.
</p> </header> </div> ${renderComponent($$result, "SectionNav", $$SectionNav, { "Sections": Sections })}  <div data-reveal> <section id="boundary" aria-label="What this simulates" class="border-l-4 border-l-weathered-teal bg-asphalt-panel p-6"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "teal" }, { "default": ($$result) => renderTemplate`SIMULATION BOUNDARY` })} <p class="wb-instrument">
Browser simulation · illustrative digest · no engine benchmark · no
					server-side retrieval
</p> <details class="wb-details mt-6"> <summary class="wb-details-summary">What this simulates</summary> <div class="prose-flow mt-6 max-w-3xl"> <p class="font-body text-base leading-relaxed text-bone-newsprint">
Real:
</p> <ul class="space-y-1 font-body text-base leading-relaxed text-bone-newsprint"> <li class="border-l-2 border-oxblood-dark pl-3">
the classifier rules (README.md:153-176)
</li> <li class="border-l-2 border-oxblood-dark pl-3">
the preview line shapes (README.md:108-133)
</li> <li class="border-l-2 border-oxblood-dark pl-3">
the threshold semantics and defaults (README.md:395-420).
</li> </ul> <p class="font-body text-base leading-relaxed text-bone-newsprint">
Simulated:
</p> <ul class="space-y-1 font-body text-base leading-relaxed text-bone-newsprint"> <li class="border-l-2 border-oxblood-dark pl-3">
the BLAKE3 digest (a deterministic stand-in hash - the real 40-char
								digest needs the Rust store, and no engine can resolve the marker it
								prints)
</li> <li class="border-l-2 border-oxblood-dark pl-3">
and aphrodite_retrieve (shown as the decision text, never executed).
</li> </ul> <p class="font-body text-base leading-relaxed text-bone-newsprint">
No timing is simulated at all: the 40-123 ns classify figure is the
							engine's own historical measurement, printed on the rail and arc
							exactly as the README and the CHANGELOG carry it, and /benchmarks/
							prints it with its environment and its reproduce command.
</p> <p class="font-body text-base leading-relaxed text-bone-newsprint">
No network and no runtime: the whole pipeline runs in the browser.
</p> <p class="font-body text-base leading-relaxed text-bone-newsprint">
Not depicted: the context engine's auto-compaction pass and the injection
							assembler's directive budget - only the tool-output path is modelled.
</p> <p class="font-body text-base leading-relaxed text-bone-newsprint">
The full registry is larger - the 30-type content catalog lives in
							docs/classification/content-types.md:118-151; only the README
							tier is modelled.
</p> </div> </details> </section> </div>  <div id="pipeline" role="region" aria-label="Raw stream and enriched preview" data-reveal> ${renderComponent($$result, "ZinePipeline", $$ZinePipeline, { "Mode": "full" })} </div>  <div class="mt-16 border-l-4 border-raw-blood bg-asphalt-panel p-6" data-reveal> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "dust",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`CLASSIFIER FRAMING` })} <p class="mt-4 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The 16 pipeline types the rail renders follow the README catalog
				(README.md:155-176); the full classification registry behind them is 30 types,
				printed in docs/classification/content-types.md:118-151.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
A type is a routing decision, not a description: the first rule that matches wins,
				and every later stage reads that one name.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
A generic bucket is not the end of the road - a conservative semantic detector
				upgrades the git, gitlog, grep, ls and test shapes, and ordinary prose is never
				mis-tagged.
</p> </div>  <div data-reveal> <section id="knobs" class="wb-skew motion-wipe-host relative border-4 border-blood-crimson bg-carbon-void p-8 shadow-[6px_6px_0px_#7a0a1e]" aria-label="Threshold knobs"> <span class="motion-wipe" data-wipe aria-hidden="true"></span> <div class="flex flex-wrap items-center justify-between gap-6"> <h2>${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "white" }, { "default": ($$result) => renderTemplate`THRESHOLD KNOBS` })}</h2> <!-- Named for what it does. The old label was "POST /RELOAD",
					     which named an HTTP endpoint this button never calls. --> <button type="button" class="wb-pill" data-action="reset-defaults">
Reset defaults
</button> </div> <p class="mt-6 font-mono text-base leading-relaxed text-zinc-dust">
aphrodite.toml [compression] - the four proxy thresholds are live-reloadable; edit +
					save (or POST /reload) re-applies them immediately (README.md:389).
</p> <p class="mt-4 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Only four values are atomics the running engine swaps: cache, token, inline and
					code_multiplier. Everything else in the file waits for a restart.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The engine knob is an escape hatch rather than a dial - past 100 the context engine
					stands down and the four proxy thresholds keep working alone.
</p> <!-- The reference line the button needs: it restores this page's
				     sliders, and the real reload behaviour lives in the config docs. --> <p class="wb-ref mt-4">
Reset defaults restores the four sliders to the shipped [compression]
					values and changes nothing else. It is not an HTTP reload: the engine's own
<code class="type-code text-stamped-canary">POST /reload</code> re-applies
					aphrodite.toml to a running binary, and its behaviour is documented in
<a class="wb-ref-link"${addAttribute(DocsRoute("config/aphrodite-toml"), "href")}>the aphrodite.toml
						configuration reference</a>
and in <a class="wb-ref-link"${addAttribute(Routes.Config, "href")}>/config/</a>.
</p> <div class="mt-12 grid gap-16 md:grid-cols-2" data-enter="180"> ${Knobs.map((Knob) => renderTemplate`<div class="border-2 border-blood-crimson/60 bg-soot-black p-6"> <div class="flex items-baseline justify-between"> <label class="font-mono text-base font-bold text-bone-newsprint"${addAttribute(`wb-knob-${Knob.Key}`, "for")}> ${Knob.Key} </label> <output class="font-mono text-base font-black text-stamped-canary"${addAttribute(Knob.Key, "data-knob-value")}${addAttribute(`wb-knob-${Knob.Key}`, "for")}> ${Knob.Default} ${Knob.Unit} </output> </div> <input${addAttribute(`wb-knob-${Knob.Key}`, "id")}${addAttribute(Knob.Key, "data-knob")} type="range"${addAttribute(Knob.Min, "min")}${addAttribute(Knob.Max, "max")}${addAttribute(Knob.Step, "step")}${addAttribute(Knob.Default, "value")} class="wb-slider mt-8 w-full"> <p class="mt-4 font-mono text-base uppercase tracking-widest text-zinc-dust"> ${Knob.Note} </p> <p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint"> ${Knob.Line} </p> </div>`)} </div> <!-- THE ENGINE KNOB, DOCUMENTED RATHER THAN RENDERED. It governs the
				     context engine's compaction pass, which this page does not model:
				     one blob, no session, so there are no middle turns to archive. The
				     control is not a slider here because a slider that changed nothing
				     would be the same dishonesty as a fabricated timing - and wiring it
				     into the compression readout is what made the old page say
				     "compressed" and "raw passes through" about the same sample. --> <div class="mt-16 border-2 border-oxblood-dark bg-soot-black p-6" data-enter="240"> <div class="flex flex-wrap items-baseline justify-between gap-4"> <p class="font-mono text-base font-bold text-bone-newsprint">${Compaction.Key}</p> <p class="font-mono text-base font-black text-zinc-dust"> ${Compaction.Default}${Compaction.Unit} </p> </div> <p class="mt-4 font-mono text-base uppercase tracking-widest text-zinc-dust"> ${Compaction.Note} · compaction, not compression · a context-engine pass the compression readout cannot report
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint"> ${Compaction.Line} </p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint"> ${Compaction.Why} </p> <p class="wb-ref mt-4">
Compaction is documented with the rest of the configuration surface in
<a class="wb-ref-link"${addAttribute(DocsRoute("config/aphrodite-toml"), "href")}>the aphrodite.toml
							configuration reference</a>
and exercised on <a class="wb-ref-link"${addAttribute(Routes.Config, "href")}>/config/</a>.
</p> </div> <!-- The verdict strip: what the current knob set would do. --> <div class="mt-16 border-2 border-raw-blood bg-soot-black p-4" data-enter="300"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "canary" }, { "default": ($$result) => renderTemplate`COMPRESSION, CACHE AND STORAGE` })} <p class="mt-4 font-mono text-base text-bone-newsprint" data-verdict>
turn the knobs, then RUN PIPELINE
</p> <p class="mt-4 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Three independent decisions follow from the knob set: whether the result is
						compressed, whether the cache lane answers it, and whether the store keeps the
						blob inline or writes it durably. Aphrodite takes the three separately, and
						reporting them side by side is what stops one being read as another.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The four thresholds are atomics the running engine swaps, so the same result is
						inline under a 4 KB limit and stored under a 256 B one, with no restart between
						the two.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Byte reduction is measured against the bytes the result actually carries rather
						than against the knob set, so the routing decision and the saving it produces stay
						two figures: the thresholds decide the first, and only the bytes decide the second.
</p> </div> </section> </div> <div data-reveal> <section id="states" class="wb-skew motion-wipe-host relative border-4 border-weathered-teal bg-carbon-void p-8 shadow-[6px_6px_0px_#000]" aria-label="Threshold states"> <span class="motion-wipe" data-wipe aria-hidden="true"></span> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "teal" }, { "default": ($$result) => renderTemplate`THRESHOLD STATES` })} <p class="mt-6 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Every run ends in one of three states, and a state is the whole contract: the name
					says in one line whether the bytes stayed, whether a marker was minted, and whether
					the engine was in the loop at all.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The first two are compression states, and the readout names them. The third is a
					compaction state: the token threshold alone decides the first two, while the third
					is the context engine standing down - which is why that knob is documented beside
					the thresholds rather than wired into the readout, and why no readout can print it.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
None of the three is a judgement about the agent's question. Whether a preview
					answers it is the agent's decision, taken with a task in hand: the engine reports
					the state, and the judgement stays with the agent that holds the task.
</p> <div class="mt-12 grid gap-8 lg:grid-cols-3" data-enter="180"> ${States.map((State) => renderTemplate`<div class="border-2 border-weathered-teal/60 bg-soot-black p-6"> <p class="font-mono text-base font-black text-bone-white">${State.Label}</p> <p class="mt-4 font-mono text-base uppercase tracking-widest text-zinc-dust">
WHEN: ${State.When} </p> ${State.Note.map((Sentence) => renderTemplate`<p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint"> ${Sentence} </p>`)} <p class="mt-6 border-t-2 border-weathered-teal/40 pt-4 font-mono text-base text-weathered-teal">
HOLDS: ${State.Holds} </p> </div>`)} </div> <p class="mt-12 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The inputs are printed alongside the name - compression mode, cache lane and
					storage - so a run that reads as surprising can be traced back to the threshold
					that produced it.
</p> </section> </div>  <section id="topology" class="grid gap-20 lg:grid-cols-2" aria-label="Diagrams" data-reveal> <p class="col-span-full max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Two parts of the pipeline have no place in a readout: where the store actually
				lives, and where the thresholds come from.
</p> ${Diagrams.map((Diagram) => renderTemplate`<figure class="wb-skew motion-wipe-host relative border-4 border-blood-crimson bg-carbon-void p-4 shadow-[6px_6px_0px_#7a0a1e]"${addAttribute(Diagram.Id, "data-diagram")}> <span class="motion-wipe" data-wipe aria-hidden="true"></span> <div class="overflow-x-auto">${unescapeHTML(Diagram.Svg)}</div> <figcaption class="mt-6"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "dust" }, { "default": ($$result) => renderTemplate`${Diagram.Caption}` })} </figcaption> ${Diagram.Note.map((Sentence, Index) => renderTemplate`<p${addAttribute([Index === 0 ? "mt-6" : "mt-3", "max-w-3xl font-body text-base leading-relaxed text-bone-newsprint"], "class:list")}> ${Sentence} </p>`)} </figure>`)} </section>  <div data-reveal> <section id="arc" class="wb-skew motion-wipe-host relative border-l-4 border-stamped-canary bg-carbon-void p-8" aria-label="Benchmark notes"> <span class="motion-wipe" data-wipe aria-hidden="true"></span> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "canary" }, { "default": ($$result) => renderTemplate`SIM NOTES · THE MEASURED ARC` })} <p class="mt-6 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The numbers the simulation reaches for are real: each plate prints the figure the
					CHANGELOG carried at that release, and the benchmarks page carries the reproduce
					commands.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
None of them was measured for the simulation. They are historical engine
					measurements, printed as receipts and labelled as such wherever they appear -
					which is the difference between a citation and a claim.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
A plate is a receipt: the figure is what the release printed, and the note beside
					it is what the number means for the design.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The figures count up once when they come into view, and the note underneath each
					one is what makes the number mean something.
</p> <div class="mt-12 grid gap-6 md:grid-cols-2" data-enter="180"> ${Arc.map((Plate) => renderTemplate`<div class="border-2 border-blood-crimson/60 bg-soot-black p-5"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "dust",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`${Plate.Label}` })} <div${addAttribute(`mt-3 font-mono font-black ${Plate.Size ?? "text-2xl"} ${Plate.Tone ?? "text-bone-white"}`, "class")}> ${Plate.Parts.map((Part) => typeof Part === "string" ? Part : renderTemplate`<span${addAttribute(Part.Count, "data-count")}> ${Part.Count.toLocaleString("en-US")} </span>`)} </div> <p class="mt-2 font-mono text-base text-zinc-dust">${Plate.Note}</p> </div>`)} </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: CHANGELOG.md:962-973 (the ns/µs table) · CHANGELOG.md:983 (216 KB → 12 markers)"] })} </section> </div>   ${renderComponent($$result, "Related", $$Related, { "Links": [
		{
			Href: "/benchmarks/",
			Label: "BENCHMARKS"
		},
		{
			Href: "/tools/",
			Label: "TOOLS"
		},
		{
			Href: "/case-study/",
			Label: "CASE STUDY"
		},
		{
			Href: "/setup/",
			Label: "SETUP"
		}
	] })} ` })} ${renderComponent($$result, "ZineDiagramNav", $$ZineDiagramNav, {})} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/workbench.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/workbench.astro";
var $$url = "/workbench";
// \0virtual:astro:page:Source/pages/workbench@_@astro
var page = () => workbench_exports;
export { page };
