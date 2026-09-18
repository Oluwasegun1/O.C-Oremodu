export interface LawyerProfile {
  name: string;
  initials: string;
  title: string;
  firmName: string;
  callNumberTag: string;
  tagline: string;
  heroStatement: string;
  heroSubtext: string;
  location: string;
  address: {
    suite: string;
    building: string;
    street: string;
    area: string;
    city: string;
    country: string;
    display: string;
  };
  contact: {
    email: string;
    consultationEmail: string;
    phone: string;
    phoneDisplay: string;
    whatsappNumber: string; // international digits for wa.me link
    whatsappDisplay: string;
    officeHours: string;
    responseCommitment: string;
  };
  social: {
    linkedin: string;
    twitter?: string;
  };
  stats: {
    yearsExperience: number;
    yearsExperienceLabel: string;
    mattersHandled: number;
    mattersHandledLabel: string;
    practiceAreasCount: number;
    practiceAreasLabel: string;
    locationBadge: string;
  };
  credentials: {
    degrees: Array<{
      degree: string;
      institution: string;
      year: string;
      distinction?: string;
    }>;
    barAdmission: {
      bar: string;
      year: string;
      status: string;
    };
    memberships: Array<{
      title: string;
      organization: string;
      acronym: string;
      year?: string;
    }>;
  };
  biography: {
    shortLead: string;
    paragraphs: string[];
    timeline: Array<{
      year: string;
      title: string;
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
  name: "O.C Oremodu",
  initials: "FA",
  title: "Barrister & Solicitor of the Supreme Court of Nigeria",
  firmName: "Adebayo Legal & Advisory",
  callNumberTag: "SCN Call to Bar: 2008",
  tagline: "Strategic Legal Counsel for Individuals, Businesses & Institutions",
  heroStatement: "Strategic Legal Counsel for Individuals, Businesses & Institutions.",
  heroSubtext:
    "Providing thoughtful legal advice, strong representation and practical solutions across complex commercial transactions, regulatory landscapes and high-stakes dispute resolution.",
  location: "Lagos, Nigeria",
  address: {
    suite: "Suite 14B, 14th Floor",
    building: "Mulliner Towers",
    street: "39 Kingsway Road",
    area: "Ikoyi",
    city: "Lagos",
    country: "Nigeria",
    display: "Suite 14B, Mulliner Towers, 39 Kingsway Road, Ikoyi, Lagos, Nigeria",
  },
  contact: {
    email: "contact@adebayolegal.ng",
    consultationEmail: "consultations@adebayolegal.ng",
    phone: "+23418884920",
    phoneDisplay: "+234 (1) 888 4920",
    whatsappNumber: "2348030004920",
    whatsappDisplay: "+234 803 000 4920",
    officeHours: "Monday – Friday: 8:30 AM – 5:30 PM (WAT)",
    responseCommitment: "Enquiries are reviewed and acknowledged within 1 business day.",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/funke-adebayo-legal",
    twitter: "https://twitter.com/adebayolegal",
  },
  stats: {
    yearsExperience: 16,
    yearsExperienceLabel: "16+ Years Experience",
    mattersHandled: 450,
    mattersHandledLabel: "450+ Advisory & Dispute Matters",
    practiceAreasCount: 8,
    practiceAreasLabel: "8 Core Practice Areas",
    locationBadge: "Lagos & Federal Scope",
  },
  credentials: {
    degrees: [
      {
        degree: "LL.B (Bachelor of Laws)",
        institution: "University of Lagos (UNILAG)",
        year: "2007",
        distinction: "First Class Honours",
      },
      {
        degree: "BL (Barrister at Law)",
        institution: "Nigerian Law School, Lagos Campus",
        year: "2008",
        distinction: "Call to the Nigerian Bar",
      },
      {
        degree: "LL.M (Corporate & Commercial Law)",
        institution: "London School of Economics and Political Science (LSE)",
        year: "2012",
        distinction: "With Merit",
      },
    ],
    barAdmission: {
      bar: "Supreme Court of Nigeria",
      year: "2008",
      status: "Admitted as Barrister and Solicitor",
    },
    memberships: [
      {
        title: "Active Member",
        organization: "Nigerian Bar Association (NBA)",
        acronym: "NBA",
      },
      {
        title: "Member — Section on Business Law",
        organization: "NBA Section on Business Law (NBA-SBL)",
        acronym: "NBA-SBL",
      },
      {
        title: "Member",
        organization: "Chartered Institute of Arbitrators (UK)",
        acronym: "MCIArb",
      },
      {
        title: "Member",
        organization: "International Bar Association",
        acronym: "IBA",
      },
      {
        title: "Member",
        organization: "Capital Market Solicitors Association",
        acronym: "CMSA",
      },
    ],
  },
  biography: {
    shortLead:
      "O.C Oremodu is a seasoned Nigerian legal practitioner with over 16 years of post-call experience providing strategic counsel to leading corporations, high-net-worth individuals, emerging ventures, and institutional investors across Nigeria and cross-border jurisdictions.",
    paragraphs: [
      "Admitted to the Nigerian Bar in 2008, Funke established her legal foundation within premier commercial litigation and corporate advisory practices in Lagos. Her practice bridges the gap between rigorous legal technicality and commercial pragmatism, guiding clients through Nigeria's evolving regulatory and economic realities.",
      "With specialized postgraduate training from the London School of Economics (LSE) and accreditation as a Member of the Chartered Institute of Arbitrators (MCIArb), she regularly represents parties in commercial dispute resolution, contractual restructuring, real estate transactions, corporate governance advisory, and contentious proceedings before the High Courts, National Industrial Court, and Federal High Court of Nigeria.",
      "Her approach is grounded in the principle that legal counsel must never be theoretical. It must be strategically actionable, risk-conscious, and tailored to preserve business value, maintain personal dignity, and safeguard assets within the Nigerian legal ecosystem.",
    ],
    timeline: [
      {
        year: "2007",
        title: "Academic Distinction in Law",
        description:
          "Graduated with First Class Honours (LL.B) from the University of Lagos, receiving faculty awards in Commercial Law and Equity.",
      },
      {
        year: "2008",
        title: "Call to the Nigerian Bar",
        description:
          "Graduated from the Nigerian Law School and was formally admitted as a Barrister and Solicitor of the Supreme Court of Nigeria.",
      },
      {
        year: "2008 – 2011",
        title: "Early Commercial & Dispute Practice",
        description:
          "Honed foundational trial and appellate litigation skills across corporate disputes, commercial banking recoveries, and land title disputes in Lagos State.",
      },
      {
        year: "2012",
        title: "Postgraduate Specialization at LSE",
        description:
          "Earned Master of Laws (LL.M) in Corporate and Commercial Law at the London School of Economics, focusing on international commercial arbitration and corporate finance governance.",
      },
      {
        year: "2013 – 2018",
        title: "Senior Commercial Advisory & MCIArb Admission",
        description:
          "Admitted to the Chartered Institute of Arbitrators (MCIArb). Led transaction structuring, joint ventures, and regulatory compliance for financial and energy clients.",
      },
      {
        year: "2019 – Present",
        title: "Principal Practice & Independent Counsel",
        description:
          "Delivering dedicated legal counsel to corporate entities, institutional clients, founders, and private families across Lagos, Abuja, and international corridors.",
      },
    ],
    principles: [
      {
        id: "strategic-thinking",
        title: "Strategic Thinking",
        description:
          "We examine the wider commercial, financial, and relational implications of every legal matter rather than considering legal rules in a vacuum.",
      },
      {
        id: "clear-communication",
        title: "Clear Communication",
        description:
          "Legal advice should empower decision-making, not confuse. Complex statutory provisions are translated into plain, actionable counsel.",
      },
      {
        id: "attention-to-detail",
        title: "Meticulous Attention to Detail",
        description:
          "Careful document scrutiny, rigorous evidence analysis, and disciplined statutory interpretation form the cornerstone of every brief.",
      },
      {
        id: "professional-integrity",
        title: "Uncompromising Professional Integrity",
        description:
          "Every client matter is treated with the highest standard of fiduciary duty, strict confidentiality, and adherence to legal ethics.",
      },
    ],
  },
};
