import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LAWYER_DATA } from "@/data/lawyer";
import { PRACTICE_AREAS } from "@/data/practice-areas";
import { LEGAL_INSIGHTS } from "@/data/insights";
import {
  WORK_EXPERIENCE,
  PRO_BONO_EXPERIENCE,
  LEGAL_PROCESS_STEPS,
} from "@/data/experience";
import { FAQS } from "@/data/faqs";
import ConsultationForm from "@/components/consultation/ConsultationForm";
import PracticeAreaIcon from "@/components/ui/PracticeAreaIcon";
import MotionReveal from "@/components/ui/MotionReveal";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clock,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  GraduationCap,
  Scale,
  HeartHandshake,
  Globe2,
  CheckCircle2,
  Briefcase,
} from "lucide-react";
import { formatWhatsAppLink } from "@/lib/utils";

export default function HomePage() {
  const whatsappUrl = formatWhatsAppLink(
    LAWYER_DATA.contact.whatsappNumber,
    `Hello ${LAWYER_DATA.name}, I am contacting you via your website regarding a legal enquiry.`
  );

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B1F33] text-[#F7F5F0] overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-24 border-b border-[#B08D57]/20">
        {/* Subtle architectural dot pattern & drifting ambient sheen */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-32 right-0 w-[34rem] h-[34rem] rounded-full bg-[#B08D57]/10 blur-3xl pointer-events-none animate-ambient-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Editorial Content with Staggered Entrance */}
            <div className="lg:col-span-7 space-y-6">
              <div className="hero-stagger-1 inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#B08D57]/45 bg-[#071524]/75 text-[#C5A069] text-[11px] uppercase tracking-[0.18em] font-semibold">
                <Scale className="w-3.5 h-3.5 shrink-0" />
                <span>Legal Practitioner • LL.B, B.L, AICMC</span>
              </div>

              <div className="space-y-3 hero-stagger-2">
                <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-[#B08D57] font-semibold">
                  {LAWYER_DATA.name}
                </p>
                <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1] text-[#F7F5F0]">
                  {LAWYER_DATA.heroStatement}
                </h1>
              </div>

              <p className="hero-stagger-3 text-base sm:text-lg text-[#E5E7EB]/85 font-sans-body leading-relaxed max-w-2xl font-light">
                {LAWYER_DATA.heroSubtext}
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="hero-stagger-4 pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="btn-gold-sheen inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#B08D57] text-[#0B1F33] hover:bg-[#C5A069] text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-200 shadow-sm"
                >
                  Book a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/experience"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-[#F7F5F0] hover:border-[#B08D57] hover:text-[#C5A069] text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-200"
                >
                  Explore Experience &amp; CV
                </Link>
              </div>

              {/* Verified Credentials Micro-Bar */}
              <div className="hero-stagger-4 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs text-[#E5E7EB]/80">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#B08D57] shrink-0" />
                  <span>B.L., Nigerian Law School (2024–2025)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B08D57] shrink-0" />
                  <span>AICMC Accredited Mediator</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#B08D57] shrink-0" />
                  <span>{LAWYER_DATA.location}</span>
                </div>
              </div>
            </div>

            {/* Right Side: Flagship KC2 Portrait with Interactive Frame Depth */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end hero-portrait-in">
              <div className="editorial-portrait-frame relative w-full max-w-sm lg:max-w-[420px]">
                {/* Architectural offset gold frame */}
                <div className="portrait-accent-border absolute -top-3 -right-3 bottom-3 left-3 border border-[#B08D57]/45 pointer-events-none hidden sm:block" />

                <div className="relative aspect-[3/4] w-full overflow-hidden shadow-2xl bg-[#071524] border border-white/15">
                  <Image
                    src="/images/kc2.jpg"
                    alt="Olubunmi Chioma Oremodu seated in formal barrister wig and gown"
                    fill
                    priority
                    className="portrait-img object-cover object-top"
                    sizes="(max-width: 768px) 92vw, (max-width: 1200px) 42vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071524]/90 via-[#071524]/15 to-transparent" />

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 bg-[#071524]/90 backdrop-blur-md border border-[#B08D57]/30 flex items-center justify-between gap-2">
                    <div>
                      <p className="text-sm font-serif-title font-semibold text-white leading-tight">
                        {LAWYER_DATA.name}
                      </p>
                      <p className="text-[10px] text-[#C5A069] uppercase tracking-[0.15em] mt-0.5">
                        General Practice • Corporate &amp; Dispute Support
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-white/70 shrink-0 border-l border-white/15 pl-2.5">
                      Lagos, NG
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CREDENTIALS & EXPERIENCE HIGHLIGHTS BAR */}
      <section className="bg-[#071524] text-[#F7F5F0] border-b border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-white/10">
            {LAWYER_DATA.highlights.map((item, idx) => (
              <MotionReveal
                key={item.label}
                delay={idx * 80}
                className="lg:px-6 first:lg:pl-0 last:lg:pr-0 text-center lg:text-left"
              >
                <p className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#C5A069]">
                  {item.value}
                </p>
                <p className="text-xs uppercase tracking-[0.14em] text-white font-semibold mt-1">
                  {item.label}
                </p>
                <p className="text-[11px] text-[#E5E7EB]/65 mt-0.5 font-light">
                  {item.detail}
                </p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROFESSIONAL PROFILE & PRACTICE APPROACH (KC6 Portrait) */}
      <section className="py-20 lg:py-24 bg-[#F7F5F0] text-[#171A1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Editorial Standing Portrait (KC6) */}
            <MotionReveal variant="scale-in" className="lg:col-span-5 order-2 lg:order-1">
              <div className="editorial-portrait-frame relative max-w-md mx-auto lg:mx-0">
                <div className="portrait-accent-border absolute -bottom-3 -left-3 top-3 right-3 border border-[#B08D57]/40 pointer-events-none hidden sm:block" />
                <div className="relative aspect-[3/4] overflow-hidden border border-[#E8E5DF] shadow-lg bg-white">
                  <Image
                    src="/images/kc6.jpg"
                    alt="Olubunmi Chioma Oremodu in formal legal attire beside architectural plinth"
                    fill
                    className="portrait-img object-cover object-top"
                    sizes="(max-width: 768px) 92vw, (max-width: 1200px) 42vw, 440px"
                  />
                </div>
                <div className="relative z-10 mt-4 p-4 bg-white border border-[#E8E5DF] border-l-2 border-l-[#B08D57] text-xs text-[#6B7280] shadow-xs">
                  <p className="font-serif-title font-semibold text-[#0B1F33] text-base mb-1">
                    Private Chambers &amp; Public-Sector Perspective
                  </p>
                  Practical training across private law firms in Lagos and Ogun State alongside State Ministries of Justice in Osun and Akwa Ibom States.
                </div>
              </div>
            </MotionReveal>

            {/* Profile & Philosophy Text */}
            <MotionReveal variant="fade-up" delay={120} className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-block text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold">
                Professional Profile &amp; Approach
              </div>

              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1F33] leading-[1.15]">
                Disciplined Preparation. Clear Documentation. Practical Resolution.
              </h2>

              <div className="space-y-4 text-[#171A1D]/85 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  Olubunmi Chioma Oremodu brings a versatile legal foundation built through steady, hands-on involvement in real client and public-sector matters since 2017. Rather than approaching law purely in theory, her experience reflects the day-to-day realities of Nigerian legal practice—from Magistrate and High Court filings to commercial lease drafting and state legal administration.
                </p>
                <p>
                  Having supported senior counsel at Grandslaw Partners (Ikoyi), Adeyemi Aluko &amp; Associates (Ogun State), Adoydam Solicitors (Lagos), and the Ministries of Justice in both Akwa Ibom and Osun States, she combines structured legal research with meticulous drafting and AICMC-grounded mediation skills.
                </p>
                <p>
                  Her practice bridges general legal work with developing specialization in corporate and commercial law, dispute resolution, regulatory compliance, and legal advisory—always anchored in integrity, responsiveness, and clear communication.
                </p>
              </div>

              {/* Core Competencies Preview Pills */}
              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#6B7280] font-semibold block mb-3">
                  Core Legal Competencies
                </span>
                <div className="flex flex-wrap gap-2">
                  {LAWYER_DATA.competencies.map((comp) => (
                    <span
                      key={comp}
                      className="px-3 py-1.5 text-xs bg-white border border-[#E8E5DF] text-[#0B1F33] font-medium hover:border-[#B08D57] hover:bg-[#F3ECE1]/40 transition-colors duration-200"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-6">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#0B1F33] hover:text-[#B08D57] transition-colors border-b border-[#0B1F33] hover:border-[#B08D57] pb-1"
                >
                  Read Full Biography &amp; Credentials
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 4. PRACTICE AREAS GRID */}
      <section id="practice-areas" className="py-24 bg-white text-[#171A1D] border-t border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#E8E5DF] gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold block mb-2">
                Areas of Legal Support
              </span>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1F33]">
                Practice Focus &amp; Capabilities
              </h2>
            </div>
            <p className="text-sm text-[#6B7280] max-w-md leading-relaxed font-light">
              Eight integrated areas reflecting hands-on drafting, research, courtroom, mediation, and advisory experience across Nigerian private and public-sector practice.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRACTICE_AREAS.map((pa, idx) => (
              <MotionReveal key={pa.slug} delay={(idx % 4) * 75} className="h-full">
                <Link
                  href={`/practice-areas/${pa.slug}`}
                  className="editorial-card group h-full bg-[#F7F5F0] border border-[#E8E5DF] p-7 flex flex-col justify-between hover:border-[#B08D57] hover:bg-white hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs text-[#B08D57] font-bold">
                        {pa.number}
                      </span>
                      <div className="w-9 h-9 border border-[#B08D57]/35 bg-white flex items-center justify-center text-[#0B1F33] group-hover:text-[#B08D57] group-hover:border-[#B08D57] group-hover:scale-105 transition-all duration-300">
                        <PracticeAreaIcon name={pa.iconName} className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-serif-title text-xl font-semibold text-[#0B1F33] mb-3 group-hover:text-[#B08D57] transition-colors leading-snug">
                      {pa.title}
                    </h3>

                    <p className="text-xs text-[#6B7280] leading-relaxed mb-6 font-light">
                      {pa.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8E5DF] flex items-center justify-between text-[11px] font-semibold text-[#0B1F33] group-hover:text-[#B08D57] uppercase tracking-[0.14em]">
                    <span>Explore Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              </MotionReveal>
            ))}
          </div>

          <MotionReveal delay={120} className="mt-12 text-center">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#0B1F33] text-[#0B1F33] hover:bg-[#0B1F33] hover:text-[#F7F5F0] text-xs font-semibold uppercase tracking-[0.16em] transition-colors"
            >
              View Complete Practice Directory
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </MotionReveal>
        </div>
      </section>

      {/* 5. PROFESSIONAL ETHOS & PRO BONO IMPACT (KC4 Monochrome Editorial Feature) */}
      <section className="py-24 bg-[#0B1F33] text-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Editorial B&W Portrait (KC4) */}
            <MotionReveal variant="scale-in" className="lg:col-span-5">
              <div className="editorial-portrait-frame relative max-w-md mx-auto lg:mx-0">
                <div className="portrait-accent-border absolute -top-3 -left-3 bottom-3 right-3 border border-[#B08D57]/35 pointer-events-none hidden sm:block" />
                <div className="relative aspect-[3/4] overflow-hidden border border-white/15 bg-[#071524] shadow-2xl">
                  <Image
                    src="/images/kc4.jpg"
                    alt="Monochrome editorial barrister portrait of Olubunmi Chioma Oremodu"
                    fill
                    className="portrait-img object-cover object-center"
                    sizes="(max-width: 768px) 92vw, (max-width: 1200px) 40vw, 430px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071524]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 border-l-2 border-[#B08D57] pl-3">
                    <p className="font-serif-title text-lg text-white leading-snug">
                      &ldquo;Principled counsel anchored in rigorous drafting, human dignity, and practical justice.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </MotionReveal>

            {/* Right: 4 Principles + Pro Bono Snapshot */}
            <div className="lg:col-span-7 space-y-8">
              <MotionReveal className="space-y-3">
                <span className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold block">
                  Professional Standards &amp; Public Service
                </span>
                <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                  Guided by Rigour, Empathy &amp; Access to Justice
                </h2>
                <p className="text-sm text-[#E5E7EB]/80 leading-relaxed font-light">
                  Beyond commercial contracts and courtroom filings, Olubunmi actively contributes to human-rights protection, domestic violence ADR, pro bono family settlements, prison visitation, environmental advocacy, and labour support for NYSC corps members.
                </p>
              </MotionReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {LAWYER_DATA.biography.principles.map((p, idx) => (
                  <MotionReveal key={p.id} delay={idx * 80} className="h-full">
                    <div className="editorial-card h-full bg-[#071524] border border-white/10 p-6 space-y-2.5 hover:border-[#B08D57]/55">
                      <div className="text-xs font-mono text-[#B08D57] font-bold">
                        0{idx + 1}
                      </div>
                      <h3 className="font-serif-title text-xl font-semibold text-white">
                        {p.title}
                      </h3>
                      <p className="text-xs text-[#E5E7EB]/75 leading-relaxed font-light">
                        {p.description}
                      </p>
                    </div>
                  </MotionReveal>
                ))}
              </div>

              {/* Pro Bono Highlight Strip */}
              <MotionReveal delay={200}>
                <div className="p-5 bg-[#071524]/80 border border-[#B08D57]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#B08D57]/60 transition-colors">
                  <div className="flex items-start gap-3">
                    <HeartHandshake className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-[#C5A069]">
                        {PRO_BONO_EXPERIENCE.length} Documented Pro Bono &amp; Advocacy Initiatives
                      </p>
                      <p className="text-xs text-[#E5E7EB]/75 mt-0.5 font-light">
                        Domestic violence ADR, child custody settlements, prison visitation, Osogbo environmental advocacy &amp; NYSC labour support.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/experience#pro-bono"
                    className="group shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A069] hover:text-white transition-colors"
                  >
                    View Pro Bono
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MEET OLUBUNMI CHIOMA OREMODU — CREDENTIALS & EDUCATION (KC10 Burgundy Editorial Portrait) */}
      <section className="py-24 bg-[#F7F5F0] text-[#171A1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Editorial Burgundy Portrait (KC10) */}
            <MotionReveal variant="scale-in" className="lg:col-span-5">
              <div className="editorial-portrait-frame relative max-w-md mx-auto lg:mx-0">
                <div className="portrait-accent-border absolute -top-3 -left-3 bottom-3 right-3 border border-[#B08D57]/35 pointer-events-none hidden sm:block" />
                <div className="relative aspect-[3/4] border border-[#E8E5DF] overflow-hidden shadow-xl bg-[#071524]">
                  <Image
                    src="/images/kc10.jpg"
                    alt="Editorial close-up portrait of Olubunmi Chioma Oremodu in barrister wig and bib"
                    fill
                    className="portrait-img object-cover object-top"
                    sizes="(max-width: 768px) 92vw, (max-width: 1200px) 42vw, 440px"
                  />
                </div>
              </div>
            </MotionReveal>

            {/* Credentials, Education & Skills */}
            <MotionReveal delay={100} className="lg:col-span-7 space-y-6">
              <div className="inline-block text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold">
                Education &amp; Professional Standing
              </div>

              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1F33]">
                Meet {LAWYER_DATA.name}
              </h2>

              <p className="text-xs sm:text-sm text-[#8F7040] font-semibold uppercase tracking-[0.12em]">
                {LAWYER_DATA.credentialsLine}
              </p>

              <p className="text-sm sm:text-base text-[#171A1D]/85 leading-relaxed font-light">
                {LAWYER_DATA.biography.shortLead}
              </p>

              {/* 4 Verified Education & Qualification Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {LAWYER_DATA.credentials.degrees.map((deg) => (
                  <div
                    key={deg.degree}
                    className="editorial-card p-4 bg-white border border-[#E8E5DF] hover:border-[#B08D57]/60 hover:shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-serif-title text-base font-semibold text-[#0B1F33]">
                        {deg.degree}
                      </span>
                      <span className="text-[10px] font-mono font-semibold text-[#8F7040] bg-[#F3ECE1] px-2 py-0.5 shrink-0">
                        {deg.year}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B7280]">{deg.institution}</p>
                  </div>
                ))}
              </div>

              {/* Languages & Technical Readiness */}
              <div className="p-4 bg-white border border-[#E8E5DF] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#0B1F33]">
                  <Globe2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                  <span>
                    <strong>Languages:</strong>{" "}
                    {LAWYER_DATA.languages.map((l) => `${l.name} (${l.proficiency})`).join(" • ")}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#0B1F33] text-white hover:bg-[#B08D57] hover:text-[#0B1F33] text-xs font-semibold uppercase tracking-[0.16em] transition-colors"
                >
                  View Full Profile, Skills &amp; Timeline
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 7. PROFESSIONAL EXPERIENCE SNAPSHOT */}
      <section className="py-24 bg-white text-[#171A1D] border-t border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#E8E5DF] gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold block mb-2">
                Verified Work History
              </span>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1F33]">
                Professional Legal Experience
              </h2>
            </div>
            <Link
              href="/experience"
              className="group text-xs uppercase tracking-[0.16em] font-semibold text-[#0B1F33] hover:text-[#B08D57] transition-colors inline-flex items-center gap-1.5"
            >
              View All 5 Roles &amp; Pro Bono Work
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MotionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {WORK_EXPERIENCE.slice(0, 3).map((item, idx) => (
              <MotionReveal key={item.id} delay={idx * 90} className="h-full">
                <div className="editorial-card h-full bg-[#F7F5F0] border border-[#E8E5DF] p-7 flex flex-col justify-between space-y-5 hover:border-[#B08D57] hover:bg-white hover:shadow-md">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8F7040] bg-[#B08D57]/15 px-2.5 py-0.5">
                        {item.sector}
                      </span>
                      <span className="text-xs font-mono font-semibold text-[#0B1F33]">
                        {item.period}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif-title text-xl font-semibold text-[#0B1F33] leading-snug">
                        {item.role}
                      </h3>
                      <p className="text-xs text-[#6B7280] mt-1 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#B08D57] shrink-0" />
                        <span>
                          {item.organization} • {item.location}
                        </span>
                      </p>
                    </div>

                    <ul className="space-y-2 pt-2 text-xs text-[#171A1D]/80 font-light">
                      {item.responsibilities.slice(0, 3).map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B08D57] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#E8E5DF] flex flex-wrap gap-1.5">
                    {item.focusTags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 bg-white border border-[#E8E5DF] text-[#0B1F33]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>

          <MotionReveal delay={140} className="mt-10 text-center">
            <Link
              href="/experience"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#0B1F33] hover:text-[#B08D57] transition-colors border-b border-[#0B1F33] hover:border-[#B08D57] pb-1"
            >
              Explore Full Career History (2017–2026) &amp; Pro Bono Record
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MotionReveal>
        </div>
      </section>

      {/* 8. HOW WE WORK: 4 STEPS */}
      <section className="py-24 bg-[#071524] text-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold block mb-2">
              Structured Working Method
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
              A Clear, Disciplined Legal Workflow
            </h2>
            <p className="text-xs sm:text-sm text-[#E5E7EB]/75 mt-3 font-light leading-relaxed">
              Every instruction, research brief, or dispute matter follows a methodical process built on statutory accuracy and clear communication.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEGAL_PROCESS_STEPS.map((step, idx) => (
              <MotionReveal key={step.step} delay={idx * 90} className="h-full">
                <div className="editorial-card h-full bg-[#0B1F33] border border-white/10 p-7 space-y-4 hover:border-[#B08D57]/45">
                  <div className="w-10 h-10 border border-[#B08D57] flex items-center justify-center text-sm font-mono font-bold text-[#C5A069]">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-serif-title text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-[#B08D57] uppercase tracking-wider font-semibold mt-0.5">
                      {step.subtitle}
                    </p>
                  </div>
                  <p className="text-xs text-[#E5E7EB]/75 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. RESEARCH PAPERS & LEGAL BRIEFS */}
      <section className="py-24 bg-[#F7F5F0] text-[#171A1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#E8E5DF] gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold block mb-2">
                Research &amp; Legal Writing
              </span>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1F33]">
                Research Papers &amp; Practice Briefs
              </h2>
            </div>
            <Link
              href="/insights"
              className="group text-xs uppercase tracking-[0.16em] font-semibold text-[#0B1F33] hover:text-[#B08D57] transition-colors inline-flex items-center gap-1.5"
            >
              Explore All Research &amp; Briefs
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {LEGAL_INSIGHTS.slice(0, 3).map((art, idx) => (
              <MotionReveal key={art.slug} delay={idx * 90} className="h-full">
                <article className="editorial-card h-full bg-white border border-[#E8E5DF] p-7 flex flex-col justify-between hover:border-[#B08D57] shadow-xs hover:shadow-md">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between gap-2 text-[11px] text-[#6B7280]">
                      <span
                        className={`font-semibold uppercase tracking-wider px-2 py-0.5 ${
                          art.type === "Research Paper"
                            ? "bg-[#0B1F33] text-[#C5A069]"
                            : "bg-[#F3ECE1] text-[#8F7040]"
                        }`}
                      >
                        {art.type}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[10px]">
                        <Clock className="w-3 h-3 text-[#B08D57]" />
                        {art.readTime}
                      </span>
                    </div>

                    <p className="text-[11px] uppercase tracking-wider text-[#B08D57] font-semibold">
                      {art.category}
                    </p>

                    <h3 className="font-serif-title text-xl font-semibold text-[#0B1F33] hover:text-[#B08D57] transition-colors leading-snug">
                      <Link href={`/insights/${art.slug}`}>{art.title}</Link>
                    </h3>

                    <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-3 font-light">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-5 mt-6 border-t border-[#E8E5DF] flex items-center justify-between">
                    <span className="text-[11px] text-[#6B7280] inline-flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#B08D57]" />
                      {art.formattedDate}
                    </span>
                    <Link
                      href={`/insights/${art.slug}`}
                      className="group text-xs font-semibold uppercase tracking-wider text-[#0B1F33] hover:text-[#B08D57] inline-flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-24 bg-white text-[#171A1D] border-t border-[#E8E5DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold block mb-2">
              Quick Answers
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1F33]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-3 leading-relaxed font-light">
              Helpful details on qualifications, practice areas, ADR mediation, availability, and confidentiality.
            </p>
          </MotionReveal>

          <div className="space-y-3.5">
            {FAQS.map((faq, idx) => (
              <MotionReveal key={faq.id} delay={idx * 55}>
                <details className="group border border-[#E8E5DF] bg-[#F7F5F0] p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer hover:border-[#B08D57]/60 transition-colors">
                  <summary className="flex items-center justify-between gap-4 text-base sm:text-lg font-serif-title font-semibold text-[#0B1F33] group-hover:text-[#B08D57] transition-colors">
                    <span>{faq.question}</span>
                    <span className="shrink-0 w-6 h-6 border border-[#B08D57]/40 flex items-center justify-center font-mono text-xs text-[#B08D57] group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <p className="mt-3.5 text-xs sm:text-sm text-[#171A1D]/80 leading-relaxed pt-3.5 border-t border-[#E8E5DF] font-light">
                    {faq.answer}
                  </p>
                </details>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. DIRECT CONTACT & CONSULTATION SECTION */}
      <section id="consultation" className="py-24 bg-[#0B1F33] text-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Direct Contact Details */}
            <MotionReveal className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold block mb-2">
                  Direct Contact
                </span>
                <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                  Let&apos;s Discuss How I Can Help
                </h2>
                <p className="text-xs sm:text-sm text-[#E5E7EB]/80 mt-4 leading-relaxed font-light">
                  Whether you are seeking legal drafting and research support, mediation assistance, property or commercial advisory, or professional collaboration, feel free to get in touch directly.
                </p>
              </div>

              <div className="space-y-4 text-xs text-[#E5E7EB]/85">
                <div className="p-5 bg-[#071524] border border-white/10 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold block">Location</span>
                      <p className="text-[#E5E7EB]/75 mt-0.5">
                        {LAWYER_DATA.location} (Practical exposure across Lagos, Ogun, Osun &amp; Akwa Ibom States)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                    <Phone className="w-4 h-4 text-[#B08D57] shrink-0" />
                    <div>
                      <span className="text-white font-semibold block">Telephone</span>
                      <a
                        href={`tel:${LAWYER_DATA.contact.phone}`}
                        className="text-[#C5A069] hover:underline font-mono mt-0.5 inline-block"
                      >
                        {LAWYER_DATA.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                    <Mail className="w-4 h-4 text-[#B08D57] shrink-0" />
                    <div>
                      <span className="text-white font-semibold block">Direct Email</span>
                      <a
                        href={`mailto:${LAWYER_DATA.contact.email}`}
                        className="text-[#C5A069] hover:underline break-all mt-0.5 inline-block"
                      >
                        {LAWYER_DATA.contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 border border-[#B08D57]/35 bg-[#071524]/70">
                  <span className="text-sm font-serif-title font-semibold text-[#C5A069] block mb-1">
                    WhatsApp Direct Channel
                  </span>
                  <p className="text-[11px] text-[#E5E7EB]/75 mb-3.5 font-light">
                    Quick scheduling and direct messaging for clients, colleagues, and legal teams.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-sheen inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B1F33] bg-[#B08D57] hover:bg-[#C5A069] px-5 py-2.5 transition-colors"
                  >
                    Message on WhatsApp
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </MotionReveal>

            {/* Right Enquiry Form */}
            <MotionReveal delay={120} className="lg:col-span-7">
              <ConsultationForm />
            </MotionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
