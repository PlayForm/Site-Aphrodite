import { n as createComponent, t as createAstro } from "./compiler_DE9Ou0YP.mjs";
import { g as renderTemplate, l as renderComponent } from "./server_CNuTCIdA.mjs";
// Source/Component/ZineTape.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineTape = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineTape;
	const { Label, Variant = "corner", Color = "raw", Side = "left", Offset = "-top-7", Rotate } = Astro.props;
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
	const DefaultTilt = {
		corner: "-rotate-1",
		section: "-rotate-1",
		hero: "-rotate-2",
		hash: "rotate-1",
		tab: "-rotate-1",
		strip: "-rotate-1"
	}[Variant];
	const Tilt = Rotate ?? DefaultTilt;
	const Shape = {
		corner: `absolute ${Offset} ${Position} z-10 ${Tilt} border border-black px-3 py-0.5 text-base font-black uppercase tracking-widest shadow-[2px_2px_0px_#000] ${Palette}`,
		section: `mb-12 ${Tilt} border border-black px-3 py-1 text-base font-black uppercase tracking-widest shadow-[3px_3px_0px_#000] ${Palette}`,
		hero: `${Tilt} border-2 border-black px-4 py-1.5 font-mono text-base font-black uppercase tracking-widest shadow-[4px_4px_0px_#000] ${Palette}`,
		hash: "rotate-1 border-2 border-black bg-carbon-void px-4 py-1.5 font-mono text-base font-bold uppercase tracking-widest text-weathered-teal shadow-[4px_4px_0px_#000]",
		tab: `relative z-10 -mb-7 ml-6 inline-block border border-black px-4 py-1.5 font-mono text-base font-black uppercase tracking-widest shadow-[3px_3px_0px_#000] ${Tilt} max-sm:rotate-0 ${Palette}`,
		strip: `tape-strip absolute -top-6 left-0 z-10 ${Tilt} border-b border-t border-bone-newsprint/30 px-4 py-1 text-base font-black uppercase tracking-widest text-bone-newsprint`
	}[Variant];
	return renderTemplate`${renderComponent($$result, "Element", Variant === "hash" ? "span" : "div", { "class": Shape }, { "default": ($$result) => renderTemplate`${Label}` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineTape.astro", void 0);
export { $$ZineTape as t };
