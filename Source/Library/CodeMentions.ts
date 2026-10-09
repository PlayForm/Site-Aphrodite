import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { HeadroomRepo, HermesRepo } from "./Links";
import { CodeLinks, ResolveCode, ResolveFile, SourceLink } from "./SourceLinks";

/**
 * The code-mention pass - the site-side integration. After the build writes
 * each page, every inline code element whose text resolves through the
 * SourceLinks registry (the exact identifier map, or a repository-relative
 * path that exists in the local checkout) is wrapped in an anchor to its
 * definition file, always in the tree/<branch> form composed by
 * SourceLink(). The same pass wraps every FILE mention in the plain prose -
 * the file-name tokens the registry maps (aphrodite.toml.example, Cargo.toml,
 * CHANGELOG.md, plugin.yaml, download.sh, ... and the crates/ and docs/
 * paths) - with the link text inheriting the surrounding styling (the
 * underline on hover is the only visual addition). The transform covers the
 * generated docs prose and the hand-written pages alike, and runs BEFORE the
 * compression integrations so they operate on the linked output.
 *
 * Safety: code inside <pre> fences is never touched, text inside <code>, <a>
 * or <script>/<style>/<title> is never prose-matched (so no nested anchors
 * and no re-wrapping of the code chips), entities are decoded only for
 * matching (the original captured text is re-emitted byte-for-byte), and an
 * unresolvable or locally missing path degrades to plain text instead of a
 * 404 anchor.
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

/**
 * The plain-prose file token: repository-relative paths first, then the
 * registry's file names (longest first so "aphrodite.toml.example" never
 * matches as "aphrodite.toml"). The lookarounds exclude matches inside a
 * longer word, path or attribute-like context - a token preceded or
 * followed by a word character, dot, slash, dash or @ stays unlinked.
 */
const FileToken = new RegExp(
	`(?<![\\w./@-])(?:${[
		"(?:crates|docs|tests|Maintain|plugins/aphrodite)/[\\w./-]+\\.\\w{1,4}",
		...Object.keys(CodeLinks)
			.filter((Key) => /\.\w{1,4}$/.test(Key) || Key === "BINARY_VERSION")
			.sort((A, B) => B.length - A.length)
			.map((Key) => Key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
	].join("|")})(?![\\w./@-])`,
	"g",
);

/** Wrap one plain-prose file mention (the text keeps its exact styling; the
 * a.code-link hover rules supply the only visual addition). */
const WrapFile = (Text: string): string => {
	const Entry = ResolveFile(Text);

	switch (Entry !== null && existsSync(`${Root}/${LocalPath(Entry)}`)) {
		case false:
			return Text;

		default:
			break;
	}

	const Url = SourceLink(Entry);

	return `<a class="code-link" href="${Url}" title="Source: ${Url}">${Text}</a>`;
};

/**
 * The SRC-citation token: the file part (a repository-relative path or a
 * bare name with a known extension) optionally followed by line references
 * ("README.md:444-465", "CHANGELOG.md:613-626", "plugin.yaml", with
 * comma-separated extra refs). The sentence-final punctuation after the
 * last ref is allowed, but a word character, slash or dash is not, so no
 * token is cut out of a longer word or path.
 */
const CitationToken = new RegExp(
	`(?<![\\w./@-])(?:(?:crates|docs|tests|Maintain|plugins/aphrodite)/[\\w./-]+\\.\\w{1,4}|[A-Za-z0-9_][\\w.-]*\\.(?:md|yaml|py|json|sh|txt|toml|ps1|example))(?::\\d+(?:-\\d+)?(?:, ?\\d+(?:-\\d+)?)*(?![\\w/@-]))?`,
	"g",
);

/**
 * The citation parts (non-global, anchored): the file, the first line and
 * the first range end. The fragment uses the FIRST reference only - GitHub
 * resolves one line range per URL, so the extra comma-separated refs stay
 * in the label (byte-identical text) and the anchor opens the citation's
 * primary range.
 */
const CitationParts = new RegExp(
	`^((?:crates|docs|tests|Maintain|plugins/aphrodite)/[\\w./-]+\\.\\w{1,4}|[A-Za-z0-9_][\\w.-]*\\.(?:md|yaml|py|json|sh|txt|toml|ps1|example))(?::(\\d+)(?:-(\\d+))?)?`,
);

/** Wrap one SRC citation: the label stays byte-identical, the anchor
 * composes the tree/Current URL with the #L<from>[-L<to>] fragment. */
const WrapCitation = (Text: string): string => {
	const Parts = Text.match(CitationParts);

	switch (Parts !== null) {
		case false:
			return Text;

		default:
			break;
	}

	const Entry = ResolveFile(Parts![1]);

	switch (
		Entry !== null && existsSync(`${Root}/${LocalPath(Entry)}`)
	) {
		case false:
			return Text;

		default:
			break;
	}

	const [, , From, To] = Parts!;
	const Fragment = From === undefined ? "" : To === undefined ? `#L${From}` : `#L${From}-L${To}`;
	const Url = `${SourceLink(Entry)}${Fragment}`;

	return `<a class="code-link" href="${Url}" title="Source: ${Url}">${Text}</a>`;
};

/**
 * The prose pass: wrap file-name tokens in plain text. Only text nodes are
 * transformed - text inside <code>, <a>, <pre>, <script>, <style>,
 * <title> and <textarea> elements is skipped, so the code chips (already
 * wrapped), the existing links (no nested anchors) and the fenced code
 * stay untouched.
 */
const SkipTags = /^(code|a|pre|script|style|title|textarea)$/;

const TagOrText = /<[^>]+>|[^<]+/g;

const WrapProse = (Html: string): string => {
	let Depth = 0;

	return Html.replace(TagOrText, (Token: string): string => {
		switch (Token[0] === "<") {
			case true: {
				const Closing = Token[1] === "/";
				const Name =
					(Closing ? Token.slice(2) : Token.slice(1)).match(
						/^[a-zA-Z0-9-]+/,
					)?.[0]?.toLowerCase() ?? "";
				const SelfClosing = Token.endsWith("/>");

				switch (Closing) {
					case false:
						switch (!SelfClosing && SkipTags.test(Name)) {
							case true:
								Depth++;
								break;

							default:
								break;
						}
						break;

					default:
						switch (SkipTags.test(Name) && Depth > 0) {
							case true:
								Depth--;
								break;

							default:
								break;
						}
						break;
				}

				return Token;
			}

			default:
				return Depth === 0
					? Token.replace(CitationToken, WrapCitation).replace(
							FileToken,
							WrapFile,
						)
					: Token;
		}
	});
};

const Rewrite = (Html: string): string =>
	Html.split(PreSplit).map((Segment) =>
		Segment.startsWith("<pre")
			? Segment
			: Segment.split(AnchorSplit).map((Inner) =>
					Inner.startsWith("<a")
						? Inner
						: WrapProse(
								Inner.replace(
									CodeElement,
									(Element, Attrs: string, Text: string) =>
										Wrap(`<code${Attrs}>`, Text, "code"),
								).replace(
									MonoSpan,
									(Element, Attrs: string, Text: string) =>
										Wrap(`<span${Attrs}>`, Text, "span"),
								),
							),
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
