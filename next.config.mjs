/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  /* A static site: `next build` writes plain HTML to out/, which is what
     GitHub Pages serves. */
  output: "export",
  /* Every route ends in a slash (about/), matching the addresses the site
     already uses. */
  trailingSlash: true,
  /* A GitHub Pages project site lives under /rosetta-steps; set
     NEXT_PUBLIC_BASE_PATH there. Locally it stays empty, so the site runs at
     http://localhost:3000/. */
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath }
};

export default nextConfig;
