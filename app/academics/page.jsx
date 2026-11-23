import Link from "next/link";
import { BASE_PATH, asset } from "../../lib/asset";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "Academic Programs | Preschool to Grade 6 School in Liberia",
  description: "Explore Rosetta Steps academic programmes: preschool for ages 18 months to 3 years, K1 and K2 kindergarten, and Grades 1 to 6 following Liberian curriculum standards with modern teaching approaches.",
  keywords: "Schools in Liberia, Caldwell schools, Education in Monrovia, Literacy programs Liberia, Preschool Liberia, Primary school Liberia, Rosetta Steps Education Center",
  robots: "index, follow",
  alternates: { canonical: `${BASE_PATH}/academics/` },
  openGraph: {
    type: "website",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "Academic Programs | Preschool to Grade 6 School in Liberia",
    description: "Explore Rosetta Steps academic programmes: preschool for ages 18 months to 3 years, K1 and K2 kindergarten, and Grades 1 to 6 following Liberian curriculum standards with modern teaching approaches.",
    url: `${BASE_PATH}/academics/`,
    images: [url("/assets/img/hero.jpg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Programs | Preschool to Grade 6 School in Liberia",
    description: "Explore Rosetta Steps academic programmes: preschool for ages 18 months to 3 years, K1 and K2 kindergarten, and Grades 1 to 6 following Liberian curriculum standards with modern teaching approaches.",
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
              <ol className="breadcrumb"><li><Link href="/">Home</Link></li><li aria-current="page">Academic Programs</li></ol>
              <p className="eyebrow">Teaching &amp; learning</p>
              <h1>Academic programmes from first steps to <span className="text-accent">Grade 6</span></h1>
              <p>Schooling for children from preschool to Grade 6, taught in English and rooted in the Revised Liberian National Curriculum, with the individual attention of a small school.</p>
            </div>
          </div>
        </section>
        <section className="section section--white">
          <div className="container">
            <div className="split">
              <div data-reveal="left">
                <p className="eyebrow">Our approach</p>
                <h2>High expectations, generously supported</h2>
                <p>Our classes are all taught in English. Most of our students come from families where more than half of the parents are unlettered, and where electricity, computers and televisions are not available to support learning.</p>
                <p>We meet that reality by adapting international-standard reading and writing materials to the context of our students' lives, and by equipping our teachers with everything they need to build a good classroom environment. Lessons are interactive and fun, with a strong emphasis on retention.</p>
                <div className="badge-row">
                  <span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> English-medium</span>
                  <span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Liberian national curriculum</span>
                  <span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Common Core standards</span>
                  <span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> “I Do, We Do, You Do”</span>
                </div>
              </div>
              <div data-reveal="right">
                <div className="media-main" style={{aspectRatio: '4/3.2'}}>
                  <img src={asset("assets/img/grade-school.jpg")} alt="Students at work in a classroom at Rosetta Steps" loading="lazy" decoding="async" width={720} height={480} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section--cream">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="eyebrow">The programmes</p>
              <h2>Three stages, one continuous journey</h2>
              <p>Children move through our school with the same teachers watching their progress — so nothing gets lost between one grade and the next.</p>
            </div>
            <div className="stack" style={{display: 'grid', gap: 28}}>
              <div className="curriculum" id="preschool" data-reveal>
                <div className="curriculum-head">
                  <div>
                    <p className="eyebrow" style={{marginBottom: 8}}>Programme</p>
                    <h2>Preschool</h2>
                  </div>
                  <span className="age">18 months – 3 years · ABC1 &amp; ABC2</span>
                </div>
                <div style={{padding: '24px 24px 0'}}><p style={{margin: 0, color: 'var(--muted)', maxWidth: '75ch'}}>Our preschool programme is balanced between academic and social skills. A dynamic team of four preschool teachers, headed by Johnetta Anderson, makes sure that learning is fun, creative and exciting — and sets young learners up for success in the classes ahead.</p></div>
                <div className="subject-grid" style={{marginTop: 24}}>
                  <div className="subject">
                    <span className="subject-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M2.5 5.5h6a3.5 3.5 0 0 1 3.5 3.5v10a3 3 0 0 0-3-3h-6.5v-10.5Z" /><path d="M21.5 5.5h-6A3.5 3.5 0 0 0 12 9v10a3 3 0 0 1 3-3h6.5v-10.5Z" /></svg></span>
                    <div><h3>Letters &amp; sounds</h3><p>Recognising, reciting and writing the alphabet, learning letter sounds and speaking clearly.</p></div>
                  </div>
                  <div className="subject">
                    <span className="subject-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx={12} cy={12} r="8.6" /><circle cx={12} cy={12} r="4.6" /><circle cx={12} cy={12} r={1} /></svg></span>
                    <div><h3>Numbers &amp; pencil control</h3><p>Counting, number recognition, tracing lines and holding a pencil or crayon correctly.</p></div>
                  </div>
                  <div className="subject">
                    <span className="subject-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M16 20v-1.6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" /><circle cx="9.5" cy={7} r="3.3" /><path d="M17 4.2a3.3 3.3 0 0 1 0 6.3" /><path d="M20.5 20v-1.6a4 4 0 0 0-3-3.8" /></svg></span>
                    <div><h3>Social skills</h3><p>Sorting, sharing, playing with others, following rules and naming feelings.</p></div>
                  </div>
                  <div className="subject">
                    <span className="subject-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 21v-7" /><path d="M12 14c0-4 3-7 7.2-7 0 4-3 7-7.2 7Z" /><path d="M12 16.5c0-3.1-2.5-5.6-5.7-5.6 0 3.1 2.5 5.6 5.7 5.6Z" /></svg></span>
                    <div><h3>Focus &amp; routines</h3><p>Sitting with an activity for fifteen minutes or more, and learning the rhythm of a school day.</p></div>
                  </div>
                </div>
                <p className="note" style={{padding: '18px 24px 0'}}>By the end of preschool, children recognise and write letters and numbers, hold a pencil properly, follow instructions and stay engaged in an activity for fifteen minutes or more.</p>
                <div style={{height: 24}} />
              </div>
              <div className="curriculum" id="kindergarten" data-reveal>
                <div className="curriculum-head">
                  <div>
                    <p className="eyebrow" style={{marginBottom: 8}}>Programme</p>
                    <h2>Kindergarten</h2>
                  </div>
                  <span className="age">K1 &amp; K2</span>
                </div>
                <div style={{padding: '24px 24px 0'}}><p style={{margin: 0, color: 'var(--muted)', maxWidth: '75ch'}}>K1 and K2 are a time of growth, expansion and preparation for the adventure that begins in grade school. Our teachers blend play, singing and craft making with introductions to more advanced academic skills.</p></div>
                <div className="subject-grid" style={{marginTop: 24}}>
                  <div className="subject">
                    <span className="subject-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx={12} cy={12} r="8.6" /><circle cx={12} cy={12} r="4.6" /><circle cx={12} cy={12} r={1} /></svg></span>
                    <div><h3>Basic Mathematics</h3><p>Counting, number sense, simple addition and subtraction, shapes and measurement.</p></div>
                  </div>
                  <div className="subject">
                    <span className="subject-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M2.5 5.5h6a3.5 3.5 0 0 1 3.5 3.5v10a3 3 0 0 0-3-3h-6.5v-10.5Z" /><path d="M21.5 5.5h-6A3.5 3.5 0 0 0 12 9v10a3 3 0 0 1 3-3h6.5v-10.5Z" /></svg></span>
                    <div><h3>Language Arts</h3><p>Listening, speaking, storytelling and early writing through daily shared reading.</p></div>
                  </div>
                  <div className="subject">
                    <span className="subject-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x={9} y={3} width={6} height={11} rx={3} /><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M9 21h6" /></svg></span>
                    <div><h3>Phonemic Awareness</h3><p>Hearing, blending and separating the sounds inside words — the engine of early reading.</p></div>
                  </div>
                  <div className="subject">
                    <span className="subject-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 21v-7" /><path d="M12 14c0-4 3-7 7.2-7 0 4-3 7-7.2 7Z" /><path d="M12 16.5c0-3.1-2.5-5.6-5.7-5.6 0 3.1 2.5 5.6 5.7 5.6Z" /></svg></span>
                    <div><h3>Science &amp; Exploration</h3><p>Weather, plants, animals and simple experiments that teach children to ask “why?”</p></div>
                  </div>
                  <div className="subject">
                    <span className="subject-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx={12} cy={12} r={9} /><path d="M3.2 9h17.6M3.2 15h17.6" /><path d="M12 3c2.4 2.4 3.7 5.5 3.7 9S14.4 18.6 12 21c-2.4-2.4-3.7-5.5-3.7-9S9.6 5.4 12 3Z" /></svg></span>
                    <div><h3>Social Studies</h3><p>Family, community, Liberian culture and the wider world around them.</p></div>
                  </div>
                  <div className="subject">
                    <span className="subject-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></svg></span>
                    <div><h3>Vocabulary Development</h3><p>New words every week, used in conversation, song and play.</p></div>
                  </div>
                </div>
                <p className="note" style={{padding: '18px 24px 0'}}>K2 learners complete a reading readiness check before moving into Grade 1, so that support starts on the first day rather than the first report card.</p>
                <div style={{height: 24}} />
              </div>
              <div className="curriculum" id="grade-school" data-reveal>
                <div className="curriculum-head">
                  <div>
                    <p className="eyebrow" style={{marginBottom: 8}}>Programme</p>
                    <h2>Grade School</h2>
                  </div>
                  <span className="age">Grades 1 – 6</span>
                </div>
                <div style={{padding: '24px 24px 0'}}><p style={{margin: 0, color: 'var(--muted)', maxWidth: '75ch'}}>Our grade school curriculum combines the Revised Liberian National Curriculum with the Common Core State Standards developed in the United States. Students meet every national requirement while being exposed to high-quality academic programming in mathematics, English, language arts and literacy. Learning goals set out clearly what a child should know and be able to do by the end of each school year.</p></div>
                <div style={{padding: '24px 24px 0'}}>
                  <div className="badge-row" style={{marginTop: 4}}>
                    <span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Commerce</span><span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Computer Science</span><span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> English</span><span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Handwriting</span><span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Home Economics</span><span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Mathematics</span><span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Phonics</span><span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Quantitative Aptitude</span><span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Reading Comprehension</span><span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Science</span><span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Sight Words</span><span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Social Studies</span><span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Spelling</span><span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Verbal Aptitude</span>
                  </div>
                </div>
                <p className="note" style={{padding: '18px 24px 0'}}>Grade 6 learners sit the national examination and receive transition support into secondary school, including scholarship guidance.</p>
                <div style={{height: 24}} />
              </div>
            </div>
          </div>
        </section>
        <section className="section section--white">
          <div className="container">
            <div className="section-head section-head--center" data-reveal>
              <p className="eyebrow eyebrow--center">The school day</p>
              <h2>Hours, breaks and what it costs</h2>
            </div>
            <div className="grid grid--2">
              <article className="value-card" data-reveal="left">
                <div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx={12} cy={12} r={9} /><path d="M12 7v5.3l3.5 2" /></svg></div>
                <h3>A full day of learning</h3>
                <ul className="checked-list">
                  <li><strong>Monday to Thursday</strong> — 8:30am to 4:00pm</li>
                  <li><strong>Friday</strong> — 8:30am to 2:00pm</li>
                  <li><strong>Morning break</strong> — 11:45am to 12:30pm</li>
                  <li><strong>Afternoon break</strong> — 2:00pm to 2:45pm</li>
                </ul>
                <p style={{marginTop: 16, color: 'var(--muted)', fontSize: '.95rem'}}>After-school literacy runs on top of the school day, and Saturday programmes open the campus to the wider community.</p>
              </article>
              <article className="value-card" data-reveal="right">
                <div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 4.5h3.6v15H4zM9.4 4.5h3.6v15H9.4z" /><path d="m15.4 6 3.4-1 3.3 13.6-3.4 1z" /></svg></div>
                <h3>Less than a dollar a day</h3>
                <p>The average cost of educating one child for a school year is <strong>USD $280</strong>. Some of our families are able to pay this cost. Most are not.</p>
                <p>That is why scholarships sit at the centre of everything we do, and why a gift of $280 can keep a child in a classroom for an entire year.</p>
                <p style={{marginTop: 14}}><Link className="link-arrow" href="/donate/">Sponsor a school year <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
              </article>
            </div>
          </div>
        </section>
        <section className="section section--cream">
          <div className="container">
            <div className="section-head section-head--center" data-reveal>
              <p className="eyebrow eyebrow--center">How we teach</p>
              <h2>Five things you will notice in our classrooms</h2>
            </div>
            <div className="grid grid--3">
              <div className="value-card" data-reveal><div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M2.5 5.5h6a3.5 3.5 0 0 1 3.5 3.5v10a3 3 0 0 0-3-3h-6.5v-10.5Z" /><path d="M21.5 5.5h-6A3.5 3.5 0 0 0 12 9v10a3 3 0 0 1 3-3h6.5v-10.5Z" /></svg></div><h3>Reading is scheduled, not squeezed in</h3><p>Every class has a protected reading block. Literacy is the spine of the timetable, not an afterthought.</p></div>
              <div className="value-card" data-reveal data-delay={70}><div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M16 20v-1.6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" /><circle cx="9.5" cy={7} r="3.3" /><path d="M17 4.2a3.3 3.3 0 0 1 0 6.3" /><path d="M20.5 20v-1.6a4 4 0 0 0-3-3.8" /></svg></div><h3>Foundations before speed</h3><p>The “I Do, We Do, You Do” model: we show it, we do it together, then the child does it alone.</p></div>
              <div className="value-card" data-reveal data-delay={140}><div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="m12 3 1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" /><path d="m18.6 15.6.8 2.1 2.1.8-2.1.8-.8 2.1-.8-2.1-2.1-.8 2.1-.8.8-2.1Z" /></svg></div><h3>Learning is active</h3><p>Children build, measure, act, sing and present. Fewer copied notes; more thinking out loud.</p></div>
              <div className="value-card" data-reveal data-delay={70}><div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 20.5 5.2 13.9a4 4 0 0 1 5.6-5.6l1.2 1.2 1.2-1.2a4 4 0 0 1 5.6 5.6L12 20.5Z" /><path d="M7 9.5c-1.6-1.4-2-3.6-.8-5.2" /></svg></div><h3>Every child is known</h3><p>Teachers track progress and wellbeing together, and flag concerns early — school is a safe place here.</p></div>
              <div className="value-card" data-reveal data-delay={140}><div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 21v-7" /><path d="M12 14c0-4 3-7 7.2-7 0 4-3 7-7.2 7Z" /><path d="M12 16.5c0-3.1-2.5-5.6-5.7-5.6 0 3.1 2.5 5.6 5.7 5.6Z" /></svg></div><h3>Teachers keep learning</h3><p>Training, coaching and peer observation — because teacher quality is the biggest in-school factor in a child's success.</p></div>
              <div className="value-card" data-reveal data-delay={210}><div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx={12} cy={12} r={9} /><path d="M3.2 9h17.6M3.2 15h17.6" /><path d="M12 3c2.4 2.4 3.7 5.5 3.7 9S14.4 18.6 12 21c-2.4-2.4-3.7-5.5-3.7-9S9.6 5.4 12 3Z" /></svg></div><h3>Families are partners</h3><p>Regular conversations with parents, home reading routines and an open office door.</p></div>
            </div>
            <div className="pullquote" data-reveal style={{marginTop: 44}}>
              “Education is the most powerful weapon which you can use to change the world.”
              <cite>Nelson Mandela — on the wall of our campus</cite>
            </div>
          </div>
        </section>
        <section className="section section--flush-top">
          <div className="container">
            <div className="cta-strip" data-reveal="scale">
              <div>
                <h2>Questions about the curriculum?</h2>
                <p>Our academic team is happy to walk you through what your child will learn, term by term.</p>
              </div>
              <div className="btn-group">
                <Link className="btn btn--light" href="/admissions/">Start an application <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link>
                <Link className="btn btn--outline-light" href="/contact/">Speak with us</Link>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
