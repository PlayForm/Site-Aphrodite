import { E as unescapeHTML, _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro } from "./Base_B3YGMVwW.mjs";
// Source/Component/ZineStream.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineStream = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineStream;
	const { Lines, Stream = false } = Astro.props;
	const Tone = {
		plain: "",
		dim: "opacity-70",
		fade: "opacity-40",
		mute: "opacity-25",
		result: "text-bone-white",
		canary: "text-stamped-canary",
		teal: "text-weathered-teal"
	};
	return renderTemplate`${maybeRenderHead($$result)}<div class="ccr-marker border border-oxblood-dark bg-soot-black p-3.5 font-mono text-base leading-relaxed text-zinc-dust"${addAttribute(Stream ? "" : void 0, "data-stream")}> ${Lines.map(({ Text, Tone: LineTone = "plain" }) => renderTemplate`<div> <span${addAttribute(Tone[LineTone], "class")}>${unescapeHTML(Text)}</span> </div>`)} </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineStream.astro", void 0);
export { $$ZineStream as t };
