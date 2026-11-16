import { _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro } from "./Base_DYyCOQNQ.mjs";
// Source/Component/ZineButton.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineButton = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineButton;
	const { Label, Copy, Href, Role = "primary", Class = "" } = Astro.props;
	const Classes = [
		"inline-block font-mono transition-colors",
		{
			primary: "border border-black bg-raw-blood px-4 py-2 text-base font-black text-bone-white shadow-[3px_3px_0px_#000] hover:bg-blood-crimson active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
			secondary: "border border-oxblood-dark bg-transparent px-4 py-2 text-base font-bold text-bone-newsprint hover:border-blood-crimson hover:text-bone-white",
			text: "text-base font-bold text-bone-newsprint underline decoration-oxblood-dark decoration-2 underline-offset-4 hover:text-bone-white hover:decoration-blood-crimson",
			utility: "border border-oxblood-dark bg-soot-black px-2 py-1 text-meta font-black uppercase tracking-widest text-zinc-dust hover:border-blood-crimson hover:text-bone-white"
		}[Role],
		Class
	];
	return renderTemplate`${Href ? renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(Classes, "class:list")}${addAttribute(Href, "href")}> ${Label} </a>` : renderTemplate`<button${addAttribute(Classes, "class:list")}${addAttribute(Copy, "data-copy")} type="button"> ${Label} </button>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineButton.astro", void 0);
export { $$ZineButton as t };
