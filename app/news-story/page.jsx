import Script from "next/script";
import Link from "next/link";
import { BASE_PATH, asset } from "../../lib/asset";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "Story | Rosetta Steps Education Center",
  description: "A story from Rosetta Steps Education Center in Caldwell, Liberia.",
  keywords: "",
  robots: "noindex, follow",
  alternates: { canonical: `${BASE_PATH}/news-story/` },
  openGraph: {
    type: "article",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "Story | Rosetta Steps Education Center",
    description: "A story from Rosetta Steps Education Center in Caldwell, Liberia.",
    url: `${BASE_PATH}/news-story/`,
    images: [url("/assets/img/hero.jpg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "Story | Rosetta Steps Education Center",
    description: "A story from Rosetta Steps Education Center in Caldwell, Liberia.",
    images: [url("/assets/img/hero.jpg")]
  }
};

export default function Page() {
  return (
    <>
      <section className="page-hero page-hero--article">
          <div className="shape shape--dots" style={{width: 120, height: 120, right: '7%', top: '16%'}} aria-hidden="true" />
          <div className="shape shape--ring" style={{width: 170, height: 170, right: '15%', bottom: '10%'}} aria-hidden="true" />
          <div className="container">
            <div className="page-hero-inner">
              <ol className="breadcrumb"><li><Link href="/">Home</Link></li><li><Link href="/news/">News &amp; Blog</Link></li><li aria-current="page" id="storyCrumb">Story</li></ol>
              <p className="eyebrow" id="storyCategory">From the school</p>
              <h1 id="storyTitle">Story</h1>
              <div className="news-meta article-meta"><span className="cat" id="storyCatPill">News</span><span id="storyDate" /></div>
            </div>
          </div>
        </section>
        <section className="section section--white">
          <div className="container">
            <div className="article-wrap">
              <figure className="article-media" id="storyMedia" hidden>
                <img id="storyImage" src={asset("assets/img/hero.jpg")} alt="" loading="eager" decoding="async" width={1600} height={900} />
              </figure>
              <div className="article-body" id="storyBody">
                <p className="article-lede" id="storyLede" />
                <div id="storyParagraphs" />
                <noscript>&lt;p&gt;This story is opened in the browser. Please turn on JavaScript to read it, or &lt;a href="/news/"&gt;browse all stories&lt;/a&gt;.&lt;/p&gt;</noscript>
              </div>
              <div className="article-cta" data-reveal>
                <p className="eyebrow">Your turn</p>
                <h2>A small gift can restart a school year</h2>
                <p>Fees, uniforms and books are the difference between a child in class and a child at home. Help us close that gap.</p>
                <div className="btn-group">
                  <Link className="btn btn--primary" href="/donate/">Donate <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link>
                  <Link className="btn btn--ghost" href="/news/">More stories</Link>
                </div>
              </div>
              <nav className="post-nav" aria-label="More news">
                <Link href="/news/"><span className="post-nav-label">Back to</span><span className="post-nav-title">All news &amp; stories</span></Link>
              </nav>
            </div>
          </div>
        </section>
      <Script src={asset("/assets/js/public-story.js")} strategy="afterInteractive" />
    </>
  );
}
