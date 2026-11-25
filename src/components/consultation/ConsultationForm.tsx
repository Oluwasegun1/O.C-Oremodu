"use client";

import React, { useState } from "react";
import { PRACTICE_AREAS } from "@/data/practice-areas";
import { LAWYER_DATA } from "@/data/lawyer";
import { formatWhatsAppLink } from "@/lib/utils";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Loader2,
  Mail,
  MessageSquare,
} from "lucide-react";

interface ConsultationFormProps {
  defaultPracticeAreaSlug?: string;
  onSuccess?: () => void;
  className?: string;
}

export default function ConsultationForm({
  defaultPracticeAreaSlug,
  onSuccess,
  className = "",
}: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "Email",
    practiceArea: defaultPracticeAreaSlug || PRACTICE_AREAS[0].slug,
    description: "",
    preferredDate: "",
    enquiryType: "Legal Consultation / Advisory",
    disclaimerAgreed: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required.";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email address.";
    }
    if (!formData.phone.trim()) errs.phone = "Phone or WhatsApp number is required.";
    if (!formData.description.trim() || formData.description.trim().length < 15) {
      errs.description = "Please provide a brief overview (at least 15 characters).";
    }
    if (!formData.disclaimerAgreed) {
      errs.disclaimerAgreed = "Please acknowledge the preliminary enquiry disclaimer.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 650));

    const generatedRef = `OCO-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(generatedRef);
    setIsSubmitting(false);
    setIsSubmitted(true);

    if (onSuccess) onSuccess();
  };

  const selectedAreaTitle =
    PRACTICE_AREAS.find((p) => p.slug === formData.practiceArea)?.title ||
    "General Legal Matter";

  if (isSubmitted) {
    const mailSubject = encodeURIComponent(
      `[${referenceId}] ${formData.enquiryType} — ${selectedAreaTitle}`
    );
    const mailBody = encodeURIComponent(
      `Hello ${LAWYER_DATA.name},\n\nReference: ${referenceId}\nName: ${formData.fullName}\nPhone: ${formData.phone}\nPreferred Contact: ${formData.contactMethod}\nPractice Area: ${selectedAreaTitle}\nPreferred Date: ${formData.preferredDate || "Flexible"}\n\nSummary:\n${formData.description}`
    );
    const whatsappQuickLink = formatWhatsAppLink(
      LAWYER_DATA.contact.whatsappNumber,
      `Hello ${LAWYER_DATA.name}, I just submitted enquiry ${referenceId} (${selectedAreaTitle}) from ${formData.fullName}.`
    );

    return (
      <div
        className={`bg-[#0B1F33] text-[#F7F5F0] border border-[#B08D57]/40 p-8 sm:p-10 shadow-lg ${className}`}
      >
        <div className="flex items-center gap-3 text-[#C5A069] mb-4">
          <CheckCircle2 className="w-8 h-8 shrink-0" />
          <span className="font-serif-title text-2xl sm:text-3xl font-semibold tracking-wide">
            Enquiry Prepared & Logged
          </span>
        </div>

        <p className="text-sm text-[#E5E7EB]/90 leading-relaxed mb-6 font-sans-body font-light">
          Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Your enquiry details have been recorded with reference code{" "}
          <span className="font-mono text-[#C5A069] font-semibold">{referenceId}</span>.
        </p>

        <div className="bg-[#071524] p-5 border border-white/10 space-y-3 mb-6 text-xs">
          <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
            <span className="text-white/60">Reference Code:</span>
            <span className="font-mono text-[#C5A069] font-bold">{referenceId}</span>
          </div>
          <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
            <span className="text-white/60">Enquiry Type:</span>
            <span className="text-white text-right">{formData.enquiryType}</span>
          </div>
          <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
            <span className="text-white/60">Practice Area:</span>
            <span className="text-white text-right">{selectedAreaTitle}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-white/60">Preferred Channel:</span>
            <span className="text-white text-right">{formData.contactMethod}</span>
          </div>
        </div>

        <div className="space-y-4 text-xs text-[#E5E7EB]/80 leading-relaxed">
          <p>
            For immediate direct delivery to {LAWYER_DATA.shortName}&apos;s inbox or WhatsApp, use either direct channel below:
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${LAWYER_DATA.contact.email}?subject=${mailSubject}&body=${mailBody}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#B08D57] text-[#0B1F33] hover:bg-[#C5A069] text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Send Copy via Email
            </a>
            <a
              href={whatsappQuickLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-white/25 text-white hover:border-[#B08D57] hover:text-[#C5A069] text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Follow Up on WhatsApp
            </a>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-white/60 pt-3 border-t border-white/10">
            <ShieldCheck className="w-4 h-4 text-[#B08D57] shrink-0" />
            All enquiries are treated with strict professional discretion.
          </div>
        </div>

        <div className="pt-6">
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                contactMethod: "Email",
                practiceArea: defaultPracticeAreaSlug || PRACTICE_AREAS[0].slug,
                description: "",
                preferredDate: "",
                enquiryType: "Legal Consultation / Advisory",
                disclaimerAgreed: false,
              });
            }}
            className="text-xs text-[#C5A069] hover:underline uppercase tracking-wider font-semibold"
          >
            ← Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-[#FFFFFF] text-[#171A1D] border border-[#E8E5DF] p-6 sm:p-10 shadow-sm ${className}`}
    >
      <div className="border-b border-[#E8E5DF] pb-5 mb-7">
        <span className="text-[11px] uppercase tracking-[0.18em] text-[#B08D57] font-semibold block mb-1">
          Confidential Legal Enquiry
        </span>
        <h3 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#0B1F33]">
          Send an Enquiry or Request a Consultation
        </h3>
        <p className="text-xs text-[#6B7280] mt-1.5 leading-relaxed">
          Share a concise overview of your legal matter, documentation need, or professional enquiry. Enquiries are acknowledged promptly within one business day.
        </p>
      </div>

      <div className="space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="enquiry-fullName"
            className="block text-xs uppercase tracking-wider font-semibold text-[#0B1F33] mb-1.5"
          >
            Full Name <span className="text-[#B08D57]">*</span>
          </label>
          <input
            id="enquiry-fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Chinedu Okafor"
            className={`w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border ${
              errors.fullName ? "border-red-600" : "border-[#E8E5DF]"
            } focus:border-[#B08D57] focus:bg-white text-[#171A1D] transition-colors`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="enquiry-email"
              className="block text-xs uppercase tracking-wider font-semibold text-[#0B1F33] mb-1.5"
            >
              Email Address <span className="text-[#B08D57]">*</span>
            </label>
            <input
              id="enquiry-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@example.com"
              className={`w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border ${
                errors.email ? "border-red-600" : "border-[#E8E5DF]"
              } focus:border-[#B08D57] focus:bg-white text-[#171A1D] transition-colors`}
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="enquiry-phone"
              className="block text-xs uppercase tracking-wider font-semibold text-[#0B1F33] mb-1.5"
            >
              Phone / WhatsApp Number <span className="text-[#B08D57]">*</span>
            </label>
            <input
              id="enquiry-phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+234 900 000 0000"
              className={`w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border ${
                errors.phone ? "border-red-600" : "border-[#E8E5DF]"
              } focus:border-[#B08D57] focus:bg-white text-[#171A1D] transition-colors`}
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Contact Method & Practice Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="enquiry-contactMethod"
              className="block text-xs uppercase tracking-wider font-semibold text-[#0B1F33] mb-1.5"
            >
              Preferred Contact Mode
            </label>
            <select
              id="enquiry-contactMethod"
              value={formData.contactMethod}
              onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border border-[#E8E5DF] focus:border-[#B08D57] focus:bg-white text-[#171A1D]"
            >
              <option value="Email">Email Communication</option>
              <option value="Phone Call">Telephone Call</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Virtual Meeting (Zoom / Google Meet)">Virtual Meeting (Zoom / Google Meet)</option>
              <option value="In-Person (By Arrangement)">In-Person Meeting (By Arrangement)</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="enquiry-practiceArea"
              className="block text-xs uppercase tracking-wider font-semibold text-[#0B1F33] mb-1.5"
            >
              Area of Legal Practice
            </label>
            <select
              id="enquiry-practiceArea"
              value={formData.practiceArea}
              onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border border-[#E8E5DF] focus:border-[#B08D57] focus:bg-white text-[#171A1D]"
            >
              {PRACTICE_AREAS.map((pa) => (
                <option key={pa.slug} value={pa.slug}>
                  {pa.title}
                </option>
              ))}
              <option value="general-other">General / Other Legal Enquiry</option>
            </select>
          </div>
        </div>

        {/* Preferred Date & Enquiry Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="enquiry-date"
              className="block text-xs uppercase tracking-wider font-semibold text-[#0B1F33] mb-1.5"
            >
              Preferred Date (Optional)
            </label>
            <input
              id="enquiry-date"
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border border-[#E8E5DF] focus:border-[#B08D57] focus:bg-white text-[#171A1D]"
            />
          </div>

          <div>
            <label
              htmlFor="enquiry-type"
              className="block text-xs uppercase tracking-wider font-semibold text-[#0B1F33] mb-1.5"
            >
              Nature of Enquiry
            </label>
            <select
              id="enquiry-type"
              value={formData.enquiryType}
              onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border border-[#E8E5DF] focus:border-[#B08D57] focus:bg-white text-[#171A1D]"
            >
              <option value="Legal Consultation / Advisory">Legal Consultation / Advisory</option>
              <option value="Contract or Property Drafting">Contract or Property Drafting</option>
              <option value="ADR / Mediation Support">ADR / Mediation Support</option>
              <option value="Legal Research / Collaboration">Legal Research / Collaboration</option>
              <option value="Career / Associate Opportunity">Career / Associate Opportunity</option>
              <option value="Pro Bono / Advocacy Initiative">Pro Bono / Advocacy Initiative</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="enquiry-description"
            className="block text-xs uppercase tracking-wider font-semibold text-[#0B1F33] mb-1.5"
          >
            Summary of Enquiry <span className="text-[#B08D57]">*</span>
          </label>
          <textarea
            id="enquiry-description"
            rows={4}
            required
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Please share a brief overview of your matter, timeline, and the specific legal assistance or collaboration you are seeking..."
            className={`w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border ${
              errors.description ? "border-red-600" : "border-[#E8E5DF]"
            } focus:border-[#B08D57] focus:bg-white text-[#171A1D] transition-colors`}
          />
          {errors.description && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.description}
            </p>
          )}
        </div>

        {/* Disclaimer Checkbox */}
        <div className="pt-1">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={formData.disclaimerAgreed}
              onChange={(e) =>
                setFormData({ ...formData, disclaimerAgreed: e.target.checked })
              }
              className="mt-1 h-4 w-4 rounded-none border-[#E8E5DF] accent-[#B08D57]"
            />
            <span className="text-xs text-[#6B7280] leading-relaxed">
              I understand that submitting this preliminary enquiry does not by itself establish a formal lawyer-client relationship until engagement terms are mutually confirmed.
            </span>
          </label>
          {errors.disclaimerAgreed && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.disclaimerAgreed}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0B1F33] text-[#F7F5F0] hover:bg-[#B08D57] hover:text-[#0B1F33] text-xs font-semibold uppercase tracking-widest transition-all duration-200 disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Preparing Enquiry...
              </>
            ) : (
              <>
                Submit Enquiry
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
