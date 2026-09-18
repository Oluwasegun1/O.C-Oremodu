export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQS: FAQItem[] = [
  {
    id: "booking-process",
    question: "How do I book a consultation?",
    answer:
      "You can request an initial consultation by completing the Consultation Request Form on this website, calling our Ikoyi office directly, or messaging our verified business WhatsApp desk. Once your request is received, our practice coordinator will acknowledge it within one business day, conduct a routine conflict-of-interest clearance, and confirm an appointment time.",
    category: "Consultation",
  },
  {
    id: "types-of-matters",
    question: "What types of legal matters do you handle?",
    answer:
      "Our practice focuses on Corporate & Commercial Law, Dispute Resolution & High Court Litigation, Arbitration, Real Estate & Property Transactions, Employment & Labour Relations, Intellectual Property, Family & Estate Planning, and Regulatory Compliance under Nigerian law. For specialized multi-disciplinary matters requiring external technical experts (such as maritime survey or forensic accounting), we collaborate with trusted professional partners.",
    category: "Practice",
  },
  {
    id: "remote-consultations",
    question: "Do you provide remote consultations for clients outside Lagos or overseas?",
    answer:
      "Yes. A significant portion of our advisory work is conducted for international clients, members of the Nigerian diaspora, and corporate executives across different states. We routinely conduct secure consultations via Zoom, Microsoft Teams, Google Meet, or direct telephone conferences.",
    category: "Consultation",
  },
  {
    id: "geographic-scope",
    question: "Do you handle legal matters outside Lagos?",
    answer:
      "Yes. As a Barrister & Solicitor of the Supreme Court of Nigeria, O.C Oremodu has right of audience across all superior courts of record throughout the Federal Republic of Nigeria. While our primary chambers are based in Ikoyi, Lagos, we actively handle matters in Abuja (FCT), Rivers State (Port Harcourt), Ogun, Oyo, and coordinate nationwide corporate transactions and appellate litigation.",
    category: "Jurisdiction",
  },
  {
    id: "preparation-documents",
    question: "What documents should I prepare for my consultation?",
    answer:
      "To maximize the value of your initial session, we recommend preparing: (1) A brief chronological summary of events, (2) Key agreements, contracts, or draft documents in dispute, (3) Formal correspondence (emails, demand letters, or official notices), and (4) Valid government-issued identification (National ID, International Passport, or Voter's Card) for statutory KYC compliance.",
    category: "Preparation",
  },
  {
    id: "fee-structure",
    question: "How are legal professional fees determined?",
    answer:
      "Legal fees are structured in accordance with the Legal Practitioners Remuneration Order and the Rules of Professional Conduct in Nigeria. Fees are transparently discussed and agreed in advance based on the complexity, urgency, financial exposure, and scope of the brief. Engagements may be structured as fixed retainers, staged milestone fees, or hourly advisory rates. We do not commence chargeable work without a signed Letter of Engagement.",
    category: "Billing",
  },
  {
    id: "confidentiality",
    question: "Is information shared during a consultation confidential?",
    answer:
      "Yes. All communications and documentation shared during a preliminary consultation are treated with the highest standard of professional legal privilege and professional secrecy under the Rules of Professional Conduct for Legal Practitioners in Nigeria and the Evidence Act 2011. Even where formal representation is not subsequently commenced, your disclosed information remains strictly protected.",
    category: "Ethics",
  },
];
