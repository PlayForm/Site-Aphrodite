import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { E as unescapeHTML, _ as renderTemplate, d as Fragment, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, t as $$Base } from "./Base_B3YGMVwW.mjs";
import { a as $$Related } from "./DocsSidebar_DfVitkgG.mjs";
import { n as $$PageShell, t as $$ZineTape } from "./ZineTape_SD5UQe0y.mjs";
import { t as $$PageHeader } from "./PageHeader_D7477rfZ.mjs";
import { t as $$ZineBox } from "./ZineBox_CagEU9Nk.mjs";
import { t as $$ZineDiagramNav } from "./ZineDiagramNav_CN7ukSrg.mjs";
import { d as Undeclared, l as ToolNames, t as Assert, u as Tools } from "./Roster_DWXQuOMb.mjs";
import { i as RunPreview, r as RunMarker, t as RunBytes } from "./Motion_vSj2iAhk.mjs";
import { t as tool_relay_default } from "./tool-relay_Cnrq3A0m.mjs";
import { t as marker_format_default } from "./marker-format_C4V_DrOl.mjs";
// Source/Library/Prose/Tools.ts
var ToolProse = {
	aphrodite_compress: { Paragraph: ["Hashes the content, classifies it (or trusts the type hint), keeps it in the session store, and hands back a resolvable marker - park bulky text here instead of carrying it in context."] },
	aphrodite_retrieve: { Paragraph: ["Give hash or path - if both are present, path wins.", "The query parameter is the cheap way to poke at a large entry without pulling all of it into context."] },
	aphrodite_rebuild: { Note: "Reports state; it never rebuilds anything, whatever the name suggests." },
	aphrodite_prefetch_status: { Note: "Live prefetch schedule - what is loaded and ready, not what was once asked for." }
};
// Source/pages/tools.astro
var tools_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Tools,
	file: () => $$file,
	url: () => $$url
});
var $$Tools = createComponent(($$result, $$props, $$slots) => {
	Assert("Source/Library/Prose/Tools.ts", ToolProse, ToolNames);
	const Tools$1 = Tools.map((Tool, Index) => ({
		...Tool,
		N: String(Index + 1).padStart(2, "0"),
		Note: ToolProse[Tool.Name]?.Note
	}));
	const BuildLines = [
		"$ cargo build --release --workspace",
		...[
			"proc-macro2 v1.0.89",
			"unicode-ident v1.0.13",
			"quote v1.0.37",
			"syn v2.0.77",
			"serde_derive v1.0.210",
			"serde v1.0.210",
			"itoa v1.0.11",
			"ryu v1.0.18",
			"memchr v2.7.4",
			"libc v0.2.159",
			"cc v1.1.30",
			"jobserver v0.1.32",
			"num_cpus v1.16.0",
			"bytes v1.7.2",
			"pin-project-lite v0.2.14",
			"futures-core v0.3.31",
			"futures-task v0.3.31",
			"slab v0.4.9",
			"futures-util v0.3.31",
			"tokio-macros v2.4.0",
			"tokio v1.40.0",
			"mio v1.0.2",
			"socket2 v0.5.7",
			"tracing-core v0.1.32",
			"once_cell v1.20.1",
			"log v0.4.22",
			"smallvec v1.13.2",
			"lock_api v0.4.12",
			"scopeguard v1.2.0",
			"parking_lot v0.12.3",
			"ahash v0.8.11",
			"zerocopy v0.7.35",
			"zerocopy-derive v0.7.35",
			"hashbrown v0.14.5",
			"thiserror-impl v1.0.64",
			"thiserror v1.0.64",
			"anyhow v1.0.89",
			"blake3 v1.5.4",
			"crossbeam-utils v0.8.20",
			"crossbeam-epoch v0.9.18",
			"crossbeam-deque v0.8.5",
			"either v1.13.0",
			"rayon-core v1.12.1",
			"rayon v1.10.0",
			"regex-syntax v0.8.5",
			"aho-corasick v1.1.3",
			"regex-automata v0.4.8",
			"regex v1.11.0",
			"tempfile v3.13.0",
			"fastrand v2.1.1",
			"getrandom v0.2.15",
			"rand_chacha v0.3.1",
			"ppv-lite86 v0.2.20",
			"rand v0.8.5",
			"uuid v1.10.0",
			"rmp v0.8.14",
			"rmp-serde v1.3.0",
			"toml_edit v0.22.22",
			"indexmap v2.6.0",
			"equivalent v1.0.1",
			"winnow v0.6.20",
			"toml v0.8.19",
			"num-traits v0.2.19",
			"num-integer v0.1.46",
			"clap v4.5.20",
			"clap_builder v4.5.20",
			"clap_derive v4.5.18",
			"clap_lex v0.7.2",
			"anstream v0.6.15",
			"anstyle v1.0.8",
			"anstyle-parse v0.2.5",
			"anstyle-query v1.1.1",
			"colorchoice v1.0.2",
			"is_terminal_polyfill v1.70.1",
			"utf8parse v0.2.2",
			"strsim v0.11.1",
			"heck v0.5.0",
			"dirs v5.0.1",
			"dirs-sys v0.4.1",
			"option-ext v0.2.0",
			"futures-sink v0.3.31",
			"http v1.1.0",
			"httparse v1.9.5",
			"form_urlencoded v1.2.1",
			"percent-encoding v2.3.1"
		].map((Crate) => `   Compiling ${Crate}`),
		"   Compiling aphrodite-core v0.4.2 (/workspace/crates/aphrodite-core)",
		"warning: unused variable: `Count`",
		"  --> crates/aphrodite-core/src/store.rs:41:9",
		"   |",
		"41 |     let Count = Entries.len();",
		"   |         ^^^^^ help: if this is intentional, prefix it with an underscore: `_Count`",
		"   |",
		"   = note: `#[warn(unused_variables)]` on by default",
		"   Compiling aphrodite v0.4.2 (/workspace/crates/aphrodite)",
		"error[E0432]: unresolved import `crate::store::SessionStore`",
		"  --> crates/aphrodite/src/lib.rs:12:5",
		"   |",
		"12 | use crate::store::SessionStore;",
		"   |     ^^^^^^^^^^^^^^^^^^^^^^^^^ no `SessionStore` in `store`",
		"   |",
		"   = help: consider importing one of these items instead:",
		"   |",
		"12 | use crate::store::Store;",
		"   |     +++++",
		"error[E0308]: mismatched types",
		"   --> crates/aphrodite/src/preview/builders/build.rs:31:9",
		"    |",
		" 30 |     match first_err {",
		"    |           --------- this expression has type `Option<String>`",
		" 31 |         Some(msg) if !msg.is_empty() => {",
		"    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ expected `Option<String>`, found `bool`",
		"    |",
		"    = note: expected enum `Option<String>`",
		"    = note:    found type `bool`",
		"error[E0599]: no method named `take` found for struct `Vec<String>` in the current scope",
		"   --> crates/aphrodite/src/preview/builders/ls.rs:62:22",
		"    |",
		" 62 |         .map(|(e, n)| format!(\"{}×{}\", e, n))",
		"    |                      ^^^^^^ method not found in `Vec<String>`",
		"    |",
		"    = help: items from traits can only be used if the trait is in scope",
		"    = note: the following trait is implemented but not in scope: `itertools::Itertools`",
		"error: could not compile `aphrodite` (lib) due to 3 previous errors"
	];
	const TerminalLines = [
		"$ cargo test --release -p aphrodite preview::builders -- --nocapture",
		"    Finished `release` profile [optimized] target(s) in 12.41s",
		"     Running unittests src/lib.rs (/workspace/target/release/deps/aphrodite-7f3c9a1d2b4e5f60)",
		"test preview::builders::build::test::build_counts_error_lines_not_occurrences ... ok",
		"test preview::builders::build::test::build_surfaces_the_first_error_message ... ok",
		"test preview::builders::grep::test::grep_reports_hits_and_distinct_files ... ok",
		"test preview::builders::ls::test::ls_lists_extension_counts ... ok",
		"test preview::builders::test::test::test_reports_pass_fail_ignored ... ok",
		"test preview::builders::json::test::json_counts_items_and_keys ... ok",
		"test preview::builders::terminal::test::terminal_reads_the_exit_code_line ... ok",
		"test preview::builders::search::test::search_reports_hits_and_first_location ... ok",
		"test preview::builders::code::test::code_maps_structure_and_signature ... ok",
		"test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.31s",
		"   exit code: 0"
	];
	const TerminalSummary = (Lines) => ([...Lines].reverse().find((Line) => Line.includes("exit code:") || Line.includes("Error:")) ?? Lines[0] ?? "").trim().slice(0, 60);
	const Scenario = (Hash, Type, Lines, Preview) => ({
		Hash,
		Type,
		Bytes: RunBytes(Lines),
		Preview,
		Marker: RunMarker(Hash, Type, Lines)
	});
	const Scenarios = [Scenario("a1b2c3d4", "build", BuildLines, RunPreview("build", BuildLines)), Scenario("e5f6a7b8", "terminal", TerminalLines, `[terminal:${TerminalLines.length}L ${TerminalSummary(TerminalLines)}]`)];
	const MarkerFields = (Marker) => Marker.slice(7, -3).split("|");
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "TOOLS // APHRODITE",
		"Description": "The thirteen aphrodite_* tools: a thin relay into the Rust dylib with one shared session store, byte-exact marker retrieval, and the <<<CCR:hash|type|size>>> marker contract."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageShell", $$PageShell, { "Rhythm": "wide" }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHeader", $$PageHeader, {
		"Tape": "TOOLS // THE AGENT'S HANDLES",
		"Title": "Thirteen tools",
		"Lead": [
			`A tool call's output becomes part of the model's context, and every one of these handles exists to decide what of it the model keeps.`,
			`Each is a thin relay into the Rust dylib: the plugin registers each tool from the dylib's schema list, and every call dispatches through <code class="font-mono text-base text-weathered-teal">aphrodite_hermes_dispatch_tool</code>, returning the JSON result verbatim.`,
			`It is the reason all handlers share one session store: content compressed by a hook or by <code class="font-mono text-base text-weathered-teal">aphrodite_compress</code> stays resolvable by <code class="font-mono text-base text-weathered-teal">aphrodite_retrieve</code> for the life of the session.`
		]
	})}  ${maybeRenderHead($$result)}<section class="relative w-full" data-reveal> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": `REGISTRY // ${Tools$1.length} ENTRIES`
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Size": "lg",
		"Rotate": "-rotate-[1deg]"
	}, { "default": ($$result) => renderTemplate` <div class="overflow-x-auto"> <table class="w-full border-collapse font-mono text-base"> <tbody> ${Tools$1.map((Tool, I) => renderTemplate`<tr${addAttribute(I < Tools$1.length - 1 ? "border-b border-oxblood-dark" : "", "class")}> <td class="py-3 pr-4 align-top text-base font-black text-zinc-dust">${Tool.N}</td> <td class="py-3 pr-6 align-top whitespace-nowrap text-weathered-teal">${Tool.Name}</td> <td class="py-3 align-top text-bone-newsprint"> ${Tool.Summary} ${Tool.Note ? renderTemplate`<span class="mt-1 block text-zinc-dust">${Tool.Note}</span>` : null} </td> </tr>`)} </tbody> </table> </div> <p class="mt-12 border-t border-oxblood-dark pt-8 text-base leading-relaxed text-zinc-dust">
THERE IS AN INTERNAL 14TH REGISTRY ENTRY, context_engine_pre_llm - THE CONTEXT
					ENGINE'S OWN PRE-LLM HOOK, NOT A TOOL AN AGENT CALLS DIRECTLY.
${Undeclared.length > 0 ? renderTemplate`<span class="mt-3 block"> ${Undeclared.map((Tool) => Tool.Name).join(", ")} is compiled in under
<code class="font-mono text-base text-weathered-teal">debug_assertions</code> only:
							a real schema, not a registered tool, so it is named rather than counted.
</span>` : null} </p> <figure class="mt-16 border border-oxblood-dark bg-soot-black p-4" data-diagram="tool-relay"> <div class="overflow-x-auto">${unescapeHTML(tool_relay_default)}</div> <figcaption class="mt-6 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
M4 // TOOL RELAY
</figcaption> </figure> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "CONTRACT // THE MARKER"
	})} <h3 id="marker" class="mb-6 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
THE MARKER
</h3> <div class="ccr-marker mb-6 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
&lt;&lt;&lt;CCR:hash|type|size&gt;&gt;&gt;
</div> <div class="space-y-0 border border-oxblood-dark bg-soot-black p-5 font-mono text-base leading-relaxed" data-stream> ${Scenarios.map((Payload, Index) => {
		const [Hash = "", Type = "", Size = ""] = MarkerFields(Payload.Marker);
		return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` <div${addAttribute(["ccr-marker text-bone-newsprint", { "mt-6": Index > 0 }], "class:list")}>
&lt;&lt;&lt;<span class="text-stamped-canary">CCR:</span> <span class="text-weathered-teal">${Hash}...</span> <span class="text-bone-white">|${Type}|${Size}</span> <span class="text-bone-white">&gt;&gt;&gt;</span> </div> <div class="pl-4 text-zinc-dust">${Payload.Preview}</div> ` })}`;
	})} </div> <p class="mt-8 font-body text-base leading-relaxed text-bone-newsprint">
A marker and its preview are two views of one payload, so both are computed from
					the same bytes: the hash addresses the stored output, the type is the
					classifier's verdict, and the size is the UTF-8 byte count of the bytes behind
					the hash - which is what a retrieval of that marker puts back into the
					transcript, not an estimate of it. The preview beside each one comes from the
					engine's own builders, so its tallies are the payload's own: the build-log sample
					counts four error lines, one warning line and every line it printed, and the test
					run reports the exit code of the last line it printed.
</p> <p class="mt-3 font-body text-base leading-relaxed text-zinc-dust">
Both payloads clear their gate before either becomes a marker - 4,096 characters
					for a tool result, 1,024 for terminal output - because below the gate the engine
					passes the bytes through raw and no marker exists at all. Every figure here is
					the payload's own length rather than a typed number, so a change to the output
					moves the preview, the tallies and the size together.
</p> <ul class="mt-12 space-y-6 font-body text-base text-bone-newsprint"> <li class="border-l-4 border-raw-blood pl-4"> <span class="font-bold text-bone-white">BLAKE3 hash</span> - pattern
<code class="font-mono text-base text-weathered-teal">${"^^[0-9a-fA-F]{8,64}$"}</code>;
						truncated hashes never resolve, exact match only.
</li> <li class="border-l-4 border-raw-blood pl-4"> <span class="font-bold text-bone-white">Byte-exact round-trip</span> -
<code class="font-mono text-base text-weathered-teal">aphrodite_retrieve</code>
returns the original bytes, nested markers expanded recursively.
</li> <li class="border-l-4 border-raw-blood pl-4"> <span class="font-bold text-bone-white">Workspace-confined reads</span> -
<code class="font-mono text-base text-weathered-teal">path</code> reads are
						capped at 10 MiB and refuse paths outside the workspace.
</li> <li class="border-l-4 border-raw-blood pl-4"> <span class="font-bold text-bone-white">Markers don't survive a session restart</span>
- the dylib is loaded once per process, so a new session starts a fresh store.
</li> </ul> <figure class="mt-16 border border-oxblood-dark bg-soot-black p-4" data-diagram="marker-format"> <div class="overflow-x-auto">${unescapeHTML(marker_format_default)}</div> <figcaption class="mt-6 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
M6 // MARKER FORMAT
</figcaption> </figure> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "SCHEMAS // EVERY ARGUMENT"
	})} <h3 id="schemas" class="mt-20 mb-6 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
SCHEMAS // EVERY TOOL
</h3> <p class="mb-12 font-body text-base leading-relaxed text-bone-newsprint">
Each panel is the schema the agent is handed: the description it reads, then every
					argument with its type and its own sentence. None of it is retyped - the schema is
					rendered straight from
<code class="font-mono text-base text-weathered-teal">schemas.rs</code>, so an
					argument added to a tool appears without an edit.
</p> <div class="grid grid-cols-1 gap-12 lg:grid-cols-2"> ${Tools$1.map((Tool) => renderTemplate`<div${addAttribute(Tool.Name, "id")} class="scroll-mt-24"> <h4 class="mb-6 font-headline text-lg font-black uppercase text-bone-white"> <span class="mr-3 text-zinc-dust">${Tool.N}</span> ${Tool.Name} </h4> <div class="mb-6 space-y-0 border border-oxblood-dark bg-soot-black p-5 font-mono text-base leading-relaxed"> ${Tool.Parameters.length === 0 ? renderTemplate`<div class="text-zinc-dust">takes no arguments</div>` : Tool.Parameters.map((Parameter) => renderTemplate`<div class="mb-3"> <div> <span class="text-zinc-dust">"${Parameter.Name}":</span>${" "} <span class="text-bone-newsprint">${`{ ${Parameter.Type}${Parameter.Required ? " · required" : " · optional"} }`}</span> </div> <div class="pl-4 text-zinc-dust">${Parameter.Description}</div> </div>`)} </div> <p class="font-body text-base leading-relaxed text-zinc-dust">${Tool.Description}</p> ${(ToolProse[Tool.Name]?.Paragraph ?? []).map((Line) => renderTemplate`<p class="mt-3 font-body text-base leading-relaxed text-zinc-dust">${Line}</p>`)} </div>`)} </div> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "RULE // META-TOOLS"
	})} <h3 id="meta-tools" class="mb-6 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
Meta-tool output is auto-expanded
</h3> <p class="font-body text-base leading-relaxed text-bone-newsprint">
Output from meta-tools (like
<code class="font-mono text-base text-weathered-teal">aphrodite_stats</code> or
<code class="font-mono text-base text-weathered-teal">aphrodite_catalog</code>) is
					expanded inline, never compressed - the agent always sees its own engine's status
					in full.
</p> <p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint">
Compressing the catalog would just be the engine hiding its own ledger.
</p> ` })} </section>  ${renderComponent($$result, "Related", $$Related, { "Links": [
		{
			Href: "/plugin/",
			Label: "PLUGIN"
		},
		{
			Href: "/hooks/",
			Label: "HOOKS"
		},
		{
			Href: "/hermes/",
			Label: "HERMES"
		},
		{
			Href: "/workbench/",
			Label: "WORKBENCH"
		}
	] })} ` })} ${renderComponent($$result, "ZineDiagramNav", $$ZineDiagramNav, {})} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/tools.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/tools.astro";
var $$url = "/tools";
// \0virtual:astro:page:Source/pages/tools@_@astro
var page = () => tools_exports;
export { page };
