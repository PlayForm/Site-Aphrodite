import { _ as renderTemplate, d as Fragment, m as renderSlot, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro, o as AllLinks, u as IsActive } from "./Base_B3YGMVwW.mjs";
import { n as DocsTrail } from "./DocsSidebar_DfVitkgG.mjs";
// Source/Component/Breadcrumbs.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$Breadcrumbs = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Breadcrumbs;
	const DocsId = (Path) => {
		const Rest = Path.replace(/^\/docs\/?/, "").replace(/\/+$/, "");
		return Rest === "" ? "index" : Rest;
	};
	const PromiseOf = (Href) => Href === void 0 ? void 0 : AllLinks.find((Link) => Link.Href === Href)?.Promise;
	const IsDocs = /^\/docs(\/|$)/.test(Astro.url.pathname);
	const Active = AllLinks.find((Link) => IsActive(Astro.url.pathname, Link));
	const Trail = IsDocs ? await DocsTrail(DocsId(Astro.url.pathname)) : Active && Active.Href !== "/" ? [{
		Label: "OVERVIEW",
		Href: "/"
	}, { Label: Active.Label }] : [];
	const ActivePromise = !IsDocs && Active && Active.Href !== "/" ? Active.Promise : void 0;
	const ActiveGroup = !IsDocs && Active && Active.Href !== "/" ? Active.Group : void 0;
	return renderTemplate`${Trail.length > 1 && renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col gap-2"> <nav aria-label="Breadcrumb" class="type-meta flex flex-wrap items-center gap-2 uppercase text-zinc-dust"> ${Trail.map((Crumb, Position) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` ${Position > 0 && renderTemplate`<span class="text-oxblood-dark" aria-hidden="true">
//
</span>`} ${Crumb.Href ? renderTemplate`<a class="transition-colors hover:text-bone-white"${addAttribute(Crumb.Href, "href")}${addAttribute(PromiseOf(Crumb.Href), "title")}> ${Crumb.Label} </a>` : renderTemplate`<span class="text-bone-newsprint" aria-current="page"> ${Crumb.Label} </span>`} ` })}`)} </nav> ${ActivePromise && renderTemplate`<p class="flex max-w-3xl flex-col gap-1"> ${ActiveGroup && renderTemplate`<span class="type-meta uppercase text-weathered-teal">${ActiveGroup}</span>`} <span class="type-body text-pretty text-zinc-dust">${ActivePromise}</span> </p>`} </div>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/Breadcrumbs.astro", void 0);
// Source/Component/PageShell.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$PageShell = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PageShell;
	const { Rhythm = "wide", Crumbs = false, Grow = false } = Astro.props;
	const RhythmClass = {
		wide: "gap-40 py-24 lg:gap-64 lg:py-40",
		dense: "gap-24 py-32 lg:gap-40 lg:py-56",
		hero: "gap-24 pb-32 pt-16 lg:gap-40 lg:pb-56 lg:pt-24"
	}[Rhythm];
	return renderTemplate`${maybeRenderHead($$result)}<main${addAttribute([
		"relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-5 sm:px-8 lg:px-14",
		RhythmClass,
		Grow && "flex-1"
	], "class:list")}> ${Crumbs && renderTemplate`${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, {})}`} ${renderSlot($$result, $$slots["default"])} </main>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/PageShell.astro", void 0);
// Source/Component/ZineTape.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineTape = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineTape;
	const { Label, Variant = "corner", Color = "raw", Side = "left", Offset = "-top-7", Rotate } = Astro.props;
	const Palette = {
		raw: "bg-raw-blood text-bone-white",
		canary: "bg-stamped-canary text-soot-black",
		teal: "bg-weathered-teal text-bone-white",
		bone: "bg-bone-newsprint text-soot-black"
	}[Color];
	const Ink = {
		raw: "text-zinc-dust",
		canary: "text-stamped-canary",
		teal: "text-weathered-teal",
		bone: "text-bone-newsprint"
	}[Color];
	const Position = {
		left: "left-6",
		right: "right-6",
		center: "left-1/2 -translate-x-1/2"
	}[Side];
	const DefaultTilt = {
		corner: "-rotate-1",
		section: "-rotate-1",
		hero: "-rotate-2",
		hash: "rotate-1",
		tab: "-rotate-1",
		strip: "-rotate-1",
		kicker: ""
	}[Variant];
	const Tilt = Rotate ?? DefaultTilt;
	const Shape = {
		corner: `absolute ${Offset} ${Position} z-10 ${Tilt} border border-black px-3 py-0.5 text-base font-black uppercase tracking-widest shadow-[2px_2px_0px_#000] ${Palette}`,
		section: `mb-12 ${Tilt} border border-black px-3 py-1 text-base font-black uppercase tracking-widest shadow-[3px_3px_0px_#000] ${Palette}`,
		hero: `${Tilt} border-2 border-black px-4 py-1.5 font-mono text-base font-black uppercase tracking-widest shadow-[4px_4px_0px_#000] ${Palette}`,
		hash: "rotate-1 border-2 border-black bg-carbon-void px-4 py-1.5 font-mono text-base font-bold uppercase tracking-widest text-weathered-teal shadow-[4px_4px_0px_#000]",
		tab: `relative z-10 -mb-7 ml-6 inline-block border border-black px-4 py-1.5 font-mono text-base font-black uppercase tracking-widest shadow-[3px_3px_0px_#000] ${Tilt} max-sm:rotate-0 ${Palette}`,
		strip: `tape-strip absolute -top-6 left-0 z-10 ${Tilt} border-b border-t border-bone-newsprint/30 px-4 py-1 text-base font-black uppercase tracking-widest text-bone-newsprint`,
		kicker: `inline-block font-mono text-base font-black uppercase tracking-widest ${Ink} ${Tilt}`
	}[Variant];
	return renderTemplate`${renderComponent($$result, "Element", Variant === "hash" || Variant === "kicker" ? "span" : "div", { "class": Shape }, { "default": ($$result) => renderTemplate`${Label}` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineTape.astro", void 0);
export { $$PageShell as n, $$ZineTape as t };
