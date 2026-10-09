import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { HeadroomRepo, HermesRepo } from "./Links";
import { ResolveCode, SourceLink } from "./SourceLinks";

/**
 * The code-mention pass - the site-side integration. After the build writes
 * each page, every inline code element whose text resolves through the
 * SourceLinks registry (the exact identifier map, or a repository-relative
 * path that exists in the local checkout) is wrapped in an anchor to its
 * definition file, always in the tree/<branch> form composed by
 * SourceLink(). The transform covers the generated docs prose and the
 * hand-written pages' code chips alike, and runs BEFORE the compression
 * integrations so they operate on the linked output.
 *
 * Safety: code inside <pre> fences is never touched, code already inside an
 * anchor is never re-wrapped, entities are decoded only for matching (the
 * original captured text is re-emitted byte-for-byte), and an unresolvable
 * or locally missing path degrades to plain text instead of a 404 anchor.
 */

/** Decode the five entities the inline code text can carry for matching. */
const Decode = (Text: string): string =>
	Text
		.replaceAll("&lt;", "<")
		.replaceAll("&gt;", ">")
		.replaceAll("&quot;", '"')
		.replaceAll("&#39;", "'")
		.replaceAll("&amp;", "&");

/** Split out the <pre> blocks so fenced code is never transformed. */
const PreSplit = /(<pre[^>]*>[\s\S]*?<\/pre>)/g;

/** Split out existing anchors so a code span inside link text is never wrapped (no nested <a>). */
const AnchorSplit = /(<a\b[^>]*>[\s\S]*?<\/a>)/g;

/** One inline code element (with or without attributes), element-only text. */
const CodeElement = /<code([^>]*)>((?:[^<>]|&(?:amp|lt|gt|quot|#39);)*)<\/code>/g;

/** One mono span whose entire text may be an identifier (the hand-written pages' chips). */
const MonoSpan = /<span([^>]*class="[^"]*font-mono[^"]*"[^>]*)>((?:[^<>]|&(?:amp|lt|gt|quot|#39);)*)<\/span>/g;

const Wrap = (Open: string, Inner: string, Tag: string): string => {
	const Entry = ResolveCode(Decode(Inner));

	switch (Entry !== null && existsSync(`${Root}/${LocalPath(Entry)}`)) {
		case false:
			return `${Open}${Inner}</${Tag}>`;

		default:
			break;
	}

	const Url = SourceLink(Entry);

	return `<a class="code-link" href="${Url}" title="Source: ${Url}">${Open}${Inner}</${Tag}></a>`;
};

const Rewrite = (Html: string): string =>
	Html.split(PreSplit).map((Segment) =>
		Segment.startsWith("<pre")
			? Segment
			: Segment.split(AnchorSplit).map((Inner) =>
					Inner.startsWith("<a")
						? Inner
						: Inner
							.replace(CodeElement, (Element, Attrs: string, Text: string) =>
								Wrap(`<code${Attrs}>`, Text, "code"))
							.replace(MonoSpan, (Element, Attrs: string, Text: string) =>
								Wrap(`<span${Attrs}>`, Text, "span")),
				).join(""),
	).join("");

// The root of the Aphrodite checkout - the existence oracle for the
// path-like code spans (Site/Source/Library is three levels down).
const Root = new URL("../../../", import.meta.url).pathname;

/**
 * The local path an entry is verified against: the root checkout for the
 * Aphrodite repository, the vendored plugins/aphrodite clone (the local
 * checkout of the Aphrodite-Hermes repository) for its entries, and the
 * vendor/headroom submodule checkout for Headroom entries - the check
 * mirrors the repo the anchor composes against, so a mapped path can never
 * 404 on GitHub.
 */
const LocalPath = ({ Path, Repo }: { Path: string; Repo: unknown }): string =>
	Repo === HermesRepo
		? `plugins/aphrodite/${Path}`
		: Repo === HeadroomRepo
		? `vendor/headroom/${Path}`
		: Path;

/**
 * The integration: rewrite every built HTML page through Rewrite(), skipping
 * files that contain no candidates at all.
 */
export default () => ({
	name: "code-mentions",

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

					const Linked = Rewrite(Html);

					switch (Linked !== Html) {
						case true:
							await writeFile(File, Linked, "utf8");

							continue;

						default:
							continue;
					}
				}
			}
		},
	},
});
