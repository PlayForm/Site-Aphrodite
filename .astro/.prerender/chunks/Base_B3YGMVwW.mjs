import { E as unescapeHTML, _ as renderTemplate, b as createRenderInstruction, h as renderSlotToString, m as renderSlot, n as spreadAttributes, u as renderComponent, v as maybeRenderHead, w as addAttribute, y as renderAllHeadContent } from "./server_DdG-dV1Z.mjs";
import { G as UnavailableAstroGlobal, X as AstroError, _ as InvalidComponentArgs } from "./errors-data_XstbcoNP.mjs";
import { ELEMENT_NODE, parse, renderSync, walkSync } from "ultrahtml";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
// node_modules/@astrojs/runtime/dist/internal/server/astro-component.js
function validateArgs(args) {
	if (args.length !== 3) return false;
	if (!args[0] || typeof args[0] !== "object") return false;
	return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
	const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
	const fn = (...args) => {
		if (!validateArgs(args)) throw new AstroError({
			...InvalidComponentArgs,
			message: InvalidComponentArgs.message(name)
		});
		return cb(...args);
	};
	Object.defineProperty(fn, "name", {
		value: name,
		writable: false
	});
	fn.isAstroComponentFactory = true;
	fn.moduleId = moduleId;
	fn.propagation = propagation;
	return fn;
}
function createComponentWithOptions(opts) {
	return baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
}
function createComponent(arg1, moduleId, propagation) {
	if (typeof arg1 === "function") return baseCreateComponent(arg1, moduleId, propagation);
	else return createComponentWithOptions(arg1);
}
// node_modules/@astrojs/runtime/dist/internal/server/astro-global.js
var ASTRO_GENERATOR = `Astro v7.4.11`;
function createError(name) {
	return new AstroError({
		...UnavailableAstroGlobal,
		message: UnavailableAstroGlobal.message(name)
	});
}
function createAstro(site) {
	return {
		get site() {
			console.warn(`Astro.site inside getStaticPaths is deprecated and will be removed in a future major version of Astro. Use import.meta.env.SITE instead`);
			return site ? new URL(site) : void 0;
		},
		get generator() {
			console.warn(`Astro.generator inside getStaticPaths is deprecated and will be removed in a future major version of Astro.`);
			return ASTRO_GENERATOR;
		},
		get callAction() {
			throw createError("callAction");
		},
		get clientAddress() {
			throw createError("clientAddress");
		},
		get cookies() {
			throw createError("cookies");
		},
		get csp() {
			throw createError("csp");
		},
		get currentLocale() {
			throw createError("currentLocale");
		},
		get getActionResult() {
			throw createError("getActionResult");
		},
		get isPrerendered() {
			throw createError("isPrerendered");
		},
		get locals() {
			throw createError("locals");
		},
		get originPathname() {
			throw createError("originPathname");
		},
		get params() {
			throw createError("params");
		},
		get preferredLocale() {
			throw createError("preferredLocale");
		},
		get preferredLocaleList() {
			throw createError("preferredLocaleList");
		},
		get props() {
			throw createError("props");
		},
		get redirect() {
			throw createError("redirect");
		},
		get request() {
			throw createError("request");
		},
		get response() {
			throw createError("response");
		},
		get rewrite() {
			throw createError("rewrite");
		},
		get routePattern() {
			throw createError("routePattern");
		},
		get self() {
			throw createError("self");
		},
		get slots() {
			throw createError("slots");
		},
		get url() {
			throw createError("url");
		},
		get session() {
			throw createError("session");
		},
		get cache() {
			throw createError("cache");
		},
		get logger() {
			throw createError("logger");
		}
	};
}
// node_modules/@astrojs/runtime/dist/internal/server/render/script.js
/**
* Relies on the `renderScript: true` compiler option
* @experimental
*/
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script crossorigin=\"anonymous\" type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script crossorigin=\"anonymous\" type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
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
var $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ClientRouter;
	const { fallback = "animate" } = Astro.props;
	return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"> <meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/node_modules/astro/components/ClientRouter.astro", void 0);
/** The five groups, in reading order - the order a reader asks the questions. */
var Groups = [
	{
		Group: "Start",
		Label: "Start",
		Note: "Where to begin: what Aphrodite is, and the first command that makes it run. The old Product column, renamed for what it is for."
	},
	{
		Group: "Explore",
		Label: "Explore",
		Note: "The pipeline demonstrated - the worked scenarios, the filterable gallery, the simulator. The old Knobs column: the knobs are here, but so is everything else you can try."
	},
	{
		Group: "Evidence",
		Label: "Evidence",
		Note: "What the claims are worth: the measured figures, and one session followed from gate to history."
	},
	{
		Group: "Reference",
		Label: "Reference",
		Note: "The surface and its knobs, in detail: the documentation tree, the plugin, the tools, the integration inside Hermes, every configuration key."
	},
	{
		Group: "Project",
		Label: "Project",
		Note: "The record of the thing itself: versions, the 64-second brief, and the repositories it is built in. The old Record column."
	}
];
/**
* The group's own record. Total, not partial: an unknown key answers with the
* first group rather than throwing, because a navigation column that crashes
* the build over a typo is worse than one that reads oddly.
*/
function SectionOf(Group) {
	return Groups.find((Section) => Section.Group === Group) ?? Groups[0];
}
/** The footer's columns and the MORE groups, in reading order. */
var GroupOrder = Groups.map(({ Group }) => Group);
/**
* THE ROUTES - every internal path, by the name the site calls it.
*
* The registry owned labels, groups and promises but not the destinations
* themselves: pages still spelled `href="/setup/"` by hand, so renaming a
* route meant a search across fourteen files and a typo was a 404 nobody saw
* until deploy. A path is typed once, here, and every caller - the header, the
* footer, the breadcrumb, the pages - reads it back.
*
* `Routes` is deliberately broader than `AllLinks`: the three retired pages
* (CRATES, FLAVORS, HOOKS) are absent from navigation by decision, but they
* are still served, and a page linking to one must not type the path either.
*/
var Routes = {
	Home: "/",
	Setup: "/setup/",
	Docs: "/docs/",
	Benchmarks: "/benchmarks/",
	CaseStudy: "/case-study/",
	Showcase: "/showcase/",
	Examples: "/examples/",
	Workbench: "/workbench/",
	Plugin: "/plugin/",
	Hermes: "/hermes/",
	Tools: "/tools/",
	Config: "/config/",
	Versions: "/versions/",
	Brief: "/presentation/",
	/** Retired from navigation, still served: the crate layout. */
	Crates: "/crates/",
	/** Retired from navigation, still served: the host map. */
	Flavors: "/flavors/",
	/** Retired from navigation, still served: the hook chain. */
	Hooks: "/hooks/"
};
/**
* A docs page: the tree's own prefix plus the page's slug, so `/docs/` is not
* typed a second time. `DocsRoute("config/aphrodite-toml")` answers
* `/docs/config/aphrodite-toml/` - the shape the content collection builds.
*/
function DocsRoute(Slug) {
	return `${Routes.Docs}${Slug}/`;
}
/**
* A route plus one of its anchors - a section of a page rather than a page.
* `Anchor(Routes.Setup, "proxy")` answers `/setup/#proxy`.
*/
function Anchor(Href, Id) {
	return `${Href}#${Id}`;
}
/**
* Primary header entries - always visible on desktop.
*
* Membership is unchanged: these are the six routes the bar has always
* carried. They now declare their group like every other entry, so the footer
* column they belong to is a fact about the entry rather than a default.
*/
var PrimaryLinks = [
	{
		Href: Routes.Home,
		Label: "OVERVIEW",
		Group: "Start",
		Promise: "What Aphrodite is in one page: the compression pipeline, the previews it writes, and the numbers that pay for it."
	},
	{
		Href: Routes.Setup,
		Label: "SETUP",
		Group: "Start",
		Promise: "The installation contract: one command, two proxy listeners, the plugin enabled, and a check that proves it."
	},
	{
		Href: Routes.Docs,
		Label: "DOCS",
		Group: "Reference",
		Promise: "The documentation tree - proxy, plugin, hooks, the CCR engine - written to be read in order."
	},
	{
		Href: Routes.Benchmarks,
		Label: "BENCHMARKS",
		Group: "Evidence",
		Promise: "The measured figures, each with the method that produced it, so a number can be checked instead of believed."
	},
	{
		Href: Routes.CaseStudy,
		Label: "CASE STUDY",
		Group: "Evidence",
		Promise: "One session followed end to end - why the pipeline is shaped this way, argued from what it did to that session."
	},
	{
		Href: Routes.Showcase,
		Label: "SHOWCASE",
		Group: "Explore",
		Promise: "The gallery: filterable previews of what the output looks like after the pipeline, defaults in view. Not the mechanics - see Examples for those."
	}
];
/**
* Secondary header entries - the mobile tree's MORE groups. Retired at the
* restructure: HOOKS (folded into PLUGIN), FLAVORS (folded into HERMES) and
* CRATES (folded into VERSIONS); BRIEF (`/presentation/`, the 64-second deck)
* is now linked - it was reachable only by typing the URL.
*
* The order here is the order of the groups, and inside a group the order a
* reader needs: the two confusable pairs sit adjacent (EXAMPLES before
* SHOWCASE's neighbour WORKBENCH, PLUGIN immediately before HERMES) so the
* promises can be read against each other.
*/
var MenuLinks = [
	{
		Href: Routes.Examples,
		Label: "EXAMPLES",
		Group: "Explore",
		Promise: "The mechanics, worked: seven scenarios step by step - compress, marker, retrieve - and the two flows that close the loop."
	},
	{
		Href: Routes.Workbench,
		Label: "WORKBENCH",
		Group: "Explore",
		Promise: "The simulator: paste any tool output, turn the threshold knobs yourself, and watch the preview and the marker appear."
	},
	{
		Href: Routes.Plugin,
		Label: "PLUGIN",
		Group: "Reference",
		Promise: "The plugin itself: the thin registration shim, the hook chain, the file layout, and the download that verifies its own hash."
	},
	{
		Href: Routes.Hermes,
		Label: "HERMES",
		Group: "Reference",
		Promise: "The integration: how Hermes loads the plugin, the turn's hook chain, and what the agent sees inside it. Not the plugin's own spec - see Plugin."
	},
	{
		Href: Routes.Tools,
		Label: "TOOLS",
		Group: "Reference",
		Promise: "The thirteen tools the agent calls - names, arguments, and what each returns, including the marker retrieval round-trip."
	},
	{
		Href: Routes.Config,
		Label: "CONFIG",
		Group: "Reference",
		Promise: "Every key in aphrodite.toml - the pick chain, the proxy pair, the compression knobs - with its default and whether it hot-reloads."
	},
	{
		Href: Routes.Versions,
		Label: "VERSIONS",
		Group: "Project",
		Promise: "The release log: binary and plugin versions side by side, with the notes that shipped against each."
	},
	{
		Href: Routes.Brief,
		Label: "BRIEF",
		Group: "Project",
		Promise: "The 64-second presentation: the raw log, the split, and the four steps - the whole product in one sitting."
	}
];
/** Every internal route the header knows about - still the one flat set. */
var AllLinks = [...PrimaryLinks, ...MenuLinks];
/**
* The footer's columns: a VIEW of AllLinks, never a second registry, so no
* route can go missing from the footer. An entry with no `Group` is Start.
*
* Each column also carries its group's `Label` and `Note`, so a caller can
* print the heading and the one-line purpose without a second lookup.
*/
var FooterGroups = GroupOrder.map((Group) => ({
	...SectionOf(Group),
	Links: AllLinks.filter((Link) => (Link.Group ?? "Start") === Group)
}));
/**
* The MORE groups: the same view over the SECONDARY entries.
*
* It is derived from MenuLinks rather than from `FooterGroups` minus a group,
* because what the bar shows is now defined by membership - the six routes in
* PrimaryLinks are always visible, so they must not reappear under MORE - and
* not by a special "Product" column existing. A group with no secondary
* entries is dropped rather than rendered as an empty heading.
*/
var MenuGroups = GroupOrder.map((Group) => ({
	...SectionOf(Group),
	Links: MenuLinks.filter((Link) => (Link.Group ?? "Start") === Group)
})).filter(({ Links }) => Links.length > 0);
/**
* Short labels for the on-page section index (SectionNav).
*
* A section heading is written for a reader who has ARRIVED - "Compress,
* marker, retrieve, byte-exact" tells them what they are about to read. The
* index is read by a reader who is SCANNING, and nine sentence-like titles in
* uppercase widely-tracked mono wrap to four lines on a phone and stick there.
* This map is the scanning voice for the same anchors.
*
* It lives here because it is navigation vocabulary, not page content - and it
* is a FALLBACK, never an override: SectionNav prefers a short label the page
* passes on the section entry itself, then this map, then the section's own
* label. A page that adds a section is therefore never label-less, and a page
* that renames one keeps its own words.
*
* The key is an anchor ID. If two pages ever share an ID with different
* meanings, the page passes its own `Nav` label rather than this map growing a
* second entry it cannot disambiguate.
*/
var NavLabels = {
	thresholds: "Thresholds",
	retrieval: "Retrieve",
	"chain-split": "Compound commands",
	directives: "Directives",
	relay: "Relay",
	"skip-gate": "Pass-through",
	"dual-listener": "Storage",
	"turn-cycle": "Turn cycle",
	"runtime-home": "Runtime home"
};
/** External canonical URLs, verbatim from the README's documented flows. */
var ExternalLinks = {
	Crates: "https://crates.io/crates/aphrodite",
	Repository: "https://github.com/PlayForm/Aphrodite",
	HermesRepository: "https://github.com/PlayForm/Aphrodite-Hermes",
	/** The Hermes plugin guide - the plugin system plus the plugin catalog (the store) install flow. */
	HermesGuide: "https://hermes-agent.nousresearch.com/docs/user-guide/features/plugins/",
	/** The releases listing; the release-note URLs compose with the Aphrodite%2Fv<ver> tag form (Library/Versions.ts). */
	Releases: "https://github.com/PlayForm/Aphrodite/releases",
	PlayForm: "https://PlayForm.Cloud"
};
/**
* True when the site page at Path is the page a link points at (the root
* matches only itself; every other route matches by prefix).
*/
function IsActive(Path, Link) {
	return Link.Href === Routes.Home ? Path === Routes.Home : Path.startsWith(Link.Href);
}
/** The Aphrodite repository, linked at the canonical Current branch. */
var OurRepo = {
	Base: "https://github.com/PlayForm/Aphrodite",
	Branch: "tree/Current"
};
/**
* Compose a repository URL: Link(OurRepo, "docs/proxy/handlers.md")
* -> "https://github.com/PlayForm/Aphrodite/tree/Current/docs/proxy/handlers.md".
* The one function every composed repository URL flows through - a future
* branch rename or scheme change edits this file alone.
*/
function Link(Repo, Path) {
	return `${Repo.Base}/${Repo.Branch}/${Path}`;
}
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
/**
* The generated fact file: `Scripts/Prepare.ts` writes it from
* `Module/Aphrodite`, and it is the site's own copy of the primaries - so a
* build on a clean clone (no monorepo above it, no submodule checked out)
* renders the real versions instead of the documented fallbacks.
*
* Read from two anchors for the same reason `FindRoot` tries several: Vite's
* SSR bundle rewrites `import.meta.url`, and the build's working directory is
* the Site root.
*/
function ReadGenerated() {
	const Candidates = [resolve(dirname(fileURLToPath(import.meta.url)), "..", "Generated", "Facts", "Versions.json"), resolve(process.cwd(), "Source", "Generated", "Facts", "Versions.json")];
	for (const Candidate of Candidates) try {
		return JSON.parse(readFileSync(Candidate, "utf8"));
	} catch {}
	return null;
}
/** The generated snapshot, or null when Prepare has not run in this tree. */
var Generated = ReadGenerated();
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
/** The documented fallbacks: the previously verified pairing, kept in the same shapes the generator emits. */
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
/** The build-time snapshot of the monorepo's real versions (generated first, then the checkout, then the fallback). */
var Versions = {
	/** The binary crate's version (crates/aphrodite/Cargo.toml). */
	Binary: Generated?.Binary?.Version ?? ReadCargoVersion("aphrodite") ?? Fallback.Binary,
	/** The Hermes integration crate's version (crates/aphrodite-hermes/Cargo.toml). */
	Hermes: Generated?.Hermes?.Version ?? ReadCargoVersion("aphrodite-hermes") ?? Fallback.Hermes,
	/** The Hermes plugin spec version (plugins/aphrodite/plugin.yaml). */
	Plugin: Generated?.Plugin?.Version ?? ReadYamlVersion() ?? Fallback.Plugin,
	/** The vendored fork crate's version (vendor/headroom/crates/headroom-core/Cargo.toml). */
	Headroom: Generated?.Headroom?.Version ?? ReadHeadroomVersion() ?? Fallback.Headroom,
	/** The plugin downloader's pinned binary version (plugins/aphrodite/BINARY_VERSION). */
	BinaryVersionFile: Generated?.BinaryVersionFile?.Version ?? ReadBinaryVersionFile() ?? Fallback.BinaryVersionFile,
	/** The CHANGELOG head's entry version (the generated current release). */
	ChangelogVersion: Generated?.Changelog?.Version ?? ChangelogHead?.Version ?? Fallback.Changelog.Version,
	/** The CHANGELOG head's entry date. */
	ChangelogDate: Generated?.Changelog?.Date ?? ChangelogHead?.Date ?? Fallback.Changelog.Date,
	/** The CHANGELOG head's entry title. */
	ChangelogTitle: Generated?.Changelog?.Title ?? ChangelogHead?.Title ?? Fallback.Changelog.Title,
	/** The CHANGELOG head's declared pairing ("Binary `1.6.5 → 1.6.6`, plugin `2.2.5 → 2.2.6`"). */
	ChangelogPairing: Generated?.Changelog?.Pairing || ChangelogHead?.Pairing || Fallback.Changelog.Pairing
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
var $$Base = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Base;
	const { Title = "Aphrodite", Description = "" } = Astro.props;
	const DescriptionText = Description || "CCR compression proxy + absorptive preview pipeline for Hermes Agent.";
	const Origin = Astro.site?.origin;
	const Absolute = (Path) => Origin ? new URL(Path, Origin).href : Path;
	return renderTemplate`<html lang="en" class="no-js dark" dir="ltr"> ${renderComponent($$result, "Head", Head, {}, { "default": ($$result) => renderTemplate` <script crossorigin=\"anonymous\">
			// The no-js/js switch is set before the first paint, because the
			// stylesheet reads it: the reveal pre-hide and the stepper's
			// collapsed frame both apply only under \`html.js\`, so a reader
			// without JavaScript never has content hidden from them.
			document.documentElement.classList.remove("no-js");
			document.documentElement.classList.add("js");

			// That switch is only safe while the runtimes actually mount, so
			// this arms a failsafe that is re-armed on every page-load. It
			// lives HERE, inline and dependency-free, because it has to
			// outlive exactly the failure it guards against: a bundled module
			// that fails to load or throws before its mount never runs a line
			// of its own recovery.
			//
			// Three promises, each a content guarantee:
			//   .motion-fallback      the reveal pre-hide is released
			//   data-flow-stalled     every stepper shows all of its stages
			//   data-toggle-stalled   every toggle shows both of its panes
			(function () {
				var Failsafe = 0;

				var Release = function () {
					var Html = document.documentElement;

					if (Html.getAttribute("data-motion-ready") !== "1") {
						Html.classList.add("motion-fallback");
					}

					document
						.querySelectorAll("[data-zine-flow]:not([data-flow-ready])")
						.forEach(function (Root) {
							Root.setAttribute("data-flow-stalled", "1");
						});

					document
						.querySelectorAll("[data-zine-toggle]:not([data-toggle-ready])")
						.forEach(function (Root) {
							Root.setAttribute("data-toggle-stalled", "1");
						});
				};

				var Arm = function () {
					window.clearTimeout(Failsafe);
					Failsafe = window.setTimeout(Release, 2500);
				};

				Arm();
				document.addEventListener("astro:page-load", Arm);
			})();
		<\/script>  <title>${Title}</title> <meta charset="utf-8"> <meta name="description"${addAttribute(DescriptionText, "content")}> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta name="theme-color" content="#09090b"> <meta name="format-detection" content="telephone=no"> <meta name="twitter:dnt" content="on"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"${addAttribute(Title, "content")}> <meta name="twitter:description"${addAttribute(DescriptionText, "content")}> <meta name="twitter:image"${addAttribute(Absolute("/Brand/OG.png?v=2"), "content")}>  <meta property="og:type" content="website"> <meta property="og:title"${addAttribute(Title, "content")}> <meta property="og:description"${addAttribute(DescriptionText, "content")}> <meta property="og:image"${addAttribute(Absolute("/Brand/OG.png?v=2"), "content")}> <meta property="og:url"${addAttribute(Absolute(Astro.url.pathname), "content")}> <link rel="canonical"${addAttribute(Absolute(Astro.url.pathname), "href")}>  <script crossorigin=\"anonymous\" type="application/ld+json">${unescapeHTML(JSON.stringify({
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
	}))}<\/script> <link rel="preload" href="/Font/space-grotesk-latin.woff2" as="font" type="font/woff2" crossorigin crossorigin=\"anonymous\"> <link rel="preload" href="/Font/jetbrains-mono-latin.woff2" as="font" type="font/woff2" crossorigin crossorigin=\"anonymous\"> <link rel="preload" href="/Font/dm-sans-latin.woff2" as="font" type="font/woff2" crossorigin crossorigin=\"anonymous\"> <link rel="manifest" href="/Manifest.json" crossorigin="use-credentials">  ${renderSlot($$result, $$slots["Head"])}  <link rel="icon" href="/Brand/aphrodite.svg" type="image/svg+xml" sizes="any"> <link rel="icon" href="/Brand/aphrodite-32.png" type="image/png" sizes="32x32"> <link rel="apple-touch-icon" href="/Brand/aphrodite-180.png"> ${renderComponent($$result, "ClientRouter", $$ClientRouter, {})} ` })} ${maybeRenderHead($$result)}<body class="relative min-h-screen overflow-x-hidden"> <!-- SVG grunge noise filter (texture layer 3) --><svg aria-hidden="true" class="hidden"> <defs> <filter height="100%" id="grunge-noise" width="100%" x="0%" y="0%"> <feTurbulence baseFrequency="0.82" numOctaves="4" result="noise" stitchTiles="stitch" type="fractalNoise"></feTurbulence> <feColorMatrix result="coloredNoise" type="matrix" values="0 0 0 0 0.1   0 0 0 0 0.1   0 0 0 0 0.1   0 0 0 0.18 0"></feColorMatrix> <feBlend in="SourceGraphic" in2="coloredNoise" mode="multiply"></feBlend> </filter> </defs> </svg> <!-- Ambient photocopy screen, halftone screen and grunge overlays --> <div class="photocopy-grit pointer-events-none fixed inset-0 z-0 opacity-40"></div> <div class="halftone-screen pointer-events-none fixed inset-0 z-0 opacity-30"></div> <div class="pointer-events-none fixed inset-0 z-0 opacity-60 mix-blend-overlay" style="filter: url(#grunge-noise);"></div> <!-- Site header (synthesized, zine skin) --> <header class="sticky top-0 z-40 w-full border-b-2 border-oxblood-dark bg-soot-black/95"> <nav aria-label="Site" class="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 sm:px-8"> <a class="flex items-center gap-2"${addAttribute(Routes.Home, "href")}> <img class="h-5 w-5" src="/Brand/aphrodite.svg" alt="" width="20" height="20"> <span class="font-mono text-base font-bold tracking-widest text-bone-white">APHRODITE</span> </a> <nav aria-label="Primary" class="hidden items-center gap-3 lg:flex"> ${PrimaryLinks.map((Link) => {
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
</div>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Layout/Base.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Layout/Base.astro", void 0);
export { createComponent as _, Versions as a, DocsRoute as c, Link as d, NavLabels as f, createAstro as g, renderScript as h, Stamps as i, ExternalLinks as l, Routes as m, $$ZineKicker as n, AllLinks as o, OurRepo as p, ReleaseNote as r, Anchor as s, $$Base as t, IsActive as u };
