"use client";

import React, { useEffect, useState } from "react";
import { Scale } from "lucide-react";
import { LAWYER_DATA } from "@/data/lawyer";

export default function InitialPageLoader() {
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const minDuration = prefersReducedMotion ? 150 : 750;
    const maxDuration = prefersReducedMotion ? 300 : 1200;
    const exitDuration = prefersReducedMotion ? 150 : 450;
    const startTime = performance.now();

    let exitTimer: number | undefined;
    let unmountTimer: number | undefined;
    let maxTimer: number | undefined;
    let dismissed = false;

    const triggerDismiss = () => {
      if (dismissed) return;
      dismissed = true;
      const elapsed = performance.now() - startTime;
      const remaining = Math.max(0, minDuration - elapsed);

      exitTimer = window.setTimeout(() => {
        setPhase("exiting");
        unmountTimer = window.setTimeout(() => {
          setPhase("done");
        }, exitDuration);
      }, remaining);
    };

    if (document.readyState === "complete") {
      triggerDismiss();
    } else {
      window.addEventListener("load", triggerDismiss, { once: true });
      maxTimer = window.setTimeout(triggerDismiss, maxDuration);
    }

    return () => {
      window.removeEventListener("load", triggerDismiss);
      if (exitTimer) window.clearTimeout(exitTimer);
      if (unmountTimer) window.clearTimeout(unmountTimer);
      if (maxTimer) window.clearTimeout(maxTimer);
    };
  }, []);

  if (phase === "done") {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={`Loading ${LAWYER_DATA.name} website`}
      className={`loader-curtain-failsafe fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#071524] text-[#F7F5F0] px-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] print:hidden ${
        phase === "exiting"
          ? "opacity-0 -translate-y-2 pointer-events-none"
          : "opacity-100 translate-y-0"
      }`}
    >
      {/* Subtle architectural grid & soft ambient glow */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute w-80 h-80 rounded-full bg-[#B08D57]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        {/* Double-framed Architectural Monogram Crest */}
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-2.5 border border-[#B08D57]/35 loader-emblem-ring" />
          <div className="w-16 h-16 border border-[#B08D57] bg-[#0B1F33] flex flex-col items-center justify-center shadow-2xl">
            <Scale className="w-3.5 h-3.5 text-[#C5A069] mb-0.5" />
            <span className="font-serif-title text-lg font-bold tracking-[0.18em] text-[#F7F5F0] leading-none">
              {LAWYER_DATA.initials}
            </span>
          </div>
        </div>

        {/* Practitioner Identity */}
        <div className="space-y-1.5">
          <p className="font-serif-title text-2xl sm:text-3xl font-semibold tracking-wide text-white">
            {LAWYER_DATA.name}
          </p>
          <p className="text-[10px] sm:text-[11px] font-sans-body uppercase tracking-[0.24em] text-[#C5A069] font-semibold">
            Legal Practitioner • LL.B • B.L • AICMC
          </p>
        </div>

        {/* Animated Brushed-Gold Hairline Progress Track */}
        <div className="w-44 sm:w-52 h-[2px] bg-white/10 overflow-hidden relative">
          <div className="h-full bg-gradient-to-r from-[#8F7040] via-[#C5A069] to-[#F3ECE1] loader-bar-fill" />
        </div>
      </div>
    </div>
  );
}
