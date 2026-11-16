var Config_default = {
	_Generated: {
		"By": "Scripts/Prepare.ts",
		"From": [
			"Module/Aphrodite/aphrodite.toml.example",
			"Module/Aphrodite/crates/aphrodite/templates/aphrodite.toml",
			"Module/Aphrodite/docs/config/aphrodite-toml.md"
		],
		"Transform": ["Facts"],
		"Note": "Generated. Change the source in PlayForm/Aphrodite, push it, then advance the Module/Aphrodite pin - never this file."
	},
	Example: {
		"Sections": [
			"proxies",
			"defaults",
			"compression",
			"previews",
			"prompts",
			"templates",
			"directives",
			"flow"
		],
		"Keys": [
			{
				"Section": "proxies",
				"Key": "name",
				"Value": "\"cache\""
			},
			{
				"Section": "proxies",
				"Key": "listen",
				"Value": "\"127.0.0.1:9797\""
			},
			{
				"Section": "proxies",
				"Key": "mode",
				"Value": "\"cache\""
			},
			{
				"Section": "proxies",
				"Key": "tool_relay",
				"Value": "true"
			},
			{
				"Section": "proxies",
				"Key": "timeout",
				"Value": "120"
			},
			{
				"Section": "proxies",
				"Key": "name",
				"Value": "\"token\""
			},
			{
				"Section": "proxies",
				"Key": "listen",
				"Value": "\"127.0.0.1:9798\""
			},
			{
				"Section": "proxies",
				"Key": "mode",
				"Value": "\"token\""
			},
			{
				"Section": "proxies",
				"Key": "tool_relay",
				"Value": "true"
			},
			{
				"Section": "proxies",
				"Key": "timeout",
				"Value": "300"
			},
			{
				"Section": "defaults",
				"Key": "api_url",
				"Value": "\"https://api.openai.com\""
			},
			{
				"Section": "defaults",
				"Key": "model",
				"Value": "\"default-model\""
			},
			{
				"Section": "defaults",
				"Key": "ccr_ttl_seconds",
				"Value": "3600"
			},
			{
				"Section": "compression",
				"Key": "engine_threshold_pct",
				"Value": "30"
			},
			{
				"Section": "compression",
				"Key": "engine_protect_first",
				"Value": "2"
			},
			{
				"Section": "compression",
				"Key": "engine_protect_last",
				"Value": "5"
			},
			{
				"Section": "compression",
				"Key": "engine_min_msgs",
				"Value": "8"
			},
			{
				"Section": "compression",
				"Key": "tool_threshold_token",
				"Value": "256"
			},
			{
				"Section": "compression",
				"Key": "tool_threshold_cache",
				"Value": "2048"
			},
			{
				"Section": "compression",
				"Key": "terminal_threshold",
				"Value": "256"
			},
			{
				"Section": "compression",
				"Key": "inline_threshold",
				"Value": "1024"
			},
			{
				"Section": "compression",
				"Key": "auto_expand",
				"Value": "true"
			},
			{
				"Section": "compression",
				"Key": "auto_expand_limit",
				"Value": "102400"
			},
			{
				"Section": "compression",
				"Key": "live_container",
				"Value": "false"
			},
			{
				"Section": "compression",
				"Key": "recursive_depth",
				"Value": "5"
			},
			{
				"Section": "compression",
				"Key": "store_max_entries",
				"Value": "100000"
			},
			{
				"Section": "compression",
				"Key": "store_max_bytes",
				"Value": "536870912"
			},
			{
				"Section": "compression",
				"Key": "catalog_mode",
				"Value": "\"tool\"       # DOCUMENTED BUT UNWIRED: parsed (echoed by POST /reload), no consumer - catalog layout is compiled-in"
			},
			{
				"Section": "compression",
				"Key": "classifier_poll",
				"Value": "true"
			},
			{
				"Section": "compression",
				"Key": "code_multiplier",
				"Value": "1.0"
			},
			{
				"Section": "compression",
				"Key": "context_engine",
				"Value": "true"
			},
			{
				"Section": "compression",
				"Key": "poll_worker",
				"Value": "true"
			},
			{
				"Section": "compression",
				"Key": "auto_reload",
				"Value": "true"
			},
			{
				"Section": "compression",
				"Key": "chain_split",
				"Value": "false"
			},
			{
				"Section": "compression",
				"Key": "chain_split_min_segments",
				"Value": "2"
			},
			{
				"Section": "compression",
				"Key": "chain_split_max_segments",
				"Value": "6"
			},
			{
				"Section": "previews",
				"Key": "model_family",
				"Value": "\"code_first\" # WIRED as the [templates.preview] family selector (default \"code_first\"); only matters when [templates] is configured - absent templates fall back to hardcoded builders"
			},
			{
				"Section": "previews",
				"Key": "code_structure_map",
				"Value": "true"
			},
			{
				"Section": "previews",
				"Key": "preview_max_chars",
				"Value": "0"
			},
			{
				"Section": "prompts",
				"Key": "retrieve_guidance",
				"Value": "\"minimal\" # WIRED: prompt knob - how the system instructs the LLM about CCR retrieval"
			},
			{
				"Section": "prompts",
				"Key": "ccr_marker_hint",
				"Value": "false"
			},
			{
				"Section": "prompts",
				"Key": "catalog_intent_hints",
				"Value": "false"
			},
			{
				"Section": "prompts",
				"Key": "session_inject",
				"Value": "\"\"\""
			},
			{
				"Section": "directives",
				"Key": "active",
				"Value": "[\"lazy\", \"lazy-eval\", \"foresight\"]"
			},
			{
				"Section": "flow",
				"Key": "budget_chars",
				"Value": "2600"
			}
		]
	},
	Template: {
		"Sections": [
			"proxies",
			"defaults",
			"compression",
			"previews",
			"prompts",
			"directives",
			"flow"
		],
		"Keys": [
			{
				"Section": "proxies",
				"Key": "name",
				"Value": "\"cache\""
			},
			{
				"Section": "proxies",
				"Key": "listen",
				"Value": "\"127.0.0.1:{cache_port}\""
			},
			{
				"Section": "proxies",
				"Key": "mode",
				"Value": "\"cache\""
			},
			{
				"Section": "proxies",
				"Key": "tool_relay",
				"Value": "true"
			},
			{
				"Section": "proxies",
				"Key": "timeout",
				"Value": "120"
			},
			{
				"Section": "proxies",
				"Key": "name",
				"Value": "\"token\""
			},
			{
				"Section": "proxies",
				"Key": "listen",
				"Value": "\"127.0.0.1:{token_port}\""
			},
			{
				"Section": "proxies",
				"Key": "mode",
				"Value": "\"token\""
			},
			{
				"Section": "proxies",
				"Key": "tool_relay",
				"Value": "true"
			},
			{
				"Section": "proxies",
				"Key": "timeout",
				"Value": "300"
			},
			{
				"Section": "defaults",
				"Key": "api_url",
				"Value": "\"https://api.openai.com\""
			},
			{
				"Section": "defaults",
				"Key": "model",
				"Value": "\"default-model\""
			},
			{
				"Section": "defaults",
				"Key": "ccr_ttl_seconds",
				"Value": "3600"
			},
			{
				"Section": "compression",
				"Key": "engine_threshold_pct",
				"Value": "30"
			},
			{
				"Section": "compression",
				"Key": "engine_protect_first",
				"Value": "2"
			},
			{
				"Section": "compression",
				"Key": "engine_protect_last",
				"Value": "5"
			},
			{
				"Section": "compression",
				"Key": "engine_min_msgs",
				"Value": "8"
			},
			{
				"Section": "compression",
				"Key": "tool_threshold_token",
				"Value": "256"
			},
			{
				"Section": "compression",
				"Key": "tool_threshold_cache",
				"Value": "2048"
			},
			{
				"Section": "compression",
				"Key": "terminal_threshold",
				"Value": "256"
			},
			{
				"Section": "compression",
				"Key": "inline_threshold",
				"Value": "1024"
			},
			{
				"Section": "compression",
				"Key": "auto_expand",
				"Value": "true"
			},
			{
				"Section": "compression",
				"Key": "auto_expand_limit",
				"Value": "102400"
			},
			{
				"Section": "compression",
				"Key": "live_container",
				"Value": "false"
			},
			{
				"Section": "compression",
				"Key": "recursive_depth",
				"Value": "5"
			},
			{
				"Section": "compression",
				"Key": "store_max_entries",
				"Value": "100000"
			},
			{
				"Section": "compression",
				"Key": "store_max_bytes",
				"Value": "536870912"
			},
			{
				"Section": "compression",
				"Key": "catalog_mode",
				"Value": "\"tool\"       # DOCUMENTED BUT UNWIRED: parsed (echoed by POST /reload), no consumer - catalog layout is compiled-in"
			},
			{
				"Section": "compression",
				"Key": "classifier_poll",
				"Value": "true"
			},
			{
				"Section": "compression",
				"Key": "code_multiplier",
				"Value": "1.0"
			},
			{
				"Section": "compression",
				"Key": "context_engine",
				"Value": "true"
			},
			{
				"Section": "compression",
				"Key": "poll_worker",
				"Value": "true"
			},
			{
				"Section": "compression",
				"Key": "auto_reload",
				"Value": "true"
			},
			{
				"Section": "compression",
				"Key": "chain_split",
				"Value": "false"
			},
			{
				"Section": "compression",
				"Key": "chain_split_min_segments",
				"Value": "2"
			},
			{
				"Section": "compression",
				"Key": "chain_split_max_segments",
				"Value": "6"
			},
			{
				"Section": "previews",
				"Key": "model_family",
				"Value": "\"code_first\" # WIRED as the [templates.preview] family selector (default \"code_first\"); only matters when [templates] is configured - absent templates fall back to hardcoded builders"
			},
			{
				"Section": "previews",
				"Key": "code_structure_map",
				"Value": "true"
			},
			{
				"Section": "previews",
				"Key": "preview_max_chars",
				"Value": "0"
			},
			{
				"Section": "prompts",
				"Key": "retrieve_guidance",
				"Value": "\"minimal\" # WIRED: prompt knob - how the system instructs the LLM about CCR retrieval"
			},
			{
				"Section": "prompts",
				"Key": "ccr_marker_hint",
				"Value": "false"
			},
			{
				"Section": "prompts",
				"Key": "catalog_intent_hints",
				"Value": "false"
			},
			{
				"Section": "prompts",
				"Key": "session_inject",
				"Value": "\"\"\""
			},
			{
				"Section": "directives",
				"Key": "active",
				"Value": "[\"focus\", \"foresight\"]"
			},
			{
				"Section": "flow",
				"Key": "budget_chars",
				"Value": "2600"
			}
		]
	},
	Schema: /* @__PURE__ */ JSON.parse("{\"Records\":[{\"Key\":\"name\",\"Section\":\"[[proxies]]\",\"Type\":\"string\",\"Default\":\"listen address\",\"Reader\":\"proxy\",\"Live\":\"startup\",\"Effect\":\"Proxy label, also used for port-override matching\"},{\"Key\":\"listen\",\"Section\":\"[[proxies]]\",\"Type\":\"string\",\"Default\":\"127.0.0.1:9797\",\"Reader\":\"proxy\",\"Live\":\"startup\",\"Effect\":\"Bind address (loopback-only unless changed - see below)\"},{\"Key\":\"mode\",\"Section\":\"[[proxies]]\",\"Type\":\"string\",\"Default\":\"token\",\"Reader\":\"proxy\",\"Live\":\"startup\",\"Effect\":\"\\\"cache\\\" or \\\"token\\\" - backend + compression threshold (see [Modes](#modes))\"},{\"Key\":\"api_key\",\"Section\":\"[[proxies]]\",\"Type\":\"string\",\"Default\":\"-\",\"Reader\":\"proxy\",\"Live\":\"startup\",\"Effect\":\"Upstream API key, overrides [defaults]\"},{\"Key\":\"api_url\",\"Section\":\"[[proxies]]\",\"Type\":\"string\",\"Default\":\"-\",\"Reader\":\"proxy\",\"Live\":\"startup\",\"Effect\":\"Upstream API base URL, overrides [defaults]\"},{\"Key\":\"model\",\"Section\":\"[[proxies]]\",\"Type\":\"string\",\"Default\":\"-\",\"Reader\":\"proxy\",\"Live\":\"startup\",\"Effect\":\"Model name to forward, overrides [defaults]\"},{\"Key\":\"tool_relay\",\"Section\":\"[[proxies]]\",\"Type\":\"bool\",\"Default\":\"false (example true)\",\"Reader\":\"proxy\",\"Live\":\"startup\",\"Effect\":\"Enable the /tool/relay endpoint\"},{\"Key\":\"dev\",\"Section\":\"[[proxies]]\",\"Type\":\"bool\",\"Default\":\"false\",\"Reader\":\"proxy\",\"Live\":\"startup\",\"Effect\":\"Verbose request/response logging\"},{\"Key\":\"ccr_ttl_seconds\",\"Section\":\"[[proxies]]\",\"Type\":\"int (seconds)\",\"Default\":\"3600\",\"Reader\":\"proxy\",\"Live\":\"startup\",\"Effect\":\"CCR entry time-to-live, seconds\"},{\"Key\":\"ccr_db_path\",\"Section\":\"[[proxies]]\",\"Type\":\"string\",\"Default\":\"~/.hermes/aphrodite/ccr.db\",\"Reader\":\"proxy\",\"Live\":\"startup\",\"Effect\":\"SQLite path for the token proxy\"},{\"Key\":\"notify_url\",\"Section\":\"[[proxies]]\",\"Type\":\"string\",\"Default\":\"-\",\"Reader\":\"proxy\",\"Live\":\"startup\",\"Effect\":\"Hermes callback URL + bearer token for CCR-create notifications\"},{\"Key\":\"notify_key\",\"Section\":\"[[proxies]]\",\"Type\":\"string\",\"Default\":\"-\",\"Reader\":\"proxy\",\"Live\":\"startup\",\"Effect\":\"Hermes callback URL + bearer token for CCR-create notifications\"},{\"Key\":\"timeout\",\"Section\":\"[[proxies]]\",\"Type\":\"int (seconds)\",\"Default\":\"300 (example 120)\",\"Reader\":\"proxy\",\"Live\":\"startup\",\"Effect\":\"Upstream request timeout, seconds (clamped to 600)\"},{\"Key\":\"max_context\",\"Section\":\"[[proxies]]\",\"Type\":\"string\",\"Default\":\"1,000,000\",\"Reader\":\"proxy\",\"Live\":\"startup\",\"Effect\":\"Max context tokens\"},{\"Key\":\"max_output\",\"Section\":\"[[proxies]]\",\"Type\":\"string\",\"Default\":\"384,000\",\"Reader\":\"proxy\",\"Live\":\"startup\",\"Effect\":\"Max output tokens (must be less than max_context)\"},{\"Key\":\"tool_threshold_token\",\"Section\":\"[compression]\",\"Type\":\"int (bytes)\",\"Default\":\"1024 (example 256)\",\"Env\":\"APHRODITE_TOOL_THRESHOLD_TOKEN\",\"Reader\":\"proxy\",\"Live\":\"hot\",\"Effect\":\"Token-proxy compression threshold, bytes\",\"Detail\":\"token proxy threshold (bytes) - lower = compress more (hot-reloads)\"},{\"Key\":\"tool_threshold_cache\",\"Section\":\"[compression]\",\"Type\":\"int (bytes)\",\"Default\":\"8192 (example 2048)\",\"Env\":\"APHRODITE_TOOL_THRESHOLD_CACHE\",\"Reader\":\"proxy\",\"Live\":\"hot\",\"Effect\":\"Cache-proxy compression threshold, bytes\",\"Detail\":\"cache proxy threshold (bytes) - lower = compress more (hot-reloads)\"},{\"Key\":\"inline_threshold\",\"Section\":\"[compression]\",\"Type\":\"int (bytes)\",\"Default\":\"256 (example 1024)\",\"Env\":\"APHRODITE_INLINE_THRESHOLD\",\"Reader\":\"proxy\",\"Live\":\"hot\",\"Effect\":\"Inline-vs-durable CCR storage cutoff, bytes\",\"Detail\":\"inline zlib fallback threshold (bytes) (hot-reloads)\"},{\"Key\":\"code_multiplier\",\"Section\":\"[compression]\",\"Type\":\"float\",\"Default\":\"3.0 (example 1.0)\",\"Env\":\"APHRODITE_CODE_MULTIPLIER\",\"Reader\":\"proxy\",\"Live\":\"hot\",\"Effect\":\"Multiplies the threshold for code_* content types (keeps code inline)\",\"Detail\":\"multiply threshold for code types (hot-reloads); 1.0 = code at base threshold (max compression)\"},{\"Key\":\"auto_expand\",\"Section\":\"[compression]\",\"Type\":\"bool\",\"Default\":\"false (example true)\",\"Env\":\"APHRODITE_AUTO_EXPAND\",\"Reader\":\"dylib\",\"Live\":\"hot\",\"Effect\":\"Same inline-resolution knob as the proxy path, read into the session (also renders the [auto-expand: ...] guidance)\",\"Detail\":\"WIRED (proxy): resolve just-stored content inline instead of emitting a marker (env APHRODITE_AUTO_EXPAND > TOML > default false)\"},{\"Key\":\"auto_expand_limit\",\"Section\":\"[compression]\",\"Type\":\"int (bytes)\",\"Default\":\"102400\",\"Env\":\"APHRODITE_AUTO_EXPAND_LIMIT\",\"Reader\":\"dylib\",\"Live\":\"hot\",\"Effect\":\"Byte cap for auto-expanded content\",\"Detail\":\"WIRED (proxy): byte cap for auto-expanded content; 0 = unlimited (env APHRODITE_AUTO_EXPAND_LIMIT > TOML > default 102400)\"},{\"Key\":\"max_request_body_size\",\"Section\":\"[compression]\",\"Type\":\"int (bytes)\",\"Default\":\"none\",\"Env\":\"APHRODITE_MAX_REQUEST_BODY_SIZE\",\"Reader\":\"proxy\",\"Live\":\"startup\",\"Effect\":\"Proxy request-body cap, bytes; over-size bodies rejected with 413 while being read\"},{\"Key\":\"store_max_entries\",\"Section\":\"[compression]\",\"Type\":\"int (rows)\",\"Default\":\"100000\",\"Env\":\"APHRODITE_STORE_MAX_ENTRIES\",\"Reader\":\"proxy\",\"Live\":\"startup\",\"Effect\":\"Max live rows in the SQLite CCR store; past it the least-recently-accessed rows are evicted (0 = off)\",\"Detail\":\"max live rows (env APHRODITE_STORE_MAX_ENTRIES; 0 = unlimited)\"},{\"Key\":\"store_max_bytes\",\"Section\":\"[compression]\",\"Type\":\"int (bytes)\",\"Default\":\"536870912\",\"Env\":\"APHRODITE_STORE_MAX_BYTES\",\"Reader\":\"proxy\",\"Live\":\"startup\",\"Effect\":\"Max stored payload bytes (SUM(LENGTH(original))); past it LRU rows are evicted (0 = off)\",\"Detail\":\"max stored payload bytes, SUM(LENGTH(original)) (env APHRODITE_STORE_MAX_BYTES; 0 = unlimited)\"},{\"Key\":\"terminal_threshold\",\"Section\":\"[compression]\",\"Type\":\"int (bytes)\",\"Default\":\"1024 (example 256)\",\"Env\":\"APHRODITE_TERMINAL_THRESHOLD\",\"Reader\":\"dylib\",\"Live\":\"load\",\"Effect\":\"Terminal-output compression threshold, bytes - gates transform_terminal_output\",\"Detail\":\"dylib terminal-output threshold (bytes); proxy path parses-only\"},{\"Key\":\"poll_worker\",\"Section\":\"[compression]\",\"Type\":\"bool\",\"Default\":\"true\",\"Env\":\"APHRODITE_POLL_WORKER\",\"Reader\":\"dylib\",\"Live\":\"load\",\"Effect\":\"Auto-backgrounding of slow terminal / process calls (pre-tool-call rewrite)\",\"Detail\":\"dylib-path: enable auto-backgrounding of slow tool calls\"},{\"Key\":\"chain_split\",\"Section\":\"[compression]\",\"Type\":\"bool\",\"Default\":\"false\",\"Env\":\"APHRODITE_CHAIN_SPLIT\",\"Reader\":\"dylib\",\"Live\":\"load\",\"Effect\":\"Opt-in fine-grained command splitting (SEG_MARKER segments); off by default\",\"Detail\":\"dylib-path: opt-in fine-grained command splitting (SEG_MARKER segments); OFF by default (markers pollute redirected stdout)\"},{\"Key\":\"chain_split_min_segments\",\"Section\":\"[compression]\",\"Type\":\"int\",\"Default\":\"2\",\"Env\":\"APHRODITE_CHAIN_SPLIT_MIN_SEGMENTS\",\"Reader\":\"dylib\",\"Live\":\"load\",\"Effect\":\"Floor for the adaptive split threshold\",\"Detail\":\"dylib-path: floor for the adaptive chain-split threshold (min 2)\"},{\"Key\":\"chain_split_max_segments\",\"Section\":\"[compression]\",\"Type\":\"int\",\"Default\":\"6\",\"Env\":\"APHRODITE_CHAIN_SPLIT_MAX_SEGMENTS\",\"Reader\":\"dylib\",\"Live\":\"load\",\"Effect\":\"Cap for the adaptive split threshold\",\"Detail\":\"dylib-path: cap for the adaptive chain-split threshold\"},{\"Key\":\"context_engine\",\"Section\":\"[compression]\",\"Type\":\"bool\",\"Default\":\"true\",\"Env\":\"APHRODITE_CONTEXT_ENGINE\",\"Reader\":\"dylib\",\"Live\":\"load\",\"Effect\":\"Enables the context engine (dylib session only; the standalone HTTP proxy never reads it)\",\"Detail\":\"dylib-path only (aphrodite_stats/config_get/set,\"},{\"Key\":\"engine_threshold_pct\",\"Section\":\"[compression]\",\"Type\":\"int (turns)\",\"Default\":\"45 (example 30)\",\"Env\":\"APHRODITE_ENGINE_THRESHOLD_PCT\",\"Reader\":\"dylib\",\"Live\":\"load\",\"Effect\":\"Context-engine fill-% gate: archives middle turns when the conversation index is at/above this fill percent; 0 = never, 100+ = off\",\"Detail\":\"LOAD-BEARING (dylib): % of context filled before middle-turn archiving + engine_offload prompt; 100+ = documented engine-off escape hatch\"},{\"Key\":\"engine_protect_first\",\"Section\":\"[compression]\",\"Type\":\"int (turns)\",\"Default\":\"2\",\"Env\":\"APHRODITE_ENGINE_PROTECT_FIRST\",\"Reader\":\"dylib\",\"Live\":\"load\",\"Effect\":\"Turns kept at the start of the index when the engine archives middle turns\",\"Detail\":\"LOAD-BEARING (dylib): messages to keep at start\"},{\"Key\":\"engine_protect_last\",\"Section\":\"[compression]\",\"Type\":\"int (turns)\",\"Default\":\"5\",\"Env\":\"APHRODITE_ENGINE_PROTECT_LAST\",\"Reader\":\"dylib\",\"Live\":\"load\",\"Effect\":\"Turns kept at the end of the index when the engine archives middle turns\",\"Detail\":\"LOAD-BEARING (dylib): messages to keep at end\"},{\"Key\":\"engine_min_msgs\",\"Section\":\"[compression]\",\"Type\":\"int (turns)\",\"Default\":\"8\",\"Env\":\"APHRODITE_ENGINE_MIN_MSGS\",\"Reader\":\"dylib\",\"Live\":\"load\",\"Effect\":\"Minimum archived turns before the engine may archive\",\"Detail\":\"LOAD-BEARING (dylib): minimum messages before the engine activates\"},{\"Key\":\"live_container\",\"Section\":\"[compression]\",\"Type\":\"bool\",\"Default\":\"false\",\"Env\":\"APHRODITE_LIVE_CONTAINER\",\"Reader\":\"dylib\",\"Live\":\"load\",\"Effect\":\"Emit instant CCR markers with the live type (progressive retrieval + ETA)\",\"Detail\":\"WIRED (dylib): instant 'live' CCR markers for large tool results (progressive chunked retrieval + ETA); env APHRODITE_LIVE_CONTAINER > TOML > default false\"},{\"Key\":\"recursive_depth\",\"Section\":\"[compression]\",\"Type\":\"int\",\"Default\":\"5\",\"Env\":\"APHRODITE_RECURSIVE_DEPTH\",\"Reader\":\"dylib\",\"Live\":\"load\",\"Effect\":\"Nested marker expansion cap\",\"Detail\":\"WIRED (dylib): max nested expansion depth; env APHRODITE_RECURSIVE_DEPTH > TOML > default 5\"},{\"Key\":\"auto_reload\",\"Section\":\"[compression]\",\"Type\":\"bool\",\"Default\":\"false (example true)\",\"Env\":\"APHRODITE_AUTO_RELOAD\",\"Reader\":\"dylib\",\"Live\":\"load\",\"Effect\":\"Watch aphrodite.toml and re-apply config fields on change (session CCR state is never touched)\",\"Detail\":\"dylib-path: watch aphrodite.toml and re-apply config fields on change (session CCR state is never touched - only config fields)\"},{\"Key\":\"preview_max_chars\",\"Section\":\"[previews]\",\"Type\":\"int\",\"Default\":\"0\",\"Reader\":\"dylib\",\"Live\":\"hot\",\"Effect\":\"Caps the rendered preview string, in chars; absent/0 = unlimited\",\"Detail\":\"caps the whole rendered preview STRING, not per line; 0 = unlimited - previews render at full natural length (env APHRODITE_PREVIEW_MAX_CHARS > TOML > default)\"},{\"Key\":\"model_family\",\"Section\":\"[previews]\",\"Type\":\"string\",\"Default\":\"code_first\",\"Reader\":\"dylib\",\"Live\":\"load\",\"Effect\":\"\\\"compact\\\" | \\\"code_first\\\" | \\\"balance\\\" - selects the [templates.preview.<family>.*] family\",\"Detail\":\"WIRED as the [templates.preview] family selector (default \\\"code_first\\\"); only matters when [templates] is configured - absent templates fall back to hardcoded builders\"},{\"Key\":\"code_structure_map\",\"Section\":\"[previews]\",\"Type\":\"bool\",\"Default\":\"true\",\"Reader\":\"none\",\"Live\":\"unwired\",\"Effect\":\"Include function/struct/class signatures in code previews\",\"Detail\":\"DOCUMENTED BUT UNWIRED: parsed, no consumer\"},{\"Key\":\"rust_preview_lines\",\"Section\":\"[previews]\",\"Type\":\"string\",\"Default\":\"none\",\"Reader\":\"none\",\"Live\":\"unwired\",\"Effect\":\"Lines of Rust source to include in previews\"},{\"Key\":\"session_inject\",\"Section\":\"[prompts]\",\"Type\":\"string\",\"Default\":\"\\\"\",\"Reader\":\"dylib\",\"Live\":\"load\",\"Effect\":\"First-turn orientation text injected by pre_llm_call on turn 0; \\\"\\\" disables\"},{\"Key\":\"retrieve_guidance\",\"Section\":\"[prompts]\",\"Type\":\"string\",\"Default\":\"minimal\",\"Reader\":\"dylib\",\"Live\":\"load\",\"Effect\":\"\\\"minimal\\\" | \\\"standard\\\" | \\\"verbose\\\" - how much guidance the per-turn assembler renders about CCR retrieval\",\"Detail\":\"WIRED: prompt knob - how the system instructs the LLM about CCR retrieval\"},{\"Key\":\"ccr_marker_hint\",\"Section\":\"[prompts]\",\"Type\":\"bool\",\"Default\":\"false\",\"Reader\":\"dylib\",\"Live\":\"hot\",\"Effect\":\"Append a retrieval hint after markers\",\"Detail\":\"WIRED: prompt knob - marker hint shown to the LLM\"},{\"Key\":\"catalog_intent_hints\",\"Section\":\"[prompts]\",\"Type\":\"bool\",\"Default\":\"false\",\"Reader\":\"dylib\",\"Live\":\"load\",\"Effect\":\"Show intent hints alongside hashes in catalog output\",\"Detail\":\"WIRED: prompt knob - per-intent catalog hints\"},{\"Key\":\"preview.<family>.<ctype>\",\"Section\":\"[templates]\",\"Type\":\"string\",\"Default\":\"none\",\"Reader\":\"both\",\"Live\":\"load\",\"Effect\":\"Format string for the preview of content type <ctype> in family <family> (e.g. [templates.preview.code_first] code = \\\"...\\\")\"},{\"Key\":\"marker.format / marker.hint\",\"Section\":\"[templates]\",\"Type\":\"string\",\"Default\":\"none\",\"Reader\":\"both\",\"Live\":\"hot\",\"Effect\":\"format = marker block layout; hint = retrieval hint appended after markers\"},{\"Key\":\"prompts.<name>\",\"Section\":\"[templates]\",\"Type\":\"int (turns)\",\"Default\":\"none\",\"Reader\":\"both\",\"Live\":\"load\",\"Effect\":\"Named prompt templates rendered into the per-turn context (session_inject, engine_offload, auto_expand_guidance, catalog_context_warn, and others)\"},{\"Key\":\"reverse.<ctype>\",\"Section\":\"[templates]\",\"Type\":\"int (rows)\",\"Default\":\"none\",\"Reader\":\"both\",\"Live\":\"load\",\"Effect\":\"ctype -> key remap: lets a content type borrow another type's format string\"},{\"Key\":\"active\",\"Section\":\"[directives]\",\"Type\":\"array of strings\",\"Default\":\"[\\\"lazy\\\", \\\"lazy-eval\\\", \\\"foresight\\\"]\",\"Reader\":\"dylib\",\"Live\":\"load\",\"Effect\":\"Which loaded directives start active. Directive .md files are discovered from APHRODITE_DIRECTIVES_DIR (if set) → ./directives/ → ~/.hermes/aphrodite/directives/ → binary-relative - the **first directory that exists** wins, and an existing-but-empty directives dir is intentional (no custom directives). If no directory exists, built-in directives are used. Names in active that aren't in the loaded set are silently filtered out; if active resolves empty while directives ARE loaded, the session seeds focus / foresight / lazy from the loaded set instead. Loading is never gated on this list being non-empty\"},{\"Key\":\"budget_chars\",\"Section\":\"[flow]\",\"Type\":\"int (turns)\",\"Default\":\"4000 (example 2600)\",\"Env\":\"APHRODITE_FLOW_BUDGET_CHARS\",\"Reader\":\"dylib\",\"Live\":\"load\",\"Effect\":\"Hard cap for ALL per-turn injected context (directives + nudges + recall catalog + retrieve hint)\"},{\"Key\":\"catalog_mode\",\"Section\":\"[compression]\",\"Type\":\"string\",\"Default\":\"tool\",\"Reader\":\"none\",\"Live\":\"unwired\",\"Effect\":\"DOCUMENTED BUT UNWIRED: parsed (echoed by POST /reload), no consumer - catalog layout is compiled-in\"},{\"Key\":\"classifier_poll\",\"Section\":\"[compression]\",\"Type\":\"bool\",\"Default\":\"true\",\"Reader\":\"none\",\"Live\":\"unwired\",\"Effect\":\"DOCUMENTED BUT UNWIRED: parsed, no reader (CCR skipping is not keyed on this flag)\"},{\"Key\":\"prefetch\",\"Section\":\"[compression]\",\"Type\":\"string\",\"Default\":\"none\",\"Reader\":\"none\",\"Live\":\"unwired\",\"Effect\":\"Parses; see aphrodite.toml.example\"}]}")
};
var Crates_default = {
	_Generated: {
		"By": "Scripts/Prepare.ts",
		"From": ["Module/Aphrodite/Cargo.toml"],
		"Transform": ["Facts"],
		"Note": "Generated. Change the source in PlayForm/Aphrodite, push it, then advance the Module/Aphrodite pin - never this file."
	},
	Workspace: { "Crates": [
		{
			"Name": "aphrodite",
			"Version": "1.8.1",
			"Description": "aphrodite: Chat Completions proxy with CCR, tool relay, and programmatic CCR for Hermes agent integration.",
			"Path": "crates/aphrodite/Cargo.toml",
			"Vendored": false
		},
		{
			"Name": "aphrodite-hermes",
			"Version": "1.8.1",
			"Description": "aphrodite-hermes: Hermes Agent-specific integration for Aphrodite compression engine - tool schemas, hook dispatch, skill registration",
			"Path": "crates/aphrodite-hermes/Cargo.toml",
			"Vendored": false
		},
		{
			"Name": "aphrodite-headroom-core",
			"Version": "0.2.1",
			"Description": "Core Headroom types and compression transform traits (Rust).",
			"Path": "vendor/headroom/crates/headroom-core/Cargo.toml",
			"Vendored": true
		}
	] }
};
var Env_default = {
	_Generated: {
		"By": "Scripts/Prepare.ts",
		"From": ["Module/Aphrodite/docs/config/env-vars.md"],
		"Transform": ["Facts"],
		"Note": "Generated. Change the source in PlayForm/Aphrodite, push it, then advance the Module/Aphrodite pin - never this file."
	},
	EnvVars: /* @__PURE__ */ JSON.parse("{\"Variables\":[{\"Variable\":\"APHRODITE_API_KEY\",\"Surface\":\"Rust proxy - multi-proxy mode (aphrodite.toml present)\",\"Precedence\":\"proxy.api_key → defaults.api_key → env\",\"Default\":\"(must resolve to something)\",\"Effect\":\"Upstream API key; the proxy refuses to start if the chain resolves empty\"},{\"Variable\":\"APHRODITE_API_URL\",\"Surface\":\"Rust proxy - multi-proxy mode (aphrodite.toml present)\",\"Precedence\":\"env > TOML > default\",\"Default\":\"https://api.openai.com\",\"Effect\":\"Upstream API base URL\"},{\"Variable\":\"APHRODITE_MODEL\",\"Surface\":\"Rust proxy - multi-proxy mode (aphrodite.toml present)\",\"Precedence\":\"env > TOML > default\",\"Default\":\"default-model\",\"Effect\":\"Model name to forward\"},{\"Variable\":\"APHRODITE_CCR_TTL\",\"Surface\":\"Rust proxy - multi-proxy mode (aphrodite.toml present)\",\"Precedence\":\"env > TOML > default\",\"Default\":\"3600\",\"Effect\":\"CCR entry time-to-live, seconds\"},{\"Variable\":\"APHRODITE_STORE_MAX_ENTRIES\",\"Surface\":\"Rust proxy - multi-proxy mode (aphrodite.toml present)\",\"Precedence\":\"env > [compression] > default\",\"Default\":\"100000 (0 = unlimited)\",\"Effect\":\"Max live rows in the SQLite CCR store; past it the least-recently-accessed rows are evicted\"},{\"Variable\":\"APHRODITE_STORE_MAX_BYTES\",\"Surface\":\"Rust proxy - multi-proxy mode (aphrodite.toml present)\",\"Precedence\":\"env > [compression] > default\",\"Default\":\"536870912 (0 = unlimited)\",\"Effect\":\"Max stored payload bytes (SUM(LENGTH(original))); past it LRU rows are evicted\"},{\"Variable\":\"APHRODITE_DB\",\"Surface\":\"Rust proxy - multi-proxy mode (aphrodite.toml present)\",\"Precedence\":\"env > TOML\",\"Default\":\"(none - proxy uses ~/.hermes/aphrodite/ccr.db)\",\"Effect\":\"SQLite path for the token proxy\"},{\"Variable\":\"APHRODITE_NOTIFY_URL\",\"Surface\":\"Rust proxy - multi-proxy mode (aphrodite.toml present)\",\"Precedence\":\"env > TOML\",\"Default\":\"-\",\"Effect\":\"Hermes callback URL for CCR-create notifications\"},{\"Variable\":\"APHRODITE_NOTIFY_KEY\",\"Surface\":\"Rust proxy - multi-proxy mode (aphrodite.toml present)\",\"Precedence\":\"env > TOML\",\"Default\":\"-\",\"Effect\":\"Bearer token for the callback\"},{\"Variable\":\"APHRODITE_CACHE_PORT\",\"Surface\":\"Rust proxy - multi-proxy mode (aphrodite.toml present)\",\"Precedence\":\"overrides the listen port on the proxy named/moded cache only\",\"Default\":\"9797\",\"Effect\":\"Per-instance port override (e.g. multiple Hermes Agents on one machine)\"},{\"Variable\":\"APHRODITE_TOKEN_PORT\",\"Surface\":\"Rust proxy - multi-proxy mode (aphrodite.toml present)\",\"Precedence\":\"overrides the listen port on the proxy named/moded token only\",\"Default\":\"9798\",\"Effect\":\"Same, for the token proxy\"},{\"Variable\":\"APHRODITE_TOOL_THRESHOLD_CACHE\",\"Surface\":\"Rust proxy - multi-proxy mode (aphrodite.toml present)\",\"Precedence\":\"env > [compression] > const\",\"Default\":\"8192 bytes (shipped example: 2048)\",\"Effect\":\"Cache-proxy compression threshold\"},{\"Variable\":\"APHRODITE_TOOL_THRESHOLD_TOKEN\",\"Surface\":\"Rust proxy - multi-proxy mode (aphrodite.toml present)\",\"Precedence\":\"env > [compression] > const\",\"Default\":\"1024 bytes (shipped example: 256)\",\"Effect\":\"Token-proxy compression threshold\"},{\"Variable\":\"APHRODITE_INLINE_THRESHOLD\",\"Surface\":\"Rust proxy - multi-proxy mode (aphrodite.toml present)\",\"Precedence\":\"env > [compression] > const\",\"Default\":\"256 bytes (shipped example: 1024)\",\"Effect\":\"Inline-vs-durable CCR storage cutoff\"},{\"Variable\":\"APHRODITE_CODE_MULTIPLIER\",\"Surface\":\"Rust proxy - multi-proxy mode (aphrodite.toml present)\",\"Precedence\":\"env > [compression] > const\",\"Default\":\"3.0 (shipped example: 1.0)\",\"Effect\":\"Multiplies the threshold for code_* content types\"},{\"Variable\":\"APHRODITE_AUTO_EXPAND\",\"Surface\":\"Rust proxy - multi-proxy mode (aphrodite.toml present)\",\"Precedence\":\"env > [compression] > const\",\"Default\":\"false (shipped example: true)\",\"Effect\":\"Resolve the just-stored content inline instead of emitting a CCR marker, capped at auto_expand_limit bytes\"},{\"Variable\":\"APHRODITE_AUTO_EXPAND_LIMIT\",\"Surface\":\"Rust proxy - multi-proxy mode (aphrodite.toml present)\",\"Precedence\":\"env > [compression] > const\",\"Default\":\"102400 bytes\",\"Effect\":\"Byte cap for auto-expanded content\"},{\"Variable\":\"APHRODITE_MAX_REQUEST_BODY_SIZE\",\"Surface\":\"Rust proxy - multi-proxy mode (aphrodite.toml present)\",\"Precedence\":\"env > [compression] > const\",\"Default\":\"none (no cap)\",\"Effect\":\"Proxy request-body cap in bytes; over-size bodies are rejected with 413 while being read (startup-only)\"},{\"Variable\":\"APHRODITE_CONFIG_PATH\",\"Surface\":\"Rust proxy - either mode\",\"Default\":\"./aphrodite.toml, else ~/.hermes/aphrodite/aphrodite.toml, else CLI mode\",\"Effect\":\"Which config file to load; an explicit path that doesn't exist falls through to CLI mode\"},{\"Variable\":\"APHRODITE_MGMT_TOKEN\",\"Surface\":\"Rust proxy - either mode\",\"Default\":\"unset (auth disabled - logs a startup warning)\",\"Effect\":\"Gates the management routes (/stats, /stats/db, /history, /retrieve, /ccr/*, /reload, /tool/relay, /version, /health/upstream) via Authorization: Bearer <token>; /health and /metrics stay exempt, and the LLM-proxying /{*path} route is unaffected\"},{\"Variable\":\"APHRODITE_WORKER_THREADS\",\"Surface\":\"Rust proxy - either mode\",\"Default\":\"4x CPU count (min 32)\",\"Effect\":\"Tokio worker thread count\"},{\"Variable\":\"APHRODITE_LOG_COMPACT\",\"Surface\":\"Rust proxy - either mode\",\"Default\":\"off\",\"Effect\":\"Compact log format (no timestamps, no targets); also --log-compact in CLI mode\"},{\"Variable\":\"RUST_LOG\",\"Surface\":\"Rust proxy - either mode\",\"Default\":\"info\",\"Effect\":\"Standard Rust tracing filter (not APHRODITE_-prefixed)\"},{\"Variable\":\"APHRODITE_MODE\",\"Surface\":\"Rust proxy - CLI-fallback mode only (no aphrodite.toml present)\",\"Default\":\"token\",\"Effect\":\"Proxy mode (cache / token)\"},{\"Variable\":\"APHRODITE_LISTEN\",\"Surface\":\"Rust proxy - CLI-fallback mode only (no aphrodite.toml present)\",\"Default\":\"127.0.0.1:9797\",\"Effect\":\"Bind address\"},{\"Variable\":\"APHRODITE_TERMINAL_THRESHOLD\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"env > [compression] > default\",\"Default\":\"1024 bytes (shipped example: 256)\",\"Effect\":\"Gates transform_terminal_output compression\"},{\"Variable\":\"APHRODITE_ENGINE_THRESHOLD_PCT\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"env > [compression] > default\",\"Default\":\"45 (shipped example: 30)\",\"Effect\":\"Context-engine fill-% gate: archives middle turns when the conversation index's fill percent (total * 100 / 50) is at or above the threshold; 0 = never, 100+ = off. See [Context Engine](https://github.com/PlayForm/Aphrodite/tree/Development/docs/plugin/context-engine.md)\"},{\"Variable\":\"APHRODITE_ENGINE_PROTECT_FIRST\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"env > [compression] > default\",\"Default\":\"2\",\"Effect\":\"Turns kept at the start of the index when the context engine archives middle turns\"},{\"Variable\":\"APHRODITE_ENGINE_PROTECT_LAST\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"env > [compression] > default\",\"Default\":\"5\",\"Effect\":\"Turns kept at the end of the index when the context engine archives middle turns\"},{\"Variable\":\"APHRODITE_ENGINE_MIN_MSGS\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"env > [compression] > default\",\"Default\":\"8\",\"Effect\":\"Minimum archived turns before the context engine may archive\"},{\"Variable\":\"APHRODITE_LIVE_CONTAINER\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"env > [compression] > default\",\"Default\":\"false\",\"Effect\":\"Instant CCR markers with the live type: progressive retrieval with bytes-so-far / ETA progress\"},{\"Variable\":\"APHRODITE_RECURSIVE_DEPTH\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"env > [compression] > default\",\"Default\":\"5\",\"Effect\":\"Nested marker expansion cap (how deep aphrodite_retrieve expands markers inside markers)\"},{\"Variable\":\"APHRODITE_AUTO_RELOAD\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"env > [compression] > default\",\"Default\":\"false (shipped example: true)\",\"Effect\":\"Watch aphrodite.toml and re-apply config fields on change (session CCR state is never touched)\"},{\"Variable\":\"APHRODITE_CONTEXT_ENGINE\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"\\\"1\\\" / \\\"true\\\" enables\",\"Default\":\"off\",\"Effect\":\"Two independent live effects: (1) plugin registers a Hermes ContextEngine subclass only when set; (2) the dylib session's context_engine_enabled status flag (env > TOML compression.context_engine > default true)\"},{\"Variable\":\"APHRODITE_RETRIEVE_GUIDANCE\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"env > [prompts] > default\",\"Default\":\"\\\"minimal\\\"\",\"Effect\":\"\\\"minimal\\\" | \\\"standard\\\" | \\\"verbose\\\" - how much guidance the per-turn assembler renders about CCR retrieval ([retrieval: ...] line)\"},{\"Variable\":\"APHRODITE_CCR_MARKER_HINT\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"env > [prompts] > default\",\"Default\":\"false\",\"Effect\":\"Append a retrieval hint after markers (fills the marker template's {hint}); process-global, re-applied by /reload\"},{\"Variable\":\"APHRODITE_CATALOG_INTENT_HINTS\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"env > [prompts] > default\",\"Default\":\"false\",\"Effect\":\"Show intent hints alongside hashes in catalog output\"},{\"Variable\":\"APHRODITE_PREVIEW_MAX_CHARS\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"env > [previews] > default\",\"Default\":\"unlimited (0 = no cap; shipped example 0)\",\"Effect\":\"Caps the rendered preview string, enforced on every preview path\"},{\"Variable\":\"APHRODITE_FLOW_BUDGET_CHARS\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"env > [flow] > default\",\"Default\":\"4000 (shipped example 2600)\",\"Effect\":\"Hard cap on ALL per-turn injected context (directives + nudges + recall catalog + retrieve hint)\"},{\"Variable\":\"APHRODITE_POLL_WORKER\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"env > [compression] > default\",\"Default\":\"true\",\"Effect\":\"Auto-backgrounds slow terminal / process calls (pre-tool-call rewrite)\"},{\"Variable\":\"APHRODITE_CHAIN_SPLIT\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"env > [compression] > default\",\"Default\":\"false (opt-in)\",\"Effect\":\"Fine-grained command splitting: rewrites chained commands with segment markers, splits output per segment\"},{\"Variable\":\"APHRODITE_CHAIN_SPLIT_MIN_SEGMENTS\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"env > [compression] > default\",\"Default\":\"2\",\"Effect\":\"Floor for the adaptive split threshold\"},{\"Variable\":\"APHRODITE_CHAIN_SPLIT_MAX_SEGMENTS\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"env > [compression] > default\",\"Default\":\"6\",\"Effect\":\"Cap for the adaptive split threshold\"},{\"Variable\":\"APHRODITE_SESSION_INJECT\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"env > [prompts] > default\",\"Default\":\"shipped builtin\",\"Effect\":\"First-turn orientation text injected on turn 0; empty string disables it\"},{\"Variable\":\"APHRODITE_DIRECTIVES_DIR\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"exact directory (first candidate)\",\"Default\":\"-\",\"Effect\":\"Directives directory override; checked before ./directives/, ~/.hermes/aphrodite/directives/, binary-relative\"},{\"Variable\":\"APHRODITE_HOME\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"whole runtime home override\",\"Default\":\"$HERMES_HOME/aphrodite (else ~/.hermes/aphrodite)\",\"Effect\":\"THE single runtime-home decision (issue 40): every artifact (binaries/, aphrodite.toml, ccr.db, directives/, logs) resolves under it for BOTH halves - the shim exports its own resolution here, and the Rust binary/proxy/dylib honor it; never second-guessed\"},{\"Variable\":\"APHRODITE_HERMES_DYLIB_PATH\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"overrides the dylib search path\",\"Default\":\"~/.hermes/aphrodite/binaries/<name>\",\"Effect\":\"Which dylib the plugin loads\"},{\"Variable\":\"APHRODITE_BINARY_PATH\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"overrides the proxy binary path\",\"Default\":\"~/.hermes/aphrodite/binaries/aphrodite\",\"Effect\":\"Which proxy binary the plugin launches\"},{\"Variable\":\"APHRODITE_NO_AUTO_LAUNCH\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"\\\"1\\\" / \\\"true\\\" skips auto-launch\",\"Default\":\"off\",\"Effect\":\"Stops the plugin from launching the proxy on registration\"},{\"Variable\":\"APHRODITE_AUTO_DOWNLOAD\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"\\\"1\\\" / \\\"true\\\" enables\",\"Default\":\"off\",\"Effect\":\"Legacy opt-in: lets register() fetch missing binaries via download.sh (default is explicit-setup-only; PR 118488)\"},{\"Variable\":\"HERMES_HOME\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"base home for the plugin\",\"Default\":\"~/.hermes\",\"Effect\":\"Hermes home: runtime home base ($HERMES_HOME/aphrodite), Hermes-owned plugin dir ($HERMES_HOME/plugins); read by __init__.py, layout_check.py, download.sh, and the Rust binary/dylib (issue 40 - one decision, both halves)\"},{\"Variable\":\"BINARY_DIR\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"download destination\",\"Default\":\"${HERMES_HOME:-$HOME/.hermes}/aphrodite/binaries\",\"Effect\":\"Where download.sh writes the verified binary + dylib (also set by __init__.py when it runs the legacy auto-fetch)\"},{\"Variable\":\"REPO\",\"Surface\":\"Hermes plugin / aphrodite-hermes dylib\",\"Precedence\":\"release repository\",\"Default\":\"PlayForm/Aphrodite\",\"Effect\":\"Which GitHub repo download.sh fetches release assets from\"},{\"Variable\":\"APHRODITE_DEBUG\",\"Surface\":\"Documented but currently inactive\",\"Effect\":\"No reader anywhere - setting it is a silent no-op\"},{\"Variable\":\"APHRODITE_PASSTHROUGH\",\"Surface\":\"Documented but currently inactive\",\"Effect\":\"No reader anywhere - setting it is a silent no-op\"},{\"Variable\":\"HERMES_DEV\",\"Surface\":\"Documented but currently inactive\",\"Effect\":\"No reader anywhere - setting it is a silent no-op\"},{\"Variable\":\"APHRODITE_RECENT_MARKERS_MAX\",\"Surface\":\"Documented but currently inactive\",\"Effect\":\"No reader anywhere - setting it is a silent no-op\"},{\"Variable\":\"APHRODITE_CATALOG\",\"Surface\":\"Documented but currently inactive\",\"Effect\":\"No reader anywhere - setting it is a silent no-op\"},{\"Variable\":\"APHRODITE_TOOL_THRESHOLD\",\"Surface\":\"Documented but currently inactive\",\"Effect\":\"No reader anywhere - setting it is a silent no-op\"},{\"Variable\":\"_TOKEN\",\"Surface\":\"Documented but currently inactive\",\"Effect\":\"No reader anywhere - setting it is a silent no-op\"},{\"Variable\":\"_CACHE\",\"Surface\":\"Documented but currently inactive\",\"Effect\":\"No reader anywhere - setting it is a silent no-op\"},{\"Variable\":\"HEADROOM_SSE_BUFFER_MAX_BYTES\",\"Surface\":\"Documented but currently inactive\",\"Effect\":\"No reader anywhere - setting it is a silent no-op\"},{\"Variable\":\"APHRODITE_VERSION\",\"Surface\":\"Build-time metadata\",\"Effect\":\"Read during the build, not at runtime - exporting it has no effect on a running proxy\"},{\"Variable\":\"APHRODITE_GIT_HASH\",\"Surface\":\"Build-time metadata\",\"Effect\":\"Read during the build, not at runtime - exporting it has no effect on a running proxy\"},{\"Variable\":\"APHRODITE_PROFILE\",\"Surface\":\"Build-time metadata\",\"Effect\":\"Read during the build, not at runtime - exporting it has no effect on a running proxy\"},{\"Variable\":\"APHRODITE_BUILD_DATE\",\"Surface\":\"Build-time metadata\",\"Effect\":\"Read during the build, not at runtime - exporting it has no effect on a running proxy\"},{\"Variable\":\"APHRODITE_TARGET\",\"Surface\":\"Build-time metadata\",\"Effect\":\"Read during the build, not at runtime - exporting it has no effect on a running proxy\"},{\"Variable\":\"APHRODITE_SKIP_FFI_GEN\",\"Surface\":\"Build-time metadata\",\"Effect\":\"Read during the build, not at runtime - exporting it has no effect on a running proxy\"}]}")
};
var Plugin_default = {
	_Generated: {
		"By": "Scripts/Prepare.ts",
		"From": ["Module/Aphrodite/plugins/aphrodite/plugin.yaml"],
		"Transform": ["Facts"],
		"Note": "Generated. Change the source in PlayForm/Aphrodite, push it, then advance the Module/Aphrodite pin - never this file."
	},
	Manifest: {
		"Name": "aphrodite",
		"Version": "2.3.2",
		"Kind": "standalone",
		"RequiresHermes": ">=0.20.2",
		"RequiresHooks": true,
		"ContextEngine": true,
		"Hooks": [
			"on_session_start",
			"transform_tool_result",
			"pre_llm_call",
			"transform_terminal_output",
			"post_llm_call",
			"pre_tool_call"
		],
		"Tools": [
			"aphrodite_retrieve",
			"aphrodite_compress",
			"aphrodite_stats",
			"aphrodite_rebuild",
			"aphrodite_files",
			"aphrodite_diff",
			"aphrodite_search",
			"aphrodite_directive",
			"aphrodite_test",
			"aphrodite_catalog",
			"aphrodite_reclassify",
			"aphrodite_prefetch",
			"aphrodite_prefetch_status"
		],
		"InstallMessage": "aphrodite v2.3.2 - CCR compression plugin for Hermes Agent (Rust-powered).\nAll logic in libaphrodite_hermes.dylib - __init__.py is a thin registration shim.\nProxies: token (:9798, SQLite, >1KB), cache (:9797, in-memory, >8KB).\nEngine: default-on context engine - compresses overflowing middle turns once context fills past engine_threshold_pct (default 30; 100+ disables). Guard the conversation edges with engine_protect_first / engine_protect_last / engine_min_msgs.\nFeatures: TOML [templates] (preview/marker/prompts/reverse format strings), auto-expand (inline marker resolution; auto_expand / auto_expand_limit), live containers (instant 'live' markers; APHRODITE_LIVE_CONTAINER or live_container=true), prompt knobs (retrieve_guidance / ccr_marker_hint / catalog_intent_hints), caps (APHRODITE_RECURSIVE_DEPTH default 5; APHRODITE_MAX_REQUEST_BODY_SIZE optional), optional Rhai scripting ('scripting' Cargo feature, rhai pinned 1.27.0).\nPriced retrieval: a marker's size is its retrieval cost - previews answer structural questions (succeeded? which files? how many?); deferral is safe, batch the retrievals you need into one turn.\nDownload: bash download.sh (fetches prebuilt binary + dylib from GitHub Releases).\nLLM API key: REQUIRED - set APHRODITE_API_KEY (or 'aphrodite setup' / api_key in ~/.hermes/aphrodite/aphrodite.toml). Hermes' provider config is NOT reused - see README 'LLM provider configuration'.\nTools: retrieve, compress, stats, rebuild, files, diff, search, directive, test, catalog, reclassify, prefetch, prefetch_status"
	}
};
var Tools_default = {
	_Generated: {
		"By": "Scripts/Prepare.ts",
		"From": ["Module/Aphrodite/crates/aphrodite-hermes/src/schemas.rs"],
		"Transform": ["Facts"],
		"Note": "Generated. Change the source in PlayForm/Aphrodite, push it, then advance the Module/Aphrodite pin - never this file."
	},
	Schemas: { "Tools": [
		{
			"Name": "aphrodite_compress",
			"Description": "Store content in CCR and get a marker back. Hashes the content, classifies it (or trusts the `type` hint), keeps it in the session store, and hands back a resolvable `<<<CCR:hash|type|size>>>` marker - park bulky text here instead of carrying it in context, then pull it back with aphrodite_retrieve when you actually need it. Storage is in-process and sub-millisecond; markers stay resolvable for the life of the session but do not survive a process restart. Returns {hash, type, size, preview, marker}.",
			"Parameters": [
				{
					"Name": "content",
					"Type": "string · minLength 1",
					"Required": true,
					"Description": "Exact text to store. Round-trips byte-for-byte through aphrodite_retrieve."
				},
				{
					"Name": "type",
					"Type": "string · enum: code | log | diff | error | json | build_output | text",
					"Required": false,
					"Description": "Content-type hint that steers the preview and compression profile. Omit to auto-detect; \"text\" is treated as no hint."
				},
				{
					"Name": "_ccr_center",
					"Type": "string",
					"Required": false,
					"Description": "Optional label carried alongside the marker and echoed back by aphrodite_catalog - useful for tagging what a stored blob was for."
				}
			]
		},
		{
			"Name": "aphrodite_retrieve",
			"Description": "Expand a CCR marker, or read a file, to full content. Supply `hash` to resolve a marker recorded this session (nested markers are expanded recursively), or `path` to read a file straight from disk. Give one or the other - if both are present `path` wins. `path` reads are confined to the current workspace and capped at 10 MiB, so paths outside it are refused. `query` narrows the result to matching lines, which is the cheap way to poke at a large entry without pulling all of it into context. Returns {found: true, source: \"ccr\"|\"path\", hash|path, content} on success, {found: false, error} when the hash is unknown or the read is refused.",
			"Parameters": [
				{
					"Name": "hash",
					"Type": "string · pattern ^[0-9a-fA-F]{8,64}$",
					"Required": false,
					"Description": "Full hex hash from a `<<<CCR:hash|type|size>>>` marker. Truncated hashes do not resolve - exact match only."
				},
				{
					"Name": "query",
					"Type": "string",
					"Required": false,
					"Description": "Case-insensitive substring; only lines containing it are returned."
				},
				{
					"Name": "path",
					"Type": "string",
					"Required": false,
					"Description": "Workspace-relative or absolute file path to read directly, bypassing CCR."
				}
			]
		},
		{
			"Name": "aphrodite_stats",
			"Description": "Session and proxy health counters for the CCR engine. One call covers both halves of the system: session state held by the dylib, and a live TCP poll of the two proxy ports. Takes no arguments. Returns {version, engine, inline_entries, markers, referenced_files, archived_turns, turn, engine_enabled, threshold_pct, tool_threshold, terminal_threshold, proxies: {token: {port, alive}, cache: {port, alive}}}. `alive: false` means nothing answered on that port within 400ms - the plugin still works, it just is not proxying.",
			"Parameters": []
		},
		{
			"Name": "aphrodite_files",
			"Description": "List file paths touched this session. Populated as tool hooks observe reads, writes and prefetches, so it doubles as a record of what has already been looked at. Takes no arguments. Returns {total, files: [{path, tool}]} where `tool` is the tool that first referenced the path.",
			"Parameters": []
		},
		{
			"Name": "aphrodite_diff",
			"Description": "Per-turn history of what was compressed. Walks the archived conversation index in turn order, one entry per turn that produced a compression. Takes no arguments. Returns {total, turns: [{turn, hash, summary, size}]}; each `hash` is resolvable through aphrodite_retrieve.",
			"Parameters": []
		},
		{
			"Name": "aphrodite_search",
			"Description": "Find already-compressed entries by keyword or type. Matches case-insensitively against each entry's preview line and its CCR type - it does NOT search the full stored bodies, so treat a miss as inconclusive and fall back to aphrodite_catalog. Newest first, capped at 20 results. Returns {query, total, results: [{hash, type, size, preview}]}.",
			"Parameters": [{
				"Name": "query",
				"Type": "string",
				"Required": true,
				"Description": "Keyword or phrase to match against preview text and CCR type."
			}, {
				"Name": "type",
				"Type": "string",
				"Required": false,
				"Description": "Restrict results to one exact CCR type, such as source_code, terminal, build_output, diff, json, search or text."
			}]
		},
		{
			"Name": "aphrodite_directive",
			"Description": "Inspect or change the active behavioral directives. Directives are short instruction files injected into every turn through pre_llm_call - \"focus\" for terse, minimal-tool execution, \"explore\" for broad reading, \"lazy\" for defer-until-needed execution, and whatever else ships in directives/. `list` returns {available, active, ephemeral: [{name, inline, expires_after_turn}]}; `swap` replaces the whole active set with one directive and returns {swapped, active}; `add` appends to the set (silent if already active) and returns {active}; `load` activates a directive from the available set on demand and returns {loaded, active} (errors on an unknown name, unlike `add`); `remove` drops one and returns {active}; `reset` clears actives, ephemerals and the manual latch, handing control back to automatic selection. An unknown directive name returns {error} and changes nothing.",
			"Parameters": [{
				"Name": "action",
				"Type": "string · enum: list | swap | add | load | remove | reset · default list",
				"Required": false,
				"Description": "What to do. Defaults to `list`. `load` activates a directive just-in-time (lazy activation)."
			}, {
				"Name": "name",
				"Type": "string",
				"Required": false,
				"Description": "Directive name. Required for swap, add, load and remove; ignored by list and reset."
			}]
		},
		{
			"Name": "aphrodite_test",
			"Description": "Smoke-test the compress and retrieve round trip. Compresses built-in samples in-process and checks each one comes back byte-identical, then reports proxy health alongside. Use it to confirm the engine is actually wired up before trusting a marker. Returns {mode, status: \"ok\"|\"fail\", passed, total, checks: [{type, hash, roundtrip}], proxies}. `status` is \"ok\" only when every check round-tripped.",
			"Parameters": [{
				"Name": "mode",
				"Type": "string · enum: quick | full · default quick",
				"Required": false,
				"Description": "`quick` runs 1 sample (source code). `full` runs 3 (source code, build output with errors and warnings, JSON). Any unrecognized value behaves like `full`."
			}]
		},
		{
			"Name": "aphrodite_catalog",
			"Description": "List every CCR entry recorded this session. The complete inventory, newest first - unlike aphrodite_search it filters nothing, so this is the reliable way to find a marker you half-remember. Returns {mode, total, turn, items: [...]}, where each item is {hash, type, size, preview} in `toc` mode and additionally {turn, center} in `full` mode.",
			"Parameters": [{
				"Name": "mode",
				"Type": "string · enum: full | toc · default full",
				"Required": false,
				"Description": "`full` includes turn and center per entry. `toc` is the compact table-of-contents form."
			}]
		},
		{
			"Name": "aphrodite_reclassify",
			"Description": "Re-detect type and preview for stored entries. Re-runs classification against content already in the store and rewrites the catalog entry in place, which repairs entries that were typed before a classifier improvement or stored with a wrong hint. Content and hashes are never modified, so existing markers keep resolving. Returns {status: \"ok\", reclassified: <count>}.",
			"Parameters": [{
				"Name": "hash",
				"Type": "string · pattern ^[0-9a-fA-F]{8,64}$",
				"Required": false,
				"Description": "Reclassify only this entry. Omit to reclassify every entry in the session."
			}]
		},
		{
			"Name": "aphrodite_prefetch",
			"Description": "Read files now and store them as CCR markers. Despite the name this is synchronous: every path is read and compressed before the call returns, so each returned hash is immediately resolvable through aphrodite_retrieve. Batch the files you expect to need next instead of reading them one at a time - one call, one marker per file, no file bodies in context. Oversized files are skipped rather than truncated. Returns {total, loaded, skipped_size, missing, inline_store_bytes, inline_store_byte_budget, results: [{path, status: \"loaded\"|\"skipped\"|\"missing\", hash, type, size, preview, reason}]}. Watch inline_store_bytes against its budget: a batch larger than the budget evicts older entries, including ones from the same batch.",
			"Parameters": [{
				"Name": "paths",
				"Type": "array",
				"Required": true,
				"Description": "File paths to read and store. Absolute paths are safest; relative paths resolve against the session working directory."
			}]
		},
		{
			"Name": "aphrodite_prefetch_status",
			"Description": "List prefetched files that are resolvable now. Because prefetch is synchronous, `loading` and `errors` are always empty and anything tracked is already `ready` - this is an inventory of file-backed markers, not a progress bar. Takes no arguments. Returns {loading: [], ready: [{path, hash, type, size}], errors: [], total_ready}.",
			"Parameters": []
		},
		{
			"Name": "aphrodite_rebuild",
			"Description": "Report dylib version and proxy health. It does not rebuild or install anything - the loaded dylib cannot safely replace itself mid-session - it reports the state an operator needs plus the command to run outside the session. Takes no arguments. Returns {status: \"ok\", version, proxies, hint}.",
			"Parameters": []
		},
		{
			"Name": "aphrodite_debug",
			"Description": "Toggle per-session debug output on or off (Rust-side only). When on, every compressed tool result in this session tree (this session plus its subagents/delegated tasks) gets a `[aphrodite-debug ...]` line prepended before the CCR marker; other sessions stay quiet. The flag is a file in the runtime home, scoped to the ROOT session id - subagents resolve to the same root and inherit the toggle. Returns {status, debug, session, flag}.",
			"Parameters": [{
				"Name": "on",
				"Type": "boolean",
				"Required": false,
				"Description": "true = enable debug for this session tree, false = disable. Omitted defaults to true."
			}]
		}
	] }
};
// Source/Library/Roster.ts
/**
* Roster - the generated reference rosters, typed, with their own guards.
*
* Every reference page on this site answers "what does Aphrodite ship?" and
* the answer is not the page's to remember. `Scripts/Prepare.ts` reads the
* module's own declarations into `Source/Generated/Facts/`, and this module is
* the one place they are typed and joined:
*
* | roster        | declared by                              |
* | ------------- | ---------------------------------------- |
* | tools, hooks  | `plugins/aphrodite/plugin.yaml`           |
* | descriptions  | `crates/aphrodite-hermes/src/schemas.rs`  |
* | config keys   | `docs/config/aphrodite-toml.md` + the example |
* | env vars      | `docs/config/env-vars.md`                 |
* | crates        | `Cargo.toml` + each crate's own manifest  |
*
* THE TWO FAILURES THIS MODULE REFUSES
*
* - UNDER-REPORT. A tool declared in `plugin.yaml` with no schema, or a hook
*   the manifest names that no page renders, means the site is hiding part of
*   the shipped surface. The join below throws instead.
* - OVER-REPORT. A page that names a tool, hook or key the module does not
*   declare is documenting something that does not ship. `Assert` throws for
*   that, and every page calls it with its own prose before rendering.
*
* A page's prose is therefore an ENRICHMENT keyed by a generated name: it can
* deepen a row, never add or remove one. Adding a tool to `plugin.yaml` makes
* it appear on the site with no other edit - it simply arrives without the
* page's optional extra sentence.
*/
/** The plugin manifest: identity, requirements, and the two registries. */
var Manifest = Plugin_default.Manifest;
/** The first sentence of a description - the line the deferred catalog shows. */
function First(Text) {
	const At = Text.search(/\.\s/);
	return At === -1 ? Text : Text.slice(0, At + 1);
}
/**
* The six hooks, in manifest order.
*
* `plugin.yaml` is the whole source: a hook added there appears here, and the
* ordinal is computed rather than typed.
*/
var Hooks = Manifest.Hooks.map((Name, Index) => ({
	Name,
	N: String(Index + 1).padStart(2, "0")
}));
/** Every schema the crate declares, by name. */
var Schemas = Tools_default.Schemas.Tools;
/**
* The registered tools, in manifest order, each carrying its own schema.
*
* Throws when the manifest names a tool the schema list does not - the site
* must never quietly under-report the shipped surface.
*/
var Tools = Manifest.Tools.map((Name) => {
	const Schema = Schemas.find((Candidate) => Candidate.Name === Name);
	if (Schema === void 0) throw new Error(`[Roster] ${Name} is declared in plugins/aphrodite/plugin.yaml but has no schema in crates/aphrodite-hermes/src/schemas.rs. The /tools/ page would under-report the shipped surface.`);
	return {
		Name,
		Summary: First(Schema.Description),
		Description: Schema.Description,
		Parameters: Schema.Parameters
	};
});
/**
* Schemas that no manifest entry declares.
*
* `aphrodite_debug` is compiled in only under `debug_assertions`, so it is a
* real schema and not a registered tool. It is named on the page rather than
* dropped: a reader who sees it in a debug build should find it here.
*/
var Undeclared = Schemas.filter((Candidate) => !Manifest.Tools.includes(Candidate.Name)).map((Schema) => ({
	Name: Schema.Name,
	Summary: First(Schema.Description),
	Description: Schema.Description,
	Parameters: Schema.Parameters
}));
/** Every configuration key, from the schema doc joined to the shipped example. */
var ConfigKeys = Config_default.Schema.Records;
/** Every environment variable the module documents, live and inactive alike. */
var EnvVars = Env_default.EnvVars.Variables;
/** The workspace's crates plus the vendored fork the binary links. */
var Crates = Crates_default.Workspace.Crates;
/**
* Throw when a page's prose names something the module does not declare.
*
* An enrichment map is allowed to deepen a row and is not allowed to invent
* one, so this is the check that keeps a stale sentence from outliving the
* tool it described.
*/
function Assert(Label, Prose, Roster) {
	const Unknown = Object.keys(Prose).filter((Name) => !Roster.includes(Name));
	if (Unknown.length === 0) return;
	throw new Error(`[Roster] ${Label} names ${Unknown.join(", ")}, which the module does not declare. Delete the entry, or add the item upstream and advance the pin.`);
}
/** The tool names, for `Assert`. */
var ToolNames = Tools.map((Tool) => Tool.Name);
/** The hook names, for `Assert`. */
var HookNames = Hooks.map((Hook) => Hook.Name);
/** The config key names, for `Assert`. */
var ConfigNames = ConfigKeys.map((Key) => Key.Key);
/** The crate names, for `Assert`. */
var CrateNames = Crates.map((Crate) => Crate.Name);
export { Crates as a, Hooks as c, Undeclared as d, CrateNames as i, ToolNames as l, ConfigKeys as n, EnvVars as o, ConfigNames as r, HookNames as s, Assert as t, Tools as u };
