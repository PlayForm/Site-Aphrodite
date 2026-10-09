import { join } from "node:path";
import { normalize } from "node:path/posix";

// Rewrites relative markdown links between docs files into site routes.
// Absolute, protocol, and pure-anchor links pass through. Every relative link
// that does not resolve to a docs file is reported and left as-is.
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
				case /^(https?:|mailto:|#|\/)/.test(Target):
					return Link;
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
