import { _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro } from "./Base_Bs2-mKm9.mjs";
// Source/Component/ZineButton.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineButton = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineButton;
	const { Label, Copy, Href, Role = "primary", Class = "" } = Astro.props;
	const Classes = [
		"button",
		{
			primary: "button--primary",
			ghost: "button--ghost",
			secondary: "button--secondary",
			text: "button--text",
			utility: "button--utility"
		}[Role],
		Class
	];
	return renderTemplate`${Href ? renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(Classes, "class:list")}${addAttribute(Href, "href")}> ${Label} </a>` : renderTemplate`<button${addAttribute(Classes, "class:list")}${addAttribute(Copy, "data-copy")} type="button"> ${Label} </button>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineButton.astro", void 0);
export { $$ZineButton as t };
