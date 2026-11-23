"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { asset } from "../lib/asset";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/academics/", label: "Academics" },
  { href: "/literacy/", label: "Literacy" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/news/", label: "News" },
  { href: "/admissions/", label: "Admissions" },
  { href: "/contact/", label: "Contact" }
];

export default function SiteHeader() {
  /* usePathname may or may not include the base path, depending on where the
     site is mounted, so strip it before comparing. */
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const pathname = usePathname() || "/";
  const path = base && pathname.startsWith(base) ? pathname.slice(base.length) || "/" : pathname;

  return (
    <header className="site-header">
      <div className="container header-inner">
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
        <nav className="primary-nav" id="primaryNav" aria-label="Primary">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={path === item.href ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-cta btn-group">
            <Link className="btn btn--ghost btn--sm" href="/donate/">
              Donate
            </Link>
            <Link className="btn btn--primary btn--sm" href="/admissions/">
              Enroll Today
            </Link>
          </div>
        </nav>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="primaryNav"
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
