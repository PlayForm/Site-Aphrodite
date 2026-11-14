import { d as renderScript, f as createAstro, l as Link, m as __exportAll, p as createComponent, t as $$Base, u as OurRepo } from "./Base_DtRxtNeh.mjs";
import { E as unescapeHTML, _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { t as $$ZineTape } from "./ZineTape_IRUAczxy.mjs";
import { t as $$ZinePreview } from "./ZinePreview_baeoXlBR.mjs";
import { t as $$ZineFlow } from "./ZineFlow_DkfySTl9.mjs";
import { t as $$Breadcrumbs } from "./Breadcrumbs_DD_NKQL-.mjs";
import { t as $$Related } from "./Related_DYsQNd8D.mjs";
// Source/Component/ZineToggle.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZineToggle = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZineToggle;
	const { Left = "BEFORE", Right = "AFTER", LeftPane, RightPane, LeftLabel, RightLabel } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="zine-box-subtle border-[3px] border-oxblood-dark bg-carbon-void p-4 sm:p-5" data-zine-toggle> <div class="mb-3 flex border-2 border-black bg-soot-black shadow-[3px_3px_0px_#000]" role="group" aria-label="Toggle the before and after panes"> <button class="grow bg-raw-blood px-3 py-1.5 font-mono text-base font-black uppercase tracking-widest text-bone-white" data-toggle-side="left" type="button" aria-pressed="true"> ${Left} </button> <button class="grow px-3 py-1.5 font-mono text-base font-black uppercase tracking-widest text-zinc-dust hover:text-bone-white" data-toggle-side="right" type="button" aria-pressed="false"> ${Right} </button> </div> <div data-toggle-pane="left"> ${LeftLabel && renderTemplate`<div class="mb-1 font-mono text-base font-black uppercase tracking-widest text-stamped-canary">${LeftLabel}</div>`} <div class="border border-oxblood-dark bg-soot-black p-3 font-mono text-base leading-relaxed text-zinc-dust">${unescapeHTML(LeftPane)}</div> </div> <div data-toggle-pane="right" hidden> ${RightLabel && renderTemplate`<div class="mb-1 font-mono text-base font-black uppercase tracking-widest text-weathered-teal">${RightLabel}</div>`} <div class="border border-oxblood-dark bg-soot-black p-3 font-mono text-base font-bold leading-relaxed text-bone-white">${unescapeHTML(RightPane)}</div> </div> </div>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZineToggle.astro", void 0);
var Examples_default = {
	$schema: "https://example.invalid/no-schema.json",
	purpose: "The Aphrodite showcase example bank: anonymized, behavior-faithful worked examples of what the plugin does to real tool output. Every entry carries the real BEHAVIOR shape (preview line, marker, retrieval round-trip) dressed in GENERIC developer content - no names, no usernames, no secrets, no real paths, no real session ids, no dates, no identifiable project content.",
	provenance: "Shapes extracted from the live plugin runtime (aphrodite.toml defaults, the enriched preview catalog, the marker-format contract, the tool-relay callback flow, the directive injection mechanics) and anonymized. The authored examples below are generic reconstructions, not verbatim captures of any session.",
	authoringRules: {
		"preview": "Preview lines marked corpus=true are byte-identical to the Enriched Preview Catalog in docs/proxy/compression.md and the preview-forms block in Site/Source/Content/Docs/guides/hermes-tool-output-schemas.md, so a page may render them verbatim and Drift-Guard's showcase-line check passes. Preview lines marked corpus=false are faithful fragments with varied generic numbers: if a page renders one verbatim, first add it to the docs catalog (or render it as a fragment, not a quote).",
		"hashes": "All hashes are fabricated 40-hex placeholders. They are never real content digests.",
		"never": "auth.json, .env, and private vault material was never read and never appears here."
	},
	defaults: {
		"tool_threshold_token": 512,
		"tool_threshold_cache": 4096,
		"terminal_threshold": 1024,
		"inline_threshold": 2048,
		"code_multiplier": 3,
		"engine_threshold_pct": 45,
		"preview_max_chars": 120
	},
	examples: [
		{
			"id": "build-compile-error",
			"title": "Cargo build with one compile error",
			"category": "build",
			"corpus": true,
			"raw": "   Compiling app-core v0.1.0 (/home/dev/project/crates/app-core)\nerror[E0432]: unresolved import `app_core::config`\n --> crates/app-core/src/lib.rs:4:5\n  |\n4 | use app_core::config;\n  |     ^^^^^^^^^^^^^^^^ no `config` in the root\n\nwarning: unused import: `std::collections::HashMap`\n --> crates/app-core/src/util.rs:2:5\n  |\n2 | use std::collections::HashMap;\n  |     ^^^^^^^^^^^^^^^^^^^^^^^^^\n\nerror: could not compile `app-core` (lib) due to 1 previous error",
			"preview": "[build:1E 1W 142L | error[E0432]: unresolved import ...]",
			"marker": "   Compiling app-core v0.1.0 (/home/dev/project/crates/app-core)\n[build_output: errors=1;warnings=1;lang=rust]\n<<<CCR:f3a1c0d4e5b6a7982c1d0e9f8a7b6c5d4e3f2019|build_output|487>>>",
			"retrieval": {
				"tool": "aphrodite_retrieve",
				"args": { "hash": "f3a1c0d4e5b6a7982c1d0e9f8a7b6c5d4e3f2019" },
				"returns": {
					"found": true,
					"source": "ccr",
					"hash": "f3a1c0d4e5b6a7982c1d0e9f8a7b6c5d4e3f2019",
					"content": "<the full compiler output above, byte-for-byte>"
				}
			},
			"note": "The preview leads with the tallies (error lines counted line-by-line, never substring matches) and surfaces the first real error message, so the model can act on the failure without retrieving. The warning is counted even though the error is the headline."
		},
		{
			"id": "build-clean-skip",
			"title": "Clean build is left raw (CLASSIFIER_SKIP)",
			"category": "build",
			"corpus": true,
			"raw": "   Compiling app v0.1.0 (/home/dev/project/crates/app)\n    Finished `dev` profile [unoptimized + debuginfo] target(s) in 2.41s",
			"preview": "[build:0E 0W 1L]",
			"marker": null,
			"retrieval": null,
			"note": "A build with zero errors and zero warnings is inert: it stays in context untouched and no marker is stored. The preview above is the complete story the classifier would tell, but the skip gate means even that line is unnecessary - the raw two lines cost less than the machinery."
		},
		{
			"id": "test-suite-pass",
			"title": "Test suite run, all green",
			"category": "test",
			"corpus": true,
			"raw": "running 220 tests\ntest result: ok. 220 passed; 0 failed; 1 ignored; 0 measured; finished in 0.31s",
			"preview": "[test:220 pass 0 fail 1 ignored | 0.31s]",
			"marker": "running 220 tests\n[test: passed=220;failed=0;ignored=1;duration=0.31s]\n<<<CCR:b9d2e7410a3f5c8e6d4b2a907c1e3f5a8d0c2b476|test|96>>>",
			"retrieval": {
				"tool": "aphrodite_retrieve",
				"args": { "hash": "b9d2e7410a3f5c8e6d4b2a907c1e3f5a8d0c2b476" },
				"returns": {
					"found": true,
					"source": "ccr",
					"hash": "b9d2e7410a3f5c8e6d4b2a907c1e3f5a8d0c2b476",
					"content": "<the full test output, byte-for-byte>"
				}
			},
			"note": "Test output gets its own semantic arm (detected by running/test line prefixes even when the classifier only reached the generic terminal bucket). Pass/fail/ignored tallies plus the duration in the preview mean a green run rarely needs retrieval."
		},
		{
			"id": "test-suite-fail",
			"title": "Test suite run with a failure",
			"category": "test",
			"corpus": false,
			"raw": "running 48 tests\ntest config::tests::loads_overrides ... FAILED\n\ntest result: FAILED. 47 passed; 1 failed; 0 ignored; finished in 0.12s",
			"preview": "[test:47 pass 1 fail 0 ignored | FAIL config::tests::loads_overrides]",
			"marker": "running 48 tests\n[test: passed=47;failed=1;ignored=0;fail=config::tests::loads_overrides]\n<<<CCR:c5e8a1d3f6b9c2e4a7d0b3f6e9c2a5d8b1e4f730|test|143>>>",
			"retrieval": {
				"tool": "aphrodite_retrieve",
				"args": { "hash": "c5e8a1d3f6b9c2e4a7d0b3f6e9c2a5d8b1e4f730" },
				"returns": {
					"found": true,
					"source": "ccr",
					"hash": "c5e8a1d3f6b9c2e4a7d0b3f6e9c2a5d8b1e4f730",
					"content": "<the full test output, byte-for-byte>"
				}
			},
			"note": "On failure the preview swaps the duration for the FAIL'ing test name - the single fact the next action (open the test, fix the assertion) needs. Fragment with varied numbers; not in the docs catalog."
		},
		{
			"id": "terminal-exit-code",
			"title": "Shell command output with its exit code",
			"category": "terminal",
			"corpus": true,
			"raw": "cargo build --release 2>&1 | tail -n 20\n   Compiling app v0.1.0\n    Finished `release` profile target(s) in 18.03s\nEXIT:0",
			"preview": "[terminal:14L exit code: 0]",
			"marker": "cargo build --release 2>&1 | tail -n 20\n[terminal: lines=14;exit=0;cmd=cargo build --release]\n<<<CCR:d7b4f2a8e1c5d9b3f6a2e8c4b7d1f5a9e3c6b028|terminal|612>>>",
			"retrieval": {
				"tool": "aphrodite_retrieve",
				"args": { "hash": "d7b4f2a8e1c5d9b3f6a2e8c4b7d1f5a9e3c6b028" },
				"returns": {
					"found": true,
					"source": "ccr",
					"hash": "d7b4f2a8e1c5d9b3f6a2e8c4b7d1f5a9e3c6b028",
					"content": "<the full terminal output, byte-for-byte>"
				}
			},
			"note": "Terminal output over the terminal threshold (1024 bytes) compresses to a line that keeps the exit code and line count. Under the session rules the exit code - not the prose - is the source of truth, so the model branches on exit=0 without retrieving."
		},
		{
			"id": "terminal-nonzero",
			"title": "Failing shell command keeps its context",
			"category": "terminal",
			"corpus": false,
			"raw": "./scripts/migrate.sh\nERROR: migration 004 failed: relation \"audit_log\" already exists\nEXIT:1",
			"preview": "[terminal:9L exit code: 1]",
			"marker": "./scripts/migrate.sh\n[terminal: lines=9;exit=1;cmd=./scripts/migrate.sh]\n<<<CCR:e2f9a5c8b1d4e7f0a3c6b9d2e5f8a1c4b7d0e3f951|terminal|204>>>",
			"retrieval": {
				"tool": "aphrodite_retrieve",
				"args": { "hash": "e2f9a5c8b1d4e7f0a3c6b9d2e5f8a1c4b7d0e3f951" },
				"returns": {
					"found": true,
					"source": "ccr",
					"hash": "e2f9a5c8b1d4e7f0a3c6b9d2e5f8a1c4b7d0e3f951",
					"content": "<the full terminal output, byte-for-byte>"
				}
			},
			"note": "Same shape, nonzero exit: the preview still shows only line count and exit code. The lesson is the session rule it encodes - never infer success by scanning human-readable text; a nonzero exit code is the retrieval trigger. Fragment with varied numbers; not in the docs catalog."
		},
		{
			"id": "code-rust-module",
			"title": "Rust source file structure map",
			"category": "code",
			"corpus": true,
			"raw": "//! Cache entry bookkeeping.\nuse std::collections::BTreeMap;\n\npub struct Entry { pub key: String, pub size: usize }\n\nimpl Entry {\n    pub fn new(key: &str) -> Self { ... }\n    pub fn weight(&self) -> usize { ... }\n}\n\npub fn evict(store: &mut BTreeMap<String, Entry>, budget: usize) -> usize { ... }",
			"preview": "[code:3fns|2structs fn main() 414L]",
			"marker": "<<<CCR:a8c3f6e9d2b5a8c1f4e7d0b3a6c9f2e5d8b1a4c773|source_code|842>>>\n[code:3fns|2structs pub fn new(&str) -> Self 26L]\n[meta:lang=rust;fns=3;structs=2;impls=1]",
			"retrieval": {
				"tool": "aphrodite_retrieve",
				"args": { "hash": "a8c3f6e9d2b5a8c1f4e7d0b3a6c9f2e5d8b1a4c773" },
				"returns": {
					"found": true,
					"source": "ccr",
					"hash": "a8c3f6e9d2b5a8c1f4e7d0b3a6c9f2e5d8b1a4c773",
					"content": "<the full source file, byte-for-byte>"
				}
			},
			"note": "The hook/FFI pipeline layout: marker line first, then the structure-map preview (function count, struct count, first signature), then a [meta:] line. Code types sit in the Code tier, so their threshold is the base multiplied by code_multiplier (3.0) - source code gets more headroom before compression than logs of the same size."
		},
		{
			"id": "code-python-module",
			"title": "Python module structure map",
			"category": "code",
			"corpus": false,
			"raw": "import json\nfrom pathlib import Path\n\nclass Manifest:\n    def __init__(self, path):\n        self.path = Path(path)\n\n    def load(self):\n        return json.loads(self.path.read_text())\n\ndef write_manifest(manifest, target):\n    target.write_text(json.dumps(manifest, indent=2))",
			"preview": "[code_python:2fns|1classes def load(self) 12L]",
			"marker": "<<<CCR:b1d4e7a0c3f6b9d2e5a8c1f4b7d0e3a6c9f2b5d812|code_python|340>>>\n[code_python:2fns|1classes def load(self) 12L]\n[meta:lang=python;fns=2;classes=1]",
			"retrieval": {
				"tool": "aphrodite_retrieve",
				"args": { "hash": "b1d4e7a0c3f6b9d2e5a8c1f4b7d0e3a6c9f2b5d812" },
				"returns": {
					"found": true,
					"source": "ccr",
					"hash": "b1d4e7a0c3f6b9d2e5a8c1f4b7d0e3a6c9f2b5d812",
					"content": "<the full source file, byte-for-byte>"
				}
			},
			"note": "Per-language code templates swap the fields: classes instead of structs for Python. The first signature in the preview is a real callable signature, so the model can reason about the API without opening the file. Fragment; not in the docs catalog."
		},
		{
			"id": "grep-search",
			"title": "Ripgrep search across the tree",
			"category": "grep/search",
			"corpus": true,
			"raw": "src/preview.rs:12:pub fn build_preview(content: &str, kind: Kind) -> String {\nsrc/preview.rs:87:fn truncate_preview(s: &str, max: usize) -> String {\nsrc/classify.rs:201:fn detect_semantic_type(lines: &[&str]) -> Option<Kind> {\nsrc/marker.rs:44:pub fn render_marker(...) -> String {",
			"preview": "[grep:4 hits in 3 files | src/preview.rs:12 ...]",
			"marker": "src/preview.rs:12:pub fn build_preview(...)\n[search: hits=4;files=3;first=src/preview.rs:12]\n<<<CCR:c9f2a5d8b1e4c7f0a3d6b9e2c5f8a1d4b7e0c3f629|search|388>>>",
			"retrieval": {
				"tool": "aphrodite_retrieve",
				"args": { "hash": "c9f2a5d8b1e4c7f0a3d6b9e2c5f8a1d4b7e0c3f629" },
				"returns": {
					"found": true,
					"source": "ccr",
					"hash": "c9f2a5d8b1e4c7f0a3d6b9e2c5f8a1d4b7e0c3f629",
					"content": "<the full grep result, byte-for-byte>"
				}
			},
			"note": "The grep arm counts hits and distinct files and carries the first location, so the model can decide to retrieve (it needs the matching lines) or to just re-run a narrower grep. A zero-match search stays raw - the empty result IS the answer."
		},
		{
			"id": "git-status",
			"title": "git status with a dirty tree",
			"category": "git",
			"corpus": true,
			"raw": "On branch main\nChanges not staged for commit:\n	modified:   src/main.rs\n	modified:   src/lib.rs\n\nUntracked files:\n	src/new_module.rs\n	tests/fixture.txt",
			"preview": "[git:2M 2A 1D 3?? | src/x.rs src/y.rs +5 more]",
			"marker": "On branch main\n[git: modified=2;untracked=2]\n<<<CCR:d0e3f6a9c2b5d8e1f4a7c0d3b6e9f2a5c8b1d4e704|git|173>>>",
			"retrieval": {
				"tool": "aphrodite_retrieve",
				"args": { "hash": "d0e3f6a9c2b5d8e1f4a7c0d3b6e9f2a5c8b1d4e704" },
				"returns": {
					"found": true,
					"source": "ccr",
					"hash": "d0e3f6a9c2b5d8e1f4a7c0d3b6e9f2a5c8b1d4e704",
					"content": "<the full git status, byte-for-byte>"
				}
			},
			"note": "The semantic detector upgrades the generic terminal bucket to the git arm by line prefixes (On branch / modified:), then the preview tallies modified/added/deleted/untracked and names the first files. The exact tree shape is a retrieve away."
		},
		{
			"id": "git-log",
			"title": "git log recent commits",
			"category": "git/gitlog",
			"corpus": false,
			"raw": "commit 1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b\nAuthor: Dev <dev@example.com>\nDate:   (anonymized)\n\n    fix: clamp preview width at the char boundary\n\ncommit 9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b\nAuthor: Dev <dev@example.com>\nDate:   (anonymized)\n\n    feat: add per-type preview templates",
			"preview": "[gitlog:2 commits | abc1234 fix... → def5678 feat...]",
			"marker": "commit 1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b\n[gitlog: commits=2]\n<<<CCR:e5b8c1d4f7a0e3b6c9d2f5a8b1e4c7f0a3d6b9e245|gitlog|391>>>",
			"retrieval": {
				"tool": "aphrodite_retrieve",
				"args": { "hash": "e5b8c1d4f7a0e3b6c9d2f5a8b1e4c7f0a3d6b9e245" },
				"returns": {
					"found": true,
					"source": "ccr",
					"hash": "e5b8c1d4f7a0e3b6c9d2f5a8b1e4c7f0a3d6b9e245",
					"content": "<the full git log, byte-for-byte>"
				}
			},
			"note": "The gitlog arm carries the first-to-last commit arc (short hash + subject on each end) - the shape of history, not the content of it. The example content here is generic; real author identities from any session are never reproduced."
		},
		{
			"id": "diff-patch",
			"title": "A diff of changed files",
			"category": "diff",
			"corpus": true,
			"raw": "diff --git a/src/main.rs b/src/main.rs\nindex 3f2a1b0..9c8d7e6 100644\n--- a/src/main.rs\n+++ b/src/main.rs\n@@ -12,7 +12,9 @@ fn main() {\n-    let threads = 4;\n+    let threads = num_cpus::get();\n+\n+    assert!(threads > 0);\ndiff --git a/Cargo.toml b/Cargo.toml\n--- a/Cargo.toml\n+++ b/Cargo.toml\n@@\n+[dependencies]\n+num_cpus = \"1\"",
			"preview": "[diff:2F +7/-3 12L | src/main.rs Cargo.toml +N more]",
			"marker": "diff --git a/src/main.rs b/src/main.rs\n[diff: files=2;plus=7;minus=3]\n<<<CCR:f8a1d4c7b0e3f6a9c2d5b8e1f4a7c0d3b6e9f2a806|diff|452>>>",
			"retrieval": {
				"tool": "aphrodite_retrieve",
				"args": { "hash": "f8a1d4c7b0e3f6a9c2d5b8e1f4a7c0d3b6e9f2a806" },
				"returns": {
					"found": true,
					"source": "ccr",
					"hash": "f8a1d4c7b0e3f6a9c2d5b8e1f4a7c0d3b6e9f2a806",
					"content": "<the full diff, byte-for-byte>"
				}
			},
			"note": "Diff previews name the changed files and the plus/minus tallies. The model reviews shape first (how many files, how big) and retrieves only when it must read the actual hunks - e.g. before writing a review comment."
		},
		{
			"id": "json-payload",
			"title": "A JSON API response",
			"category": "json/table",
			"corpus": true,
			"raw": "[\n  {\"id\": 1, \"status\": \"ok\", \"duration_ms\": 42},\n  {\"id\": 2, \"status\": \"ok\", \"duration_ms\": 17},\n  {\"id\": 3, \"status\": \"degraded\", \"duration_ms\": 210}\n]",
			"preview": "[json:5items 3L]",
			"marker": "[\n[json: items=3]\n<<<CCR:a2c5e8b1d4f7a0c3e6b9d2a5c8e1f4b7d0c3e6f987|json|148>>>",
			"retrieval": {
				"tool": "aphrodite_retrieve",
				"args": { "hash": "a2c5e8b1d4f7a0c3e6b9d2a5c8e1f4b7d0c3e6f987" },
				"returns": {
					"found": true,
					"source": "ccr",
					"hash": "a2c5e8b1d4f7a0c3e6b9d2a5c8e1f4b7d0c3e6f987",
					"content": "<the full JSON, byte-for-byte>"
				}
			},
			"note": "JSON lists show item counts, JSON objects show key counts. Note the deliberate exclusion: a wrapper envelope carrying output/exit_code/success keys is NOT re-tagged as json - its raw-JSON preview survives, because that envelope is the tool contract the model needs to read."
		},
		{
			"id": "linter-output",
			"title": "Linter / compiler diagnostics",
			"category": "error/linter",
			"corpus": false,
			"raw": "warning: variable does not need to be mutable\n --> src/store.rs:38:9\n  |\n38 |     let mut total = 0;\n  |         ---- help: remove `mut`\n\nwarning: 1 warning emitted\n\nerror: could not compile `store` (lib) due to 1 previous error",
			"preview": "[error:could not compile `store` (lib) due to 1 previous error]",
			"marker": "warning: variable does not need to be mutable\n[error: code=1;loc=src/store.rs:38]\n<<<CCR:b3d6e9c2f5a8b1d4e7c0f3a6d9c2f5e8b1d4a7c063|error|296>>>",
			"retrieval": {
				"tool": "aphrodite_retrieve",
				"args": { "hash": "b3d6e9c2f5a8b1d4e7c0f3a6d9c2f5e8b1d4a7c063" },
				"returns": {
					"found": true,
					"source": "ccr",
					"hash": "b3d6e9c2f5a8b1d4e7c0f3a6d9c2f5e8b1d4a7c063",
					"content": "<the full diagnostics, byte-for-byte>"
				}
			},
			"note": "The error arm puts the first error message itself into the preview - the one string that lets the model start fixing without a round-trip. Linter output (rustc/clippy/eslint/tsc shapes) lands in this arm via the classifier's first-line and tool-name detection. Fragment; not in the docs catalog."
		},
		{
			"id": "server-log",
			"title": "A running server's log tail",
			"category": "log",
			"corpus": false,
			"raw": "[INFO] server listening on 127.0.0.1:8080\n[DEBUG] connection accepted from 10.0.0.4\n[WARN] slow query: 1240ms /api/report\n[ERROR] upstream timeout after 30s\n[INFO] retry scheduled in 2s",
			"preview": "[log:1E 1W 5L]",
			"marker": "[INFO] server listening on 127.0.0.1:8080\n[log: entries=5;errors=1;warnings=1]\n<<<CCR:c4f7a0d3e6b9c2f5a8d1e4c7f0a3d6b9e2c5f8a137|log|187>>>",
			"retrieval": {
				"tool": "aphrodite_retrieve",
				"args": { "hash": "c4f7a0d3e6b9c2f5a8d1e4c7f0a3d6b9e2c5f8a137" },
				"returns": {
					"found": true,
					"source": "ccr",
					"hash": "c4f7a0d3e6b9c2f5a8d1e4c7f0a3d6b9e2c5f8a137",
					"content": "<the full log tail, byte-for-byte>"
				}
			},
			"note": "Log detection is marker-based: bracketed INFO/WARN/ERROR/DEBUG levels or timestamp-shaped lines. The preview tallies entries, errors and warnings - a quiet log is visible at a glance, and the interesting lines are one retrieve away."
		},
		{
			"id": "tool-relay-async-callback",
			"title": "Tool relay: async call with a callback URL",
			"category": "tool-relay",
			"corpus": false,
			"raw": "POST /tool/relay\n{\n    \"tool\": \"aphrodite_compress\",\n    \"params\": { \"content\": \"<bulk build log>\", \"type\": \"build_output\" },\n    \"callback_url\": \"https://hermes.internal/callback\"\n}\n\n--- immediate reply ---\n{\"success\": true, \"queued\": true}\n\n--- later, POST https://hermes.internal/callback ---\n{\"tool\": \"aphrodite_compress\", \"result\": {\"hash\": \"d5a8c1f4b7e0d3a6c9f2b5e8a1d4c7f0b3e6a9d231\", \"type\": \"build_output\", \"size\": 1467, \"marker\": \"<<<CCR:...>>>\"}}",
			"preview": "[process:pid=4821 up=6m 14L]",
			"marker": "{\"tool\": \"aphrodite_compress\", \"queued\": true}\n[process: pid=4821;queued=1]\n<<<CCR:d6b9e2c5f8a1d4b7e0c3f6a9d2e5b8c1f4a7d0e358|json|299>>>",
			"retrieval": {
				"tool": "aphrodite_retrieve",
				"args": { "hash": "d6b9e2c5f8a1d4b7e0c3f6a9d2e5b8c1f4a7d0e358" },
				"returns": {
					"found": true,
					"source": "ccr",
					"hash": "d6b9e2c5f8a1d4b7e0c3f6a9d2e5b8c1f4a7d0e358",
					"content": "<the relayed result envelope, byte-for-byte>"
				}
			},
			"note": "A callback_url turns the synchronous relay call into a fire-and-forget: an immediate queued reply, then the real result POSTed to the callback (https only, 5s timeout, no auth on the callback POST). Only the aphrodite_* relay tools are accepted; anything else is an error. The result itself is compact metadata, so it stays raw through the hook pipeline."
		},
		{
			"id": "directive-injection",
			"title": "The per-turn directive block",
			"category": "directives",
			"corpus": false,
			"raw": "pre_llm_call, turn 14, injected context (budget 2600 chars):\n\n[directives: focus | foresight]\nAphrodite directives - one primary action per turn; resolve the markers\nthe next action depends on; prefetch what turn 15 will need.\n\n[nudge: 3 unresolved markers from turn 13]\n[recall: 2 entries match this turn's files]\n\nSections drop bottom-up when over budget; directives and nudges never drop.",
			"preview": "[directives: focus | foresight]",
			"marker": null,
			"retrieval": null,
			"note": "Directives are short behavioral .md files injected verbatim every turn, placed at the top of the injected context ahead of nudges and the recall catalog. The active set starts as [focus, foresight] and can be swapped mid-session via aphrodite_directive('swap', 'explore') - no config edit. The recall catalog is the first section sacrificed when the 2600-char flow budget is tight."
		},
		{
			"id": "chain-split",
			"title": "Chain splitting a compound command",
			"category": "chain-split",
			"corpus": false,
			"raw": "cd project && cargo build --release && cargo test 2>&1\n   Compiling app v0.1.0\n    Finished `release` profile target(s) in 18.03s\n\nrunning 220 tests\ntest result: ok. 220 passed; 0 failed; 1 ignored; 0.31s",
			"preview": "[chain:3 | cargo build --release && cargo test ...]",
			"marker": "cd project && cargo build --release && cargo test\n[chain: segments=3]\n<<<CCR:e7c0f3a6d9b2e5c8f1a4d7b0c3f6e9a2d5b8c1f479|terminal|398>>>\n--- per-segment markers ---\n<<<CCR:f8a1...|build_output|210>>>\n<<<CCR:a9b2...|test|188>>>",
			"retrieval": {
				"tool": "aphrodite_retrieve",
				"args": { "hash": "e7c0f3a6d9b2e5c8f1a4d7b0c3f6e9a2d5b8c1f479" },
				"returns": {
					"found": true,
					"source": "ccr",
					"hash": "e7c0f3a6d9b2e5c8f1a4d7b0c3f6e9a2d5b8c1f479",
					"content": "<the full combined output, byte-for-byte>"
				}
			},
			"note": "Opt-in (chain_split=false by default, because invisible segment markers pollute redirected stdout). With it on, a command with enough segments is rewritten so each segment's output compresses into its own marker - the model sees one build preview and one test preview instead of one blob. Constructs that would corrupt control flow (heredocs, loops spanning segments) are left untouched. Fragment; not in the docs catalog."
		},
		{
			"id": "threshold-tiers",
			"title": "What stays raw vs compressed at the defaults",
			"category": "thresholds",
			"corpus": false,
			"raw": "Defaults in play (aphrodite.toml):\n  tool_threshold_token = 512      (token proxy: compress above 512 bytes)\n  tool_threshold_cache = 4096     (cache proxy: compress above 4096 bytes)\n  terminal_threshold   = 1024     (terminal hook: compress above 1024 bytes)\n  inline_threshold     = 2048     (above this, store instead of inline zlib)\n  code_multiplier      = 3.0      (code tier: base threshold x 3)\n  engine_threshold_pct = 45       (context compression engages at 45% fill)\n\nSame 600-byte module docstring:\n  - through the token proxy (512): COMPRESSED to a marker\n  - through the cache proxy (4096): stays RAW\n  - as source code (tier 512 x 3.0 = 1536): stays RAW",
			"preview": "[text:3L 50B | some unrecognizable prose here]",
			"marker": "<<<CCR:b0c3f6e9a2d5b8e1c4f7a0d3b6e9c2f5a8d1e4b090|text|604>>>",
			"retrieval": {
				"tool": "aphrodite_retrieve",
				"args": { "hash": "b0c3f6e9a2d5b8e1c4f7a0d3b6e9c2f5a8d1e4b090" },
				"returns": {
					"found": true,
					"source": "ccr",
					"hash": "b0c3f6e9a2d5b8e1c4f7a0d3b6e9c2f5a8d1e4b090",
					"content": "<the full text, byte-for-byte>"
				}
			},
			"note": "The tier lesson: whether a given output compresses depends on which surface sees it. The token proxy is aggressive (512), the cache proxy tolerant (4096), terminal output has its own gate (1024), code gets 3x headroom, and the generic fallback preview is the only thing a text blob shows. Essential tools (read_file, memory, skill_view...) and the aphrodite_* tools themselves are always raw regardless of size."
		},
		{
			"id": "marker-vs-skippable",
			"title": "Below threshold: raw; at threshold: marker",
			"category": "thresholds",
			"corpus": true,
			"raw": "src/preview.rs:12:pub fn build_preview(content: &str, kind: Kind) -> String {",
			"preview": "[grep:4 hits in 3 files | src/preview.rs:12 ...]",
			"marker": null,
			"retrieval": null,
			"note": "A one-line grep result is far under every threshold: it passes through untouched, no marker, no storage. The same search across a large tree (the grep-search example) crosses the line and becomes a marker. Compression is never a judgment call - it is a byte count against the surface's threshold."
		}
	]
};
// Source/pages/showcase.astro
var showcase_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Showcase,
	file: () => $$file,
	url: () => $$url
});
var $$Showcase = createComponent(($$result, $$props, $$slots) => {
	const Bank = Examples_default;
	function MarkerParts(Marker) {
		if (!Marker) return null;
		const Match = Marker.match(/<<<CCR:([0-9a-f]+)\|([a-z_]+)\|(\d+)>>>/);
		return Match ? {
			Hash: Match[1],
			Type: Match[2],
			Size: Match[3]
		} : null;
	}
	function EscapeAngle(Text) {
		return Text.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
	}
	function RawLines(Raw) {
		if (!Raw) return [];
		return Raw.split("\n").map((Line, Index) => {
			return {
				Text: Line,
				Tone: /error|fail|warn|panic|traceback/i.test(Line) ? "text-stamped-canary" : Index === 0 ? "text-bone-newsprint" : Index === Raw.split("\n").length - 1 ? "opacity-70" : "opacity-40"
			};
		});
	}
	const Categories = [...new Set(Bank.examples.map((Example) => Example.category))];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "SHOWCASE // APHRODITE",
		"Description": "The plugin in action: 20 anonymized worked examples - build, test, terminal, code, grep, git, diff, json, error, log, the tool relay, the directives, the chain split, and the threshold tiers - each showing the raw stream, the enriched preview, the retrieval round-trip and the threshold decision."
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-24 px-5 py-32 sm:px-8 lg:gap-40 lg:px-14 lg:py-56"> ${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, {})} <!-- HERO --> <header class="relative flex w-full flex-col items-start"> <div class="mb-12 -rotate-1 border border-black bg-raw-blood px-3 py-1 text-base font-black uppercase tracking-widest text-bone-white shadow-[3px_3px_0px_#000]">
SHOWCASE // THE PLUGIN IN ACTION
</div> <h1 class="font-headline text-3xl font-black uppercase tracking-tight text-bone-white drop-shadow-[4px_4px_0px_#520612] sm:text-5xl">
The plugin, worked
</h1> <p class="mt-6 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Every example below is a real behavior of the pipeline dressed in generic content:
				what the agent sends (the raw stream), what it sees back (the enriched preview),
				how the bytes come home (the retrieval round-trip), and why the thresholds made
				that decision.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
All previews marked as corpus lines are byte-identical to the docs catalog; the
				rest are faithful fragments.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Anonymized throughout - no names, no secrets, no real sessions.
</p> <div class="mt-8 flex max-w-4xl flex-wrap items-center gap-4"> <span class="-rotate-2 border-2 border-black bg-raw-blood px-4 py-1.5 font-mono text-base font-black uppercase tracking-widest text-bone-white shadow-[4px_4px_0px_#000]"> ${Bank.examples.length} WORKED EXAMPLES
</span> <span class="rotate-1 border-2 border-black bg-carbon-void px-4 py-1.5 font-mono text-base font-bold uppercase tracking-widest text-weathered-teal shadow-[4px_4px_0px_#000]"> ${Categories.length} CATEGORIES
</span> </div> </header> <!-- THE DEFAULTS IN PLAY --> <section class="relative w-full"> <div class="mb-12 -rotate-1 border border-black bg-raw-blood px-3 py-1 text-base font-black uppercase tracking-widest text-bone-white shadow-[3px_3px_0px_#000]">
THE DEFAULTS // APHRODITE.TOML
</div> <div class="zine-box-crimson w-full rotate-[0.8deg] border-4 border-blood-crimson bg-carbon-void p-8 transition-transform duration-300 hover:rotate-0 sm:p-12"> <p class="font-mono text-base leading-loose text-bone-newsprint"> ${Object.entries(Bank.defaults).map(([Key, Value]) => renderTemplate`<span class="mr-6 inline-block whitespace-nowrap"> <span class="text-zinc-dust">${Key}</span> <span class="text-weathered-teal"> = ${String(Value)}</span> </span>`)} </p> <p class="mt-6 border-t border-oxblood-dark pt-4 font-body text-base leading-relaxed text-bone-newsprint">
These seven numbers decide every example below.
</p> <p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint">
It is the reason compression is never a judgment call: it is a byte count against
					the surface's threshold, and the essential tools plus the
<code class="font-mono text-base text-weathered-teal">aphrodite_*</code>
tools themselves are always raw regardless of size.
</p> </div> </section> <!-- FILTER BAR --> <section class="relative w-full" data-registry> <div class="mb-12 -rotate-1 border border-black bg-raw-blood px-3 py-1 text-base font-black uppercase tracking-widest text-bone-white shadow-[3px_3px_0px_#000]">
THE REGISTRY // FILTER BY CATEGORY, SEARCH BY KEYWORD
</div> <div class="zine-box-crimson relative -rotate-[0.6deg] border-4 border-blood-crimson bg-carbon-void p-6 transition-transform duration-300 hover:rotate-0 sm:p-8"> <div class="flex flex-wrap items-center gap-2" data-filters> <button type="button" data-filter="*" class="border-2 border-black bg-raw-blood px-3 py-1 font-mono text-base font-black uppercase tracking-widest text-bone-white shadow-[2px_2px_0px_#000]">
ALL · ${Bank.examples.length} </button> ${Categories.map((Category) => renderTemplate`<button type="button"${addAttribute(Category, "data-filter")} class="border-2 border-black bg-soot-black px-3 py-1 font-mono text-base font-bold uppercase tracking-widest text-zinc-dust shadow-[2px_2px_0px_#000] transition-colors hover:text-bone-white"> ${Category} </button>`)} </div> <input type="search" placeholder="SEARCH THE EXAMPLES..." aria-label="Search the examples" data-search class="mt-5 w-full border-2 border-oxblood-dark bg-soot-black px-4 py-2 font-mono text-base tracking-widest text-bone-white placeholder:text-zinc-dust focus:border-weathered-teal focus:outline-none"> <p class="mt-4 font-mono text-base tracking-widest text-zinc-dust" data-count>
SHOWING ${Bank.examples.length} OF ${Bank.examples.length} </p> </div> </section> <!-- THE EXAMPLE MODULES --> <section class="relative flex w-full flex-col gap-28 lg:gap-36" data-examples> <div class="w-full"> <div class="mb-12 -rotate-1 border border-black bg-raw-blood px-3 py-1 text-base font-black uppercase tracking-widest text-bone-white shadow-[3px_3px_0px_#000]">
THE EXAMPLES // ONE SHAPE EACH
</div> <h2 class="font-headline text-lg font-black uppercase text-bone-white sm:text-xl"> ${Bank.examples.length} worked examples
</h2> </div> ${Bank.examples.map((Example, Index) => {
		const Parts = MarkerParts(Example.marker);
		const Hash = Parts ? EscapeAngle(`<<<CCR:${Parts.Hash}|${Parts.Type}|${Parts.Size}>>>`) : null;
		const Lines = RawLines(Example.raw);
		const Rotate = Index % 2 === 0 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]";
		return renderTemplate`<article${addAttribute(Example.id, "id")} data-example${addAttribute(Example.category, "data-category")}${addAttribute(`${Example.title} ${Example.category} ${Example.preview ?? ""} ${Example.note}`.toLowerCase(), "data-search")}${addAttribute(`relative w-full scroll-mt-24 lg:w-11/12 ${Index % 2 === 0 ? "lg:self-start" : "lg:self-end"}`, "class")}> <div${addAttribute(`zine-box-crimson relative w-full border-4 border-blood-crimson bg-carbon-void p-6 transition-transform duration-300 hover:rotate-0 sm:p-10 ${Rotate}`, "class")}> ${renderComponent($$result, "ZineTape", $$ZineTape, {
			"Label": `EX ${String(Index + 1).padStart(2, "0")} // ${Example.category.toUpperCase()}`,
			"Color": Example.corpus ? "teal" : "bone",
			"Side": Index % 2 === 0 ? "left" : "right"
		})} <div class="mt-4 flex flex-wrap items-baseline justify-between gap-3"> <h3 class="font-headline text-xl font-black uppercase text-bone-white sm:text-2xl"> ${Example.title} </h3> <span${addAttribute(`border border-oxblood-dark px-2 py-0.5 font-mono text-base font-black uppercase tracking-widest ${Example.corpus ? "text-weathered-teal" : "text-stamped-canary"}`, "class")}> ${Example.corpus ? "CORPUS-EXACT PREVIEW" : "GENERIC FRAGMENT"} </span> </div> <!-- RAW STREAM: the generic input, with the suppression fade --> <div class="mt-8"> <div class="mb-2 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
RAW STREAM // WHAT THE AGENT SENT
</div> <div class="ccr-marker border border-oxblood-dark bg-soot-black p-3.5 font-mono text-base leading-relaxed"> ${Lines.length === 0 ? renderTemplate`<div class="opacity-70">(no raw stream - the block is generated, not captured)</div>` : Lines.map(({ Text: Raw, Tone }) => renderTemplate`<div${addAttribute(Tone, "class")}>${Raw || "\xA0"}</div>`)} </div> </div> <!-- ENRICHED PREVIEW: the corpus-exact line + the teal CCR hash --> <div class="mt-5"> ${renderComponent($$result, "ZinePreview", $$ZinePreview, {
			"Label": "ENRICHED PREVIEW // WHAT THE AGENT SEES",
			"Result": Example.preview ?? "(stays raw - no preview line)",
			"Hash": Hash ?? void 0,
			"Color": "canary"
		})} </div> <!-- RETRIEVAL: the byte-exact round-trip --> ${Example.retrieval && renderTemplate`<div class="mt-5 border border-oxblood-dark bg-asphalt-panel p-3.5"> <div class="mb-2 font-mono text-base font-black uppercase tracking-widest text-weathered-teal">
RETRIEVAL // THE BYTE-EXACT ROUND-TRIP
</div> <div class="font-mono text-base leading-relaxed text-bone-newsprint"> <div> <span class="text-weathered-teal">${Example.retrieval.tool}</span> <span class="text-zinc-dust">(hash: "</span> <span class="text-stamped-canary">${Example.retrieval.args.hash}</span> <span class="text-zinc-dust">")</span> </div> <div class="text-zinc-dust">
→ ${"{ found: true, source: \"ccr\", content: the original bytes, byte-for-byte }"} </div> <div class="pt-1 text-zinc-dust">
Reads are workspace-confined and capped at 10 MiB; a hash resolves
											only by exact match - truncated hashes never resolve.
</div> </div> </div>`} <!-- BEHAVIOR LESSON: the threshold decision --> <div class="mt-6 border-l-4 border-raw-blood pl-4"> <div class="font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
BEHAVIOR LESSON // THE THRESHOLD DECISION
</div> <p class="mt-2 font-body text-base leading-relaxed text-bone-newsprint"> ${Example.note} </p> </div> </div> </article>`;
	})} </section> <!-- THE TRAVERSALS: the interactive flows, agent view vs system path --> <section class="relative flex w-full flex-col gap-28 lg:gap-36"> <div class="w-full"> <div class="mb-12 -rotate-1 border border-black bg-stamped-canary px-3 py-1 text-base font-black uppercase tracking-widest text-soot-black shadow-[3px_3px_0px_#000]">
THE TRAVERSALS // AGENT-VIEW vs SYSTEM-PATH, STEP BY STEP
</div> <h2 class="mb-4 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
The traversals
</h2> <p class="max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The five pipelines above are worked examples; these are the pipes they run
					through.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Each traversal steps through its hook or endpoint with two synchronized panes -
					what the agent sees, what the system does - and every step carries its source
					anchor.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Press PLAY to watch one run.
</p> </div> <!-- Traversal A: tool-output compression --> <div class="w-full lg:w-11/12 lg:self-start"> ${renderComponent($$result, "ZineFlow", $$ZineFlow, {
		"Title": "TRAVERSAL A // TRANSFORM_TOOL_RESULT",
		"Complete": "COMPRESSED · RETRIEVABLE",
		"Steps": [
			{
				Title: "THE RESULT ARRIVES",
				Agent: [
					"user: build it and show me what's wrong",
					"» tool result: 48,213 characters arrive raw in the transcript",
					"· at this point the agent sees the full bytes, nothing special"
				],
				System: ["telemetry first: status, error type/message, arguments and duration recorded into the tool-event ring (feeds the error-loop and phase detectors)", "empty results are skipped here"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:69-75"
			},
			{
				Title: "FILE REFERENCES TRACKED",
				Agent: "nothing changes yet - the output is untouched",
				System: ["read_file and search_files results are recorded for aphrodite_files and the recall catalog BEFORE the skip gates", "· they feed the catalog even when never compressed"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:92-94"
			},
			{
				Title: "THE SKIP GATES",
				Agent: [
					"essential tools stay raw:",
					"skill_view, skills_list, skill_manage, memory,",
					"session_search, read_file, read_terminal"
				],
				System: [
					"gates in order: empty result; essential set; Aphrodite's own tools and headroom helpers (compressing aphrodite_retrieve would replace resolved content with another marker)",
					"· below the tool threshold (default 4,096 chars; 0 disables the gate)",
					"· raw stays raw when it matters"
				],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:76-84"
			},
			{
				Title: "CLASSIFY",
				Agent: ["the output now has a name - and the name decides everything downstream", "» [build:1E 1W 142L | error[E0432]: unresolved import ...]"],
				System: ["the content-type detector assigns a type; generic text/log/plain results get a semantic upgrade (git status, ls, test, grep) so the preview carries high-signal shape", "· preview shapes: the enriched preview catalog, docs/proxy/compression.md:228-241"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:85-88"
			},
			{
				Title: "THRESHOLD + EMA",
				Agent: "invisible - the agent never tunes this by hand",
				System: ["the per-type threshold (EMA auto-tuned by what past turns saved) decides compress vs. pass-through", "· env overrides TOML overrides the default"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:139-146"
			},
			{
				Title: "STORE",
				Agent: "still just the output - but the receipt is being written",
				System: [
					"the content is hashed (BLAKE3) and stored in the inline session store",
					"→ durable backend: SQLite at ~/.hermes/aphrodite/ccr.db (docs/install/macos-linux.md:129)",
					"the marker's hash is the address of the original bytes, taken over the ORIGINAL, never a wrapper's extracted view (the v1.3.2 losslessness law)"
				],
				Anchor: Link(OurRepo, "CHANGELOG.md"),
				AnchorLabel: "CHANGELOG v1.3.2"
			},
			{
				Title: "THE SWAP",
				Agent: [
					"the tool output is now a preview line plus a marker - roughly fifteen tokens",
					"» [build:1E 1W 142L | error[E0432]: unresolved import ...]",
					"» <<<CCR:abc123|build_error|67097>>>",
					"· the 48,213 characters are gone from the transcript - retrievable by hash"
				],
				System: ["Hermes swaps the tool output for the marker; the transcript carries hash, type, size instead of the bytes"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:89-91"
			},
			{
				Title: "DECIDE / RETRIEVE",
				Agent: [
					"the agent - not the engine - spends the budget: call aphrodite_retrieve only if the preview did not answer the question",
					"» aphrodite_retrieve(hash: \"abc123...\")",
					"→ { found: true, source: \"ccr\", content: the original bytes, truncated: false }"
				],
				System: ["retrieval returns the exact original bytes, byte-exact by construction; the loop closes with nothing lost", "→ no zstd on this path; backends store and return content verbatim as UTF-8 strings, so a trailing newline survives (retrieve.md:184-212)"],
				Anchor: Link(OurRepo, "docs/api/retrieve.md"),
				AnchorLabel: "retrieve.md"
			}
		]
	})} </div> <!-- Traversal B: terminal transform --> <div class="w-full lg:w-10/12 lg:self-end"> ${renderComponent($$result, "ZineFlow", $$ZineFlow, {
		"Title": "TRAVERSAL B // TRANSFORM_TERMINAL_OUTPUT",
		"Complete": "TERMINAL HANDLED",
		"Steps": [
			{
				Title: "THE OUTPUT ARRIVES",
				Agent: [
					"user: run the tests again",
					"» the terminal's stdout and its exit code arrive as one blob",
					"· short output would stay right here, verbatim"
				],
				System: ["telemetry: the command and return code are recorded; a non-zero exit code marks the event as a failure and feeds the error-loop detector"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:98-101"
			},
			{
				Title: "CHAIN SPLIT FIRST",
				Agent: ["if pre_tool_call marked the segments, each one is about to get its own receipt", "» cd x && cargo build && cargo test → three compact previews, not one blob"],
				System: ["when chain splitting is enabled and the output carries the segment markers, each segment is compressed into its own marker - unconditional, BEFORE the threshold gate, so marked output never leaks raw. Per-segment error hints merge into previews"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:102-106"
			},
			{
				Title: "THE THRESHOLD GATE",
				Agent: "short output stays exactly as it was",
				System: ["unmarked output below the terminal threshold (default 1,024 characters; 0 disables the gate) passes through untouched"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:107-108"
			},
			{
				Title: "CLASSIFY",
				Agent: ["a failed run is named terminal - the type keeps errors visible longest", "» [terminal:14L exit code: 0]"],
				System: ["output containing 'exit code:' or 'Error:' is typed terminal; other output gets the normal content-type detection with the same semantic upgrade as tool results"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:109-111"
			},
			{
				Title: "STORE + THE NUDGE LOOP",
				Agent: ["next turn opens with a nudge, not a surprise", "→ a poll-worker status nudge for the failed task surfaces at the next pre_llm_call"],
				System: ["above-threshold content is hashed, stored (inline session store, backed by the durable ~/.hermes/aphrodite/ccr.db), and replaced by a marker", "the failure recorded in step 1 surfaces as a poll-worker status nudge at the next pre_llm_call"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:111-112,114-121"
			}
		]
	})} </div> <!-- Traversal C: retrieval round-trip --> <div class="w-full lg:w-10/12 lg:self-start"> ${renderComponent($$result, "ZineFlow", $$ZineFlow, {
		"Title": "TRAVERSAL C // THE RETRIEVAL ROUND-TRIP",
		"Complete": "BYTE-EXACT",
		"Steps": [
			{
				Title: "THE CALL",
				Agent: [
					"the agent hands back the marker it kept - or just the hash",
					"» aphrodite_retrieve(hash: \"abc123...\")",
					"· truncated hashes never resolve - exact match only"
				],
				System: ["the hash argument is normalized before lookup: a type/size marker-body suffix and surrounding whitespace are stripped, so a hash echoed back in full marker form still resolves", "→ normalize_hash - strip |type|size suffix, trim (POST /retrieve with hash, query?, offset?, limit?)"],
				Anchor: Link(OurRepo, "docs/api/retrieve.md"),
				AnchorLabel: "retrieve.md:41-43"
			},
			{
				Title: "LOOKUP",
				Agent: ["one answer either way: found or not", "→ { found: true, source: \"ccr\", content: \"original content...\", truncated: false }"],
				System: [
					"the inline session store is checked first (inline_ccr.get); on a miss, ccr_get on the CCR backend (SQLite/In-memory via a blocking thread)",
					"→ durable backend: SQLite at ~/.hermes/aphrodite/ccr.db (docs/install/macos-linux.md:129)",
					"the success path always reports source 'ccr' regardless of which store served the content"
				],
				Anchor: Link(OurRepo, "docs/api/retrieve.md"),
				AnchorLabel: "retrieve.md:196-212"
			},
			{
				Title: "PAGINATION",
				Agent: [
					"a window, or the whole thing",
					"→ [lines 101-200/1421] header + truncated: true",
					"limit: 0 asks for the FULL document with no cap - the round-trip contract"
				],
				System: ["any explicit limit, including one above 10,000, is clamped to a 10,000-line server cap; a windowed result carries a lines a-b/total header and truncated: true, so a caller can tell truncated from genuinely short"],
				Anchor: Link(OurRepo, "docs/api/retrieve.md"),
				AnchorLabel: "retrieve.md:184-192"
			},
			{
				Title: "BYTE-EXACT",
				Agent: ["the original bytes return unchanged - a trailing newline included", "→ the body hashes back to the marker's own hash"],
				System: ["a full-document retrieval returns the exact original bytes: the lossy lines/join round-trip is skipped entirely", "→ no zstd on this path: backends store and return content verbatim as UTF-8 strings, so retrieval is byte-exact by construction"],
				Anchor: Link(OurRepo, "docs/api/retrieve.md"),
				AnchorLabel: "retrieve.md:184-188"
			}
		]
	})} </div> <!-- Traversal G: the proxy lane --> <div class="w-full lg:w-11/12 lg:self-end"> ${renderComponent($$result, "ZineFlow", $$ZineFlow, {
		"Title": "TRAVERSAL G // THE PROXY LANE",
		"Complete": "COMPRESSED OR PASSED THROUGH",
		"Steps": [
			{
				Title: "POST /V1/CHAT/COMPLETIONS",
				Agent: [
					"an ordinary OpenAI-compatible client - no Aphrodite plugin required",
					"» POST /v1/chat/completions (headers + body)",
					"· a cache hit answers early with X-Aphrodite-Cache: HIT"
				],
				System: ["the request cache is checked first (cache_key_from_body; skipped when stream is true) - a hit returns early with X-Aphrodite-Cache: HIT"],
				Anchor: Link(OurRepo, "docs/architecture/02-chat-compression.md"),
				AnchorLabel: "02-chat-compression.md"
			},
			{
				Title: "UPSTREAM",
				Agent: ["the request is forwarded unchanged", "· the response comes back with headers and body"],
				System: ["forwarded with at most 3 connection retries"],
				Anchor: Link(OurRepo, "docs/architecture/02-chat-compression.md"),
				AnchorLabel: "02-chat-compression.md"
			},
			{
				Title: "SSE BYPASS",
				Agent: ["a streaming answer streams, untouched", "· no compression on the SSE path - long-running streams are never killed mid-answer"],
				System: ["a text/event-stream content-type passes through as a raw stream - NO compression on the SSE path"],
				Anchor: Link(OurRepo, "docs/architecture/02-chat-compression.md"),
				AnchorLabel: "02-chat-compression.md"
			},
			{
				Title: "COMPRESS EACH MESSAGE.CONTENT",
				Agent: [
					"large assistant/tool text comes back as preview + marker",
					"» [code:3fns|2structs fn main() 414L]",
					"» <<<CCR:hash|type|size>>>"
				],
				System: ["each choice.message.content (string) is classified, its threshold is threshold_for(type).max(base) scaled by the x-headroom-budget multiplier (clamped 0.50..1.0); over-threshold content is BLAKE3-hashed, deduped via ccr_get, stored, and swapped for the marker; the ratio feeds the EMA"],
				Anchor: Link(OurRepo, "docs/architecture/02-chat-compression.md"),
				AnchorLabel: "02-chat-compression.md"
			},
			{
				Title: "TOOL_CALLS NEVER",
				Agent: ["the client's tool calls keep working - always", "· tool_calls[].function.arguments arrives exactly as the client sent it"],
				System: ["the loop reads message.content only: tool_calls[].function.arguments is client-executable JSON, not model-facing prose, and is never compressed. The v1.3.2 fix - before it, every OpenAI-tools client broke through the proxy"],
				Anchor: Link(OurRepo, "CHANGELOG.md"),
				AnchorLabel: "CHANGELOG v1.3.2"
			},
			{
				Title: "TWO PIPELINES, SHARED WIRES",
				Agent: ["same marker format, whichever lane compressed it", "» <<<CCR:hash|type|size>>> resolves the same way on both lanes"],
				System: ["the proxy path never calls the staged transform pipeline (transforms::detect, stage2, struct_extract) - those run only on the Hermes hook path", "→ the two pipelines share the BLAKE3 compute_key and the marker wire format, but nothing else"],
				Anchor: Link(OurRepo, "docs/architecture/02-chat-compression.md"),
				AnchorLabel: "02-chat-compression.md"
			}
		]
	})} </div> <!-- Traversal H: chain split --> <div class="w-full lg:w-10/12 lg:self-start"> ${renderComponent($$result, "ZineFlow", $$ZineFlow, {
		"Title": "TRAVERSAL H // THE CHAIN SPLIT",
		"Complete": "SEGMENTED",
		"Steps": [
			{
				Title: "THE PENDING CALL",
				Agent: ["the agent asks for one compound command: cd x && cargo build && cargo test", "· the transcript shows the call exactly as it was sent"],
				System: ["pre_tool_call fires before the tool executes and may rewrite the pending call"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:59-65"
			},
			{
				Title: "FEATURE CHECK",
				Agent: ["off by default - opt-in only", "· APHRODITE_CHAIN_SPLIT=1 or chain_split = true"],
				System: ["chain splitting is enabled by APHRODITE_CHAIN_SPLIT=1 or chain_split = true (default off), and only when the command has at least chain_split_min_segments segments"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:63-65"
			},
			{
				Title: "THE REWRITE",
				Agent: ["the command looks the same - the markers are invisible", "» the executed command carries segment markers the transcript never renders"],
				System: ["pre_tool_call rewrites the chained command with invisible segment markers; the rewrite is what lets the output be split later"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:63-64"
			},
			{
				Title: "PER-SEGMENT MARKERS",
				Agent: [
					"several compact previews instead of one large blob",
					"» [terminal:14L exit code: 0]",
					"» <<<CCR:hash|type|size>>> (one per segment)"
				],
				System: ["transform_terminal_output compresses each segment into its own CCR marker, unconditionally and before the threshold gate; per-segment error hints merge into the previews"],
				Anchor: Link(OurRepo, "docs/plugin/hooks.md"),
				AnchorLabel: "hooks.md:102-106"
			}
		]
	})} </div> <!-- The truthful context engine pane --> <div class="w-full lg:w-10/12 lg:self-end"> <div class="zine-box-crimson relative -rotate-[0.5deg] border-4 border-blood-crimson bg-carbon-void p-6 transition-transform duration-300 hover:rotate-0 sm:p-10"> <div class="absolute -top-3.5 left-6 border border-black bg-weathered-teal px-3 py-0.5 text-base font-black uppercase tracking-widest text-bone-white shadow-[2px_2px_0px_#000]">
THE CONTEXT ENGINE // WHAT IT DOES NOT DO
</div> <h3 class="mt-4 font-headline text-xl font-black uppercase text-bone-white sm:text-2xl">
Compress returns the transcript unchanged
</h3> <p class="mt-6 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The registered engine is opt-in (<code class="font-mono text-base text-weathered-teal">APHRODITE_CONTEXT_ENGINE=1</code>;
						the TOML key defaults true) and requires Hermes &gt;= 0.20.2 - the first
						release with <code class="font-mono text-base text-weathered-teal">pre_tool_call</code> modify.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
What it does: records token usage from each response.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
What it never does:
<code class="font-mono text-base text-weathered-teal">should_compress</code> always
						returns false (it defers to Hermes' own accounting), and
<code class="font-mono text-base text-weathered-teal">compress</code> returns the
						transcript unchanged - non-destructive, because the transform hooks already
						shrank the tool output.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
It never forces a compaction, never rewrites messages, and never touches the
						inline store.
</p> <div class="mt-6 font-mono text-base text-zinc-dust">
SRC: docs/plugin/context-engine.md:38-48
</div> </div> </div> <!-- The prefetch refusal hero --> <div class="w-full lg:w-10/12 lg:self-start"> <div class="zine-box-crimson relative rotate-[0.5deg] border-4 border-blood-crimson bg-carbon-void p-6 transition-transform duration-300 hover:rotate-0 sm:p-10"> <div class="absolute -top-3.5 right-6 border border-black bg-raw-blood px-3 py-0.5 text-base font-black uppercase tracking-widest text-bone-white shadow-[2px_2px_0px_#000]">
THE PREFETCH REFUSAL // v1.6.6
</div> <h3 class="mt-4 font-headline text-xl font-black uppercase text-bone-white sm:text-2xl">
Some paths are never read
</h3> <p class="mt-6 font-body text-base leading-relaxed text-bone-newsprint"> <code class="font-mono text-base text-weathered-teal">aphrodite_prefetch</code>
would happily warm the store from any path - so the guard names the paths
						that must never be read and refuses them outright:
</p> <div class="mt-8 max-w-2xl"> ${renderComponent($$result, "ZineToggle", $$ZineToggle, {
		"Left": "THE REQUEST",
		"Right": "THE ANSWER",
		"LeftLabel": "WHAT THE AGENT ASKS FOR",
		"RightLabel": "WHAT THE SYSTEM RETURNS",
		"LeftPane": ".env<br />auth.json<br />~/.ssh<br />the Hermes home<br />any non-file path",
		"RightPane": "ReadOutcome::Refused<br />refuse_reason: &quot;...&quot;<br /><br />the file is not opened, not hashed,<br />not stored - the prefetch returns<br />a refusal instead of the content"
	})} </div> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The same release hardened setup the same way: the Hermes-home plugin
						directory is report-only - no symlink removal, no writes, no deletes - and
						the dylib arm refuses installs when the in-tree checksums are missing.
</p> <div class="mt-6 font-mono text-base text-zinc-dust">
SRC: CHANGELOG.md:3-37 (v1.6.6) · the Aphrodite/v1.6.6 release note
</div> </div> </div> </section> <!-- CROSS-LINKS --> <section class="relative w-full"> <div class="mb-12 rotate-1 border border-black bg-raw-blood px-3 py-1 text-base font-black uppercase tracking-widest text-bone-white shadow-[3px_3px_0px_#000]">
GO DEEPER // THE SURFACES THESE EXAMPLES EXERCISE
</div> <div class="zine-box-crimson w-full rotate-[-0.8deg] border-4 border-blood-crimson bg-carbon-void p-8 transition-transform duration-300 hover:rotate-0 sm:p-12"> <ul class="grid gap-5 font-body text-base text-bone-newsprint sm:grid-cols-2"> <li class="border-l-4 border-weathered-teal pl-4"> <a class="font-bold text-bone-white underline decoration-raw-blood" href="/tools/">THE THIRTEEN TOOLS</a>
- the registry behind every retrieval chip above.
</li> <li class="border-l-4 border-weathered-teal pl-4"> <a class="font-bold text-bone-white underline decoration-raw-blood" href="/workbench/">THE WORKBENCH</a>
- paste your own output and watch the preview build live.
</li> <li class="border-l-4 border-weathered-teal pl-4"> <a class="font-bold text-bone-white underline decoration-raw-blood" href="/plugin/">THE HOOK CHAIN</a>
- where in the turn each raw stream was classified.
</li> <li class="border-l-4 border-weathered-teal pl-4"> <a class="font-bold text-bone-white underline decoration-raw-blood" href="/plugin/">THE PLUGIN</a>
- the shim and the dylib that make all of it run.
</li> </ul> </div> </section> <!-- RELATED: the natural neighbors --> ${renderComponent($$result, "Related", $$Related, { "Links": [
		{
			Href: "/examples/",
			Label: "EXAMPLES"
		},
		{
			Href: "/workbench/",
			Label: "WORKBENCH"
		},
		{
			Href: "/tools/",
			Label: "TOOLS"
		},
		{
			Href: "/plugin/",
			Label: "PLUGIN"
		}
	] })} </main> ` })}${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/showcase.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/showcase.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/showcase.astro";
var $$url = "/showcase";
// \0virtual:astro:page:Source/pages/showcase@_@astro
var page = () => showcase_exports;
export { page };
