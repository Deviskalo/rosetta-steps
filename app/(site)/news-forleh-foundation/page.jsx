import Link from "next/link";
import { BASE_PATH, asset } from "../../../lib/asset";
import PageHero from "../../../components/site/PageHero";
import ArticleCta from "../../../components/site/ArticleCta";
import ArticleCallout from "../../../components/site/ArticleCallout";
import PostNav from "../../../components/site/PostNav";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "Forleh Foundation donates a drone, books, bags and pads | Rosetta Steps Education Center",
  description: "Ms. Marjorie Forleh's foundation equipped our Grade 3 reading unit and our library in a single visit.",
  keywords: "Forleh Foundation, book donation Liberia, school library Liberia, Rosetta Steps Education Center",
  robots: "index, follow",
  alternates: { canonical: `${BASE_PATH}/news-forleh-foundation/` },
  openGraph: {
    type: "article",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "Forleh Foundation donates a drone, books, bags and pads | Rosetta Steps Education Center",
    description: "Ms. Marjorie Forleh's foundation equipped our Grade 3 reading unit and our library in a single visit.",
    url: `${BASE_PATH}/news-forleh-foundation/`,
    images: [url("/assets/img/adult.jpg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "Forleh Foundation donates a drone, books, bags and pads | Rosetta Steps Education Center",
    description: "Ms. Marjorie Forleh's foundation equipped our Grade 3 reading unit and our library in a single visit.",
    images: [url("/assets/img/adult.jpg")]
  }
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow={"Community Impact"}
        title={<>A drone, books, bags and pads from the <span className="text-accent">Forleh Foundation</span></>}
        crumbs={[
          { label: <>News &amp; Blog</>, href: "/news/" },
          { label: "Forleh Foundation" },
        ]}
        article
      >
        <div className="news-meta article-meta"><span className="cat">Community Impact</span><span>7 February 2024</span></div>
      </PageHero>
        <section className="section section--white">
          <div className="container">
            <div className="article-wrap">
              <figure className="article-media">
                <img src={asset("assets/img/adult.jpg")} alt="A learning session at Rosetta Steps" loading="eager" decoding="async" width={1600} height={900} />
              </figure>
              <div className="article-body" data-reveal>
                <p className="article-lede">Ms. Marjorie Forleh’s foundation equipped our Grade 3 reading unit and our library in a single visit.</p>
                <p>The donation covered a drone for our science demonstrations, a delivery of books for the library, school bags for children who had none, and sanitary pads for our older girls.</p>
                <h2>One visit, four gaps closed</h2>
                <p>Schools like ours run on a long list of small shortages, and the Forleh Foundation worked through several of them at once.</p>
                <ul>
                  <li><strong>Books</strong> — new titles for the library and the Grade 3 reading unit</li>
                  <li><strong>School bags</strong> — so children can carry materials home and back</li>
                  <li><strong>Sanitary pads</strong> — keeping older girls in class every month</li>
                  <li><strong>A drone</strong> — a hands-on way to teach flight, force and control</li>
                </ul>
                <h2>The drone in the classroom</h2>
                <p>Of everything in the delivery, the drone drew the most attention. Our teachers have used it to introduce ideas that are otherwise abstract on a chalkboard: lift, balance, and how a machine follows instructions. For children who have never seen a remote-controlled aircraft, it also does something harder to measure — it makes the case that science is for them.</p>
                <p>We are grateful to Ms. Forleh and her foundation, and to every partner who asks us what we actually need instead of guessing.</p>
                <ArticleCallout
                  title={"Give what we actually need"}
                  cta={{ href: "/contact/", label: "Request our needs list" }}
                >
                  Books, bags, stationery, sanitary products and science materials are always welcome. Ask us first and we will tell you exactly what is short this term.
                </ArticleCallout>
              </div>
        <ArticleCta
          eyebrow={"Partnership"}
          title={"Organise a donation drive"}
          lede={"Churches, alumni groups, chapters and companies have all equipped a classroom here. We will help you plan it."}
          actions={[
            { href: "/contact/", label: "Start a conversation", variant: "primary", arrow: true },
            { href: "/news/", label: "More stories", variant: "ghost" },
          ]}
        />
              <PostNav
                links={[
                  { href: "/news-aka-power-packs/", label: "Read next", title: "A year of food for 55 children: the AKA Power Packs pilot" },
                  { href: "/news-mark-sinke-training/", label: "Also from the archive", title: "Dr. Mark Sinke trains our teachers and donates a printer" },
                ]}
              />
              <p className="article-back"><Link className="link-arrow" href="/news/"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 12H4.5" /><path d="m10.5 6-6 6 6 6" /></svg> Back to all news &amp; stories</Link></p>
            </div>
          </div>
        </section>
    </>
  );
}
