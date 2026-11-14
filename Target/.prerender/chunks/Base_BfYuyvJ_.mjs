import { n as createComponent, t as createAstro } from "./compiler_DE9Ou0YP.mjs";
import { C as addAttribute, T as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent, m as renderSlotToString, p as renderSlot, t as spreadAttributes, v as renderAllHeadContent } from "./server_CNuTCIdA.mjs";
import "./server_DfI0y8x1.mjs";
import { t as renderScript } from "./script_DodTPwlH.mjs";
import { c as PrimaryLinks, i as IsActive, n as ExternalLinks, o as MenuGroups, r as FooterGroups } from "./Links_GxwTQvcj.mjs";
import { ELEMENT_NODE, parse, renderSync, walkSync } from "ultrahtml";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
// node_modules/astro-capo/src/capo/rules.ts
function has(value) {
	return typeof value === "string";
}
function is(a, b) {
	return a === b;
}
function any(a, b) {
	return has(a) && b.includes(a.toLowerCase());
}
var ElementWeights = {
	META: 10,
	TITLE: 9,
	PRECONNECT: 8,
	ASYNC_SCRIPT: 7,
	IMPORT_STYLES: 6,
	SYNC_SCRIPT: 5,
	SYNC_STYLES: 4,
	PRELOAD: 3,
	DEFER_SCRIPT: 2,
	PREFETCH_PRERENDER: 1,
	OTHER: 0
};
var ElementDetectors = {
	META: isMeta,
	TITLE: isTitle,
	PRECONNECT: isPreconnect,
	DEFER_SCRIPT: isDeferScript,
	ASYNC_SCRIPT: isAsyncScript,
	IMPORT_STYLES: isImportStyles,
	SYNC_SCRIPT: isSyncScript,
	SYNC_STYLES: isSyncStyles,
	PRELOAD: isPreload,
	PREFETCH_PRERENDER: isPrefetchPrerender
};
var META_HTTP_EQUIV_KEYWORDS = [
	"accept-ch",
	"content-security-policy",
	"content-type",
	"default-style",
	"delegate-ch",
	"origin-trial",
	"x-dns-prefetch-control"
];
function isMeta(name, a) {
	if (name === "base") return true;
	if (name !== "meta") return false;
	return has(a.charset) || is(a.name, "viewport") || any(a["http-equiv"], META_HTTP_EQUIV_KEYWORDS);
}
function isTitle(name) {
	return name === "title";
}
function isPreconnect(name, { rel }) {
	return name === "link" && is(rel, "preconnect");
}
function isAsyncScript(name, { src, async }) {
	return name === "script" && has(src) && has(async);
}
function isImportStyles(name, a, children) {
	const importRe = /@import/;
	if (name === "style") return importRe.test(children);
	return false;
}
function isSyncScript(name, { src, defer, async, type = "" }) {
	if (name !== "script") return false;
	return !(has(src) && (has(defer) || has(async) || is(type, "module")) || type.includes("json"));
}
function isSyncStyles(name, { rel }) {
	if (name === "style") return true;
	return name === "link" && is(rel, "stylesheet");
}
function isPreload(name, { rel }) {
	return name === "link" && any(rel, ["preload", "modulepreload"]);
}
function isDeferScript(name, { src, defer, async, type }) {
	if (name !== "script") return false;
	return has(src) && has(defer) || has(src) && is(type, "module") && !has(async);
}
function isPrefetchPrerender(name, { rel }) {
	return name === "link" && any(rel, [
		"prefetch",
		"dns-prefetch",
		"prerender"
	]);
}
function getWeight(element) {
	for (const [id, detector] of Object.entries(ElementDetectors)) {
		const children = element.name === "style" && element.children.length > 0 ? renderSync(element) : "";
		if (detector(element.name, element.attributes, children)) return ElementWeights[id];
	}
	return ElementWeights.OTHER;
}
// node_modules/astro-capo/src/capo/index.ts
function capo(html) {
	const ast = parse(html);
	try {
		walkSync(ast, (node, parent, index) => {
			if (node.type === ELEMENT_NODE && node.name === "head") {
				if (parent) {
					parent.children.splice(index, 1, getSortedHead(node));
					throw "done";
				}
			}
		});
	} catch (e) {
		if (e !== "done") throw e;
	}
	return renderSync(ast);
}
function getSortedHead(head) {
	const children = head.children.map((node) => {
		if (node.type === ELEMENT_NODE) return [getWeight(node), node];
	}).filter(Boolean).sort((a, b) => b[0] - a[0]).map(([_, element]) => element);
	return {
		...head,
		children
	};
}
// node_modules/astro-capo/src/Head.ts
var Head = createComponent({ factory: async (result, props, slots) => {
	let head = "";
	head += `<head${spreadAttributes(props)} data-capo>`;
	head += await renderSlotToString(result, slots.default);
	head += renderAllHeadContent(result);
	head += "</head>";
	return unescapeHTML(capo(head));
} });
// node_modules/astro/components/ClientRouter.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ClientRouter;
	const { fallback = "animate" } = Astro.props;
	return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"> <meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/node_modules/astro/components/ClientRouter.astro", void 0);
// Source/Library/Versions.ts
/** The monorepo root marker: the primary binary crate's manifest. */
var Marker = join("crates", "aphrodite", "Cargo.toml");
/**
* The monorepo root, found by walking up from the candidate directories
* until one contains the marker. The candidates matter because Vite's SSR
* bundle rewrites import.meta.url to the bundled chunk's location - the
* source-relative path is tried first, then the build's working directory
* (astro runs from Site/, the monorepo root's child) and the cwd itself.
*/
function FindRoot() {
	const Candidates = [
		resolve(dirname(fileURLToPath(import.meta.url)), "../../..", ".."),
		resolve(process.cwd(), ".."),
		process.cwd()
	];
	for (const Candidate of Candidates) if (Candidate && existsSync(join(Candidate, Marker))) return Candidate;
	return "";
}
var Root = FindRoot();
/** Read a text file, or null when it is missing or unreadable. */
function ReadText(Path) {
	try {
		return readFileSync(Path, "utf8");
	} catch {
		return null;
	}
}
/** The `version = "x.y.z"` field of a Cargo.toml, or null. */
function ReadCargoVersion(Crate) {
	return ReadText(join(Root, "crates", Crate, "Cargo.toml"))?.match(/^version\s*=\s*"([^"]+)"/m)?.[1] ?? null;
}
/** The `version: x.y.z` key of a YAML manifest, or null. */
function ReadYamlVersion() {
	return ReadText(join(Root, "plugins", "aphrodite", "plugin.yaml"))?.match(/^version:\s*([^\s#]+)/m)?.[1] ?? null;
}
/**
* The vendored fork crate's version, or null. The fork lives at
* vendor/headroom (a git submodule); the binary links its headroom-core
* library only - upstream's proxy features are not part of the build.
*/
function ReadHeadroomVersion() {
	return ReadText(join(Root, "vendor", "headroom", "crates", "headroom-core", "Cargo.toml"))?.match(/^version\s*=\s*"([^"]+)"/m)?.[1] ?? null;
}
/** The pinned binary version file's trimmed contents, or null. */
function ReadBinaryVersionFile() {
	return ReadText(join(Root, "plugins", "aphrodite", "BINARY_VERSION"))?.trim() || null;
}
/** The CHANGELOG head: the latest entry's version, date, title and pairing. */
function ReadChangelogHead() {
	const Text = ReadText(join(Root, "CHANGELOG.md"));
	if (!Text) return null;
	const Head = Text.match(/^##\s+v([^\s-]+)(?:\s+-\s+([^\n(]*))?\s*(?:\(([^)]*)\))?/m);
	if (!Head) return null;
	const Pairing = Text.match(/Binary\s+`([^`]+)`,\s*plugin\s+`([^`]+)`/);
	return {
		Version: Head[1] ?? "",
		Date: Head[3]?.trim() ?? "",
		Title: Head[2]?.trim() ?? "",
		Pairing: Pairing ? `Binary \`${Pairing[1]}\`, plugin \`${Pairing[2]}\`` : ""
	};
}
var ChangelogHead = ReadChangelogHead();
/** The release-note URL for a version tag ("1.6.6" -> the Aphrodite/v1.6.6 tag). */
function ReleaseNote(Version) {
	return `${ExternalLinks.Releases}/tag/Aphrodite%2Fv${Version}`;
}
/** The documented fallbacks: the previously verified pairing, kept in the same shapes the Drift checks extract. */
var Fallback = {
	Binary: "1.8.0",
	Hermes: "1.8.0",
	Plugin: "2.3.1",
	Headroom: "0.2.0",
	BinaryVersionFile: "1.6.4",
	Changelog: {
		Version: "1.8.0",
		Date: "2026-11-08",
		Title: "Bounded CCR store: retention caps, index-driven sweep, truthful telemetry",
		Pairing: "Binary `1.7.0 → 1.8.0`, plugin `2.3.0 → 2.3.1`"
	}
};
/** The build-time snapshot of the monorepo's real versions (fallback when a primary is missing). */
var Versions = {
	/** The binary crate's version (crates/aphrodite/Cargo.toml). */
	Binary: ReadCargoVersion("aphrodite") ?? Fallback.Binary,
	/** The Hermes integration crate's version (crates/aphrodite-hermes/Cargo.toml). */
	Hermes: ReadCargoVersion("aphrodite-hermes") ?? Fallback.Hermes,
	/** The Hermes plugin spec version (plugins/aphrodite/plugin.yaml). */
	Plugin: ReadYamlVersion() ?? Fallback.Plugin,
	/** The vendored fork crate's version (vendor/headroom/crates/headroom-core/Cargo.toml). */
	Headroom: ReadHeadroomVersion() ?? Fallback.Headroom,
	/** The plugin downloader's pinned binary version (plugins/aphrodite/BINARY_VERSION). */
	BinaryVersionFile: ReadBinaryVersionFile() ?? Fallback.BinaryVersionFile,
	/** The CHANGELOG head's entry version (the Drift-aligned current release). */
	ChangelogVersion: ChangelogHead?.Version ?? Fallback.Changelog.Version,
	/** The CHANGELOG head's entry date. */
	ChangelogDate: ChangelogHead?.Date ?? Fallback.Changelog.Date,
	/** The CHANGELOG head's entry title. */
	ChangelogTitle: ChangelogHead?.Title ?? Fallback.Changelog.Title,
	/** The CHANGELOG head's declared pairing ("Binary `1.6.5 → 1.6.6`, plugin `2.2.5 → 2.2.6`"). */
	ChangelogPairing: ChangelogHead?.Pairing || Fallback.Changelog.Pairing
};
/** The version placements' rendered forms, composed from the snapshot. */
var Stamps = {
	/** "v1.6.6" - the binary version stamp. */
	Binary: () => `v${Versions.Binary}`,
	/** "v2.2.6" - the plugin spec version stamp. */
	Plugin: () => `v${Versions.Plugin}`,
	/** "HERMES PLUGIN SPEC v2.2.6" - the plugin spec chip. */
	PluginSpec: () => `HERMES PLUGIN SPEC v${Versions.Plugin}`,
	/** "v1.6.6 BINARY" - the footer's binary stamp. */
	BinarySuffix: () => `v${Versions.Binary} BINARY`,
	/** "1.6.6 ↔ 2.2.6" - the current pairing display. */
	Pairing: () => `${Versions.Binary} ↔ ${Versions.Plugin}`,
	/** The current release's note URL. */
	Release: ReleaseNote(Versions.Binary)
};
// Source/Component/ZineKicker.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineKicker = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineKicker;
	const { Tone = "dust", Size = "label", As = "span" } = Astro.props;
	const Palette = {
		dust: "text-zinc-dust",
		white: "text-bone-white",
		canary: "text-stamped-canary",
		teal: "text-weathered-teal",
		ink: "text-soot-black",
		newsprint: "text-bone-newsprint"
	}[Tone];
	const Form = {
		label: "font-mono text-base font-black uppercase tracking-widest",
		title: "font-headline text-lg font-black uppercase sm:text-xl"
	}[Size];
	return renderTemplate`${renderComponent($$result, "Element", As, { "class": `${Form} ${Palette}` }, { "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineKicker.astro", void 0);
// Source/Layout/Base.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$Base = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Base;
	const { Title = "Aphrodite", Description = "" } = Astro.props;
	const DescriptionText = Description || "CCR compression proxy + absorptive preview pipeline for Hermes Agent.";
	const Origin = Astro.site?.origin;
	const Absolute = (Path) => Origin ? new URL(Path, Origin).href : Path;
	return renderTemplate`<html lang="en" class="no-js dark" dir="ltr"> ${renderComponent($$result, "Head", Head, {}, { "default": ($$result) => renderTemplate` ${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Layout/Base.astro?astro&type=script&index=0&lang.ts")}<title>${Title}</title> <meta charset="utf-8"> <meta name="description"${addAttribute(DescriptionText, "content")}> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta name="theme-color" content="#09090b"> <meta name="format-detection" content="telephone=no"> <meta name="twitter:dnt" content="on"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"${addAttribute(Title, "content")}> <meta name="twitter:description"${addAttribute(DescriptionText, "content")}> <meta name="twitter:image"${addAttribute(Absolute("/Brand/OG.png?v=2"), "content")}>  <meta property="og:type" content="website"> <meta property="og:title"${addAttribute(Title, "content")}> <meta property="og:description"${addAttribute(DescriptionText, "content")}> <meta property="og:image"${addAttribute(Absolute("/Brand/OG.png?v=2"), "content")}> <meta property="og:url"${addAttribute(Absolute(Astro.url.pathname), "content")}> <link rel="canonical"${addAttribute(Absolute(Astro.url.pathname), "href")}>  <script crossorigin=\"anonymous\" type="application/ld+json">${unescapeHTML(JSON.stringify({
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: "Aphrodite",
		applicationCategory: "DeveloperApplication",
		operatingSystem: "Linux, macOS, Windows",
		softwareVersion: Versions.Binary,
		url: Absolute("/"),
		offers: {
			"@type": "Offer",
			price: "0"
		},
		license: "https://spdx.org/licenses/CC0-1.0.html",
		description: "CCR compression proxy + absorptive preview pipeline for Hermes Agent."
	}))}<\/script> <link rel="preload" href="/Font/space-grotesk-latin.woff2" as="font" type="font/woff2" crossorigin crossorigin=\"anonymous\"> <link rel="preload" href="/Font/jetbrains-mono-latin.woff2" as="font" type="font/woff2" crossorigin crossorigin=\"anonymous\"> <link rel="preload" href="/Font/dm-sans-latin.woff2" as="font" type="font/woff2" crossorigin crossorigin=\"anonymous\"> <link rel="manifest" href="/Manifest.json" crossorigin="use-credentials">  ${renderSlot($$result, $$slots["Head"])}  <link rel="icon" href="/Brand/aphrodite.svg" type="image/svg+xml" sizes="any"> <link rel="icon" href="/Brand/aphrodite-32.png" type="image/png" sizes="32x32"> <link rel="apple-touch-icon" href="/Brand/aphrodite-180.png"> ${renderComponent($$result, "ClientRouter", $$ClientRouter, {})} ` })} ${maybeRenderHead($$result)}<body class="relative min-h-screen overflow-x-hidden"> <!-- SVG grunge noise filter (texture layer 3) --><svg aria-hidden="true" class="hidden"> <defs> <filter height="100%" id="grunge-noise" width="100%" x="0%" y="0%"> <feTurbulence baseFrequency="0.82" numOctaves="4" result="noise" stitchTiles="stitch" type="fractalNoise"></feTurbulence> <feColorMatrix result="coloredNoise" type="matrix" values="0 0 0 0 0.1   0 0 0 0 0.1   0 0 0 0 0.1   0 0 0 0.18 0"></feColorMatrix> <feBlend in="SourceGraphic" in2="coloredNoise" mode="multiply"></feBlend> </filter> </defs> </svg> <!-- Ambient photocopy screen, halftone screen and grunge overlays --> <div class="photocopy-grit pointer-events-none fixed inset-0 z-0 opacity-40"></div> <div class="halftone-screen pointer-events-none fixed inset-0 z-0 opacity-30"></div> <div class="pointer-events-none fixed inset-0 z-0 opacity-60 mix-blend-overlay" style="filter: url(#grunge-noise);"></div> <!-- Site header (synthesized, zine skin) --> <header class="sticky top-0 z-40 w-full border-b-2 border-oxblood-dark bg-soot-black/95"> <nav aria-label="Site" class="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 sm:px-8"> <a class="flex items-center gap-2" href="/"> <img class="h-5 w-5" src="/Brand/aphrodite.svg" alt="" width="20" height="20"> <span class="font-mono text-base font-bold tracking-widest text-bone-white">APHRODITE</span> </a> <nav aria-label="Primary" class="hidden items-center gap-3 lg:flex"> ${PrimaryLinks.map((Link) => {
		const Active = IsActive(Astro.url.pathname, Link);
		return renderTemplate`<a${addAttribute(Link.Href, "href")}${addAttribute(Active ? "page" : void 0, "aria-current")}${addAttribute(Active ? "bg-raw-blood px-3 py-1 font-mono text-base font-bold tracking-widest text-bone-white" : "px-1 py-1 font-mono text-base tracking-widest text-zinc-dust hover:text-bone-white", "class")}> ${Link.Label} </a>`;
	})} </nav> <button id="nav-toggle" class="border border-raw-blood bg-carbon-void px-3 py-1 font-mono text-base font-bold tracking-widest text-bone-newsprint" aria-expanded="false" aria-controls="nav-menu">
MENU
</button> </nav> <div id="nav-menu" class="hidden border-t border-oxblood-dark bg-soot-black"> <!-- Tree menu: the registry read as two levels - the PRIMARY group
				     (the bar entries) then MORE (the rest), each as a grid of
				     cells so the order follows the registry. The group labels
				     carry the tape-stamp skin. --><div class="flex flex-col gap-6 px-5 py-4"> <nav aria-label="Primary (mobile)" class="flex flex-col gap-2"> <p class="w-fit border border-black bg-raw-blood px-2 py-0.5 font-mono text-base font-black uppercase tracking-widest text-bone-white shadow-[2px_2px_0px_#000] sm:-rotate-1">
PRIMARY
</p> <div class="grid grid-cols-2 gap-x-4"> ${PrimaryLinks.map((Link) => {
		const Active = IsActive(Astro.url.pathname, Link);
		return renderTemplate`<a${addAttribute(Link.Href, "href")}${addAttribute(Active ? "page" : void 0, "aria-current")}${addAttribute(Active ? "border-b border-oxblood-dark/50 bg-raw-blood px-2 py-2 font-mono text-base font-bold tracking-widest text-bone-white" : "border-b border-oxblood-dark/50 px-2 py-2 font-mono text-base tracking-widest text-bone-newsprint", "class")}> ${Link.Label} </a>`;
	})} </div> </nav> <!-- MORE: three labelled groups (Surface / Knobs / Record), not a
					     flat ten-entry list. The grouping is the registry's \`Group\`
					     field read through MenuGroups, so the MORE tree and the
					     footer's columns cannot disagree. --> <nav aria-label="More" class="flex flex-col gap-4"> <p class="w-fit border border-black bg-stamped-canary px-2 py-0.5 font-mono text-base font-black uppercase tracking-widest text-soot-black shadow-[2px_2px_0px_#000] sm:rotate-1">
MORE
</p> ${MenuGroups.map(({ Group, Links }) => renderTemplate`<div class="flex flex-col gap-2"> <p class="w-fit border border-black bg-raw-blood px-2 py-0.5 font-mono text-[13px] font-black uppercase tracking-widest text-bone-white shadow-[2px_2px_0px_#000]">
THE ${Group.toUpperCase()} </p> <div class="grid grid-cols-2 gap-x-4"> ${Links.map((Link) => {
		const Active = IsActive(Astro.url.pathname, Link);
		return renderTemplate`<a${addAttribute(Link.Href, "href")}${addAttribute(Active ? "page" : void 0, "aria-current")}${addAttribute(Active ? "border-b border-oxblood-dark/50 bg-raw-blood px-2 py-2 font-mono text-base font-bold tracking-widest text-bone-white" : "border-b border-oxblood-dark/50 px-2 py-2 font-mono text-base tracking-widest text-bone-newsprint", "class")}> ${Link.Label} </a>`;
	})} </div> </div>`)} </nav> </div> </div> </header> <div class="relative z-10 flex grow flex-col"> ${renderSlot($$result, $$slots["default"])} <!-- The colophon: the zine's closing page, not a web-app link list.
			     Three bands, each with one job - the build-time status facts, the
			     registry's destinations grouped into labelled landmarks, then the
			     record (license, author, and the external canon). The facts are
			     <span>s, never links, and the only things inside a <nav> are
			     destinations, so "v1.8.1 BINARY" can never read as a route. --> <footer class="mt-auto border-t-4 border-blood-crimson"> <div class="mx-auto w-full max-w-[1440px] px-5 pb-10 pt-14 sm:px-8 lg:px-14"> <!-- 1. STATUS - the facts, as facts --><div class="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-oxblood-dark pb-6"> <span class="flex items-center gap-2"> <img class="h-4 w-4" src="/Brand/aphrodite.svg" alt="" width="16" height="16"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "white" }, { "default": ($$result) => renderTemplate`APHRODITE CCR CORE` })} </span> <span class="font-mono text-base text-zinc-dust">
BINARY <span class="font-bold text-stamped-canary">${Stamps.Binary()}</span> </span> <span class="font-mono text-base text-zinc-dust">
PLUGIN <span class="font-bold text-stamped-canary">${Stamps.Plugin()}</span> </span> <a class="font-mono text-base text-zinc-dust transition-colors hover:text-bone-white" href="https://spdx.org/licenses/CC0-1.0.html" rel="license">CC0-1.0</a> </div> <!-- 2. THE COLUMNS - one landmark per registry group, 1 -> 2 -> 4 --> <div class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"> ${FooterGroups.map(({ Group, Links }) => renderTemplate`<nav${addAttribute(`Footer · ${Group}`, "aria-label")}> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "dust" }, { "default": ($$result) => renderTemplate`${Group.toUpperCase()}` })} <ul class="mt-4 flex flex-col gap-2"> ${Links.map((Link) => {
		const Active = IsActive(Astro.url.pathname, Link);
		return renderTemplate`<li> <a${addAttribute(Active ? "font-mono text-base font-bold tracking-widest text-bone-white" : "font-mono text-base tracking-widest text-zinc-dust transition-colors hover:text-bone-white", "class")}${addAttribute(Link.Href, "href")}${addAttribute(Active ? "page" : void 0, "aria-current")}> ${Link.Label} </a> </li>`;
	})} </ul> </nav>`)} </div> <!-- 3. THE RECORD - the license, the author, the external canon --> <div class="mt-12 flex flex-col gap-5 border-2 border-black bg-carbon-void p-6 shadow-[4px_4px_0px_#000] sm:flex-row sm:items-end sm:justify-between"> <div class="flex flex-col gap-3"> <p class="w-fit border border-black bg-raw-blood px-3 py-0.5 font-mono text-[13px] font-black uppercase tracking-widest text-bone-white shadow-[2px_2px_0px_#000] sm:-rotate-1">
COLOPHON
</p> <p class="font-mono text-base text-zinc-dust">
CC0-1.0 · built in the open by
<a class="text-bone-newsprint underline decoration-stamped-canary transition-colors hover:text-bone-white"${addAttribute(ExternalLinks.PlayForm, "href")}>PlayForm</a> </p> </div> <nav aria-label="Footer · Elsewhere" class="flex flex-wrap gap-x-6 gap-y-2 font-mono text-base text-zinc-dust"> <a class="tracking-widest transition-colors hover:text-bone-white"${addAttribute(ExternalLinks.Repository, "href")}>REPOSITORY</a> <a class="tracking-widest transition-colors hover:text-bone-white"${addAttribute(ExternalLinks.Releases, "href")}>RELEASES</a> <a class="tracking-widest transition-colors hover:text-bone-white"${addAttribute(ExternalLinks.Crates, "href")}>CRATES.IO</a> </nav> </div> </div> </footer> </div> <!-- Copy runtime: any [data-copy] element copies its value and shows the toast stamp --> <div id="copy-toast" role="status" aria-live="polite" class="pointer-events-none fixed bottom-4 right-4 z-50 hidden border-2 border-black bg-raw-blood px-3 py-1.5 font-mono text-base font-black uppercase tracking-widest text-bone-white shadow-[3px_3px_0px_#000]">
COPIED TO SPOOL
</div>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Layout/Base.astro?astro&type=script&index=1&lang.ts")} </body> </html>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Layout/Base.astro", void 0);
export { Versions as a, Stamps as i, $$ZineKicker as n, ReleaseNote as r, $$Base as t };
