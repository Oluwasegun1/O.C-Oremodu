import React from "react";
import { Metadata } from "next";
import { LAWYER_DATA } from "@/data/lawyer";
import ConsultationForm from "@/components/consultation/ConsultationForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ShieldCheck,
  Building,
  ArrowUpRight,
} from "lucide-react";
import { formatWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact & Book a Consultation | Legal Chambers, Ikoyi, Lagos",
  description: `Schedule a confidential legal consultation with ${LAWYER_DATA.name}, Barrister & Solicitor in Ikoyi, Lagos, Nigeria. In-person and virtual consultation available.`,
};

export default function ContactPage() {
  const whatsappUrl = formatWhatsAppLink(
    LAWYER_DATA.contact.whatsappNumber,
    "Hello Barrister Adebayo, I would like to schedule an initial consultation regarding a legal matter."
  );

  return (
    <div className="bg-[#F7F5F0] text-[#171A1D]">
      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-[#F7F5F0] py-16 sm:py-20 border-b border-[#B08D57]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
              Client Consultations & Inquiries
            </span>
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Let&apos;s Discuss Your Legal Matter
            </h1>
            <p className="text-sm sm:text-base text-[#E5E7EB]/80 font-light leading-relaxed">
              If you require strategic counsel, courtroom advocacy, contractual review, or guidance regarding Nigerian regulatory compliance, our chambers is at your disposal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact & Chambers Information */}
            <div className="lg:col-span-5 space-y-8">
              {/* Chambers Address Card */}
              <div className="bg-white border border-[#E8E5DF] p-8 space-y-6 shadow-xs">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B08D57] block">
                  Chambers Location
                </span>

                <div className="space-y-4 text-xs text-[#171A1D]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-serif-title text-base font-semibold text-[#0B1F33]">
                        {LAWYER_DATA.firmName}
                      </h3>
                      <p className="text-[#6B7280] leading-relaxed mt-1">
                        {LAWYER_DATA.address.suite}
                        <br />
                        {LAWYER_DATA.address.building}, {LAWYER_DATA.address.street}
                        <br />
                        {LAWYER_DATA.address.area}, {LAWYER_DATA.address.city}, {LAWYER_DATA.address.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-[#E8E5DF]">
                    <Phone className="w-4 h-4 text-[#B08D57] shrink-0" />
                    <div>
                      <span className="text-[10px] text-[#6B7280] uppercase tracking-wider block">Direct Phone</span>
                      <a href={`tel:${LAWYER_DATA.contact.phone}`} className="font-mono text-[#0B1F33] hover:text-[#B08D57] font-semibold">
                        {LAWYER_DATA.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-[#E8E5DF]">
                    <Mail className="w-4 h-4 text-[#B08D57] shrink-0" />
                    <div>
                      <span className="text-[10px] text-[#6B7280] uppercase tracking-wider block">Official Inquiries</span>
                      <a href={`mailto:${LAWYER_DATA.contact.email}`} className="text-[#0B1F33] hover:text-[#B08D57]">
                        {LAWYER_DATA.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-[#E8E5DF]">
                    <Clock className="w-4 h-4 text-[#B08D57] shrink-0" />
                    <div>
                      <span className="text-[10px] text-[#6B7280] uppercase tracking-wider block">Operating Hours</span>
                      <p className="text-[#6B7280]">{LAWYER_DATA.contact.officeHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Direct Action Box */}
              <div className="bg-[#0B1F33] text-white p-8 border border-[#B08D57]/30 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 border border-[#B08D57] flex items-center justify-center text-[#B08D57]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif-title text-lg font-semibold text-white">
                      WhatsApp Business Liaison
                    </h3>
                    <span className="text-[10px] text-[#B08D57] uppercase tracking-wider">
                      Rapid Scheduling
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#E5E7EB]/80 leading-relaxed font-light">
                  Particularly convenient for international callers, expatriates, and urgent commercial consultations requiring prompt schedule coordination.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#B08D57] text-[#0B1F33] hover:bg-[#C5A069] text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  Chat on WhatsApp Business
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Engagement Expectations Box */}
              <div className="bg-white border border-[#E8E5DF] p-6 space-y-3 text-xs text-[#6B7280]">
                <div className="flex items-center gap-2 text-[#0B1F33] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#B08D57]" />
                  <span>What to Expect After Submitting</span>
                </div>
                <ol className="list-decimal list-inside space-y-1.5 leading-relaxed text-[11px]">
                  <li>Our practice coordinator logs your inquiry into our registry.</li>
                  <li>We conduct a mandatory internal conflict-of-interest screening.</li>
                  <li>You receive an email confirmation within 1 business day with available meeting times.</li>
                  <li>Meetings are hosted in-person at Ikoyi or via secure video link (Zoom/Teams).</li>
                </ol>
              </div>
            </div>

            {/* Right Consultation Form */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
