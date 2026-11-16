import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { E as unescapeHTML, _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, g as createAstro, h as renderScript, n as $$ZineKicker, t as $$Base } from "./Base_DYyCOQNQ.mjs";
import { t as config_resolution_default } from "./config-resolution_DPyisu12.mjs";
import { t as $$ZineDiagramNav } from "./ZineDiagramNav_4mg_4jxJ.mjs";
import { t as $$SectionNav } from "./SectionNav_DVkttqpR.mjs";
import { t as $$CopyButton } from "./CopyButton_DS7iUf3C.mjs";
import { t as $$ZineBox } from "./ZineBox_Bx8tYYbD.mjs";
import { t as $$ZineStamp } from "./ZineStamp_DfhrgJvn.mjs";
import { t as $$ZineStream } from "./ZineStream_DD6gEVPo.mjs";
import { n as $$PageShell, t as $$ZineTape } from "./ZineTape_CVpY0Eb1.mjs";
import { a as $$Related } from "./DocsSidebar_BegnaZwP.mjs";
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
</span> </div> ${Notes[Section] && renderTemplate`<p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint"> ${Notes[Section]} </p>`} <div class="mt-6 overflow-x-auto border-4 border-blood-crimson bg-carbon-void"> <table class="w-full min-w-[64rem] text-left text-base"> <thead> <tr class="border-b-2 border-blood-crimson bg-soot-black font-mono text-base uppercase tracking-widest text-zinc-dust"> <th class="px-5 py-3">Key</th> <th class="px-5 py-3">Type</th> <th class="px-5 py-3">Default</th> <th class="px-5 py-3">Env override</th> <th class="px-5 py-3">Reader</th> <th class="px-5 py-3">Live</th> <th class="px-5 py-3">Effect</th> </tr> </thead> <tbody class="divide-y divide-oxblood-dark/50"> ${Rows.filter((Row) => Row.Section === Section).map((Row) => renderTemplate`<tr class="align-top text-zinc-dust"${addAttribute(Row.Key, "data-key-row")}> <td class="px-5 py-3 font-mono text-base text-bone-newsprint">${Row.Key}</td> <td class="px-5 py-3 font-mono text-base">${Row.Type}</td> <td class="px-5 py-3 font-mono text-base text-stamped-canary">${Row.Default}</td> <td class="px-5 py-3 font-mono text-base">${Row.Env ?? "-"}</td> <td class="px-5 py-3 font-mono text-base">${ReaderLabel[Row.Reader]}</td> <td class="px-5 py-3"> <span${addAttribute(`inline-block border px-2 py-0.5 font-mono text-base uppercase tracking-widest ${LiveTone[Row.Live]}`, "class")}> ${LiveLabel[Row.Live]} </span> </td> <td class="px-5 py-3"> ${Row.Effect} ${Row.Detail && renderTemplate`<div class="mt-2 border-t border-oxblood-dark pt-2 font-mono text-base leading-relaxed text-zinc-dust"> ${Row.Detail} </div>`} </td> </tr>`)} </tbody> </table> </div> </div>`)}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ConfigKeys.astro", void 0);
// Source/Library/Prose/Config.ts
var ConfigProse = {
	"name": {
		Effect: "Proxy label; the port overrides (APHRODITE_CACHE_PORT / APHRODITE_TOKEN_PORT) match on it",
		DefaultNote: "the listen address"
	},
	"listen": {
		Type: "\"addr:port\"",
		Effect: "Bind address; loopback by default, and non-loopback peers are rejected on every route except /health",
		Chain: "toml-only",
		From: "proxy"
	},
	"mode": {
		Type: "\"cache\" | \"token\"",
		Effect: "Backend and compiled threshold: token = SQLite above 1 KB, cache = in-memory above 8 KB",
		DefaultNote: "\"token\"",
		Chain: "toml-only",
		From: "proxy"
	},
	"api_key": {
		Effect: "Upstream key; the one chain where TOML outranks the env var",
		DefaultNote: "none - the proxy refuses to start",
		Chain: "toml-first",
		From: "proxy"
	},
	"api_url": {
		Type: "url",
		Effect: "Upstream API base URL",
		DefaultNote: "https://api.openai.com",
		From: "proxy"
	},
	"model": {
		Effect: "Model name to forward",
		DefaultNote: "\"default-model\"",
		From: "proxy"
	},
	"tool_relay": {
		Effect: "Enables the /tool/relay endpoint",
		DefaultNote: "false",
		From: "proxy"
	},
	"dev": { Effect: "Verbose request and response logging" },
	"ccr_ttl_seconds": {
		Effect: "CCR entry time-to-live",
		From: "proxy"
	},
	"ccr_db_path": {
		Type: "path",
		Effect: "SQLite path for the token proxy; a relative path resolves against the binary's directory",
		From: "proxy"
	},
	"notify_url": {
		Type: "url",
		Effect: "Hermes callback URL for CCR-create notifications",
		DefaultNote: "none"
	},
	"notify_key": {
		Effect: "Bearer token sent with notify_url",
		DefaultNote: "none"
	},
	"timeout": {
		Effect: "Upstream request timeout, clamped to 600 with a warning",
		DefaultNote: "300"
	},
	"max_context": {
		Type: "int (tokens)",
		Effect: "Max context tokens"
	},
	"max_output": {
		Type: "int (tokens)",
		Effect: "Max output tokens; the proxy refuses to start when it is at or above max_context"
	},
	"tool_threshold_token": {
		Effect: "Token-proxy compression threshold - the gate every tool result crosses",
		Detail: "token proxy threshold (bytes) - hot-reloads"
	},
	"tool_threshold_cache": {
		Effect: "Cache-proxy compression threshold",
		Detail: "cache proxy threshold (bytes) - hot-reloads"
	},
	"inline_threshold": {
		Effect: "Inline zlib versus the durable CCR store",
		Detail: "inline-vs-durable cutoff (bytes) - hot-reloads"
	},
	"code_multiplier": {
		Effect: "Multiplies the threshold for code_* content types; 1.0 gives code no extra headroom",
		Detail: "multiplies the threshold for code_* types - hot-reloads"
	},
	"auto_expand": {
		Effect: "Resolve just-stored content inline instead of emitting a marker, capped by auto_expand_limit",
		Detail: "resolve just-stored content inline instead of a marker - hot-reloads"
	},
	"auto_expand_limit": {
		Effect: "Byte cap for auto-expanded content; 0 = unlimited",
		Detail: "byte cap for auto-expanded content; 0 = unlimited"
	},
	"max_request_body_size": {
		Effect: "Request-body cap; an over-size body is rejected with 413 while it is read",
		Detail: "the cap is applied while the body streams in, so an over-size request is refused before it is buffered whole",
		DefaultNote: "none - no cap"
	},
	"store_max_entries": {
		Effect: "Max live rows in the SQLite store; past it the least-recently-accessed rows are evicted; 0 = unlimited",
		Detail: "max live rows in the SQLite store - LRU evicts past it; read at store open, not hot-reloaded"
	},
	"store_max_bytes": {
		Effect: "Max stored payload bytes, SUM(LENGTH(original)); past it LRU rows are evicted; 0 = unlimited",
		Detail: "max stored payload bytes, SUM(LENGTH(original)) - LRU evicts past it; read at store open, not hot-reloaded"
	},
	"terminal_threshold": {
		Effect: "Terminal-output threshold gating transform_terminal_output",
		Detail: "dylib terminal-output threshold"
	},
	"poll_worker": {
		Effect: "Auto-backgrounding of slow terminal and process calls in pre_tool_call",
		Detail: "the rewrite happens before the call runs, so the transcript never shows the backgrounding"
	},
	"chain_split": {
		Effect: "Opt-in command splitting into per-segment markers",
		Detail: "off by default because invisible segment markers pollute redirected stdout"
	},
	"chain_split_min_segments": {
		Effect: "Floor for the adaptive split threshold",
		Detail: "below this many segments the command is left whole"
	},
	"chain_split_max_segments": {
		Effect: "Cap for the adaptive split threshold",
		Detail: "past this many segments the split stops, so one command cannot flood the transcript with markers"
	},
	"context_engine": {
		Effect: "Enables the context engine; the standalone HTTP proxy never reads it",
		Detail: "opt-in dylib status flag; the HTTP proxy never reads it"
	},
	"engine_threshold_pct": {
		Type: "int (%)",
		Effect: "Context-engine fill gate: middle turns are archived at or above this fill; 0 = never, 100+ = off",
		Detail: "LOAD-BEARING (dylib): middle-turn archiving + engine_offload prompt; 100+ = off"
	},
	"engine_protect_first": {
		Effect: "Turns kept at the start of the index",
		Detail: "LOAD-BEARING (dylib): turns kept at the start of the index"
	},
	"engine_protect_last": {
		Effect: "Turns kept at the end of the index",
		Detail: "LOAD-BEARING (dylib): turns kept at the end of the index"
	},
	"engine_min_msgs": {
		Effect: "Minimum archived turns before the engine may archive",
		Detail: "LOAD-BEARING (dylib): minimum messages before the engine activates"
	},
	"live_container": {
		Effect: "Instant CCR markers with the live type, for progressive retrieval",
		Detail: "instant 'live' CCR markers for large tool results"
	},
	"recursive_depth": {
		Effect: "Nested marker expansion cap",
		Detail: "max nested marker expansion depth"
	},
	"auto_reload": {
		Effect: "Watch aphrodite.toml and re-apply config fields on change",
		Detail: "watch aphrodite.toml and re-apply config fields on change"
	},
	"catalog_mode": {
		Type: "-",
		Effect: "Parses; the catalog layout is compiled-in, so this is a silent no-op",
		Detail: "a key that parsed and did nothing was worse than an undocumented one, so the ledger names it",
		DefaultNote: "none"
	},
	"classifier_poll": {
		Type: "-",
		Effect: "Parses; nothing reads it back",
		Detail: "classification is per invocation, not polled, so there is no interval for this key to set",
		DefaultNote: "none"
	},
	"prefetch": {
		Type: "-",
		Effect: "Parses; the aphrodite_prefetch tool exists regardless of this key",
		Detail: "the tool is registered unconditionally, so turning this off disables nothing"
	},
	"preview_max_chars": {
		Type: "int (chars)",
		Effect: "Caps the whole rendered preview string, not per line; 0 = unlimited",
		DefaultNote: "0 (unlimited)"
	},
	"model_family": {
		Type: "\"compact\" | \"code_first\" | \"balance\"",
		Effect: "Selects the [templates.preview.<family>.*] family when templates are configured",
		DefaultNote: "\"code_first\""
	},
	"code_structure_map": {
		Effect: "Reserved: include function, struct and class signatures in code previews",
		DefaultNote: "none"
	},
	"rust_preview_lines": {
		Type: "int",
		Effect: "Reserved: lines of Rust source to include in previews"
	},
	"session_inject": {
		Effect: "First-turn orientation text injected on turn 0; \"\" disables it",
		DefaultNote: "the shipped builtin"
	},
	"retrieve_guidance": {
		Type: "\"minimal\" | \"standard\" | \"verbose\"",
		Effect: "How much retrieval guidance the per-turn assembler renders as the [retrieval: ...] line",
		DefaultNote: "\"minimal\""
	},
	"ccr_marker_hint": { Effect: "Append a retrieval hint after markers - it fills the marker template's {hint}" },
	"catalog_intent_hints": { Effect: "Intent hints alongside the hashes in catalog output" },
	"active": {
		Effect: "Which loaded directives start active; unknown names are filtered out, and the set is runtime-mutable through aphrodite_directive",
		DefaultNote: "an empty list seeds focus, foresight and lazy"
	},
	"budget_chars": {
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
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "CONFIG // APHRODITE",
		"Description": "The interactive aphrodite.toml explorer - the pick chain, the two stacks, the [[proxies]] pair and the compression knobs, simulated client-side.",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageShell", $$PageShell, {
		"Crumbs": true,
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate`  ${maybeRenderHead($$result)}<header class="relative border-l-4 border-blood-crimson bg-carbon-void p-8" data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "aphrodite.toml",
		"Color": "raw",
		"Side": "left",
		"data-astro-cid-ocra6agn": true
	})} <p class="font-mono text-base font-bold uppercase tracking-widest text-stamped-canary" data-astro-cid-ocra6agn>
THE FILE THAT TUNES EVERYTHING
</p> <h1 class="mt-3 text-3xl font-bold tracking-tight text-bone-white sm:text-4xl" data-astro-cid-ocra6agn>
Configuration Playground
</h1> <p class="mt-4 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
A tool call's output becomes part of the model's context, and aphrodite.toml decides
				how much of it is replaced before the model reads it.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
One TOML file, two independent parsers, three places it can live.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
The resolution order re-decides what wins as the shipped example changes - env var,
				per-proxy entry, defaults, or the compiled-in fallback.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>Everything here runs in your browser.</p> </header> ${renderComponent($$result, "SectionNav", $$SectionNav, {
		"Sections": Sections,
		"data-astro-cid-ocra6agn": true
	})}  <section id="pick-chain" class="relative w-full" aria-label="The file pick chain" data-reveal data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "the pick chain",
		"Color": "teal",
		"Side": "right",
		"data-astro-cid-ocra6agn": true
	})} <h2 class="font-headline text-2xl font-black tracking-tight text-bone-white sm:text-3xl" data-astro-cid-ocra6agn>
Where the file is found
</h2> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
Three stops, in order - and a hard fall-through when none of them exists
				(docs/config/aphrodite-toml.md, "File location"):
</p> <div class="mt-8" data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineStream", $$ZineStream, {
		"Lines": [
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
		],
		"data-astro-cid-ocra6agn": true
	})} </div> </section>  <section id="editor" class="relative w-full" aria-label="The live TOML editor" data-reveal data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "live editor",
		"Color": "canary",
		"Side": "left",
		"data-astro-cid-ocra6agn": true
	})} <div class="flex flex-wrap items-center justify-between gap-3" data-astro-cid-ocra6agn> <h2 class="font-headline text-2xl font-black tracking-tight text-bone-white sm:text-3xl" data-astro-cid-ocra6agn>
Edit the shipped example
</h2> <div class="flex flex-wrap items-center gap-3" data-astro-cid-ocra6agn> ${renderComponent($$result, "CopyButton", $$CopyButton, {
		"Label": "COPY TOML",
		"Payload": Example,
		"Tone": "teal",
		"Size": "md",
		"data-astro-cid-ocra6agn": true
	})} <button type="button" data-action="reset" class="inline-block border border-black bg-raw-blood px-4 py-2 font-mono text-base font-black uppercase text-bone-white shadow-[3px_3px_0px_#000] transition-colors hover:bg-blood-crimson active:translate-x-0.5 active:translate-y-0.5 active:shadow-none" data-astro-cid-ocra6agn>
Reset example
</button> </div> </div> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
This is the shipped <code class="text-bone-newsprint" data-astro-cid-ocra6agn>aphrodite.toml.example</code> (sanitized:
				the api_key sample renders as its env-var name).
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
Edit it - the resolution ladder on the right re-decides every tracked key as you type.
</p> <div class="mt-8 grid gap-10 lg:grid-cols-2" data-astro-cid-ocra6agn> <!-- Editor pane --><div class="flex flex-col border-4 border-blood-crimson bg-carbon-void" data-astro-cid-ocra6agn> <div class="flex items-center justify-between border-b-2 border-blood-crimson bg-soot-black px-5 py-3" data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "canary",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate`aphrodite.toml` })} <span class="font-mono text-base text-zinc-dust" data-editor-status aria-live="polite" data-astro-cid-ocra6agn>
parsed
</span> </div> <label class="sr-only" for="config-editor" data-astro-cid-ocra6agn>aphrodite.toml contents</label> <textarea id="config-editor" data-editor spellcheck="false" class="h-[36rem] w-full resize-y bg-transparent p-5 font-mono text-base leading-relaxed text-bone-newsprint" placeholder="loading the shipped example..." data-astro-cid-ocra6agn></textarea> </div> <!-- Resolution ladder pane --> <div class="flex flex-col border-4 border-blood-crimson bg-carbon-void" data-astro-cid-ocra6agn> <div class="flex items-center justify-between border-b-2 border-blood-crimson bg-soot-black px-5 py-3" data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "teal",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate`EFFECTIVE CONFIG - WHO WINS` })} <span class="font-mono text-base text-zinc-dust" data-astro-cid-ocra6agn>env &gt; toml &gt; compiled</span> </div> <div class="flex-1 space-y-4 p-5" data-ladder aria-live="polite" data-astro-cid-ocra6agn><!-- rendered client-side from the same Keys array the table uses --></div> </div> </div> </section>  <section id="diagram" class="w-full" aria-label="The config-resolution diagram" data-reveal data-astro-cid-ocra6agn> <figure class="border-4 border-blood-crimson bg-carbon-void p-4" data-diagram="config-resolution" data-astro-cid-ocra6agn> <div class="overflow-x-auto" data-astro-cid-ocra6agn>${unescapeHTML(config_resolution_default)}</div> <figcaption class="mt-3 font-mono text-base font-black uppercase tracking-widest text-zinc-dust" data-astro-cid-ocra6agn>
M7 // CONFIG RESOLUTION
</figcaption> </figure> </section>  <section id="keys" class="relative w-full" aria-label="Every configuration key" data-reveal data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "every key",
		"Color": "raw",
		"Side": "right",
		"data-astro-cid-ocra6agn": true
	})} <h2 class="font-headline text-2xl font-black tracking-tight text-bone-white sm:text-3xl" data-astro-cid-ocra6agn>
Every key, once
</h2> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
One row per key is the only reference the file gets: its type,
				its compiled default, the env override, which parser reads it, when a change takes effect,
				and what it does.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
Where the shipped example sets a different value, both are shown - an installation using the
				example sees the second, a bare binary sees the first.
</p> <div class="mt-8 flex flex-wrap gap-3" data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": "hot = /reload + watcher",
		"Color": "canary",
		"data-astro-cid-ocra6agn": true
	})} ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": "startup = restart",
		"Color": "bone",
		"data-astro-cid-ocra6agn": true
	})} ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": "load = read at dylib load",
		"Color": "bone",
		"data-astro-cid-ocra6agn": true
	})} ${renderComponent($$result, "ZineStamp", $$ZineStamp, {
		"Label": "unwired = silent no-op",
		"Color": "raw",
		"data-astro-cid-ocra6agn": true
	})} </div> <!-- THE FILTER: a plain input over the rows already in the table. The
			     table below is complete without it - the control is not rendered
			     at all when the head script never set html.js - so a reader
			     without JavaScript reads every key, and a reader with it can
			     narrow the 54 rows to the four they are chasing. --> <div class="mt-12 border-4 border-blood-crimson bg-carbon-void" data-key-filter-wrap data-astro-cid-ocra6agn> <div class="flex flex-wrap items-baseline justify-between gap-4 border-b-2 border-blood-crimson bg-soot-black px-5 py-3" data-astro-cid-ocra6agn> <label for="key-filter" class="font-mono text-base font-black uppercase tracking-widest text-stamped-canary" data-astro-cid-ocra6agn>
FILTER THE TABLE
</label> <span class="font-mono text-base uppercase tracking-widest text-zinc-dust" data-key-filter-count aria-live="polite" data-astro-cid-ocra6agn> ${Keys.length} KEYS
</span> </div> <div class="px-5 py-4" data-astro-cid-ocra6agn> <input id="key-filter" data-key-filter type="search" autocomplete="off" spellcheck="false" placeholder="threshold · APHRODITE_ · dylib · hot" class="w-full border border-oxblood-dark bg-soot-black px-4 py-2 font-mono text-base text-bone-newsprint placeholder:text-zinc-dust" data-astro-cid-ocra6agn> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
One field, matched against every column of every row: a key name
						(<code class="text-bone-newsprint" data-astro-cid-ocra6agn>threshold</code>), an env override
						(<code class="text-bone-newsprint" data-astro-cid-ocra6agn>APHRODITE_</code>), a reader
						(<code class="text-bone-newsprint" data-astro-cid-ocra6agn>dylib</code>), a live class
						(<code class="text-bone-newsprint" data-astro-cid-ocra6agn>hot</code>) or any word of an effect.
</p> <p class="mt-2 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
A section whose every row is filtered out takes its heading with it, so what is
						left is the answer and not the shape of the file.
</p> <p class="mt-2 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
Clear the field to get the whole table back - the filter hides rows that are already in
						the document and never asks the network for anything.
</p> <p class="mt-3 hidden font-mono text-base leading-relaxed text-stamped-canary" data-key-filter-empty data-astro-cid-ocra6agn>
No key matches that. Try a section name (<code class="text-bone-newsprint" data-astro-cid-ocra6agn>[compression]</code>), a reader (<code class="text-bone-newsprint" data-astro-cid-ocra6agn>dylib</code>) or an env prefix
						(<code class="text-bone-newsprint" data-astro-cid-ocra6agn>APHRODITE_</code>) - and clear the field to
						restore all ${Keys.length} rows.
</p> </div> </div> <div class="mt-12" data-astro-cid-ocra6agn> ${renderComponent($$result, "ConfigKeys", $$ConfigKeys, {
		"Rows": Keys,
		"Notes": SectionNotes,
		"data-astro-cid-ocra6agn": true
	})} </div> </section>  <section id="knobs" class="relative w-full" aria-label="The compression knobs" data-reveal data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "the knobs",
		"Color": "canary",
		"Side": "right",
		"data-astro-cid-ocra6agn": true
	})} <h2 class="font-headline text-2xl font-black tracking-tight text-bone-white sm:text-3xl" data-astro-cid-ocra6agn>
The compression knobs
</h2> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
The [compression] table is the one section a running proxy re-reads, and only part of it is
				hot.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
Four rows are the hot set: <code class="text-bone-newsprint" data-astro-cid-ocra6agn>tool_threshold_token</code>,
<code class="text-bone-newsprint" data-astro-cid-ocra6agn>tool_threshold_cache</code>,
<code class="text-bone-newsprint" data-astro-cid-ocra6agn>inline_threshold</code> and
<code class="text-bone-newsprint" data-astro-cid-ocra6agn>code_multiplier</code>.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn> <code class="text-bone-newsprint" data-astro-cid-ocra6agn>auto_expand</code> and
<code class="text-bone-newsprint" data-astro-cid-ocra6agn>auto_expand_limit</code> are hot on the same terms, and so
				are <code class="text-bone-newsprint" data-astro-cid-ocra6agn>preview_max_chars</code>, the marker format and hint,
				and <code class="text-bone-newsprint" data-astro-cid-ocra6agn>ccr_marker_hint</code>.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
Everything else in the section is fixed at startup or read once when the dylib loads, which
				is what the LIVE column records row by row.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn> <code class="text-bone-newsprint" data-astro-cid-ocra6agn>code_multiplier</code> is the only knob that is a
				multiplier rather than a byte count: the code_* types get the base threshold times its
				value, so 3.0 hands source three times the default patience and 1.0 hands it none.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn> <code class="text-bone-newsprint" data-astro-cid-ocra6agn>inline_threshold</code> decides where compressed content
				lives: below it the bytes ride inline as zlib, above it they become a durable store entry
				with a marker.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn> <code class="text-bone-newsprint" data-astro-cid-ocra6agn>engine_threshold_pct</code> is the context engine's fill
				gate, and its two extremes are switches: 0 means never archive and 100 or more means the
				engine is off.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
The two store retention caps are the deliberate exception, because a store cannot resize
				while it is serving.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn> <code class="text-bone-newsprint" data-astro-cid-ocra6agn>store_max_entries</code> and
<code class="text-bone-newsprint" data-astro-cid-ocra6agn>store_max_bytes</code> are read when the SQLite store is
				opened, so a change to either takes effect on the next proxy restart, not on save.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
The dylib keys take a third route entirely: they ride
<code class="text-bone-newsprint" data-astro-cid-ocra6agn>aphrodite_config_set</code> at runtime, so a session can
				move them without a restart and without a file edit.
</p> </section>  <section id="flow" class="relative w-full" aria-label="Flow, directives and previews" data-reveal data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "per-turn context",
		"Color": "teal",
		"Side": "left",
		"data-astro-cid-ocra6agn": true
	})} <h2 class="font-mono text-base font-black uppercase tracking-widest text-bone-white" data-astro-cid-ocra6agn>
[FLOW] / [DIRECTIVES] / [PREVIEWS]
</h2> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
Three sections decide what the model is handed each turn, and none of them touches
				compression.
</p> <div class="mt-8 grid gap-10 lg:grid-cols-3" data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "teal",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "teal",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate`[FLOW]` })} <p class="mt-3 text-base text-zinc-dust" data-astro-cid-ocra6agn> <code class="text-bone-newsprint" data-astro-cid-ocra6agn>budget_chars = 2600</code> is the hard cap on ALL
						per-turn injected context.
</p> <p class="mt-3 text-base text-zinc-dust" data-astro-cid-ocra6agn>
The budget covers directives, nudges, the recall catalog and the retrieve hint
						together, not each one separately.
</p> <p class="mt-3 text-base text-zinc-dust" data-astro-cid-ocra6agn>
Sections drop bottom-up when the total goes over; directives and nudges never drop.
</p> <p class="mt-3 text-base text-zinc-dust" data-astro-cid-ocra6agn>
Dylib only, overridable through
<code class="text-bone-newsprint" data-astro-cid-ocra6agn>APHRODITE_FLOW_BUDGET_CHARS</code>.
</p> <p class="mt-3 text-base text-zinc-dust" data-astro-cid-ocra6agn>
The compiled default is 4,000 characters, so the shipped example buys a leaner turn
						than a bare binary does.
</p> ` })} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "subtle",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "newsprint",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate`[DIRECTIVES]` })} <p class="mt-3 text-base text-zinc-dust" data-astro-cid-ocra6agn> <code class="text-bone-newsprint" data-astro-cid-ocra6agn>active = ["lazy", "lazy-eval", "foresight"]</code>
names which loaded directives start active.
</p> <p class="mt-3 text-base text-zinc-dust" data-astro-cid-ocra6agn>
Names that are not in the loaded set are silently filtered out, and an empty list seeds
						focus, foresight and lazy instead.
</p> <p class="mt-3 text-base text-zinc-dust" data-astro-cid-ocra6agn>
The set is runtime-mutable, so a conversation can swap directives mid-flight through
<code class="text-bone-newsprint" data-astro-cid-ocra6agn>aphrodite_directive</code>.
</p> <p class="mt-3 text-base text-zinc-dust" data-astro-cid-ocra6agn>
The built-in set is focus, foresight, ccr-handling, cleanup, explore, lazy and
						lazy-eval - seven files baked into the binary.
</p> ` })} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "subtle",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "newsprint",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate`[PREVIEWS]` })} <p class="mt-3 text-base text-zinc-dust" data-astro-cid-ocra6agn> <code class="text-bone-newsprint" data-astro-cid-ocra6agn>preview_max_chars = 0</code> caps the whole rendered
						preview string, not per line, and 0 means unlimited.
</p> <p class="mt-3 text-base text-zinc-dust" data-astro-cid-ocra6agn> <code class="text-bone-newsprint" data-astro-cid-ocra6agn>model_family = "code_first"</code> selects the
<code data-astro-cid-ocra6agn>[templates.preview.&lt;family&gt;.*]</code> family when
<code data-astro-cid-ocra6agn>[templates]</code> is configured.
</p> <p class="mt-3 text-base text-zinc-dust" data-astro-cid-ocra6agn>
The env var <code data-astro-cid-ocra6agn>APHRODITE_PREVIEW_MAX_CHARS</code> outranks the file, and the file
						outranks unlimited.
</p> <p class="mt-3 text-base text-zinc-dust" data-astro-cid-ocra6agn>Re-applied by POST /reload.</p> ` })} </div> </section>  <section id="unwired" class="relative w-full" aria-label="Documented but unwired keys" data-reveal data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "honest ledger",
		"Color": "bone",
		"Side": "right",
		"data-astro-cid-ocra6agn": true
	})} <h2 class="font-mono text-base font-black uppercase tracking-widest text-bone-white" data-astro-cid-ocra6agn>
DOCUMENTED BUT UNWIRED
</h2> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
Five keys parse and do nothing, and every one of them is marked UNWIRED rather
				than quietly omitted.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn> <code class="text-bone-newsprint" data-astro-cid-ocra6agn>catalog_mode</code> lost its reader when the catalog layout
				became compiled-in, so setting it changes nothing.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn> <code class="text-bone-newsprint" data-astro-cid-ocra6agn>classifier_poll</code> describes a poll interval the
				classifier never had: classification runs per invocation.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn> <code class="text-bone-newsprint" data-astro-cid-ocra6agn>prefetch</code> is dead because the
<code class="text-bone-newsprint" data-astro-cid-ocra6agn>aphrodite_prefetch</code> tool is registered
				unconditionally.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn> <code class="text-bone-newsprint" data-astro-cid-ocra6agn>code_structure_map</code> and
<code class="text-bone-newsprint" data-astro-cid-ocra6agn>rust_preview_lines</code> are reserved: they describe a
				code preview that includes signatures and a line budget for Rust source, and no builder
				reads either one yet.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
The ledger exists because a key that parses and does nothing is worse than an undocumented
				one: it looks like a lever and behaves like a wall.
</p> </section>  <section id="env" class="relative w-full" aria-label="Every environment variable" data-reveal data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "env",
		"Color": "canary",
		"Side": "right",
		"data-astro-cid-ocra6agn": true
	})} <h2 class="font-headline text-2xl font-black tracking-tight text-bone-white sm:text-3xl" data-astro-cid-ocra6agn>
Every override, live or not
</h2> <p class="mt-4 max-w-3xl text-base text-bone-newsprint" data-astro-cid-ocra6agn>
A TOML key is only half the story: the environment wins wherever it is set, and the module
				documents ${EnvVars.length} variables across three surfaces - the Rust proxy, the
<code class="text-bone-newsprint" data-astro-cid-ocra6agn>aphrodite setup</code> subcommand, and the Hermes dylib
				session.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
The last two groups are the ones that matter most: a variable with no reader is a silent
				no-op, and a build-time variable exported at runtime changes nothing.
</p> ${[...new Set(EnvVars.map((Entry) => Entry.Surface))].map((Surface) => renderTemplate`<div class="mt-12" data-astro-cid-ocra6agn> <h3 class="font-mono text-base font-black uppercase tracking-widest text-stamped-canary" data-astro-cid-ocra6agn> ${Surface} </h3> <div class="mt-4 overflow-x-auto" data-astro-cid-ocra6agn> <table class="w-full border-collapse font-mono text-base" data-astro-cid-ocra6agn> <thead data-astro-cid-ocra6agn> <tr class="border-b-2 border-oxblood-dark text-left" data-astro-cid-ocra6agn> <th class="py-3 pr-4 text-base font-black uppercase tracking-widest text-stamped-canary" data-astro-cid-ocra6agn>
VARIABLE
</th> <th class="py-3 pr-4 text-base font-black uppercase tracking-widest text-stamped-canary" data-astro-cid-ocra6agn>
PRECEDENCE
</th> <th class="py-3 pr-4 text-base font-black uppercase tracking-widest text-stamped-canary" data-astro-cid-ocra6agn>
DEFAULT
</th> <th class="py-3 text-base font-black uppercase tracking-widest text-stamped-canary" data-astro-cid-ocra6agn>
EFFECT
</th> </tr> </thead> <tbody class="text-bone-newsprint" data-astro-cid-ocra6agn> ${EnvVars.filter((Entry) => Entry.Surface === Surface).map((Entry) => renderTemplate`<tr class="border-b border-oxblood-dark" data-astro-cid-ocra6agn> <td class="py-3 pr-4 align-top whitespace-nowrap text-weathered-teal" data-astro-cid-ocra6agn> ${Entry.Variable} </td> <td class="py-3 pr-4 align-top text-zinc-dust" data-astro-cid-ocra6agn>${Entry.Precedence ?? "-"}</td> <td class="py-3 pr-4 align-top text-bone-white" data-astro-cid-ocra6agn>${Entry.Default ?? "-"}</td> <td class="py-3 align-top" data-astro-cid-ocra6agn>${Entry.Effect}</td> </tr>`)} </tbody> </table> </div> </div>`)} <p class="mt-12 border-t border-oxblood-dark pt-8 text-base leading-relaxed text-zinc-dust" data-astro-cid-ocra6agn>
SRC: docs/config/env-vars.md - every row is generated from it.
</p> </section>  <section id="classify" class="relative w-full" aria-label="The classify matrix" data-reveal data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "classify",
		"Color": "canary",
		"Side": "left",
		"data-astro-cid-ocra6agn": true
	})} <h2 class="font-headline text-2xl font-black tracking-tight text-bone-white sm:text-3xl" data-astro-cid-ocra6agn>
One type, one threshold
</h2> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
The gate is <code class="text-bone-newsprint" data-astro-cid-ocra6agn>threshold_for</code> in
<code class="text-bone-newsprint" data-astro-cid-ocra6agn>crates/aphrodite/src/proxy.rs</code>: the base threshold,
				then one multiplier per content type.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
The base is the proxy's own mode threshold -
<code class="text-bone-newsprint" data-astro-cid-ocra6agn>tool_threshold_token</code> on the token lane,
<code class="text-bone-newsprint" data-astro-cid-ocra6agn>tool_threshold_cache</code> on the cache lane.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
The bytes column is computed from the edited file, so the matrix follows those values
				instead of restating the defaults.
</p> <div class="mt-8 flex flex-wrap items-center gap-4" data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "canary",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate`BASE` })} <span class="font-mono text-base text-bone-newsprint" data-astro-cid-ocra6agn> <span data-classify-base data-astro-cid-ocra6agn>${BaseBytes}</span> B
</span> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "teal",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate`CODE_MULTIPLIER` })} <span class="font-mono text-base text-bone-newsprint" data-astro-cid-ocra6agn>
×<span data-classify-mult data-astro-cid-ocra6agn>${CodeMultiplier}</span> </span> </div> <div class="mt-6 overflow-x-auto border-4 border-blood-crimson bg-carbon-void" data-astro-cid-ocra6agn> <table class="w-full min-w-[40rem] text-left text-base" data-astro-cid-ocra6agn> <thead data-astro-cid-ocra6agn> <tr class="border-b-2 border-blood-crimson bg-soot-black font-mono text-base uppercase tracking-widest text-zinc-dust" data-astro-cid-ocra6agn> <th class="px-5 py-3" data-astro-cid-ocra6agn>Type</th> <th class="px-5 py-3" data-astro-cid-ocra6agn>Multiplier</th> <th class="px-5 py-3" data-astro-cid-ocra6agn>At the editor's values</th> </tr> </thead> <tbody class="divide-y divide-oxblood-dark/50" data-astro-cid-ocra6agn> ${Types.map((Row) => renderTemplate`<tr class="align-top text-zinc-dust" data-astro-cid-ocra6agn> <td class="px-5 py-3 font-mono text-base text-bone-newsprint" data-astro-cid-ocra6agn>${Row.Type}</td> <td class="px-5 py-3 font-mono text-base" data-astro-cid-ocra6agn>${FactorLabel(Row)}</td> <td class="px-5 py-3 font-mono text-base text-stamped-canary" data-astro-cid-ocra6agn> <span data-effective${addAttribute(Row.Factor === "code_multiplier" ? 1 : Row.Factor, "data-factor")}${addAttribute(Row.Factor === "code_multiplier" ? "code_multiplier" : void 0, "data-knob")} data-astro-cid-ocra6agn> ${Effective(Row)} </span>
B
</td> </tr>`)} </tbody> </table> </div> <p class="mt-6 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn> <code class="text-bone-newsprint" data-astro-cid-ocra6agn>linter</code>,
<code class="text-bone-newsprint" data-astro-cid-ocra6agn>build_output</code> and
<code class="text-bone-newsprint" data-astro-cid-ocra6agn>log</code> return the base before any multiplier, so
				those three never scale.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
Two runtime factors scale the result and neither can be read from the config file:
</p> <ul class="mt-3 max-w-3xl space-y-2 text-base text-zinc-dust" data-astro-cid-ocra6agn> <li class="border-l-2 border-oxblood-dark pl-3" data-astro-cid-ocra6agn>
the compression-ratio auto-tune (×2 above a 20× ratio, ×0.5 below 3×) scales the base
</li> <li class="border-l-2 border-oxblood-dark pl-3" data-astro-cid-ocra6agn>
and the headroom budget (0.50 to 1.0) scales the result.
</li> </ul> <p class="mt-6 font-mono text-base uppercase tracking-widest text-zinc-dust" data-astro-cid-ocra6agn>
SRC: crates/aphrodite/src/proxy.rs:613-644.
</p> </section>  <section id="proxies" class="relative w-full" aria-label="The proxies pair" data-reveal data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "the pair",
		"Color": "bone",
		"Side": "left",
		"data-astro-cid-ocra6agn": true
	})} <h2 class="font-mono text-base font-black uppercase tracking-widest text-bone-white" data-astro-cid-ocra6agn>
[[PROXIES]] - CACHE :9797 + TOKEN :9798
</h2> <div class="mt-8 grid gap-10 md:grid-cols-2" data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "subtle",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "newsprint",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate`cache &middot; 127.0.0.1:9797` })} <p class="mt-2 text-base text-zinc-dust" data-astro-cid-ocra6agn>
The lane for results that do not need to survive the process.
</p> ` })} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "subtle",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "newsprint",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate`token &middot; 127.0.0.1:9798` })} <p class="mt-2 text-base text-zinc-dust" data-astro-cid-ocra6agn>
The lane a retrieval survives a restart from.
</p> ` })} </div> <div class="mt-10 border-l-4 border-raw-blood bg-soot-black p-6" data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "dust",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate`WARNING - THE 0.0.0.0 LINES` })} <p class="mt-2 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
Listeners bind loopback-only by default, and the router rejects non-loopback peers (and
					non-loopback Host headers) on every route except /health.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
Uncommenting <code class="text-bone-newsprint" data-astro-cid-ocra6agn>listen = "0.0.0.0:..."</code> exposes an
					unauthenticated listener to your LAN: /retrieve, /history and /ccr/* have no authentication of
					their own.
</p> </div> </section>  <section id="parsers" class="relative w-full" aria-label="The two parser stacks" data-reveal data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "two stacks",
		"Color": "raw",
		"Side": "right",
		"data-astro-cid-ocra6agn": true
	})} <h2 class="font-headline text-2xl font-black tracking-tight text-bone-white sm:text-3xl" data-astro-cid-ocra6agn>
One file, two parsers
</h2> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
The READER column is the whole split - these are the two codepaths that own it.
</p> <div class="mt-8 grid gap-10 lg:grid-cols-2" data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "crimson",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "canary",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate`THE RUST HTTP PROXY` })} <p class="mt-3 text-base text-zinc-dust" data-astro-cid-ocra6agn> <code class="text-bone-newsprint" data-astro-cid-ocra6agn>config/proxy.rs</code>, active whenever an
						aphrodite.toml is found: it reads every row marked PROXY or BOTH, resolving each one as
</p> <ul class="mt-3 space-y-2 text-base text-zinc-dust" data-astro-cid-ocra6agn> <li class="border-l-2 border-oxblood-dark pl-3" data-astro-cid-ocra6agn>env var</li> <li class="border-l-2 border-oxblood-dark pl-3" data-astro-cid-ocra6agn>then the per-proxy entry</li> <li class="border-l-2 border-oxblood-dark pl-3" data-astro-cid-ocra6agn>then <code data-astro-cid-ocra6agn>[defaults]</code></li> <li class="border-l-2 border-oxblood-dark pl-3" data-astro-cid-ocra6agn>then the compiled default.</li> </ul> <p class="mt-3 text-base text-zinc-dust" data-astro-cid-ocra6agn>
Three rows are the exceptions, and the ladder marks them: the API key is TOML-first,
						and the bind address and the mode are per-entry by construction.
</p> ` })} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "teal",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"As": "h3",
		"Tone": "teal",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate`THE HERMES DYLIB SESSION` })} <p class="mt-3 text-base text-zinc-dust" data-astro-cid-ocra6agn> <code class="text-bone-newsprint" data-astro-cid-ocra6agn>config_loader.rs</code>, read once at dylib load: it
						reads every row marked DYLIB or BOTH, and the standalone HTTP proxy never reads a
						dylib-only key.
</p> <p class="mt-3 text-base text-zinc-dust" data-astro-cid-ocra6agn>
The FFI runtime-override variant is the
<code class="text-bone-newsprint" data-astro-cid-ocra6agn>aphrodite_config_get</code> /
<code class="text-bone-newsprint" data-astro-cid-ocra6agn>aphrodite_config_set</code> pair on the C-ABI bridge -
						it surfaces values and changes them mid-session.
</p> ` })} </div> </section>  <section id="reload" class="relative w-full" aria-label="The reload simulation" data-reveal data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "simulation",
		"Color": "raw",
		"Side": "left",
		"data-astro-cid-ocra6agn": true
	})} <div class="flex flex-wrap items-center justify-between gap-3" data-astro-cid-ocra6agn> <h2 class="font-headline text-2xl font-black tracking-tight text-bone-white sm:text-3xl" data-astro-cid-ocra6agn>
What /reload would apply
</h2> <button type="button" data-action="reload" class="inline-block border border-black bg-raw-blood px-4 py-2 font-mono text-base font-black uppercase text-bone-white shadow-[3px_3px_0px_#000] transition-colors hover:bg-blood-crimson active:translate-x-0.5 active:translate-y-0.5 active:shadow-none" data-astro-cid-ocra6agn>
Send /reload
</button> </div> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
Simulated from your editor state: /reload answers
<code class="text-bone-newsprint" data-astro-cid-ocra6agn>"applied": true </code> with the values that took effect, and
				a <code data-astro-cid-ocra6agn>"parsed_only"</code> object for the fields that do not - the rows the table marks
				startup or load.
</p> <div class="mt-8" data-astro-cid-ocra6agn> <div data-reload-out aria-live="polite" class="border border-oxblood-dark bg-soot-black p-3.5 font-mono text-base leading-relaxed text-zinc-dust" data-astro-cid-ocra6agn> <div class="opacity-40" data-astro-cid-ocra6agn>// press SEND /RELOAD</div> </div> </div> </section>  <footer class="w-full border-l-4 border-weathered-teal bg-carbon-void p-6" data-astro-cid-ocra6agn> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "teal",
		"data-astro-cid-ocra6agn": true
	}, { "default": ($$result) => renderTemplate`SIMULATION BOUNDARY` })} <p class="mt-2 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
Real:
</p> <ul class="mt-2 max-w-3xl space-y-1 text-base text-zinc-dust" data-astro-cid-ocra6agn> <li class="border-l-2 border-oxblood-dark pl-3" data-astro-cid-ocra6agn>the pick chain</li> <li class="border-l-2 border-oxblood-dark pl-3" data-astro-cid-ocra6agn>the precedence rules</li> <li class="border-l-2 border-oxblood-dark pl-3" data-astro-cid-ocra6agn>the two-stack split</li> <li class="border-l-2 border-oxblood-dark pl-3" data-astro-cid-ocra6agn>the key table</li> <li class="border-l-2 border-oxblood-dark pl-3" data-astro-cid-ocra6agn>
and the unwired ledger - all quoted from aphrodite.toml.example, README.md:371-442 and
					docs/config/aphrodite-toml.md.
</li> </ul> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
Simulated:
</p> <ul class="mt-2 max-w-3xl space-y-1 text-base text-zinc-dust" data-astro-cid-ocra6agn> <li class="border-l-2 border-oxblood-dark pl-3" data-astro-cid-ocra6agn>
the TOML parsing (a browser-side reader, not the Rust or dylib parser)
</li> <li class="border-l-2 border-oxblood-dark pl-3" data-astro-cid-ocra6agn>the resolution ladder</li> <li class="border-l-2 border-oxblood-dark pl-3" data-astro-cid-ocra6agn>and the POST /reload response.</li> </ul> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
No network, no runtime - every number is computed in the browser.
</p> <p class="mt-3 max-w-3xl text-base text-zinc-dust" data-astro-cid-ocra6agn>
Sanitization: the editor ships the repository's example file - never a user's real toml,
				never an api_key value; the key field appears only as its env-var name.
</p> </footer>  ${renderComponent($$result, "Related", $$Related, {
		"Links": [
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
		],
		"data-astro-cid-ocra6agn": true
	})} <div${addAttribute(encodeURIComponent(Example), "data-config-example")}${addAttribute(encodeURIComponent(JSON.stringify(Tracked)), "data-config-keys")} hidden data-astro-cid-ocra6agn></div> ` })} ${renderComponent($$result, "ZineDiagramNav", $$ZineDiagramNav, { "data-astro-cid-ocra6agn": true })} ` })}${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/config.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/config.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/config.astro";
var $$url = "/config";
// \0virtual:astro:page:Source/pages/config@_@astro
var page = () => config_exports;
export { page };
