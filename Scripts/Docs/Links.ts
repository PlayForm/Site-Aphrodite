import { join } from "node:path";
import { normalize } from "node:path/posix";

import { Link as Compose, OurRepo } from "../../Source/Library/Links.ts";

// Rewrites relative markdown links between docs files into site routes.
// Absolute, protocol, and pure-anchor links pass through. Every relative link
// that does not resolve to a docs file is reported and left as-is.
//
// BRANCH FORM LAW: every repository deep-link (an absolute
// github.com/PlayForm/Aphrodite/tree/<branch>/... URL) is recomposed through
// the registry's Link() at the canonical Current branch, so the branch pin
// lives in Source/Library/Links.ts alone - never in the docs markdown.
export default (
	Content: string,
	Folder: string,
	Routes: Map<string, string>,
	Stale: (Link: string) => void,
): string =>
	Content.replaceAll(
		/\]\(([^()\s]+)\)/g,
		(Link: string, Target: string): string => {
			switch (true) {
				case /^(https?:|mailto:|#|\/)/.test(Target): {
					const Repo = Target.match(
						/^https:\/\/github\.com\/PlayForm\/Aphrodite\/tree\/[^/]+\/(.+)$/,
					);

					switch (Repo !== null) {
						case true:
							return `](${Compose(OurRepo, Repo![1])})`;
						default:
							return Link;
					}
				}
				case /\.md([#)]|$)/.test(Target) || Target.endsWith("/"): {
					const [File, Anchor = ""] = Target.split("#");

					const Key = normalize(join(Folder, File));

					const Route = Routes.get(
						Key.endsWith(".md") ? Key.slice(0, -3) : Key.replace(/\/$/, ""),
					);

					switch (Route !== undefined) {
						case true: {
							const Url = Route === "" ? "/docs/" : `/docs/${Route}/`;

							return `](${Url}${Anchor === "" ? "" : `#${Anchor}`})`;
						}
						default:
							Stale(Target);

							return Link;
					}
				}
				default:
					Stale(Target);

					return Link;
			}
		},
	);
