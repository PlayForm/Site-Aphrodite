import { n as createAstro, r as createComponent } from "./compiler_CWd3RCEz.mjs";
import { C as addAttribute, _ as maybeRenderHead, g as renderTemplate, l as renderComponent, u as Fragment } from "./server_CNuTCIdA.mjs";
import { c as IsActive, o as AllLinks } from "./Base_7T8xAMbn.mjs";
import { n as DocsTrail } from "./DocsSidebar_Ck3HYDpL.mjs";
// Source/Component/Breadcrumbs.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$Breadcrumbs = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Breadcrumbs;
	const DocsId = (Path) => {
		const Rest = Path.replace(/^\/docs\/?/, "").replace(/\/+$/, "");
		return Rest === "" ? "index" : Rest;
	};
	const IsDocs = /^\/docs(\/|$)/.test(Astro.url.pathname);
	const Active = AllLinks.find((Link) => IsActive(Astro.url.pathname, Link));
	const Trail = IsDocs ? await DocsTrail(DocsId(Astro.url.pathname)) : Active && Active.Href !== "/" ? [{
		Label: "OVERVIEW",
		Href: "/"
	}, { Label: Active.Label }] : [];
	return renderTemplate`${Trail.length > 1 && renderTemplate`${maybeRenderHead($$result)}<nav aria-label="Breadcrumb" class="flex flex-wrap items-center gap-2 font-mono text-base uppercase tracking-widest text-zinc-dust"> ${Trail.map((Crumb, Position) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` ${Position > 0 && renderTemplate`<span class="text-oxblood-dark" aria-hidden="true">
//
</span>`} ${Crumb.Href ? renderTemplate`<a class="transition-colors hover:text-bone-white"${addAttribute(Crumb.Href, "href")}> ${Crumb.Label} </a>` : renderTemplate`<span class="text-bone-newsprint" aria-current="page"> ${Crumb.Label} </span>`} ` })}`)} </nav>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/Breadcrumbs.astro", void 0);
export { $$Breadcrumbs as t };
