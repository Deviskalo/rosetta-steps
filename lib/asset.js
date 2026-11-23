/* The site is published under a subpath on GitHub Pages (/rosetta-steps), so
   every link to a public file needs that prefix. Next applies NEXT_PUBLIC_BASE_PATH
   to <Link> by itself; this helper is for plain hrefs, images and scripts. */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path) {
  var clean = path.charAt(0) === "/" ? path : "/" + path;
  return BASE_PATH + clean;
}

export { BASE_PATH };
