// @ts-nocheck
module.exports = {
	plugins: [
		require("postcss-import"),
		require("postcss-url"),
		require("tailwindcss/nesting"),
		require("tailwindcss")("./tailwind.config.js"),
		require("postcss-combine-media-query"),
		require("postcss-combine-duplicated-selectors").default({
			removeDuplicatedProperties: true,
			removeDuplicatedValues: false,
		}),
		require("autoprefixer"),
		// The preset is passed as the imported FUNCTION rather than the string
		// `"advanced"`. cssnano resolves a string preset against its own
		// dependencies, finds `cssnano-preset-advanced` installed in the tree,
		// and warns that it is using the installed copy "instead of its
		// built-in preset" - once per build. Handing it the module keeps the
		// same preset (it IS `cssnano-preset-advanced`) and drops the warning,
		// which is what lets a real problem stand out in the dev output.
		require("cssnano")({ preset: require("cssnano-preset-advanced") }),
		require("postcss-reporter"),
	],
};
