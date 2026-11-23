import Link from "next/link";
import { BASE_PATH, asset } from "../../lib/asset";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "Period With Pride delivers over 100 pads to our students | Rosetta Steps Education Center",
  description: "A student-led initiative visited campus to tackle period poverty and talk about menstrual hygiene with our girls.",
  keywords: "period poverty Liberia, menstrual hygiene Liberia, community impact, Rosetta Steps Education Center",
  robots: "index, follow",
  alternates: { canonical: `${BASE_PATH}/news-period-with-pride/` },
  openGraph: {
    type: "article",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "Period With Pride delivers over 100 pads to our students | Rosetta Steps Education Center",
    description: "A student-led initiative visited campus to tackle period poverty and talk about menstrual hygiene with our girls.",
    url: `${BASE_PATH}/news-period-with-pride/`,
    images: [url("/assets/img/welcome.jpg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "Period With Pride delivers over 100 pads to our students | Rosetta Steps Education Center",
    description: "A student-led initiative visited campus to tackle period poverty and talk about menstrual hygiene with our girls.",
    images: [url("/assets/img/welcome.jpg")]
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
              <ol className="breadcrumb"><li><Link href="/">Home</Link></li><li><Link href="/news/">News &amp; Blog</Link></li><li aria-current="page">Period With Pride</li></ol>
              <p className="eyebrow">Community Impact</p>
              <h1>Period With Pride delivers over 100 pads to our <span className="text-accent">students</span></h1>
              <div className="news-meta article-meta"><span className="cat">Community Impact</span><span>9 July 2024</span></div>
            </div>
          </div>
        </section>
        <section className="section section--white">
          <div className="container">
            <div className="article-wrap">
              <figure className="article-media">
                <img src={asset("assets/img/welcome.jpg")} alt="Rosetta Steps students and visitors on campus" loading="eager" decoding="async" width={1600} height={900} />
              </figure>
              <div className="article-body" data-reveal>
                <p className="article-lede">A student-led initiative visited campus to tackle period poverty and talk with our girls about menstrual hygiene.</p>
                <p>The group delivered more than one hundred sanitary pads, enough to keep our older girls in class through several months of school. Just as important, they stayed for a conversation: what a period is, how to manage it safely, and why missing school for it is not something anyone should have to accept.</p>
                <h2>Why pads are a school supply</h2>
                <p>In Liberia, girls miss school days every month for want of sanitary products, running water or a private place to change. Those absences add up quietly. A girl who misses three or four days a month is behind before the term is half over, and the gap widens fastest in the upper grades, exactly when the work gets harder.</p>
                <p>Treating pads as a school supply — along with books and uniforms — is one of the simplest ways to keep girls in class.</p>
                <h2>What the visit covered</h2>
                <ul>
                  <li>Over 100 sanitary pads distributed to students</li>
                  <li>A session on menstrual hygiene and health</li>
                  <li>Practical guidance on managing a period during the school day</li>
                  <li>Time for questions, answered honestly and without embarrassment</li>
                </ul>
                <p>Our teachers will keep the conversation going in class, and the school keeps a discreet supply on hand for any girl who needs one during the day.</p>
                <div className="article-callout">
                  <h3>Help us keep the supply stocked</h3>
                  <p>Sanitary products, soap and clean-water supplies are among our most requested items. A small monthly gift keeps the cupboard full.</p>
                  <p><Link className="btn btn--primary btn--sm" href="/donate/">Support our girls <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
                </div>
              </div>
              <div className="article-cta" data-reveal>
                <p className="eyebrow">Community impact</p>
                <h2>Partners make the small things possible</h2>
                <p>If your organisation, chapter or class would like to run a drive for our students, we would love to hear from you.</p>
                <div className="btn-group">
                  <Link className="btn btn--primary" href="/contact/">Talk to us <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link>
                  <Link className="btn btn--ghost" href="/news/">More stories</Link>
                </div>
              </div>
              <nav className="post-nav" aria-label="More news">
                <Link href="/news-aka-power-packs/"><span className="post-nav-label">Read next</span><span className="post-nav-title">A year of food for 55 children: the AKA Power Packs pilot</span></Link>
                <Link href="/news-forleh-foundation/"><span className="post-nav-label">Also from the archive</span><span className="post-nav-title">Forleh Foundation donates a drone, books, bags and pads</span></Link>
              </nav>
              <p className="article-back"><Link className="link-arrow" href="/news/"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 12H4.5" /><path d="m10.5 6-6 6 6 6" /></svg> Back to all news &amp; stories</Link></p>
            </div>
          </div>
        </section>
    </>
  );
}
