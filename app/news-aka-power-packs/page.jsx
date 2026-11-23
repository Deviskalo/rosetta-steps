import Link from "next/link";
import { BASE_PATH, asset } from "../../lib/asset";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "A year of food for 55 children: the AKA Power Packs pilot | Rosetta Steps Education Center",
  description: "The Alpha Kappa Alpha Eta Beta Omega Chapter chose Rosetta Steps as the pilot school for its Childhood Hunger Initiative.",
  keywords: "AKA Power Packs, childhood hunger Liberia, school feeding Liberia, Rosetta Steps Education Center",
  robots: "index, follow",
  alternates: { canonical: `${BASE_PATH}/news-aka-power-packs/` },
  openGraph: {
    type: "article",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "A year of food for 55 children: the AKA Power Packs pilot | Rosetta Steps Education Center",
    description: "The Alpha Kappa Alpha Eta Beta Omega Chapter chose Rosetta Steps as the pilot school for its Childhood Hunger Initiative.",
    url: `${BASE_PATH}/news-aka-power-packs/`,
    images: [url("/assets/img/reading.jpg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "A year of food for 55 children: the AKA Power Packs pilot | Rosetta Steps Education Center",
    description: "The Alpha Kappa Alpha Eta Beta Omega Chapter chose Rosetta Steps as the pilot school for its Childhood Hunger Initiative.",
    images: [url("/assets/img/reading.jpg")]
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
              <ol className="breadcrumb"><li><Link href="/">Home</Link></li><li><Link href="/news/">News &amp; Blog</Link></li><li aria-current="page">AKA Power Packs</li></ol>
              <p className="eyebrow">Community Impact</p>
              <h1>A year of food for 55 <span className="text-accent">children</span></h1>
              <div className="news-meta article-meta"><span className="cat">Community Impact</span><span>7 December 2023</span></div>
            </div>
          </div>
        </section>
        <section className="section section--white">
          <div className="container">
            <div className="article-wrap">
              <figure className="article-media">
                <img src={asset("assets/img/reading.jpg")} alt="A Rosetta Steps student reading" loading="eager" decoding="async" width={1600} height={900} />
              </figure>
              <div className="article-body" data-reveal>
                <p className="article-lede">The Alpha Kappa Alpha Eta Beta Omega Chapter chose Rosetta Steps as the pilot school for its Childhood Hunger Initiative.</p>
                <p>Through the Power Packs programme, 55 of our children received food support across a full year — a pilot the chapter designed to test what consistent nutrition does for attendance and concentration in a Liberian community school.</p>
                <h2>Hunger is an academic problem</h2>
                <p>A child who has not eaten since yesterday is not thinking about phonics. Teachers see it in the first hour: heads down on desks, short tempers, children who cannot hold a pencil steady. Attendance also slips, because a hungry child has less reason to walk to school and less energy to stay once there.</p>
                <p>Food support is therefore not separate from education. It is the precondition for it.</p>
                <h2>What the pilot delivered</h2>
                <ul>
                  <li>Food support for 55 children over twelve months</li>
                  <li>Relief for families carrying the cost of a daily meal</li>
                  <li>A stable base for the school day, from morning assembly to last lesson</li>
                </ul>
                <p>Teachers reported steadier mornings over the year, and families told us the packs changed what was possible at home: money that would have gone to food went instead to uniforms, books and transport.</p>
                <div className="article-callout">
                  <h3>Our kitchen always needs help</h3>
                  <p>Rice, beans, oil and fresh produce are bought term by term. A gift of any size goes directly into a child’s plate.</p>
                  <p><Link className="btn btn--primary btn--sm" href="/donate/">Feed a classroom <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
                </div>
              </div>
              <div className="article-cta" data-reveal>
                <p className="eyebrow">Nutrition and learning</p>
                <h2>Keep the kitchen running</h2>
                <p>School meals are one of the cheapest, most reliable ways to improve attendance. Help us cover the next term.</p>
                <div className="btn-group">
                  <Link className="btn btn--primary" href="/donate/">Give to school meals <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link>
                  <Link className="btn btn--ghost" href="/news/">More stories</Link>
                </div>
              </div>
              <nav className="post-nav" aria-label="More news">
                <Link href="/news-forleh-foundation/"><span className="post-nav-label">Read next</span><span className="post-nav-title">Forleh Foundation donates a drone, books, bags and pads</span></Link>
                <Link href="/news-period-with-pride/"><span className="post-nav-label">Also from the archive</span><span className="post-nav-title">Period With Pride delivers over 100 pads to our students</span></Link>
              </nav>
              <p className="article-back"><Link className="link-arrow" href="/news/"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 12H4.5" /><path d="m10.5 6-6 6 6 6" /></svg> Back to all news &amp; stories</Link></p>
            </div>
          </div>
        </section>
    </>
  );
}
