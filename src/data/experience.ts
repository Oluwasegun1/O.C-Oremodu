export interface WorkExperienceRole {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  sector: "Public Sector" | "Private Practice";
  focusTags: string[];
  summary: string;
  responsibilities: string[];
}

export interface ProBonoInitiative {
  id: string;
  area: string;
  title: string;
  location?: string;
  description: string;
}

export const WORK_EXPERIENCE: WorkExperienceRole[] = [
  {
    id: "moj-osun-2026",
    role: "NYSC Associate — Corporate & Legal Drafting",
    organization: "Ministry of Justice",
    location: "Abere, Osun State",
    period: "2026",
    sector: "Public Sector",
    focusTags: ["Commercial & Property Drafting", "Public-Sector Advisory", "Matrimonial Mediation", "Compliance"],
    summary:
      "Supporting corporate documentation, property agreements, public-sector advisory work, statutory research, court appearances, and family mediation within the Osun State Ministry of Justice.",
    responsibilities: [
      "Worked on commercial and property documentation, including sale of land agreements, commercial lease transactions, and other contractual documentation.",
      "Supported advisory work on sale of land, tenancy, and debt recovery matters within a public-sector legal environment.",
      "Conducted legal research on child custody and adoption, reviewing the Child Rights Act and Matrimonial Causes Act to support legal analysis and a research paper.",
      "Assisted senior counsel with case preparation, legal correspondence, court appearances, completion of legal documentation, and compliance-related tasks.",
      "Supported mediation involving child custody and child support in matrimonial matters.",
    ],
  },
  {
    id: "grandslaw-partners-2025",
    role: "Legal Intern",
    organization: "Grandslaw Partners",
    location: "Ikoyi, Lagos",
    period: "2025",
    sector: "Private Practice",
    focusTags: ["Commercial Litigation", "Maritime Litigation", "Pleadings & Filings", "Trial Preparation"],
    summary:
      "Supported senior counsel within a Lagos commercial and maritime litigation practice through pleadings drafting, case preparation, court filings, and courtroom attendance.",
    responsibilities: [
      "Assisted senior counsel with court appearances, trial preparation, and litigation-related case work.",
      "Drafted and reviewed court documents and pleadings in matters arising within the firm's commercial and maritime litigation practice.",
      "Supported preparation and filing of matters through legal documentation, case preparation, and court processes.",
    ],
  },
  {
    id: "moj-akwa-ibom-2023",
    role: "Legal Intern — Corporate & Legal Drafting",
    organization: "Ministry of Justice",
    location: "Uyo, Akwa Ibom State",
    period: "2023",
    sector: "Public Sector",
    focusTags: ["Administrative Law", "Government Processes", "Matrimonial & Adoption Research"],
    summary:
      "Gained structured exposure to administrative law and state legal administration while assisting senior counsel with public-sector statutory research and analysis.",
    responsibilities: [
      "Developed practical exposure to government legal processes and administrative law.",
      "Assisted senior counsel with legal research concerning government involvement in matrimonial causes and government adoption practices.",
      "Supported research and legal analysis on public-sector legal matters under supervision.",
    ],
  },
  {
    id: "adeyemi-aluko-2022",
    role: "Legal Intern",
    organization: "Adeyemi Aluko & Associates",
    location: "Sango-Ota, Ogun State",
    period: "2022",
    sector: "Private Practice",
    focusTags: ["Civil Litigation", "Family & Domestic Violence", "Mediation Support", "Climate & Energy Research"],
    summary:
      "Supported civil litigation, family law matters, supervised mediation, community legal education, and policy-focused legal research on climate and energy law.",
    responsibilities: [
      "Supported associates in court proceedings and litigation practice on civil matters.",
      "Worked on civil matters involving divorce, domestic violence in marriage, and child custody, including legal research and matter preparation.",
      "Participated in public legal education and community enlightenment on criminal and civil law.",
      "Provided research and supervised advisory/mediation support on commercial transactions, labour abuse, and fraud-related matters.",
      "Conducted legal research on climate law and energy-sector policies in Nigeria.",
    ],
  },
  {
    id: "adoydam-solicitors-2017",
    role: "Legal Intern",
    organization: "Adoydam Solicitors & Consultation Firm",
    location: "Lagos",
    period: "2017–2019",
    sector: "Private Practice",
    focusTags: ["Magistrate & High Courts", "Land & Property", "CAC Compliance", "Wills & ADR"],
    summary:
      "Built foundational hands-on legal experience across civil and criminal litigation, land transactions, client interviews, regulatory filings, and out-of-court dispute resolution.",
    responsibilities: [
      "Gained early practical exposure to civil and criminal litigation, land transactions, land grabbing, document verification, fraud, and manslaughter matters.",
      "Supported court proceedings and filings across Magistrate and High Courts.",
      "Participated in client interviews and matter preparation involving wills and codicils, divorce, and settlement.",
      "Supported ADR and out-of-court settlement work.",
      "Assisted with legal and regulatory compliance, including CAC engagements, and conducted research across contract, taxation, and criminal litigation.",
    ],
  },
];

export const PRO_BONO_EXPERIENCE: ProBonoInitiative[] = [
  {
    id: "pb-domestic-violence",
    area: "Human Rights & ADR",
    title: "Domestic Violence ADR & Rights Protection",
    description:
      "Supported ADR and human-rights matters involving domestic violence against women and children, prioritizing safety, legal awareness, and dignified redress.",
  },
  {
    id: "pb-child-custody",
    area: "Family & Child Welfare",
    title: "Pro Bono Child Support & Custody Settlements",
    description:
      "Participated in pro bono out-of-court settlement work on child support and child custody, helping families reach child-centered resolutions without protracted conflict.",
  },
  {
    id: "pb-human-rights-enlightenment",
    area: "Public Legal Education",
    title: "Human-Rights Advocacy & Community Enlightenment",
    description:
      "Supported human-rights advocacy and public-enlightenment initiatives aimed at improving everyday citizen awareness of civil and criminal legal protections.",
  },
  {
    id: "pb-prison-visitation",
    area: "Access to Justice",
    title: "Prison Visitation & Legal-Aid Initiatives",
    description:
      "Participated in prison visitation and legal-aid initiatives supporting vulnerable inmates and expanding practical access to legal guidance.",
  },
  {
    id: "pb-environmental",
    area: "Environmental Law",
    title: "Environmental-Law Advocacy & Public Awareness",
    location: "Osogbo, Osun State",
    description:
      "Supported environmental-law advocacy and public-awareness activities in Osogbo, Osun State, promoting legal literacy around environmental stewardship.",
  },
  {
    id: "pb-nysc-labour",
    area: "Labour & Youth Advocacy",
    title: "Pro Bono Labour Advocacy for NYSC Corps Members",
    location: "Osun State",
    description:
      "Provided pro bono advisory and advocacy support concerning labour issues affecting NYSC corps members in Osun State.",
  },
];

export const LEGAL_PROCESS_STEPS = [
  {
    step: "01",
    title: "Initial Enquiry & Listening",
    subtitle: "Understanding the Facts",
    description:
      "Every engagement begins with attentive, confidential review of the factual background, relevant correspondence, and the practical outcome you need.",
  },
  {
    step: "02",
    title: "Statutory Research & Verification",
    subtitle: "Evaluating the Legal Position",
    description:
      "Documents, statutory provisions, and applicable Nigerian authorities are carefully verified to identify rights, compliance gaps, and risk exposure.",
  },
  {
    step: "03",
    title: "Drafting & Resolution Strategy",
    subtitle: "Choosing the Right Path",
    description:
      "Whether preparing clear contractual instruments, advising on regulatory compliance, mediating an out-of-court settlement, or preparing court filings, the approach is tailored to the matter.",
  },
  {
    step: "04",
    title: "Structured Execution & Follow-Through",
    subtitle: "Clear Communication Throughout",
    description:
      "Work is carried out with disciplined attention to deadlines, formal documentation, and timely updates at every milestone.",
  },
];
