import Link from "next/link";
import { asset } from "../lib/asset";

const SOCIAL = [
  {
    href: "https://www.facebook.com/rosettasteps",
    label: "Rosetta Steps on Facebook",
    path: "M13.4 21v-7.3h2.5l.5-3h-3V9c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.4-.1-2.3 0-3.9 1.4-3.9 4v2H8v3h2.4V21h3Z",
    fill: true
  },
  {
    href: "https://www.instagram.com/rosettasteps",
    label: "Rosetta Steps on Instagram",
    body: (
      <>
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx={5} />
        <circle cx={12} cy={12} r="4.2" />
        <circle cx="17.2" cy="6.8" r="1.1" />
      </>
    )
  },
  {
    href: "https://wa.me/231886284711",
    label: "Chat with Rosetta Steps on WhatsApp",
    body: (
      <>
        <path d="M20.4 11.6a8.4 8.4 0 0 1-12.5 7.4L3.6 20.4l1.4-4.1a8.4 8.4 0 1 1 15.4-4.7Z" />
        <path d="M8.8 8.2c-.3.8-.1 2 .9 3.4 1 1.4 2.2 2.4 3.4 2.8 1.2.4 2 .2 2.5-.4l-1.8-1.5-1 .7c-.9-.4-1.7-1.2-2.2-2.1l.7-1-1.2-1.8c-.5-.2-.9-.3-1.3-.1Z" />
      </>
    )
  },
  {
    href: "https://www.youtube.com/@rosettasteps",
    label: "Rosetta Steps on YouTube",
    fill: true,
    body: (
      <>
        <path d="M21.6 8.2a2.5 2.5 0 0 0-1.8-1.8C18.2 6 12 6 12 6s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 8.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 3.8 2.5 2.5 0 0 0 1.8 1.8C5.8 18 12 18 12 18s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-3.8Z" />
        <path d="m10.2 15 5.2-3-5.2-3v6Z" />
      </>
    )
  }
];

const EXPLORE = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About Us" },
  { href: "/academics/", label: "Academic Programs" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/news/", label: "News & Blog" }
];

const INVOLVED = [
  { href: "/admissions/", label: "Admissions" },
  { href: "/literacy/", label: "Literacy Programs" },
  { href: "/donate/", label: "Donate" },
  { href: "/contact/", label: "Contact Us" },
  { href: "/admissions/#inquiry", label: "Book a School Visit" }
];

function Icon({ children, fill }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/" aria-label="Rosetta Steps Education Center — home">
              <img
                className="brand-logo"
                src={asset("/assets/img/logo.png")}
                alt=""
                width={347}
                height={76}
                decoding="async"
              />
            </Link>
            <p>
              Empowering children through education, literacy and opportunity on Caldwell Road,
              Bushrod Island, Montserrado County, Liberia.
            </p>
            <div className="socials">
              {SOCIAL.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon fill={item.fill}>
                    {item.body || <path d={item.path} />}
                  </Icon>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>Explore</h4>
            <ul className="footer-links">
              {EXPLORE.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Get Involved</h4>
            <ul className="footer-links">
              {INVOLVED.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Visit Us</h4>
            <ul className="footer-contact">
              <li>
                <Icon>
                  <>
                    <path d="M12 21.2s7.2-6.5 7.2-11.2a7.2 7.2 0 1 0-14.4 0c0 4.7 7.2 11.2 7.2 11.2Z" />
                    <circle cx={12} cy={10} r="2.7" />
                  </>
                </Icon>
                <span>
                  Caldwell Road, Bushrod Island
                  <br />
                  Montserrado County, Liberia
                </span>
              </li>
              <li>
                <Icon>
                  <path d="M6.6 3.5h3.1l1.5 4-2.1 1.5a12.4 12.4 0 0 0 6.4 6.4l1.5-2.1 4 1.5v3.1a1.9 1.9 0 0 1-2.1 2A17.4 17.4 0 0 1 4.6 5.6a1.9 1.9 0 0 1 2-2.1Z" />
                </Icon>
                <a href="tel:+231886284711">+231 88 628 4711</a>
              </li>
              <li>
                <Icon>
                  <>
                    <rect x="2.8" y={5} width="18.4" height={14} rx="2.4" />
                    <path d="m3.4 6.6 8.6 6.6 8.6-6.6" />
                  </>
                </Icon>
                <a href="mailto:info@rosettasteps.org">info@rosettasteps.org</a>
              </li>
              <li>
                <Icon>
                  <>
                    <circle cx={12} cy={12} r={9} />
                    <path d="M12 7v5.3l3.5 2" />
                  </>
                </Icon>
                <span>School day: 8:30am – 4:00pm, Mon–Thu</span>
              </li>
            </ul>
            <Link className="btn btn--primary btn--sm" href="/donate/">
              Support a Child
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © <span data-year>2026</span> Rosetta Steps Education Center. All rights reserved.
          </p>
          <div className="footer-note">
            <span>Empowering Children Through Education, Literacy, and Opportunity</span>
            <a href="#main">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
