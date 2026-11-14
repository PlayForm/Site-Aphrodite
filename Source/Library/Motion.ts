// Motion.ts - the site's one motion runtime: the deck's motion language,
// generalised for every page.
//
// The vocabulary is lifted verbatim from Presentation/Player.ts, whose Enter()
// is the reference implementation (scene #default is the one the owner points
// at). Same numbers, same easings, same fill: both:
//
//   [data-enter]   one entrance per content root - rises 2.2cqw and fades in
//                  over 520ms. The attribute's value is a delay in ms, so a
//                  later panel can land after an earlier one. Never a
//                  per-element stagger: the whole panel is one compositor
//                  transform.
//   [data-reveal]  the same entrance, fired by scroll instead of by mount -
//                  the site-wide default for a static page's sections. One
//                  IntersectionObserver for the whole document, fires once per
//                  element, then unobserves it. [data-enter] stays for explicit
//                  sequencing: a panel that must land after another, or on a
//                  mount rather than on a scroll.
//   [data-stream]  a block prints its children line by line. That stagger IS
//                  the streaming log - the product's argument rendered as
//                  motion - not an entrance effect.
//   [data-wipe]    a bar sweeps its panel once.
//   [data-count]   a number climbs to its value as the stream runs.
//
// The entrance root owns the motion inside it, exactly as the deck's
// Enter(Scene) runs the whole vocabulary over the scene it is entering: a
// panel that rises also streams, wipes and counts on the same beat. A stream,
// wipe or counter that no entrance root claims still runs, at mount.
//
// The crossfade is deliberately NOT here. A section switch is a CSS opacity
// transition, never a JS loop, and the entrance's fill: both is what keeps the
// outgoing node's text readable while it runs (Deck.css's .deck-scene is the
// reference). A runtime that owned the fade would have to hold the outgoing
// frame's lifetime, which is the browser's job.
//
// The laws, in the order they cost you something:
//
//   - Compositor only. Every keyframe is transform and opacity, so no frame of
//     any animation can force layout or paint. A counter is the one exception,
//     and it repaints at most every 60ms for exactly that reason.
//   - Nothing on the scroll path. Reveal is one IntersectionObserver, not a
//     scroll listener, and its callback reads no layout: it fires the same
//     entrance a mount would have fired.
//   - Bounded work. One Web Animation per entrance root; [data-stream] staggers
//     at most 64 children, because a 500-line log must not create 500
//     animations.
//   - Reduced motion is the same code settling the final frame: under
//     prefers-reduced-motion: reduce every duration collapses to 1ms and every
//     delay to 0, so nothing is ever hidden from a reader who asked for
//     stillness.
//   - Copy stays inside the motion. Every attribute belongs on a content root
//     that says something: a panel with no sentence under it is a defect, and a
//     [data-count] with no line explaining the number is decoration.
//
// Mount is idempotent. Every element this runtime touches carries
// data-motion-bound, so the client router can mount the same module on every
// page without double-binding; Teardown (wired to astro:before-swap in
// Layout/Base.astro) drops the observer and the in-flight counter guards so a
// discarded page leaves nothing running.

/** The deck's numbers, stated once. Change them here and the whole site moves together. */
const Timing = {
	Enter: {
		Rise: "translate3d(0, 2.2cqw, 0)",
		Duration: 520,
		Easing: "cubic-bezier(0.16, 0.84, 0.28, 1)",
	},
	Stream: {
		Rise: "translate3d(0, 0.8cqw, 0)",
		Duration: 160,
		Lead: 140,
		Step: 70,
		/** Past this many children the tail arrives with the last staggered line. */
		Limit: 64,
	},
	Wipe: {
		Travel: "translateX(91cqw)",
		Duration: 760,
		Lead: 140,
		Easing: "cubic-bezier(0.3, 0, 0.2, 1)",
	},
	Count: {
		Duration: 900,
		/** A text change per frame forces a layout per frame; 60ms is the floor. */
		Repaint: 60,
	},
} as const;

let Preference: MediaQueryList | null = null;

/** The reader's own setting, read at every call so a mid-page change is honoured. */
const Reduced = (): MediaQueryList =>
	(Preference ??= window.matchMedia("(prefers-reduced-motion: reduce)"));

/** Every animation this runtime owns, so a change of the setting can settle them all. */
const Running = new Set<Animation>();

/** One observer for the page: reveal is not a scroll listener. */
let Watcher: IntersectionObserver | null = null;

/** Counter generations, so a discarded page's pending frames stop on their next tick. */
let Generations = new WeakMap<HTMLElement, number>();

let Listening = false;

/**
 * One animation, on one element, cancelled and replayed. A Web Animation
 * restarts deterministically from frame 0 when it is cancelled and replayed,
 * which a CSS transition cannot do without a forced layout - this is the
 * deck's own re-entry trick. Under reduced motion the duration collapses to
 * 1ms, so the same call settles the final frame instead of animating to it.
 */
const Play = (
	Target: HTMLElement,
	Frames: Keyframe[],
	Duration: number,
	Delay: number,
	Easing: string,
): void => {
	for (const Existing of Target.getAnimations()) {
		Existing.cancel();
	}

	const Settled = Reduced().matches;

	const Played = Target.animate(Frames, {
		duration: Settled ? 1 : Duration,
		delay: Settled ? 0 : Delay,
		easing: Easing,
		fill: "both",
	});

	const Forget = (): void => {
		Running.delete(Played);
	};

	Running.add(Played);
	Played.addEventListener("finish", Forget, { once: true });
	Played.addEventListener("cancel", Forget, { once: true });
};

/** The entrance, on any root: one rise, one fade, one compositor transform. */
const Rise = (Target: HTMLElement, Delay: number): void => {
	Play(
		Target,
		[
			{ opacity: 0, transform: Timing.Enter.Rise },
			{ opacity: 1, transform: "translate3d(0, 0, 0)" },
		],
		Timing.Enter.Duration,
		Delay,
		Timing.Enter.Easing,
	);
};

/** The streaming log: children print one after another, at most Limit of them. */
const Stream = (Root: HTMLElement): void => {
	[...Root.children].slice(0, Timing.Stream.Limit).forEach((Line, Index) => {
		if (!(Line instanceof HTMLElement)) {
			return;
		}

		Play(
			Line,
			[
				{ opacity: 0, transform: Timing.Stream.Rise },
				{ opacity: 1, transform: "translate3d(0, 0, 0)" },
			],
			Timing.Stream.Duration,
			Timing.Stream.Lead + Index * Timing.Stream.Step,
			Timing.Enter.Easing,
		);
	});
};

/** The sweep: a bar crosses its panel once and is gone. */
const Wipe = (Target: HTMLElement): void => {
	Play(
		Target,
		[
			{ transform: "translateX(0)", opacity: 0 },
			{ opacity: 1, offset: 0.1 },
			{ transform: Timing.Wipe.Travel, opacity: 0 },
		],
		Timing.Wipe.Duration,
		Number(Target.dataset.wipe) || Timing.Wipe.Lead,
		Timing.Wipe.Easing,
	);
};

/**
 * The climb. The value is the attribute, never the text: the element already
 * carries its final figure in the markup, so a reader without JavaScript reads
 * the number instead of a zero. A bare [data-count] is somebody else's label -
 * the showcase registry's "SHOWING n OF m" - and rewriting it to 0 would
 * delete copy the page is using, so a non-numeric value is left alone.
 */
const Count = (Target: HTMLElement): void => {
	const Raw = Target.dataset.count;

	if (Raw === undefined || Raw.trim() === "") {
		return;
	}

	const Value = Number(Raw);

	if (!Number.isFinite(Value)) {
		return;
	}

	const Generation = (Generations.get(Target) ?? 0) + 1;

	Generations.set(Target, Generation);

	const Final = Value.toLocaleString("en-US");

	if (Reduced().matches) {
		Target.textContent = Final;

		return;
	}

	const Start = performance.now();
	let Painted = 0;

	const Step = (Now: number): void => {
		if (Generations.get(Target) !== Generation) {
			return;
		}

		const Progress = Math.min(1, (Now - Start) / Timing.Count.Duration);

		// The counter repaints at most every 60ms: a per-frame text change
		// forces a layout on every frame of the entrance.
		if (Progress < 1 && Now - Painted < Timing.Count.Repaint) {
			requestAnimationFrame(Step);

			return;
		}

		Painted = Now;

		const Eased = 1 - (1 - Progress) ** 3;

		Target.textContent =
			Progress >= 1 ? Final : Math.round(Value * Eased).toLocaleString("en-US");

		if (Progress < 1) {
			requestAnimationFrame(Step);
		}
	};

	requestAnimationFrame(Step);
};

/**
 * The subtrees this runtime leaves alone. The deck drives its own scenes from
 * its own clock - Player.ts is the reference implementation, not a second
 * consumer of it - and a page whose own runtime already owns an attribute opts
 * its subtree out with data-motion="off".
 */
const Exempt = (Target: HTMLElement): boolean =>
	Target.closest('[data-motion="off"]') !== null ||
	Target.closest("[data-deck]") !== null;

/**
 * The bind guard. The client router mounts this module once per page, so an
 * element that has already been given its motion is never given it twice.
 */
const Take = (Target: HTMLElement): boolean => {
	if (Target.dataset.motionBound || Exempt(Target)) {
		return false;
	}

	Target.dataset.motionBound = "1";

	return true;
};

/**
 * The rest of the vocabulary, over one root. Defer skips anything an entrance
 * root has not fired yet: a [data-stream] inside a [data-reveal] must print
 * when the panel arrives, not while it is still off-screen.
 */
const Compose = (Root: ParentNode, Defer: boolean): void => {
	for (const Target of Root.querySelectorAll<HTMLElement>("[data-stream]")) {
		if (Defer && Target.closest("[data-enter], [data-reveal]")) {
			continue;
		}

		if (Take(Target)) {
			Stream(Target);
		}
	}

	for (const Target of Root.querySelectorAll<HTMLElement>("[data-wipe]")) {
		if (Defer && Target.closest("[data-enter], [data-reveal]")) {
			continue;
		}

		if (Take(Target)) {
			Wipe(Target);
		}
	}

	for (const Target of Root.querySelectorAll<HTMLElement>("[data-count]")) {
		if (Defer && Target.closest("[data-enter], [data-reveal]")) {
			continue;
		}

		if (Take(Target)) {
			Count(Target);
		}
	}
};

/**
 * A reveal has arrived. Releasing the CSS pre-hide, the rise and everything the
 * panel owns happen in one tick, so the panel never shows a frame of its
 * pre-hidden state. A [data-enter] nested inside waits for this moment too.
 */
const Fire = (Target: HTMLElement): void => {
	Target.dataset.revealed = "1";
	Rise(Target, Number(Target.dataset.reveal) || 0);

	for (const Inner of Target.querySelectorAll<HTMLElement>("[data-enter]")) {
		if (Take(Inner)) {
			Rise(Inner, Number(Inner.dataset.enter) || 0);
		}
	}

	Compose(Target, false);
};

/**
 * One observer for the page, fires once per element, then unobserves it. A
 * panel starts its entrance when it is a tenth of the viewport in rather than
 * the instant its first pixel clips the fold, so the rise happens where the
 * reader is already looking.
 *
 * The root is extended far above the viewport and left at -10% below it. The
 * bottom margin is the deferral: nothing enters from underneath until it is a
 * tenth in. The top extension is the rescue: an element the reader SKIPPED -
 * a trackpad flick, a Page Down, an anchor jump on a 36,000px page - goes from
 * below the fold to above it between two frames, and its intersection ratio
 * never leaves zero, so no callback would ever fire for it and the CSS
 * pre-hide would strand its copy at opacity 0 for good. With the root reaching
 * up, "above the viewport" is intersecting, so the crossing is reported and the
 * panel is released behind the reader. Content wins over motion.
 */
const Watch = (): IntersectionObserver => {
	Watcher ??= new IntersectionObserver(
		(Entries) => {
			for (const Entry of Entries) {
				// The negative bottom margin holds an entrance back until the panel
				// is a tenth of the viewport in, so the rise happens where the
				// reader is already looking. An element that can never reach that
				// line - the last short block of a page, a page that cannot scroll
				// further - would then stay hidden forever, so anything already
				// inside the viewport is released here instead. The comparison is
				// against the viewport, not Entry.rootBounds: rootBounds is the
				// margin-adjusted rectangle, which is the very line the element
				// cannot reach. Content wins over motion.
				const InView =
					Entry.isIntersecting || Entry.boundingClientRect.top < window.innerHeight;

				if (!InView) {
					continue;
				}

				Watcher?.unobserve(Entry.target);
				Fire(Entry.target as HTMLElement);
			}
		},
		{ rootMargin: "100000px 0px -10% 0px" },
	);

	return Watcher;
};

const Reveal = (Target: HTMLElement): void => {
	if (typeof IntersectionObserver === "undefined") {
		// Defensive: without the observer the CSS pre-hide in Motion.css would
		// hold the panel at opacity 0 forever. Content wins over motion - the
		// panel is released and whatever it owns still prints.
		Target.dataset.revealed = "1";
		Compose(Target, false);

		return;
	}

	Watch().observe(Target);
};

/** A reader who turns reduced motion on mid-page gets the settled frame, not a half-played one. */
const Settle = (): void => {
	for (const Played of Running) {
		Played.finish();
	}
};

const Mount = (): void => {
	if (!Listening) {
		Reduced().addEventListener("change", Settle);
		Listening = true;
	}

	// A page with no motion attributes is done here: one selector walk, and the
	// runtime never touches the document again.
	if (
		!document.querySelector(
			"[data-enter], [data-reveal], [data-stream], [data-wipe], [data-count]",
		)
	) {
		return;
	}

	for (const Root of document.querySelectorAll<HTMLElement>("[data-enter]")) {
		// A nested entrance waits for the panel that carries it.
		if (Root.closest("[data-reveal]")) {
			continue;
		}

		if (Take(Root)) {
			Rise(Root, Number(Root.dataset.enter) || 0);
			Compose(Root, false);
		}
	}

	for (const Root of document.querySelectorAll<HTMLElement>("[data-reveal]")) {
		if (Take(Root)) {
			Reveal(Root);
		}
	}

	// Whatever no entrance root claimed still runs, on the page's own beat
	// rather than on a scroll.
	Compose(document, true);
};

/** The discarded page's teardown: no observer, no pending counter frame, nothing left running. */
export const Teardown = (): void => {
	Watcher?.disconnect();
	Watcher = null;
	Generations = new WeakMap();
	Running.clear();
};

export default Mount;
