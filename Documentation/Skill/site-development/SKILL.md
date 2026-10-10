---
name: site-development
description: THE design-law manual for building any page of the Aphrodite site - the five laws of the zine page grammar (the 4px crimson border, the hard offset shadows, the tape stamps' color roles, the stream/preview pair with the suppression opacities, the huge vertical rhythm), preserved verbatim from the removed page-anatomy module. Build every page ACCORDING to these laws; the anatomy module itself is never rendered on a public page.
whenToUse: Mandatory before creating or editing any page, layout, or component under Site/Source/ - build according to these laws, and never re-add a public-facing anatomy module.
---

# Site Development - the design-law manual

> The five laws below are the page-anatomy text preserved VERBATIM from the
> former "THE ANATOMY // HOW THIS PAGE IS BUILT" module (the ZineAnatomy
> component, removed from the public pages at the user's direction: "we don't
> need to show the anatomy of the page, we need to build each and every and
> all pages according to it"). They are the operating manual for every page.
> This file lives under Site/Documentation/ - never routed, never user-facing.

The module's specimen (a miniature of the page grammar itself) rendered a
section tape and the stream/preview pair:

```
SECTION TAPE

raw stream line
suppressed at 70% - dim tone
suppressed at 40% - fade tone
suppressed at 25% - mute tone
```

beside the preview pane - `PREVIEW` over "one compressed line the LLM reads"
with its hash line ("a1b2c3d4... 416x"). The pair is the whole argument of
the product; every page demonstrates it in its own modules.

The five laws, verbatim:

1. **THE 4px CRIMSON BORDER** - blood-crimson at 4px = the module boundary.
   Everything a page says lives inside one; nested panes step down to oxblood
   at 3px, then 1px hairlines. Never thinner at the top level - the border IS
   the plate.
2. **THE HARD OFFSET SHADOWS** - zine-box-* shadows are zero-blur black
   stacked over a blood-family plane (6px + 10px). Print misregistration, not
   elevation: nothing floats, everything is pasted down. Radius stays 0
   everywhere.
3. **THE TAPE STAMPS** - raw-blood tape = section labels; stamped-canary =
   highlights and deltas; weathered-teal = hashes, retrieval, the mechanical
   voice. Rotation is 1-2 degrees and only from the sm breakpoint up - mobile
   flattens.
4. **THE STREAM / PREVIEW PAIR** - soot-black terminal panel shows the raw
   flow with suppression opacities (dim 70%, fade 40%, mute 25%); the asphalt
   preview pane shows the compressed line the LLM actually reads. The pair is
   the whole argument of the product.
5. **THE HUGE VERTICAL RHYTHM** - Sections breathe mt-20 to mt-32; modules
   pad p-6 sm:p-8. The whitespace is the zine's gutter - never tighten it to
   fit more; cut copy instead.

## Operating rules

- Build every page ACCORDING to these laws; never render the anatomy of a
  page as a public module.
- Removing a module from a page: the adjacent sections' spacing normalizes
  through the page's own rhythm (the main flex `gap-28 lg:gap-44`) - no
  manual spacing patches.
- The grammar reference: the DESIGN-ADOPTION SPEC (Reference/Stitch) and the
  token table in Source/Stylesheet/Global.css.

## THE PROSE BREAKDOWN (the double-newline treatment)

The DeepSeek-site convention, user-mandated 2026-10: no large multi-sentence
paragraph ships as one flowing block. Every prose paragraph follows the
short-line structure:

1. Each sentence (or tight sentence group) is its own block - the topic
   sentence on its own, then the next thought, separated by the blank-line
   rhythm (`mt-3` between sibling `<p>` blocks; the panel containers keep
   one bordered box with the split `<p>`s inside).
2. Within a block, source lines break at clause boundaries (~100 chars) -
   the reference's soft-wrap discipline; the words stay byte-identical,
   ONLY the line breaking changes.
3. Lead-in labels stay inline: the mono uppercase keyword label
   (`font-mono text-base font-bold uppercase tracking-widest` in
   raw-blood / stamped-canary / weathered-teal) opens the paragraph, then
   the prose. Section-level keyword stamps use `ZineStamp` (the black chip:
   raw-blood fill, bone-white mono text, hard 4px offset shadow).
4. What is NEVER rewrapped: quoted strings (tool `description` JSON lines,
   transcript/data-array strings, ledger quotes), `<code>` contents, SRC
   citation lines, table rows, mermaid diagram lines - byte-exact, FLAG
   instead.
5. The docs mirror: edit `../docs/*.md` in the SOURCE tree (hard-wrap the
   long prose lines, sentence per line, blank lines only between
   paragraphs), then `pnpm run Docs` to regenerate `Source/Content/Docs/`.
   A Markdown blank line splits a paragraph - do not add one inside a
   sentence group.
6. The arbiters: `pnpm run Drift` (all PASS) after every file; the
   whitespace check is zero space-indented lines (tabs only, tabWidth 4)
   and balanced `<p>` tags. NO `prepublishOnly` as the routine guard.

## THE RELEASE-CLAIM DISCIPLINE (user-mandated 2026-10-07)

Every release-derived value on the site (version pairings, timeline dates,
release-note statements, artifact counts, tool counts, `requires_hermes`
floors) must trace to a live fetched source before it ships:

1. The pairing authority is the GitHub release note's own title line
   ("Aphrodite v1.2.2 💋 Plugin v2.0.5"), fetched from
   `https://github.com/PlayForm/Aphrodite/releases.atom` (or the releases
   API per tag). The CHANGELOG header is the secondary source - when the
   two disagree (live case: CHANGELOG:981 says "badges synced to v1.2.2 /
   v2.0.6" while the note says the tag pairs v2.0.5 and explains the
   v2.0.6 sync landed after tagging), the note wins for the TAG pairing.
2. The date authority is the releases API `published_at` (UTC); the
   CHANGELOG header date is the site's cited source - when they differ by
   a day (timezone edge, live case: v1.5.1 = CHANGELOG 2026-09-21 vs
   published_at 2026-09-20T21:53:38Z), FLAG in the report, never silently
   pick one.
3. Counts the notes don't state ("six builtin_directives/*.md files",
   "29 nested modules", "13 tools") trace to the CHANGELOG anchor the
   page's SRC line cites - verify that anchor exists before trusting it.
4. The verification pass quotes the fetched line for every claim in the
   report; a claim without a fetched quote is unverified, not verified.

## THE HEAD CONTRACT (user-mandated 2026-10-10, the DEEP-HTML sweep)

`Source/Layout/Base.astro` owns the shared head; a page never writes meta
tags itself. The contract every page inherits:

1. `<title>` + `<meta name="description">` come from the page's `Base`
   props - both required, unique per page, description mirrors og/twitter.
2. `charset`, `viewport`, `theme-color` (#09090b), `format-detection`,
   the OG block (type/title/description/image), and the Twitter block
   (card/title/description/image) are layout-fixed - never duplicated
   per page.
3. `og:image` / `twitter:image` are `/Brand/OG.png` (relative) and the
   canonical link + `og:url` are ABSENT because the site URL is unset
   (`astro.config.ts` line 25 placeholder). When the user sets the URL,
   add the conditional canonical + absolute image/og:url in
   `Base.astro` - the one-line decision is theirs, never improvised.
4. The JSON-LD SoftwareApplication block is layout-level (renders on
   every routed page; the static 404 correctly omits it).
5. Every page's slot content is wrapped in `<main>` BY THE PAGE (the
   docs route does it too); `Base` supplies the `<header>` + `<footer>`
   around the slot. A page that forgets `<main>` is a bug - the
   DEEP-HTML sweep checks it.
6. The 404 is a static `Public/404.html`: self-contained (inline CSS
   only), `noindex`, own `description` + `theme-color`, `<nav
   aria-label="Primary">` with links that resolve against the built
   tree. Edit it directly; it never passes through Base.
7. Arbiters: `pnpm run Drift` (all PASS) + the quote-agnostic greps
   over `Target/` (the production build strips attribute quotes, so
   greps must match both `name="x"` and `name=x`).
