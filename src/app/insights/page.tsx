"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LEGAL_INSIGHTS } from "@/data/insights";
import { Search, Clock, ArrowRight, Calendar, BookOpen, Tag } from "lucide-react";

const CATEGORIES = [
  "All Categories",
  "Corporate Law",
  "Dispute Resolution",
  "Real Estate",
  "Employment Law",
  "Arbitration",
];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInsights = LEGAL_INSIGHTS.filter((art) => {
    const matchesCategory =
      selectedCategory === "All Categories" || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F7F5F0] text-[#171A1D]">
      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-[#F7F5F0] py-16 sm:py-20 border-b border-[#B08D57]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
              Legal Commentary & Analysis
            </span>
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Legal Insights & Briefs
            </h1>
            <p className="text-sm sm:text-base text-[#E5E7EB]/80 font-light leading-relaxed">
              Strategic analysis of Nigerian commercial jurisprudence, regulatory updates, contract negotiation best practices, and dispute mechanisms.
            </p>
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
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? "bg-[#0B1F33] text-white"
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
                placeholder="Search legal briefs..."
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-[#F7F5F0] border border-[#E8E5DF] focus:border-[#B08D57] focus:bg-white text-[#171A1D]"
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
                No Briefs Found Matching Your Query
              </h3>
              <p className="text-xs text-[#6B7280]">
                Try adjusting your search terms or clearing the active category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All Categories");
                  setSearchQuery("");
                }}
                className="px-4 py-2 bg-[#0B1F33] text-white text-xs uppercase tracking-wider font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInsights.map((art) => (
                <article
                  key={art.slug}
                  className="bg-white border border-[#E8E5DF] p-7 flex flex-col justify-between hover:border-[#B08D57] transition-all duration-200 shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[11px] text-[#6B7280]">
                      <span className="text-[#B08D57] font-semibold uppercase tracking-wider bg-[#B08D57]/10 px-2 py-0.5">
                        {art.category}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[10px]">
                        <Clock className="w-3 h-3 text-[#B08D57]" />
                        {art.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif-title text-xl sm:text-2xl font-semibold text-[#0B1F33] hover:text-[#B08D57] transition-colors leading-snug">
                      <Link href={`/insights/${art.slug}`}>{art.title}</Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed line-clamp-3 font-light">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E8E5DF] flex items-center justify-between">
                    <span className="text-[11px] text-[#6B7280]">
                      {art.formattedDate}
                    </span>
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
          )}
        </div>
      </section>
    </div>
  );
}
