#!/usr/bin/env node
// Regenerates Public/_redirects and Target/_redirects - the full borrow of
// CodeEditorLand/WebSite's Maintain/Script/GenerateRedirects.mjs (the
// simplified variant strategy, the same rule forms, the same file layout),
// adapted for Aphrodite:
//
//   - the canonical paths are this site's pages (lowercase, as built);
//   - the /docs slugs are derived from Source/Content/Docs, mirroring what
//     the reference derives from its build-time RouteMap;
//   - the asset prefixes/files are this Public tree's (Brand, Font, ...);
//   - NO catch-all: the reference rewrites /* → /Visit/ (its app shell);
//     this site has no shell page, and a catch-all here would shadow the
//     automatic 404.html serving for every unknown path.
//
// Run with:  node Scripts/GenerateRedirects.mjs
import { mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const Here = dirname(fileURLToPath(import.meta.url));
const Root = dirname(Here);
const resolve = (path) => join(Root, path);

// ─── Canonical paths ──────────────────────────────────────────────────────

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

const DocsRoot = resolve("Source/Content/Docs");

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

const CanonicalPath = [
	...TopLevelPages,
	...DocsSlugs.map((Slug) => `/docs${Slug ? `/${Slug}` : ""}`),
];

const SemanticAlias = {
	"/home": "/",
	"/main": "/",
	"/index": "/",
	"/start": "/",
	"/overview": "/",
	"/documentation": "/docs",
	"/doc": "/docs",
	"/manual": "/docs",
	"/guide": "/docs",
	"/reference": "/docs",
};

// ─── Variant generators (the reference's, verbatim) ───────────────────────

const segmentCases = (seg) => {
	const lower = seg.toLowerCase();
	const upper = seg.toUpperCase();
	const title = seg.charAt(0).toUpperCase() + seg.slice(1).toLowerCase();
	return [...new Set([lower, upper, seg, title])];
};

const segmentNumber = (lower) => {
	const r = new Set([lower]);
	if (lower.endsWith("ies") && lower.length > 4)
		r.add(lower.slice(0, -3) + "y");
	else if (/(?:ses|xes|zes|ches|shes)$/.test(lower))
		r.add(lower.slice(0, -2));
	else if (
		lower.endsWith("s") &&
		!/(?:ss|us|is)$/.test(lower) &&
		lower.length > 2
	)
		r.add(lower.slice(0, -1));
	if (!lower.endsWith("s")) r.add(lower + "s");
	return [...r];
};

const segmentCompound = (seg) => {
	const words = seg.match(/[A-Z][a-z]*/g);
	if (!words || words.length < 2) return [];
	const lower = words.map((w) => w.toLowerCase());
	return [lower.join("-"), lower.join("_"), lower.join(""), lower.join(".")];
};

const generateVariants = (canonical) => {
	if (canonical === "/") return [];
	const segs = canonical.slice(1).split("/");
	const result = new Set();

	if (segs.length === 1) {
		const seg = segs[0];
		const lower = seg.toLowerCase();
		for (const c of segmentCases(seg)) result.add("/" + c);
		for (const n of segmentNumber(lower)) {
			result.add("/" + n);
			result.add("/" + n.toUpperCase());
		}
		for (const v of segmentCompound(seg)) result.add("/" + v);
	} else {
		const lowerSegs = segs.map((s) => s.toLowerCase());
		result.add("/" + lowerSegs.join("/"));
		result.add("/" + segs.map((s) => s.toUpperCase()).join("/"));

		for (let i = 0; i < segs.length; i++) {
			const seg = segs[i];
			for (const c of segmentCases(seg)) {
				const parts = [...lowerSegs];
				parts[i] = c;
				result.add("/" + parts.join("/"));
			}
			for (const v of segmentCompound(seg)) {
				const parts = [...lowerSegs];
				parts[i] = v;
				result.add("/" + parts.join("/"));
			}
		}

		result.add("/" + lowerSegs.join(""));
		result.add("/" + lowerSegs.join("-"));
		result.add("/" + lowerSegs.join("_"));
	}

	for (const p of [...result]) {
		if (!p.endsWith("/")) result.add(p + "/");
	}

	result.delete(canonical);
	return [...result];
};

// ─── Build the variant map ────────────────────────────────────────────────

const AssetPrefix = [
	["/_astro/*", "/_astro/:splat"],
	["/Brand/*", "/Brand/:splat"],
	["/Font/*", "/Font/:splat"],
];

const AssetFile = [
	"/404.html",
	"/Manifest.json",
	"/robots.txt",
	"/sitemap-index.xml",
	"/sitemap-0.xml",
];

const variantMap = new Map();
const canonicalSet = new Set([...CanonicalPath, "/"]);

for (const canonical of CanonicalPath) {
	for (const variant of generateVariants(canonical)) {
		if (!variantMap.has(variant) && !canonicalSet.has(variant)) {
			variantMap.set(variant, canonical);
		}
	}
}

// Semantic aliases (as-is, plus trailing slash)
for (const [alias, target] of Object.entries(SemanticAlias)) {
	if (canonicalSet.has(target) || target === "/") {
		if (!variantMap.has(alias)) variantMap.set(alias, target);
		const withSlash = alias + "/";
		if (!variantMap.has(withSlash)) variantMap.set(withSlash, target);
	}
}

// All-lowercase variants of every canonical (belt-and-suspenders for deep paths)
for (const canonical of CanonicalPath) {
	const lower = canonical.toLowerCase();
	if (lower !== canonical && !variantMap.has(lower)) {
		variantMap.set(lower, canonical);
	}
	const lowerSlash = lower + "/";
	if (!variantMap.has(lowerSlash)) {
		variantMap.set(lowerSlash, canonical);
	}
}

const sorted = [...variantMap.entries()].sort(([a], [b]) => a.localeCompare(b));

// ─── Render ───────────────────────────────────────────────────────────────

const pad = (v, w) => v + " ".repeat(Math.max(1, w - v.length));

const lines = [];

lines.push("# Cloudflare Pages - full route map (auto-generated)");
lines.push("#");
lines.push("# All rules use 200 (rewrite) to serve content directly.");
lines.push(
	"# This prevents the service worker from breaking on redirect chains.",
);
lines.push("# Run `node Scripts/GenerateRedirects.mjs` to regenerate.");
lines.push("");

lines.push(`# ── VARIANT REWRITES (200) - ${sorted.length} rules ──`);
lines.push(
	"# kebab-case, lowerCase, UPPERCASE, TitleCase, plural/singular, flat forms → canonical.",
);
for (const [source, target] of sorted) {
	const dest = target === "/" ? "/" : target + "/";
	lines.push(`${pad(source, 38)}${pad(dest, 38)}200`);
}
lines.push("");

lines.push("# ── TRAILING-SLASH REWRITES (200) ──");
lines.push("# One rule per canonical page.");
const sortedCanonicals = [...CanonicalPath].sort();
for (const path of ["/", ...sortedCanonicals]) {
	const dest = path === "/" ? "/" : path + "/";
	if (!dest.endsWith("//")) {
		lines.push(`${pad(path, 38)}${pad(dest, 38)}200`);
	}
}
lines.push("");

lines.push("# ── ASSET PASS-THROUGHS (200) ──");
for (const [from, to] of AssetPrefix) {
	lines.push(`${pad(from, 26)}${pad(to, 26)}200`);
}
for (const file of AssetFile) {
	lines.push(`${pad(file, 26)}${pad(file, 26)}200`);
}
lines.push("");

const content = lines.join("\n");

const targets = [resolve("Public/_redirects"), resolve("Target/_redirects")];

for (const dest of targets) {
	try {
		mkdirSync(dirname(dest), { recursive: true });
		writeFileSync(dest, content, "utf8");
		console.log(
			`Written ${content.split("\n").length} lines → ${dest.replace(Root, "")}`,
		);
	} catch (err) {
		console.error(`Failed to write ${dest}: ${err.message}`);
	}
}

console.log(
	`\nTotal rules: ${sorted.length} variants + ${sortedCanonicals.length + 1} canonicals + ${AssetPrefix.length + AssetFile.length} assets`,
);
