// Timeline.ts - the deck's clock: the scene boundaries derived from the
// narration, the one lookup the player calls every frame, and the beat
// addresses a URL fragment resolves against.
//
// The timeline owns time; the scenes own copy and addresses. Nothing here
// reads the DOM, so the page can render the same numbers at build time and the
// player can seek against them in the browser.
//
// A scene's boundary is the running total BEFORE its duration is added, so
// Starts[0] is 0 and Total is the sum of every duration. Reading the
// boundaries as end times instead would make the deck switch one scene late.
//
// The total is derived, never written down: it is 64 seconds because the
// eleven durations in Scenes.ts sum to 64, and it moves the day one of them
// does.

import { Scenes } from "./Scenes.ts";

/** Where an elapsed time lands: the active scene, its start, and overall progress. */
export interface Moment {
	/** Index of the scene holding the frame at this elapsed time. */
	readonly Index: number;
	/** Seconds into the deck when that scene began. */
	readonly Start: number;
	/** Whole-deck progress from 0 to 1. */
	readonly Progress: number;
}

/** One pass over the narration: each scene's start, and the deck's total. */
const Walk = Scenes.reduce<{ Starts: number[]; Total: number }>(
	(State, Scene) => ({
		Starts: [...State.Starts, State.Total],
		Total: State.Total + Scene.Duration,
	}),
	{ Starts: [], Total: 0 },
);

/** The start time of each scene, in order. */
const Starts: readonly number[] = Walk.Starts;

/** The deck's total length in seconds. */
const Total = Walk.Total;

export const Timeline = {
	/** Total length in seconds (64 by construction: the sum of the durations). */
	Total,

	/** The start time of each scene, in order. */
	Starts,

	/** Where an elapsed time lands. Past the end it holds the last scene at progress 1. */
	At(Elapsed: number): Moment {
		const Clamped = Math.max(0, Math.min(Total, Elapsed));

		for (let Index = Scenes.length - 1; Index >= 0; Index -= 1) {
			const Start = Starts[Index] ?? 0;

			if (Clamped >= Start) {
				return { Index, Start, Progress: Total === 0 ? 0 : Clamped / Total };
			}
		}

		return { Index: 0, Start: 0, Progress: 0 };
	},

	/** The start time of the scene at an index, clamped to the deck. */
	StartOf(Index: number): number {
		return Starts[Math.max(0, Math.min(Scenes.length - 1, Index))] ?? 0;
	},

	/**
	 * The index of a beat by its Identifier - the fragment a deep link carries.
	 * Returns -1 for a fragment the deck does not have, so a caller can tell
	 * "no such beat" apart from "the first beat" and leave a bad hash alone
	 * rather than silently landing on the opening.
	 */
	IndexOf(Identifier: string): number {
		return Scenes.findIndex((Scene) => Scene.Identifier === Identifier);
	},
};
