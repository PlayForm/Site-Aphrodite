#!/usr/bin/env python3
"""Generate the sized brand-mark variants from the source brand mark.

Outputs (deterministic, PNG, plain LANCZOS resizes - the source mark already
carries the full-bleed zine framing, and the page hero card + Manifest supply
their own chrome, so no extra framing is applied):
    Site/Public/Brand/aphrodite-256.png  256x256  page renders (hero)
    Site/Public/Brand/aphrodite-192.png  192x192  Manifest icon entry
    Site/Public/Brand/aphrodite-512.png  512x512  Manifest icon entry

Run from the Site directory:
    python3 Scripts/Brand-Variants.py
No font dependency. The -32/-64/-120/-180 variants are untouched.
"""

from PIL import Image

SIZES = (192, 256, 512)
SOURCE = "Public/Brand/aphrodite.png"


def main():
    mark = Image.open(SOURCE).convert("RGB")
    for size in SIZES:
        out = f"Public/Brand/aphrodite-{size}.png"
        mark.resize((size, size), Image.LANCZOS).save(out, "PNG", optimize=True)
        print("wrote", out, (size, size))


main()
