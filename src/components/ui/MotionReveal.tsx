"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealVariant = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";

interface MotionRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
}

const HIDDEN_CLASSES: Record<RevealVariant, string> = {
  "fade-up": "opacity-0 translate-y-6",
  "fade-in": "opacity-0",
  "slide-left": "opacity-0 -translate-x-6",
  "slide-right": "opacity-0 translate-x-6",
  "scale-in": "opacity-0 scale-[0.96]",
};

export default function MotionReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
}: MotionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -36px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className={`transition-all will-change-transform motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : HIDDEN_CLASSES[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
}
