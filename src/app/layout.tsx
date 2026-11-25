import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import InitialPageLoader from "@/components/ui/InitialPageLoader";
import { LAWYER_DATA } from "@/data/lawyer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://olubunmioremodu.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${LAWYER_DATA.name} | Legal Practitioner (LL.B, B.L, AICMC) — Lagos, Nigeria`,
    template: `%s | ${LAWYER_DATA.name} — Legal Practitioner`,
  },
  description: `${LAWYER_DATA.name} (LL.B, B.L, AICMC) is a Nigerian legal practitioner with experience across private practice, Ministries of Justice, corporate and property documentation, litigation support, ADR mediation, and human-rights advocacy.`,
  keywords: [
    "Olubunmi Chioma Oremodu",
    "Nigerian Legal Practitioner",
    "Lawyer Lagos Nigeria",
    "LL.B B.L AICMC Nigeria",
    "Corporate and Commercial Legal Support Nigeria",
    "ADR Mediation AICMC Nigeria",
    "Legal Research and Drafting Lagos",
    "Property and Land Documentation Nigeria",
  ],
  authors: [{ name: LAWYER_DATA.name }],
  creator: LAWYER_DATA.name,
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    title: `${LAWYER_DATA.name} | Legal Practitioner (LL.B, B.L, AICMC)`,
    description: LAWYER_DATA.heroSubtext,
    siteName: LAWYER_DATA.name,
    images: [
      {
        url: "/images/kc2.jpg",
        width: 2054,
        height: 2739,
        alt: `${LAWYER_DATA.name}, Nigerian Legal Practitioner`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${LAWYER_DATA.name} | Legal Practitioner (LL.B, B.L, AICMC)`,
    description: LAWYER_DATA.heroSubtext,
    images: ["/images/kc2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: LAWYER_DATA.name,
    jobTitle: "Legal Practitioner (LL.B, B.L, AICMC)",
    description: LAWYER_DATA.biography.shortLead,
    url: siteUrl,
    image: `${siteUrl}/images/kc2.jpg`,
    telephone: LAWYER_DATA.contact.phone,
    email: LAWYER_DATA.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Nigerian Law School, Victoria Island, Lagos",
      },
      {
        "@type": "EducationalOrganization",
        name: "Olabisi Onabanjo University",
      },
      {
        "@type": "EducationalOrganization",
        name: "Babcock University",
      },
    ],
    knowsLanguage: ["en", "yo", "ig"],
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F5F0] text-[#171A1D] font-sans-body">
        <InitialPageLoader />
        <ScrollProgressBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <WhatsAppFloatingButton />
        <Footer />
      </body>
    </html>
  );
}
