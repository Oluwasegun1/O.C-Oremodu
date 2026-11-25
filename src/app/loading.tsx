import React from "react";
import { Scale } from "lucide-react";
import { LAWYER_DATA } from "@/data/lawyer";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
      className="min-h-[72vh] bg-[#F7F5F0] flex flex-col justify-between"
    >
      {/* Top Navy Banner Skeleton */}
      <div className="bg-[#0B1F33] border-b border-[#B08D57]/20 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="h-3 w-40 bg-[#B08D57]/30 animate-pulse" />
          <div className="h-10 sm:h-12 w-72 sm:w-[28rem] bg-white/10 animate-pulse" />
          <div className="h-4 w-64 sm:w-[34rem] bg-white/5 animate-pulse" />
        </div>
      </div>

      {/* Centered Editorial Loading Crest */}
      <div className="py-20 flex flex-col items-center justify-center px-4 text-center space-y-4">
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-2 border border-[#B08D57]/35 animate-pulse" />
          <div className="w-12 h-12 border border-[#B08D57] bg-[#0B1F33] flex flex-col items-center justify-center">
            <Scale className="w-3 h-3 text-[#C5A069] mb-0.5" />
            <span className="font-serif-title text-sm font-bold tracking-widest text-white leading-none">
              {LAWYER_DATA.initials}
            </span>
          </div>
        </div>

        <div className="space-y-1">
          <p className="font-serif-title text-lg font-semibold text-[#0B1F33]">
            Preparing Legal Brief...
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#8F7040] font-semibold">
            {LAWYER_DATA.shortName}
          </p>
        </div>

        <div className="w-36 h-[2px] bg-[#E8E5DF] overflow-hidden relative">
          <div className="h-full bg-[#B08D57] loader-bar-fill" />
        </div>
      </div>
    </div>
  );
}
