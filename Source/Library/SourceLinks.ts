import { HeadroomRepo, HermesRepo, OurRepo, type Repo } from "./Links";

/**
 * The code-mention registry: every code identifier the site and the docs
 * prose mention maps to the exact source file it is defined in. The built
 * pages render through the CodeMentions integration (Site-side wrapping at
 * build time, the sources stay untouched) and the hand-written pages can
 * use Component/CodeLink.astro; both resolve through this module, so the
 * mapping lives here alone.
 *
 * REPO CHOICE: the proxy / crates / docs / setup context maps to OurRepo
 * (PlayForm/Aphrodite); the plugin loader / plugin.yaml / installer context
 * maps to HermesRepo (PlayForm/Aphrodite-Hermes) - the canonical plugin
 * home. The root repository vendors identical plugin content under
 * plugins/aphrodite, but one canonical home per mention is used, and the
 * plugin-own repository is it.
 *
 * EVERY mapped path is verified against the local checkouts (the root
 * repository and the vendored plugins/aphrodite clone of Aphrodite-Hermes,
 * whose Current branch was fetched and cross-checked with git ls-tree), so
 * no anchor 404s on GitHub.
 *
 * FLAGGED, not mapped: bare `version` is too generic to auto-link (it maps
 * only inside the full `aphrodite_hermes_version` form).
 */
export interface Entry {
	/** The repository the identifier is defined in. */
	Repo: Repo;

	/** The path inside that repository (no branch, no leading slash). */
	Path: string;
}

/** The Aphrodite-Hermes paths, verified against the Current branch tree. */
const Hermes = (Path: string): Entry => ({ Repo: HermesRepo, Path });

/** The Aphrodite repository paths, verified against the local checkout. */
const Ours = (Path: string): Entry => ({ Repo: OurRepo, Path });

/** The Headroom submodule paths (vendor/headroom = PlayForm/Headroom). */
const Headroom = (Path: string): Entry => ({ Repo: HeadroomRepo, Path });

/** The exact-match registry. Keys are the literal code-span texts. */
export const CodeLinks: Record<string, Entry> = {
	// ── The 13 tools (registered in crates/aphrodite-hermes/src/tools.rs).
	aphrodite_compress: Ours("crates/aphrodite-hermes/src/tools.rs"),
	aphrodite_retrieve: Ours("crates/aphrodite-hermes/src/tools.rs"),
	aphrodite_stats: Ours("crates/aphrodite-hermes/src/tools.rs"),
	aphrodite_catalog: Ours("crates/aphrodite-hermes/src/tools.rs"),
	aphrodite_search: Ours("crates/aphrodite-hermes/src/tools.rs"),
	aphrodite_diff: Ours("crates/aphrodite-hermes/src/tools.rs"),
	aphrodite_directive: Ours("crates/aphrodite-hermes/src/tools.rs"),
	aphrodite_files: Ours("crates/aphrodite-hermes/src/tools.rs"),
	aphrodite_prefetch: Ours("crates/aphrodite-hermes/src/tools.rs"),
	aphrodite_prefetch_status: Ours("crates/aphrodite-hermes/src/tools.rs"),
	aphrodite_reclassify: Ours("crates/aphrodite-hermes/src/tools.rs"),
	aphrodite_test: Ours("crates/aphrodite-hermes/src/tools.rs"),
	aphrodite_rebuild: Ours("crates/aphrodite-hermes/src/tools.rs"),
	// The wider tool family the docs and pages also mention.
	aphrodite_debug: Ours("crates/aphrodite-hermes/src/tools.rs"),
	aphrodite_config_get: Ours("crates/aphrodite-hermes/src/tools.rs"),
	aphrodite_config_set: Ours("crates/aphrodite-hermes/src/tools.rs"),
	aphrodite_navigate: Ours("crates/aphrodite-hermes/src/tools.rs"),
	aphrodite_list: Ours("crates/aphrodite-hermes/src/tools.rs"),
	"aphrodite_*": Ours("crates/aphrodite-hermes/src/tools.rs"),

	// ── The 6 hooks (crates/aphrodite/src/hooks.rs).
	on_session_start: Ours("crates/aphrodite/src/hooks.rs"),
	transform_tool_result: Ours("crates/aphrodite/src/hooks.rs"),
	pre_llm_call: Ours("crates/aphrodite/src/hooks.rs"),
	transform_terminal_output: Ours("crates/aphrodite/src/hooks.rs"),
	post_llm_call: Ours("crates/aphrodite/src/hooks.rs"),
	pre_tool_call: Ours("crates/aphrodite/src/hooks.rs"),

	// ── The C-ABI functions (crates/aphrodite-hermes/src/lib.rs).
	aphrodite_hermes_dispatch_tool: Ours("crates/aphrodite-hermes/src/lib.rs"),
	aphrodite_hermes_list_tools: Ours("crates/aphrodite-hermes/src/lib.rs"),
	aphrodite_hermes_get_schema: Ours("crates/aphrodite-hermes/src/lib.rs"),
	aphrodite_hermes_get_schemas: Ours("crates/aphrodite-hermes/src/lib.rs"),
	aphrodite_hermes_free_string: Ours("crates/aphrodite-hermes/src/lib.rs"),
	aphrodite_hermes_call_hook: Ours("crates/aphrodite-hermes/src/lib.rs"),
	aphrodite_hermes_get_hooks: Ours("crates/aphrodite-hermes/src/lib.rs"),
	aphrodite_hermes_proxy_health: Ours("crates/aphrodite-hermes/src/lib.rs"),
	aphrodite_hermes_materialize_directives: Ours(
		"crates/aphrodite-hermes/src/lib.rs",
	),
	aphrodite_hermes_version: Ours("crates/aphrodite-hermes/src/lib.rs"),

	// ── The plugin files (canonical home: the Aphrodite-Hermes repository).
	"plugin.yaml": Hermes("plugin.yaml"),
	"__init__.py": Hermes("__init__.py"),
	"_bindings.py": Hermes("_bindings.py"),
	"download.sh": Hermes("download.sh"),
	"download.ps1": Hermes("download.ps1"),
	"SHA256SUMS.txt": Hermes("SHA256SUMS.txt"),
	BINARY_VERSION: Hermes("BINARY_VERSION"),
	"layout_schema.json": Hermes("layout_schema.json"),
	"layout_check.py": Hermes("layout_check.py"),

	// ── The site and configuration files (Aphrodite repository).
	// FLAG: "Render.mjs" and "Drift-Guard.mjs" are NOT mapped - they live
	// under Site/, which is gitignored, so tree/Current anchors to them
	// would 404 on GitHub.
	"aphrodite.toml": Ours("aphrodite.toml.example"),
	"aphrodite.toml.example": Ours("aphrodite.toml.example"),
	"ccr.db": Ours("crates/aphrodite/src/config/proxy.rs"),

	// ── The repository root files (Aphrodite repository). FLAG: "Cargo.toml"
	// is ambiguous - the workspace root file is the canonical mention; the
	// per-crate manifests are linked through their crates/... path form.
	"Cargo.toml": Ours("Cargo.toml"),
	"CHANGELOG.md": Ours("CHANGELOG.md"),
	"README.md": Ours("README.md"),

	// ── The environment variables (crates/aphrodite/src/config_loader.rs).
	APHRODITE_API_KEY: Ours("crates/aphrodite/src/config/proxy.rs"),
	APHRODITE_API_URL: Ours("crates/aphrodite/src/config/proxy.rs"),
	APHRODITE_CONFIG_PATH: Ours("crates/aphrodite/src/main.rs"),
	APHRODITE_BINARY_PATH: Hermes("__init__.py"),
	APHRODITE_HERMES_DYLIB_PATH: Hermes("__init__.py"),
	APHRODITE_DIRECTIVES_DIR: Ours("crates/aphrodite/src/config_loader.rs"),
	APHRODITE_CACHE_PORT: Ours("crates/aphrodite/src/config/proxy.rs"),
	APHRODITE_TOKEN_PORT: Ours("crates/aphrodite/src/config/proxy.rs"),
	APHRODITE_AUTO_RELOAD: Ours("crates/aphrodite/src/config_loader.rs"),
	APHRODITE_CONTEXT_ENGINE: Ours("crates/aphrodite/src/config_loader.rs"),
	APHRODITE_MODE: Ours("crates/aphrodite/src/config/proxy.rs"),
	APHRODITE_LISTEN: Ours("crates/aphrodite/src/config/proxy.rs"),
	APHRODITE_MODEL: Ours("crates/aphrodite/src/config/proxy.rs"),
	APHRODITE_DB: Ours("crates/aphrodite/src/config/proxy.rs"),
	APHRODITE_CCR_TTL: Ours("crates/aphrodite/src/config/proxy.rs"),
	APHRODITE_MGMT_TOKEN: Ours("crates/aphrodite/src/config_loader.rs"),
	APHRODITE_NOTIFY_URL: Ours("crates/aphrodite/src/config/proxy.rs"),
	APHRODITE_NOTIFY_KEY: Ours("crates/aphrodite/src/config/proxy.rs"),
	APHRODITE_POLL_WORKER: Ours("crates/aphrodite/src/config_loader.rs"),
	APHRODITE_TOOL_THRESHOLD_TOKEN: Ours("crates/aphrodite/src/config_loader.rs"),
	APHRODITE_TOOL_THRESHOLD_CACHE: Ours("crates/aphrodite/src/config_loader.rs"),
	APHRODITE_INLINE_THRESHOLD: Ours("crates/aphrodite/src/config_loader.rs"),
	APHRODITE_CODE_MULTIPLIER: Ours("crates/aphrodite/src/config_loader.rs"),
	APHRODITE_TERMINAL_THRESHOLD: Ours("crates/aphrodite/src/config_loader.rs"),
	APHRODITE_FLOW_BUDGET_CHARS: Ours("crates/aphrodite/src/config_loader.rs"),
	APHRODITE_PREVIEW_MAX_CHARS: Ours("crates/aphrodite/src/config_loader.rs"),

	// ── The config keys (TOML, read in crates/aphrodite/src/config_loader.rs).
	tool_threshold_token: Ours("crates/aphrodite/src/config_loader.rs"),
	tool_threshold_cache: Ours("crates/aphrodite/src/config_loader.rs"),
	inline_threshold: Ours("crates/aphrodite/src/config_loader.rs"),
	code_multiplier: Ours("crates/aphrodite/src/config_loader.rs"),
	engine_threshold_pct: Ours("crates/aphrodite/src/config_loader.rs"),
	terminal_threshold: Ours("crates/aphrodite/src/config_loader.rs"),
	chain_split: Ours("crates/aphrodite/src/chain_split.rs"),
	chain_split_min_segments: Ours("crates/aphrodite/src/chain_split.rs"),
	flow_budget_chars: Ours("crates/aphrodite/src/config_loader.rs"),
	preview_max_chars: Ours("crates/aphrodite/src/config_loader.rs"),
	ccr_ttl_seconds: Ours("crates/aphrodite/src/config_loader.rs"),
	api_url: Ours("crates/aphrodite/src/config_loader.rs"),
	notify_url: Ours("crates/aphrodite/src/config_loader.rs"),
	notify_key: Ours("crates/aphrodite/src/config_loader.rs"),
	max_context: Ours("crates/aphrodite/src/config_loader.rs"),

	// ── The crates and the CLI surfaces.
	aphrodite: Ours("crates/aphrodite/Cargo.toml"),
	"aphrodite-hermes": Ours("crates/aphrodite-hermes/Cargo.toml"),
	"aphrodite-headroom-core": Headroom("crates/headroom-core/Cargo.toml"),
	"aphrodite setup": Ours("crates/aphrodite/src/setup/run.rs"),
	"aphrodite.exe": Ours("crates/aphrodite/Cargo.toml"),

	// ── The marker form (crates/aphrodite/src/marker/format.rs).
	"<<<CCR:hash|type|size>>>": Ours("crates/aphrodite/src/marker/format.rs"),
};

/**
 * Resolve a code-span text to its source entry. Exact matches come from the
 * registry; repository-relative paths (`crates/...`, `docs/...`,
 * `tests/...`, `Maintain/...`) resolve against OurRepo when the file exists
 * in the local checkout; `plugins/aphrodite/...` resolves against HermesRepo
 * (the submodule's own repository). The Site/ and bare vendor/ prefixes are
 * excluded because Site/ is gitignored and vendor/ holds submodules, so
 * anchors to them would 404 on GitHub (the caller verifies existence too).
 * Anything else returns null and stays unlinked.
 */
export function ResolveCode(Text: string): Entry | null {
	const Exact = CodeLinks[Text];

	switch (Exact !== undefined) {
		case true:
			return Exact;
		default:
			break;
	}

	switch (true) {
		// plugins/aphrodite is the submodule checkout of Aphrodite-Hermes, so
		// its paths must anchor against the submodule's own repository.
		case /^plugins\/aphrodite\/[\w./-]+\.\w{1,4}$/.test(Text):
			return Hermes(Text.slice("plugins/aphrodite/".length));

		case /^(crates|docs|tests|Maintain)\/[\w./-]+\.\w{1,4}$/.test(Text):
			return Ours(Text);

		default:
			return null;
	}
}

/** Compose the anchor URL for an entry. */
export function SourceLink({ Path, Repo }: Entry): string {
	return `${Repo.Base}/${Repo.Branch}/${Path}`;
}

/**
 * The file-name index for the plain-prose pass: every registry key that is a
 * file name (a dotted name, or the extensionless BINARY_VERSION marker),
 * indexed case-insensitively so the prose forms ("Cargo.toml" vs
 * "cargo.toml") resolve without new mappings. Identifiers without a file
 * name shape (the tools, hooks, env vars, config keys) are excluded - the
 * prose pass never links them.
 */
const FileIndex: Record<string, Entry> = Object.fromEntries(
	Object.entries(CodeLinks)
		.filter(([Key]) => /\.\w{1,4}$/.test(Key) || Key === "BINARY_VERSION")
		.map(([Key, Entry]) => [Key.toLowerCase(), Entry]),
);

/**
 * Resolve a plain-prose text to its source entry: the exact and
 * repo-relative forms resolve through ResolveCode(); otherwise a
 * case-insensitive lookup in the file-name index. Non-file text returns
 * null and stays unlinked.
 */
export function ResolveFile(Text: string): Entry | null {
	const Direct = ResolveCode(Text);

	switch (Direct !== null) {
		case true:
			return Direct;

		default:
			break;
	}

	return FileIndex[Text.toLowerCase()] ?? null;
}
