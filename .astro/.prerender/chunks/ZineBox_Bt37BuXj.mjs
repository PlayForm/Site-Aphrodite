import { f as createAstro, p as createComponent } from "./Base_DtRxtNeh.mjs";
import { _ as renderTemplate, m as renderSlot, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
// Source/Component/ZineBox.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineBox = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineBox;
	const { Tone = "crimson", Rotate = "" } = Astro.props;
	const Shadow = {
		crimson: "zine-box-crimson",
		subtle: "zine-box-subtle",
		canary: "zine-box-canary",
		teal: "zine-box-teal"
	}[Tone];
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`relative border-4 border-blood-crimson bg-carbon-void p-6 sm:p-8 ${Shadow} ${Rotate} transition-transform duration-300 hover:rotate-0`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineBox.astro", void 0);
export { $$ZineBox as t };
