import Link from "next/link";
import { BASE_PATH, asset } from "../../lib/asset";

const url = (path) => BASE_PATH + path;

export const metadata = {
  title: "Contact Us | Rosetta Steps Education Center, Caldwell Road, Liberia",
  description: "Contact Rosetta Steps Education Center on Caldwell Road, Bushrod Island, Montserrado County, Liberia. Call +231 88 628 4711, email info@rosettasteps.org or send an enquiry about admissions, scholarships or giving.",
  keywords: "Schools in Liberia, Caldwell schools, Education in Monrovia, Literacy programs Liberia, Preschool Liberia, Primary school Liberia, Rosetta Steps Education Center",
  robots: "index, follow",
  alternates: { canonical: `${BASE_PATH}/contact/` },
  openGraph: {
    type: "website",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR",
    title: "Contact Us | Rosetta Steps Education Center, Caldwell Road, Liberia",
    description: "Contact Rosetta Steps Education Center on Caldwell Road, Bushrod Island, Montserrado County, Liberia. Call +231 88 628 4711, email info@rosettasteps.org or send an enquiry about admissions, scholarships or giving.",
    url: `${BASE_PATH}/contact/`,
    images: [url("/assets/img/hero.jpg")]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Rosetta Steps Education Center, Caldwell Road, Liberia",
    description: "Contact Rosetta Steps Education Center on Caldwell Road, Bushrod Island, Montserrado County, Liberia. Call +231 88 628 4711, email info@rosettasteps.org or send an enquiry about admissions, scholarships or giving.",
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
              <ol className="breadcrumb"><li><Link href="/">Home</Link></li><li aria-current="page">Contact</li></ol>
              <p className="eyebrow">Contact us</p>
              <h1>Come and see us in <span className="text-accent">Caldwell</span></h1>
              <p>Questions about enrolment, scholarships, volunteering or giving — our office door is open on weekday mornings. We answer every message.</p>
            </div>
          </div>
        </section>
        <section className="section section--white">
          <div className="container split">
            <div data-reveal="left">
              <p className="eyebrow">School information</p>
              <h2>Rosetta Steps Education Center</h2>
              <p>We are on Caldwell Road, Bushrod Island, a short walk from the main junction. Visitors are welcome; please come to the office first so we can sign you in.</p>
              <div className="contact-info" style={{marginTop: 26}}>
                <div className="info-row"><span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 21.2s7.2-6.5 7.2-11.2a7.2 7.2 0 1 0-14.4 0c0 4.7 7.2 11.2 7.2 11.2Z" /><circle cx={12} cy={10} r="2.7" /></svg></span><div><strong>Address</strong><span>Caldwell Road<br />Bushrod Island, Montserrado County<br />Liberia</span></div></div>
                <div className="info-row"><span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M6.6 3.5h3.1l1.5 4-2.1 1.5a12.4 12.4 0 0 0 6.4 6.4l1.5-2.1 4 1.5v3.1a1.9 1.9 0 0 1-2.1 2A17.4 17.4 0 0 1 4.6 5.6a1.9 1.9 0 0 1 2-2.1Z" /></svg></span><div><strong>Phone &amp; WhatsApp</strong><span><a href="tel:+231886284711">+231 88 628 4711</a></span></div></div>
                <div className="info-row"><span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="2.8" y={5} width="18.4" height={14} rx="2.4" /><path d="m3.4 6.6 8.6 6.6 8.6-6.6" /></svg></span><div><strong>Email</strong><span><a href="mailto:info@rosettasteps.org">info@rosettasteps.org</a><br /><a href="mailto:info@rosettasteps.org">info@rosettasteps.org</a></span></div></div>
                <div className="info-row"><span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx={12} cy={12} r={9} /><path d="M12 7v5.3l3.5 2" /></svg></span><div><strong>Office hours</strong><span>Monday – Friday, 8:00am – 4:00pm<br />Saturday programmes: 9:00am – 12:00pm</span></div></div>
              </div>
              <div className="socials" style={{marginTop: 24}}>
                <a href="https://www.facebook.com/rosettasteps" aria-label="Rosetta Steps on Facebook" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M13.4 21v-7.3h2.5l.5-3h-3V9c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.4-.1-2.3 0-3.9 1.4-3.9 4v2H8v3h2.4V21h3Z" /></svg></a>
                <a href="https://www.instagram.com/rosettasteps" aria-label="Rosetta Steps on Instagram" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx={5} /><circle cx={12} cy={12} r="4.2" /><circle cx="17.2" cy="6.8" r="1.1" /></svg></a>
                <a href="https://wa.me/231886284711" aria-label="Chat with Rosetta Steps on WhatsApp" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M20.4 11.6a8.4 8.4 0 0 1-12.5 7.4L3.6 20.4l1.4-4.1a8.4 8.4 0 1 1 15.4-4.7Z" /><path d="M8.8 8.2c-.3.8-.1 2 .9 3.4 1 1.4 2.2 2.4 3.4 2.8 1.2.4 2 .2 2.5-.4l-1.8-1.5-1 .7c-.9-.4-1.7-1.2-2.2-2.1l.7-1-1.2-1.8c-.5-.2-.9-.3-1.3-.1Z" /></svg></a>
                <a href="https://www.youtube.com/@rosettasteps" aria-label="Rosetta Steps on YouTube" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M21.6 8.2a2.5 2.5 0 0 0-1.8-1.8C18.2 6 12 6 12 6s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 8.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 3.8 2.5 2.5 0 0 0 1.8 1.8C5.8 18 12 18 12 18s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-3.8Z" /><path d="m10.2 15 5.2-3-5.2-3v6Z" /></svg></a>
              </div>
              <p className="note" style={{marginTop: 18}}>For media enquiries, please email <a href="mailto:info@rosettasteps.org">info@rosettasteps.org</a> or call the office on <a href="tel:+231886284711">+231 88 628 4711</a>.</p>
            </div>
            <div className="form-card" data-reveal="right">
              <h3 style={{marginBottom: 6}}>Send us a message</h3>
              <p className="note" style={{marginBottom: 22}}>Fields marked <span style={{color: 'var(--pink-600)'}}>*</span> are required.</p>
              <form data-demo-form noValidate>
                <div className="form-grid">
                  <div className="field field--full">
                    <label htmlFor="full-name">Full name <span className="req">*</span></label>
                    <input id="full-name" name="full-name" type="text" autoComplete="name" placeholder="Your name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-email">Email <span className="req">*</span></label>
                    <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-phone">Phone</label>
                    <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="+231 77 000 0000" />
                  </div>
                  <div className="field field--full">
                    <label htmlFor="subject">Subject <span className="req">*</span></label>
                    <select id="subject" name="subject" required>
                      <option value>What is this about?</option>
                      <option>Enrolment &amp; admissions</option>
                      <option>Scholarships &amp; fee support</option>
                      <option>Literacy &amp; community programmes</option>
                      <option>Donations &amp; sponsorship</option>
                      <option>Volunteering</option>
                      <option>Media &amp; partnerships</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div className="field field--full">
                    <label htmlFor="contact-message">Message <span className="req">*</span></label>
                    <textarea id="contact-message" name="message" placeholder="How can we help?" required defaultValue={""} />
                  </div>
                </div>
                <p className="form-note">We reply within two school days. Your details stay with us.</p>
                <div style={{marginTop: 18}}>
                  <button className="btn btn--primary" type="submit">Send message <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></button>
                </div>
              </form>
              <div className="form-success" tabIndex={-1}><span data-success-text>Thank you. Your message is ready for our team.</span></div>
            </div>
          </div>
        </section>
        <section className="section section--cream" id="giving">
          <div className="container">
            <div className="section-head-row">
              <div className="section-head" data-reveal>
                <p className="eyebrow">Giving &amp; partnerships</p>
                <h2>Give by bank transfer or mobile money</h2>
                <p>To keep every gift secure, we share current banking and mobile-money details directly from the office. Tell us the amount and the fund you have in mind and we will send everything you need.</p>
              </div>
              <a className="btn btn--primary" href="mailto:info@rosettasteps.org?subject=Giving%20to%20Rosetta%20Steps" data-reveal>Request giving details <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></a>
            </div>
            <div className="grid grid--3">
              <div className="info-row" data-reveal><span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx={12} cy={12} r="8.6" /><path d="M12 7.4v9.2" /><path d="M14.6 9.5c-.5-.8-1.5-1.3-2.6-1.3-1.4 0-2.4.8-2.4 1.9 0 1 .8 1.5 2.4 1.9 1.6.4 2.4.9 2.4 1.9 0 1.1-1 1.9-2.4 1.9-1.1 0-2.1-.5-2.6-1.3" /></svg></span><div><strong>Bank transfer</strong><span>For one-time gifts, monthly standing orders and corporate partnerships.</span></div></div>
              <div className="info-row" data-reveal data-delay={70}><span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M6.6 3.5h3.1l1.5 4-2.1 1.5a12.4 12.4 0 0 0 6.4 6.4l1.5-2.1 4 1.5v3.1a1.9 1.9 0 0 1-2.1 2A17.4 17.4 0 0 1 4.6 5.6a1.9 1.9 0 0 1 2-2.1Z" /></svg></span><div><strong>Mobile money</strong><span>For gifts from within Liberia, with a receipt issued the same week.</span></div></div>
              <div className="info-row" data-reveal data-delay={140}><span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></svg></span><div><strong>In-kind support</strong><span>Books, stationery, furniture, roofing and reading materials are all welcome.</span></div></div>
            </div>
          </div>
        </section>
        <section className="section section--white">
          <div className="container">
            <div className="section-head-row">
              <div className="section-head" data-reveal>
                <p className="eyebrow">Find us</p>
                <h2>Caldwell Road, Bushrod Island</h2>
                <p>Use the map to plan your visit. If you are coming by public transport, ask for Caldwell Road and call us — someone will meet you.</p>
              </div>
              <a className="btn btn--ghost btn--sm" href="https://www.google.com/maps/search/?api=1&query=Caldwell+Road+Bushrod+Island+Monrovia+Liberia" target="_blank" rel="noopener noreferrer" data-reveal>Open in Google Maps <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></a>
            </div>
            <div className="map-frame" data-reveal="scale">
              <iframe title="Map showing Caldwell Road, Bushrod Island, Monrovia, Liberia" src="https://www.google.com/maps?q=Caldwell%20Road%2C%20Bushrod%20Island%2C%20Monrovia%2C%20Liberia&output=embed" width="100%" height={420} style={{border: 0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
          </div>
        </section>
        <section className="section section--flush-top">
          <div className="container">
            <div className="cta-strip" data-reveal="scale">
              <div>
                <h2>Prefer to talk to a person?</h2>
                <p>Call the office on +231 88 628 4711, Monday to Friday between 8:00am and 4:00pm.</p>
              </div>
              <div className="btn-group">
                <a className="btn btn--light" href="tel:+231886284711">Call the school <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg></a>
                <Link className="btn btn--outline-light" href="/admissions/">See admissions</Link>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
