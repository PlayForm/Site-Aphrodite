/**
 * Grunge - ink splats, drawn from simplex noise at RUN time.
 *
 * The first attempt generated six fixed SVG groups at build time. That made
 * every visitor see the same six brushes forever, which is the opposite of what
 * a splatter is: the point is that no two visits, and no two cards, carry the
 * same stain.
 *
 * So the geometry is drawn in the browser, per page load:
 *
 *   card -> group of 4 splats -> each splat = body + spikes + droplets
 *
 * Every layer rides the same 2D noise field, so the body and its spikes agree
 * about where the energy is. Each card gets a fresh seed, a fresh rotation and a
 * fresh off-centre registration, which is what stops a row of cards looking
 * stamped.
 *
 * Painted as a CSS mask (`--grunge-mask`), so the ink colour stays a token and
 * one drawing can read as a dark stain on the page ground or a light bloom on a
 * crimson band.
 */
import { createNoise2D } from "simplex-noise";

/** mulberry32 - small deterministic PRNG; seeded per card, per visit. */
const Random = (Seed: number): (() => number) => {
	let State = Seed;
	return () => {
		State = (State + 0x6d2b79f5) | 0;
		let T = Math.imul(State ^ (State >>> 15), 1 | State);
		T = (T + Math.imul(T ^ (T >>> 7), 61 | T)) ^ T;
		return ((T ^ (T >>> 14)) >>> 0) / 4294967296;
	};
};

const Size = 900;

/**
 * One splat: a noise-modulated body, tapered spikes thrown outward, and
 * satellites sized by a power curve so most are specks and a few are fat.
 * A uniform size distribution reads as confetti, not as spatter.
 */
const Splat = (Seed: number, Cx: number, Cy: number, Radius: number): string => {
	const Next = Random(Seed);
	const Noise = createNoise2D(Next);
	const Parts: string[] = [];

	const Steps = 132;
	const Points: string[] = [];
	for (let Index = 0; Index < Steps; Index += 1) {
		const Angle = (Index / Steps) * Math.PI * 2;
		const Low = Noise(Math.cos(Angle) * 1.1 + Seed * 0.01, Math.sin(Angle) * 1.1);
		const High = Noise(Math.cos(Angle) * 3.4 + 11, Math.sin(Angle) * 3.4 + 7) * 0.35;
		const Ride = Math.max(0.34, 1 + Low * 0.44 + High);
		const Reach = Radius * Ride;
		Points.push(`${(Cx + Math.cos(Angle) * Reach).toFixed(1)},${(Cy + Math.sin(Angle) * Reach).toFixed(1)}`);
	}
	Parts.push(`<polygon points="${Points.join(" ")}"/>`);

	const Spikes = 6 + Math.floor(Next() * 7);
	for (let Index = 0; Index < Spikes; Index += 1) {
		const Angle = Next() * Math.PI * 2;
		const Reach = Radius * (0.95 + Noise(Angle * 2, Seed * 0.02) * 0.9 + Next() * 0.85);
		const Width = Radius * (0.045 + Next() * 0.085);
		const TipX = Cx + Math.cos(Angle) * Reach;
		const TipY = Cy + Math.sin(Angle) * Reach;
		const BaseX = Cx + Math.cos(Angle) * Radius * 0.55;
		const BaseY = Cy + Math.sin(Angle) * Radius * 0.55;
		const Nx = Math.cos(Angle + Math.PI / 2) * Width;
		const Ny = Math.sin(Angle + Math.PI / 2) * Width;
		Parts.push(
			`<polygon points="${(BaseX + Nx).toFixed(1)},${(BaseY + Ny).toFixed(1)} ${TipX.toFixed(1)},${TipY.toFixed(1)} ${(BaseX - Nx).toFixed(1)},${(BaseY - Ny).toFixed(1)}"/>`,
		);
	}

	const Drops = 10 + Math.floor(Next() * 16);
	for (let Index = 0; Index < Drops; Index += 1) {
		const Angle = Next() * Math.PI * 2;
		const Distance = Radius * (0.85 + Next() * 2.0);
		const R = Radius * Math.pow(Next(), 3) * 0.15 + 1.2;
		Parts.push(
			`<circle cx="${(Cx + Math.cos(Angle) * Distance).toFixed(1)}" cy="${(Cy + Math.sin(Angle) * Distance).toFixed(1)}" r="${R.toFixed(1)}"/>`,
		);
	}

	return Parts.join("");
};

/** A card's group: N splats, each seeded and placed independently. */
const Group = (Seed: number, Count: number): string => {
	const Next = Random(Seed ^ 0x9e3779b9);
	const Shapes: string[] = [];
	for (let Index = 0; Index < Count; Index += 1) {
		const SplatSeed = (Seed + Index * 7919) | 0;
		const Radius = Size * (0.1 + Next() * 0.18);
		const Cx = Size * (0.18 + Next() * 0.64);
		const Cy = Size * (0.18 + Next() * 0.64);
		const Turn = (Next() * 360).toFixed(1);
		Shapes.push(
			`<g transform="rotate(${Turn} ${Cx.toFixed(1)} ${Cy.toFixed(1)})">${Splat(SplatSeed, Cx, Cy, Radius)}</g>`,
		);
	}
	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Size} ${Size}" fill="#000">${Shapes.join("")}</svg>`;
};

/** Splats per card. Four reads as a cluster; three reads as one brush and a bit. */
const PerCard = 4;

/**
 * Paint every `[data-grunge]` element on the current document. Idempotent per
 * element per mount, so a view transition repaints the new page and leaves the
 * old one alone. Each call re-seeds, so a revisit is a different stain.
 */
export const PaintGrunge = (): void => {
	for (const Element of document.querySelectorAll<HTMLElement>("[data-grunge]")) {
		if (Element.dataset.grungePainted === "1") continue;
		try {
			const Seed = (Math.random() * 0x7fffffff) | 0;
			const Svg = Group(Seed, PerCard);
			Element.style.setProperty("--grunge-mask", `url("data:image/svg+xml,${encodeURIComponent(Svg)}")`);
			Element.style.setProperty("--grunge-turn", `${(Math.random() * 4 - 2).toFixed(2)}deg`);
			Element.style.setProperty(
				"--grunge-inset",
				`-${(4 + Math.random() * 8).toFixed(1)}% -${(5 + Math.random() * 10).toFixed(1)}% -${(4 + Math.random() * 8).toFixed(1)}% -${(5 + Math.random() * 9).toFixed(1)}%`,
			);
			Element.dataset.grungePainted = "1";
		} catch (Error) {
			// A decoration must never take the page down with it.
			console.warn("[grunge] skipped one element", Error);
		}
	}
};
