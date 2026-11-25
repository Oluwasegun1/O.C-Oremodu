import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { LAWYER_DATA } from "@/data/lawyer";
import MotionReveal from "@/components/ui/MotionReveal";
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Globe2,
  Laptop,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: `About ${LAWYER_DATA.name} | Legal Practitioner (LL.B, B.L, AICMC)`,
  description: `Professional biography, education, qualifications (LL.B, B.L, AICMC, LL.M in view), core legal competencies, and career journey of ${LAWYER_DATA.name}.`,
};

export default function AboutPage() {
  return (
    <div className="bg-[#F7F5F0] text-[#171A1D]">
      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-[#F7F5F0] py-16 sm:py-20 border-b border-[#B08D57]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="hero-stagger-1 inline-block text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold">
              Profile, Credentials &amp; Trajectory
            </span>
            <h1 className="hero-stagger-2 font-serif-title text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
              About {LAWYER_DATA.name}
            </h1>
            <p className="hero-stagger-3 text-sm sm:text-base text-[#E5E7EB]/85 font-light leading-relaxed">
              {LAWYER_DATA.headline}
            </p>
            <p className="hero-stagger-4 text-xs font-mono text-[#C5A069] tracking-wider">
              {LAWYER_DATA.credentialsLine}
            </p>
          </div>
        </div>
      </section>

      {/* Main Biography & Credentials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Sticky Portrait (KC11) & Quick Facts Card */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <div className="editorial-portrait-frame hero-portrait-in relative">
                <div className="portrait-accent-border absolute -top-2.5 -left-2.5 bottom-2.5 right-2.5 border border-[#B08D57]/40 pointer-events-none hidden sm:block" />
                <div className="relative aspect-[3/4] border border-[#E8E5DF] overflow-hidden shadow-xl bg-[#071524]">
                  <Image
                    src="/images/kc11.jpg"
                    alt={`Smiling formal barrister portrait of ${LAWYER_DATA.name}`}
                    fill
                    priority
                    className="portrait-img object-cover object-top"
                    sizes="(max-width: 768px) 92vw, (max-width: 1200px) 42vw, 440px"
                  />
                </div>
              </div>

              {/* Quick Credentials & Contact Card */}
              <MotionReveal delay={120}>
                <div className="bg-white border border-[#E8E5DF] p-6 sm:p-7 space-y-4 text-xs shadow-xs">
                  <div className="border-b border-[#E8E5DF] pb-3.5">
                    <span className="text-[10px] text-[#B08D57] uppercase tracking-[0.16em] font-semibold block mb-1">
                      Qualifications
                    </span>
                    <p className="font-serif-title text-lg font-semibold text-[#0B1F33]">
                      LL.B • B.L • AICMC • LL.M (In View)
                    </p>
                  </div>

                  <div className="border-b border-[#E8E5DF] pb-3.5 space-y-2">
                    <span className="text-[10px] text-[#B08D57] uppercase tracking-[0.16em] font-semibold block">
                      Location &amp; Direct Contact
                    </span>
                    <div className="flex items-center gap-2 text-[#171A1D]/85">
                      <MapPin className="w-3.5 h-3.5 text-[#B08D57] shrink-0" />
                      <span>{LAWYER_DATA.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#171A1D]/85">
                      <Phone className="w-3.5 h-3.5 text-[#B08D57] shrink-0" />
                      <a
                        href={`tel:${LAWYER_DATA.contact.phone}`}
                        className="font-mono hover:text-[#B08D57] transition-colors"
                      >
                        {LAWYER_DATA.contact.phoneDisplay}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-[#171A1D]/85">
                      <Mail className="w-3.5 h-3.5 text-[#B08D57] shrink-0" />
                      <a
                        href={`mailto:${LAWYER_DATA.contact.email}`}
                        className="hover:text-[#B08D57] transition-colors break-all"
                      >
                        {LAWYER_DATA.contact.email}
                      </a>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#B08D57] uppercase tracking-[0.16em] font-semibold block mb-2">
                      Verified Academic &amp; Professional Milestones
                    </span>
                    <ul className="space-y-2 text-[#171A1D]/80">
                      {LAWYER_DATA.credentials.qualifications.map((q) => (
                        <li key={q.acronym} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B08D57] shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-[#0B1F33]">{q.acronym}</strong> — {q.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </MotionReveal>
            </div>

            {/* Right Detailed Narrative, Education, Skills & Timeline */}
            <div className="lg:col-span-7 space-y-10">
              {/* Narrative */}
              <MotionReveal>
                <div className="space-y-5 bg-white border border-[#E8E5DF] p-8 sm:p-10 shadow-xs">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold block">
                    Professional Profile
                  </span>
                  <h2 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#0B1F33] leading-snug">
                    A Versatile Foundation Across Private Chambers &amp; Public-Sector Legal Service
                  </h2>
                  <div className="space-y-4 text-sm sm:text-[15px] text-[#171A1D]/85 leading-relaxed font-light">
                    {LAWYER_DATA.biography.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              </MotionReveal>

              {/* Education & Professional Qualifications */}
              <MotionReveal delay={80}>
                <div className="bg-white border border-[#E8E5DF] p-8 sm:p-10 space-y-6 shadow-xs">
                  <div className="flex items-center gap-2.5 text-[#0B1F33]">
                    <GraduationCap className="w-6 h-6 text-[#B08D57]" />
                    <h3 className="font-serif-title text-2xl sm:text-3xl font-semibold">
                      Education &amp; Professional Qualifications
                    </h3>
                  </div>

                  <div className="space-y-4 divide-y divide-[#E8E5DF]">
                    {LAWYER_DATA.credentials.degrees.map((deg) => (
                      <div
                        key={deg.degree}
                        className="pt-4 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div>
                          <p className="font-serif-title text-lg font-semibold text-[#0B1F33]">
                            {deg.degree}
                          </p>
                          <p className="text-xs sm:text-sm text-[#6B7280]">{deg.institution}</p>
                        </div>
                        <div className="sm:text-right">
                          <span className="inline-block px-2.5 py-0.5 text-[11px] font-mono font-semibold bg-[#B08D57]/15 text-[#8F7040]">
                            {deg.year}
                          </span>
                          {deg.status && (
                            <p className="text-[11px] text-[#6B7280] font-light mt-1">
                              {deg.status}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </MotionReveal>

              {/* Core Legal Competencies, Technical Skills & Languages */}
              <MotionReveal delay={100}>
                <div className="bg-white border border-[#E8E5DF] p-8 sm:p-10 space-y-8 shadow-xs">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5 text-[#0B1F33]">
                      <Scale className="w-5 h-5 text-[#B08D57]" />
                      <h3 className="font-serif-title text-2xl font-semibold">
                        Core Legal Competencies
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {LAWYER_DATA.competencies.map((comp) => (
                        <span
                          key={comp}
                          className="px-3.5 py-1.5 text-xs bg-[#F7F5F0] border border-[#E8E5DF] text-[#0B1F33] font-medium hover:border-[#B08D57] transition-colors"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#E8E5DF]">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[#0B1F33]">
                        <Laptop className="w-4 h-4 text-[#B08D57]" />
                        <h4 className="text-xs uppercase tracking-[0.15em] font-semibold">
                          Technical &amp; Productivity Skills
                        </h4>
                      </div>
                      <ul className="space-y-2 text-xs text-[#171A1D]/80">
                        {LAWYER_DATA.technicalSkills.map((skill) => (
                          <li key={skill} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B08D57] shrink-0" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[#0B1F33]">
                        <Globe2 className="w-4 h-4 text-[#B08D57]" />
                        <h4 className="text-xs uppercase tracking-[0.15em] font-semibold">
                          Languages
                        </h4>
                      </div>
                      <ul className="space-y-2 text-xs text-[#171A1D]/80">
                        {LAWYER_DATA.languages.map((lang) => (
                          <li
                            key={lang.name}
                            className="flex items-center justify-between gap-2 pb-1.5 border-b border-[#E8E5DF] last:border-b-0"
                          >
                            <span className="font-medium text-[#0B1F33]">{lang.name}</span>
                            <span className="text-[#6B7280]">{lang.proficiency}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </MotionReveal>

              {/* Career & Academic Timeline */}
              <MotionReveal delay={100}>
                <div className="bg-white border border-[#E8E5DF] p-8 sm:p-10 space-y-6 shadow-xs">
                  <div className="flex items-center gap-2.5 text-[#0B1F33]">
                    <Calendar className="w-6 h-6 text-[#B08D57]" />
                    <h3 className="font-serif-title text-2xl sm:text-3xl font-semibold">
                      Professional &amp; Academic Timeline
                    </h3>
                  </div>

                  <div className="relative border-l-2 border-[#B08D57]/40 ml-3 space-y-8 pl-6">
                    {LAWYER_DATA.biography.timeline.map((item, idx) => (
                      <MotionReveal key={idx} delay={idx * 65} className="relative">
                        <span
                          className={`absolute -left-[31px] top-1.5 w-3 h-3 bg-[#0B1F33] border-2 border-[#B08D57] rounded-full ${
                            idx === 0 ? "timeline-dot-active" : ""
                          }`}
                        />
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-mono font-semibold text-[#8F7040] bg-[#F3ECE1] px-2 py-0.5">
                            {item.year}
                          </span>
                          <span className="text-xs text-[#6B7280]">
                            {item.organization} • {item.location}
                          </span>
                        </div>
                        <h4 className="font-serif-title text-xl font-semibold text-[#0B1F33] mt-1.5">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mt-1.5 font-light">
                          {item.description}
                        </p>
                      </MotionReveal>
                    ))}
                  </div>
                </div>
              </MotionReveal>

              {/* Editorial Values Highlight with KC4 */}
              <MotionReveal variant="scale-in">
                <div className="editorial-portrait-frame bg-[#0B1F33] text-white border border-[#B08D57]/30 overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-12 items-stretch">
                    <div className="sm:col-span-4 relative min-h-[260px] sm:min-h-full bg-[#071524] overflow-hidden">
                      <Image
                        src="/images/kc4.jpg"
                        alt="Monochrome close-up barrister portrait of Olubunmi Chioma Oremodu"
                        fill
                        className="portrait-img object-cover object-center"
                        sizes="(max-width: 640px) 92vw, 240px"
                      />
                    </div>
                    <div className="sm:col-span-8 p-7 sm:p-8 flex flex-col justify-between gap-5">
                      <div className="space-y-2.5">
                        <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-[#C5A069] font-semibold">
                          <Award className="w-3.5 h-3.5" />
                          <span>Direct Engagement</span>
                        </div>
                        <h4 className="font-serif-title text-2xl font-semibold text-white">
                          Interested in collaborating or discussing a legal matter?
                        </h4>
                        <p className="text-xs text-[#E5E7EB]/75 leading-relaxed font-light">
                          Reach out directly via email, telephone, WhatsApp, or the online enquiry form for legal support, research collaboration, or associate opportunities.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href="/contact"
                          className="btn-gold-sheen px-6 py-3 bg-[#B08D57] text-[#0B1F33] hover:bg-[#C5A069] text-xs font-semibold uppercase tracking-[0.15em] transition-colors inline-flex items-center gap-2"
                        >
                          Get in Touch
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href="/experience"
                          className="px-6 py-3 border border-white/25 text-white hover:border-[#B08D57] hover:text-[#C5A069] text-xs font-semibold uppercase tracking-[0.15em] transition-colors"
                        >
                          View Experience
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
