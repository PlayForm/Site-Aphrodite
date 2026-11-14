// node_modules/@astrojs/internal-helpers/dist/path.js
function appendForwardSlash(path) {
	return path.endsWith("/") ? path : path + "/";
}
function prependForwardSlash(path) {
	return path[0] === "/" ? path : "/" + path;
}
var MANY_LEADING_SLASHES = /^\/{2,}/;
function collapseDuplicateLeadingSlashes(path) {
	if (!path) return path;
	return path.replace(MANY_LEADING_SLASHES, "/");
}
var MANY_SLASHES = /\/{2,}/g;
function collapseDuplicateSlashes(path) {
	if (!path) return path;
	return path.replace(MANY_SLASHES, "/");
}
var MANY_TRAILING_SLASHES = /\/{2,}$/g;
function collapseDuplicateTrailingSlashes(path, trailingSlash) {
	if (!path) return path;
	return path.replace(MANY_TRAILING_SLASHES, trailingSlash ? "/" : "") || "/";
}
function removeTrailingForwardSlash(path) {
	return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
	return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
	return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
	return typeof path === "string" || path instanceof String;
}
var INTERNAL_PREFIXES = /* @__PURE__ */ new Set([
	"/_",
	"/@",
	"/.",
	"//"
]);
var JUST_SLASHES = /^\/{2,}$/;
function isInternalPath(path) {
	const prefix = path.slice(0, 2).replace(/\\/g, "/");
	return INTERNAL_PREFIXES.has(prefix) && !JUST_SLASHES.test(path);
}
function joinPaths(...paths) {
	return paths.filter(isString).map((path, i) => {
		if (i === 0) return removeTrailingForwardSlash(path);
		else if (i === paths.length - 1) return removeLeadingForwardSlash(path);
		else return trimSlashes(path);
	}).join("/");
}
function removeQueryString(path) {
	const index = path.lastIndexOf("?");
	return index > 0 ? path.substring(0, index) : path;
}
/**
* Checks whether the path is considered a remote path.
* Remote means untrusted in this context, so anything that isn't a straightforward
* local path is considered remote.
*
* @param src
*/
function isRemotePath(src) {
	if (!src) return false;
	const trimmed = src.trim();
	if (!trimmed) return false;
	let decoded = trimmed;
	let previousDecoded = "";
	let maxIterations = 10;
	while (decoded !== previousDecoded && maxIterations > 0) {
		previousDecoded = decoded;
		try {
			decoded = decodeURIComponent(decoded);
		} catch {
			break;
		}
		maxIterations--;
	}
	if (/^[a-zA-Z]:/.test(decoded)) return false;
	if (decoded[0] === "/" && /^\/[\w.@-]/.test(decoded)) return false;
	if (decoded[0] === "\\") return true;
	if (decoded.startsWith("//")) return true;
	try {
		const url = new URL(decoded, "http://n");
		if (url.username || url.password) return true;
		if (decoded.includes("@") && !url.pathname.includes("@") && !url.search.includes("@")) return true;
		if (url.origin !== "http://n") {
			if (url.protocol.toLowerCase() === "file:") return false;
			return true;
		}
		if (URL.canParse(decoded)) return true;
		return false;
	} catch {
		return true;
	}
}
function slash(path) {
	return path.replace(/\\/g, "/");
}
function fileExtension(path) {
	const ext = path.split(".").pop();
	return ext !== path ? `.${ext}` : "";
}
function removeBase(path, base) {
	if (path.startsWith(base)) return path.slice(removeTrailingForwardSlash(base).length);
	return path;
}
/**
* Strips a configured request `base` from a pathname, only when the pathname is
* the base itself or lies under it at a path-segment boundary. `stripRequestBase('/appX/admin', '/app')`
* leaves the pathname untouched, whereas `stripRequestBase('/app/admin', '/app')` returns `/admin`.
*
* Leading slashes are collapsed first so `//admin` cannot pose as being under a
* `/` base. Route matching and `context.url.pathname` derive from separate
* copies of the request path, so a mismatch here lets a request reach a route
* whose base-prefixed pathname middleware never observes.
*/
function stripRequestBase(pathname, base) {
	pathname = collapseDuplicateLeadingSlashes(pathname);
	const baseWithoutTrailingSlash = removeTrailingForwardSlash(base);
	if (pathname === baseWithoutTrailingSlash) return "/";
	if (pathname.startsWith(baseWithoutTrailingSlash + "/")) return pathname.slice(baseWithoutTrailingSlash.length);
	return pathname;
}
var WITH_FILE_EXT = /\/[^/]+\.\w+$/;
function hasFileExtension(path) {
	return WITH_FILE_EXT.test(path);
}
export { trimSlashes as _, fileExtension as a, isRemotePath as c, removeBase as d, removeLeadingForwardSlash as f, stripRequestBase as g, slash as h, collapseDuplicateTrailingSlashes as i, joinPaths as l, removeTrailingForwardSlash as m, collapseDuplicateLeadingSlashes as n, hasFileExtension as o, removeQueryString as p, collapseDuplicateSlashes as r, isInternalPath as s, appendForwardSlash as t, prependForwardSlash as u };
