// Source/Library/Links.ts
/** Primary header entries - always visible on desktop. */
var PrimaryLinks = [
	{
		Href: "/",
		Label: "OVERVIEW"
	},
	{
		Href: "/setup/",
		Label: "SETUP"
	},
	{
		Href: "/docs/",
		Label: "DOCS"
	},
	{
		Href: "/benchmarks/",
		Label: "BENCHMARKS"
	},
	{
		Href: "/case-study/",
		Label: "CASE STUDY"
	},
	{
		Href: "/showcase/",
		Label: "SHOWCASE"
	}
];
/**
* Secondary header entries - the mobile tree's MORE groups, grouped by the
* surface they document rather than listed flat. Retired at the restructure:
* HOOKS (folded into PLUGIN), FLAVORS (folded into HERMES) and CRATES (folded
* into VERSIONS); BRIEF (`/presentation/`, the 64-second deck) is now linked -
* it was reachable only by typing the URL.
*/
var MenuLinks = [
	{
		Href: "/plugin/",
		Label: "PLUGIN",
		Group: "Surface"
	},
	{
		Href: "/tools/",
		Label: "TOOLS",
		Group: "Surface"
	},
	{
		Href: "/hermes/",
		Label: "HERMES",
		Group: "Surface"
	},
	{
		Href: "/config/",
		Label: "CONFIG",
		Group: "Knobs"
	},
	{
		Href: "/workbench/",
		Label: "WORKBENCH",
		Group: "Knobs"
	},
	{
		Href: "/examples/",
		Label: "EXAMPLES",
		Group: "Knobs"
	},
	{
		Href: "/versions/",
		Label: "VERSIONS",
		Group: "Record"
	},
	{
		Href: "/presentation/",
		Label: "BRIEF",
		Group: "Record"
	}
];
/** Every internal route the header knows about - still the one flat set. */
var AllLinks = [...PrimaryLinks, ...MenuLinks];
/**
* The footer's columns: a VIEW of AllLinks, never a second registry, so no
* route can go missing from the footer. An entry with no `Group` is Product.
*/
var FooterGroups = [
	"Product",
	"Surface",
	"Knobs",
	"Record"
].map((Group) => ({
	Group,
	Links: AllLinks.filter((Link) => (Link.Group ?? "Product") === Group)
}));
/** The MORE groups: the same view without the Product column (the bar's set). */
var MenuGroups = FooterGroups.filter(({ Group }) => Group !== "Product");
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
	return Link.Href === "/" ? Path === "/" : Path.startsWith(Link.Href);
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
export { Link as a, PrimaryLinks as c, IsActive as i, ExternalLinks as n, MenuGroups as o, FooterGroups as r, OurRepo as s, AllLinks as t };
