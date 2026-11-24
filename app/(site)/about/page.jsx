import Link from "next/link";
import { BASE_PATH, asset } from "../../../lib/asset";
import PageHero from "../../../components/site/PageHero";
import CtaStrip from "../../../components/site/CtaStrip";
import Band from "../../../components/site/Band";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "About Us | Rosetta Steps Education Center, Caldwell Road, Liberia",
  description: "Learn the story, mission, vision and values of Rosetta Steps Education Center — a community school on Caldwell Road, Bushrod Island, founded in honour of educator Rosetta Benson Harris.",
  keywords: "Schools in Liberia, Caldwell schools, Education in Monrovia, Literacy programs Liberia, Preschool Liberia, Primary school Liberia, Rosetta Steps Education Center",
  robots: "index, follow",
  alternates: { canonical: `${BASE_PATH}/about/` },
  openGraph: {
    type: "website",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "About Us | Rosetta Steps Education Center, Caldwell Road, Liberia",
    description: "Learn the story, mission, vision and values of Rosetta Steps Education Center — a community school on Caldwell Road, Bushrod Island, founded in honour of educator Rosetta Benson Harris.",
    url: `${BASE_PATH}/about/`,
    images: [url("/assets/img/hero.jpg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Rosetta Steps Education Center, Caldwell Road, Liberia",
    description: "Learn the story, mission, vision and values of Rosetta Steps Education Center — a community school on Caldwell Road, Bushrod Island, founded in honour of educator Rosetta Benson Harris.",
    images: [url("/assets/img/hero.jpg")]
  }
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow={"About Rosetta Steps"}
        title={<>It takes a community to raise a <span className="text-accent">community</span></>}
        crumbs={[
          { label: "About Us" },
        ]}
      >
        <p>That has been our motto since 2014, when one reading room in Duala became a school — and a neighbourhood began to believe in its children.</p>
      </PageHero>
        <section className="section section--white">
          <div className="container split split--media-right">
            <div data-reveal="left">
              <p className="eyebrow">Our story</p>
              <h2>From one reading room to a school of 175</h2>
              <p>Rosetta Steps Education Center was founded in 2014 by <strong>Ama Harris</strong>. Parents in the Duala community were desperate for help: their children were not learning to read, and there was nowhere affordable to turn. Seeing the need, Ama transformed her mother's childhood home into the organisation's base.</p>
              <p>A reading room opened in 2015, equipped with books, computers, televisions and other learning aids. The school formally opened in <strong>2016</strong> and has continued to grow in size, scope, quality and impact.</p>
              <p>In 2020, in response to demand, we moved into a purpose-built campus that can hold <strong>175 students</strong>, with seven classrooms, a science lab, a library and staff offices. Families now walk to us from Caldwell, Duala and the surrounding communities. Some pay full fees, many learn on scholarship, and all share the same classrooms, the same books and the same high expectations.</p>
              <div className="pullquote">
                “It takes a community to raise a community.”
                <cite>Our motto since 2014</cite>
              </div>
            </div>
            <div className="media-stack" data-reveal="right">
              <div className="media-main">
                <img src={asset("assets/img/banner-about.jpg")} alt="Students and teachers of Rosetta Steps Education Center with their hands raised" loading="lazy" decoding="async" width={1600} height={572} />
              </div>
              <div className="media-inset">
                <img src={asset("assets/img/welcome.jpg")} alt="A young learner raising her hand in class" loading="lazy" decoding="async" width={480} height={640} />
              </div>
              <div className="media-badge"><b>Est. 2014</b><span>One campus in Caldwell, Montserrado County</span></div>
            </div>
          </div>
        </section>
        <section className="section section--cream">
          <div className="container split">
            <div data-reveal="left">
              <p className="eyebrow">Milestones</p>
              <h2>Twelve years, one steady step at a time</h2>
              <p>We add a grade only when we can staff it well, and we open a programme only when the community asks for it. That is why the growth has been slow, deliberate and lasting.</p>
              <ul className="timeline" style={{marginTop: 30}}>
                <li>
                  <span className="timeline-year">2014</span>
                  <h3>The centre is founded</h3>
                  <p>Ama Harris opens Rosetta Steps in her mother's childhood home in Duala, named for educator Rosetta Benson Harris.</p>
                </li>
                <li>
                  <span className="timeline-year">2015</span>
                  <h3>The reading room opens</h3>
                  <p>Books, computers, televisions and learning aids arrive. Children from the neighbourhood begin to read after school.</p>
                </li>
                <li>
                  <span className="timeline-year">2016</span>
                  <h3>The school opens its doors</h3>
                  <p>Rosetta Steps becomes a formal school, from preschool upward, teaching in English at a cost families can reach.</p>
                </li>
                <li>
                  <span className="timeline-year">2020</span>
                  <h3>A purpose-built campus</h3>
                  <p>Seven classrooms, a science lab, a library and staff offices — room for 175 students and the programmes that surround them.</p>
                </li>
              </ul>
            </div>
            <div data-reveal="right">
              <div className="media-main" style={{aspectRatio: '4/4.4'}}>
                <img src={asset("assets/img/reading.jpg")} alt="A teacher reading with a student at Rosetta Steps" loading="lazy" decoding="async" width={1200} height={800} />
              </div>
              <div className="media-badge" style={{marginTop: 20}}><b>175</b><span>Students our campus is built to serve</span></div>
            </div>
          </div>
        </section>
        <section className="section section--white">
          <div className="container">
            <div className="grid grid--2">
              <article className="value-card" data-reveal="left" style={{padding: 'clamp(28px,3.4vw,44px)'}}>
                <div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx={12} cy={12} r="8.6" /><circle cx={12} cy={12} r="4.6" /><circle cx={12} cy={12} r={1} /></svg></div>
                <h2 style={{fontSize: 'clamp(1.6rem,2.4vw,2.1rem)'}}>Our Mission</h2>
                <p style={{fontSize: '1.02rem'}}>To empower and educate as many Liberian youth and families in need as we can. We are founded on the belief that education is a human right and the best means of combatting inequality, poverty and discrimination.</p>
                <ul className="checked-list">
                  <li>Teach every child to read fluently and with understanding.</li>
                  <li>Keep quality education affordable for low-income families.</li>
                  <li>Support teachers with training, materials and respect.</li>
                </ul>
              </article>
              <article className="value-card" data-reveal="right" style={{padding: 'clamp(28px,3.4vw,44px)'}}>
                <div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx={12} cy={12} r={9} /><path d="M3.2 9h17.6M3.2 15h17.6" /><path d="M12 3c2.4 2.4 3.7 5.5 3.7 9S14.4 18.6 12 21c-2.4-2.4-3.7-5.5-3.7-9S9.6 5.4 12 3Z" /></svg></div>
                <h2 style={{fontSize: 'clamp(1.6rem,2.4vw,2.1rem)'}}>Our Vision</h2>
                <p style={{fontSize: '1.02rem'}}>A Liberia where the potential for greatness in every child is recognised, nurtured and given room to grow — and where education is never rationed by family income.</p>
                <ul className="checked-list">
                  <li>Literacy as a right, not a privilege.</li>
                  <li>Schools that anchor their communities.</li>
                  <li>A generation of confident Liberian leaders.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section className="section section--cream">
          <div className="container">
            <div className="section-head section-head--center" data-reveal>
              <p className="eyebrow eyebrow--center">Core values</p>
              <h2>Six commitments we keep every day</h2>
              <p>These are not posters on a wall. They are the questions we ask ourselves when we plan a lesson, hire a teacher or welcome a new family.</p>
            </div>
            <div className="grid grid--3">
              <article className="value-card" data-reveal data-delay={0}>
                <div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx={12} cy={12} r={9} /><path d="M3.2 9h17.6M3.2 15h17.6" /><path d="M12 3c2.4 2.4 3.7 5.5 3.7 9S14.4 18.6 12 21c-2.4-2.4-3.7-5.5-3.7-9S9.6 5.4 12 3Z" /></svg></div>
                <h3>Education for All</h3>
                <p>Every child in Liberia, whatever their social or economic status, deserves an education that sets them up for success in life.</p>
              </article><article className="value-card" data-reveal data-delay={70}>
                <div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx={12} cy={12} r="8.6" /><circle cx={12} cy={12} r="4.6" /><circle cx={12} cy={12} r={1} /></svg></div>
                <h3>High expectations</h3>
                <p>We adapt international-standard reading and writing materials to our context — and then we expect every learner to meet them.</p>
              </article><article className="value-card" data-reveal data-delay={140}>
                <div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M16 20v-1.6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" /><circle cx="9.5" cy={7} r="3.3" /><path d="M17 4.2a3.3 3.3 0 0 1 0 6.3" /><path d="M20.5 20v-1.6a4 4 0 0 0-3-3.8" /></svg></div>
                <h3>Community</h3>
                <p>Teachers, parents, administrators, volunteers, donors and mentors all pull in the same direction: the child.</p>
              </article><article className="value-card" data-reveal data-delay={210}>
                <div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 3.2 19.3 6v5c0 4.2-2.9 8-7.3 9.7C7.6 19 4.7 15.2 4.7 11V6L12 3.2Z" /><path d="m8.9 11.6 2.1 2.1 4-4" /></svg></div>
                <h3>Integrity</h3>
                <p>We are transparent with families, donors and partners, and we keep our promises.</p>
              </article><article className="value-card" data-reveal data-delay={280}>
                <div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 20.5 5.2 13.9a4 4 0 0 1 5.6-5.6l1.2 1.2 1.2-1.2a4 4 0 0 1 5.6 5.6L12 20.5Z" /><path d="M7 9.5c-1.6-1.4-2-3.6-.8-5.2" /></svg></div>
                <h3>Compassion</h3>
                <p>We support our students' mental and emotional health, and we make school a safe place where every child feels known and valued.</p>
              </article><article className="value-card" data-reveal data-delay={350}>
                <div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 21v-7" /><path d="M12 14c0-4 3-7 7.2-7 0 4-3 7-7.2 7Z" /><path d="M12 16.5c0-3.1-2.5-5.6-5.7-5.6 0 3.1 2.5 5.6 5.7 5.6Z" /></svg></div>
                <h3>Lifelong learning</h3>
                <p>Children, teachers and parents keep learning. A school should never stop growing.</p>
              </article>
            </div>
          </div>
        </section>
        <section className="section section--soft">
          <div className="container split">
            <div className="media-stack" data-reveal="left">
              <div className="media-main">
                <img src={asset("assets/img/play.jpg")} alt="Children celebrating together at a Saturday club" loading="lazy" decoding="async" width={1100} height={760} />
              </div>
              <div className="media-badge"><b>Every child</b><span>Education for All philosophy</span></div>
            </div>
            <div data-reveal="right">
              <p className="eyebrow">Education for All</p>
              <h2>Access is the beginning, not the finish line</h2>
              <p>More than half of our students' parents are unlettered, and most homes have no electricity, computer or television to support learning. Many of our students would otherwise have been kept at home to carry out chores or child labour.</p>
              <p>Our answer is not to lower the bar. It is to remove every obstacle in front of it:</p>
              <ul className="checked-list">
                <li><strong>English-medium teaching</strong> with reading and writing materials adapted to the lives of our students.</li>
                <li><strong>Well-equipped teachers</strong> with the resources to build a good classroom environment.</li>
                <li><strong>Interactive lessons</strong> built on the “I Do, We Do, You Do” model of foundational learning.</li>
                <li><strong>Scholarships and fee support</strong> so that roughly $280 a school year never decides a child's future.</li>
                <li><strong>A safe, inclusive campus</strong> where every child is known by name.</li>
              </ul>
              <p style={{marginTop: 24}}><Link className="btn btn--primary" href="/donate/">Fund a scholarship <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
            </div>
          </div>
        </section>
        <section className="section section--white">
          <div className="container">
            <div className="founder" data-reveal="scale">
              <div className="founder-photo">
                <img src={asset("assets/img/founder.jpg")} alt="Ama Harris, founder and executive director of Rosetta Steps Education Center" loading="lazy" decoding="async" width={900} height={1150} />
              </div>
              <div className="founder-body">
                <p className="eyebrow">Leadership</p>
                <h2>Ama Harris</h2>
                <span className="founder-role">Founder &amp; Executive Director</span>
                <p>Ama Harris is the daughter of Rosetta Benson and a Liberian committed to community development and education. In 2014 she turned her mother's childhood home into the base for Rosetta Steps — and has led its growth ever since.</p>
                <p>Alongside the school, Ama is an executive in the travel and tourism industry and the owner of Xquisite Liberia. She holds a Bachelor of Business Administration in Management from Stella Maris Polytechnic University (Arthur Barclay Business College) and a Travel and Tourism Consultant Diploma with the International Air Transport Association.</p>
                <p>A French and English speaker and a proud member of the Rotary Club of Liberia, Ama's leadership is the driving force behind the growth and impact of Rosetta Steps Education Center.</p>
                <p className="founder-signature">Ama Harris</p>
              </div>
            </div>
          </div>
        </section>
        <Band
          eyebrow="Our namesake"
          title="Rosetta Benson Harris"
          chips={[
            { value: "Educator", label: "A life spent in Liberian classrooms" },
            { value: "Principal", label: "William V. S. Tubman High School" },
            { value: "Namesake", label: "The reason this school bears her name" },
            { value: "Legacy", label: "Every child who learns to read here" },
          ]}
        >
          <p>Rosetta Steps is named for Ama's mother, a revered Liberian educator and former principal of the William V. S. Tubman High School. Her standard — that every child can learn to read, and that no family should be turned away — is the one we still hold ourselves to.</p>
          <p>Her family and former students remain part of the school's life, joining celebrations and reading with our youngest learners.</p>
        </Band>
        <section className="section section--white">
          <div className="container">
            <div className="section-head section-head--center" data-reveal>
              <p className="eyebrow eyebrow--center">Our team</p>
              <h2>The people who make the steps</h2>
              <p>Eleven teachers and staff, one campus, and a shared belief that every child in this community can learn.</p>
            </div>
            <div className="staff-grid">
              <article className="staff-card" data-reveal>
                <div className="staff-photo"><img src={asset("assets/img/founder.jpg")} alt="Ama Harris" loading="lazy" decoding="async" width={520} height={520} /></div>
                <div className="staff-body">
                  <h3>Ama Harris</h3>
                  <span className="staff-role">Founder &amp; Executive Director</span>
                </div>
              </article>
              <article className="staff-card" data-reveal>
                <div className="staff-photo"><img src={asset("assets/img/staff-logan.jpg")} alt="Logan Harris" loading="lazy" decoding="async" width={520} height={520} /></div>
                <div className="staff-body">
                  <h3>Logan Harris</h3>
                  <span className="staff-role">Principal · Reading &amp; Phonics</span>
                </div>
              </article>
              <article className="staff-card" data-reveal>
                <div className="staff-photo"><img src={asset("assets/img/staff-fatumata.jpg")} alt="Fatumata B. Mulbah" loading="lazy" decoding="async" width={520} height={520} /></div>
                <div className="staff-body">
                  <h3>Fatumata B. Mulbah</h3>
                  <span className="staff-role">Vice-Principal · Kindergarten</span>
                </div>
              </article>
              <article className="staff-card" data-reveal>
                <div className="staff-photo"><img src={asset("assets/img/staff-johnetta.jpg")} alt="Johnetta Anderson" loading="lazy" decoding="async" width={520} height={520} /></div>
                <div className="staff-body">
                  <h3>Johnetta Anderson</h3>
                  <span className="staff-role">Preschool Teacher · Head of Preschool</span>
                </div>
              </article>
              <article className="staff-card" data-reveal>
                <div className="staff-photo"><img src={asset("assets/img/staff-sonita.jpg")} alt="Sonita Zubah" loading="lazy" decoding="async" width={520} height={520} /></div>
                <div className="staff-body">
                  <h3>Sonita Zubah</h3>
                  <span className="staff-role">Preschool Teacher</span>
                </div>
              </article>
              <article className="staff-card" data-reveal>
                <div className="staff-photo"><img src={asset("assets/img/staff-evet.jpg")} alt="Evet Parker" loading="lazy" decoding="async" width={520} height={520} /></div>
                <div className="staff-body">
                  <h3>Evet Parker</h3>
                  <span className="staff-role">Kindergarten Teacher</span>
                </div>
              </article>
              <article className="staff-card" data-reveal>
                <div className="staff-photo"><img src={asset("assets/img/staff-urias.jpg")} alt="Urias T. Garpehn" loading="lazy" decoding="async" width={520} height={520} /></div>
                <div className="staff-body">
                  <h3>Urias T. Garpehn</h3>
                  <span className="staff-role">Phonics &amp; Sight Words</span>
                </div>
              </article>
              <article className="staff-card" data-reveal>
                <div className="staff-photo"><img src={asset("assets/img/staff-vincent.jpg")} alt="Vincent W. Karfah" loading="lazy" decoding="async" width={520} height={520} /></div>
                <div className="staff-body">
                  <h3>Vincent W. Karfah</h3>
                  <span className="staff-role">Science &amp; Social Studies</span>
                </div>
              </article>
              <article className="staff-card" data-reveal>
                <div className="staff-photo"><img src={asset("assets/img/staff-henry.jpg")} alt="Henry Q. Zayzay" loading="lazy" decoding="async" width={520} height={520} /></div>
                <div className="staff-body">
                  <h3>Henry Q. Zayzay</h3>
                  <span className="staff-role">Mathematics</span>
                </div>
              </article>
              <article className="staff-card" data-reveal>
                <div className="staff-photo"><img src={asset("assets/img/staff-favour.jpg")} alt="Favour N. O. Enyinnaya" loading="lazy" decoding="async" width={520} height={520} /></div>
                <div className="staff-body">
                  <h3>Favour N. O. Enyinnaya</h3>
                  <span className="staff-role">Language Arts</span>
                </div>
              </article>
              <article className="staff-card" data-reveal>
                <div className="staff-photo"><img src={asset("assets/img/staff-kpalla.jpg")} alt="Kpalla Bedell" loading="lazy" decoding="async" width={520} height={520} /></div>
                <div className="staff-body">
                  <h3>Kpalla Bedell</h3>
                  <span className="staff-role">Facilities Manager</span>
                </div>
              </article>
            </div>
          </div>
        </section>
      <CtaStrip
        title={"Come and meet the people behind the school"}
        lede={"Visits are welcome on weekday mornings. See a reading lesson in action and talk with our team."}
        actions={[
          { href: "/admissions/", label: "Book a visit", variant: "light", arrow: true },
          { href: "/contact/", label: "Contact us", variant: "outline-light" },
        ]}
      />
    </>
  );
}
