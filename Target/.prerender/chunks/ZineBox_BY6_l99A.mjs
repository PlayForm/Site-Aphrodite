import { n as createAstro, r as createComponent } from "./compiler_CWd3RCEz.mjs";
import { C as addAttribute, _ as maybeRenderHead, g as renderTemplate, l as renderComponent, p as renderSlot } from "./server_CNuTCIdA.mjs";
import { t as $$ZineTape } from "./ZineTape_d6PHbVV6.mjs";
// Source/Component/ZineBox.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineBox = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineBox;
	const { Tone = "crimson", Size = "md", Rotate = "", Tape, TapeColor = "raw", TapeSide = "left", Class = "" } = Astro.props;
	const Shadow = {
		crimson: "zine-box-crimson",
		subtle: "zine-box-subtle",
		canary: "zine-box-canary",
		teal: "zine-box-teal"
	}[Tone];
	const Pad = {
		md: "p-6 sm:p-8",
		lg: "p-8 sm:p-12"
	}[Size];
	const Tilt = Rotate === "" ? "max-sm:rotate-0" : `${Rotate} max-sm:rotate-0`;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute([
		"relative border-4 border-blood-crimson bg-carbon-void transition-transform duration-300 hover:rotate-0",
		Pad,
		Shadow,
		Tilt,
		Class
	], "class:list")}> ${Tape !== void 0 && renderTemplate`${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "corner",
		"Label": Tape,
		"Color": TapeColor,
		"Side": TapeSide
	})}`} ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineBox.astro", void 0);
export { $$ZineBox as t };
