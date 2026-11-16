import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { E as unescapeHTML, _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, t as $$Base } from "./Base_Bs2-mKm9.mjs";
import { a as $$Related } from "./DocsSidebar_DymFAMH3.mjs";
import { n as $$PageShell } from "./ZineTape_BXk9fOqY.mjs";
import { t as $$PageHeader } from "./PageHeader_CFtxK5wU.mjs";
import { t as $$ZineBox } from "./ZineBox_CVeWVZDC.mjs";
import { t as $$ZineSource } from "./ZineSource_DoCsU3-s.mjs";
import { t as $$ZineDiagramNav } from "./ZineDiagramNav_1LSOKumC.mjs";
import { t as hook_chain_default } from "./hook-chain_DP92Y-Iu.mjs";
import { c as Hooks, s as HookNames, t as Assert } from "./Roster_DWXQuOMb.mjs";
import { i as Sequence, t as HookCard } from "./Hooks_YTnJFHQ8.mjs";
// Source/pages/hooks.astro
var hooks_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Hooks,
	file: () => $$file,
	url: () => $$url
});
var $$Hooks = createComponent(($$result, $$props, $$slots) => {
	Assert("Source/Library/Prose/Hooks.ts", HookCard, HookNames);
	const TapeOf = {
		raw: "raw",
		canary: "canary",
		teal: "teal",
		bone: "bone"
	};
	const AccentOf = {
		subtle: "none",
		crimson: "crimson",
		canary: "canary"
	};
	const TagOf = {
		raw: "crimson",
		canary: "canary",
		bone: "bone",
		teal: "teal"
	};
	const Seam = {
		on_session_start: {
			Role: "RESET",
			Headline: "The seam that starts a clean session"
		},
		pre_tool_call: {
			Role: "PRE-FLIGHT",
			Headline: "The seam before a tool runs"
		},
		transform_tool_result: {
			Role: "COMPRESS",
			Headline: "The seam that compresses a tool result"
		},
		transform_terminal_output: {
			Role: "COMPRESS",
			Headline: "The seam that compresses terminal output"
		},
		pre_llm_call: {
			Role: "ASSEMBLE",
			Headline: "The seam that assembles the context"
		},
		post_llm_call: {
			Role: "ARCHIVE",
			Headline: "The seam that closes the turn"
		}
	};
	const Total = String(Hooks.length).padStart(2, "0");
	const ChapterOfGate = String(Hooks.length + 3).padStart(2, "0");
	const ChapterOfThresholds = String(Hooks.length + 4).padStart(2, "0");
	const Hooks$1 = Hooks.map((Hook, Index) => {
		const Prose = HookCard[Hook.Name];
		const Annotation = Seam[Hook.Name] ?? {
			Role: Hook.Name,
			Headline: Hook.Name
		};
		const Tape = Prose?.Tape ?? "raw";
		return {
			...Hook,
			Chapter: String(Index + 3).padStart(2, "0"),
			Headline: Annotation.Headline,
			Role: Annotation.Role,
			Tape,
			TapeColor: TapeOf[Tape] ?? "raw",
			Tag: TagOf[Tape] ?? "crimson",
			Accent: AccentOf[Prose?.Tone ?? "subtle"] ?? "none",
			Rotate: Prose?.Rotate ?? "",
			Body: Prose?.Body ?? ["The manifest registers this seam; its card is not written yet."]
		};
	});
	let Step = 0;
	const Loop = Sequence.map((Entry) => {
		const IsConnector = Entry.Tone === "mute";
		if (!IsConnector) Step += 1;
		return {
			...Entry,
			Ordinal: IsConnector ? "" : String(Step).padStart(2, "0")
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
	})}  ${maybeRenderHead($$result)}<section class="blueprint-section" data-reveal> <p class="section-index">01 // SEQUENCE // PER TURN</p> <h2 id="sequence" class="mt-3 type-section text-bone-white">
The loop a turn walks
</h2> <div class="well mt-8 p-4 sm:p-5"> <ol class="flex flex-col"> ${Loop.map(({ Text: Line, Tone, Ordinal }) => renderTemplate`<li${addAttribute(["grid grid-cols-[2.5rem_1fr] items-baseline gap-x-3", Tone === "mute" ? "py-0.5" : "py-1.5"], "class:list")}> <span class="type-meta font-bold tabular-nums text-zinc-dust" aria-hidden="true"> ${Ordinal} </span> <span${addAttribute(["font-mono text-base leading-relaxed", Tone === "canary" ? "text-stamped-canary" : Tone === "mute" ? "text-zinc-dust" : Tone === "result" ? "text-bone-white" : "text-bone-newsprint"], "class:list")}> ${Line} </span> </li>`)} </ol> </div> <div class="prose-flow mt-8"> <p class="type-body text-bone-newsprint">
The loop closes on itself, so the state a turn leaves behind is the state the
					next turn reads.
</p> <p class="type-body text-bone-newsprint">
That is why the reset seam exists: a new session starts from a clean baseline
					instead of inheriting the previous session's counters and markers.
</p> </div> <figure class="well mt-12 p-4 sm:p-5" data-diagram="hook-chain"> <div class="overflow-x-auto">${unescapeHTML(hook_chain_default)}</div> <figcaption class="mt-4 type-meta font-black uppercase tracking-widest text-zinc-dust">
M3 // HOOK CHAIN
</figcaption> </figure> </section>  <section id="six" class="blueprint-section" data-reveal> <p class="section-index">02 // THE SIX // ONE SECTION EACH</p> <h2 class="mt-3 type-section text-bone-white">What each seam does</h2> <ol class="mt-8 flex flex-col border-t border-oxblood-dark"> ${Hooks$1.map(({ N, Name, Role, Tag }) => renderTemplate`<li class="border-b border-oxblood-dark"> <a${addAttribute(`#seam-${N}`, "href")} class="group flex flex-wrap items-baseline gap-x-4 gap-y-2 py-4 transition-colors hover:bg-asphalt-panel focus-visible:bg-asphalt-panel"> <span class="type-meta font-bold tabular-nums text-zinc-dust">${N}</span> <span class="font-mono text-base font-bold text-bone-white group-hover:text-stamped-canary"> ${Name} </span> <span${addAttribute(["telemetry-tag", `telemetry-tag--${Tag}`], "class:list")}> ${Role} </span> <span class="ml-auto font-mono text-base text-zinc-dust" aria-hidden="true">
→
</span> </a> </li>`)} </ol> </section>  ${Hooks$1.map(({ N, Chapter, Name, Headline, Role, TapeColor, Accent, Rotate, Body }) => renderTemplate`<section${addAttribute(`seam-${N}`, "id")} class="blueprint-section" data-reveal> <p class="section-index"> ${Chapter} // ${Name.toUpperCase()} </p> <h2 class="mt-3 type-section text-bone-white">${Headline}</h2>  <dl class="well mt-8 grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-3 p-4 sm:p-5"> <dt class="type-meta font-bold uppercase text-zinc-dust">ORDER</dt> <dd class="font-mono text-base tabular-nums text-bone-newsprint"> ${N} / ${Total} </dd> <dt class="type-meta font-bold uppercase text-zinc-dust">DISPATCH</dt> <dd class="font-mono text-base leading-relaxed text-bone-newsprint">
args → <span class="text-weathered-teal">libaphrodite_hermes.dylib</span> →
						JSON reply
</dd> <dt class="type-meta font-bold uppercase text-zinc-dust">REGISTERED</dt> <dd class="font-mono text-base leading-relaxed text-bone-newsprint">
provides_hooks · plugin.yaml
</dd> </dl> ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Class": "mt-8",
		"Size": "md",
		"Rotate": Rotate,
		"Accent": Accent,
		"Tape": Role,
		"TapeColor": TapeColor
	}, { "default": ($$result) => renderTemplate` <div class="prose-flow"> ${Body.map((Paragraph) => renderTemplate`<p class="type-body text-bone-newsprint">${unescapeHTML(Paragraph)}</p>`)} </div> ` })} </section>`)} <section id="gate" class="blueprint-section" data-reveal> <p class="section-index">${ChapterOfGate} // BYPASS // THE ESSENTIAL-TOOL GATE</p> <h2 class="mt-3 type-section text-bone-white">What never gets compressed</h2> <div class="prose-flow mt-8"> <p class="type-body text-bone-newsprint">
A result is left untouched when it is empty, below threshold, or from the
					essential set - tools the agent needs raw:
</p> </div> <div class="well mt-6 p-4 sm:p-5 font-mono text-base text-bone-newsprint">
skill_view · skills_list · skill_manage · memory · session_search · read_file ·
				read_terminal
</div> <div class="prose-flow mt-8"> <p class="type-body text-zinc-dust">
Aphrodite also skips its own tools and headroom helpers - compressing
<span class="font-mono text-base text-weathered-teal">aphrodite_retrieve</span>
would just replace resolved content with another marker.
</p> <p class="type-body text-zinc-dust">
The gate is the reason retrieval stays cheap: a marker the model resolves comes
					back whole, because nothing downstream of the gate rewrites it a second time.
</p> </div> </section>  <section id="thresholds" class="blueprint-section" data-reveal> <p class="section-index">${ChapterOfThresholds} // THRESHOLDS // GATES AND BYPASSES</p> <h2 class="mt-3 type-section text-bone-white">The numbers that decide</h2> <div class="mt-8 overflow-x-auto"> <table class="w-full border-collapse font-mono text-base"> <thead> <tr class="border-b-2 border-oxblood-dark text-left"> <th class="py-3 pr-4 text-base font-black uppercase tracking-widest text-stamped-canary">
HOOK
</th> <th class="py-3 pr-4 text-base font-black uppercase tracking-widest text-stamped-canary">
SETTING
</th> <th class="py-3 pr-4 text-base font-black uppercase tracking-widest text-stamped-canary">
DEFAULT
</th> <th class="py-3 text-base font-black uppercase tracking-widest text-stamped-canary">
BYPASS
</th> </tr> </thead> <tbody class="text-bone-newsprint"> <tr class="border-b border-oxblood-dark"> <td class="py-3 pr-4">transform_tool_result</td> <td class="py-3 pr-4 text-weathered-teal">tool_threshold_token</td> <td class="py-3 pr-4 tabular-nums text-bone-white">4,096</td> <td class="py-3">
empty · essential tools · self tools ·
<span class="text-stamped-canary">0 = always compress</span> </td> </tr> <tr class="border-b border-oxblood-dark"> <td class="py-3 pr-4">transform_terminal_output</td> <td class="py-3 pr-4 text-weathered-teal">terminal_threshold</td> <td class="py-3 pr-4 tabular-nums text-bone-white">1,024</td> <td class="py-3">
empty · below threshold ·
<span class="text-stamped-canary">0 = always compress</span> </td> </tr> <tr class="border-b border-oxblood-dark"> <td class="py-3 pr-4">pre_llm_call</td> <td class="py-3 pr-4 text-weathered-teal">flow budget_chars</td> <td class="py-3 pr-4 tabular-nums text-bone-white">4,000</td> <td class="py-3">
recall catalog drops first; directives and nudges never drop
</td> </tr> <tr> <td class="py-3 pr-4">pre_tool_call (chain split)</td> <td class="py-3 pr-4 text-weathered-teal">chain_split_min_segments</td> <td class="py-3 pr-4 tabular-nums text-bone-white">-</td> <td class="py-3">feature off by default (chain_split = false)</td> </tr> </tbody> </table> </div> <p class="well mt-12 p-4 sm:p-5 font-mono text-base leading-relaxed text-zinc-dust">
PRECEDENCE: ENVIRONMENT &gt; TOML &gt; DEFAULT (APHRODITE_TOOL_THRESHOLD_TOKEN ·
				APHRODITE_TERMINAL_THRESHOLD · APHRODITE_FLOW_BUDGET_CHARS · APHRODITE_CHAIN_SPLIT).
</p> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: docs/plugin/hooks.md; plugins/aphrodite/plugin.yaml (provides_hooks)", "SRC: docs/architecture/04-hook-ffi.md"] })} </section>  ${renderComponent($$result, "Related", $$Related, { "Links": [
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
