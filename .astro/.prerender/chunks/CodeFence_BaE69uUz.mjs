import { f as createAstro, p as createComponent } from "./Base_DtRxtNeh.mjs";
import { E as unescapeHTML, _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { codeToHtml } from "shiki";
// Source/Component/CodeFence.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$CodeFence = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CodeFence;
	const { Code, Lang = "bash", Class = "" } = Astro.props;
	const Html = (await codeToHtml(Code, {
		lang: Lang,
		theme: "github-dark"
	})).replace("class=\"shiki ", "class=\"astro-code ").replace("<pre ", `<pre data-language="${Lang}" `).replace("color:#e1e4e8\"", "color:#e1e4e8;overflow-x:auto\"");
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["font-mono text-base leading-relaxed [&>pre]:p-3.5", Class], "class:list")}>${unescapeHTML(Html)}</div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/CodeFence.astro", void 0);
export { $$CodeFence as t };
