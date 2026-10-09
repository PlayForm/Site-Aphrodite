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
5. THE HERO USES THE ORIGINAL IMAGE (user-mandated): the homepage hero brand
   card renders `/Brand/aphrodite.png` - the original brand image,
   byte-identical to the repo's `assets/aphrodite.png` (MD5
   f81f3cff0964e54384da4ced0f6d2d37) - at the pre-swap sizing
   (`h-32 w-auto sm:h-44`). The SVG mark treatment was REJECTED by user
   feedback ("restore the image - the svg icon and logo are still not worked
   out well enough, use the original image from Aphrodite");
   `Public/Brand/aphrodite-mark.svg` is kept as an unused asset until the
   SVG treatment is worked out. Do not swap the hero to the SVG mark again
   without a new explicit user instruction.

## 3. The decorative-stamp typography exception

5. The CONSIST-DESIGN 16px floor applies to readable body text. Decorative
   stamps (tape strips, corner badges) may sit below the floor ONLY on the
   user's explicit feedback (e.g. the hero tape at `text-xs` = 12px). Never
   lower a stamp's size on your own initiative; state the before -> after
   size and the trade-off in the report whenever the exception is applied.

## 4. Verification

6. After any brand-asset or mark-placement change, the arbiters are
   `cd Site && pnpm prepublishOnly` (63 pages) and `pnpm run Drift` (all
   PASS), plus a check that the built `Target/**/index.html` carries the
   intended asset path and classes.
