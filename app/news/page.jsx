import Script from "next/script";
import Link from "next/link";
import { BASE_PATH, asset } from "../../lib/asset";

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

export default function Page() {
  return (
    <>
      <section className="page-hero">
          <div className="shape shape--dots" style={{width: 130, height: 130, right: '8%', top: '18%'}} aria-hidden="true" />
          <div className="shape shape--ring" style={{width: 190, height: 190, right: '16%', bottom: '8%'}} aria-hidden="true" />
          <div className="shape shape--spark" style={{left: '46%', top: '22%'}} aria-hidden="true" />
          <div className="container">
            <div className="page-hero-inner" data-reveal>
              <ol className="breadcrumb"><li><Link href="/">Home</Link></li><li aria-current="page">News &amp; Blog</li></ol>
              <p className="eyebrow">News &amp; blog</p>
              <h1>News, events &amp; <span className="text-accent">stories</span> from Caldwell</h1>
              <p>Announcements, scholarships, visiting partners and the everyday community work that surrounds our classrooms.</p>
            </div>
          </div>
        </section>
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
            <div className="grid grid--3" data-admin-stories><article className="news-card" data-category="success" data-search="Renewed Hope for a Brighter Future Success Stories Philanthropist Joyce Frankfort has put student Alphonso Fawundu back in school after his family could no longer afford fees." data-reveal data-delay={0}>
                <div className="news-thumb"><img src={asset("assets/img/about-students.jpg")} alt="Renewed Hope for a Brighter Future" loading="lazy" decoding="async" width={1200} height={900} /></div>
                <div className="news-body">
                  <div className="news-meta"><span className="cat">Success Stories</span><span>1 February 2024</span></div>
                  <h3>Renewed Hope for a Brighter Future</h3>
                  <p>Philanthropist Joyce Frankfort has put student Alphonso Fawundu back in school after his family could no longer afford fees.</p>
                  <p className="news-read"><Link className="link-arrow" href="/news-renewed-hope/">Read story <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
                </div>
              </article><article className="news-card" data-category="community" data-search="Period With Pride delivers over 100 pads to our students Community Impact A student-led initiative visited campus to tackle period poverty and talk about menstrual hygiene with our girls." data-reveal data-delay={80}>
                <div className="news-thumb"><img src={asset("assets/img/welcome.jpg")} alt="Period With Pride delivers over 100 pads to our students" loading="lazy" decoding="async" width={1200} height={900} /></div>
                <div className="news-body">
                  <div className="news-meta"><span className="cat">Community Impact</span><span>9 July 2024</span></div>
                  <h3>Period With Pride delivers over 100 pads to our students</h3>
                  <p>A student-led initiative visited campus to tackle period poverty and talk about menstrual hygiene with our girls.</p>
                  <p className="news-read"><Link className="link-arrow" href="/news-period-with-pride/">Read story <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
                </div>
              </article><article className="news-card" data-category="community" data-search="A year of food for 55 children: the AKA Power Packs pilot Community Impact The Alpha Kappa Alpha Eta Beta Omega Chapter chose Rosetta Steps as the pilot school for its Childhood Hunger Initiative." data-reveal data-delay={160}>
                <div className="news-thumb"><img src={asset("assets/img/reading.jpg")} alt="A year of food for 55 children: the AKA Power Packs pilot" loading="lazy" decoding="async" width={1200} height={900} /></div>
                <div className="news-body">
                  <div className="news-meta"><span className="cat">Community Impact</span><span>7 December 2023</span></div>
                  <h3>A year of food for 55 children: the AKA Power Packs pilot</h3>
                  <p>The Alpha Kappa Alpha Eta Beta Omega Chapter chose Rosetta Steps as the pilot school for its Childhood Hunger Initiative.</p>
                  <p className="news-read"><Link className="link-arrow" href="/news-aka-power-packs/">Read story <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
                </div>
              </article><article className="news-card" data-category="community" data-search="Forleh Foundation donates a drone, books, bags and pads Community Impact Ms. Marjorie Forleh’s foundation equipped our Grade 3 reading unit and our library in a single visit." data-reveal data-delay={0}>
                <div className="news-thumb"><img src={asset("assets/img/adult.jpg")} alt="Forleh Foundation donates a drone, books, bags and pads" loading="lazy" decoding="async" width={1200} height={900} /></div>
                <div className="news-body">
                  <div className="news-meta"><span className="cat">Community Impact</span><span>7 February 2024</span></div>
                  <h3>Forleh Foundation donates a drone, books, bags and pads</h3>
                  <p>Ms. Marjorie Forleh’s foundation equipped our Grade 3 reading unit and our library in a single visit.</p>
                  <p className="news-read"><Link className="link-arrow" href="/news-forleh-foundation/">Read story <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
                </div>
              </article><article className="news-card" data-category="events" data-search="Dr. Mark Sinke trains our teachers and donates a printer Events A visit from Empowerment Squared Canada left our staff with new techniques and the school with a working printer." data-reveal data-delay={80}>
                <div className="news-thumb"><img src={asset("assets/img/banner-about.jpg")} alt="Dr. Mark Sinke trains our teachers and donates a printer" loading="lazy" decoding="async" width={1200} height={900} /></div>
                <div className="news-body">
                  <div className="news-meta"><span className="cat">Events</span><span>20 July 2023</span></div>
                  <h3>Dr. Mark Sinke trains our teachers and donates a printer</h3>
                  <p>A visit from Empowerment Squared Canada left our staff with new techniques and the school with a working printer.</p>
                  <p className="news-read"><Link className="link-arrow" href="/news-mark-sinke-training/">Read story <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
                </div>
              </article><article className="news-card" data-category="announcements" data-search="Meet our 2020 scholarship recipients Announcements Eight children began the 2020 school year on full scholarship, from Grade 1 through Grade 5." data-reveal data-delay={160}>
                <div className="news-thumb"><img src={asset("assets/img/play.jpg")} alt="Meet our 2020 scholarship recipients" loading="lazy" decoding="async" width={1200} height={900} /></div>
                <div className="news-body">
                  <div className="news-meta"><span className="cat">Announcements</span><span>2020</span></div>
                  <h3>Meet our 2020 scholarship recipients</h3>
                  <p>Eight children began the 2020 school year on full scholarship, from Grade 1 through Grade 5.</p>
                  <p className="news-read"><Link className="link-arrow" href="/news-2020-scholarships/">Read story <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
                </div>
              </article><article className="news-card" data-category="resources" data-search="How we use the Early Grade Reading Assessment Educational Resources EGRA is not an exam. It is a fifteen-minute conversation with a reader that tells us exactly which skill to teach next." data-reveal data-delay={0}>
                <div className="news-thumb"><img src={asset("assets/img/preschool.jpg")} alt="How we use the Early Grade Reading Assessment" loading="lazy" decoding="async" width={1200} height={900} /></div>
                <div className="news-body">
                  <div className="news-meta"><span className="cat">Educational Resources</span><span>Evergreen guide</span></div>
                  <h3>How we use the Early Grade Reading Assessment</h3>
                  <p>EGRA is not an exam. It is a fifteen-minute conversation with a reader that tells us exactly which skill to teach next.</p>
                  <p className="news-read"><Link className="link-arrow" href="/news-egra-guide/">Read story <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
                </div>
              </article><article className="news-card" data-category="events" data-search="Learn Through Play: every Saturday, 9am to 12pm Events Our gates open free of charge to children from the community for a morning of learning disguised as play." data-reveal data-delay={80}>
                <div className="news-thumb"><img src={asset("assets/img/kindergarten.jpg")} alt="Learn Through Play: every Saturday, 9am to 12pm" loading="lazy" decoding="async" width={1200} height={900} /></div>
                <div className="news-body">
                  <div className="news-meta"><span className="cat">Events</span><span>Every week</span></div>
                  <h3>Learn Through Play: every Saturday, 9am to 12pm</h3>
                  <p>Our gates open free of charge to children from the community for a morning of learning disguised as play.</p>
                  <p className="news-read"><Link className="link-arrow" href="/news-learn-through-play/">Read story <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
                </div>
              </article>
            </div>
            <div className="empty-state" data-empty-state hidden>
              <h3>No stories match that search</h3>
              <p>Try a different category or a shorter phrase — or browse everything above.</p>
            </div>
          </div>
        </section>
        <section className="section section--white">
          <div className="container">
            <div className="cta-strip" data-reveal="scale">
              <div>
                <h2>Keep up with the reading room</h2>
                <p>Send us a note and we will add you to the list for termly updates from Caldwell — milestones, events and ways to help.</p>
              </div>
              <div className="btn-group">
                <Link className="btn btn--light" href="/contact/">Ask to join the list <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link>
              </div>
            </div>
          </div>
        </section>
      <Script src={asset("/assets/js/public-news.js")} strategy="afterInteractive" />
    </>
  );
}
