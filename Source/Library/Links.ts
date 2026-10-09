/**
 * The canonical link registry for the Aphrodite site - the single source for
 * every internal route and external URL the pages emit. Rebranded from the
 * DeepSeek Links.ts pattern (Link() composition + Resolve() safelist).
 */

export interface InternalLink {
	Href: string;

	Label: string;
}

/** Primary header entries - always visible on desktop. */
export const PrimaryLinks: InternalLink[] = [
	{ Href: "/", Label: "OVERVIEW" },
	{ Href: "/setup/", Label: "SETUP" },
	{ Href: "/docs/", Label: "DOCS" },
	{ Href: "/benchmarks/", Label: "BENCHMARKS" },
];

/** Secondary header entries - collapsed into the mobile menu, listed after the primary set on wide screens. */
export const MenuLinks: InternalLink[] = [
	{ Href: "/crates/", Label: "CRATES" },
	{ Href: "/versions/", Label: "VERSIONS" },
	{ Href: "/plugin/", Label: "PLUGIN" },
	{ Href: "/hermes/", Label: "HERMES" },
	{ Href: "/hooks/", Label: "HOOKS" },
	{ Href: "/tools/", Label: "TOOLS" },
	{ Href: "/flavors/", Label: "FLAVORS" },
	{ Href: "/case-study/", Label: "CASE STUDY" },
	{ Href: "/workbench/", Label: "WORKBENCH" },
	{ Href: "/config/", Label: "CONFIG" },
	{ Href: "/showcase/", Label: "SHOWCASE" },
	{ Href: "/examples/", Label: "EXAMPLES" },
];

/** Every internal route the header knows about. */
export const AllLinks: InternalLink[] = [...PrimaryLinks, ...MenuLinks];

/** External canonical URLs, verbatim from the README's documented flows. */
export const ExternalLinks = {
	Crates: "https://crates.io/crates/aphrodite",
	Repository: "https://github.com/PlayForm/Aphrodite",
	HermesRepository: "https://github.com/PlayForm/Aphrodite-Hermes",
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
 * Compose a repository URL: Link(OurRepo, "docs/proxy/handlers.md")
 * -> "https://github.com/PlayForm/Aphrodite/tree/Current/docs/proxy/handlers.md".
 * The one function every composed repository URL flows through - a future
 * branch rename or scheme change edits this file alone.
 */
export function Link(Repo: Repo, Path: string): string {
	return `${Repo.Base}/${Repo.Branch}/${Path}`;
}
