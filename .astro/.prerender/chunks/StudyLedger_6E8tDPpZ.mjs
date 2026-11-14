import { f as createAstro, p as createComponent } from "./Base_DtRxtNeh.mjs";
import { _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
// Source/Component/StudyLedger.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$StudyLedger = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$StudyLedger;
	const { Scale = "compact", ShowBars = false } = Astro.props;
	const ValueSize = Scale === "full" ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl";
	const Bands = [
		{
			Label: "CHAT-ONLY SESSIONS",
			Range: "~0%",
			Percent: 0,
			Color: "zinc",
			Note: ""
		},
		{
			Label: "LIGHT DEVELOPER SESSIONS",
			Range: "~5%",
			Percent: 5,
			Color: "teal",
			Note: ""
		},
		{
			Label: "TOOL-HEAVY SESSIONS",
			Range: "20-25%",
			Percent: 23,
			Color: "teal",
			Note: ""
		},
		{
			Label: "SIMULATED PURE-TOOL LOOP",
			Range: "76-82%",
			Percent: 79,
			Color: "raw",
			Note: "a simulated diff+ls+build+search workload - a stress test, not real usage"
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
		raw: "text-raw-blood"
	};
	return renderTemplate`${maybeRenderHead($$result)}<div class="border-t-2 border-oxblood-dark pt-6"> <!-- HEADER row: the period + the scope --><div class="flex flex-wrap items-baseline justify-between gap-2"> <div class="font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
MEASURED, SEP 2026
</div> <div class="font-mono text-base font-bold uppercase tracking-wider text-zinc-dust">
200 HERMES SESSIONS &bull; 6,843 API CALLS &bull; SEP 18-20
</div> </div> <!-- KEY-VALUE ledger rows --> <div class="mt-4 divide-y divide-oxblood-dark/60 border border-oxblood-dark bg-soot-black"> ${[
		{
			Label: "TOKENS SAVED",
			Value: "156,342,817",
			Accent: "text-stamped-canary",
			Note: "26.9% of the expanded context budget deflected"
		},
		{
			Label: "WITH MARKERS / EXPANDED",
			Value: "424,959,588 / 581,302,405",
			Accent: "text-bone-newsprint",
			Note: "tokens as stored vs the same payload with every marker expanded (stock Hermes)"
		},
		{
			Label: "SESSIONS SAVED",
			Value: "183 / 200",
			Accent: "text-weathered-teal",
			Note: "median session ratio 22.9%; avg 22,921 saved per call"
		},
		{
			Label: "SESSION-SHAPE BAND",
			Value: "20-25% tool-heavy · 76-82% pure-tool",
			Accent: "text-zinc-dust",
			Note: "the same engine, four payoffs - savings track tool-output volume"
		},
		{
			Label: "RETRIEVAL TAX",
			Value: "2,275 calls / 2,011,583 tokens",
			Accent: "text-zinc-dust",
			Note: "the re-entry toll, roughly 1.3% of the tokens saved"
		}
	].map(({ Label, Value, Accent, Note }) => renderTemplate`<div class="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"> <div class="shrink-0 font-mono text-base font-bold uppercase tracking-widest text-zinc-dust sm:w-64"> ${Label} </div> <div${addAttribute(`font-mono font-black ${ValueSize} ${Accent}`, "class")}>${Value}</div> <div class="font-body text-base text-zinc-dust sm:flex-1 sm:text-right">${Note}</div> </div>`)} </div> <!-- Provenance: the study is the author's own work --> <p class="mt-3 font-body text-base leading-relaxed text-zinc-dust">
The study is the author's own work - multi-agent atomization fan-outs, merge/PR
			work, plugin integration - reconstructed payload-by-payload from the session
			transcripts.
</p> ${ShowBars && renderTemplate`<div class="mt-4 space-y-3"> ${Bands.map(({ Label, Range, Percent, Color, Note }) => renderTemplate`<div> <div class="mb-1 flex justify-between text-base font-bold"> <span class="text-bone-newsprint">${Label}</span> <span${addAttribute(BarText[Color], "class")}>${Range}</span> </div> <div class="flex h-4 w-full overflow-hidden border border-oxblood-dark bg-soot-black"> <div${addAttribute(`h-full ${BarColor[Color]}`, "class")}${addAttribute(`width: ${Percent}%;`, "style")}></div> </div> ${Note && renderTemplate`<div class="mt-1 font-body text-base text-zinc-dust">${Note}</div>`} </div>`)} </div>`} <!-- CAVEAT: its own bordered note, visually distinct --> <div class="mt-4 border-l-4 border-stamped-canary bg-asphalt-panel p-4 font-mono text-base leading-relaxed text-bone-newsprint"> <span class="font-black uppercase tracking-widest text-stamped-canary">CAVEAT &bull; </span>
THE EXACT PERCENTAGE IS A BAND: ~24-33% ACROSS A 3.0-4.5 CHARS/TOKEN SENSITIVITY
			RANGE, CENTERED ~27%.
</div> <!-- SRC: the plain citation token the CodeMentions pass links at build time --> <div class="mt-3 font-mono text-base text-zinc-dust">SRC: README.md:467-511.</div> </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/StudyLedger.astro", void 0);
export { $$StudyLedger as t };
