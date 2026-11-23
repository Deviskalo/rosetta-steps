import Link from "next/link";
import { BASE_PATH, asset } from "../../lib/asset";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "Isaac&rsquo;s story: the only one in his family in school | Rosetta Steps Education Center",
  description: "Isaac started at Rosetta Steps in Grade 1 on a scholarship. He is now in Grade 4 with the second-best marks in the school, and the only child in his family in a classroom.",
  keywords: "student success story Liberia, scholarship Liberia, sponsor a child Liberia, Rosetta Steps Education Center",
  robots: "index, follow",
  alternates: { canonical: `${BASE_PATH}/news-isaac-story/` },
  openGraph: {
    type: "article",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "Isaac&rsquo;s story: the only one in his family in school | Rosetta Steps Education Center",
    description: "Isaac started at Rosetta Steps in Grade 1 on a scholarship. He is now in Grade 4 with the second-best marks in the school, and the only child in his family in a classroom.",
    url: `${BASE_PATH}/news-isaac-story/`,
    images: [url("/assets/img/hero.jpg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac&rsquo;s story: the only one in his family in school | Rosetta Steps Education Center",
    description: "Isaac started at Rosetta Steps in Grade 1 on a scholarship. He is now in Grade 4 with the second-best marks in the school, and the only child in his family in a classroom.",
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
            <div className="page-hero-inner" data-reveal>
              <ol className="breadcrumb"><li><Link href="/">Home</Link></li><li><Link href="/news/">News &amp; Blog</Link></li><li aria-current="page">Isaac’s story</li></ol>
              <p className="eyebrow">Success Stories</p>
              <h1>Isaac’s story: the only one in his <span className="text-accent">family</span> in school</h1>
              <div className="news-meta article-meta"><span className="cat">Success Stories</span><span>Featured story</span></div>
            </div>
          </div>
        </section>
        <section className="section section--white">
          <div className="container">
            <div className="article-wrap">
              <figure className="article-media">
                <img src={asset("assets/img/hero.jpg")} alt="A young student reading a book at Rosetta Steps" loading="eager" decoding="async" width={1600} height={900} />
              </figure>
              <div className="article-body" data-reveal>
                <p className="article-lede">When the Rosetta Steps team first met Isaac, he was struggling. His parents could not afford to send him to school. Thanks to a scholarship, he started with us in Grade 1.</p>
                <p>He is now in Grade 4 — with the second-best marks in the school. Isaac is the only one in his family in a classroom, and he hopes that one day his two brothers will also receive scholarships so they can join him.</p>
                <h2>What a scholarship really covers</h2>
                <p>In Caldwell, tuition is rarely the only barrier between a child and a classroom. Uniforms, exercise books, pencils, a school bag, exam fees and a daily meal all add up, and for families living on casual daily work one unexpected cost is enough to end a school year early.</p>
                <p>A Rosetta Steps scholarship covers the whole of it. Sponsored children arrive with the same uniform, the same books and the same lunch as their classmates — and they stay in class when the family’s income dips.</p>
                <ul>
                  <li>Full tuition for the school year</li>
                  <li>Uniform, school bag and exercise books</li>
                  <li>A daily meal on campus</li>
                  <li>Reading support in our after-school reading room</li>
                </ul>
                <h2>Why Isaac’s story matters</h2>
                <p>Isaac is not an exception at Rosetta Steps; he is the reason the school exists. When a child is the first in a family to attend school, the effect does not stop with that child. Homework moves through the house. A younger brother watches an older one read and decides that reading is something he does too. Parents who never finished school start asking what the report card means.</p>
                <p>That is what sponsors are paying for: not just one place in one classroom, but the first step of a longer staircase.</p>
                <div className="article-callout">
                  <h3>Sponsor a child like Isaac</h3>
                  <p>$280 covers a full school year for one child — tuition, uniform, materials and meals. Monthly and per-class gifts are just as welcome, and every gift goes straight to the classroom.</p>
                  <p><Link className="btn btn--primary btn--sm" href="/donate/#sponsor">Sponsor a child <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
                </div>
                <h2>The next Isaac</h2>
                <p>Every term we meet children in the same position Isaac was in: bright, already behind, and one fee note away from dropping out. Scholarships are limited by what we can raise, not by how many children need one. If you have been thinking about it, this is the moment.</p>
              </div>
              <div className="article-cta" data-reveal>
                <p className="eyebrow">Get involved</p>
                <h2>Change one child’s school year</h2>
                <p>Sponsorship is the most direct way to help. Tell us what you can give and we will match you with a child waiting for a place.</p>
                <div className="btn-group">
                  <Link className="btn btn--primary" href="/donate/">See giving options <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link>
                  <Link className="btn btn--ghost" href="/news/">More stories</Link>
                </div>
              </div>
              <nav className="post-nav" aria-label="More news">
                <Link href="/news-renewed-hope/"><span className="post-nav-label">Read next</span><span className="post-nav-title">Renewed Hope for a Brighter Future</span></Link>
                <Link href="/news-2020-scholarships/"><span className="post-nav-label">Also from the archive</span><span className="post-nav-title">Meet our 2020 scholarship recipients</span></Link>
              </nav>
              <p className="article-back"><Link className="link-arrow" href="/news/"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 12H4.5" /><path d="m10.5 6-6 6 6 6" /></svg> Back to all news &amp; stories</Link></p>
            </div>
          </div>
        </section>
    </>
  );
}
