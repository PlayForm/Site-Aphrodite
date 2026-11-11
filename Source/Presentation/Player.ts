// Player.ts - the browser runtime for the 64-second deck.
//
// It owns the clock (requestAnimationFrame over Timeline), the scene switch,
// the progress hairline, the transport UI, and the keyboard: space toggles,
// arrows step scenes, R restarts, F goes fullscreen, H locks the transport
// hidden. Playback starts on load unless the URL carries `?hold=1`, and the
// last frame holds when the deck ends.
//
// Motion: the scene crossfade is a CSS opacity transition, and each scene's
// entrance is one Web Animation on its content root - a single compositor
// transform for the whole slide, never a per-element stagger. Web Animations
// restart deterministically on re-entry, which a CSS transition cannot do
// without a forced layout, and the outgoing scene keeps its filled state so its
// text stays visible while the crossfade runs.
//
// The render loop is split by cost: the scene switch and the label text update
// only when their value changes, and the per-frame work is one compositor-only
// transform on the progress fill.

import { Timeline } from "./Timeline.ts";

/** "00:12.4" - the transport clock, one decimal so a 64-second cut reads precisely. */
const Stamp = (Seconds: number): string => {
	const Whole = Math.max(0, Seconds);
	const Minutes = Math.floor(Whole / 60);

	return `${String(Minutes).padStart(2, "0")}:${(Whole - Minutes * 60).toFixed(1).padStart(4, "0")}`;
};

export default (): void => {
	const Deck = document.querySelector<HTMLElement>("[data-deck]");
	const Frame = Deck?.querySelector<HTMLElement>("[data-frame]");

	if (!Deck || !Frame) {
		return;
	}

	const Scenes = [...Frame.querySelectorAll<HTMLElement>("[data-scene]")];
	const Fill = Frame.querySelector<HTMLElement>("[data-progress-fill]");
	const Clock = Frame.querySelector<HTMLElement>("[data-clock]");
	const Status = Frame.querySelector<HTMLElement>("[data-status]");
	const Toggle = Frame.querySelector<HTMLButtonElement>("[data-toggle]");
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

	// One entrance per scene: the content root rises 2.2cqw and fades in over
	// 520ms, and a root can carry a delay so a later panel lands after an
	// earlier one. A [data-stream] block prints its children line by line -
	// that stagger is the streaming log itself, not an entrance effect. A
	// [data-wipe] bar sweeps the panel once, and a [data-count] number climbs
	// to its value as the stream runs.
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

		for (const Bar of Scene.querySelectorAll<HTMLElement>("[data-wipe]")) {
			for (const Running of Bar.getAnimations()) {
				Running.cancel();
			}

			Bar.animate(
				[
					{ transform: "translateX(0)", opacity: 0 },
					{ opacity: 1, offset: 0.1 },
					{ transform: "translateX(91cqw)", opacity: 0 },
				],
				{
					duration: Short ? 1 : 760,
					delay: Short ? 0 : Number(Bar.dataset.wipe) || 140,
					easing: "cubic-bezier(0.3, 0, 0.2, 1)",
					fill: "both",
				},
			);
		}

		for (const Counter of Scene.querySelectorAll<HTMLElement>("[data-count]")) {
			const Value = Number(Counter.dataset.count) || 0;
			const Generation = (Counters.get(Counter) ?? 0) + 1;
			const Start = performance.now();

			Counters.set(Counter, Generation);

			const Step = (Now: number): void => {
				if (Counters.get(Counter) !== Generation) {
					return;
				}

				const Progress = Short ? 1 : Math.min(1, (Now - Start) / 900);
				const Eased = 1 - (1 - Progress) ** 3;

				Counter.textContent = Math.round(Value * Eased).toLocaleString("en-US");

				if (Progress < 1) {
					requestAnimationFrame(Step);
				}
			};

			requestAnimationFrame(Step);
		}
	};

	const Switch = (Index: number): void => {
		Scenes.forEach((Scene, Position) => {
			const Active = Position === Index;

			Scene.dataset.active = String(Active);
			Scene.setAttribute("aria-hidden", String(!Active));
			Scene.inert = !Active;

			if (Active) {
				Enter(Scene);
			}
		});
	};

	const Render = (): void => {
		const Moment = Timeline.At(Elapsed);

		if (Moment.Index !== SceneIndex) {
			SceneIndex = Moment.Index;
			Switch(Moment.Index);
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

		const NextPlaying = String(Playing);

		if (NextPlaying !== PlayingText) {
			PlayingText = NextPlaying;
			Deck.dataset.playing = NextPlaying;
		}
	};

	// The transport is cinema-clean: it is hidden for the whole run and comes
	// back only when the deck is paused or has ended, so a recording carries
	// the frame and the progress hairline and nothing else. H locks it hidden.
	const Hide = (): void => {
		Deck.dataset.ui = "hidden";
	};

	const Show = (): void => {
		if (!Locked) {
			Deck.dataset.ui = "visible";
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
			Hide();

			return;
		}

		Request = requestAnimationFrame(Tick);
	};

	const Play = (): void => {
		if (Elapsed >= Timeline.Total) {
			Elapsed = 0;
		}

		Started = true;
		Playing = true;
		Previous = performance.now();
		Request = requestAnimationFrame(Tick);
		Hide();
		Render();
	};

	const Pause = (): void => {
		Playing = false;
		window.cancelAnimationFrame(Request);
		Render();
		Show();
	};

	const Seek = (Seconds: number): void => {
		Elapsed = Math.max(0, Math.min(Timeline.Total, Seconds));
		Previous = performance.now();
		Render();
	};

	const Step = (Direction: number): void => {
		const Index = Timeline.At(Elapsed).Index + Direction;

		if (Index < 0) {
			Seek(0);

			return;
		}

		if (Index >= Scenes.length) {
			Seek(Timeline.Total);

			return;
		}

		Seek(Timeline.StartOf(Index));
	};

	const Fullscreen = async (): Promise<void> => {
		if (document.fullscreenElement) {
			await document.exitFullscreen();

			return;
		}

		await Deck.requestFullscreen();
	};

	window.addEventListener("keydown", (Event) => {
		switch (Event.key) {
			case " ":
				Event.preventDefault();
				Playing ? Pause() : Play();
				break;
			case "ArrowRight":
				Event.preventDefault();
				Step(1);
				Show();
				break;
			case "ArrowLeft":
				Event.preventDefault();
				Step(-1);
				Show();
				break;
			case "r":
			case "R":
				Seek(0);
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
	});

	Frame.addEventListener("pointermove", () => {
		if (Started && !Playing) {
			Show();
		}
	});

	Frame.addEventListener("click", (Event) => {
		if ((Event.target as HTMLElement).closest("[data-control]")) {
			return;
		}

		Playing ? Pause() : Play();
	});

	Toggle?.addEventListener("click", (Event) => {
		Event.stopPropagation();
		Playing ? Pause() : Play();
	});

	document.addEventListener("visibilitychange", () => {
		if (document.hidden && Playing) {
			Pause();
		}
	});

	const Begin = async (): Promise<void> => {
		Render();
		Hide();

		await document.fonts.ready;

		if (new URLSearchParams(window.location.search).get("hold") === "1") {
			Show();

			return;
		}

		window.setTimeout(Play, 420);
	};

	void Begin();
};
