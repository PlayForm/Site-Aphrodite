import { n as createComponent, r as __exportAll } from "./compiler_DE9Ou0YP.mjs";
import { C as addAttribute, _ as maybeRenderHead, g as renderTemplate, l as renderComponent } from "./server_CNuTCIdA.mjs";
import { t as $$Base } from "./Base_BfYuyvJ_.mjs";
import { t as $$Related } from "./Related_CkbaEjP9.mjs";
import { t as $$PageShell } from "./PageShell_C9X8T8VS.mjs";
import { t as $$PageHeader } from "./PageHeader_D0XsGtrC.mjs";
import { t as $$ZineTape } from "./ZineTape_PKiqfpjH.mjs";
import { t as $$ZineBox } from "./ZineBox_CmppvIAU.mjs";
import { t as $$CodeFence } from "./CodeFence_BroFWIlP.mjs";
import { n as ExternalLinks } from "./Links_GxwTQvcj.mjs";
// Source/pages/setup.astro
var setup_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Setup,
	file: () => $$file,
	url: () => $$url
});
var $$Setup = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "SETUP // APHRODITE",
		"Description": "Install Aphrodite for Hermes Agent. Pick the plugin catalog, a git clone, cargo, or a source build. Includes Windows steps and how to confirm it works."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageShell", $$PageShell, { "Rhythm": "wide" }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHeader", $$PageHeader, {
		"Tape": "SETUP",
		"Title": "Install Aphrodite",
		"Lead": [
			`Aphrodite is installed as a Hermes Agent plugin (recommended) or run as a standalone proxy for OpenAI-compatible APIs.`,
			`Two things to know first: the plugin never downloads anything on its own - you run one setup command, and it fetches the Aphrodite binary and library from GitHub Releases, verifies them with SHA-256, and stores them in <code class="font-mono text-base text-weathered-teal">~/.hermes/aphrodite/</code>.`,
			`And you do not need Rust unless you build from source.`
		]
	})}  ${maybeRenderHead($$result)}<section class="relative w-full"> ${renderComponent($$result, "ZineTape", $$ZineTape, {
		"Variant": "section",
		"Label": "INSTALL // FOUR ROUTES"
	})} ${renderComponent($$result, "ZineBox", $$ZineBox, {
		"Size": "lg",
		"Rotate": "-rotate-[1deg]"
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "CodeFence", $$CodeFence, {
		"Class": "border border-oxblood-dark",
		"Copy": true,
		"CopyLabel": "SETUP",
		"Code": `# Not sure which to choose? Use the plugin catalog (Option 1).

# 1 // PLUGIN CATALOG (RECOMMENDED) - 5 STEPS
$ hermes plugins install aphrodite
$ hermes plugins enable aphrodite // or answer yes at the Enable now? prompt
$ cd ~/.hermes/plugins/aphrodite
$ bash download.sh // or: pwsh ./download.ps1 - still required
$ hermes

# OUTCOME // CATALOG INSTALL:
# Reviewed pinned checkout of the catalog entry, binaries fetched + SHA-256
# verified, plugin enabled.
# THE CATALOG RULE: the catalog entry is reviewed and pinned - hermes plugins
# install checks out exactly that commit, never a branch tip. Do NOT run
# aphrodite setup in a catalog-managed directory - still run download.sh
# (or download.ps1 on Windows) from the installed plugin folder.

# 2 // GIT CLONE (RECOMMENDED) - 7 STEPS
$ git clone ${ExternalLinks.HermesRepository}.git
$ cd Aphrodite-Hermes
$ ln -s "$(pwd)" ~/.hermes/plugins/aphrodite
$ bash download.sh // or: pwsh ./download.ps1 (Windows)
$ cd ..
$ hermes plugins enable aphrodite
$ hermes

# OUTCOME // VERIFIED INSTALL:
# Binary + native library (dylib) fetched from GitHub Releases, SHA-256
# verified, plugin enabled.

# 3 // CARGO
$ cargo install aphrodite // proxy binary
$ cargo install aphrodite-hermes // dylib + helper bin
$ aphrodite setup
# cargo installs the binaries only - aphrodite setup then writes a minimal
# loader into ~/.hermes/plugins/aphrodite. For the full plugin, use Option 1
# or 2. Needs Rust 1.88+ (the repo toolchain pins nightly).
# Option 3 does not install the plugin by itself - after aphrodite setup
# writes the loader, start hermes.

# 4 // FROM SOURCE
$ git clone ${ExternalLinks.Repository}.git
$ cd Aphrodite
$ git submodule update --init --recursive
$ cargo build --release -p aphrodite -p aphrodite-hermes
# needs Rust 1.88+ (the repo toolchain pins nightly). The build outputs land
# in target/release/ - point APHRODITE_BINARY_PATH / APHRODITE_HERMES_DYLIB_PATH
# at them, or copy them into ~/.hermes/aphrodite/binaries/.

# VERIFY IT WORKS: start hermes. The plugin should log that Aphrodite is
# enabled. If the binaries are missing, it logs the setup command and stays
# disabled until you run it.

# STANDALONE PROXY: invoked without an aphrodite.toml, the binary needs
# --api-key or APHRODITE_API_KEY.`
	})} <p class="mt-12 border-t border-oxblood-dark pt-8 text-base leading-relaxed text-zinc-dust">
WINDOWS: use PowerShell and run
<code class="font-mono text-base text-weathered-teal">pwsh ./download.ps1</code>
instead of
<code class="font-mono text-base text-weathered-teal">bash download.sh</code>
- the full Windows walkthrough is on
<a class="text-weathered-teal underline transition-colors hover:text-bone-white" href="/docs/install/windows/">/docs/install/windows/</a>.
</p> ` })} <!-- The one citation that carries an external link: ZineSource renders plain prose only. --> <p class="mt-8 font-mono text-base text-zinc-dust">
SRC:
<a class="text-weathered-teal underline transition-colors hover:text-bone-white"${addAttribute(ExternalLinks.HermesGuide, "href")}>the Hermes plugin guide</a>
- Installing from the catalog.
</p> </section>  ${renderComponent($$result, "Related", $$Related, { "Links": [
		{
			Href: "/plugin/",
			Label: "PLUGIN"
		},
		{
			Href: "/hermes/",
			Label: "HERMES"
		},
		{
			Href: "/config/",
			Label: "CONFIG"
		}
	] })} ` })} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/setup.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/Aphrodite/Site/Source/pages/setup.astro";
var $$url = "/setup";
// \0virtual:astro:page:Source/pages/setup@_@astro
var page = () => setup_exports;
export { page };
