import { i as __exportAll, r as createComponent } from "./compiler_CWd3RCEz.mjs";
import { C as addAttribute, T as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent } from "./server_CNuTCIdA.mjs";
import { t as $$Base } from "./Base_7T8xAMbn.mjs";
import { t as $$Related } from "./Related_Bi8U0sIn.mjs";
import { t as $$PageShell } from "./PageShell_F2VgyKk2.mjs";
import { t as $$PageHeader } from "./PageHeader_CfIoxglT.mjs";
import { t as $$ZineTape } from "./ZineTape_d6PHbVV6.mjs";
import { t as $$ZineBox } from "./ZineBox_BY6_l99A.mjs";
import { t as $$ZineDiagramNav } from "./ZineDiagramNav_Dvy8zV3c.mjs";
import { t as tool_relay_default } from "./tool-relay_Cnrq3A0m.mjs";
import { t as marker_format_default } from "./marker-format_C4V_DrOl.mjs";
// Source/pages/tools.astro
var tools_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Tools,
	file: () => $$file,
	url: () => $$url
});
var $$Tools = createComponent(($$result, $$props, $$slots) => {
	const Tools = [
		{
			N: "01",
			Name: "aphrodite_retrieve",
			What: "Expand a CCR marker, or read a file, to full content"
		},
		{
			N: "02",
			Name: "aphrodite_compress",
			What: "Store content in CCR and get a marker back"
		},
		{
			N: "03",
			Name: "aphrodite_stats",
			What: "Session and proxy health counters for the CCR engine"
		},
		{
			N: "04",
			Name: "aphrodite_files",
			What: "List file paths touched this session"
		},
		{
			N: "05",
			Name: "aphrodite_diff",
			What: "Per-turn history of what was compressed"
		},
		{
			N: "06",
			Name: "aphrodite_search",
			What: "Find already-compressed entries by keyword or type"
		},
		{
			N: "07",
			Name: "aphrodite_directive",
			What: "Inspect or change the active behavioral directives"
		},
		{
			N: "08",
			Name: "aphrodite_test",
			What: "Smoke-test the compress and retrieve round trip"
		},
		{
			N: "09",
			Name: "aphrodite_catalog",
			What: "List every CCR entry recorded this session"
		},
		{
			N: "10",
			Name: "aphrodite_reclassify",
			What: "Re-detect type and preview for stored entries"
		},
		{
			N: "11",
			Name: "aphrodite_prefetch",
			What: "Read files now and store them as CCR markers"
		},
		{
			N: "12",
			Name: "aphrodite_prefetch_status",
			What: "Live prefetch schedule - what is loaded and ready"
		},
		{
			N: "13",
			Name: "aphrodite_rebuild",
			What: "Report binary and proxy state (never rebuilds)"
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "TOOLS // APHRODITE",
		"Description": "The thirteen aphrodite_* tools: a thin relay into the Rust dylib with one shared session store, byte-exact marker retrieval, and the <<<CCR:hash|type|size>>> marker contract."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageShell", $$PageShell, { "Rhythm": "wide" }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHeader", $$PageHeader, {
		"Tape": "TOOLS // THE AGENT'S HANDLES",
		"Title": "Thirteen tools",
		"Lead": [`Every tool is a thin relay into the Rust dylib: the plugin registers each tool from the dylib's schema list, and every call dispatches through <code class="font-mono text-base text-weathered-teal">aphrodite_hermes_dispatch_tool</code>, returning the JSON result verbatim.`, `It is the reason all handlers share one session store: content compressed by a hook or by <code class="font-mono text-base text-weathered-teal">aphrodite_compress</code> stays resolvable by <code class="font-mono text-base text-weathered-teal">aphrodite_retrieve</code> for the life of the session.`]
	})}  ${maybeRenderHead($$result)}<section class="relative w-full"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "REGISTRY // 13 ENTRIES"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Size": "lg",
		"Rotate": "-rotate-[1deg]"
	}, { "default": ($$result) => renderTemplate` <div class="overflow-x-auto"> <table class="w-full border-collapse font-mono text-base"> <tbody> ${Tools.map((Tool, I) => renderTemplate`<tr${addAttribute(I < Tools.length - 1 ? "border-b border-oxblood-dark" : "", "class")}> <td class="py-3 pr-4 align-top text-base font-black text-zinc-dust">${Tool.N}</td> <td class="py-3 pr-6 align-top whitespace-nowrap text-weathered-teal">${Tool.Name}</td> <td class="py-3 align-top text-bone-newsprint">${Tool.What}</td> </tr>`)} </tbody> </table> </div> <p class="mt-12 border-t border-oxblood-dark pt-8 text-base leading-relaxed text-zinc-dust">
THERE IS AN INTERNAL 14TH REGISTRY ENTRY, context_engine_pre_llm - THE CONTEXT
					ENGINE'S OWN PRE-LLM HOOK, NOT A TOOL AN AGENT CALLS DIRECTLY.
</p> <figure class="mt-16 border border-oxblood-dark bg-soot-black p-4" data-diagram="tool-relay"> <div class="overflow-x-auto">${unescapeHTML(tool_relay_default)}</div> <figcaption class="mt-6 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
M4 // TOOL RELAY
</figcaption> </figure> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "CONTRACT // THE MARKER"
	})} <h3 id="marker" class="mb-6 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
THE MARKER
</h3> <div class="ccr-marker mb-6 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
&lt;&lt;&lt;CCR:hash|type|size&gt;&gt;&gt;
</div> <div class="space-y-0 border border-oxblood-dark bg-soot-black p-5 font-mono text-base leading-relaxed"> <div class="ccr-marker text-bone-newsprint">&lt;&lt;&lt;<span class="text-stamped-canary">CCR:</span><span class="text-weathered-teal">a1b2c3d4...</span>|<span class="text-bone-white">build</span>|<span class="text-bone-white">12,408</span>&gt;&gt;&gt;</div> <div class="pl-4 text-zinc-dust">[terminal:14L exit code: 0]</div> </div> <ul class="mt-12 space-y-6 font-body text-base text-bone-newsprint"> <li class="border-l-4 border-raw-blood pl-4"> <span class="font-bold text-bone-white">BLAKE3 hash</span> - pattern
<code class="font-mono text-base text-weathered-teal">${"^^[0-9a-fA-F]{8,64}$"}</code>;
						truncated hashes never resolve, exact match only.
</li> <li class="border-l-4 border-raw-blood pl-4"> <span class="font-bold text-bone-white">Byte-exact round-trip</span> -
<code class="font-mono text-base text-weathered-teal">aphrodite_retrieve</code>
returns the original bytes, nested markers expanded recursively.
</li> <li class="border-l-4 border-raw-blood pl-4"> <span class="font-bold text-bone-white">Workspace-confined reads</span> -
<code class="font-mono text-base text-weathered-teal">path</code> reads are
						capped at 10 MiB and refuse paths outside the workspace.
</li> <li class="border-l-4 border-raw-blood pl-4"> <span class="font-bold text-bone-white">Markers don't survive a session restart</span>
- the dylib is loaded once per process, so a new session starts a fresh store.
</li> </ul> <figure class="mt-16 border border-oxblood-dark bg-soot-black p-4" data-diagram="marker-format"> <div class="overflow-x-auto">${unescapeHTML(marker_format_default)}</div> <figcaption class="mt-6 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
M6 // MARKER FORMAT
</figcaption> </figure> <h3 id="schemas" class="mt-20 mb-6 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
SCHEMAS // TWO EXEMPLARS
</h3> <div class="grid grid-cols-1 gap-12 lg:grid-cols-2"> <div> <h4 class="mb-6 font-headline text-lg font-black uppercase text-bone-white">
aphrodite_compress
</h4> <div class="mb-6 space-y-0 border border-oxblood-dark bg-soot-black p-5 font-mono text-base leading-relaxed"> <div><span class="text-zinc-dust">"content":</span> <span class="text-bone-newsprint">${"{ string, minLength 1, required }"}</span></div> <div><span class="text-zinc-dust">"type":</span> <span class="text-bone-newsprint">${"{ enum: code | log | diff | error | json | build_output | text }"}</span></div> <div><span class="text-zinc-dust">"_ccr_center":</span> <span class="text-bone-newsprint">${"{ string, optional label echoed by aphrodite_catalog }"}</span></div> <div class="pt-4 text-zinc-dust">→ returns ${"{ hash, type, size, preview, marker }"}</div> </div> <p class="font-body text-base leading-relaxed text-zinc-dust">
Hashes the content, classifies it (or trusts the type hint), keeps it in the
							session store, and hands back a resolvable marker - park bulky text here instead
							of carrying it in context.
</p> </div> <div> <h4 class="mb-6 font-headline text-lg font-black uppercase text-bone-white">
aphrodite_retrieve
</h4> <div class="mb-6 space-y-0 border border-oxblood-dark bg-soot-black p-5 font-mono text-base leading-relaxed"> <div><span class="text-zinc-dust">"hash":</span> <span class="text-bone-newsprint">${"{ pattern: ^[0-9a-fA-F]{8,64}$ }"}</span></div> <div><span class="text-zinc-dust">"query":</span> <span class="text-bone-newsprint">${"{ string, case-insensitive line filter }"}</span></div> <div><span class="text-zinc-dust">"path":</span> <span class="text-bone-newsprint">${"{ string, direct workspace read, bypassing CCR }"}</span></div> <div class="pt-4 text-zinc-dust">→ ${"{ found: true, source: \"ccr\"|\"path\", hash|path, content }"}</div> <div class="text-zinc-dust">→ ${"{ found: false, error }"}</div> </div> <p class="font-body text-base leading-relaxed text-zinc-dust">
Give hash or path - if both are present, path wins.
</p> <p class="mt-3 font-body text-base leading-relaxed text-zinc-dust">
The query parameter is the cheap way to poke at a large entry without pulling
							all of it into context.
</p> </div> </div> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "RULE // META-TOOLS"
	})} <h3 id="meta-tools" class="mb-6 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
Meta-tool output is auto-expanded
</h3> <p class="font-body text-base leading-relaxed text-bone-newsprint">
Output from meta-tools (like
<code class="font-mono text-base text-weathered-teal">aphrodite_stats</code> or
<code class="font-mono text-base text-weathered-teal">aphrodite_catalog</code>) is
					expanded inline, never compressed - the agent always sees its own engine's status
					in full.
</p> <p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint">
Compressing the catalog would just be the engine hiding its own ledger.
</p> ` })} </section>  ${renderComponent($$result, "Related", $$Related, { "Links": [
		{
			Href: "/plugin/",
			Label: "PLUGIN"
		},
		{
			Href: "/hermes/",
			Label: "HERMES"
		},
		{
			Href: "/workbench/",
			Label: "WORKBENCH"
		}
	] })} ` })} ${renderComponent($$result, "ZineDiagramNav", $$ZineDiagramNav, {})} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/tools.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/tools.astro";
var $$url = "/tools";
// \0virtual:astro:page:Source/pages/tools@_@astro
var page = () => tools_exports;
export { page };
