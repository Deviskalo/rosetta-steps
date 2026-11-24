/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  /* A static site: `next build` writes plain HTML to out/, which is what
     GitHub Pages serves. */
  output: "export",
  /* Pages are exported as flat files (about.html) and linked without a slash:
     /rosetta-steps/about. A host that answers /about/ with a redirect or a 404
     was showing blank pages, so no route ever ends in a slash. */
  trailingSlash: false,
  /* A GitHub Pages project site lives under /rosetta-steps; set
     NEXT_PUBLIC_BASE_PATH there. Locally it stays empty, so the site runs at
     http://localhost:3000/. */
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath }
};

export default nextConfig;
