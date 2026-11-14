import { n as createComponent, r as __exportAll } from "./compiler_DE9Ou0YP.mjs";
import { _ as maybeRenderHead, g as renderTemplate, l as renderComponent } from "./server_CNuTCIdA.mjs";
import { t as $$PageShell } from "./PageShell_C9X8T8VS.mjs";
import { t as $$ZinePipeline } from "./ZinePipeline_eW48lGxb.mjs";
import { t as $$ZineBox } from "./ZineBox_CmppvIAU.mjs";
import { t as $$ZineTape } from "./ZineTape_PKiqfpjH.mjs";
// Source/pages/probe-loop.astro
var probe_loop_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ProbeLoop,
	file: () => $$file,
	url: () => $$url
});
var $$ProbeLoop = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "PageShell", $$PageShell, { "Rhythm": "wide" }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "tab",
		"Label": "IV // LOOP",
		"Color": "raw",
		"Rotate": "rotate-1"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "crimson",
		"Size": "lg",
		"Rotate": "rotate-[0.4deg]",
		"Class": "w-full"
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<div class="mt-16">${renderComponent($$result, "ZinePipeline", $$ZinePipeline, { "Mode": "decide" })}</div> ` })} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/probe-loop.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/probe-loop.astro";
var $$url = "/probe-loop";
// \0virtual:astro:page:Source/pages/probe-loop@_@astro
var page = () => probe_loop_exports;
export { page };
