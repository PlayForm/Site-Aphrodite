import { E as unescapeHTML, _ as renderTemplate, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro } from "./Base_B3YGMVwW.mjs";
import { codeToHtml } from "shiki";
// Source/Library/ShikiTheme.ts
/** The palette literals, mirroring `:root` in Source/Stylesheet/Global.css. */
var Palette = {
	BoneWhite: "#ece9e0",
	BoneNewsprint: "#dedbd2",
	Canary: "#e5a93b",
	Teal: "#2a938d",
	ZincDust: "#82808a",
	CarbonVoid: "#111014",
	OxbloodDark: "#520612"
};
var ZineTheme = {
	name: "zine-print",
	type: "dark",
	colors: {
		"editor.background": Palette.CarbonVoid,
		"editor.foreground": Palette.BoneNewsprint
	},
	tokenColors: [
		{
			scope: [
				"comment",
				"punctuation.definition.comment",
				"comment.line",
				"comment.block"
			],
			settings: {
				foreground: Palette.ZincDust,
				fontStyle: "italic"
			}
		},
		{
			scope: [
				"punctuation",
				"keyword.operator",
				"meta.brace",
				"meta.delimiter"
			],
			settings: { foreground: Palette.ZincDust }
		},
		{
			scope: [
				"string",
				"string.quoted",
				"string.template",
				"string.unquoted",
				"punctuation.definition.string",
				"constant.character.escape",
				"constant.other.placeholder"
			],
			settings: { foreground: Palette.Teal }
		},
		{
			scope: [
				"entity.name.type",
				"entity.name.class",
				"entity.name.namespace",
				"entity.other.inherited-class",
				"support.type",
				"support.class",
				"support.constant",
				"storage.type"
			],
			settings: { foreground: Palette.Teal }
		},
		{
			scope: [
				"variable",
				"variable.other",
				"variable.parameter",
				"meta.object-literal.key",
				"entity.name.tag.yaml",
				"support.type.property-name"
			],
			settings: { foreground: Palette.BoneNewsprint }
		},
		{
			scope: [
				"keyword",
				"keyword.control",
				"storage",
				"storage.modifier",
				"storage.type.function",
				"keyword.other"
			],
			settings: { foreground: Palette.Canary }
		},
		{
			scope: [
				"constant",
				"constant.numeric",
				"constant.language",
				"constant.language.boolean",
				"variable.other.constant"
			],
			settings: { foreground: Palette.Canary }
		},
		{
			scope: [
				"entity.name.function",
				"support.function",
				"meta.function-call",
				"entity.name.tag",
				"entity.other.attribute-name"
			],
			settings: { foreground: Palette.BoneWhite }
		},
		{
			scope: [
				"markup.heading",
				"markup.bold",
				"entity.name.section"
			],
			settings: {
				foreground: Palette.BoneWhite,
				fontStyle: "bold"
			}
		},
		{
			scope: ["markup.italic"],
			settings: {
				foreground: Palette.BoneNewsprint,
				fontStyle: "italic"
			}
		},
		{
			scope: ["markup.inserted"],
			settings: { foreground: Palette.Teal }
		},
		{
			scope: ["markup.deleted"],
			settings: { foreground: Palette.Canary }
		},
		{
			scope: ["invalid", "invalid.illegal"],
			settings: {
				foreground: Palette.BoneWhite,
				background: Palette.OxbloodDark
			}
		}
	]
};
// Source/Component/CodeFence.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$CodeFence = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CodeFence;
	const { Code, Lang = "bash", Class = "", CopyPayload } = Astro.props;
	const Frame = /^(border|rounded|ring|shadow|outline|bg-)/;
	const Layout = Class.split(/\s+/).filter((Token) => Token !== "" && !Frame.test(Token)).join(" ");
	const Html = (await codeToHtml(Code, {
		lang: Lang,
		theme: ZineTheme
	})).replace("class=\"shiki ", "class=\"astro-code ").replace("<pre ", `<pre data-language="${Lang}" `);
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["zine-fence", Layout], "class:list")}${addAttribute(CopyPayload, "data-plate-payload")}>${unescapeHTML(Html)}</div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/CodeFence.astro", void 0);
export { $$CodeFence as t };
