"use client";

import React, { useState } from "react";
import { PRACTICE_AREAS } from "@/data/practice-areas";
import { ShieldCheck, CheckCircle2, AlertCircle, ArrowRight, Loader2 } from "lucide-react";

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
    practiceArea: defaultPracticeAreaSlug || "corporate-commercial-law",
    description: "",
    preferredDate: "",
    referralSource: "Professional Referral",
    disclaimerAgreed: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required.";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "Please provide a valid email address.";
    }
    if (!formData.phone.trim()) errs.phone = "Phone number is required for verification.";
    if (!formData.description.trim() || formData.description.length < 15) {
      errs.description = "Please provide a brief description (at least 15 characters).";
    }
    if (!formData.disclaimerAgreed) {
      errs.disclaimerAgreed = "You must acknowledge the legal representation disclaimer.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable secure dispatch
    await new Promise((resolve) => setTimeout(resolve, 900));

    const generatedRef = `LEG-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(generatedRef);
    setIsSubmitting(false);
    setIsSubmitted(true);

    if (onSuccess) onSuccess();
  };

  if (isSubmitted) {
    return (
      <div className={`bg-[#0B1F33] text-[#F7F5F0] border border-[#B08D57]/40 p-8 sm:p-10 ${className}`}>
        <div className="flex items-center gap-3 text-[#B08D57] mb-4">
          <CheckCircle2 className="w-8 h-8" />
          <span className="font-serif-title text-2xl font-bold tracking-wide">
            Consultation Request Received
          </span>
        </div>

        <p className="text-sm text-[#E5E7EB]/90 leading-relaxed mb-6 font-sans-body">
          Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Your consultation inquiry has been logged securely into our preliminary engagement register.
        </p>

        <div className="bg-[#071524] p-5 border border-white/10 space-y-3 mb-6 text-xs">
          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-white/60">Reference Code:</span>
            <span className="font-mono text-[#B08D57] font-bold">{referenceId}</span>
          </div>
          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-white/60">Subject Matter:</span>
            <span className="text-white">
              {PRACTICE_AREAS.find((p) => p.slug === formData.practiceArea)?.title || "General Legal Matter"}
            </span>
          </div>
          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-white/60">Preferred Channel:</span>
            <span className="text-white">{formData.contactMethod}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60">Next Step:</span>
            <span className="text-[#B08D57]">Internal Conflict Check & Scheduling Email</span>
          </div>
        </div>

        <div className="space-y-4 text-xs text-[#E5E7EB]/80 leading-relaxed">
          <p>
            Our practice coordinator will review your inquiry against active client registers and respond within <strong>one business day</strong> with proposed consultation slots and engagement details.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-white/50 pt-2 border-t border-white/10">
            <ShieldCheck className="w-4 h-4 text-[#B08D57]" />
            Strict legal professional secrecy applies to all information supplied.
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
                practiceArea: "corporate-commercial-law",
                description: "",
                preferredDate: "",
                referralSource: "Professional Referral",
                disclaimerAgreed: false,
              });
            }}
            className="text-xs text-[#B08D57] hover:underline uppercase tracking-wider font-semibold"
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
      <div className="border-b border-[#E8E5DF] pb-5 mb-8">
        <span className="text-[11px] uppercase tracking-widest text-[#B08D57] font-semibold block mb-1">
          Confidential Legal Inquiry
        </span>
        <h3 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#0B1F33]">
          Request a Legal Consultation
        </h3>
        <p className="text-xs text-[#6B7280] mt-1.5 leading-relaxed">
          Please provide preliminary details. We will assess jurisdiction, perform a conflict check, and respond promptly.
        </p>
      </div>

      <div className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#0B1F33] mb-1.5">
            Full Name <span className="text-[#B08D57]">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Dr. Babatunde Williams"
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
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#0B1F33] mb-1.5">
              Email Address <span className="text-[#B08D57]">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@company.com"
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
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#0B1F33] mb-1.5">
              Phone / WhatsApp Number <span className="text-[#B08D57]">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+234 803 000 0000"
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
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#0B1F33] mb-1.5">
              Preferred Consultation Mode
            </label>
            <select
              value={formData.contactMethod}
              onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border border-[#E8E5DF] focus:border-[#B08D57] focus:bg-white text-[#171A1D]"
            >
              <option value="Email">Email Communication</option>
              <option value="Phone Call">Telephone Consultation</option>
              <option value="WhatsApp">WhatsApp Business</option>
              <option value="Virtual Meeting (Zoom / Teams)">Virtual Meeting (Zoom / Teams)</option>
              <option value="In-Person (Ikoyi Office)">In-Person (Ikoyi, Lagos Office)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#0B1F33] mb-1.5">
              Area of Legal Practice
            </label>
            <select
              value={formData.practiceArea}
              onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border border-[#E8E5DF] focus:border-[#B08D57] focus:bg-white text-[#171A1D]"
            >
              {PRACTICE_AREAS.map((pa) => (
                <option key={pa.slug} value={pa.slug}>
                  {pa.title}
                </option>
              ))}
              <option value="other-matter">Other Legal Matter</option>
            </select>
          </div>
        </div>

        {/* Preferred Date & Referral Source */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#0B1F33] mb-1.5">
              Preferred Date (Optional)
            </label>
            <input
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border border-[#E8E5DF] focus:border-[#B08D57] focus:bg-white text-[#171A1D]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#0B1F33] mb-1.5">
              How did you hear about us?
            </label>
            <select
              value={formData.referralSource}
              onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border border-[#E8E5DF] focus:border-[#B08D57] focus:bg-white text-[#171A1D]"
            >
              <option value="Professional Referral">Colleague / Professional Referral</option>
              <option value="Client Recommendation">Existing Client Recommendation</option>
              <option value="LinkedIn">LinkedIn / Professional Network</option>
              <option value="Nigerian Bar Association">NBA Directory</option>
              <option value="Web Search">Online Search</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#0B1F33] mb-1.5">
            Summary of Matter <span className="text-[#B08D57]">*</span>
          </label>
          <textarea
            rows={4}
            required
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Please provide an overview of the key facts, parties involved, and the specific assistance or advisory outcome you require..."
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
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={formData.disclaimerAgreed}
              onChange={(e) => setFormData({ ...formData, disclaimerAgreed: e.target.checked })}
              className="mt-1 h-4 w-4 rounded-none border-[#E8E5DF] text-[#B08D57] focus:ring-[#B08D57]"
            />
            <span className="text-xs text-[#6B7280] leading-relaxed">
              I understand that submitting this enquiry does not by itself establish a lawyer-client relationship until conflict checks are concluded and a formal Letter of Engagement is signed.
            </span>
          </label>
          {errors.disclaimerAgreed && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.disclaimerAgreed}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0B1F33] text-[#F7F5F0] hover:bg-[#B08D57] hover:text-[#0B1F33] text-xs font-semibold uppercase tracking-widest transition-all duration-200 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing Enquiry...
              </>
            ) : (
              <>
                Request Consultation
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
