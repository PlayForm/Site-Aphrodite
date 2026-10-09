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
		},
	},

	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],
};
