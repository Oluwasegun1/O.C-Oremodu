import React from "react";
import { Metadata } from "next";
import { LAWYER_DATA } from "@/data/lawyer";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Nigeria Data Protection Act (NDPA 2023) Compliance",
  description: `Privacy policy and data governance practices of ${LAWYER_DATA.name} Chambers, adhering to the Nigeria Data Protection Act 2023 and legal professional confidentiality.`,
};

export default function PrivacyPolicyPage() {
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
            Statutory Data Protection
          </span>
          <h1 className="font-serif-title text-4xl sm:text-5xl font-semibold">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#E5E7EB]/70 font-light mt-2">
            Effective Date: January 1, 2026 • Governed by the Nigeria Data Protection Act (NDPA) 2023
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
                {LAWYER_DATA.firmName} is committed to safeguarding client data in strict adherence to the Nigeria Data Protection Act 2023 (NDPA) and the Rules of Professional Conduct for Legal Practitioners in Nigeria.
              </p>
            </div>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                1. Scope of This Policy
              </h2>
              <p>
                This Privacy Policy explains how {LAWYER_DATA.name} (&quot;we&quot;, &quot;our&quot;, or &quot;the Practice&quot;) collects, processes, protects, and retains personal and business information provided by visitors, prospective clients, and established clients through our website, consultation request forms, email correspondence, and telephone communications.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                2. Information We Collect
              </h2>
              <p>We only collect personal information that is voluntarily submitted to us, including:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-xs">
                <li>Identification details: Full name, business or corporate entity name, designation.</li>
                <li>Contact information: Email address, telephone/WhatsApp number, physical address.</li>
                <li>Preliminary matter summary: Brief factual overview provided in consultation forms for conflict assessment.</li>
                <li>Technical data: Anonymized IP addresses, browser types, and session duration to ensure security and optimize website performance.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                3. Purpose and Legal Basis for Processing
              </h2>
              <p>Your personal data is processed under the following legal bases recognized by the NDPA 2023:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-xs">
                <li>To conduct mandatory conflict-of-interest checks prior to entering into a formal legal engagement.</li>
                <li>To schedule and facilitate preliminary legal consultations.</li>
                <li>To perform obligations under a valid Letter of Engagement.</li>
                <li>To comply with statutory and regulatory reporting obligations under Nigerian law (including anti-money laundering regulations where applicable).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                4. Legal Professional Privilege & Confidentiality
              </h2>
              <p>
                All substantive legal disclosures, case facts, and documentary materials shared with our practice are protected by Legal Professional Privilege and professional secrecy under Section 192 of the Evidence Act 2011 and the Rules of Professional Conduct. We do not sell, rent, commercialize, or disclose client data to unauthorized third parties under any circumstances.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                5. Data Retention & Security
              </h2>
              <p>
                We maintain appropriate administrative, technical, and physical safeguards against unauthorized disclosure or loss. Preliminary inquiries where representation is not established are retained only for the period necessary to maintain conflict records and are securely purged thereafter.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-title text-xl font-semibold text-[#0B1F33]">
                6. Your Rights Under the NDPA 2023
              </h2>
              <p>
                Under the Nigeria Data Protection Act 2023, data subjects possess rights including the right to request access to their personal data, request correction of inaccurate records, object to processing, or request data deletion subject to statutory compliance mandates.
              </p>
              <p>
                To exercise any of these rights, contact our Practice Coordinator at:{" "}
                <a href={`mailto:${LAWYER_DATA.contact.email}`} className="text-[#B08D57] underline">
                  {LAWYER_DATA.contact.email}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
