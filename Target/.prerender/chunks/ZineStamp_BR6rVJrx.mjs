import { n as createAstro, r as createComponent } from "./compiler_CWd3RCEz.mjs";
import { C as addAttribute, _ as maybeRenderHead, g as renderTemplate } from "./server_CNuTCIdA.mjs";
// Source/Component/ZineStamp.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineStamp = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineStamp;
	const { Label, Color = "raw", Rotate = "" } = Astro.props;
	const Palette = {
		raw: "bg-raw-blood text-bone-white",
		canary: "bg-stamped-canary text-soot-black",
		teal: "bg-weathered-teal text-bone-white",
		bone: "bg-bone-newsprint text-soot-black"
	}[Color];
	return renderTemplate`${maybeRenderHead($$result)}<span${addAttribute(`inline-block border-2 border-black px-4 py-1.5 font-mono text-base font-black uppercase tracking-widest shadow-[4px_4px_0px_#000] sm:text-base ${Palette} ${Rotate}`, "class")}> ${Label} </span>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineStamp.astro", void 0);
export { $$ZineStamp as t };
