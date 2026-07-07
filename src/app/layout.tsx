import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteInfo, siteUrl } from "@/data/nav";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const title = "Akshar Travels — Outstation Cabs, Booked Your Way";
const description =
  "Book one-way, round-trip, local and airport-transfer cabs across 50+ cities. Verified drivers, transparent per-km pricing, no surge — ever.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Akshar Travels",
  },
  description,
  applicationName: "Akshar Travels",
  keywords: [
    "outstation cabs",
    "one way cab booking",
    "round trip taxi",
    "airport transfer cab",
    "local hourly cab rental",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Akshar Travels",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "Akshar Travels",
  description,
  url: siteUrl,
  telephone: siteInfo.phoneHref.replace("tel:", ""),
  email: siteInfo.email,
  areaServed: "IN",
  address: {
    "@type": "PostalAddress",
    addressLocality: siteInfo.city,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-sand text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ember-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-sand"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
