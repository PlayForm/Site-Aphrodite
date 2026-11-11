// Player.ts - the browser runtime for the 60-second deck.
//
// It owns the clock (requestAnimationFrame over Timeline), the scene switch,
// the progress hairline, the transport UI, and the keyboard: space toggles,
// arrows step scenes, R restarts, F goes fullscreen, H locks the transport
// hidden. Playback starts on load unless the URL carries `?hold=1`, and the
// last frame holds when the deck ends.
//
// The render loop is split by cost: the scene switch and the label text update
// only when their value changes, and the per-frame work is one compositor-only
// transform on the progress fill. Writing every attribute every frame was the
// jank source: six full-screen scenes each toggling inert, aria-hidden and
// data-active sixty times a second.
//
// The player reads the rendered DOM rather than re-rendering scenes, so the
// build output is the deck: with JavaScript off, every scene is still in the
// page and the first one is visible.

import { Timeline } from "./Timeline.ts";

/** "00:12.4" - the transport clock, one decimal so a 60-second cut reads precisely. */
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

	// The scene switch, run once per boundary. A scene keeps its reveal state
	// while it is hidden so its text does not vanish before the crossfade
	// finishes; on entry the content is snapped back to zero with transitions
	// disabled for one flush, then re-armed, so the entrance always runs from
	// the start instead of reversing a finished transition.
	const Switch = (Index: number): void => {
		Scenes.forEach((Scene, Position) => {
			const Active = Position === Index;

			Scene.dataset.active = String(Active);
			Scene.setAttribute("aria-hidden", String(!Active));
			Scene.inert = !Active;

			if (!Active) {
				return;
			}

			Scene.classList.add("deck-snap");
			Scene.dataset.reveal = "false";
			void Scene.offsetWidth;
			Scene.classList.remove("deck-snap");
			Scene.dataset.reveal = "true";
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
