import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { _ as renderTemplate, d as Fragment, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, a as Versions, t as $$Base } from "./Base_Bs2-mKm9.mjs";
import { a as $$Related } from "./DocsSidebar_DymFAMH3.mjs";
import { n as $$PageShell } from "./ZineTape_BXk9fOqY.mjs";
import { t as $$PageHeader } from "./PageHeader_CFtxK5wU.mjs";
import { t as $$ZineBox } from "./ZineBox_CVeWVZDC.mjs";
import { t as $$ZineSource } from "./ZineSource_DoCsU3-s.mjs";
import { t as $$CodeFence } from "./CodeFence_C7YwxHhg.mjs";
import { a as Crates, i as CrateNames, t as Assert } from "./Roster_DWXQuOMb.mjs";
// Source/Library/Prose/Crates.ts
var CrateNote = {
	aphrodite: {
		Role: "Chat Completions proxy with CCR, tool relay, and programmatic CCR",
		Ships: "the aphrodite binary + a cdylib/rlib",
		Body: ["Ships the aphrodite binary and a cdylib/rlib library; built on axum and tokio."],
		Marker: "crate.aphrodite"
	},
	"aphrodite-hermes": {
		Role: "Hermes Agent integration - tool schemas, hook dispatch, skill registration",
		Ships: "the dylib + the aphrodite-hermes-setup helper",
		Body: ["Ships the aphrodite-hermes-setup helper binary and the dylib; watches config with notify."]
	},
	"aphrodite-headroom-core": {
		Role: "The content transforms - classifier, smart crusher, tokenizer",
		Ships: "a library only; upstream's proxy surface does not ship",
		Body: ["The vendored fork's core library, linked by the proxy crate and published under its own name - upstream's proxy surface does not ship in Aphrodite."]
	}
};
// Source/pages/crates.astro
var crates_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Crates,
	file: () => $$file,
	url: () => $$url
});
var $$Crates = createComponent(($$result, $$props, $$slots) => {
	Assert("Source/Library/Prose/Crates.ts", CrateNote, CrateNames);
	const Sentence = (Text) => Text.replace(/\.$/, "");
	const Crates$1 = Crates.map((Crate, Index) => {
		const Note = CrateNote[Crate.Name] ?? {};
		return {
			...Crate,
			N: String(Index + 1).padStart(2, "0"),
			Role: Note.Role ?? Crate.Description,
			Ships: Note.Ships ?? (Crate.Vendored ? "a library only" : "its own crate"),
			Body: Note.Body ?? [],
			Marker: Note.Marker,
			Chip: Crate.Vendored ? "telemetry-tag--teal" : "telemetry-tag--canary",
			Kind: Crate.Vendored ? "VENDORED // DEPENDENCY" : "WORKSPACE // INSTALLABLE",
			Installs: !Crate.Vendored,
			Version: `v${Crate.Version}`
		};
	});
	const BothCrates = Versions.Binary === Versions.Hermes ? `both v${Versions.Binary}` : `v${Versions.Binary} and v${Versions.Hermes}`;
	const Chain = [
		{
			Name: "aphrodite-hermes",
			Version: `v${Versions.Hermes}`,
			Pull: "Installed directly. Its manifest declares `aphrodite` as a path dependency at the same version, so building this crate builds the proxy crate with it."
		},
		{
			Name: "aphrodite",
			Version: `v${Versions.Binary}`,
			Pull: "Installed directly. Its manifest declares the vendored fork's core library as a dependency under its published name, so the transforms are compiled into the binary rather than reimplemented beside it."
		},
		{
			Name: "aphrodite-headroom-core",
			Version: `v${Versions.Headroom}`,
			Pull: "Never installed directly: it arrives as `aphrodite`'s dependency, as a library only. Upstream's proxy surface does not ship in Aphrodite."
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "CRATES // APHRODITE",
		"Description": `The Aphrodite workspace: the aphrodite Chat Completions proxy crate and the aphrodite-hermes integration crate, ${BothCrates}, plus the vendored Headroom fork.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageShell", $$PageShell, { "Rhythm": "wide" }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHeader", $$PageHeader, {
		"Tape": "CRATES // WORKSPACE MANIFEST",
		"Title": "Crates",
		"Lead": [
			"A tool call's output becomes part of the model's context, and one crate in this workspace is the code that transforms it before the model reads it.",
			"Two workspace crates plus the vendored Headroom fork that carries the content transforms.",
			`It is the reason the fork stays separate: Aphrodite adds the preview pipeline, CCR storage, Hermes integration, and dual-proxy architecture on top of Headroom, instead of rewriting the transforms.`,
			`The binary links the fork's <code class="font-mono text-base text-weathered-teal">headroom-core</code> library only, published as <code class="font-mono text-base text-weathered-teal">aphrodite-headroom-core v${Versions.Headroom}</code>: upstream's proxy surface does not ship in Aphrodite.`,
			"Every crate is installable on its own; which one an install actually needs follows from the dependency chain."
		]
	})}  ${maybeRenderHead($$result)}<section class="blueprint-section relative w-full" data-reveal> <p class="section-index">01 // WORKSPACE // ${Crates$1.length} PUBLISHED NAMES</p> <h2 id="manifest" class="mt-3 scroll-mt-24 type-section text-bone-white">
What the workspace publishes
</h2> <p class="mt-6 max-w-[46rem] font-body text-body leading-relaxed text-bone-newsprint"> ${Crates$1.length} names leave this workspace, and none of them is typed by hand: the
				workspace <code class="font-mono text-base text-weathered-teal">Cargo.toml</code>${" "}
decides which crates exist, and every entry is read from that crate's own manifest -
				its name, its version, its description. A crate added to the workspace appears in
				the roster with no edit anywhere, and a crate removed from it leaves the same way.
</p> <div class="grunge shell-card mt-8" data-grunge data-grunge-mode="edge"> <div class="overflow-x-auto"> <table class="w-full border-collapse text-left"> <thead> <tr class="border-b border-[color:var(--tier-well-edge)]"> <th scope="col" class="type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5">
CRATE
</th> <th scope="col" class="type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5">
ROLE
</th> <th scope="col" class="type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5">
SHIPS
</th> <th scope="col" class="type-meta px-4 py-3 font-bold uppercase text-zinc-dust sm:px-5">
VERSION
</th> </tr> </thead> <tbody> ${Crates$1.map(({ Name, Role, Ships, Version, Chip }) => renderTemplate`<tr class="border-b border-[color:var(--tier-shell-edge)] align-top last:border-b-0"> <th scope="row" class="whitespace-nowrap px-4 py-4 text-left sm:px-5"> <a class="font-mono text-code font-bold text-weathered-teal underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:decoration-stamped-canary"${addAttribute(`#${Name}`, "href")}> ${Name} </a> </th> <td class="max-w-[26rem] px-4 py-4 font-body text-body leading-relaxed text-zinc-dust sm:px-5"> ${Role} </td> <td class="max-w-[20rem] px-4 py-4 font-body text-body leading-relaxed text-bone-newsprint sm:px-5"> ${Ships} </td> <td class="px-4 py-4 sm:px-5"> <span${addAttribute(["telemetry-tag", Chip], "class:list")}>${Version}</span> </td> </tr>`)} </tbody> </table> </div> </div> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": ["SRC: README.md:515-519", "SRC: crates/aphrodite/Cargo.toml; crates/aphrodite-hermes/Cargo.toml"] })} </section>  <section class="blueprint-section relative w-full" data-reveal> <p class="section-index">02 // CASES // THE MANIFEST, CRATE BY CRATE</p> <h2 id="cases" class="mt-3 scroll-mt-24 type-section text-bone-white">
Each crate in full
</h2> <p class="mt-6 max-w-[46rem] font-body text-body leading-relaxed text-bone-newsprint">
Each name declares itself once, in its own manifest: the version is that file's
				version and the role is that file's description, so the roster cannot drift from the
				crates it describes. What each one puts on disk is the difference that matters
				before an install - a
<code class="font-mono text-base text-weathered-teal">cargo install</code> for the
				two workspace crates, and for the vendored fork the dependency line that pulls it
				in, because a library has no binary to place. Colour is the crate's kind and not its
				rank: canary is a workspace crate a reader installs, teal is the vendored fork that
				arrives as a dependency.
</p> <div class="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-3"> ${Crates$1.map((Crate) => renderTemplate`<article${addAttribute(Crate.Name, "id")} class="grunge shell-card flex scroll-mt-24 flex-col" data-grunge data-grunge-mode="edge"> <header class="border-b border-[color:var(--tier-shell-edge)] px-5 py-4"> <div class="flex flex-wrap items-center gap-x-3 gap-y-2"> <span class="type-meta uppercase text-zinc-dust">${`CASE #${Crate.N}`}</span> <h3 class="font-mono text-code font-bold text-bone-white"> ${Crate.Name} </h3> <span${addAttribute(["telemetry-tag ml-auto", Crate.Chip], "class:list")}> ${Crate.Version} </span> </div> <p class="mt-3 font-body text-body leading-relaxed text-bone-newsprint"> ${Sentence(Crate.Role)}.
</p> <p class="type-meta mt-2 uppercase text-zinc-dust">${Crate.Kind}</p> </header> <div class="prose-flow flex-1 px-5 py-5"> <p> <span class="type-meta block uppercase text-zinc-dust">SHIPS</span> <span class="mt-1 block font-body text-body leading-relaxed text-bone-newsprint"> ${Crate.Ships} </span> </p> ${Crate.Body.map((Line) => renderTemplate`<p class="font-body text-body leading-relaxed text-bone-newsprint"> ${Line} </p>`)} ${Crate.Installs ? renderTemplate`<div> <p class="type-meta uppercase text-stamped-canary">
INSTALL // CARGO:
</p> ${renderComponent($$result, "CodeFence", $$CodeFence, {
		"Class": "mt-2",
		"Code": `$ cargo install ${Crate.Name}`,
		"CopyPayload": `cargo install ${Crate.Name}`
	})} ${Crate.Marker ? renderTemplate`<div class="ccr-marker mt-3 font-mono text-code font-bold text-weathered-teal"> ${`<<<CCR:${Crate.Marker}|${Crate.Version.replace(/^v/, "")}|axum-0.8.9+tokio-1.53.1>>>`} </div>` : null} </div>` : renderTemplate`<div> <p class="type-meta uppercase text-zinc-dust">
ARRIVES AS // A DEPENDENCY, NOT A COMMAND:
</p> <div class="well mt-2 px-4 py-3 font-mono text-code leading-relaxed"> <span class="text-weathered-teal">aphrodite</span> <span class="text-zinc-dust"> → </span> <span class="text-stamped-canary">${Crate.Name}</span> </div> <p class="mt-2 font-body text-body leading-relaxed text-zinc-dust">
A library only, so${" "} <code class="font-mono text-base">cargo install</code>
has no binary to place on disk: the proxy crate declares it,
										and the transforms compile into the binary.
</p> </div>`} </div> <p class="border-t border-[color:var(--tier-shell-edge)] px-5 py-3 font-mono text-meta text-zinc-dust">
SRC: ${Crate.Path} </p> </article>`)} </div> </section>  <section class="blueprint-section relative w-full" data-reveal> <p class="section-index">03 // DEPENDENCY // ONE CHAIN, ${Chain.length} LINKS</p> <h2 id="dependency" class="mt-3 scroll-mt-24 type-section text-bone-white">
Who pulls whom
</h2> <p class="mt-6 max-w-[46rem] font-body text-body leading-relaxed text-bone-newsprint">
The three names are one chain and not three islands. Each link is a path dependency
				in the manifest one step up, so the direction never reverses: the vendored core
				knows nothing about the proxy, the proxy knows nothing about Hermes, and Hermes is
				the only crate that speaks to the agent. That is why an install names two crates and
				receives three.
</p> ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Emphasis": "featured",
		"Size": "lg",
		"Surface": "shell",
		"Grunge": true,
		"Tape": "DEPENDENCY",
		"Class": "mt-10"
	}, { "default": ($$result) => renderTemplate` <p class="type-meta uppercase text-zinc-dust">
WHAT A CARGO INSTALL PULLS // DECLARED IN EACH MANIFEST
</p> <dl class="well mt-6 grid grid-cols-1 gap-x-6 gap-y-5 p-4 font-body sm:p-5 lg:grid-cols-[minmax(0,19rem)_1fr]"> ${Chain.map((Link) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` <dt class="flex flex-wrap items-baseline gap-x-3 gap-y-1"> <span class="font-mono text-code font-bold text-bone-white"> ${Link.Name} </span> <span class="telemetry-tag">${Link.Version}</span> </dt> <dd class="text-body leading-relaxed text-bone-newsprint"> ${Link.Pull.split("`").map((Part, At) => At % 2 === 1 ? renderTemplate`<code class="font-mono text-base text-weathered-teal"> ${Part} </code>` : Part)} </dd> ` })}`)} </dl> <p class="mt-8 border-t border-[color:var(--tier-shell-edge)] pt-6 font-body text-body leading-relaxed text-bone-newsprint">
The first two are the ones a user installs; the third arrives as their
					dependency.
</p> <p class="mt-3 font-body text-body leading-relaxed text-zinc-dust">
The chain is also why the fork stays separate rather than being absorbed: the
					vendored core carries the content transforms and nothing else, the proxy adds
					the preview pipeline, the CCR store, the tool relay and the dual-proxy
					architecture around it, and Hermes adds the tool schemas, the hook dispatch and
					the skill registration on top of the proxy. Each layer stays installable,
					testable and replaceable on its own, and the boundary between them is a
					manifest line rather than a convention.
</p> ` })} </section>  <section class="blueprint-section relative w-full" data-reveal> <p class="section-index">04 // CONFIGURATION SURFACE // APHRODITE.TOML.EXAMPLE</p> <h2 id="config" class="mt-3 scroll-mt-24 type-section text-bone-white">
What the crates read at runtime
</h2> <p class="mt-6 max-w-[46rem] font-body text-body leading-relaxed text-bone-newsprint">
One TOML file is read by both halves of the pair: the proxy takes its listeners and
				its flow budget from it, the dylib takes the compression thresholds and the
				previews. The shipped example carries the keys grouped the way the file groups
				them, and every value is the example's own default rather than a recommendation.
</p> <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2"> <div class="well p-4 sm:p-5"> <p class="type-meta mb-4 uppercase text-zinc-dust">
PROXY // PROXIES, DEFAULTS, FLOW
</p> <div class="font-mono text-code leading-relaxed text-bone-newsprint"> <div class="text-weathered-teal">[[proxies]]</div> <div>
cache <span class="text-zinc-dust">→</span>${" "} <span class="text-stamped-canary">127.0.0.1:9797</span> timeout${" "} <span class="text-stamped-canary">120</span> </div> <div>
token <span class="text-zinc-dust">→</span>${" "} <span class="text-stamped-canary">127.0.0.1:9798</span> timeout${" "} <span class="text-stamped-canary">300</span> </div> <div>
tool_relay = <span class="text-stamped-canary">true</span>${" "} <span class="text-zinc-dust">(both)</span> </div> <div class="pt-3 text-weathered-teal">[defaults]</div> <div>
api_url =${" "} <span class="text-stamped-canary">"https://api.openai.com"</span> </div> <div>
ccr_ttl_seconds = <span class="text-stamped-canary">3600</span> </div> <div class="pt-3 text-weathered-teal">[flow]</div> <div>
budget_chars = <span class="text-stamped-canary">2600</span> </div> </div> </div> <div class="well p-4 sm:p-5"> <p class="type-meta mb-4 uppercase text-zinc-dust">
ENGINE // COMPRESSION, PREVIEWS
</p> <div class="font-mono text-code leading-relaxed text-bone-newsprint"> <div class="text-weathered-teal">[compression]</div> <div>
engine_threshold_pct = <span class="text-stamped-canary">30</span> </div> <div>
tool_threshold_token = <span class="text-stamped-canary">256</span> </div> <div>
tool_threshold_cache = <span class="text-stamped-canary">2048</span> </div> <div>
terminal_threshold = <span class="text-stamped-canary">256</span> </div> <div>
inline_threshold = <span class="text-stamped-canary">1024</span> </div> <div>
code_multiplier = <span class="text-stamped-canary">1.0</span> </div> <div>
auto_reload = <span class="text-stamped-canary">true</span>${" "} <span class="text-zinc-dust"># shipped default</span> </div> <div class="pt-3 text-weathered-teal">[previews]</div> <div>
preview_max_chars = <span class="text-stamped-canary">0</span> </div> </div> </div> </div> <p class="mt-8 max-w-[46rem] border-t border-oxblood-dark pt-6 font-body text-body leading-relaxed text-zinc-dust">
Keys without a live consumer are annotated DOCUMENTED BUT UNWIRED in the example;
				the
<code class="font-mono text-base">[templates.*]</code> section is live configuration
				- preview families, the marker block, prompt templates and the reverse key map
				render from these format strings (hardcoded builders apply when a block is absent).
</p> <p class="mt-3 max-w-[46rem] font-body text-body leading-relaxed text-zinc-dust">
Marker grammar:
<code class="ccr-marker font-mono text-base text-weathered-teal">
&lt;&lt;&lt;CCR:hash|type|size&gt;&gt;&gt;
</code> </p> ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [`SRC: aphrodite.toml.example; CHANGELOG.md v${Versions.ChangelogVersion}`] })} </section>  ${renderComponent($$result, "Related", $$Related, { "Links": [
		{
			Href: "/versions/",
			Label: "VERSIONS"
		},
		{
			Href: "/setup/",
			Label: "SETUP"
		},
		{
			Href: "/benchmarks/",
			Label: "BENCHMARKS"
		}
	] })} ` })} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/crates.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/crates.astro";
var $$url = "/crates";
// \0virtual:astro:page:Source/pages/crates@_@astro
var page = () => crates_exports;
export { page };
