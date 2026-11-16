import { E as unescapeHTML, _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro } from "./Base_Bs2-mKm9.mjs";
// Source/Component/ZineFold.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineFold = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineFold;
	const { Label, Tag, TagTone, Body } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<details class="fold" data-zine-fold> <summary class="fold__summary"> ${Tag && renderTemplate`<span${addAttribute(["telemetry-tag fold__tag", TagTone && {
		crimson: "telemetry-tag--crimson",
		canary: "telemetry-tag--canary",
		teal: "telemetry-tag--teal",
		bone: "telemetry-tag--bone"
	}[TagTone]], "class:list")}> ${Tag} </span>`} <span class="fold__label">${Label}</span> <span class="fold__marker fold__marker--closed" aria-hidden="true">
+
</span> <span class="fold__marker fold__marker--open" aria-hidden="true">
−
</span> </summary> <div class="fold__body">${unescapeHTML(Body)}</div> </details>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineFold.astro", void 0);
export { $$ZineFold as t };
