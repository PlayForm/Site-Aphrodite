import { i as __exportAll, r as createComponent } from "./compiler_CWd3RCEz.mjs";
import { C as addAttribute, T as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent } from "./server_CNuTCIdA.mjs";
import { n as $$ZineKicker, t as $$Base } from "./Base_7T8xAMbn.mjs";
import { t as $$Related } from "./Related_Bi8U0sIn.mjs";
import { t as $$ZineDiagramNav } from "./ZineDiagramNav_Dvy8zV3c.mjs";
import { t as $$ZinePipeline } from "./ZinePipeline_DIqNvfDx.mjs";
import { t as dual_listener_default } from "./dual-listener_DGrw5eCM.mjs";
import { t as config_resolution_default } from "./config-resolution_DPyisu12.mjs";
// Source/pages/workbench.astro
var workbench_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Workbench,
	file: () => $$file,
	url: () => $$url
});
var $$Workbench = createComponent(($$result, $$props, $$slots) => {
	const Knobs = [
		{
			Key: "tool_threshold_token",
			Min: 64,
			Max: 4096,
			Step: 64,
			Default: 256,
			Unit: "B",
			Note: "token proxy threshold (bytes)"
		},
		{
			Key: "tool_threshold_cache",
			Min: 256,
			Max: 16384,
			Step: 256,
			Default: 2048,
			Unit: "B",
			Note: "cache proxy threshold (bytes)"
		},
		{
			Key: "inline_threshold",
			Min: 256,
			Max: 16384,
			Step: 256,
			Default: 1024,
			Unit: "B",
			Note: "inline-vs-durable CCR storage cutoff"
		},
		{
			Key: "code_multiplier",
			Min: 1,
			Max: 8,
			Step: .5,
			Default: 1,
			Unit: "x",
			Note: "threshold multiplier for code_* types"
		},
		{
			Key: "engine_threshold_pct",
			Min: 0,
			Max: 100,
			Step: 5,
			Default: 30,
			Unit: "%",
			Note: "100+ = engine-off escape hatch"
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "THE PIPELINE, LIVE // APHRODITE",
		"Description": "The pipeline, live: paste any tool output and watch Aphrodite's four steps - classify, preview, store, decide - run in your browser, with the threshold knobs you can turn."
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="mx-auto w-full max-w-[1440px] flex-1 flex-col gap-28 px-5 py-32 sm:px-8"> <!-- THE HEAD: the h1 opens the page, not the sample switchboard. --><header class="wb-skew relative border-l-4 border-blood-crimson bg-carbon-void p-8 shadow-[6px_6px_0px_#7a0a1e]"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "canary" }, { "default": ($$result) => renderTemplate`THE UNEXPLAINABLE BECOMES EFFORTLESS` })} <h1 class="mt-6 text-3xl font-bold tracking-tight text-bone-white sm:text-4xl">
The pipeline, live
</h1> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Paste any tool output - a build log, a test run, a grep result - and this page runs
				Aphrodite's four steps over it: the enriched preview line the agent would read, the
				marker the store would hold, and the decision the agent would make.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The four live-reloadable thresholds and the engine knob are yours to turn.
</p> </header> <!-- THE FOUR STEPS: the rail, the pair, the readout. --> ${renderComponent($$result, "ZinePipeline", $$ZinePipeline, { "Mode": "full" })} <!-- THE KNOBS: aphrodite.toml [compression], live. --> <section class="wb-skew border-4 border-blood-crimson bg-carbon-void p-8 shadow-[6px_6px_0px_#7a0a1e]" aria-label="Threshold knobs"> <div class="flex flex-wrap items-center justify-between gap-6"> <h2 class="font-mono text-base font-black uppercase tracking-widest text-bone-white">
THRESHOLD KNOBS
</h2> <button type="button" class="wb-pill" data-action="reload">POST /RELOAD</button> </div> <p class="mt-6 font-mono text-base leading-relaxed text-zinc-dust">
aphrodite.toml [compression] - the four proxy thresholds are live-reloadable; edit +
				save (or POST /reload) re-applies them immediately (README.md:389).
</p> <div class="mt-12 grid gap-16 md:grid-cols-2"> ${Knobs.map((Knob) => renderTemplate`<div class="border-2 border-blood-crimson/60 bg-soot-black p-6"> <div class="flex items-baseline justify-between"> <label class="font-mono text-base font-bold text-bone-newsprint"${addAttribute(`wb-knob-${Knob.Key}`, "for")}> ${Knob.Key} </label> <output class="font-mono text-base font-black text-stamped-canary"${addAttribute(Knob.Key, "data-knob-value")}${addAttribute(`wb-knob-${Knob.Key}`, "for")}> ${Knob.Default} ${Knob.Unit} </output> </div> <input${addAttribute(`wb-knob-${Knob.Key}`, "id")}${addAttribute(Knob.Key, "data-knob")} type="range"${addAttribute(Knob.Min, "min")}${addAttribute(Knob.Max, "max")}${addAttribute(Knob.Step, "step")}${addAttribute(Knob.Default, "value")} class="wb-slider mt-8 w-full"> <p class="mt-4 font-mono text-base uppercase tracking-widest text-zinc-dust"> ${Knob.Note} </p> </div>`)} </div> <!-- The verdict strip: what the current knob set would do. --> <div class="mt-16 border-2 border-raw-blood bg-soot-black p-4"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "canary" }, { "default": ($$result) => renderTemplate`COMPRESSION DECISION` })} <p class="mt-4 font-mono text-base text-bone-newsprint" data-verdict>
turn the knobs, then RUN PIPELINE
</p> </div> </section> <!-- THE TOPOLOGY: the store and the config surface. --> <section class="grid gap-20 lg:grid-cols-2" aria-label="Diagrams"> <figure class="wb-skew border-4 border-blood-crimson bg-carbon-void p-4 shadow-[6px_6px_0px_#7a0a1e]" data-diagram="dual-listener"> <div class="overflow-x-auto">${unescapeHTML(dual_listener_default)}</div> <figcaption class="mt-6 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
M5 // DUAL LISTENER
</figcaption> </figure> <figure class="wb-skew border-4 border-blood-crimson bg-carbon-void p-4 shadow-[6px_6px_0px_#7a0a1e]" data-diagram="config-resolution"> <div class="overflow-x-auto">${unescapeHTML(config_resolution_default)}</div> <figcaption class="mt-6 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
M7 // CONFIG RESOLUTION
</figcaption> </figure> </section> <!-- THE ARC: the measured numbers this sim gestures at. --> <section class="wb-skew border-l-4 border-stamped-canary bg-carbon-void p-8" aria-label="Benchmark notes"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "canary" }, { "default": ($$result) => renderTemplate`SIM NOTES · THE MEASURED ARC` })} <p class="mt-6 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The numbers this sim gestures at are real, and they arrived in stages: the
				benchmarks below were printed in the CHANGELOG at each release, and the sim's
				simulation boundary is that it re-runs them in your browser.
</p> <div class="mt-8 grid gap-6 md:grid-cols-2"> <div class="border-2 border-blood-crimson/60 bg-soot-black p-5"> <div class="font-mono text-base font-bold uppercase tracking-widest text-zinc-dust">
v1.2.2 · REAL-WORLD EXAMPLE
</div> <div class="mt-3 font-mono text-2xl font-black text-bone-white">
216 KB → 12 markers
</div> <p class="mt-2 font-mono text-base text-zinc-dust">
54K → 240 tokens · the CHANGELOG entry prints the ratio as 225×
</p> </div> <div class="border-2 border-blood-crimson/60 bg-soot-black p-5"> <div class="font-mono text-base font-bold uppercase tracking-widest text-zinc-dust">
v1.2.2 · CLASSIFICATION &amp; CCR STORE (APPLE M2 MAX)
</div> <div class="mt-3 font-mono text-base font-black text-bone-white">
classify 40-123 ns · put 453 ns · get 119.4 ns
</div> <p class="mt-2 font-mono text-base text-zinc-dust">
CCR mixed MT, 8 threads: DashMap 229 µs vs Mutex 1.15 ms
</p> </div> <div class="border-2 border-blood-crimson/60 bg-soot-black p-5"> <div class="font-mono text-base font-bold uppercase tracking-widest text-zinc-dust">
WHY THE STORE LOOKS LIKE IT DOES
</div> <div class="mt-3 font-mono text-base font-black text-weathered-teal">
5× at 8 threads
</div> <p class="mt-2 font-mono text-base text-zinc-dust">
The DashMap-over-Mutex result is why the in-memory CCR backend is a sharded
						map, not one guarded table.
</p> </div> <div class="border-2 border-blood-crimson/60 bg-soot-black p-5"> <div class="font-mono text-base font-bold uppercase tracking-widest text-zinc-dust">
v1.3.4 · RETRIEVAL INTEGRITY
</div> <div class="mt-3 font-mono text-base font-black text-bone-white">
20/20 retrieve OK
</div> <p class="mt-2 font-mono text-base text-zinc-dust">
Every compressed blob in the standard corpus was retrieved byte-exact; the
						corpus ratios themselves live on the benchmarks page.
</p> </div> </div> <p class="mt-6 font-mono text-base leading-relaxed text-zinc-dust">
SRC: CHANGELOG.md:962-973 (the ns/µs table) · CHANGELOG.md:983 (216 KB → 12
				markers)
</p> </section> <!-- THE BOUNDARY: what is real here, and what is not. --> <footer class="wb-skew border-l-4 border-weathered-teal bg-carbon-void p-6"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "teal" }, { "default": ($$result) => renderTemplate`SIMULATION BOUNDARY` })} <p class="mt-6 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Real on this page: the classifier rules (first match wins, per README.md:153-176),
				the preview line shapes (README.md:108-133), the threshold semantics and defaults
				(README.md:395-420).
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Simulated: the BLAKE3 digest (a deterministic stand-in hash - the real 40-char
				digest needs the Rust store), the 40-123 ns timing readout, and aphrodite_retrieve
				(shown as the decision text, never executed).
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
No network, no runtime - everything happens in this tab.
</p> <p class="mt-6 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Classifier framing: the 16 pipeline types above follow the README catalog
				(README.md:155-176).
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The full registry is larger - the 30-type content catalog lives in
				docs/classification/content-types.md:118-151; this demo simulates the README tier
				only.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Not depicted: context-engine auto-compaction - the engine is opt-in and
				non-destructive; the per-turn context side is the injection assembler shown under
				the decision.
</p> </footer> <!-- RELATED: the natural neighbors. --> ${renderComponent($$result, "Related", $$Related, { "Links": [
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
	] })} </main> ${renderComponent($$result, "ZineDiagramNav", $$ZineDiagramNav, {})} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/workbench.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/workbench.astro";
var $$url = "/workbench";
// \0virtual:astro:page:Source/pages/workbench@_@astro
var page = () => workbench_exports;
export { page };
