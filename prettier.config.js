// Prettier configuration for the Aphrodite site.
//
// Plugins loaded only when installed - install to enable:
//   prettier-plugin-astro      format .astro files
//   prettier-plugin-tailwindcss  sort Tailwind class strings
//
// Usage:  node_modules/.bin/prettier --check Source Public
//
"use strict";

function tryResolve(Id) {
	try {
		require.resolve(Id);

		return true;
	} catch {
		return false;
	}
}

const HasAstroPlugin = tryResolve("prettier-plugin-astro");

const HasTailwindPlugin = tryResolve("prettier-plugin-tailwindcss");

const Plugins = [
	...(HasAstroPlugin ? ["prettier-plugin-astro"] : []),
	...(HasTailwindPlugin ? ["prettier-plugin-tailwindcss"] : []),
];

/** @type {import("prettier").Config} */
module.exports = {
	useTabs: true,

	tabWidth: 4,

	printWidth: 100,

	singleQuote: false,

	trailingComma: "all",

	semi: true,

	plugins: Plugins,

	overrides: [
		// .astro - requires prettier-plugin-astro
		{
			files: ["*.astro"],

			options: {
				parser: "astro",
			},
		},

		// Markdown - preserve prose wrapping, no hard line breaks
		{
			files: ["*.md", "*.mdx"],

			options: {
				proseWrap: "preserve",

				embeddedLanguageFormatting: "auto",
			},
		},

		// JSON - always tabs, 4-wide
		{
			files: ["*.json", "*.jsonc"],

			options: {
				useTabs: true,

				tabWidth: 4,
			},
		},

		// CSS / SCSS / PostCSS
		{
			files: ["*.css"],

			options: {
				useTabs: true,

				singleQuote: false,
			},
		},
	],
};
