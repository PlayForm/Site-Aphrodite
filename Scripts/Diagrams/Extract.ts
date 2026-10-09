import { readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// The docs-diagram extraction - the Diagrams pipeline's first stage.
//
// Every ```mermaid block inside the generated documentation markdown
// (Source/Content/Docs) is a diagram the docs render as a plain code pane.
// This step lifts each block into its own Mermaid source
// (Source/Content/Mermaid/docs-<page>-<n>.mmd) so the shared renderer
// (Source/Content/Mermaid/Render.mjs) turns it into a vendored SVG under the
// same pipeline laws as the curated diagrams, and writes the manifest
// (Diagrams.json) the DiagramPanels rehype plugin reads at build time to swap
// the markdown panes for the rendered figures.
//
// The .mmd sources and the manifest are committed generated artifacts - the
// same discipline as Source/Content/Docs (Scripts/Docs/Generate.ts): running
// this step is deterministic, and the committed copies stay in sync. The
// markdown itself is untouched, both here and in the upstream docs source,
// so the fences keep rendering as panes in any consumer that does not run
// this pipeline.
//
// The extraction rules: flowchart and graph blocks are re-addressed
// left-to-right (the site-wide diagram direction); sequence, state and class
// diagrams keep their own layout vocabulary. Everything else is copied
// verbatim - the pane and its extracted source stay the same diagram.

const Here = dirname(fileURLToPath(import.meta.url));

const Root = resolve(Here, "..", "..");

const Docs = join(Root, "Source", "Content", "Docs");

const Mermaid = join(Root, "Source", "Content", "Mermaid");

const Fence = /```mermaid\n([\s\S]*?)\n```/g;

const Heading = /^(#{1,6})\s+(.+)$/gm;

// The pane label: the nearest heading above the fence, uppercased - the
// figcaption reads like the curated diagrams' "M1 // CCR PIPELINE" stamps.
const Label = (Title: string): string => Title.toUpperCase();

// The diagram id: docs-<page path>-<index within the page>, slugified.
const Id = (Page: string, Index: number): string =>
	["docs", ...Page.split("/").map((Part) => Part.toLowerCase().replace(/[^a-z0-9]+/g, "-")), String(Index)]
		.filter((Part) => Part && Part !== "-")
		.join("-");

// The direction rewrite: the vertical graph addressing becomes LR.
const Direction = (Code: string): string =>
	Code.replace(/^(flowchart|graph)\s+(TD|TB)\b/m, (_Match, Kind: string) => `${Kind} LR`);

// The entity escaping, flowchart/graph blocks only: a raw `<` or `>` inside a
// quoted node label is dropped or mis-parsed by the renderer at 16px (the
// `depth >= X` decision lost its `>` entirely), so the label-internal
// characters escape to the `&lt;` / `&gt;` entities the pipeline already
// uses. The `&`-prefixed entities the sources already carry and the `<br/>`
// breaks stay untouched; the transition arrows outside the quotes are never
// seen.
const EscapeLabels = (Code: string): string =>
	Code.replace(/(\[["{]|\{["])([^"}]*)/g, (Match, Head: string, Body: string) => {
		const Protected = Body.replace(/<br\s*\/?>/g, "\u0001");

		const Escaped = Protected
			.replace(/(?<!&)</g, "&lt;")
			.replace(/(?<!&)>/g, "&gt;")
			.replace(/\u0001/g, "<br/>");

		return Head + Escaped;
	});

// The sequence statement separator: a `;` inside a message or note text ends
// the statement for the parser (the plugin-startup sequence broke on
// "setup);"), so the message text escapes it to the `#59;` entity - the same
// entity form the pipe `#124;` escape uses elsewhere in the pipeline.
const EscapeSeparators = (Code: string): string =>
	Code.replace(/^sequenceDiagram\n([\s\S]*)$/, (_Match, Body: string) =>
		`sequenceDiagram\n${Body.replace(/;/g, "#59;")}`,
	);

const Walk = async (Directory: string): Promise<string[]> => {
	const Entries = await readdir(Directory, { withFileTypes: true });

	const Files = await Promise.all(
		Entries.map((Entry) => {
			const Path = join(Directory, Entry.name);

			return Entry.isDirectory() ? Walk(Path) : Path.endsWith(".md") ? [Path] : [];
		}),
	);

	return Files.flat().sort();
};

export default async (): Promise<void> => {
	try {
		await stat(Docs);
	} catch {
		console.log("Diagrams: no generated docs, nothing to extract");

		return;
	}

	const Pages = await Walk(Docs);

	const Manifest: { Id: string; File: string; Index: number; Label: string }[] = [];

	for (const Page of Pages) {
		const Content = await readFile(Page, "utf8");

		const Relative = relative(Docs, Page).replaceAll("\\", "/").slice(0, -3);

		// The headings with their positions: the label of a fence is the last
		// heading that starts before it (a heading governs everything below
		// it until the next).
		const Titles = [...Content.matchAll(Heading)].map(
			({ 1: Depth, 2: Title, index }) => ({ Depth, Index: index ?? 0, Title }),
		);

		let Index = 0;

		for (const { 1: Code, index } of Content.matchAll(Fence)) {
			Index += 1;

			const DiagramId = Id(Relative, Index);

			const Start = index ?? 0;

			const Above = Titles.filter(({ Index: At }) => At < Start).pop();

			await writeFile(
				join(Mermaid, `${DiagramId}.mmd`),
				`${Direction(EscapeLabels(EscapeSeparators(Code))).trimEnd()}\n`,
				"utf8",
			);

			Manifest.push({
				Id: DiagramId,
				File: Relative,
				Index,
				Label: Label(Above?.Title ?? Relative),
			});
		}
	}

	// Drop the stale extractions: a fence that moved or vanished must not
	// leave an orphan source (the renderer would keep drawing it).
	const Orphans = (await readdir(Mermaid))
		.filter((Name) => Name.startsWith("docs-") && Name.endsWith(".mmd"))
		.filter((Name) => !Manifest.some(({ Id: DiagramId }) => `${DiagramId}.mmd` === Name));

	for (const Orphan of Orphans) {
		await rm(join(Mermaid, Orphan));
	}

	// The manifest is what the build-time panel swap reads.
	await writeFile(
		join(Mermaid, "Diagrams.json"),
		`${JSON.stringify(Manifest, null, "\t")}\n`,
		"utf8",
	);

	console.log(`Diagrams: extracted ${Manifest.length} docs diagrams into Source/Content/Mermaid`);
};
