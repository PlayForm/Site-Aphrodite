import { n as createAstro, r as createComponent } from "./compiler_CWd3RCEz.mjs";
import { C as addAttribute, _ as maybeRenderHead, g as renderTemplate, l as renderComponent, p as renderSlot } from "./server_CNuTCIdA.mjs";
import { t as $$Breadcrumbs } from "./Breadcrumbs_DbUaTB1w.mjs";
// Source/Component/PageShell.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$PageShell = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PageShell;
	const { Rhythm = "wide", Crumbs = false, Grow = false } = Astro.props;
	const RhythmClass = {
		wide: "gap-40 py-24 lg:gap-64 lg:py-40",
		dense: "gap-24 py-32 lg:gap-40 lg:py-56",
		hero: "gap-24 pb-32 pt-16 lg:gap-40 lg:pb-56 lg:pt-24"
	}[Rhythm];
	return renderTemplate`${maybeRenderHead($$result)}<main${addAttribute([
		"relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-5 sm:px-8 lg:px-14",
		RhythmClass,
		Grow && "flex-1"
	], "class:list")}> ${Crumbs && renderTemplate`${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, {})}`} ${renderSlot($$result, $$slots["default"])} </main>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/PageShell.astro", void 0);
export { $$PageShell as t };
