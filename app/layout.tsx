import type { Metadata, Viewport } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import MobileNav from "@/components/MobileNav";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7f8" },
    { media: "(prefers-color-scheme: dark)", color: "#101a22" },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: {
    default: "Sudarshan Recovery Center | Leading De-Addiction in West Bengal",
    template: "%s | Sudarshan Recovery Center"
  },
  description: "Evidence-based de-addiction and residential recovery programs in Kharagpur, West Bengal. ISO 9001:2015 Certified facility with 24/7 medical care.",
  keywords: ["rehab center kharagpur", "de-addiction center west bengal", "drug rehab", "alcohol rehabilitation", "Sudarshan Recovery Center"],
  authors: [{ name: "Sudarshan Recovery Center" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.sudarshanrecovery.org",
    title: "Sudarshan Recovery Center",
    description: "Your safe path to addiction recovery with clinical excellence.",
    siteName: "Sudarshan Recovery Center",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Sudarshan Recovery Center Clinical Facility"
    }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Sudarshan De-Addiction and Research Center",
    "alternateName": "Sudarshan Recovery Center",
    "image": "https://www.sudarshanrecovery.org/images/hero.jpg",
    "description": "Leading non-profit medical rehab facility specializing in de-addiction and mental health research.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Malancha Road, Near Inda Overbridge",
      "addressLocality": "Kharagpur",
      "addressRegion": "Paschim Medinipur, West Bengal",
      "postalCode": "721301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.335359,
      "longitude": 87.218556
    },
    "url": "https://www.sudarshanrecovery.org",
    "telephone": "+919804188668",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "award": "ISO 9001:2015 Certified Facility"
  };

  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${publicSans.className} antialiased overflow-x-hidden pb-20 lg:pb-0`}>
        <Providers>
          {children}
          <MobileNav />
        </Providers>
      </body>
    </html>
  );
}
