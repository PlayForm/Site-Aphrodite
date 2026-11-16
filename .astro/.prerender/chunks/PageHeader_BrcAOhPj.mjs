import { E as unescapeHTML, _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro } from "./Base_DYyCOQNQ.mjs";
import { t as $$ZineTape } from "./ZineTape_CVpY0Eb1.mjs";
// Source/Component/PageHeader.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$PageHeader = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PageHeader;
	const { Tape, Title, Lead, Tone = "raw" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<header class="relative flex w-full flex-col items-start"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": Tape,
		"Color": Tone
	})} <h1 class="font-headline text-3xl font-black uppercase tracking-tight text-bone-white drop-shadow-[4px_4px_0px_#520612] sm:text-5xl"> ${Title} </h1> ${Lead.map((Sentence, Index) => renderTemplate`<p${addAttribute([Index === 0 ? "mt-6" : "mt-3", "max-w-3xl font-body text-base leading-relaxed text-bone-newsprint"], "class:list")}>${unescapeHTML(Sentence)}</p>`)} </header>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/PageHeader.astro", void 0);
export { $$PageHeader as t };
