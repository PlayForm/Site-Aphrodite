import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { E as unescapeHTML, _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, t as $$Base } from "./Base_Bs2-mKm9.mjs";
import { a as $$Related } from "./DocsSidebar_DymFAMH3.mjs";
import { n as $$PageShell } from "./ZineTape_BXk9fOqY.mjs";
import { t as $$PageHeader } from "./PageHeader_CFtxK5wU.mjs";
import { t as $$ZineBox } from "./ZineBox_CVeWVZDC.mjs";
import { t as $$ZineStamp } from "./ZineStamp_DHvPYmuj.mjs";
import { t as $$ZineSource } from "./ZineSource_DoCsU3-s.mjs";
import { l as ToolNames, s as HookNames } from "./Roster_DWXQuOMb.mjs";
// Source/pages/flavors.astro
var flavors_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Flavors,
	file: () => $$file,
	url: () => $$url
});
var $$Flavors = createComponent(($$result, $$props, $$slots) => {
	const Label = "type-meta font-bold uppercase text-stamped-canary";
	const Eyebrow = "type-meta font-bold uppercase text-zinc-dust";
	const FactTag = "telemetry-tag";
	const CostTag = "telemetry-tag telemetry-tag--bone";
	const TradeTag = "telemetry-tag telemetry-tag--crimson";
	const LeadTradeTag = "telemetry-tag telemetry-tag--canary";
	const Hosts = [
		{
			Label: "FLAVOR 01 // HERMES PLUGIN",
			Flavor: "HERMES PLUGIN",
			Host: "Hermes Agent",
			Sees: "Everything - hooks, tools, the prompt",
			Status: "TODAY",
			Badge: "telemetry-tag--canary",
			Id: "hermes",
			Head: "The full integration",
			Accent: "crimson",
			Tape: "raw",
			Cost: "REQUIRES HERMES AGENT",
			Trade: ["SEES EVERYTHING"],
			Chips: [
				`${HookNames.length} HOOKS`,
				`${ToolNames.length} TOOLS`,
				"CONTEXT ENGINE",
				"DIRECTIVES",
				"DUAL PROXIES"
			],
			Body: `<p>Six hooks, thirteen tools, the context engine, auto-launched dual proxies - the native flavor sees everything the agent sees.</p><p>This is the flavor this site documents.</p>`
		},
		{
			Label: "FLAVOR 02 // STANDALONE PROXY",
			Flavor: "STANDALONE PROXY",
			Host: "Any OpenAI-compatible client",
			Sees: "The HTTP body - no hook interception",
			Status: "SHIPS TODAY",
			Badge: "telemetry-tag--teal",
			Id: "proxy",
			Head: "Any OpenAI-compatible client",
			Accent: "teal",
			Tape: "raw",
			Cost: "REQUIRES OPENAI-COMPATIBLE CLIENT",
			Trade: [
				"NO HOOK INTERCEPTION",
				"NO TOOLS",
				"NO PROMPT INJECTION"
			],
			Chips: [
				"OPENAI-COMPATIBLE",
				"TOKEN :9798",
				"CACHE :9797"
			],
			Body: `<p>Point <code class="font-mono text-base text-weathered-teal">base_url</code> at <code class="font-mono text-base text-weathered-teal">:9798</code> (or <code class="font-mono text-base text-weathered-teal">:9797</code>) and the same compression engine sits between the client and its LLM - token and cache listeners, SQLite or in-memory storage.</p><p>What it cannot do is see inside the agent: no hook interception, no tools, no prompt injection.</p>`
		},
		{
			Label: "FOUNDATION // EMBEDDED HEADROOM",
			Flavor: "EMBEDDED HEADROOM",
			Host: "The engine's own core",
			Sees: "Content types and previews, not agent APIs",
			Status: "FOUNDATION",
			Badge: "",
			Id: "headroom",
			Head: "The portable core",
			Accent: "none",
			Tape: "raw",
			Cost: "REQUIRES THE CORE FORK",
			Trade: ["NOT AGENT APIs"],
			Chips: ["GIT SUBMODULE", "THIN BRIDGE"],
			Body: `<p>Aphrodite embeds Headroom - a custom fork, tracked as a git submodule - as its content-transform core:</p><ul class="space-y-1"><li class="border-l-2 border-oxblood-dark pl-3">the classifier</li><li class="border-l-2 border-oxblood-dark pl-3">the smart crusher</li><li class="border-l-2 border-oxblood-dark pl-3">the tokenizer.</li></ul><p>The Hermes-specific layer is a thin bridge on top.</p><p>It is the reason new host flavors are possible: the engine already speaks in content types and previews, not in agent APIs.</p>`
		},
		{
			Label: "ROADMAP // PLANNED",
			Flavor: "MORE HOSTS // PLANNED",
			Host: "Additional agents",
			Sees: "Whatever the host exposes - the proxy path already works",
			Status: "PLANNED",
			Badge: "",
			Id: "roadmap",
			Head: "Other agents",
			Accent: "canary",
			Tape: "bone",
			Cost: "REQUIRES THE HOOK-AND-TOOL PATTERN",
			Trade: ["NO DATES PROMISED"],
			Chips: ["PROXY PATH ALREADY WORKS"],
			Body: `<p>Beyond Hermes, additional host flavors are planned - the standalone proxy path already works with any OpenAI-compatible agent today, and deeper native integrations follow the same hook-and-tool pattern the Hermes plugin established.</p><p>No dates are promised; when a new flavor ships, its documentation ships with it.</p>`
		}
	];
	const [Plugin, ...Others] = Hosts;
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "FLAVORS // APHRODITE",
		"Description": "The Aphrodite roadmap: a native Hermes plugin today, the standalone proxy for any OpenAI-compatible client, and the embedded Headroom core that keeps the engine portable."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageShell", $$PageShell, { "Rhythm": "wide" }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHeader", $$PageHeader, {
		"Tape": "FLAVORS // THE ROADMAP",
		"Title": "One engine, many hosts",
		"Lead": [
			"A tool call's output becomes part of the model's context, and the engine that rewrites it before the model reads it can live in more than one host.",
			"Aphrodite's compression engine does not belong to one agent.",
			`It is the reason the same CCR core ships in more than one shape: the native Hermes plugin is the flagship flavor today - the deepest integration, the most capabilities - while a standalone listener serves any OpenAI-compatible client, and the engine's core is an embedded fork built to stay portable.`
		]
	})}  ${maybeRenderHead($$result)}<section class="blueprint-section relative w-full" data-reveal> <p class="section-index">01 // THREE HOSTS // ONE CORE</p> <h2 id="surface" class="mt-3 scroll-mt-24 type-section text-bone-white">
What ships, and what each one sees
</h2> <div class="split mt-6"> <p class="max-w-[46rem] font-body text-body leading-relaxed text-bone-newsprint">
A host can only compress what it can see, so the flavors are ordered by how much
					of the turn each one is exposed to - and that ordering is what decides which
					compression the flavor can perform.
</p> <div class="well p-4 sm:p-5"> <p${addAttribute(Eyebrow, "class")}>WHICH ONE TO RUN</p> <p class="mt-3 font-body text-body leading-relaxed text-bone-newsprint">
If the agent is Hermes, the plugin is the deepest integration and it ships
						today. If it is any other OpenAI-compatible client, the standalone proxy
						already works and simply sees less of the turn.
</p> <p class="mt-3 font-body text-body leading-relaxed text-zinc-dust">
Embedded Headroom is the core the other flavors carry rather than a host you
						adopt on its own, and further hosts are planned on the same hook-and-tool
						pattern.
</p> </div> </div> <div class="grunge shell-card mt-8" data-grunge data-grunge-mode="edge"> <div class="overflow-x-auto"> <table class="w-full border-collapse text-left"> <thead> <tr class="border-b border-[color:var(--tier-well-edge)]"> <th scope="col" class="type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5">
FLAVOR
</th> <th scope="col" class="type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5">
HOST
</th> <th scope="col" class="type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5">
WHAT IT SEES
</th> <th scope="col" class="type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5">
STATUS
</th> </tr> </thead> <tbody> ${Hosts.map((Host) => renderTemplate`<tr class="border-b border-[color:var(--tier-shell-edge)] align-top last:border-b-0"> <th scope="row" class="whitespace-nowrap px-4 py-4 text-left sm:px-5"> <a${addAttribute(`#${Host.Id}`, "href")} class="font-mono text-code font-bold text-weathered-teal underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:decoration-stamped-canary"> ${Host.Flavor} </a> </th> <td class="max-w-[20rem] px-4 py-4 font-body text-body leading-relaxed text-bone-newsprint sm:px-5"> ${Host.Host} </td> <td class="max-w-[26rem] px-4 py-4 font-body text-body leading-relaxed text-zinc-dust sm:px-5"> ${Host.Sees} </td> <td class="px-4 py-4 sm:px-5"> <span${addAttribute(["telemetry-tag", Host.Badge], "class:list")}> ${Host.Status} </span> </td> </tr>`)} </tbody> </table> </div> </div> </section>  <section class="blueprint-section relative w-full" data-reveal> <p class="section-index">02 // RECOMMENDED // FLAVOR 01</p> <h2${addAttribute(Plugin.Id, "id")} class="mt-3 scroll-mt-24 type-section text-bone-white"> ${Plugin.Head} </h2> ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Emphasis": "featured",
		"Size": "lg",
		"Surface": "shell",
		"Tape": Plugin.Label,
		"TapeColor": "raw",
		"Grunge": true,
		"Class": "mt-8"
	}, { "default": ($$result) => renderTemplate` <div class="chips"> ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": "RECOMMENDED",
		"Color": "canary",
		"Rotate": "-rotate-2"
	})} <span${addAttribute(["telemetry-tag", Plugin.Badge], "class:list")}>${Plugin.Status}</span> <span${addAttribute(CostTag, "class")}>${Plugin.Cost}</span> </div> <div class="pods mt-8"> <div> <p${addAttribute(Eyebrow, "class")}>WHAT IT IS</p> <div class="prose-flow mt-3 font-body text-body leading-relaxed text-bone-newsprint">${unescapeHTML(Plugin.Body)}</div> <div class="chips mt-6"> ${Plugin.Chips.map((Name) => renderTemplate`<span${addAttribute(FactTag, "class")}>${Name}</span>`)} </div> </div> <div class="well p-4 sm:p-5"> <p${addAttribute(Eyebrow, "class")}>THE DECISION</p> <dl class="mt-4 grid gap-y-4"> <div> <dt${addAttribute(Label, "class")}>HOST</dt> <dd class="mt-1 font-body text-body leading-relaxed text-bone-newsprint"> ${Plugin.Host} </dd> </div> <div> <dt${addAttribute(Label, "class")}>WHAT IT SEES</dt> <dd class="mt-1 font-body text-body leading-relaxed text-zinc-dust"> ${Plugin.Sees} </dd> </div> <div> <dt${addAttribute(Label, "class")}>TRADE-OFF</dt> <dd class="chips mt-2"> ${Plugin.Trade.map((Name) => renderTemplate`<span${addAttribute(LeadTradeTag, "class")}>${Name}</span>`)} </dd> </div> </dl> </div> </div> ` })} </section>  <section class="blueprint-section relative w-full" data-reveal> <p class="section-index">03 // THE OTHER HOSTS</p> <h2 class="mt-3 type-section text-bone-white">What each one gives up</h2> <p class="mt-6 max-w-[46rem] font-body text-body leading-relaxed text-bone-newsprint">
Each of these runs the same core behind less of the turn, and each card names the
				reach it trades away - the host it asks for, what it can see, and what it cannot.
</p> <div class="mt-10 grid gap-10 md:grid-cols-2 xl:grid-cols-3"> ${Others.map((Card) => renderTemplate`${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Emphasis": "standard",
		"Accent": Card.Accent,
		"Tape": Card.Label,
		"TapeColor": Card.Tape,
		"Grunge": true,
		"Class": "flex h-full flex-col"
	}, { "default": ($$result) => renderTemplate` <header class="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-[color:var(--tier-shell-edge)] pb-4"> <span${addAttribute(["telemetry-tag", Card.Badge], "class:list")}>${Card.Status}</span> <span${addAttribute(CostTag, "class")}>${Card.Cost}</span> </header> <h3${addAttribute(Card.Id, "id")} class="mt-6 scroll-mt-24 type-sub text-bone-white"> ${Card.Head} </h3> <dl class="mt-4 grid gap-y-3"> <div> <dt${addAttribute(Label, "class")}>HOST</dt> <dd class="mt-1 font-body text-body leading-relaxed text-bone-newsprint"> ${Card.Host} </dd> </div> <div> <dt${addAttribute(Label, "class")}>WHAT IT SEES</dt> <dd class="mt-1 font-body text-body leading-relaxed text-zinc-dust"> ${Card.Sees} </dd> </div> </dl> <div class="prose-flow mt-5 font-body text-body leading-relaxed text-bone-newsprint">${unescapeHTML(Card.Body)}</div> <div class="well mt-auto p-4"> <p${addAttribute(Label, "class")}>TRADE-OFF</p> <div class="chips mt-2"> ${Card.Trade.map((Name) => renderTemplate`<span${addAttribute(TradeTag, "class")}>${Name}</span>`)} </div> <p${addAttribute(`${Eyebrow} mt-4`, "class")}>CAPABILITIES</p> <div class="chips mt-2"> ${Card.Chips.map((Name) => renderTemplate`<span${addAttribute(FactTag, "class")}>${Name}</span>`)} </div> </div> ` })}`)} </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: README.md; aphrodite.toml.example ([[proxies]])", "SRC: plugins/aphrodite/plugin.yaml (provides_hooks, provides_tools)"] })} </section>  ${renderComponent($$result, "Related", $$Related, { "Links": [
		{
			Href: "/hermes/",
			Label: "HERMES"
		},
		{
			Href: "/plugin/",
			Label: "PLUGIN"
		},
		{
			Href: "/setup/",
			Label: "SETUP"
		}
	] })} ` })} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/flavors.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/flavors.astro";
var $$url = "/flavors";
// \0virtual:astro:page:Source/pages/flavors@_@astro
var page = () => flavors_exports;
export { page };
