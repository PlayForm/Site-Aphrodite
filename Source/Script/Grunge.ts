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
 *   card -> group of 5 splats -> each splat = body + lobes + droplets
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
 * The family is held together by four constraints, and they are the point:
 *
 *   1. ONE noise field per page. Every splat samples the same 2D field, so the
 *      lobes fall in the same places and the arms lean the same way - a group
 *      reads as one brush, not four unrelated blots.
 *   2. SMALL variation only: radius inside a narrow band, 7-9 spikes, rotation
 *      within +/-22 degrees, centre inside the middle half.
 *   3. ONE grey ink, weighted per layer by fill-opacity (0.9 / 0.75 / 0.55 /
 *      0.35). Layered opacity over one grey gives the depth - a dense core where
 *      the layers agree, a soft edge where they do not - without a second colour.
 *   4. HOW MUCH ink a surface gets is a SCORE from that same field, biased by
 *      the surface behind the plate - not a boolean per call site. A transparent
 *      plate is the one that needs the ink (it has no other edge) and gets 6-8
 *      groups; a filled plate already separates from the page and gets 0-2,
 *      faint. See `Density` below, which is the whole tuning surface.
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
/** Padding around the drawing. Arms and droplets are thrown past the plate edge;
 *  a viewBox of exactly 0..Size clipped them off. */
const Pad = 320;

/**
 * The shared field. Seeded once per page load: every splat on the page reads
 * the same noise, which is where the family resemblance comes from. A splat's
 * own seed only shifts it to a different passage of that one field.
 */
const Field = createNoise2D(Random((Math.random() * 0x7fffffff) | 0));

/** Per-layer weights. One ink, four weights: the faintest layer still has to
 * read as deposit, not as glow, so it is 0.42 rather than 0.35. */
const LayerOpacity = [0.9, 0.72, 0.55, 0.42];

/**
 * One splat: a noise-modulated body, tapered spikes thrown outward, and
 * satellites sized by a power curve so most are specks and a few are fat.
 * A uniform size distribution reads as confetti, not as spatter.
 */
const Splat = (Seed: number, Cx: number, Cy: number, Radius: number, Opacity: number): string => {
	const Next = Random(Seed);
	const Parts: string[] = [];

	const Steps = 72;
	const Points: string[] = [];
	for (let Index = 0; Index < Steps; Index += 1) {
		const Angle = (Index / Steps) * Math.PI * 2;
		const Low = Field(Math.cos(Angle) * 1.1 + Seed * 0.004, Math.sin(Angle) * 1.1);
		const High = Field(Math.cos(Angle) * 3.4 + 11, Math.sin(Angle) * 3.4 + 7) * 0.28;
		const Ride = Math.max(0.42, 1 + Low * 0.34 + High);
		const Reach = Radius * Ride;
		Points.push(
			`${(Cx + Math.cos(Angle) * Reach).toFixed(1)},${(Cy + Math.sin(Angle) * Reach).toFixed(1)}`,
		);
	}
	Parts.push(`<polygon points="${Points.join(" ")}"/>`);

	// GRAIN. A solid body with a soft edge reads as an airbrushed bloom; toner is
	// granular right up to its boundary. Speckles are scattered inside the body
	// radius at power-curve sizes, so the interior breaks up while the silhouette
	// stays hard.
	const Grains = 26 + Math.floor(Next() * 20);
	for (let Index = 0; Index < Grains; Index += 1) {
		const Angle = Next() * Math.PI * 2;
		const Spread = Math.sqrt(Next()) * Radius * 0.92;
		const Gx = Cx + Math.cos(Angle) * Spread;
		const Gy = Cy + Math.sin(Angle) * Spread;
		const Gr = 0.9 + Math.pow(Next(), 2) * Radius * 0.045;
		Parts.push(
			`<ellipse cx="${Gx.toFixed(1)}" cy="${Gy.toFixed(1)}" rx="${Gr.toFixed(1)}" ry="${(Gr * (0.6 + Next() * 0.7)).toFixed(1)}"/>`,
		);
	}

	// LOBES, not spikes: long tapered arms give a starburst/gear silhouette, which
	// is a shape ink never makes. Short rounded ellipses overlapping the body read
	// as liquid spread - the mass bulges, it does not radiate.
	const Lobes = 5 + Math.floor(Next() * 3);
	for (let Index = 0; Index < Lobes; Index += 1) {
		const Angle = (Index / Lobes) * Math.PI * 2 + Next() * 0.45;
		const Reach = Radius * (0.5 + Field(Angle * 2, Seed * 0.01) * 0.3 + Next() * 0.2);
		const Width = Radius * (0.2 + Next() * 0.18);
		const LobeX = Cx + Math.cos(Angle) * Reach * 0.55;
		const LobeY = Cy + Math.sin(Angle) * Reach * 0.55;
		const Tilt = ((Angle * 180) / Math.PI).toFixed(1);
		Parts.push(
			`<ellipse cx="${LobeX.toFixed(1)}" cy="${LobeY.toFixed(1)}" rx="${(Reach * 0.62).toFixed(1)}" ry="${Width.toFixed(1)}" transform="rotate(${Tilt} ${LobeX.toFixed(1)} ${LobeY.toFixed(1)})"/>`,
		);
	}

	const Drops = 7 + Math.floor(Next() * 6);
	for (let Index = 0; Index < Drops; Index += 1) {
		const Angle = Next() * Math.PI * 2;
		const Distance = Radius * (0.85 + Next() * 2.0);
		const R = Radius * Math.pow(Next(), 3) * 0.12 + 1.1;
		// ELLIPSES, not discs: a field of perfect circles reads as bokeh or dust,
		// which is the one thing ink never looks like. Each droplet is squashed
		// along a noise-chosen axis, so it reads as a directional flick.
		const Squash = 0.35 + Ride(Index * 0.37, Seed * 0.01) * 1.3;
		const Tilt = ((Ride(Seed * 0.02, Index * 0.29) - 0.5) * 180).toFixed(1);
		const DropX = Cx + Math.cos(Angle) * Distance;
		const DropY = Cy + Math.sin(Angle) * Distance;
		Parts.push(
			`<ellipse cx="${DropX.toFixed(1)}" cy="${DropY.toFixed(1)}" rx="${(R * Squash).toFixed(1)}" ry="${(R / Squash).toFixed(1)}" transform="rotate(${Tilt} ${DropX.toFixed(1)} ${DropY.toFixed(1)})"/>`,
		);
	}

	return `<g fill-opacity="${Opacity.toFixed(2)}">${Parts.join("")}</g>`;
};

/**
 * Layers inside one group: five weights of ONE family, so a group reads as a
 * single brush with a dense core and a soft edge. How many groups a surface
 * takes is `Density` below.
 */
const LayersPerGroup = 5;

/** Noise sample mapped to 0..1. */
const Ride = (X: number, Y: number): number => (Field(X, Y) + 1) / 2;

/** Clamp a box fraction to 0..1: a group pushed past the edge stays on it. */
const Clamp = (Value: number): number => Math.min(1, Math.max(0, Value));

/**
 * DENSITY - how much ink a surface gets, and the WHOLE tuning surface in one
 * place. Change a number here and nothing else.
 *
 * Ink used to be all-or-nothing: every plate carrying a `[data-grunge]` element
 * got the same five groups, so the texture read as wallpaper instead of as an
 * occasional stain, and it sat on filled plates where it is barely visible.
 * Density is now a SCORE drawn from the shared field and biased by the surface:
 *
 *   Score  = Ride(Seed * 0.0003, 0.41) + Bias
 *   Groups = Score < Clean ? none : Score < Light ? some : full
 *
 *   transparent  6-8 groups, LARGER and pushed OUT to the edges - with nothing
 *                painted behind it, the ink is the only thing marking its edge.
 *   filled       0-2 groups, smaller and fainter - the fill already separates
 *                the plate from the page, so a stain on it is only noise.
 *
 * The SIGN of the bias is the design, and it is the one thing to keep: a
 * transparent surface is biased UP because it needs the ink, a filled one DOWN
 * because it does not. Two transparent plates side by side therefore still
 * differ - one can come out clean, the next heavily inked - which a boolean
 * (`Grunge` on/off) could never do.
 */
type Surface = "transparent" | "filled";

interface Density {
	/** Score bias per surface - up for transparent, down for filled. */
	Bias: number;
	/** A score under `Clean` takes no ink at all. */
	Clean: number;
	/** A score under `Light` takes `Groups[1]`; at or above, `Groups[2]`. */
	Light: number;
	/** Group counts per tier: [clean, light, full]. */
	Groups: readonly [number, number, number];
	/** Box size multiplier per group. */
	Scale: number;
	/** How far a group may sit from the centre: above 1 pushes it to the edge. */
	Reach: number;
	/** Ink weight multiplier. */
	Weight: number;
}

const Density: Record<Surface, Density> = {
	transparent: {
		Bias: 0.18,
		Clean: 0.34,
		Light: 0.62,
		Groups: [0, 6, 8],
		Scale: 1.18,
		Reach: 1.35,
		Weight: 1,
	},
	filled: {
		Bias: -0.18,
		Clean: 0.34,
		Light: 0.62,
		Groups: [0, 1, 2],
		Scale: 0.82,
		Reach: 0.82,
		Weight: 0.62,
	},
};

/** The alpha of a computed `background-color`, 0..1. */
const Alpha = (Colour: string): number => {
	if (Colour === "" || Colour === "transparent") return 0;
	const Match = Colour.match(/rgba?\(([^)]+)\)/);
	if (Match === null) return 1;
	const Parts = Match[1].split(/[\s,/]+/).filter(Boolean);
	return Parts.length >= 4 ? Number(Parts[3]) || 0 : 1;
};

/**
 * The surface behind an element, MEASURED where possible.
 *
 * The computed `background-color` is the truth: a plate that paints a fill has
 * one, and a plate that lets the page ground through does not - including a
 * plate a page has made transparent with `bg-transparent`. `data-grunge-surface`
 * is the FALLBACK for the one case measurement cannot see (a fill painted by a
 * pseudo-element), and it never overrules a measured fill: a fill is not a
 * matter of opinion.
 */
const SurfaceOf = (Element: HTMLElement): Surface => {
	let Painted = "transparent";
	try {
		Painted = getComputedStyle(Element).backgroundColor;
	} catch {
		// A detached element has no computed style; the declaration decides.
	}
	if (Alpha(Painted) > 0.02) return "filled";
	const Declared = Element.dataset.grungeSurface;
	return Declared === "filled" || Declared === "transparent" ? Declared : "transparent";
};

/**
 * `[data-grunge]` works on ANY element, not only on one that already carries the
 * `.grunge` class - a `.band`, a split column or a pods panel is a surface too.
 * The class is deliberately NOT added: it also matches `.band--split > .grunge`,
 * a grid placement, so classing a column would move it out of its column. The
 * two inline properties are all the ink needs.
 */
const Prepare = (Element: HTMLElement): void => {
	const Style = getComputedStyle(Element);
	if (Style.position === "static") Element.style.position = "relative";
	if (Style.isolation === "auto") Element.style.isolation = "isolate";
};

/** One group: five layers of one family, anchored in a noise-chosen corner. */
const Group = (Seed: number, GroupIndex: number): string => {
	const Parts: string[] = [];
	const Phase = Seed * 0.001 + GroupIndex * 0.61;
	// The corner is chosen by noise, so the five groups on one plate land in
	// different places instead of stacking into a single blob.
	const Corner = Math.floor(Ride(Phase, 0.5) * 4);
	const AnchorX = (Corner === 1 || Corner === 2 ? 0.86 : 0.14) + (Ride(Phase, 0.25) - 0.5) * 0.14;
	const AnchorY = (Corner >= 2 ? 0.86 : 0.14) + (Ride(Phase, 0.75) - 0.5) * 0.14;

	for (let Layer = 0; Layer < LayersPerGroup; Layer += 1) {
		const DriftX = (Ride(Layer * 0.43, GroupIndex * 0.19) - 0.5) * 0.1;
		const DriftY = (Ride(GroupIndex * 0.23, Layer * 0.43) - 0.5) * 0.1;
		const Cx = Size * (0.02 + AnchorX * 0.96 + DriftX);
		const Cy = Size * (0.02 + AnchorY * 0.96 + DriftY);
		const Radius = Size * (0.045 + Ride(Layer * 0.71, GroupIndex * 0.37) * 0.115);
		const Turn = ((Ride(Layer * 0.29, GroupIndex * 0.83) - 0.5) * 44).toFixed(1);
		Parts.push(
			`<g transform="rotate(${Turn} ${Cx.toFixed(1)} ${Cy.toFixed(1)})">${Splat(
				(Seed + GroupIndex * 7919 + Layer * 104729) | 0,
				Cx,
				Cy,
				Radius,
				LayerOpacity[Layer % LayerOpacity.length],
			)}</g>`,
		);
	}
	return Parts.join("");
};

/**
 * Which density bucket a score lands in: 0 clean, 1 light, 2 full. Counted, not
 * branched - the two thresholds are the whole decision, so the tier IS the
 * number of them the score cleared.
 */
const Tier = (Score: number, Table: Density): number =>
	Number(Score >= Table.Clean) + Number(Score >= Table.Light);

/**
 * Paint every `[data-grunge]` element on the current document.
 *
 * HOW MUCH is decided per element by `Density` above, from one noise sample
 * biased by the surface; WHETHER at all is part of the same score, so a page of
 * plates is mostly clean and a few carry a stain. Nothing here is listed per
 * page.
 *
 * ONE SVG PER GROUP. Stacking every group inside a single drawing tied them to
 * one registration - one corner, one scale - which is not what a splatter does.
 * Each group is now its own element with its own position, size, rotation and
 * ink weight, placed by noise across the whole box, so a plate can carry a
 * cluster at one corner, a second low right, a third bleeding off the top, and
 * so on. Permutations are the point; separation is the rule.
 *
 * Idempotent per element per mount, and re-seeded per page load, so a revisit is
 * a different arrangement from the same family.
 */
export const PaintGrunge = (): void => {
	for (const Element of document.querySelectorAll<HTMLElement>("[data-grunge]")) {
		if (Element.dataset.grungePainted === "1") continue;
		try {
			const Kind = SurfaceOf(Element);
			const Table = Density[Kind];

			// A plate carrying a code fence keeps the ink, but faint and strictly
			// behind: a command block must read sharp, and the texture is there to
			// edge the sheet, not to sit under the type at full weight.
			if (Element.querySelector("pre, figure.zine-plate, .zine-plate"))
				Element.classList.add("grunge--faint");
			const Faint = Element.classList.contains("grunge--faint") ? 0.5 : 1;
			const Seed = (Math.random() * 0x7fffffff) | 0;

			// THE DECISION. One sample of the shared field, biased by the surface,
			// then bucketed. A boolean could not make two transparent plates differ;
			// a score does, on every load, which is the whole point of drawing it
			// from noise instead of from the call site.
			const Score = Ride(Seed * 0.0003, 0.41) + Table.Bias;
			const Count = Table.Groups[Tier(Score, Table)];
			// The count is left on the element so the density can be inspected in
			// devtools - the owner tunes `Density`, never this loop.
			Element.dataset.grungeCount = String(Count);
			Element.dataset.grungeSurface = Kind;

			if (Count === 0) {
				Element.dataset.grungePainted = "1";
				continue;
			}

			Prepare(Element);

			const Mode = Element.dataset.grungeMode ?? "scatter";

			for (let GroupIndex = 0; GroupIndex < Count; GroupIndex += 1) {
				// Noise, not a counter: each group reads a different passage of the
				// shared field, so its placement and size are its own.
				const Phase = Seed * 0.0001 + GroupIndex * 0.37;
				// `edge` rings the plate - used where the ink IS the border of an
				// unbordered box. `scatter` puts groups anywhere in the box, which is
				// what a thrown splatter does. `Reach` is what throws a transparent
				// plate's groups out to its edge and keeps a filled plate's in.
				const Angle = Ride(Phase, 0.31) * Math.PI * 2;
				const Ring = (0.34 + Ride(Phase, 0.71) * 0.18) * Table.Reach;
				const CentreX =
					Mode === "edge"
						? Clamp(0.5 + Math.cos(Angle) * Ring)
						: Clamp(0.5 + (Ride(Phase, 0.11) - 0.5) * Table.Reach);
				const CentreY =
					Mode === "edge"
						? Clamp(0.5 + Math.sin(Angle) * Ring)
						: Clamp(0.5 + (Ride(Phase, 0.57) - 0.5) * Table.Reach);
				const Width = (0.3 + Ride(GroupIndex * 0.53, Phase) * 0.5) * Table.Scale;
				const Height = Width * (0.75 + Ride(Phase, 0.83) * 0.55);
				const Turn = (Ride(GroupIndex * 0.21, 0.33) - 0.5) * 16;

				const Svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
				Svg.setAttribute("viewBox", `${-Pad} ${-Pad} ${Size + Pad * 2} ${Size + Pad * 2}`);
				Svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
				Svg.setAttribute("aria-hidden", "true");
				Svg.setAttribute("class", "grunge__ink");
				Svg.innerHTML = Group(Seed, GroupIndex);
				Svg.style.setProperty("--grunge-x", `${(CentreX * 100 - Width * 50).toFixed(1)}%`);
				Svg.style.setProperty("--grunge-y", `${(CentreY * 100 - Height * 50).toFixed(1)}%`);
				Svg.style.setProperty("--grunge-w", `${(Width * 100).toFixed(1)}%`);
				Svg.style.setProperty("--grunge-h", `${(Height * 100).toFixed(1)}%`);
				Svg.style.setProperty("--grunge-rot", `${Turn.toFixed(1)}deg`);
				// Always BEHIND the plate. A group sitting inside the box put ink over
				// code fences and body text, which blurred them - ink belongs under the
				// sheet, never on top of what is printed on it.
				Svg.style.setProperty("--grunge-z", "-1");
				// Per-group weight, dimmed by the FAINTEST of the two reasons: the
				// surface (a filled plate's stain is a suggestion, a transparent
				// plate's is its edge) and a code fence under the ink. They do not
				// multiply - 0.5 x 0.62 would put a filled code plate at 0.05, which
				// is invisible rather than faint. The floor before dimming is 0.16,
				// not 0.10: on a near-black page a 0.10 deposit reads as haze.
				const Weight = Math.min(Faint, Table.Weight);
				Svg.style.setProperty(
					"--grunge-opacity",
					((0.16 + Ride(GroupIndex * 0.91, Phase) * 0.14) * Weight).toFixed(3),
				);
				Element.prepend(Svg);
			}

			Element.dataset.grungePainted = "1";
		} catch (Error) {
			// A decoration must never take the page down with it.
			console.warn("[grunge] skipped one element", Error);
		}
	}
};
