import { _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro } from "./Base_Bs2-mKm9.mjs";
// Source/Component/ZinePullQuote.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZinePullQuote = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZinePullQuote;
	const { Text, Attribution, Tone = "crimson", Rotate = "" } = Astro.props;
	const Shadow = {
		crimson: "zine-box-crimson",
		subtle: "zine-box-subtle",
		canary: "zine-box-canary",
		teal: "zine-box-teal"
	}[Tone];
	return renderTemplate`${maybeRenderHead($$result)}<figure${addAttribute([
		"relative border-4 border-blood-crimson bg-carbon-void p-8 transition-transform duration-300 hover:rotate-0 sm:p-12",
		Shadow,
		Rotate,
		"max-sm:rotate-0"
	], "class:list")}> <div class="pointer-events-none absolute right-4 top-4"> <span class="telemetry-tag">MANIFESTO</span> </div> <blockquote class="zine-drop-cap font-body text-xl font-medium leading-relaxed text-bone-white sm:text-2xl"> ${Text} </blockquote> ${Attribution && renderTemplate`<figcaption class="mt-6 font-mono text-base font-bold uppercase tracking-widest text-stamped-canary">
- ${Attribution} </figcaption>`} </figure>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZinePullQuote.astro", void 0);
export { $$ZinePullQuote as t };
