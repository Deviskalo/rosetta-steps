import Link from "next/link";
import { BASE_PATH, asset } from "../../../lib/asset";
import PageHero from "../../../components/site/PageHero";
import ArticleCta from "../../../components/site/ArticleCta";
import ArticleCallout from "../../../components/site/ArticleCallout";
import PostNav from "../../../components/site/PostNav";

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
      <PageHero
        eyebrow={"Success Stories"}
        title={<>Renewed Hope for a <span className="text-accent">Brighter</span> Future</>}
        crumbs={[
          { label: <>News &amp; Blog</>, href: "/news/" },
          { label: "Renewed Hope" },
        ]}
        article
      >
        <div className="news-meta article-meta"><span className="cat">Success Stories</span><span>1 February 2024</span></div>
      </PageHero>
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
                <ArticleCallout
                  title={"Keep a child in class"}
                  cta={{ href: "/donate/", label: "Give today" }}
                >
                  $280 covers a full school year. A one-off gift of any size can clear a balance and bring a child back through the gate.
                </ArticleCallout>
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
              <PostNav
                links={[
                  { href: "/news-isaac-story/", label: "Read next", title: "Isaac's story: the only one in his family in school" },
                  { href: "/news-2020-scholarships/", label: "Also from the archive", title: "Meet our 2020 scholarship recipients" },
                ]}
              />
              <p className="article-back"><Link className="link-arrow" href="/news/"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 12H4.5" /><path d="m10.5 6-6 6 6 6" /></svg> Back to all news &amp; stories</Link></p>
            </div>
          </div>
        </section>
    </>
  );
}
