import { n as createComponent, t as createAstro } from "./compiler_DE9Ou0YP.mjs";
import { C as addAttribute, _ as maybeRenderHead, g as renderTemplate, l as renderComponent } from "./server_CNuTCIdA.mjs";
import { t as renderScript } from "./script_DodTPwlH.mjs";
import { t as $$ZineStamp } from "./ZineStamp_Dw5ueHhK.mjs";
// Source/Component/SectionNav.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$SectionNav = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionNav;
	const { Sections } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<nav aria-label="On this page" data-section-nav class="sticky top-0 z-30 -mx-5 flex w-full flex-col items-start gap-3 border-b border-oxblood-dark bg-carbon-void px-5 py-3 sm:-mx-8 sm:px-8 lg:-mx-14 lg:flex-row lg:items-center lg:gap-6 lg:px-14"> ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": "ON THIS PAGE",
		"Color": "raw"
	})} <ul class="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-base font-bold uppercase tracking-widest"> ${Sections.map((Section) => renderTemplate`<li> <a${addAttribute(`#${Section.Id}`, "href")} class="text-zinc-dust transition-colors hover:text-bone-white aria-[current=true]:text-stamped-canary"> ${Section.Label} </a> </li>`)} </ul> </nav>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/SectionNav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/SectionNav.astro", void 0);
export { $$SectionNav as t };
