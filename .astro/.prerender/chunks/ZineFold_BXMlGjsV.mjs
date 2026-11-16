import { E as unescapeHTML, _ as renderTemplate, v as maybeRenderHead } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro } from "./Base_B3YGMVwW.mjs";
// Source/Component/ZineFold.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineFold = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineFold;
	const { Label, Tag, Body } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<details class="group border-t border-oxblood-dark" data-zine-fold> <summary class="flex cursor-pointer list-none items-baseline gap-3 py-3 text-bone-newsprint transition-colors hover:text-bone-white"> ${Tag && renderTemplate`<span class="type-meta shrink-0 uppercase text-zinc-dust">${Tag}</span>`} <span class="grow font-body text-base font-bold leading-snug">${Label}</span> <span class="shrink-0 font-mono text-base text-zinc-dust group-open:hidden" aria-hidden="true">+</span> <span class="hidden shrink-0 font-mono text-base text-zinc-dust group-open:inline" aria-hidden="true">−</span> </summary> <div class="pb-4 font-body text-base leading-relaxed text-bone-newsprint">${unescapeHTML(Body)}</div> </details>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineFold.astro", void 0);
export { $$ZineFold as t };
