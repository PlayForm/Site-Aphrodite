import { _ as renderTemplate, d as Fragment, m as renderSlot, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro, o as AllLinks, u as IsActive } from "./Base_Bs2-mKm9.mjs";
import { n as DocsTrail } from "./DocsSidebar_DymFAMH3.mjs";
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
	return renderTemplate`${Trail.length > 1 && renderTemplate`${maybeRenderHead($$result)}<div class="crumbs"> <nav aria-label="Breadcrumb" class="crumbs__trail"> ${Trail.map((Crumb, Position) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` ${Position > 0 && renderTemplate`<span class="crumbs__sep" aria-hidden="true">  ${"/"} </span>`} ${Crumb.Href ? renderTemplate`<a class="crumbs__link"${addAttribute(Crumb.Href, "href")}${addAttribute(PromiseOf(Crumb.Href), "title")}> ${Crumb.Label} </a>` : renderTemplate`<span class="crumbs__current" aria-current="page"> ${Crumb.Label} </span>`} ` })}`)} </nav> ${ActivePromise && renderTemplate`<p class="crumbs__promise"> ${ActiveGroup && renderTemplate`<span class="crumbs__group">${ActiveGroup}</span>`} <span class="crumbs__body">${ActivePromise}</span> </p>`} </div>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/Breadcrumbs.astro", void 0);
// Source/Component/PageShell.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$PageShell = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PageShell;
	const { Rhythm = "wide", Crumbs = false, Grow = false, Blueprint = !Grow } = Astro.props;
	const RhythmClass = `shell--${Rhythm}`;
	return renderTemplate`${maybeRenderHead($$result)}<main${addAttribute([
		"shell",
		RhythmClass,
		Blueprint && "shell--blueprint",
		Grow && "shell--grow"
	], "class:list")}> ${Crumbs && renderTemplate`${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, {})}`} ${renderSlot($$result, $$slots["default"])} </main>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/PageShell.astro", void 0);
// Source/Component/ZineTape.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineTape = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineTape;
	const { Label, Variant = "corner", Color = "raw", Side = "left", Offset = "-top-7", Rotate, Class = "" } = Astro.props;
	const Fill = {
		raw: "plate__tape--fill-raw",
		canary: "plate__tape--fill-canary",
		teal: "plate__tape--fill-teal",
		bone: "plate__tape--fill-bone"
	}[Color];
	const Ink = {
		raw: "plate__tape--ink-raw",
		canary: "plate__tape--ink-canary",
		teal: "plate__tape--ink-teal",
		bone: "plate__tape--ink-bone"
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
	const Lean = Tilt === "" ? "" : `${Tilt} max-sm:rotate-0`;
	const Shape = {
		corner: `plate__tape--corner ${Offset} ${Position} ${Lean} ${Fill}`,
		section: `plate__tape--section ${Lean} ${Fill}`,
		hero: `plate__tape--hero ${Lean} ${Fill}`,
		hash: `plate__tape--hash telemetry-tag telemetry-tag--teal ${Lean}`,
		tab: `plate__tape--tab ${Lean} ${Fill}`,
		strip: `plate__tape--strip tape-strip ${Lean}`,
		kicker: `plate__tape--kicker ${Ink} ${Lean}`
	}[Variant];
	return renderTemplate`${renderComponent($$result, "Element", Variant === "hash" || Variant === "kicker" ? "span" : "div", { "class:list": [Shape, Class] }, { "default": ($$result) => renderTemplate`${Label}` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineTape.astro", void 0);
export { $$PageShell as n, $$ZineTape as t };
