#!/usr/bin/env node
// Manual regeneration of Public/_redirects and Target/_redirects - the thin
// wrapper around the shared generator in Source/Library/Redirects.ts (the
// CodeEditorLand/WebSite port). The build-time mechanism is the astro
// integration (registered in astro.config.ts, the astro:build:done hook),
// which derives the route map from the pages Astro actually built; this
// wrapper exists for runs outside a build and derives the same canonicals by
// listing the page routes and the docs tree.
//
// Run with:  pnpm run Redirects
import { readdirSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

import { BuildRedirects, WriteRedirects } from "../Source/Library/Redirects.ts";

const Here = dirname(fileURLToPath(import.meta.url));
const Root = dirname(Here);

const TopLevelPages = [
	"/benchmarks",
	"/case-study",
	"/config",
	"/crates",
	"/examples",
	"/flavors",
	"/hermes",
	"/hooks",
	"/plugin",
	"/setup",
	"/showcase",
	"/tools",
	"/versions",
	"/workbench",
];

const DocsRoot = join(Root, "Source/Content/Docs");

const DocsSlugs = (() => {
	const Slugs = [];
	const Walk = (Directory) => {
		for (const Entry of readdirSync(Directory, { withFileTypes: true })) {
			const Path = join(Directory, Entry.name);
			switch (true) {
				case Entry.isDirectory():
					Walk(Path);
					break;
				case Entry.name.endsWith(".md"): {
					const Slug = relative(DocsRoot, Path)
						.replace(/\.md$/, "")
						.replace(/\/index$/, "");
					Slugs.push(Slug === "index" ? "" : Slug);
					break;
				}
			}
		}
	};
	Walk(DocsRoot);
	return Slugs;
})();

const CanonicalPaths = [
	...TopLevelPages,
	...DocsSlugs.map((Slug) => `/docs${Slug ? `/${Slug}` : ""}`),
];

const Content = BuildRedirects(CanonicalPaths);
const Targets = await WriteRedirects(Content, join(Root, "Target"), Root);

for (const Target of Targets) {
	console.log(
		`Written ${Content.split("\n").length} lines → ${Target.replace(Root, "")}`,
	);
}

console.log(`\nCanonical pages: ${CanonicalPaths.length}`);
