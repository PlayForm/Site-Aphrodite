import { f as createAstro, p as createComponent } from "./Base_DtRxtNeh.mjs";
import { _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
// Source/Component/Related.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$Related = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Related;
	const { Links } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<!-- RELATED module: the cross-link web node. Rendered at the foot of each
     page's content; the links are the page's natural neighbors, curated
     per page from the registry. --><nav aria-label="Related pages" class="relative w-full border-2 border-oxblood-dark bg-asphalt-panel p-5"> <div class="mb-3 flex items-center gap-2 font-mono text-base font-black uppercase tracking-widest text-zinc-dust"> <span class="h-2 w-2 bg-raw-blood"></span>
RELATED
</div> <div class="flex flex-wrap gap-x-6 gap-y-2"> ${Links.map((Link) => renderTemplate`<a class="font-mono text-base tracking-widest text-zinc-dust transition-colors hover:text-bone-white"${addAttribute(Link.Href, "href")}> <span class="text-oxblood-dark" aria-hidden="true">
■
</span> ${Link.Label} </a>`)} </div> </nav>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/Related.astro", void 0);
export { $$Related as t };
