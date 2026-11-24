import { asset } from "../lib/asset";

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
      {/* The admin shell adds its body classes from an inline script before
          paint; the public pages leave body untouched. */}
      <body suppressHydrationWarning>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          precedence="default"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
        <link rel="icon" href={asset("/assets/img/favicon.svg")} type="image/svg+xml" />
        {children}
      </body>
    </html>
  );
}
