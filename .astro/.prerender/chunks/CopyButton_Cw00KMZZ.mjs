import { _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro } from "./Base_B3YGMVwW.mjs";
// Source/Component/CopyButton.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$CopyButton = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CopyButton;
	const { Label = "COPY", Payload, Tone = "crimson", Size = "md", Class = "" } = Astro.props;
	const Base = "inline-flex items-center gap-2 border border-black font-mono font-black uppercase tracking-widest transition-colors active:translate-x-0.5 active:translate-y-0.5 active:shadow-none";
	const Fill = {
		crimson: "bg-raw-blood text-bone-white hover:bg-blood-crimson",
		teal: "bg-weathered-teal text-soot-black hover:bg-weathered-teal",
		canary: "bg-stamped-canary text-soot-black hover:bg-stamped-canary"
	}[Tone];
	const Metrics = {
		md: "px-4 py-2 text-base shadow-[3px_3px_0px_#000]",
		sm: "px-2 py-1 text-base shadow-[2px_2px_0px_#000]"
	}[Size];
	return renderTemplate`${maybeRenderHead($$result)}<button${addAttribute([
		Base,
		Fill,
		Metrics,
		Class
	], "class:list")}${addAttribute(Payload, "data-copy")} type="button"${addAttribute(Label === "COPY" ? "Copy to the clipboard" : `Copy ${Label} to the clipboard`, "aria-label")}> <span aria-hidden="true">⧉</span> <span>${Label}</span> </button>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/CopyButton.astro", void 0);
export { $$CopyButton as t };
