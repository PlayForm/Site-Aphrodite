import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { E as unescapeHTML, _ as renderTemplate, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, n as $$ZineKicker, t as $$Base } from "./Base_Bs2-mKm9.mjs";
import { n as $$PageShell, t as $$ZineTape } from "./ZineTape_BXk9fOqY.mjs";
import { a as $$Related } from "./DocsSidebar_DymFAMH3.mjs";
import { t as $$SectionNav } from "./SectionNav_27seIZUa.mjs";
import { t as $$ZineBox } from "./ZineBox_CVeWVZDC.mjs";
import { t as $$ZineDiagramNav } from "./ZineDiagramNav_1LSOKumC.mjs";
import { t as $$ZinePipeline } from "./ZinePipeline_-719VGch.mjs";
import { t as $$ZineSource } from "./ZineSource_DoCsU3-s.mjs";
import { t as $$ZineSplit } from "./ZineSplit_Bo4eV8vJ.mjs";
import { t as $$ZineStatBar } from "./ZineStatBar_GGT-P2uW.mjs";
import { t as preview_flow_default } from "./preview-flow_C97q5w_W.mjs";
import { a as Figure, f as Study, l as Registry, n as Benchmark, p as Tier, r as Cite, s as Narrative, t as Band, u as Release } from "./Numbers_JGgF5DxR.mjs";
// Source/pages/case-study.astro
var case_study_exports = /* @__PURE__ */ __exportAll({
	default: () => $$CaseStudy,
	file: () => $$file,
	url: () => $$url
});
var $$CaseStudy = createComponent(($$result, $$props, $$slots) => {
	const Study$1 = Study;
	const Metrics = [
		{
			Id: "study.average-per-call",
			Label: "AVERAGE SAVED PER CALL",
			Unit: "TOKENS PER CALL",
			Accent: "text-weathered-teal"
		},
		{
			Id: "study.sessions.saved",
			Label: "SESSIONS WITH NONZERO ESTIMATED REDUCTION",
			Unit: `OF THE ${Study$1.Sessions} MEASURED`,
			Accent: "text-bone-white"
		},
		{
			Id: "study.median-ratio",
			Label: "MEDIAN SESSION RATIO",
			Unit: "SAVED OF THE BUDGET",
			Accent: "text-weathered-teal"
		}
	].map(({ Id, Label, Unit, Accent }) => ({
		Label,
		Unit,
		Accent,
		Fact: Figure(Id)
	}));
	const Bands = [
		{
			Id: "study.band.chat-only",
			Label: "CHAT-ONLY SESSIONS",
			Bar: "bg-zinc-dust"
		},
		{
			Id: "study.band.light-developer",
			Label: "LIGHT DEVELOPER SESSION",
			Bar: "bg-weathered-teal"
		},
		{
			Id: "study.band.tool-heavy",
			Label: "LONG TOOL-HEAVY SESSIONS",
			Bar: "bg-stamped-canary"
		},
		{
			Id: "study.band.pure-tool",
			Label: "PURE-TOOL WORKLOADS",
			Bar: "bg-raw-blood"
		}
	].map(({ Id, Label, Bar }) => ({
		Label,
		Bar,
		...Band(Id)
	}));
	const Claims = [
		{
			Stamp: "bg-raw-blood text-bone-white",
			Subject: "THE MARKER",
			Verb: "IS THE CONTRACT",
			Body: "<<<CCR:hash|type|size>>> - the address, the kind, and the cost of going back, in one string both the agent and every retrieval entry point understand."
		},
		{
			Stamp: "bg-stamped-canary text-soot-black",
			Subject: "THE CLASSIFIER",
			Verb: "IS THE GATE",
			Body: "Nothing moves until the type is named - because the type is what decides whether content earns visibility or a squeeze."
		},
		{
			Stamp: "bg-weathered-teal text-soot-black",
			Subject: "THE THRESHOLDS",
			Verb: "ARE THE KNOBS",
			Body: "A handful of per-type multipliers and a fill threshold - each mapped to one question the agent asks, each tuned by what sessions prove."
		}
	];
	const RealWorld = Benchmark.RealWorld.map(({ Type, Ratio, Percent }) => ({
		Type: Type.replace(/_/g, " ").toUpperCase(),
		Ratio,
		Percent
	}));
	const BenchTypes = Benchmark.Classes.map(({ Label, Without, With, Savings, Percent }) => ({
		Type: Label.toUpperCase(),
		Pair: `${Without} → ${With}`,
		Savings,
		Width: Percent
	}));
	const Bench = { Latency: Benchmark.Latency };
	const Tiers = [
		{
			Tier: "ERROR",
			Note: "errors stay visible longest"
		},
		{
			Tier: "CODE",
			Note: "source sits at the base threshold unless code_multiplier raises it"
		},
		{
			Tier: "DIFF / TRACKED",
			Note: "history, halved"
		},
		{
			Tier: "DEFAULT",
			Note: "the baseline"
		},
		{
			Tier: "NOISY (BASE)",
			Note: "never halved, always squeezed"
		}
	].map(({ Tier: Name, Note }) => ({
		...Tier(Name),
		Note
	}));
	const Classifier = {
		PipelineTypes: Narrative.CatalogTypes,
		RegistryTypes: Registry.Types
	};
	const Layers = [
		{
			N: "01",
			Name: "CLASSIFY",
			Figure: Benchmark.Classify,
			Tone: "teal",
			Note: "the gate: one type per invocation, first match wins"
		},
		{
			N: "02",
			Name: "PREVIEW",
			Figure: Narrative.PreviewTokens,
			Tone: "canary",
			Note: "the answer to 'do I care?' without the content"
		},
		{
			N: "03",
			Name: "STORE",
			Figure: "BLAKE3",
			Tone: "raw",
			Note: "SQLite / in-memory, the marker is the receipt"
		},
		{
			N: "04",
			Name: "DECIDE",
			Figure: "RETRIEVE?",
			Tone: "bone",
			Note: "the agent, not the engine, spends the budget"
		}
	];
	const StageInk = {
		teal: "!text-weathered-teal",
		canary: "!text-stamped-canary",
		raw: "!text-raw-blood",
		bone: "!text-bone-white",
		dust: "!text-zinc-dust"
	};
	const LayerCards = Layers.map(({ Tone, ...Layer }) => ({
		...Layer,
		Ink: StageInk[Tone]
	}));
	const Flood = [
		"result:$ cargo build --release 2>&1",
		"dim:    Compiling libc v0.2.168",
		"dim:    Compiling tokio v1.47.1",
		"fade:    Compiling serde v1.0.219",
		"fade:    Compiling axum v0.8.4",
		"mute:    Compiling aphrodite v1.6.6",
		"mute:... 136 more identical lines ...",
		"canary:warning: unused import: `HashMap`",
		"mute:Finished `release` [optimized] in 41.7s"
	];
	const Sections = [
		{
			Id: "claims",
			Label: "THE CLAIMS"
		},
		{
			Id: "problem",
			Label: "PROBLEM"
		},
		{
			Id: "gate",
			Label: "GATE"
		},
		{
			Id: "contract",
			Label: "CONTRACT"
		},
		{
			Id: "loop",
			Label: "LOOP"
		},
		{
			Id: "knobs",
			Label: "KNOBS"
		},
		{
			Id: "evidence",
			Label: "EVIDENCE"
		},
		{
			Id: "history",
			Label: "HISTORY"
		}
	];
	const Arcs = [
		{
			N: "ARC 1",
			Span: "v1.3.0 -> v1.3.2",
			Law: "THE LOSSLESSNESS LAW",
			Tone: "canary",
			Border: "border-raw-blood",
			Title: "Hash the ORIGINAL, never the wrapper",
			Incident: [["Compressing a Hermes wrapper stored the <em>extracted</em> content under", "<code class=\"font-mono text-base\">hash(extracted)</code> and discarded the original."].join(" "), [
				"A failed command's <code class=\"font-mono text-base\">exit_code</code> and",
				"<code class=\"font-mono text-base\">error</code> fields were unrecoverable after",
				"compression, and caller JSON that merely matched a wrapper shape - e.g.",
				"<code class=\"font-mono text-base\">{\"content\":\"hi\",\"id\":42}</code> - got",
				"permanently collapsed to one field."
			].join(" ")],
			Fix: ["Both the hook and the tool paths now hash and store the ORIGINAL content always;", "the unwrapped view is used only for classification and preview."].join(" "),
			Today: [
				"Retrieval is byte-exact by construction - backends store and return content",
				"verbatim as UTF-8 strings, no zstd on the path - and a full-document retrieval",
				"(<code class=\"font-mono text-base\">limit: 0</code>) returns the exact original",
				"bytes, hashing back to the marker's own hash."
			].join(" "),
			Src: "SRC: CHANGELOG.md:683-706 · docs/api/retrieve.md (\"byte-exact by construction\")"
		},
		{
			N: "ARC 2",
			Span: "v1.3.8 -> v1.3.9",
			Law: "THE PUBLISHING INCIDENT",
			Tone: "canary",
			Border: "border-stamped-canary",
			Title: "The tarball that compiled locally and failed everywhere else",
			Incident: [[
				"v1.3.8 published to crates.io but was <em>uninstallable</em>:",
				"<code class=\"font-mono text-base\">Cargo.toml</code> had",
				"<code class=\"font-mono text-base\">exclude = [..., \"*.md\", ...]</code>, and cargo",
				"applies <code class=\"font-mono text-base\">exclude</code> at publish time -",
				"recursively."
			].join(" "), [
				"The six <code class=\"font-mono text-base\">builtin_directives/*.md</code>",
				"files embedded via <code class=\"font-mono text-base\">include_str!</code> were",
				"stripped from the tarball, so the local checkout built fine and CI's Test job",
				"passed - but <code class=\"font-mono text-base\">cargo install aphrodite</code>",
				"failed at compile time."
			].join(" ")],
			Fix: [
				"Drop the recursive <code class=\"font-mono text-base\">*.md</code> exclusion (and",
				"never combine <code class=\"font-mono text-base\">include</code> with",
				"<code class=\"font-mono text-base\">exclude</code> - cargo would ignore",
				"<code class=\"font-mono text-base\">exclude</code> and drop the targets), add a",
				"<code class=\"font-mono text-base\">cargo package --list</code> packaging guard to",
				"CI, and a durable in-crate regression test that fails when",
				"<code class=\"font-mono text-base\">*.md</code> returns to",
				"<code class=\"font-mono text-base\">exclude</code>."
			].join(" "),
			Today: [
				"crates.io versions are immutable - v1.3.8 stays broken forever, superseded as",
				"the working release; the packaging guard means this class of regression can",
				"never reach crates.io again."
			].join(" "),
			Src: "SRC: CHANGELOG.md:408-450"
		},
		{
			N: "ARC 3",
			Span: "v1.6.3",
			Law: "ONE RUNTIME HOME",
			Tone: "teal",
			Border: "border-weathered-teal",
			Title: "One decision, made once, by both halves",
			Incident: [[
				"Issue #40: the plugin's Python shim resolved the runtime home from",
				"<code class=\"font-mono text-base\">$HERMES_HOME</code> while the Rust half",
				"resolved it from <code class=\"font-mono text-base\">$HOME</code>."
			].join(" "), [
				"Whenever they diverged - the shipped Docker image, profile gateways - the shim",
				"looked for binaries in a directory that never existed, disabled the plugin, and",
				"orphaned the previous runtime home, config and provider API key included."
			].join(" ")],
			Fix: [[
				"The shim resolves the runtime home once",
				"(<code class=\"font-mono text-base\">$APHRODITE_HOME</code> override, then",
				"<code class=\"font-mono text-base\">&lt;hermes-home&gt;/aphrodite</code>, then",
				"<code class=\"font-mono text-base\">~/.hermes/aphrodite</code>) and exports it to",
				"the Rust half through <code class=\"font-mono text-base\">APHRODITE_HOME</code>, so",
				"the dylib and the spawned proxy agree by construction."
			].join(" "), "Legacy installs are adopted with a one-line warning, never migrated."],
			Today: ["Per-Hermes-home isolation extends to the whole stack, and the startup log names", "the decision: <code class=\"font-mono text-base\">runtime home: &lt;path&gt; (decided by ...)</code>."].join(" "),
			Src: "SRC: CHANGELOG.md:104-154"
		},
		{
			N: "ARC 4",
			Span: "v1.6.5",
			Law: "THE CHECKSUM LAW",
			Tone: "dust",
			Border: "border-raw-blood",
			Title: "In-tree SHA256SUMS.txt is the only truth",
			Incident: [[
				"The download scripts used to fetch the release-hosted per-target checksums and",
				"had warn-and-skip paths - a missing checksum file or tool degraded to a warning",
				"instead of a refusal."
			].join(" "), "A plugin-hardening catalog review called it out."],
			Fix: [[
				"The pinned tree's <code class=\"font-mono text-base\">SHA256SUMS.txt</code> became",
				"the only checksum source of truth: a missing file, a",
				"<code class=\"font-mono text-base\">BINARY_VERSION</code> mismatch, a missing",
				"target block, or a missing asset entry is a hard refusal (exit 1), and a missing",
				"<code class=\"font-mono text-base\">shasum</code>/<code class=\"font-mono text-base\">sha256sum</code>",
				"tool is a hard refusal rather than a skipped check."
			].join(" "), [
				"The legacy",
				"<code class=\"font-mono text-base\">~/.hermes/aphrodite</code> home adoption in the",
				"runtime lookup is also gone."
			].join(" ")],
			Today: [
				"Every release ships 12 artifacts - 4 targets x (binary, plugin dylib,",
				"SHA256SUMS) - and the dylib arm refuses installs when the in-tree checksums are",
				"missing."
			].join(" "),
			Src: "SRC: CHANGELOG.md:39-67 · the Aphrodite/v1.6.5 release note"
		},
		{
			N: "ARC 5",
			Span: "v1.6.6",
			Law: "THE PATH GUARDS",
			Tone: "canary",
			Border: "border-stamped-canary",
			Title: "Some paths are never read",
			Incident: ["Nothing stopped the prefetch path from reading the files most likely to contain", "secrets - environment files, auth tokens, SSH keys, or the Hermes home itself."].join(" "),
			Fix: [
				"<code class=\"font-mono text-base\">aphrodite_prefetch</code> refuses",
				"<code class=\"font-mono text-base\">.env</code>,",
				"<code class=\"font-mono text-base\">auth.json</code>,",
				"<code class=\"font-mono text-base\">~/.ssh</code>, the Hermes home, and non-file",
				"paths outright, answering with",
				"<code class=\"font-mono text-base\">ReadOutcome::Refused</code> plus a",
				"<code class=\"font-mono text-base\">refuse_reason</code> instead of reading them."
			].join(" "),
			Today: [
				"Setup is hardened the same way: the Hermes-home plugin directory is report-only -",
				"no writes, no deletes - and the same release re-described the context engine as",
				"opt-in with a <code class=\"font-mono text-base\">requires_hermes &gt;= 0.20.2</code>",
				"floor."
			].join(" "),
			Src: "SRC: CHANGELOG.md:3-37 · the Aphrodite/v1.6.6 release note"
		}
	];
	for (const Arc of Arcs) for (const Version of Arc.Span.match(/v[\d.]+/g) ?? []) Release(Version);
	const BorderRule = {
		"border-raw-blood": "var(--raw-blood)",
		"border-stamped-canary": "var(--stamped-canary)",
		"border-weathered-teal": "var(--weathered-teal)"
	};
	const ArcsWithBeats = Arcs.map((Arc) => ({
		...Arc,
		Rule: BorderRule[Arc.Border],
		Ink: StageInk[Arc.Tone],
		Beats: [
			{
				N: "01",
				Label: "The incident.",
				Sentences: [Arc.Incident].flat()
			},
			{
				N: "02",
				Label: "The fix.",
				Sentences: [Arc.Fix].flat()
			},
			{
				N: "03",
				Label: "Mechanics today.",
				Sentences: [Arc.Today].flat()
			}
		]
	}));
	const TokenGroups = Study$1.TokensSaved.split(",");
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "CASE STUDY // APHRODITE",
		"Description": `Why Aphrodite is shaped this way: the marker is the contract, the classifier is the gate, the thresholds are the knobs - measured at ${Study$1.TokensSaved} context tokens saved across ${Study$1.Sessions} real sessions.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageShell", $$PageShell, { "Rhythm": "wide" }, { "default": ($$result) => renderTemplate`  ${maybeRenderHead($$result)}<header class="relative flex w-full flex-col items-start pt-12" data-enter> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "strip",
		"Label": "CASE FILE // APHRODITE-CCR · SEP 2026 · MEASURED"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "crimson",
		"Size": "lg",
		"Class": "w-full lg:p-16"
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "dust" }, { "default": ($$result) => renderTemplate`THE CASE STUDY // WHY, NOT HOW` })} <h1 class="mt-8 font-headline text-5xl font-black uppercase leading-[0.9] tracking-tighter text-bone-white drop-shadow-[4px_4px_0px_#520612] sm:text-7xl lg:text-8xl">
Why Aphrodite
<br>
is shaped <span class="text-stamped-canary">this way</span> </h1> <p class="mt-16 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Not a tour of the code - an argument about the shape.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
An agent's context is a budget, and every tool call spends it on raw output
					before the agent can decide whether any of it mattered.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Aphrodite's answer is structural: show the shape of the output, keep the
					substance on call, and make the agent - not the engine - the one who pays for
					detail.
</p>  <aside class="tier-inverted grunge grunge--oxblood zine-box-subtle relative mt-24 w-full max-w-4xl border-[3px] border-raw-blood p-8 sm:p-10" style="--tier-inverted: var(--bone-newsprint)" data-grunge data-enter="240"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "ink" }, { "default": ($$result) => renderTemplate`CONTEXT TOKENS SAVED · 200 REAL SESSIONS` })}  <div class="mt-6 font-headline text-5xl font-black tracking-tighter text-soot-black drop-shadow-[3px_3px_0px_#520612] sm:text-7xl">  <span>${unescapeHTML(TokenGroups.join(",<wbr>"))}</span> </div> <div class="mt-6 flex flex-wrap items-center gap-4"> <span class="telemetry-tag telemetry-tag--canary"> ${Study$1.SavedPct.replace("%", "")}% OF THE TOTAL BUDGET
</span> </div> <p class="mt-6 max-w-3xl font-body text-base leading-relaxed text-carbon-void">
The percentage is the honest way to read the number: ${Study$1.TokensSaved}${" "}
tokens is only impressive once you know what it was a share of.${" "} ${Study$1.SessionsUnsaved} of the ${Study$1.Sessions} sessions saved nothing at
						all, and the mean is pulled up by the long tool-heavy runs - which is why
						the median sits beside it.
</p> <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3"> ${Metrics.map(({ Label, Fact, Unit, Accent }) => renderTemplate`<div class="well p-4 sm:p-5"> <div class="type-meta font-black text-zinc-dust">${Label}</div> <div${addAttribute(`mt-2 font-headline text-2xl font-black tracking-tight ${Accent}`, "class")}> ${Fact.Value} </div> <div class="mt-1 type-caption text-zinc-dust">${Unit}</div> <div class="mt-1 type-body text-zinc-dust"> <span class="type-meta">${Fact.Kind.toUpperCase()}</span> &bull;${" "} ${Fact.Scope} </div> </div>`)} </div> </aside>  ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [`SRC: ${Cite(Study$1.From)}.`] })} ` })} </header>  <section id="claims" class="blueprint-section relative w-full" data-reveal> <p class="section-index !text-raw-blood">01 // THE CLAIMS // THREE LINES</p> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The whole argument fits in three lines, and every section that follows is the
				evidence for one of them.
</p> <!-- The three claims arrive as one plate on a delay of their own: they
			     are a single argument stated three ways, so staggering them one by
			     one would make them read as three separate points. --> <div class="mt-16 isolate grid grid-cols-1 gap-16 lg:grid-cols-3" data-enter="180"> ${Claims.map(({ Stamp, Subject, Verb, Body }) => renderTemplate`<div class="zine-box-subtle relative border-[3px] border-oxblood-dark bg-carbon-void p-6 pt-9 transition-transform duration-200 hover:rotate-0 sm:-rotate-[1deg] sm:hover:rotate-0"> <div${addAttribute(`inline-block px-3 py-1 font-mono text-base font-black uppercase tracking-widest ${Stamp}`, "class")}> ${Subject} </div> <h2 class="mt-8 font-headline text-2xl font-black uppercase tracking-tight text-bone-white"> ${Verb} </h2> <p class="mt-6 font-body text-base leading-relaxed text-bone-newsprint"> ${Body} </p> </div>`)} </div> <p class="mt-16 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
That is the whole architecture: the agent keeps its budget for reasoning, and pays
				for detail only when detail is the answer.
</p> </section> ${renderComponent($$result, "SectionNav", $$SectionNav, { "Sections": Sections })}  <section id="problem" class="blueprint-section relative w-full" data-reveal> <p class="section-index !text-raw-blood">02 // THE PROBLEM // THE FLOOD</p> ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "crimson",
		"Size": "lg",
		"Rotate": "-rotate-[0.6deg]",
		"Class": "mt-8 w-full",
		"Wipe": true
	}, { "default": ($$result) => renderTemplate` <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
The flood is not the data's fault
</h2> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Every file read, build, code search, or browser open floods the agent's context
					with raw output - compilation logs, accessibility trees, JSON blobs.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The structural failure is upstream: the agent spends its budget reading noise
					instead of reasoning, because raw output arrives <em>before any decision</em> -
					the context pays the full price for content the agent may never use.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Compression applied after the fact cannot refund a turn that already happened, so
					the intervention point has to be${" "} <strong class="text-bone-white">before the LLM sees anything</strong>.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
That is the first design commitment: intercept at the tool boundary, not inside
					the prompt.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Aphrodite replaces the output with a compact, structured preview -${" "} ${Narrative.PreviewTokens}
of metadata instead of hundreds - and keeps the full content retrievable.
</p> ` })} <!-- THE PAIR: the terminal keeps the flood, the model reads one line. --> <div class="mt-24"> ${renderComponent($$result, "ZineSplit", $$ZineSplit, {
		"Raw": Flood,
		"Preview": "[build:1E 1W 142L | error[E0432]: unresolved import ...]",
		"Hash": "&lt;&lt;&lt;CCR:0e3a5c9f...a1e|build|1420&gt;&gt;&gt;"
	})} </div> <div class="mt-8"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "dust",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`
≈ 1,400 TOKENS · MOSTLY NOISE · ONE LINE MATTERED
` })} </div> </section>  <section id="gate" class="blueprint-section relative w-full" data-reveal> <p class="section-index !text-stamped-canary">03 // THE GATE // THE CLASSIFIER</p> ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "canary",
		"Size": "lg",
		"Rotate": "rotate-[0.5deg]",
		"Class": "mt-8 w-full",
		"Wipe": true
	}, { "default": ($$result) => renderTemplate` <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
The classifier is the gate
</h2> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Why classify before compressing?
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Because "compress everything equally" destroyed signal.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
A compiler error and a verbose build log are both output - but one must stay
					visible and the other should never have been shown in full, and a single
					compression policy cannot serve both.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
So the type-aware classifier runs first - ${Benchmark.Classify}, first match wins
					- and each content type carries its own compression threshold tier.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The README's pipeline renders ${Classifier.PipelineTypes} types in its catalog,
					from <code class="font-mono text-base">build</code> to${" "} <code class="font-mono text-base">text</code>; the full classification registry
					backing it is ${Classifier.RegistryTypes} types
					(docs/classification/content-types.md).
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
When the classifier only reaches a generic bucket, a conservative semantic
					detector upgrades it to the high-signal shapes (git, gitlog, grep, ls, test);
					ordinary prose is never mis-tagged.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
This is the "secret sauce" made plain:${" "} <strong class="text-bone-white">the classifier is the gate</strong>.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Nothing is compressed, stored, or marked until the gate has named it - and the
					name is what everything downstream keys on.
</p> ` })} <figure class="well mt-24 p-4 sm:p-5" data-diagram="preview-flow" data-enter="220"> <div class="overflow-x-auto">${unescapeHTML(preview_flow_default)}</div> <figcaption class="mt-6 font-mono text-base font-black uppercase tracking-widest text-zinc-dust">
M2 // PREVIEW FLOW
</figcaption> <p class="mt-6 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The figure runs in one direction: every blob is classified first, then routed
					into one of five threshold groups:
</p> <ul class="mt-3 max-w-3xl space-y-2 font-body text-base leading-relaxed text-bone-newsprint"> <li class="border-l-4 border-raw-blood pl-4">error ×8</li> <li class="border-l-4 border-raw-blood pl-4">code ×3.0</li> <li class="border-l-4 border-raw-blood pl-4">tracked ×2</li> <li class="border-l-4 border-raw-blood pl-4">default ×1</li> <li class="border-l-4 border-raw-blood pl-4">and the noisy base group.</li> </ul> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The noisy group is pinned - linter, build_output and log are never halved and
					never tuned.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
On top of the tier sits the EMA auto-tune:
</p> <ul class="mt-3 max-w-3xl space-y-2 font-body text-base leading-relaxed text-bone-newsprint"> <li class="border-l-4 border-raw-blood pl-4">
a type whose measured ratio stays above 20 doubles its patience
</li> <li class="border-l-4 border-raw-blood pl-4">a type under 3 halves it</li> <li class="border-l-4 border-raw-blood pl-4">
and the budget header scales the result between ×0.5 and ×1.0.
</li> </ul> </figure> </section>  <section id="contract" class="blueprint-section relative w-full" data-reveal> <p class="section-index !text-weathered-teal">04 // THE CONTRACT // THE MARKER</p> ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "teal",
		"Size": "lg",
		"Rotate": "-rotate-[0.4deg]",
		"Class": "mt-8 w-full",
		"Wipe": true
	}, { "default": ($$result) => renderTemplate` <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
The marker is the contract
</h2> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Replacing output with a summary only works if the missing content stays
					reachable, and the bridge between the two is a single string:
</p> <div class="ccr-marker mt-6 border border-oxblood-dark bg-soot-black px-4 py-3 font-mono text-base text-weathered-teal"> ${"<<<CCR:0e3a5c9f2b8d4e6a1c3f5b7d9e0a2c4b6d8f0a1e|build|1420>>>"} </div> <p class="mt-6 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Hash, type, size - in that order, on purpose.
</p> <div class="mt-8 grid grid-cols-1 divide-y divide-oxblood-dark border-y border-oxblood-dark sm:grid-cols-3 sm:divide-x sm:divide-y-0"> <div class="py-5 sm:px-6 sm:first:pl-0 sm:last:pr-0"> <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1"> <span class="section-index !text-weathered-teal">01</span> <strong class="font-mono text-base font-black uppercase tracking-widest text-bone-white">
HASH
</strong> </div> <p class="mt-4 font-body text-base leading-relaxed text-bone-newsprint">
The full 40-char BLAKE3 digest - the address of the stored original.
</p> </div> <div class="py-5 sm:px-6 sm:first:pl-0 sm:last:pr-0"> <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1"> <span class="section-index !text-weathered-teal">02</span> <strong class="font-mono text-base font-black uppercase tracking-widest text-bone-white">
TYPE
</strong> </div> <p class="mt-4 font-body text-base leading-relaxed text-bone-newsprint">
Tells the agent what kind of thing it skipped.
</p> </div> <div class="py-5 sm:px-6 sm:first:pl-0 sm:last:pr-0"> <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1"> <span class="section-index !text-weathered-teal">03</span> <strong class="font-mono text-base font-black uppercase tracking-widest text-bone-white">
SIZE
</strong> </div> <p class="mt-4 font-body text-base leading-relaxed text-bone-newsprint">
Tells it how much.
</p> </div> </div> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Three fields are all an agent needs to decide whether retrieval is worth it -
					which is exactly why the marker, not a tool call, is the contract: every
					retrieval entry point (
<code class="font-mono text-base">aphrodite_retrieve</code>,
<code class="font-mono text-base">/retrieve</code>,
<code class="font-mono text-base">resolve</code>) accepts the marker body
					directly, suffix or no suffix.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The marker carries no content of its own - three fields and no payload - so it
					can be printed, copied and passed around without spending the budget it was
					minted to save.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The store behind it is deliberately boring: BLAKE3 → SQLite (persistent, the
<span class="text-weathered-teal">:9798</span> token listener) or in-memory
					DashMap (10K entries, the <span class="text-weathered-teal">:9797</span>
cache listener).
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Storage is not the interesting problem: the agent's decision needs a stable
					address, and that is all the marker has to be.
</p> ` })} </section>  <section id="loop" class="blueprint-section relative w-full" data-reveal> <p class="section-index !text-raw-blood">05 // THE LOOP // FOUR LAYERS</p> ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "crimson",
		"Size": "lg",
		"Rotate": "rotate-[0.4deg]",
		"Class": "mt-8 w-full",
		"Wipe": true
	}, { "default": ($$result) => renderTemplate` <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
Four layers, one decision
</h2> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The pipeline is short on purpose: classify, preview, store, decide.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The whole compress step is sub-millisecond - end-to-end latency is${" "} ${Bench.Latency}
including the HTTP round-trip - because the design spends its complexity budget
					on the decision, not the transform.
</p>  <div class="mt-16 isolate grid grid-cols-1 items-start gap-16 sm:grid-cols-2 xl:grid-cols-4" data-enter="200"> ${LayerCards.map(({ N, Name, Figure, Ink, Note }) => renderTemplate`<div class="zine-box-subtle relative border-[3px] border-oxblood-dark bg-carbon-void p-6 transition-transform duration-200 hover:rotate-0 sm:-rotate-[1.2deg] sm:hover:rotate-0"> <p${addAttribute(["section-index", Ink], "class:list")}>LAYER // ${N}</p> <div class="mt-4 font-headline text-2xl font-black tracking-tight text-bone-white"> ${Figure} </div> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "canary",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`${Name}` })} <div class="mt-8 border-t border-oxblood-dark pt-8 text-base leading-relaxed text-zinc-dust"> ${Note} </div> </div>`)} </div> <div class="shell-card mt-16 p-5 font-body text-base leading-relaxed text-bone-newsprint"> <p>
And the engine stays polite about it: compression is opt-in and
						non-destructive - everything the agent ever saw stays retrievable unchanged.
</p> <p class="mt-3">
What the <code class="font-mono text-base">pre_llm_call</code> hook adds
						each turn is an injection assembler, not a rewrite: directives are never
						dropped, nudges are capped at 2, background status and recall are the first
						things to yield, and the whole injection lives inside a 4,000-character
						budget.
</p> <p class="mt-3">
Two modes cover every entry point -
<strong class="text-bone-white">plugin hooks</strong> intercept tool results
						directly with no API round-trip, and the${" "} <strong class="text-bone-white">reverse proxy</strong> compresses Chat
						Completions responses for any OpenAI-compatible client.
</p> <p class="mt-3">
No clever model, no lossy summarizer in the loop - just an honest receipt, a
						fast gate, and a set of knobs the evidence can turn.
</p> </div>  <h3 class="mt-24 font-headline text-xl font-black uppercase tracking-tight text-bone-white sm:text-2xl">
The decision, in two branches
</h3> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Every marker ends in the same question, and the agent answers it twice: the
					preview either carried enough, or it did not.
</p> <div class="mt-16"> ${renderComponent($$result, "ZinePipeline", $$ZinePipeline, { "Mode": "decide" })} </div> ` })} </section>  <section id="knobs" class="blueprint-section relative w-full" data-reveal> <p class="section-index !text-stamped-canary">06 // THE KNOBS // THRESHOLDS</p> ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "canary",
		"Size": "lg",
		"Rotate": "-rotate-[0.5deg]",
		"Class": "mt-8 w-full",
		"Wipe": true
	}, { "default": ($$result) => renderTemplate` <div class="grid grid-cols-1 gap-32 lg:grid-cols-2" data-enter="200"> <div> <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
The thresholds are the knobs
</h2> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
A compression policy that cannot be tuned is a policy that will be
							fought.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Aphrodite's tunables are deliberately few and deliberately at the layer
							where they matter: the threshold multipliers per type (from
<code class="font-mono text-base">aphrodite.toml</code>'s${" "} <code class="font-mono text-base">[compression]</code>), the${" "} <code class="font-mono text-base">preview_max_chars</code> preview
							budget, and the context engine's fill threshold (
<code class="font-mono text-base">engine_threshold_pct</code>).
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Few, because each knob maps to a question the agent actually asks:${" "} <em>how patient should I be with this kind of output?</em> </p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The adaptive layer answers it statistically -${" "} <code class="font-mono text-base">post_llm_call</code> captures savings
							and updates EMA state per type - so the defaults move toward what the
							sessions themselves prove useful, and the config only has to set the
							priors.
</p> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The savings those priors produce across 200 real sessions - the ledger,
							the session-shape bands, the retrieval tax - are on the benchmarks page,
							which owns the study.
</p> </div> <!-- THRESHOLD TIERS: the multiplier each content type carries. One
					     frame, five ruled rows - the decision matrix reading. Each row
					     used to carry its own border and fill, which made five separate
					     cards out of one table and repeated the same frame five times. --> <div class="flex flex-col gap-6"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, { "Tone": "dust" }, { "default": ($$result) => renderTemplate`THRESHOLD TIERS` })} <div class="shell-card"> ${Tiers.map(({ Tier, Types, Multiplier, Note }) => renderTemplate`<div class="flex items-center justify-between gap-8 border-b border-oxblood-dark px-4 py-3 last:border-b-0"> <div class="min-w-0"> <div class="font-mono text-base font-black uppercase tracking-widest text-bone-white"> ${Tier} <span class="ml-2 text-stamped-canary"> ${Multiplier} </span> </div> <div class="truncate font-mono text-base text-zinc-dust"> ${Types} </div> </div>  <div class="hidden min-w-0 text-right font-mono text-base text-weathered-teal sm:block"> ${Note} </div> </div>`)} </div> <div class="font-mono text-base leading-relaxed text-zinc-dust">
HIGHER MULTIPLIER = LONGER THE CONTENT STAYS VISIBLE BEFORE COMPRESSION
</div> <div class="font-mono text-base leading-relaxed text-zinc-dust">
CODE ${Narrative.CodeMultiplier} IS THE SHIPPED DEFAULT (
${Narrative.CodeMultiplierKey.toUpperCase()}) - SOURCE SITS AT THE BASE
							THRESHOLD UNTIL AN OPERATOR RAISES IT
</div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [`SRC: ${Cite(Narrative.From)}.`] })} </div> </div> ` })} </section>  <section id="evidence" class="blueprint-section relative w-full" data-reveal> <p class="section-index !text-weathered-teal">
07 // THE EVIDENCE // WHAT ONE OUTPUT COSTS
</p> ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "teal",
		"Size": "lg",
		"Rotate": "-rotate-[0.4deg]",
		"Class": "mt-8 w-full",
		"Wipe": true
	}, { "default": ($$result) => renderTemplate` <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
What one output costs
</h2> <p class="mt-8 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Two measurements carry the argument: what each output class compressed to in the
					wild, and what the standard corpus paid per type.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The corpus ratios, the ${Benchmark.Ceiling} ceiling, the median and the reproduce
					commands are on the benchmarks page.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Every bar is its ratio read as a width - ${Benchmark.RealWorld[0].Ratio} fills${" "} ${Benchmark.RealWorld[0].Percent}% of the scale - so the two columns compare
					magnitudes without normalising either one.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The pair carries the argument's sharpest claim: the ratio is a property of the
					content type, not of the session that produced it.
</p> <div class="mt-16 grid grid-cols-1 gap-24 lg:grid-cols-2" data-enter="200"> <!-- Real-world per-output compression --><div class="shell-card flex flex-col gap-8 p-5 sm:p-6"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "dust",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`
REAL-WORLD PER-OUTPUT COMPRESSION (ORIG →${" "}${Narrative.MarkerTokens.toUpperCase()} MARKER) &bull; ESTIMATED
` })} ${RealWorld.map(({ Type, Ratio, Percent }) => renderTemplate`${renderComponent($$result, "ZineStatBar", $$ZineStatBar, {
		"Label": Type,
		"Ratio": Ratio,
		"Percent": Percent,
		"Color": "canary"
	})}`)} </div> <!-- Per-type standard-corpus bars --> <div class="shell-card flex flex-col gap-8 p-5 sm:p-6"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "dust",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`
PER-TYPE COMPRESSION (STANDARD CORPUS) &bull; MEASURED
` })} ${BenchTypes.map(({ Type, Pair, Savings, Width }) => renderTemplate`${renderComponent($$result, "ZineStatBar", $$ZineStatBar, {
		"Label": `${Type} · ${Pair}`,
		"Ratio": Savings,
		"Percent": Width,
		"Color": "teal"
	})}`)} ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "canary",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`
20/20 COMPRESSED · 20/20 RETRIEVE OK
` })} </div> </div>  <div class="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-2" data-enter="320"> <div class="border-l-4 border-weathered-teal pl-6"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "teal",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`
RETRIEVAL TAX
` })} <p class="mt-6 font-body text-base leading-relaxed text-bone-newsprint">
Retrieval re-entry cost${" "} <span class="text-stamped-canary">${Study$1.TaxCalls}</span> calls and${" "} <span class="text-stamped-canary">${Study$1.TaxTokens}</span> tokens across
							the study - the price of going back for detail.
</p> <p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint">
It is the reason the design pushes previews so hard: the tax only gets
							paid when the preview fails to answer the question, so the preview is
							engineered to answer most of them.
</p> <p class="mt-3 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
Read against the ledger, that is about ${Study$1.TaxPct} of the tokens the
							study saved: the whole cost of going back, paid only on the turns a
							preview did not answer. Paying the full output again instead would have
							cost roughly ${Study$1.TaxFactor}
times as much.
</p> </div> <div class="shell-card p-5 font-body text-base leading-relaxed text-bone-newsprint"> <p> <span class="font-mono text-base font-bold uppercase tracking-widest text-zinc-dust">
CONFIDENCE ·${" "} </span>
The causal result - CCR removes context pressure for large repeated tool
							outputs, and tool-heavy usage benefits far more than chat - is high.
</p> <p class="mt-3">
The exact percentage is a band: the marker's byte size is the only trace
							of the original content (the inline store is session-scoped), so savings
							were estimated with a calibrated chars/tok ratio; sensitivity across${" "} ${Study$1.CharsPerTok} chars/tok spans ${Study$1.Band}, centered${" "} ${Study$1.BandCenter}.
</p> <p class="mt-3">
And the study is an author-run reconstruction, not a randomised
							comparison: it establishes neither better task success nor universal
							cost savings. What it measures is how much context the markers replaced
							in these sessions, and what that reconstruction cost in tokens.
</p> </div> </div>  <div class="mt-24" data-enter="440"> ${renderComponent($$result, "ZineKicker", $$ZineKicker, {
		"Tone": "dust",
		"As": "div"
	}, { "default": ($$result) => renderTemplate`
SAVINGS BY SESSION SHAPE
` })} <p class="mt-6 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
The same engine saves nothing in a chat and almost everything in a
						tool-heavy run, because the ratio tracks how much raw output the session
						produces at all.
</p> <div class="mt-8 flex flex-col gap-6"> ${Bands.map(({ Label, Range, Percent, Bar, Kind }) => renderTemplate`<div> <div class="flex flex-wrap items-baseline justify-between gap-4 font-mono text-base"> <span class="font-black uppercase tracking-widest text-bone-white"> ${Label} </span> <span class="flex items-baseline gap-3"> ${Kind === "simulated" && renderTemplate`<span class="border border-raw-blood px-1.5 py-0.5 type-meta font-black text-stamped-canary">
SIMULATED
</span>`} <span class="text-stamped-canary">${Range}</span> </span> </div> <div class="mt-2 h-3 w-full border border-oxblood-dark bg-soot-black"> <div${addAttribute(`h-full ${Bar}`, "class")}${addAttribute(`width: ${Percent}%`, "style")}></div> </div> </div>`)} </div> <p class="mt-6 max-w-3xl font-body text-base leading-relaxed text-bone-newsprint">
A pure-tool workload is the ceiling case and a chat-only session is the
						floor, which is why the study reports a median beside the mean. The fourth
						bar is a simulated loop, not a recorded session: it is marked as one because
						a stress test read as a fourth observation would be the page's own
						over-claim.
</p> <div class="mt-6 font-mono text-base leading-relaxed text-zinc-dust">
SAVINGS SCALE WITH TOOL-OUTPUT VOLUME AND SESSION LENGTH - THE SAME ENGINE,
						FOUR DIFFERENT PAYOFFS, ALL FROM THE SAME KNOBS.
</div> </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [`SRC: ${Cite(Study$1.From)} (the per-output compression and the session-shape bands) · ${Cite(Benchmark.From)} (the per-type table and the round trips).`] })} ` })} </section>  <section id="history" class="blueprint-section relative w-full" data-reveal> <p class="section-index !text-raw-blood">08 // THE HISTORY SPINE // FIVE INCIDENTS</p> ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Tone": "crimson",
		"Size": "lg",
		"Rotate": "-rotate-[0.3deg]",
		"Class": "mt-8 w-full",
		"Wipe": true
	}, { "default": ($$result) => renderTemplate` <h2 class="font-headline text-2xl font-black uppercase tracking-tight text-bone-white sm:text-4xl">
Five incidents that set the laws
</h2> <div class="prose-flow mt-8 max-w-3xl"> <p class="font-body text-base leading-relaxed text-bone-newsprint">
Every rule in the engine was paid for once, and each arc runs the same three
						beats: the incident, the fix, and the mechanic that still stands today.
</p> <p class="font-body text-base leading-relaxed text-bone-newsprint">
All of it is public record - the CHANGELOG entries and the release notes.
</p> </div> <div class="mt-24 flex flex-col gap-32"> ${ArcsWithBeats.map(({ N, Span, Law, Border, Title, Beats, Src, Rule, Ink }) => renderTemplate`<article${addAttribute([
		"blueprint-section",
		"border-l-4",
		Border,
		"pl-6 sm:pl-10"
	], "class:list")}${addAttribute(`--blueprint-rule: ${Rule}`, "style")} data-reveal>  <p${addAttribute(["section-index", Ink], "class:list")}>${`${N} · ${Span} · ${Law}`}</p> <h3 class="mt-4 font-headline text-xl font-black uppercase tracking-tight text-bone-white sm:text-2xl"> ${Title} </h3>  <div class="mt-8 grid grid-cols-1 divide-y divide-oxblood-dark border-y border-oxblood-dark sm:grid-cols-3 sm:divide-x sm:divide-y-0"> ${Beats.map((Beat) => renderTemplate`<div class="flex flex-col py-6 sm:px-6 sm:first:pl-0 sm:last:pr-0"> <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1"> <span${addAttribute(["section-index", Ink], "class:list")}> ${Beat.N} </span> <strong class="font-mono text-base font-black uppercase tracking-widest text-bone-white"> ${Beat.Label} </strong> </div> <div class="prose-flow mt-4"> ${Beat.Sentences.map((Sentence) => renderTemplate`<p class="font-body text-base leading-relaxed text-bone-newsprint">${unescapeHTML(Sentence)}</p>`)} </div> </div>`)} </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [Src] })} </article>`)} </div> ` })} </section>  ${renderComponent($$result, "Related", $$Related, { "Links": [
		{
			Href: "/benchmarks/",
			Label: "BENCHMARKS"
		},
		{
			Href: "/workbench/",
			Label: "THE PIPELINE, LIVE"
		},
		{
			Href: "/setup/",
			Label: "SETUP"
		}
	] })} ` })} ${renderComponent($$result, "ZineDiagramNav", $$ZineDiagramNav, {})} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/case-study.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/case-study.astro";
var $$url = "/case-study";
// \0virtual:astro:page:Source/pages/case-study@_@astro
var page = () => case_study_exports;
export { page };
