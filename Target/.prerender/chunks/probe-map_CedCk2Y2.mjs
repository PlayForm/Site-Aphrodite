import { n as createComponent, r as __exportAll } from "./compiler_DE9Ou0YP.mjs";
import { _ as maybeRenderHead, g as renderTemplate, l as renderComponent } from "./server_CNuTCIdA.mjs";
import { t as $$ZineBox } from "./ZineBox_CmppvIAU.mjs";
import { t as $$ZineStatBar } from "./ZineStatBar_CZo1DnDs.mjs";
import { t as $$ZineTape } from "./ZineTape_PKiqfpjH.mjs";
// Source/pages/probe-map.astro
var probe_map_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ProbeMap,
	file: () => $$file,
	url: () => $$url
});
var $$ProbeMap = createComponent(($$result, $$props, $$slots) => {
	const Rows = [{
		Type: "A",
		Ratio: "1×",
		Percent: 10
	}, {
		Type: "B",
		Ratio: "2×",
		Percent: 20
	}];
	return renderTemplate`${maybeRenderHead($$result)}<main> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "tab",
		"Label": "I // X",
		"Color": "raw"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "crimson",
		"Size": "lg",
		"Rotate": "-rotate-[0.6deg]",
		"Class": "w-full"
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "strip",
		"Label": "STRIP"
	})} ${Rows.map(({ Type, Ratio, Percent }) => renderTemplate`${renderComponent($$result, "ZineStatBar", $$ZineStatBar, {
		"Label": `${Type} · pair`,
		"Ratio": Ratio,
		"Percent": Percent,
		"Color": "canary"
	})}`)}` })} </main>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/probe-map.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/probe-map.astro";
var $$url = "/probe-map";
// \0virtual:astro:page:Source/pages/probe-map@_@astro
var page = () => probe_map_exports;
export { page };
