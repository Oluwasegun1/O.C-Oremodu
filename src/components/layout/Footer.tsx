import React from "react";
import Link from "next/link";
import { LAWYER_DATA } from "@/data/lawyer";
import { PRACTICE_AREAS } from "@/data/practice-areas";
import { MapPin, Phone, Mail, Clock, Shield, ArrowUpRight } from "lucide-react";
import { formatWhatsAppLink } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = formatWhatsAppLink(
    LAWYER_DATA.contact.whatsappNumber,
    "Hello Barrister Adebayo, I am contacting you through your practice website."
  );

  return (
    <footer className="bg-[#071524] text-[#F7F5F0] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Column 1: Identity & Chambers */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#B08D57] flex items-center justify-center bg-[#0B1F33] text-[#B08D57] font-serif-title text-xl font-bold">
                {LAWYER_DATA.initials}
              </div>
              <div>
                <span className="block font-serif-title text-xl font-semibold tracking-wide text-white">
                  {LAWYER_DATA.name.toUpperCase()}
                </span>
                <span className="block text-xs font-sans-body tracking-wider text-[#B08D57]">
                  {LAWYER_DATA.title}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#E5E7EB]/80 leading-relaxed font-sans-body max-w-md">
              Providing strategic legal counsel, commercial advisory, and dispute advocacy for corporations, financial institutions, private clients, and international investors navigating the Nigerian legal ecosystem.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {LAWYER_DATA.credentials.memberships.map((m) => (
                <span
                  key={m.acronym}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-sans-body border border-white/15 bg-white/5 text-[#E5E7EB]"
                >
                  <Shield className="w-3 h-3 text-[#B08D57]" />
                  {m.acronym}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="font-serif-title text-base font-semibold text-[#B08D57] tracking-wider uppercase mb-4 text-xs">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-[#E5E7EB]/80 hover:text-[#B08D57] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#E5E7EB]/80 hover:text-[#B08D57] transition-colors">
                  About the Practitioner
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="text-[#E5E7EB]/80 hover:text-[#B08D57] transition-colors">
                  Areas of Practice
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-[#E5E7EB]/80 hover:text-[#B08D57] transition-colors">
                  Selected Experience
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-[#E5E7EB]/80 hover:text-[#B08D57] transition-colors">
                  Legal Insights & Briefs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#E5E7EB]/80 hover:text-[#B08D57] transition-colors">
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h4 className="font-serif-title text-base font-semibold text-[#B08D57] tracking-wider uppercase mb-4 text-xs">
              Practice Areas
            </h4>
            <ul className="space-y-2.5 text-sm">
              {PRACTICE_AREAS.slice(0, 6).map((pa) => (
                <li key={pa.slug}>
                  <Link
                    href={`/practice-areas/${pa.slug}`}
                    className="text-[#E5E7EB]/80 hover:text-[#B08D57] transition-colors line-clamp-1"
                  >
                    {pa.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/practice-areas"
                  className="text-xs text-[#B08D57] hover:underline inline-flex items-center gap-1 pt-1"
                >
                  View All 8 Practice Areas
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Chambers Info */}
          <div>
            <h4 className="font-serif-title text-base font-semibold text-[#B08D57] tracking-wider uppercase mb-4 text-xs">
              Chambers & Contact
            </h4>
            <div className="space-y-3 text-xs text-[#E5E7EB]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {LAWYER_DATA.address.suite}, {LAWYER_DATA.address.building}, {LAWYER_DATA.address.street}, {LAWYER_DATA.address.area}, {LAWYER_DATA.address.city}, {LAWYER_DATA.address.country}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B08D57] shrink-0" />
                <a href={`tel:${LAWYER_DATA.contact.phone}`} className="hover:text-[#B08D57] transition-colors">
                  {LAWYER_DATA.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B08D57] shrink-0" />
                <a href={`mailto:${LAWYER_DATA.contact.email}`} className="hover:text-[#B08D57] transition-colors break-all">
                  {LAWYER_DATA.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                <p>{LAWYER_DATA.contact.officeHours}</p>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#B08D57]/40 text-[11px] text-[#B08D57] hover:bg-[#B08D57] hover:text-[#071524] transition-colors"
                >
                  Direct WhatsApp Liaison
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Block */}
        <div className="py-8 border-b border-white/10 text-xs text-[#E5E7EB]/60 space-y-3 leading-relaxed">
          <p className="font-semibold text-[#B08D57] uppercase tracking-wider text-[11px]">
            Legal Notice & Professional Disclaimer
          </p>
          <p>
            The legal analysis, publications, commentary, and descriptions provided on this website are published solely for general informational purposes and do not constitute formal legal advice. Neither browsing this website nor transmitting an electronic enquiry or consultation request creates a barrister-client or solicitor-client relationship between you and Barrister O.C Oremodu or Adebayo Legal & Advisory.
          </p>
          <p>
            Formal legal representation commences strictly upon mutual execution of a formal Letter of Engagement and completion of mandatory conflict-of-interest checks in accordance with the Rules of Professional Conduct for Legal Practitioners in Nigeria. Client confidentiality and legal professional privilege are upheld with utmost fidelity.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E5E7EB]/60">
          <p>
            © {currentYear} {LAWYER_DATA.name}. All Rights Reserved. Admitted to the Nigerian Bar (2008).
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#B08D57] transition-colors">
              Privacy Policy (NDPA 2023)
            </Link>
            <Link href="/terms-of-use" className="hover:text-[#B08D57] transition-colors">
              Terms of Use
            </Link>
            <Link href="/contact" className="hover:text-[#B08D57] transition-colors">
              Consultation Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
