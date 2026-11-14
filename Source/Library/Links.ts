/**
 * The canonical link registry for the Aphrodite site - the single source for
 * every internal route and external URL the pages emit. Rebranded from the
 * DeepSeek Links.ts pattern (Link() composition + Resolve() safelist).
 */

/**
 * The two axes of the registry: which column a route belongs to in the footer,
 * and which labelled group it belongs to in the header's MORE tree. One field
 * carries both, so the grouping is a property of the entry rather than a
 * second array (navigation-registry §1: one registry).
 */
export type LinkGroup = "Product" | "Surface" | "Knobs" | "Record";

export interface InternalLink {
	Href: string;

	Label: string;

	/** The footer column and the MORE group. Unset = Product. */
	Group?: LinkGroup;
}

/** Primary header entries - always visible on desktop. */
export const PrimaryLinks: InternalLink[] = [
	{ Href: "/", Label: "OVERVIEW" },
	{ Href: "/setup/", Label: "SETUP" },
	{ Href: "/docs/", Label: "DOCS" },
	{ Href: "/benchmarks/", Label: "BENCHMARKS" },
	{ Href: "/case-study/", Label: "CASE STUDY" },
	{ Href: "/showcase/", Label: "SHOWCASE" },
];

/**
 * Secondary header entries - the mobile tree's MORE groups, grouped by the
 * surface they document rather than listed flat. Retired at the restructure:
 * HOOKS (folded into PLUGIN), FLAVORS (folded into HERMES) and CRATES (folded
 * into VERSIONS); BRIEF (`/presentation/`, the 64-second deck) is now linked -
 * it was reachable only by typing the URL.
 */
export const MenuLinks: InternalLink[] = [
	{ Href: "/plugin/", Label: "PLUGIN", Group: "Surface" },
	{ Href: "/tools/", Label: "TOOLS", Group: "Surface" },
	{ Href: "/hermes/", Label: "HERMES", Group: "Surface" },
	{ Href: "/config/", Label: "CONFIG", Group: "Knobs" },
	{ Href: "/workbench/", Label: "WORKBENCH", Group: "Knobs" },
	{ Href: "/examples/", Label: "EXAMPLES", Group: "Knobs" },
	{ Href: "/versions/", Label: "VERSIONS", Group: "Record" },
	{ Href: "/presentation/", Label: "BRIEF", Group: "Record" },
];

/** Every internal route the header knows about - still the one flat set. */
export const AllLinks: InternalLink[] = [...PrimaryLinks, ...MenuLinks];

/** The footer's columns and the MORE groups, in reading order. */
export const GroupOrder: LinkGroup[] = ["Product", "Surface", "Knobs", "Record"];

/**
 * The footer's columns: a VIEW of AllLinks, never a second registry, so no
 * route can go missing from the footer. An entry with no `Group` is Product.
 */
export const FooterGroups = GroupOrder.map((Group) => ({
	Group,
	Links: AllLinks.filter((Link) => (Link.Group ?? "Product") === Group),
}));

/** The MORE groups: the same view without the Product column (the bar's set). */
export const MenuGroups = FooterGroups.filter(({ Group }) => Group !== "Product");

/** External canonical URLs, verbatim from the README's documented flows. */
export const ExternalLinks = {
	Crates: "https://crates.io/crates/aphrodite",
	Repository: "https://github.com/PlayForm/Aphrodite",
	HermesRepository: "https://github.com/PlayForm/Aphrodite-Hermes",
	/** The Hermes plugin guide - the plugin system plus the plugin catalog (the store) install flow. */
	HermesGuide: "https://hermes-agent.nousresearch.com/docs/user-guide/features/plugins/",
	/** The releases listing; the release-note URLs compose with the Aphrodite%2Fv<ver> tag form (Library/Versions.ts). */
	Releases: "https://github.com/PlayForm/Aphrodite/releases",
	PlayForm: "https://PlayForm.Cloud",
} as const;

/**
 * True when the site page at Path is the page a link points at (the root
 * matches only itself; every other route matches by prefix).
 */
export function IsActive(Path: string, Link: InternalLink): boolean {
	return Link.Href === "/"
		? Path === "/"
		: Path.startsWith(Link.Href);
}

/** A repository entry: the bare clone URL plus the branch segment links compose with. */
export interface Repo {
	/** The repository's base URL (no branch, no trailing slash). */
	Base: string;

	/** The branch segment, always in the tree/<branch> form. */
	Branch: string;
}

/** The branch segments - the two forms the docs carried before consolidation. */
export const BranchDevelopment = "tree/Development";

/** The canonical branch: every repository deep-link composes with it. */
export const BranchCurrent = "tree/Current";

/** The Aphrodite repository, linked at the canonical Current branch. */
export const OurRepo: Repo = {
	Base: "https://github.com/PlayForm/Aphrodite",
	Branch: BranchCurrent,
};

/**
 * The Aphrodite-Hermes repository - the canonical home of the CCR plugin
 * (plugin.yaml, the loader, the installer, the layout check), linked at the
 * same canonical Current branch. The root repository vendors the same plugin
 * content under plugins/aphrodite, but the plugin's own repository is the
 * single home every plugin-context link composes against.
 */
export const HermesRepo: Repo = {
	Base: "https://github.com/PlayForm/Aphrodite-Hermes",
	Branch: BranchCurrent,
};

/**
 * The Headroom repository - the git submodule checked out at
 * vendor/headroom (PlayForm/Headroom, branch Current), the home of the
 * aphrodite-headroom-core crate. Links to files inside a submodule must
 * compose against the submodule's own repository or they 404.
 */
export const HeadroomRepo: Repo = {
	Base: "https://github.com/PlayForm/Headroom",
	Branch: BranchCurrent,
};

/**
 * Compose a repository URL: Link(OurRepo, "docs/proxy/handlers.md")
 * -> "https://github.com/PlayForm/Aphrodite/tree/Current/docs/proxy/handlers.md".
 * The one function every composed repository URL flows through - a future
 * branch rename or scheme change edits this file alone.
 */
export function Link(Repo: Repo, Path: string): string {
	return `${Repo.Base}/${Repo.Branch}/${Path}`;
}
