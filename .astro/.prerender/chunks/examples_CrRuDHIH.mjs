import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { _ as renderTemplate, d as Fragment, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, d as Link, m as Routes, p as OurRepo, t as $$Base } from "./Base_DYyCOQNQ.mjs";
import { t as config_resolution_default } from "./config-resolution_DPyisu12.mjs";
import { t as tool_relay_default } from "./tool-relay_Cnrq3A0m.mjs";
import { t as $$ZineDiagramNav } from "./ZineDiagramNav_4mg_4jxJ.mjs";
import { t as $$ZineFlow } from "./ZineFlow_8jIudqBQ.mjs";
import { t as $$ZineFold } from "./ZineFold_BrIHoRp8.mjs";
import { t as $$ExampleCase } from "./ExampleCase_C2qFrneY.mjs";
import { n as $$PageShell } from "./ZineTape_CVpY0Eb1.mjs";
import { t as $$SectionNav } from "./SectionNav_DVkttqpR.mjs";
import { t as $$ZineSource } from "./ZineSource_Cgxm1vKC.mjs";
import { a as $$Related } from "./DocsSidebar_BegnaZwP.mjs";
import { i as RunPreview, r as RunMarker, t as RunBytes } from "./Motion_vSj2iAhk.mjs";
// Source/pages/examples.astro
var examples_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Examples,
	file: () => $$file,
	url: () => $$url
});
var $$Examples = createComponent(($$result, $$props, $$slots) => {
	const PayloadBytes = 1e3;
	const SplitBuild = [
		"$ cargo build --release --workspace",
		"   Compiling aphrodite-core v0.4.2 (/workspace/crates/aphrodite-core)",
		"warning: unused variable: `Count`",
		"warning: unused import: `std::fmt`",
		"warning: value assigned to `Total` is never read",
		"warning: unused `Result` that must be used",
		"warning: variable `Index` is never used",
		"   Compiling aphrodite v0.4.2 (/workspace/crates/aphrodite)",
		"error[E0432]: unresolved import `crate::store::SessionStore`",
		"  --> crates/aphrodite/src/lib.rs:12:5",
		"error[E0308]: mismatched types",
		"  --> crates/aphrodite/src/preview/builders/build.rs:31:9"
	];
	const SplitTest = [
		"$ cargo test --release -p aphrodite preview::builders",
		"    Finished `release` profile [optimized] target(s) in 12.41s",
		"     Running unittests src/lib.rs (/workspace/target/release/deps/aphrodite-7f3c9a1d2b4e5f60)",
		"test preview::builders::build::test::build_counts_error_lines_not_occurrences ... ok",
		"test preview::builders::grep::test::grep_reports_hits_and_distinct_files ... ok",
		"test preview::builders::ls::test::ls_lists_extension_counts ... ok",
		"test preview::builders::test::test::test_reports_pass_fail_ignored ... ok",
		"test preview::builders::json::test::json_counts_items_and_keys ... ok",
		"test preview::builders::terminal::test::terminal_reads_the_exit_code_line ... ok",
		"test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.31s"
	];
	const SplitBlob = [...SplitBuild, ...SplitTest];
	const SplitMarker = (Hash, Type, Lines) => RunMarker(Hash, Type, Lines).replaceAll("<", "&lt;").replaceAll(">", "&gt;");
	const Thresholds = [
		{
			Key: "tool_threshold_token",
			Gate: "TOKEN PROXY",
			Shipped: "256",
			Compiled: "1024",
			Docs: "512",
			ShippedEffect: "tool results above 256 bytes compress",
			DocsEffect: "tool results above 512 bytes compress"
		},
		{
			Key: "tool_threshold_cache",
			Gate: "CACHE PROXY",
			Shipped: "2048",
			Compiled: "8192",
			Docs: "4096",
			ShippedEffect: "tool results above 2048 bytes compress",
			DocsEffect: "tool results above 4096 bytes compress"
		},
		{
			Key: "inline_threshold",
			Gate: "STORAGE CUTOFF",
			Shipped: "1024",
			Compiled: "256",
			Docs: "2048",
			ShippedEffect: "above this, store instead of inline zlib",
			DocsEffect: "above 2048, store instead of inline zlib"
		},
		{
			Key: "code_multiplier",
			Gate: "CODE TIER",
			Shipped: "1.0",
			Compiled: "3.0",
			Docs: "3.0",
			ShippedEffect: "code_* types get base threshold x 1.0 - no headroom in the example",
			DocsEffect: "code_* types get base threshold x 3"
		}
	];
	const Doors = [
		{
			Door: "TOKEN PROXY",
			Shipped: "256",
			Docs: "512",
			ShippedVerdict: "MARKER",
			DocsVerdict: "MARKER",
			ShippedWhy: "1000 > 256 - compressed, preview + marker",
			DocsWhy: "1000 > 512 - compressed, preview + marker"
		},
		{
			Door: "CACHE PROXY",
			Shipped: "2048",
			Docs: "4096",
			ShippedVerdict: "RAW",
			DocsVerdict: "RAW",
			ShippedWhy: "1000 < 2048 - passes through untouched",
			DocsWhy: "1000 < 4096 - passes through untouched"
		},
		{
			Door: "AS SOURCE CODE",
			Shipped: "256",
			Docs: "1536",
			ShippedVerdict: "MARKER",
			DocsVerdict: "RAW",
			ShippedWhy: "256 x 1.0 = 256 headroom; 1000 > 256",
			DocsWhy: "512 x 3.0 = 1536 headroom; 1000 < 1536"
		},
		{
			Door: "STORAGE CUTOFF",
			Shipped: "1024",
			Docs: "2048",
			ShippedVerdict: "INLINE",
			DocsVerdict: "INLINE",
			ShippedWhy: "had it compressed: 1000 < 1024 stays inline zlib",
			DocsWhy: "had it compressed: below 2048 stays inline zlib"
		}
	];
	const VerdictTone = {
		MARKER: "border-stamped-canary text-stamped-canary",
		RAW: "border-weathered-teal text-weathered-teal",
		INLINE: "border-bone-newsprint text-bone-newsprint"
	};
	const ThresholdPrecision = `
	<div class="prose-flow">
		<p class="type-body">
			Three values are in play, and the comparison prints two of them rather than picking one
			and calling it the default: the shipped example (256 / 2048 / 1.0 / 1024), the docs/examples
			values the bench configs also ship (512 / 4096 / 3.0 / 2048), and the compiled defaults a bare
			binary runs with. An installation using the shipped example sees the first column, a tuned
			install sees the second, and a binary with no configuration file sees the third.
		</p>
		<div class="overflow-x-auto">
			<table class="w-full border-collapse text-left">
				<thead>
					<tr>
						<th scope="col" class="border border-oxblood-dark px-3 py-2 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">KEY</th>
						<th scope="col" class="border border-oxblood-dark px-3 py-2 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">SHIPPED</th>
						<th scope="col" class="border border-oxblood-dark px-3 py-2 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">COMPILED DEFAULT</th>
						<th scope="col" class="border border-oxblood-dark px-3 py-2 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">DOCS/EXAMPLES</th>
						<th scope="col" class="border border-oxblood-dark px-3 py-2 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">WHAT IT GATES</th>
					</tr>
				</thead>
				<tbody>
					${Thresholds.map(({ Key, Gate, Shipped, Compiled, Docs, ShippedEffect, DocsEffect }) => `
						<tr>
							<th scope="row" class="border border-oxblood-dark px-3 py-2 font-mono text-base font-bold text-bone-white">${Key}</th>
							<td class="border border-oxblood-dark px-3 py-2 font-mono text-base text-stamped-canary">${Shipped}</td>
							<td class="border border-oxblood-dark px-3 py-2 font-mono text-base text-zinc-dust">${Compiled}</td>
							<td class="border border-oxblood-dark px-3 py-2 font-mono text-base text-weathered-teal">${Docs}</td>
							<td class="border border-oxblood-dark px-3 py-2 font-mono text-base leading-relaxed text-zinc-dust">${Gate} · ${ShippedEffect}<br />docs: ${DocsEffect}</td>
						</tr>`).join("")}
				</tbody>
			</table>
		</div>
		${["The mechanics of the hot path: the config-file watcher reacts to <code class=\"font-mono text-base\">Modify</code> events on <code class=\"font-mono text-base\">aphrodite.toml</code> with a 500 ms debounce, reloads the file, and stores the four resolved thresholds into every live <code class=\"font-mono text-base\">AppState</code>'s atomics - nothing else is updated live (docs/architecture/07-config-resolution.md:71).", "The dylib session is a different story: it re-applies config fields on change only when <code class=\"font-mono text-base\">auto_reload = true</code> (README.md:390-391)."].map((Sentence) => `<p class="type-body">${Sentence}</p>`).join("")}
	</div>
`;
	const Cases = [
		{
			Id: "retrieval",
			N: "I",
			Label: "BYTE-EXACT · THE RETRIEVAL ROUND-TRIP",
			Hero: "A marker travels from compression to byte-exact retrieval.",
			Title: "Retrieve the original output",
			Tone: "canary",
			Rotate: "sm:rotate-[0.5deg]",
			Claim: [
				"The lifecycle of one payload: the hook hashed it (BLAKE3), stored the bytes in the session store, and replaced the output with a <code class=\"ccr-marker font-mono text-base\">{\"<<<CCR:hash|type|size>>>\"}</code> marker plus a preview.",
				"The transcript then carried the marker instead of the content - hash, type, size, ~15 tokens.",
				"When the next action needs the substance, the agent calls <code class=\"font-mono text-base\">aphrodite_retrieve</code> with the hash - or pastes the marker body directly; every retrieval entry point accepts it, suffix or no suffix.",
				"What comes back is the original content byte-for-byte, nested markers resolved recursively (docs/ccr/marker-format.md).",
				"The caveat, printed on the tool's own contract: markers stay resolvable for the life of the session but <strong class=\"text-bone-white\">do not survive a session restart</strong> - the dylib is loaded once per process, so a new session starts a fresh store (docs/tool-relay/tools.md:36-39).",
				"The proxy's token listener backs its store with SQLite, which is the durability escape from that rule."
			],
			Command: {
				Lang: "text",
				Code: "APHRODITE_RETRIEVE(HASH)"
			},
			Output: [
				{
					Text: "turn 7, tool result",
					Tone: "dim"
				},
				{
					Text: "↓ APHRODITE_RETRIEVE(HASH) - THE AGENT DECIDES, NOT THE ENGINE ↓",
					Tone: "canary"
				},
				{
					Text: "173 bytes return unchanged · nested markers resolved",
					Tone: "result"
				}
			],
			Preview: "[git:2M 2A 1D 3?? | src/x.rs src/y.rs +6 more]",
			Marker: "&lt;&lt;&lt;CCR:d0e3f6a9...d4e7|git|173&gt;&gt;&gt;",
			Panels: [
				{
					Kind: "cards",
					Label: "THE ANNOTATED ARTIFACTS // PREVIEWS THAT MADE RETRIEVAL UNNECESSARY",
					Cards: [
						{
							Line: "git status",
							Shape: "[git:2M 2A 1D 3?? | src/x.rs src/y.rs +6 more]",
							Reads: "2 modified, 2 added, 1 deleted, 3 untracked; first files named, and the +6 more counter names the six entries the preview does not print - eight in all"
						},
						{
							Line: "test run",
							Shape: "[test:220 pass 0 fail 1 ignored | 0.31s]",
							Reads: "all green - the one ignored test is visible, nothing to retrieve"
						},
						{
							Line: "grep",
							Shape: "[grep:4 hits in 3 files | src/preview.rs:12 ...]",
							Reads: "hit count, distinct files, first location - retrieve or narrow the search"
						}
					].map(({ Line, Shape, Reads }) => ({
						Title: Line,
						Body: Shape,
						Note: Reads
					}))
				},
				{
					Kind: "rows",
					Label: "THREE MARKER FACES // HASH EXTRACTION ACCEPTS ALL THREE",
					Rows: [
						{
							Left: "<<<CCR:hash|type|size>>>",
							Right: "STANDARD - THE WIRE FORMAT"
						},
						{
							Left: "[CCR:hash]",
							Right: "BRACKET"
						},
						{
							Left: "⧗CCR:hash⧘",
							Right: "UNICODE - U+2AF7 / U+2AF8"
						}
					]
				},
				{
					Kind: "cards",
					Label: "THE REGRESSION HISTORY // PREVIEW DOUBLING, v1.3.4",
					Cards: [{
						Title: "THE BUG, BEFORE THE FIX",
						Body: "[text:[text:53L 1913B]]",
						Note: "AN ALREADY-SELF-DESCRIBING PREVIEW RE-WRAPPED IN RENDER_MARKER - NOW EMITTED EXACTLY ONCE, REGRESSION-TESTED."
					}]
				}
			],
			Src: "SRC: docs/tool-relay/tools.md:36-39 · docs/ccr/marker-format.md:76-86 · CHANGELOG.md:613-626 · README.md:298-299,506"
		},
		{
			Id: "skip-gate",
			N: "II",
			Label: "THE ESSENTIAL-TOOL SKIP GATE",
			Hero: "Essential tools refuse the machine.",
			Title: "What stays raw, and why",
			Tone: "teal",
			Rotate: "sm:-rotate-[0.4deg]",
			Claim: [
				"Before any classification or storage, <code class=\"font-mono text-base\">transform_tool_result</code> runs its skip gates: a result is left untouched when it is empty; when the tool is in the <strong class=\"text-bone-white\">essential set</strong> - <code class=\"font-mono text-base\">skill_view</code>, <code class=\"font-mono text-base\">skills_list</code>, <code class=\"font-mono text-base\">skill_manage</code>, <code class=\"font-mono text-base\">memory</code>, <code class=\"font-mono text-base\">session_search</code>, <code class=\"font-mono text-base\">read_file</code>, <code class=\"font-mono text-base\">read_terminal</code>; when it is one of Aphrodite's own tools or a headroom helper; or when it sits below the tool threshold (docs/plugin/hooks.md:76-83).",
				"The logic is not protectionism - it is information theory per surface.",
				"The essential tools return compact, self-describing metadata the agent needs raw: a skill's instructions, a memory entry, a file's content.",
				"Compressing them would trade precision for nothing.",
				"The self-tools are already the compressed form: their output is a marker or a catalog, and marking a marker is the preview-doubling bug in slow motion.",
				"And the size gate is the quiet one - most tool output is simply small, and passes through without a store entry ever existing.",
				"One subtlety: the hook tracks file references <em>before</em> the skip gates, so <code class=\"font-mono text-base\">read_file</code> and <code class=\"font-mono text-base\">search_files</code> results feed the recall catalog even when it never compresses them (docs/plugin/hooks.md:92-94)."
			],
			Command: {
				Lang: "text",
				Code: "read_file"
			},
			Output: [
				{
					Text: "01 EMPTY · nothing to compress",
					Tone: "result"
				},
				{
					Text: "02 ESSENTIAL SET · the agent needs raw output",
					Tone: "result"
				},
				{
					Text: "03 SELF TOOLS · already compact metadata",
					Tone: "result"
				},
				{
					Text: "04 SIZE GATE · 1,024 bytes on the token lane, 8,192 on the cache lane",
					Tone: "result"
				},
				{
					Text: "04 SIZE GATE // THE DYLIB LANE",
					Tone: "dim"
				},
				{
					Text: "4,096 chars default; 0 disables the gate",
					Tone: "dim"
				}
			],
			Preview: "the raw bytes, unchanged",
			Marker: "none - this is the gate that refuses the machine.",
			Note: ["The gate order is fixed: the empty check, the essential set, the self-tools, then the size gate (docs/plugin/hooks.md:69-94).", `The classifier demo in <a class="text-stamped-canary hover:text-bone-white" href="${Routes.Workbench}">the workbench</a> walks the same gates with live output.`],
			Src: "SRC: docs/plugin/hooks.md:69-94,146-153 · docs/config/aphrodite-toml.md:121-131"
		},
		{
			Id: "chain-split",
			N: "III",
			Label: "THE CHAIN-SPLIT",
			Hero: "A compound command splits into segments.",
			Title: "One command, many markers",
			Tone: "teal",
			Rotate: "sm:-rotate-[0.4deg]",
			Claim: [
				"Chain-split is a Hermes plugin-side feature, not a proxy one: with it enabled, <code class=\"font-mono text-base\">pre_tool_call</code> rewrites a chained shell command by echoing segment markers, and <code class=\"font-mono text-base\">transform_terminal_output</code> splits the produced output into per-segment pieces - the hook compresses each segment into its own marker, so the model sees several compact previews instead of one large blob (docs/proxy/compression.md:366-379).",
				"It is opt-in: <code class=\"font-mono text-base\">chain_split = false</code> by default, because invisible segment markers pollute redirected stdout.",
				"The split floor and cap are <code class=\"font-mono text-base\">chain_split_min_segments = 2</code> and <code class=\"font-mono text-base\">chain_split_max_segments = 6</code>.",
				"The split is unconditional once marked - segment compression happens before the threshold gate, so marked output never leaks raw.",
				"And it is careful: constructs that would corrupt control flow (heredocs, loops spanning segments) are left untouched.",
				"The proxy never performs chain splitting - it only sees Chat Completions responses."
			],
			Command: {
				Lang: "bash",
				Code: "cd project && cargo build --release && cargo test 2>&1"
			},
			Output: [
				{
					Text: "PER-SEGMENT MARKERS BEHIND IT - EACH SEGMENT ITS OWN RECEIPT:",
					Tone: "dim"
				},
				{
					Text: SplitMarker("f8a1d4c7...b0e3", "build_output", SplitBuild),
					Tone: "teal"
				},
				{
					Text: SplitMarker("a9b2c5d8...e1f4", "test", SplitTest),
					Tone: "teal"
				}
			],
			Preview: RunPreview("build", SplitBuild),
			Marker: SplitMarker("f8a1d4c7...b0e3", "build_output", SplitBuild),
			Note: [
				"<span class=\"font-mono text-base font-bold uppercase tracking-widest text-zinc-dust\">OFF BY DEFAULT · </span>Without the split, the same compound command is one terminal blob with one marker - <code class=\"font-mono text-base\">" + SplitMarker("e7c0f3a6...c1f4", "terminal", SplitBlob) + "</code>, whose size is the two segments summed plus the newline that joins them; the build preview and the test preview never separate.",
				"Every size in this scenario measures the same thing: the UTF-8 bytes of the lines behind the marker, while the number inside a preview counts lines. That is why one segment reads " + SplitBuild.length + "L in its preview and " + RunBytes(SplitBuild) + " in its marker - two measurements of one segment, never two estimates of it.",
				"The command itself is the case the split exists for: <code class=\"font-mono text-base\">cd project && cargo build --release && cargo test 2&gt;&amp;1</code> - one call, two tools, redirected stdout.",
				"Marked output is compressed before the threshold gate, so a split segment never leaks raw even when it is small enough to have passed through whole."
			],
			Src: "SRC: docs/proxy/compression.md:366-379 · docs/plugin/hooks.md:59-65,102-106 · README.md:411-413"
		},
		{
			Id: "thresholds",
			N: "IV",
			Label: "FOUR KNOBS, HOT · THE THRESHOLD WALKTHROUGH",
			Hero: "A threshold edit propagates through a running proxy.",
			Title: "Change compression thresholds without restarting",
			Tone: "crimson",
			Rotate: "sm:-rotate-[0.6deg]",
			Claim: [
				"The four hot-reload thresholds are the only compression values the running proxy re-reads: <code class=\"font-mono text-base\">tool_threshold_token</code>, <code class=\"font-mono text-base\">tool_threshold_cache</code>, <code class=\"font-mono text-base\">inline_threshold</code> and <code class=\"font-mono text-base\">code_multiplier</code>.",
				"Edit + save, or <code class=\"font-mono text-base\">POST /reload</code> - the new values apply immediately, with no restart (README.md:389-391).",
				"Everything else about a proxy is fixed at startup.",
				"One payload is the whole demonstration: the preview and the marker count the same bytes - the blob's own UTF-8 length, because <code class=\"font-mono text-base\">[text:{lines}L {bytes}B | first line]</code> is the plain-text preview shape (docs/classification/content-types.md:153). That is why this scenario reads <code class=\"font-mono text-base\">1000B</code> in the preview beside this claim and <code class=\"font-mono text-base\">1000</code> in its marker, and why every clause below measures those same bytes.",
				"Two coherent settings exist in the repo as configuration files and the comparison walks both: the shipped example (256 / 2048 / 1.0 / 1024) and the docs/examples values (512 / 4096 / 3.0 / 2048). The compiled default that each one overrides is in the disclosure beneath the table.",
				"The arithmetic is the teaching - the same 1,000 bytes cross all four doors at both settings, and the comparison says which door changes its answer and which does not; neither column is rounded."
			],
			Command: {
				Lang: "text",
				Code: "POST /reload"
			},
			Output: [{
				Text: "&lt; 1,000 bytes of prose, above the token gate &gt;",
				Tone: "dim"
			}, {
				Text: "SAME BYTES ON THE CACHE LANE: NO PREVIEW, NO MARKER, NO STORE ENTRY",
				Tone: "dim"
			}],
			Preview: `[text:3L ${PayloadBytes}B | some unrecognizable prose here]`,
			Marker: `&lt;&lt;&lt;CCR:0e3a5c9f...a1e|text|${PayloadBytes}&gt;&gt;&gt;`,
			Diagram: {
				Html: config_resolution_default,
				Caption: "THE HOT PATH // EDIT-SAVE - 500 MS DEBOUNCE - FOUR ATOMICS"
			},
			Src: "SRC: README.md:389-407,584-588 · docs/architecture/07-config-resolution.md:66-71 · docs/config/aphrodite-toml.md:121-131,204 · aphrodite.toml.example:95-123 · docs/examples/README.md:21 · docs/classification/content-types.md:153"
		},
		{
			Id: "directives",
			N: "V",
			Label: "SEVEN BUILT-INS · THE DIRECTIVES BLOCK",
			Hero: "Directives assemble under a budget.",
			Title: "Fit agent guidance into a fixed budget",
			Tone: "crimson",
			Rotate: "sm:rotate-[0.5deg]",
			Claim: [
				"Short behavioral <code class=\"font-mono text-base\">.md</code> files, baked into the binary and materialized on plugin registration, injected verbatim every <code class=\"font-mono text-base\">pre_llm_call</code> - they teach retrieval vocabulary, never the compression mechanism.",
				"The discovery order is strictly first-wins, never merged: <code class=\"font-mono text-base\">APHRODITE_DIRECTIVES_DIR</code> → <code class=\"font-mono text-base\">./directives/</code> → <code class=\"font-mono text-base\">~/.hermes/aphrodite/directives/</code> → binary-relative.",
				"Any <code class=\"font-mono text-base\">.md</code> file in a discovered directory becomes a directive named after its stem - the built-ins are not special-cased (docs/plugin/directives.md:51-58).",
				"The budget math: 2,000 characters per directive body, 4,000 characters across all active directives combined - and the whole per-turn injection (directives + nudges + recall catalog + retrieve hint) lives under one hard cap, <code class=\"font-mono text-base\">flow_budget_chars</code>, default 4,000 (shipped example: 2,600).",
				"Sections drop from the bottom when over budget; directives and nudges never drop."
			],
			Command: {
				Lang: "bash",
				Code: "aphrodite_directive(\"swap\", \"explore\")"
			},
			Output: [
				{
					Text: "THE ASSEMBLED TURN // pre_llm_call",
					Tone: "dim"
				},
				{
					Text: "[directives: name1, name2]",
					Tone: "result"
				},
				{
					Text: "focus: targeted execution, marker-aware retrieval",
					Tone: "dim"
				},
				{
					Text: "[nudge: ...]",
					Tone: "result"
				},
				{
					Text: "[recall] catalog summary",
					Tone: "result"
				}
			],
			Preview: "the directive block, injected verbatim",
			Marker: "none - the assembler injects text, not markers.",
			Panels: [{
				Kind: "rows",
				Label: "THE BUILT-IN SET // SEVEN, BAKED IN",
				Rows: [
					{
						Name: "focus",
						Role: "one primary action per turn, marker-aware retrieval"
					},
					{
						Name: "foresight",
						Role: "prefetch what the next turn will need, never wait on I/O"
					},
					{
						Name: "ccr-handling",
						Role: "how to read the marker and when to retrieve vs. skip"
					},
					{
						Name: "cleanup",
						Role: "catalog sweep, summarize, verify nothing left unresolved"
					},
					{
						Name: "explore",
						Role: "broad context, aggressive prefetch, resolve what matters"
					},
					{
						Name: "lazy",
						Role: "only what this turn strictly requires; defer the rest"
					},
					{
						Name: "lazy-eval",
						Role: "markers accumulate across turns; you decide when to resolve"
					}
				].map(({ Name, Role }) => ({
					Left: Name,
					Right: Role
				}))
			}, {
				Kind: "rows",
				Label: "THE INJECTION ORDER // PRE_LLM_CALL, TOP TO BOTTOM, DROPS FROM THE BOTTOM",
				Rows: [
					{
						N: "01",
						Section: "FIRST-TURN ORIENTATION",
						Rule: "turn 0 only, from [prompts] session_inject"
					},
					{
						N: "02",
						Section: "DIRECTIVES",
						Rule: "never dropped"
					},
					{
						N: "03",
						Section: "NUDGES",
						Rule: "one-shots, at most two - never dropped"
					},
					{
						N: "04",
						Section: "BACKGROUND STATUS",
						Rule: "yields under pressure"
					},
					{
						N: "05",
						Section: "RECALL CATALOG",
						Rule: "the first section dropped under budget"
					}
				].map(({ N, Section, Rule }) => ({
					Left: `${N} · ${Section}`,
					Right: Rule
				}))
			}],
			Note: ["<span class=\"font-mono text-base font-bold uppercase tracking-widest text-stamped-canary\">THE PRIORITY LADDER · </span>Under budget pressure the recall catalog goes first, then background status.", "Directives and nudges are never dropped - nudges are capped at two one-shots, so the floor is always the directive block plus up to two nudges (docs/plugin/hooks.md:123-137)."],
			Src: "SRC: docs/plugin/directives.md:34-97 · docs/plugin/hooks.md:114-137,146-153 · README.md:415-440 · docs/config/env-vars.md:78"
		},
		{
			Id: "relay",
			N: "VI",
			Label: "SYNCHRONOUS · THE TOOL-RELAY CALLBACK",
			Hero: "A relay call fires a callback.",
			Title: "Return tool results inline or by callback",
			Tone: "canary",
			Rotate: "sm:-rotate-[0.5deg]",
			Claim: [
				"<code class=\"font-mono text-base\">POST /tool/relay</code> runs the tool synchronously unless the request carries a <code class=\"font-mono text-base\">callback_url</code> - then the call becomes asynchronous: the proxy answers immediately with <code class=\"font-mono text-base\">{\"{success: true, async_call: true}\"}</code>, executes the tool, and POSTs the real result to the callback URL later (docs/tool-relay/callbacks.md:29-48).",
				"The guardrails are strict.",
				"The callback URL must be <strong class=\"text-bone-white\">https-only</strong> - http, including loopback, and any other scheme are rejected with HTTP 400 before anything executes (SSRF protection).",
				"The delivery is a <strong class=\"text-bone-white\">5-second, fire-and-forget POST</strong>: no auth header, no retries, the outcome untracked (only relay calls themselves are counted in <code class=\"font-mono text-base\">/stats</code>).",
				"Only <code class=\"font-mono text-base\">aphrodite_retrieve</code>, <code class=\"font-mono text-base\">aphrodite_compress</code> and <code class=\"font-mono text-base\">aphrodite_list</code> are relayable; anything else is an error.",
				"On graceful shutdown the task tracker waits for in-flight deliveries, so none are lost mid-flight."
			],
			Command: {
				Lang: "text",
				Code: "POST /tool/relay"
			},
			Output: [
				{
					Text: "SYNCHRONOUS // NO CALLBACK_URL",
					Tone: "dim"
				},
				{
					Text: "POST /tool/relay - tool runs - full result inline",
					Tone: "result"
				},
				{
					Text: "ASYNC // WITH CALLBACK_URL",
					Tone: "canary"
				},
				{
					Text: "{\"{ \\\"success\\\": true, \\\"result\\\": null, \\\"async_call\\\": true }\"}",
					Tone: "result"
				},
				{
					Text: "... later, 5s timeout, no auth, no retries ...",
					Tone: "dim"
				},
				{
					Text: "POST callback_url - the real result",
					Tone: "result"
				}
			],
			Preview: "compact metadata: hash, type, size, marker",
			Marker: "none - a relay result stays raw through the hook pipeline.",
			Note: ["<span class=\"font-mono text-base font-bold uppercase tracking-widest text-zinc-dust\">THE RESULT ITSELF · </span>is compact metadata (hash, type, size, marker) - so it stays raw through the hook pipeline.", "Compressing an <code class=\"font-mono text-base\">aphrodite_retrieve</code> result would replace resolved content with another marker, which is why it is never absorbed."],
			Diagram: {
				Html: tool_relay_default,
				Caption: "M4 // TOOL RELAY"
			},
			Src: "SRC: docs/tool-relay/callbacks.md:27-111,139-144 · docs/plugin/hooks.md:76-83"
		},
		{
			Id: "dual-listener",
			N: "VII",
			Label: "TWO LANES · THE DUAL-LISTENER PARALLEL",
			Hero: "And the same payload crosses two listeners without changing shape.",
			Title: "Compare plugin and proxy behaviour",
			Tone: "crimson",
			Rotate: "sm:rotate-[0.5deg]",
			Claim: [
				"A single binary can run two listeners with different roles - the cache proxy on <code class=\"font-mono text-base\">:9797</code> (in-memory DashMap, 10,000 entries, 8192-byte threshold) and the token proxy on <code class=\"font-mono text-base\">:9798</code> (SQLite at <code class=\"font-mono text-base\">ccr.db</code>, 1024-byte threshold, persistent, tool-relay-capable).",
				"Each has its own <code class=\"font-mono text-base\">AppState</code> and CCR backend; both bind to loopback by default (docs/proxy/architecture.md:9-35).",
				"The parallel that matters: the same payload crosses the plugin-hook lane (the hook intercepts it at the tool boundary, no API round-trip) and the proxy lane (the proxy compresses Chat Completions responses in flight) - and the marker it becomes is byte-identical across the two paths, as are the enriched previews (CHANGELOG.md:616-617).",
				"The preview-doubling regression of v1.3.4 was caught precisely because the two paths were held to that standard."
			],
			Command: {
				Lang: "text",
				Code: "transform_tool_result"
			},
			Output: [
				{
					Text: "LANE A // PLUGIN HOOKS",
					Tone: "dim"
				},
				{
					Text: "transform_tool_result → BLAKE3 → marker",
					Tone: "result"
				},
				{
					Text: "LANE B // PROXY",
					Tone: "canary"
				},
				{
					Text: "Chat Completions response → classify → threshold → marker",
					Tone: "result"
				}
			],
			Preview: "the same enriched preview on both lanes",
			Marker: "&lt;&lt;&lt;CCR:d7b4f2a8...c6b0|terminal|612&gt;&gt;&gt;",
			Panels: [{
				Kind: "rows",
				Label: "TWO LISTENERS, TWO BACKENDS",
				Rows: [{
					Left: "CACHE :9797",
					Right: "DASHMAP · 10,000 · 8192-BYTE THRESHOLD · TRANSIENT"
				}, {
					Left: "TOKEN :9798",
					Right: "SQLITE · ccr.db · 1024-BYTE THRESHOLD · PERSISTENT"
				}]
			}],
			Src: "SRC: docs/proxy/architecture.md:9-35 · README.md:287-299 · CHANGELOG.md:616-617"
		}
	];
	const Sections = [
		...Cases.map(({ Id, N, Title }) => ({
			Id,
			Label: `${N} · ${Title}`
		})),
		{
			Id: "turn-cycle",
			Label: "VIII · The turn cycle"
		},
		{
			Id: "runtime-home",
			Label: "IX · One runtime home"
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "EXAMPLES // APHRODITE",
		"Description": "The worked scenarios: the retrieval round-trip, what stays raw and why, the chain split, threshold tuning in action, the directives block, the tool-relay callback, and the dual-listener parallel - real mechanics, every claim anchored."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageShell", $$PageShell, { "Crumbs": true }, { "default": ($$result) => renderTemplate`  ${maybeRenderHead($$result)}<header class="relative flex w-full flex-col items-start pt-12" data-reveal> <div class="tape-strip absolute -top-6 left-0 z-10 -rotate-1 border-b border-t border-bone-newsprint/30 px-4 py-1 text-base font-black uppercase tracking-widest text-bone-newsprint">
EXAMPLES // MECHANICS-FIRST · THE OTHER SHELF IS /SHOWCASE
</div> <div class="zine-box-teal relative w-full border-4 border-blood-crimson bg-carbon-void p-8 sm:p-12 lg:p-16"> <p class="font-mono text-base font-bold uppercase tracking-widest text-weathered-teal">
THE WORKED SCENARIOS // HOW IT ACTUALLY MOVES
</p> <h1 class="type-display mt-8 uppercase text-bone-white drop-shadow-[4px_4px_0px_#520612]">
Seven scenarios,<br>one <span class="text-stamped-canary">lifecycle</span> </h1> <p class="type-body mt-16 max-w-3xl text-bone-newsprint">
A tool call's output is appended to the model's context, and the model reads every
					line of it. These are the scenarios where Aphrodite changes what arrives.
</p> <p class="type-body mt-6 max-w-3xl text-bone-newsprint">
Not what the output looks like - what happens to it, step by step.
</p> <!-- The index: the seven claims, each a jump link to its scenario --> <ol class="mt-12 flex max-w-3xl flex-col gap-3"> ${Cases.map(({ Id, N, Hero }) => renderTemplate`<li> <a class="type-body text-bone-newsprint transition-colors hover:text-stamped-canary"${addAttribute(`#${Id}`, "href")}> <span class="type-meta mr-3 text-stamped-canary"> ${N} </span> ${Hero} </a> </li>`)} </ol> <div class="mt-24 flex flex-wrap gap-12 font-mono text-base font-bold uppercase tracking-widest"> <a class="border border-oxblood-dark bg-soot-black px-4 py-2 text-stamped-canary transition-colors hover:text-bone-white"${addAttribute(Routes.Workbench, "href")}>TRY THE SIMULATOR</a> <a class="border border-oxblood-dark bg-soot-black px-4 py-2 text-zinc-dust transition-colors hover:text-bone-white"${addAttribute(Routes.Tools, "href")}>THE TOOLS</a> <a class="border border-oxblood-dark bg-soot-black px-4 py-2 text-zinc-dust transition-colors hover:text-bone-white"${addAttribute(Routes.Docs, "href")}>THE DOCS</a> </div> </div> </header>  ${renderComponent($$result, "SectionNav", $$SectionNav, { "Sections": Sections })}  ${Cases.map(({ Hero: _Hero, ...Scenario }) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ExampleCase", $$ExampleCase, {
		...Scenario,
		"Reveal": true,
		"Stream": true
	})}  ${Scenario.Id === "thresholds" && renderTemplate`<div class="relative flex w-full flex-col" data-reveal> <div class="overflow-x-auto"> <table class="w-full min-w-[48rem] border-collapse text-left"> <caption class="type-sub mb-[var(--space-tight)] text-left text-bone-white">
What happens to the same ${PayloadBytes.toLocaleString("en-US")}-byte payload?
</caption> <thead> <tr> <th scope="col" class="border border-oxblood-dark px-3 py-2 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
DECISION
</th> <th scope="col" class="border border-oxblood-dark px-3 py-2 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
SHIPPED EXAMPLE<br>256 / 2048 / 1.0 / 1024
</th> <th scope="col" class="border border-oxblood-dark px-3 py-2 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
DOCS/EXAMPLES<br>512 / 4096 / 3.0 / 2048
</th> <th scope="col" class="border border-oxblood-dark px-3 py-2 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
SAME ANSWER?
</th> </tr> </thead> <tbody> ${Doors.map(({ Door, Shipped, Docs, ShippedVerdict, DocsVerdict, ShippedWhy, DocsWhy }) => renderTemplate`<tr> <th scope="row" class="border border-oxblood-dark px-3 py-3 align-top font-mono text-base font-black uppercase tracking-widest text-bone-white"> ${Door} <span class="mt-1 block font-mono text-base font-normal normal-case tracking-normal text-zinc-dust"> ${Shipped} / ${Docs} </span> </th> <td class="border border-oxblood-dark px-3 py-3 align-top font-mono text-base leading-relaxed text-zinc-dust"> <span${addAttribute(["border px-2 py-0.5 font-mono text-base font-black", VerdictTone[ShippedVerdict]], "class:list")}> ${ShippedVerdict} </span> <span class="mt-2 block">${ShippedWhy}</span> </td> <td class="border border-oxblood-dark px-3 py-3 align-top font-mono text-base leading-relaxed text-zinc-dust"> <span${addAttribute(["border px-2 py-0.5 font-mono text-base font-black", VerdictTone[DocsVerdict]], "class:list")}> ${DocsVerdict} </span> <span class="mt-2 block">${DocsWhy}</span> </td> <td class="border border-oxblood-dark px-3 py-3 align-top font-mono text-base font-black uppercase tracking-widest"> <span${addAttribute([ShippedVerdict === DocsVerdict ? "text-zinc-dust" : "text-stamped-canary"], "class:list")}> ${ShippedVerdict === DocsVerdict ? "SAME" : "DIFFERS"} </span> </td> </tr>`)} </tbody> </table> </div> <div class="mt-[var(--space-group)]"> ${renderComponent($$result, "ZineFold", $$ZineFold, {
		"Label": "Show thresholds behind these decisions",
		"Tag": "DETAIL",
		"Body": ThresholdPrecision
	})} </div> </div>`} ` })}`)} <section id="turn-cycle" class="relative flex w-full flex-col lg:w-11/12 lg:self-end" data-reveal> <p class="section-kicker">VIII · IN FIRING ORDER</p> <h2 class="type-section mt-2 text-bone-white">The turn cycle</h2> <div class="prose-flow type-body mt-[var(--space-tight)] max-w-3xl text-bone-newsprint"> <p>Each scenario zooms into one mechanism.</p> <p>
This is the loop that holds them: the six hooks, in firing order, with what the agent sees
					and what the system does at each step.
</p> <p>
Two columns answer together: the transcript the model reads, and the work
					that produced it. Every step cites the hook section that owns it, so the diagram is a
					route into <code class="font-mono text-base text-weathered-teal">docs/plugin/hooks.md</code>
rather than a summary of it.
</p> </div> <div class="mt-[var(--space-group)]"> ${renderComponent($$result, "ZineFlow", $$ZineFlow, {
		"Title": "THE TURN CYCLE // SIX HOOKS, ONE LOOP",
		"Complete": "THE LOOP CLOSES",
		"Steps": [
			{
				Title: "SESSION START",
				Agent: ["a clean slate - nothing injected yet", "· turn 0: no markers, no directives, no recall catalog in the transcript"],
				System: ["on_session_start resets every piece of per-session state: turn counter, conversation index, recent markers, referenced files, tool-event telemetry, ephemeral directives.", "It injects nothing; the orientation renders on the first pre_llm_call"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:22-27"
			},
			{
				Title: "BEFORE THE TOOL",
				Agent: [
					"the call may be rewritten before it runs",
					"» cd x && cargo build && cargo test",
					"· long-running terminal/process calls may be auto-backgrounded (poll worker, default on); the rewrite is invisible in the transcript"
				],
				System: ["pre_tool_call can auto-background long-running terminal/process calls (poll worker, default on) and split chained commands (chain split, off by default).", "If neither applies, the call passes through unchanged"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:29-42"
			},
			{
				Title: "AFTER THE TOOL",
				Agent: [
					"a large result comes back as a preview and a marker",
					"» [grep:4 hits in 3 files | src/preview.rs:12 ...]",
					"» <<<CCR:hash|type|size>>>",
					"· the full bytes are gone from the transcript - retrievable by hash"
				],
				System: ["transform_tool_result runs telemetry, file-reference tracking (read_file and search_files recorded before the skip gates, hooks.md:92-94), the skip gates, classification, the EMA-tuned threshold, then the BLAKE3 store and the swap"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:44-56"
			},
			{
				Title: "AFTER THE TERMINAL",
				Agent: ["same treatment for command output - chain split first", "» [terminal:14L exit code: 0]"],
				System: ["transform_terminal_output mirrors the tool pipeline: telemetry, per-segment chain split before the threshold gate, the 1,024-character gate, classify, store, swap"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:58-66"
			},
			{
				Title: "BEFORE THE LLM",
				Agent: [
					"the turn opens with directives, nudges, and the recall catalog",
					"→ [aphrodite: first-turn orientation] on turn 0",
					"· one injection block under a 4,000-character budget - recall drops first; directives and nudges never drop"
				],
				System: ["pre_llm_call runs the poll-worker checkpoint, then the assembler composes the injection under one 4,000-character budget, dropping sections from the bottom - recall first to go; directives and nudges never drop"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:68-79"
			},
			{
				Title: "AFTER THE LLM",
				Agent: ["the answer arrives - the machinery tidies up", "· the last marker seen in the transcript is archived into the conversation index"],
				System: ["post_llm_call archives the last marker into the conversation index, advances the turn counter, purges expired nudges (after the counter advances, so a one-shot renders exactly once), and expires stale poll-worker tasks.", "Then the next turn begins"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:81-86"
			}
		]
	})} </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: docs/plugin/hooks.md:13-20 (the six-hook table) · each step cites its hook section"] })} </section>  <section id="runtime-home" class="relative flex w-full flex-col lg:w-11/12 lg:self-start" data-reveal> <p class="section-kicker">IX · ISSUE #40, AS A DECISION WALK</p> <h2 class="type-section mt-2 text-bone-white">One runtime home</h2> <div class="prose-flow type-body mt-[var(--space-tight)] max-w-3xl text-bone-newsprint"> <p>
The history behind issue #40, as a decision walk: how the runtime home is resolved today,
					and why both halves of the plugin agree by construction.
</p> <p>
Each step names the rule that decides, the mechanism that carries it, and the changelog
					entry the claim rests on - so a reader can check the last column instead of trusting the
					first.
</p> </div> <div class="mt-[var(--space-group)]"> ${renderComponent($$result, "ZineFlow", $$ZineFlow, {
		"Title": "THE HOME DECISION // RESOLVED ONCE, SHARED BY BOTH HALVES",
		"Complete": "ONE HOME",
		"Steps": [
			{
				Title: "EXPLICIT OVERRIDE",
				Agent: [
					"you set APHRODITE_HOME - the whole stack obeys",
					"» export APHRODITE_HOME=/path/to/aphrodite",
					"· binaries/, aphrodite.toml, ccr.db, directives/, logs all resolve under it"
				],
				System: ["the shim resolves the runtime home once at register() and exports it to the Rust half through APHRODITE_HOME + APHRODITE_DIRECTIVES_DIR, so the dylib and the spawned proxy binary agree by construction"],
				Anchor: Link(OurRepo, "CHANGELOG.md"),
				AnchorLabel: "CHANGELOG v1.6.3"
			},
			{
				Title: "THE HERMES HOME",
				Agent: ["per-Hermes-home isolation, extended to the Rust half", "· no override: HERMES_HOME decides, on both halves"],
				System: ["no override: the home derives from the Hermes home (HERMES_HOME), honored with the same precedence on the Rust side through the shared home module"],
				Anchor: Link(OurRepo, "CHANGELOG.md"),
				AnchorLabel: "CHANGELOG v1.6.3"
			},
			{
				Title: "THE LEGACY ADOPTION",
				Agent: ["upgrades keep working - with a warning, never a migration", "· the legacy ~/.hermes/aphrodite home is adopted with a one-line warning"],
				System: ["when the Hermes-home-derived home holds no install but the pre-2.2 ~/.hermes/aphrodite does, the legacy home is adopted with a one-line warning.", "Adoption never fires for throwaway homes (probe scratch, temp homes), preserving the catalog probe's isolation"],
				Anchor: Link(OurRepo, "CHANGELOG.md"),
				AnchorLabel: "CHANGELOG v1.6.3"
			},
			{
				Title: "THE DECISION IS NAMED",
				Agent: ["the startup log tells you which home was chosen and why", "» runtime home: path (decided by ...)"],
				System: [
					"the startup log prints: runtime home: path (decided by ...).",
					"Before v1.6.3, the shim read HERMES_HOME while the Rust half read HOME - the divergence that orphaned configs and disabled plugins whenever the two differed.",
					"Fixed as one decision, shared"
				],
				Anchor: Link(OurRepo, "CHANGELOG.md"),
				AnchorLabel: "CHANGELOG v1.6.3"
			},
			{
				Title: "AND SINCE 1.6.5, NO QUIET SHARING",
				Agent: ["a non-default HERMES_HOME with no install reports 'not installed'", "· no quiet sharing of one runtime home across profiles"],
				System: ["the catalog review dropped the legacy ~/.hermes/aphrodite adoption from _runtime_home(): a non-default HERMES_HOME with no install no longer quietly shares one runtime home across profiles"],
				Anchor: Link(OurRepo, "CHANGELOG.md"),
				AnchorLabel: "CHANGELOG v1.6.5"
			}
		]
	})} </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: CHANGELOG.md:104-154 (v1.6.3) · CHANGELOG.md:39-67 (v1.6.5) · issue #40"] })} </section>  ${renderComponent($$result, "Related", $$Related, { "Links": [
		{
			Href: "/showcase/",
			Label: "SHOWCASE"
		},
		{
			Href: "/workbench/",
			Label: "WORKBENCH"
		},
		{
			Href: "/hooks/",
			Label: "HOOKS"
		},
		{
			Href: "/docs/plugin/hooks/",
			Label: "DOCS · HOOKS"
		}
	] })} ` })} ${renderComponent($$result, "ZineDiagramNav", $$ZineDiagramNav, {})} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/examples.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/examples.astro";
var $$url = "/examples";
// \0virtual:astro:page:Source/pages/examples@_@astro
var page = () => examples_exports;
export { page };
