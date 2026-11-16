import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, a as Versions, m as Routes, s as Anchor, t as $$Base } from "./Base_Bs2-mKm9.mjs";
import { a as $$Related } from "./DocsSidebar_DymFAMH3.mjs";
import { n as $$PageShell } from "./ZineTape_BXk9fOqY.mjs";
import { t as $$CodeFence } from "./CodeFence_C7YwxHhg.mjs";
import { t as $$ZineButton } from "./ZineButton_DY-Aba4f.mjs";
import { t as $$ZineFold } from "./ZineFold_DB-HSLxR.mjs";
import { t as $$ZineSplit } from "./ZineSplit_Bo4eV8vJ.mjs";
import { t as $$ZineStatBar } from "./ZineStatBar_GGT-P2uW.mjs";
import { f as Study, n as Benchmark, s as Narrative } from "./Numbers_JGgF5DxR.mjs";
// Source/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Dependencies = `
cfg-if 1.0.5
libc 0.2.191
memchr 2.8.3
proc-macro2 1.0.107
unicode-ident 1.0.27
quote 1.0.47
syn 3.0.10
serde_core 1.0.229
serde_derive 1.0.229
serde 1.0.229
itoa 1.0.19
ryu 1.0.23
zmij 1.0.23
serde_json 1.0.154
thiserror-impl 2.0.21
thiserror 2.0.21
aho-corasick 1.1.5
regex-syntax 0.8.11
regex-automata 0.4.18
regex 1.13.1
arrayvec 0.7.8
constant_time_eq 0.4.2
blake3 1.8.7
bytes 1.12.1
pin-project-lite 0.2.17
once_cell 1.21.4
futures-core 0.3.34
futures-task 0.3.34
futures-sink 0.3.34
futures-channel 0.3.34
futures-io 0.3.34
slab 0.4.12
futures-util 0.3.34
futures-executor 0.3.34
futures 0.3.34
tracing-core 0.1.36
tracing-attributes 0.1.31
tracing 0.1.44
log 0.4.35
smallvec 1.16.5
lock_api 0.4.14
scopeguard 1.2.0
parking_lot_core 0.9.12
errno 0.3.15
mio 1.2.5
socket2 0.6.5
signal-hook-registry 1.4.8
tokio-macros 2.7.2
tokio 1.54.1
http 1.5.0
httparse 1.10.1
httpdate 1.0.3
http-body 1.1.0
http-body-util 0.1.5
atomic-waker 1.1.2
hyper 1.12.0
try-lock 0.2.5
want 0.3.2
ipnet 2.12.2
hyper-util 0.1.21
tower-service 0.3.3
tower-layer 0.3.3
tower 0.5.3
matchit 0.8.4
mime 0.3.18
sync_wrapper 1.0.2
serde_path_to_error 0.1.20
form_urlencoded 1.2.2
percent-encoding 2.3.2
serde_urlencoded 0.7.1
axum-core 0.5.6
axum-macros 0.5.1
axum 0.8.9
bitflags 2.13.2
anstyle 1.0.14
utf8parse 0.2.2
anstyle-parse 1.0.0
anstyle-query 1.1.5
colorchoice 1.0.5
is_terminal_polyfill 1.70.2
anstream 1.0.0
clap_lex 1.1.1
strsim 0.11.1
clap_builder 4.6.7
heck 0.5.0
clap_derive 4.6.7
clap 4.6.7
hashbrown 0.17.1
lru 0.19.0
dirs-sys 0.5.0
option-ext 0.2.0
dirs 7.0.0
winnow 1.0.5
serde_spanned 1.1.3
toml_datetime 1.1.3
toml_parser 1.1.5
toml_writer 1.2.0
toml 1.2.1
notify-types 2.3.0
walkdir 2.5.0
same-file 1.0.6
notify 8.2.2
zeroize 1.9.1
subtle 2.6.1
untrusted 0.9.0
ring 0.17.14
rustls-pki-types 1.16.0
rustls-webpki 0.103.17
aws-lc-sys 0.47.0
aws-lc-rs 1.19.0
rustls 0.23.46
tokio-rustls 0.26.6
hyper-rustls 0.27.10
tower-http 0.6.11
uuid 1.29.2
tokio-util 0.7.20
reqwest 0.13.5
sharded-slab 0.1.7
tracing-subscriber 0.3.23
`.trim().split("\n").map((Row) => Row.trim()).filter((Row) => Row !== "");
	const Workspace = [`aphrodite-headroom-core ${Versions.Headroom}`, `aphrodite ${Versions.Binary}`];
	const Claims = [
		"One binary",
		"Zero dependencies",
		"Millions of tokens saved",
		"One retrieval away"
	];
	const Compile = (Row) => {
		const Space = Row.indexOf(" ");
		return `   Compiling ${Row.slice(0, Space)} v${Row.slice(Space + 1)}`;
	};
	const BuildTail = [
		"warning: unused variable: `noise`",
		"  --> crates/aphrodite/src/preview/render.rs:41:9",
		"   |",
		"41 |     let noise = self.estimate_noise(&body);",
		"   |         ^^^^^ help: if this is intentional, prefix it with an underscore: `_noise`",
		"   |",
		"   = note: `#[warn(unused_variables)]` on by default",
		"error[E0432]: unresolved import `crate::noise`",
		"  --> crates/aphrodite/src/preview.rs:12:5",
		"   |",
		"12 | use crate::noise::{estimate_noise, NoiseFloor};",
		"   |     ^^^^^^^^^^^^ no `noise` in the crate root",
		"   |",
		"note: found an item that was configured out",
		"  --> crates/aphrodite/src/lib.rs:88:9",
		"   |",
		"88 | pub mod noise;",
		"   |         ^^^^^",
		"   = note: the item is gated behind the `noise` feature",
		"warning: `aphrodite` (bin \"aphrodite\") generated 1 warning",
		"error: could not compile `aphrodite` (bin \"aphrodite\") due to 1 previous error"
	];
	const GrepHits = [
		"crates/aphrodite/src/preview/render.rs:41:    let noise = self.estimate_noise(&body);",
		"crates/aphrodite/src/preview/render.rs:42:    let floor = noise.floor();",
		"crates/aphrodite/src/preview/render.rs:58:    if noise > self.noise_budget() {",
		"crates/aphrodite/src/preview/render.rs:63:    self.noise_estimate = Some(noise);",
		"crates/aphrodite/src/preview.rs:12:use crate::noise::{estimate_noise, NoiseFloor};",
		"crates/aphrodite/src/preview.rs:88:        let noise = estimate_noise(body);",
		"crates/aphrodite/src/preview.rs:91:        NoiseFloor::from(noise)",
		"crates/aphrodite/src/lib.rs:88:pub mod noise;",
		"crates/aphrodite/src/lib.rs:191:    noise::estimate(&content)",
		"crates/aphrodite/src/lib.rs:244:    let floor = noise::floor(&content);",
		"crates/aphrodite/src/config.rs:63:    noise_floor: f32,",
		"crates/aphrodite/src/config.rs:118:        noise_floor: 0.42,",
		"crates/aphrodite/src/config.rs:204:        out.noise_floor = self.noise_floor.max(0.0);",
		"crates/aphrodite/src/config.rs:211:        out.noise_floor = out.noise_floor.min(1.0);",
		"crates/aphrodite/src/proxy.rs:412:        let noise = crate::noise::estimate(&body);",
		"crates/aphrodite/src/proxy.rs:418:        if noise >= cfg.noise_floor {",
		"crates/aphrodite/src/proxy.rs:701:    // the noise estimate never gates a retrieve",
		"crates/aphrodite/src/proxy.rs:1188:        noise::estimate(&buffered)",
		"crates/aphrodite/src/home.rs:96:    let noise = content.len() as f32 / tokens as f32;",
		"crates/aphrodite/src/home.rs:97:    floor: noise.floor() as usize,",
		"crates/aphrodite/src/preview/builders/build.rs:29:    // a word containing noise can never inflate the tally",
		"crates/aphrodite/src/preview/builders/generic.rs:44:    let noise = inp.bytes.saturating_sub(inp.raw.trim_end().len());",
		"crates/aphrodite/src/preview/state.rs:31:    pub(crate) noise_budget: f32,",
		"crates/aphrodite/src/preview/state.rs:77:    noise_budget: 0.42,"
	];
	const Listings = [
		"builders/",
		"detect.rs",
		"detectors/",
		"input.rs",
		"lang.rs",
		"line/",
		"mod.rs",
		"state.rs",
		"tests.rs",
		"text/",
		"type.rs"
	];
	const TestRuns = [
		"    Finished `test` profile [unoptimized + debuginfo] target(s) in 0.11s",
		"     Running unittests src/lib.rs (target/debug/deps/aphrodite-9f3c1a2b7d4e5f60)",
		"",
		"running 21 tests",
		"test preview::build_tally_counts_error_lines ... ok",
		"test preview::build_tally_counts_warning_lines ... ok",
		"test preview::grep_hits_and_files ... ok",
		"test preview::ls_counts_entries ... ok",
		"test preview::json_keys_and_items ... ok",
		"test preview::detect_type_build ... ok",
		"test preview::cap_applies_to_every_arm ... ok",
		"test classify::simd_byte_stable ... ok",
		"test classify::byte_classes ... ok",
		"test markers::roundtrip_compress_retrieve ... ok",
		"test markers::retrieve_unknown_hash_is_none ... ok",
		"test session::registry_is_per_session ... ok",
		"test session::bounded_try_lock_degrades ... ok",
		"test store::blake3_is_stable ... ok",
		"test store::dual_tier_evicts_oldest ... ok",
		"test config::defaults_carry_two_proxies ... ok",
		"test config::reload_from_disk ... ok",
		"test hooks::transform_terminal_output_overrides_type ... ok",
		"test proxy::test_build_preview_code_has_ct_prefix ... ok",
		"test proxy::test_build_preview_json_has_ct_prefix ... ok",
		"test preview::build_tally_counts_errors ... FAILED",
		"",
		"failures:",
		"",
		"---- preview::build_tally_counts_errors stdout ----",
		"",
		"thread 'preview::build_tally_counts_errors' panicked at crates/aphrodite/src/preview/builders/build.rs:30:5:",
		"assertion `left == right` failed",
		"  left: 1",
		" right: 2",
		"",
		"failures:",
		"    preview::build_tally_counts_errors",
		"",
		"test result: FAILED. 20 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.31s"
	];
	const JsonBody = [
		"[",
		"  {\"id\": \"sess_4f2a\", \"type\": \"build\", \"tokens_in\": 48213, \"tokens_out\": 46, \"ratio\": 1048.1, \"stored\": true, \"tier\": \"hot\", \"hits\": 3, \"age_s\": 12, \"sha\": \"a1b2c3d4\", \"hash\": \"9e8f7a6b\", \"model\": \"deepseek-v4\", \"session\": \"4f2a\"},",
		"  {\"id\": \"sess_9b71\", \"type\": \"grep\", \"tokens_in\": 3118, \"tokens_out\": 29, \"ratio\": 107.5, \"stored\": true, \"tier\": \"hot\", \"hits\": 11, \"age_s\": 41, \"sha\": \"7e1f90ab\", \"hash\": \"2c6d8e10\", \"model\": \"deepseek-v4\", \"session\": \"9b71\"},",
		"  {\"id\": \"sess_2c08\", \"type\": \"ls\", \"tokens_in\": 1042, \"tokens_out\": 18, \"ratio\": 57.9, \"stored\": true, \"tier\": \"warm\", \"hits\": 4, \"age_s\": 96, \"sha\": \"3c4d5e6f\", \"hash\": \"80b1a2c3\", \"model\": \"deepseek-v4\", \"session\": \"2c08\"},",
		"  {\"id\": \"sess_e5d3\", \"type\": \"test\", \"tokens_in\": 8821, \"tokens_out\": 34, \"ratio\": 259.4, \"stored\": true, \"tier\": \"hot\", \"hits\": 7, \"age_s\": 8, \"sha\": \"b8a9c0d1\", \"hash\": \"4f5e6d7c\", \"model\": \"deepseek-v4\", \"session\": \"e5d3\"},",
		"  {\"id\": \"sess_71fa\", \"type\": \"json\", \"tokens_in\": 2604, \"tokens_out\": 41, \"ratio\": 63.5, \"stored\": true, \"tier\": \"warm\", \"hits\": 2, \"age_s\": 187, \"sha\": \"5f6e7d8c\", \"hash\": \"d9c8b7a6\", \"model\": \"deepseek-v4\", \"session\": \"71fa\"},",
		"  {\"id\": \"sess_0a4e\", \"type\": \"diff\", \"tokens_in\": 12760, \"tokens_out\": 58, \"ratio\": 220.0, \"stored\": true, \"tier\": \"warm\", \"hits\": 5, \"age_s\": 240, \"sha\": \"6b7c8d9e\", \"hash\": \"1a2b3c4d\", \"model\": \"deepseek-v4\", \"session\": \"0a4e\"},",
		"  {\"id\": \"sess_c3b9\", \"type\": \"html\", \"tokens_in\": 21455, \"tokens_out\": 52, \"ratio\": 412.6, \"stored\": true, \"tier\": \"cold\", \"hits\": 1, \"age_s\": 611, \"sha\": \"8e9fa0b1\", \"hash\": \"5c6d7e8f\", \"model\": \"deepseek-v4\", \"session\": \"c3b9\"},",
		"  {\"id\": \"sess_6f2d\", \"type\": \"log\", \"tokens_in\": 5310, \"tokens_out\": 37, \"ratio\": 143.5, \"stored\": true, \"tier\": \"hot\", \"hits\": 9, \"age_s\": 3, \"sha\": \"0d1e2f3a\", \"hash\": \"b4a59687\", \"model\": \"deepseek-v4\", \"session\": \"6f2d\"}",
		"]"
	];
	const Cycle = [
		{
			Type: "build",
			Command: "cargo build --release -p aphrodite",
			Hash: "a1b2c3d4",
			Hold: 3400,
			Lines: [...Dependencies, ...Workspace].map(Compile).concat(BuildTail),
			Pace: {
				Beat: 26,
				Jitter: 18,
				Every: 11,
				Stall: 240,
				Turn: 420
			}
		},
		{
			Type: "grep",
			Command: "rg -n \"noise\" crates/aphrodite/src",
			Hash: "7e1f90ab",
			Hold: 2600,
			Lines: GrepHits,
			Pace: {
				Beat: 34,
				Jitter: 22,
				Every: 0,
				Stall: 0,
				Turn: 0
			}
		},
		{
			Type: "ls",
			Command: "ls -F crates/aphrodite/src/preview",
			Hash: "3c4d5e6f",
			Hold: 2400,
			Lines: Listings,
			Pace: {
				Beat: 40,
				Jitter: 20,
				Every: 0,
				Stall: 0,
				Turn: 0
			}
		},
		{
			Type: "test",
			Command: "cargo test -p aphrodite --lib",
			Hash: "b8a9c0d1",
			Hold: 3200,
			Lines: TestRuns,
			Pace: {
				Beat: 74,
				Jitter: 12,
				Every: 9,
				Stall: 160,
				Turn: 180
			}
		},
		{
			Type: "json",
			Command: "curl -sS localhost:9797/session",
			Hash: "5f6e7d8c",
			Hold: 2800,
			Lines: JsonBody,
			Pace: {
				Beat: 110,
				Jitter: 45,
				Every: 3,
				Stall: 220,
				Turn: 0
			}
		}
	];
	const MethodFold = `
<div class="prose-flow">
	<p>
		A tool call's output arrives in exactly this order and at this pace: a release build,
		then a code search, then a directory listing, then a test run, then a
		JSON body, then back to the build - indefinitely, each at the pace its own tool really
		prints at. Every line is output the named command produces,
		and the preview is recomputed from those lines as they land.
	</p>
	<p>
		Each line the tool prints is budget: the model reads it, and pays for it. As the lines
		land, the counts climb, the
		marker's size grows, and the preview settles on the one line the agent would
		actually have read. A marker only means something once there is a flood behind it to
		address, which is why Aphrodite draws it from the flood rather than beside it.
	</p>
	<p>
		Five commands, five shapes of answer: the build counts errors, warnings and lines; the
		search counts hits and files; the listing counts entries and extensions; the test run
		counts passes and failures; the JSON body counts items and keys. That is one engine
		reading five kinds of output - the tool naming the type, and the preview rendering
		the answer that name earns.
	</p>
	<p>The marker is the address of the original bytes.</p>
	<p>The agent pays for them only when the preview fails to answer the question.</p>
</div>
`.trim();
	const GridFold = `
<div class="prose-flow">
	<p>
		The four stages run in order: each card is one step, the figure
		on it is what that step costs, and the line under the rule is what it decides.
	</p>
	<p>
		What happens between the tool printing and the model reading is four steps, run
		in the same order every time, and only one of them costs anything measurable.
	</p>
	<p>
		The first two are the engine's: name the content, then render the one line that
		describes it. The third is storage, and it is deliberately boring. The fourth is
		not the engine's at all - it is the agent's, and it is the only step that spends
		the budget the other three just saved.
	</p>
	<p>
		The agent sees ${Narrative.PreviewTokens} of metadata instead of hundreds - and
		retrieves the full content only when it actually needs it.
	</p>
	<p>
		It is the reason tool-heavy agents keep working: the context window stops paying
		for noise before the reasoning starts.
	</p>
</div>
`.trim();
	const Decision = [
		{
			Axis: "WHERE IT RUNS",
			One: "Inside the turn, as a native Hermes plugin - not a proxy you point a client at.",
			Two: "On a port, as an OpenAI-compatible listener the plugin already spawns."
		},
		{
			Axis: "WHAT IT SEES",
			One: "Tool output, before it becomes message history: six hooks, thirteen tools, and an optional context engine, every call forwarded into the Rust dylib.",
			Two: "HTTP traffic only. SSE streams pass through uncompressed."
		},
		{
			Axis: "WHAT IT SHARES",
			One: "The turn's own context. The inline store is session-scoped.",
			Two: "A persistent SQLite store that survives a restart, shared with any client that speaks HTTP, and the tool relay that retrieves or creates CCR entries."
		},
		{
			Axis: "THE LIMIT",
			One: "The hooks are Hermes' contract - no other client can register them, so this lane works with Hermes only.",
			Two: "No tool-output interception, no terminal compression, no directives, no context engine. It extends the stack to other callers; it does not replace the hooks inside Hermes."
		}
	];
	const Lanes = [{
		Path: "PATH 01 // NATIVE PLUGIN",
		Name: "Hermes plugin",
		Badge: "RECOMMENDED",
		BestFor: "BEST FOR: HERMES",
		Dominant: true,
		Lead: "Aphrodite connects to Hermes Agent as a native plugin, not as a proxy you point a client at. Tool output never hits a wire, so only hook-level registration catches it before it becomes message history.",
		Rows: Decision.map((Row) => ({
			Axis: Row.Axis,
			Value: Row.One
		})),
		Action: {
			Label: "THE INTEGRATION",
			Href: Routes.Hermes
		}
	}, {
		Path: "PATH 02 // OPENAI-COMPATIBLE PROXY",
		Name: "Standalone proxy",
		Badge: "HTTP",
		BestFor: "BEST FOR: OTHER CLIENTS",
		Dominant: false,
		Lead: "The plugin already spawns both listeners, so this lane needs no extra setup: point base_url at :9798 and any OpenAI-compatible client - a second agent, a script, an external tool - gets the same CCR compression over plain HTTP.",
		Rows: Decision.map((Row) => ({
			Axis: Row.Axis,
			Value: Row.Two
		})),
		Action: {
			Label: "THE PROXY LANE",
			Href: Anchor(Routes.Setup, "proxy")
		}
	}];
	const Topology = [
		{
			Prefix: "",
			Name: "~/.hermes/",
			Note: ""
		},
		{
			Prefix: "├── ",
			Name: "plugins/aphrodite/",
			Note: "the catalog entry: a reviewed pinned checkout"
		},
		{
			Prefix: "│   ├── ",
			Name: "plugin.yaml",
			Note: "Hermes manifest"
		},
		{
			Prefix: "│   ├── ",
			Name: "__init__.py",
			Note: "loader shim"
		},
		{
			Prefix: "│   ├── ",
			Name: "BINARY_VERSION",
			Note: "the release this tree pins"
		},
		{
			Prefix: "│   └── ",
			Name: "SHA256SUMS.txt",
			Note: "in-tree checksums, BINARY_VERSION header"
		},
		{
			Prefix: "└── ",
			Name: "aphrodite/",
			Note: "the runtime home"
		},
		{
			Prefix: "    ├── ",
			Name: "binaries/",
			Note: "fetched by download.sh, SHA-256 and magic-byte verified"
		},
		{
			Prefix: "    │   ├── ",
			Name: "aphrodite",
			Note: "the proxy binary"
		},
		{
			Prefix: "    │   └── ",
			Name: "libaphrodite_hermes.*",
			Note: "the dylib the plugin loads"
		},
		{
			Prefix: "    ├── ",
			Name: "ccr.db",
			Note: "SQLite store: survives a restart"
		},
		{
			Prefix: "    └── ",
			Name: "directives/",
			Note: "agent directives, hot-reloaded"
		}
	];
	const Layers = [{
		Tone: "weathered-teal",
		Label: "THE PLUGIN DIRECTORY // HOOKS-ONLY",
		Path: "~/.hermes/plugins/aphrodite",
		Body: "Carries the manifest, the loader shim and the checksum list, and nothing else: a reviewed pinned checkout of the catalog entry. Enabling is a separate write to Hermes' own config.yaml, so a finished download alone does not register the hooks."
	}, {
		Tone: "raw-blood",
		Label: "THE RUNTIME HOME // PERSISTENCE",
		Path: "~/.hermes/aphrodite",
		Body: "Houses everything fetched or written at runtime: the binary and the dylib, and the SQLite store that survives a restart and is shared with any client that speaks HTTP. The plugin lane's inline store is session-scoped instead."
	}];
	const Guarantees = ["aphrodite setup runs hermes --version as its first step and fails fast with a clear error, before anything is written.", "If the binaries are missing, the plugin logs the setup command and stays disabled until you run it."];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "APHRODITE // CCR COMPRESSION ENGINE",
		"Description": `Context management for tool-using AI agents. Aphrodite turns verbose tool output - logs, diffs, files, searches, JSON, and browser snapshots - into compact, retrievable previews. Up to ${Benchmark.Ceiling} compression on the standard corpus (${Benchmark.Overall} overall), ${Benchmark.LatencyHeadline} end-to-end.`,
		"data-astro-cid-k7pmibev": true
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageShell", $$PageShell, {
		"Rhythm": "hero",
		"data-astro-cid-k7pmibev": true
	}, { "default": ($$result) => renderTemplate`    ${maybeRenderHead($$result)}<header class="blueprint-section relative flex w-full flex-col items-start justify-start pt-4 text-start" style="--blueprint-rule: var(--oxblood-dark)" data-enter data-astro-cid-k7pmibev> <!-- Beat 01. The folio, in the published blueprint voice: six of these
			     number the six chapters, and each is quiet on purpose - a chapter
			     number is navigation, not decoration. This one is the hero's
			     BREADCRUMB as well as its coordinate, so it names the publication
			     the chapter sits in - the same shape Stitch's overline takes
			     (\`01 / SYSTEM PROVISIONING / RUNTIME INTEGRATION PLAYBOOK\`). --><p class="section-index !mb-10" data-astro-cid-k7pmibev>01 // POSITIONING // CCR COMPRESSION ENGINE</p> <!-- Brand card: the red aphrodite.svg mark in the crimson module,
			     oxblood offset underlay (user instruction: the red mark everywhere).
			     The card's 24-unit drop to the wordmark was the ceremonial stack
			     this beat was paying for: the product's own name now follows its
			     mark at reading distance.

			     The build chip sits BESIDE the card, not under it: the version is
			     the one number on this page a reader can check against their own
			     install (\`Versions.Binary\`, read from the module's
			     \`crates/aphrodite/Cargo.toml\`), and a fact belongs in the same row
			     as the identity it is a fact about. --> <div class="mb-10 flex flex-wrap items-center gap-6" data-astro-cid-k7pmibev> <div class="group relative -rotate-[2.5deg] cursor-pointer transition-transform duration-300 hover:rotate-0" data-astro-cid-k7pmibev> <div class="pointer-events-none absolute -inset-2 translate-x-3 translate-y-3 border border-black bg-oxblood-dark opacity-80" data-astro-cid-k7pmibev></div> <div class="zine-box-crimson relative border-4 border-blood-crimson bg-carbon-void p-5 sm:p-7" data-astro-cid-k7pmibev> <div class="tape-strip absolute -top-3.5 left-1/2 -translate-x-1/2 -rotate-1 border-b border-t border-bone-newsprint/30 px-6 py-1 text-[13px] font-black uppercase tracking-widest text-bone-newsprint" data-astro-cid-k7pmibev>
// REPRO_PROOF #001
</div> <img class="h-32 w-auto sm:h-44" src="/Brand/aphrodite.svg" alt="Aphrodite brand mark" width="160" height="160" data-astro-cid-k7pmibev> <div class="absolute -bottom-3.5 -right-3 border border-black bg-raw-blood px-2.5 py-0.5 text-base font-black tracking-widest text-bone-white shadow" data-astro-cid-k7pmibev>
CCR CORE // STENCIL
</div> </div> </div> <span class="telemetry-tag telemetry-tag--teal" data-astro-cid-k7pmibev>Binary v${Versions.Binary}</span> </div> <!-- Stamped wordmark. THE HERO'S EXPRESSIVE BUDGET IS THE BRAND CARD
			     above; the wordmark carries the scale jump and nothing else. The
			     red rule that used to sit under it was the beat's fourth device
			     (card, wordmark, rule, chip), and a 2px bar cannot add emphasis
			     to a 144px word - it only spends the section's budget. Its 56px
			     of vertical space is kept as spacing, so nothing else moves.

			     The oxblood drop-shadow that used to sit under these letters is
			     gone for the same reason, and it was the LAST duplicate: the
			     card above already carries an oxblood offset plane
			     (\`bg-oxblood-dark\` at translate 12/12) plus its own hard shadow,
			     so a third oxblood offset under the wordmark was the same device
			     spent twice in one section - measured: the hero carried
			     rotate(-2.5deg) + translate(12,12) plane + 6px hard shadow +
			     rotated tape + stamp chip + a 4px oxblood drop-shadow on the
			     144px word. The wordmark's identity is the NAME at scale in bone
			     white, which no shadow was ever carrying; the offset plane
			     belongs to the card alone now. Verified in the rendered page:
			     the hero's only remaining offset planes are the card's. --> <div class="relative flex flex-col items-start" data-astro-cid-k7pmibev> <!-- The wordmark clamps at the small breakpoints: at 320px the
				     fixed 72px measures ~346px wide and clips both edges
				     against the overflow-x-hidden body; 17.5vw keeps the full
				     name inside the viewport until the fixed scale resumes
				     above ~412px. --><h1 class="select-none font-headline text-[min(72px,17.5vw)] font-black uppercase leading-[0.85] tracking-tighter text-bone-white sm:text-[108px] lg:text-[144px]" data-astro-cid-k7pmibev>
Aphrodite
</h1> </div> <!-- The positioning line is a SUBTITLE, not a chip. Boxed, shadowed
			     and tilted, it made the page's third-strongest element out of one
			     sentence - and its teal made the hero carry two accents against
			     the card's crimson. As a line of type under the wordmark it still
			     states the product, and the hero speaks one colour.

			     It starts on the same vertical as everything above it now: a
			     centred hero makes the eye hunt for a starting edge on every line,
			     and the arrangement this beat takes from Stitch starts the whole
			     stack on one edge. --> <p class="mb-8 mt-14 text-start font-mono text-base font-black uppercase tracking-widest text-bone-newsprint" data-astro-cid-k7pmibev>
CONTEXT MANAGEMENT FOR TOOL-USING AI AGENTS
</p> <!-- THE BODY, IN TWO COLUMNS: the reader's path on the left, the
			     instrument panel on the right. The panel is the Stitch hero's side
			     cluster - ours carries the four standing claims rather than abstract
			     telemetry, because a panel with no words in it is decoration, and
			     the four claims are exactly what a reader should be able to read
			     without scrolling. Below \`lg\` the panel stacks under the actions,
			     which is the same reading order. --> <div class="grid w-full grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start lg:gap-12" data-astro-cid-k7pmibev> <div class="flex min-w-0 flex-col items-start" data-astro-cid-k7pmibev> <!-- THE LEAD: one sentence states the product, and the two actions are
					     the only two things a reader can do from here - install it, or
					     watch it work. The justification that used to follow the lead is
					     beat 03's, and the stat grid that used to sit under it is beat
					     04's: four figures with four different measurement domains belong
					     beside the study that qualifies them, not between the reader and
					     the demonstration. --><p class="type-body max-w-[40rem] text-bone-newsprint" data-astro-cid-k7pmibev>
A tool call's output becomes part of the model's context, and a release build adds
						thousands of lines the model reads - and pays for - before it can answer. Aphrodite
						intercepts that result: logs, diffs, files, searches, JSON, and browser snapshots
						arrive as compact previews the agent can act on, with the original always one
						retrieval away.
</p> <!-- THE TELEMETRY MATRIX. Four status chips, each one a fact a reader
					     can check without reading further: the engine is Rust, the
					     integration is a Hermes plugin, the proxy is its own process with
					     two listeners, and the licence is CC0-1.0. They replace the four
					     claim chips that used to sit here - those claims are the panel on
					     the right now, in the readout voice, so the hero states each fact
					     once instead of twice. The four accents keep their original order
					     (bone / teal / canary / crimson), so no chip changes identity. --> <ul class="chips mt-10" data-astro-cid-k7pmibev> <li class="telemetry-tag telemetry-tag--bone" data-astro-cid-k7pmibev>Rust engine</li> <li class="telemetry-tag telemetry-tag--teal" data-astro-cid-k7pmibev>Hermes plugin</li> <li class="telemetry-tag telemetry-tag--canary" data-astro-cid-k7pmibev>Standalone proxy // :9797 :9798</li> <li class="telemetry-tag telemetry-tag--crimson" data-astro-cid-k7pmibev>Licensed CC0-1.0</li> </ul> <!-- THE TWO ACTIONS, under the chips: the reader has been told what
					     it is and what is true of it, so the next thing they meet is the
					     two things they can do from here. --> <div class="mt-8 flex flex-wrap items-center gap-4" data-astro-cid-k7pmibev> ${renderComponent($$result, "ZineButton", $$ZineButton, {
		"Label": "Install for Hermes",
		"Href": "/setup/",
		"data-astro-cid-k7pmibev": true
	})} ${renderComponent($$result, "ZineButton", $$ZineButton, {
		"Label": "See the before / after",
		"Href": "#hero-run",
		"Role": "secondary",
		"data-astro-cid-k7pmibev": true
	})} </div> </div> <!-- THE TELEMETRY PANEL. Index on the left, claim on the right, ruled
				     like a ledger - the hero's standing claims in the voice every later
				     chapter speaks. \`.well\` is grunge-safe by construction (it sets no
				     isolation, z-index, transform, filter or opacity), so the hero's
				     right column carries the page's own texture instead of reading as
				     the one clean block on the sheet. --> <aside class="grunge well w-full p-4 sm:p-5" data-grunge data-grunge-mode="edge" aria-label="Aphrodite in four claims" data-astro-cid-k7pmibev> <p class="section-index" data-astro-cid-k7pmibev>// STANDING CLAIMS</p> <ul class="mt-3 flex flex-col border-t border-[color:var(--tier-well-edge)]" data-astro-cid-k7pmibev> ${Claims.map((Claim, Index) => renderTemplate`<li class="flex items-baseline justify-between gap-3 border-b border-[color:var(--tier-well-edge)] py-2 font-mono text-meta font-bold uppercase last:border-b-0" data-astro-cid-k7pmibev> <span class="text-zinc-dust" data-astro-cid-k7pmibev>${String(Index + 1).padStart(2, "0")}</span> <span class="text-end text-bone-newsprint" data-astro-cid-k7pmibev>${Claim}</span> </li>`)} </ul> </aside> </div> </header>  <section class="band relative w-full" data-reveal data-astro-cid-k7pmibev> <div class="flex flex-col gap-4 border-b border-oxblood-dark pb-5 md:flex-row md:items-end md:justify-between" data-astro-cid-k7pmibev> <div class="flex flex-col gap-2" data-astro-cid-k7pmibev> <p class="section-index !mb-0" data-astro-cid-k7pmibev>02 // DECISION MATRIX</p> <h2 class="type-section text-bone-white" data-astro-cid-k7pmibev>Two ways to run it</h2> </div> <p class="type-body max-w-md text-zinc-dust" data-astro-cid-k7pmibev>
Both lanes run the same engine over the same CCR store. One lives inside the
					turn; the other can only see traffic that arrives over HTTP.
</p> </div> <div class="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]" data-astro-cid-k7pmibev> ${Lanes.map((Lane) => renderTemplate`<article${addAttribute(["grunge shell-card flex flex-col p-6 sm:p-8", { "shadow-[6px_6px_0px_var(--oxblood-dark)]": Lane.Dominant }], "class:list")} data-grunge data-grunge-mode="edge" data-astro-cid-k7pmibev> <span${addAttribute(["absolute inset-x-0 top-0 h-1", Lane.Dominant ? "bg-raw-blood" : "bg-oxblood-dark"], "class:list")} aria-hidden="true" data-astro-cid-k7pmibev></span> <div class="flex flex-wrap items-center justify-between gap-3" data-astro-cid-k7pmibev> <span${addAttribute(["telemetry-tag", Lane.Dominant ? "telemetry-tag--crimson" : "telemetry-tag--teal"], "class:list")} data-astro-cid-k7pmibev> ${Lane.Badge} </span> <span class="type-meta font-bold uppercase tracking-widest text-zinc-dust" data-astro-cid-k7pmibev> ${Lane.Path} </span> </div> <h3 class="type-sub mt-4 text-bone-white" data-astro-cid-k7pmibev>${Lane.Name}</h3> <p class="type-body mt-3 text-bone-newsprint" data-astro-cid-k7pmibev>${Lane.Lead}</p> <dl class="mt-6 flex flex-col" data-astro-cid-k7pmibev> ${Lane.Rows.map((Row) => renderTemplate`<div class="grid grid-cols-1 gap-1 border-t border-[color:var(--tier-shell-edge)] py-3 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-5" data-astro-cid-k7pmibev> <dt class="type-meta font-bold uppercase tracking-widest text-zinc-dust" data-astro-cid-k7pmibev> ${Row.Axis} </dt> <dd class="type-body max-w-[40rem] text-bone-newsprint" data-astro-cid-k7pmibev>${Row.Value}</dd> </div>`)} </dl> <div class="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-oxblood-dark pt-4" data-astro-cid-k7pmibev> <span class="type-meta font-bold uppercase tracking-widest text-zinc-dust" data-astro-cid-k7pmibev> ${Lane.BestFor} </span> <a class="type-code font-bold text-stamped-canary hover:underline"${addAttribute(Lane.Action.Href, "href")} data-astro-cid-k7pmibev> ${Lane.Action.Label} &rarr;
</a> </div> </article>`)} </div> </section>  <section class="band relative w-full" data-reveal data-astro-cid-k7pmibev> <div class="flex flex-col gap-4 border-b border-oxblood-dark pb-5 md:flex-row md:items-end md:justify-between" data-astro-cid-k7pmibev> <div class="flex flex-col gap-2" data-astro-cid-k7pmibev> <p class="section-index !mb-0" data-astro-cid-k7pmibev>
03 // OPERATIONAL WORKFLOW // THE PAIR // STREAM + PREVIEW
</p> <h2 class="type-section text-bone-white" data-astro-cid-k7pmibev>
The agent spends its budget reading noise
</h2> </div> <p class="type-body max-w-md text-zinc-dust" data-astro-cid-k7pmibev>
Every file read, build, code search or browser open floods the agent's context
					with raw output - compilation logs, accessibility trees, JSON blobs - and the
					agent spends its budget reading noise instead of reasoning.
</p> </div> ${renderComponent($$result, "ZineSplit", $$ZineSplit, {
		"Run": Cycle,
		"Label": "ONE LINE, ONE MARKER",
		"Id": "hero-run",
		"data-astro-cid-k7pmibev": true
	})} <!-- The one visible caption. It belongs to the plate - it names what
			     the two panes are, so a reader who scrolled straight to the image
			     knows what they are looking at without opening anything. --> <p class="figure-caption" data-astro-cid-k7pmibev>
The flood arrives one line at a time; the line the agent would have read instead is
				recomputed as each line lands.
</p> <!-- THE COMPRESSION CUTOFF. Stitch closes its console band on a footer
			     callout that states the one fact the two panes add up to; ours is
			     the line the flood stops being read at, said once, between the
			     demonstration and the machinery. It is a ruled strip rather than a
			     second plate: the band already spends its expressive budget on the
			     pair above it. --> <div class="flex flex-col gap-3 border-y border-oxblood-dark py-4 md:flex-row md:items-center md:justify-between md:gap-8" data-astro-cid-k7pmibev> <span class="type-meta font-bold uppercase tracking-widest text-raw-blood" data-astro-cid-k7pmibev>
COMPRESSION CUTOFF
</span> <p class="type-meta max-w-2xl text-zinc-dust" data-astro-cid-k7pmibev>
Everything above the line is stored and addressed; the agent reads the one line,
					and pays for the rest only when the preview cannot answer.
</p> <span class="telemetry-tag telemetry-tag--canary" data-astro-cid-k7pmibev>ONE RETRIEVAL AWAY</span> </div> <div class="max-w-[62ch]" data-astro-cid-k7pmibev> ${renderComponent($$result, "ZineFold", $$ZineFold, {
		"Tag": "METHOD",
		"Label": "How the demonstration works",
		"Body": MethodFold,
		"data-astro-cid-k7pmibev": true
	})} </div> <!-- THE FOUR STEPS // the workflow's own step list, under the pair it
			     runs. The instructions for reading the grid stay one click away, so
			     the four figures are the first thing the eye lands on. --> <div class="flex flex-col gap-4 border-b border-oxblood-dark pb-5" data-astro-cid-k7pmibev> <p class="type-meta font-bold uppercase tracking-widest text-zinc-dust" data-astro-cid-k7pmibev>
THE FOUR STEPS // WHAT HAPPENS BETWEEN THE TOOL PRINTING AND THE MODEL READING
</p> <p class="type-body text-bone-newsprint" data-astro-cid-k7pmibev>
A tool result is appended to the model's context the moment the tool returns, so
					a build log the agent never needed is read in full, and paid for in full.
					Aphrodite intercepts that output before it reaches the LLM and replaces it with
					a compact, structured preview - because the agent's reasoning budget is the
					context budget, and raw noise spends both.
</p> <div class="max-w-[62ch]" data-astro-cid-k7pmibev> ${renderComponent($$result, "ZineFold", $$ZineFold, {
		"Tag": "GUIDE",
		"Label": "How to read the four stages",
		"Body": GridFold,
		"data-astro-cid-k7pmibev": true
	})} </div> </div> <!-- The section's one expressive assembly. BENTO GRAMMAR: the four
			     stages are not four equal boxes - 01 and 04 take 45% more width
			     than 02 and 03, because those are the two whose figure needs the
			     room (\`40 - 123 ns\`, \`aphrodite_retrieve\`) and because a cluster
			     of four identical tiles reads as a list, not as a mechanism with
			     a shape. Weighted TRACKS rather than column spans: a span of
			     2-of-6 put the narrow cards at 163px and wrapped every sentence
			     in them; 1.45fr against 1fr gives the same two-size read at 308
			     against 212 and keeps the cards readable. The grid keeps its 2x2
			     shape through the tablet range and only splits into weighted
			     tracks at xl, where each track has room to mean something.
			     The plate is inset (\`mx-3\`/\`sm:mx-4\`) so the grunge ink that bleeds
			     past its edge has somewhere to go: \`main > section\` clips overflow,
			     so a full-bleed plate would have its splats shaved off at the page
			     edge and the texture would read as a hard cut rather than as ink. --> <div class="grunge grunge--bone emphasis-quiet mx-3 p-5 sm:mx-4 sm:p-8 lg:p-10" data-grunge data-astro-cid-k7pmibev> <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4" data-enter="180" data-astro-cid-k7pmibev> <!-- Stage 01 // CLASSIFY - teal: the technical voice, the type
					     that names the content. --><div class="emphasis-quiet stage-card stage-card--a flex flex-col p-5" data-astro-cid-k7pmibev> <div class="flex flex-col gap-1" data-astro-cid-k7pmibev> <h3 class="type-meta font-bold stage-ink" data-astro-cid-k7pmibev>01 // CLASSIFY</h3> <span class="type-meta stage-ink" data-astro-cid-k7pmibev>STAGE // A</span> </div> <div class="metric mt-4 mb-4" data-astro-cid-k7pmibev>40 - 123 ns</div> <div class="stage-rule mt-auto border-t pt-3" data-astro-cid-k7pmibev> <p class="type-body text-bone-newsprint" data-astro-cid-k7pmibev>
Type-aware classifier names the content.
</p> <p class="type-meta mt-2 stage-ink" data-astro-cid-k7pmibev>SIMD BYTE</p> </div> </div> <!-- Stage 02 // ENRICH & PREVIEW - canary: the result the reader
					     acts on. --> <div class="emphasis-quiet stage-card stage-card--b flex flex-col p-5" data-astro-cid-k7pmibev> <div class="flex flex-col gap-1" data-astro-cid-k7pmibev> <h3 class="type-meta font-bold stage-ink" data-astro-cid-k7pmibev>
02 // ENRICH &amp; PREVIEW
</h3> <span class="type-meta stage-ink" data-astro-cid-k7pmibev>STAGE // B</span> </div> <div class="metric mt-4 mb-4" data-astro-cid-k7pmibev>~1 ms</div> <div class="stage-rule mt-auto border-t pt-3" data-astro-cid-k7pmibev> <p class="type-body text-bone-newsprint" data-astro-cid-k7pmibev>
Enriched, type-aware preview rendering.
</p> <p class="type-meta mt-2 stage-ink" data-astro-cid-k7pmibev>TYPE-AWARE</p> </div> </div> <!-- Stage 03 // BLAKE3 STORE - blood: storage, and the marker it
					     hands back. --> <div class="emphasis-quiet stage-card stage-card--c flex flex-col p-5" data-astro-cid-k7pmibev> <div class="flex flex-col gap-1" data-astro-cid-k7pmibev> <h3 class="type-meta font-bold stage-ink" data-astro-cid-k7pmibev>03 // BLAKE3 STORE</h3> <span class="type-meta stage-ink" data-astro-cid-k7pmibev>STAGE // C</span> </div> <div class="metric mt-4 mb-4" data-astro-cid-k7pmibev>SQLite</div> <div class="stage-rule mt-auto border-t pt-3" data-astro-cid-k7pmibev> <p class="type-body ccr-marker text-bone-newsprint" data-astro-cid-k7pmibev>
CCR marker: &lt;&lt;&lt;CCR:hash|type|size&gt;&gt;&gt;
</p> <p class="type-meta mt-2 stage-ink" data-astro-cid-k7pmibev>DUAL TIER</p> </div> </div> <!-- Stage 04 // AGENT DECIDES - bone: the one step that is the
					     agent's own choice, so it carries the reading voice's colour
					     rather than an engine accent. --> <div class="emphasis-quiet stage-card stage-card--d flex flex-col p-5" data-astro-cid-k7pmibev> <div class="flex flex-col gap-1" data-astro-cid-k7pmibev> <h3 class="type-meta font-bold stage-ink" data-astro-cid-k7pmibev>04 // AGENT DECIDES</h3> <span class="type-meta stage-ink" data-astro-cid-k7pmibev>STAGE // D</span> </div> <div class="metric mt-4 mb-4" data-astro-cid-k7pmibev>
aphrodite_<wbr data-astro-cid-k7pmibev>retrieve
</div> <div class="stage-rule mt-auto border-t pt-3" data-astro-cid-k7pmibev> <p class="type-body text-bone-newsprint" data-astro-cid-k7pmibev>
Full content only when needed.
</p> <p class="type-meta mt-2 stage-ink" data-astro-cid-k7pmibev>ON DEMAND</p> </div> </div> </div> </div> </section>  <section class="band relative w-full" data-reveal data-astro-cid-k7pmibev> <div class="flex flex-col gap-3 border-b border-oxblood-dark pb-5" data-astro-cid-k7pmibev> <p class="section-index !mb-0" data-astro-cid-k7pmibev>04 // PERSISTENCE ARCHITECTURE</p> <h2 class="type-section text-bone-white" data-astro-cid-k7pmibev>What lands on disk</h2> <p class="type-body max-w-3xl text-bone-newsprint" data-astro-cid-k7pmibev>
Two directories, and neither of them is the plugin's own tree: a reviewed pinned
					checkout that carries the manifest and the checksum list, and a runtime home that
					carries everything fetched or written after it.
</p> </div> <div class="grid grid-cols-1 gap-6 lg:grid-cols-12" data-astro-cid-k7pmibev> <div class="well flex flex-col lg:col-span-7" data-astro-cid-k7pmibev> <div class="flex flex-wrap items-center justify-between gap-2 border-b border-[color:var(--tier-well-edge)] bg-soot-black px-4 py-2.5" data-astro-cid-k7pmibev> <span class="type-meta font-bold uppercase tracking-widest text-zinc-dust" data-astro-cid-k7pmibev>
FILESYSTEM TOPOLOGY // ~/.HERMES/
</span> <span class="telemetry-tag telemetry-tag--teal" data-astro-cid-k7pmibev>TWO DIRECTORIES</span> </div> <div class="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-relaxed select-all" data-astro-cid-k7pmibev> ${Topology.map((Row) => renderTemplate`<div class="whitespace-pre" data-astro-cid-k7pmibev> <span class="text-oxblood-dark" data-astro-cid-k7pmibev>${Row.Prefix}</span> <span class="text-bone-white" data-astro-cid-k7pmibev>${Row.Name}</span> <span class="text-zinc-dust" data-astro-cid-k7pmibev> ${Row.Note === "" ? "" : `   # ${Row.Note}`} </span> </div>`)} </div> </div> <div class="flex flex-col gap-4 lg:col-span-5" data-astro-cid-k7pmibev> ${Layers.map((Layer) => renderTemplate`<div class="tier-shell flex flex-col gap-2 border-y border-r border-[color:var(--tier-shell-edge)] p-5"${addAttribute(`border-left: 2px solid var(--${Layer.Tone})`, "style")} data-astro-cid-k7pmibev> <div class="flex flex-wrap items-center justify-between gap-2" data-astro-cid-k7pmibev> <span class="type-meta font-bold uppercase tracking-widest"${addAttribute(`color: var(--${Layer.Tone})`, "style")} data-astro-cid-k7pmibev> ${Layer.Label} </span> <span class="type-meta text-zinc-dust" data-astro-cid-k7pmibev>${Layer.Path}</span> </div> <p class="type-body text-bone-newsprint" data-astro-cid-k7pmibev>${Layer.Body}</p> </div>`)} ${Guarantees.map((Guarantee) => renderTemplate`<p class="flex items-start gap-3 border border-[color:var(--tier-shell-edge)] bg-soot-black px-4 py-3 font-mono text-base leading-relaxed text-zinc-dust" data-astro-cid-k7pmibev> <span class="font-black text-stamped-canary" aria-hidden="true" data-astro-cid-k7pmibev>!</span> <span data-astro-cid-k7pmibev>${Guarantee}</span> </p>`)} </div> </div> </section>  <section class="paper-band relative border-t-0 bg-bone-newsprint py-6 text-soot-black sm:py-10 lg:py-14" data-reveal data-astro-cid-k7pmibev> <div class="flex flex-col gap-4 border-b-2 border-soot-black pb-6" data-astro-cid-k7pmibev> <p class="section-index !mb-0 !text-oxblood-dark" data-astro-cid-k7pmibev>
05 // EVIDENCE // ${Study.Sessions} SESSIONS
</p> <h2 class="type-section text-soot-black" data-astro-cid-k7pmibev>
One result, and the four figures that qualify it
</h2> </div> <div class="grid grid-cols-1 gap-8 border-b-2 border-soot-black py-8 lg:grid-cols-12 lg:gap-12" data-astro-cid-k7pmibev> <!-- THE FLAGSHIP: the one number the band is built around, its
				     domain named under it, and the aggregate it stands for in the
				     unit-line slot Stitch gives its own flagship card. The study
				     that qualifies it sits in the column beside, so the figure is
				     read first and qualified immediately after. --><div class="flex flex-col lg:col-span-5" data-astro-cid-k7pmibev> <div class="font-headline text-[clamp(3.5rem,11vw,8rem)] font-black leading-[0.85] tracking-tighter text-raw-blood" data-astro-cid-k7pmibev> ${Study.SavedPct} </div> <p class="type-meta mt-3 font-bold uppercase tracking-widest text-oxblood-dark" data-astro-cid-k7pmibev>
CONTEXT TOKENS DEFLECTED
</p>  <p class="mt-3" data-astro-cid-k7pmibev> <span class="telemetry-tag telemetry-tag--canary" data-astro-cid-k7pmibev> <span${addAttribute(Study.SavedMillions.replace("M+", ""), "data-count")} data-astro-cid-k7pmibev> ${Study.SavedMillions.replace("M+", "")} </span>
M+ TOKENS SAVED
</span> </p> <p class="mt-3 text-base leading-relaxed text-oxblood-dark" data-astro-cid-k7pmibev> ${Study.Sessions} real sessions, ${Study.ApiCalls} API calls, ${Study.Measured}.
</p> </div> <!-- THE STUDY THAT QUALIFIES THE FIGURE: the prose sits in the second
				     column of the flagship row, so every qualifier is read in the same
				     pass as the number it qualifies. --> <div class="flex flex-col gap-3 lg:col-span-7" data-astro-cid-k7pmibev> <p class="type-body text-soot-black" data-astro-cid-k7pmibev>
Measured over ${Study.Sessions} real Hermes sessions: ${Study.SavedPct} of all
						context tokens deflected, a median session saved ratio of${" "} ${Study.MedianRatio}, and ~${Study.AvgPerCall} tokens saved per API call.${" "} ${Study.SessionsSaved} of the ${Study.Sessions} sessions saved tokens.
</p> <p class="type-body text-oxblood-dark" data-astro-cid-k7pmibev>
The sensitivity band is ${Study.Band}: the estimate depends on the
						chars-per-token ratio, which the study puts at ${Study.CharsPerTok}.
</p> </div> <div class="flex flex-col gap-4 lg:col-span-12" data-astro-cid-k7pmibev> <p class="type-meta font-bold uppercase tracking-widest text-oxblood-dark" data-astro-cid-k7pmibev>
THE OTHER MEASUREMENTS
</p> <p class="type-body max-w-[46rem] text-soot-black" data-astro-cid-k7pmibev>
Each of these is a different measurement in a different domain, and the
						qualifier under each one is part of the number. The ceiling is not the
						average, the average is not the latency, and the saved total is the session
						study rather than any single run.
</p> <!-- THE HERO METRICS PODS - three readouts in a row across the
					     band's full measure, each a label over its figure over the
					     qualifier that keeps it honest, instead of four equal badges.
					     The row spans all twelve columns because three pods need the
					     width; the flagship has already taken the row above.

					     THREE ACCENTS, AND THEY ARE IDENTITY, NOT DECORATION. The
					     accent is the only cue saying these numbers are not
					     comparable, so each pod keeps its own plate - ZineStatBar's
					     pod variant resolves the fill and its legible ink together:

					       610x COMPRESSION      raw blood, bone-white ink
					       132x OVERALL          carbon void, weathered teal ink
					       ~10MS E2E OVERHEAD    raw blood, bone-white ink

					     The fourth domain - the saved total, stamped canary on soot
					     black - is the flagship's own aggregate above, because it is
					     the same measurement the flagship reads as a percentage.
					     "One accent per cluster" governs DECORATION; it does not
					     apply where colour IS the distinction (the owner's verdict
					     on flattening these: they "lost their visual identity"). --> <div class="grid grid-cols-1 gap-4 md:grid-cols-3" data-enter="260" data-astro-cid-k7pmibev> ${renderComponent($$result, "ZineStatBar", $$ZineStatBar, {
		"Variant": "pod",
		"Scale": "compact",
		"Count": true,
		"Color": "raw",
		"Label": "COMPRESSION",
		"Ratio": Benchmark.Ceiling,
		"Qualifier": "Best case, on large low-entropy prose.",
		"data-astro-cid-k7pmibev": true
	})} ${renderComponent($$result, "ZineStatBar", $$ZineStatBar, {
		"Variant": "pod",
		"Scale": "compact",
		"Count": true,
		"Color": "teal",
		"Label": "OVERALL",
		"Ratio": Benchmark.Overall,
		"Qualifier": `The whole standard corpus: ${Benchmark.CorpusIn} to ${Benchmark.CorpusOut}.`,
		"data-astro-cid-k7pmibev": true
	})} ${renderComponent($$result, "ZineStatBar", $$ZineStatBar, {
		"Variant": "pod",
		"Scale": "compact",
		"Color": "raw",
		"Label": "E2E OVERHEAD",
		"Ratio": Benchmark.LatencyHeadline.toUpperCase().replace(" ", ""),
		"Qualifier": `Including the HTTP round-trip; the spread is ${Benchmark.Latency}.`,
		"data-astro-cid-k7pmibev": true
	})} </div> </div> </div> </section>  <section class="band relative w-full" data-reveal data-astro-cid-k7pmibev> <div class="flex flex-col gap-3 border-b border-oxblood-dark pb-5" data-astro-cid-k7pmibev> <p class="section-index !mb-0" data-astro-cid-k7pmibev>06 // START // INSTALLATION</p> <h2 class="type-section text-bone-white" data-astro-cid-k7pmibev>Installing it</h2> <p class="type-body max-w-3xl text-bone-newsprint" data-astro-cid-k7pmibev>
Hermes Agent, with <code class="type-code text-weathered-teal" data-astro-cid-k7pmibev>hermes</code> on
<code class="type-code text-weathered-teal" data-astro-cid-k7pmibev>PATH</code> and a route to GitHub
					Releases.
<code class="type-code text-weathered-teal" data-astro-cid-k7pmibev>aphrodite setup</code> runs
<code class="type-code text-weathered-teal" data-astro-cid-k7pmibev>hermes --version</code> as its first
					step and fails fast with a clear error, before anything is written.
</p> </div> <div class="grunge shell-card max-w-4xl" data-grunge data-grunge-mode="edge" data-astro-cid-k7pmibev> <!-- The ribbon: what this transcript is, and that it is ready to run.
				     It carries no control of its own - the copy chip belongs to the
				     command block below it, and one payload gets one control. --><div class="flex flex-wrap items-center justify-between gap-2 border-b border-[color:var(--tier-shell-edge)] bg-soot-black px-4 py-3 sm:px-5" data-astro-cid-k7pmibev> <span class="telemetry-tag telemetry-tag--crimson" data-astro-cid-k7pmibev>
SESSION // PLUGIN CATALOG
</span> <span class="type-meta font-bold uppercase tracking-widest text-zinc-dust" data-astro-cid-k7pmibev>
FOUR STEPS // READY
</span> </div> <div class="p-6 sm:p-8" data-astro-cid-k7pmibev> <!-- The commands as a block, not as inline prose: a reader who wants
					     to install needs something to copy, and an inline <code> inside
					     a sentence both hides the sequence and breaks mid-token on a
					     narrow viewport (\`hermes --version\` split across two lines). The
					     prose beside each step explains it; this is the thing itself. -->${renderComponent($$result, "CodeFence", $$CodeFence, {
		"Lang": "bash",
		"Copy": true,
		"CopyLabel": "Copy commands",
		"Path": "~/.hermes/plugins/aphrodite",
		"Code": `hermes plugins install aphrodite
hermes plugins enable aphrodite
cd ~/.hermes/plugins/aphrodite && bash download.sh
hermes`,
		"data-astro-cid-k7pmibev": true
	})} <ol class="prose-flow mt-6 list-decimal pl-5" data-astro-cid-k7pmibev> <li class="type-body text-bone-newsprint" data-astro-cid-k7pmibev> <code class="type-code text-bone-white" data-astro-cid-k7pmibev>
hermes plugins install aphrodite
</code>${" "}
- the catalog entry: a reviewed pinned checkout of
<code class="type-code text-weathered-teal" data-astro-cid-k7pmibev>plugin.yaml</code> plus the
<code class="type-code text-weathered-teal" data-astro-cid-k7pmibev>__init__.py</code> shim, in
<code class="type-code text-weathered-teal" data-astro-cid-k7pmibev>
~/.hermes/plugins/aphrodite
</code>
.
</li> <li class="type-body text-bone-newsprint" data-astro-cid-k7pmibev> <code class="type-code text-bone-white" data-astro-cid-k7pmibev>
hermes plugins enable aphrodite
</code>${" "}
- or answer yes at the Enable now? prompt. Enabling is a separate write
							to Hermes's own
<code class="type-code text-weathered-teal" data-astro-cid-k7pmibev>config.yaml</code>, so a
							finished download alone does not register the hooks.
</li> <li class="type-body text-bone-newsprint" data-astro-cid-k7pmibev> <code class="type-code text-bone-white" data-astro-cid-k7pmibev>bash download.sh</code> - run from
							inside
<code class="type-code text-weathered-teal" data-astro-cid-k7pmibev>
~/.hermes/plugins/aphrodite
</code>
. It fetches the binary and the dylib into
<code class="type-code text-weathered-teal" data-astro-cid-k7pmibev>
~/.hermes/aphrodite/binaries/
</code>
, validated against the in-tree
<code class="type-code text-weathered-teal" data-astro-cid-k7pmibev>SHA256SUMS.txt</code> and
							magic-byte checked. On Windows:${" "} <code class="type-code text-weathered-teal" data-astro-cid-k7pmibev>pwsh ./download.ps1</code>.
</li> <li class="type-body text-bone-newsprint" data-astro-cid-k7pmibev> <code class="type-code text-bone-white" data-astro-cid-k7pmibev>hermes</code> - start it.
</li> </ol> <p class="type-meta mt-8 font-bold uppercase tracking-widest text-stamped-canary" data-astro-cid-k7pmibev>
EXPECTED RESULT
</p> <div class="prose-flow mt-3" data-astro-cid-k7pmibev> <p class="type-body text-bone-newsprint" data-astro-cid-k7pmibev>
Reviewed pinned checkout of the catalog entry, binaries fetched + SHA-256
							verified, plugin enabled. Start${" "} <code class="type-code text-weathered-teal" data-astro-cid-k7pmibev>hermes</code> and the plugin
							logs that Aphrodite is enabled.
</p> </div> </div> <!-- The footer callout: the verification gate on the left, the two
				     listeners on the right - the same two facts Stitch prints under its
				     playbook, and the two a reader checks before believing the install
				     worked. --> <div class="flex flex-col gap-2 border-t border-[color:var(--tier-shell-edge)] bg-soot-black px-4 py-3 sm:px-5 md:flex-row md:items-center md:justify-between" data-astro-cid-k7pmibev> <span class="type-meta text-zinc-dust" data-astro-cid-k7pmibev>
VERIFICATION GATE // prebuilt binaries magic-byte verified against the
						in-tree SHA256SUMS.txt
</span> <span class="type-meta font-bold text-weathered-teal" data-astro-cid-k7pmibev>
DAEMON LISTENING // :9797 cache proxy (threshold 2048 bytes by default) ·
						:9798 token proxy (threshold 256 bytes by default)
</span> </div> </div> <!-- ONWARD // one install line, then the routing block. The install
			     harness that used to sit here is /setup/'s story (install-surfaces 1)
			     and the telemetry module that used to sit above it is /benchmarks/'. --> <p class="mt-8 w-full border-t border-oxblood-dark pt-6 font-mono text-base font-bold uppercase tracking-widest text-zinc-dust" data-astro-cid-k7pmibev>
FULL INSTRUCTIONS ON THE${" "} <a class="text-stamped-canary"${addAttribute(Routes.Setup, "href")} data-astro-cid-k7pmibev> SETUP PAGE </a> </p> </section>  ${renderComponent($$result, "Related", $$Related, {
		"Links": [
			{
				Href: "/setup/",
				Label: "SETUP"
			},
			{
				Href: "/showcase/",
				Label: "SHOWCASE"
			},
			{
				Href: "/docs/",
				Label: "DOCS"
			}
		],
		"data-astro-cid-k7pmibev": true
	})}  <p class="w-full border-t border-oxblood-dark pt-6 font-mono text-base uppercase tracking-widest text-zinc-dust" data-astro-cid-k7pmibev>
APHRODITE // CCR CORE &middot; CONTEXT MANAGEMENT FOR TOOL-USING AI AGENTS &middot; ONE
			BINARY, ZERO DEPENDENCIES
</p> ` })} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/index.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/index.astro";
// \0virtual:astro:page:Source/pages/index@_@astro
var page = () => pages_exports;
export { page };
