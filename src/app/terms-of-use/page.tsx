import React from "react";
import { Metadata } from "next";
import { LAWYER_DATA } from "@/data/lawyer";
import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: `Terms of Use & Legal Disclaimer | ${LAWYER_DATA.name}`,
  description: `Terms of use and professional disclaimers governing the website of ${LAWYER_DATA.name} (LL.B, B.L, AICMC).`,
};

export default function TermsOfUsePage() {
  return (
    <div className="bg-[#F7F5F0] text-[#171A1D]">
      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-[#F7F5F0] py-16 border-b border-[#B08D57]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-[#C5A069] hover:underline mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Return to Homepage
          </Link>
          <span className="text-xs uppercase tracking-[0.18em] text-[#B08D57] font-semibold block mb-1">
            Website Conditions &amp; Legal Notice
          </span>
          <h1 className="font-serif-title text-4xl sm:text-5xl font-semibold text-white">
            Terms of Use
          </h1>
          <p className="text-xs sm:text-sm text-[#E5E7EB]/75 font-light mt-2">
            Applicable Under the Laws of the Federal Republic of Nigeria
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E8E5DF] p-8 sm:p-12 space-y-8 text-xs sm:text-sm text-[#171A1D]/85 leading-relaxed font-light shadow-xs">
            <div className="p-4 bg-[#F7F5F0] border-l-2 border-[#B08D57] flex items-center gap-3">
              <Scale className="w-5 h-5 text-[#B08D57] shrink-0" />
              <p className="text-xs text-[#0B1F33]">
                By accessing or using this website, you acknowledge and agree to the disclaimers and terms set out below.
              </p>
            </div>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                1. Informational Purpose Only — No Legal Advice
              </h2>
              <p>
                All profile descriptions, research summaries, and legal briefs published on this website are prepared solely for general educational and informational purposes. They do not constitute formal legal advice for any specific situation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                2. No Lawyer-Client Relationship Formed
              </h2>
              <p>
                Browsing this website, submitting an enquiry form, emailing {LAWYER_DATA.contact.email}, or sending a WhatsApp message does <strong>not</strong> by itself establish a lawyer-client relationship with {LAWYER_DATA.name}. Any formal representation commences only after conflict screening and mutual confirmation of engagement terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                3. Confidentiality of Preliminary Enquiries
              </h2>
              <p>
                Please avoid transmitting highly sensitive or time-critical confidential documents through preliminary web forms until direct engagement protocols are confirmed.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                4. Intellectual Property Rights
              </h2>
              <p>
                All original text, portraits, structure, and research summaries on this website belong to {LAWYER_DATA.name} and are protected under the Copyright Act 2022 of Nigeria. Unauthorized reproduction or commercial redistribution is prohibited.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                5. Governing Law
              </h2>
              <p>
                These Terms of Use are governed by the laws of the Federal Republic of Nigeria.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
