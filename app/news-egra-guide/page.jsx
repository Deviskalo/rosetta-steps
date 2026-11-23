import Link from "next/link";
import { BASE_PATH, asset } from "../../lib/asset";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "How we use the Early Grade Reading Assessment | Rosetta Steps Education Center",
  description: "EGRA is not an exam. It is a fifteen-minute conversation with a reader that tells us exactly which skill to teach next.",
  keywords: "EGRA Liberia, early grade reading assessment, reading assessment primary school, Rosetta Steps literacy",
  robots: "index, follow",
  alternates: { canonical: `${BASE_PATH}/news-egra-guide/` },
  openGraph: {
    type: "article",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "How we use the Early Grade Reading Assessment | Rosetta Steps Education Center",
    description: "EGRA is not an exam. It is a fifteen-minute conversation with a reader that tells us exactly which skill to teach next.",
    url: `${BASE_PATH}/news-egra-guide/`,
    images: [url("/assets/img/preschool.jpg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "How we use the Early Grade Reading Assessment | Rosetta Steps Education Center",
    description: "EGRA is not an exam. It is a fifteen-minute conversation with a reader that tells us exactly which skill to teach next.",
    images: [url("/assets/img/preschool.jpg")]
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
              <ol className="breadcrumb"><li><Link href="/">Home</Link></li><li><Link href="/news/">News &amp; Blog</Link></li><li aria-current="page">EGRA guide</li></ol>
              <p className="eyebrow">Educational Resources</p>
              <h1>How we use the Early Grade <span className="text-accent">Reading</span> Assessment</h1>
              <div className="news-meta article-meta"><span className="cat">Educational Resources</span><span>Evergreen guide</span></div>
            </div>
          </div>
        </section>
        <section className="section section--white">
          <div className="container">
            <div className="article-wrap">
              <figure className="article-media">
                <img src={asset("assets/img/preschool.jpg")} alt="A Rosetta Steps preschool classroom" loading="eager" decoding="async" width={1600} height={900} />
              </figure>
              <div className="article-body" data-reveal>
                <p className="article-lede">EGRA is not an exam. It is a fifteen-minute conversation with a reader that tells us exactly which skill to teach next.</p>
                <p>The Early Grade Reading Assessment is a short, one-to-one check used across Liberia and much of West Africa. A teacher sits with a child, listens to them read letters, familiar words, a short passage, and asks a few questions about what they understood. Nothing is graded. Nothing goes on a report card.</p>
                <h2>What it measures</h2>
                <ul>
                  <li><strong>Letter recognition</strong> — can the child name letters quickly and accurately?</li>
                  <li><strong>Familiar words</strong> — can they read words they have seen before?</li>
                  <li><strong>Oral reading fluency</strong> — how many words per minute, and how many correctly?</li>
                  <li><strong>Reading comprehension</strong> — can they answer questions about a passage they just read?</li>
                </ul>
                <p>Each part points at a different teaching move. A child who reads accurately but slowly needs fluency practice, not more phonics. A child who reads quickly and understands nothing needs comprehension work. Without the assessment, both children look the same from the back of the room.</p>
                <h2>Why we assess every term</h2>
                <p>We run the assessment at the start of the year and again at the end, and we keep the results in a simple reading record for each child. Teachers use those records to form reading groups, to decide which children need the reading room after school, and to see whether a change in method actually worked.</p>
                <p>The results are also how we report honestly to donors. It is easy to say a reading programme is going well. The assessment is what lets us show a child moved from sounding out letters to reading a full sentence.</p>
                <div className="article-callout">
                  <h3>Support the reading room</h3>
                  <p>Our after-school reading room runs on volunteers, books and light. $125 covers a class, and book donations are always welcome.</p>
                  <p><Link className="btn btn--primary btn--sm" href="/literacy/">Explore our literacy work <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
                </div>
              </div>
              <div className="article-cta" data-reveal>
                <p className="eyebrow">Literacy</p>
                <h2>Reading is the whole curriculum</h2>
                <p>Every subject depends on a child who can read the page in front of them. See how our literacy programme works.</p>
                <div className="btn-group">
                  <Link className="btn btn--primary" href="/literacy/">Our literacy programmes <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link>
                  <Link className="btn btn--ghost" href="/news/">More stories</Link>
                </div>
              </div>
              <nav className="post-nav" aria-label="More news">
                <Link href="/news-mark-sinke-training/"><span className="post-nav-label">Read next</span><span className="post-nav-title">Dr. Mark Sinke trains our teachers and donates a printer</span></Link>
                <Link href="/news-learn-through-play/"><span className="post-nav-label">Also from the archive</span><span className="post-nav-title">Learn Through Play: every Saturday, 9am to 12pm</span></Link>
              </nav>
              <p className="article-back"><Link className="link-arrow" href="/news/"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 12H4.5" /><path d="m10.5 6-6 6 6 6" /></svg> Back to all news &amp; stories</Link></p>
            </div>
          </div>
        </section>
    </>
  );
}
