import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import { defineConfig } from "astro/config";

export const On = process.env["NODE_ENV"] === "development";

export const Here = dirname(fileURLToPath(import.meta.url));

// Alias table mirroring the `@playform/build` tsconfig paths convention, so
// that Vite resolves the same `@Stylesheet/`, `@Script/`, ... imports that
// TypeScript resolves via tsconfig `paths`.
export const Aliases = Object.fromEntries(
	["Layout", "Page", "Script", "Stylesheet", "Target"].map((Folder) => [
		`@${Folder}`,
		resolve(Here, "Source", Folder === "Page" ? "pages" : Folder),
	]),
);

export default defineConfig({
	srcDir: "./Source",
	publicDir: "./Public",
	outDir: "./Target",
	// TODO Place your site URL here
	// site: "",
	compressHTML: true,
	// The markdown code fences render through shiki (bundled with Astro) with
	// the dark github-dark theme: the site is dark-only (soot-black panes), so
	// the pinned dark theme keeps the token colors visible on every code pane.
	// Highlighting only applies when the fence carries a language tag
	// (```rust, ```json, ...); untagged fences render as plain text.
	markdown: {
		shikiConfig: {
			theme: "github-dark",
		},
	},
	prefetch: {
		defaultStrategy: "hover",
		prefetchAll: true,
	},
	server: {
		port: 9999,
	},
	build: {
		concurrency: 9999,
	},
	integrations: [
		// @ts-ignore
		// The code-mention pass: after the build writes each page, every inline
		// code element that resolves through Source/Library/SourceLinks.ts (or
		// an existing repo-relative path) is wrapped in an anchor to its
		// definition file at tree/Current. Declared first so the compression
		// integrations below operate on the linked output.
		(await import("./Source/Library/CodeMentions.ts")).default(),
		// The service worker for production builds. Gated on NODE_ENV, not
		// import.meta.env.MODE: at config-eval time during `astro build` MODE
		// is still "development" (the build command does not set it), so the
		// old condition never fired and the worker was never generated.
		process.env["NODE_ENV"] !== "development"
			? (await import("astrojs-service-worker")).default()
			: null,
		(await import("@astrojs/sitemap")).default(),
		// Beasties inlines the critical CSS into each HTML page; pruning must
		// stay off or the shared stylesheet chunk is gutted across pages.
		(await import("@playform/inline")).default({
			Logger: 1,
			Beasties: { pruneSource: false },
		}),
		(await import("@playform/compress")).default({ Logger: 1 }),
	],
	experimental: {
		clientPrerender: true,
		contentIntellisense: true,
	},
	vite: {
		build: {
			sourcemap: On,
			manifest: true,
			minify: On ? false : "terser",
			cssMinify: On ? false : "lightningcss",
			terserOptions: On
				? {
						compress: false,
						ecma: 2020,
						enclose: false,
						format: {
							ascii_only: false,
							braces: false,
							comments: false,
							ie8: false,
							indent_level: 4,
							indent_start: 0,
							inline_script: false,
							keep_numbers: true,
							keep_quoted_props: true,
							max_line_len: 80,
							preamble: "",
							ecma: 5,
							preserve_annotations: true,
							quote_keys: false,
							quote_style: 3,
							safari10: true,
							semicolons: true,
							shebang: false,
							shorthand: false,
							webkit: true,
							wrap_func_args: true,
							wrap_iife: true,
						},
						sourceMap: true,
						ie8: true,
						keep_classnames: true,
						keep_fnames: true,
						mangle: false,
						module: true,
						toplevel: true,
					}
				: {},
		},
		resolve: {
			preserveSymlinks: false,
			alias: Aliases,
		},
		css: {
			devSourcemap: true,
			transformer: "postcss",
		},
		plugins: [
			{
				name: "CrossOrigin",
				transform(Code, Identifier, _) {
					const CrossOrigin =
						Identifier.includes(".mjs") ||
						Identifier.includes(".js") ||
						Identifier.includes(".astro")
							? `crossorigin=\\"anonymous\\"`
							: 'crossorigin="anonymous"';

					return Code.replace(/<script/g, `<script ${CrossOrigin}`)
						.replace(
							/<link[^>]*(?=.*rel="preload")(?=.*href="[^"]*\.js")(?=.*as="script")[^>]*/g,
							`$& ${CrossOrigin}`,
						)
						.replace(
							/<link[^>]*(?=.*rel="preload")(?=.*as="font")[^>]*/g,
							`$& ${CrossOrigin}`,
						)
						.replace(
							/<link[^>]*(?=.*rel="stylesheet")(?=.*href="https?:\/\/[^"]*")[^>]*/g,
							`$& ${CrossOrigin}`,
						);
				},
			},
		],
	},
});
