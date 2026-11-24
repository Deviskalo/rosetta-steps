import Link from "next/link";

/* Some static hosts only map `about` to about.html and answer `about/` with
   this page. Drop the trailing slash once (never on the root) so the file form
   gets a chance; a genuinely missing address simply lands back here. */
const SLASH_RETRY = [
  "(function () {",
  '  var path = window.location.pathname;',
  '  if (path.charAt(path.length - 1) !== "/") return;',
  '  if (path === "/" || path === ' +
    JSON.stringify(`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/`) +
    ") return;",
  '  window.location.replace(window.location.origin + path.replace(/\\/+$/, "") + window.location.search);',
  "})();"
].join("\n");

export const metadata = {
  title: "Page not found | Rosetta Steps Education Center",
  robots: { index: false, follow: false }
};

export default function NotFound() {
  return (
    <main id="main" className="section section--cream">
      <script dangerouslySetInnerHTML={{ __html: SLASH_RETRY }} />
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>We could not find that page</h1>
        <p>
          The address may have changed. Try the <Link href="/">home page</Link> or{" "}
          <Link href="/news">all news &amp; stories</Link>.
        </p>
        <p>
          <Link className="btn btn--primary" href="/">Back to the home page</Link>
        </p>
      </div>
    </main>
  );
}
