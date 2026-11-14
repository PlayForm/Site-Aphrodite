import { n as createComponent, t as createAstro } from "./compiler_DE9Ou0YP.mjs";
import { C as addAttribute, T as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent } from "./server_CNuTCIdA.mjs";
import { codeToHtml } from "shiki";
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
// Source/Component/CodeFence.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$CodeFence = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CodeFence;
	const { Code, Lang = "bash", Class = "", Copy = false, CopyLabel } = Astro.props;
	const Html = (await codeToHtml(Code, {
		lang: Lang,
		theme: "github-dark"
	})).replace("class=\"shiki ", "class=\"astro-code ").replace("<pre ", `<pre data-language="${Lang}" `).replace("color:#e1e4e8\"", "color:#e1e4e8;overflow-x:auto\"");
	return renderTemplate`${Copy ? renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["relative font-mono text-base leading-relaxed [&>pre]:p-3.5", Class], "class:list")}> <div class="absolute right-2 top-2 z-10"> ${renderComponent($$result, "CopyButton", $$CopyButton, {
		"Label": CopyLabel ?? Lang.toUpperCase(),
		"Payload": Code,
		"Tone": "teal",
		"Size": "sm"
	})} </div> <div>${unescapeHTML(Html)}</div> </div>` : renderTemplate`<div${addAttribute(["font-mono text-base leading-relaxed [&>pre]:p-3.5", Class], "class:list")}>${unescapeHTML(Html)}</div>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/CodeFence.astro", void 0);
export { $$CodeFence as t };
