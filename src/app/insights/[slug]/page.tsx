import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LEGAL_INSIGHTS } from "@/data/insights";
import { LAWYER_DATA } from "@/data/lawyer";
import { PRACTICE_AREAS } from "@/data/practice-areas";
import { ArrowLeft, Clock, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";

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
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-[#C5A069] hover:underline mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Research &amp; Legal Briefs
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-xs text-[#E5E7EB]/75">
              <span className="text-[#0B1F33] bg-[#B08D57] font-semibold uppercase tracking-wider px-2.5 py-0.5">
                {art.type}
              </span>
              <span className="text-[#C5A069] font-semibold uppercase tracking-wider bg-[#071524] px-2.5 py-0.5 border border-[#B08D57]/30">
                {art.category}
              </span>
              <span className="flex items-center gap-1.5 font-mono">
                <Clock className="w-3.5 h-3.5 text-[#B08D57]" />
                {art.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#B08D57]" />
                {art.formattedDate}
              </span>
            </div>

            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
              {art.title}
            </h1>

            <div className="pt-2 text-xs text-[#E5E7EB]/80 flex flex-wrap items-center gap-1.5">
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
          <div className="bg-white border-l-4 border-[#B08D57] border-y border-r border-[#E8E5DF] p-6 sm:p-8 mb-10 shadow-xs">
            <h2 className="font-serif-title text-xl sm:text-2xl font-semibold text-[#0B1F33] mb-4">
              Key Research Insights &amp; Takeaways
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
                  <h3 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#0B1F33] pt-3 first:pt-0">
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

            {relatedPracticeArea && (
              <div className="pt-6 border-t border-[#E8E5DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F7F5F0] p-5">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#B08D57] font-semibold block">
                    Related Practice Focus
                  </span>
                  <p className="font-serif-title text-lg font-semibold text-[#0B1F33]">
                    {relatedPracticeArea.title}
                  </p>
                </div>
                <Link
                  href={`/practice-areas/${relatedPracticeArea.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#0B1F33] hover:text-[#B08D57]"
                >
                  Explore Practice Area
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {/* Disclaimer */}
            <div className="pt-6 border-t border-[#E8E5DF] text-xs text-[#6B7280] italic leading-relaxed">
              <strong>Disclaimer:</strong> This overview provides general educational and research commentary on Nigerian legal frameworks and does not constitute formal legal advice for a specific factual scenario.
            </div>
          </div>

          {/* Author Bio Card with KC11 Portrait */}
          <div className="mt-10 bg-white border border-[#E8E5DF] p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xs">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#B08D57] shrink-0 bg-[#071524]">
              <Image
                src="/images/kc11.jpg"
                alt={LAWYER_DATA.name}
                fill
                className="object-cover object-[50%_18%]"
                sizes="80px"
              />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] uppercase tracking-[0.16em] text-[#B08D57] font-semibold">
                Author
              </span>
              <h4 className="font-serif-title text-2xl font-semibold text-[#0B1F33]">
                {LAWYER_DATA.name}
              </h4>
              <p className="text-xs text-[#6B7280]">
                {LAWYER_DATA.credentialsLine}
              </p>
              <p className="text-xs text-[#171A1D]/80 pt-1 leading-relaxed font-light">
                Nigerian legal practitioner with practical experience across private law firms and Ministries of Justice, covering legal research, corporate and property drafting, litigation support, ADR mediation, and human-rights work.
              </p>
            </div>
          </div>

          {/* Enquiry CTA Banner */}
          <div className="mt-8 p-8 bg-[#0B1F33] text-white border border-[#B08D57]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-serif-title text-2xl font-semibold text-white">
                Interested in this research topic or related legal support?
              </h4>
              <p className="text-xs text-[#E5E7EB]/75 font-light">
                Connect directly with {LAWYER_DATA.shortName} for enquiries or collaboration.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 px-6 py-3 bg-[#B08D57] text-[#0B1F33] hover:bg-[#C5A069] text-xs font-semibold uppercase tracking-[0.15em] transition-colors inline-flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
