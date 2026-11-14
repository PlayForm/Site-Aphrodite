import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// The generated docs content (Scripts/Docs.ts output) - one page per markdown
// file in the Aphrodite repository's docs/ tree. The id is the route below
// /docs/: "index" becomes the collection root, section READMEs become their
// folder's index.
const Docs = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: new URL("./Content/Docs", import.meta.url),
		generateId: ({ entry }) =>
			entry.replace(/\.md$/, "").replace(/\/index$/, ""),
	}),
	schema: z.object({
		section: z.string(),
		title: z.string(),
		// The module file this page was generated from (Scripts/Prepare/Docs.ts).
		// It is rendered as the page's provenance line, so a reader can always
		// name the source of a claim and the next editor knows where to fix it.
		source: z.string().optional(),
	}),
});

export const collections = { Docs };
