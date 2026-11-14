import "./server_CNuTCIdA.mjs";
import { X as AstroError, o as EndpointDidNotReturnAResponse } from "./errors-data_XstbcoNP.mjs";
import colors from "piccolore";
var ASTRO_GENERATOR = `Astro v7.4.12`;
/**
* Set by internal handlers (e.g. PagesHandler) to signal that a
* response should be replaced with the corresponding error page.
*/
var ASTRO_ERROR_HEADER = "X-Astro-Error";
/**
* The value of the `component` field of the default 404 page, which is used when there is no user-provided 404.astro page.
*/
var DEFAULT_404_COMPONENT = "astro-default-404.astro";
/**
* A response with one of these status codes will create a redirect response.
*/
var REDIRECT_STATUS_CODES = [
	301,
	302,
	303,
	307,
	308,
	300,
	304
];
/**
* A response with one of these status codes will be rewritten
* with the result of rendering the respective error page.
*/
var REROUTABLE_STATUS_CODES = [404, 500];
/**
* Pages Astro serves for an HTTP status rather than for their own URL.
*
* They are always written as `<name>.html`, never as `<name>/index.html`,
* whatever `build.format` says, because a host reaches them by status code and
* needs them at a predictable file path. Being status pages rather than site
* content, they are also skipped by i18n routing.
*/
var STATUS_CODE_PAGES = /* @__PURE__ */ new Set([
	"/404",
	"/500",
	"/3xx"
]);
/**
* The symbol which is used as a field on the request object to store the client address.
* The clientAddress provided by the adapter (or the dev server) is stored on this field.
*/
var clientAddressSymbol = Symbol.for("astro.clientAddress");
/**
* Use this symbol to set and retrieve the original pathname of a request. This is useful when working with redirects and rewrites
*/
var originPathnameSymbol = Symbol.for("astro.originPathname");
/**
* Use this symbol to stash the active `FetchState` on an `APIContext`
* (or `ActionAPIContext`). Consumed by internal shims that need access
* to per-request state without appearing in the public context shape
* — e.g. the manual-strategy i18n middleware wrapper in
* `src/i18n/middleware.ts`.
*/
var fetchStateSymbol = Symbol.for("astro.fetchState");
/**
* The symbol used as a field on the response object to keep track of streaming.
*
* It is set when the `<head>` element has been completely generated, rendered, and the response object has been passed onto the adapter.
*
* Used to provide helpful errors and warnings when headers or cookies are added during streaming, after the response has already been sent.
*/
var responseSentSymbol = Symbol.for("astro.responseSent");
// node_modules/astro/dist/runtime/server/endpoint.js
/** Renders an endpoint request to completion, returning the body. */
async function renderEndpoint(mod, context, isPrerendered, logger, state) {
	const { request, url } = context;
	const method = request.method.toUpperCase();
	let handler = mod[method] ?? mod["ALL"];
	if (!handler && method === "HEAD" && mod["GET"]) handler = mod["GET"];
	if (isPrerendered && !["GET", "HEAD"].includes(method)) logger.warn("router", `${url.pathname} ${colors.bold(method)} requests are not available in static endpoints. Mark this page as server-rendered (\`export const prerender = false;\`) or update your config to \`output: 'server'\` to make all your pages server-rendered by default.`);
	if (handler === void 0) {
		logger.warn("router", `No API Route handler exists for the method "${method}" for the route "${url.pathname}".\nFound handlers: ${Object.keys(mod).map((exp) => JSON.stringify(exp)).join(", ")}\n` + ("all" in mod ? `One of the exported handlers is "all" (lowercase), did you mean to export 'ALL'?\n` : ""));
		return new Response(null, { status: 404 });
	}
	if (typeof handler !== "function") {
		logger.error("router", `The route "${url.pathname}" exports a value for the method "${method}", but it is of the type ${typeof handler} instead of a function.`);
		return new Response(null, { status: 500 });
	}
	let response = await handler.call(mod, context);
	if (!response || response instanceof Response === false) throw new AstroError(EndpointDidNotReturnAResponse);
	if (state && REROUTABLE_STATUS_CODES.includes(response.status)) state.skipErrorReroute = true;
	if (method === "HEAD") return new Response(null, response);
	return response;
}
export { REDIRECT_STATUS_CODES as a, clientAddressSymbol as c, responseSentSymbol as d, DEFAULT_404_COMPONENT as i, fetchStateSymbol as l, ASTRO_ERROR_HEADER as n, REROUTABLE_STATUS_CODES as o, ASTRO_GENERATOR as r, STATUS_CODE_PAGES as s, renderEndpoint as t, originPathnameSymbol as u };
