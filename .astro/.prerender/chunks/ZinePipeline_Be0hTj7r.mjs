import { d as renderScript, f as createAstro, p as createComponent } from "./Base_DtRxtNeh.mjs";
import { E as unescapeHTML, _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { t as $$ZineTape } from "./ZineTape_IRUAczxy.mjs";
// Source/Component/ZinePipeline.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$ZinePipeline = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ZinePipeline;
	const { Mode = "full" } = Astro.props;
	const Samples = [
		{
			Id: "build",
			Label: "BUILD LOG",
			Text: [
				"   Compiling aphrodite v0.4.2",
				"warning: unused variable: `hint`",
				" --> crates/aphrodite/src/preview.rs:212:9",
				"error[E0432]: unresolved import `crate::stage3`",
				" --> crates/aphrodite/src/main.rs:14:5",
				"error: could not compile `aphrodite` due to 1 previous error",
				"warning: 2 warnings emitted",
				"build failed: exit code 101"
			].join("\n")
		},
		{
			Id: "test",
			Label: "TEST RUN",
			Text: [
				"running 222 tests",
				"test classify::tests::detects_build ... ok",
				"test preview::tests::build_grep ... ok",
				"test marker::tests::parses_hash ... ignored",
				"test store::tests::blake3_roundtrip ... FAILED",
				"failures:",
				"    store::tests::blake3_roundtrip",
				"test result: FAILED. 220 passed; 1 failed; 1 ignored; finished in 0.31s"
			].join("\n")
		},
		{
			Id: "terminal",
			Label: "TERMINAL",
			Text: [
				"$ cargo fmt --check",
				"Diff in crates/aphrodite/src/main.rs at line 14:",
				"$ ls crates",
				"aphrodite  aphrodite-hermes",
				"$ echo done",
				"done",
				"exit code: 0"
			].join("\n")
		},
		{
			Id: "code",
			Label: "RUST FILE",
			Text: [
				"use std::collections::HashMap;",
				"",
				"struct Preview {",
				"    kind: String,",
				"    body: String,",
				"}",
				"",
				"enum Source {",
				"    Tool,",
				"    Terminal,",
				"}",
				"",
				"fn classify(blob: &str) -> Source {",
				"    if blob.contains(\"exit code\") { Source::Terminal } else { Source::Tool }",
				"}",
				"",
				"fn main() {",
				"    let cache: HashMap<String, Preview> = HashMap::new();",
				"    println!(\"{:?}\", cache.len());",
				"}"
			].join("\n")
		},
		{
			Id: "grep",
			Label: "GREP / RG",
			Text: [
				"src/preview.rs:12:fn build_preview(blob: &str) -> String {",
				"src/preview.rs:44:    build_preview(&truncated)",
				"src/classify.rs:7:// returns the detected content type before build_preview runs",
				"src/classify.rs:81:    build_preview(blob)",
				"src/store.rs:19:// preview stored next to the blake3 digest"
			].join("\n")
		},
		{
			Id: "git",
			Label: "GIT STATUS",
			Text: [
				"M src/preview.rs",
				"M src/classify.rs",
				"A src/store.rs",
				"D src/legacy.rs",
				"?? docs/notes.md",
				"?? examples/demo.rs",
				"?? target/"
			].join("\n")
		},
		{
			Id: "diff",
			Label: "DIFF",
			Text: [
				"diff --git a/src/main.rs b/src/main.rs",
				"--- a/src/main.rs",
				"+++ b/src/main.rs",
				"@@ -14,7 +14,9 @@",
				"-    let blob = read();",
				"+    let blob = read_trimmed();",
				"+    let kind = classify(&blob);",
				"diff --git a/Cargo.toml b/Cargo.toml",
				"+++ b/Cargo.toml",
				"+version = \"0.4.3\""
			].join("\n")
		},
		{
			Id: "json",
			Label: "JSON BLOB",
			Text: JSON.stringify({
				cached: true,
				error: null,
				hits: 4,
				query: "build_preview",
				files: ["src/preview.rs", "src/classify.rs"],
				timing: {
					classify_ns: 88,
					compress_ns: 410
				}
			}, null, 2)
		},
		{
			Id: "error",
			Label: "ERROR",
			Text: [
				"Traceback (most recent call last):",
				"  KeyError: 'preview'",
				""
			].join("\n")
		}
	];
	const Steps = [
		{
			N: "01",
			Name: "CLASSIFY",
			Figure: "40-123 ns",
			Tone: "raw"
		},
		{
			N: "02",
			Name: "PREVIEW",
			Figure: "~15 tok",
			Tone: "canary"
		},
		{
			N: "03",
			Name: "STORE",
			Figure: "BLAKE3",
			Tone: "teal"
		},
		{
			N: "04",
			Name: "DECIDE",
			Figure: "RETRIEVE?",
			Tone: "raw"
		}
	];
	const Exhibit = {
		Preview: "[build:1E 1W 142L | error[E0432]: unresolved import ...]",
		Marker: "<<<CCR:0e3a5c9f2b8d4e6a1c3f5b7d9e0a2c4b6d8f0a1e|build|1420>>>",
		Bytes: "1,420 BYTES OF ORIGINAL OUTPUT · UNCHANGED"
	};
	return renderTemplate`${Mode === "full" ? renderTemplate`${maybeRenderHead($$result)}<section data-pipeline="full" class="relative w-full" aria-label="The pipeline, live" data-astro-cid-djdkkpru> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Label": "THE PIPELINE // LIVE",
		"Color": "raw",
		"Side": "left",
		"data-astro-cid-djdkkpru": true
	})} <h2 class="zp-title" data-astro-cid-djdkkpru>Four steps, one decision</h2> <!-- THE RAIL: the four steps the page actually runs. --> <ol class="zp-rail" aria-label="The four steps, in order" data-astro-cid-djdkkpru> ${Steps.map(({ N, Name, Figure, Tone }) => renderTemplate`<li${addAttribute(Name, "data-rail-step")}${addAttribute(`zp-step zp-step-${Tone}`, "class")} data-astro-cid-djdkkpru> <span class="zp-step-n" data-astro-cid-djdkkpru>${N}</span> <span class="zp-step-name" data-astro-cid-djdkkpru>${Name}</span> <span class="zp-step-figure" data-astro-cid-djdkkpru>${Figure}</span> </li>`)} </ol> <!-- THE SWITCHBOARD: load a sample, or paste your own. --> <div class="zp-switch" aria-label="Sample outputs" data-astro-cid-djdkkpru> <span class="zp-kicker" data-astro-cid-djdkkpru>LOAD SAMPLE:</span> ${Samples.map((Sample, Index) => renderTemplate`<button type="button" class="zp-pill"${addAttribute(Sample.Id, "data-sample")}${addAttribute(Index === 0 ? "" : void 0, "data-active")}${addAttribute(Index === 0, "aria-pressed")} data-astro-cid-djdkkpru> ${Sample.Label} </button>`)} <button type="button" class="zp-pill zp-exec" data-action="exec" aria-pressed="false" data-astro-cid-djdkkpru>
RUN PIPELINE
</button> </div> <!-- THE PAIR: the raw flow beside the line the LLM reads. --> <div class="grid gap-20 lg:grid-cols-2" data-astro-cid-djdkkpru> <!-- INPUT + CLASSIFIED: the soot-black terminal panel. --><div class="zp-pane" data-astro-cid-djdkkpru> <div class="zp-pane-head" data-astro-cid-djdkkpru> <h3 class="zp-h3" data-astro-cid-djdkkpru>INPUT</h3> <span class="zp-note" data-stat="raw-bytes" data-astro-cid-djdkkpru>
0 B
</span> </div> <div class="relative flex-1" data-astro-cid-djdkkpru> <label class="sr-only" for="zp-input" data-astro-cid-djdkkpru>Tool output to classify</label> <textarea id="zp-input" data-input spellcheck="false" class="zp-terminal h-72 w-full resize-y bg-transparent p-5 text-bone-newsprint" placeholder="paste any output here - or load a sample" data-astro-cid-djdkkpru></textarea> <!-- The opacity-fade suppression overlay: the tail of the
						     raw feed dims toward the bottom of the pane. --> <div aria-hidden="true" class="pointer-events-none absolute inset-x-0 bottom-0 h-16" style="background: linear-gradient(to bottom, transparent, #111014);" data-astro-cid-djdkkpru></div> </div> <div class="zp-pane-foot" data-astro-cid-djdkkpru> <h3 class="zp-h3" data-astro-cid-djdkkpru>CLASSIFIED</h3> <p class="zp-classified" data-astro-cid-djdkkpru> <span class="zp-type" data-type data-astro-cid-djdkkpru>not run yet</span> <span class="zp-dot" data-astro-cid-djdkkpru>·</span> <span class="zp-tier" data-tier data-astro-cid-djdkkpru>×1</span> <span class="zp-dot" data-astro-cid-djdkkpru>·</span> <span class="zp-note" data-stat="classify-ns" data-astro-cid-djdkkpru>- ns</span> </p> </div> </div> <!-- PREVIEW + MARKER + DECISION: the asphalt preview pane. --> <div class="zp-pane zp-pane-preview" data-astro-cid-djdkkpru> <div class="zp-pane-head" data-astro-cid-djdkkpru> <h3 class="zp-h3" data-astro-cid-djdkkpru>PREVIEW + MARKER</h3> <span class="zp-note" data-astro-cid-djdkkpru>the line the LLM reads</span> </div> <div class="zp-preview-body" data-astro-cid-djdkkpru> <!-- The preview line, inset bone-white result. --><div class="zp-result" data-astro-cid-djdkkpru> <p class="zp-kicker zp-kicker-ink" data-astro-cid-djdkkpru>PREVIEW LINE</p> <p class="zp-line mt-4 break-all" data-preview data-astro-cid-djdkkpru>[press RUN PIPELINE]</p> </div> <!-- The store address: hash prefix + size, then the marker. --> <div data-astro-cid-djdkkpru> <p class="zp-kicker zp-kicker-teal" data-astro-cid-djdkkpru>STORE // BLAKE3 ADDRESS</p> <p class="zp-address mt-2" data-address data-astro-cid-djdkkpru>blake3 - · 0 B · not run yet</p> <button type="button" class="zp-chip ccr-marker mt-4 w-full border-2 border-weathered-teal bg-soot-black p-2 text-left" data-copy="" data-marker data-astro-cid-djdkkpru>
&lt;&lt;&lt;CCR:...&gt;&gt;&gt;
</button> </div> <!-- The decision the agent makes, not the engine. --> <div class="zp-decision" data-astro-cid-djdkkpru> <h3 class="zp-h3" data-astro-cid-djdkkpru>DECISION</h3> <p class="zp-note-block mt-4" data-decision data-astro-cid-djdkkpru>
preview enough - skip retrieval, keep reasoning
</p> </div> <!-- The per-turn injection assembler (docs/plugin/hooks.md:114-136):
						     the pre_llm_call order under the 4,000-char budget - NOT an
						     auto-compaction pass (the engine is opt-in, non-destructive). --> <div class="zp-inject" data-astro-cid-djdkkpru> <p class="zp-kicker zp-kicker-newsprint" data-astro-cid-djdkkpru>INJECTION ASSEMBLER (PRE_LLM_CALL)</p> <p class="zp-note-block mt-4" data-astro-cid-djdkkpru> <span class="text-stamped-canary" data-astro-cid-djdkkpru>[directives:]</span> →
<span class="text-stamped-canary" data-astro-cid-djdkkpru>[nudge:]</span> →
<span class="text-weathered-teal" data-astro-cid-djdkkpru>[recall]</span>- assembled per turn,
								under the 4,000-char budget
</p> </div> </div> </div> </div> <!-- THE READOUT: what this run cost and what it saved. --> <div class="grid gap-20 md:grid-cols-3" aria-label="Session stats" data-astro-cid-djdkkpru> ${[
		{
			Key: "ratio",
			Label: "COMPRESSION RATIO",
			Cap: 100,
			Suffix: "%"
		},
		{
			Key: "turns",
			Label: "BLOBS CLASSIFIED",
			Cap: 40,
			Suffix: ""
		},
		{
			Key: "saved",
			Label: "CONTEXT SAVED",
			Cap: 100,
			Suffix: " KB"
		}
	].map((Stat) => renderTemplate`<div class="zp-pane p-6" data-astro-cid-djdkkpru> <p class="zp-kicker" data-astro-cid-djdkkpru>${Stat.Label}</p> <p class="zp-stat"${addAttribute(Stat.Key, "data-stat-value")} data-astro-cid-djdkkpru>
0${Stat.Suffix} </p> <div class="zp-stat-track mt-6" data-astro-cid-djdkkpru> <div class="zp-stat-fill"${addAttribute(Stat.Key, "data-stat-bar")} style="width:0%" data-astro-cid-djdkkpru></div> </div> </div>`)} </div> <!-- The samples as data: frontmatter constants are not in scope inside
			     an Astro <script crossorigin=\"anonymous\"> module, so the engine reads this island. It lives
			     INSIDE the pipeline root - the binding looks it up from there. --> <script crossorigin=\"anonymous\" type="application/json" data-samples-json>${unescapeHTML(JSON.stringify(Samples))}<\/script></section>` : renderTemplate`<section data-pipeline="decide" class="relative w-full" aria-label="The decide branch" data-astro-cid-djdkkpru> <div class="grid gap-16 lg:grid-cols-2" data-astro-cid-djdkkpru> <!-- What the agent already holds. --><div class="zp-pane p-6" data-astro-cid-djdkkpru> <p class="zp-kicker" data-astro-cid-djdkkpru>WHAT THE AGENT HOLDS</p> <div class="zp-result mt-4" data-astro-cid-djdkkpru> <p class="zp-line break-all" data-astro-cid-djdkkpru>${Exhibit.Preview}</p> <p class="ccr-marker mt-4 text-weathered-teal" data-astro-cid-djdkkpru>${Exhibit.Marker}</p> </div> <p class="zp-note-block mt-4" data-astro-cid-djdkkpru>
Three fields and a preview line. Retrieval is a choice, not a step.
</p> </div> <!-- The two branches the choice opens. --> <div class="flex flex-col gap-6" data-astro-cid-djdkkpru> <div class="flex flex-wrap gap-4" data-astro-cid-djdkkpru> <button type="button" class="zp-pill" data-branch="preview-answers" data-active aria-pressed="true" data-astro-cid-djdkkpru>
PREVIEW ANSWERS IT
</button> <button type="button" class="zp-pill" data-branch="needs-bytes" aria-pressed="false" data-astro-cid-djdkkpru>
NEEDS THE BYTES
</button> </div> <div class="zp-pane p-6" data-branch-panel="preview-answers" data-astro-cid-djdkkpru> <p class="zp-kicker zp-kicker-canary" data-astro-cid-djdkkpru>NOTHING IS RETRIEVED</p> <p class="zp-note-block mt-4" data-astro-cid-djdkkpru>
The marker stayed a receipt. The agent reasoned from the type, the size
							and the one error the preview carried - and the store was never touched.
</p> </div> <div class="zp-pane p-6" data-branch-panel="needs-bytes" hidden data-astro-cid-djdkkpru> <p class="zp-kicker zp-kicker-teal" data-astro-cid-djdkkpru>THE MARKER RESOLVES</p> <p class="zp-note-block mt-4" data-astro-cid-djdkkpru>${Exhibit.Bytes}</p> <p class="zp-note-block mt-4" data-astro-cid-djdkkpru>
Recursive resolution - nested markers are handled, so a retrieved blob
							that itself carries a marker resolves in the same call.
</p> </div> </div> </div> </section>`}${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZinePipeline.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/ZinePipeline.astro", void 0);
export { $$ZinePipeline as t };
