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
