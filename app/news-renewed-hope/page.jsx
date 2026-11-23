import Link from "next/link";
import { BASE_PATH, asset } from "../../lib/asset";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "Renewed Hope for a Brighter Future | Rosetta Steps Education Center",
  description: "Philanthropist Joyce Frankfort has put student Alphonso Fawundu back in school after his family could no longer afford fees.",
  keywords: "Joyce Frankfort, Alphonso Fawundu, school fees Liberia, scholarship Liberia, Rosetta Steps",
  robots: "index, follow",
  alternates: { canonical: `${BASE_PATH}/news-renewed-hope/` },
  openGraph: {
    type: "article",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "Renewed Hope for a Brighter Future | Rosetta Steps Education Center",
    description: "Philanthropist Joyce Frankfort has put student Alphonso Fawundu back in school after his family could no longer afford fees.",
    url: `${BASE_PATH}/news-renewed-hope/`,
    images: [url("/assets/img/about-students.jpg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "Renewed Hope for a Brighter Future | Rosetta Steps Education Center",
    description: "Philanthropist Joyce Frankfort has put student Alphonso Fawundu back in school after his family could no longer afford fees.",
    images: [url("/assets/img/about-students.jpg")]
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
              <ol className="breadcrumb"><li><Link href="/">Home</Link></li><li><Link href="/news/">News &amp; Blog</Link></li><li aria-current="page">Renewed Hope</li></ol>
              <p className="eyebrow">Success Stories</p>
              <h1>Renewed Hope for a <span className="text-accent">Brighter</span> Future</h1>
              <div className="news-meta article-meta"><span className="cat">Success Stories</span><span>1 February 2024</span></div>
            </div>
          </div>
        </section>
        <section className="section section--white">
          <div className="container">
            <div className="article-wrap">
              <figure className="article-media">
                <img src={asset("assets/img/about-students.jpg")} alt="Rosetta Steps students together on campus" loading="eager" decoding="async" width={1600} height={900} />
              </figure>
              <div className="article-body" data-reveal>
                <p className="article-lede">Philanthropist Joyce Frankfort has put student Alphonso Fawundu back in school after his family could no longer afford his fees.</p>
                <p>Alphonso had already missed part of the term when his family told us they could not cover the balance. Like many households in Caldwell, the family’s income depends on daily work, and a short illness or a slow month is all it takes to put school out of reach.</p>
                <h2>A knock on the gate, and a place kept open</h2>
                <p>Ms. Frankfort, who has supported children at Rosetta Steps before, stepped in when she heard about the case. Her gift settled the outstanding balance and covered the rest of the school year, so Alphonso returned to his class with his uniform, books and seat exactly as he had left them.</p>
                <p>For the school, the moment mattered beyond one child. When a family falls behind, the hardest part is often the shame of coming back. Keeping a place open — and making the return ordinary — is part of what a community school is for.</p>
                <ul>
                  <li>Outstanding fees cleared for the school year</li>
                  <li>Uniform and learning materials replaced</li>
                  <li>Reading-room support restarted after class</li>
                </ul>
                <h2>What it took</h2>
                <p>Alphonso is back in class, and his teachers report that he picked up where he left off. His family now knows that a bad month does not have to mean the end of a school year — and other families have come forward to ask how sponsorship works.</p>
                <p>Gifts like Ms. Frankfort’s are how a school of 175 children stays open in a country where most families pay fees out of weekly earnings. They are also how a single missed term stops turning into a lost education.</p>
                <div className="article-callout">
                  <h3>Keep a child in class</h3>
                  <p>$280 covers a full school year. A one-off gift of any size can clear a balance and bring a child back through the gate.</p>
                  <p><Link className="btn btn--primary btn--sm" href="/donate/">Give today <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
                </div>
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
                <Link href="/news-isaac-story/"><span className="post-nav-label">Read next</span><span className="post-nav-title">Isaac's story: the only one in his family in school</span></Link>
                <Link href="/news-2020-scholarships/"><span className="post-nav-label">Also from the archive</span><span className="post-nav-title">Meet our 2020 scholarship recipients</span></Link>
              </nav>
              <p className="article-back"><Link className="link-arrow" href="/news/"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 12H4.5" /><path d="m10.5 6-6 6 6 6" /></svg> Back to all news &amp; stories</Link></p>
            </div>
          </div>
        </section>
    </>
  );
}
