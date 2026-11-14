import { c as IsActive, f as createAstro, o as AllLinks, p as createComponent } from "./Base_DtRxtNeh.mjs";
import { _ as renderTemplate, v as maybeRenderHead } from "./server_DdG-dV1Z.mjs";
// Source/Component/Breadcrumbs.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Breadcrumbs;
	const Active = AllLinks.find((Link) => IsActive(Astro.url.pathname, Link));
	return renderTemplate`${Active && Active.Href !== "/" && renderTemplate`${maybeRenderHead($$result)}<nav aria-label="Breadcrumb" class="flex items-center gap-2 font-mono text-base uppercase tracking-widest text-zinc-dust"> <a class="transition-colors hover:text-bone-white" href="/">
OVERVIEW
</a> <span class="text-oxblood-dark" aria-hidden="true">
//
</span> <span class="text-bone-newsprint" aria-current="page"> ${Active.Label} </span> </nav>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/Breadcrumbs.astro", void 0);
export { $$Breadcrumbs as t };
