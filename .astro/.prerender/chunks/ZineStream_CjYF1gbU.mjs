import { f as createAstro, p as createComponent } from "./Base_DtRxtNeh.mjs";
import { E as unescapeHTML, _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
// Source/Component/ZineStream.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineStream = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineStream;
	const { Lines } = Astro.props;
	const Tone = {
		plain: "",
		dim: "opacity-70",
		fade: "opacity-40",
		mute: "opacity-25",
		result: "text-bone-white",
		canary: "text-stamped-canary",
		teal: "text-weathered-teal"
	};
	return renderTemplate`${maybeRenderHead($$result)}<div class="ccr-marker border border-oxblood-dark bg-soot-black p-3.5 font-mono text-base leading-relaxed text-zinc-dust"> ${Lines.map(({ Text, Tone: LineTone = "plain" }) => renderTemplate`<div${addAttribute(Tone[LineTone], "class")}>${unescapeHTML(Text)}</div>`)} </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineStream.astro", void 0);
export { $$ZineStream as t };
