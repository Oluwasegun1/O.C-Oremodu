import React from "react";
import { Metadata } from "next";
import { LAWYER_DATA } from "@/data/lawyer";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Nigeria Data Protection Act (NDPA 2023)",
  description: `Privacy policy and data handling commitments for the professional legal website of ${LAWYER_DATA.name}, adhering to the Nigeria Data Protection Act 2023.`,
};

export default function PrivacyPolicyPage() {
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
            Data Protection &amp; Confidentiality
          </span>
          <h1 className="font-serif-title text-4xl sm:text-5xl font-semibold text-white">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#E5E7EB]/75 font-light mt-2">
            Governed by the Nigeria Data Protection Act (NDPA) 2023
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E8E5DF] p-8 sm:p-12 space-y-8 text-xs sm:text-sm text-[#171A1D]/85 leading-relaxed font-light shadow-xs">
            <div className="p-4 bg-[#F7F5F0] border-l-2 border-[#B08D57] flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#B08D57] shrink-0" />
              <p className="text-xs text-[#0B1F33]">
                {LAWYER_DATA.name} is committed to handling personal data responsibly in accordance with the Nigeria Data Protection Act 2023 (NDPA) and the Rules of Professional Conduct for Legal Practitioners in Nigeria.
              </p>
            </div>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                1. Scope of This Policy
              </h2>
              <p>
                This Privacy Policy explains how personal information voluntarily shared through this website, email ({LAWYER_DATA.contact.email}), telephone, or WhatsApp communications with {LAWYER_DATA.name} is handled and safeguarded.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                2. Information Voluntarily Provided
              </h2>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs">
                <li>Identification details: Full name and organization (where provided).</li>
                <li>Contact details: Email address, telephone or WhatsApp number.</li>
                <li>Enquiry overview: Preliminary summary submitted to assess the nature of the enquiry and avoid conflicts of interest.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                3. Purpose of Processing
              </h2>
              <p>
                Personal information is used solely to review and respond to your enquiry, perform routine conflict-of-interest checks, schedule consultations, or fulfill mutually agreed professional engagements. Personal data is never sold or shared with unauthorized third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                4. Confidentiality &amp; Your Rights Under NDPA 2023
              </h2>
              <p>
                Under the Nigeria Data Protection Act 2023, you may request access to, correction of, or deletion of personal information you have provided, subject to applicable legal obligations. To make a request, please email{" "}
                <a
                  href={`mailto:${LAWYER_DATA.contact.email}`}
                  className="text-[#8F7040] underline font-medium"
                >
                  {LAWYER_DATA.contact.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
