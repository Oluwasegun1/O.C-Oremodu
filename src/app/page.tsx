import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LAWYER_DATA } from "@/data/lawyer";
import { PRACTICE_AREAS } from "@/data/practice-areas";
import { LEGAL_INSIGHTS } from "@/data/insights";
import { SELECTED_MATTERS, LEGAL_PROCESS_STEPS } from "@/data/experience";
import { FAQS } from "@/data/faqs";
import ConsultationForm from "@/components/consultation/ConsultationForm";
import PracticeAreaIcon from "@/components/ui/PracticeAreaIcon";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Building,
  Briefcase,
  Scale,
} from "lucide-react";
import { formatWhatsAppLink } from "@/lib/utils";

export default function HomePage() {
  const whatsappUrl = formatWhatsAppLink(
    LAWYER_DATA.contact.whatsappNumber,
    "Hello Barrister Adebayo, I am contacting you to book an initial legal consultation."
  );

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B1F33] text-[#F7F5F0] overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#B08D57]/20">
        {/* Subtle architectural background grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#B08D57]/40 bg-[#071524]/60 text-[#B08D57] text-[11px] uppercase tracking-widest font-semibold">
                <Scale className="w-3.5 h-3.5" />
                <span>Barrister & Solicitor of the Supreme Court of Nigeria</span>
              </div>

              {/* Large Editorial Headline */}
              <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.15] text-[#F7F5F0]">
                Strategic Legal Counsel for Individuals, Businesses & Institutions.
              </h1>

              {/* Supporting Subtext */}
              <p className="text-base sm:text-lg text-[#E5E7EB]/85 font-sans-body leading-relaxed max-w-2xl font-light">
                {LAWYER_DATA.heroSubtext}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#B08D57] text-[#0B1F33] hover:bg-[#C5A069] text-xs font-semibold uppercase tracking-widest transition-all duration-200 shadow-sm"
                >
                  Book a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="#practice-areas"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-[#F7F5F0] hover:border-[#B08D57] hover:text-[#B08D57] text-xs font-semibold uppercase tracking-widest transition-all duration-200"
                >
                  Explore Practice Areas
                </Link>
              </div>

              {/* Credentials micro-bar */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#E5E7EB]/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B08D57]" />
                  <span>Call to Nigerian Bar (2008)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#B08D57]" />
                  <span>Ikoyi, Lagos Chambers</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <Briefcase className="w-4 h-4 text-[#B08D57]" />
                  <span>MCIArb (Chartered Arbitrator)</span>
                </div>
              </div>
            </div>

            {/* Right Side: Portrait with Architectural Gold Frame */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Decorative gold backdrop line frame */}
                <div className="absolute -top-3 -right-3 bottom-3 left-3 border-2 border-[#B08D57]/40 pointer-events-none hidden sm:block" />

                {/* Portrait Container */}
                <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden shadow-2xl bg-[#071524] border border-white/10">
                  <Image
                    src="/images/funke_adebayo_hero.jpg"
                    alt="Barrister O.C Oremodu, Barrister & Solicitor of the Supreme Court of Nigeria in her Lagos chambers"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-transparent to-transparent" />

                  {/* Subtle caption pill */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#071524]/90 backdrop-blur-sm border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-serif-title font-semibold text-white">O.C Oremodu</p>
                      <p className="text-[10px] text-[#B08D57] uppercase tracking-wider">Principal Legal Practitioner</p>
                    </div>
                    <span className="text-[10px] text-white/50">Lagos, NG</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="bg-[#071524] text-[#F7F5F0] border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-2 md:pt-0">
              <p className="font-serif-title text-3xl lg:text-4xl font-semibold text-[#B08D57]">
                {LAWYER_DATA.stats.yearsExperience}+
              </p>
              <p className="text-xs uppercase tracking-wider text-[#E5E7EB]/70 mt-1 font-sans-body">
                Years Post-Call Experience
              </p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="font-serif-title text-3xl lg:text-4xl font-semibold text-[#B08D57]">
                {LAWYER_DATA.stats.mattersHandled}+
              </p>
              <p className="text-xs uppercase tracking-wider text-[#E5E7EB]/70 mt-1 font-sans-body">
                Matters & Transactions Handled
              </p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="font-serif-title text-3xl lg:text-4xl font-semibold text-[#B08D57]">
                {LAWYER_DATA.stats.practiceAreasCount}
              </p>
              <p className="text-xs uppercase tracking-wider text-[#E5E7EB]/70 mt-1 font-sans-body">
                Core Practice Disciplines
              </p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="font-serif-title text-2xl lg:text-3xl font-semibold text-white">
                Ikoyi, Lagos
              </p>
              <p className="text-xs uppercase tracking-wider text-[#B08D57] mt-1 font-sans-body">
                Federal & Superior Court Scope
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION / PHILOSOPHY SECTION */}
      <section className="py-20 bg-[#F7F5F0] text-[#171A1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image / Conference Visual */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative aspect-[16/10] overflow-hidden border border-[#E8E5DF] shadow-md">
                <Image
                  src="/images/lagos_legal_conference.jpg"
                  alt="Legal strategy conference in Lagos Chambers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 p-4 bg-white border border-[#E8E5DF] text-xs text-[#6B7280]">
                <p className="font-serif-title font-semibold text-[#0B1F33] text-sm mb-1">
                  Commercial Prudence Meets Statutory Rigour
                </p>
                Advising local and international stakeholders on commercial contracts, corporate compliance, and alternative dispute resolution.
              </div>
            </div>

            {/* Philosophy Text */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-block text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
                Our Legal Philosophy
              </div>

              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1F33] leading-tight">
                Clear Advice. Strong Representation. Practical Outcomes.
              </h2>

              <div className="space-y-4 text-[#171A1D]/85 text-base leading-relaxed font-light">
                <p>
                  Legal problems rarely exist in isolation. They affect businesses, balance sheets, personal reputations, commercial relationships, investments, and long-term strategic plans.
                </p>
                <p>
                  Our practice is built around understanding the wider commercial and personal context of every matter. We identify the legal issues that truly matter and provide counsel that is clear, decisive, and grounded in Nigeria&apos;s commercial reality.
                </p>
                <p>
                  Whether structuring a corporate transaction under CAMA 2020, regularizing land title with the State Government, or litigating a contentious commercial brief before the High Court, we combine meticulous preparation with calm, authoritative advocacy.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#0B1F33] hover:text-[#B08D57] transition-colors border-b border-[#0B1F33] pb-1"
                >
                  Learn More About O.C Oremodu
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRACTICE AREAS GRID */}
      <section id="practice-areas" className="py-24 bg-white text-[#171A1D] border-t border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E5DF] gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold block mb-2">
                Core Legal Competencies
              </span>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1F33]">
                Areas of Practice
              </h2>
            </div>
            <p className="text-sm text-[#6B7280] max-w-md leading-relaxed">
              Focused legal expertise across matters that affect corporate enterprises, financial entities, institutions, and private clients.
            </p>
          </div>

          {/* 8 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRACTICE_AREAS.map((pa) => (
              <Link
                key={pa.slug}
                href={`/practice-areas/${pa.slug}`}
                className="group relative bg-[#F7F5F0] border border-[#E8E5DF] p-7 flex flex-col justify-between hover:border-[#B08D57] hover:bg-white transition-all duration-300 shadow-none hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-[#B08D57] font-bold">
                      {pa.number}
                    </span>
                    <div className="w-9 h-9 border border-[#B08D57]/30 flex items-center justify-center text-[#0B1F33] group-hover:text-[#B08D57] group-hover:border-[#B08D57] transition-colors">
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

                <div className="pt-4 border-t border-[#E8E5DF] flex items-center justify-between text-xs font-semibold text-[#0B1F33] group-hover:text-[#B08D57] uppercase tracking-wider">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#0B1F33] text-[#0B1F33] hover:bg-[#0B1F33] hover:text-[#F7F5F0] text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              Explore Full Practice Directory
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY CLIENTS WORK WITH US */}
      <section className="py-24 bg-[#0B1F33] text-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold block mb-2">
              Our Professional Benchmark
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F7F5F0]">
              A Legal Practice Built Around Clarity and Trust
            </h2>
            <p className="text-sm text-[#E5E7EB]/80 mt-4 leading-relaxed font-light">
              We hold our counsel to exacting professional standards. Every instruction is managed with direct partner oversight, intellectual thoroughness, and absolute fidelity to client objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {LAWYER_DATA.biography.principles.map((p, idx) => (
              <div
                key={p.id}
                className="bg-[#071524] border border-white/10 p-7 relative space-y-4 hover:border-[#B08D57]/50 transition-colors"
              >
                <div className="text-xs font-mono text-[#B08D57] font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-serif-title text-xl font-semibold text-white">
                  {p.title}
                </h3>
                <p className="text-xs text-[#E5E7EB]/70 leading-relaxed font-light">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ABOUT THE LAWYER PREVIEW */}
      <section className="py-24 bg-[#F7F5F0] text-[#171A1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/5] border border-[#E8E5DF] overflow-hidden shadow-lg bg-white">
                <Image
                  src="/images/law_library_details.jpg"
                  alt="Prestigious legal research library and drafted submissions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
                Principal Counsel
              </div>

              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1F33]">
                Meet O.C Oremodu
              </h2>

              <p className="text-sm text-[#B08D57] font-semibold uppercase tracking-wider">
                LL.B (Hons) UNILAG • BL (Nigerian Law School) • LL.M (LSE) • MCIArb
              </p>

              <p className="text-sm text-[#171A1D]/80 leading-relaxed font-light">
                {LAWYER_DATA.biography.shortLead}
              </p>

              <p className="text-sm text-[#171A1D]/80 leading-relaxed font-light">
                Admitted to the Nigerian Bar in 2008, Funke established her foundation within premier commercial litigation chambers in Lagos. Her practice bridges rigorous legal technicality with practical commercial realism, guiding clients through Nigeria&apos;s dynamic regulatory and economic environment.
              </p>

              {/* Qualifications highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-3.5 bg-white border border-[#E8E5DF]">
                  <span className="text-[#B08D57] font-semibold block mb-1">Academic Pedigree</span>
                  <p className="text-[#171A1D]/80">First Class Honours (UNILAG) & Postgraduate LL.M from London School of Economics.</p>
                </div>
                <div className="p-3.5 bg-white border border-[#E8E5DF]">
                  <span className="text-[#B08D57] font-semibold block mb-1">Professional Standing</span>
                  <p className="text-[#171A1D]/80">Active member of NBA Section on Business Law & Chartered Arbitrator (MCIArb UK).</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#0B1F33] text-white hover:bg-[#B08D57] hover:text-[#0B1F33] text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  View Full Credentials & Timeline
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SELECTED EXPERIENCE PREVIEW */}
      <section className="py-24 bg-white text-[#171A1D] border-t border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold block mb-2">
              Representative Instructions
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1F33]">
              Selected Experience
            </h2>
            <p className="text-xs text-[#6B7280] mt-3 leading-relaxed">
              Client confidentiality is strictly maintained in accordance with the Rules of Professional Conduct for Legal Practitioners. Descriptions of matters are anonymized and presented in general terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SELECTED_MATTERS.slice(0, 3).map((m) => (
              <div
                key={m.id}
                className="bg-[#F7F5F0] border border-[#E8E5DF] p-7 flex flex-col justify-between space-y-4 hover:border-[#B08D57] transition-colors"
              >
                <div className="space-y-3">
                  <span className="inline-block text-[11px] uppercase tracking-wider font-semibold text-[#B08D57] bg-[#B08D57]/10 px-2 py-0.5">
                    {m.category}
                  </span>
                  <h3 className="font-serif-title text-lg font-semibold text-[#0B1F33] leading-snug">
                    {m.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed font-light">
                    {m.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E5DF] text-[11px] text-[#0B1F33]">
                  <span className="font-semibold text-[#B08D57]">Outcome: </span>
                  <span className="text-[#171A1D]/80">{m.outcome}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#0B1F33] hover:text-[#B08D57] transition-colors border-b border-[#0B1F33] pb-1"
            >
              View All Anonymized Matters & Approach
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. LEGAL PROCESS: 4 STEPS */}
      <section className="py-24 bg-[#071524] text-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold block mb-2">
              Structured Engagement
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
              The Legal Engagement Process
            </h2>
            <p className="text-xs text-[#E5E7EB]/70 mt-3 font-light leading-relaxed">
              We structure every engagement with transparency, rigorous conflict assessment, and clear communication milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {LEGAL_PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-[#0B1F33] border border-white/10 p-7 space-y-4 hover:border-[#B08D57]/40 transition-colors"
              >
                <div className="w-10 h-10 border border-[#B08D57] flex items-center justify-center text-sm font-mono font-bold text-[#B08D57]">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-serif-title text-lg font-semibold text-white">
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
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B08D57] text-[#0B1F33] hover:bg-[#C5A069] text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. LEGAL INSIGHTS PREVIEW */}
      <section className="py-24 bg-[#F7F5F0] text-[#171A1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E5DF] gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold block mb-2">
                Thought Leadership
              </span>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1F33]">
                Legal Insights & Briefs
              </h2>
            </div>
            <Link
              href="/insights"
              className="text-xs uppercase tracking-widest font-semibold text-[#0B1F33] hover:text-[#B08D57] transition-colors inline-flex items-center gap-1.5"
            >
              View Full Insights Library
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEGAL_INSIGHTS.slice(0, 3).map((art) => (
              <article
                key={art.slug}
                className="bg-white border border-[#E8E5DF] p-7 flex flex-col justify-between hover:border-[#B08D57] transition-colors shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#6B7280]">
                    <span className="text-[#B08D57] font-semibold uppercase tracking-wider">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif-title text-xl font-semibold text-[#0B1F33] hover:text-[#B08D57] transition-colors leading-snug">
                    <Link href={`/insights/${art.slug}`}>{art.title}</Link>
                  </h3>

                  <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-3 font-light">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8E5DF] flex items-center justify-between">
                  <span className="text-[11px] text-[#6B7280]">{art.formattedDate}</span>
                  <Link
                    href={`/insights/${art.slug}`}
                    className="text-xs font-semibold uppercase tracking-wider text-[#0B1F33] hover:text-[#B08D57] inline-flex items-center gap-1"
                  >
                    Read Brief
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-24 bg-white text-[#171A1D] border-t border-[#E8E5DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold block mb-2">
              Client Guidance
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1F33]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-[#6B7280] mt-3 leading-relaxed">
              Clear answers regarding engagement procedures, consultation format, confidentiality, and professional fees.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.slice(0, 5).map((faq) => (
              <details
                key={faq.id}
                className="group border border-[#E8E5DF] bg-[#F7F5F0] p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer"
              >
                <summary className="flex items-center justify-between text-base font-serif-title font-semibold text-[#0B1F33] group-hover:text-[#B08D57] transition-colors">
                  <span>{faq.question}</span>
                  <span className="ml-4 font-mono text-xs text-[#B08D57] group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-xs text-[#171A1D]/80 leading-relaxed pt-3 border-t border-[#E8E5DF] font-light">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="text-xs text-[#B08D57] hover:underline uppercase tracking-wider font-semibold"
            >
              Have a specific question? Contact our consultation desk →
            </Link>
          </div>
        </div>
      </section>

      {/* 11. HIGH-CONVERSION CONSULTATION & CONTACT SECTION */}
      <section id="consultation" className="py-24 bg-[#0B1F33] text-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Chambers Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold block mb-2">
                  Direct Engagement
                </span>
                <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                  Let&apos;s Discuss Your Legal Matter
                </h2>
                <p className="text-xs sm:text-sm text-[#E5E7EB]/80 mt-4 leading-relaxed font-light">
                  If you require strategic legal counsel, representation, or assistance navigating Nigerian statutory regulations, please submit your inquiry to arrange a confidential session.
                </p>
              </div>

              <div className="space-y-4 text-xs text-[#E5E7EB]/80">
                <div className="p-4 bg-[#071524] border border-white/10 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold block">Ikoyi Chambers</span>
                      <p className="text-[#E5E7EB]/70">{LAWYER_DATA.address.display}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                    <Phone className="w-4 h-4 text-[#B08D57] shrink-0" />
                    <div>
                      <span className="text-white font-semibold block">Direct Telephone</span>
                      <a href={`tel:${LAWYER_DATA.contact.phone}`} className="text-[#B08D57] hover:underline">
                        {LAWYER_DATA.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                    <Mail className="w-4 h-4 text-[#B08D57] shrink-0" />
                    <div>
                      <span className="text-white font-semibold block">Consultation Registry</span>
                      <a href={`mailto:${LAWYER_DATA.contact.consultationEmail}`} className="text-[#B08D57] hover:underline">
                        {LAWYER_DATA.contact.consultationEmail}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-[#B08D57]/30 bg-[#071524]/60">
                  <span className="text-xs font-serif-title font-semibold text-[#B08D57] block mb-1">
                    WhatsApp Business Channel
                  </span>
                  <p className="text-[11px] text-[#E5E7EB]/70 mb-3">
                    Fast-track scheduling for international callers and urgent commercial matters.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B1F33] bg-[#B08D57] hover:bg-[#C5A069] px-4 py-2 transition-colors"
                  >
                    Chat on WhatsApp
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
