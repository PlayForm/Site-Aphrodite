import { n as createComponent, t as createAstro } from "./compiler_DE9Ou0YP.mjs";
import { C as addAttribute, _ as maybeRenderHead, g as renderTemplate } from "./server_CNuTCIdA.mjs";
import { t as renderScript } from "./script_DodTPwlH.mjs";
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
	return renderTemplate`${maybeRenderHead($$result)}<div> <div class="mb-1 flex justify-between text-base font-bold"> <span class="text-bone-newsprint">${Label}</span> <span${addAttribute(Text, "class")}>${Ratio}</span> </div> <div class="flex h-4 w-full overflow-hidden border border-oxblood-dark bg-soot-black"> ${Fill === "scroll" ? renderTemplate`<div class="zine-stat-fill h-full" style="width: 0%;"${addAttribute(Percent, "data-stat-fill")} aria-hidden="true"></div>` : renderTemplate`<div${addAttribute(`h-full ${Palette}`, "class")}${addAttribute(`width: ${Percent}%;`, "style")}></div>`} </div> </div>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineStatBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineStatBar.astro", void 0);
export { $$ZineStatBar as t };
