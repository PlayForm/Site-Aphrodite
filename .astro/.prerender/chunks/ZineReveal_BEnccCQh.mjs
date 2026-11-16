import { E as unescapeHTML, _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro, h as renderScript } from "./Base_B3YGMVwW.mjs";
// Source/Component/ZineReveal.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineReveal = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineReveal;
	const { Cover, Tag = "SUPPRESSED", Raw, Flow = false } = Astro.props;
	return renderTemplate`${Flow ? renderTemplate`${maybeRenderHead($$result)}<div class="border border-oxblood-dark bg-soot-black" data-zine-reveal-flow> <div class="flex items-baseline justify-between gap-3 p-3"> <span class="font-mono text-base text-zinc-dust">${Cover}</span> <span class="type-meta shrink-0 uppercase text-zinc-dust">${Tag}</span> </div> <div class="border-t border-oxblood-dark p-3 font-mono text-base font-bold text-bone-white">${unescapeHTML(Raw)}</div> </div>` : renderTemplate`<div class="group relative cursor-crosshair border border-oxblood-dark bg-soot-black" data-zine-reveal tabindex="0"${addAttribute(`${Tag}: hover or focus to reveal the raw content`, "aria-label")}> <div class="flex items-center justify-between gap-3 p-3 font-mono text-base text-zinc-dust transition-opacity duration-150 group-hover:opacity-10 group-focus:opacity-10 group-[.revealed]:opacity-10"> <span class="truncate">${Cover}</span> <span class="shrink-0 border border-oxblood-dark px-1.5 py-0.5 type-meta uppercase text-zinc-dust"> ${Tag} </span> </div> <div class="pointer-events-none absolute inset-0 flex items-center p-3 font-mono text-base font-bold text-bone-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus:opacity-100 group-[.revealed]:opacity-100"> <div class="w-full">${unescapeHTML(Raw)}</div> </div> <div class="pointer-events-none absolute bottom-1.5 right-2 type-meta text-zinc-dust opacity-0 transition-opacity group-hover:opacity-70 group-focus:opacity-70 group-[.revealed]:opacity-70">
REVEALED
</div> </div>`}${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineReveal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineReveal.astro", void 0);
export { $$ZineReveal as t };
