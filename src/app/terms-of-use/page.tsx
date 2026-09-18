import React from "react";
import { Metadata } from "next";
import { LAWYER_DATA } from "@/data/lawyer";
import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: `Terms of Use & Legal Disclaimer | ${LAWYER_DATA.name} Chambers`,
  description: `Terms and conditions governing the use of the official website of ${LAWYER_DATA.name}, Barrister & Solicitor of the Supreme Court of Nigeria.`,
};

export default function TermsOfUsePage() {
  return (
    <div className="bg-[#F7F5F0] text-[#171A1D]">
      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-[#F7F5F0] py-16 border-b border-[#B08D57]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B08D57] hover:underline mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Return to Homepage
          </Link>
          <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold block mb-1">
            Website Conditions & Legal Notice
          </span>
          <h1 className="font-serif-title text-4xl sm:text-5xl font-semibold">
            Terms of Use
          </h1>
          <p className="text-xs sm:text-sm text-[#E5E7EB]/70 font-light mt-2">
            Governing Legal Terms • Applicable Under the Laws of the Federal Republic of Nigeria
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
                By accessing or browsing this website, you acknowledge and agree to be bound by the terms, disclaimers, and professional conditions set out below.
              </p>
            </div>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                1. Informational Purpose Only — No Legal Advice
              </h2>
              <p>
                The materials, articles, briefings, checklists, statutory references, and commentary published on this website are prepared solely for general educational and informational purposes. They do not constitute formal legal advice, opinions, or solutions for any individual, enterprise, or specific legal scenario.
              </p>
              <p>
                Nigerian statutes, judicial authorities, and regulatory interpretations evolve continually. You should not act or refrain from acting on the basis of any material on this site without seeking tailored legal advice from a qualified Nigerian legal practitioner admitted to the Bar.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                2. No Lawyer-Client Relationship Formed
              </h2>
              <p>
                Accessing this website, submitting an electronic consultation request, emailing our chambers, or chatting through our WhatsApp liaison channel does <strong>not</strong> create a lawyer-client or barrister-client relationship.
              </p>
              <p>
                A formal professional relationship is created only when:
              </p>
              <ol className="list-decimal list-inside space-y-1 pl-2 text-xs">
                <li>We have verified that representing you does not create a conflict of interest with any existing client;</li>
                <li>Our chambers has formally agreed to accept the specific brief; and</li>
                <li>Both parties have duly executed a formal Letter of Engagement setting out terms, scope, and professional fees.</li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                3. Confidentiality and Transmission Security
              </h2>
              <p>
                While our electronic channels are managed with professional care, prospective clients are advised not to disclose sensitive confidential case facts in preliminary inquiry forms beyond what is strictly necessary to identify the parties and nature of the dispute for conflict checks.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                4. Intellectual Property Rights
              </h2>
              <p>
                All text, articles, structure, and original analysis displayed on this website are the intellectual property of {LAWYER_DATA.name} and Adebayo Legal & Advisory, protected under the Copyright Act 2022 of Nigeria. Reproduction or distribution without prior written consent is prohibited.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                5. Governing Law and Jurisdiction
              </h2>
              <p>
                These Terms of Use are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising in connection with the use of this website shall be subject to the jurisdiction of the High Court of Lagos State, Nigeria.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
