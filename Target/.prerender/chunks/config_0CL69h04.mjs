import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { E as unescapeHTML, _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro, h as renderScript, n as $$ZineKicker, t as $$Base } from "./Base_Bs2-mKm9.mjs";
import { t as config_resolution_default } from "./config-resolution_DPyisu12.mjs";
import { t as $$ZineDiagramNav } from "./ZineDiagramNav_1LSOKumC.mjs";
import { t as $$SectionNav } from "./SectionNav_27seIZUa.mjs";
import { t as $$CopyButton } from "./CopyButton_DyXR0oh_.mjs";
import { t as $$ZineBox } from "./ZineBox_CVeWVZDC.mjs";
import { t as $$ZineStamp } from "./ZineStamp_DHvPYmuj.mjs";
import { t as $$ZineStream } from "./ZineStream_Cta1vyoB.mjs";
import { n as $$PageShell } from "./ZineTape_BXk9fOqY.mjs";
import { t as $$PageHeader } from "./PageHeader_CFtxK5wU.mjs";
import { a as $$Related } from "./DocsSidebar_DymFAMH3.mjs";
import { n as ConfigKeys, o as EnvVars, r as ConfigNames, t as Assert } from "./Roster_DWXQuOMb.mjs";
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
	return renderTemplate`${Sections.map((Section) => renderTemplate`${maybeRenderHead($$result)}<div class="mt-16 first:mt-0" data-key-group> <div class="flex flex-wrap items-baseline justify-between gap-4"> <h3 class="font-mono text-base font-black uppercase tracking-widest text-bone-white"> ${Section} </h3> <span class="font-mono text-base uppercase tracking-widest text-zinc-dust"> ${Rows.filter((Row) => Row.Section === Section).length} keys
</span> </div> ${Notes[Section] && renderTemplate`<p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint"> ${Notes[Section]} </p>`} <div class="mt-6 overflow-x-auto border-4 border-blood-crimson bg-carbon-void"> <table class="w-full min-w-[64rem] text-left text-base"> <thead> <tr class="border-b-2 border-blood-crimson bg-soot-black font-mono text-base uppercase tracking-widest text-zinc-dust"> <th class="px-5 py-3">Key</th> <th class="px-5 py-3">Type</th> <th class="px-5 py-3">Default</th> <th class="px-5 py-3">Env override</th> <th class="px-5 py-3">Reader</th> <th class="px-5 py-3">Live</th> <th class="px-5 py-3">Effect</th> </tr> </thead> <tbody class="divide-y divide-oxblood-dark/50"> ${Rows.filter((Row) => Row.Section === Section).map((Row) => renderTemplate`<tr class="align-top text-zinc-dust"${addAttribute(Row.Key, "data-key-row")}> <td class="px-5 py-3 font-mono text-base text-bone-newsprint"> ${Row.Key} </td> <td class="px-5 py-3 font-mono text-base">${Row.Type}</td> <td class="px-5 py-3 font-mono text-base text-stamped-canary"> ${Row.Default} </td> <td class="px-5 py-3 font-mono text-base">${Row.Env ?? "-"}</td> <td class="px-5 py-3 font-mono text-base">${ReaderLabel[Row.Reader]}</td> <td class="px-5 py-3"> <span${addAttribute(`inline-block border px-2 py-0.5 font-mono text-base uppercase tracking-widest ${LiveTone[Row.Live]}`, "class")}> ${LiveLabel[Row.Live]} </span> </td> <td class="px-5 py-3"> ${Row.Effect} ${Row.Detail && renderTemplate`<div class="mt-2 border-t border-oxblood-dark pt-2 font-mono text-base leading-relaxed text-zinc-dust"> ${Row.Detail} </div>`} </td> </tr>`)} </tbody> </table> </div> </div>`)}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ConfigKeys.astro", void 0);
// Source/Library/Prose/Config.ts
var ConfigProse = {
	name: {
		Effect: "Proxy label; the port overrides (APHRODITE_CACHE_PORT / APHRODITE_TOKEN_PORT) match on it",
		DefaultNote: "the listen address"
	},
	listen: {
		Type: "\"addr:port\"",
		Effect: "Bind address; loopback by default, and non-loopback peers are rejected on every route except /health",
		Chain: "toml-only",
		From: "proxy"
	},
	mode: {
		Type: "\"cache\" | \"token\"",
		Effect: "Backend and compiled threshold: token = SQLite above 1 KB, cache = in-memory above 8 KB",
		DefaultNote: "\"token\"",
		Chain: "toml-only",
		From: "proxy"
	},
	api_key: {
		Effect: "Upstream key; the one chain where TOML outranks the env var",
		DefaultNote: "none - the proxy refuses to start",
		Chain: "toml-first",
		From: "proxy"
	},
	api_url: {
		Type: "url",
		Effect: "Upstream API base URL",
		DefaultNote: "https://api.openai.com",
		From: "proxy"
	},
	model: {
		Effect: "Model name to forward",
		DefaultNote: "\"default-model\"",
		From: "proxy"
	},
	tool_relay: {
		Effect: "Enables the /tool/relay endpoint",
		DefaultNote: "false",
		From: "proxy"
	},
	dev: { Effect: "Verbose request and response logging" },
	ccr_ttl_seconds: {
		Effect: "CCR entry time-to-live",
		From: "proxy"
	},
	ccr_db_path: {
		Type: "path",
		Effect: "SQLite path for the token proxy; a relative path resolves against the binary's directory",
		From: "proxy"
	},
	notify_url: {
		Type: "url",
		Effect: "Hermes callback URL for CCR-create notifications",
		DefaultNote: "none"
	},
	notify_key: {
		Effect: "Bearer token sent with notify_url",
		DefaultNote: "none"
	},
	timeout: {
		Effect: "Upstream request timeout, clamped to 600 with a warning",
		DefaultNote: "300"
	},
	max_context: {
		Type: "int (tokens)",
		Effect: "Max context tokens"
	},
	max_output: {
		Type: "int (tokens)",
		Effect: "Max output tokens; the proxy refuses to start when it is at or above max_context"
	},
	tool_threshold_token: {
		Effect: "Token-proxy compression threshold - the gate every tool result crosses",
		Detail: "token proxy threshold (bytes) - hot-reloads"
	},
	tool_threshold_cache: {
		Effect: "Cache-proxy compression threshold",
		Detail: "cache proxy threshold (bytes) - hot-reloads"
	},
	inline_threshold: {
		Effect: "Inline zlib versus the durable CCR store",
		Detail: "inline-vs-durable cutoff (bytes) - hot-reloads"
	},
	code_multiplier: {
		Effect: "Multiplies the threshold for code_* content types; 1.0 gives code no extra headroom",
		Detail: "multiplies the threshold for code_* types - hot-reloads"
	},
	auto_expand: {
		Effect: "Resolve just-stored content inline instead of emitting a marker, capped by auto_expand_limit",
		Detail: "resolve just-stored content inline instead of a marker - hot-reloads"
	},
	auto_expand_limit: {
		Effect: "Byte cap for auto-expanded content; 0 = unlimited",
		Detail: "byte cap for auto-expanded content; 0 = unlimited"
	},
	max_request_body_size: {
		Effect: "Request-body cap; an over-size body is rejected with 413 while it is read",
		Detail: "the cap is applied while the body streams in, so an over-size request is refused before it is buffered whole",
		DefaultNote: "none - no cap"
	},
	store_max_entries: {
		Effect: "Max live rows in the SQLite store; past it the least-recently-accessed rows are evicted; 0 = unlimited",
		Detail: "max live rows in the SQLite store - LRU evicts past it; read at store open, not hot-reloaded"
	},
	store_max_bytes: {
		Effect: "Max stored payload bytes, SUM(LENGTH(original)); past it LRU rows are evicted; 0 = unlimited",
		Detail: "max stored payload bytes, SUM(LENGTH(original)) - LRU evicts past it; read at store open, not hot-reloaded"
	},
	terminal_threshold: {
		Effect: "Terminal-output threshold gating transform_terminal_output",
		Detail: "dylib terminal-output threshold"
	},
	poll_worker: {
		Effect: "Auto-backgrounding of slow terminal and process calls in pre_tool_call",
		Detail: "the rewrite happens before the call runs, so the transcript never shows the backgrounding"
	},
	chain_split: {
		Effect: "Opt-in command splitting into per-segment markers",
		Detail: "off by default because invisible segment markers pollute redirected stdout"
	},
	chain_split_min_segments: {
		Effect: "Floor for the adaptive split threshold",
		Detail: "below this many segments the command is left whole"
	},
	chain_split_max_segments: {
		Effect: "Cap for the adaptive split threshold",
		Detail: "past this many segments the split stops, so one command cannot flood the transcript with markers"
	},
	context_engine: {
		Effect: "Enables the context engine; the standalone HTTP proxy never reads it",
		Detail: "opt-in dylib status flag; the HTTP proxy never reads it"
	},
	engine_threshold_pct: {
		Type: "int (%)",
		Effect: "Context-engine fill gate: middle turns are archived at or above this fill; 0 = never, 100+ = off",
		Detail: "LOAD-BEARING (dylib): middle-turn archiving + engine_offload prompt; 100+ = off"
	},
	engine_protect_first: {
		Effect: "Turns kept at the start of the index",
		Detail: "LOAD-BEARING (dylib): turns kept at the start of the index"
	},
	engine_protect_last: {
		Effect: "Turns kept at the end of the index",
		Detail: "LOAD-BEARING (dylib): turns kept at the end of the index"
	},
	engine_min_msgs: {
		Effect: "Minimum archived turns before the engine may archive",
		Detail: "LOAD-BEARING (dylib): minimum messages before the engine activates"
	},
	live_container: {
		Effect: "Instant CCR markers with the live type, for progressive retrieval",
		Detail: "instant 'live' CCR markers for large tool results"
	},
	recursive_depth: {
		Effect: "Nested marker expansion cap",
		Detail: "max nested marker expansion depth"
	},
	auto_reload: {
		Effect: "Watch aphrodite.toml and re-apply config fields on change",
		Detail: "watch aphrodite.toml and re-apply config fields on change"
	},
	catalog_mode: {
		Type: "-",
		Effect: "Parses; the catalog layout is compiled-in, so this is a silent no-op",
		Detail: "a key that parsed and did nothing was worse than an undocumented one, so the ledger names it",
		DefaultNote: "none"
	},
	classifier_poll: {
		Type: "-",
		Effect: "Parses; nothing reads it back",
		Detail: "classification is per invocation, not polled, so there is no interval for this key to set",
		DefaultNote: "none"
	},
	prefetch: {
		Type: "-",
		Effect: "Parses; the aphrodite_prefetch tool exists regardless of this key",
		Detail: "the tool is registered unconditionally, so turning this off disables nothing"
	},
	preview_max_chars: {
		Type: "int (chars)",
		Effect: "Caps the whole rendered preview string, not per line; 0 = unlimited",
		DefaultNote: "0 (unlimited)"
	},
	model_family: {
		Type: "\"compact\" | \"code_first\" | \"balance\"",
		Effect: "Selects the [templates.preview.<family>.*] family when templates are configured",
		DefaultNote: "\"code_first\""
	},
	code_structure_map: {
		Effect: "Reserved: include function, struct and class signatures in code previews",
		DefaultNote: "none"
	},
	rust_preview_lines: {
		Type: "int",
		Effect: "Reserved: lines of Rust source to include in previews"
	},
	session_inject: {
		Effect: "First-turn orientation text injected on turn 0; \"\" disables it",
		DefaultNote: "the shipped builtin"
	},
	retrieve_guidance: {
		Type: "\"minimal\" | \"standard\" | \"verbose\"",
		Effect: "How much retrieval guidance the per-turn assembler renders as the [retrieval: ...] line",
		DefaultNote: "\"minimal\""
	},
	ccr_marker_hint: { Effect: "Append a retrieval hint after markers - it fills the marker template's {hint}" },
	catalog_intent_hints: { Effect: "Intent hints alongside the hashes in catalog output" },
	active: {
		Effect: "Which loaded directives start active; unknown names are filtered out, and the set is runtime-mutable through aphrodite_directive",
		DefaultNote: "an empty list seeds focus, foresight and lazy"
	},
	budget_chars: {
		Type: "int (chars)",
		Effect: "Hard cap on ALL per-turn injected context; sections drop bottom-up, and directives and nudges never drop"
	},
	"preview.<family>.<ctype>": {
		Type: "format string",
		Effect: "Preview format per content type; resolution is family[ctype], then reverse[ctype], then family[_default], then the hardcoded builder",
		DefaultNote: "the hardcoded builder"
	},
	"marker.format / marker.hint": {
		Type: "format string",
		Effect: "Marker block layout, and the retrieval hint appended after markers",
		DefaultNote: "the shipped default"
	},
	"prompts.<name>": {
		Type: "format string",
		Effect: "Named prompt templates rendered into the per-turn context: session_inject, engine_offload, auto_expand_guidance, catalog_context_warn",
		DefaultNote: "the shipped default"
	},
	"reverse.<ctype>": {
		Type: "string",
		Effect: "ctype -> key remap: lets a content type borrow another type's format string"
	}
};
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
	const Keys = ConfigKeys.map((Key) => {
		const { DefaultNote, ...Prose } = ConfigProse[Key.Key] ?? {};
		const Detail = [
			Key.Detail,
			Prose.Detail,
			DefaultNote
		].filter(Boolean).join(" · ");
		return {
			...Key,
			...Prose,
			Type: Prose.Type ?? Key.Type,
			Effect: Prose.Effect ?? Key.Effect,
			...Detail === "" ? {} : { Detail }
		};
	});
	Assert("Source/Library/Prose/Config.ts", ConfigProse, ConfigNames);
	const SectionNotes = {
		"[[proxies]]": "One entry per listener; [defaults] repeats api_url, model, ccr_ttl_seconds and api_key one level up, for every proxy that does not set its own.",
		"[compression]": "One table, two consumers - the READER column is the split, and it is why the same key can be hot for the proxy and load-once for the dylib.",
		"[templates]": "Live configuration: every block is optional, and when a block (or the whole section) is absent the hardcoded builders and shipped defaults apply."
	};
	const Types = [
		{
			Type: "error",
			Factor: 8
		},
		{
			Type: "code_rust",
			Factor: "code_multiplier"
		},
		{
			Type: "code_python",
			Factor: "code_multiplier"
		},
		{
			Type: "code_go",
			Factor: "code_multiplier"
		},
		{
			Type: "code_js",
			Factor: "code_multiplier"
		},
		{
			Type: "code",
			Factor: "code_multiplier"
		},
		{
			Type: "diff",
			Factor: 2
		},
		{
			Type: "git",
			Factor: 2
		},
		{
			Type: "text",
			Factor: 2
		},
		{
			Type: "json",
			Factor: 1
		},
		{
			Type: "tool_output",
			Factor: 1
		},
		{
			Type: "any other type",
			Factor: 1
		}
	];
	const CompiledNumber = (Key, Fallback) => {
		const Value = Number.parseFloat(Keys.find((Row) => Row.Key === Key)?.Default ?? "");
		return Number.isFinite(Value) ? Value : Fallback;
	};
	const BaseBytes = CompiledNumber("tool_threshold_token", 1024);
	const CodeMultiplier = CompiledNumber("code_multiplier", 3);
	const Effective = (Row) => Math.round(BaseBytes * (Row.Factor === "code_multiplier" ? CodeMultiplier : Row.Factor));
	const FactorLabel = (Row) => Row.Factor === "code_multiplier" ? "×code_multiplier" : `×${Row.Factor}`;
	const LadderExcluded = /* @__PURE__ */ new Set([
		"dev",
		"notify_url",
		"notify_key",
		"max_context",
		"max_output",
		"timeout",
		"name"
	]);
	const Tracked = Keys.filter((Row) => Row.Live !== "unwired" && !LadderExcluded.has(Row.Key)).map(({ Key, Section, Env, Default, Reader, Live, Chain, From }) => ({
		Key,
		Section,
		Env,
		Default,
		Reader,
		Live,
		Chain: Chain ?? "env-first",
		From: From ?? "section"
	}));
	const Sections = [
		{
			Id: "pick-chain",
			Label: "THE FILE"
		},
		{
			Id: "editor",
			Label: "EDITOR"
		},
		{
			Id: "keys",
			Label: "EVERY KEY"
		},
		{
			Id: "knobs",
			Label: "THE KNOBS"
		},
		{
			Id: "flow",
			Label: "PER-TURN"
		},
		{
			Id: "unwired",
			Label: "UNWIRED"
		},
		{
			Id: "env",
			Label: "OVERRIDES"
		},
		{
			Id: "classify",
			Label: "CLASSIFY"
		},
		{
			Id: "proxies",
			Label: "THE PAIR"
		},
		{
			Id: "parsers",
			Label: "TWO PARSERS"
		},
		{
			Id: "reload",
			Label: "/RELOAD"
		},
		{
			Id: "boundary",
			Label: "BOUNDARY"
		}
	];
	const Surfaces = [...new Set(EnvVars.map((Entry) => Entry.Surface))].map((Surface) => ({
		Surface,
		Rows: EnvVars.filter((Entry) => Entry.Surface === Surface)
	}));
	const Chapters = {
		File: "01 // THE FILE // WHERE IT IS FOUND",
		Editor: "02 // EDITOR // THE SHIPPED EXAMPLE, LIVE",
		Keys: "03 // EVERY KEY // THE MATRIX",
		Knobs: "04 // THE KNOBS // WHAT [COMPRESSION] DOES",
		Flow: "05 // PER TURN // FLOW, DIRECTIVES, PREVIEWS",
		Unwired: "06 // UNWIRED // THE HONEST LEDGER",
		Env: "07 // OVERRIDES // ENVIRONMENT",
		Classify: "08 // CLASSIFY // ONE TYPE, ONE THRESHOLD",
		Proxies: "09 // THE PAIR // TWO LISTENERS",
		Parsers: "10 // TWO PARSERS // ONE FILE",
		Reload: "11 // /RELOAD // WHAT A SAVE APPLIES",
		Boundary: "12 // SIMULATION BOUNDARY // REAL VS SIMULATED"
	};
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "CONFIG // APHRODITE",
		"Description": "The interactive aphrodite.toml explorer - the pick chain, the two stacks, the [[proxies]] pair and the compression knobs, simulated client-side."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageShell", $$PageShell, { "Crumbs": true }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHeader", $$PageHeader, {
		"Tape": "aphrodite.toml // THE FILE THAT TUNES EVERYTHING",
		"Title": "Configuration Playground",
		"Lead": [
			"A tool call's output becomes part of the model's context, and aphrodite.toml decides how much of it is replaced before the model reads it.",
			"One TOML file, two independent parsers, three places it can live.",
			"The resolution order re-decides what wins as the shipped example changes - env var, per-proxy entry, defaults, or the compiled-in fallback.",
			"Everything here runs in your browser."
		]
	})} ${renderComponent($$result, "SectionNav", $$SectionNav, { "Sections": Sections })}  ${maybeRenderHead($$result)}<section id="pick-chain" class="blueprint-section relative w-full" aria-label="The file pick chain" data-reveal> <p class="section-index">${Chapters.File}</p> <h2 class="mt-3 type-section text-bone-white">Where the file is found</h2> <p class="mt-6 max-w-[46rem] type-body text-bone-newsprint">
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
	] })} </div> </section>  <section id="editor" class="blueprint-section relative w-full" aria-label="The live TOML editor" data-reveal> <p class="section-index">${Chapters.Editor}</p> <div class="mt-3 flex flex-wrap items-end justify-between gap-x-8 gap-y-4"> <h2 class="type-section text-bone-white">Edit the shipped example</h2> <div class="flex flex-wrap items-center gap-3"> ${renderComponent($$result, "CopyButton", $$CopyButton, {
		"Label": "COPY TOML",
		"Payload": Example,
		"Tone": "teal",
		"Size": "md"
	})} <button type="button" data-action="reset" class="inline-block border border-black bg-raw-blood px-4 py-2 font-mono text-base font-black uppercase text-bone-white shadow-[3px_3px_0px_#000] transition-colors hover:bg-blood-crimson active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
Reset example
</button> </div> </div> <div class="prose-flow mt-6 max-w-[46rem]"> <p class="type-body text-bone-newsprint">
This is the shipped${" "} <code class="font-mono text-code text-bone-newsprint">
aphrodite.toml.example
</code>
(sanitized: the api_key sample renders as its env-var name).
</p> <p class="type-body text-bone-newsprint">
Edit it - the resolution ladder on the right re-decides every tracked key as you
					type.
</p> </div> <div class="mt-10 grid gap-6 lg:grid-cols-2"> <!-- Editor pane: a shell with the buffer recessed into it --><div class="grunge shell-card flex flex-col" data-grunge data-grunge-mode="edge"> <div class="flex flex-wrap items-center justify-between gap-3 border-b border-[color:var(--tier-well-edge)] px-5 py-3"> <span class="telemetry-tag telemetry-tag--canary">aphrodite.toml</span> <span class="type-meta text-zinc-dust" data-editor-status aria-live="polite">
parsed
</span> </div> <label class="sr-only" for="config-editor">
aphrodite.toml contents
</label> <textarea id="config-editor" data-editor spellcheck="false" class="h-[36rem] w-full resize-y bg-transparent p-5 font-mono text-code leading-relaxed text-bone-newsprint" placeholder="The shipped example is loaded by the browser; every key, default and override below is server-rendered."></textarea> </div> <!-- Resolution ladder pane: the same shell, one hairline row per tracked
				     key, so the chain a value walked reads as a ledger rather than as 54
				     boxed panels. --> <div class="grunge shell-card flex flex-col" data-grunge data-grunge-mode="edge"> <div class="flex flex-wrap items-center justify-between gap-3 border-b border-[color:var(--tier-well-edge)] px-5 py-3"> <span class="telemetry-tag telemetry-tag--teal">
EFFECTIVE CONFIG - WHO WINS
</span> <span class="type-meta text-zinc-dust">env &gt; toml &gt; compiled</span> </div> <div class="flex-1 space-y-3 p-5" data-ladder aria-live="polite"> <!-- Rendered client-side from the same Keys array the table
						     uses. The sentence below is what a reader without
						     JavaScript sees: a shell with a header and nothing under
						     it reads as a broken page rather than as a simulation
						     that needs a browser. Recompute() replaces it on its
						     first pass, so it never appears twice. --><p class="type-body text-zinc-dust">
This pane resolves each tracked key against the file as it is
							edited, so it needs JavaScript. The matrix below is server-rendered
							and complete without it: every key, its compiled default and its
							env override.
</p> </div> </div> </div> <figure id="diagram" class="well mt-12 p-4 sm:p-5" data-diagram="config-resolution"> <div class="overflow-x-auto">${unescapeHTML(config_resolution_default)}</div> <figcaption class="mt-4 type-meta font-black uppercase tracking-widest text-zinc-dust">
M7 // CONFIG RESOLUTION
</figcaption> </figure> </section>  <section id="keys" class="blueprint-section relative w-full" aria-label="Every configuration key" data-reveal> <p class="section-index">${Chapters.Keys}</p> <h2 class="mt-3 type-section text-bone-white">Every key, once</h2> <div class="prose-flow mt-6 max-w-[46rem]"> <p class="type-body text-bone-newsprint">
One row per key is the only reference the file gets: its type, its compiled
					default, the env override, which parser reads it, when a change takes effect,
					and what it does.
</p> <p class="type-body text-bone-newsprint">
Where the shipped example sets a different value, both are shown - an
					installation using the example sees the second, a bare binary sees the first.
</p> </div> <!-- THE FOUR LIVE CLASSES - the legend the LIVE column is read against.
			     Colour is identity (canary = hot, bone = startup and load, crimson =
			     unwired), so the four fills never move; only the volume does. --> <div class="mt-8 flex flex-wrap gap-3"> <span class="telemetry-tag telemetry-tag--canary">hot = /reload + watcher</span> <span class="telemetry-tag telemetry-tag--bone">startup = restart</span> <span class="telemetry-tag telemetry-tag--bone">load = read at dylib load</span> <span class="telemetry-tag telemetry-tag--crimson">unwired = silent no-op</span> </div> <!-- THE FILTER: a plain input over the rows already in the table. The
			     table below is complete without it - the control is not rendered
			     at all when the head script never set html.js - so a reader
			     without JavaScript reads every key, and a reader with it can
			     narrow the 54 rows to the four they are chasing. --> <div class="grunge shell-card mt-12" data-key-filter-wrap data-grunge data-grunge-mode="edge"> <div class="flex flex-wrap items-baseline justify-between gap-4 border-b border-[color:var(--tier-well-edge)] px-5 py-3"> <label for="key-filter" class="type-meta font-black uppercase tracking-widest text-stamped-canary">
FILTER THE TABLE
</label> <span class="type-meta uppercase tracking-widest text-zinc-dust" data-key-filter-count aria-live="polite"> ${Keys.length} KEYS
</span> </div> <div class="p-5"> <input id="key-filter" data-key-filter type="search" autocomplete="off" spellcheck="false" placeholder="threshold · APHRODITE_ · dylib · hot" class="w-full border border-oxblood-dark bg-soot-black px-4 py-2 font-mono text-base text-bone-newsprint placeholder:text-zinc-dust"> <div class="prose-flow mt-4 max-w-[46rem]"> <p class="type-body text-zinc-dust">
One field, matched against every column of every row: a key name (
<code class="font-mono text-code text-bone-newsprint">threshold</code>),
							an env override (
<code class="font-mono text-code text-bone-newsprint">APHRODITE_</code>
), a reader (
<code class="font-mono text-code text-bone-newsprint">dylib</code>), a
							live class (
<code class="font-mono text-code text-bone-newsprint">hot</code>) or any
							word of an effect.
</p> <p class="type-body text-zinc-dust">
A section whose every row is filtered out takes its heading with it, so
							what is left is the answer and not the shape of the file.
</p> <p class="type-body text-zinc-dust">
Clear the field to get the whole table back - the filter hides rows that
							are already in the document and never asks the network for anything.
</p> <p class="hidden font-mono text-base leading-relaxed text-stamped-canary" data-key-filter-empty>
No key matches that. Try a section name (
<code class="text-bone-newsprint">[compression]</code>), a reader (
<code class="text-bone-newsprint">dylib</code>) or an env prefix (
<code class="text-bone-newsprint">APHRODITE_</code>) - and clear the
							field to restore all ${Keys.length} rows.
</p> </div> </div> </div> <!-- THE MATRIX ITSELF. \`ConfigKeys\` owns the rows and the section
			     grouping; this page dresses each group as a shell with the table
			     recessed into it as an inset well (see this file's own style block
			     below). The Default column is mono and canary there - a value, never
			     prose. --> <div class="mt-12"> ${renderComponent($$result, "ConfigKeys", $$ConfigKeys, {
		"Rows": Keys,
		"Notes": SectionNotes
	})} </div> </section>  <section id="knobs" class="blueprint-section relative w-full" aria-label="The compression knobs" data-reveal> <p class="section-index">${Chapters.Knobs}</p> <h2 class="mt-3 type-section text-bone-white">The compression knobs</h2> <p class="mt-6 max-w-[46rem] type-body text-bone-newsprint">
The [compression] table is the one section a running proxy re-reads, and only part
				of it is hot.
</p> <!-- THE HOT SET - the two sentences that enumerate it, in a well, because
			     they are a list the reader checks a key against. --> <div class="well mt-8 p-5 sm:p-6"> <span class="telemetry-tag telemetry-tag--canary">THE HOT SET</span> <div class="prose-flow mt-4"> <p class="type-body text-bone-newsprint">
Four rows are the hot set:${" "} <code class="text-bone-white">tool_threshold_token</code>,
<code class="text-bone-white">tool_threshold_cache</code>,
<code class="text-bone-white">inline_threshold</code> and
<code class="text-bone-white">code_multiplier</code>.
</p> <p class="type-body text-bone-newsprint"> <code class="text-bone-white">auto_expand</code> and
<code class="text-bone-white">auto_expand_limit</code> are hot on the same
						terms, and so are <code class="text-bone-white">preview_max_chars</code>,
						the marker format and hint, and${" "} <code class="text-bone-white">ccr_marker_hint</code>.
</p> </div> </div> <p class="mt-8 max-w-[46rem] type-body text-bone-newsprint">
Everything else in the section is fixed at startup or read once when the dylib
				loads, which is what the LIVE column records row by row.
</p> <!-- ONE ROW PER KNOB THAT NEEDS ITS OWN SENTENCE. The label column is the
			     key in the mono voice; the sentence beside it is the same prose as
			     before, now readable as a row instead of the sixth paragraph of a run. --> <dl class="mt-8 border-t border-[color:var(--tier-shell-edge)]"> <div class="grid gap-x-8 gap-y-2 border-b border-[color:var(--tier-shell-edge)] py-5 sm:grid-cols-[16rem_1fr]"> <dt class="font-mono text-code text-stamped-canary">code_multiplier</dt> <dd class="type-body text-bone-newsprint"> <code class="text-bone-white">code_multiplier</code> is the only knob that
						is a multiplier rather than a byte count: the code_* types get the base
						threshold times its value, so 3.0 hands source three times the default
						patience and 1.0 hands it none.
</dd> </div> <div class="grid gap-x-8 gap-y-2 border-b border-[color:var(--tier-shell-edge)] py-5 sm:grid-cols-[16rem_1fr]"> <dt class="font-mono text-code text-stamped-canary">inline_threshold</dt> <dd class="type-body text-bone-newsprint"> <code class="text-bone-white">inline_threshold</code> decides where
						compressed content lives: below it the bytes ride inline as zlib, above it
						they become a durable store entry with a marker.
</dd> </div> <div class="grid gap-x-8 gap-y-2 border-b border-[color:var(--tier-shell-edge)] py-5 sm:grid-cols-[16rem_1fr]"> <dt class="font-mono text-code text-stamped-canary">engine_threshold_pct</dt> <dd class="type-body text-bone-newsprint"> <code class="text-bone-white">engine_threshold_pct</code> is the context
						engine's fill gate, and its two extremes are switches: 0 means never archive
						and 100 or more means the engine is off.
</dd> </div> <div class="grid gap-x-8 gap-y-2 border-b border-[color:var(--tier-shell-edge)] py-5 sm:grid-cols-[16rem_1fr]"> <dt class="font-mono text-code text-stamped-canary">store_max_entries</dt> <dd class="prose-flow type-body text-bone-newsprint"> <p>
The two store retention caps are the deliberate exception, because a
							store cannot resize while it is serving.
</p> <p> <code class="text-bone-white">store_max_entries</code> and
<code class="text-bone-white">store_max_bytes</code> are read when the
							SQLite store is opened, so a change to either takes effect on the next
							proxy restart, not on save.
</p> </dd> </div> <div class="grid gap-x-8 gap-y-2 py-5 sm:grid-cols-[16rem_1fr]"> <dt class="font-mono text-code text-stamped-canary">aphrodite_config_set</dt> <dd class="type-body text-bone-newsprint">
The dylib keys take a third route entirely: they ride
<code class="text-bone-white">aphrodite_config_set</code> at runtime, so a
						session can move them without a restart and without a file edit.
</dd> </div> </dl> </section>  <section id="flow" class="blueprint-section relative w-full" aria-label="Flow, directives and previews" data-reveal> <p class="section-index">${Chapters.Flow}</p> <h2 class="mt-3 font-mono text-sub font-black uppercase tracking-widest text-bone-white">
[FLOW] / [DIRECTIVES] / [PREVIEWS]
</h2> <p class="mt-6 max-w-[46rem] type-body text-bone-newsprint">
Three sections decide what the model is handed each turn, and none of them touches
				compression.
</p> <div class="mt-10 grid gap-6 lg:grid-cols-3"> ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Accent": "teal",
		"Surface": "shell"
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "teal"
	}, { "default": ($$result) => renderTemplate`
[FLOW]
` })} <div class="prose-flow mt-3"> <p class="type-body text-bone-newsprint"> <code class="text-bone-white">budget_chars = 2600</code> is the hard cap
							on ALL per-turn injected context.
</p> <p class="type-body text-bone-newsprint">
The budget covers directives, nudges, the recall catalog and the
							retrieve hint together, not each one separately.
</p> <p class="type-body text-bone-newsprint">
Sections drop bottom-up when the total goes over; directives and nudges
							never drop.
</p> <p class="type-body text-bone-newsprint">
Dylib only, overridable through
<code class="text-bone-white">APHRODITE_FLOW_BUDGET_CHARS</code>.
</p> <p class="type-body text-bone-newsprint">
The compiled default is 4,000 characters, so the shipped example buys a
							leaner turn than a bare binary does.
</p> </div> ` })} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Accent": "none",
		"Surface": "shell"
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "newsprint"
	}, { "default": ($$result) => renderTemplate`
[DIRECTIVES]
` })} <div class="prose-flow mt-3"> <p class="type-body text-bone-newsprint"> <code class="text-bone-white">
active = ["lazy", "lazy-eval", "foresight"]
</code>
names which loaded directives start active.
</p> <p class="type-body text-bone-newsprint">
Names that are not in the loaded set are silently filtered out, and an
							empty list seeds focus, foresight and lazy instead.
</p> <p class="type-body text-bone-newsprint">
The set is runtime-mutable, so a conversation can swap directives
							mid-flight through
<code class="text-bone-white">aphrodite_directive</code>.
</p> <p class="type-body text-bone-newsprint">
The built-in set is focus, foresight, ccr-handling, cleanup, explore,
							lazy and lazy-eval - seven files baked into the binary.
</p> </div> ` })} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Accent": "none",
		"Surface": "shell"
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "newsprint"
	}, { "default": ($$result) => renderTemplate`
[PREVIEWS]
` })} <div class="prose-flow mt-3"> <p class="type-body text-bone-newsprint"> <code class="text-bone-white">preview_max_chars = 0</code> caps the
							whole rendered preview string, not per line, and 0 means unlimited.
</p> <p class="type-body text-bone-newsprint"> <code class="text-bone-white">model_family = "code_first"</code> selects
							the
<code>[templates.preview.&lt;family&gt;.*]</code> family when
<code>[templates]</code> is configured.
</p> <p class="type-body text-bone-newsprint">
The env var <code>APHRODITE_PREVIEW_MAX_CHARS</code> outranks the file,
							and the file outranks unlimited.
</p> <p class="type-body text-bone-newsprint">Re-applied by POST /reload.</p> </div> ` })} </div> </section>  <section id="unwired" class="blueprint-section relative w-full" aria-label="Documented but unwired keys" data-reveal> <p class="section-index">${Chapters.Unwired}</p> <h2 class="mt-3 font-mono text-sub font-black uppercase tracking-widest text-bone-white">
DOCUMENTED BUT UNWIRED
</h2> <p class="mt-6 max-w-[46rem] type-body text-bone-newsprint">
Five keys parse and do nothing, and every one of them is marked UNWIRED rather than
				quietly omitted.
</p> <!-- THE LEDGER, one row per dead key: the key in the mono voice, the reason
			     beside it. The crimson tag is the same crimson the LIVE column uses for
			     an unwired row, so the two surfaces cannot disagree about what
			     "unwired" looks like. --> <dl class="mt-8 border-t border-[color:var(--tier-shell-edge)]"> <div class="grid gap-x-8 gap-y-2 border-b border-[color:var(--tier-shell-edge)] py-5 sm:grid-cols-[16rem_1fr]"> <dt> <code class="font-mono text-code text-bone-white">catalog_mode</code> <span class="mt-2 block"> <span class="telemetry-tag telemetry-tag--crimson">UNWIRED</span> </span> </dt> <dd class="type-body text-bone-newsprint"> <code class="text-bone-white">catalog_mode</code> lost its reader when the
						catalog layout became compiled-in, so setting it changes nothing.
</dd> </div> <div class="grid gap-x-8 gap-y-2 border-b border-[color:var(--tier-shell-edge)] py-5 sm:grid-cols-[16rem_1fr]"> <dt> <code class="font-mono text-code text-bone-white">classifier_poll</code> <span class="mt-2 block"> <span class="telemetry-tag telemetry-tag--crimson">UNWIRED</span> </span> </dt> <dd class="type-body text-bone-newsprint"> <code class="text-bone-white">classifier_poll</code> describes a poll
						interval the classifier never had: classification runs per invocation.
</dd> </div> <div class="grid gap-x-8 gap-y-2 border-b border-[color:var(--tier-shell-edge)] py-5 sm:grid-cols-[16rem_1fr]"> <dt> <code class="font-mono text-code text-bone-white">prefetch</code> <span class="mt-2 block"> <span class="telemetry-tag telemetry-tag--crimson">UNWIRED</span> </span> </dt> <dd class="type-body text-bone-newsprint"> <code class="text-bone-white">prefetch</code> is dead because the
<code class="text-bone-white">aphrodite_prefetch</code> tool is registered
						unconditionally.
</dd> </div> <div class="grid gap-x-8 gap-y-2 py-5 sm:grid-cols-[16rem_1fr]"> <dt> <code class="font-mono text-code text-bone-white">code_structure_map</code> <code class="mt-1 block font-mono text-code text-bone-white">
rust_preview_lines
</code> <span class="mt-2 block"> <span class="telemetry-tag telemetry-tag--crimson">RESERVED</span> </span> </dt> <dd class="type-body text-bone-newsprint"> <code class="text-bone-white">code_structure_map</code> and
<code class="text-bone-white">rust_preview_lines</code> are reserved: they
						describe a code preview that includes signatures and a line budget for Rust
						source, and no builder reads either one yet.
</dd> </div> </dl> <p class="mt-8 max-w-[46rem] type-body text-bone-newsprint">
The ledger exists because a key that parses and does nothing is worse than an
				undocumented one: it looks like a lever and behaves like a wall.
</p> </section>  <section id="env" class="blueprint-section relative w-full" aria-label="Every environment variable" data-reveal> <p class="section-index">${Chapters.Env}</p> <h2 class="mt-3 type-section text-bone-white">Every override, live or not</h2> <div class="prose-flow mt-6 max-w-[46rem]"> <p class="type-body text-bone-newsprint">
A TOML key is only half the story: the environment wins wherever it is set, and
					the module documents ${EnvVars.length} variables across three surfaces - the Rust
					proxy, the
<code class="text-bone-white">aphrodite setup</code> subcommand, and the Hermes
					dylib session.
</p> <p class="type-body text-bone-newsprint">
The last two groups are the ones that matter most: a variable with no reader is
					a silent no-op, and a build-time variable exported at runtime changes nothing.
</p> </div> ${Surfaces.map(({ Surface, Rows }) => renderTemplate`<div class="mt-12"> <h3 class="flex flex-wrap items-baseline gap-3"> <span class="telemetry-tag telemetry-tag--canary">${Surface}</span> <span class="type-meta uppercase tracking-widest text-zinc-dust"> ${Rows.length} variables
</span> </h3> <div class="grunge shell-card mt-4" data-grunge data-grunge-mode="edge"> <div class="overflow-x-auto"> <table class="w-full border-collapse text-left"> <thead> <tr class="border-b border-[color:var(--tier-well-edge)]"> <th scope="col" class="type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5">
VARIABLE
</th> <th scope="col" class="type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5">
PRECEDENCE
</th> <th scope="col" class="type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5">
DEFAULT
</th> <th scope="col" class="type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5">
EFFECT
</th> </tr> </thead> <tbody> ${Rows.map((Entry) => renderTemplate`<tr class="border-b border-[color:var(--tier-shell-edge)] align-top last:border-b-0"> <td class="whitespace-nowrap px-4 py-4 font-mono text-code text-weathered-teal sm:px-5"> ${Entry.Variable} </td> <td class="px-4 py-4 font-mono text-code text-zinc-dust sm:px-5"> ${Entry.Precedence ?? "-"} </td> <td class="px-4 py-4 font-mono text-code text-bone-white sm:px-5"> ${Entry.Default ?? "-"} </td> <td class="max-w-[30rem] px-4 py-4 type-body text-bone-newsprint sm:px-5"> ${Entry.Effect} </td> </tr>`)} </tbody> </table> </div> </div> </div>`)} <p class="mt-12 border-t border-[color:var(--tier-shell-edge)] pt-6 type-body text-zinc-dust">
SRC:${" "} <code class="font-mono text-code text-bone-newsprint">docs/config/env-vars.md</code>${" "}
- every row is generated from it.
</p> </section>  <section id="classify" class="blueprint-section relative w-full" aria-label="The classify matrix" data-reveal> <p class="section-index">${Chapters.Classify}</p> <h2 class="mt-3 type-section text-bone-white">One type, one threshold</h2> <div class="prose-flow mt-6 max-w-[46rem]"> <p class="type-body text-bone-newsprint">
The gate is <code class="text-bone-white">threshold_for</code> in
<code class="text-bone-white">crates/aphrodite/src/proxy.rs</code>: the base
					threshold, then one multiplier per content type.
</p> <p class="type-body text-bone-newsprint">
The base is the proxy's own mode threshold -
<code class="text-bone-white">tool_threshold_token</code> on the token lane,
<code class="text-bone-white">tool_threshold_cache</code> on the cache lane.
</p> <p class="type-body text-bone-newsprint">
The bytes column is computed from the edited file, so the matrix follows those
					values instead of restating the defaults.
</p> </div> <!-- THE LIVE READOUT - the two numbers the matrix is solved from, read off
			     the editor. A well, not a metric: this is an instrument panel, and the
			     chapter spends no expressive assembly of its own. --> <div class="well mt-8 flex flex-wrap items-end gap-x-12 gap-y-6 p-5 sm:p-6"> <div> <p class="type-meta font-black uppercase tracking-widest text-zinc-dust">
BASE
</p> <p class="mt-1 font-mono text-sub font-bold text-bone-white"> <span data-classify-base>${BaseBytes}</span> <span class="type-meta text-zinc-dust">B</span> </p> </div> <div> <p class="type-meta font-black uppercase tracking-widest text-zinc-dust">
CODE_MULTIPLIER
</p> <p class="mt-1 font-mono text-sub font-bold text-bone-white">
×<span data-classify-mult>${CodeMultiplier}</span> </p> </div> </div> <div class="grunge shell-card mt-6" data-grunge data-grunge-mode="edge"> <div class="overflow-x-auto"> <table class="w-full min-w-[40rem] text-left"> <thead> <tr class="border-b border-[color:var(--tier-well-edge)]"> <th scope="col" class="type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5">
Type
</th> <th scope="col" class="type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5">
Multiplier
</th> <th scope="col" class="type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5">
At the editor's values
</th> </tr> </thead> <tbody> ${Types.map((Row) => renderTemplate`<tr class="border-b border-[color:var(--tier-shell-edge)] align-top last:border-b-0"> <td class="px-4 py-3 font-mono text-code text-bone-white sm:px-5"> ${Row.Type} </td> <td class="px-4 py-3 font-mono text-code text-zinc-dust sm:px-5"> ${FactorLabel(Row)} </td> <td class="px-4 py-3 font-mono text-code text-stamped-canary sm:px-5"> <span data-effective${addAttribute(Row.Factor === "code_multiplier" ? 1 : Row.Factor, "data-factor")}${addAttribute(Row.Factor === "code_multiplier" ? "code_multiplier" : void 0, "data-knob")}> ${Effective(Row)} </span>
B
</td> </tr>`)} </tbody> </table> </div> </div> <p class="mt-6 max-w-[46rem] type-body text-bone-newsprint"> <code class="text-bone-white">linter</code>,
<code class="text-bone-white">build_output</code> and
<code class="text-bone-white">log</code> return the base before any multiplier, so
				those three never scale.
</p> <p class="mt-3 max-w-[46rem] type-body text-bone-newsprint">
Two runtime factors scale the result and neither can be read from the config file:
</p> <ul class="mt-3 max-w-[46rem] space-y-2 type-body text-bone-newsprint"> <li class="border-l-2 border-oxblood-dark pl-3">
the compression-ratio auto-tune (×2 above a 20× ratio, ×0.5 below 3×) scales the
					base
</li> <li class="border-l-2 border-oxblood-dark pl-3">
and the headroom budget (0.50 to 1.0) scales the result.
</li> </ul> <p class="mt-6 type-body text-zinc-dust">
SRC:${" "} <code class="font-mono text-code text-bone-newsprint">
crates/aphrodite/src/proxy.rs:613-644
</code>
.
</p> </section>  <section id="proxies" class="blueprint-section relative w-full" aria-label="The proxies pair" data-reveal> <p class="section-index">${Chapters.Proxies}</p> <h2 class="mt-3 font-mono text-sub font-black uppercase tracking-widest text-bone-white">
[[PROXIES]] - CACHE :9797 + TOKEN :9798
</h2> <div class="mt-10 grid gap-6 md:grid-cols-2"> ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Accent": "none",
		"Surface": "shell"
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "newsprint" }, { "default": ($$result) => renderTemplate`cache &middot; 127.0.0.1:9797` })} <p class="mt-2 type-body text-bone-newsprint">
The lane for results that do not need to survive the process.
</p> ` })} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Accent": "none",
		"Surface": "shell"
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "newsprint" }, { "default": ($$result) => renderTemplate`token &middot; 127.0.0.1:9798` })} <p class="mt-2 type-body text-bone-newsprint">
The lane a retrieval survives a restart from.
</p> ` })} </div> <!-- THE ONE ALERT ON THE PAGE: the critical tier, carrying its own glow and
			     its bone ink, because a bare crimson fill is not an alert. --> <div class="tier-critical mt-10 p-6 sm:p-8"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "newsprint" }, { "default": ($$result) => renderTemplate`WARNING - THE 0.0.0.0 LINES` })} <div class="prose-flow mt-3"> <p class="type-body text-bone-white">
Listeners bind loopback-only by default, and the router rejects non-loopback
						peers (and non-loopback Host headers) on every route except /health.
</p> <p class="type-body text-bone-white">
Uncommenting <code class="text-bone-newsprint">listen = "0.0.0.0:..."</code>${" "}
exposes an unauthenticated listener to your LAN: /retrieve, /history and
						/ccr/* have no authentication of their own.
</p> </div> </div> </section>  <section id="parsers" class="blueprint-section relative w-full" aria-label="The two parser stacks" data-reveal> <p class="section-index">${Chapters.Parsers}</p> <h2 class="mt-3 type-section text-bone-white">One file, two parsers</h2> <p class="mt-6 max-w-[46rem] type-body text-bone-newsprint">
The READER column is the whole split - these are the two codepaths that own it.
</p> <div class="mt-10 grid gap-6 lg:grid-cols-2"> ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Accent": "crimson",
		"Surface": "shell"
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "canary"
	}, { "default": ($$result) => renderTemplate`
THE RUST HTTP PROXY
` })} <p class="mt-3 type-body text-bone-newsprint"> <code class="text-bone-white">config/proxy.rs</code>, active whenever an
						aphrodite.toml is found: it reads every row marked PROXY or BOTH, resolving
						each one as
</p> <ul class="mt-3 space-y-2 type-body text-bone-newsprint"> <li class="border-l-2 border-oxblood-dark pl-3">env var</li> <li class="border-l-2 border-oxblood-dark pl-3">
then the per-proxy entry
</li> <li class="border-l-2 border-oxblood-dark pl-3">
then <code>[defaults]</code> </li> <li class="border-l-2 border-oxblood-dark pl-3">
then the compiled default.
</li> </ul> <p class="mt-3 type-body text-bone-newsprint">
Three rows are the exceptions, and the ladder marks them: the API key is
						TOML-first, and the bind address and the mode are per-entry by construction.
</p> ` })} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Accent": "teal",
		"Surface": "shell"
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "teal"
	}, { "default": ($$result) => renderTemplate`
THE HERMES DYLIB SESSION
` })} <p class="mt-3 type-body text-bone-newsprint"> <code class="text-bone-white">config_loader.rs</code>, read once at dylib
						load: it reads every row marked DYLIB or BOTH, and the standalone HTTP proxy
						never reads a dylib-only key.
</p> <p class="mt-3 type-body text-bone-newsprint">
The FFI runtime-override variant is the
<code class="text-bone-white">aphrodite_config_get</code> /
<code class="text-bone-white">aphrodite_config_set</code> pair on the C-ABI
						bridge - it surfaces values and changes them mid-session.
</p> ` })} </div> </section>  <section id="reload" class="blueprint-section relative w-full" aria-label="The reload simulation" data-reveal> <p class="section-index">${Chapters.Reload}</p> <div class="mt-3 flex flex-wrap items-end justify-between gap-x-8 gap-y-4"> <h2 class="type-section text-bone-white">What /reload would apply</h2> <button type="button" data-action="reload" class="inline-block border border-black bg-raw-blood px-4 py-2 font-mono text-base font-black uppercase text-bone-white shadow-[3px_3px_0px_#000] transition-colors hover:bg-blood-crimson active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
Send /reload
</button> </div> <!-- THE CALLOUT - the page's one expressive stamp, carrying the sentence
			     that says exactly what the reply below is and is not. --> <div class="well mt-8 p-5 sm:p-6"> ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": "SIMULATED IN THE BROWSER",
		"Color": "canary",
		"Class": "mb-5"
	})} <p class="max-w-[46rem] type-body text-bone-newsprint">
Simulated from your editor state: /reload answers
<code class="text-bone-newsprint">"applied": true </code> with the values that
					took effect, and a <code>"parsed_only"</code> object for the fields that do not
					- the rows the table marks startup or load.
</p> </div> <div class="mt-8"> <div data-reload-out aria-live="polite" class="well p-4 font-mono text-code leading-relaxed text-zinc-dust"> <div class="opacity-40">// press SEND /RELOAD</div> </div> </div> </section>  <section id="boundary" class="blueprint-section relative w-full" aria-label="The simulation boundary" data-reveal> <p class="section-index">${Chapters.Boundary}</p> <h2 class="mt-3 type-section text-bone-white">What is real, what is simulated</h2> <div class="mt-10 grid gap-6 lg:grid-cols-2"> ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Accent": "teal",
		"Surface": "shell"
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "teal"
	}, { "default": ($$result) => renderTemplate`
REAL
` })} <ul class="mt-3 space-y-2 type-body text-bone-newsprint"> <li class="border-l-2 border-oxblood-dark pl-3">the pick chain</li> <li class="border-l-2 border-oxblood-dark pl-3">the precedence rules</li> <li class="border-l-2 border-oxblood-dark pl-3">the two-stack split</li> <li class="border-l-2 border-oxblood-dark pl-3">the key table</li> <li class="border-l-2 border-oxblood-dark pl-3">
and the unwired ledger - all quoted from aphrodite.toml.example,
							README.md:371-442 and docs/config/aphrodite-toml.md.
</li> </ul> ` })} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Accent": "none",
		"Surface": "shell"
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "newsprint"
	}, { "default": ($$result) => renderTemplate`
SIMULATED
` })} <ul class="mt-3 space-y-2 type-body text-bone-newsprint"> <li class="border-l-2 border-oxblood-dark pl-3">
the TOML parsing (a browser-side reader, not the Rust or dylib parser)
</li> <li class="border-l-2 border-oxblood-dark pl-3">the resolution ladder</li> <li class="border-l-2 border-oxblood-dark pl-3">
and the POST /reload response.
</li> </ul> ` })} </div> <div class="prose-flow mt-8 max-w-[46rem]"> <p class="type-body text-bone-newsprint">
No network, no runtime - every number is computed in the browser.
</p> <p class="type-body text-bone-newsprint">
Sanitization: the editor ships the repository's example file - never a user's
					real toml, never an api_key value; the key field appears only as its env-var
					name.
</p> </div> </section>  ${renderComponent($$result, "Related", $$Related, { "Links": [
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
	] })} <div${addAttribute(encodeURIComponent(Example), "data-config-example")}${addAttribute(encodeURIComponent(JSON.stringify(Tracked)), "data-config-keys")} hidden></div> ` })} ${renderComponent($$result, "ZineDiagramNav", $$ZineDiagramNav, {})} ` })}${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/config.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/config.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/config.astro";
var $$url = "/config";
// \0virtual:astro:page:Source/pages/config@_@astro
var page = () => config_exports;
export { page };
