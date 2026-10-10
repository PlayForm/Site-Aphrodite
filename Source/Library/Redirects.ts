import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

import type { AstroIntegration } from "astro";

/**
 * The Cloudflare _redirects pass - the port of CodeEditorLand/WebSite's
 * Source/Function/Route/Integration.ts (the "Cloudflare _redirects" section,
 * astro:build:done). On EVERY build the _redirects file is regenerated from
 * the LIVE route map - the pages Astro actually built - and written to both
 * Target/_redirects (deployed immediately) and Public/_redirects (version
 * control), so the deploy always carries fresh rules and no hand-edited file
 * can drift from the route reality.
 *
 * Rule forms are the reference's, verbatim: 200 rewrites throughout, variant
 * rewrites (case permutations, plurals, kebab/joined flat forms), semantic
 * aliases, trailing-slash rewrites (one per canonical), asset pass-throughs
 * (/_astro/*, /Brand/*, /Font/* + the single files), and NO catch-all - the
 * reference rewrites /* to /Visit/ (its app shell); this site has no shell
 * page and a catch-all would shadow the automatic 404.html serving.
 */

/** The asset prefixes that must resolve before any rewrite could shadow them. */
const AssetPrefix = [
	["/_astro/*", "/_astro/:splat"],
	["/Brand/*", "/Brand/:splat"],
	["/Font/*", "/Font/:splat"],
];

/** The single asset files with the same guarantee. */
const AssetFile = [
	"/404.html",
	"/Manifest.json",
	"/robots.txt",
	"/sitemap-index.xml",
	"/sitemap-0.xml",
];

/** Semantic aliases: the convenient short paths → canonical pages. */
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

/** Case forms of one path segment (lower, UPPER, original, Title). */
const SegmentCases = (Segment) => {
	const Lower = Segment.toLowerCase();
	const Upper = Segment.toUpperCase();
	const Title = Segment.charAt(0).toUpperCase() + Segment.slice(1).toLowerCase();

	return [...new Set([Lower, Upper, Segment, Title])];
};

/** Singular/plural forms of one lowercase segment. */
const SegmentNumber = (Lower) => {
	const Forms = new Set([Lower]);

	switch (true) {
		case Lower.endsWith("ies") && Lower.length > 4:
			Forms.add(Lower.slice(0, -3) + "y");
			break;
		case /(?:ses|xes|zes|ches|shes)$/.test(Lower):
			Forms.add(Lower.slice(0, -2));
			break;
		case Lower.endsWith("s") &&
			!/(?:ss|us|is)$/.test(Lower) &&
			Lower.length > 2:
			Forms.add(Lower.slice(0, -1));
			break;
		default:
			break;
	}

	if (!Lower.endsWith("s")) {
		Forms.add(Lower + "s");
	}

	return [...Forms];
};

/** Joined forms of one camel/Pascal segment (kebab, snake, flat, dotted). */
const SegmentCompound = (Segment) => {
	const Words = Segment.match(/[A-Z][a-z]*/g);

	switch (true) {
		case !Words || Words.length < 2:
			return [];
		default: {
			const Lower = Words.map((Word) => Word.toLowerCase());

			return [
				Lower.join("-"),
				Lower.join("_"),
				Lower.join(""),
				Lower.join("."),
			];
		}
	}
};

/** Every access variant of one canonical path (the reference's generator). */
const GenerateVariants = (Canonical) => {
	switch (Canonical) {
		case "/":
			return [];
		default:
			break;
	}

	const Segments = Canonical.slice(1).split("/");
	const Result = new Set();

	if (Segments.length === 1) {
		const Segment = Segments[0];
		const Lower = Segment.toLowerCase();

		for (const Case of SegmentCases(Segment)) {
			Result.add("/" + Case);
		}

		for (const Form of SegmentNumber(Lower)) {
			Result.add("/" + Form);
			Result.add("/" + Form.toUpperCase());
		}

		for (const Form of SegmentCompound(Segment)) {
			Result.add("/" + Form);
		}
	} else {
		const LowerSegments = Segments.map((Segment) => Segment.toLowerCase());

		Result.add("/" + LowerSegments.join("/"));
		Result.add("/" + Segments.map((Segment) => Segment.toUpperCase()).join("/"));

		for (let Index = 0; Index < Segments.length; Index++) {
			const Segment = Segments[Index];

			for (const Case of SegmentCases(Segment)) {
				const Parts = [...LowerSegments];
				Parts[Index] = Case;
				Result.add("/" + Parts.join("/"));
			}

			for (const Form of SegmentCompound(Segment)) {
				const Parts = [...LowerSegments];
				Parts[Index] = Form;
				Result.add("/" + Parts.join("/"));
			}
		}

		Result.add("/" + LowerSegments.join(""));
		Result.add("/" + LowerSegments.join("-"));
		Result.add("/" + LowerSegments.join("_"));
	}

	for (const Path of [...Result]) {
		if (!Path.endsWith("/")) {
			Result.add(Path + "/");
		}
	}

	Result.delete(Canonical);

	return [...Result];
};

/** Column-padded rule line (the reference's layout). */
const Pad = (Value, Width) => Value + " ".repeat(Math.max(1, Width - Value.length));

/** Render the full _redirects content from the canonical path list. */
export const BuildRedirects = (CanonicalPaths) => {
	const CanonicalSet = new Set([...CanonicalPaths, "/"]);
	const Variants = new Map();

	for (const Canonical of CanonicalPaths) {
		for (const Variant of GenerateVariants(Canonical)) {
			if (!Variants.has(Variant) && !CanonicalSet.has(Variant)) {
				Variants.set(Variant, Canonical);
			}
		}
	}

	for (const [Alias, Target] of Object.entries(SemanticAlias)) {
		switch (CanonicalSet.has(Target) || Target === "/") {
			case false:
				break;
			default: {
				if (!Variants.has(Alias)) {
					Variants.set(Alias, Target);
				}

				const WithSlash = Alias + "/";

				if (!Variants.has(WithSlash)) {
					Variants.set(WithSlash, Target);
				}
			}
		}
	}

	for (const Canonical of CanonicalPaths) {
		const Lower = Canonical.toLowerCase();

		if (Lower !== Canonical && !Variants.has(Lower)) {
			Variants.set(Lower, Canonical);
		}

		const LowerSlash = Lower + "/";

		if (!Variants.has(LowerSlash)) {
			Variants.set(LowerSlash, Canonical);
		}
	}

	const Sorted = [...Variants.entries()].sort(([A], [B]) =>
		A.localeCompare(B),
	);
	const SortedCanonicals = [...CanonicalPaths].sort();

	const Lines = [];

	Lines.push("# Cloudflare Pages - full route map (auto-generated)");
	Lines.push("#");
	Lines.push("# All rules use 200 (rewrite) to serve content directly.");
	Lines.push(
		"# This prevents the service worker from breaking on redirect chains.",
	);
	Lines.push("# Regenerated on every build by Source/Library/Redirects.ts.");
	Lines.push("");

	Lines.push(`# ── VARIANT REWRITES (200) - ${Sorted.length} rules ──`);
	Lines.push(
		"# kebab-case, lowerCase, UPPERCASE, TitleCase, plural/singular, flat forms → canonical.",
	);

	for (const [Source, Target] of Sorted) {
		const Destination = Target === "/" ? "/" : Target + "/";

		Lines.push(`${Pad(Source, 38)}${Pad(Destination, 38)}200`);
	}

	Lines.push("");

	Lines.push("# ── TRAILING-SLASH REWRITES (200) ──");
	Lines.push("# One rule per canonical page.");

	for (const Path of ["/", ...SortedCanonicals]) {
		const Destination = Path === "/" ? "/" : Path + "/";

		if (!Destination.endsWith("//")) {
			Lines.push(`${Pad(Path, 38)}${Pad(Destination, 38)}200`);
		}
	}

	Lines.push("");

	Lines.push("# ── ASSET PASS-THROUGHS (200) ──");

	for (const [Source, Destination] of AssetPrefix) {
		Lines.push(`${Pad(Source, 26)}${Pad(Destination, 26)}200`);
	}

	for (const File of AssetFile) {
		Lines.push(`${Pad(File, 26)}${Pad(File, 26)}200`);
	}

	Lines.push("");

	return Lines.join("\n");
};

/** Write the generated content to both deploy and source locations. */
export const WriteRedirects = async (Content, OutputDirectory, Root) => {
	const Targets = [
		join(OutputDirectory, "_redirects"),
		join(Root, "Public", "_redirects"),
	];

	for (const Target of Targets) {
		await mkdir(dirname(Target), { recursive: true });
		await writeFile(Target, Content, "utf-8");
	}

	return Targets;
};

/**
 * The integration: regenerate _redirects from the live route map on every
 * build (the reference's astro:build:done hook point).
 */
export default () => ({
	name: "redirects",
	hooks: {
		"astro:build:done": async ({ dir, pages, logger }: {
			dir: URL;
			pages: { pathname: string }[];
			logger: { info: (Message: string) => void };
		}) => {
			// The live route map: every page Astro actually built, normalized
			// to the "/docs/install/..." canonical form (no trailing slash).
			const CanonicalPaths = [
				...new Set(
					pages.map((Page) => {
						const Trimmed = Page.pathname.replace(/^\/+|\/+$/g, "");

						return Trimmed === "" ? "/" : "/" + Trimmed;
					}),
				),
			];

			const Content = BuildRedirects(CanonicalPaths);
			const Targets = await WriteRedirects(Content, dir.pathname, process.cwd());

			logger.info(
				`Generated _redirects (${CanonicalPaths.length} pages, ${Content.split("\n").length} lines) → ${Targets.map((Target) => Target.replace(process.cwd(), "")).join(", ")}`,
			);
		},
	},
});
