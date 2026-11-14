import { i as __exportAll, r as createComponent } from "./compiler_CWd3RCEz.mjs";
import { C as addAttribute, _ as maybeRenderHead, g as renderTemplate, l as renderComponent } from "./server_CNuTCIdA.mjs";
import { t as $$Base } from "./Base_7T8xAMbn.mjs";
import { t as $$Related } from "./Related_Bi8U0sIn.mjs";
import { t as $$PageShell } from "./PageShell_F2VgyKk2.mjs";
import { t as $$PageHeader } from "./PageHeader_CfIoxglT.mjs";
import { t as $$ZineTape } from "./ZineTape_d6PHbVV6.mjs";
import { t as $$ZineBox } from "./ZineBox_BY6_l99A.mjs";
import { t as $$ZineSource } from "./ZineSource_C5IzW2TL.mjs";
// Source/pages/benchmarks.astro
var benchmarks_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Benchmarks,
	file: () => $$file,
	url: () => $$url
});
var $$Benchmarks = createComponent(($$result, $$props, $$slots) => {
	const Rows = [
		{ Group: "THE HEADLINE" },
		{
			Measure: "MAX COMPRESSION",
			Figure: "610×",
			Means: "Best case on large low-entropy prose. 132× overall on the same corpus, 106 KB → 800 B. The best case is not part of the per-type chart below - that chart peaks at 416×."
		},
		{
			Measure: "END-TO-END",
			Figure: "8-40 ms",
			Means: "Including the HTTP round-trip; the headline figure is ~10 ms."
		},
		{
			Measure: "CLASSIFICATION",
			Figure: "40-123 ns",
			Means: "The compress path itself stays under 1 ms."
		},
		{
			Measure: "MEDIAN",
			Figure: "23×",
			Means: "Fewer tokens on tool output - the median the README reports for its per-type table."
		},
		{ Group: "RATIO BY OUTPUT CLASS (README STANDARD CORPUS, LOG SCALE):" },
		{
			Measure: "BROWSER SNAPSHOT",
			Figure: "416×"
		},
		{
			Measure: "BUILD OUTPUT",
			Figure: "140×"
		},
		{
			Measure: "JSON",
			Figure: "40×"
		},
		{
			Measure: "GIT DIFF",
			Figure: "23×"
		},
		{
			Measure: "TERMINAL",
			Figure: "20×"
		},
		{
			Group: "REAL-WORLD STUDY // MEASURED, SEP 2026",
			Scope: "200 HERMES SESSIONS • 6,843 API CALLS • SEP 18-20"
		},
		{
			Measure: "TOKENS SAVED",
			Figure: "156,342,817",
			Means: "26.9% of the expanded context budget deflected"
		},
		{
			Measure: "WITH MARKERS / EXPANDED",
			Figure: "424,959,588 / 581,302,405",
			Means: "tokens as stored vs the same payload with every marker expanded (stock Hermes)"
		},
		{
			Measure: "SESSIONS SAVED",
			Figure: "183 / 200",
			Means: "median session ratio 22.9%; avg 22,921 saved per call"
		},
		{
			Measure: "SESSION-SHAPE BAND",
			Figure: "20-25% tool-heavy · 76-82% pure-tool",
			Means: "the same engine, four payoffs - savings track tool-output volume"
		},
		{
			Measure: "RETRIEVAL TAX",
			Figure: "2,275 calls / 2,011,583 tokens",
			Means: "the re-entry toll, roughly 1.3% of the tokens saved"
		},
		{
			Measure: "CHAT-ONLY SESSIONS",
			Figure: "~0%"
		},
		{
			Measure: "LIGHT DEVELOPER SESSIONS",
			Figure: "~5%"
		},
		{
			Measure: "TOOL-HEAVY SESSIONS",
			Figure: "20-25%"
		},
		{
			Measure: "SIMULATED PURE-TOOL LOOP",
			Figure: "76-82%",
			Means: "a simulated diff+ls+build+search workload - a stress test, not real usage"
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "BENCHMARKS // APHRODITE",
		"Description": "Aphrodite benchmarks: up to 610x compression on the standard corpus (132x overall, 106 KB to 800 B), 8-40 ms end-to-end, 40-123 ns classification, and the 200-session real-world study."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageShell", $$PageShell, { "Rhythm": "wide" }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHeader", $$PageHeader, {
		"Tape": "BENCHMARKS // MEASURED FIGURES",
		"Title": "Benchmarks",
		"Lead": [`These figures come from the project's own benchmarks and from a study of the author's real Hermes sessions.`, `Benchmark ratios are measured; session savings are estimated, and the uncertainty band is shown below.`]
	})}  ${maybeRenderHead($$result)}<section class="relative w-full"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "MEASURED // RATIOS + THE STUDY"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Size": "lg",
		"Rotate": "-rotate-[1deg]"
	}, { "default": ($$result) => renderTemplate` <div class="overflow-x-auto"> <table class="w-full border-collapse font-mono text-base"> <tbody> ${Rows.map(({ Group, Scope, Measure, Figure, Means }, I) => Group ? renderTemplate`<tr> <td colspan="3"${addAttribute(`pb-1 text-base font-black uppercase tracking-widest text-stamped-canary ${I === 0 ? "" : "pt-10"}`, "class")}> ${Group} ${Scope && renderTemplate`<div class="mt-1 text-base font-bold uppercase tracking-wider text-zinc-dust"> ${Scope} </div>`} </td> </tr>` : renderTemplate`<tr${addAttribute(I < Rows.length - 1 ? "border-b border-oxblood-dark" : "", "class")}> <td class="py-3 pr-4 align-top text-base font-black text-zinc-dust"> ${Measure} </td> <td class="py-3 pr-6 align-top whitespace-nowrap text-base font-black text-weathered-teal"> ${Figure} </td> <td class="py-3 align-top text-bone-newsprint">${Means}</td> </tr>`)} </tbody> </table> </div> <p class="mt-12 border-t border-oxblood-dark pt-8 text-base leading-relaxed text-zinc-dust">
The study is the author's own work - multi-agent atomization fan-outs, merge/PR work,
					plugin integration - reconstructed payload-by-payload from the session transcripts.
</p> <p class="mt-3 text-base leading-relaxed text-zinc-dust"> <span class="font-black uppercase tracking-widest text-stamped-canary">CAVEAT &bull; </span>
THE EXACT PERCENTAGE IS A BAND: ~24-33% ACROSS A 3.0-4.5 CHARS/TOKEN SENSITIVITY RANGE,
					CENTERED ~27%.
</p> ` })} ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [
		"SRC: README.md:12, 446",
		"SRC: README.md:460, 12",
		"SRC: README.md:461, 133; docs/README.md:7",
		"SRC: README.md:459",
		"SRC: README.md:451-457",
		"SRC: README.md:467-511."
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
