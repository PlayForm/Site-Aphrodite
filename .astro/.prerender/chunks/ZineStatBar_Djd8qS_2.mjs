import { _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro, h as renderScript } from "./Base_B3YGMVwW.mjs";
// Source/Component/ZineStatBar.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineStatBar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineStatBar;
	const { Label, Ratio, Percent, Color = "teal", Fill = "static" } = Astro.props;
	const Palette = {
		teal: "bg-weathered-teal",
		raw: "bg-raw-blood",
		canary: "bg-stamped-canary"
	}[Color];
	const Text = {
		teal: "text-weathered-teal",
		raw: "text-raw-blood",
		canary: "text-stamped-canary"
	}[Color];
	const Width = Math.max(0, Math.min(100, Percent));
	return renderTemplate`${maybeRenderHead($$result)}<div data-astro-cid-lpyltiad> <div class="mb-1 flex justify-between text-base font-bold" data-astro-cid-lpyltiad> <span class="text-bone-newsprint" data-astro-cid-lpyltiad>${Label}</span> <span${addAttribute(Text, "class")} data-astro-cid-lpyltiad>${Ratio}</span> </div> <div class="flex h-4 w-full overflow-hidden border border-oxblood-dark bg-soot-black" data-astro-cid-lpyltiad> ${Fill === "scroll" ? renderTemplate`<div${addAttribute(`zine-stat-fill h-full ${Palette}`, "class")}${addAttribute(`width: ${Width}%;`, "style")}${addAttribute(Width, "data-stat-fill")} aria-hidden="true" data-astro-cid-lpyltiad></div>` : renderTemplate`<div${addAttribute(`h-full ${Palette}`, "class")}${addAttribute(`width: ${Width}%;`, "style")} data-astro-cid-lpyltiad></div>`} </div> </div>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineStatBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineStatBar.astro", void 0);
export { $$ZineStatBar as t };
