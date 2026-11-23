import Link from "next/link";
import { BASE_PATH, asset } from "../../lib/asset";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "Dr. Mark Sinke trains our teachers and donates a printer | Rosetta Steps Education Center",
  description: "A visit from Empowerment Squared Canada left our staff with new techniques and the school with a working printer.",
  keywords: "teacher training Liberia, Empowerment Squared Canada, Mark Sinke, Rosetta Steps Education Center",
  robots: "index, follow",
  alternates: { canonical: `${BASE_PATH}/news-mark-sinke-training/` },
  openGraph: {
    type: "article",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "Dr. Mark Sinke trains our teachers and donates a printer | Rosetta Steps Education Center",
    description: "A visit from Empowerment Squared Canada left our staff with new techniques and the school with a working printer.",
    url: `${BASE_PATH}/news-mark-sinke-training/`,
    images: [url("/assets/img/banner-about.jpg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Mark Sinke trains our teachers and donates a printer | Rosetta Steps Education Center",
    description: "A visit from Empowerment Squared Canada left our staff with new techniques and the school with a working printer.",
    images: [url("/assets/img/banner-about.jpg")]
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
              <ol className="breadcrumb"><li><Link href="/">Home</Link></li><li><Link href="/news/">News &amp; Blog</Link></li><li aria-current="page">Teacher training</li></ol>
              <p className="eyebrow">Events</p>
              <h1>Dr. Mark Sinke trains our <span className="text-accent">teachers</span></h1>
              <div className="news-meta article-meta"><span className="cat">Events</span><span>20 July 2023</span></div>
            </div>
          </div>
        </section>
        <section className="section section--white">
          <div className="container">
            <div className="article-wrap">
              <figure className="article-media">
                <img src={asset("assets/img/banner-about.jpg")} alt="Rosetta Steps campus" loading="eager" decoding="async" width={1600} height={900} />
              </figure>
              <div className="article-body" data-reveal>
                <p className="article-lede">A visit from Empowerment Squared Canada left our staff with new techniques and the school with a working printer.</p>
                <p>Dr. Mark Sinke spent time with our teaching team on classroom practice — how to check that every child is following, how to group students so the strongest readers pull the others along, and how to plan a lesson that survives a morning without electricity.</p>
                <h2>Training that fits the room</h2>
                <p>Advice from a well-resourced school does not always survive contact with a class of forty children and one chalkboard. The sessions were built around what our teachers actually have: a single room, shared books, and children at several reading levels in the same grade.</p>
                <ul>
                  <li>Checking for understanding across a large class</li>
                  <li>Pairing stronger and weaker readers in every lesson</li>
                  <li>Low-cost materials made from what is already in the room</li>
                  <li>Planning for interruptions, from weather to power cuts</li>
                </ul>
                <h2>The printer</h2>
                <p>The visit also left a working printer behind. It sounds like a small thing until you count the cost of photocopies in Caldwell: worksheets, exam papers, report cards and letters home are all copied by hand or paid for by the page. A printer in the office means a teacher can prepare a lesson on Sunday night instead of queueing at a shop on Monday morning.</p>
                <p>Our thanks to Dr. Sinke and to Empowerment Squared for treating teacher development as part of the donation, not an extra.</p>
                <div className="article-callout">
                  <h3>Share your expertise</h3>
                  <p>We welcome visiting teachers, librarians and reading specialists. A morning of your time can change how a whole term is taught.</p>
                  <p><Link className="btn btn--primary btn--sm" href="/contact/">Offer a training session <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
                </div>
              </div>
              <div className="article-cta" data-reveal>
                <p className="eyebrow">For educators</p>
                <h2>Come and teach our teachers</h2>
                <p>Short visits, workshops and remote sessions are all useful. Tell us what you know and we will find the right fit.</p>
                <div className="btn-group">
                  <Link className="btn btn--primary" href="/contact/">Get in touch <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link>
                  <Link className="btn btn--ghost" href="/news/">More stories</Link>
                </div>
              </div>
              <nav className="post-nav" aria-label="More news">
                <Link href="/news-forleh-foundation/"><span className="post-nav-label">Read next</span><span className="post-nav-title">Forleh Foundation donates a drone, books, bags and pads</span></Link>
                <Link href="/news-egra-guide/"><span className="post-nav-label">Also from the archive</span><span className="post-nav-title">How we use the Early Grade Reading Assessment</span></Link>
              </nav>
              <p className="article-back"><Link className="link-arrow" href="/news/"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 12H4.5" /><path d="m10.5 6-6 6 6 6" /></svg> Back to all news &amp; stories</Link></p>
            </div>
          </div>
        </section>
    </>
  );
}
