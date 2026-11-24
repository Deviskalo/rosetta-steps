import Script from "next/script";
import Link from "next/link";
import { BASE_PATH, asset } from "../../../lib/asset";
import PageHero from "../../../components/site/PageHero";
import CtaStrip from "../../../components/site/CtaStrip";
import NewsCard from "../../../components/site/NewsCard";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "News & Blog | Rosetta Steps Education Center Liberia",
  description: "News, events, educational resources, success stories and community impact updates from Rosetta Steps Education Center in Caldwell, Montserrado County, Liberia.",
  keywords: "Schools in Liberia, Caldwell schools, Education in Monrovia, Literacy programs Liberia, Preschool Liberia, Primary school Liberia, Rosetta Steps Education Center",
  robots: "index, follow",
  alternates: { canonical: `${BASE_PATH}/news/` },
  openGraph: {
    type: "website",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "News & Blog | Rosetta Steps Education Center Liberia",
    description: "News, events, educational resources, success stories and community impact updates from Rosetta Steps Education Center in Caldwell, Montserrado County, Liberia.",
    url: `${BASE_PATH}/news/`,
    images: [url("/assets/img/hero.jpg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Blog | Rosetta Steps Education Center Liberia",
    description: "News, events, educational resources, success stories and community impact updates from Rosetta Steps Education Center in Caldwell, Montserrado County, Liberia.",
    images: [url("/assets/img/hero.jpg")]
  }
};

const NEWS_STORIES = [
  {
    href: "/news-renewed-hope/",
    image: "assets/img/about-students.jpg",
    alt: "Renewed Hope for a Brighter Future",
    category: "Success Stories",
    categoryKey: "success",
    date: "1 February 2024",
    title: "Renewed Hope for a Brighter Future",
    excerpt: "Philanthropist Joyce Frankfort has put student Alphonso Fawundu back in school after his family could no longer afford fees.",
    search: "Renewed Hope for a Brighter Future Success Stories Philanthropist Joyce Frankfort has put student Alphonso Fawundu back in school after his family could no longer afford fees.",
    delay: 0,
  },
  {
    href: "/news-period-with-pride/",
    image: "assets/img/welcome.jpg",
    alt: "Period With Pride delivers over 100 pads to our students",
    category: "Community Impact",
    categoryKey: "community",
    date: "9 July 2024",
    title: "Period With Pride delivers over 100 pads to our students",
    excerpt: "A student-led initiative visited campus to tackle period poverty and talk about menstrual hygiene with our girls.",
    search: "Period With Pride delivers over 100 pads to our students Community Impact A student-led initiative visited campus to tackle period poverty and talk about menstrual hygiene with our girls.",
    delay: 80,
  },
  {
    href: "/news-aka-power-packs/",
    image: "assets/img/reading.jpg",
    alt: "A year of food for 55 children: the AKA Power Packs pilot",
    category: "Community Impact",
    categoryKey: "community",
    date: "7 December 2023",
    title: "A year of food for 55 children: the AKA Power Packs pilot",
    excerpt: "The Alpha Kappa Alpha Eta Beta Omega Chapter chose Rosetta Steps as the pilot school for its Childhood Hunger Initiative.",
    search: "A year of food for 55 children: the AKA Power Packs pilot Community Impact The Alpha Kappa Alpha Eta Beta Omega Chapter chose Rosetta Steps as the pilot school for its Childhood Hunger Initiative.",
    delay: 160,
  },
  {
    href: "/news-forleh-foundation/",
    image: "assets/img/adult.jpg",
    alt: "Forleh Foundation donates a drone, books, bags and pads",
    category: "Community Impact",
    categoryKey: "community",
    date: "7 February 2024",
    title: "Forleh Foundation donates a drone, books, bags and pads",
    excerpt: "Ms. Marjorie Forleh’s foundation equipped our Grade 3 reading unit and our library in a single visit.",
    search: "Forleh Foundation donates a drone, books, bags and pads Community Impact Ms. Marjorie Forleh’s foundation equipped our Grade 3 reading unit and our library in a single visit.",
    delay: 0,
  },
  {
    href: "/news-mark-sinke-training/",
    image: "assets/img/banner-about.jpg",
    alt: "Dr. Mark Sinke trains our teachers and donates a printer",
    category: "Events",
    categoryKey: "events",
    date: "20 July 2023",
    title: "Dr. Mark Sinke trains our teachers and donates a printer",
    excerpt: "A visit from Empowerment Squared Canada left our staff with new techniques and the school with a working printer.",
    search: "Dr. Mark Sinke trains our teachers and donates a printer Events A visit from Empowerment Squared Canada left our staff with new techniques and the school with a working printer.",
    delay: 80,
  },
  {
    href: "/news-2020-scholarships/",
    image: "assets/img/play.jpg",
    alt: "Meet our 2020 scholarship recipients",
    category: "Announcements",
    categoryKey: "announcements",
    date: "2020",
    title: "Meet our 2020 scholarship recipients",
    excerpt: "Eight children began the 2020 school year on full scholarship, from Grade 1 through Grade 5.",
    search: "Meet our 2020 scholarship recipients Announcements Eight children began the 2020 school year on full scholarship, from Grade 1 through Grade 5.",
    delay: 160,
  },
  {
    href: "/news-egra-guide/",
    image: "assets/img/preschool.jpg",
    alt: "How we use the Early Grade Reading Assessment",
    category: "Educational Resources",
    categoryKey: "resources",
    date: "Evergreen guide",
    title: "How we use the Early Grade Reading Assessment",
    excerpt: "EGRA is not an exam. It is a fifteen-minute conversation with a reader that tells us exactly which skill to teach next.",
    search: "How we use the Early Grade Reading Assessment Educational Resources EGRA is not an exam. It is a fifteen-minute conversation with a reader that tells us exactly which skill to teach next.",
    delay: 0,
  },
  {
    href: "/news-learn-through-play/",
    image: "assets/img/kindergarten.jpg",
    alt: "Learn Through Play: every Saturday, 9am to 12pm",
    category: "Events",
    categoryKey: "events",
    date: "Every week",
    title: "Learn Through Play: every Saturday, 9am to 12pm",
    excerpt: "Our gates open free of charge to children from the community for a morning of learning disguised as play.",
    search: "Learn Through Play: every Saturday, 9am to 12pm Events Our gates open free of charge to children from the community for a morning of learning disguised as play.",
    delay: 80,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow={<>News &amp; blog</>}
        title={<>News, events &amp; <span className="text-accent">stories</span> from Caldwell</>}
        crumbs={[
          { label: <>News &amp; Blog</> },
        ]}
      >
        <p>Announcements, scholarships, visiting partners and the everyday community work that surrounds our classrooms.</p>
      </PageHero>
        <section className="section section--white">
          <div className="container">
            <article className="feature-news" data-reveal>
              <div className="news-thumb">
                <img src={asset("assets/img/hero.jpg")} alt="A young student reading a book at Rosetta Steps" loading="lazy" decoding="async" width={1600} height={900} />
              </div>
              <div className="news-body">
                <div className="news-meta"><span className="cat">Featured story</span><span>Scholarship recipient</span></div>
                <h3>Isaac’s story: the only one in his family in school</h3>
                <p>When the Rosetta Steps team first met Isaac, he was struggling. His parents could not afford to send him to school. Thanks to a scholarship, he started with us in Grade 1.</p>
                <p>He is now in Grade 4 — with the second-best marks in the school. Isaac is the only one in his family in a classroom, and he hopes that one day his two brothers will also receive scholarships so they can join him.</p>
                <div className="feature-links"><Link className="link-arrow" href="/news-isaac-story/">Read Isaac’s full story <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link><Link className="link-arrow" href="/donate/#sponsor">Sponsor a child like Isaac <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></div>
              </div>
            </article>
          </div>
        </section>
        <section className="section section--cream" data-filter-scope>
          <div className="container">
            <div className="section-head-row">
              <div className="section-head" data-reveal>
                <p className="eyebrow">The archive</p>
                <h2>All news &amp; stories</h2>
                <p><span data-result-count /></p>
              </div>
            </div>
            <div className="filter-bar" data-reveal>
              <button className="chip" type="button" data-filter="all" aria-pressed="true">All stories</button><button className="chip" type="button" data-filter="announcements" aria-pressed="false">Announcements</button><button className="chip" type="button" data-filter="events" aria-pressed="false">Events</button><button className="chip" type="button" data-filter="resources" aria-pressed="false">Educational Resources</button><button className="chip" type="button" data-filter="success" aria-pressed="false">Success Stories</button><button className="chip" type="button" data-filter="community" aria-pressed="false">Community Impact</button>
              <div className="search-field">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx={11} cy={11} r="6.6" /><path d="m16 16 4.6 4.6" /></svg>
                <input type="search" placeholder="Search stories…" aria-label="Search news stories" data-search-input />
              </div>
            </div>
            <div className="grid grid--3" data-admin-stories>
              {NEWS_STORIES.map((story) => (
                <NewsCard key={story.href} {...story} />
              ))}
            </div>
            <div className="empty-state" data-empty-state hidden>
              <h3>No stories match that search</h3>
              <p>Try a different category or a shorter phrase — or browse everything above.</p>
            </div>
          </div>
        </section>
      <CtaStrip
        title={"Keep up with the reading room"}
        lede={"Send us a note and we will add you to the list for termly updates from Caldwell — milestones, events and ways to help."}
        className="section section--white"
        actions={[
          { href: "/contact/", label: "Ask to join the list", variant: "light", arrow: true },
        ]}
      />
      <Script src={asset("/assets/js/public-news.js")} strategy="afterInteractive" />
    </>
  );
}
