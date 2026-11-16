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
 *
 * The family is held together by three constraints, and they are the point:
 *
 *   1. ONE noise field per page. Every splat samples the same 2D field, so the
 *      lobes fall in the same places and the arms lean the same way - a group
 *      reads as one brush, not four unrelated blots.
 *   2. SMALL variation only: radius inside a narrow band, 7-9 spikes, rotation
 *      within +/-22 degrees, centre inside the middle half.
 *   3. ONE grey ink, weighted per layer by fill-opacity (0.9 / 0.75 / 0.55 /
 *      0.35). Layered opacity over one grey gives the depth - a dense core where
 *      the layers agree, a soft edge where they do not - without a second colour.
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
 * The shared field. Seeded once per page load: every splat on the page reads
 * the same noise, which is where the family resemblance comes from. A splat's
 * own seed only shifts it to a different passage of that one field.
 */
const Field = createNoise2D(Random((Math.random() * 0x7fffffff) | 0));

/** Per-layer weights. One grey ink, four greys in the eye. */
const LayerOpacity = [0.9, 0.75, 0.55, 0.35];

/**
 * One splat: a noise-modulated body, tapered spikes thrown outward, and
 * satellites sized by a power curve so most are specks and a few are fat.
 * A uniform size distribution reads as confetti, not as spatter.
 */
const Splat = (Seed: number, Cx: number, Cy: number, Radius: number, Opacity: number): string => {
	const Next = Random(Seed);
	const Parts: string[] = [];

	const Steps = 132;
	const Points: string[] = [];
	for (let Index = 0; Index < Steps; Index += 1) {
		const Angle = (Index / Steps) * Math.PI * 2;
		const Low = Field(Math.cos(Angle) * 1.1 + Seed * 0.004, Math.sin(Angle) * 1.1);
		const High = Field(Math.cos(Angle) * 3.4 + 11, Math.sin(Angle) * 3.4 + 7) * 0.28;
		const Ride = Math.max(0.42, 1 + Low * 0.34 + High);
		const Reach = Radius * Ride;
		Points.push(`${(Cx + Math.cos(Angle) * Reach).toFixed(1)},${(Cy + Math.sin(Angle) * Reach).toFixed(1)}`);
	}
	Parts.push(`<polygon points="${Points.join(" ")}"/>`);

	// 7-9 arms: enough to read as a throw, few enough that every arm is seen.
	const Spikes = 7 + Math.floor(Next() * 3);
	for (let Index = 0; Index < Spikes; Index += 1) {
		const Angle = (Index / Spikes) * Math.PI * 2 + Next() * 0.35;
		const Reach = Radius * (1.05 + Field(Angle * 2, Seed * 0.01) * 0.55 + Next() * 0.45);
		const Width = Radius * (0.05 + Next() * 0.05);
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

	return `<g fill-opacity="${Opacity.toFixed(2)}">${Parts.join("")}</g>`;
};

/** A card's group: four layers of one family, each a slightly different passage. */
const Group = (Seed: number): string => {
	const Next = Random(Seed ^ 0x9e3779b9);
	const Shapes: string[] = [];
	for (let Index = 0; Index < LayerOpacity.length; Index += 1) {
		// Narrow bands, on purpose: the group must look made by one hand.
		const Radius = Size * (0.12 + Next() * 0.05);
		const Cx = Size * (0.3 + Next() * 0.4);
		const Cy = Size * (0.3 + Next() * 0.4);
		const Turn = (Next() * 44 - 22).toFixed(1);
		Shapes.push(
			`<g transform="rotate(${Turn} ${Cx.toFixed(1)} ${Cy.toFixed(1)})">${Splat((Seed + Index * 7919) | 0, Cx, Cy, Radius, LayerOpacity[Index])}</g>`,
		);
	}
	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Size} ${Size}" fill="#000">${Shapes.join("")}</svg>`;
};

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
			Element.style.setProperty("--grunge-mask", `url("data:image/svg+xml,${encodeURIComponent(Group(Seed))}")`);
			// Registration varies a little, never a lot: +/-1.2deg, 4-10% bleed.
			Element.style.setProperty("--grunge-turn", `${(Math.random() * 2.4 - 1.2).toFixed(2)}deg`);
			Element.style.setProperty(
				"--grunge-inset",
				`-${(4 + Math.random() * 4).toFixed(1)}% -${(5 + Math.random() * 5).toFixed(1)}% -${(4 + Math.random() * 4).toFixed(1)}% -${(5 + Math.random() * 4).toFixed(1)}%`,
			);
			Element.dataset.grungePainted = "1";
		} catch (Error) {
			// A decoration must never take the page down with it.
			console.warn("[grunge] skipped one element", Error);
		}
	}
};
