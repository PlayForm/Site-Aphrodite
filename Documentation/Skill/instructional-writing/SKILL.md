> Specialized working copy (repo): adapted for the Aphrodite site from the
> DeepSeek tree at ~/Developer/Application/PlayForm/DeepSeek/Documentation/Skill/instructional-writing/ (same structure, the raw-write discipline). This is the specialized truth for this site's sessions; the global ~/.dsh/skills/instructional-writing/ is the fallback. Sync future changes to BOTH.
---
name: instructional-writing
description: THE discipline for writing files that carry typographic characters (em-dashes, curly quotes, unicode spaces, zero-width chars, fullwidth forms) - hard rule: such files are written with the raw-write tool ONLY (its verbatim path - the normalized write would destroy the deliberate characters); the deliberate characters are NEVER replaced with ASCII stand-ins; instructional notes stay truthful. Load before writing any file that must contain literal typographic characters.
whenToUse: Mandatory before creating or editing ANY file that is supposed to contain literal typographic characters (em/en dashes, curly quotes, ellipsis, unicode spaces, zero-width characters, fullwidth forms). If you are about to write such a file with the plain write tool (which normalizes the content) or replace a deliberate em-dash with a hyphen, STOP and use the raw-write tool with the literal characters.
---

# Instructional Writing - Operating Manual

The harness profile normalizes model output: em-dashes and friends become
ASCII. Files that must carry typographic characters therefore need the
verbatim write path. This applies universally - the same profile normalizes
while authoring the Aphrodite site. User-mandated.

## 1. The raw-write tool (the only writer for these files)

1. The `raw-write` tool is name-exempt from the stream normalization and
   writes VERBATIM by default. It is the ONLY writer for any file that
   must carry literal typographic characters.
2. A plain `write` call's content is normalized BEFORE the file lands -
   em-dashes become dashes, curly quotes become straight, ellipsis becomes
   "...". NEVER use it for these files.
3. `raw-write` refuses to overwrite a file it has not seen: READ the
   target first, then raw-write.
4. The optional `normalize` flag applies the transforms to the content
   before writing (the reverse of this discipline - only when a file is
   meant to demonstrate the normalization result).

## 2. The deliberate characters (kept literal, always)

The files that demonstrate normalization carry these characters
DELIBERATELY:

- The em-dash (U+2014) and the en-dash (U+2013);
- Curly quotes (U+2018/2019/201C/201D);
- The ellipsis (U+2026);
- Unicode spaces (U+00A0, U+2003, U+3000...);
- Zero-width/invisible characters (U+00AD, U+200B-E, U+2060, FEFF...);
- Fullwidth forms (U+FF01-FF5E).

The instructional notes stay TRUTHFUL: a line that says "this file has an
em dash" has the literal em dash present - never a hyphen standing in.

## 3. The site corollary (Aphrodite)

1. The site's own content prefers ASCII-safe phrasing: do not NEED a real
   unicode glyph in ordinary page text - the zine grammar works in ASCII.
2. When a glyph IS required (a typographic demonstration, a fixture, a
   code sample that must show the exact bytes), use `raw-write` or the
   identity-exempt `edit` - and verify the written bytes afterward (a
   read-only byte check, never an in-place rewrite).
3. After any bulk transformation involving typographic characters,
   byte-scan the touched files (zero NUL bytes, the deliberate characters
   present where claimed) before reporting done.

## 4. The verification

1. After writing a file with literal characters, verify with a read-only
   byte check: the character counts are present where the file claims
   them.
2. The verification reads bytes - it never rewrites the file.
3. The build + Drift are the final arbiters: a page whose demonstration
   glyphs were silently normalized should FAIL review - flag it, don't
   accommodate it.
