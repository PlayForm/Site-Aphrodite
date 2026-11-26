import { fontFamily } from "tailwindcss/defaultTheme";

/**
 * A palette token that can also carry an opacity modifier.
 *
 * `"soot-black": "var(--soot-black)"` reads correctly and paints correctly -
 * until a call site asks for `bg-soot-black/95`. Tailwind folds a `/nn`
 * modifier into a colour only when that colour can express alpha, and a bare
 * `var()` cannot: the utility is DROPPED SILENTLY. No rule, no warning, no
 * class in the output. That is why the sticky site header rendered fully
 * transparent while its class list read as a 95% soot bar, and why every other
 * `/nn` utility in the tree (22 of them: borders, tints, the docs drawer scrim)
 * painted nothing.
 *
 * A colour FUNCTION keeps the palette where it already lives - one hex per
 * token, in `Source/Stylesheet/_tokens.scss` - and derives the alpha at paint
 * time:
 *
 *     no modifier   var(--soot-black)
 *     /95           color-mix(in srgb, var(--soot-black) 95%, transparent)
 *
 * The unmodified form is byte-identical to the string it replaces, so every
 * `bg-soot-black`, `text-bone-white` and `border-oxblood-dark` in the tree
 * keeps rendering exactly as before. `color-mix` is already the site's idiom
 * (`Deck.css`'s `--deck-neutral`), so no new mechanism enters the build.
 *
 * Tailwind calls this with `opacityValue` undefined (or `var(--tw-bg-opacity)`)
 * for the base utility and with the numeric modifier otherwise; anything
 * non-numeric is the base case.
 */
const Token = (Property) => {
	const Value = `var(--${Property})`;

	return ({ opacityValue }) =>
		Number.isNaN(Number(opacityValue))
			? Value
			: `color-mix(in srgb, ${Value} ${Number(opacityValue) * 100}%, transparent)`;
};

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./Public/**/*.html",
		"./Source/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
	],

	darkMode: "class",

	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				// Zine workbench tokens, single source: the `:root` custom
				// properties in Source/Stylesheet/_tokens.scss (dark-only
				// design). Each entry goes through `Token`, so the name works
				// both bare and with an opacity modifier.
				"soot-black": Token("soot-black"),
				"carbon-void": Token("carbon-void"),
				"asphalt-panel": Token("asphalt-panel"),
				"asphalt-panel-dark": Token("asphalt-panel-dark"),
				"oxblood-dark": Token("oxblood-dark"),
				"blood-crimson": Token("blood-crimson"),
				"raw-blood": Token("raw-blood"),
				"bone-newsprint": Token("bone-newsprint"),
				"bone-white": Token("bone-white"),
				"stamped-canary": Token("stamped-canary"),
				"weathered-teal": Token("weathered-teal"),
				"zinc-dust": Token("zinc-dust"),
				"outline-oxblood": Token("outline-oxblood"),
			},
			fontFamily: {
				headline: ["Space Grotesk", "sans-serif"],
				mono: ["JetBrains Mono", "monospace"],
				body: ["DM Sans", "sans-serif"],
				sans: ["DM Sans", ...fontFamily.sans],
			},
			// Type roles, single source: the `--type-*` custom properties in
			// Source/Stylesheet/Global.css. `text-display`, `text-section`, ...
			// are the Tailwind spelling of the `.type-*` utility classes, so a
			// component may use either and land on the same scale. The
			// line-height and tracking ride along with the size because they
			// are part of the role, not a per-use decision.
			fontSize: {
				display: [
					"var(--type-display)",
					{ lineHeight: "0.92", letterSpacing: "-0.03em" },
				],
				section: [
					"var(--type-section)",
					{ lineHeight: "1.05", letterSpacing: "-0.02em" },
				],
				sub: ["var(--type-sub)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
				body: ["var(--type-body)", { lineHeight: "1.7" }],
				caption: ["var(--type-caption)", { lineHeight: "1.5" }],
				meta: ["var(--type-meta)", { lineHeight: "1.4", letterSpacing: "0.08em" }],
				code: ["var(--type-code)", { lineHeight: "1.6" }],
			},
		},
	},

	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],
};
