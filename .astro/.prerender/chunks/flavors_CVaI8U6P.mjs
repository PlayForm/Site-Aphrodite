import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, t as $$Base } from "./Base_DYyCOQNQ.mjs";
import { a as $$Related } from "./DocsSidebar_BegnaZwP.mjs";
import { n as $$PageShell, t as $$ZineTape } from "./ZineTape_CVpY0Eb1.mjs";
import { t as $$PageHeader } from "./PageHeader_BrcAOhPj.mjs";
import { t as $$ZineBox } from "./ZineBox_Bx8tYYbD.mjs";
import { t as $$ZineSource } from "./ZineSource_Cgxm1vKC.mjs";
import { l as ToolNames, s as HookNames } from "./Roster_DWXQuOMb.mjs";
// Source/pages/flavors.astro
var flavors_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Flavors,
	file: () => $$file,
	url: () => $$url
});
var $$Flavors = createComponent(($$result, $$props, $$slots) => {
	const Hosts = [
		{
			Flavor: "HERMES PLUGIN",
			Host: "Hermes Agent",
			Sees: "Everything - hooks, tools, the prompt",
			Status: "TODAY",
			Tone: "text-stamped-canary"
		},
		{
			Flavor: "STANDALONE PROXY",
			Host: "Any OpenAI-compatible client",
			Sees: "The HTTP body - no hook interception",
			Status: "SHIPS TODAY",
			Tone: "text-weathered-teal"
		},
		{
			Flavor: "EMBEDDED HEADROOM",
			Host: "The engine's own core",
			Sees: "Content types and previews, not agent APIs",
			Status: "FOUNDATION",
			Tone: "text-zinc-dust"
		},
		{
			Flavor: "MORE HOSTS // PLANNED",
			Host: "Additional agents",
			Sees: "Whatever the host exposes - the proxy path already works",
			Status: "PLANNED",
			Tone: "text-zinc-dust"
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "FLAVORS // APHRODITE",
		"Description": "The Aphrodite roadmap: a native Hermes plugin today, the standalone proxy for any OpenAI-compatible client, and the embedded Headroom core that keeps the engine portable."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageShell", $$PageShell, { "Rhythm": "wide" }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHeader", $$PageHeader, {
		"Tape": "FLAVORS // THE ROADMAP",
		"Title": "One engine, many hosts",
		"Lead": [
			"A tool call's output becomes part of the model's context, and the engine that rewrites it before the model reads it can live in more than one host.",
			"Aphrodite's compression engine does not belong to one agent.",
			`It is the reason the same CCR core ships in more than one shape: the native Hermes plugin is the flagship flavor today - the deepest integration, the most capabilities - while a standalone listener serves any OpenAI-compatible client, and the engine's core is an embedded fork built to stay portable.`,
			"The table is the whole surface in one shape; the sections after it are the detail behind each row."
		]
	})}  ${maybeRenderHead($$result)}<section class="relative w-full" data-reveal> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "THREE HOSTS // ONE CORE"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Size": "lg",
		"Rotate": "-rotate-[1deg]"
	}, { "default": ($$result) => renderTemplate` <h3 id="surface" class="mb-8 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
What ships, and what each one sees
</h3> <div class="overflow-x-auto"> <table class="w-full border-collapse font-mono text-base"> <thead> <tr class="border-b-2 border-oxblood-dark text-left"> <th class="py-3 pr-4 text-base font-black uppercase tracking-widest text-stamped-canary">FLAVOR</th> <th class="py-3 pr-4 text-base font-black uppercase tracking-widest text-stamped-canary">HOST</th> <th class="py-3 pr-4 text-base font-black uppercase tracking-widest text-stamped-canary">WHAT IT SEES</th> <th class="py-3 text-base font-black uppercase tracking-widest text-stamped-canary">STATUS</th> </tr> </thead> <tbody class="text-bone-newsprint"> ${Hosts.map(({ Flavor, Host, Sees, Status, Tone }) => renderTemplate`<tr class="border-b border-oxblood-dark"> <td class="py-3 pr-4 text-bone-white">${Flavor}</td> <td class="py-3 pr-4">${Host}</td> <td class="py-3 pr-4 text-zinc-dust">${Sees}</td> <td${addAttribute(`py-3 font-black uppercase tracking-widest ${Tone}`, "class")}>${Status}</td> </tr>`)} </tbody> </table> </div> <p class="mt-8 font-body text-base leading-relaxed text-zinc-dust">
The rows are ordered by how much of the turn each host can see, because that is what
					decides which compression the flavor can perform.
</p> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "FLAVOR 01 // HERMES PLUGIN"
	})} <h3 id="hermes" class="mb-8 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
The full integration
</h3> <p class="font-body text-base leading-relaxed text-bone-newsprint">
Six hooks, thirteen tools, the context engine, auto-launched dual proxies - the
					native flavor sees everything the agent sees.
</p> <p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint">
This is the flavor this site documents.
</p> <div class="mt-8 flex flex-wrap gap-6"> <span class="border border-oxblood-dark bg-soot-black px-3 py-1 font-mono text-base uppercase text-bone-newsprint">${HookNames.length} HOOKS</span> <span class="border border-oxblood-dark bg-soot-black px-3 py-1 font-mono text-base uppercase text-bone-newsprint">${ToolNames.length} TOOLS</span> <span class="border border-oxblood-dark bg-soot-black px-3 py-1 font-mono text-base uppercase text-bone-newsprint">CONTEXT ENGINE</span> <span class="border border-oxblood-dark bg-soot-black px-3 py-1 font-mono text-base uppercase text-bone-newsprint">DIRECTIVES</span> </div> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "FLAVOR 02 // STANDALONE PROXY"
	})} <h3 id="proxy" class="mb-8 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
Any OpenAI-compatible client
</h3> <p class="font-body text-base leading-relaxed text-bone-newsprint">
Point <code class="font-mono text-base text-weathered-teal">base_url</code> at
<code class="font-mono text-base text-weathered-teal">:9798</code> (or
<code class="font-mono text-base text-weathered-teal">:9797</code>) and the same
					compression engine sits between the client and its LLM - token and cache
					listeners, SQLite or in-memory storage.
</p> <p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint">
What it cannot do is see inside the agent: no hook interception, no tools, no
					prompt injection.
</p> <div class="mt-8 flex flex-wrap gap-6"> <span class="border border-oxblood-dark bg-soot-black px-3 py-1 font-mono text-base uppercase text-bone-newsprint">OPENAI-COMPATIBLE</span> <span class="border border-oxblood-dark bg-soot-black px-3 py-1 font-mono text-base uppercase text-bone-newsprint">TOKEN :9798</span> <span class="border border-oxblood-dark bg-soot-black px-3 py-1 font-mono text-base uppercase text-bone-newsprint">CACHE :9797</span> </div> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "FOUNDATION // EMBEDDED HEADROOM"
	})} <h3 id="headroom" class="mb-8 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
The portable core
</h3> <p class="font-body text-base leading-relaxed text-bone-newsprint">
Aphrodite embeds Headroom - a custom fork, tracked as a git submodule - as its
					content-transform core:
</p> <ul class="mt-2 space-y-1 font-body text-base leading-relaxed text-bone-newsprint"> <li class="border-l-2 border-oxblood-dark pl-3">the classifier</li> <li class="border-l-2 border-oxblood-dark pl-3">the smart crusher</li> <li class="border-l-2 border-oxblood-dark pl-3">the tokenizer.</li> </ul> <p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint">
The Hermes-specific layer is a thin bridge on top.
</p> <p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint">
It is the reason new host flavors are possible: the engine already speaks in content
					types and previews, not in agent APIs.
</p> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "ROADMAP // PLANNED",
		"Color": "bone"
	})} <h3 id="roadmap" class="mb-8 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
Other agents
</h3> <p class="font-body text-base leading-relaxed text-bone-newsprint">
Beyond Hermes, additional host flavors are planned - the standalone proxy path
					already works with any OpenAI-compatible agent today, and deeper native
					integrations follow the same hook-and-tool pattern the Hermes plugin established.
</p> <p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint">
No dates are promised; when a new flavor ships, its documentation ships with it.
</p> ` })} ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: README.md; aphrodite.toml.example ([[proxies]])", "SRC: plugins/aphrodite/plugin.yaml (provides_hooks, provides_tools)"] })} </section>  ${renderComponent($$result, "Related", $$Related, { "Links": [
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
