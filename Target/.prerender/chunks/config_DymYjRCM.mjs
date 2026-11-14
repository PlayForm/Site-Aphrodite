import { n as createComponent, r as __exportAll, t as createAstro } from "./compiler_DE9Ou0YP.mjs";
import { C as addAttribute, T as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent } from "./server_CNuTCIdA.mjs";
import { t as renderScript } from "./script_DodTPwlH.mjs";
import { n as $$ZineKicker, t as $$Base } from "./Base_BfYuyvJ_.mjs";
import { t as config_resolution_default } from "./config-resolution_DPyisu12.mjs";
import { t as $$ZineDiagramNav } from "./ZineDiagramNav_0U3JBs2_.mjs";
import { t as $$ZineBox } from "./ZineBox_CmppvIAU.mjs";
import { t as $$ZineStamp } from "./ZineStamp_Dw5ueHhK.mjs";
import { t as $$ZineStream } from "./ZineStream_DlQ5np2Q.mjs";
import { t as $$ZineTape } from "./ZineTape_PKiqfpjH.mjs";
import { t as $$Breadcrumbs } from "./Breadcrumbs_pGfaFfnY.mjs";
import { t as $$Related } from "./Related_CkbaEjP9.mjs";
// Source/Component/ConfigKeys.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ConfigKeys = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ConfigKeys;
	const { Rows, Notes = {} } = Astro.props;
	const ReaderLabel = {
		proxy: "PROXY",
		dylib: "DYLIB",
		both: "BOTH",
		none: "-"
	};
	const LiveLabel = {
		hot: "HOT",
		startup: "STARTUP",
		load: "LOAD",
		unwired: "UNWIRED"
	};
	const LiveTone = {
		hot: "border-stamped-canary text-stamped-canary",
		startup: "border-oxblood-dark text-zinc-dust",
		load: "border-oxblood-dark text-zinc-dust",
		unwired: "border-raw-blood text-raw-blood"
	};
	const Sections = [...new Set(Rows.map((Row) => Row.Section))];
	return renderTemplate`${Sections.map((Section) => renderTemplate`${maybeRenderHead($$result)}<div class="mt-16 first:mt-0"> <div class="flex flex-wrap items-baseline justify-between gap-4"> <h3 class="font-mono text-base font-black uppercase tracking-widest text-bone-white"> ${Section} </h3> <span class="font-mono text-base uppercase tracking-widest text-zinc-dust"> ${Rows.filter((Row) => Row.Section === Section).length} keys
</span> </div> ${Notes[Section] && renderTemplate`<p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint"> ${Notes[Section]} </p>`} <div class="mt-6 overflow-x-auto border-4 border-blood-crimson bg-carbon-void"> <table class="w-full min-w-[64rem] text-left text-base"> <thead> <tr class="border-b-2 border-blood-crimson bg-soot-black font-mono text-base uppercase tracking-widest text-zinc-dust"> <th class="px-5 py-3">Key</th> <th class="px-5 py-3">Type</th> <th class="px-5 py-3">Default</th> <th class="px-5 py-3">Env override</th> <th class="px-5 py-3">Reader</th> <th class="px-5 py-3">Live</th> <th class="px-5 py-3">Effect</th> </tr> </thead> <tbody class="divide-y divide-oxblood-dark/50"> ${Rows.filter((Row) => Row.Section === Section).map((Row) => renderTemplate`<tr class="align-top text-zinc-dust"> <td class="px-5 py-3 font-mono text-base text-bone-newsprint">${Row.Key}</td> <td class="px-5 py-3 font-mono text-base">${Row.Type}</td> <td class="px-5 py-3 font-mono text-base text-stamped-canary">${Row.Default}</td> <td class="px-5 py-3 font-mono text-base">${Row.Env ?? "-"}</td> <td class="px-5 py-3 font-mono text-base">${ReaderLabel[Row.Reader]}</td> <td class="px-5 py-3"> <span${addAttribute(`inline-block border px-2 py-0.5 font-mono text-base uppercase tracking-widest ${LiveTone[Row.Live]}`, "class")}> ${LiveLabel[Row.Live]} </span> </td> <td class="px-5 py-3">${Row.Effect}</td> </tr>`)} </tbody> </table> </div> </div>`)}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ConfigKeys.astro", void 0);
// Source/pages/config.astro
var config_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Config,
	file: () => $$file,
	url: () => $$url
});
var $$Config = createComponent(($$result, $$props, $$slots) => {
	const Example = [
		"# ── Aphrodite Configuration ────────────────────────────────────────────────",
		"# Copy this file to aphrodite.toml and edit to your needs.",
		"# Priority (a subset of fields only - see docs/config/env-vars.md):",
		"# env var > aphrodite.toml > hardcoded default.",
		"#",
		"# Search order: ./aphrodite.toml, then ~/.hermes/aphrodite/aphrodite.toml",
		"# (only when APHRODITE_CONFIG_PATH is NOT set - an explicit override that",
		"# doesn't exist falls through to single-proxy CLI-flag mode instead).",
		"#",
		"# Two independent parsers read this file:",
		"#   - the Rust HTTP proxy (config/proxy.rs, when an aphrodite.toml is found):",
		"#     [[proxies]], [defaults], the four hot-reload thresholds plus",
		"#     auto_expand/auto_expand_limit/max_request_body_size in [compression],",
		"#     and [previews] preview_max_chars (also re-applied by POST /reload and",
		"#     the config-file watcher);",
		"#   - the Hermes dylib session (config_loader.rs): the [compression]",
		"#     engine/chain-split/poll/live_container/recursive_depth keys, [defaults]",
		"#     model/api_url, [flow], [directives], [prompts] session_inject +",
		"#     retrieve_guidance/ccr_marker_hint/catalog_intent_hints, [templates],",
		"#     [previews] preview_max_chars.",
		"#",
		"# ── Proxies ─────────────────────────────────────────────────────────────────",
		"[[proxies]]",
		"name = \"cache\"",
		"listen = \"127.0.0.1:9797\"",
		"# listen = \"0.0.0.0:9797\"  # WARNING: exposes proxy to your network",
		"mode = \"cache\"",
		"tool_relay = true",
		"timeout = 120",
		"",
		"[[proxies]]",
		"name = \"token\"",
		"listen = \"127.0.0.1:9798\"",
		"# listen = \"0.0.0.0:9798\"  # WARNING: exposes proxy to your network",
		"mode = \"token\"",
		"tool_relay = true",
		"timeout = 300",
		"",
		"# ── Shared defaults (applied to all proxies unless overridden) ──────────────",
		"[defaults]",
		"api_url = \"https://api.openai.com\"",
		"model = \"default-model\"",
		"ccr_ttl_seconds = 3600",
		"# api_key precedence: proxy-level api_key > [defaults] api_key >",
		"# APHRODITE_API_KEY env var. Only uncomment if you cannot use the env var.",
		"",
		"[compression]",
		"engine_threshold_pct = 30   # LOAD-BEARING (dylib): middle-turn archiving + engine_offload prompt; 100+ = off",
		"engine_protect_first = 2    # LOAD-BEARING (dylib): messages kept at the start",
		"engine_protect_last = 5     # LOAD-BEARING (dylib): messages kept at the end",
		"engine_min_msgs = 8         # LOAD-BEARING (dylib): minimum messages before the engine activates",
		"tool_threshold_token = 256  # token proxy threshold (bytes) - hot-reloads",
		"tool_threshold_cache = 2048 # cache proxy threshold (bytes) - hot-reloads",
		"terminal_threshold = 256    # dylib terminal-output threshold (bytes)",
		"inline_threshold = 1024     # inline zlib fallback threshold (bytes) - hot-reloads",
		"auto_expand = true          # WIRED (proxy): resolve just-stored content inline instead of a marker",
		"auto_expand_limit = 102400  # WIRED (proxy): byte cap for auto-expanded content",
		"live_container = false      # WIRED (dylib): instant 'live' CCR markers for large tool results",
		"recursive_depth = 5         # WIRED (dylib): max nested expansion depth",
		"code_multiplier = 1.0       # multiply threshold for code types (hot-reloads)",
		"# ── Store retention (SQLite token proxy) ─────────────────────────────────",
		"# ccr_ttl_seconds bounds the store in TIME; these two bound it in SPACE:",
		"# past either cap the least-recently-accessed rows are evicted, and an",
		"# evicted hash becomes a retrieval miss, exactly like an expired one.",
		"# Read at store open (NOT hot-reloaded); 0 = unlimited.",
		"store_max_entries = 100000  # max live rows (env APHRODITE_STORE_MAX_ENTRIES)",
		"store_max_bytes = 536870912 # max stored payload bytes, SUM(LENGTH(original)) (env APHRODITE_STORE_MAX_BYTES)",
		"context_engine = true       # dylib-path only; the HTTP proxy never reads it",
		"auto_reload = true          # dylib-path: watch aphrodite.toml and re-apply config on change",
		"",
		"[previews]",
		"preview_max_chars = 0       # caps the whole rendered preview string; 0 = unlimited",
		"model_family = \"code_first\" # selects the [templates.preview.<family>.*] family",
		"",
		"[prompts]",
		"retrieve_guidance = \"minimal\" # how much the system prompt explains CCR retrieval",
		"ccr_marker_hint = false       # append a retrieval hint after markers",
		"catalog_intent_hints = false  # intent hints in catalog output",
		"",
		"# ── Templates (live config - optional format strings) ───────────────────────",
		"# [templates.preview.<family>.<ctype>] = \"format string\"  # {type} {ln} {size} {fns} {sigs} ...",
		"# [templates.marker] format/hint · [templates.prompts] session_inject/engine_offload",
		"# [templates.reverse] ctype -> key remap. Absent = hardcoded builders.",
		"",
		"[directives]",
		"active = [\"lazy\", \"lazy-eval\", \"foresight\"]",
		"",
		"[flow]",
		"budget_chars = 2600         # hard cap on per-turn injected context"
	].join("\n");
	const Keys = [
		{
			Key: "name",
			Section: "[[proxies]]",
			Type: "string",
			Default: "the listen address",
			Reader: "proxy",
			Live: "startup",
			Effect: "Proxy label; the port overrides (APHRODITE_CACHE_PORT / APHRODITE_TOKEN_PORT) match on it"
		},
		{
			Key: "listen",
			Section: "[[proxies]]",
			Type: "\"addr:port\"",
			Default: "127.0.0.1:9797",
			Env: "port only: APHRODITE_CACHE_PORT / APHRODITE_TOKEN_PORT",
			Reader: "proxy",
			Live: "startup",
			Effect: "Bind address; loopback by default, and non-loopback peers are rejected on every route except /health",
			Chain: "toml-only",
			From: "proxy"
		},
		{
			Key: "mode",
			Section: "[[proxies]]",
			Type: "\"cache\" | \"token\"",
			Default: "\"token\"",
			Reader: "proxy",
			Live: "startup",
			Effect: "Backend and compiled threshold: token = SQLite above 1 KB, cache = in-memory above 8 KB",
			Chain: "toml-only",
			From: "proxy"
		},
		{
			Key: "api_key",
			Section: "[[proxies]]",
			Type: "string",
			Default: "none - the proxy refuses to start",
			Env: "APHRODITE_API_KEY (last, not first)",
			Reader: "proxy",
			Live: "startup",
			Effect: "Upstream key; the one chain where TOML outranks the env var",
			Chain: "toml-first",
			From: "proxy"
		},
		{
			Key: "api_url",
			Section: "[[proxies]]",
			Type: "url",
			Default: "https://api.openai.com",
			Env: "APHRODITE_API_URL",
			Reader: "proxy",
			Live: "startup",
			Effect: "Upstream API base URL",
			From: "proxy"
		},
		{
			Key: "model",
			Section: "[[proxies]]",
			Type: "string",
			Default: "\"default-model\"",
			Env: "APHRODITE_MODEL",
			Reader: "proxy",
			Live: "startup",
			Effect: "Model name to forward",
			From: "proxy"
		},
		{
			Key: "tool_relay",
			Section: "[[proxies]]",
			Type: "bool",
			Default: "false",
			Reader: "proxy",
			Live: "startup",
			Effect: "Enables the /tool/relay endpoint",
			From: "proxy"
		},
		{
			Key: "dev",
			Section: "[[proxies]]",
			Type: "bool",
			Default: "false",
			Reader: "proxy",
			Live: "startup",
			Effect: "Verbose request and response logging"
		},
		{
			Key: "ccr_ttl_seconds",
			Section: "[[proxies]]",
			Type: "int (seconds)",
			Default: "3600",
			Env: "APHRODITE_CCR_TTL",
			Reader: "proxy",
			Live: "startup",
			Effect: "CCR entry time-to-live",
			From: "proxy"
		},
		{
			Key: "ccr_db_path",
			Section: "[[proxies]]",
			Type: "path",
			Default: "~/.hermes/aphrodite/ccr.db",
			Env: "APHRODITE_DB",
			Reader: "proxy",
			Live: "startup",
			Effect: "SQLite path for the token proxy; a relative path resolves against the binary's directory",
			From: "proxy"
		},
		{
			Key: "notify_url",
			Section: "[[proxies]]",
			Type: "url",
			Default: "none",
			Env: "APHRODITE_NOTIFY_URL",
			Reader: "proxy",
			Live: "startup",
			Effect: "Hermes callback URL for CCR-create notifications"
		},
		{
			Key: "notify_key",
			Section: "[[proxies]]",
			Type: "string",
			Default: "none",
			Env: "APHRODITE_NOTIFY_KEY",
			Reader: "proxy",
			Live: "startup",
			Effect: "Bearer token sent with notify_url"
		},
		{
			Key: "timeout",
			Section: "[[proxies]]",
			Type: "int (seconds)",
			Default: "300",
			Reader: "proxy",
			Live: "startup",
			Effect: "Upstream request timeout, clamped to 600 with a warning"
		},
		{
			Key: "max_context",
			Section: "[[proxies]]",
			Type: "int (tokens)",
			Default: "1,000,000",
			Reader: "proxy",
			Live: "startup",
			Effect: "Max context tokens"
		},
		{
			Key: "max_output",
			Section: "[[proxies]]",
			Type: "int (tokens)",
			Default: "384,000",
			Reader: "proxy",
			Live: "startup",
			Effect: "Max output tokens; the proxy refuses to start when it is at or above max_context"
		},
		{
			Key: "tool_threshold_token",
			Section: "[compression]",
			Type: "int (bytes)",
			Default: "1024 (example 256)",
			Env: "APHRODITE_TOOL_THRESHOLD_TOKEN",
			Reader: "proxy",
			Live: "hot",
			Effect: "Token-proxy compression threshold - the gate every tool result crosses"
		},
		{
			Key: "tool_threshold_cache",
			Section: "[compression]",
			Type: "int (bytes)",
			Default: "8192 (example 2048)",
			Env: "APHRODITE_TOOL_THRESHOLD_CACHE",
			Reader: "proxy",
			Live: "hot",
			Effect: "Cache-proxy compression threshold"
		},
		{
			Key: "inline_threshold",
			Section: "[compression]",
			Type: "int (bytes)",
			Default: "256 (example 1024)",
			Env: "APHRODITE_INLINE_THRESHOLD",
			Reader: "proxy",
			Live: "hot",
			Effect: "Inline zlib versus the durable CCR store"
		},
		{
			Key: "code_multiplier",
			Section: "[compression]",
			Type: "float",
			Default: "3.0 (example 1.0)",
			Env: "APHRODITE_CODE_MULTIPLIER",
			Reader: "proxy",
			Live: "hot",
			Effect: "Multiplies the threshold for code_* content types; 1.0 gives code no extra headroom"
		},
		{
			Key: "auto_expand",
			Section: "[compression]",
			Type: "bool",
			Default: "false (example true)",
			Env: "APHRODITE_AUTO_EXPAND",
			Reader: "both",
			Live: "hot",
			Effect: "Resolve just-stored content inline instead of emitting a marker, capped by auto_expand_limit"
		},
		{
			Key: "auto_expand_limit",
			Section: "[compression]",
			Type: "int (bytes)",
			Default: "102400",
			Env: "APHRODITE_AUTO_EXPAND_LIMIT",
			Reader: "both",
			Live: "hot",
			Effect: "Byte cap for auto-expanded content; 0 = unlimited"
		},
		{
			Key: "max_request_body_size",
			Section: "[compression]",
			Type: "int (bytes)",
			Default: "none - no cap",
			Env: "APHRODITE_MAX_REQUEST_BODY_SIZE",
			Reader: "proxy",
			Live: "startup",
			Effect: "Request-body cap; an over-size body is rejected with 413 while it is read"
		},
		{
			Key: "store_max_entries",
			Section: "[compression]",
			Type: "int (rows)",
			Default: "100000",
			Env: "APHRODITE_STORE_MAX_ENTRIES",
			Reader: "proxy",
			Live: "load",
			Effect: "Max live rows in the SQLite store; past it the least-recently-accessed rows are evicted; 0 = unlimited"
		},
		{
			Key: "store_max_bytes",
			Section: "[compression]",
			Type: "int (bytes)",
			Default: "536870912",
			Env: "APHRODITE_STORE_MAX_BYTES",
			Reader: "proxy",
			Live: "load",
			Effect: "Max stored payload bytes, SUM(LENGTH(original)); past it LRU rows are evicted; 0 = unlimited"
		},
		{
			Key: "terminal_threshold",
			Section: "[compression]",
			Type: "int (bytes)",
			Default: "1024 (example 256)",
			Env: "APHRODITE_TERMINAL_THRESHOLD",
			Reader: "dylib",
			Live: "load",
			Effect: "Terminal-output threshold gating transform_terminal_output"
		},
		{
			Key: "poll_worker",
			Section: "[compression]",
			Type: "bool",
			Default: "true",
			Env: "APHRODITE_POLL_WORKER",
			Reader: "dylib",
			Live: "load",
			Effect: "Auto-backgrounding of slow terminal and process calls in pre_tool_call"
		},
		{
			Key: "chain_split",
			Section: "[compression]",
			Type: "bool",
			Default: "false",
			Env: "APHRODITE_CHAIN_SPLIT",
			Reader: "dylib",
			Live: "load",
			Effect: "Opt-in command splitting into per-segment markers"
		},
		{
			Key: "chain_split_min_segments",
			Section: "[compression]",
			Type: "int",
			Default: "2",
			Env: "APHRODITE_CHAIN_SPLIT_MIN_SEGMENTS",
			Reader: "dylib",
			Live: "load",
			Effect: "Floor for the adaptive split threshold"
		},
		{
			Key: "chain_split_max_segments",
			Section: "[compression]",
			Type: "int",
			Default: "6",
			Env: "APHRODITE_CHAIN_SPLIT_MAX_SEGMENTS",
			Reader: "dylib",
			Live: "load",
			Effect: "Cap for the adaptive split threshold"
		},
		{
			Key: "context_engine",
			Section: "[compression]",
			Type: "bool",
			Default: "true",
			Env: "APHRODITE_CONTEXT_ENGINE",
			Reader: "dylib",
			Live: "load",
			Effect: "Enables the context engine; the standalone HTTP proxy never reads it"
		},
		{
			Key: "engine_threshold_pct",
			Section: "[compression]",
			Type: "int (%)",
			Default: "45 (example 30)",
			Env: "APHRODITE_ENGINE_THRESHOLD_PCT",
			Reader: "dylib",
			Live: "load",
			Effect: "Context-engine fill gate: middle turns are archived at or above this fill; 0 = never, 100+ = off"
		},
		{
			Key: "engine_protect_first",
			Section: "[compression]",
			Type: "int (turns)",
			Default: "2",
			Env: "APHRODITE_ENGINE_PROTECT_FIRST",
			Reader: "dylib",
			Live: "load",
			Effect: "Turns kept at the start of the index"
		},
		{
			Key: "engine_protect_last",
			Section: "[compression]",
			Type: "int (turns)",
			Default: "5",
			Env: "APHRODITE_ENGINE_PROTECT_LAST",
			Reader: "dylib",
			Live: "load",
			Effect: "Turns kept at the end of the index"
		},
		{
			Key: "engine_min_msgs",
			Section: "[compression]",
			Type: "int (turns)",
			Default: "8",
			Env: "APHRODITE_ENGINE_MIN_MSGS",
			Reader: "dylib",
			Live: "load",
			Effect: "Minimum archived turns before the engine may archive"
		},
		{
			Key: "live_container",
			Section: "[compression]",
			Type: "bool",
			Default: "false",
			Env: "APHRODITE_LIVE_CONTAINER",
			Reader: "dylib",
			Live: "load",
			Effect: "Instant CCR markers with the live type, for progressive retrieval"
		},
		{
			Key: "recursive_depth",
			Section: "[compression]",
			Type: "int",
			Default: "5",
			Env: "APHRODITE_RECURSIVE_DEPTH",
			Reader: "dylib",
			Live: "load",
			Effect: "Nested marker expansion cap"
		},
		{
			Key: "auto_reload",
			Section: "[compression]",
			Type: "bool",
			Default: "false (example true)",
			Env: "APHRODITE_AUTO_RELOAD",
			Reader: "dylib",
			Live: "load",
			Effect: "Watch aphrodite.toml and re-apply config fields on change"
		},
		{
			Key: "catalog_mode",
			Section: "[compression]",
			Type: "-",
			Default: "none",
			Reader: "none",
			Live: "unwired",
			Effect: "Parses; the catalog layout is compiled-in, so this is a silent no-op"
		},
		{
			Key: "classifier_poll",
			Section: "[compression]",
			Type: "-",
			Default: "none",
			Reader: "none",
			Live: "unwired",
			Effect: "Parses; nothing reads it back"
		},
		{
			Key: "prefetch",
			Section: "[compression]",
			Type: "-",
			Default: "none",
			Reader: "none",
			Live: "unwired",
			Effect: "Parses; the aphrodite_prefetch tool exists regardless of this key"
		},
		{
			Key: "preview_max_chars",
			Section: "[previews]",
			Type: "int (chars)",
			Default: "0 (unlimited)",
			Env: "APHRODITE_PREVIEW_MAX_CHARS",
			Reader: "both",
			Live: "hot",
			Effect: "Caps the whole rendered preview string, not per line; 0 = unlimited"
		},
		{
			Key: "model_family",
			Section: "[previews]",
			Type: "\"compact\" | \"code_first\" | \"balance\"",
			Default: "\"code_first\"",
			Reader: "both",
			Live: "load",
			Effect: "Selects the [templates.preview.<family>.*] family when templates are configured"
		},
		{
			Key: "code_structure_map",
			Section: "[previews]",
			Type: "bool",
			Default: "none",
			Reader: "none",
			Live: "unwired",
			Effect: "Reserved: include function, struct and class signatures in code previews"
		},
		{
			Key: "rust_preview_lines",
			Section: "[previews]",
			Type: "int",
			Default: "none",
			Reader: "none",
			Live: "unwired",
			Effect: "Reserved: lines of Rust source to include in previews"
		},
		{
			Key: "session_inject",
			Section: "[prompts]",
			Type: "string",
			Default: "the shipped builtin",
			Env: "APHRODITE_SESSION_INJECT",
			Reader: "dylib",
			Live: "load",
			Effect: "First-turn orientation text injected on turn 0; \"\" disables it"
		},
		{
			Key: "retrieve_guidance",
			Section: "[prompts]",
			Type: "\"minimal\" | \"standard\" | \"verbose\"",
			Default: "\"minimal\"",
			Env: "APHRODITE_RETRIEVE_GUIDANCE",
			Reader: "dylib",
			Live: "load",
			Effect: "How much retrieval guidance the per-turn assembler renders as the [retrieval: ...] line"
		},
		{
			Key: "ccr_marker_hint",
			Section: "[prompts]",
			Type: "bool",
			Default: "false",
			Env: "APHRODITE_CCR_MARKER_HINT",
			Reader: "dylib",
			Live: "hot",
			Effect: "Append a retrieval hint after markers - it fills the marker template's {hint}"
		},
		{
			Key: "catalog_intent_hints",
			Section: "[prompts]",
			Type: "bool",
			Default: "false",
			Env: "APHRODITE_CATALOG_INTENT_HINTS",
			Reader: "dylib",
			Live: "load",
			Effect: "Intent hints alongside the hashes in catalog output"
		},
		{
			Key: "active",
			Section: "[directives]",
			Type: "array of strings",
			Default: "an empty list seeds focus, foresight and lazy",
			Reader: "dylib",
			Live: "load",
			Effect: "Which loaded directives start active; unknown names are filtered out, and the set is runtime-mutable through aphrodite_directive"
		},
		{
			Key: "budget_chars",
			Section: "[flow]",
			Type: "int (chars)",
			Default: "4000 (example 2600)",
			Env: "APHRODITE_FLOW_BUDGET_CHARS",
			Reader: "dylib",
			Live: "load",
			Effect: "Hard cap on ALL per-turn injected context; sections drop bottom-up, and directives and nudges never drop"
		},
		{
			Key: "preview.<family>.<ctype>",
			Section: "[templates]",
			Type: "format string",
			Default: "the hardcoded builder",
			Reader: "both",
			Live: "load",
			Effect: "Preview format per content type; resolution is family[ctype], then reverse[ctype], then family[_default], then the hardcoded builder"
		},
		{
			Key: "marker.format / marker.hint",
			Section: "[templates]",
			Type: "format string",
			Default: "the shipped default",
			Reader: "both",
			Live: "hot",
			Effect: "Marker block layout, and the retrieval hint appended after markers"
		},
		{
			Key: "prompts.<name>",
			Section: "[templates]",
			Type: "format string",
			Default: "the shipped default",
			Reader: "dylib",
			Live: "load",
			Effect: "Named prompt templates rendered into the per-turn context: session_inject, engine_offload, auto_expand_guidance, catalog_context_warn"
		},
		{
			Key: "reverse.<ctype>",
			Section: "[templates]",
			Type: "string",
			Default: "none",
			Reader: "both",
			Live: "load",
			Effect: "ctype -> key remap: lets a content type borrow another type's format string"
		}
	];
	const SectionNotes = {
		"[[proxies]]": "One entry per listener; [defaults] repeats api_url, model, ccr_ttl_seconds and api_key one level up, for every proxy that does not set its own.",
		"[compression]": "One table, two consumers - the READER column is the split, and it is why the same key can be hot for the proxy and load-once for the dylib.",
		"[templates]": "Live configuration: every block is optional, and when a block (or the whole section) is absent the hardcoded builders and shipped defaults apply."
	};
	const Tracked = Keys.filter((Row) => Row.Live !== "unwired" && Row.Key !== "dev" && Row.Key !== "notify_url" && Row.Key !== "notify_key" && Row.Key !== "max_context" && Row.Key !== "max_output" && Row.Key !== "timeout" && Row.Key !== "name").map(({ Key, Section, Env, Default, Reader, Live, Chain, From }) => ({
		Key,
		Section,
		Env,
		Default,
		Reader,
		Live,
		Chain: Chain ?? "env-first",
		From: From ?? "section"
	}));
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Configuration Playground",
		"description": "The interactive aphrodite.toml explorer - every key in one table, the pick chain, the two parsers and the compression knobs, simulated client-side."
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-5 pt-16 sm:px-8 lg:px-14"> ${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, {})} <!-- Header --> <header class="relative border-l-4 border-blood-crimson bg-carbon-void p-8"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "aphrodite.toml",
		"Color": "raw",
		"Side": "left"
	})} <p class="font-mono text-base font-bold uppercase tracking-widest text-stamped-canary">
THE FILE THAT TUNES EVERYTHING
</p> <h1 class="mt-3 text-3xl font-bold tracking-tight text-bone-white sm:text-4xl">
Configuration Playground
</h1> <p class="mt-4 max-w-3xl text-base text-zinc-dust">
One TOML file, two independent parsers, three places it can live.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust">
Edit the shipped example below and watch the resolution order re-decide what wins - env var,
				per-proxy entry, defaults, or the compiled-in fallback.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust">Everything here runs in your browser.</p> </header> <!-- The pick chain --> <section id="pick-chain" class="relative mt-32" aria-label="The file pick chain"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "the pick chain",
		"Color": "teal",
		"Side": "right"
	})} <h2 class="font-headline text-2xl font-black tracking-tight text-bone-white sm:text-3xl">
Where the file is found
</h2> <p class="mt-3 max-w-3xl text-base text-zinc-dust">
Three stops, in order - and a hard fall-through when none of them exists
				(docs/config/aphrodite-toml.md, "File location"):
</p> <div class="mt-8"> ${renderComponent($$result, "ZineStream", $$ZineStream, { "Lines": [
		{
			Text: "1&nbsp;&nbsp;APHRODITE_CONFIG_PATH&nbsp;&nbsp;&mdash;&nbsp;explicit override. A path that does not exist still counts as set: it falls through to CLI-flag mode, it never silently redirects.",
			Tone: "canary"
		},
		{
			Text: "2&nbsp;&nbsp;./aphrodite.toml&nbsp;&nbsp;&mdash;&nbsp;the default: the current working directory.",
			Tone: "plain"
		},
		{
			Text: "3&nbsp;&nbsp;~/.hermes/aphrodite/aphrodite.toml&nbsp;&nbsp;&mdash;&nbsp;the fallback, consulted only when the env var was NOT set; this is where <b>aphrodite setup</b> writes its generated config.",
			Tone: "plain"
		},
		{
			Text: "4&nbsp;&nbsp;none found&nbsp;&nbsp;&mdash;&nbsp;CLI-flag mode: a single proxy, --mode / --listen / --api-key and friends.",
			Tone: "fade"
		}
	] })} </div> </section> <!-- The live editor + the resolution ladder --> <section id="editor" class="relative mt-32" aria-label="The live TOML editor"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "live editor",
		"Color": "canary",
		"Side": "left"
	})} <div class="flex flex-wrap items-center justify-between gap-3"> <h2 class="font-headline text-2xl font-black tracking-tight text-bone-white sm:text-3xl">
Edit the shipped example
</h2> <button type="button" data-action="reset" class="inline-block border border-black bg-raw-blood px-4 py-2 font-mono text-base font-black uppercase text-bone-white shadow-[3px_3px_0px_#000] transition-colors hover:bg-blood-crimson active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
Reset example
</button> </div> <p class="mt-3 max-w-3xl text-base text-zinc-dust">
This is the shipped <code class="text-bone-newsprint">aphrodite.toml.example</code> (sanitized:
				the api_key sample renders as its env-var name).
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust">
Edit it - the resolution ladder on the right re-decides every tracked key as you type.
</p> <div class="mt-8 grid gap-10 lg:grid-cols-2"> <!-- Editor pane --><div class="flex flex-col border-4 border-blood-crimson bg-carbon-void"> <div class="flex items-center justify-between border-b-2 border-blood-crimson bg-soot-black px-5 py-3"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "canary" }, { "default": ($$result) => renderTemplate`aphrodite.toml` })} <span class="font-mono text-base text-zinc-dust" data-editor-status aria-live="polite">
parsed
</span> </div> <label class="sr-only" for="config-editor">aphrodite.toml contents</label> <textarea id="config-editor" data-editor spellcheck="false" class="h-[36rem] w-full resize-y bg-transparent p-5 font-mono text-base leading-relaxed text-bone-newsprint" placeholder="loading the shipped example..."></textarea> </div> <!-- Resolution ladder pane --> <div class="flex flex-col border-4 border-blood-crimson bg-carbon-void"> <div class="flex items-center justify-between border-b-2 border-blood-crimson bg-soot-black px-5 py-3"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "teal" }, { "default": ($$result) => renderTemplate`EFFECTIVE CONFIG - WHO WINS` })} <span class="font-mono text-base text-zinc-dust">env &gt; toml &gt; compiled</span> </div> <div class="flex-1 space-y-4 p-5" data-ladder aria-live="polite"><!-- rendered client-side from the same Keys array the table uses --></div> </div> </div> </section> <!-- The resolution diagram --> <section id="diagram" class="mt-32" aria-label="The config-resolution diagram"> <figure class="border-4 border-blood-crimson bg-carbon-void p-4" data-diagram="config-resolution"> <div class="overflow-x-auto">${unescapeHTML(config_resolution_default)}</div> <figcaption class="mt-3 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
M7 // CONFIG RESOLUTION
</figcaption> </figure> </section> <!-- THE KEYS: the page's one reference --> <section id="keys" class="relative mt-32" aria-label="Every configuration key"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "every key",
		"Color": "raw",
		"Side": "right"
	})} <h2 class="font-headline text-2xl font-black tracking-tight text-bone-white sm:text-3xl">
Every key, once
</h2> <p class="mt-3 max-w-3xl text-base text-zinc-dust">
The table below is the page's only reference for the file: one row per key, with its type,
				its compiled default, the env override, which parser reads it, when a change takes effect,
				and what it does.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust">
Where the shipped example sets a different value, both are shown - an installation using the
				example sees the second, a bare binary sees the first.
</p> <div class="mt-8 flex flex-wrap gap-3"> ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": "hot = /reload + watcher",
		"Color": "canary"
	})} ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": "startup = restart",
		"Color": "bone"
	})} ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": "load = read at dylib load",
		"Color": "bone"
	})} ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": "unwired = silent no-op",
		"Color": "raw"
	})} </div> <div class="mt-12"> ${renderComponent($$result, "ConfigKeys", $$ConfigKeys, {
		"Rows": Keys,
		"Notes": SectionNotes
	})} </div> </section> <!-- The [[proxies]] pair --> <section id="proxies" class="relative mt-32" aria-label="The proxies pair"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "the pair",
		"Color": "bone",
		"Side": "left"
	})} <h2 class="font-mono text-base font-black uppercase tracking-widest text-bone-white">
[[PROXIES]] - CACHE :9797 + TOKEN :9798
</h2> <div class="mt-8 grid gap-10 md:grid-cols-2"> ${renderComponent($$result, "ZineBox", $$ZineBox, { "Tone": "subtle" }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "newsprint" }, { "default": ($$result) => renderTemplate`cache &middot; 127.0.0.1:9797` })} <p class="mt-2 text-base text-zinc-dust">
The in-memory backend: transient, and the lane for results that do not need to
						survive the process.
</p> ` })} ${renderComponent($$result, "ZineBox", $$ZineBox, { "Tone": "subtle" }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "newsprint" }, { "default": ($$result) => renderTemplate`token &middot; 127.0.0.1:9798` })} <p class="mt-2 text-base text-zinc-dust">
The SQLite-backed store: durable, and the lane a retrieval survives a restart from.
</p> ` })} </div> <div class="mt-10 border-l-4 border-raw-blood bg-soot-black p-6"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "dust" }, { "default": ($$result) => renderTemplate`WARNING - THE 0.0.0.0 LINES` })} <p class="mt-2 max-w-3xl text-base text-zinc-dust">
Listeners bind loopback-only by default, and the router rejects non-loopback peers (and
					non-loopback Host headers) on every route except /health.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust">
Uncommenting <code class="text-bone-newsprint">listen = "0.0.0.0:..."</code> exposes an
					unauthenticated listener to your LAN: /retrieve, /history and /ccr/* have no authentication of
					their own.
</p> </div> </section> <!-- One file, two parsers --> <section id="parsers" class="relative mt-32" aria-label="The two parser stacks"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "two stacks",
		"Color": "raw",
		"Side": "right"
	})} <h2 class="font-headline text-2xl font-black tracking-tight text-bone-white sm:text-3xl">
One file, two parsers
</h2> <p class="mt-3 max-w-3xl text-base text-zinc-dust">
The READER column above is the whole split - these are the two codepaths that own it.
</p> <div class="mt-8 grid gap-10 lg:grid-cols-2"> ${renderComponent($$result, "ZineBox", $$ZineBox, { "Tone": "crimson" }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "canary"
	}, { "default": ($$result) => renderTemplate`THE RUST HTTP PROXY` })} <p class="mt-3 text-base text-zinc-dust"> <code class="text-bone-newsprint">config/proxy.rs</code>, active whenever an
						aphrodite.toml is found: it reads every row marked PROXY or BOTH, resolving each one as
						env var, then the per-proxy entry, then <code>[defaults]</code>, then the compiled
						default.
</p> <p class="mt-3 text-base text-zinc-dust">
Three rows are the exceptions, and the table marks them: the API key is TOML-first,
						and the bind address and the mode are per-entry by construction.
</p> ` })} ${renderComponent($$result, "ZineBox", $$ZineBox, { "Tone": "teal" }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "teal"
	}, { "default": ($$result) => renderTemplate`THE HERMES DYLIB SESSION` })} <p class="mt-3 text-base text-zinc-dust"> <code class="text-bone-newsprint">config_loader.rs</code>, read once at dylib load: it
						reads every row marked DYLIB or BOTH, and the standalone HTTP proxy never reads a
						dylib-only key.
</p> <p class="mt-3 text-base text-zinc-dust">
The FFI runtime-override variant is the
<code class="text-bone-newsprint">aphrodite_config_get</code> /
<code class="text-bone-newsprint">aphrodite_config_set</code> pair on the C-ABI bridge -
						it surfaces values and changes them mid-session.
</p> ` })} </div> </section> <!-- The reload simulation --> <section id="reload" class="relative mt-32" aria-label="The reload simulation"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "simulation",
		"Color": "raw",
		"Side": "left"
	})} <div class="flex flex-wrap items-center justify-between gap-3"> <h2 class="font-headline text-2xl font-black tracking-tight text-bone-white sm:text-3xl">
What /reload would apply
</h2> <button type="button" data-action="reload" class="inline-block border border-black bg-raw-blood px-4 py-2 font-mono text-base font-black uppercase text-bone-white shadow-[3px_3px_0px_#000] transition-colors hover:bg-blood-crimson active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
Send /reload
</button> </div> <p class="mt-3 max-w-3xl text-base text-zinc-dust">
Simulated from your editor state: /reload answers
<code class="text-bone-newsprint">"applied": true </code> with the values that took effect, and
				a <code>"parsed_only"</code> object for the fields that do not - the rows the table marks
				startup or load.
</p> <div class="mt-8"> <div data-reload-out aria-live="polite" class="border border-oxblood-dark bg-soot-black p-3.5 font-mono text-base leading-relaxed text-zinc-dust"> <div class="opacity-40">// press SEND /RELOAD</div> </div> </div> </section> <!-- Simulation boundary --> <footer class="mt-32 border-l-4 border-weathered-teal bg-carbon-void p-6"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "teal" }, { "default": ($$result) => renderTemplate`SIMULATION BOUNDARY` })} <p class="mt-2 max-w-3xl text-base text-zinc-dust">
Real on this page: the pick chain, the precedence rules, the two-stack split, the key table
				and the unwired ledger - all quoted from aphrodite.toml.example, README.md:371-442 and
				docs/config/aphrodite-toml.md.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust">
Simulated: the TOML parsing (a browser-side reader, not the Rust or dylib parser), the
				resolution ladder, and the POST /reload response.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust">
No network, no runtime - everything happens in this tab.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust">
Sanitization: the editor ships the repository's example file - never a user's real toml,
				never an api_key value; the key field appears only as its env-var name.
</p> </footer> <!-- RELATED: the natural neighbors --> ${renderComponent($$result, "Related", $$Related, { "Links": [
		{
			Href: "/setup/",
			Label: "SETUP"
		},
		{
			Href: "/workbench/",
			Label: "WORKBENCH"
		},
		{
			Href: "/docs/config/aphrodite-toml/",
			Label: "DOCS · CONFIG"
		}
	] })} <div${addAttribute(JSON.stringify(Example), "data-config-example")}${addAttribute(JSON.stringify(Tracked), "data-config-keys")} hidden></div> </main> ${renderComponent($$result, "ZineDiagramNav", $$ZineDiagramNav, {})} ` })}${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/config.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/config.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/config.astro";
var $$url = "/config";
// \0virtual:astro:page:Source/pages/config@_@astro
var page = () => config_exports;
export { page };
