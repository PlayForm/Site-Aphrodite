import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { E as unescapeHTML, _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, a as Versions, g as createAstro, i as Stamps, l as ExternalLinks, m as Routes, n as $$ZineKicker, t as $$Base } from "./Base_Bs2-mKm9.mjs";
import { a as $$Related } from "./DocsSidebar_DymFAMH3.mjs";
import { n as $$PageShell } from "./ZineTape_BXk9fOqY.mjs";
import { t as $$PageHeader } from "./PageHeader_CFtxK5wU.mjs";
import { t as $$CodeFence } from "./CodeFence_C7YwxHhg.mjs";
import { t as $$ZineStamp } from "./ZineStamp_DHvPYmuj.mjs";
import { t as $$ZineStatBar } from "./ZineStatBar_GGT-P2uW.mjs";
import { t as $$ZineLesson } from "./ZineLesson_nkzxNSlk.mjs";
import { t as $$ZinePullQuote } from "./ZinePullQuote_MNd2VGz9.mjs";
import { t as $$ZineReveal } from "./ZineReveal_DKzkwlF7.mjs";
import { t as $$ZineFlow } from "./ZineFlow_CrKbWfsz.mjs";
import { t as $$ZineSource } from "./ZineSource_DoCsU3-s.mjs";
import { t as $$ZineDiagramNav } from "./ZineDiagramNav_1LSOKumC.mjs";
import { t as context_engine_default } from "./context-engine_mkkhVGcu.mjs";
import { t as hook_chain_default } from "./hook-chain_DP92Y-Iu.mjs";
import { c as Hooks, l as ToolNames, s as HookNames, t as Assert } from "./Roster_DWXQuOMb.mjs";
import { n as PluginHookCard, r as PluginSequence } from "./Hooks_YTnJFHQ8.mjs";
// Source/Component/ZineDiagram.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineDiagram = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineDiagram;
	const { Svg, Tree, Tags = [], Name, Caption, Links } = Astro.props;
	const LinkAttribute = Links ? JSON.stringify(Links) : void 0;
	const Ink = {
		node: "text-bone-white",
		leaf: "text-bone-newsprint",
		mute: "text-zinc-dust"
	};
	const Indent = [
		"pl-0",
		"pl-4",
		"pl-8",
		"pl-12",
		"pl-16"
	];
	return renderTemplate`${maybeRenderHead($$result)}<figure class="relative w-full overflow-hidden border-4 border-blood-crimson tier-shell shadow-[6px_6px_0px_#7a0a1e]"${addAttribute(Name, "data-diagram")}${addAttribute(LinkAttribute, "data-diagram-links")}> <!-- THE RIBBON: the figure's own name, at the section-index voice. It names
	     the figure the way the fence ribbon names a file, so a reader meeting
	     three figures in a row can tell which one they are looking at before
	     reading the caption under it. The chips after the dashed rule are the
	     payload's own metadata - a path, an owner count - never a control. --><div class="flex flex-wrap items-center gap-3 border-b border-[var(--tier-shell-edge)] bg-carbon-void px-4 py-2"> <span class="section-index">${Name}</span> <span class="h-0 grow border-t border-dashed border-oxblood-dark"></span> ${Tags.map((Tag) => renderTemplate`<span class="telemetry-tag">${Tag}</span>`)} </div> <!-- THE CHANNEL: the payload sits in the recessed tier, inset from the plate
	     on all four sides, so the ribbons above and below read as the pod's
	     edges and the payload reads as the thing the pod holds. --> ${Tree ? renderTemplate`<div class="well m-4 overflow-x-auto p-3"> <div class="font-mono text-code leading-relaxed"> ${Tree.map(({ Text, Note, Tone = "leaf", Depth = 0 }) => renderTemplate`<div${addAttribute(["flex items-baseline gap-3", Indent[Depth] ?? "pl-0"], "class:list")}> <span${addAttribute(["whitespace-pre", Ink[Tone]], "class:list")}> ${Text} </span> ${Note ? renderTemplate`<span class="min-w-0 text-zinc-dust">← ${Note}</span>` : null} </div>`)} </div> </div>` : renderTemplate`<div class="well m-4 overflow-x-auto p-3 [&amp;_svg]:h-auto">${unescapeHTML(Svg)}</div>`} <!-- THE FOOTER RIBBON: the same band as the header, in the same fill, so the
	     frame closes the way it opened. --> <figcaption class="border-t border-[var(--tier-shell-edge)] bg-carbon-void px-4 py-2 font-mono text-base font-black uppercase tracking-widest text-zinc-dust"> ${Caption} </figcaption> </figure> ${renderComponent($$result, "ZineDiagramNav", $$ZineDiagramNav, {})}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineDiagram.astro", void 0);
// Source/pages/plugin.astro
var plugin_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Plugin,
	file: () => $$file,
	url: () => $$url
});
var $$Plugin = createComponent(($$result, $$props, $$slots) => {
	const Section = "mt-3 scroll-mt-24 type-section text-bone-white";
	const Head = "type-sub text-bone-white";
	const Lede = "mt-6 max-w-[46rem] font-body text-body leading-relaxed text-bone-newsprint";
	const Body = "font-body text-body leading-relaxed text-bone-newsprint";
	const Note = "font-body text-body leading-relaxed text-zinc-dust";
	const CardHead = "flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-[color:var(--tier-shell-edge)] px-5 py-4";
	const CardBody = "px-5 py-5";
	const Accent = {
		raw: "bg-raw-blood",
		canary: "bg-stamped-canary",
		bone: "bg-bone-newsprint",
		teal: "bg-weathered-teal"
	};
	const TagTone = {
		raw: "telemetry-tag--crimson",
		canary: "telemetry-tag--canary",
		bone: "telemetry-tag--bone",
		teal: "telemetry-tag--teal"
	};
	const InstallCommands = "git clone https://github.com/PlayForm/Aphrodite-Hermes.git\ncd Aphrodite-Hermes\nln -s \"$(pwd)\" ~/.hermes/plugins/aphrodite\nbash download.sh\ncd ..\nhermes plugins enable aphrodite\nhermes";
	const InstallFence = `$ git clone https://github.com/PlayForm/Aphrodite-Hermes.git
$ cd Aphrodite-Hermes
$ ln -s "$(pwd)" ~/.hermes/plugins/aphrodite
$ bash download.sh // or: pwsh ./download.ps1
$ cd ..
$ hermes plugins enable aphrodite
$ hermes`;
	const InstallSteps = InstallCommands.split("\n").length;
	Assert("Source/Library/Prose/Hooks.ts", PluginHookCard, HookNames);
	const Hooks$1 = Hooks.map((Hook) => {
		const Prose = PluginHookCard[Hook.Name];
		return {
			...Hook,
			Tape: Prose?.Tape ?? "raw",
			Tone: Prose?.Tone ?? "subtle",
			Rotate: Prose?.Rotate ?? "",
			Body: Prose?.Body ?? ["The manifest registers this seam; its card is not written yet."]
		};
	});
	const Lanes = [
		{
			Hook: "on_session_start",
			When: "session starts",
			Does: "resets all per-session state to a clean baseline - injects nothing"
		},
		{
			Hook: "pre_tool_call",
			When: "before a tool executes",
			Does: "auto-backgrounds long-running calls; splits chained commands"
		},
		{
			Hook: "transform_tool_result",
			When: "after every tool call",
			Does: "compresses large tool results into CCR markers"
		},
		{
			Hook: "transform_terminal_output",
			When: "after every terminal execution",
			Does: "compresses large terminal output into CCR markers"
		},
		{
			Hook: "pre_llm_call",
			When: "before each LLM request",
			Does: "injects directives, nudges, and the recall catalog"
		},
		{
			Hook: "post_llm_call",
			When: "after each LLM response",
			Does: "archives the turn, advances the counter, expires stale state"
		}
	];
	const Filesystem = [
		{
			Text: "~/.hermes/",
			Tone: "node"
		},
		{
			Text: "├── plugins/aphrodite",
			Note: "manual symlink to the plugin repo",
			Depth: 1
		},
		{
			Text: "└── aphrodite/",
			Note: "runtime home",
			Tone: "node",
			Depth: 1
		},
		{
			Text: "├── binaries/aphrodite",
			Note: "proxy binary, fetched + verified",
			Depth: 2
		},
		{
			Text: "├── binaries/libaphrodite_hermes.dylib",
			Depth: 2
		},
		{
			Text: "├── aphrodite.toml",
			Note: "config",
			Depth: 2
		},
		{
			Text: "├── directives/",
			Note: "7 built-ins materialized",
			Depth: 2
		},
		{
			Text: "├── ccr.db",
			Note: "SQLite CCR store",
			Depth: 2
		},
		{
			Text: "└── proxy-stderr.log",
			Note: "proxy logs (empty = healthy)",
			Depth: 2
		}
	];
	const Layers = [
		{
			N: "01",
			Name: "Hermes Agent",
			Role: "Owns the turn loop, the tool registry and the model call. It fires a hook because plugin.yaml promised one, and it reads the reply only as an object it can hand back.",
			Fails: "A seam that was never registered is invisible here: the turn runs without it, so a plugin that failed to load looks exactly like a plugin with nothing to say."
		},
		{
			N: "02",
			Name: "__init__.py",
			Role: "Declares the ctypes signatures, asks the dylib for its hook names and tool schemas, and registers one callback per name. It holds no state between calls.",
			Fails: "A dylib built against a different ABI raises at import, and the whole plugin is disabled - it does not degrade into a partial surface."
		},
		{
			N: "03",
			Name: "libaphrodite_hermes.dylib",
			Role: "The Hermes bridge: one JSON contract in, one JSON contract out, six hooks and thirteen tools with their schemas attached.",
			Fails: "A reply the shim cannot parse is a hard error, never a guess - the bridge does not repair a malformed payload."
		},
		{
			N: "04",
			Name: "libaphrodite (core)",
			Role: "All the compression logic: classification, hashing, marker composition, preview extraction, directives, retrieval. Every number the engine reports is decided here.",
			Fails: "A store that will not open degrades to the in-memory backend - the compression still happens, the persistence does not."
		},
		{
			N: "05",
			Name: "CCR store",
			Role: "SQLite at :9798, in-memory at :9797, or inline. It is the address space the markers point into, and the only layer that outlives the process.",
			Fails: "A lost database loses markers, not the transcript: the previews still read, and a marker that no longer resolves returns an explicit miss."
		}
	];
	const Dispatch = [
		{
			Title: "A HOOK FIRES",
			Agent: ["Hermes is about to run a tool", "· the seam is pre_tool_call"],
			System: ["the shim's callback receives the tool name and arguments as a Python dict; it does no work of its own"]
		},
		{
			Title: "THE SHIM SERIALIZES",
			Agent: ["the call is still untouched", "· nothing has been rewritten yet"],
			System: ["the dict becomes JSON and crosses the FFI boundary; the shim keeps no state between calls"]
		},
		{
			Title: "THE BRIDGE DISPATCHES",
			Agent: ["· the hook name is matched to its handler"],
			System: ["libaphrodite_hermes matches the hook name to its Rust handler and hands the payload to the core"]
		},
		{
			Title: "THE CORE DECIDES",
			Agent: ["the call may come back rewritten", "» cd x && cargo build && cargo test"],
			System: ["the core applies the hook's rule: background the call, split the chain, compress the result, assemble the context"]
		},
		{
			Title: "THE REPLY RETURNS",
			Agent: ["the model sees the result, not the machinery"],
			System: ["the JSON reply crosses back and the shim returns it to Hermes unchanged; the store keeps the bytes the marker addresses"]
		}
	];
	const Polarity = [
		{
			Value: "-1",
			Meaning: "ALWAYS COMPRESS",
			Tone: "canary"
		},
		{
			Value: "0",
			Meaning: "DISABLED",
			Tone: "bone"
		},
		{
			Value: ">0",
			Meaning: "FILL PERCENT",
			Tone: "teal"
		}
	];
	const Essential = [
		"skill_view",
		"skills_list",
		"skill_manage",
		"memory",
		"session_search",
		"read_file",
		"read_terminal"
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "PLUGIN // APHRODITE",
		"Description": `The Aphrodite Hermes plugin, v${Versions.Plugin}: a thin Python registration shim over a Rust dylib - ${HookNames.length} hooks, ${ToolNames.length} tools, an opt-in context engine, and an explicit SHA-256-verified download flow.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageShell", $$PageShell, { "Rhythm": "wide" }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHeader", $$PageHeader, {
		"Tape": "PLUGIN // THE THIN LOADER",
		"Title": "The plugin",
		"Lead": [
			`A tool call's output becomes part of the model's context, and the plugin is the only layer that sees that result before it becomes message history.`,
			`Aphrodite ships as a Hermes Agent plugin: a thin Python registration shim over a Rust dylib.`,
			`Six hooks, thirteen tools, and an opt-in context engine - all declared in <code class="font-mono text-base text-weathered-teal">plugin.yaml</code>, all logic living in <code class="font-mono text-base text-weathered-teal">libaphrodite_hermes.dylib</code>.`,
			`What follows is the v${Versions.Plugin} plugin spec.`
		]
	})} ${maybeRenderHead($$result)}<div class="flex max-w-4xl flex-wrap items-center gap-6"> ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": `${Stamps.Plugin()} STANDALONE`,
		"Color": "raw",
		"Rotate": "sm:-rotate-2"
	})} ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": `${HookNames.length} HOOKS`,
		"Color": "teal",
		"Rotate": "sm:rotate-1"
	})} ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": `${ToolNames.length} TOOLS`,
		"Color": "teal",
		"Rotate": "sm:-rotate-1"
	})} ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": "ZERO LOGIC IN PYTHON",
		"Color": "canary",
		"Rotate": "sm:rotate-2"
	})} </div> ${renderComponent($$result, "ZinePullQuote", $$ZinePullQuote, {
		"Text": "A plugin is a promise about a binary. The manifest says which seams exist and which tools answer; validation exists to keep that promise and the running surface identical.",
		"Attribution": "plugin.yaml // the contract",
		"Tone": "subtle",
		"Rotate": "sm:rotate-[0.6deg]"
	})}  <section class="blueprint-section relative w-full" data-reveal> <p class="section-index">01 // PLUGIN.YAML // THE DECLARED SURFACE</p> <h2 id="manifest"${addAttribute(Section, "class")}>
What the manifest declares
</h2> <p${addAttribute(Lede, "class")}>The manifest is read before a line of Python loads. Hermes takes:</p> <ul class="mt-6 max-w-[46rem] space-y-2 font-body text-body leading-relaxed text-bone-newsprint"> <li class="border-l-4 border-raw-blood pl-4">the name it will list</li> <li class="border-l-4 border-raw-blood pl-4">the spec version it will pin</li> <li class="border-l-4 border-raw-blood pl-4">
the six hook names it must find a registration for
</li> <li class="border-l-4 border-raw-blood pl-4">
the thirteen tool schemas it will advertise to the model
</li> <li class="border-l-4 border-raw-blood pl-4">
and the flag that says an engine is present.
</li> </ul> <p class="mt-6 max-w-[46rem] font-body text-body leading-relaxed text-bone-newsprint">
Nothing in the file describes behavior. Every field is an identity, a requirement,
				or a promise about what the dylib will answer when it is asked - which is why a
				manifest that overstates the surface fails validation instead of failing at runtime.
</p> <!-- THE FILE ITSELF: one shell card, two wells. The left well is the
			     header the manifest declares, the right one the two lists it
			     promises - the same file, read in the order Hermes reads it. --> <div class="grunge shell-card mt-10" data-grunge data-grunge-mode="edge"> <div${addAttribute(CardHead, "class")}> <span class="telemetry-tag telemetry-tag--bone">plugin.yaml</span> <span class="telemetry-tag">${HookNames.length} hooks</span> <span class="telemetry-tag">${ToolNames.length} tools</span> <span class="telemetry-tag telemetry-tag--teal">read before python loads</span> </div> <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2"> <div class="well space-y-4 p-4 font-mono text-code"> <div> <span class="text-zinc-dust">name:</span>${" "} <span class="text-bone-white">aphrodite</span> </div> <div> <span class="text-zinc-dust">version:</span>${" "} <span class="text-bone-white">${Versions.Plugin}</span> </div> <div> <span class="text-zinc-dust">kind:</span>${" "} <span class="text-bone-white">standalone</span> </div> <div> <span class="text-zinc-dust">requires_hermes:</span> <span class="text-stamped-canary">&gt;=0.20.2</span> </div> <div> <span class="text-zinc-dust">requires_hooks:</span> <span class="text-bone-white">true</span> </div> <div> <span class="text-zinc-dust">provides_context_engine:</span> <span class="text-bone-white">true</span> </div> </div> <div class="well space-y-4 p-4 font-mono text-code"> <div class="text-weathered-teal"># provides_hooks (${HookNames.length})</div> <div class="text-bone-newsprint">on_session_start · pre_tool_call</div> <div class="text-bone-newsprint">
transform_tool_result · transform_terminal_output
</div> <div class="text-bone-newsprint">pre_llm_call · post_llm_call</div> <div class="pt-6 text-weathered-teal"># provides_tools (${ToolNames.length})</div> <div class="text-bone-newsprint">
retrieve · compress · stats · rebuild · files · diff
</div> <div class="text-bone-newsprint">search · directive · test · catalog</div> <div class="text-bone-newsprint">
reclassify · prefetch · prefetch_status
</div> </div> </div> </div> <!-- TWO BARS, TWO DIFFERENT QUESTIONS. The first compares two lists, so
			     it is full; the second is the shim's share of the logic, so it is
			     empty. Each keeps the sentence that says why. --> <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2"> <div class="grunge shell-card p-5" data-grunge data-grunge-mode="edge"> ${renderComponent($$result, "ZineStatBar", $$ZineStatBar, {
		"Label": "DECLARED SURFACE = RUNNING SURFACE",
		"Ratio": "13 / 13",
		"Percent": 100
	})} <p class="mt-4 font-body text-body leading-relaxed text-zinc-dust">
The bar is full because the two sets are compared, not assumed: the
						manifest's
<code class="font-mono text-base text-weathered-teal">
provides_tools
</code>${" "}
list and the schemas the release dylib reports are held to the same thirteen
						names.
</p> </div> <div class="grunge shell-card p-5" data-grunge data-grunge-mode="edge"> ${renderComponent($$result, "ZineStatBar", $$ZineStatBar, {
		"Label": "LOGIC IN THE PYTHON SHIM",
		"Ratio": "0%",
		"Percent": 0,
		"Color": "raw"
	})} <p class="mt-4 font-body text-body leading-relaxed text-zinc-dust">
The bar is empty on purpose. Nothing in the shim decides anything - a Python
						traceback means a load failure, never a compression bug.
</p> </div> </div> <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"> <p class="border-l-4 border-oxblood-dark pl-4 font-mono text-base leading-relaxed text-zinc-dust">
ENGINE THRESHOLD SEMANTICS: -1 = ALWAYS COMPRESS · 0 = DISABLED · &gt;0 = FILL
					PERCENT.
</p> <p class="border-l-4 border-oxblood-dark pl-4 font-mono text-base leading-relaxed text-zinc-dust">
SKILLS ARE NOT SHIPPED WITH THE PLUGIN - THEY LIVE DEV-SIDE.
</p> </div> <div class="mt-10"> ${renderComponent($$result, "ZineLesson", $$ZineLesson, {
		"Label": "ZERO LOGIC IN PYTHON",
		"Text": "The Python is a registration shim: ctypes signatures, one callback per name, and the JSON reply handed back untouched. Every threshold, every marker and every classification lives in the dylib."
	})} </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: plugins/aphrodite/plugin.yaml (provides_hooks, provides_tools)", "SRC: docs/plugin/context-engine.md:38-48"] })} </section>  <section class="blueprint-section relative w-full" data-reveal> <p class="section-index">02 // ENGINE // OPT-IN, AND OFF BY DEFAULT</p> <h2 id="engine"${addAttribute(Section, "class")}>
The engine is a flag, not a behavior
</h2> <div class="prose-flow mt-6 max-w-[46rem]"> <p${addAttribute(Body, "class")}> <code class="font-mono text-base text-weathered-teal">
provides_context_engine: true
</code>
does not turn anything on.
</p> <p${addAttribute(Body, "class")}>
It tells Hermes that the dylib can answer the engine's questions - which file is
					being read, what the turn's markers were, how much context is left - so the host
					knows to ask.
</p> <p${addAttribute(Body, "class")}>
The engine's own thresholds are the ones that decide whether a result is
					compressed at all.
</p> </div> <!-- THE POLARITY, BEFORE THE PARAGRAPH THAT EXPLAINS IT. Three cells, one
			     value each, in the order the note above states them. --> <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"> ${Polarity.map(({ Value, Meaning, Tone }) => renderTemplate`<div class="well p-4"> <div${addAttribute(["h-0.5 w-full", Accent[Tone]], "class:list")}></div> <div class="mt-3 font-mono text-sub font-bold text-bone-white">${Value}</div> <div${addAttribute(["telemetry-tag mt-2", TagTone[Tone]], "class:list")}>${Meaning}</div> </div>`)} </div> <div class="prose-flow mt-8 max-w-[46rem]"> <p${addAttribute(Body, "class")}>
The three threshold values are the whole tuning surface, and their polarity is
					the one thing readers get wrong: <span class="text-stamped-canary">-1</span>${" "}
compresses everything, <span class="text-stamped-canary">0</span> disables the
					engine, and a positive number is the fill percentage at which compression
					starts. A <span class="text-stamped-canary">0</span> that reads as "off by
					default" is the correct reading.
</p> </div> </section>  <section class="blueprint-section relative w-full" data-reveal> <p class="section-index">03 // ARCHITECTURE // CALL CHAIN</p> <h2 id="architecture"${addAttribute(Section, "class")}>
A thin shim, a Rust brain
</h2> <p${addAttribute(Lede, "class")}>
Five layers, one contract between each pair. Read top to bottom, the list is the
				path a single tool result takes; read bottom to top, it is the path a retrieval
				takes when the model asks for the bytes back. The same engine answers as a proxy
				too, with no Hermes in the path.
</p> <div class="mt-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2"> <!-- LANE A: the hook path - Hermes fires a seam, the dylib decides.
				     Same weight as lane B: same frame, same ribbon, same channel. --><div class="grunge shell-card flex flex-col" data-grunge data-grunge-mode="edge"> <div${addAttribute(["h-0.5 w-full", Accent.raw], "class:list")}></div> <div${addAttribute(CardHead, "class")}> <span class="telemetry-tag telemetry-tag--crimson">A</span> <span class="font-mono text-code font-bold text-bone-white">
HERMES PLUGIN HOOK
</span> <span class="telemetry-tag">${Layers.length} layers</span> <span class="telemetry-tag telemetry-tag--teal">
one JSON contract per pair
</span> </div> <div class="well m-4 p-5 font-mono text-code leading-relaxed"> <div class="text-bone-white">Hermes Agent (hooks + tool dispatch)</div> <div class="pl-4 text-zinc-dust">│</div> <div class="pl-4 text-bone-newsprint">
__init__.py - ctypes FFI, registers hooks/tools/engine · no logic
</div> <div class="pl-4 text-zinc-dust">│</div> <div class="pl-4 text-stamped-canary">
libaphrodite_hermes.dylib - Hermes bridge (JSON contract) · 6 hooks · 13
							tools · schemas
</div> <div class="pl-4 text-zinc-dust">│</div> <div class="pl-4 text-bone-newsprint">
libaphrodite (core engine) - ALL compression logic: hooks · resolve ·
							retrieve · marker · preview · directives
</div> <div class="pl-4 text-zinc-dust">│</div> <div class="pl-4 text-weathered-teal">
CCR store - SQLite :9798 / in-memory :9797 / inline
</div> </div> <div${addAttribute(CardBody, "class")}> <p${addAttribute(Note, "class")}>
Registration is driven by the dylib: the shim asks the dylib for its hook
							names and tool schemas and registers one callback per name.
</p> <p class="mt-3 font-body text-body leading-relaxed text-zinc-dust">
It is the reason there is no hot-reload: the dylib is resolved once per
							process, so to pick up a new build you restart the Hermes session.
</p> </div> </div> <!-- LANE B: the proxy path - the same engine, one hop from the client.
				     The two listeners are the lane's whole surface, so they are the
				     body of the channel rather than a paragraph about it. --> <div class="grunge shell-card flex flex-col" data-grunge data-grunge-mode="edge"> <div${addAttribute(["h-0.5 w-full", Accent.teal], "class:list")}></div> <div${addAttribute(CardHead, "class")}> <span class="telemetry-tag telemetry-tag--teal">B</span> <span class="font-mono text-code font-bold text-bone-white">
OPENAI-COMPATIBLE PROXY
</span> <span class="telemetry-tag">token :9798 · cache :9797</span> </div> <div class="well m-4 p-5 font-mono text-code leading-relaxed"> <div class="text-bone-white">Any OpenAI-compatible client (base_url)</div> <div class="pl-4 text-zinc-dust">│</div> <div class="pl-4 text-bone-newsprint">
token proxy :9798 - threshold 256 bytes by default
</div> <div class="pl-4 text-bone-newsprint">
cache proxy :9797 - threshold 2048 bytes by default
</div> <div class="pl-4 text-zinc-dust">│</div> <div class="pl-4 text-stamped-canary">
libaphrodite (core engine) - the same compression, no Hermes in the path
</div> <div class="pl-4 text-zinc-dust">│</div> <div class="pl-4 text-weathered-teal">
CCR store - SQLite / in-memory / inline
</div> </div> <div${addAttribute(CardBody, "class")}> <p${addAttribute(Note, "class")}>
The proxy is the same engine one hop from the client: it needs no Hermes
							session, and responses compress over plain HTTP.
</p> <p class="mt-3 font-body text-body leading-relaxed text-zinc-dust">
It needs its own credentials - APHRODITE_API_KEY, aphrodite setup, or
							api_key in aphrodite.toml - and Hermes' provider config is NOT reused.
							Without a key it refuses to start: there is no keyless mode.
</p> </div> </div> </div> <div class="prose-flow mt-8 max-w-[46rem]"> <p${addAttribute(Note, "class")}>
The same resolve-once rule is why the plugin never half-loads. Either the dylib
					opens and every seam registers, or the import raises and nothing registers -
					there is no state in which three hooks fire and three do not.
</p> </div> <h3 id="layers"${addAttribute(`mt-20 ${Head}`, "class")}>
What each layer does, and what it fails on
</h3> <div class="mt-8 grid grid-cols-1 items-start gap-6 lg:grid-cols-2"> ${Layers.map(({ N, Name, Role, Fails }) => renderTemplate`<div class="grunge shell-card" data-grunge data-grunge-mode="edge"> <div${addAttribute(["h-0.5 w-full", Accent.raw], "class:list")}></div> <div${addAttribute(CardHead, "class")}> <span class="telemetry-tag telemetry-tag--crimson">${N}</span> <h4 class="font-mono text-code font-bold text-bone-white">${Name}</h4> </div> <div${addAttribute(CardBody, "class")}> <p${addAttribute(Body, "class")}>${Role}</p> <div class="mt-5 border-l-4 border-stamped-canary pl-4"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "canary" }, { "default": ($$result) => renderTemplate`FAILS ON` })} <p class="mt-2 font-body text-body leading-relaxed text-zinc-dust"> ${Fails} </p> </div> </div> </div>`)} </div> <figure class="well mt-16 p-4" data-diagram="context-engine"> <div class="overflow-x-auto">${unescapeHTML(context_engine_default)}</div> <figcaption class="mt-6"> <span class="telemetry-tag">M9 // CONTEXT ENGINE</span> </figcaption> </figure> <h3 id="dispatch"${addAttribute(`mt-20 ${Head}`, "class")}>
One call, end to end
</h3> <p${addAttribute(Lede, "class")}>
Two views of one call: what the agent sees, and what the process does. Following one
				call makes the split obvious - every intervention is invisible on the agent's side,
				and every rewrite is decided on the system's side.
</p> <div class="mt-10"> ${renderComponent($$result, "ZineFlow", $$ZineFlow, {
		"Title": "THE DISPATCH // ONE HOOK CALL",
		"Complete": "REPLY RETURNED",
		"Steps": Dispatch
	})} </div> <div class="prose-flow mt-10 max-w-[46rem]"> <p${addAttribute(Note, "class")}>
The failure mode of the whole chain sits at the boundary, not in the middle:
</p> <ul class="space-y-2 font-body text-body leading-relaxed text-zinc-dust"> <li class="border-l-2 border-oxblood-dark pl-3">
a hook that raises is logged and skipped
</li> <li class="border-l-2 border-oxblood-dark pl-3">
a hook that returns nothing is a no-op
</li> <li class="border-l-2 border-oxblood-dark pl-3">
and neither ever aborts the turn.
</li> </ul> <p${addAttribute(Note, "class")}>What a hook cannot do is pretend it ran.</p> </div> </section>  <section class="blueprint-section relative w-full" data-reveal> <p class="section-index">04 // HOOKS // THE CHAIN</p> <h2 id="chain"${addAttribute(Section, "class")}>
Six hooks, one turn
</h2> <div class="prose-flow mt-6 max-w-[46rem]"> <p${addAttribute(Body, "class")}>
Every hook is a thin dispatch that forwards its arguments to the Rust dylib and
					hands the JSON reply back to Hermes.
</p> <p${addAttribute(Body, "class")}>
It is the reason the shim registers one callback per name: on plugin load it
					asks the dylib for its hook names, and the six hooks are always registered
					together.
</p> </div> <h3${addAttribute(`mt-12 ${Head}`, "class")}>The turn, in order</h3> <div class="grunge shell-card mt-6" data-grunge data-grunge-mode="edge"> <div${addAttribute(CardHead, "class")}> <span class="telemetry-tag telemetry-tag--bone">ONE TURN</span> <span class="telemetry-tag">session start → next turn</span> </div> <div class="well m-4 space-y-0 p-4 font-mono text-code leading-relaxed"> ${PluginSequence.map(({ Text: Line, Tone }) => renderTemplate`<div${addAttribute(Tone === "canary" ? "pl-4 text-stamped-canary" : Tone === "mute" ? "pl-4 text-zinc-dust" : Tone === "result" ? "text-bone-white" : "pl-4 text-bone-newsprint", "class")}> ${Line} </div>`)} </div> </div> <p class="mt-8 max-w-[46rem] font-body text-body leading-relaxed text-bone-newsprint">
The loop closes on itself, so the state a turn leaves behind is the state the next
				turn reads. That is why the reset seam exists: a new session starts from a clean
				baseline instead of inheriting the previous session's counters and markers.
</p> <figure class="well mt-16 p-4" data-diagram="hook-chain"> <div class="overflow-x-auto">${unescapeHTML(hook_chain_default)}</div> <figcaption class="mt-6"> <span class="telemetry-tag">M3 // HOOK CHAIN</span> </figcaption> </figure> <h3 id="six"${addAttribute(`mt-20 ${Head}`, "class")}>
The six, one card each
</h3> <div class="mt-8 grid grid-cols-1 items-start gap-6 lg:grid-cols-2"> ${Hooks$1.map(({ N, Name, Tape, Body: Paragraphs }) => renderTemplate`<div class="grunge shell-card" data-grunge data-grunge-mode="edge"> <div${addAttribute(["h-0.5 w-full", Accent[Tape]], "class:list")}></div> <div${addAttribute(CardHead, "class")}> <span${addAttribute(["telemetry-tag", TagTone[Tape]], "class:list")}>${N}</span> <h4 class="font-mono text-code font-bold text-bone-white">${Name}</h4> </div> <div${addAttribute(CardBody, "class")}> ${Paragraphs.map((Paragraph, I) => renderTemplate`<p${addAttribute([I === 0 ? "" : "mt-3", "font-body text-body leading-relaxed text-bone-newsprint"], "class:list")}>${unescapeHTML(Paragraph)}</p>`)} </div> </div>`)} </div> <h3 id="gate"${addAttribute(`mt-20 ${Head}`, "class")}>
What never gets compressed
</h3> <p${addAttribute(Lede, "class")}>
A result is left untouched when it is empty, below threshold, or from the essential
				set - tools the agent needs raw:
</p> <div class="mt-6 flex flex-wrap gap-2"> ${Essential.map((Tool) => renderTemplate`<span class="telemetry-tag telemetry-tag--teal">${Tool}</span>`)} </div> <div class="prose-flow mt-8 max-w-[46rem]"> <p${addAttribute(Note, "class")}>
Aphrodite also skips its own tools and headroom helpers - compressing
<span class="font-mono text-base text-weathered-teal">aphrodite_retrieve</span>
would just replace resolved content with another marker.
</p> <p${addAttribute(Note, "class")}>
The gate is the reason retrieval stays cheap: a marker the model resolves comes
					back whole, because nothing downstream of the gate rewrites it a second time.
</p> </div> <h3 id="thresholds"${addAttribute(`mt-20 ${Head}`, "class")}>
The numbers that decide
</h3> <div class="grunge shell-card mt-6" data-grunge data-grunge-mode="edge"> <div class="overflow-x-auto"> <table class="w-full border-collapse text-left"> <thead> <tr class="border-b border-[color:var(--tier-well-edge)]"> <th scope="col" class="type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5">
HOOK
</th> <th scope="col" class="type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5">
SETTING
</th> <th scope="col" class="type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5">
DEFAULT
</th> <th scope="col" class="type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5">
BYPASS
</th> </tr> </thead> <tbody class="text-bone-newsprint"> <tr class="border-b border-[color:var(--tier-shell-edge)] align-top"> <td class="px-4 py-4 font-mono text-code sm:px-5">
transform_tool_result
</td> <td class="px-4 py-4 font-mono text-code text-weathered-teal sm:px-5">
tool_threshold_token
</td> <td class="px-4 py-4 font-mono text-code text-bone-white sm:px-5">
4,096
</td> <td class="px-4 py-4 font-body text-body sm:px-5">
empty · essential tools · self tools ·${" "} <span class="text-stamped-canary">0 = always compress</span> </td> </tr> <tr class="border-b border-[color:var(--tier-shell-edge)] align-top"> <td class="px-4 py-4 font-mono text-code sm:px-5">
transform_terminal_output
</td> <td class="px-4 py-4 font-mono text-code text-weathered-teal sm:px-5">
terminal_threshold
</td> <td class="px-4 py-4 font-mono text-code text-bone-white sm:px-5">
1,024
</td> <td class="px-4 py-4 font-body text-body sm:px-5">
empty · below threshold ·${" "} <span class="text-stamped-canary">0 = always compress</span> </td> </tr> <tr class="border-b border-[color:var(--tier-shell-edge)] align-top"> <td class="px-4 py-4 font-mono text-code sm:px-5">pre_llm_call</td> <td class="px-4 py-4 font-mono text-code text-weathered-teal sm:px-5">
flow budget_chars
</td> <td class="px-4 py-4 font-mono text-code text-bone-white sm:px-5">
4,000
</td> <td class="px-4 py-4 font-body text-body sm:px-5">
recall catalog drops first; directives and nudges never drop
</td> </tr> <tr class="align-top"> <td class="px-4 py-4 font-mono text-code sm:px-5">
pre_tool_call (chain split)
</td> <td class="px-4 py-4 font-mono text-code text-weathered-teal sm:px-5">
chain_split_min_segments
</td> <td class="px-4 py-4 font-mono text-code text-bone-white sm:px-5">
-
</td> <td class="px-4 py-4 font-body text-body sm:px-5">
feature off by default (chain_split = false)
</td> </tr> </tbody> </table> </div> </div> <p class="mt-8 max-w-[46rem] border-t border-oxblood-dark pt-6 font-mono text-base leading-relaxed text-zinc-dust">
PRECEDENCE: ENVIRONMENT &gt; TOML &gt; DEFAULT (APHRODITE_TOOL_THRESHOLD_TOKEN ·
				APHRODITE_TERMINAL_THRESHOLD · APHRODITE_FLOW_BUDGET_CHARS · APHRODITE_CHAIN_SPLIT).
</p> <p class="mt-3 max-w-[46rem] font-body text-body leading-relaxed text-zinc-dust">
The precedence matters at the edges: a value in the environment wins over the same
				key in
<span class="font-mono text-base text-weathered-teal">aphrodite.toml</span>, and the
				compiled default is only reached when neither exists. Every knob is listed on
<a class="text-weathered-teal underline transition-colors hover:text-bone-white"${addAttribute(Routes.Config, "href")}>
CONFIG
</a>
.
</p> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: docs/architecture/04-hook-ffi.md", "SRC: docs/plugin/hooks.md; plugins/aphrodite/plugin.yaml (provides_hooks)"] })} </section>  <section class="blueprint-section relative w-full" data-reveal> <p class="section-index">05 // DOWNLOAD // EXPLICIT STEPS ONLY</p> <h2 id="download"${addAttribute(Section, "class")}>
register() never downloads
</h2> <p${addAttribute(Lede, "class")}>
The split is deliberate: loading a plugin is a read, and fetching a binary is a
				write. Keeping them apart means an agent that starts in a clean environment never
				silently pulls an executable over the network - the fetch is a step a person runs,
				with a verdict attached to it.
</p> <div class="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2"> <div> <p${addAttribute(Body, "class")}>Binaries are never shipped in the repository.</p> <p class="mt-6 font-body text-body leading-relaxed text-bone-newsprint">
Fetching them is an explicit setup step you run yourself - and the
						verification is mandatory, not best-effort:
</p> <ul class="mt-6 space-y-6 font-body text-body text-bone-newsprint"> <li class="border-l-4 border-raw-blood pl-4"> <span class="font-bold text-bone-white">
SHA-256 against the in-tree checksum list
</span>
-${" "} <code class="font-mono text-base text-weathered-teal">
SHA256SUMS.txt
</code>
, generated by CI into the tree; a mismatch is refused outright.
</li> <li class="border-l-4 border-raw-blood pl-4"> <span class="font-bold text-bone-white">Magic-byte validation</span>-
							the downloaded file must be a real ELF / Mach-O / PE image, or it is
							rejected.
</li> <li class="border-l-4 border-raw-blood pl-4"> <span class="font-bold text-bone-white">Backup + restore</span> - an
							existing install is backed up and restored if any step fails. No
							release-hosted fallback.
</li> <li class="border-l-4 border-raw-blood pl-4"> <span class="font-bold text-bone-white">
A missing binary disables, not breaks
</span>
- the plugin logs the setup command and stays disabled until the
							binaries are present.
</li> </ul> <p class="mt-8 font-body text-body leading-relaxed text-zinc-dust">
The four checks are ordered by cost, not by importance:
</p> <ul class="mt-3 space-y-2 font-body text-body leading-relaxed text-zinc-dust"> <li class="border-l-2 border-oxblood-dark pl-3">
the checksum is one hash
</li> <li class="border-l-2 border-oxblood-dark pl-3">
the magic bytes are four
</li> <li class="border-l-2 border-oxblood-dark pl-3">the backup is a rename</li> <li class="border-l-2 border-oxblood-dark pl-3">
and the last one is not a check at all - it is what the plugin does when
							every check before it has already failed.
</li> </ul> </div> <!-- THE PLAYBOOK. One shell card: a session ribbon, the seven lines in
				     a recessed well, and a footer callout - the shape a reader follows
				     with a terminal open beside it. --> <div class="grunge shell-card self-start" data-grunge data-grunge-mode="edge"> <div${addAttribute(CardHead, "class")}> <span class="telemetry-tag telemetry-tag--teal">SESSION // BASH</span> <span class="telemetry-tag">ROUTE 01 // GIT CLONE</span> <span class="telemetry-tag telemetry-tag--canary"> ${InstallSteps} STEPS
</span> <span class="telemetry-tag ml-auto">READY</span> </div> <!-- \`bg-soot-black\` is carried for the CODE PLATES rule in Global.css:
					     the fence drops its own rhythm only inside a soot inset or an
					     asphalt panel, and this host is one. The fill that renders is the
					     well's, because Global.css loads after the utility layer - the
					     class is the selector here, not the colour. --> <div class="well bg-soot-black p-2 sm:p-3"> ${renderComponent($$result, "CodeFence", $$CodeFence, {
		"Code": InstallFence,
		"CopyPayload": InstallCommands,
		"Copy": true
	})} </div> <div class="flex flex-col gap-2 border-t border-[color:var(--tier-shell-edge)] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"> <span class="telemetry-tag telemetry-tag--canary">
COPY THE FULL SEQUENCE:
</span> <span class="font-mono text-base text-zinc-dust">
the COPY tab on the fence copies all seven lines
</span> </div> </div> </div> <p class="mt-8 max-w-[46rem] font-mono text-base leading-relaxed text-zinc-dust">
The copy payload is ${InstallSteps} lines: clone, link, fetch, enable, start. The${" "} <span class="text-weathered-teal">ln -s</span> line is the one that makes the repo
				the plugin Hermes sees - the install directory is a symlink, not a copy.
</p> <!-- ROUTE 02 - the same install, from the catalog. --> <div class="grunge shell-card mt-12" data-grunge data-grunge-mode="edge"> <div${addAttribute(CardHead, "class")}> <span class="telemetry-tag telemetry-tag--bone">
ROUTE 02 // PLUGIN CATALOG
</span> <span class="telemetry-tag">reviewed · pinned commit</span> </div> <div${addAttribute(CardBody, "class")}> <p${addAttribute(Body, "class")}>
ALSO ON THE STORE: the plugin is in the Hermes plugin catalog - the
						reviewed, pinned alternative to the manual clone.
</p> <p class="mt-3 font-body text-body leading-relaxed text-zinc-dust"> <code class="font-mono text-base text-weathered-teal">
hermes plugins install aphrodite
</code>
checks out the catalog entry's exact commit, then
<code class="font-mono text-base text-weathered-teal">
bash download.sh
</code>
from${" "} <code class="font-mono text-base text-weathered-teal">
~/.hermes/plugins/aphrodite
</code>
still fetches the binaries (never
<code class="font-mono text-base text-weathered-teal">aphrodite setup</code>
against the catalog-managed directory).
</p> <p class="mt-3 font-body text-body leading-relaxed text-zinc-dust">
The full flow is on
<a class="text-weathered-teal underline transition-colors hover:text-bone-white"${addAttribute(Routes.Setup, "href")}>
SETUP
</a>
; the mechanics are in${" "} <a class="text-weathered-teal underline transition-colors hover:text-bone-white"${addAttribute(ExternalLinks.HermesGuide, "href")}>
the Hermes plugin guide
</a>
.
</p> </div> </div> <h3 id="key"${addAttribute(`mt-16 ${Head}`, "class")}>
The proxy needs its own key
</h3> <div class="prose-flow mt-6 max-w-[46rem] border-l-4 border-raw-blood pl-5"> <p${addAttribute(Note, "class")}>
LLM API KEY REQUIRED: the proxy is an OpenAI-compatible forwarder and needs its
					own credentials -${" "} <code class="font-mono text-base text-weathered-teal">APHRODITE_API_KEY</code>,
<code class="font-mono text-base text-weathered-teal">aphrodite setup</code>, or
<code class="font-mono text-base text-weathered-teal">api_key</code> in
					~/.hermes/aphrodite/aphrodite.toml.
</p> <p${addAttribute(Note, "class")}>
Hermes' provider config is NOT reused, and there is no keyless mode: without a
					key the proxy refuses to start.
</p> <p${addAttribute(Note, "class")}>
That refusal is the point. A forwarder that started without a key would accept a
					request, hold it, and fail it somewhere downstream - so the proxy checks first
					and exits with the missing variable named.
</p> </div> <h3 id="config"${addAttribute(`mt-16 ${Head}`, "class")}>
What happens without a config file
</h3> <div class="prose-flow mt-6 max-w-[46rem]"> <p${addAttribute(Note, "class")}>
A MISSING CONFIG IS REPORTED, NOT INFERRED: when
<code class="font-mono text-base text-weathered-teal">aphrodite.toml</code> is
					absent the plugin says so, and the binary falls back to a single token-mode
					listener on the first port - the second proxy never binds, and every
<code class="font-mono text-base text-weathered-teal">[compression]</code> knob,
					the store retention caps included, is simply absent.
</p> <p${addAttribute(Note, "class")}>
It is the reason the install runs
<code class="font-mono text-base text-weathered-teal">aphrodite setup</code>:
					the config file is written before the binary is ever started, so the fallback
					never becomes the everyday state.
</p> <p${addAttribute(Note, "class")}>
The fallback is a floor, not a mode: one listener, token compression, no
					retention promise. It exists so a fresh checkout can answer a request before
					anyone has written a config, and it is reported every time it is in effect.
</p> </div> <div class="mt-10"> ${renderComponent($$result, "ZineLesson", $$ZineLesson, {
		"Label": "FAILS SAFE",
		"Color": "raw",
		"Lines": [
			"Every step degrades in the same direction:",
			"a missing binary disables the plugin",
			"a missing key stops the proxy",
			"a missing config narrows it to one listener.",
			"None of them runs half-configured and calls it success."
		]
	})} </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: plugins/aphrodite/download.sh · SHA256SUMS.txt (generated by CI)", "SRC: docs/guides/hermes-integration.md:115-141"] })} </section>  <section class="blueprint-section relative w-full" data-reveal> <p class="section-index">06 // FILESYSTEM // CANONICAL LAYOUT</p> <h2 id="layout"${addAttribute(Section, "class")}>
What changes after install
</h2> <div class="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-5"> <!-- LEFT: the tree, in the pod the diagrams use - ribbon, recessed
				     channel, caption. The tree is the map; the explanation is beside
				     it, not above it. --><div class="lg:col-span-3"> ${renderComponent($$result, "ZineDiagram", $$ZineDiagram, {
		"Tree": Filesystem,
		"Name": "FILESYSTEM TOPOLOGY",
		"Tags": ["~/.hermes/", "2 owners"],
		"Caption": "HERMES OWNS plugins/aphrodite · APHRODITE OWNS aphrodite/"
	})} </div> <!-- RIGHT: what the map means. Two directories, two owners, and
				     neither one writes in the other's half. --> <div class="lg:col-span-2"> <p${addAttribute(Body, "class")}>
Two directories, two owners. Hermes owns the plugin directory and the plugin
						owns everything under the runtime home - the arrow annotations are the whole
						map of who writes what.
</p> <div class="mt-6 grid grid-cols-1 gap-4"> <div class="well p-4"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "teal",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`HERMES OWNS` })} <p class="mt-2 break-token font-mono text-base text-bone-white">
~/.hermes/plugins/aphrodite/
</p> <p class="mt-2 font-body text-body leading-relaxed text-zinc-dust">
The catalog checkout. The plugin never creates, converts or modifies
								it, and the self-heal below stops at this boundary.
</p> </div> <div class="well p-4"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "teal",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`APHRODITE OWNS` })} <p class="mt-2 break-token font-mono text-base text-bone-white">
~/.hermes/aphrodite/
</p> <p class="mt-2 font-body text-body leading-relaxed text-zinc-dust">
The runtime home: binaries, config, directives, the CCR store and the
								proxy logs.
</p> </div> </div> </div> </div> <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3"> <div class="grunge shell-card" data-grunge data-grunge-mode="edge"> <div${addAttribute(CardHead, "class")}> <span class="telemetry-tag telemetry-tag--crimson">binaries/</span> </div> <div${addAttribute(CardBody, "class")}> <p${addAttribute(Body, "class")}>
The only two files that execute. Both arrive through
<span class="font-mono text-base text-weathered-teal">
download.sh
</span>${" "}
and both are verified before they land; a failed fetch restores the pair
							that was already there.
</p> </div> </div> <div class="grunge shell-card" data-grunge data-grunge-mode="edge"> <div${addAttribute(CardHead, "class")}> <span class="telemetry-tag telemetry-tag--crimson">directives/</span> </div> <div${addAttribute(CardBody, "class")}> <p${addAttribute(Body, "class")}>
The seven built-ins, materialized on first start so an edited directive
							is never silently overwritten by an upgrade. A deleted one comes back; a
							changed one stays changed.
</p> </div> </div> <div class="grunge shell-card" data-grunge data-grunge-mode="edge"> <div${addAttribute(CardHead, "class")}> <span class="telemetry-tag telemetry-tag--crimson">ccr.db</span> </div> <div${addAttribute(CardBody, "class")}> <p${addAttribute(Body, "class")}>
The address space the markers point into. Delete it and the markers stop
							resolving - the previews in the transcript still read, which is why the
							store can be dropped without losing the conversation.
</p> </div> </div> </div> <h3 id="selfheal"${addAttribute(`mt-16 ${Head}`, "class")}>
The self-heal, and where it stops
</h3> <div class="prose-flow mt-6 max-w-[46rem]"> <p${addAttribute(Note, "class")}>
The runtime home self-heals toward
<code class="font-mono text-base text-weathered-teal">
layout_schema.json
</code>${" "}
at startup: the self-heal moves misplaced config and binaries to their canonical
					paths and quarantines stale plugin-source copies.
</p> <p${addAttribute(Note, "class")}>
It is the reason the self-healing stops at the Hermes-owned boundary: the
					~/.hermes/plugins/aphrodite install dir is Hermes' territory, and the plugin
					never creates, converts, or modifies it.
</p> <p${addAttribute(Note, "class")}>
The schema is the authority, not the directory listing: a file is misplaced when
					it is not where the schema says, and the repair is a move - never a copy, never
					a rewrite. Anything it cannot place it quarantines instead of deleting, so a
					stale copy is set aside with its bytes intact and the next start does not trip
					over it again.
</p> </div> <div class="mt-8"> ${renderComponent($$result, "ZineReveal", $$ZineReveal, {
		"Cover": "QUARANTINE // stale plugin-source copy, moved aside with its bytes intact",
		"Tag": "MOVED ASIDE",
		"Raw": "<span class='font-mono text-base text-stamped-canary'>~/.hermes/aphrodite/.stale-backup/</span>"
	})} </div> <figure class="well mx-auto mt-16 max-w-md p-3" data-diagram="hook-chain-mini"> <div class="overflow-x-auto [&amp;_svg]:h-auto">${unescapeHTML(hook_chain_default)}</div> <figcaption class="mt-4"> <span class="telemetry-tag">M3 MINI // HOOK CHAIN</span> </figcaption> </figure> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: plugins/aphrodite/layout_schema.json"] })} </section>  <section class="blueprint-section relative w-full" data-reveal> <p class="section-index">07 // EVOLUTION // HOW THE SURFACE GREW</p> <h2 id="evolution"${addAttribute(Section, "class")}>
The six hooks, the version pairing, and the 14-to-13 correction
</h2> <p${addAttribute(Lede, "class")}>Three things grew at once:</p> <ul class="mt-6 max-w-[46rem] space-y-2 font-body text-body leading-relaxed text-bone-newsprint"> <li class="border-l-4 border-raw-blood pl-4">the seams</li> <li class="border-l-4 border-raw-blood pl-4">
the pairing rule that keeps a plugin pointing at a binary that exists
</li> <li class="border-l-4 border-raw-blood pl-4">
and the discipline that keeps the declared tool count honest.
</li> </ul> <p class="mt-6 max-w-[46rem] font-body text-body leading-relaxed text-bone-newsprint">
Read together they explain why the plugin can be installed from a tag and verified
				against a checksum list.
</p> <h3 id="lanes"${addAttribute(`mt-12 ${Head}`, "class")}>
Six lanes, one trigger each
</h3> <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"> ${Lanes.map(({ Hook, When, Does }) => renderTemplate`<div class="grunge shell-card" data-grunge data-grunge-mode="edge"> <div${addAttribute(CardHead, "class")}> <h4 class="font-mono text-code font-bold text-bone-white">${Hook}</h4> </div> <div${addAttribute(CardBody, "class")}> <span class="telemetry-tag telemetry-tag--canary">${When}</span> <p class="mt-3 font-body text-body leading-relaxed text-bone-newsprint"> ${Does} </p> </div> </div>`)} </div> <p class="mt-8 max-w-[46rem] font-mono text-base leading-relaxed text-zinc-dust">
SRC: docs/plugin/hooks.md:13-20 - every hook is a thin dispatch that forwards to the
				Rust dylib; the dylib holds all the behavior.
</p> <div class="grunge shell-card mt-16" data-grunge data-grunge-mode="edge"> <div${addAttribute(["h-0.5 w-full", Accent.raw], "class:list")}></div> <div${addAttribute(CardHead, "class")}> <span class="telemetry-tag telemetry-tag--crimson">
THE VERSION PAIRING · BINARY_VERSION MECHANICS
</span> </div> <div${addAttribute(CardBody, "class")}> <div class="grid grid-cols-1 gap-10 lg:grid-cols-3"> <div> <div class="font-headline text-sub font-black text-bone-white"> ${Stamps.Pairing()} </div> <p class="mt-3 font-body text-body leading-relaxed text-bone-newsprint">
Today's pairing: binary ${Versions.Binary}, plugin ${Versions.Plugin}.
</p> <p class="mt-3 font-body text-body leading-relaxed text-bone-newsprint">
Every release moves both: "
${Versions.ChangelogPairing.replaceAll("`", "")}"
</p> </div> <div> <div class="font-headline text-sub font-black text-bone-white">
BUMPED LAST
</div> <p class="mt-3 font-body text-body leading-relaxed text-bone-newsprint"> <code class="font-mono text-base text-weathered-teal">
BINARY_VERSION
</code>${" "}
is pinned to a binary release tag the plugin can download.
</p> <p class="mt-3 font-body text-body leading-relaxed text-bone-newsprint">
Since the first plugin-first release (v1.4.6), the plugin is tagged
<em>before the parent</em>, so the pinned version points at assets
								that already exist.
</p> </div> <div> <div class="font-headline text-sub font-black text-bone-white">
OR IT REFUSES
</div> <p class="mt-3 font-body text-body leading-relaxed text-bone-newsprint">
The plugin warns before${" "} <code class="font-mono text-base">download.sh</code> when the pinned${" "} <code class="font-mono text-base">BINARY_VERSION</code> points at a
								release with no assets - and since v1.6.5, a checksum mismatch is a
								hard refusal, not a warning.
</p> </div> </div> <p class="mt-8 max-w-[46rem] font-body text-body leading-relaxed text-zinc-dust">
The order is the mechanic. Tagging the plugin first means the pinned version
						can only ever point backwards, at a release whose assets are already
						uploaded and hashed - so the download has something to verify against before
						anyone asks for it.
</p> <p class="mt-6 font-mono text-base leading-relaxed text-zinc-dust">
SRC: CHANGELOG.md v1.4.6/v1.4.4/v1.6.5/v1.6.6 entries · the Aphrodite/v1.4.6
						release note ("released plugin-first ... points at assets that already
						exist")
</p> </div> </div> <div class="grunge shell-card mt-12" data-grunge data-grunge-mode="edge"> <div${addAttribute(["h-0.5 w-full", Accent.canary], "class:list")}></div> <div${addAttribute(CardHead, "class")}> <span class="telemetry-tag telemetry-tag--canary">
13 TOOLS, NOT 14 · THE CORRECTION IS A BEAT
</span> </div> <div${addAttribute(CardBody, "class")}> <p${addAttribute(Body, "class")}>
v1.6.5 corrected the manifest: "14 tools" → "13 tools" - the release dylib
						registers exactly the 13 declared tools.
</p> <p class="mt-4 font-body text-body leading-relaxed text-bone-newsprint">
The 14th,${" "} <code class="font-mono text-base text-weathered-teal">aphrodite_debug</code>
, is${" "} <code class="font-mono text-base text-weathered-teal">
debug_assertions
</code>
-gated out of release builds, matching what${" "} <code class="font-mono text-base text-weathered-teal">
hermes plugins validate
</code>
enforces.
</p> <p class="mt-4 font-body text-body leading-relaxed text-bone-newsprint">
Earlier, v1.6.1 had already removed it from
<code class="font-mono text-base text-weathered-teal">provides_tools</code>,
						closing the catalog-review mismatch on the pinned tree - and v1.4.6 had done
						the same for${" "} <code class="font-mono text-base text-weathered-teal">
aphrodite_navigate
</code>
, the navigation tool whose feature was unbuildable.
</p> <p class="mt-4 font-body text-body leading-relaxed text-bone-newsprint">
The declared surface and the running surface are kept identical on purpose.
</p> <p class="mt-4 font-body text-body leading-relaxed text-zinc-dust">
The count is not cosmetic: the validator compares the manifest's tool list
						against the schemas the dylib reports, so a release that advertises fourteen
						while registering thirteen fails that comparison before a user ever runs it.
						A debug-only tool is therefore a build artifact, not a declared surface -
						and the manifest says so.
</p> <p class="mt-4 font-mono text-base leading-relaxed text-zinc-dust">
SRC: CHANGELOG.md:61-64 (v1.6.5) · CHANGELOG.md:166-173 (v1.6.1) · v1.4.6
						release note
</p> </div> </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: CHANGELOG.md v1.6.5 · CHANGELOG.md v1.6.1 · the Aphrodite/v1.4.6 release note", "SRC: plugins/aphrodite/plugin.yaml (provides_tools)"] })} </section>  ${renderComponent($$result, "Related", $$Related, { "Links": [
		{
			Href: "/setup/",
			Label: "SETUP"
		},
		{
			Href: "/hermes/",
			Label: "HERMES"
		},
		{
			Href: "/hooks/",
			Label: "HOOKS"
		},
		{
			Href: "/flavors/",
			Label: "FLAVORS"
		},
		{
			Href: "/tools/",
			Label: "TOOLS"
		}
	] })} ` })} ${renderComponent($$result, "ZineDiagramNav", $$ZineDiagramNav, {})} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/plugin.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/plugin.astro";
var $$url = "/plugin";
// \0virtual:astro:page:Source/pages/plugin@_@astro
var page = () => plugin_exports;
export { page };
