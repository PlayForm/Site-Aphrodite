import { n as createAstro, r as createComponent } from "./compiler_CWd3RCEz.mjs";
import { _ as maybeRenderHead, g as renderTemplate } from "./server_CNuTCIdA.mjs";
// Source/Component/ZineSource.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineSource = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineSource;
	const { Lines } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="mt-12 space-y-1 border-t border-oxblood-dark pt-8 text-base leading-relaxed text-zinc-dust"> ${Lines.map((Line) => renderTemplate`<p>${Line}</p>`)} </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineSource.astro", void 0);
export { $$ZineSource as t };
