import Link from "next/link";
import { BASE_PATH, asset } from "../../../lib/asset";
import PageHero from "../../../components/site/PageHero";
import ArticleCta from "../../../components/site/ArticleCta";
import ArticleCallout from "../../../components/site/ArticleCallout";
import PostNav from "../../../components/site/PostNav";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "Dr. Mark Sinke trains our teachers and donates a printer | Rosetta Steps Education Center",
  description: "A visit from Empowerment Squared Canada left our staff with new techniques and the school with a working printer.",
  keywords: "teacher training Liberia, Empowerment Squared Canada, Mark Sinke, Rosetta Steps Education Center",
  robots: "index, follow",
  alternates: { canonical: `${BASE_PATH}/news-mark-sinke-training` },
  openGraph: {
    type: "article",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "Dr. Mark Sinke trains our teachers and donates a printer | Rosetta Steps Education Center",
    description: "A visit from Empowerment Squared Canada left our staff with new techniques and the school with a working printer.",
    url: `${BASE_PATH}/news-mark-sinke-training`,
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
      <PageHero
        eyebrow={"Events"}
        title={<>Dr. Mark Sinke trains our <span className="text-accent">teachers</span></>}
        crumbs={[
          { label: <>News &amp; Blog</>, href: "/news" },
          { label: "Teacher training" },
        ]}
        article
      >
        <div className="news-meta article-meta"><span className="cat">Events</span><span>20 July 2023</span></div>
      </PageHero>
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
                <ArticleCallout
                  title={"Share your expertise"}
                  cta={{ href: "/contact", label: "Offer a training session" }}
                >
                  We welcome visiting teachers, librarians and reading specialists. A morning of your time can change how a whole term is taught.
                </ArticleCallout>
              </div>
        <ArticleCta
          eyebrow={"For educators"}
          title={"Come and teach our teachers"}
          lede={"Short visits, workshops and remote sessions are all useful. Tell us what you know and we will find the right fit."}
          actions={[
            { href: "/contact", label: "Get in touch", variant: "primary", arrow: true },
            { href: "/news", label: "More stories", variant: "ghost" },
          ]}
        />
              <PostNav
                links={[
                  { href: "/news-forleh-foundation", label: "Read next", title: "Forleh Foundation donates a drone, books, bags and pads" },
                  { href: "/news-egra-guide", label: "Also from the archive", title: "How we use the Early Grade Reading Assessment" },
                ]}
              />
              <p className="article-back"><Link className="link-arrow" href="/news"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 12H4.5" /><path d="m10.5 6-6 6 6 6" /></svg> Back to all news &amp; stories</Link></p>
            </div>
          </div>
        </section>
    </>
  );
}
