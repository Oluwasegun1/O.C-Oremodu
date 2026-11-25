export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQS: FAQItem[] = [
  {
    id: "how-to-connect",
    question: "How can I reach Olubunmi Chioma Oremodu for legal enquiries or professional opportunities?",
    answer:
      "You can submit an enquiry through the contact form on this website, send an email directly to olubunmioremodu@gmail.com, or reach out by telephone or WhatsApp on +234 902 925 2707. Messages are reviewed and acknowledged promptly within one business day.",
    category: "Contact",
  },
  {
    id: "areas-of-practice",
    question: "What areas of legal practice and support does she cover?",
    answer:
      "Her practical experience spans General Legal Practice, Corporate & Commercial documentation, Litigation & Court Processes (civil, commercial, maritime, and criminal support), Property & Land Matters (sale agreements, commercial leases, tenancy, and document verification), ADR & Mediation (AICMC), Family & Estate matters, Public-Sector / Administrative Law, Legal Research, and Human Rights / Pro Bono work.",
    category: "Practice",
  },
  {
    id: "qualifications-credentials",
    question: "What are her academic and professional qualifications?",
    answer:
      "She holds an LL.B from Olabisi Onabanjo University (2017–2023), a B.L from the Nigerian Law School, Victoria Island, Lagos (2024–2025), and the AICMC professional qualification in mediation and conciliation. She is also currently pursuing an LL.M at Babcock University (in view).",
    category: "Credentials",
  },
  {
    id: "remote-and-locations",
    question: "Is she available for remote consultations or matters across different Nigerian states?",
    answer:
      "Yes. Based in Lagos, Nigeria, she has practical legal experience spanning Lagos, Ogun, Osun, and Akwa Ibom States across private law firms and State Ministries of Justice, and is available for virtual meetings, remote legal research and drafting support, and in-person engagements by arrangement.",
    category: "Availability",
  },
  {
    id: "adr-mediation-support",
    question: "What does her ADR and mediation experience involve?",
    answer:
      "As an accredited AICMC practitioner, she has supported mediation and out-of-court settlements across matrimonial child custody and child support matters, domestic violence and human-rights cases, commercial transactions, and workplace/labour disputes—focusing on practical, constructive resolutions.",
    category: "ADR & Mediation",
  },
  {
    id: "confidentiality",
    question: "Is information shared through an initial enquiry kept confidential?",
    answer:
      "Yes. All communications and preliminary information shared via email, telephone, WhatsApp, or the website enquiry form are handled with strict professional discretion in accordance with Nigerian legal ethics and applicable data protection standards. Please avoid sharing highly sensitive documents until formal engagement terms are confirmed.",
    category: "Confidentiality",
  },
];
