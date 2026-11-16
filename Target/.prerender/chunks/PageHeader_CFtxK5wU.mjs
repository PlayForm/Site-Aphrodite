import { E as unescapeHTML, _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro, o as AllLinks, u as IsActive } from "./Base_Bs2-mKm9.mjs";
import "./DocsSidebar_DymFAMH3.mjs";
import { t as $$ZineTape } from "./ZineTape_BXk9fOqY.mjs";
// Source/Component/PageHeader.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$PageHeader = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PageHeader;
	const { Tape, Title, Lead, Tone = "raw", Index } = Astro.props;
	const Entry = AllLinks.find((Link) => IsActive(Astro.url.pathname, Link));
	const Derived = Entry === void 0 ? void 0 : String(AllLinks.indexOf(Entry) + 1).padStart(2, "0");
	const Coordinate = Index ?? Derived;
	const Total = String(AllLinks.length).padStart(2, "0");
	return renderTemplate`${maybeRenderHead($$result)}<header class="header"> ${Coordinate !== void 0 && renderTemplate`<p class="header__index telemetry-tag"${addAttribute(`Entry ${Coordinate} of ${Total} in the site index`, "title")}>
INDEX ${Coordinate} / ${Total} </p>`} ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": Tape,
		"Color": Tone
	})} <h1 class="header__title"> ${Title} </h1> ${Lead.map((Sentence, Position) => renderTemplate`<p${addAttribute(["header__lead", Position === 0 && "header__lead--first"], "class:list")}>${unescapeHTML(Sentence)}</p>`)} </header>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/PageHeader.astro", void 0);
export { $$PageHeader as t };
