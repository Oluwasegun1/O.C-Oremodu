"use client";

import React, { useState } from "react";
import { LAWYER_DATA } from "@/data/lawyer";
import { MessageSquare, X } from "lucide-react";
import { formatWhatsAppLink } from "@/lib/utils";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = formatWhatsAppLink(
    LAWYER_DATA.contact.whatsappNumber,
    `Hello ${LAWYER_DATA.name}, I would like to make an enquiry via your website.`
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 print:hidden">
      {showTooltip && (
        <div className="bg-[#0B1F33] text-white text-xs border border-[#B08D57]/40 shadow-2xl p-4 max-w-xs transition-all duration-200 animate-editorial-in">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <span className="font-serif-title font-semibold text-[#C5A069] text-base leading-tight">
              Direct WhatsApp Enquiry
            </span>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="text-white/60 hover:text-white p-0.5"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[#E5E7EB]/85 text-[11px] leading-relaxed mb-3 font-light">
            Connect directly with {LAWYER_DATA.shortName} for legal enquiries, document support, or scheduling a conversation.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center bg-[#B08D57] text-[#0B1F33] text-[11px] font-semibold uppercase tracking-wider py-2 hover:bg-[#C5A069] transition-colors"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        aria-label={`Connect with ${LAWYER_DATA.name} on WhatsApp`}
        className="w-14 h-14 rounded-full bg-[#0B1F33] text-[#C5A069] border-2 border-[#B08D57] flex items-center justify-center shadow-2xl hover:bg-[#B08D57] hover:text-[#0B1F33] hover:scale-105 transition-all duration-300"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
