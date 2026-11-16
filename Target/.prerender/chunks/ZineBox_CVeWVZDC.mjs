import { _ as renderTemplate, m as renderSlot, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro } from "./Base_Bs2-mKm9.mjs";
import { t as $$ZineTape } from "./ZineTape_BXk9fOqY.mjs";
// Source/Component/ZineBox.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineBox = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineBox;
	const { Tone, Size = "md", Rotate, Tape, TapeColor = "raw", TapeSide = "left", Class = "", Wipe = false, Surface = "plain", Emphasis = "standard", Accent = Emphasis === "featured" ? "crimson" : "none", Tilt, Hover = true, Grunge = Accent === "none" && Emphasis !== "quiet", GrungeCorner } = Astro.props;
	const GrungeSurface = Emphasis === "quiet" || /(^|\s)bg-transparent(\s|$)/.test(Class) ? "transparent" : "filled";
	const Pad = {
		md: "plate--size-md",
		lg: "plate--size-lg"
	}[Size];
	const Fill = {
		plain: "plate--surface-plain",
		inset: "plate--surface-inset",
		paper: "plate--surface-paper",
		canvas: "tier-canvas",
		shell: "tier-shell",
		well: "tier-well"
	}[Surface];
	const Boundary = {
		none: "plate--accent-none",
		crimson: "plate--accent-crimson",
		canary: "plate--accent-canary",
		teal: "plate--accent-teal"
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
	const Frame = Emphasis === "quiet" ? ["plate--quiet"] : [
		`plate--${Emphasis}`,
		Boundary,
		Fill,
		Plane,
		Transform,
		Lean !== "" && Hover && "plate--straighten"
	];
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute([
		"plate",
		...Frame,
		Pad,
		Wipe && "motion-wipe-host",
		Grunge && "grunge",
		Grunge && Surface === "paper" && "grunge--faint",
		Class
	], "class:list")}${addAttribute(Emphasis, "data-emphasis")}${addAttribute(Surface, "data-surface")}${addAttribute(Grunge ? "" : void 0, "data-grunge")}${addAttribute(Grunge ? GrungeSurface : void 0, "data-grunge-surface")}${addAttribute(Grunge ? GrungeCorner : void 0, "data-grunge-corner")}${addAttribute(Grunge ? Accent === "none" ? "edge" : "scatter" : void 0, "data-grunge-mode")}> ${Wipe && renderTemplate`<span class="motion-wipe" data-wipe aria-hidden="true"></span>`} ${Tape !== void 0 && renderTemplate`${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "corner",
		"Label": Tape,
		"Color": TapeColor,
		"Side": TapeSide
	})}`} ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineBox.astro", void 0);
export { $$ZineBox as t };
