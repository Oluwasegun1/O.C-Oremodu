import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  WORK_EXPERIENCE,
  PRO_BONO_EXPERIENCE,
  LEGAL_PROCESS_STEPS,
} from "@/data/experience";
import { LAWYER_DATA } from "@/data/lawyer";
import MotionReveal from "@/components/ui/MotionReveal";
import {
  Briefcase,
  ArrowRight,
  CheckCircle2,
  MapPin,
  HeartHandshake,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Experience & Pro Bono Record",
  description: `Verified legal work history across Ministries of Justice and private law firms plus volunteer and pro bono legal initiatives of ${LAWYER_DATA.name} (LL.B, B.L, AICMC).`,
};

export default function ExperiencePage() {
  return (
    <div className="bg-[#F7F5F0] text-[#171A1D]">
      {/* Header Banner with KC8 Courtroom-Style Plinth Portrait */}
      <section className="bg-[#0B1F33] text-[#F7F5F0] py-16 sm:py-20 border-b border-[#B08D57]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="hero-stagger-1 inline-block text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold">
                Career History &amp; Public Interest Service
              </span>
              <h1 className="hero-stagger-2 font-serif-title text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
                Professional Experience
              </h1>
              <p className="hero-stagger-3 text-sm sm:text-base text-[#E5E7EB]/85 font-light leading-relaxed max-w-2xl">
                Hands-on practical legal training and associate service spanning private chambers in Lagos and Ogun State alongside State Ministries of Justice in Osun and Akwa Ibom States—complemented by active pro bono and human-rights advocacy.
              </p>
              <div className="hero-stagger-4 pt-2 flex flex-wrap gap-3 text-xs">
                <a
                  href="#work-history"
                  className="btn-gold-sheen px-4 py-2 bg-[#B08D57] text-[#0B1F33] font-semibold uppercase tracking-wider hover:bg-[#C5A069] transition-colors"
                >
                  5 Legal Roles (2017–2026)
                </a>
                <a
                  href="#pro-bono"
                  className="px-4 py-2 border border-white/25 text-white font-semibold uppercase tracking-wider hover:border-[#B08D57] hover:text-[#C5A069] transition-colors"
                >
                  Volunteer &amp; Pro Bono Work
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end hero-portrait-in">
              <div className="editorial-portrait-frame relative w-full max-w-[270px]">
                <div className="portrait-accent-border absolute -top-2.5 -left-2.5 bottom-2.5 right-2.5 border border-[#B08D57]/40 pointer-events-none hidden sm:block" />
                <div className="relative aspect-[3/4] overflow-hidden border border-white/15 bg-[#071524] shadow-2xl">
                  <Image
                    src="/images/kc8.jpg"
                    alt={`${LAWYER_DATA.name} poised behind architectural bar in barrister attire`}
                    fill
                    priority
                    className="portrait-img object-cover object-top"
                    sizes="(max-width: 1024px) 270px, 270px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jurisdictions Summary Strip */}
      <section className="bg-[#071524] text-[#F7F5F0] border-b border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#E5E7EB]/80">
            <div className="flex items-center gap-2.5">
              <Building2 className="w-4 h-4 text-[#B08D57] shrink-0" />
              <span>
                <strong className="text-[#C5A069]">Cross-Sector Background:</strong> 2 State Ministries of Justice (Osun &amp; Akwa Ibom) &amp; 3 Private Law Firms (Ikoyi, Sango-Ota &amp; Lagos)
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#C5A069]">
              2017 — 2026
            </span>
          </div>
        </div>
      </section>

      {/* Chronological Work Experience */}
      <section id="work-history" className="py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <MotionReveal className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold block mb-2">
              Documented Career Progression
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-semibold text-[#0B1F33]">
              Private Practice &amp; Public-Sector Roles
            </h2>
          </MotionReveal>

          <div className="space-y-8">
            {WORK_EXPERIENCE.map((exp, idx) => (
              <MotionReveal key={exp.id} delay={idx * 60}>
                <article className="editorial-card bg-white border border-[#E8E5DF] p-8 sm:p-10 hover:border-[#B08D57] shadow-xs hover:shadow-md">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-[#E8E5DF]">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span
                          className={`text-[11px] uppercase tracking-wider font-semibold px-2.5 py-0.5 ${
                            exp.sector === "Public Sector"
                              ? "bg-[#0B1F33] text-[#C5A069]"
                              : "bg-[#F3ECE1] text-[#8F7040]"
                          }`}
                        >
                          {exp.sector}
                        </span>
                        <span className="text-xs font-mono font-semibold text-[#0B1F33] bg-[#F7F5F0] border border-[#E8E5DF] px-2.5 py-0.5">
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#0B1F33]">
                        {exp.role}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-[#6B7280]">
                        <span className="inline-flex items-center gap-1.5 font-medium text-[#0B1F33]">
                          <Briefcase className="w-4 h-4 text-[#B08D57]" />
                          {exp.organization}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-[#B08D57]" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                      {exp.focusTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] bg-[#F7F5F0] border border-[#E8E5DF] text-[#0B1F33]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 space-y-4">
                    <p className="text-sm text-[#171A1D]/80 font-light leading-relaxed">
                      {exp.summary}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-[13px] text-[#171A1D]/85">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="flex items-start gap-2.5 p-3.5 bg-[#F7F5F0] border border-[#E8E5DF]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer & Pro Bono Legal Experience */}
      <section
        id="pro-bono"
        className="py-20 bg-white border-t border-b border-[#E8E5DF] scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold">
              <HeartHandshake className="w-4 h-4" />
              <span>Public Service &amp; Access to Justice</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1F33]">
              Volunteer &amp; Pro Bono Legal Experience
            </h2>
            <p className="text-sm text-[#6B7280] leading-relaxed font-light">
              Dedicated community service applying ADR, family mediation, human-rights protection, environmental-law advocacy, and labour support where access to justice matters most.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRO_BONO_EXPERIENCE.map((item, idx) => (
              <MotionReveal key={item.id} delay={(idx % 3) * 80} className="h-full">
                <div className="editorial-card h-full bg-[#F7F5F0] border border-[#E8E5DF] p-7 flex flex-col justify-between space-y-4 hover:border-[#B08D57] hover:bg-white hover:shadow-md">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8F7040] bg-[#B08D57]/15 px-2.5 py-0.5">
                        {item.area}
                      </span>
                      {item.location && (
                        <span className="text-[11px] text-[#6B7280] inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#B08D57]" />
                          {item.location}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif-title text-xl font-semibold text-[#0B1F33] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#171A1D]/80 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology & CTA */}
      <section className="py-20 bg-[#0B1F33] text-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold block mb-2">
              Working Approach
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
              How Every Legal Matter Is Handled
            </h2>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEGAL_PROCESS_STEPS.map((step, idx) => (
              <MotionReveal key={step.step} delay={idx * 85} className="h-full">
                <div className="editorial-card h-full bg-[#071524] border border-white/10 p-7 space-y-3 hover:border-[#B08D57]/40">
                  <span className="font-mono text-xs font-bold text-[#B08D57]">
                    Step {step.step}
                  </span>
                  <h3 className="font-serif-title text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#E5E7EB]/75 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>

          <MotionReveal delay={120}>
            <div className="mt-14 p-8 bg-[#071524] border border-[#B08D57]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-serif-title text-2xl font-semibold text-white">
                  Looking for reliable legal drafting, research, or dispute support?
                </h4>
                <p className="text-xs sm:text-sm text-[#E5E7EB]/75 mt-1 font-light">
                  Reach out to discuss legal assistance, mediation support, or associate opportunities.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-gold-sheen shrink-0 px-7 py-3.5 bg-[#B08D57] text-[#0B1F33] hover:bg-[#C5A069] text-xs font-semibold uppercase tracking-[0.16em] transition-colors inline-flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>
    </div>
  );
}
