import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { E as unescapeHTML, _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, t as $$Base } from "./Base_B3YGMVwW.mjs";
import { a as $$Related } from "./DocsSidebar_DfVitkgG.mjs";
import { n as $$PageShell, t as $$ZineTape } from "./ZineTape_SD5UQe0y.mjs";
import { t as $$PageHeader } from "./PageHeader_D7477rfZ.mjs";
import { t as $$ZineBox } from "./ZineBox_CagEU9Nk.mjs";
import { t as $$ZineSource } from "./ZineSource_B5XPnKZs.mjs";
import { t as $$ZineDiagramNav } from "./ZineDiagramNav_CN7ukSrg.mjs";
import { a as hook_chain_default, i as Sequence, t as HookCard } from "./Hooks_BVWFe9KC.mjs";
import { c as Hooks, s as HookNames, t as Assert } from "./Roster_DWXQuOMb.mjs";
// Source/pages/hooks.astro
var hooks_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Hooks,
	file: () => $$file,
	url: () => $$url
});
var $$Hooks = createComponent(($$result, $$props, $$slots) => {
	Assert("Source/Library/Prose/Hooks.ts", HookCard, HookNames);
	const Hooks$1 = Hooks.map((Hook) => {
		const Prose = HookCard[Hook.Name];
		return {
			...Hook,
			Tape: Prose?.Tape ?? "raw",
			Tone: Prose?.Tone ?? "subtle",
			Rotate: Prose?.Rotate ?? "",
			Body: Prose?.Body ?? ["The manifest registers this seam; its card is not written yet."]
		};
	});
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "HOOKS // APHRODITE",
		"Description": "The six Aphrodite hooks as a chain: session reset, tool-call pre-flight, dual compression transforms, the pre-LLM context assembler, and post-turn archival - with thresholds, bypass gates, and env-over-TOML precedence."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageShell", $$PageShell, { "Rhythm": "wide" }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHeader", $$PageHeader, {
		"Tape": "HOOKS // THE CHAIN",
		"Title": "Six hooks, one turn",
		"Lead": [
			"A tool call's output becomes part of the model's context, and the hooks are the points where Aphrodite sees that output first.",
			"Every hook is a thin dispatch that forwards its arguments to the Rust dylib and hands the JSON reply back to Hermes.",
			"It is the reason the shim registers one callback per name: on plugin load it asks the dylib for its hook names, and the six hooks are always registered together.",
			`The chain is the whole integration: each seam fires in turn order, and nothing reaches the model that a seam did not first see.`
		]
	})}  ${maybeRenderHead($$result)}<section class="relative w-full" data-reveal> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "SEQUENCE // PER TURN"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Size": "lg",
		"Rotate": "-rotate-[1deg]"
	}, { "default": ($$result) => renderTemplate` <h3 id="sequence" class="mb-8 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
The loop a turn walks
</h3> <div class="space-y-0 border border-oxblood-dark bg-soot-black p-4 font-mono text-base leading-relaxed"> ${Sequence.map(({ Text: Line, Tone }) => renderTemplate`<div${addAttribute(Tone === "canary" ? "pl-4 text-stamped-canary" : Tone === "mute" ? "pl-4 text-zinc-dust" : Tone === "result" ? "text-bone-white" : "pl-4 text-bone-newsprint", "class")}> ${Line} </div>`)} </div> <p class="mt-8 font-body text-base leading-relaxed text-bone-newsprint">
The loop closes on itself, so the state a turn leaves behind is the state the next
					turn reads.
</p> <p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint">
That is why the reset seam exists: a new session starts from a clean baseline instead
					of inheriting the previous session's counters and markers.
</p> <figure class="mt-16 border border-oxblood-dark bg-soot-black p-4" data-diagram="hook-chain"> <div class="overflow-x-auto">${unescapeHTML(hook_chain_default)}</div> <figcaption class="mt-6 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
M3 // HOOK CHAIN
</figcaption> </figure> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "THE SIX // ONE SECTION EACH"
	})} <h3 id="six" class="mb-8 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
What each seam does
</h3> <div class="isolate grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24"> ${Hooks$1.map(({ N, Name, Tape, Tone, Rotate, Body }) => renderTemplate`<div${addAttribute(`zine-box-${Tone} relative border-[3px] bg-carbon-void p-6 transition-transform duration-200 hover:rotate-0 ${Rotate} ${Tone === "canary" ? "border-stamped-canary/40" : Tone === "crimson" ? "border-raw-blood" : N === "04" ? "border-zinc-dust/40" : "border-oxblood-dark"}`, "class")}> <h4${addAttribute(`absolute -top-5 left-4 z-10 border border-black px-2 py-0.5 text-base font-black uppercase ${Tape === "canary" ? "bg-stamped-canary text-soot-black" : Tape === "bone" ? "bg-bone-newsprint text-soot-black" : "bg-raw-blood text-bone-white"}`, "class")}> ${N} // ${Name} </h4> ${Body.map((Paragraph, I) => renderTemplate`<p${addAttribute(I === 0 ? "mt-4 font-body text-base leading-relaxed text-bone-newsprint" : "mt-3 font-body text-base leading-relaxed text-bone-newsprint", "class")}>${unescapeHTML(Paragraph)}</p>`)} </div>`)} </div> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "BYPASS // THE ESSENTIAL-TOOL GATE"
	})} <h3 id="gate" class="mb-8 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
What never gets compressed
</h3> <p class="mb-8 font-body text-base leading-relaxed text-bone-newsprint">
A result is left untouched when it is empty, below threshold, or from the essential
					set - tools the agent needs raw:
</p> <div class="border border-oxblood-dark bg-soot-black p-4 font-mono text-base text-bone-newsprint">
skill_view · skills_list · skill_manage · memory · session_search · read_file ·
					read_terminal
</div> <p class="mt-8 font-body text-base leading-relaxed text-zinc-dust">
Aphrodite also skips its own tools and headroom helpers - compressing
<span class="font-mono text-base text-weathered-teal">aphrodite_retrieve</span>
would just replace resolved content with another marker.
</p> <p class="mt-3 font-body text-base leading-relaxed text-zinc-dust">
The gate is the reason retrieval stays cheap: a marker the model resolves comes back
					whole, because nothing downstream of the gate rewrites it a second time.
</p> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "THRESHOLDS // GATES AND BYPASSES"
	})} <h3 id="thresholds" class="mb-8 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
The numbers that decide
</h3> <div class="overflow-x-auto"> <table class="w-full border-collapse font-mono text-base"> <thead> <tr class="border-b-2 border-oxblood-dark text-left"> <th class="py-3 pr-4 text-base font-black uppercase tracking-widest text-stamped-canary">HOOK</th> <th class="py-3 pr-4 text-base font-black uppercase tracking-widest text-stamped-canary">SETTING</th> <th class="py-3 pr-4 text-base font-black uppercase tracking-widest text-stamped-canary">DEFAULT</th> <th class="py-3 text-base font-black uppercase tracking-widest text-stamped-canary">BYPASS</th> </tr> </thead> <tbody class="text-bone-newsprint"> <tr class="border-b border-oxblood-dark"> <td class="py-3 pr-4">transform_tool_result</td> <td class="py-3 pr-4 text-weathered-teal">tool_threshold_token</td> <td class="py-3 pr-4 text-bone-white">4,096</td> <td class="py-3">empty · essential tools · self tools · <span class="text-stamped-canary">0 = always compress</span></td> </tr> <tr class="border-b border-oxblood-dark"> <td class="py-3 pr-4">transform_terminal_output</td> <td class="py-3 pr-4 text-weathered-teal">terminal_threshold</td> <td class="py-3 pr-4 text-bone-white">1,024</td> <td class="py-3">empty · below threshold · <span class="text-stamped-canary">0 = always compress</span></td> </tr> <tr class="border-b border-oxblood-dark"> <td class="py-3 pr-4">pre_llm_call</td> <td class="py-3 pr-4 text-weathered-teal">flow budget_chars</td> <td class="py-3 pr-4 text-bone-white">4,000</td> <td class="py-3">recall catalog drops first; directives and nudges never drop</td> </tr> <tr> <td class="py-3 pr-4">pre_tool_call (chain split)</td> <td class="py-3 pr-4 text-weathered-teal">chain_split_min_segments</td> <td class="py-3 pr-4 text-bone-white">-</td> <td class="py-3">feature off by default (chain_split = false)</td> </tr> </tbody> </table> </div> <p class="mt-12 border-t border-oxblood-dark pt-8 text-base leading-relaxed text-zinc-dust">
PRECEDENCE: ENVIRONMENT &gt; TOML &gt; DEFAULT
					(APHRODITE_TOOL_THRESHOLD_TOKEN · APHRODITE_TERMINAL_THRESHOLD ·
					APHRODITE_FLOW_BUDGET_CHARS · APHRODITE_CHAIN_SPLIT).
</p> ` })} ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: docs/plugin/hooks.md; plugins/aphrodite/plugin.yaml (provides_hooks)", "SRC: docs/architecture/04-hook-ffi.md"] })} </section>  ${renderComponent($$result, "Related", $$Related, { "Links": [
		{
			Href: "/plugin/",
			Label: "PLUGIN"
		},
		{
			Href: "/tools/",
			Label: "TOOLS"
		},
		{
			Href: "/hermes/",
			Label: "HERMES"
		}
	] })} ` })} ${renderComponent($$result, "ZineDiagramNav", $$ZineDiagramNav, {})} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/hooks.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/hooks.astro";
var $$url = "/hooks";
// \0virtual:astro:page:Source/pages/hooks@_@astro
var page = () => hooks_exports;
export { page };
