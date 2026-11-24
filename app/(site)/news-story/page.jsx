import Script from "next/script";
import Link from "next/link";
import { BASE_PATH, asset } from "../../../lib/asset";
import PageHero from "../../../components/site/PageHero";
import ArticleCta from "../../../components/site/ArticleCta";

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
      <PageHero
        eyebrow={"From the school"}
        title={<>Story</>}
        crumbs={[
          { label: <>News &amp; Blog</>, href: "/news/" },
          { label: "Story" },
        ]}
        article
        reveal={false}
        ids={{ eyebrow: "storyCategory", title: "storyTitle", crumb: "storyCrumb" }}
      >
        <div className="news-meta article-meta"><span className="cat" id="storyCatPill">News</span><span id="storyDate" /></div>
      </PageHero>
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
        <ArticleCta
          eyebrow={"Your turn"}
          title={"A small gift can restart a school year"}
          lede={"Fees, uniforms and books are the difference between a child in class and a child at home. Help us close that gap."}
          actions={[
            { href: "/donate/", label: "Donate", variant: "primary", arrow: true },
            { href: "/news/", label: "More stories", variant: "ghost" },
          ]}
        />
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
