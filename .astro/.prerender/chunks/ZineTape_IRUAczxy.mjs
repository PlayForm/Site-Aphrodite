import { f as createAstro, p as createComponent } from "./Base_DtRxtNeh.mjs";
import { _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
// Source/Component/ZineTape.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineTape = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineTape;
	const { Label, Color = "raw", Side = "left" } = Astro.props;
	const Palette = {
		raw: "bg-raw-blood text-bone-white",
		canary: "bg-stamped-canary text-soot-black",
		teal: "bg-weathered-teal text-bone-white",
		bone: "bg-bone-newsprint text-soot-black"
	}[Color];
	const Position = {
		left: "left-6",
		right: "right-6",
		center: "left-1/2 -translate-x-1/2"
	}[Side];
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`absolute -top-7 ${Position} -rotate-1 border border-black px-3 py-0.5 text-base font-black uppercase tracking-widest shadow-[2px_2px_0px_#000] ${Palette}`, "class")}> ${Label} </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineTape.astro", void 0);
export { $$ZineTape as t };
