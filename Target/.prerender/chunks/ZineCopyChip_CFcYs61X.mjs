import { _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro } from "./Base_Bs2-mKm9.mjs";
// Source/Component/ZineCopyChip.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineCopyChip = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineCopyChip;
	const { Label, Copy, Aria, Color = "teal" } = Astro.props;
	const Name = Aria ?? (Label.toUpperCase() === "COPY" ? "Copy to the clipboard" : `Copy ${Label} to the clipboard`);
	const Palette = {
		teal: "text-weathered-teal hover:bg-weathered-teal",
		canary: "text-stamped-canary hover:bg-stamped-canary",
		raw: "text-raw-blood hover:bg-raw-blood",
		bone: "text-bone-newsprint hover:bg-bone-newsprint"
	}[Color];
	const HoverText = {
		teal: "hover:text-bone-white",
		canary: "hover:text-soot-black",
		raw: "hover:text-bone-white",
		bone: "hover:text-soot-black"
	}[Color];
	return renderTemplate`${maybeRenderHead($$result)}<button${addAttribute(`group inline-flex items-center gap-1.5 border border-oxblood-dark bg-soot-black px-2 py-1 font-mono text-meta font-bold transition-colors ${Palette} ${HoverText}`, "class")}${addAttribute(Copy ?? Label, "data-copy")} type="button"${addAttribute(Name, "aria-label")}> <span aria-hidden="true" class="text-base opacity-40 group-hover:opacity-90">
⧉
</span> <span class="opacity-60 group-hover:opacity-100">${Label}</span> </button>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineCopyChip.astro", void 0);
export { $$ZineCopyChip as t };
