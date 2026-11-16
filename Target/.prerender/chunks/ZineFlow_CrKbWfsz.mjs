import { _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro, h as renderScript } from "./Base_Bs2-mKm9.mjs";
// Source/Component/ZineFlow.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineFlow = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineFlow;
	const { Title, Complete = "FLOW COMPLETE", Steps } = Astro.props;
	const Total = Steps.length;
	const Pad = (Value) => String(Value).padStart(2, "0");
	const PaneLines = (Text) => Array.isArray(Text) ? Text : [Text];
	const VolumeOf = (Line) => Line.startsWith("· ") ? "fade" : Line.startsWith("→ ") ? "dim" : "plain";
	const VolumeClass = {
		plain: "",
		fade: "opacity-40",
		dim: "opacity-70"
	};
	const RoleInk = {
		command: "text-stamped-canary font-bold",
		tree: "text-bone-newsprint",
		tag: "text-weathered-teal",
		warning: "text-bone-white"
	};
	const RoleRow = {
		command: "",
		tree: "",
		tag: "",
		warning: "border-l-2 border-raw-blood bg-[color-mix(in_srgb,var(--raw-blood)_18%,var(--soot-black))] pl-2"
	};
	const RoleOf = (Line) => {
		const Trimmed = Line.trimStart();
		if (Trimmed.includes("<<<CCR:") || Trimmed.startsWith("» ")) return "tag";
		if (Trimmed.startsWith("$ ")) return "command";
		if (/^(warning|error)[:[]/i.test(Trimmed) || Trimmed.includes(": error[") || Trimmed.includes(": warning:")) return "warning";
		if (/^[├└│─]/.test(Trimmed) || Trimmed.startsWith("Compiling ")) return "tree";
	};
	const IsMarker = (Line) => Line.includes("<<<CCR:");
	const LineRow = (Line) => {
		const LineRole = RoleOf(Line);
		return LineRole === void 0 ? "" : RoleRow[LineRole];
	};
	const LineInk = (Line) => {
		const LineRole = RoleOf(Line);
		return [
			VolumeClass[VolumeOf(Line)],
			LineRole === void 0 ? "" : RoleInk[LineRole],
			IsMarker(Line) ? "ccr-marker" : ""
		];
	};
	const Panes = ["agent", "system"];
	const PaneName = (Pane) => Pane === "agent" ? "AGENT-VIEW" : "SYSTEM-PATH";
	const PanePayload = (Pane) => Pane === "agent" ? "CONVERSATION" : "BACKEND";
	const PaneTag = (Pane) => Pane === "agent" ? "telemetry-tag--canary" : "telemetry-tag--teal";
	const PaneText = (Step, Pane) => PaneLines(Pane === "agent" ? Step.Agent : Step.System);
	return renderTemplate`${maybeRenderHead($$result)}<div class="grunge zine-box-crimson relative border-4 border-blood-crimson bg-carbon-void p-5 sm:p-8" data-grunge data-zine-flow> <div class="absolute -top-3.5 left-6 -rotate-1 border border-black bg-raw-blood px-3 py-0.5 text-base font-black uppercase tracking-widest text-bone-white shadow-[2px_2px_0px_#000]"> ${Title} </div> <!-- THE HEADER RIBBON: the stage ticks, the stage's short name and its
	     position - the console's own progress line. One 44px hit area per stage
	     with a restrained bar inside it. Hidden until the script has bound: the
	     bars are a control, and a control that cannot work is a promise the page
	     cannot keep. Plain buttons (not a tablist): the panes are not tabpanels,
	     so a tabs ARIA pattern would be broken here - the labels carry the
	     semantics, and aria-current="step" marks the stage being read. --> <div class="mt-4 flex flex-wrap items-center gap-x-1 gap-y-2 border border-oxblood-dark bg-asphalt-panel px-2 py-1" data-flow-ticks role="group"${addAttribute(`Traversal stages, ${Total} in order`, "aria-label")}> ${Steps.map((Step, I) => renderTemplate`<button class="zine-flow-tick flex h-11 items-center px-0.5"${addAttribute(I, "data-flow-tick")} type="button"${addAttribute(`Go to stage ${I + 1} of ${Total}: ${Step.Title}`, "aria-label")}> <span class="zine-flow-tick-bar block h-2.5 w-8 border border-black bg-soot-black" aria-hidden="true"></span> </button>`)} <span class="ml-auto flex flex-wrap items-baseline gap-x-2 font-mono text-base font-bold"> <span class="text-zinc-dust" data-flow-stage> ${Steps[0]?.Title ?? ""} </span> <span class="telemetry-tag ml-auto shrink-0" data-flow-count> ${Pad(1)} / ${Pad(Total)} </span> </span> </div> <!-- The one live region on this module, and it says one sentence: which
	     stage is on screen. Announcing the whole root made every repaint a
	     screen-reader event; announcing the stage makes the change the
	     message. --> <p class="sr-only" data-flow-status role="status" aria-live="polite" aria-atomic="true">
Step 1 of ${Total}: ${Steps[0]?.Title ?? ""}.
</p> <!-- Every stage, in order, with both panes. This is what a reader without
	     JavaScript sees, what print sees, and what browser-find reaches. Each
	     pane is a POD - a labelled ribbon over an inset well - so the pair reads
	     as two consoles at the same depth, and the difference between them is
	     what they show, never how far they sit from the page. --> <div class="mt-4 flex flex-col gap-4"> ${Steps.map((Step, I) => renderTemplate`<div class="zine-flow-step"${addAttribute(I, "data-flow-step")}> <div class="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1"> <span class="zine-flow-step-index font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
STEP ${Pad(I + 1)} / ${Pad(Total)} </span> <span class="font-mono text-base font-black uppercase tracking-widest text-bone-white" data-flow-title> ${Step.Title} </span> ${Step.Anchor && renderTemplate`<a class="border border-oxblood-dark bg-soot-black px-2 py-0.5 font-mono text-base font-bold text-weathered-teal hover:bg-weathered-teal hover:text-bone-white"${addAttribute(Step.Anchor, "href")}${addAttribute(Step.Anchor.startsWith("http") ? "noreferrer" : void 0, "rel")}> ${Step.AnchorLabel ?? "SRC"} ↗
</a>`} </div> <div class="grid min-h-[5.5rem] gap-4 lg:grid-cols-2"> ${Panes.map((Pane) => renderTemplate`<div class="zine-flow-pane flex flex-col border-2 border-oxblood-dark bg-asphalt-panel"${addAttribute(Pane, "data-flow-pane")}> <div class="zine-flow-pane-label flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-oxblood-dark bg-asphalt-panel px-3 py-1.5 font-mono text-base font-black uppercase tracking-widest"> <span class="min-w-0 break-words">${PaneName(Pane)}</span> <span${addAttribute(["telemetry-tag ml-auto shrink-0", PaneTag(Pane)], "class:list")}> ${PanePayload(Pane)} </span> </div> <div class="flex grow p-2"> <div class="grow border border-oxblood-dark bg-soot-black p-2 font-mono text-base font-bold leading-relaxed text-bone-white"> ${PaneText(Step, Pane).map((Line) => renderTemplate`<div${addAttribute(LineRow(Line), "class")}> <span${addAttribute(LineInk(Line), "class:list")}>${Line}</span> </div>`)} </div> </div> </div>`)} </div> ${Step.Detail && renderTemplate`<p class="zine-flow-detail mt-1.5 font-body text-base leading-relaxed text-bone-newsprint opacity-70 transition-opacity hover:opacity-100"> ${Step.Detail} </p>`} </div>`)} </div> <!-- Controls: manual first, autoplay behind Replay, and the stamp that
	     only appears on the last stage. --> <div class="mt-5 flex flex-wrap items-center gap-3" data-flow-controls> <button class="border border-black bg-raw-blood px-3 py-1.5 font-mono text-base font-black uppercase text-bone-white shadow-[2px_2px_0px_#000] transition-colors hover:bg-blood-crimson disabled:opacity-40" data-flow-prev type="button" disabled>
◀ PREV
</button> <button class="border border-black bg-raw-blood px-3 py-1.5 font-mono text-base font-black uppercase text-bone-white shadow-[2px_2px_0px_#000] transition-colors hover:bg-blood-crimson disabled:opacity-40" data-flow-next type="button">
NEXT ▶
</button> <button class="border border-black bg-raw-blood px-3 py-1.5 font-mono text-base font-black uppercase text-bone-white shadow-[2px_2px_0px_#000] transition-colors hover:bg-blood-crimson" data-flow-play type="button" aria-pressed="false">
▶ REPLAY
</button> <button class="border border-black bg-raw-blood px-3 py-1.5 font-mono text-base font-black uppercase text-bone-white shadow-[2px_2px_0px_#000] transition-colors hover:bg-blood-crimson" data-flow-all type="button" aria-pressed="false">
READ ALL STEPS
</button> <span class="hidden -rotate-2 border-2 border-black bg-stamped-canary px-3 py-1 font-mono text-base font-black uppercase tracking-widest text-soot-black shadow-[3px_3px_0px_#000]" data-flow-stamp> ${Complete} </span> </div> </div>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineFlow.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineFlow.astro", void 0);
export { $$ZineFlow as t };
