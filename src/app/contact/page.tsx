import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { LAWYER_DATA } from "@/data/lawyer";
import ConsultationForm from "@/components/consultation/ConsultationForm";
import MotionReveal from "@/components/ui/MotionReveal";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { formatWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Contact ${LAWYER_DATA.name} | Legal Enquiries — Lagos, Nigeria`,
  description: `Connect directly with ${LAWYER_DATA.name} (LL.B, B.L, AICMC) in Lagos, Nigeria via email (${LAWYER_DATA.contact.email}), telephone (${LAWYER_DATA.contact.phoneDisplay}), WhatsApp, or online enquiry form.`,
};

export default function ContactPage() {
  const whatsappUrl = formatWhatsAppLink(
    LAWYER_DATA.contact.whatsappNumber,
    `Hello ${LAWYER_DATA.name}, I would like to connect regarding a legal enquiry.`
  );

  return (
    <div className="bg-[#F7F5F0] text-[#171A1D]">
      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-[#F7F5F0] py-16 sm:py-20 border-b border-[#B08D57]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="hero-stagger-1 inline-block text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold">
              Direct Contact &amp; Enquiries
            </span>
            <h1 className="hero-stagger-2 font-serif-title text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
              Let&apos;s Discuss Your Legal Matter
            </h1>
            <p className="hero-stagger-3 text-sm sm:text-base text-[#E5E7EB]/85 font-light leading-relaxed">
              Reach out for legal drafting and research support, corporate or property documentation, ADR mediation assistance, pro bono initiatives, or associate opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Direct Contact & Portrait Card */}
            <div className="lg:col-span-5 space-y-7">
              {/* Personal Trust Card with KC7 Portrait */}
              <MotionReveal variant="scale-in">
                <div className="editorial-portrait-frame bg-white border border-[#E8E5DF] overflow-hidden shadow-xs hover:border-[#B08D57]/60 transition-colors">
                  <div className="grid grid-cols-1 sm:grid-cols-12 items-stretch">
                    <div className="sm:col-span-5 relative aspect-[3/4] sm:aspect-auto sm:min-h-[210px] bg-[#071524] overflow-hidden">
                      <Image
                        src="/images/kc7.jpg"
                        alt={`Portrait of ${LAWYER_DATA.name}`}
                        fill
                        priority
                        className="portrait-img object-cover object-top"
                        sizes="(max-width: 640px) 92vw, 220px"
                      />
                    </div>
                    <div className="sm:col-span-7 p-6 flex flex-col justify-center space-y-2">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#B08D57] font-semibold">
                        Legal Practitioner
                      </span>
                      <h2 className="font-serif-title text-2xl font-semibold text-[#0B1F33] leading-tight">
                        {LAWYER_DATA.name}
                      </h2>
                      <p className="text-xs text-[#6B7280] font-medium">
                        LL.B • B.L • AICMC • LL.M (In View)
                      </p>
                      <p className="text-xs text-[#171A1D]/75 font-light leading-relaxed pt-1">
                        Based in Lagos, Nigeria; available for virtual consultations and in-person meetings by arrangement.
                      </p>
                    </div>
                  </div>
                </div>
              </MotionReveal>

              {/* Direct Contact Information Card */}
              <MotionReveal delay={80}>
                <div className="bg-white border border-[#E8E5DF] p-8 space-y-5 shadow-xs">
                  <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#B08D57] block">
                    Contact Information
                  </span>

                  <div className="space-y-4 text-xs text-[#171A1D]">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-[#6B7280] uppercase tracking-wider block">
                          Location
                        </span>
                        <p className="text-[#0B1F33] font-medium mt-0.5">
                          {LAWYER_DATA.location}
                        </p>
                        <p className="text-[#6B7280] mt-0.5">
                          Practice exposure across Lagos, Ogun, Osun &amp; Akwa Ibom States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-[#E8E5DF]">
                      <Phone className="w-4 h-4 text-[#B08D57] shrink-0" />
                      <div>
                        <span className="text-[10px] text-[#6B7280] uppercase tracking-wider block">
                          Telephone
                        </span>
                        <a
                          href={`tel:${LAWYER_DATA.contact.phone}`}
                          className="font-mono text-sm text-[#0B1F33] hover:text-[#B08D57] font-semibold"
                        >
                          {LAWYER_DATA.contact.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-[#E8E5DF]">
                      <Mail className="w-4 h-4 text-[#B08D57] shrink-0" />
                      <div>
                        <span className="text-[10px] text-[#6B7280] uppercase tracking-wider block">
                          Direct Email
                        </span>
                        <a
                          href={`mailto:${LAWYER_DATA.contact.email}`}
                          className="text-sm text-[#0B1F33] hover:text-[#B08D57] break-all font-medium"
                        >
                          {LAWYER_DATA.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-[#E8E5DF]">
                      <Clock className="w-4 h-4 text-[#B08D57] shrink-0" />
                      <div>
                        <span className="text-[10px] text-[#6B7280] uppercase tracking-wider block">
                          Availability
                        </span>
                        <p className="text-[#6B7280]">{LAWYER_DATA.contact.availability}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionReveal>

              {/* WhatsApp Direct Box */}
              <MotionReveal delay={130}>
                <div className="bg-[#0B1F33] text-white p-7 border border-[#B08D57]/30 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-[#B08D57] flex items-center justify-center text-[#B08D57]">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif-title text-xl font-semibold text-white">
                        WhatsApp Direct Messaging
                      </h3>
                      <span className="text-[10px] text-[#C5A069] uppercase tracking-wider">
                        {LAWYER_DATA.contact.whatsappDisplay}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#E5E7EB]/80 leading-relaxed font-light">
                    For prompt scheduling or quick follow-up regarding consultations, legal drafting, or professional enquiries.
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-sheen w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#B08D57] text-[#0B1F33] hover:bg-[#C5A069] text-xs font-semibold uppercase tracking-[0.15em] transition-colors"
                  >
                    Chat on WhatsApp
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </MotionReveal>

              {/* What to Expect */}
              <MotionReveal delay={170}>
                <div className="bg-white border border-[#E8E5DF] p-6 space-y-3 text-xs text-[#6B7280]">
                  <div className="flex items-center gap-2 text-[#0B1F33] font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#B08D57]" />
                    <span>What to Expect After Reaching Out</span>
                  </div>
                  <ol className="list-decimal list-inside space-y-1.5 leading-relaxed text-[11px]">
                    <li>Your enquiry is reviewed confidentially.</li>
                    <li>You receive a response within one business day via your preferred contact channel.</li>
                    <li>We confirm scope, relevant timelines, and meeting format (virtual or in-person by arrangement).</li>
                  </ol>
                </div>
              </MotionReveal>
            </div>

            {/* Right Consultation Form */}
            <MotionReveal delay={100} className="lg:col-span-7">
              <ConsultationForm />
            </MotionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
