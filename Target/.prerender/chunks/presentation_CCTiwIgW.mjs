import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, a as Versions, g as createAstro, h as renderScript, t as $$Base } from "./Base_Bs2-mKm9.mjs";
// Source/Component/DeckScene.astro
createAstro("https://Aphrodite.PlayForm.Cloud");
var $$DeckScene = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$DeckScene;
	const { Scene, Index, Total } = Astro.props;
	const Ordinal = String(Index + 1).padStart(2, "0");
	const Count = String(Total).padStart(2, "0");
	const Hooks = [
		{
			Chip: "H1",
			Name: "on_session_start",
			Role: "resets per-session state",
			Hot: false
		},
		{
			Chip: "H2",
			Name: "pre_tool_call",
			Role: "backgrounds slow calls, splits chains",
			Hot: false
		},
		{
			Chip: "H3",
			Name: "transform_tool_result",
			Role: "every tool result becomes a marker",
			Hot: true
		},
		{
			Chip: "H4",
			Name: "transform_terminal_output",
			Role: "shell output becomes a marker, exit code kept",
			Hot: true
		},
		{
			Chip: "H5",
			Name: "pre_llm_call",
			Role: "directives, nudges, recall under 4,000 chars",
			Hot: false
		},
		{
			Chip: "H6",
			Name: "post_llm_call",
			Role: "archives the turn, advances the counter",
			Hot: false
		}
	];
	const Stages = [
		{
			Index: "01",
			Name: "Classify",
			Metric: "40-123 ns",
			Note: "type-aware, first match wins"
		},
		{
			Index: "02",
			Name: "Preview",
			Metric: "~15 tokens",
			Note: "the enriched line, not the blob"
		},
		{
			Index: "03",
			Name: "Store",
			Metric: "BLAKE3",
			Note: "SQLite :9798, memory :9797"
		},
		{
			Index: "04",
			Name: "Decide",
			Metric: "on demand",
			Note: "aphrodite_retrieve(hash)"
		}
	];
	const Types = [
		"build",
		"test",
		"git",
		"gitlog",
		"grep",
		"ls",
		"diff",
		"search",
		"json",
		"code_rust",
		"code_python",
		"terminal",
		"log",
		"linter",
		"error"
	];
	const Tiers = [
		{
			Name: "Error",
			Multiplier: "×8",
			Note: "an error stays visible longest"
		},
		{
			Name: "Code",
			Multiplier: "×3",
			Note: "source earns patience"
		},
		{
			Name: "Diff / git",
			Multiplier: "×2",
			Note: "history, halved"
		},
		{
			Name: "Default",
			Multiplier: "×1",
			Note: "tool_output, json, the rest"
		},
		{
			Name: "Noisy",
			Multiplier: "×1",
			Note: "build, linter, log - never halved"
		}
	];
	const Shapes = [
		{
			Type: "build",
			Line: "[build:1E 1W 142L | error[E0432]: unresolved import ...]"
		},
		{
			Type: "test",
			Line: "[test:220 pass 0 fail 1 ignored | 0.31s]"
		},
		{
			Type: "git",
			Line: "[git:2M 2A 1D 3?? | src/x.rs src/y.rs +5 more]"
		},
		{
			Type: "diff",
			Line: "[diff:2F +7/-3 12L | src/main.rs Cargo.toml +N more]"
		},
		{
			Type: "grep",
			Line: "[grep:4 hits in 3 files | src/preview.rs:12 ...]"
		},
		{
			Type: "json",
			Line: "[json:30 keys 1L | status, error, ...]"
		},
		{
			Type: "terminal",
			Line: "[terminal:14L exit code: 0]"
		},
		{
			Type: "code",
			Line: "[code:3fns|2structs fn main() 414L]"
		}
	];
	const Comparison = [{
		Side: "proxy",
		State: "without",
		Head: "Wire-level proxy // Headroom · RTK",
		Rows: [
			"sees HTTP only",
			"raw already in history",
			"lossy, no address"
		]
	}, {
		Side: "plugin",
		State: "with aphrodite",
		Head: "Boundary-level plugin",
		Rows: [
			"sees the tool call",
			"marker is the history",
			"retrievable address"
		]
	}];
	const Numbers = [
		{
			Value: "26.9%",
			Label: "of the budget deflected"
		},
		{
			Value: "156.3M",
			Label: "tokens saved"
		},
		{
			Value: "1.3%",
			Label: "retrieval tax"
		},
		{
			Value: "200",
			Label: "sessions measured"
		}
	];
	const Log = [
		{
			Text: "$ cargo build --release 2>&1",
			Tier: "dim"
		},
		{
			Text: "   Compiling libc v0.2.168",
			Tier: "fade"
		},
		{
			Text: "   Compiling proc-macro2 v1.0.94",
			Tier: "fade"
		},
		{
			Text: "   Compiling unicode-ident v1.0.18",
			Tier: "mute"
		},
		{
			Text: "   Compiling cfg-if v1.0.3",
			Tier: "fade"
		},
		{
			Text: "   Compiling serde v1.0.219",
			Tier: "fade"
		},
		{
			Text: "   Compiling tokio v1.47.1",
			Tier: "fade"
		},
		{
			Text: "   Compiling futures-core v0.3.31",
			Tier: "mute"
		},
		{
			Text: "   Compiling axum v0.8.4",
			Tier: "fade"
		},
		{
			Text: "   Compiling hyper v1.6.0",
			Tier: "mute"
		},
		{
			Text: "   Compiling tower v0.5.2",
			Tier: "fade"
		},
		{
			Text: "   Compiling aphrodite v1.8.0",
			Tier: "dim"
		},
		{
			Text: "warning: unused import: `HashMap`",
			Tier: "signal"
		},
		{
			Text: "  --> crates/aphrodite/src/preview.rs:12:5",
			Tier: "fade"
		},
		{
			Text: "   Compiling aphrodite-hermes v1.8.0",
			Tier: "dim"
		},
		{
			Text: "error[E0432]: unresolved import `crate::stage3`",
			Tier: "signal"
		},
		{
			Text: "  --> crates/aphrodite/src/main.rs:14:5",
			Tier: "fade"
		},
		{
			Text: "error: could not compile `aphrodite` due to 1 previous error",
			Tier: "signal"
		}
	];
	const Scroll = [...Log, ...Log];
	const StreamLog = Log.slice(0, 12);
	return renderTemplate`${maybeRenderHead($$result)}<section class="deck-scene" data-scene${addAttribute(String(Index === 0), "data-active")}${addAttribute(Scene.Visual, "data-visual")}${addAttribute(Index === 0 ? "false" : "true", "aria-hidden")}${addAttribute(`Beat ${Ordinal}: ${Scene.Title}`, "aria-label")}${addAttribute(Index !== 0, "inert")}> ${Scene.Visual === "opening" && renderTemplate`<div class="deck-open" data-enter> <div class="deck-open-plate"> <div class="deck-open-mark"> <img src="/Brand/aphrodite.svg" alt="Aphrodite brand mark" width="160" height="160"> </div> <span class="deck-open-tape">CCR CORE // STENCIL</span> </div> <div class="deck-open-copy"> <span class="deck-kicker">${Scene.Beat}</span> <h1 class="deck-open-title">${Scene.Title}</h1> <p class="deck-open-body">${Scene.Body}</p> <div class="deck-chips"> <span class="deck-chip">aphrodite.playform.cloud</span> <span class="deck-chip" data-tone="canary">${`plugin v${Versions.Plugin}`}</span> <span class="deck-chip" data-tone="teal">${`binary v${Versions.Binary}`}</span> </div> </div> </div>`} ${Scene.Visual === "closing" && renderTemplate`<div class="deck-close" data-enter> <span class="deck-kicker">${Scene.Beat}</span> <h2 class="deck-close-title">${Scene.Title}</h2> <p class="deck-close-body">${Scene.Body}</p> <div class="deck-commands"> <div class="deck-command"> <span class="deck-command-prompt">$</span> ${" hermes plugins install aphrodite"} </div> <div class="deck-command"> <span class="deck-command-prompt">$</span> ${" cd ~/.hermes/plugins/aphrodite && bash download.sh"} </div> </div> <div class="deck-close-foot"> <span class="deck-url">aphrodite.playform.cloud</span> <span class="deck-chip">one binary</span> <span class="deck-chip">six hooks</span> <span class="deck-chip">thirteen tools</span> </div> </div>`} ${[
		"default",
		"transform",
		"overview",
		"classify",
		"preview",
		"store",
		"decide",
		"hooks",
		"ledger"
	].includes(Scene.Visual) && renderTemplate`<div class="deck-slide" data-enter> <div class="deck-head"> <span class="deck-kicker">${Scene.Beat}</span> <span class="deck-count"> ${Ordinal} / ${Count} </span> </div> <h2 class="deck-title">${Scene.Title}</h2> <p class="deck-body">${Scene.Body}</p> <div class="deck-visual"> ${Scene.Visual === "default" && renderTemplate`<div class="deck-default"> <div class="deck-terminal"> <div class="deck-terminal-bar"> <span class="deck-state" data-state="default">
by default
</span> <span>raw tool output</span> <span class="deck-terminal-metric">streaming</span> </div> <div class="deck-scroll"> <div class="deck-scroll-track"> ${Scroll.map((Line) => renderTemplate`<div class="deck-line"${addAttribute(Line.Tier, "data-tier")}> ${Line.Text} </div>`)} </div> </div> </div> <div class="deck-default-stat"> <span class="deck-default-value" data-count="1400">
1,400
</span> <span class="deck-default-label">tokens per build</span> <p class="deck-default-note">
Every line enters the context. Every later turn pays for it again.
</p> <div class="deck-badges"> <span class="deck-badge">142 lines</span> <span class="deck-badge">1 error</span> <span class="deck-badge" data-tone="teal">
no marker
</span> </div> </div> </div>`} ${Scene.Visual === "transform" && renderTemplate`<div class="deck-split"> <div class="deck-split-side" data-side="user" data-enter> <div class="deck-split-head"> <span class="deck-state" data-state="default">
by default
</span> <span>user // terminal</span> <span class="deck-split-metric">streaming</span> </div> <div class="deck-split-log" data-stream> ${StreamLog.map((Line) => renderTemplate`<div class="deck-line"${addAttribute(Line.Tier, "data-tier")}> ${Line.Text} </div>`)} </div> <span class="deck-split-foot"> <span data-count="1400">1,400</span> ${" tokens, still on screen"} </span> </div> <div class="deck-split-mid" data-enter="980"> <span class="deck-type-pill">build</span> <span class="deck-split-arrow">→</span> <span class="deck-split-steps">classify · preview · store</span> </div> <div class="deck-split-side" data-side="agent" data-enter="1080"> <div class="deck-split-head"> <span class="deck-state" data-state="active">
with aphrodite
</span> <span>agent // context</span> <span class="deck-split-metric">~15 tokens</span> </div> <div class="deck-preview-line"> ${"[build:1E 1W 142L | error[E0432]: unresolved import ...]"} </div> <div class="deck-marker-line"> ${"<<<CCR:0e3a5c9f2b8d4e6a1c3f5b7d9e0a2c4b6d8f0a1e|build|1420>>>"} </div> <span class="deck-split-foot">the original is one call away</span> </div> <span class="deck-wipe" data-wipe="980"></span> </div>`} ${Scene.Visual === "overview" && renderTemplate`<div class="deck-overview"> <div class="deck-stages"> ${Stages.map((Stage) => renderTemplate`<div class="deck-stage"${addAttribute(Stage.Index, "data-stage")}> <span class="deck-stage-index">${Stage.Index} // STAGE</span> <span class="deck-stage-name">${Stage.Name}</span> <span class="deck-stage-metric">${Stage.Metric}</span> <span class="deck-stage-note">${Stage.Note}</span> </div>`)} </div> <div class="deck-badges"> <span class="deck-badge">one output</span> <span class="deck-badge" data-tone="teal">
one marker
</span> <span class="deck-badge">sub-millisecond compress</span> <span class="deck-badge">no API round-trip</span> </div> </div>`} ${Scene.Visual === "classify" && renderTemplate`<div class="deck-classify"> <div class="deck-panel"> <div class="deck-panel-head"> <span>what it names</span> <span>first match wins</span> </div> <div class="deck-type-grid"> ${Types.map((Type) => renderTemplate`<span class="deck-type">${Type}</span>`)} </div> </div> <div class="deck-panel"> <div class="deck-panel-head"> <span>threshold tiers</span> <span>higher = stays visible</span> </div> <div class="deck-tiers"> ${Tiers.map((Tier) => renderTemplate`<div class="deck-tier"> <span class="deck-tier-name">${Tier.Name}</span> <span class="deck-tier-mult">${Tier.Multiplier}</span> <span class="deck-tier-note">${Tier.Note}</span> </div>`)} </div> </div> </div>`} ${Scene.Visual === "preview" && renderTemplate`<div class="deck-shapes"> ${Shapes.map((Shape) => renderTemplate`<div class="deck-shape"> <span class="deck-shape-type">${Shape.Type}</span> <code class="deck-shape-line">${Shape.Line}</code> </div>`)} </div>`} ${Scene.Visual === "store" && renderTemplate`<div class="deck-store"> <div class="deck-marker-map"> <div class="deck-marker-field" data-field="hash"> <span class="deck-marker-field-label">hash // 40 hex</span> <code>0e3a5c9f2b8d4e6a1c3f5b7d9e0a2c4b6d8f0a1e</code> </div> <div class="deck-marker-field" data-field="type"> <span class="deck-marker-field-label">type</span> <code>build</code> </div> <div class="deck-marker-field" data-field="size"> <span class="deck-marker-field-label">size</span> <code>1420</code> </div> </div> <div class="deck-marker-full"> ${"<<<CCR:0e3a5c9f2b8d4e6a1c3f5b7d9e0a2c4b6d8f0a1e|build|1420>>>"} </div> <div class="deck-store-grid"> <div class="deck-store-card"> <span class="deck-store-name">Cache :9797</span> <span class="deck-store-note">
in-memory DashMap, 10K entries, compresses above 8 KB
</span> </div> <div class="deck-store-card"> <span class="deck-store-name">Token :9798</span> <span class="deck-store-note">
SQLite, persistent, compresses above 1 KB, tool relay
</span> </div> </div> </div>`} ${Scene.Visual === "decide" && renderTemplate`<div class="deck-decide"> <div class="deck-decide-flow"> <div class="deck-decide-node"> <span class="deck-decide-label">preview</span> <span class="deck-decide-value">~15 tokens</span> </div> <span class="deck-decide-arrow">→</span> <div class="deck-decide-node" data-node="question"> <span class="deck-decide-label">enough?</span> <span class="deck-decide-value">the agent decides</span> </div> <span class="deck-decide-arrow">→</span> <div class="deck-decide-branches"> <div class="deck-decide-branch" data-branch="skip"> <span class="deck-decide-label">yes // skip</span> <span class="deck-decide-value">keep reasoning</span> </div> <div class="deck-decide-branch" data-branch="retrieve"> <span class="deck-decide-label">
no // aphrodite_retrieve(hash)
</span> <span class="deck-decide-value">1,420 B, unchanged</span> </div> </div> </div> <div class="deck-badges"> <span class="deck-badge">retrieval tax 1.3%</span> <span class="deck-badge">2,275 calls in 200 sessions</span> <span class="deck-badge" data-tone="teal">
recursive resolve
</span> <span class="deck-badge">compression is reversible</span> </div> </div>`} ${Scene.Visual === "hooks" && renderTemplate`<div class="deck-hooks"> <div class="deck-hook-grid"> ${Hooks.map((Hook) => renderTemplate`<div class="deck-hook"${addAttribute(String(Hook.Hot), "data-hot")}> <span class="deck-hook-chip">${Hook.Chip}</span> <span class="deck-hook-name">${Hook.Name}</span> <span class="deck-hook-role">${Hook.Role}</span> </div>`)} </div> <div class="deck-hook-foot"> <span class="deck-badge">6 hooks registered</span> <span class="deck-badge">13 tools in namespace</span> <span class="deck-badge" data-tone="teal">
ctypes shim -&gt; rust dylib
</span> <span class="deck-badge">4,096 / 1,024 char gates</span> </div> </div>`} ${Scene.Visual === "ledger" && renderTemplate`<div class="deck-ledger"> <div class="deck-compare"> ${Comparison.map((Side) => renderTemplate`<div class="deck-side"${addAttribute(Side.Side, "data-side")}> <span class="deck-side-head"> <span class="deck-state"${addAttribute(Side.Side === "proxy" ? "default" : "active", "data-state")}> ${Side.State} </span> <span>${Side.Head}</span> </span> ${Side.Rows.map((Row) => renderTemplate`<div class="deck-side-row"> <span class="deck-mark"${addAttribute(Side.Side === "proxy" ? "no" : "yes", "data-mark")}> ${Side.Side === "proxy" ? "×" : "✓"} </span> <span>${Row}</span> </div>`)} </div>`)} </div> <div class="deck-numbers"> ${Numbers.map((Entry) => renderTemplate`<div class="deck-number"> <span class="deck-number-value">${Entry.Value}</span> <span class="deck-number-label">${Entry.Label}</span> </div>`)} </div> </div>`} </div> </div>`} </section>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/Component/DeckScene.astro", void 0);
// Source/Presentation/Scenes.ts
var Scenes = [
	{
		Identifier: "opening",
		Beat: "CCR CORE // 64 SECOND BRIEF",
		Title: "Aphrodite",
		Body: "Tool output stops reaching the model raw. Four steps turn every result into a marker the agent can retrieve.",
		Duration: 4,
		Exit: {
			Href: "/",
			Label: "OVERVIEW"
		},
		Visual: "opening"
	},
	{
		Identifier: "default",
		Beat: "02 // THE DEFAULT",
		Title: "By default, every line enters the context.",
		Body: "A build prints 142 lines. Hermes forwards all of them, and every later turn re-sends the same block.",
		Duration: 6,
		Exit: {
			Href: "/",
			Label: "OVERVIEW"
		},
		Visual: "default"
	},
	{
		Identifier: "transform",
		Beat: "03 // THE TRANSFORMATION",
		Title: "The terminal keeps it. The model gets the digest.",
		Body: "One hook classifies the output, renders the preview, stores the bytes, and hands back the marker.",
		Duration: 7,
		Exit: {
			Href: "/showcase/",
			Label: "SHOWCASE"
		},
		Visual: "transform"
	},
	{
		Identifier: "overview",
		Beat: "04 // THE PIPELINE",
		Title: "Four steps, one decision.",
		Body: "Classify, preview, store, decide. The whole compress step stays under a millisecond.",
		Duration: 4.5,
		Exit: {
			Href: "/workbench/",
			Label: "WORKBENCH"
		},
		Visual: "overview"
	},
	{
		Identifier: "classify",
		Beat: "05 // STEP 1 - CLASSIFY",
		Title: "The classifier is the gate.",
		Body: "One type per invocation, first match wins. Each type carries its own threshold, so an error stays visible while a build log gets squeezed.",
		Duration: 6,
		Exit: {
			Href: "/tools/",
			Label: "TOOLS"
		},
		Visual: "classify"
	},
	{
		Identifier: "preview",
		Beat: "06 // STEP 2 - PREVIEW",
		Title: "The agent reads a line, not a blob.",
		Body: "An enriched, type-aware preview carries the signal the next decision needs: the error, the counts, the paths.",
		Duration: 6.5,
		Exit: {
			Href: "/examples/",
			Label: "EXAMPLES"
		},
		Visual: "preview"
	},
	{
		Identifier: "store",
		Beat: "07 // STEP 3 - STORE",
		Title: "The marker is the receipt.",
		Body: "BLAKE3 over the bytes, a 40-character address, and the original parked in SQLite or in memory.",
		Duration: 6,
		Exit: {
			Href: "/config/",
			Label: "CONFIG"
		},
		Visual: "store"
	},
	{
		Identifier: "decide",
		Beat: "08 // STEP 4 - DECIDE",
		Title: "Retrieve only when the answer needs the bytes.",
		Body: "The preview is enough most of the time. When it is not, aphrodite_retrieve resolves the marker, recursively and unchanged.",
		Duration: 6,
		Exit: {
			Href: "/case-study/",
			Label: "CASE STUDY"
		},
		Visual: "decide"
	},
	{
		Identifier: "hooks",
		Beat: "09 // THE HOOKS",
		Title: "Six hooks, one turn.",
		Body: "The plugin is a ctypes shim over a Rust dylib. Hermes calls it at every seam, so the intercept lands before the model sees anything.",
		Duration: 7,
		Exit: {
			Href: "/hooks/",
			Label: "HOOKS"
		},
		Visual: "hooks"
	},
	{
		Identifier: "ledger",
		Beat: "10 // THE LEDGER",
		Title: "A proxy sees the wire. Aphrodite sees the tool call.",
		Body: "The intercept lands before history, so the saving repeats on every later turn. Every marker stays resolvable.",
		Duration: 6.5,
		Exit: {
			Href: "/benchmarks/",
			Label: "BENCHMARKS"
		},
		Visual: "ledger"
	},
	{
		Identifier: "closing",
		Beat: "11 // THE INSTALL",
		Title: "Compress at the tool boundary.",
		Body: "The hooks run inside Hermes. The proxy stays for every other client.",
		Duration: 4.5,
		Exit: {
			Href: "/setup/",
			Label: "SETUP"
		},
		Visual: "closing"
	}
];
// Source/Presentation/Timeline.ts
/** One pass over the narration: each scene's start, and the deck's total. */
var Walk = Scenes.reduce((State, Scene) => ({
	Starts: [...State.Starts, State.Total],
	Total: State.Total + Scene.Duration
}), {
	Starts: [],
	Total: 0
});
/** The start time of each scene, in order. */
var Starts = Walk.Starts;
/** The deck's total length in seconds. */
var Total = Walk.Total;
var Timeline = {
	/** Total length in seconds (64 by construction: the sum of the durations). */
	Total,
	/** The start time of each scene, in order. */
	Starts,
	/** Where an elapsed time lands. Past the end it holds the last scene at progress 1. */
	At(Elapsed) {
		const Clamped = Math.max(0, Math.min(Total, Elapsed));
		for (let Index = Scenes.length - 1; Index >= 0; Index -= 1) {
			const Start = Starts[Index] ?? 0;
			if (Clamped >= Start) return {
				Index,
				Start,
				Progress: Total === 0 ? 0 : Clamped / Total
			};
		}
		return {
			Index: 0,
			Start: 0,
			Progress: 0
		};
	},
	/** The start time of the scene at an index, clamped to the deck. */
	StartOf(Index) {
		return Starts[Math.max(0, Math.min(Scenes.length - 1, Index))] ?? 0;
	},
	/**
	* The index of a beat by its Identifier - the fragment a deep link carries.
	* Returns -1 for a fragment the deck does not have, so a caller can tell
	* "no such beat" apart from "the first beat" and leave a bad hash alone
	* rather than silently landing on the opening.
	*/
	IndexOf(Identifier) {
		return Scenes.findIndex((Scene) => Scene.Identifier === Identifier);
	}
};
// Source/pages/presentation.astro
var presentation_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Presentation,
	file: () => $$file,
	url: () => $$url
});
var $$Presentation = createComponent(($$result, $$props, $$slots) => {
	const Total = Scenes.length;
	const Span = `${String(Math.floor(Timeline.Total / 60)).padStart(2, "0")}:${(Timeline.Total % 60).toFixed(1).padStart(4, "0")}`;
	const ScrubMax = Math.round(Timeline.Total * 10);
	const Opening = Scenes[0]?.Exit ?? {
		Href: "/",
		Label: "OVERVIEW"
	};
	const Stage = {
		classify: {
			Label: "STEP 1",
			Chip: "telemetry-tag--teal"
		},
		preview: {
			Label: "STEP 2",
			Chip: "telemetry-tag--canary"
		},
		store: {
			Label: "STEP 3",
			Chip: "telemetry-tag--crimson"
		},
		decide: {
			Label: "STEP 4",
			Chip: "telemetry-tag--bone"
		}
	};
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "PRESENTATION // APHRODITE",
		"Description": "A 64-second browser presentation of what Aphrodite does between a tool printing and the model reading: the default raw log, the split between what the user keeps and what the agent reads, and the four steps - classify, preview, store, decide - behind Aphrodite's Hermes plugin. Every beat links to the page that explains it in full."
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="deck" data-deck data-ui="hidden"> <div class="deck-frame" data-frame> ${Scenes.map((Scene, Index) => renderTemplate`<div class="deck-beat"${addAttribute(Scene.Identifier, "id")}> ${renderComponent($$result, "DeckScene", $$DeckScene, {
		"Scene": Scene,
		"Index": Index,
		"Total": Total
	})} </div>`)} <div class="deck-progress" aria-hidden="true"> <div class="deck-progress-fill" data-progress-fill></div> ${Timeline.Starts.map((Start, Index) => Index === 0 ? null : renderTemplate`<span class="deck-progress-tick"${addAttribute(`left:${(Start / Timeline.Total * 100).toFixed(3)}%`, "style")}></span>`)} </div> <p class="sr-only" role="status" data-live></p> <div class="deck-ui" data-control> <details class="deck-beats" data-beats data-control data-js-only> <summary class="deck-ui-button deck-beats-summary">BEATS</summary> <div class="deck-beats-panel"> <p class="deck-beats-index"> <span class="deck-beats-index-tag">DECK // BEAT INDEX</span> <span class="deck-beats-index-count"> ${`${String(Total).padStart(2, "0")} SCENES // ${Span}`} </span> </p> <nav aria-label="Beats"> <ol class="deck-beats-matrix"> ${Scenes.map((Scene, Index) => {
		const Step = Stage[Scene.Visual];
		return renderTemplate`<li class="deck-beats-cell"> <a class="deck-beats-link"${addAttribute(`#${Scene.Identifier}`, "href")}${addAttribute(Index, "data-beat")}${addAttribute(Index === 0 ? "true" : void 0, "aria-current")}> <span class="deck-beats-head"> <span class="deck-beats-ordinal"> ${String(Index + 1).padStart(2, "0")} </span> ${Step && renderTemplate`<span${addAttribute(["telemetry-tag", Step.Chip], "class:list")}> ${Step.Label} </span>`} <span class="deck-beats-span"> ${`${Scene.Duration.toFixed(1)}s`} </span> </span> <span class="deck-beats-name">${Scene.Title}</span> <span class="deck-beats-exit">${Scene.Exit.Label}</span> </a> </li>`;
	})} </ol> </nav> <p class="deck-beats-keys">
SPACE PLAY/PAUSE · LEFT/RIGHT BEAT · HOME/END FIRST/LAST · R RESTART · F
							FULLSCREEN · H HIDE CONTROLS
</p> </div> </details> <button class="deck-ui-button" type="button" data-prev data-control data-js-only aria-label="Previous beat">
PREV
</button> <button class="deck-ui-button" type="button" data-toggle data-control data-js-only>
PLAY
</button> <button class="deck-ui-button" type="button" data-next data-control data-js-only aria-label="Next beat">
NEXT
</button> <span class="deck-ui-clock" data-clock>${`00:00.0 / ${Span}`}</span> <span class="deck-ui-status" data-status>
PAUSED
</span> <span class="deck-ui-beat" data-beat-label>${`01 / ${String(Total).padStart(2, "0")}`}</span> <input class="deck-scrub" type="range" min="0"${addAttribute(ScrubMax, "max")} step="1" value="0" data-scrub data-control data-js-only aria-label="Seek through the brief"> <a class="deck-ui-exit" data-exit${addAttribute(Opening.Href, "href")}${addAttribute(`Read on: ${Opening.Label}`, "aria-label")}> <span>READ ON</span> <span class="deck-ui-exit-label" data-exit-label> ${Opening.Label} </span> <span aria-hidden="true">→</span> </a> </div> </div> </main> <noscript> <style>
			/* Without the player the controls are dead weight: keep the exit link,
			   which is a plain anchor and works. */
			[data-js-only] {
				display: none;
			}

			.deck[data-ui="hidden"] .deck-ui {
				opacity: 1 !important;
				pointer-events: auto !important;
			}
		</style> </noscript>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/presentation.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/presentation.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/presentation.astro";
var $$url = "/presentation";
// \0virtual:astro:page:Source/pages/presentation@_@astro
var page = () => presentation_exports;
export { page };
