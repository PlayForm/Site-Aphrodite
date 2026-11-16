import { _ as renderTemplate, d as Fragment, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro } from "./Base_Bs2-mKm9.mjs";
// Source/Component/ZineSource.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineSource = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineSource;
	const { Lines = [], Variant = "inline", Methodology, Title } = Astro.props;
	const Voice = {
		mono: "font-mono text-caption",
		body: "font-body text-caption"
	};
	const Rows = [
		{
			Key: "REVISION",
			Voice: "mono",
			Values: Methodology?.Revision ? [Methodology.Revision] : []
		},
		{
			Key: "METHOD",
			Voice: "body",
			Values: Methodology?.Method ? [Methodology.Method] : []
		},
		{
			Key: "SOURCES",
			Voice: "mono",
			Values: Methodology?.Sources ?? []
		},
		{
			Key: "REPRODUCE",
			Voice: "mono",
			Values: Methodology?.Commands ?? []
		},
		{
			Key: "LIMITATIONS",
			Voice: "body",
			Values: Methodology?.Limitations ?? []
		}
	].filter((Row) => Row.Values.length > 0);
	return renderTemplate`${Variant === "methodology" ? renderTemplate`${maybeRenderHead($$result)}<section class="mt-12 border-t border-oxblood-dark pt-8" data-zine-source="methodology"> ${Title && renderTemplate`<h3 class="section-kicker">${Title}</h3>`} ${Lines.length > 0 && renderTemplate`<div class="break-token mt-3 space-y-1 font-mono text-caption leading-relaxed text-zinc-dust"> ${Lines.map((Line) => renderTemplate`<p>${Line}</p>`)} </div>`} ${Rows.length > 0 && renderTemplate`<dl class="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-[9rem_1fr]"> ${Rows.map((Row) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` <dt class="type-meta text-zinc-dust">${Row.Key}</dt> <dd${addAttribute([Voice[Row.Voice], "space-y-1 leading-relaxed text-bone-newsprint"], "class:list")}> ${Row.Values.map((Value) => renderTemplate`<p${addAttribute(Row.Voice === "mono" ? "break-token" : "", "class")}>${Value}</p>`)} </dd> ` })}`)} </dl>`} </section>` : renderTemplate`<div class="break-token mt-12 space-y-1 border-t border-oxblood-dark pt-8 font-mono text-caption leading-relaxed text-zinc-dust"> ${Lines.map((Line) => renderTemplate`<p>${Line}</p>`)} </div>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineSource.astro", void 0);
export { $$ZineSource as t };
