export interface LawyerProfile {
  name: string;
  shortName: string;
  initials: string;
  title: string;
  headline: string;
  credentialsLine: string;
  tagline: string;
  heroStatement: string;
  heroSubtext: string;
  location: string;
  practiceRegions: string[];
  contact: {
    email: string;
    phone: string;
    phoneDisplay: string;
    whatsappNumber: string; // international digits for wa.me link
    whatsappDisplay: string;
    availability: string;
    responseCommitment: string;
  };
  highlights: Array<{
    value: string;
    label: string;
    detail: string;
  }>;
  credentials: {
    degrees: Array<{
      degree: string;
      institution: string;
      year: string;
      status?: string;
    }>;
    barAdmission: {
      bar: string;
      institution: string;
      year: string;
      status: string;
    };
    qualifications: Array<{
      acronym: string;
      title: string;
      description: string;
    }>;
  };
  competencies: string[];
  technicalSkills: string[];
  languages: Array<{
    name: string;
    proficiency: string;
  }>;
  biography: {
    shortLead: string;
    paragraphs: string[];
    timeline: Array<{
      year: string;
      title: string;
      organization: string;
      location: string;
      description: string;
    }>;
    principles: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
}

export const LAWYER_DATA: LawyerProfile = {
  name: "Olubunmi Chioma Oremodu",
  shortName: "Olubunmi C. Oremodu",
  initials: "OCO",
  title: "Legal Practitioner — LL.B, B.L, AICMC",
  headline: "Legal Practitioner  |  General Legal Practice  |  Corporate & Dispute Support",
  credentialsLine: "LL.B (OOU) • B.L (Nigerian Law School, Lagos) • AICMC • LL.M (In View)",
  tagline: "Thoughtful Legal Drafting, Advocacy Support & Practical Counsel",
  heroStatement: "Versatile Legal Counsel Grounded in Research, Drafting & Resolution.",
  heroSubtext:
    "Early-career Nigerian legal practitioner (LL.B, B.L, AICMC) with practical experience across private law firms and Ministries of Justice—delivering meticulous legal drafting, corporate and property documentation, litigation support, ADR mediation, and human-rights advocacy.",
  location: "Lagos, Nigeria",
  practiceRegions: ["Lagos State", "Ogun State", "Osun State", "Akwa Ibom State"],
  contact: {
    email: "olubunmioremodu@gmail.com",
    phone: "+2349029252707",
    phoneDisplay: "+234 902 925 2707",
    whatsappNumber: "2349029252707",
    whatsappDisplay: "+234 902 925 2707",
    availability: "Monday – Friday: 9:00 AM – 5:00 PM (WAT)",
    responseCommitment: "Enquiries are reviewed and acknowledged promptly within 1 business day.",
  },
  highlights: [
    {
      value: "LL.B · B.L · AICMC",
      label: "Bar & ADR Credentials",
      detail: "Nigerian Law School (2024–2025) • LL.M In View",
    },
    {
      value: "5 Legal Roles",
      label: "Private & Public Practice",
      detail: "Law Firms & State Ministries of Justice",
    },
    {
      value: "4 States",
      label: "Multi-Jurisdictional Exposure",
      detail: "Lagos, Ogun, Osun & Akwa Ibom",
    },
    {
      value: "10 Competencies",
      label: "General & Specialist Support",
      detail: "Corporate, Litigation, Property, ADR & Pro Bono",
    },
  ],
  credentials: {
    degrees: [
      {
        degree: "LL.M. (Master of Laws)",
        institution: "Babcock University",
        year: "In View",
        status: "Postgraduate Legal Studies",
      },
      {
        degree: "B.L. (Barrister at Law)",
        institution: "Nigerian Law School, Victoria Island, Lagos",
        year: "2024–2025",
        status: "Qualifying Bar Examination & Call to the Nigerian Bar",
      },
      {
        degree: "AICMC — Professional Qualification",
        institution: "Institute of Chartered Mediators and Conciliators",
        year: "Accredited",
        status: "Alternative Dispute Resolution & Mediation",
      },
      {
        degree: "LL.B. (Bachelor of Laws)",
        institution: "Olabisi Onabanjo University",
        year: "2017–2023",
        status: "Undergraduate Law Degree",
      },
    ],
    barAdmission: {
      bar: "Supreme Court of Nigeria",
      institution: "Nigerian Law School, Victoria Island, Lagos",
      year: "2024–2025",
      status: "Barrister & Solicitor (LL.B, B.L)",
    },
    qualifications: [
      {
        acronym: "B.L.",
        title: "Nigerian Law School, Victoria Island, Lagos",
        description: "Qualifying vocational legal training (2024–2025) for admission to legal practice in Nigeria.",
      },
      {
        acronym: "LL.B.",
        title: "Olabisi Onabanjo University",
        description: "Foundational legal education (2017–2023) spanning statutory interpretation, jurisprudence, and core Nigerian law.",
      },
      {
        acronym: "AICMC",
        title: "Associate, Institute of Chartered Mediators and Conciliators",
        description: "Professional ADR qualification supporting structured mediation and out-of-court settlement work.",
      },
      {
        acronym: "LL.M.",
        title: "Babcock University (In View)",
        description: "Ongoing postgraduate legal studies deepening analytical and specialist capabilities.",
      },
    ],
  },
  competencies: [
    "Legal Research & Analysis",
    "Legal Drafting",
    "Corporate & Commercial Matters",
    "Litigation & Court Processes",
    "Property & Land Matters",
    "Regulatory & Compliance Support",
    "Legal Advisory",
    "ADR & Mediation",
    "Public-Sector / Administrative Law",
    "Human Rights & Pro Bono Practice",
  ],
  technicalSkills: [
    "Microsoft Word",
    "Microsoft Excel",
    "Microsoft PowerPoint",
    "AI & Modern Productivity Tools",
  ],
  languages: [
    { name: "English", proficiency: "Professional Fluency" },
    { name: "Yoruba", proficiency: "Conversational" },
    { name: "Igbo", proficiency: "Conversational" },
  ],
  biography: {
    shortLead:
      "Olubunmi Chioma Oremodu is an early-career legal practitioner (LL.B, B.L, AICMC; LL.M in view) with broad practical experience spanning private chambers, public-sector legal work across two State Ministries of Justice, corporate and property documentation, litigation support, ADR mediation, and human-rights advocacy.",
    paragraphs: [
      "Holding an LL.B from Olabisi Onabanjo University, a B.L from the Nigerian Law School (Victoria Island, Lagos), and an AICMC professional qualification—with an LL.M currently in view at Babcock University—Olubunmi brings a disciplined, versatile legal foundation shaped across both private legal practice and government legal service.",
      "Her practical training began early at Adoydam Solicitors & Consultation Firm in Lagos (2017–2019), where she gained direct exposure to Magistrate and High Court filings, land transactions, document verification, wills and codicils, CAC engagements, and out-of-court settlements. She subsequently expanded her civil litigation, family law, mediation, and legal research capabilities at Adeyemi Aluko & Associates in Ogun State (2022) and the Ministry of Justice, Uyo, Akwa Ibom State (2023).",
      "Following her commercial and maritime litigation internship at Grandslaw Partners in Ikoyi, Lagos (2025), she has served as an NYSC Associate in Corporate & Legal Drafting at the Ministry of Justice, Abere, Osun State (2026)—handling commercial lease transactions, sale of land agreements, tenancy and debt recovery advisory support, compliance documentation, child custody research, and matrimonial mediation.",
      "Driven by a genuine commitment to access to justice, she pairs her growing focus on corporate/commercial law, dispute resolution, compliance, and legal advisory with active pro bono service spanning domestic violence mediation, child custody settlements, prison visitation, environmental-law advocacy, and labour support for NYSC corps members.",
    ],
    timeline: [
      {
        year: "2026",
        title: "NYSC Associate — Corporate & Legal Drafting",
        organization: "Ministry of Justice",
        location: "Abere, Osun State",
        description:
          "Drafting commercial and property documentation (sale of land agreements, commercial leases), supporting tenancy and debt recovery advisory, conducting statutory research on child custody and adoption, assisting senior counsel in court and compliance work, and supporting matrimonial mediation.",
      },
      {
        year: "2025",
        title: "Legal Intern — Commercial & Maritime Litigation",
        organization: "Grandslaw Partners",
        location: "Ikoyi, Lagos",
        description:
          "Assisted senior counsel with court appearances, trial preparation, and drafting and reviewing court documents and pleadings across commercial and maritime litigation matters.",
      },
      {
        year: "2024–2025",
        title: "Barrister at Law (B.L.)",
        organization: "Nigerian Law School",
        location: "Victoria Island, Lagos",
        description:
          "Completed vocational bar training in corporate law practice, civil and criminal litigation, property law practice, and professional ethics.",
      },
      {
        year: "2023",
        title: "Legal Intern — Corporate & Legal Drafting",
        organization: "Ministry of Justice",
        location: "Uyo, Akwa Ibom State",
        description:
          "Developed practical grounding in administrative law and government legal processes, supporting senior counsel with research on public-sector matters, matrimonial causes, and adoption practices.",
      },
      {
        year: "2022",
        title: "Legal Intern — Civil Litigation, Advisory & Research",
        organization: "Adeyemi Aluko & Associates",
        location: "Sango-Ota, Ogun State",
        description:
          "Supported civil litigation, matrimonial and domestic violence matters, community legal enlightenment, supervised mediation on commercial and labour issues, and legal research on Nigerian climate law and energy-sector policies.",
      },
      {
        year: "2017–2023",
        title: "Bachelor of Laws (LL.B.) & Early Practice Exposure",
        organization: "Olabisi Onabanjo University & Adoydam Solicitors",
        location: "Ogun State & Lagos",
        description:
          "Completed LL.B. studies while gaining early practical legal training at Adoydam Solicitors & Consultation Firm (2017–2019) across Magistrate and High Court filings, land matters, CAC compliance, wills, ADR, and statutory research.",
      },
    ],
    principles: [
      {
        id: "meticulous-drafting",
        title: "Meticulous Legal Drafting",
        description:
          "Every contract, pleading, lease, or legal correspondence is prepared with precision, statutory grounding, and clarity of obligation to protect parties against avoidable ambiguity.",
      },
      {
        id: "rigorous-research",
        title: "Disciplined Legal Research",
        description:
          "Legal analysis is anchored in thorough statutory review—from the Child Rights Act and Matrimonial Causes Act to commercial, regulatory, and climate-policy frameworks.",
      },
      {
        id: "constructive-resolution",
        title: "Constructive Dispute Resolution",
        description:
          "Combining courtroom preparation with AICMC mediation training to pursue principled out-of-court settlements where they best preserve rights, dignity, and commercial value.",
      },
      {
        id: "service-and-integrity",
        title: "Integrity & Access to Justice",
        description:
          "Guided by professional ethics, strict confidentiality, and an enduring commitment to pro bono advocacy for women, children, workers, and underserved communities.",
      },
    ],
  },
};
