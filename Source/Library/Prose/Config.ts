/**
 * Config prose - the page's own sentences for the aphrodite.toml keys.
 *
 * The ROSTER is not here. Which keys exist, their section, their default, the
 * env var that overrides them and which parser reads them all come from
 * `Source/Generated/Facts/Config.json`, generated from
 * `docs/config/aphrodite-toml.md` joined to `aphrodite.toml.example`. This
 * file deepens a row; it cannot add or remove one, and `Assert` in
 * `Source/Library/Roster.ts` fails the build if it names a key the module
 * does not declare.
 *
 * `Type` is a presentation override only - the module derives a type from the
 * shipped value, and this file knows the unit. `DefaultNote` is the page's
 * wording for a default the module states more tersely; both render.
 */

import type { ConfigChain, ConfigKeyRecord } from "../Records";

/** What a page may add to a generated key record. */
export interface ConfigProseRecord extends Partial<ConfigKeyRecord> {
	/** The page's wording for a default the module states more tersely. */
	DefaultNote?: string;
	/** The resolution ladder's chain for this key. */
	Chain?: ConfigChain;
	/** Where the ladder reads the TOML value: a section, or the proxy entry. */
	From?: "section" | "proxy";
}

export const ConfigProse: Record<string, ConfigProseRecord> = {
	name: {
		Effect: "Proxy label; the port overrides (APHRODITE_CACHE_PORT / APHRODITE_TOKEN_PORT) match on it",
		DefaultNote: "the listen address",
	},
	listen: {
		Type: '"addr:port"',
		Effect: "Bind address; loopback by default, and non-loopback peers are rejected on every route except /health",
		Chain: "toml-only",
		From: "proxy",
	},
	mode: {
		Type: '"cache" | "token"',
		Effect: "Backend and compiled threshold: token = SQLite above 1 KB, cache = in-memory above 8 KB",
		DefaultNote: '"token"',
		Chain: "toml-only",
		From: "proxy",
	},
	api_key: {
		Effect: "Upstream key; the one chain where TOML outranks the env var",
		DefaultNote: "none - the proxy refuses to start",
		Chain: "toml-first",
		From: "proxy",
	},
	api_url: {
		Type: "url",
		Effect: "Upstream API base URL",
		DefaultNote: "https://api.openai.com",
		From: "proxy",
	},
	model: {
		Effect: "Model name to forward",
		DefaultNote: '"default-model"',
		From: "proxy",
	},
	tool_relay: {
		Effect: "Enables the /tool/relay endpoint",
		DefaultNote: "false",
		From: "proxy",
	},
	dev: {
		Effect: "Verbose request and response logging",
	},
	ccr_ttl_seconds: {
		Effect: "CCR entry time-to-live",
		From: "proxy",
	},
	ccr_db_path: {
		Type: "path",
		Effect: "SQLite path for the token proxy; a relative path resolves against the binary's directory",
		From: "proxy",
	},
	notify_url: {
		Type: "url",
		Effect: "Hermes callback URL for CCR-create notifications",
		DefaultNote: "none",
	},
	notify_key: {
		Effect: "Bearer token sent with notify_url",
		DefaultNote: "none",
	},
	timeout: {
		Effect: "Upstream request timeout, clamped to 600 with a warning",
		DefaultNote: "300",
	},
	max_context: {
		Type: "int (tokens)",
		Effect: "Max context tokens",
	},
	max_output: {
		Type: "int (tokens)",
		Effect: "Max output tokens; the proxy refuses to start when it is at or above max_context",
	},
	tool_threshold_token: {
		Effect: "Token-proxy compression threshold - the gate every tool result crosses",
		Detail: "token proxy threshold (bytes) - hot-reloads",
	},
	tool_threshold_cache: {
		Effect: "Cache-proxy compression threshold",
		Detail: "cache proxy threshold (bytes) - hot-reloads",
	},
	inline_threshold: {
		Effect: "Inline zlib versus the durable CCR store",
		Detail: "inline-vs-durable cutoff (bytes) - hot-reloads",
	},
	code_multiplier: {
		Effect: "Multiplies the threshold for code_* content types; 1.0 gives code no extra headroom",
		Detail: "multiplies the threshold for code_* types - hot-reloads",
	},
	auto_expand: {
		Effect: "Resolve just-stored content inline instead of emitting a marker, capped by auto_expand_limit",
		Detail: "resolve just-stored content inline instead of a marker - hot-reloads",
	},
	auto_expand_limit: {
		Effect: "Byte cap for auto-expanded content; 0 = unlimited",
		Detail: "byte cap for auto-expanded content; 0 = unlimited",
	},
	max_request_body_size: {
		Effect: "Request-body cap; an over-size body is rejected with 413 while it is read",
		Detail: "the cap is applied while the body streams in, so an over-size request is refused before it is buffered whole",
		DefaultNote: "none - no cap",
	},
	store_max_entries: {
		Effect: "Max live rows in the SQLite store; past it the least-recently-accessed rows are evicted; 0 = unlimited",
		Detail: "max live rows in the SQLite store - LRU evicts past it; read at store open, not hot-reloaded",
	},
	store_max_bytes: {
		Effect: "Max stored payload bytes, SUM(LENGTH(original)); past it LRU rows are evicted; 0 = unlimited",
		Detail: "max stored payload bytes, SUM(LENGTH(original)) - LRU evicts past it; read at store open, not hot-reloaded",
	},
	terminal_threshold: {
		Effect: "Terminal-output threshold gating transform_terminal_output",
		Detail: "dylib terminal-output threshold",
	},
	poll_worker: {
		Effect: "Auto-backgrounding of slow terminal and process calls in pre_tool_call",
		Detail: "the rewrite happens before the call runs, so the transcript never shows the backgrounding",
	},
	chain_split: {
		Effect: "Opt-in command splitting into per-segment markers",
		Detail: "off by default because invisible segment markers pollute redirected stdout",
	},
	chain_split_min_segments: {
		Effect: "Floor for the adaptive split threshold",
		Detail: "below this many segments the command is left whole",
	},
	chain_split_max_segments: {
		Effect: "Cap for the adaptive split threshold",
		Detail: "past this many segments the split stops, so one command cannot flood the transcript with markers",
	},
	context_engine: {
		Effect: "Enables the context engine; the standalone HTTP proxy never reads it",
		Detail: "opt-in dylib status flag; the HTTP proxy never reads it",
	},
	engine_threshold_pct: {
		Type: "int (%)",
		Effect: "Context-engine fill gate: middle turns are archived at or above this fill; 0 = never, 100+ = off",
		Detail: "LOAD-BEARING (dylib): middle-turn archiving + engine_offload prompt; 100+ = off",
	},
	engine_protect_first: {
		Effect: "Turns kept at the start of the index",
		Detail: "LOAD-BEARING (dylib): turns kept at the start of the index",
	},
	engine_protect_last: {
		Effect: "Turns kept at the end of the index",
		Detail: "LOAD-BEARING (dylib): turns kept at the end of the index",
	},
	engine_min_msgs: {
		Effect: "Minimum archived turns before the engine may archive",
		Detail: "LOAD-BEARING (dylib): minimum messages before the engine activates",
	},
	live_container: {
		Effect: "Instant CCR markers with the live type, for progressive retrieval",
		Detail: "instant 'live' CCR markers for large tool results",
	},
	recursive_depth: {
		Effect: "Nested marker expansion cap",
		Detail: "max nested marker expansion depth",
	},
	auto_reload: {
		Effect: "Watch aphrodite.toml and re-apply config fields on change",
		Detail: "watch aphrodite.toml and re-apply config fields on change",
	},
	catalog_mode: {
		Type: "-",
		Effect: "Parses; the catalog layout is compiled-in, so this is a silent no-op",
		Detail: "a key that parsed and did nothing was worse than an undocumented one, so the ledger names it",
		DefaultNote: "none",
	},
	classifier_poll: {
		Type: "-",
		Effect: "Parses; nothing reads it back",
		Detail: "classification is per invocation, not polled, so there is no interval for this key to set",
		DefaultNote: "none",
	},
	prefetch: {
		Type: "-",
		Effect: "Parses; the aphrodite_prefetch tool exists regardless of this key",
		Detail: "the tool is registered unconditionally, so turning this off disables nothing",
	},
	preview_max_chars: {
		Type: "int (chars)",
		Effect: "Caps the whole rendered preview string, not per line; 0 = unlimited",
		DefaultNote: "0 (unlimited)",
	},
	model_family: {
		Type: '"compact" | "code_first" | "balance"',
		Effect: "Selects the [templates.preview.<family>.*] family when templates are configured",
		DefaultNote: '"code_first"',
	},
	code_structure_map: {
		Effect: "Reserved: include function, struct and class signatures in code previews",
		DefaultNote: "none",
	},
	rust_preview_lines: {
		Type: "int",
		Effect: "Reserved: lines of Rust source to include in previews",
	},
	session_inject: {
		Effect: 'First-turn orientation text injected on turn 0; "" disables it',
		DefaultNote: "the shipped builtin",
	},
	retrieve_guidance: {
		Type: '"minimal" | "standard" | "verbose"',
		Effect: "How much retrieval guidance the per-turn assembler renders as the [retrieval: ...] line",
		DefaultNote: '"minimal"',
	},
	ccr_marker_hint: {
		Effect: "Append a retrieval hint after markers - it fills the marker template's {hint}",
	},
	catalog_intent_hints: {
		Effect: "Intent hints alongside the hashes in catalog output",
	},
	active: {
		Effect: "Which loaded directives start active; unknown names are filtered out, and the set is runtime-mutable through aphrodite_directive",
		DefaultNote: "an empty list seeds focus, foresight and lazy",
	},
	budget_chars: {
		Type: "int (chars)",
		Effect: "Hard cap on ALL per-turn injected context; sections drop bottom-up, and directives and nudges never drop",
	},
	"preview.<family>.<ctype>": {
		Type: "format string",
		Effect: "Preview format per content type; resolution is family[ctype], then reverse[ctype], then family[_default], then the hardcoded builder",
		DefaultNote: "the hardcoded builder",
	},
	"marker.format / marker.hint": {
		Type: "format string",
		Effect: "Marker block layout, and the retrieval hint appended after markers",
		DefaultNote: "the shipped default",
	},
	"prompts.<name>": {
		Type: "format string",
		Effect: "Named prompt templates rendered into the per-turn context: session_inject, engine_offload, auto_expand_guidance, catalog_context_warn",
		DefaultNote: "the shipped default",
	},
	"reverse.<ctype>": {
		Type: "string",
		Effect: "ctype -> key remap: lets a content type borrow another type's format string",
	},
};
