import { _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro } from "./Base_Bs2-mKm9.mjs";
// Source/Component/ZineStamp.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineStamp = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineStamp;
	const { Label, Color = "raw", Rotate = "", Class = "" } = Astro.props;
	const Fill = {
		raw: "plate__stamp--raw",
		canary: "plate__stamp--canary",
		teal: "plate__stamp--teal",
		bone: "plate__stamp--bone"
	}[Color];
	return renderTemplate`${maybeRenderHead($$result)}<span${addAttribute([
		"plate__stamp",
		Fill,
		Rotate,
		"max-sm:rotate-0",
		Class
	], "class:list")}> ${Label} </span>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineStamp.astro", void 0);
export { $$ZineStamp as t };
