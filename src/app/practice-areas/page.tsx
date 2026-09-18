import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { PRACTICE_AREAS } from "@/data/practice-areas";
import { LAWYER_DATA } from "@/data/lawyer";
import PracticeAreaIcon from "@/components/ui/PracticeAreaIcon";
import { ArrowRight, CheckCircle2, Shield, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Areas of Practice | Strategic Legal Services in Nigeria",
  description: `Comprehensive legal advisory and advocacy services provided by ${LAWYER_DATA.name}, covering Corporate, Litigation, Arbitration, Real Estate, Labour, and IP law in Nigeria.`,
};

export default function PracticeAreasPage() {
  return (
    <div className="bg-[#F7F5F0] text-[#171A1D]">
      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-[#F7F5F0] py-16 sm:py-20 border-b border-[#B08D57]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
              Legal Capabilities & Disciplines
            </span>
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Areas of Practice
            </h1>
            <p className="text-sm sm:text-base text-[#E5E7EB]/80 font-light leading-relaxed">
              Focused legal expertise across commercial transactions, contentious disputes, regulatory frameworks, and private advisory under Nigerian law.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Catalog */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {PRACTICE_AREAS.map((pa) => (
            <div
              key={pa.slug}
              id={pa.slug}
              className="bg-white border border-[#E8E5DF] p-8 sm:p-12 hover:border-[#B08D57] transition-all duration-200 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Title & Overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-[#B08D57] font-bold">
                      {pa.number}
                    </span>
                    <div className="w-8 h-8 border border-[#B08D57]/30 flex items-center justify-center text-[#0B1F33]">
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
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#0B1F33] hover:text-[#B08D57] transition-colors border-b border-[#0B1F33] pb-1"
                    >
                      Read Full Practice Brief & Matters
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Services & Frameworks */}
                <div className="lg:col-span-7 bg-[#F7F5F0] border border-[#E8E5DF] p-6 sm:p-8 space-y-6">
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-[#0B1F33] mb-3">
                      Representative Legal Services
                    </h3>
                    <ul className="space-y-2.5 text-xs text-[#171A1D]/85">
                      {pa.keyServices.map((srv, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{srv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#E8E5DF]">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#6B7280] block mb-2">
                      Statutory Frameworks & Authorities
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
          ))}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-16 bg-[#0B1F33] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="font-serif-title text-2xl sm:text-3xl font-semibold">
            Unsure which legal practice area applies to your situation?
          </h3>
          <p className="text-xs sm:text-sm text-[#E5E7EB]/80 max-w-xl mx-auto font-light">
            We review complex multi-disciplinary matters and direct you toward the appropriate statutory and strategic steps.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#B08D57] text-[#0B1F33] hover:bg-[#C5A069] text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              Request Preliminary Review
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
