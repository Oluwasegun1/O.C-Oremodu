import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { LAWYER_DATA } from "@/data/lawyer";
import {
  GraduationCap,
  Award,
  Shield,
  CheckCircle2,
  Calendar,
  ArrowRight,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: `About ${LAWYER_DATA.name} | ${LAWYER_DATA.title}`,
  description: `Biography, legal credentials, education, and professional journey of ${LAWYER_DATA.name}, Barrister & Solicitor of the Supreme Court of Nigeria.`,
};

export default function AboutPage() {
  return (
    <div className="bg-[#F7F5F0] text-[#171A1D]">
      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-[#F7F5F0] py-16 sm:py-20 border-b border-[#B08D57]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
              Principal Legal Practitioner
            </span>
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-semibold">
              About {LAWYER_DATA.name}
            </h1>
            <p className="text-sm sm:text-base text-[#E5E7EB]/80 font-light leading-relaxed">
              {LAWYER_DATA.title} • {LAWYER_DATA.callNumberTag}
            </p>
          </div>
        </div>
      </section>

      {/* Main Biography Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Sticky Portrait & Quick Credentials */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <div className="relative aspect-[4/5] border border-[#E8E5DF] overflow-hidden shadow-xl bg-[#071524]">
                <Image
                  src="/images/funke_adebayo_hero.jpg"
                  alt={`Portrait of ${LAWYER_DATA.name}`}
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Quick Card */}
              <div className="bg-white border border-[#E8E5DF] p-6 space-y-4 text-xs">
                <div className="border-b border-[#E8E5DF] pb-3">
                  <span className="text-[10px] text-[#B08D57] uppercase tracking-wider font-semibold block">
                    Bar Standing
                  </span>
                  <p className="font-serif-title text-base font-semibold text-[#0B1F33]">
                    Supreme Court of Nigeria (2008)
                  </p>
                </div>

                <div className="border-b border-[#E8E5DF] pb-3">
                  <span className="text-[10px] text-[#B08D57] uppercase tracking-wider font-semibold block">
                    Chambers Location
                  </span>
                  <p className="text-[#171A1D]/80">
                    {LAWYER_DATA.address.display}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] text-[#B08D57] uppercase tracking-wider font-semibold block mb-1">
                    Verified Memberships
                  </span>
                  <ul className="space-y-1.5 text-[#171A1D]/80">
                    {LAWYER_DATA.credentials.memberships.map((m) => (
                      <li key={m.acronym} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B08D57]" />
                        <span>{m.organization} ({m.acronym})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Detailed Narrative */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-5 bg-white border border-[#E8E5DF] p-8 sm:p-10">
                <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold block">
                  Professional Profile & Philosophy
                </span>
                <h2 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#0B1F33]">
                  A Dedication to Commercial Rigor and Legal Authority
                </h2>
                <div className="space-y-4 text-sm text-[#171A1D]/85 leading-relaxed font-light">
                  {LAWYER_DATA.biography.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Academic & Professional Credentials */}
              <div className="bg-white border border-[#E8E5DF] p-8 sm:p-10 space-y-6">
                <div className="flex items-center gap-2 text-[#0B1F33]">
                  <GraduationCap className="w-6 h-6 text-[#B08D57]" />
                  <h3 className="font-serif-title text-2xl font-semibold">
                    Academic & Professional Credentials
                  </h3>
                </div>

                <div className="space-y-4 divide-y divide-[#E8E5DF]">
                  {LAWYER_DATA.credentials.degrees.map((deg) => (
                    <div key={deg.degree} className="pt-4 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <p className="font-serif-title text-base font-semibold text-[#0B1F33]">
                          {deg.degree}
                        </p>
                        <p className="text-xs text-[#6B7280]">
                          {deg.institution}
                        </p>
                      </div>
                      <div className="text-right sm:text-right">
                        <span className="inline-block px-2.5 py-0.5 text-[11px] font-mono font-semibold bg-[#B08D57]/15 text-[#B08D57]">
                          {deg.year}
                        </span>
                        {deg.distinction && (
                          <p className="text-[11px] text-[#6B7280] font-light mt-0.5">
                            {deg.distinction}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Timeline */}
              <div className="bg-white border border-[#E8E5DF] p-8 sm:p-10 space-y-6">
                <div className="flex items-center gap-2 text-[#0B1F33]">
                  <Calendar className="w-6 h-6 text-[#B08D57]" />
                  <h3 className="font-serif-title text-2xl font-semibold">
                    Career Milestones & Trajectory
                  </h3>
                </div>

                <div className="relative border-l-2 border-[#B08D57]/40 ml-3 space-y-8 pl-6">
                  {LAWYER_DATA.biography.timeline.map((item, idx) => (
                    <div key={idx} className="relative">
                      <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-[#0B1F33] border-2 border-[#B08D57] rounded-full" />
                      <span className="text-xs font-mono font-semibold text-[#B08D57]">
                        {item.year}
                      </span>
                      <h4 className="font-serif-title text-lg font-semibold text-[#0B1F33] mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#6B7280] leading-relaxed mt-1.5 font-light">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="p-8 bg-[#0B1F33] text-white border border-[#B08D57]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-serif-title text-xl font-semibold text-white">
                    Need to discuss a specific legal matter?
                  </h4>
                  <p className="text-xs text-[#E5E7EB]/70 mt-1 font-light">
                    Direct consultations available in our Ikoyi chambers or via secure video conference.
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
          </div>
        </div>
      </section>
    </div>
  );
}
