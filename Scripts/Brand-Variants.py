#!/usr/bin/env python3
"""Generate the sized brand-mark PNG variants from the RED mark.

The source is the red mark SVG (Public/Brand/aphrodite.svg), rasterized via
rsvg-convert and cropped to the lips bounding box. The old-look raster
(aphrodite.png) is no longer a variant source. Each variant is composited
centered on a carbon-void (#09090b) plate - the mark reads only on dark
surfaces, and raster icon exports carry the plate.

Outputs (deterministic, PNG):
    Site/Public/Brand/aphrodite-32.png   32x32   favicon (lips fill the plate)
    Site/Public/Brand/aphrodite-64.png   64x64   favicon (lips fill the plate)
    Site/Public/Brand/aphrodite-120.png  120x120 Manifest maskable icon
    Site/Public/Brand/aphrodite-192.png  192x192 Manifest icon
    Site/Public/Brand/aphrodite-512.png  512x512 Manifest icon

Favicon-size treatment: at 32/64 the mark's code-text fill muddies, so the
lips silhouette is scaled to fill the full plate width - the red outline
shape reads, the text grain disappears. The 180 apple-touch icon and the OG
cards come from Scripts/Media-Social.py.

Run from the Site directory:
    python3 Scripts/Brand-Variants.py
Tool dependency: rsvg-convert. No font dependency.
"""

import os
import subprocess
import tempfile

from PIL import Image

SIZES_FILL = (32, 64)
SIZES_PADDED = (120, 192, 512)
BG = (9, 9, 11)
SVG = "Public/Brand/aphrodite.svg"


def red_mark():
    """Rasterize the red mark SVG and crop it to the lips bounding box."""
    raw = os.path.join(tempfile.gettempdir(), "aphrodite-red-mark.png")
    subprocess.run(["rsvg-convert", "-w", "2048", "-h", "2048", SVG, "-o", raw], check=True)
    mark = Image.open(raw).convert("RGBA")
    return mark.crop(mark.getchannel("A").getbbox())


def plate(size, mark, scale):
    """Composite the mark centered on a carbon-void plate of size x size."""
    canvas = Image.new("RGB", (size, size), BG)
    mark = mark.resize((int(mark.width * scale), int(mark.height * scale)), Image.LANCZOS)
    canvas.paste(mark, ((size - mark.width) // 2, (size - mark.height) // 2), mark)
    return canvas


def main():
    mark = red_mark()
    for size in SIZES_FILL:
        out = f"Public/Brand/aphrodite-{size}.png"
        plate(size, mark, size / mark.width).save(out, "PNG", optimize=True)
        print("wrote", out, (size, size))
    for size in SIZES_PADDED:
        out = f"Public/Brand/aphrodite-{size}.png"
        plate(size, mark, (size * 0.78) / mark.width).save(out, "PNG", optimize=True)
        print("wrote", out, (size, size))


main()
