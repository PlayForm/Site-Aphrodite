// Player.ts - the browser runtime for the 64-second deck.
//
// It owns the clock (requestAnimationFrame over Timeline), the scene switch,
// the progress hairline, the transport, the address bar, and the keyboard.
//
// The deck is a film AND a document. It autoplays when nothing else was asked
// for, and every other entry point stops it and hands the frame to the reader:
//
//   - a deep link (`/presentation/#classify`) lands on that beat, paused;
//   - prev/next, the scrubber, a beat link, a hash change and the arrow keys
//     all pause the clock before they move it, so manual navigation can never
//     be yanked forward by the autoplay;
//   - `prefers-reduced-motion: reduce` never autoplays and every entrance
//     animation collapses to its settled frame (duration 1ms), so the deck
//     reads as eleven static plates;
//   - `?hold=1` still holds the opening frame, for recording.
//
// The address bar tracks the active beat through history.replaceState (never
// push), so the URL always names the frame on screen and a copy-paste links to
// it - without filling the back stack with eleven entries. An unknown
// fragment is left alone until the reader navigates deliberately, so a typo
// in a shared link is not silently rewritten into a valid one.
//
// Motion: the scene crossfade is a CSS opacity transition, and each scene's
// entrance is one Web Animation on its content root - a single compositor
// transform for the whole slide, never a per-element stagger. Web Animations
// restart deterministically on re-entry, which a CSS transition cannot do
// without a forced layout, and the outgoing scene keeps its filled state so its
// text stays visible while the crossfade runs.
//
// The render loop is split by cost: the scene switch, the label text, the
// exit link and the scrubber position update only when their value changes,
// and the per-frame work is one compositor-only transform on the progress
// fill.

import { Scenes } from "./Scenes.ts";
import { Timeline } from "./Timeline.ts";

/** "00:12.4" - the transport clock, one decimal so a 64-second cut reads precisely. */
const Stamp = (Seconds: number): string => {
	const Rounded = Math.round(Math.max(0, Seconds) * 10) / 10;
	const Minutes = Math.floor(Rounded / 60);

	return `${String(Minutes).padStart(2, "0")}:${(Rounded - Minutes * 60).toFixed(1).padStart(4, "0")}`;
};

/** "04" - the beat ordinal, two digits so the counter never shifts width. */
const Ordinal = (Index: number): string => String(Index + 1).padStart(2, "0");

const Count = String(Scenes.length).padStart(2, "0");

/**
 * The previous mount's teardown. This route is reached under Astro's client
 * router, so the same module can mount twice (leave and come back) without
 * being re-evaluated: a second mount that did not tear the first one down
 * would leave two keydown listeners and two animation loops on one deck, and
 * every press would move two beats.
 */
let Detach: (() => void) | null = null;

export default (): void => {
	Detach?.();
	Detach = null;

	const Deck = document.querySelector<HTMLElement>("[data-deck]");
	const Frame = Deck?.querySelector<HTMLElement>("[data-frame]");

	if (!Deck || !Frame) {
		return;
	}

	const Nodes = [...Frame.querySelectorAll<HTMLElement>("[data-scene]")];
	const Bar = Frame.querySelector<HTMLElement>(".deck-ui");
	const Fill = Frame.querySelector<HTMLElement>("[data-progress-fill]");
	const Clock = Frame.querySelector<HTMLElement>("[data-clock]");
	const Status = Frame.querySelector<HTMLElement>("[data-status]");
	const Toggle = Frame.querySelector<HTMLButtonElement>("[data-toggle]");
	const PreviousBeat = Frame.querySelector<HTMLButtonElement>("[data-prev]");
	const NextBeat = Frame.querySelector<HTMLButtonElement>("[data-next]");
	const Scrub = Frame.querySelector<HTMLInputElement>("[data-scrub]");
	const Beats = [...Frame.querySelectorAll<HTMLAnchorElement>("[data-beat]")];
	const Exit = Frame.querySelector<HTMLAnchorElement>("[data-exit]");
	const ExitLabel = Frame.querySelector<HTMLElement>("[data-exit-label]");
	const BeatLabel = Frame.querySelector<HTMLElement>("[data-beat-label]");
	const Live = Frame.querySelector<HTMLElement>("[data-live]");
	const Details = Frame.querySelector<HTMLDetailsElement>("[data-beats]");
	const Reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
	const Counters = new WeakMap<HTMLElement, number>();

	let Elapsed = 0;
	let Playing = false;
	let Request = 0;
	let Previous = 0;
	let Locked = false;
	let Started = false;
	let SceneIndex = -1;
	let ClockText = "";
	let StatusText = "";
	let ToggleText = "";
	let PlayingText = "";
	let BeatText = "";
	let ExitHref = "";
	let Writes = true;

	// One entrance per scene: the content root rises 2.2cqw and fades in over
	// 520ms, and a root can carry a delay so a later panel lands after an
	// earlier one. A [data-stream] block prints its children line by line -
	// that stagger is the streaming log itself, not an entrance effect. A
	// [data-wipe] bar sweeps the panel once, and a [data-count] number climbs
	// to its value as the stream runs. Under reduced motion every duration
	// collapses to 1ms, so the same code settles the frame instead of animating
	// it.
	const Enter = (Scene: HTMLElement): void => {
		const Short = Reduced.matches;

		for (const Target of Scene.querySelectorAll<HTMLElement>("[data-enter]")) {
			for (const Running of Target.getAnimations()) {
				Running.cancel();
			}

			Target.animate(
				[
					{ opacity: 0, transform: "translate3d(0, 2.2cqw, 0)" },
					{ opacity: 1, transform: "translate3d(0, 0, 0)" },
				],
				{
					duration: Short ? 1 : 520,
					delay: Short ? 0 : Number(Target.dataset.enter) || 0,
					easing: "cubic-bezier(0.16, 0.84, 0.28, 1)",
					fill: "both",
				},
			);
		}

		for (const Stream of Scene.querySelectorAll<HTMLElement>("[data-stream]")) {
			[...Stream.children].forEach((Line, Index) => {
				for (const Running of Line.getAnimations()) {
					Running.cancel();
				}

				Line.animate(
					[
						{ opacity: 0, transform: "translate3d(0, 0.8cqw, 0)" },
						{ opacity: 1, transform: "translate3d(0, 0, 0)" },
					],
					{
						duration: Short ? 1 : 160,
						delay: Short ? 0 : 140 + Index * 70,
						easing: "cubic-bezier(0.16, 0.84, 0.28, 1)",
						fill: "both",
					},
				);
			});
		}

		for (const Wipe of Scene.querySelectorAll<HTMLElement>("[data-wipe]")) {
			for (const Running of Wipe.getAnimations()) {
				Running.cancel();
			}

			Wipe.animate(
				[
					{ transform: "translateX(0)", opacity: 0 },
					{ opacity: 1, offset: 0.1 },
					{ transform: "translateX(91cqw)", opacity: 0 },
				],
				{
					duration: Short ? 1 : 760,
					delay: Short ? 0 : Number(Wipe.dataset.wipe) || 140,
					easing: "cubic-bezier(0.3, 0, 0.2, 1)",
					fill: "both",
				},
			);
		}

		for (const Counter of Scene.querySelectorAll<HTMLElement>("[data-count]")) {
			const Value = Number(Counter.dataset.count) || 0;
			const Generation = (Counters.get(Counter) ?? 0) + 1;
			const Start = performance.now();
			let Painted = 0;

			Counters.set(Counter, Generation);

			const Step = (Now: number): void => {
				if (Counters.get(Counter) !== Generation) {
					return;
				}

				const Progress = Short ? 1 : Math.min(1, (Now - Start) / 900);

				// The counter repaints at most every 60ms: a per-frame text
				// change forces a layout on every frame of the entrance.
				if (Progress < 1 && Now - Painted < 60) {
					requestAnimationFrame(Step);

					return;
				}

				Painted = Now;

				const Eased = 1 - (1 - Progress) ** 3;

				Counter.textContent = Math.round(Value * Eased).toLocaleString("en-US");

				if (Progress < 1) {
					requestAnimationFrame(Step);
				}
			};

			requestAnimationFrame(Step);
		}
	};

	// The address bar names the frame on screen. replaceState, never push: the
	// deck's eleven beats are one history entry, so Back leaves the deck
	// instead of walking the film backwards.
	const WriteHash = (Index: number): void => {
		if (!Writes) {
			return;
		}

		const Scene = Scenes[Index];

		if (!Scene || window.location.hash === `#${Scene.Identifier}`) {
			return;
		}

		window.history.replaceState(null, "", `#${Scene.Identifier}`);
	};

	const HashIndex = (): number => {
		const Hash = window.location.hash.replace(/^#/, "");

		if (Hash === "") {
			return -1;
		}

		try {
			return Timeline.IndexOf(decodeURIComponent(Hash));
		} catch {
			return -1;
		}
	};

	// The live region speaks only for changes the reader drove. An autoplaying
	// carousel that announces every four seconds is noise, and the setting that
	// would let it keep talking - reduced motion - stops the clock before it
	// starts. It is also refreshed when the reader pauses, so stopping mid-beat
	// says which beat they stopped on instead of leaving the last deliberate
	// jump's text standing.
	const Announce = (Index: number): void => {
		const Scene = Scenes[Index];

		if (!Live || !Scene) {
			return;
		}

		const Next = `Beat ${Ordinal(Index)} of ${Count}: ${Scene.Title} Read on: ${Scene.Exit.Label}.`;

		if (Live.textContent !== Next) {
			Live.textContent = Next;
		}
	};

	const Switch = (Index: number): void => {
		Nodes.forEach((Scene, Position) => {
			const Active = Position === Index;

			Scene.dataset.active = String(Active);
			Scene.setAttribute("aria-hidden", String(!Active));
			Scene.inert = !Active;

			if (Active) {
				Enter(Scene);
			}
		});

		Beats.forEach((Link, Position) => {
			if (Position === Index) {
				Link.setAttribute("aria-current", "true");
			} else {
				Link.removeAttribute("aria-current");
			}
		});

		const Scene = Scenes[Index];

		if (!Scene) {
			return;
		}

		// The exit link follows the beat: every scene names the page that
		// elaborates it, so the transport always offers a way out of the film
		// and into the docs.
		if (Exit && ExitHref !== Scene.Exit.Href) {
			ExitHref = Scene.Exit.Href;
			Exit.href = Scene.Exit.Href;
		}

		if (ExitLabel && ExitLabel.textContent !== Scene.Exit.Label) {
			ExitLabel.textContent = Scene.Exit.Label;
		}

		const NextBeat = `${Ordinal(Index)} / ${Count}`;

		if (BeatLabel && NextBeat !== BeatText) {
			BeatText = NextBeat;
			BeatLabel.textContent = NextBeat;
		}

		// A reader-driven change always speaks; the clock's own changes never
		// do.
		if (!Playing) {
			Announce(Index);
		}
	};

	const Render = (): void => {
		const Moment = Timeline.At(Elapsed);

		if (Moment.Index !== SceneIndex) {
			SceneIndex = Moment.Index;
			Switch(Moment.Index);
			WriteHash(Moment.Index);
		}

		if (Fill) {
			Fill.style.transform = `scaleX(${Moment.Progress})`;
		}

		const NextClock = `${Stamp(Elapsed)} / ${Stamp(Timeline.Total)}`;

		if (Clock && NextClock !== ClockText) {
			ClockText = NextClock;
			Clock.textContent = NextClock;
		}

		const NextStatus = Playing
			? "PLAYING"
			: Elapsed >= Timeline.Total
				? "ENDED"
				: "PAUSED";

		if (Status && NextStatus !== StatusText) {
			StatusText = NextStatus;
			Status.textContent = NextStatus;
		}

		const NextToggle = Playing
			? "PAUSE"
			: Elapsed >= Timeline.Total
				? "REPLAY"
				: "PLAY";

		if (Toggle && NextToggle !== ToggleText) {
			ToggleText = NextToggle;
			Toggle.textContent = NextToggle;
		}

		// The scrubber is in tenths of a second, so its integer steps are the
		// deck's own resolution (the clock prints one decimal).
		if (Scrub) {
			const NextValue = String(Math.round(Elapsed * 10));

			if (Scrub.value !== NextValue) {
				Scrub.value = NextValue;
			}
		}

		const NextPlaying = String(Playing);

		if (NextPlaying !== PlayingText) {
			PlayingText = NextPlaying;
			Deck.dataset.playing = NextPlaying;
		}
	};

	// The transport is cinema-clean: it is hidden for the whole run and comes
	// back only when the deck is paused or has ended, so a recording carries
	// the frame and the progress hairline and nothing else. H locks it hidden.
	//
	// A hidden bar is also an inert bar: opacity alone would leave eleven
	// invisible buttons in the tab order, so a keyboard reader would walk
	// through controls they cannot see.
	const Hide = (): void => {
		Deck.dataset.ui = "hidden";

		if (Bar) {
			Bar.inert = true;
		}
	};

	const Show = (): void => {
		if (Locked) {
			return;
		}

		Deck.dataset.ui = "visible";

		if (Bar) {
			Bar.inert = false;
		}
	};

	const Tick = (Now: number): void => {
		if (!Playing) {
			return;
		}

		Elapsed = Math.min(Timeline.Total, Elapsed + (Now - Previous) / 1000);
		Previous = Now;
		Render();

		if (Elapsed >= Timeline.Total) {
			Playing = false;
			Render();
			Show();

			return;
		}

		Request = requestAnimationFrame(Tick);
	};

	const Seek = (Seconds: number): void => {
		Elapsed = Math.max(0, Math.min(Timeline.Total, Seconds));
		Previous = performance.now();
		Render();
	};

	const Stop = (): void => {
		Playing = false;
		window.cancelAnimationFrame(Request);
	};

	const Play = (): void => {
		if (Elapsed >= Timeline.Total) {
			Elapsed = 0;
			SceneIndex = -1;
		}

		Started = true;
		Playing = true;
		Previous = performance.now();
		Request = requestAnimationFrame(Tick);
		Hide();

		// The bar goes inert as the film starts; a control that vanishes while
		// focused would strand the focus ring on nothing.
		const Active = document.activeElement;

		if (Active instanceof HTMLElement && Bar?.contains(Active)) {
			Active.blur();
		}

		Render();
	};

	const Pause = (): void => {
		Stop();
		Render();
		Show();
		Announce(Timeline.At(Elapsed).Index);
	};

	// Every manual move pauses first: the reader who grabbed the wheel must not
	// be overrun by the clock two frames later.
	const GoTo = (Index: number): void => {
		Stop();
		Writes = true;
		Seek(Timeline.StartOf(Index));
		Show();
	};

	const Step = (Direction: number): void => {
		const Index = Timeline.At(Elapsed).Index + Direction;

		GoTo(Math.max(0, Math.min(Scenes.length - 1, Index)));
	};

	const Fullscreen = async (): Promise<void> => {
		if (document.fullscreenElement) {
			await document.exitFullscreen();

			return;
		}

		await Deck.requestFullscreen();
	};

	const OnKey = (Event: KeyboardEvent): void => {
		if (Event.metaKey || Event.ctrlKey || Event.altKey) {
			return;
		}

		// A focused control owns its own keys: space activates the button,
		// arrows move the scrubber, Enter follows the link. Hijacking them
		// would double-apply every press.
		const Target = Event.target;

		if (Target instanceof Element && Target.closest("input, button, summary, a, select, textarea")) {
			return;
		}

		switch (Event.key) {
			case " ":
			case "Spacebar":
				Event.preventDefault();
				Playing ? Pause() : Play();
				break;
			case "ArrowRight":
			case "ArrowDown":
				Event.preventDefault();
				Step(1);
				break;
			case "ArrowLeft":
			case "ArrowUp":
				Event.preventDefault();
				Step(-1);
				break;
			case "Home":
				Event.preventDefault();
				GoTo(0);
				break;
			case "End":
				Event.preventDefault();
				GoTo(Scenes.length - 1);
				break;
			case "r":
			case "R":
				SceneIndex = -1;
				GoTo(0);
				Play();
				break;
			case "f":
			case "F":
				void Fullscreen();
				break;
			case "h":
			case "H":
				Locked = !Locked;
				Locked ? Hide() : Show();
				break;
			default:
				Show();
		}
	};

	const OnPointerMove = (): void => {
		if (Started && !Playing) {
			Show();
		}
	};

	const OnFrameClick = (Event: Event): void => {
		const Target = Event.target;

		if (Target instanceof Element && Target.closest("[data-control]")) {
			return;
		}

		Playing ? Pause() : Play();
	};

	const OnToggle = (Event: Event): void => {
		Event.stopPropagation();
		Playing ? Pause() : Play();
	};

	const OnPrevious = (Event: Event): void => {
		Event.stopPropagation();
		Step(-1);
	};

	const OnNext = (Event: Event): void => {
		Event.stopPropagation();
		Step(1);
	};

	const OnScrub = (): void => {
		if (!Scrub) {
			return;
		}

		Stop();
		Writes = true;
		Seek(Number(Scrub.value) / 10);
		Show();
	};

	const OnBeat = (Event: Event): void => {
		const Link = Event.currentTarget as HTMLAnchorElement;
		const Index = Number(Link.dataset.beat);

		Event.preventDefault();

		if (Number.isFinite(Index)) {
			GoTo(Index);
		}

		Details?.removeAttribute("open");
	};

	// A hash change is the browser's own deep link: a pasted fragment, a
	// hand-edited URL, or an anchor that was followed before the player had
	// bound. It seeks without writing the hash back, so it cannot loop.
	const OnHash = (): void => {
		const Index = HashIndex();

		if (Index >= 0) {
			GoTo(Index);
		}
	};

	const OnVisibility = (): void => {
		if (document.hidden && Playing) {
			Pause();
		}
	};

	const OnReduced = (): void => {
		if (Reduced.matches && Playing) {
			Pause();
		}
	};

	window.addEventListener("keydown", OnKey);
	window.addEventListener("hashchange", OnHash);
	document.addEventListener("visibilitychange", OnVisibility);
	Reduced.addEventListener("change", OnReduced);
	Frame.addEventListener("pointermove", OnPointerMove);
	Frame.addEventListener("click", OnFrameClick);
	Toggle?.addEventListener("click", OnToggle);
	PreviousBeat?.addEventListener("click", OnPrevious);
	NextBeat?.addEventListener("click", OnNext);
	Scrub?.addEventListener("input", OnScrub);
	Beats.forEach((Link) => Link.addEventListener("click", OnBeat));

	Detach = (): void => {
		Stop();
		window.removeEventListener("keydown", OnKey);
		window.removeEventListener("hashchange", OnHash);
		document.removeEventListener("visibilitychange", OnVisibility);
		Reduced.removeEventListener("change", OnReduced);
		Frame.removeEventListener("pointermove", OnPointerMove);
		Frame.removeEventListener("click", OnFrameClick);
		Toggle?.removeEventListener("click", OnToggle);
		PreviousBeat?.removeEventListener("click", OnPrevious);
		NextBeat?.removeEventListener("click", OnNext);
		Scrub?.removeEventListener("input", OnScrub);
		Beats.forEach((Link) => Link.removeEventListener("click", OnBeat));
	};

	const Begin = async (): Promise<void> => {
		const Target = HashIndex();

		// An unknown fragment is not a beat. The deck opens on beat 01 and
		// leaves the reader's hash alone until they navigate deliberately, so a
		// typo in a shared link stays visible instead of being rewritten into a
		// valid one that hides the mistake.
		Writes = Target >= 0 || window.location.hash === "";

		if (Target >= 0) {
			Elapsed = Timeline.StartOf(Target);
		}

		Render();
		Hide();

		await document.fonts.ready;

		const Hold = new URLSearchParams(window.location.search).get("hold") === "1";

		// Three entry points mean the same thing - show a readable static frame
		// and let the reader drive: reduced motion, an explicit hold, and a
		// deep link into a beat.
		if (Hold || Reduced.matches || Target >= 0) {
			Show();

			return;
		}

		window.setTimeout(Play, 420);
	};

	void Begin();
};
