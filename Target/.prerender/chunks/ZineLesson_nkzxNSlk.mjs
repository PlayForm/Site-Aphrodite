import { _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro } from "./Base_Bs2-mKm9.mjs";
// Source/Component/ZineLesson.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineLesson = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineLesson;
	const { Label, Text, Lines, Color = "canary" } = Astro.props;
	const Palette = {
		canary: "bg-stamped-canary text-soot-black",
		raw: "bg-raw-blood text-bone-white",
		teal: "bg-weathered-teal text-soot-black"
	}[Color];
	return renderTemplate`${maybeRenderHead($$result)}<aside class="grunge grunge--faint relative flex flex-col border-l-4 border-blood-crimson bg-asphalt-panel p-4" data-grunge> <span${addAttribute(`relative z-10 -mb-2 self-start -rotate-1 border-2 border-black px-3 py-1 font-mono text-base font-black uppercase tracking-widest shadow-[3px_3px_0px_#000] sm:-rotate-2 ${Palette}`, "class")}> ${Label} </span> <div class="border border-oxblood-dark bg-soot-black p-3"> ${Lines && Lines.length > 0 ? renderTemplate`<ul class="flex flex-col gap-2 font-body text-base leading-relaxed text-bone-newsprint"> ${Lines.map((Line) => renderTemplate`<li class="border-l-2 border-oxblood-dark pl-3">${Line}</li>`)} </ul>` : renderTemplate`<p class="font-body text-base leading-relaxed text-bone-newsprint">${Text}</p>`} </div> </aside>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineLesson.astro", void 0);
export { $$ZineLesson as t };
