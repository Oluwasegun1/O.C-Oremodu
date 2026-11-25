"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LEGAL_INSIGHTS } from "@/data/insights";
import { LAWYER_DATA } from "@/data/lawyer";
import MotionReveal from "@/components/ui/MotionReveal";
import { Search, Clock, ArrowRight, BookOpen } from "lucide-react";

const CATEGORIES = [
  "All Categories",
  "Family & Child Rights",
  "Climate & Energy Law",
  "Property & Land Law",
  "ADR & Mediation",
];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInsights = LEGAL_INSIGHTS.filter((art) => {
    const matchesCategory =
      selectedCategory === "All Categories" || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F7F5F0] text-[#171A1D]">
      {/* Header Banner with KC10 Editorial Portrait */}
      <section className="bg-[#0B1F33] text-[#F7F5F0] py-16 sm:py-20 border-b border-[#B08D57]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="hero-stagger-1 inline-block text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold">
                Legal Scholarship &amp; Practical Commentary
              </span>
              <h1 className="hero-stagger-2 font-serif-title text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
                Research &amp; Legal Briefs
              </h1>
              <p className="hero-stagger-3 text-sm sm:text-base text-[#E5E7EB]/85 font-light leading-relaxed max-w-2xl">
                Featuring {LAWYER_DATA.name}&apos;s legal research papers on Nigerian climate law, energy-sector policy, and child custody &amp; adoption under the Child Rights Act and Matrimonial Causes Act—alongside practical legal briefs.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end hero-portrait-in">
              <div className="editorial-portrait-frame relative w-full max-w-[240px]">
                <div className="portrait-accent-border absolute -bottom-2.5 -right-2.5 top-2.5 left-2.5 border border-[#B08D57]/40 pointer-events-none hidden sm:block" />
                <div className="relative aspect-[3/4] overflow-hidden border border-white/15 bg-[#071524] shadow-2xl">
                  <Image
                    src="/images/kc10.jpg"
                    alt={`Editorial portrait of ${LAWYER_DATA.name}`}
                    fill
                    priority
                    className="portrait-img object-cover object-top"
                    sizes="240px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="border-b border-[#E8E5DF] bg-white sticky top-16 z-20 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#0B1F33] text-[#C5A069]"
                      : "bg-[#F7F5F0] text-[#6B7280] hover:text-[#0B1F33]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-[#6B7280] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search research & briefs..."
                aria-label="Search research papers and legal briefs"
                className="w-full pl-9 pr-4 py-2 text-xs bg-[#F7F5F0] border border-[#E8E5DF] focus:border-[#B08D57] focus:bg-white text-[#171A1D]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredInsights.length === 0 ? (
            <div className="text-center py-20 bg-white border border-[#E8E5DF] p-10 space-y-4">
              <BookOpen className="w-8 h-8 text-[#B08D57] mx-auto" />
              <h3 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                No Publications Found Matching Your Query
              </h3>
              <p className="text-xs text-[#6B7280]">
                Try adjusting your search keywords or resetting the category filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All Categories");
                  setSearchQuery("");
                }}
                className="px-5 py-2.5 bg-[#0B1F33] text-white text-xs uppercase tracking-wider font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredInsights.map((art, idx) => (
                <MotionReveal key={art.slug} delay={(idx % 2) * 85} className="h-full">
                  <article className="editorial-card h-full bg-white border border-[#E8E5DF] p-8 flex flex-col justify-between hover:border-[#B08D57] shadow-xs hover:shadow-md">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#6B7280]">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-semibold uppercase tracking-wider px-2.5 py-0.5 ${
                              art.type === "Research Paper"
                                ? "bg-[#0B1F33] text-[#C5A069]"
                                : "bg-[#F3ECE1] text-[#8F7040]"
                            }`}
                          >
                            {art.type}
                          </span>
                          <span className="text-[#B08D57] font-semibold uppercase tracking-wider">
                            {art.category}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 font-mono text-[10px]">
                          <Clock className="w-3 h-3 text-[#B08D57]" />
                          {art.readTime}
                        </span>
                      </div>

                      <h2 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#0B1F33] hover:text-[#B08D57] transition-colors leading-snug">
                        <Link href={`/insights/${art.slug}`}>{art.title}</Link>
                      </h2>

                      <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-light">
                        {art.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E8E5DF] flex items-center justify-between">
                      <span className="text-[11px] text-[#6B7280]">
                        {art.formattedDate}
                      </span>
                      <Link
                        href={`/insights/${art.slug}`}
                        className="group text-xs font-semibold uppercase tracking-wider text-[#0B1F33] hover:text-[#B08D57] inline-flex items-center gap-1.5"
                      >
                        Read Full Summary
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                </MotionReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
