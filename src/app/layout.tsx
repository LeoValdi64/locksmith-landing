import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KeyMaster Locksmith | 24/7 Emergency Locksmith in Dallas, TX",
  description:
    "KeyMaster Locksmith provides 24/7 emergency locksmith services in Dallas, TX. Residential, commercial, automotive lockouts, lock rekeying, smart locks, safe opening & key duplication. Fast response, licensed & insured.",
  keywords: [
    "locksmith Dallas TX",
    "emergency locksmith",
    "24/7 locksmith",
    "car lockout Dallas",
    "residential locksmith",
    "commercial locksmith",
    "lock rekeying",
    "smart locks installation",
    "safe opening",
    "key duplication Dallas",
  ],
  openGraph: {
    title: "KeyMaster Locksmith | 24/7 Emergency Locksmith in Dallas, TX",
    description:
      "Locked out? We are on our way. KeyMaster Locksmith offers fast, reliable 24/7 locksmith services across Dallas, TX and surrounding areas.",
    url: "https://keymasterlocksmith.com",
    siteName: "KeyMaster Locksmith",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KeyMaster Locksmith | 24/7 Emergency Locksmith Dallas, TX",
    description:
      "Fast, reliable locksmith services in Dallas. Available 24/7 for emergencies.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://keymasterlocksmith.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: "KeyMaster Locksmith",
    description:
      "24/7 emergency locksmith services in Dallas, TX. Residential, commercial, and automotive locksmith solutions.",
    url: "https://keymasterlocksmith.com",
    telephone: "+1-469-555-0127",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4521 Elm Street",
      addressLocality: "Dallas",
      addressRegion: "TX",
      postalCode: "75201",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.7767,
      longitude: -96.797,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      "Dallas",
      "Fort Worth",
      "Plano",
      "Irving",
      "Arlington",
      "Garland",
      "Frisco",
      "McKinney",
      "Richardson",
      "Mesquite",
    ],
    priceRange: "$$",
    image: "https://keymasterlocksmith.com/og-image.jpg",
    sameAs: [],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
