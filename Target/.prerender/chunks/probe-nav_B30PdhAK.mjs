import { n as createComponent, r as __exportAll } from "./compiler_DE9Ou0YP.mjs";
import { _ as maybeRenderHead, g as renderTemplate, l as renderComponent } from "./server_CNuTCIdA.mjs";
import { t as $$SectionNav } from "./SectionNav_BC-VlOUc.mjs";
// Source/pages/probe-nav.astro
var probe_nav_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ProbeNav,
	file: () => $$file,
	url: () => $$url
});
var $$ProbeNav = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<main>${renderComponent($$result, "SectionNav", $$SectionNav, { "Sections": [{
		Id: "a",
		Label: "A"
	}] })}<section id="a">x</section></main>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/probe-nav.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/probe-nav.astro";
var $$url = "/probe-nav";
// \0virtual:astro:page:Source/pages/probe-nav@_@astro
var page = () => probe_nav_exports;
export { page };
