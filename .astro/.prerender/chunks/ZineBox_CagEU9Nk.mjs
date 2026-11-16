import { _ as renderTemplate, m as renderSlot, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro } from "./Base_B3YGMVwW.mjs";
import { t as $$ZineTape } from "./ZineTape_SD5UQe0y.mjs";
// Source/Component/ZineBox.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineBox = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineBox;
	const { Tone, Size = "md", Rotate, Tape, TapeColor = "raw", TapeSide = "left", Class = "", Wipe = false, Surface = "plain", Emphasis = "standard", Accent = "crimson", Tilt, Hover = false } = Astro.props;
	const Pad = {
		md: "p-6 sm:p-8",
		lg: "p-8 sm:p-12"
	}[Size];
	const Fill = {
		plain: "bg-carbon-void",
		inset: "bg-soot-black",
		paper: "bg-asphalt-panel"
	}[Surface];
	const Boundary = {
		none: "border-oxblood-dark",
		crimson: "border-blood-crimson",
		canary: "border-stamped-canary",
		teal: "border-weathered-teal"
	}[Accent];
	const Plane = Tone !== void 0 ? {
		crimson: "zine-box-crimson",
		subtle: "zine-box-subtle",
		canary: "zine-box-canary",
		teal: "zine-box-teal"
	}[Tone] : {
		none: "zine-box-subtle",
		crimson: "zine-box-crimson",
		canary: "zine-box-canary",
		teal: "zine-box-teal"
	}[Accent];
	const Lean = Rotate !== void 0 && Rotate !== "" ? Rotate : Tilt === void 0 ? Emphasis === "featured" ? "-rotate-[1.2deg]" : "" : {
		none: "",
		left: "-rotate-[1.2deg]",
		right: "rotate-[0.8deg]"
	}[Tilt];
	const Transform = Lean === "" ? "max-sm:rotate-0" : `${Lean} max-sm:rotate-0`;
	const Frame = Emphasis === "quiet" ? ["emphasis-quiet"] : [
		"border-4",
		Boundary,
		Fill,
		Plane,
		Transform,
		Hover && "transition-transform duration-300 hover:rotate-0"
	];
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute([
		"relative",
		...Frame,
		Pad,
		Wipe && "motion-wipe-host",
		Class
	], "class:list")}${addAttribute(Emphasis, "data-emphasis")}> ${Wipe && renderTemplate`<span class="motion-wipe" data-wipe aria-hidden="true"></span>`} ${Tape !== void 0 && renderTemplate`${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "corner",
		"Label": Tape,
		"Color": TapeColor,
		"Side": TapeSide
	})}`} ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineBox.astro", void 0);
export { $$ZineBox as t };
