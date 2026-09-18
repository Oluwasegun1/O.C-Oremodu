"use client";

import React, { useState } from "react";
import { LAWYER_DATA } from "@/data/lawyer";
import { MessageSquare, X } from "lucide-react";
import { formatWhatsAppLink } from "@/lib/utils";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = formatWhatsAppLink(
    LAWYER_DATA.contact.whatsappNumber,
    "Hello Barrister Adebayo, I would like to make an enquiry regarding a legal consultation."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 print:hidden">
      {/* Subtle popup prompt */}
      {showTooltip && (
        <div className="bg-[#0B1F33] text-white text-xs border border-[#B08D57]/40 shadow-xl p-3.5 max-w-xs rounded-none transition-all duration-300">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <span className="font-serif-title font-semibold text-[#B08D57] text-sm">
              WhatsApp Legal Liaison
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-white/60 hover:text-white p-0.5"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[#E5E7EB]/90 text-[11px] leading-relaxed mb-2.5">
            Direct, confidential channel for prospective clients, corporate inquiries, and remote consultation scheduling.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center bg-[#B08D57] text-[#0B1F33] text-[11px] font-semibold uppercase tracking-wider py-1.5 hover:bg-[#C5A069] transition-colors"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Connect with Legal Chambers on WhatsApp"
        className="w-13 h-13 rounded-full bg-[#0B1F33] text-[#B08D57] border-2 border-[#B08D57] flex items-center justify-center shadow-2xl hover:bg-[#B08D57] hover:text-[#0B1F33] hover:scale-105 transition-all duration-300 focus:outline-none"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
