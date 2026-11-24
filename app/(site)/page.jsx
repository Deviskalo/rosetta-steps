import Link from "next/link";
import { BASE_PATH, asset } from "../../lib/asset";
import StatsSection from "../../components/site/StatsSection";
import NewsCard from "../../components/site/NewsCard";
import Band from "../../components/site/Band";
import CtaStrip from "../../components/site/CtaStrip";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "Rosetta Steps Education Center Liberia | Quality Education in Caldwell, Montserrado",
  description: "Rosetta Steps Education Center is a preschool to Grade 6 school on Caldwell Road, Bushrod Island, Montserrado County, Liberia, offering quality education, literacy programmes, scholarships and community learning for children and families.",
  keywords: "Schools in Liberia, Caldwell schools, Education in Monrovia, Literacy programs Liberia, Preschool Liberia, Primary school Liberia, Rosetta Steps Education Center",
  robots: "index, follow",
  alternates: { canonical: `${BASE_PATH}/` },
  openGraph: {
    type: "website",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "Rosetta Steps Education Center Liberia | Quality Education in Caldwell, Montserrado",
    description: "Rosetta Steps Education Center is a preschool to Grade 6 school on Caldwell Road, Bushrod Island, Montserrado County, Liberia, offering quality education, literacy programmes, scholarships and community learning for children and families.",
    url: `${BASE_PATH}/`,
    images: [url("/assets/img/hero.jpg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rosetta Steps Education Center Liberia | Quality Education in Caldwell, Montserrado",
    description: "Rosetta Steps Education Center is a preschool to Grade 6 school on Caldwell Road, Bushrod Island, Montserrado County, Liberia, offering quality education, literacy programmes, scholarships and community learning for children and families.",
    images: [url("/assets/img/hero.jpg")]
  }
};

const HOME_STORIES = [
  {
    image: "assets/img/about-students.jpg",
    alt: "Renewed Hope for a Brighter Future",
    category: "Success Stories",
    date: "1 February 2024",
    title: "Renewed Hope for a Brighter Future",
    excerpt:
      "Philanthropist Joyce Frankfort has given student Alphonso Fawundu a place back at Rosetta Steps after his family could no longer afford school fees."
  },
  {
    image: "assets/img/welcome.jpg",
    alt: "Period With Pride delivers over 100 pads to our students",
    category: "Community Impact",
    date: "9 July 2024",
    title: "Period With Pride delivers over 100 pads to our students",
    excerpt:
      "Student-led initiative Period With Pride visited our campus to talk about menstrual hygiene and donate more than a hundred sanitary pads."
  },
  {
    image: "assets/img/reading.jpg",
    alt: "A year of food for 55 children: the AKA Power Packs pilot",
    category: "Community Impact",
    date: "7 December 2023",
    title: "A year of food for 55 children: the AKA Power Packs pilot",
    excerpt:
      "The Alpha Kappa Alpha Eta Beta Omega Chapter chose Rosetta Steps as the pilot school for its Childhood Hunger Initiative."
  }
];

export default function Page() {
  return (
    <>
      <section className="hero">
          <div className="shape shape--blob" style={{width: 340, height: 340, right: '-80px', top: '-60px'}} aria-hidden="true" />
          <div className="shape shape--ring" style={{width: 210, height: 210, left: '36%', bottom: '-80px'}} aria-hidden="true" />
          <div className="shape shape--dots" style={{width: 110, height: 110, left: '1%', top: '26%'}} aria-hidden="true" />
          <div className="shape shape--spark" style={{left: '52%', top: '8%'}} aria-hidden="true" />
          <div className="shape shape--spark" style={{right: '4%', bottom: '22%', animationDelay: '1.4s'}} aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Caldwell Road, Bushrod Island · Liberia</p>
              <h1>
                <span className="hero-line">Empowering</span>
                <span className="hero-line"><em>Liberia's Future</em></span>
                <span className="hero-line">Through Quality Education</span>
              </h1>
              <p className="lede">A school and learning centre in Caldwell, founded in 2014 to give children from low-income families the quality education they deserve — and the literacy that unlocks it.</p>
              <div className="btn-group">
                <Link className="btn btn--primary" href="/admissions/">Enroll Today <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link>
                <Link className="btn btn--ghost" href="/donate/">Support Our Mission <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20.8 5.6a5.1 5.1 0 0 0-7.2 0L12 7.2l-1.6-1.6a5.1 5.1 0 1 0-7.2 7.2L12 21l8.8-8.2a5.1 5.1 0 0 0 0-7.2Z" /></svg></Link>
              </div>
              <div className="hero-note">
                <div className="avatars" aria-hidden="true">
                  <span style={{background: '#C2316F'}}>GW</span>
                  <span style={{background: '#C8B391', color: '#3E2E25'}}>EK</span>
                  <span style={{background: '#5A4336'}}>MS</span>
                  <span style={{background: '#D4AF37', color: '#3E2E25'}}>+</span>
                </div>
                <p><b>A community of learners</b> since 2014 — preschool through Grade 6.</p>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-frame">
                <img src={asset("assets/img/hero.jpg")} alt="Liberian children learning together in a bright classroom at Rosetta Steps Education Center" width={1200} height={648} fetchPriority="high" decoding="async" />
              </div>
              <div className="hero-chip">Preschool <b>·</b> Grade 6</div>
              <div className="hero-badge">
                <span className="badge-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 6.6C10.4 5.2 8.2 4.6 5.4 4.8v13c2.8-.2 5 .4 6.6 1.7 1.6-1.3 3.8-1.9 6.6-1.7v-13c-2.8-.2-5 .4-6.6 1.7Z" /><path d="M12 6.6v13" /></svg></span>
                <div>
                  <strong>Literacy that lasts</strong>
                  <span>Read to Succeed runs every afternoon</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <StatsSection
          label="Our impact at a glance"
          stats={[
            { icon: "users", value: "175", count: 175, label: "Children our campus can serve" },
            { icon: "cap", value: "8", count: 8, label: "Grade levels · ABC1 to Grade 6" },
            { icon: "book", value: "3", count: 3, label: "Community literacy programmes" },
            { icon: "heart", value: "2014", label: "Founded in Caldwell, Liberia" },
          ]}
        />
        <section className="section section--white">
          <div className="container split">
            <div data-reveal="left">
              <p className="eyebrow">Who we are</p>
              <h2>A school built around <span className="text-accent">every child's</span> possibility</h2>
              <p>Rosetta Steps Education Center began in 2014, when <strong>Ama Harris</strong> turned her mother's childhood home into a reading room for children in the Duala community. The school opened two years later and is named for Ama's mother, <strong>Rosetta Benson Harris</strong> — a much-loved Liberian educator.</p>
              <p>We teach the Revised Liberian National Curriculum combined with the Common Core State Standards, all in English and adapted to the lives of our students. Classes are interactive and warm: every child is known by name, and the doors stay open long after the last bell.</p>
              <div className="values-grid">
                <div className="value-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx={12} cy={12} r="8.6" /><circle cx={12} cy={12} r="4.6" /><circle cx={12} cy={12} r={1} /></svg><div>Our Mission<small>To empower and educate as many Liberian youth and families in need as we can — because education is a human right and the best means of combatting inequality, poverty and discrimination.</small></div></div>
                <div className="value-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx={12} cy={12} r={9} /><path d="M3.2 9h17.6M3.2 15h17.6" /><path d="M12 3c2.4 2.4 3.7 5.5 3.7 9S14.4 18.6 12 21c-2.4-2.4-3.7-5.5-3.7-9S9.6 5.4 12 3Z" /></svg><div>Our Vision<small>A Liberia where the potential for greatness in every child is recognised, nurtured and given room to grow.</small></div></div>
              </div>
              <div className="pullquote">
                “We believe that the children of Liberia all have the potential for greatness.”
                <cite>Rosetta Steps Education Center</cite>
              </div>
              <div className="badge-row">
                <span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Education for All</span>
                <span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Need-based scholarships</span>
              </div>
              <p style={{marginTop: 26}}><Link className="link-arrow" href="/about/">Read our full story <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
            </div>
            <div className="media-stack" data-reveal="right">
              <div className="media-main">
                <img src={asset("assets/img/about-students.jpg")} alt="Students and teachers working together at Rosetta Steps" loading="lazy" decoding="async" width={1200} height={900} />
              </div>
              <div className="media-inset">
                <img src={asset("assets/img/welcome.jpg")} alt="A young learner raising her hand in class" loading="lazy" decoding="async" width={480} height={640} />
              </div>
              <div className="media-badge"><b>P–6</b><span>Preschool through Grade 6, one campus</span></div>
            </div>
          </div>
        </section>
        <section className="section section--cream">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="eyebrow">What we offer</p>
              <h2>Programmes that meet a child where they are</h2>
              <p>From first steps in preschool to Grade 6 leadership, and on to the adults who raise them — our programmes grow with the whole family.</p>
            </div>
            <div className="grid grid--3">
              <article className="card" data-reveal data-delay={0}>
                <div className="card-media">
                  <span className="card-tag">Ages 18 months – 3 years · ABC1 &amp; ABC2</span>
                  <img src={asset("assets/img/preschool.jpg")} alt="Preschool at Rosetta Steps Education Center" loading="lazy" decoding="async" width={1200} height={900} />
                </div>
                <div className="card-body">
                  <h3>Preschool</h3>
                  <p>Letters, numbers, pencil control and the social skills that come before formal school — taught by a team of four teachers.</p>
                  <div className="card-foot">
                    <Link className="link-arrow" href="/academics/#preschool">Explore programme <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link>
                  </div>
                </div>
              </article><article className="card" data-reveal data-delay={90}>
                <div className="card-media">
                  <span className="card-tag">K1 &amp; K2</span>
                  <img src={asset("assets/img/kindergarten.jpg")} alt="Kindergarten at Rosetta Steps Education Center" loading="lazy" decoding="async" width={1200} height={900} />
                </div>
                <div className="card-body">
                  <h3>Kindergarten</h3>
                  <p>Play, singing and craft blended with basic mathematics, language arts, phonemic awareness and science.</p>
                  <div className="card-foot">
                    <Link className="link-arrow" href="/academics/#kindergarten">Explore programme <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link>
                  </div>
                </div>
              </article><article className="card" data-reveal data-delay={180}>
                <div className="card-media">
                  <span className="card-tag">Grades 1 – 6</span>
                  <img src={asset("assets/img/grade-school.jpg")} alt="Grade School at Rosetta Steps Education Center" loading="lazy" decoding="async" width={1200} height={900} />
                </div>
                <div className="card-body">
                  <h3>Grade School</h3>
                  <p>The Revised Liberian National Curriculum combined with Common Core standards — fourteen subjects, all taught in English.</p>
                  <div className="card-foot">
                    <Link className="link-arrow" href="/academics/#grade-school">Explore programme <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link>
                  </div>
                </div>
              </article><article className="card" data-reveal data-delay={0}>
                <div className="card-media">
                  <span className="card-tag">After school · open to all local pupils</span>
                  <img src={asset("assets/img/reading.jpg")} alt="Read to Succeed at Rosetta Steps Education Center" loading="lazy" decoding="async" width={1200} height={900} />
                </div>
                <div className="card-body">
                  <h3>Read to Succeed</h3>
                  <p>An after-school reading programme for pupils from other schools and children in the community, built on the EGRA assessment.</p>
                  <div className="card-foot">
                    <Link className="link-arrow" href="/literacy/#read-to-succeed">Explore programme <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link>
                  </div>
                </div>
              </article><article className="card" data-reveal data-delay={90}>
                <div className="card-media">
                  <span className="card-tag">Saturdays · 9:00am – 12:00pm</span>
                  <img src={asset("assets/img/play.jpg")} alt="Learn Through Play at Rosetta Steps Education Center" loading="lazy" decoding="async" width={1200} height={900} />
                </div>
                <div className="card-body">
                  <h3>Learn Through Play</h3>
                  <p>A free weekend of informal learning and socialising for local children — most of whom have no exposure to formal education.</p>
                  <div className="card-foot">
                    <Link className="link-arrow" href="/literacy/#learn-through-play">Explore programme <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link>
                  </div>
                </div>
              </article><article className="card" data-reveal data-delay={180}>
                <div className="card-media">
                  <span className="card-tag">Adults &amp; caregivers</span>
                  <img src={asset("assets/img/adult.jpg")} alt="Learn to Earn at Rosetta Steps Education Center" loading="lazy" decoding="async" width={1200} height={900} />
                </div>
                <div className="card-body">
                  <h3>Learn to Earn</h3>
                  <p>Literacy and life-skills training for adults: reading, writing, numeracy, parenting and computer literacy.</p>
                  <div className="card-foot">
                    <Link className="link-arrow" href="/literacy/#learn-to-earn">Explore programme <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link>
                  </div>
                </div>
              </article>
            </div>
            <p style={{marginTop: 36, textAlign: 'center'}}><Link className="btn btn--ghost" href="/academics/">See all academic programmes <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
          </div>
        </section>
        <section className="section section--white">
          <div className="container">
            <div className="section-head-row">
              <div className="section-head" data-reveal>
                <p className="eyebrow">Student success stories</p>
                <h2>Real children. Real progress.</h2>
                <p>Scholarships and after-school literacy change trajectories. These are a few of the journeys our community made possible.</p>
              </div>
              <Link className="link-arrow" href="/news/" data-reveal>More success stories <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link>
            </div>
            <div className="carousel" data-carousel aria-roledescription="carousel" aria-label="Student success stories">
              <div className="carousel-viewport" tabIndex={0} aria-label="Student stories, use the left and right arrow keys to browse">
                <div className="carousel-track">
                  <div className="slide" role="group" aria-roledescription="slide" aria-label="1 of 3">
                    <article className="story">
                      <div className="story-media">
                        <div className="story-initials" aria-hidden="true">IB</div>
                        <span className="card-tag">Scholarship recipient</span>
                      </div>
                      <div className="story-body">
                        <span className="quote-mark" aria-hidden="true">“</span>
                        <blockquote className="story-quote">When our team first met Isaac, his parents could not afford to send him to school. A scholarship brought him to Rosetta Steps in Grade 1. He is now in Grade 4 with the second-best marks in the school — the only one in his family in a classroom, and he hopes his two brothers will one day join him.</blockquote>
                        <div className="story-person">
                          <span className="avatar" aria-hidden="true">IB</span>
                          <div>
                            <strong>Isaac Buston</strong>
                            <span>Grade 4 · Scholarship recipient since Grade 1</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>            <div className="slide" role="group" aria-roledescription="slide" aria-label="2 of 3">
                    <article className="story">
                      <div className="story-media">
                        <div className="story-initials" aria-hidden="true">AF</div>
                        <span className="card-tag">Scholarship recipient</span>
                      </div>
                      <div className="story-body">
                        <span className="quote-mark" aria-hidden="true">“</span>
                        <blockquote className="story-quote">Alphonso’s father sells shoes in the market, and the family could not keep him in school. A gift from philanthropist Joyce Frankfort put him back in class at Rosetta Steps, and his dream of finishing school is back on track.</blockquote>
                        <div className="story-person">
                          <span className="avatar" aria-hidden="true">AF</span>
                          <div>
                            <strong>Alphonso Fawundu</strong>
                            <span>Student · Scholarship awarded 2024</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>            <div className="slide" role="group" aria-roledescription="slide" aria-label="3 of 3">
                    <article className="story">
                      <div className="story-media">
                        <div className="story-initials" aria-hidden="true">8</div>
                        <span className="card-tag">Class of 2020</span>
                      </div>
                      <div className="story-body">
                        <span className="quote-mark" aria-hidden="true">“</span>
                        <blockquote className="story-quote">Eight children began the 2020 school year on full scholarship: Caroline Wisseh, Prince Moses, Jackson Carr, Korpo Jallah, Clarence Anderson, Tina Sheriff, Jerry Sackie and Isaac Buston. Every one of them is still learning.</blockquote>
                        <div className="story-person">
                          <span className="avatar" aria-hidden="true">8</span>
                          <div>
                            <strong>Our 2020 scholars</strong>
                            <span>Grades 1–5 · Funded by donors like you</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="carousel-controls">
                <div className="carousel-dots" role="group" aria-label="Choose a story" />
                <div className="carousel-arrows">
                  <button className="icon-btn" type="button" data-carousel-prev aria-label="Previous story"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="m14.5 5-7 7 7 7" /></svg></button>
                  <button className="icon-btn" type="button" data-carousel-next aria-label="Next story"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="m9.5 5 7 7-7 7" /></svg></button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section--soft">
          <div className="container">
            <div className="section-head-row">
              <div className="section-head" data-reveal>
                <p className="eyebrow">Latest news &amp; events</p>
                <h2>Life at Rosetta Steps</h2>
                <p>Celebrations, reading milestones, community days and the everyday moments that make a school feel like a family.</p>
              </div>
              <Link className="btn btn--ghost btn--sm" href="/news/" data-reveal>All news &amp; events <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link>
            </div>
            <div className="grid grid--3">
              {HOME_STORIES.map((story, index) => (
                <NewsCard key={story.title} mode="teaser" delay={index * 90} {...story} />
              ))}
            </div>
          </div>
        </section>
        <Band
          eyebrow="Make a difference"
          title="Help Change a Child's Future"
          actions={[
            { href: "/donate/", label: "Donate Now", variant: "light", arrow: true },
            { href: "/donate/#sponsor", label: "Become a Sponsor", variant: "outline-light" },
          ]}
          chips={[
            { value: "$280", label: "Sponsor one full year of school for a child" },
            { value: "$40", label: "A month of internet for the whole school" },
            { value: "$125", label: "An educational trip for a class of 25" },
            { value: "$200", label: "IXL online learning for a class of 25" },
          ]}
        >
          <p>All gifts are received by the Rosetta Steps Education Foundation, which covers the running costs of the school. Every contribution makes an incredible impact.</p>
        </Band>
        <CtaStrip
          title="Ready to see the school for yourself?"
          lede="Book a visit, meet a teacher and walk the classrooms. We would love to meet your family."
          actions={[
            { href: "/admissions/", label: "Begin enrolment", variant: "light", arrow: true },
            { href: "/contact/", label: "Ask a question", variant: "outline-light" },
          ]}
        />
    </>
  );
}
