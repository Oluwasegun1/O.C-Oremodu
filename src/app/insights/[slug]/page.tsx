import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LEGAL_INSIGHTS } from "@/data/insights";
import { LAWYER_DATA } from "@/data/lawyer";
import { PRACTICE_AREAS } from "@/data/practice-areas";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LEGAL_INSIGHTS.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const art = LEGAL_INSIGHTS.find((a) => a.slug === slug);
  if (!art) return {};

  return {
    title: `${art.title} | ${LAWYER_DATA.name}`,
    description: art.excerpt,
  };
}

export default async function IndividualInsightPage({ params }: Props) {
  const { slug } = await params;
  const art = LEGAL_INSIGHTS.find((a) => a.slug === slug);

  if (!art) {
    notFound();
  }

  const relatedPracticeArea = PRACTICE_AREAS.find(
    (p) => p.slug === art.relatedPracticeAreaSlug
  );

  return (
    <div className="bg-[#F7F5F0] text-[#171A1D]">
      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-[#F7F5F0] py-16 sm:py-20 border-b border-[#B08D57]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B08D57] hover:underline mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Legal Insights
            </Link>

            <div className="flex items-center gap-4 text-xs text-[#E5E7EB]/70">
              <span className="text-[#B08D57] font-semibold uppercase tracking-wider bg-[#071524] px-2.5 py-1 border border-[#B08D57]/30">
                {art.category}
              </span>
              <span className="flex items-center gap-1.5 font-mono">
                <Clock className="w-3.5 h-3.5 text-[#B08D57]" />
                {art.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#B08D57]" />
                {art.formattedDate}
              </span>
            </div>

            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
              {art.title}
            </h1>

            <div className="pt-2 text-xs text-[#E5E7EB]/80 flex items-center gap-2">
              <span>By</span>
              <strong className="text-white">{art.author}</strong>
              <span>— {art.authorRole}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Editorial Article Body */}
      <article className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Executive Summary / Key Takeaways Box */}
          <div className="bg-white border-l-4 border-[#B08D57] border-y border-r border-[#E8E5DF] p-6 sm:p-8 mb-12 shadow-xs">
            <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33] mb-4">
              Executive Summary & Key Takeaways
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-[#171A1D]/85">
              {art.summaryKeyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Structured Editorial Paragraphs */}
          <div className="bg-white border border-[#E8E5DF] p-8 sm:p-12 space-y-8 shadow-xs">
            {art.content.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                {sec.heading && (
                  <h3 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#0B1F33] pt-4 first:pt-0">
                    {sec.heading}
                  </h3>
                )}
                {sec.paragraphs.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-sm sm:text-base text-[#171A1D]/85 leading-relaxed font-light"
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}

            {/* Statutory Disclaimer inside article */}
            <div className="pt-8 mt-8 border-t border-[#E8E5DF] text-xs text-[#6B7280] italic leading-relaxed">
              <strong>Disclaimer:</strong> This publication provides general educational commentary on Nigerian legal principles and does not constitute formal legal advice. Readers facing specific commercial or contractual disputes should obtain tailored counsel from a qualified legal practitioner.
            </div>
          </div>

          {/* Author Bio Card */}
          <div className="mt-12 bg-white border border-[#E8E5DF] p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xs">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#B08D57] shrink-0">
              <Image
                src="/images/funke_adebayo_hero.jpg"
                alt={LAWYER_DATA.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] uppercase tracking-wider text-[#B08D57] font-semibold">
                Author & Principal Counsel
              </span>
              <h4 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                {LAWYER_DATA.name}
              </h4>
              <p className="text-xs text-[#6B7280]">
                {LAWYER_DATA.title} • LL.M (LSE) • MCIArb
              </p>
              <p className="text-xs text-[#171A1D]/80 pt-1 leading-relaxed font-light">
                Advising corporations, investors, and private clients on corporate strategy, contractual risk mitigation, and commercial dispute resolution across Nigeria.
              </p>
            </div>
          </div>

          {/* Consultation CTA Banner */}
          <div className="mt-8 p-8 bg-[#0B1F33] text-white border border-[#B08D57]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-serif-title text-xl font-semibold text-white">
                Require strategic legal advice on this topic?
              </h4>
              <p className="text-xs text-[#E5E7EB]/70 font-light">
                Arrange a confidential consultation with our Ikoyi chambers.
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
      </article>
    </div>
  );
}
