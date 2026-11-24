import Link from "next/link";
import { BASE_PATH, asset } from "../../../lib/asset";
import PageHero from "../../../components/site/PageHero";
import ArticleCta from "../../../components/site/ArticleCta";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "Learn Through Play: every Saturday, 9am to 12pm | Rosetta Steps Education Center",
  description: "Our gates open free of charge to children from the community for a morning of learning disguised as play.",
  keywords: "Learn Through Play Liberia, Saturday reading programme, community children Liberia, Rosetta Steps",
  robots: "index, follow",
  alternates: { canonical: `${BASE_PATH}/news-learn-through-play/` },
  openGraph: {
    type: "article",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "Learn Through Play: every Saturday, 9am to 12pm | Rosetta Steps Education Center",
    description: "Our gates open free of charge to children from the community for a morning of learning disguised as play.",
    url: `${BASE_PATH}/news-learn-through-play/`,
    images: [url("/assets/img/kindergarten.jpg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Through Play: every Saturday, 9am to 12pm | Rosetta Steps Education Center",
    description: "Our gates open free of charge to children from the community for a morning of learning disguised as play.",
    images: [url("/assets/img/kindergarten.jpg")]
  }
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow={"Events"}
        title={<>Learn Through Play: every Saturday, <span className="text-accent">9am to 12pm</span></>}
        crumbs={[
          { label: <>News &amp; Blog</>, href: "/news/" },
          { label: "Learn Through Play" },
        ]}
        article
      >
        <div className="news-meta article-meta"><span className="cat">Events</span><span>Every week</span></div>
      </PageHero>
        <section className="section section--white">
          <div className="container">
            <div className="article-wrap">
              <figure className="article-media">
                <img src={asset("assets/img/kindergarten.jpg")} alt="Children playing and learning at Rosetta Steps" loading="eager" decoding="async" width={1600} height={900} />
              </figure>
              <div className="article-body" data-reveal>
                <p className="article-lede">Our gates open free of charge to children from the community for a morning of learning disguised as play.</p>
                <p>Every Saturday from 9am to 12pm, children from Caldwell Road and the streets around us come onto campus for stories, games, songs and craft. No uniform, no fee, no registration desk — they simply arrive.</p>
                <h2>What happens in the three hours</h2>
                <ul>
                  <li><strong>Story circle</strong> — a book read aloud, with questions and voices</li>
                  <li><strong>Word games</strong> — letter hunts, rhyming, matching and spelling races</li>
                  <li><strong>Make and do</strong> — drawing, cutting, building with whatever is on hand</li>
                  <li><strong>Play</strong> — because the point is that learning feels like something you want to come back to</li>
                </ul>
                <p>Children who attend the Saturday sessions often arrive at school on Monday already knowing a few more letters than they did on Friday. For children who are not enrolled anywhere, the morning is sometimes the only structured learning in their week.</p>
                <h2>Why we run it free</h2>
                <p>Rosetta Steps began in 2014 with a reading room — a table, a few books and an open door. Learn Through Play is that idea, kept alive. Some of the children who now attend the school full-time first came to a Saturday session with an older sibling.</p>
                <div className="article-callout">
                  <h3>Volunteer on a Saturday</h3>
                  <p>We need readers, craft helpers and people who are simply good at playing. A morning a month makes a difference.</p>
                  <p><Link className="btn btn--primary btn--sm" href="/contact/">Volunteer with us <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
                </div>
              </div>
        <ArticleCta
          eyebrow={"Community"}
          title={"Bring your children on Saturday"}
          lede={"Open to every child in the neighbourhood, free of charge. Gates open at 9am and close at noon."}
          actions={[
            { href: "/contact/", label: "Find us", variant: "primary", arrow: true },
            { href: "/news/", label: "More stories", variant: "ghost" },
          ]}
        />
              <nav className="post-nav" aria-label="More news">
                <Link href="/news-egra-guide/"><span className="post-nav-label">Read next</span><span className="post-nav-title">How we use the Early Grade Reading Assessment</span></Link>
                <Link href="/news-period-with-pride/"><span className="post-nav-label">Also from the archive</span><span className="post-nav-title">Period With Pride delivers over 100 pads to our students</span></Link>
              </nav>
              <p className="article-back"><Link className="link-arrow" href="/news/"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 12H4.5" /><path d="m10.5 6-6 6 6 6" /></svg> Back to all news &amp; stories</Link></p>
            </div>
          </div>
        </section>
    </>
  );
}
