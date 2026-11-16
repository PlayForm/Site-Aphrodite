import { E as unescapeHTML, _ as renderTemplate, n as spreadAttributes, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro } from "./Base_DYyCOQNQ.mjs";
import { t as $$ZineCopyChip } from "./ZineCopyChip_DvZo_uFd.mjs";
// Source/Component/ZinePreview.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZinePreview = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZinePreview;
	const { Label, Result, Hash, Color = "canary", Enter, Presentation } = Astro.props;
	const Delay = (Presentation ?? (Enter === void 0 ? "static" : "replay")) === "replay" ? Enter ?? 980 : void 0;
	const Palette = {
		canary: "text-stamped-canary",
		teal: "text-weathered-teal",
		raw: "text-raw-blood"
	}[Color];
	const Payload = Hash === void 0 ? "" : Hash.replace(/<[^>]*>/g, "").trim();
	const EnterAttr = Delay === void 0 ? {} : { "data-enter": Delay };
	return renderTemplate`${maybeRenderHead($$result)}<div class="border-2 border-oxblood-dark bg-asphalt-panel p-3.5"${spreadAttributes(EnterAttr)}> <div${addAttribute(`type-meta mb-1.5 uppercase ${Palette}`, "class")}>${Label}</div> <div class="border border-oxblood-dark bg-soot-black p-3 font-mono text-body font-bold text-bone-white"> ${Result} </div> ${Hash && renderTemplate`<details class="group mt-3 border-t border-oxblood-dark pt-2"> <summary class="flex cursor-pointer list-none items-center justify-between gap-3 font-mono text-caption text-zinc-dust transition-colors hover:text-bone-white"> <span>Original retained</span> <span class="shrink-0 group-open:hidden" aria-hidden="true">
+
</span> <span class="hidden shrink-0 group-open:inline" aria-hidden="true">
−
</span> </summary> <div class="mt-2 flex items-start gap-3"> <div class="ccr-marker grow font-mono text-caption font-bold text-weathered-teal">${unescapeHTML(Hash)}</div> ${renderComponent($$result, "ZineCopyChip", $$ZineCopyChip, {
		"Label": "MARKER",
		"Copy": Payload
	})} </div> </details>`} </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZinePreview.astro", void 0);
export { $$ZinePreview as t };
