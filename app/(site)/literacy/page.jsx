import Link from "next/link";
import { BASE_PATH, asset } from "../../../lib/asset";
import PageHero from "../../../components/site/PageHero";
import CtaStrip from "../../../components/site/CtaStrip";
import StatsSection from "../../../components/site/StatsSection";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "Literacy & Community Programs in Liberia | Rosetta Steps",
  description: "Read to Succeed, Learn Through Play, Learn to Earn and Vacation School — free and subsidised literacy and community programmes for children and adults in Caldwell, Montserrado County, Liberia.",
  keywords: "Schools in Liberia, Caldwell schools, Education in Monrovia, Literacy programs Liberia, Preschool Liberia, Primary school Liberia, Rosetta Steps Education Center",
  robots: "index, follow",
  alternates: { canonical: `${BASE_PATH}/literacy` },
  openGraph: {
    type: "website",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "Literacy & Community Programs in Liberia | Rosetta Steps",
    description: "Read to Succeed, Learn Through Play, Learn to Earn and Vacation School — free and subsidised literacy and community programmes for children and adults in Caldwell, Montserrado County, Liberia.",
    url: `${BASE_PATH}/literacy`,
    images: [url("/assets/img/hero.jpg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "Literacy & Community Programs in Liberia | Rosetta Steps",
    description: "Read to Succeed, Learn Through Play, Learn to Earn and Vacation School — free and subsidised literacy and community programmes for children and adults in Caldwell, Montserrado County, Liberia.",
    images: [url("/assets/img/hero.jpg")]
  }
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow={<>Literacy &amp; community</>}
        title={<>Literacy that reaches <span className="text-accent">beyond the classroom</span></>}
        crumbs={[
          { label: "Literacy Programs" },
        ]}
      >
        <p>The school day ends; learning should not. Our afternoon, weekend and adult programmes keep children reading, families growing and the whole community moving forward.</p>
      </PageHero>
        <StatsSection
          label="Literacy programme reach"
          style={{ marginTop: 0, paddingTop: "clamp(40px,5vw,64px)" }}
          stats={[
            { icon: "book", value: "3", count: 3, label: "Community programmes" },
            { icon: "users", value: "55", count: 55, label: "Children fed for a full year" },
            { icon: "cap", value: "8", count: 8, label: "Scholarships awarded in 2020" },
            { icon: "clock", value: "2015", count: 2015, label: "Our reading room opened" },
          ]}
        />
        <section className="section section--cream">
          <div className="container">
            <div className="grid grid--2" style={{alignItems: 'center'}}>
              <div data-reveal="left">
                <p className="eyebrow">Why it matters</p>
                <h2>Reading is the door. We hold it open.</h2>
                <p>Less than half of Liberians are literate, and many of our children arrive at school without a single book at home. Many adults in our community never had the chance to learn to read at all. Our programmes exist to close that gap — after school, on Saturdays and in the evenings for parents and caregivers.</p>
                <p>Each programme is free or heavily subsidised, and each is taught by the same teachers who know our children best. Read to Succeed is open to pupils from other schools, which means our reading room serves the whole neighbourhood, not only our own students.</p>
              </div>
              <div data-reveal="right">
                <div className="media-main" style={{aspectRatio: '4/3.4'}}>
                  <img src={asset("assets/img/reading.jpg")} alt="A teacher reading with a young learner at Rosetta Steps" loading="lazy" decoding="async" width={1200} height={800} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section--white" id="read-to-succeed">
          <div className="container split">
            <div className="media-stack" data-reveal="left">
              <div className="media-main"><img src={asset("assets/img/hero.jpg")} alt="A young reader with a book at Rosetta Steps" loading="lazy" decoding="async" width={1600} height={900} /></div>
              <div className="media-badge"><b>EGRA-based</b><span>Early Grade Reading Assessment</span></div>
            </div><div data-reveal="right">
              <p className="eyebrow">After school · open to all local pupils</p>
              <h2>Read to Succeed</h2>
              <p>Read to Succeed is our after-school reading programme, offered to pupils from other schools as well as children from the community. It is designed to help young learners build the academic skills they need, and it draws primarily on the Early Grade Reading Assessment (EGRA) to find out exactly where each child is stuck.</p>
              <ul className="checked-list"><li><strong>Assessment first</strong> — EGRA checks tell us which skills are missing before we teach.</li><li><strong>Small reading groups</strong> matched to each child's level.</li><li><strong>Phonics, fluency and comprehension</strong> practised every session.</li><li><strong>A reading room to use</strong> — books, computers and quiet space after school.</li></ul>
              <div className="contact-info" style={{marginTop: 22}}><div className="info-row"><span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx={12} cy={12} r={9} /><path d="M12 7v5.3l3.5 2" /></svg></span><div><strong>Who it serves</strong><span>Pupils from local schools and children in the community</span></div></div><div className="info-row"><span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M16 20v-1.6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" /><circle cx="9.5" cy={7} r="3.3" /><path d="M17 4.2a3.3 3.3 0 0 1 0 6.3" /><path d="M20.5 20v-1.6a4 4 0 0 0-3-3.8" /></svg></span><div><strong>Where</strong><span>Our reading room, Caldwell Road</span></div></div><div className="info-row"><span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M2.5 5.5h6a3.5 3.5 0 0 1 3.5 3.5v10a3 3 0 0 0-3-3h-6.5v-10.5Z" /><path d="M21.5 5.5h-6A3.5 3.5 0 0 0 12 9v10a3 3 0 0 1 3-3h6.5v-10.5Z" /></svg></span><div><strong>Cost</strong><span>Free for community children; register at the office</span></div></div></div>
            </div>
          </div>
        </section>
        <section className="section section--cream" id="learn-through-play">
          <div className="container split split--media-right">
            <div data-reveal="left">
              <p className="eyebrow">Saturdays · 9:00am – 12:00pm</p>
              <h2>Learn Through Play</h2>
              <p>Every Saturday morning we open our doors to children in the community for a free, informal social and academic experience. Most of these children have no exposure to formal education at all — so the morning is deliberately playful, and deliberately full of language.</p>
              <ul className="checked-list"><li><strong>Free and open</strong> to local children, whether or not they attend our school.</li><li><strong>Learning disguised as play</strong> — games, songs, stories, art and sport.</li><li><strong>Socialisation</strong> for children who would otherwise spend Saturday working or alone.</li><li><strong>A first taste of school</strong> for children who have never been inside a classroom.</li></ul>
              <div className="contact-info" style={{marginTop: 22}}><div className="info-row"><span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x={3} y={5} width={18} height={16} rx="2.5" /><path d="M3 10.2h18M8 3v4M16 3v4" /></svg></span><div><strong>When it runs</strong><span>Every Saturday · 9:00am – 12:00pm</span></div></div><div className="info-row"><span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M16 20v-1.6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" /><circle cx="9.5" cy={7} r="3.3" /><path d="M17 4.2a3.3 3.3 0 0 1 0 6.3" /><path d="M20.5 20v-1.6a4 4 0 0 0-3-3.8" /></svg></span><div><strong>Who it serves</strong><span>Children from the surrounding community</span></div></div><div className="info-row"><span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 20.5 5.2 13.9a4 4 0 0 1 5.6-5.6l1.2 1.2 1.2-1.2a4 4 0 0 1 5.6 5.6L12 20.5Z" /><path d="M7 9.5c-1.6-1.4-2-3.6-.8-5.2" /></svg></span><div><strong>Cost</strong><span>Free · just come to the gate</span></div></div></div>
            </div><div className="media-stack" data-reveal="right">
              <div className="media-main"><img src={asset("assets/img/play.jpg")} alt="Children playing together at a Saturday club" loading="lazy" decoding="async" width={1100} height={760} /></div>
              <div className="media-badge"><b>Saturdays</b><span>Free weekend learning</span></div>
            </div>
          </div>
        </section>
        <section className="section section--white" id="learn-to-earn">
          <div className="container split">
            <div className="media-stack" data-reveal="left">
              <div className="media-main"><img src={asset("assets/img/adult.jpg")} alt="Adult learners gathered in the reading room" loading="lazy" decoding="async" width={900} height={900} /></div>
              <div className="media-badge"><b>Adults</b><span>Literacy and life skills</span></div>
            </div><div data-reveal="right">
              <p className="eyebrow">Adults &amp; caregivers</p>
              <h2>Learn to Earn</h2>
              <p>Rosetta Steps is focused on youth, but we are acutely aware of the need to support adults and adolescents too. Learn to Earn teaches core literacy skills to adults so they can find work and build economic opportunity. The gap is real: many small business proprietors, sellers and unskilled labourers in our community were never taught to read.</p>
              <p>The programme teaches basic reading and writing alongside life skills — parenting, food and nutrition, civic responsibility, family planning and computer literacy — so that participants can handle daily activities, economic transactions and their own lives with confidence.</p>
              <ul className="checked-list"><li><strong>Foundational literacy</strong> — reading signs, forms, labels and simple correspondence.</li><li><strong>Practical numeracy</strong> — money, measurement, pricing and keeping records.</li><li><strong>Life skills</strong> — parenting, nutrition, civic responsibility and family planning.</li><li><strong>Computer literacy</strong> in our reading room, using the school's computers.</li></ul>
            </div>
          </div>
        </section>
        <section className="section section--cream">
          <div className="container">
            <div className="section-head section-head--center" data-reveal>
              <p className="eyebrow eyebrow--center">Partners &amp; supporters</p>
              <h2>The organisations walking with us</h2>
              <p>Books, food, training, technology and dignity — none of this work happens alone.</p>
            </div>
            <div className="grid grid--3">
              <article className="value-card" data-reveal><div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 20.5 5.2 13.9a4 4 0 0 1 5.6-5.6l1.2 1.2 1.2-1.2a4 4 0 0 1 5.6 5.6L12 20.5Z" /><path d="M7 9.5c-1.6-1.4-2-3.6-.8-5.2" /></svg></div><h3>Alpha Kappa Alpha — Eta Beta Omega</h3><p>Chose Rosetta Steps as the pilot school for its Childhood Hunger Initiative Power Packs programme, feeding 55 children for a full year.</p></article>
              <article className="value-card" data-reveal data-delay={60}><div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="m12 3 1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" /><path d="m18.6 15.6.8 2.1 2.1.8-2.1.8-.8 2.1-.8-2.1-2.1-.8 2.1-.8.8-2.1Z" /></svg></div><h3>Forleh Foundation</h3><p>Donated a drone for our Grade 3 reading unit, plus sanitary pads, backpacks and books for our library.</p></article>
              <article className="value-card" data-reveal data-delay={120}><div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M16 20v-1.6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" /><circle cx="9.5" cy={7} r="3.3" /><path d="M17 4.2a3.3 3.3 0 0 1 0 6.3" /><path d="M20.5 20v-1.6a4 4 0 0 0-3-3.8" /></svg></div><h3>Empowerment Squared Canada</h3><p>Dr. Mark Sinke ran a teacher training session on campus and donated a printer and training materials.</p></article>
              <article className="value-card" data-reveal data-delay={60}><div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 3.2 19.3 6v5c0 4.2-2.9 8-7.3 9.7C7.6 19 4.7 15.2 4.7 11V6L12 3.2Z" /><path d="m8.9 11.6 2.1 2.1 4-4" /></svg></div><h3>Period With Pride</h3><p>A student-led initiative that delivered over a hundred sanitary pads and taught menstrual hygiene to our girls.</p></article>
              <article className="value-card" data-reveal data-delay={120}><div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></svg></div><h3>FlyPrint</h3><p>Our marketing partner, who helps us tell the story of this school to the world.</p></article>
              <article className="value-card" data-reveal data-delay={180}><div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M8 13V5.8a1.8 1.8 0 0 1 3.6 0V11" /><path d="M11.6 10.4V4.6a1.8 1.8 0 0 1 3.6 0v5.8" /><path d="M15.2 11V7.4a1.8 1.8 0 0 1 3.6 0v6.2c0 4-2.6 7.2-6.6 7.2-2.6 0-4.4-1-5.6-2.8L3.6 14a1.9 1.9 0 0 1 2.8-2.5L8 13" /></svg></div><h3>And every donor</h3><p>Scholarships, internet, trips, IXL licences and adult places — all of it funded by people who decided to help. <Link className="link-arrow" href="/donate">Join them <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p></article>
            </div>
          </div>
        </section>
      <CtaStrip
        title={"Could your child benefit from after-school literacy?"}
        lede={"Read to Succeed is open to children from other schools too. Call the office or come by and ask for the reading room."}
        actions={[
          { href: "/contact", label: "Speak to the school", variant: "light", arrow: true },
          { href: "/admissions", label: "See admissions", variant: "outline-light" },
        ]}
      />
    </>
  );
}
