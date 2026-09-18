import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { SELECTED_MATTERS, LEGAL_PROCESS_STEPS } from "@/data/experience";
import { LAWYER_DATA } from "@/data/lawyer";
import { Shield, ArrowRight, CheckCircle2, MapPin, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Selected Experience & Representative Matters | Nigerian Legal Counsel",
  description: `Representative advisory, corporate restructuring, arbitration, and commercial dispute matters handled by ${LAWYER_DATA.name}, Barrister & Solicitor.`,
};

export default function ExperiencePage() {
  return (
    <div className="bg-[#F7F5F0] text-[#171A1D]">
      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-[#F7F5F0] py-16 sm:py-20 border-b border-[#B08D57]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
              Track Record & Case Studies
            </span>
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Selected Experience
            </h1>
            <p className="text-sm sm:text-base text-[#E5E7EB]/80 font-light leading-relaxed">
              Illustrative summaries of commercial advisory, statutory regularizations, and dispute advocacy handled across Nigerian jurisdictions.
            </p>
          </div>
        </div>
      </section>

      {/* Confidentiality Notice Bar */}
      <section className="bg-[#071524] text-[#F7F5F0] border-b border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start sm:items-center gap-3 text-xs text-[#E5E7EB]/80">
            <Shield className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed">
              <strong className="text-[#B08D57]">Strict Client Confidentiality Notice:</strong> In compliance with the Rules of Professional Conduct for Legal Practitioners and statutory obligations of legal professional privilege, client identities and proprietary details have been anonymized. All descriptions reflect general principles and verified outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Matters Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SELECTED_MATTERS.map((m) => (
              <div
                key={m.id}
                className="bg-white border border-[#E8E5DF] p-8 sm:p-10 flex flex-col justify-between hover:border-[#B08D57] transition-colors shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8E5DF] pb-3">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B08D57] bg-[#B08D57]/10 px-2.5 py-0.5">
                      {m.category}
                    </span>
                    <span className="text-[11px] text-[#6B7280] font-mono flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#B08D57]" />
                      {m.jurisdiction}
                    </span>
                  </div>

                  <h3 className="font-serif-title text-2xl font-semibold text-[#0B1F33] leading-snug">
                    {m.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#171A1D]/80 leading-relaxed font-light">
                    {m.summary}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#0B1F33] block">
                      Counsel Actions & Legal Measures:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#6B7280]">
                      {m.keyDetails.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B08D57] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E5DF] bg-[#F7F5F0] -mx-8 -mb-8 sm:-mx-10 sm:-mb-10 p-5 text-xs">
                  <span className="font-semibold text-[#B08D57] uppercase tracking-wider block mb-1">
                    Outcome & Resolution
                  </span>
                  <p className="text-[#0B1F33] font-medium leading-relaxed">
                    {m.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Approach Legal Matters */}
      <section className="py-20 bg-[#0B1F33] text-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold block mb-2">
              Our Methodology
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
              How We Approach Legal Matters
            </h2>
            <p className="text-xs sm:text-sm text-[#E5E7EB]/75 mt-3 leading-relaxed font-light">
              Every instruction is treated as a unique strategic undertaking. We eliminate unnecessary ambiguity by adhering to a tested four-stage trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEGAL_PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-[#071524] border border-white/10 p-7 space-y-3"
              >
                <span className="font-mono text-xs font-bold text-[#B08D57]">
                  Phase {step.step}
                </span>
                <h3 className="font-serif-title text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-[#E5E7EB]/70 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 bg-[#071524] border border-[#B08D57]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-serif-title text-xl font-semibold text-white">
                Facing a contentious dispute or commercial transaction?
              </h4>
              <p className="text-xs text-[#E5E7EB]/70 mt-1 font-light">
                Submit an inquiry for preliminary conflict assessment and strategy consultation.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 px-6 py-3 bg-[#B08D57] text-[#0B1F33] hover:bg-[#C5A069] text-xs font-semibold uppercase tracking-widest transition-colors inline-flex items-center gap-2"
            >
              Book Consultation
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
