import Script from "next/script";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { asset } from "../../lib/asset";
import "../globals.css";

export const metadata = {
  alternates: { canonical: asset("/") },
  openGraph: {
    type: "website",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR"
  },
  twitter: { card: "summary_large_image" }
};

export default function SiteLayout({ children }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <SiteHeader />
      <div className="nav-overlay" aria-hidden="true"></div>
      <main id="main">{children}</main>
      <SiteFooter />
      <Script src={asset("/assets/js/main.js")} strategy="afterInteractive" />
    </>
  );
}
