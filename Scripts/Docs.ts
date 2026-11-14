// Docs.ts - the docs half of the generator, runnable on its own.
//
// `pnpm run Prepare` writes the docs as part of the whole extraction; this entry
// exists for the case where a reader is only editing prose and does not want the
// facts pass. It resolves the same source tree Prepare does and writes the same
// rows, so the two can never disagree.
//
// The source: `APHRODITE_SOURCE_ROOT` for a deliberate build against another
// checkout, otherwise `Module/Aphrodite`. A Site checkout with no module keeps
// its committed pages and says so.

import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import Generate from "./Docs/Generate.ts";

const Site = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const Root = resolve(process.env["APHRODITE_SOURCE_ROOT"] ?? join(Site, "Module", "Aphrodite"));

if (!existsSync(join(Root, "docs"))) {
	console.warn(
		`[Docs] ${join(Root, "docs")} is absent, so the committed Source/Content/Docs pages were kept. Run \`git submodule update --init --recursive Module/Aphrodite\`, or set APHRODITE_SOURCE_ROOT to a full Aphrodite checkout.`,
	);

	process.exit(0);
}

const { Written, Gaps, Orphans, Stale } = Generate(Root, Site);

console.log(`[Docs] ${Written.length} page(s) generated from ${join(Root, "docs")}.`);

if (Gaps.length > 0) {
	console.error(
		`[Docs] ${Gaps.length} module doc(s) have no row in Scripts/Prepare/Docs.ts: ${Gaps.join(", ")}. Add the row, or declare the file under Internal with a reason.`,
	);

	process.exit(1);
}

for (const Entry of Orphans) {
	console.warn(`[Docs] orphan ${Entry} - no row writes it; left in place.`);
}

for (const Entry of Stale) {
	console.warn(`[Docs] link ${Entry} - resolves to no docs page; left as the source wrote it.`);
}
