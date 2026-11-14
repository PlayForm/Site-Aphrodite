// Docs/Generate.ts - the docs half of the extraction, as a row-driven writer.
//
// `Scripts/Prepare/Docs.ts` names one row per page: the module file a page IS,
// and the site file it lands in. This module writes those rows and nothing
// else. Three laws, the same three `Prepare/Emit.ts` enforces:
//
// 1. NOTHING IS DELETED. The old version of this file cleared
//    `Source/Content/Docs/` before writing, which meant a page with no module
//    counterpart vanished on the next build. A destination this run did not
//    write is REPORTED as an orphan instead, and a human resolves it: push the
//    page up into `PlayForm/Aphrodite` so it gains a source, or declare it
//    site-only in `Scripts/Prepare/Docs.ts` with the reason it exists.
// 2. EVERY FILE NAMES ITS SOURCE. Each page's frontmatter carries the module
//    path it was generated from, and the page renders it.
// 3. A GAP IS NOT AN OMISSION. A markdown file in the module's docs tree with
//    no row is a broken build, because a doc nobody can reach is a page the
//    site silently lost.
//
// The transform a page gets is the one it always got: the H1 becomes the title,
// the first path segment becomes the section, relative links between docs files
// become site routes, and a repository deep-link is recomposed through the link
// registry so the branch pin lives in one place.

import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";

import { Docs, Internal, SiteOnly } from "../Prepare/Docs.ts";
import Links from "./Links.ts";
import Meta from "./Meta.ts";

/** What one run produced, for the summary line. */
export interface Result {
	/** The destinations written, relative to the Site root. */
	Written: string[];

	/** The module files that no row reaches. A gap fails the run. */
	Gaps: string[];

	/** The site pages no row writes and no `SiteOnly` row declares. */
	Orphans: string[];

	/** Relative links that resolve to no docs page, left as the source wrote them. */
	Stale: string[];

	/** True when the module docs tree was absent and the committed pages were kept. */
	Hermetic: boolean;
}

/** Every markdown file under a directory. */
function Walk(Directory: string): string[] {
	const Files: string[] = [];

	const Visit = (Folder: string): void => {
		for (const Entry of readdirSync(Folder)) {
			const Path = join(Folder, Entry);

			switch (true) {
				case statSync(Path).isDirectory():
					Visit(Path);

					break;
				case Entry.endsWith(".md"):
					Files.push(Path);

					break;
			}
		}
	};

	Visit(Directory);

	return Files.sort();
}

/** The collection id a destination becomes: `.../index.md` is its folder's id. */
function Route(Destination: string): string {
	const Segments = Destination.replace(/^Source\/Content\/Docs\//, "")
		.replace(/\.md$/, "")
		.split("/");

	if (Segments[Segments.length - 1] === "index") {
		Segments.pop();
	}

	return Segments.join("/");
}

/** The module path a row reads, relative to the docs root and without extension. */
function KeyOf(Source: string): string {
	return Source.replace(/^docs\//, "").replace(/\.md$/, "");
}

/**
 * Writes every docs row. `Module` is the Aphrodite checkout (the submodule, or
 * `APHRODITE_SOURCE_ROOT`), `Site` the Site root.
 */
export default (Module: string, Site: string): Result => {
	const Root = join(Module, "docs");
	const Target = resolve(Site, "Source", "Content", "Docs");

	// Hermetic fallback: a checkout of the Site without the module keeps the
	// committed pages. That is a deployment, not a generation.
	if (!existsSync(Root)) {
		return { Written: [], Gaps: [], Orphans: [], Stale: [], Hermetic: true };
	}

	// The route map every relative link resolves against, keyed by module path.
	const Routes = new Map<string, string>();

	for (const Row of Docs) {
		const Key = KeyOf(Row.Source);
		const Path = Route(Row.Destination);

		Routes.set(Key, Path);

		if (Key === "README" || Key.endsWith("/README")) {
			Routes.set(Key.replace(/\/README$/, ""), Path);
		}
	}

	// A module doc no row reaches is a page the site does not have, so the table
	// is checked BEFORE anything is written: a partial write from an incomplete
	// table is worse than no write at all.
	const Reached = new Set(Docs.map((Row) => Row.Source));

	const Gaps = Walk(Root)
		.map((Path) => `docs/${relative(Root, Path).replaceAll("\\", "/")}`)
		.filter((Path) => !Reached.has(Path))
		.filter((Path) => !Internal.some(({ Source: Prefix }) => Path.startsWith(Prefix)));

	if (Gaps.length > 0) {
		return { Written: [], Gaps, Orphans: [], Stale: [], Hermetic: false };
	}

	const Written: string[] = [];
	const Stale: string[] = [];

	for (const Row of Docs) {
		const Path = join(Module, Row.Source);

		if (!existsSync(Path)) {
			throw new Error(
				`[Docs] ${Row.Source} is missing from ${Module}, so ${Row.Destination} cannot be generated. Advance the manifest row or the module pin.`,
			);
		}

		const Content = readFileSync(Path, "utf8").replace(/\r\n/g, "\n");
		const Key = KeyOf(Row.Source);

		const { Title, Section } = Meta(Content, Key);

		const Linked = Links(Content, dirname(Key), Routes, (Link) => Stale.push(`${Key}: ${Link}`));

		const Destination = resolve(Site, Row.Destination);

		mkdirSync(dirname(Destination), { recursive: true });
		writeFileSync(
			Destination,
			[
				"---",
				`title: ${JSON.stringify(Title)}`,
				`section: ${JSON.stringify(Section)}`,
				`source: ${JSON.stringify(Row.Source)}`,
				"---",
				"",
				Linked.trimEnd(),
				"",
			].join("\n"),
			"utf8",
		);

		Written.push(Row.Destination);
	}

	// A site page no row writes and no `SiteOnly` row declares survives, and is
	// reported: deleting it would be the one way this generator could reduce the
	// site.
	const Known = new Set([
		...Docs.map((Row) => Row.Destination),
		...SiteOnly.map((Row) => Row.Destination),
	]);

	const Orphans = existsSync(Target)
		? Walk(Target)
				.map((Path) => relative(Site, Path).replaceAll("\\", "/"))
				.filter((Path) => !Known.has(Path))
		: [];

	return { Written, Gaps, Orphans, Stale, Hermetic: false };
};
