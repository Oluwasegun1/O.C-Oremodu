import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://adebayolegal.ng"),
  title: {
    default: `${LAWYER_DATA.name} | ${LAWYER_DATA.title}, Lagos, Nigeria`,
    template: `%s | ${LAWYER_DATA.name} — Barrister & Solicitor`,
  },
  description: `${LAWYER_DATA.name} provides strategic legal counsel, corporate advisory, arbitration, and commercial dispute resolution in Lagos, Nigeria.`,
  keywords: [
    "Nigerian Lawyer",
    "Barrister Lagos",
    "Solicitor Supreme Court Nigeria",
    "Commercial Lawyer Lagos",
    "Arbitration MCIArb Nigeria",
    "Corporate Lawyer Ikoyi",
    "Property Law Lagos Land Registry",
    "O.C Oremodu Lawyer",
  ],
  authors: [{ name: LAWYER_DATA.name }],
  creator: LAWYER_DATA.name,
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://adebayolegal.ng",
    title: `${LAWYER_DATA.name} | ${LAWYER_DATA.title}`,
    description: LAWYER_DATA.heroSubtext,
    siteName: `${LAWYER_DATA.name} Chambers`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${LAWYER_DATA.name} | ${LAWYER_DATA.title}`,
    description: LAWYER_DATA.heroSubtext,
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
    "@type": ["LegalService", "Attorney"],
    name: `${LAWYER_DATA.name} — ${LAWYER_DATA.title}`,
    description: LAWYER_DATA.heroSubtext,
    url: "https://adebayolegal.ng",
    telephone: LAWYER_DATA.contact.phone,
    email: LAWYER_DATA.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${LAWYER_DATA.address.suite}, ${LAWYER_DATA.address.building}, ${LAWYER_DATA.address.street}`,
      addressLocality: LAWYER_DATA.address.area,
      addressRegion: LAWYER_DATA.address.city,
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.4549",
      longitude: "3.4246",
    },
    openingHours: "Mo-Fr 08:30-17:30",
    priceRange: "$$",
    knowsLanguage: ["en"],
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
        <Header />
        <main className="flex-grow">{children}</main>
        <WhatsAppFloatingButton />
        <Footer />
      </body>
    </html>
  );
}
