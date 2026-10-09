---
name: brand-assets
description: The brand-asset laws for the Aphrodite site - the single lips-path source of truth (favicon.svg), standalone marks carry NO background plate, the dark-surface contrast rule, and the decorative-stamp typography exception. Load before creating or editing anything under Public/Brand/ or placing a brand mark in a page.
whenToUse: Mandatory before adding, editing, or placing any file under Site/Public/Brand/ or any brand-mark rendering in a page.
---

# Brand Assets - Operating Manual

## 1. The single path source of truth

1. The lips (kiss) paths live in `Public/Brand/favicon.svg`: the upper lip
   (`M 8,62 C 30,32 ...`), the lower lip (`M 18,64 C 46,100 ...`), the
   screenprint highlight (`M 42,63 ...`), the stipple pattern and the
   canary/teal specks. Every derivative mark REUSES those path strings
   verbatim - never redraw the kiss.
2. The favicon expresses the mark at 0.25 scale inside a 64x64 viewBox;
   standalone marks express the same paths at native 1x coordinates
   (viewBox ~`0 0 232 158`) with the distressed offset shadow at `(+12,+12)`.

## 2. Standalone marks carry NO background plate

3. A standalone mark SVG (e.g. `aphrodite-mark.svg`) contains no background
   rect and no plate - transparency only. Plates belong to raster exports
   (`aphrodite*.png`, OG images) for contexts that need them.
4. The mark's fill stays the carbon-void dark (`#09090b`) with the red
   stipple and the oxblood offset shadow carrying the contrast. DARK-SURFACE
   RULE: the mark reads only on dark surfaces (soot/carbon cards). Do not
   place the raw mark on light paper; if a light mount is wanted, it is a
   card-level decision, never a fill change baked into the asset.
5. THE HERO USES THE RED MARK (user-mandated 2026-10-10, supersedes the
   earlier PNG rule): the homepage hero brand card renders
   `/Brand/aphrodite.svg` at the same sizing (`h-32 w-auto sm:h-44`).
   History: the first SVG treatment was rejected ("restore the image") and
   `Public/Brand/aphrodite.png` was restored; the later user instruction
   "we've also saved an aphrodite.svg in brand, turn that red and use it
   everywhere on the website" supersedes it. `Public/Brand/aphrodite.png`
   remains a raster fallback asset.
6. THE FAVICON IS THE RED MARK (user-mandated 2026-10-10): the SVG icon
   link in `Source/Layout/Base.astro` points at `/Brand/aphrodite.svg`
   (the recolored raw-blood `#931128` mark); the 32px/180px PNGs remain
   the raster fallbacks. `Public/Brand/favicon.svg` (the lips mark) is the
   unused prior variant. Residual: if the 1800pt full-detail mark muddies
   at 16px in real browsers, generate a favicon-size variant from the red
   mark.

## 3. The decorative-stamp typography exception

5. The CONSIST-DESIGN 16px floor applies to readable body text. Decorative
   stamps (tape strips, corner badges) may sit below the floor ONLY on the
   user's explicit feedback (e.g. the hero tape at `text-xs` = 12px). Never
   lower a stamp's size on your own initiative; state the before -> after
   size and the trade-off in the report whenever the exception is applied.

## 4. The README header banner (user-mandated 2026-10-10)

7. `Public/Brand/aphrodite-header.svg` is the dark-patterned full README
   header: the soot-black `#09090b` field + the zine texture layers from
   `Source/Stylesheet/Global.css` inlined as SVG patterns (photocopy-grit
   dots `#dedbd2` @0.08 on an 8px grid, halftone-screen dots `#931128`
   @0.28 on a 13px grid, the `feTurbulence` grunge-noise filter from
   `Source/Layout/Base.astro`), the oxblood misregistration frame, the
   red kiss mark (the paths verbatim, filled raw-blood `#931128`), and
   the APHRODITE wordmark + "CCR COMPRESSION PROXY FOR HERMES AGENT"
   subtitle in the Space Grotesk stack. Wide 3:1 banner (1800x600).
8. The banner is SELF-CONTAINED: patterns, filter, mark and wordmark are
   all inline - no external references. A root copy lives at
   `assets/aphrodite-header.svg` and the two copies stay byte-identical
   (`cmp` them after any change); the root `README.md` header `<img>`
   points at the root copy. Only the root README carries the brand
   header image (verified by grep); vendor READMEs are off-limits.
9. WORDMARK SIZING LAW: SVG renderers do not reliably honor
   `textLength`/`lengthAdjust` (rsvg 2.63 ignores it), so size the
   `<text>` elements so their natural fallback-font width fits inside
   the frame edge - verify with a real render (`rsvg-convert -w 900`,
   or equivalent) before reporting done, never from geometry alone.

## 5. Verification

10. After any brand-asset or mark-placement change, the arbiters are the
    fast guards ONLY (no full build): `cd Site && pnpm run Drift` (97
    checks - the count is dynamic; all PASS), the greps over the touched
    assets/READMEs (the fill values, the pattern ids, the image refs),
    and for banner/wordmark work an actual raster render of the SVG.
