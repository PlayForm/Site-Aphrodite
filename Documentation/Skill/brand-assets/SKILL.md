---
name: brand-assets
description: The brand-asset laws for the Aphrodite site - the single red mark (aphrodite.svg), standalone marks carry NO background plate, the dark-surface contrast rule, and the decorative-stamp typography exception. Load before creating or editing anything under Public/Brand/ or placing a brand mark in a page.
whenToUse: Mandatory before adding, editing, or placing any file under Site/Public/Brand/ or any brand-mark rendering in a page.
---

# Brand Assets - Operating Manual

## 1. The single red mark

1. THE ONLY SVG MARK IS `Public/Brand/aphrodite.svg` (user-mandated
   2026-10-10, "use it everywhere on the website"): the full-detail
   1800x1800 mark, all paths filled raw-blood `#931128`. The old variants
   are REMOVED and must stay removed - `favicon.svg` (the lips variant)
   and `aphrodite-mark.svg` (the rejected standalone variant) are deleted
   from `Public/Brand/`; do not recreate or re-reference them. Any new
   surface that needs the mark references `/Brand/aphrodite.svg` directly.
2. The root-repo README header uses `assets/aphrodite.svg` - a
   byte-identical copy of `Public/Brand/aphrodite.svg` (`cmp` them after
   any change); the root `assets/` directory is what GitHub can resolve
   from the root README (the `Site/` tree is a separate git repo, so the
   README cannot reference into it).

## 2. Standalone marks carry NO background plate

3. A standalone mark SVG contains no background rect and no plate -
   transparency only. Plates belong to raster exports (`aphrodite*.png`,
   OG images) for contexts that need them.
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
   the raster fallbacks. Residual: if the 1800pt full-detail mark muddies
   at 16px in real browsers, generate a favicon-size variant from the red
   mark.

## 3. The decorative-stamp typography exception

5. The CONSIST-DESIGN 16px floor applies to readable body text. Decorative
   stamps (tape strips, corner badges) may sit below the floor ONLY on the
   user's explicit feedback (e.g. the hero tape at `text-xs` = 12px). Never
   lower a stamp's size on your own initiative; state the before -> after
   size and the trade-off in the report whenever the exception is applied.

## 4. The retired README header banner

7. RETIRED (user feedback 2026-10-10, "aphrodite-header is still not using
   the new aphrodite.svg i'll remove the old ones"): the composed
   3:1 banner `aphrodite-header.svg` (root `assets/` copy and
   `Public/Brand/` copy) no longer appears on any surface - the root
   `README.md` header `<img>` points at `assets/aphrodite.svg` (the red
   mark, width 480 for the square aspect). The banner files are
   unreferenced and the user removes them; do not re-reference them.
8. WORDMARK SIZING LAW (retained for any future composed banner): SVG
   renderers do not reliably honor `textLength`/`lengthAdjust` (rsvg 2.63
   ignores it), so size the `<text>` elements so their natural
   fallback-font width fits inside the frame edge - verify with a real
   render (`rsvg-convert -w 900`, or equivalent) before reporting done,
   never from geometry alone.

## 5. Verification

10. After any brand-asset or mark-placement change, the arbiters are the
    fast guards ONLY (no full build): `cd Site && pnpm run Drift` (97
    checks - the count is dynamic; all PASS), the greps over the touched
    assets/READMEs (the fill values, the pattern ids, the image refs),
    and for banner/wordmark work an actual raster render of the SVG.
