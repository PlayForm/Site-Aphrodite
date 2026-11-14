import { n as createComponent, t as createAstro } from "./compiler_DE9Ou0YP.mjs";
import { C as addAttribute, T as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent } from "./server_CNuTCIdA.mjs";
import { t as renderScript } from "./script_DodTPwlH.mjs";
import { n as $$ZineKicker } from "./Base_BfYuyvJ_.mjs";
import { t as $$ZineTape } from "./ZineTape_PKiqfpjH.mjs";
import { t as $$ZineBox } from "./ZineBox_CmppvIAU.mjs";
import { t as $$ZineStream } from "./ZineStream_DlQ5np2Q.mjs";
import { t as $$ZinePreview } from "./ZinePreview_eeNcJEd9.mjs";
import { t as $$CodeFence } from "./CodeFence_BroFWIlP.mjs";
// Source/Component/ZineFlow.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineFlow = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineFlow;
	const { Title, Complete = "FLOW COMPLETE", Steps } = Astro.props;
	const PaneLines = (Text) => Array.isArray(Text) ? Text : [Text];
	const PaneLineClass = (Line) => Line.includes("<<<CCR:") ? "ccr-marker text-stamped-canary font-bold" : Line.startsWith("» ") ? "text-weathered-teal" : Line.startsWith("· ") ? "opacity-40" : Line.startsWith("→ ") ? "opacity-70" : "";
	return renderTemplate`${maybeRenderHead($$result)}<div class="zine-box-crimson relative border-4 border-blood-crimson bg-carbon-void p-5 sm:p-8" data-zine-flow> <div class="absolute -top-3.5 left-6 -rotate-1 border border-black bg-raw-blood px-3 py-0.5 text-base font-black uppercase tracking-widest text-bone-white shadow-[2px_2px_0px_#000]"> ${Title} </div> <!-- Stage ticks: one per step, clickable, the current one lit. Plain
	     buttons (not a tablist): the panes are not tabpanels, so a tabs ARIA
	     pattern would be broken here - the labels carry the semantics. --> <div class="mt-2 flex items-center gap-1.5" data-flow-ticks aria-label="Traversal stages"> ${Steps.map((Step, I) => renderTemplate`<button class="h-2.5 w-8 border border-black bg-soot-black font-mono transition-colors"${addAttribute(I, "data-flow-tick")} type="button"${addAttribute(`Go to stage ${I + 1}: ${Step.Title}`, "aria-label")}></button>`)} <span class="ml-2 font-mono text-base font-bold text-zinc-dust" data-flow-count>
01 / ${String(Steps.length).padStart(2, "0")} </span> </div> <!-- The synchronized panes: every step rendered, the script shows one.
	     The steps stack in one grid cell (col/row 1), so the pane AUTO-GROWS
	     with the visible step's content - never clipped, never overflowing.
	     .ccr-marker lets long unbroken marker strings wrap mid-token. --> <div class="mt-4 grid gap-4 lg:grid-cols-2"> ${["agent", "system"].map((Pane) => renderTemplate`<div class="border-2 border-oxblood-dark bg-asphalt-panel p-3.5"> <div${addAttribute(`mb-1 text-base font-black uppercase tracking-widest ${Pane === "agent" ? "text-stamped-canary" : "text-weathered-teal"}`, "class")}> ${Pane === "agent" ? "AGENT-VIEW · CONVERSATION" : "SYSTEM-PATH · BACKEND"} </div> <div class="grid min-h-[5.5rem]"> ${Steps.map((Step, I) => renderTemplate`<div class="col-start-1 row-start-1 border border-oxblood-dark bg-soot-black p-2 font-mono text-base font-bold leading-relaxed text-bone-white"${addAttribute(Pane, "data-flow-pane")}${addAttribute(I, "data-flow-step")}${addAttribute(I > 0, "hidden")}> ${(Pane === "agent" ? PaneLines(Step.Agent) : PaneLines(Step.System)).map((Line) => renderTemplate`<div${addAttribute(PaneLineClass(Line), "class")}>${Line}</div>`)} </div>`)} </div> </div>`)} </div> <!-- The stage title + detail line + anchor chip --> <div class="mt-4 flex flex-wrap items-center gap-3"> <span class="font-mono text-base font-black uppercase tracking-widest text-bone-white" data-flow-title> ${Steps[0].Title} </span> ${Steps[0].Anchor && renderTemplate`<a class="border border-oxblood-dark bg-soot-black px-2 py-0.5 font-mono text-base font-bold text-weathered-teal hover:bg-weathered-teal hover:text-bone-white"${addAttribute(Steps[0].Anchor, "href")} data-flow-anchor${addAttribute(Steps[0].Anchor.startsWith("http") ? "noreferrer" : void 0, "rel")}> ${Steps[0].AnchorLabel ?? "SRC"} ↗
</a>`} </div> <p class="mt-1.5 font-body text-base leading-relaxed text-bone-newsprint opacity-70 transition-opacity hover:opacity-100" data-flow-detail> ${Steps[0].Detail} </p> <!-- Controls: PREV / PLAY / NEXT; the stamp appears at the end --> <div class="mt-5 flex items-center gap-3"> <button class="border border-black bg-raw-blood px-3 py-1.5 font-mono text-base font-black uppercase text-bone-white shadow-[2px_2px_0px_#000] transition-colors hover:bg-blood-crimson disabled:opacity-40" data-flow-prev type="button">
◀ PREV
</button> <button class="border border-black bg-raw-blood px-3 py-1.5 font-mono text-base font-black uppercase text-bone-white shadow-[2px_2px_0px_#000] transition-colors hover:bg-blood-crimson" data-flow-play type="button" aria-pressed="false">
▶ PLAY
</button> <button class="border border-black bg-raw-blood px-3 py-1.5 font-mono text-base font-black uppercase text-bone-white shadow-[2px_2px_0px_#000] transition-colors hover:bg-blood-crimson" data-flow-next type="button">
NEXT ▶
</button> <span class="hidden -rotate-2 border-2 border-black bg-stamped-canary px-3 py-1 font-mono text-base font-black uppercase tracking-widest text-soot-black shadow-[3px_3px_0px_#000]" data-flow-stamp> ${Complete} </span> </div> <script crossorigin=\"anonymous\" type="application/json" data-flow-steps>${unescapeHTML(JSON.stringify(Steps))}<\/script></div>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineFlow.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineFlow.astro", void 0);
// Source/Component/ExampleCase.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ExampleCase = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ExampleCase;
	const { Id, N, Label, Title, Tone = "crimson", Rotate = "", Claim, Command, Output, Preview, Marker, Note, Panels = [], Diagram, Src } = Astro.props;
	const TapeColor = {
		crimson: "raw",
		canary: "canary",
		teal: "teal"
	};
	return renderTemplate`${maybeRenderHead($$result)}<section${addAttribute(Id, "id")} class="relative w-full"> ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": Tone,
		"Rotate": Rotate
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": `${N} // ${Label}`,
		"Color": TapeColor[Tone],
		"Side": "left"
	})} <div class="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2"> <!-- THE CLAIM --><div class="flex flex-col gap-6"> <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl"> ${Title} </h2> ${Claim.map((Sentence, Index) => renderTemplate`<p${addAttribute(["font-body text-base leading-relaxed text-bone-newsprint", Index > 0 && "mt-3"], "class:list")}>${unescapeHTML(Sentence)}</p>`)} </div> <!-- THE MECHANICS: command, output, marker --> <div class="flex flex-col gap-8"> <div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "dust"
	}, { "default": ($$result) => renderTemplate`THE COMMAND` })} <div class="mt-3 border-2 border-oxblood-dark bg-soot-black"> ${renderComponent($$result, "CodeFence", $$CodeFence, {
		"Code": Command.Code,
		"Lang": Command.Lang
	})} </div> </div> <div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "dust"
	}, { "default": ($$result) => renderTemplate`THE OUTPUT` })} <div class="mt-3"> ${renderComponent($$result, "ZineStream", $$ZineStream, { "Lines": Output })} </div> </div> <div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "dust"
	}, { "default": ($$result) => renderTemplate`THE MARKER` })} <div class="mt-3"> ${renderComponent($$result, "ZinePreview", $$ZinePreview, {
		"Label": "PREVIEW + HASH",
		"Result": Preview,
		"Hash": Marker
	})} </div> </div> </div> </div>  ${Panels.map((Panel) => renderTemplate`<div class="mt-24"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "dust" }, { "default": ($$result) => renderTemplate`${Panel.Label}` })} ${Panel.Kind === "rows" && renderTemplate`<div class="mt-8 flex flex-col gap-3"> ${Panel.Rows?.map(({ Left, Right, Tag, TagTone = "canary" }) => renderTemplate`<div class="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border border-oxblood-dark bg-asphalt-panel px-4 py-3"> <span class="font-mono text-base font-black uppercase tracking-widest text-bone-white"> ${Left} </span> <span class="font-mono text-base text-zinc-dust">${Right}</span> ${Tag && renderTemplate`<span${addAttribute(["border px-2 py-0.5 font-mono text-base font-black", {
		canary: "border-stamped-canary text-stamped-canary",
		teal: "border-weathered-teal text-weathered-teal",
		newsprint: "border-bone-newsprint text-bone-newsprint"
	}[TagTone]], "class:list")}> ${Tag} </span>`} </div>`)} </div>`} ${Panel.Kind === "cards" && renderTemplate`<div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${Panel.Cards?.map(({ Title: CardTitle, Body, Note: CardNote }) => renderTemplate`<div class="zine-box-subtle border-[3px] border-oxblood-dark bg-soot-black p-5"> <div class="font-mono text-base font-black uppercase tracking-widest text-zinc-dust"> ${CardTitle} </div> <div class="mt-4 font-mono text-base text-bone-white">${Body}</div> ${CardNote && renderTemplate`<div class="mt-4 border-t border-oxblood-dark pt-4 font-mono text-base leading-relaxed text-zinc-dust"> ${CardNote} </div>`} </div>`)} </div>`} ${Panel.Kind === "lanes" && renderTemplate`<div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2"> ${Panel.Lanes?.map(({ Title: LaneTitle, Lines, Marker: LaneMarker }) => renderTemplate`<div class="border border-oxblood-dark bg-soot-black p-5 font-mono text-base"> <div class="font-black uppercase tracking-widest text-bone-white">${LaneTitle}</div> ${Lines.map((Line) => renderTemplate`<div class="mt-2 text-zinc-dust">${Line}</div>`)} ${LaneMarker && renderTemplate`<div class="ccr-marker mt-4 text-weathered-teal">${unescapeHTML(LaneMarker)}</div>`} </div>`)} </div>`} </div>`)} ${Diagram && renderTemplate`<figure class="mt-24 border border-oxblood-dark bg-asphalt-panel p-4"> <div class="overflow-x-auto">${unescapeHTML(Diagram.Html)}</div> <figcaption class="mt-6 font-mono text-base font-black uppercase tracking-widest text-zinc-dust"> ${Diagram.Caption} </figcaption> </figure>`} ${Note?.length ? renderTemplate`<div class="mt-24 flex flex-col gap-6"> ${Note.map((Sentence, Index) => renderTemplate`<p${addAttribute(["max-w-3xl font-body text-base leading-relaxed text-bone-newsprint", Index > 0 && "mt-3"], "class:list")}>${unescapeHTML(Sentence)}</p>`)} </div>` : null} <div class="mt-16 font-mono text-base leading-relaxed text-zinc-dust">${Src}</div> ` })} </section>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ExampleCase.astro", void 0);
export { $$ZineFlow as n, $$ExampleCase as t };
