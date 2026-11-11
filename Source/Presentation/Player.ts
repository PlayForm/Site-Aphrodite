// Player.ts - the browser runtime for the 30-second deck.
//
// It owns the clock (requestAnimationFrame over Timeline), the scene switch
// (one data-active scene at a time), the progress hairline, the transport UI,
// and the keyboard: space toggles, arrows step scenes, R restarts, F goes
// fullscreen, H hides the UI. Playback starts on load unless the URL carries
// `?hold=1`, and the last frame holds when the deck ends.
//
// The player reads the rendered DOM rather than re-rendering scenes, so the
// build output is the deck: with JavaScript off, every scene is still in the
// page and the first one is visible.

import { Timeline } from "./Timeline.ts";

/** "00:12.4" - the transport clock, one decimal so a 30-second cut reads precisely. */
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

	const Render = (): void => {
		const Moment = Timeline.At(Elapsed);

		Scenes.forEach((Scene, Index) => {
			const Active = Index === Moment.Index;

			Scene.dataset.active = String(Active);
			Scene.setAttribute("aria-hidden", String(!Active));
			Scene.inert = !Active;
		});

		if (Fill) {
			Fill.style.transform = `scaleX(${Moment.Progress})`;
		}

		if (Clock) {
			Clock.textContent = `${Stamp(Elapsed)} / ${Stamp(Timeline.Total)}`;
		}

		if (Status) {
			Status.textContent = Playing
				? "PLAYING"
				: Elapsed >= Timeline.Total
					? "ENDED"
					: "PAUSED";
		}

		if (Toggle) {
			Toggle.textContent = Playing
				? "PAUSE"
				: Elapsed >= Timeline.Total
					? "REPLAY"
					: "PLAY";
		}

		Deck.dataset.playing = String(Playing);
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
