// Versions.ts - the build-time version layer: the site's dynamic version
// facts read directly from the monorepo primaries at build time (no runtime
// fetching), following the DeepSeek Site's Live.ts pattern.
//
// Every value the pages render is pulled here from the REAL sources:
//   - BinaryVersion: the `version` field of crates/aphrodite/Cargo.toml;
//   - HermesVersion: the `version` field of crates/aphrodite-hermes/Cargo.toml;
//   - PluginVersion: the `version` key of plugins/aphrodite/plugin.yaml;
//   - BinaryVersionFile: the raw contents of plugins/aphrodite/BINARY_VERSION
//     (the plugin downloader's pinned binary version);
//   - the CHANGELOG head (the repo root's CHANGELOG.md): the latest entry's
//     version, date, title and the version pairing it declares ("Binary
//     `1.6.5 -> 1.6.6`, plugin `2.2.5 -> 2.2.6`") - the Drift-aligned source
//     the versions page's monument and the pairing quotes cite.
//
// BUILD-TIME ONLY: this module reads the filesystem with node:fs and is
// imported by the .astro frontmatter (the server). It must never be imported
// from a browser <script> bundle.
//
// Every reader returns null when its source is missing or unparseable; the
// pages fall back to the documented constants below, so the build never
// fails on a moved or renamed source.

import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { ExternalLinks } from "./Links.ts";

/** The monorepo root marker: the primary binary crate's manifest. */
const Marker = join("crates", "aphrodite", "Cargo.toml");

/**
 * The monorepo root, found by walking up from the candidate directories
 * until one contains the marker. The candidates matter because Vite's SSR
 * bundle rewrites import.meta.url to the bundled chunk's location - the
 * source-relative path is tried first, then the build's working directory
 * (astro runs from Site/, the monorepo root's child) and the cwd itself.
 */
function FindRoot(): string {
	const Candidates = [
		resolve(dirname(fileURLToPath(import.meta.url)), "../../..", ".."),
		resolve(process.cwd(), ".."),
		process.cwd(),
	];
	for (const Candidate of Candidates) {
		if (Candidate && existsSync(join(Candidate, Marker))) return Candidate;
	}
	// No root found: every reader degrades to null (the documented fallbacks).
	return "";
}

const Root = FindRoot();

/** Read a text file, or null when it is missing or unreadable. */
function ReadText(Path: string): string | null {
	try {
		return readFileSync(Path, "utf8");
	} catch {
		return null;
	}
}

/** The `version = "x.y.z"` field of a Cargo.toml, or null. */
function ReadCargoVersion(Crate: string): string | null {
	const Text = ReadText(join(Root, "crates", Crate, "Cargo.toml"));
	return Text?.match(/^version\s*=\s*"([^"]+)"/m)?.[1] ?? null;
}

/** The `version: x.y.z` key of a YAML manifest, or null. */
function ReadYamlVersion(): string | null {
	const Text = ReadText(join(Root, "plugins", "aphrodite", "plugin.yaml"));
	return Text?.match(/^version:\s*([^\s#]+)/m)?.[1] ?? null;
}

/** The pinned binary version file's trimmed contents, or null. */
function ReadBinaryVersionFile(): string | null {
	return ReadText(join(Root, "plugins", "aphrodite", "BINARY_VERSION"))?.trim() || null;
}

/** The CHANGELOG head: the latest entry's version, date, title and pairing. */
function ReadChangelogHead(): {
	Version: string;
	Date: string;
	Title: string;
	Pairing: string;
} | null {
	const Text = ReadText(join(Root, "CHANGELOG.md"));
	if (!Text) return null;
	const Head = Text.match(/^##\s+v([^\s-]+)(?:\s+-\s+([^\n(]*))?\s*(?:\(([^)]*)\))?/m);
	if (!Head) return null;
	const Pairing = Text.match(/Binary\s+`([^`]+)`,\s*plugin\s+`([^`]+)`/);
	return {
		Version: Head[1] ?? "",
		Date: Head[3]?.trim() ?? "",
		Title: Head[2]?.trim() ?? "",
		Pairing: Pairing ? `Binary \`${Pairing[1]}\`, plugin \`${Pairing[2]}\`` : "",
	};
}

const ChangelogHead = ReadChangelogHead();

/** The release-note URL for a version tag ("1.6.6" -> the Aphrodite/v1.6.6 tag). */
export function ReleaseNote(Version: string): string {
	return `${ExternalLinks.Releases}/tag/Aphrodite%2Fv${Version}`;
}

/** The documented fallbacks: the previously verified pairing, kept in the same shapes the Drift checks extract. */
const Fallback = {
	Binary: "1.6.6",
	Hermes: "1.6.6",
	Plugin: "2.2.6",
	BinaryVersionFile: "1.6.4",
	Changelog: {
		Version: "1.6.6",
		Date: "2026-10-07",
		Title: "Catalog review: prefetch path guard, setup hardening, opt-in context engine",
		Pairing: "Binary `1.6.5 → 1.6.6`, plugin `2.2.5 → 2.2.6`",
	},
};

/** The build-time snapshot of the monorepo's real versions (fallback when a primary is missing). */
export const Versions = {
	/** The binary crate's version (crates/aphrodite/Cargo.toml). */
	Binary: ReadCargoVersion("aphrodite") ?? Fallback.Binary,
	/** The Hermes integration crate's version (crates/aphrodite-hermes/Cargo.toml). */
	Hermes: ReadCargoVersion("aphrodite-hermes") ?? Fallback.Hermes,
	/** The Hermes plugin spec version (plugins/aphrodite/plugin.yaml). */
	Plugin: ReadYamlVersion() ?? Fallback.Plugin,
	/** The plugin downloader's pinned binary version (plugins/aphrodite/BINARY_VERSION). */
	BinaryVersionFile: ReadBinaryVersionFile() ?? Fallback.BinaryVersionFile,
	/** The CHANGELOG head's entry version (the Drift-aligned current release). */
	ChangelogVersion: ChangelogHead?.Version ?? Fallback.Changelog.Version,
	/** The CHANGELOG head's entry date. */
	ChangelogDate: ChangelogHead?.Date ?? Fallback.Changelog.Date,
	/** The CHANGELOG head's entry title. */
	ChangelogTitle: ChangelogHead?.Title ?? Fallback.Changelog.Title,
	/** The CHANGELOG head's declared pairing ("Binary `1.6.5 → 1.6.6`, plugin `2.2.5 → 2.2.6`"). */
	ChangelogPairing: ChangelogHead?.Pairing || Fallback.Changelog.Pairing,
};

/** The version placements' rendered forms, composed from the snapshot. */
export const Stamps = {
	/** "v1.6.6" - the binary version stamp. */
	Binary: (): string => `v${Versions.Binary}`,
	/** "v2.2.6" - the plugin spec version stamp. */
	Plugin: (): string => `v${Versions.Plugin}`,
	/** "HERMES PLUGIN SPEC v2.2.6" - the plugin spec chip. */
	PluginSpec: (): string => `HERMES PLUGIN SPEC v${Versions.Plugin}`,
	/** "v1.6.6 BINARY" - the footer's binary stamp. */
	BinarySuffix: (): string => `v${Versions.Binary} BINARY`,
	/** "1.6.6 ↔ 2.2.6" - the current pairing display. */
	Pairing: (): string => `${Versions.Binary} ↔ ${Versions.Plugin}`,
	/** The current release's note URL. */
	Release: ReleaseNote(Versions.Binary),
};
