#!/usr/bin/env python3
"""Generate the social/brand variant set from the brand mark.

Outputs (deterministic, PNG):
    Site/Public/Brand/OG-square.png     600x600  social card, square variant
    Site/Public/Brand/aphrodite-180.png 180x180  apple-touch-icon (standard size)

Reuses the OG grammar: aphrodite.png mark on a #09090b field, carbon panel,
oxblood offset wordmark, raw-blood rule bar. Run from the Site directory:
    python3 Scripts/Media-Social.py
Font dependency: Space Grotesk (searched at the known tmp locations; pass
FONT as env var to override).
"""

import os

from PIL import Image, ImageDraw, ImageFont

W_SQ = 600
W_ICON = 180
BG = (9, 9, 11)
RAW = (147, 17, 40)
OXBLOOD = (82, 6, 18)
BONE = (236, 233, 224)
ZINC = (115, 113, 123)
CARBON = (17, 16, 20)


def font_path():
    switch = True
    candidates = [
        os.environ.get("FONT", ""),
        "/tmp/SpaceGrotesk.ttf",
        "/tmp/SpaceGrotesk-Bold.ttf",
    ]
    while switch:
        for candidate in candidates:
            if candidate and os.path.exists(candidate):
                return candidate
        raise SystemExit("Space Grotesk font not found; set FONT=/path/to/SpaceGrotesk.ttf")


def brand_mark(height):
    mark = Image.open("Public/Brand/aphrodite.png").convert("RGBA")
    scale = height / mark.height
    return mark.resize((int(mark.width * scale), height), Image.LANCZOS)


def square_card():
    w = W_SQ
    canvas = Image.new("RGB", (w, w), BG)
    draw = ImageDraw.Draw(canvas)
    draw.rectangle([45, 70, w - 45, w - 90], fill=CARBON, outline=OXBLOOD, width=4)
    mark = brand_mark(140)
    canvas.paste(mark, ((w - mark.width) // 2, 110), mark)
    font = ImageFont.truetype(font_path(), 58)
    text = "APHRODITE"
    box = draw.textbbox((0, 0), text, font=font)
    tw, th = box[2] - box[0], box[3] - box[1]
    tx, ty = (w - tw) // 2 - box[0], 320 - th // 2 - box[1]
    draw.text((tx + 4, ty + 4), text, font=font, fill=OXBLOOD)
    draw.text((tx, ty), text, font=font, fill=BONE)
    small = ImageFont.truetype(font_path(), 16)
    sub = "CCR COMPRESSION ENGINE"
    sbox = draw.textbbox((0, 0), sub, font=small)
    draw.text(((w - (sbox[2] - sbox[0])) // 2 - sbox[0], 372), sub, font=small, fill=ZINC)
    draw.rectangle([140, 404, w - 140, 412], fill=RAW, outline=(0, 0, 0), width=2)
    canvas.save("Public/Brand/OG-square.png", "PNG")
    print("wrote Public/Brand/OG-square.png", canvas.size)


def touch_icon():
    canvas = Image.new("RGB", (W_ICON, W_ICON), BG)
    draw = ImageDraw.Draw(canvas)
    draw.rectangle([0, 0, W_ICON - 1, W_ICON - 1], outline=OXBLOOD, width=4)
    mark = brand_mark(112)
    canvas.paste(mark, ((W_ICON - mark.width) // 2, (W_ICON - mark.height) // 2), mark)
    canvas.save("Public/Brand/aphrodite-180.png", "PNG")
    print("wrote Public/Brand/aphrodite-180.png", canvas.size)


square_card()
touch_icon()
