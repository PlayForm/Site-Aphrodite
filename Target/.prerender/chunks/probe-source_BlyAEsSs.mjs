import { n as createComponent, r as __exportAll } from "./compiler_DE9Ou0YP.mjs";
import { _ as maybeRenderHead, g as renderTemplate, l as renderComponent } from "./server_CNuTCIdA.mjs";
import { t as $$ZineSource } from "./ZineSource_BCTAhSKW.mjs";
// Source/pages/probe-source.astro
var probe_source_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ProbeSource,
	file: () => $$file,
	url: () => $$url
});
var $$ProbeSource = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<main>${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: README.md:1-2."] })}</main>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/probe-source.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/probe-source.astro";
var $$url = "/probe-source";
// \0virtual:astro:page:Source/pages/probe-source@_@astro
var page = () => probe_source_exports;
export { page };
