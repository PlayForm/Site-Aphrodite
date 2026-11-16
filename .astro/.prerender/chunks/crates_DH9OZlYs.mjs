import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { _ as renderTemplate, d as Fragment, u as renderComponent, v as maybeRenderHead, w as addAttribute } from "./server_DdG-dV1Z.mjs";
import { _ as createComponent, a as Versions, t as $$Base } from "./Base_B3YGMVwW.mjs";
import { a as $$Related } from "./DocsSidebar_DfVitkgG.mjs";
import { n as $$PageShell, t as $$ZineTape } from "./ZineTape_SD5UQe0y.mjs";
import { t as $$PageHeader } from "./PageHeader_D7477rfZ.mjs";
import { t as $$ZineBox } from "./ZineBox_CagEU9Nk.mjs";
import { t as $$ZineSource } from "./ZineSource_B5XPnKZs.mjs";
import { t as $$CodeFence } from "./CodeFence_C7O6HIFG.mjs";
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
	const Crates$1 = Crates.map((Crate) => {
		const Note = CrateNote[Crate.Name] ?? {};
		return {
			...Crate,
			Role: Note.Role ?? Crate.Description,
			Ships: Note.Ships ?? (Crate.Vendored ? "a library only" : "its own crate"),
			Body: Note.Body ?? [],
			Marker: Note.Marker,
			Tone: Crate.Vendored ? "text-weathered-teal" : "text-stamped-canary",
			Version: `v${Crate.Version}`
		};
	});
	const BothCrates = Versions.Binary === Versions.Hermes ? `both v${Versions.Binary}` : `v${Versions.Binary} and v${Versions.Hermes}`;
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
			"Every crate is installable on its own; the table says which one an install actually needs."
		]
	})}  ${maybeRenderHead($$result)}<section class="relative w-full" data-reveal> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "WORKSPACE // THREE PUBLISHED NAMES"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Size": "lg",
		"Rotate": "-rotate-[1deg]"
	}, { "default": ($$result) => renderTemplate` <h3 id="manifest" class="mb-8 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
What the workspace publishes
</h3> <div class="overflow-x-auto"> <table class="w-full border-collapse font-mono text-base"> <thead> <tr class="border-b-2 border-oxblood-dark text-left"> <th class="py-3 pr-4 text-base font-black uppercase tracking-widest text-stamped-canary">CRATE</th> <th class="py-3 pr-4 text-base font-black uppercase tracking-widest text-stamped-canary">ROLE</th> <th class="py-3 pr-4 text-base font-black uppercase tracking-widest text-stamped-canary">SHIPS</th> <th class="py-3 text-base font-black uppercase tracking-widest text-stamped-canary">VERSION</th> </tr> </thead> <tbody class="text-bone-newsprint"> ${Crates$1.map(({ Name, Role, Ships, Version, Tone }) => renderTemplate`<tr class="border-b border-oxblood-dark"> <td class="py-3 pr-4 text-bone-white">${Name}</td> <td class="py-3 pr-4 text-zinc-dust">${Role}</td> <td class="py-3 pr-4">${Ships}</td> <td${addAttribute(`py-3 font-black uppercase tracking-widest ${Tone}`, "class")}>${Version}</td> </tr>`)} </tbody> </table> </div> <p class="mt-8 font-body text-base leading-relaxed text-zinc-dust">
The first two are the ones a user installs; the third arrives as their dependency.
</p> ${Crates$1.filter((Crate) => !Crate.Vendored).map((Crate, Index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": `CASE #0${Index + 1} // ${Crate.Name.toUpperCase()}`,
		...Index === 0 ? {} : { Color: "canary" }
	})} <h3${addAttribute(Crate.Name, "id")} class="mb-8 font-headline text-lg font-black uppercase text-bone-white sm:text-xl"> ${Crate.Name} </h3> <p class="font-body text-base leading-relaxed text-bone-newsprint">${Crate.Role}.</p> ${Crate.Body.map((Line) => renderTemplate`<p class="mt-3 font-body text-base leading-relaxed text-bone-newsprint">${Line}</p>`)} <div class="mt-8 border-2 border-oxblood-dark bg-asphalt-panel p-3.5"> <div class="mb-1 text-base font-black uppercase tracking-widest text-stamped-canary">
INSTALL // CARGO:
</div> ${renderComponent($$result, "CodeFence", $$CodeFence, {
		"Class": "border border-oxblood-dark",
		"Code": `$ cargo install ${Crate.Name}`
	})} ${Crate.Marker ? renderTemplate`<div class="ccr-marker mt-2 font-mono text-base font-bold text-weathered-teal"> ${`<<<CCR:${Crate.Marker}|${Crate.Version.replace(/^v/, "")}|axum-0.8.9+tokio-1.53.1>>>`} </div>` : null} </div> <p class="mt-4 text-base text-zinc-dust">SRC: ${Crate.Path}</p> ` })}`)}${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "CONFIGURATION SURFACE // APHRODITE.TOML.EXAMPLE"
	})} <h3 id="config" class="mb-8 font-headline text-lg font-black uppercase text-bone-white sm:text-xl">
What the crates read at runtime
</h3> <div class="grid grid-cols-1 gap-6 lg:grid-cols-2"> <div class="border border-oxblood-dark bg-soot-black p-4 font-mono text-base text-bone-newsprint"> <div class="text-weathered-teal">[[proxies]]</div> <div>
cache <span class="text-zinc-dust">→</span>${" "} <span class="text-stamped-canary">127.0.0.1:9797</span> timeout${" "} <span class="text-stamped-canary">120</span> </div> <div>
token <span class="text-zinc-dust">→</span>${" "} <span class="text-stamped-canary">127.0.0.1:9798</span> timeout${" "} <span class="text-stamped-canary">300</span> </div> <div>
tool_relay = <span class="text-stamped-canary">true</span>${" "} <span class="text-zinc-dust">(both)</span> </div> <div class="pt-3 text-weathered-teal">[defaults]</div> <div>
api_url =${" "} <span class="text-stamped-canary">"https://api.openai.com"</span> </div> <div>
ccr_ttl_seconds = <span class="text-stamped-canary">3600</span> </div> <div class="pt-3 text-weathered-teal">[flow]</div> <div>
budget_chars = <span class="text-stamped-canary">2600</span> </div> </div> <div class="border border-oxblood-dark bg-soot-black p-4 font-mono text-base text-bone-newsprint"> <div class="text-weathered-teal">[compression]</div> <div>
engine_threshold_pct = <span class="text-stamped-canary">30</span> </div> <div>
tool_threshold_token = <span class="text-stamped-canary">256</span> </div> <div>
tool_threshold_cache = <span class="text-stamped-canary">2048</span> </div> <div>
terminal_threshold = <span class="text-stamped-canary">256</span> </div> <div>
inline_threshold = <span class="text-stamped-canary">1024</span> </div> <div>
code_multiplier = <span class="text-stamped-canary">1.0</span> </div> <div>
auto_reload = <span class="text-stamped-canary">true</span>${" "} <span class="text-zinc-dust"># shipped default</span> </div> <div class="pt-3 text-weathered-teal">[previews]</div> <div>
preview_max_chars = <span class="text-stamped-canary">0</span> </div> </div> </div> <p class="mt-6 border-t border-oxblood-dark pt-4 font-body text-base leading-relaxed text-zinc-dust">
Keys without a live consumer are annotated DOCUMENTED BUT UNWIRED in the example;
					the <code class="font-mono text-base">[templates.*]</code> section is live
					configuration - preview families, the marker block, prompt templates and the
					reverse key map render from these format strings (hardcoded builders apply when a
					block is absent).
</p> <p class="mt-3 font-body text-base leading-relaxed text-zinc-dust">
Marker grammar:
<code class="ccr-marker font-mono text-base text-weathered-teal">
&lt;&lt;&lt;CCR:hash|type|size&gt;&gt;&gt;
</code> </p> ` })} ${renderComponent($$result, "ZineSource", $$ZineSource, { "Lines": [
		"SRC: README.md:515-519",
		"SRC: crates/aphrodite/Cargo.toml; crates/aphrodite-hermes/Cargo.toml",
		`SRC: aphrodite.toml.example; CHANGELOG.md v${Versions.ChangelogVersion}`
	] })} </section>  ${renderComponent($$result, "Related", $$Related, { "Links": [
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
