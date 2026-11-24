import Link from "next/link";
import { BASE_PATH, asset } from "../../../lib/asset";
import PageHero from "../../../components/site/PageHero";
import ArticleCta from "../../../components/site/ArticleCta";
import ArticleCallout from "../../../components/site/ArticleCallout";
import PostNav from "../../../components/site/PostNav";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "Meet our 2020 scholarship recipients | Rosetta Steps Education Center",
  description: "Eight children began the 2020 school year on full scholarship, from Grade 1 through Grade 5.",
  keywords: "scholarship Liberia 2020, school scholarships Caldwell, Rosetta Steps Education Center",
  robots: "index, follow",
  alternates: { canonical: `${BASE_PATH}/news-2020-scholarships/` },
  openGraph: {
    type: "article",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "Meet our 2020 scholarship recipients | Rosetta Steps Education Center",
    description: "Eight children began the 2020 school year on full scholarship, from Grade 1 through Grade 5.",
    url: `${BASE_PATH}/news-2020-scholarships/`,
    images: [url("/assets/img/play.jpg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet our 2020 scholarship recipients | Rosetta Steps Education Center",
    description: "Eight children began the 2020 school year on full scholarship, from Grade 1 through Grade 5.",
    images: [url("/assets/img/play.jpg")]
  }
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow={"Announcements"}
        title={<>Meet our 2020 <span className="text-accent">scholarship</span> recipients</>}
        crumbs={[
          { label: <>News &amp; Blog</>, href: "/news/" },
          { label: "2020 scholarships" },
        ]}
        article
      >
        <div className="news-meta article-meta"><span className="cat">Announcements</span><span>2020</span></div>
      </PageHero>
        <section className="section section--white">
          <div className="container">
            <div className="article-wrap">
              <figure className="article-media">
                <img src={asset("assets/img/play.jpg")} alt="Children learning through play at Rosetta Steps" loading="eager" decoding="async" width={1600} height={900} />
              </figure>
              <div className="article-body" data-reveal>
                <p className="article-lede">Eight children began the 2020 school year on full scholarship, from Grade 1 through Grade 5.</p>
                <p>Each of them had been identified by our teachers and the wider Caldwell community as a child who would otherwise not be in a classroom. Their places were covered by donors who chose a specific child and followed them through the year.</p>
                <h2>Who the scholarships reached</h2>
                <p>The group spanned the school, from a brand-new Grade 1 pupil learning letter sounds to a Grade 5 student preparing for the transition to secondary school. The spread was deliberate. Support in the earliest grades prevents a child from falling behind at all; support in the last primary year is what keeps a child from stopping at Grade 5.</p>
                <ul>
                  <li>Eight full scholarships, Grade 1 to Grade 5</li>
                  <li>Tuition, uniform, materials and a daily meal for each child</li>
                  <li>After-school reading support in the reading room</li>
                  <li>Termly reports shared with each sponsor</li>
                </ul>
                <h2>What a full scholarship means</h2>
                <p>Our standard annual cost per child is $280. It covers tuition, a uniform, exercise books and pencils, and a meal each school day. Sponsors who prefer to give monthly can cover a place at $40 a month; those who want to support a classroom can give $125 or $200 toward a group.</p>
                <p>Because the school opened its own campus in 2016, every scholarship has a visible home: a classroom, a reading room and a kitchen, rather than a promise.</p>
                <ArticleCallout
                  title={"Fund the next group"}
                  cta={{ href: "/donate/#sponsor", label: "Fund a scholarship" }}
                >
                  Scholarship places open each school year and are filled in the order funding arrives. Join the group that makes them possible.
                </ArticleCallout>
              </div>
        <ArticleCta
          eyebrow={"Scholarships"}
          title={"Put a child on the list for next year"}
          lede={"$280 sponsors a full year. Monthly gifts of $40 keep a place filled term after term."}
          actions={[
            { href: "/donate/#sponsor", label: "Sponsor a student", variant: "primary", arrow: true },
            { href: "/news/", label: "More stories", variant: "ghost" },
          ]}
        />
              <PostNav
                links={[
                  { href: "/news-isaac-story/", label: "Read next", title: "Isaac's story: the only one in his family in school" },
                  { href: "/news-renewed-hope/", label: "Also from the archive", title: "Renewed Hope for a Brighter Future" },
                ]}
              />
              <p className="article-back"><Link className="link-arrow" href="/news/"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 12H4.5" /><path d="m10.5 6-6 6 6 6" /></svg> Back to all news &amp; stories</Link></p>
            </div>
          </div>
        </section>
    </>
  );
}
