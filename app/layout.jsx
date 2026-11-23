import Script from "next/script";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { asset } from "../lib/asset";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://deviskalo.github.io"),
  title: {
    default: "Rosetta Steps Education Center Liberia | Quality Education in Caldwell, Montserrado",
    template: "%s"
  },
  description:
    "Rosetta Steps Education Center is a preschool to Grade 6 school on Caldwell Road, Bushrod Island, Montserrado County, Liberia.",
  applicationName: "Rosetta Steps Education Center",
  authors: [{ name: "Rosetta Steps Education Center" }],
  alternates: { canonical: asset("/") },
  openGraph: {
    type: "website",
    siteName: "Rosetta Steps Education Center",
    locale: "en_LR"
  },
  twitter: { card: "summary_large_image" }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E85D9E"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          precedence="default"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
        <link rel="icon" href={asset("/assets/img/favicon.svg")} type="image/svg+xml" />
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <SiteHeader />
        <div className="nav-overlay" aria-hidden="true"></div>
        <main id="main">{children}</main>
        <SiteFooter />
        <Script src={asset("/assets/js/main.js")} strategy="afterInteractive" />
      </body>
    </html>
  );
}
