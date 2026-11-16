#!/usr/bin/env node
/**
 * Splats.mjs - grunge brush geometry, generated from simplex noise.
 *
 * The site's edge language was a square border on every plate. A turbulence
 * displacement filter was tried first and read as a misaligned duplicate: a
 * displaced rectangle is still a rectangle. Ink does not work that way - it
 * leaves a body, throws spikes, and drops satellites - so the shape is drawn
 * from noise instead of displaced from a box.
 *
 * One file is generated per GROUP: five independently seeded splats, layered at
 * different scales and rotations, which is what makes a background read as a
 * cluster of brushes rather than one stamp repeated. Each SVG is black on
 * transparent so it can be used as a CSS mask and painted with any ink token.
 *
 *   node Scripts/Splats.mjs [--groups 6] [--out Public/Brand/Splat]
 *
 * Deterministic: the seeds are fixed, so a rebuild produces byte-identical
 * files and the masks never shift under a reader.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { createNoise2D } from "simplex-noise";
import path from "node:path";

const Argv = process.argv.slice(2);
const Groups = Number(Argv[Argv.indexOf("--groups") + 1]) || 6;
const Out = Argv[Argv.indexOf("--out") + 1] || "Public/Brand/Splat";
const SplatsPerGroup = 5;
const Size = 900;

/** mulberry32 - a small deterministic PRNG, so every run draws the same ink. */
const Random = (Seed) => () => {
	Seed = (Seed + 0x6d2b79f5) | 0;
	let T = Math.imul(Seed ^ (Seed >>> 15), 1 | Seed);
	T = (T + Math.imul(T ^ (T >>> 7), 61 | T)) ^ T;
	return ((T ^ (T >>> 14)) >>> 0) / 4294967296;
};

/**
 * One splat: a noise-modulated body, tapered spikes thrown outward, and
 * satellite droplets. All three come from the same 2D noise field so the body
 * and its spikes agree about where the "energy" is.
 */
const Splat = (Seed, Cx, Cy, Radius) => {
	const Random2 = Random(Seed);
	const Noise = createNoise2D(Random2);
	const Parts = [];

	// BODY - a closed outline whose radius rides the noise field. Two octaves:
	// the low one gives the silhouette its lobes, the high one its grain.
	const Steps = 220;
	const Points = [];
	for (let Index = 0; Index < Steps; Index += 1) {
		const Angle = (Index / Steps) * Math.PI * 2;
		const Low = Noise(Math.cos(Angle) * 1.1 + Seed * 0.01, Math.sin(Angle) * 1.1);
		const High = Noise(Math.cos(Angle) * 3.4 + 11, Math.sin(Angle) * 3.4 + 7) * 0.35;
		const Ride = 1 + Low * 0.42 + High;
		const R = Radius * Math.max(0.35, Ride);
		Points.push(`${(Cx + Math.cos(Angle) * R).toFixed(1)},${(Cy + Math.sin(Angle) * R).toFixed(1)}`);
	}
	Parts.push(`<polygon points="${Points.join(" ")}" />`);

	// SPIKES - tapered quads thrown outward, length and width from the noise so
	// no two arms are alike. This is the part a displaced rectangle can never do.
	const Spikes = 7 + Math.floor(Random2() * 8);
	for (let Index = 0; Index < Spikes; Index += 1) {
		const Angle = Random2() * Math.PI * 2;
		const Reach = Radius * (0.9 + Noise(Angle * 2, Seed * 0.02) * 0.9 + Random2() * 0.8);
		const Width = Radius * (0.05 + Random2() * 0.09);
		const TipX = Cx + Math.cos(Angle) * Reach;
		const TipY = Cy + Math.sin(Angle) * Reach;
		const BaseX = Cx + Math.cos(Angle) * Radius * 0.55;
		const BaseY = Cy + Math.sin(Angle) * Radius * 0.55;
		const Nx = Math.cos(Angle + Math.PI / 2) * Width;
		const Ny = Math.sin(Angle + Math.PI / 2) * Width;
		Parts.push(
			`<polygon points="${(BaseX + Nx).toFixed(1)},${(BaseY + Ny).toFixed(1)} ${TipX.toFixed(1)},${TipY.toFixed(1)} ${(BaseX - Nx).toFixed(1)},${(BaseY - Ny).toFixed(1)}" />`,
		);
	}

	// DROPLETS - satellites, sized by a power curve so most are specks and a few
	// are fat. A uniform distribution reads as confetti, not as spatter.
	const Drops = 14 + Math.floor(Random2() * 22);
	for (let Index = 0; Index < Drops; Index += 1) {
		const Angle = Random2() * Math.PI * 2;
		const Distance = Radius * (0.8 + Random2() * 2.1);
		const R = Radius * Math.pow(Random2(), 3) * 0.16 + 1.2;
		Parts.push(
			`<circle cx="${(Cx + Math.cos(Angle) * Distance).toFixed(1)}" cy="${(Cy + Math.sin(Angle) * Distance).toFixed(1)}" r="${R.toFixed(1)}" />`,
		);
	}

	return Parts.join("");
};

/** A group: five splats, each with its own seed, scale and rotation. */
const Group = (Index) => {
	const Random2 = Random(1000 + Index * 37);
	const Shapes = [];
	for (let SplatIndex = 0; SplatIndex < SplatsPerGroup; SplatIndex += 1) {
		const Seed = 5000 + Index * 211 + SplatIndex * 41;
		const Radius = Size * (0.1 + Random2() * 0.17);
		const Cx = Size * (0.2 + Random2() * 0.6);
		const Cy = Size * (0.2 + Random2() * 0.6);
		const Rotate = (Random2() * 360).toFixed(1);
		Shapes.push(
			`<g transform="rotate(${Rotate} ${Cx.toFixed(1)} ${Cy.toFixed(1)})">${Splat(Seed, Cx, Cy, Radius)}</g>`,
		);
	}
	return [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Size} ${Size}" fill="#000">`,
		Shapes.join(""),
		"</svg>",
	].join("\n");
};

await mkdir(Out, { recursive: true });
for (let Index = 0; Index < Groups; Index += 1) {
	const Name = `group-${String(Index + 1).padStart(2, "0")}.svg`;
	await writeFile(path.join(Out, Name), Group(Index), "utf8");
	console.log(`${path.join(Out, Name)}`);
}
console.log(`groups=${Groups} splatsPerGroup=${SplatsPerGroup} total=${Groups * SplatsPerGroup}`);
