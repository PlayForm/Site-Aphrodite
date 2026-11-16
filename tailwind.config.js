import { fontFamily } from "tailwindcss/defaultTheme";

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
				// Zine workbench tokens, single source: Source/Stylesheet/Global.css
				// :root custom properties (dark-only design).
				"soot-black": "var(--soot-black)",
				"carbon-void": "var(--carbon-void)",
				"asphalt-panel": "var(--asphalt-panel)",
				"asphalt-panel-dark": "var(--asphalt-panel-dark)",
				"oxblood-dark": "var(--oxblood-dark)",
				"blood-crimson": "var(--blood-crimson)",
				"raw-blood": "var(--raw-blood)",
				"bone-newsprint": "var(--bone-newsprint)",
				"bone-white": "var(--bone-white)",
				"stamped-canary": "var(--stamped-canary)",
				"weathered-teal": "var(--weathered-teal)",
				"zinc-dust": "var(--zinc-dust)",
				"outline-oxblood": "var(--outline-oxblood)",
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
