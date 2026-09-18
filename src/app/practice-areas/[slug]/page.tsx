import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PRACTICE_AREAS } from "@/data/practice-areas";
import { LAWYER_DATA } from "@/data/lawyer";
import ConsultationForm from "@/components/consultation/ConsultationForm";
import PracticeAreaIcon from "@/components/ui/PracticeAreaIcon";
import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

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
    title: `${pa.title} | ${LAWYER_DATA.name} Chambers, Lagos`,
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
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B08D57] hover:underline mb-2"
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
            <div className="lg:col-span-7 space-y-10">
              {/* Detailed Overview */}
              <div className="bg-white border border-[#E8E5DF] p-8 sm:p-10 space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold block">
                  Practice Scope & Perspective
                </span>
                <h2 className="font-serif-title text-2xl font-semibold text-[#0B1F33]">
                  Overview of Services & Strategic Value
                </h2>
                <p className="text-sm text-[#171A1D]/85 leading-relaxed font-light">
                  {pa.overview}
                </p>
              </div>

              {/* Key Services Checklist */}
              <div className="bg-white border border-[#E8E5DF] p-8 sm:p-10 space-y-6">
                <h3 className="font-serif-title text-2xl font-semibold text-[#0B1F33]">
                  Key Advisory & Procedural Capabilities
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

              {/* Statutory Framework & Nigerian Authorities */}
              <div className="bg-white border border-[#E8E5DF] p-8 sm:p-10 space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold block">
                  Legal Grounding
                </span>
                <h3 className="font-serif-title text-2xl font-semibold text-[#0B1F33]">
                  Governing Statutes & Relevant Authorities
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Our advice within this discipline is grounded in the active jurisprudence and regulatory provisions of:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {pa.statutoryFramework.map((sf, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#F7F5F0] border border-[#E8E5DF] text-xs text-[#0B1F33] flex items-center gap-2"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#B08D57] shrink-0" />
                      <span>{sf}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical Matters Handled */}
              <div className="bg-white border border-[#E8E5DF] p-8 sm:p-10 space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold block">
                  Illustrative Engagements
                </span>
                <h3 className="font-serif-title text-2xl font-semibold text-[#0B1F33]">
                  Typical Matters in Practice
                </h3>
                <p className="text-xs text-[#6B7280]">
                  Examples of instructions typically managed within this practice area (presented in anonymized terms to safeguard client confidentiality):
                </p>
                <div className="space-y-3 pt-2">
                  {pa.typicalMatters.map((tm, idx) => (
                    <div
                      key={idx}
                      className="p-4 border-l-2 border-[#B08D57] bg-[#F7F5F0] text-xs text-[#171A1D]/85 leading-relaxed"
                    >
                      {tm}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Consultation Sticky Form */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
              <ConsultationForm defaultPracticeAreaSlug={pa.slug} />

              <div className="p-6 bg-[#071524] text-white border border-white/10 text-xs space-y-2">
                <span className="text-[#B08D57] font-semibold uppercase tracking-wider block">
                  Direct Chambers Support
                </span>
                <p className="text-white/70">
                  Prefer a telephone conference first? Call our Ikoyi consultation coordinator at:
                </p>
                <a
                  href={`tel:${LAWYER_DATA.contact.phone}`}
                  className="block font-mono text-sm text-[#B08D57] hover:underline pt-1"
                >
                  {LAWYER_DATA.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
