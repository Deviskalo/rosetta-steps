import { BASE_PATH } from "../../../lib/asset";
import PageHero from "../../../components/site/PageHero";
import CtaStrip from "../../../components/site/CtaStrip";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "Admissions & Enrolment | Rosetta Steps Education Center, Caldwell Road, Liberia",
  description: "Enrol your child at Rosetta Steps Education Center on Caldwell Road, Liberia. Preschool to Grade 6 admissions, need-based scholarships and a simple five-step enrolment process.",
  keywords: "Schools in Liberia, Caldwell schools, Education in Monrovia, Literacy programs Liberia, Preschool Liberia, Primary school Liberia, Rosetta Steps Education Center",
  robots: "index, follow",
  alternates: { canonical: `${BASE_PATH}/admissions` },
  openGraph: {
    type: "website",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "Admissions & Enrolment | Rosetta Steps Education Center, Caldwell Road, Liberia",
    description: "Enrol your child at Rosetta Steps Education Center on Caldwell Road, Liberia. Preschool to Grade 6 admissions, need-based scholarships and a simple five-step enrolment process.",
    url: `${BASE_PATH}/admissions`,
    images: [url("/assets/img/hero.jpg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions & Enrolment | Rosetta Steps Education Center, Caldwell Road, Liberia",
    description: "Enrol your child at Rosetta Steps Education Center on Caldwell Road, Liberia. Preschool to Grade 6 admissions, need-based scholarships and a simple five-step enrolment process.",
    images: [url("/assets/img/hero.jpg")]
  }
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow={"Admissions"}
        title={<>Admissions <span className="text-accent">open</span> for the new school year</>}
        crumbs={[
          { label: "Admissions" },
        ]}
      >
        <p>Places are available from Preschool (ABC1 and ABC2) through Kindergarten and Grades 1 to 6. We admit on a rolling basis where space allows, and we work hard to make sure a family's income never decides whether a child can attend.</p>
      </PageHero>
        <section className="section section--white">
          <div className="container">
            <div className="section-head section-head--center" data-reveal>
              <p className="eyebrow eyebrow--center">The enrolment process</p>
              <h2>Five clear steps from first question to first day</h2>
              <p>No queues, no confusion. Here is exactly what happens, and roughly how long each step takes.</p>
            </div>
            <div className="steps">
              <div className="step" data-reveal data-delay={0}>
                <div className="step-num">1</div>
                <h3>Submit Inquiry</h3>
                <p>Send the inquiry form below, call the office or message us on WhatsApp. We reply within two school days.</p>
              </div><div className="step" data-reveal data-delay={70}>
                <div className="step-num">2</div>
                <h3>Visit School</h3>
                <p>Tour the campus, meet a class teacher and watch a reading lesson. Bring your child if you can.</p>
              </div><div className="step" data-reveal data-delay={140}>
                <div className="step-num">3</div>
                <h3>Complete Application</h3>
                <p>Return the application form with your child's birth certificate, two passport photos and any previous school report.</p>
              </div><div className="step" data-reveal data-delay={210}>
                <div className="step-num">4</div>
                <h3>Assessment</h3>
                <p>A friendly readiness conversation for little ones, or a short reading and numeracy check for older children. It places them well; it is not a test to pass.</p>
              </div><div className="step" data-reveal data-delay={280}>
                <div className="step-num">5</div>
                <h3>Admission Decision</h3>
                <p>We confirm the place, any fee support and the start date in writing. You accept by returning the signed offer.</p>
              </div>
            </div>
            <p className="note" style={{textAlign: 'center', marginTop: 26}}>Most families complete the process in two to three weeks during term time.</p>
          </div>
        </section>
        <section className="section section--cream">
          <div className="container split">
            <div data-reveal="left">
              <p className="eyebrow">What to bring</p>
              <h2>Everything you need for the application</h2>
              <ul className="checked-list">
                <li>Completed application form — available at the office or by request.</li>
                <li>Child's birth certificate or age declaration.</li>
                <li>Two recent passport-size photographs.</li>
                <li>Previous school report or transfer certificate, if applicable.</li>
                <li>Vaccination record, if you have one.</li>
                <li>Parent or guardian phone number and an emergency contact.</li>
              </ul>
              <p style={{marginTop: 20}}>Missing a document? Talk to us. We would rather start a conversation than have a family wait.</p>
              <div className="badge-row">
                <span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Rolling admissions</span>
                <span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Sibling priority</span>
                <span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20 6.5 9.4 17.1l-5.4-5.4" /></svg> Scholarship places</span>
              </div>
            </div>
            <div data-reveal="right">
              <div className="form-card">
                <p className="eyebrow" style={{marginBottom: 6}}>Fees &amp; support</p>
                <h3 style={{marginBottom: 14}}>USD $280 for a full school year</h3>
                <p style={{fontSize: '0.95rem', color: 'var(--muted)'}}>The average cost of educating one child for a school year is <strong>USD $280</strong> — less than a dollar a day. Some families can pay it; most cannot, so scholarships and fee support are assessed confidentially with each family.</p>
                <div className="contact-info" style={{marginTop: 18}}>
                  <div className="info-row"><span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx={12} cy={12} r="8.6" /><path d="M12 7.4v9.2" /><path d="M14.6 9.5c-.5-.8-1.5-1.3-2.6-1.3-1.4 0-2.4.8-2.4 1.9 0 1 .8 1.5 2.4 1.9 1.6.4 2.4.9 2.4 1.9 0 1.1-1 1.9-2.4 1.9-1.1 0-2.1-.5-2.6-1.3" /></svg></span><div><strong>Need-based fee support</strong><span>Assessed confidentially with the family. Ask at the office.</span></div></div>
                  <div className="info-row"><span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="m12 3.6 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.5 9.8l5.9-.9L12 3.6Z" /></svg></span><div><strong>Scholarship places</strong><span>Awarded on demonstrated need each year. Ask the office for the current application window.</span></div></div>
                  <div className="info-row"><span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M6.6 3.5h3.1l1.5 4-2.1 1.5a12.4 12.4 0 0 0 6.4 6.4l1.5-2.1 4 1.5v3.1a1.9 1.9 0 0 1-2.1 2A17.4 17.4 0 0 1 4.6 5.6a1.9 1.9 0 0 1 2-2.1Z" /></svg></span><div><strong>Talk to admissions</strong><span><a href="tel:+231886284711">+231 88 628 4711</a> · Mon–Fri, 8:00am–4:00pm</span></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section--white" id="inquiry">
          <div className="container split">
            <div data-reveal="left">
              <p className="eyebrow">Inquiry form</p>
              <h2>Tell us about your child</h2>
              <p>Share a little about your family and the grade you are considering. Our admissions team will call you to arrange a visit and answer your questions.</p>
              <div className="contact-info" style={{marginTop: 26}}>
                <div className="info-row"><span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 21.2s7.2-6.5 7.2-11.2a7.2 7.2 0 1 0-14.4 0c0 4.7 7.2 11.2 7.2 11.2Z" /><circle cx={12} cy={10} r="2.7" /></svg></span><div><strong>Visit the office</strong><span>Caldwell Road, Bushrod Island, Montserrado County, Liberia</span></div></div>
                <div className="info-row"><span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="2.8" y={5} width="18.4" height={14} rx="2.4" /><path d="m3.4 6.6 8.6 6.6 8.6-6.6" /></svg></span><div><strong>Email</strong><span><a href="mailto:info@rosettasteps.org">info@rosettasteps.org</a></span></div></div>
                <div className="info-row"><span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx={12} cy={12} r={9} /><path d="M12 7v5.3l3.5 2" /></svg></span><div><strong>Office hours</strong><span>Monday to Friday, 8:00am – 4:00pm</span></div></div>
              </div>
            </div>
            <div className="form-card" data-reveal="right">
              <h3 style={{marginBottom: 6}}>Enrolment inquiry</h3>
              <p className="note" style={{marginBottom: 22}}>Fields marked <span style={{color: 'var(--pink-600)'}}>*</span> are required.</p>
              <form data-demo-form noValidate>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="parent-name">Parent / guardian name <span className="req">*</span></label>
                    <input id="parent-name" name="parent-name" type="text" autoComplete="name" placeholder="e.g. Martha Johnson" required />
                  </div>
                  <div className="field">
                    <label htmlFor="student-name">Student name <span className="req">*</span></label>
                    <input id="student-name" name="student-name" type="text" placeholder="Child's full name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="student-age">Student age <span className="req">*</span></label>
                    <input id="student-age" name="student-age" type="number" min={1} max={18} inputMode="numeric" placeholder="e.g. 6" required />
                  </div>
                  <div className="field">
                    <label htmlFor="grade-level">Grade level <span className="req">*</span></label>
                    <select id="grade-level" name="grade-level" required>
                      <option value>Select a programme</option>
                      <option>Preschool (18 months – 3 years)</option>
                      <option>K1 — Kindergarten 1</option>
                      <option>K2 — Kindergarten 2</option>
                      <option>Grade 1</option>
                      <option>Grade 2</option>
                      <option>Grade 3</option>
                      <option>Grade 4</option>
                      <option>Grade 5</option>
                      <option>Grade 6</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone number <span className="req">*</span></label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+231 77 000 0000" required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email address <span className="req">*</span></label>
                    <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                  </div>
                  <div className="field field--full">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Tell us about your child, any previous schooling, and what you would like to know." defaultValue={""} />
                  </div>
                </div>
                <p className="form-note">We use your details only to respond to this inquiry. We never share family information.</p>
                <div style={{marginTop: 18}}>
                  <button className="btn btn--primary" type="submit">Send inquiry <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></button>
                </div>
              </form>
              <div className="form-success" tabIndex={-1}><span data-success-text>Thank you. Your inquiry is ready for our admissions team.</span></div>
            </div>
          </div>
        </section>
      <CtaStrip
        title={"Still deciding?"}
        lede={"Come and spend a morning with us. There is no better way to know whether a school is right for your child."}
        actions={[
          { href: "/contact", label: "Arrange a visit", variant: "light", arrow: true },
          { href: "/donate", label: "Support a scholarship", variant: "outline-light" },
        ]}
      />
    </>
  );
}
