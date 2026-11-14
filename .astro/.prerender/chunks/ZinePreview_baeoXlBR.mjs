import { f as createAstro, p as createComponent } from "./Base_DtRxtNeh.mjs";
import { E as unescapeHTML, _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
// Source/Component/ZinePreview.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZinePreview = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZinePreview;
	const { Label, Result, Hash, Color = "canary" } = Astro.props;
	const Palette = {
		canary: "text-stamped-canary",
		teal: "text-weathered-teal",
		raw: "text-raw-blood"
	}[Color];
	return renderTemplate`${maybeRenderHead($$result)}<div class="border-2 border-oxblood-dark bg-asphalt-panel p-3.5"> <div${addAttribute(`mb-1 text-base font-black uppercase tracking-widest ${Palette}`, "class")}>${Label}</div> <div class="border border-oxblood-dark bg-soot-black p-2 font-mono text-base font-bold text-bone-white sm:text-base"> ${Result} </div> ${Hash && renderTemplate`<div class="ccr-marker mt-2 font-mono text-base font-bold text-weathered-teal">${unescapeHTML(Hash)}</div>`} </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZinePreview.astro", void 0);
export { $$ZinePreview as t };
