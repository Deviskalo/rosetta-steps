import Link from "next/link";
import { BASE_PATH, asset } from "../../../lib/asset";
import PageHero from "../../../components/site/PageHero";
import CtaStrip from "../../../components/site/CtaStrip";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "Donate & Support | Rosetta Steps Education Center Liberia",
  description: "Support quality education and literacy in Liberia. Donate once or monthly, sponsor a child's full school year, or partner with Rosetta Steps Education Center in Caldwell, Montserrado County.",
  keywords: "Schools in Liberia, Caldwell schools, Education in Monrovia, Literacy programs Liberia, Preschool Liberia, Primary school Liberia, Rosetta Steps Education Center",
  robots: "index, follow",
  alternates: { canonical: `${BASE_PATH}/donate/` },
  openGraph: {
    type: "website",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "Donate & Support | Rosetta Steps Education Center Liberia",
    description: "Support quality education and literacy in Liberia. Donate once or monthly, sponsor a child's full school year, or partner with Rosetta Steps Education Center in Caldwell, Montserrado County.",
    url: `${BASE_PATH}/donate/`,
    images: [url("/assets/img/hero.jpg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate & Support | Rosetta Steps Education Center Liberia",
    description: "Support quality education and literacy in Liberia. Donate once or monthly, sponsor a child's full school year, or partner with Rosetta Steps Education Center in Caldwell, Montserrado County.",
    images: [url("/assets/img/hero.jpg")]
  }
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow={"Support our mission"}
        title={<>Help change a child's <span className="text-accent">future</span></>}
        crumbs={[
          { label: "Donate" },
        ]}
      >
        <p>Your gift keeps a child in a classroom, a book in their hands and a teacher beside them. We run a very efficient operation, and every contribution makes an incredible impact.</p>
      </PageHero>
        <section className="section section--white" id="give">
          <div className="container give-grid">
            <div data-reveal="left">
              <p className="eyebrow">Make a gift</p>
              <h2>Choose the difference you want to make</h2>
              <p>We welcome general donations as well as gifts directed to specific needs. All donations are received by the <strong>Rosetta Steps Education Foundation</strong>, which uses the funds to cover the costs incurred by the school.</p>
              <div className="grid grid--2" style={{marginTop: 28}}>
                <article className="value-card" data-reveal data-delay={0}>
                  <div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M22 9.4 12 4 2 9.4l10 5.4 10-5.4Z" /><path d="M6 11.7V17c0 1.6 2.7 2.9 6 2.9s6-1.3 6-2.9v-5.3" /><path d="M22 9.4v5" /></svg></div>
                  <h3>A school year — $280</h3>
                  <p>The average cost of educating one child for a full school year. Most of our families cannot pay it alone.</p>
                </article><article className="value-card" data-reveal data-delay={70}>
                  <div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M2.5 5.5h6a3.5 3.5 0 0 1 3.5 3.5v10a3 3 0 0 0-3-3h-6.5v-10.5Z" /><path d="M21.5 5.5h-6A3.5 3.5 0 0 0 12 9v10a3 3 0 0 1 3-3h6.5v-10.5Z" /></svg></div>
                  <h3>Learning materials</h3>
                  <p>Readers, exercise books, pencils, paper and printer ink — the everyday tools of a working classroom.</p>
                </article><article className="value-card" data-reveal data-delay={140}>
                  <div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M16 20v-1.6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" /><circle cx="9.5" cy={7} r="3.3" /><path d="M17 4.2a3.3 3.3 0 0 1 0 6.3" /><path d="M20.5 20v-1.6a4 4 0 0 0-3-3.8" /></svg></div>
                  <h3>Programme support</h3>
                  <p>Read to Succeed, Learn Through Play and Learn to Earn are free to the families who need them most.</p>
                </article><article className="value-card" data-reveal data-delay={210}>
                  <div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M3 21V8.4l9-4.4 9 4.4V21" /><path d="M9 21v-6.2h6V21M3 21h18" /></svg></div>
                  <h3>The campus</h3>
                  <p>Internet, electricity, whiteboards, furniture and the upkeep of seven classrooms, a science lab and a library.</p>
                </article>
              </div>
            </div>
            <div className="give-card" data-give data-reveal="right" id="donate-card">
              <h3 style={{marginBottom: 4}}>Build your gift</h3>
              <p className="note" style={{marginBottom: 20}}>Change it any time. No card details are collected on this website.</p>
              <div className="give-tabs" role="tablist" aria-label="Giving frequency">
                <button type="button" role="tab" aria-selected="true" data-cadence="once">One-time</button>
                <button type="button" role="tab" aria-selected="false" data-cadence="monthly">Monthly</button>
              </div>
              <div className="amount-grid">
                <button className="amount" type="button" data-amount={40} aria-pressed="false">$40<small>Internet</small></button>
                <button className="amount" type="button" data-amount={125} aria-pressed="false">$125<small>Class trip</small></button>
                <button className="amount" type="button" data-amount={200} aria-pressed="false">$200<small>IXL / Play</small></button>
                <button className="amount" type="button" data-amount={260} aria-pressed="false">$260<small>Learn to Earn</small></button>
                <button className="amount" type="button" data-amount={280} aria-pressed="true">$280<small>School year</small></button>
                <button className="amount" type="button" data-amount={500} aria-pressed="false">$500<small>Any need</small></button>
              </div>
              <div className="custom-amount">
                <span>$</span>
                <input type="number" min={1} step={1} inputMode="numeric" placeholder="Other amount" aria-label="Custom gift amount in US dollars" data-custom-amount />
              </div>
              <div className="give-impact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="m12 3 1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" /><path d="m18.6 15.6.8 2.1 2.1.8-2.1.8-.8 2.1-.8-2.1-2.1-.8 2.1-.8.8-2.1Z" /></svg>
                <span data-give-impact>Sponsors one child's entire school year — tuition, books and materials.</span>
              </div>
              <Link className="btn btn--primary" href="/contact/#giving" style={{width: '100%'}}>Continue to give <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link>
              <p className="form-note" style={{marginTop: 12}}>Our office will send secure bank transfer or mobile-money details. Prefer to talk first? Call <a href="tel:+231886284711">+231 88 628 4711</a>.</p>
            </div>
          </div>
        </section>
        <section className="section section--cream">
          <div className="container">
            <div className="section-head-row">
              <div className="section-head" data-reveal>
                <p className="eyebrow">Where it is needed now</p>
                <h2>Our most pressing needs</h2>
                <p>These are the real costs of running this school — published openly, so you can see exactly what a gift buys.</p>
              </div>
              <Link className="link-arrow" href="/contact/#giving" data-reveal>Ask us anything <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link>
            </div>
            <div className="need-list" data-reveal>
              <div className="need-row">
                <div>
                  <h3>Sponsor a student scholarship</h3>
                  <p>One child, one full school year — tuition, books and materials.</p>
                </div>
                <div className="need-amount">$280 <small>per year</small></div>
              </div>
              <div className="need-row">
                <div>
                  <h3>School internet costs</h3>
                  <p>Keeps lessons, IXL and teacher planning online for the whole school.</p>
                </div>
                <div className="need-amount">$40 <small>per month</small></div>
              </div>
              <div className="need-row">
                <div>
                  <h3>Educational trips</h3>
                  <p>A class trip for twenty-five students, arranged by the school.</p>
                </div>
                <div className="need-amount">$125 <small>per class</small></div>
              </div>
              <div className="need-row">
                <div>
                  <h3>Registration to IXL online learning</h3>
                  <p>A year of IXL maths and reading practice for a class of twenty-five.</p>
                </div>
                <div className="need-amount">$200 <small>per class</small></div>
              </div>
              <div className="need-row">
                <div>
                  <h3>Learn Through Play</h3>
                  <p>Runs our free Saturday programme for community children.</p>
                </div>
                <div className="need-amount">$200 <small>per month</small></div>
              </div>
              <div className="need-row">
                <div>
                  <h3>Learn to Earn adult scholarship</h3>
                  <p>A full year of literacy and life skills for an adult learner.</p>
                </div>
                <div className="need-amount">$260 <small>per year</small></div>
              </div>
            </div>
            <p className="note" style={{marginTop: 20}}>All donations are received by the Rosetta Steps Education Foundation, which uses the funds to cover the associated costs incurred by the Rosetta Steps Education Center.</p>
          </div>
        </section>
        <section className="section section--white" id="sponsor">
          <div className="container split">
            <div className="media-stack" data-reveal="left">
              <div className="media-main">
                <img src={asset("assets/img/about-students.jpg")} alt="A student at her desk at Rosetta Steps" loading="lazy" decoding="async" width={1200} height={900} />
              </div>
              <div className="media-badge"><b>$280</b><span>One full school year for one child</span></div>
            </div>
            <div data-reveal="right">
              <p className="eyebrow">Sponsorship</p>
              <h2>Sponsor a child for a full year</h2>
              <p>For <strong>$280 a year</strong> — less than a dollar a day — you can cover what it costs to educate one child at Rosetta Steps. Some families can pay this. Most cannot, which is why scholarship sponsors are the backbone of this school.</p>
              <p>Sponsors receive a termly update written by the school and a year-end note about the difference their gift made. You are not buying a relationship with a child; you are removing a barrier that should never have been there.</p>
              <ul className="checked-list">
                <li>A full year of tuition, books and materials for one child.</li>
                <li>Named scholarships can carry your family or company name.</li>
                <li>You may pause or end a sponsorship at any time.</li>
              </ul>
              <p style={{marginTop: 22}}><Link className="btn btn--primary" href="/contact/#giving">Become a sponsor <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
            </div>
          </div>
        </section>
        <section className="section section--cream">
          <div className="container">
            <div className="section-head section-head--center" data-reveal>
              <p className="eyebrow eyebrow--center">Ways to give</p>
              <h2>Four ways to stand with a child</h2>
              <p>Whether you can give once, monthly, through a named scholarship or as a company, there is a route that fits.</p>
            </div>
            <div className="grid grid--4">
              <article className="value-card" data-reveal data-delay={0}>
                <div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M22 9.4 12 4 2 9.4l10 5.4 10-5.4Z" /><path d="M6 11.7V17c0 1.6 2.7 2.9 6 2.9s6-1.3 6-2.9v-5.3" /><path d="M22 9.4v5" /></svg></div>
                <h3>One-time giving</h3>
                <p>A single gift, any size. Put it towards the area of greatest need or name a purpose.</p>
                <p style={{marginTop: 14}}><a className="link-arrow" href="#give">Choose this <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></a></p>
              </article><article className="value-card" data-reveal data-delay={60}>
                <div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x={3} y={5} width={18} height={16} rx="2.5" /><path d="M3 10.2h18M8 3v4M16 3v4" /></svg></div>
                <h3>Monthly giving</h3>
                <p>$40 a month keeps the school's internet running. Steady support lets us plan a full year.</p>
                <p style={{marginTop: 14}}><a className="link-arrow" href="#give">Choose this <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></a></p>
              </article><article className="value-card" data-reveal data-delay={120}>
                <div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="m12 3 1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" /><path d="m18.6 15.6.8 2.1 2.1.8-2.1.8-.8 2.1-.8-2.1-2.1-.8 2.1-.8.8-2.1Z" /></svg></div>
                <h3>Scholarship sponsorship</h3>
                <p>$280 sponsors one named child through a full academic year, with termly updates from the school.</p>
                <p style={{marginTop: 14}}><a className="link-arrow" href="#sponsor">Choose this <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></a></p>
              </article><article className="value-card" data-reveal data-delay={180}>
                <div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M3 21V8.4l9-4.4 9 4.4V21" /><path d="M9 21v-6.2h6V21M3 21h18" /></svg></div>
                <h3>Corporate &amp; in-kind</h3>
                <p>Fund a programme, equip a classroom, or give books, stationery, a television or printer ink.</p>
                <p style={{marginTop: 14}}><a className="link-arrow" href="#inkind">Choose this <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></a></p>
              </article>
            </div>
          </div>
        </section>
        <section className="section section--white" id="inkind">
          <div className="container split split--media-right">
            <div data-reveal="left">
              <p className="eyebrow">In-kind donations</p>
              <h2>Things we can use right now</h2>
              <p>We welcome direct donations of items, and we are also able to receive donations of items in the United States, which are then shipped to Liberia.</p>
              <div className="grid grid--2" style={{gap: 18, marginTop: 22}}>
                <div>
                  <p className="eyebrow" style={{marginBottom: 10}}>Classroom</p>
                  <ul className="checked-list">
                    <li>Notebooks and writing books</li>
                    <li>Packs of paper</li>
                    <li>Pencils and pens</li>
                    <li>Textbooks</li>
                    <li>Whiteboards &amp; markers</li>
                    <li>Printer ink</li>
                  </ul>
                </div>
                <div>
                  <p className="eyebrow" style={{marginBottom: 10}}>School &amp; home</p>
                  <ul className="checked-list">
                    <li>Television</li>
                    <li>Cleaning items</li>
                    <li>Books for the library</li>
                    <li>Computers &amp; accessories</li>
                    <li>School bags</li>
                    <li>Sports equipment</li>
                  </ul>
                </div>
              </div>
              <p style={{marginTop: 22}}><Link className="btn btn--ghost" href="/contact/">Arrange an in-kind gift <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></Link></p>
            </div>
            <div className="media-stack" data-reveal="right">
              <div className="media-main">
                <img src={asset("assets/img/banner-programs.jpg")} alt="A market vendor in Liberia who could join the Learn to Earn programme" loading="lazy" decoding="async" width={1600} height={572} />
              </div>
              <div className="media-badge"><b>USA → Liberia</b><span>We can receive goods in the United States</span></div>
            </div>
          </div>
        </section>
        <section className="section section--cream">
          <div className="container">
            <div className="grid grid--3">
              <div className="value-card" data-reveal><div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 3.2 19.3 6v5c0 4.2-2.9 8-7.3 9.7C7.6 19 4.7 15.2 4.7 11V6L12 3.2Z" /><path d="m8.9 11.6 2.1 2.1 4-4" /></svg></div><h3>Transparent by default</h3><p>Donations are received by the Rosetta Steps Education Foundation, and our accounts are open to inspection on request.</p></div>
              <div className="value-card" data-reveal data-delay={70}><div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 4.5h3.6v15H4zM9.4 4.5h3.6v15H9.4z" /><path d="m15.4 6 3.4-1 3.3 13.6-3.4 1z" /></svg></div><h3>Spent close to the classroom</h3><p>Books, internet, trips, online learning and scholarships. We keep overheads lean and say plainly what each gift funded.</p></div>
              <div className="value-card" data-reveal data-delay={140}><div className="v-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 20.5 5.2 13.9a4 4 0 0 1 5.6-5.6l1.2 1.2 1.2-1.2a4 4 0 0 1 5.6 5.6L12 20.5Z" /><path d="M7 9.5c-1.6-1.4-2-3.6-.8-5.2" /></svg></div><h3>Ask us anything</h3><p>Want to visit before you give, or see a budget line? Our office will show you. Trust is built in person.</p></div>
            </div>
          </div>
        </section>
      <CtaStrip
        title={"Every gift begins with a child"}
        lede={"Not sure which need to choose? Give to the area of greatest need and we will allocate it where it changes the most."}
        actions={[
          { href: "/contact/#giving", label: "Speak with our team", variant: "light", arrow: true },
          { href: "/admissions/", label: "Enrol a child", variant: "outline-light" },
        ]}
      />
    </>
  );
}
