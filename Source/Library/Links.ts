/**
 * The canonical link registry for the Aphrodite site - the single source for
 * every internal route and external URL the pages emit. Rebranded from the
 * DeepSeek Links.ts pattern (Link() composition + Resolve() safelist).
 *
 * THE GROUPS ARE THE READER'S QUESTIONS, NOT THE SITE'S ANATOMY
 *
 * The registry used to group by the site's own parts - Product, Surface,
 * Knobs, Record - so a first-time reader had to learn our vocabulary before a
 * label meant anything. "Surface" is not a thing anybody arrives wanting. The
 * five groups below are the questions a visitor actually asks, in the order
 * they ask them:
 *
 *   Start      Where do I begin?       overview, installation
 *   Explore    Show me it working.     the worked scenarios, the gallery, the
 *                                      simulator
 *   Evidence   Is it true?             the measured figures, the session study
 *   Reference  Tell me the details.    the documentation tree, the plugin, the
 *                                      tools, the integration, every key
 *   Project    What is this thing?     versions, the brief, the repositories
 *
 * The retired words survive in `Groups[].Note`, because they describe the
 * product precisely - the surface and its knobs really are what Reference
 * documents, and the record really is what Project keeps. They were only ever
 * wrong as the FIRST thing a reader met.
 *
 * One field carries both axes: `InternalLink.Group` is the footer column AND
 * the header's MORE group, so the grouping is a property of the entry rather
 * than a second array (navigation-registry §1: one registry).
 */

export type LinkGroup = "Start" | "Explore" | "Evidence" | "Reference" | "Project";

/** Where an entry lands when it names no group: the bar's own set. */
export const DefaultGroup: LinkGroup = "Start";

/**
 * One group, as navigation and as prose.
 *
 * `Label` is the heading and carries no article, because the caller supplies
 * its own framing in front of it (the footer prints it as a kicker, the MORE
 * tree prints it above a column of links). `Note` is the one line that says
 * what the column is for - the place the retired taxonomy is described rather
 * than deleted.
 */
export interface LinkSection {
	Group: LinkGroup;

	Label: string;

	Note: string;
}

/** The five groups, in reading order - the order a reader asks the questions. */
export const Groups: LinkSection[] = [
	{
		Group: "Start",
		Label: "Start",
		Note: "Where to begin: what Aphrodite is, and the first command that makes it run. The old Product column, renamed for what it is for.",
	},
	{
		Group: "Explore",
		Label: "Explore",
		Note: "The pipeline demonstrated - the worked scenarios, the filterable gallery, the simulator. The old Knobs column: the knobs are here, but so is everything else you can try.",
	},
	{
		Group: "Evidence",
		Label: "Evidence",
		Note: "What the claims are worth: the measured figures, and one session followed from gate to history.",
	},
	{
		Group: "Reference",
		Label: "Reference",
		Note: "The surface and its knobs, in detail: the documentation tree, the plugin, the tools, the integration inside Hermes, every configuration key.",
	},
	{
		Group: "Project",
		Label: "Project",
		Note: "The record of the thing itself: versions, the 64-second brief, and the repositories it is built in. The old Record column.",
	},
];

/**
 * The group's own record. Total, not partial: an unknown key answers with the
 * first group rather than throwing, because a navigation column that crashes
 * the build over a typo is worse than one that reads oddly.
 */
export function SectionOf(Group: LinkGroup): LinkSection {
	return Groups.find((Section) => Section.Group === Group) ?? Groups[0];
}

/** The footer's columns and the MORE groups, in reading order. */
export const GroupOrder: LinkGroup[] = Groups.map(({ Group }) => Group);

export interface InternalLink {
	Href: string;

	Label: string;

	/**
	 * One line: what this destination gives a reader that its nearest neighbour
	 * does not.
	 *
	 * Two pairs on this site are genuinely confusable and were separated only
	 * by our own taxonomy - EXAMPLES vs SHOWCASE (the mechanics worked step by
	 * step vs the gallery of what output looks like) and HERMES vs PLUGIN (the
	 * integration inside Hermes vs the thing being integrated). A reader should
	 * not have to learn the site to tell them apart, so each carries its
	 * promise here, once, and every surface that has room for it reads this
	 * field instead of inventing its own sentence.
	 */
	Promise?: string;

	/** The footer column and the MORE group. Unset = DefaultGroup. */
	Group?: LinkGroup;
}

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
export const Routes = {
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
	Hooks: "/hooks/",
} as const;

/**
 * A docs page: the tree's own prefix plus the page's slug, so `/docs/` is not
 * typed a second time. `DocsRoute("config/aphrodite-toml")` answers
 * `/docs/config/aphrodite-toml/` - the shape the content collection builds.
 */
export function DocsRoute(Slug: string): string {
	return `${Routes.Docs}${Slug}/`;
}

/**
 * A route plus one of its anchors - a section of a page rather than a page.
 * `Anchor(Routes.Setup, "proxy")` answers `/setup/#proxy`.
 */
export function Anchor(Href: string, Id: string): string {
	return `${Href}#${Id}`;
}

/**
 * Primary header entries - always visible on desktop.
 *
 * Membership is unchanged: these are the six routes the bar has always
 * carried. They now declare their group like every other entry, so the footer
 * column they belong to is a fact about the entry rather than a default.
 */
export const PrimaryLinks: InternalLink[] = [
	{
		Href: Routes.Home,
		Label: "OVERVIEW",
		Group: "Start",
		Promise:
			"What Aphrodite is in one page: the compression pipeline, the previews it writes, and the numbers that pay for it.",
	},
	{
		Href: Routes.Setup,
		Label: "SETUP",
		Group: "Start",
		Promise:
			"The installation contract: one command, two proxy listeners, the plugin enabled, and a check that proves it.",
	},
	{
		Href: Routes.Docs,
		Label: "DOCS",
		Group: "Reference",
		Promise:
			"The documentation tree - proxy, plugin, hooks, the CCR engine - written to be read in order.",
	},
	{
		Href: Routes.Benchmarks,
		Label: "BENCHMARKS",
		Group: "Evidence",
		Promise:
			"The measured figures, each with the method that produced it, so a number can be checked instead of believed.",
	},
	{
		Href: Routes.CaseStudy,
		Label: "CASE STUDY",
		Group: "Evidence",
		Promise:
			"One session followed end to end - why the pipeline is shaped this way, argued from what it did to that session.",
	},
	{
		Href: Routes.Showcase,
		Label: "SHOWCASE",
		Group: "Explore",
		Promise:
			"The gallery: filterable previews of what the output looks like after the pipeline, defaults in view. Not the mechanics - see Examples for those.",
	},
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
export const MenuLinks: InternalLink[] = [
	{
		Href: Routes.Examples,
		Label: "EXAMPLES",
		Group: "Explore",
		Promise:
			"The mechanics, worked: seven scenarios step by step - compress, marker, retrieve - and the two flows that close the loop.",
	},
	{
		Href: Routes.Workbench,
		Label: "WORKBENCH",
		Group: "Explore",
		Promise:
			"The simulator: paste any tool output, turn the threshold knobs yourself, and watch the preview and the marker appear.",
	},
	{
		Href: Routes.Plugin,
		Label: "PLUGIN",
		Group: "Reference",
		Promise:
			"The plugin itself: the thin registration shim, the hook chain, the file layout, and the download that verifies its own hash.",
	},
	{
		Href: Routes.Hermes,
		Label: "HERMES",
		Group: "Reference",
		Promise:
			"The integration: how Hermes loads the plugin, the turn's hook chain, and what the agent sees inside it. Not the plugin's own spec - see Plugin.",
	},
	{
		Href: Routes.Tools,
		Label: "TOOLS",
		Group: "Reference",
		Promise:
			"The thirteen tools the agent calls - names, arguments, and what each returns, including the marker retrieval round-trip.",
	},
	{
		Href: Routes.Config,
		Label: "CONFIG",
		Group: "Reference",
		Promise:
			"Every key in aphrodite.toml - the pick chain, the proxy pair, the compression knobs - with its default and whether it hot-reloads.",
	},
	{
		Href: Routes.Versions,
		Label: "VERSIONS",
		Group: "Project",
		Promise:
			"The release log: binary and plugin versions side by side, with the notes that shipped against each.",
	},
	{
		Href: Routes.Brief,
		Label: "BRIEF",
		Group: "Project",
		Promise:
			"The 64-second presentation: the raw log, the split, and the four steps - the whole product in one sitting.",
	},
];

/** Every internal route the header knows about - still the one flat set. */
export const AllLinks: InternalLink[] = [...PrimaryLinks, ...MenuLinks];

/**
 * The entry a path belongs to, for a caller that holds a route rather than an
 * entry - a page linking to a sibling, a breadcrumb resolving a trail.
 *
 * Answers `undefined` for a route outside the registry (the retired pages, the
 * docs tree) rather than inventing an entry: a destination with no label is
 * not a navigation destination, and a caller that needs one has a bug worth
 * seeing rather than a fallback worth trusting.
 */
export function LinkFor(Href: string): InternalLink | undefined {
	return AllLinks.find((Entry) => Entry.Href === Href);
}

/**
 * The footer's columns: a VIEW of AllLinks, never a second registry, so no
 * route can go missing from the footer. An entry with no `Group` is Start.
 *
 * Each column also carries its group's `Label` and `Note`, so a caller can
 * print the heading and the one-line purpose without a second lookup.
 */
export const FooterGroups = GroupOrder.map((Group) => ({
	...SectionOf(Group),
	Links: AllLinks.filter((Link) => (Link.Group ?? DefaultGroup) === Group),
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
export const MenuGroups = GroupOrder.map((Group) => ({
	...SectionOf(Group),
	Links: MenuLinks.filter((Link) => (Link.Group ?? DefaultGroup) === Group),
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
export const NavLabels: Record<string, string> = {
	thresholds: "Thresholds",
	retrieval: "Retrieve",
	"chain-split": "Compound commands",
	directives: "Directives",
	relay: "Relay",
	"skip-gate": "Pass-through",
	"dual-listener": "Storage",
	"turn-cycle": "Turn cycle",
	"runtime-home": "Runtime home",
};

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
	return Link.Href === Routes.Home ? Path === Routes.Home : Path.startsWith(Link.Href);
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
