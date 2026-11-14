# Motion - the site's one motion runtime

> `Source/Library/Motion.ts` (the runtime), `Source/Stylesheet/Motion.css` (the
> one rule that has to exist before it runs), mounted once from
> `Source/Layout/Base.astro`. The deck's `Source/Presentation/Player.ts` is the
> reference implementation this was lifted from; it keeps its own copy because
> its entrances are bound to the deck's clock, not to a page's mount.

Every other page on this site is static. This runtime is what makes a page of
the zine come alive without becoming a web app: a printed plate that arrives,
a log that prints, a number that climbs, a bar that sweeps. Nothing floats,
nothing parallaxes, nothing elevates. Radius stays 0.

---

## THE FIVE LAWS

- **Compositor only.** Every keyframe is `transform` and `opacity`. No animation can force a layout or a paint. The one exception is `[data-count]`, which changes text, and it repaints at most every 60ms for exactly that reason.
- **Nothing on the scroll path.** Reveal is one `IntersectionObserver` for the whole document, not a scroll listener, and its callback reads no layout. Scrolling costs the compositor nothing.
- **Bounded work.** One Web Animation per entrance root. `[data-stream]` staggers at most 64 children, because a 500-line log must not create 500 animations.
- **Reduced motion is the same code settling the final frame.** Under `prefers-reduced-motion: reduce` every duration collapses to 1ms and every delay to 0. Nothing is hidden from a reader who asked for stillness, and no animation is skipped in a way that would leave a frame half-applied.
- **Copy stays inside the motion.** Every attribute belongs on a content root that *says something*. An animated panel with no sentence under it is a defect; a `[data-count]` with no line explaining the number is decoration. The runtime cannot enforce this - the caller must.

No autoplay, ever. There is no timer in this file: every animation is triggered by a mount or by the reader's own scroll.

---

## THE ATTRIBUTES

### `[data-enter]`

- **Effect** - one entrance for the whole content root: it rises `2.2cqw` and fades from 0 to 1 over 520ms, easing `cubic-bezier(0.16, 0.84, 0.28, 1)`, with `fill: both`.
- **Trigger** - mount, and again on every client-router navigation into the page.
- **Delay** - the attribute's value is a delay in milliseconds, so a later panel can land after an earlier one: `data-enter="980"`.
- **Sequencing** - use this when the order is the argument (a split panel whose two sides must not arrive together). For "arrive when the reader reaches it", use `[data-reveal]`.
- **Reduced motion** - duration 1ms, delay 0. The panel is simply there.
- **Cost** - one Web Animation per root, one compositor transform. Never a per-element stagger: the whole panel moves as one plate.
- **Why Web Animations and not a CSS transition** - a Web Animation restarts deterministically from frame 0 when it is cancelled and replayed; a CSS transition cannot do that without a forced layout. The outgoing node also keeps its filled state, so its text stays readable while the next scene crossfades in.

### `[data-reveal]`

- **Effect** - the *same* entrance as `[data-enter]`, fired by scroll instead of by mount. Identical distance, duration and easing, so the two read as one language.
- **Trigger** - `IntersectionObserver`, `rootMargin: 0px 0px -10% 0px`: the panel starts when it is a tenth of the viewport in, not the instant its first pixel clips the fold. Fires **once** per element, then unobserves it.
- **Delay** - same attribute value as a delay in milliseconds: `data-reveal="120"`.
- **This is the site-wide default entrance** for a static page's sections. Reach for `[data-enter]` only when the sequencing is the point.
- **Reduced motion** - the pre-hide in `Motion.css` lives inside `@media (prefers-reduced-motion: no-preference)`, so it never applies; the panel is already visible and the 1ms rise is a no-op.
- **Cost** - one observer entry per element, one callback, then unobserved. No scroll handler, no layout read.
- **The pre-hide** - `Motion.css` holds a `[data-reveal]` panel at `opacity: 0` from the first frame (so it cannot paint and then blink out), gated on `html.js` - the class `Base.astro`'s head script sets before paint - and released by `[data-revealed]`, which the runtime sets in the same tick it starts the rise. A reader with no JavaScript never has content hidden from them.
- **A panel that is not rendered** - the pre-hide is CSS, so a `[data-reveal]` inside a `display: none` container is observed by nothing and stays hidden. Do not put a reveal inside a closed disclosure or a hidden tab; put it on the container that opens instead.

### `[data-stream]`

- **Effect** - the block prints its children line by line: each child rises `0.8cqw` and fades in over 160ms, the first starting at 140ms and each following one 70ms later.
- **This stagger IS the streaming log** - it is the product's argument rendered as motion, not an entrance effect. It is the one place a per-element loop is correct.
- **Trigger** - the entrance root that carries it (`[data-enter]` or `[data-reveal]`), on that root's beat. A stream no entrance root claims runs at mount.
- **Bound** - at most 64 children are staggered; past that the tail arrives with the last staggered line. The bound exists so a long log cannot turn a page load into hundreds of animations.
- **Reduced motion** - duration 1ms, delay 0: the whole log is simply present.
- **Cost** - one animation per child, capped at 64, each a compositor transform.
- **Copy rule** - the stream needs the prose around it that tells the reader what to look for. A log with no sentence explaining it is a wall of text with a delay.

### `[data-wipe]`

- **Effect** - a bar sweeps its panel once: `translateX(0)` → `translateX(91cqw)`, fading in to full opacity at 10% and out by the end, over 760ms, easing `cubic-bezier(0.3, 0, 0.2, 1)`.
- **Trigger** - its entrance root's beat, or mount.
- **Delay** - the attribute's value, defaulting to 140ms: `data-wipe="980"`.
- **Reduced motion** - duration 1ms, delay 0. The bar is never visible, which is the settled frame of a sweep that has already gone.
- **Cost** - one animation on one empty element. The bar is decoration over a panel that already carries copy; it must never be the only thing in a block.

### `[data-count]`

- **Effect** - the number climbs from 0 to its value over 900ms on a cubic ease-out, formatted with `toLocaleString("en-US")` so `1400` prints `1,400`.
- **Value** - the attribute, not the text: `data-count="1400"`. The element must already carry the final figure in its markup (`>1,400<`), so a reader without JavaScript reads the number instead of a zero.
- **A bare `[data-count]`** (no value) is left completely alone. That shape is another runtime's label - the showcase registry's `SHOWING n OF m` - and rewriting it to `0` would delete copy the page is using.
- **Trigger** - its entrance root's beat, or mount.
- **Reduced motion** - the final figure is written once, with no frame loop at all.
- **Cost** - one `requestAnimationFrame` loop that repaints text at most every 60ms, and stops on the frame it reaches the value. It is the only non-compositor animation in the runtime.
- **Copy rule** - the number needs the line that says what it means. "1,400" alone is decoration; "1,400 tokens per build" is the claim.

---

## THE CROSSFADE (CSS, not this runtime)

A scene or section switch is a CSS `opacity` transition, never a JS loop. This
file deliberately provides nothing for it, because the outgoing frame's
lifetime belongs to the browser: the entrance's `fill: both` is what keeps the
outgoing node's text visible while the crossfade runs. `Deck.css`'s
`.deck-scene` is the reference - a page that needs one writes the transition in
its own stylesheet, and the runtime stays out of the fade.

---

## THE SCOPE

- **`[data-deck]`** - the whole subtree is skipped. The deck drives its own scenes from its own clock through `Player.ts`; a second runtime animating the same `[data-enter]` roots would fight it.
- **`data-motion="off"`** - a subtree opt-out for a page whose own script already owns one of these attributes. The showcase registry's counter is the case that made this necessary.
- **`data-motion-bound`** - the per-element bind flag. Set on everything the runtime has already animated, which is what makes a second mount on `astro:page-load` a no-op.

---

## THE MOUNT

`Layout/Base.astro` owns the single mount, beside the copy and nav-toggle
runtimes:

```
Mount();
document.addEventListener("astro:page-load", Mount);
document.addEventListener("astro:before-swap", Teardown);
```

`Teardown` disconnects the observer, resets the counter generations so a
discarded page's pending frames stop, and drops the in-flight animation set. It
does not clear the bound flags: the router replaces the body, so the next page's
elements are new and unbind themselves.

The runtime registers one `change` listener on the reduced-motion media query
for the life of the page. A reader who turns the setting on mid-page gets the
settled frame rather than a half-played one.

---

## HOW TO CHECK IT

- **A page has motion** - `grep -c 'data-enter\|data-reveal\|data-stream\|data-wipe\|data-count' Source/pages/<page>.astro`, then load the route and watch the panel arrive once.
- **No double-binding** - navigate away and back through the client router; a panel must rise once, not twice, and the console must stay quiet.
- **Reduced motion** - enable *Reduce motion* in the OS, reload: every panel is present, nothing animates, no copy is missing.
- **No content hidden** - disable JavaScript, reload: every `[data-reveal]` panel is visible (the pre-hide is gated on `html.js`).
- **The gate** - `pnpm run Prepare` from `Site/` (it regenerates the generated area and names the pin it read).
