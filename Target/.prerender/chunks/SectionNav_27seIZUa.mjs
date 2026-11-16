import { _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, f as NavLabels, g as createAstro, h as renderScript } from "./Base_Bs2-mKm9.mjs";
import "./DocsSidebar_DymFAMH3.mjs";
import { t as $$ZineStamp } from "./ZineStamp_DHvPYmuj.mjs";
// Source/Component/SectionNav.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$SectionNav = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionNav;
	const { Sections } = Astro.props;
	const Entries = Sections.map((Section, Position) => ({
		Id: Section.Id,
		Label: Section.Label,
		Nav: Section.Nav ?? NavLabels[Section.Id] ?? Section.Label,
		Ordinal: String(Position + 1).padStart(2, "0")
	}));
	return renderTemplate`${maybeRenderHead($$result)}<!-- Desktop: the sticky bar. Hidden below \`sm\`, where it becomes a disclosure. --><nav aria-label="On this page" data-section-nav class="section-nav section-nav--bar"> ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": "ON THIS PAGE",
		"Color": "raw"
	})} <ul class="section-nav__list"> ${Entries.map((Entry) => renderTemplate`<li class="section-nav__entry"> <span class="section-nav__ordinal" aria-hidden="true"> ${Entry.Ordinal} </span> <a class="section-nav__link"${addAttribute(`#${Entry.Id}`, "href")}${addAttribute(Entry.Label, "title")}> ${Entry.Nav} </a> </li>`)} </ul> </nav> <!-- Mobile: the same index, collapsed to one row until the reader opens it. --> <details data-section-nav class="section-nav section-nav--drawer"> <summary class="section-nav__summary"> ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": "ON THIS PAGE",
		"Color": "raw"
	})} <span class="section-nav__count"> ${Entries.length} ${Entries.length === 1 ? "SECTION" : "SECTIONS"} </span> </summary> <ul class="section-nav__drawer-list"> ${Entries.map((Entry) => renderTemplate`<li class="section-nav__row"> <a${addAttribute(`#${Entry.Id}`, "href")} class="section-nav__link section-nav__link--block"${addAttribute(Entry.Label, "title")}> <span class="section-nav__ordinal section-nav__ordinal--inline" aria-hidden="true"> ${Entry.Ordinal} </span> ${Entry.Nav} </a> </li>`)} </ul> </details>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/SectionNav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/SectionNav.astro", void 0);
export { $$SectionNav as t };
