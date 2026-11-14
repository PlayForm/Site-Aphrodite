// Prepare/Docs.ts - the docs half of the extraction manifest.
//
// One row per markdown file in `Module/Aphrodite/docs`, and one row per site
// page that has no module counterpart. `Scripts/Prepare/Emit.ts` hands this
// table to `Scripts/Docs/Generate.ts`, which writes each destination from its
// source. Nothing here is a copy: the site's page IS the module's file, run
// through the docs transform (frontmatter, section, link retargeting).
//
// THE THREE LISTS, AND WHY EACH ONE EXISTS
//
// - `Docs` is the extraction: source -> destination. A file in the module's
//   docs tree with no row here is a GAP, and Prepare fails the build on it -
//   an unreachable doc is a missing page, never a silent omission.
// - `Internal` is the declared exception: a source file that is deliberately
//   not site content. The reason is required, because "out of scope" with no
//   reason is indistinguishable from an oversight.
// - `SiteOnly` is the reverse direction. A page the site carries that the
//   module does not is NOT retired to converge: it is either pushed UP into
//   `PlayForm/Aphrodite` so it gains a source, or it is declared here with the
//   reason it exists. Generation never deletes a page, so an undeclared
//   site-only page survives as an orphan for a human to resolve.
//
// A section index page is the module's `README.md`: the collection serves it as
// the id of its folder, so `docs/architecture/README.md` becomes
// `Source/Content/Docs/architecture/index.md` and the route `/docs/architecture/`.

/** One docs page: the module file it is generated from, and where it lands. */
export interface DocRow {
	/** The source path inside `Module/Aphrodite`. */
	Source: string;

	/** The destination path inside the Site, relative to the Site root. */
	Destination: string;

	/** Why the row exists, when the path pair does not say it. */
	Note?: string;
}

/**
 * The site's docs tree, page by page. Ordered as the module's tree reads, so a
 * diff of this table against `find Module/Aphrodite/docs` is the whole check.
 */
export const Docs: DocRow[] = [
	{ Source: "docs/README.md", Destination: "Source/Content/Docs/index.md" },
	{ Source: "docs/api/ccr-endpoints.md", Destination: "Source/Content/Docs/api/ccr-endpoints.md" },
	{ Source: "docs/api/health.md", Destination: "Source/Content/Docs/api/health.md" },
	{
		Source: "docs/api/metrics-endpoint.md",
		Destination: "Source/Content/Docs/api/metrics-endpoint.md",
	},
	{ Source: "docs/api/retrieve.md", Destination: "Source/Content/Docs/api/retrieve.md" },
	{
		Source: "docs/architecture/01-startup.md",
		Destination: "Source/Content/Docs/architecture/01-startup.md",
	},
	{
		Source: "docs/architecture/02-chat-compression.md",
		Destination: "Source/Content/Docs/architecture/02-chat-compression.md",
	},
	{
		Source: "docs/architecture/03-retrieve.md",
		Destination: "Source/Content/Docs/architecture/03-retrieve.md",
	},
	{
		Source: "docs/architecture/04-hook-ffi.md",
		Destination: "Source/Content/Docs/architecture/04-hook-ffi.md",
	},
	{
		Source: "docs/architecture/05-ccr-lifecycle.md",
		Destination: "Source/Content/Docs/architecture/05-ccr-lifecycle.md",
	},
	{
		Source: "docs/architecture/06-sse-streaming.md",
		Destination: "Source/Content/Docs/architecture/06-sse-streaming.md",
	},
	{
		Source: "docs/architecture/07-config-resolution.md",
		Destination: "Source/Content/Docs/architecture/07-config-resolution.md",
	},
	{
		Source: "docs/architecture/08-dylib-loading.md",
		Destination: "Source/Content/Docs/architecture/08-dylib-loading.md",
	},
	{
		Source: "docs/architecture/09-release-ci.md",
		Destination: "Source/Content/Docs/architecture/09-release-ci.md",
	},
	{
		Source: "docs/architecture/10-component.md",
		Destination: "Source/Content/Docs/architecture/10-component.md",
	},
	{
		Source: "docs/architecture/11-data-model.md",
		Destination: "Source/Content/Docs/architecture/11-data-model.md",
	},
	{
		Source: "docs/architecture/README.md",
		Destination: "Source/Content/Docs/architecture/index.md",
	},
	{
		Source: "docs/ccr/backends/README.md",
		Destination: "Source/Content/Docs/ccr/backends/index.md",
	},
	{
		Source: "docs/ccr/backends/in-memory.md",
		Destination: "Source/Content/Docs/ccr/backends/in-memory.md",
	},
	{ Source: "docs/ccr/backends/inline.md", Destination: "Source/Content/Docs/ccr/backends/inline.md" },
	{ Source: "docs/ccr/backends/sqlite.md", Destination: "Source/Content/Docs/ccr/backends/sqlite.md" },
	{ Source: "docs/ccr/lifecycle.md", Destination: "Source/Content/Docs/ccr/lifecycle.md" },
	{ Source: "docs/ccr/marker-format.md", Destination: "Source/Content/Docs/ccr/marker-format.md" },
	{ Source: "docs/centers.md", Destination: "Source/Content/Docs/centers.md" },
	{
		Source: "docs/classification/README.md",
		Destination: "Source/Content/Docs/classification/index.md",
	},
	{
		Source: "docs/classification/content-types.md",
		Destination: "Source/Content/Docs/classification/content-types.md",
	},
	{
		Source: "docs/config/aphrodite-toml.md",
		Destination: "Source/Content/Docs/config/aphrodite-toml.md",
	},
	{ Source: "docs/config/env-vars.md", Destination: "Source/Content/Docs/config/env-vars.md" },
	{ Source: "docs/examples/README.md", Destination: "Source/Content/Docs/examples/index.md" },
	{ Source: "docs/examples/llm-view.md", Destination: "Source/Content/Docs/examples/llm-view.md" },
	{ Source: "docs/guides/README.md", Destination: "Source/Content/Docs/guides/index.md" },
	{
		Source: "docs/guides/hermes-integration.md",
		Destination: "Source/Content/Docs/guides/hermes-integration.md",
	},
	{
		Source: "docs/guides/hermes-tool-output-schemas.md",
		Destination: "Source/Content/Docs/guides/hermes-tool-output-schemas.md",
	},
	{ Source: "docs/install/README.md", Destination: "Source/Content/Docs/install/index.md" },
	{
		Source: "docs/install/macos-linux.md",
		Destination: "Source/Content/Docs/install/macos-linux.md",
	},
	{
		Source: "docs/install/troubleshooting.md",
		Destination: "Source/Content/Docs/install/troubleshooting.md",
	},
	{ Source: "docs/install/windows.md", Destination: "Source/Content/Docs/install/windows.md" },
	{ Source: "docs/metrics/prometheus.md", Destination: "Source/Content/Docs/metrics/prometheus.md" },
	{ Source: "docs/metrics/queries.md", Destination: "Source/Content/Docs/metrics/queries.md" },
	{
		Source: "docs/plugin/context-engine.md",
		Destination: "Source/Content/Docs/plugin/context-engine.md",
	},
	{ Source: "docs/plugin/directives.md", Destination: "Source/Content/Docs/plugin/directives.md" },
	{ Source: "docs/plugin/hooks.md", Destination: "Source/Content/Docs/plugin/hooks.md" },
	{ Source: "docs/proxy/architecture.md", Destination: "Source/Content/Docs/proxy/architecture.md" },
	{ Source: "docs/proxy/compression.md", Destination: "Source/Content/Docs/proxy/compression.md" },
	{ Source: "docs/proxy/handlers.md", Destination: "Source/Content/Docs/proxy/handlers.md" },
	{ Source: "docs/proxy/retry.md", Destination: "Source/Content/Docs/proxy/retry.md" },
	{ Source: "docs/tool-relay/callbacks.md", Destination: "Source/Content/Docs/tool-relay/callbacks.md" },
	{ Source: "docs/tool-relay/tools.md", Destination: "Source/Content/Docs/tool-relay/tools.md" },
];

/**
 * Module docs that stay repository-internal. `research/` holds explorer reports
 * written against a live Hermes runtime home - local paths, captured session
 * state, README line citations - which is not public documentation. The reason
 * is part of the row so the next reader does not have to guess.
 */
export const Internal: { Source: string; Reason: string }[] = [
	{
		Source: "docs/research/",
		Reason:
			"Explorer reports written against a live Hermes runtime home: local paths, captured session state, README line citations. Not public documentation.",
	},
];

/**
 * Pages the site carries that the module does not. Empty, and that is the
 * measured state, not an assumption: every one of the site's docs pages has a
 * module source in `Docs` above. A page that gains no source is pushed up into
 * `PlayForm/Aphrodite` and gets a `Docs` row; it is never deleted to converge.
 */
export const SiteOnly: { Destination: string; Reason: string }[] = [];
