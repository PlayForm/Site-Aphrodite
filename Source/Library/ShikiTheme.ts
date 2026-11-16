/**
 * ShikiTheme - the ONE syntax palette the site highlights code with.
 *
 * Why a theme object and not CSS: Shiki writes its colours as INLINE
 * `style="color:#..."` attributes on every token span, and an inline style
 * outranks every stylesheet rule short of `!important`. A stylesheet that
 * tries to re-colour `github-dark` output is therefore a fight it cannot win
 * - the honest fix is to hand Shiki the palette and let it emit the colours.
 *
 * Both highlight paths import THIS object, so a markdown ``` fence and a
 * `Component/CodeFence.astro` block can never drift apart:
 *   - `astro.config.ts` -> `markdown.shikiConfig.theme` (the docs fences)
 *   - `Component/CodeFence.astro` -> `codeToHtml({ theme })` (the hand-written
 *     pages)
 *
 * The mapping follows the site's own colour law, stated in
 * `Component/CopyButton.astro`: the blood family is CHROME, never a text
 * colour. On carbon-void (#111014) raw-blood (#931128) measures ~2.3:1 and
 * blood-crimson worse, so code text is drawn from the four legible families
 * and blood appears only as the plate's frame (Source/Stylesheet/Global.css).
 *
 *   bone-white      #ece9e0  functions, tags, the loudest identifiers
 *   bone-newsprint  #dedbd2  plain text, variables, object keys
 *   stamped-canary  #e5a93b  keywords, literals, constants - and the `$` prompt
 *   weathered-teal  #2a938d  strings, types, escapes
 *   zinc-dust       #82808a  comments (italic) and punctuation - the quietest
 *
 * `text`/`plaintext` fences (86 of the site's 202 blocks: ASCII diagrams and
 * pasted output) carry no tokens at all, so they land on bone-newsprint over
 * carbon-void - which is exactly what a pasted transcript should look like.
 */
import type { ThemeRegistration } from "shiki";

/** The palette literals, mirroring `:root` in Source/Stylesheet/Global.css. */
export const Palette = {
	BoneWhite: "#ece9e0",
	BoneNewsprint: "#dedbd2",
	Canary: "#e5a93b",
	Teal: "#2a938d",
	ZincDust: "#82808a",
	CarbonVoid: "#111014",
	OxbloodDark: "#520612",
} as const;

/**
 * The theme's `name` becomes the second class on every `<pre>` Shiki emits
 * (`class="astro-code zine-print"`), so it is part of the markup contract the
 * stylesheet may key on - keep it stable.
 */
export const ThemeName = "zine-print";

export const ZineTheme: ThemeRegistration = {
	name: ThemeName,
	type: "dark",
	colors: {
		"editor.background": Palette.CarbonVoid,
		"editor.foreground": Palette.BoneNewsprint,
	},
	// Later entries win where two scopes match a token equally, so the quiet
	// families (comment, punctuation) are listed first and the loud ones last.
	tokenColors: [
		{
			scope: ["comment", "punctuation.definition.comment", "comment.line", "comment.block"],
			settings: { foreground: Palette.ZincDust, fontStyle: "italic" },
		},
		{
			scope: ["punctuation", "keyword.operator", "meta.brace", "meta.delimiter"],
			settings: { foreground: Palette.ZincDust },
		},
		{
			scope: [
				"string",
				"string.quoted",
				"string.template",
				"string.unquoted",
				"punctuation.definition.string",
				"constant.character.escape",
				"constant.other.placeholder",
			],
			settings: { foreground: Palette.Teal },
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
				"storage.type",
			],
			settings: { foreground: Palette.Teal },
		},
		{
			scope: [
				"variable",
				"variable.other",
				"variable.parameter",
				"meta.object-literal.key",
				"entity.name.tag.yaml",
				"support.type.property-name",
			],
			settings: { foreground: Palette.BoneNewsprint },
		},
		{
			scope: [
				"keyword",
				"keyword.control",
				"storage",
				"storage.modifier",
				"storage.type.function",
				"keyword.other",
			],
			settings: { foreground: Palette.Canary },
		},
		{
			scope: [
				"constant",
				"constant.numeric",
				"constant.language",
				"constant.language.boolean",
				"variable.other.constant",
			],
			settings: { foreground: Palette.Canary },
		},
		{
			scope: [
				"entity.name.function",
				"support.function",
				"meta.function-call",
				"entity.name.tag",
				"entity.other.attribute-name",
			],
			settings: { foreground: Palette.BoneWhite },
		},
		{
			scope: ["markup.heading", "markup.bold", "entity.name.section"],
			settings: { foreground: Palette.BoneWhite, fontStyle: "bold" },
		},
		{
			scope: ["markup.italic"],
			settings: { foreground: Palette.BoneNewsprint, fontStyle: "italic" },
		},
		{ scope: ["markup.inserted"], settings: { foreground: Palette.Teal } },
		{ scope: ["markup.deleted"], settings: { foreground: Palette.Canary } },
		{
			scope: ["invalid", "invalid.illegal"],
			settings: { foreground: Palette.BoneWhite, background: Palette.OxbloodDark },
		},
	],
};
