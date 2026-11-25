import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PRACTICE_AREAS } from "@/data/practice-areas";
import { LAWYER_DATA } from "@/data/lawyer";
import ConsultationForm from "@/components/consultation/ConsultationForm";
import PracticeAreaIcon from "@/components/ui/PracticeAreaIcon";
import { ArrowLeft, CheckCircle2, FileText, Mail, Phone } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRACTICE_AREAS.map((pa) => ({
    slug: pa.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pa = PRACTICE_AREAS.find((p) => p.slug === slug);
  if (!pa) return {};

  return {
    title: `${pa.title} | ${LAWYER_DATA.name}`,
    description: pa.shortDescription,
  };
}

export default async function IndividualPracticeAreaPage({ params }: Props) {
  const { slug } = await params;
  const pa = PRACTICE_AREAS.find((p) => p.slug === slug);

  if (!pa) {
    notFound();
  }

  return (
    <div className="bg-[#F7F5F0] text-[#171A1D]">
      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-[#F7F5F0] py-16 sm:py-20 border-b border-[#B08D57]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 max-w-4xl">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-[#C5A069] hover:underline mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to All Practice Areas
            </Link>

            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-[#B08D57] font-bold">
                {pa.number}
              </span>
              <div className="w-8 h-8 border border-[#B08D57]/40 flex items-center justify-center text-[#B08D57]">
                <PracticeAreaIcon name={pa.iconName} className="w-4 h-4" />
              </div>
            </div>

            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
              {pa.title}
            </h1>

            <p className="text-sm sm:text-base text-[#E5E7EB]/85 font-light leading-relaxed max-w-3xl">
              {pa.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Main Information */}
            <div className="lg:col-span-7 space-y-8">
              {/* Detailed Overview */}
              <div className="bg-white border border-[#E8E5DF] p-8 sm:p-10 space-y-4 shadow-xs">
                <span className="text-xs uppercase tracking-[0.18em] text-[#B08D57] font-semibold block">
                  Practice Scope &amp; Perspective
                </span>
                <h2 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#0B1F33]">
                  Overview &amp; Practical Focus
                </h2>
                <p className="text-sm sm:text-[15px] text-[#171A1D]/85 leading-relaxed font-light">
                  {pa.overview}
                </p>
              </div>

              {/* Key Services Checklist */}
              <div className="bg-white border border-[#E8E5DF] p-8 sm:p-10 space-y-6 shadow-xs">
                <h3 className="font-serif-title text-2xl font-semibold text-[#0B1F33]">
                  Key Capabilities &amp; Legal Support
                </h3>
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#171A1D]/85">
                  {pa.keyServices.map((srv, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documented Experience Highlights */}
              <div className="bg-white border border-[#E8E5DF] p-8 sm:p-10 space-y-4 shadow-xs">
                <span className="text-xs uppercase tracking-[0.18em] text-[#B08D57] font-semibold block">
                  Practical Background
                </span>
                <h3 className="font-serif-title text-2xl font-semibold text-[#0B1F33]">
                  Relevant Hands-On Experience
                </h3>
                <div className="space-y-3 pt-1">
                  {pa.practicalExperienceHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-4 border-l-2 border-[#B08D57] bg-[#F7F5F0] text-xs sm:text-sm text-[#171A1D]/85 leading-relaxed font-light"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Statutory Framework */}
              <div className="bg-white border border-[#E8E5DF] p-8 sm:p-10 space-y-4 shadow-xs">
                <span className="text-xs uppercase tracking-[0.18em] text-[#B08D57] font-semibold block">
                  Legal Grounding
                </span>
                <h3 className="font-serif-title text-2xl font-semibold text-[#0B1F33]">
                  Applicable Nigerian Statutory Frameworks
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {pa.statutoryFramework.map((sf, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-[#F7F5F0] border border-[#E8E5DF] text-xs text-[#0B1F33] flex items-center gap-2.5"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#B08D57] shrink-0" />
                      <span>{sf}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Enquiry Form */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
              <ConsultationForm defaultPracticeAreaSlug={pa.slug} />

              <div className="p-6 bg-[#071524] text-white border border-white/10 text-xs space-y-3">
                <span className="text-[#C5A069] font-semibold uppercase tracking-[0.16em] block">
                  Direct Contact
                </span>
                <p className="text-white/75 font-light">
                  Prefer to reach out directly by telephone or email?
                </p>
                <div className="space-y-2 pt-1">
                  <a
                    href={`tel:${LAWYER_DATA.contact.phone}`}
                    className="flex items-center gap-2 font-mono text-sm text-[#C5A069] hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {LAWYER_DATA.contact.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${LAWYER_DATA.contact.email}`}
                    className="flex items-center gap-2 text-xs text-white/85 hover:text-[#C5A069] break-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#B08D57]" />
                    {LAWYER_DATA.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
