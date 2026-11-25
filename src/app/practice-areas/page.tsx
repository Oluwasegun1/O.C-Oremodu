import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { PRACTICE_AREAS } from "@/data/practice-areas";
import { LAWYER_DATA } from "@/data/lawyer";
import PracticeAreaIcon from "@/components/ui/PracticeAreaIcon";
import MotionReveal from "@/components/ui/MotionReveal";
import { ArrowRight, CheckCircle2, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Areas of Practice & Legal Competencies",
  description: `Core legal practice areas and competencies of ${LAWYER_DATA.name} (LL.B, B.L, AICMC), covering Corporate & Commercial drafting, Litigation support, Property, ADR Mediation, Family, Public-Sector Law, and Human Rights.`,
};

export default function PracticeAreasPage() {
  return (
    <div className="bg-[#F7F5F0] text-[#171A1D]">
      {/* Header Banner with KC7 Editorial Portrait */}
      <section className="bg-[#0B1F33] text-[#F7F5F0] py-16 sm:py-20 border-b border-[#B08D57]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="hero-stagger-1 inline-block text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold">
                Legal Capabilities &amp; Core Competencies
              </span>
              <h1 className="hero-stagger-2 font-serif-title text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
                Areas of Practice
              </h1>
              <p className="hero-stagger-3 text-sm sm:text-base text-[#E5E7EB]/85 font-light leading-relaxed max-w-2xl">
                A versatile general legal practice foundation with hands-on private chambers and Ministry of Justice exposure across corporate and property drafting, litigation support, ADR mediation, statutory research, and public-interest advocacy.
              </p>

              {/* Quick Anchor Pills */}
              <div className="hero-stagger-4 pt-3 flex flex-wrap gap-2">
                {PRACTICE_AREAS.map((pa) => (
                  <a
                    key={pa.slug}
                    href={`#${pa.slug}`}
                    className="px-3 py-1.5 text-[11px] bg-[#071524]/80 border border-white/15 text-[#E5E7EB]/85 hover:border-[#B08D57] hover:text-[#C5A069] transition-colors"
                  >
                    {pa.number} · {pa.title}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end hero-portrait-in">
              <div className="editorial-portrait-frame relative w-full max-w-[270px]">
                <div className="portrait-accent-border absolute -top-2.5 -right-2.5 bottom-2.5 left-2.5 border border-[#B08D57]/40 pointer-events-none hidden sm:block" />
                <div className="relative aspect-[3/4] overflow-hidden border border-white/15 bg-[#071524] shadow-2xl">
                  <Image
                    src="/images/kc7.jpg"
                    alt={`${LAWYER_DATA.name} standing in barrister attire beside architectural plinth`}
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

      {/* Practice Areas Catalog */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {PRACTICE_AREAS.map((pa) => (
            <MotionReveal key={pa.slug}>
              <div
                id={pa.slug}
                className="editorial-card scroll-mt-24 bg-white border border-[#E8E5DF] p-8 sm:p-11 hover:border-[#B08D57] shadow-xs hover:shadow-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Title & Overview */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-[#B08D57] font-bold">
                        {pa.number}
                      </span>
                      <div className="w-8 h-8 border border-[#B08D57]/35 flex items-center justify-center text-[#0B1F33]">
                        <PracticeAreaIcon name={pa.iconName} className="w-4 h-4" />
                      </div>
                    </div>

                    <h2 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#0B1F33]">
                      {pa.title}
                    </h2>

                    <p className="text-sm text-[#171A1D]/80 leading-relaxed font-light">
                      {pa.overview}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/practice-areas/${pa.slug}`}
                        className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#0B1F33] hover:text-[#B08D57] transition-colors border-b border-[#0B1F33] hover:border-[#B08D57] pb-1"
                      >
                        Read Full Practice Scope &amp; Experience
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Services & Statutory Grounding */}
                  <div className="lg:col-span-7 bg-[#F7F5F0] border border-[#E8E5DF] p-6 sm:p-8 space-y-6">
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#0B1F33] mb-3.5">
                        Key Capabilities &amp; Support
                      </h3>
                      <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#171A1D]/85">
                        {pa.keyServices.map((srv, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{srv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[#E8E5DF]">
                      <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#6B7280] block mb-2.5">
                        Relevant Nigerian Statutory Frameworks
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {pa.statutoryFramework.map((sf, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-[11px] bg-white border border-[#E8E5DF] text-[#0B1F33]"
                          >
                            {sf}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-16 bg-[#0B1F33] text-white border-t border-white/10">
        <MotionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="font-serif-title text-2xl sm:text-3xl font-semibold">
            Need legal drafting, research, mediation, or advisory support?
          </h3>
          <p className="text-xs sm:text-sm text-[#E5E7EB]/80 max-w-xl mx-auto font-light">
            Share a brief summary of your matter or collaboration request and receive a prompt response.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="btn-gold-sheen inline-flex items-center gap-2 px-7 py-3.5 bg-[#B08D57] text-[#0B1F33] hover:bg-[#C5A069] text-xs font-semibold uppercase tracking-[0.16em] transition-colors"
            >
              Send an Enquiry
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </MotionReveal>
      </section>
    </div>
  );
}
