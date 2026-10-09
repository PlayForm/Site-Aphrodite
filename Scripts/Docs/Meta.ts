// Extracts the page title (from the first H1, links stripped) and the section
// name (from the first path segment) for a docs page.
export default (Content: string, Path: string): { Title: string; Section: string } => {
	const Line = Content.split("\n").find((Candidate) =>
		Candidate.startsWith("# "),
	);

	const Title = (
		Line ? Line.slice(2) : Path
	).replaceAll(/\[([^\]]*)\]\([^)]*\)/g, "$1").trim();

	const Names: Record<string, string> = { api: "API", ccr: "CCR" };

	const First = Path.includes("/") ? (Path.split("/")[0] ?? "") : "";

	const Section =
		Names[First] ??
		(First === "" ? "Overview" : First.charAt(0).toUpperCase() + First.slice(1));

	return { Section, Title };
};
