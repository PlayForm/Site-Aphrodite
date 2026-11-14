import { n as createComponent, r as __exportAll } from "./compiler_DE9Ou0YP.mjs";
import { _ as maybeRenderHead, g as renderTemplate, l as renderComponent } from "./server_CNuTCIdA.mjs";
import { t as $$ZineStatBar } from "./ZineStatBar_CZo1DnDs.mjs";
// Source/pages/probe-stat.astro
var probe_stat_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ProbeStat,
	file: () => $$file,
	url: () => $$url
});
var $$ProbeStat = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<main>${renderComponent($$result, "ZineStatBar", $$ZineStatBar, {
		"Label": "TERMINAL",
		"Ratio": "74×",
		"Percent": 74,
		"Color": "canary"
	})}</main>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/probe-stat.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/probe-stat.astro";
var $$url = "/probe-stat";
// \0virtual:astro:page:Source/pages/probe-stat@_@astro
var page = () => probe_stat_exports;
export { page };
