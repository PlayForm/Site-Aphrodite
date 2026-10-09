import { readFile, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * The docs-diagram panels - the site-side integration. The generated docs
 * markdown keeps its ```mermaid fences (the generation stays untouched;
 * Scripts/Diagrams/Extract.ts lifts them into rendered SVGs), and this pass
 * swaps every mermaid code pane for the rendered figure after the build
 * writes each page: the pane's highlighted <pre> block is replaced by the
 * same [data-diagram] figure markup the hand-written pages use (the framed
 * SVG band plus the caption stamp), so the docs carry real diagrams instead
 * of plain-text code, and ZineDiagramNav's interactivity binds to them like
 * to any other figure.
 *
 * The match is positional: the manifest (Source/Content/Mermaid/Diagrams.json)
 * maps each page to its diagram ids in fence order, and the pass walks the
 * mermaid panes of the built page in document order. A page with no entry
 * (or a pane beyond the manifest) degrades to the plain pane - the docs
 * never break on a missing diagram.
 */

const Here = dirname(fileURLToPath(import.meta.url));

const Docs = resolve(Here, "..", "Content", "Docs");

const Mermaid = resolve(Here, "..", "Content", "Mermaid");

const Manifest: {
	Id: string;
	File: string;
	Index: number;
	Label: string;
}[] = JSON.parse(await readFile(join(Mermaid, "Diagrams.json"), "utf8"));

const Svg = new Map(
	await Promise.all(
		Manifest.map(async ({ Id }) => [Id, await readFile(join(Mermaid, `${Id}.svg`), "utf8")] as const),
	),
);

const ByFile = new Map<string, Map<number, { Id: string; Label: string }>>();

for (const { Id, File, Index, Label } of Manifest) {
	if (!ByFile.has(File)) {
		ByFile.set(File, new Map());
	}

	ByFile.get(File)!.set(Index, { Id, Label });
}

/** The built mermaid pane: a shiki-highlighted <pre data-language=mermaid> block. */
const Pane = /<pre[^>]*data-language=["']?mermaid["']?[^>]*>[\s\S]*?<\/pre>/g;

/** Escape the caption text for element use. */
const Escape = (Text: string): string =>
	Text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

const Figure = (Id: string, Label: string): string =>
	`<figure class="relative z-10 mt-16 border border-oxblood-dark bg-soot-black p-4" data-diagram="${Escape(Id)}">` +
	`<div class="overflow-x-auto [&_svg]:h-auto [&_svg]:max-w-full">${Svg.get(Id)}</div>` +
	`<figcaption class="mt-3 font-mono text-[10px] font-black uppercase tracking-widest text-zinc-dust">${Escape(Label)}</figcaption>` +
	`</figure>`;

const Rewrite = (Html: string, File: string): string => {
	const Diagrams = ByFile.get(File);

	if (!Diagrams) {
		return Html;
	}

	let Seen = 0;

	return Html.replace(Pane, (Match: string) => {
		Seen += 1;

		const Diagram = Diagrams.get(Seen);

		return Diagram ? Figure(Diagram.Id, Diagram.Label) : Match;
	});
};

/**
 * The integration: rewrite every built HTML page through Rewrite(), skipping
 * files whose docs page has no mermaid panes at all.
 */
export default () => ({
	name: "diagram-panels",

	hooks: {
		"astro:build:done": async ({ dir, pages }: {
			dir: URL;

			pages: { pathname?: string; paths?: string[] }[];
		}) => {
			for (const Page of pages) {
				const Files = Array.isArray(Page.paths) && Page.paths.length > 0
					? Page.paths
					: Page.pathname
					? [join(dir.pathname, Page.pathname, "index.html")]
					: [];

				for (const File of Files) {
					const Html = await readFile(File, "utf8");

					switch (Html.includes("data-language=mermaid") || Html.includes('data-language="mermaid"')) {
						case false:
							continue;

						default:
							break;
					}

					// The built route mirrors the docs page: /docs/<path>/ maps to
					// <path> in the collection (the index collapses to the root).
					const Route = relative(dir.pathname, File)
						.replaceAll("\\", "/")
						.replace(/\/index\.html$/, "")
						.replace(/^index\.html$/, "");

					const Key = Route === "docs" ? "index" : Route.replace(/^docs\//, "");

					const Swapped = Rewrite(Html, Key);

					switch (Swapped !== Html) {
						case true:
							await writeFile(File, Swapped, "utf8");

							continue;

						default:
							continue;
					}
				}
			}
		},
	},
});
