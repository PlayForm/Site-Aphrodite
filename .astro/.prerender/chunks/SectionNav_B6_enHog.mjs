import { _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, f as NavLabels, g as createAstro, h as renderScript } from "./Base_B3YGMVwW.mjs";
import { t as $$ZineStamp } from "./ZineStamp_BtKXaN8a.mjs";
// Source/Component/SectionNav.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$SectionNav = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionNav;
	const { Sections } = Astro.props;
	const Entries = Sections.map((Section) => ({
		Id: Section.Id,
		Label: Section.Label,
		Nav: Section.Nav ?? NavLabels[Section.Id] ?? Section.Label
	}));
	const LinkClass = "type-meta uppercase text-zinc-dust transition-colors hover:text-bone-white aria-[current=true]:text-stamped-canary aria-[current=true]:underline aria-[current=true]:decoration-2 aria-[current=true]:underline-offset-4";
	return renderTemplate`${maybeRenderHead($$result)}<!-- Desktop: the sticky bar. Hidden below \`sm\`, where it becomes a disclosure. --><nav aria-label="On this page" data-section-nav class="section-nav sticky top-0 z-30 -mx-5 hidden w-full items-center gap-6 border-b border-oxblood-dark bg-carbon-void px-5 py-3 sm:-mx-8 sm:flex sm:px-8 lg:-mx-14 lg:px-14"> ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": "ON THIS PAGE",
		"Color": "raw"
	})} <ul class="flex flex-wrap items-center gap-x-5 gap-y-1"> ${Entries.map((Entry) => renderTemplate`<li> <a${addAttribute(`#${Entry.Id}`, "href")}${addAttribute(LinkClass, "class")}${addAttribute(Entry.Label, "title")}> ${Entry.Nav} </a> </li>`)} </ul> </nav> <!-- Mobile: the same index, collapsed to one row until the reader opens it. --> <details data-section-nav class="section-nav sticky top-0 z-30 -mx-5 w-full border-b border-oxblood-dark bg-carbon-void px-5 py-2 sm:hidden"> <summary class="flex cursor-pointer list-none items-center justify-between gap-3 [&amp;::-webkit-details-marker]:hidden"> ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": "ON THIS PAGE",
		"Color": "raw"
	})} <span class="type-meta uppercase text-zinc-dust">${Entries.length} ${Entries.length === 1 ? "SECTION" : "SECTIONS"}</span> </summary> <ul class="flex flex-col pb-1 pt-3"> ${Entries.map((Entry) => renderTemplate`<li class="border-t border-oxblood-dark/40"> <a${addAttribute(`#${Entry.Id}`, "href")}${addAttribute(`${LinkClass} block py-2.5`, "class")}${addAttribute(Entry.Label, "title")}> ${Entry.Nav} </a> </li>`)} </ul> </details>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/SectionNav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/SectionNav.astro", void 0);
export { $$SectionNav as t };
