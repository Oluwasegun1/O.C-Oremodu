export interface PracticeArea {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  overview: string;
  keyServices: string[];
  statutoryFramework: string[];
  practicalExperienceHighlights: string[];
  iconName: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "corporate-commercial",
    slug: "corporate-commercial-law",
    number: "01",
    title: "Corporate & Commercial Practice",
    shortDescription:
      "Commercial agreements, commercial lease documentation, contractual drafting, CAC compliance support, and business legal advisory.",
    overview:
      "Sound commercial relationships depend on clear, enforceable documentation and disciplined regulatory compliance. Drawing on practical experience across private law firms and the Corporate & Legal Drafting unit of the Ministry of Justice, Olubunmi supports commercial transactions, contractual drafting, CAC engagements, and risk-conscious legal advisory for individuals, businesses, and institutions.",
    keyServices: [
      "Drafting and review of commercial contracts, service agreements, and contractual documentation",
      "Commercial lease transactions and business premises documentation",
      "Corporate Affairs Commission (CAC) compliance engagements and filings support",
      "Legal correspondence, transaction completion documentation, and contract research",
      "Supervised advisory and mediation support on commercial disputes and debt recovery",
    ],
    statutoryFramework: [
      "Companies and Allied Matters Act (CAMA) 2020",
      "Corporate Affairs Commission (CAC) Regulations",
      "Nigerian Law of Contract Principles",
      "Applicable State Commercial & Tenancy Laws",
    ],
    practicalExperienceHighlights: [
      "Worked on commercial lease transactions and contractual documentation at the Ministry of Justice, Abere, Osun State (2026).",
      "Provided research and supervised advisory/mediation support on commercial transactions at Adeyemi Aluko & Associates (2022).",
      "Assisted with CAC engagements and contract and taxation research at Adoydam Solicitors & Consultation Firm, Lagos (2017–2019).",
    ],
    iconName: "Briefcase",
  },
  {
    id: "litigation-court-processes",
    slug: "litigation-court-processes",
    number: "02",
    title: "Litigation & Court Processes",
    shortDescription:
      "Civil, commercial, maritime, and criminal litigation support, pleadings drafting, trial preparation, and Magistrate and High Court processes.",
    overview:
      "Effective litigation requires meticulous case preparation, procedurally accurate court filings, and thorough documentary analysis. Through hands-on roles in private chambers in Lagos and Ogun State as well as State Ministry of Justice service, Olubunmi has supported senior counsel with drafting pleadings, reviewing court processes, preparing trial briefs, and attending court proceedings.",
    keyServices: [
      "Drafting and reviewing court documents, pleadings, and litigation correspondence",
      "Case preparation, evidence collation, and trial support for senior counsel",
      "Preparation and filing of court processes across Magistrate and High Courts",
      "Commercial and maritime litigation support and courtroom appearance assistance",
      "Civil and criminal litigation research, including fraud and civil claims preparation",
    ],
    statutoryFramework: [
      "Constitution of the Federal Republic of Nigeria 1999 (as amended)",
      "High Court Civil Procedure Rules (Lagos, Ogun & Osun States)",
      "Evidence Act 2011",
      "Administration of Criminal Justice Legislation",
    ],
    practicalExperienceHighlights: [
      "Drafted and reviewed pleadings and assisted senior counsel in commercial and maritime litigation at Grandslaw Partners, Ikoyi, Lagos (2025).",
      "Assisted senior counsel with case preparation and court appearances at the Ministry of Justice, Abere, Osun State (2026).",
      "Supported court proceedings and filings across Magistrate and High Courts at Adoydam Solicitors (2017–2019) and Adeyemi Aluko & Associates (2022).",
    ],
    iconName: "Scale",
  },
  {
    id: "property-land-matters",
    slug: "property-land-matters",
    number: "03",
    title: "Property & Land Matters",
    shortDescription:
      "Sale of land agreements, commercial leases, document verification, tenancy advisory, and land dispute support.",
    overview:
      "Property transactions in Nigeria demand careful verification and watertight conveyance documentation to safeguard ownership interests. Olubunmi brings practical exposure to land agreements, commercial leases, tenancy and debt recovery advisory, document verification, and land grabbing disputes developed across Lagos and Osun State.",
    keyServices: [
      "Drafting and reviewing sale of land agreements and commercial lease documentation",
      "Land document verification and title-related due diligence support",
      "Advisory support on sale of land, tenancy obligations, and debt recovery matters",
      "Litigation and settlement support in land transaction and land grabbing matters",
      "Preparation of formal property correspondence and completion documentation",
    ],
    statutoryFramework: [
      "Land Use Act 1978",
      "Applicable State Land Registration & Property Laws",
      "State Tenancy Laws & Recovery of Premises Frameworks",
      "Property and Conveyancing Law",
    ],
    practicalExperienceHighlights: [
      "Drafted sale of land agreements and commercial lease transactions and supported tenancy and debt recovery advisory at the Ministry of Justice, Osun State (2026).",
      "Gained early practical exposure to land transactions, land grabbing matters, and document verification at Adoydam Solicitors, Lagos (2017–2019).",
    ],
    iconName: "Building2",
  },
  {
    id: "adr-mediation",
    slug: "adr-mediation",
    number: "04",
    title: "ADR & Mediation",
    shortDescription:
      "AICMC-accredited alternative dispute resolution, structured mediation support, and principled out-of-court settlements.",
    overview:
      "Not every legal dispute belongs in prolonged courtroom litigation. Accredited as an Associate of the Institute of Chartered Mediators and Conciliators (AICMC), Olubunmi applies structured mediation principles and calm communication to support out-of-court settlements across family, commercial, labour, and human-rights matters.",
    keyServices: [
      "Structured mediation support and facilitation of out-of-court settlements",
      "Matrimonial mediation covering child custody and child support arrangements",
      "Supervised mediation support in commercial, labour, and workplace matters",
      "ADR intervention and human-rights support in domestic violence cases",
      "Drafting clear settlement terms and post-mediation documentation",
    ],
    statutoryFramework: [
      "Arbitration and Mediation Act 2023",
      "Institute of Chartered Mediators and Conciliators (ICMC) Standards",
      "Multi-Door Courthouse Mediation Frameworks",
      "Matrimonial Causes Act & Child Rights Act",
    ],
    practicalExperienceHighlights: [
      "Holds the AICMC professional qualification in mediation and conciliation.",
      "Supported mediation involving child custody and child support at the Ministry of Justice, Abere, Osun State (2026).",
      "Participated in pro bono out-of-court settlements on child support, custody, and domestic violence matters, plus ADR work at Adoydam Solicitors and Adeyemi Aluko & Associates.",
    ],
    iconName: "Gavel",
  },
  {
    id: "family-matrimonial-estates",
    slug: "family-matrimonial-estates",
    number: "05",
    title: "Family, Matrimonial & Estate Matters",
    shortDescription:
      "Child custody and adoption research, divorce and settlement preparation, domestic violence matters, and wills and codicils.",
    overview:
      "Family and private legal matters require discretion, empathy, and rigorous statutory grounding. Olubunmi's background spans statutory research on child custody and adoption, preparation for matrimonial proceedings, wills and codicils, and compassionate mediation for families and vulnerable women and children.",
    keyServices: [
      "Legal research and analysis on child custody and adoption under Nigerian statutes",
      "Matter preparation and settlement support for divorce and matrimonial causes",
      "Drafting support and client interview participation for wills and codicils",
      "Legal and ADR support in matters involving domestic violence against women and children",
      "Out-of-court negotiation of child support and child welfare arrangements",
    ],
    statutoryFramework: [
      "Child Rights Act",
      "Matrimonial Causes Act",
      "Violence Against Persons (Prohibition) Frameworks",
      "Applicable State Wills Laws",
    ],
    practicalExperienceHighlights: [
      "Authored a legal research paper on Child Custody and Adoption in Nigeria reviewing the Child Rights Act and Matrimonial Causes Act (2026).",
      "Researched government involvement in matrimonial causes and adoption practices at the Ministry of Justice, Uyo, Akwa Ibom State (2023).",
      "Worked on divorce, domestic violence, child custody, and wills and codicils across Adeyemi Aluko & Associates (2022) and Adoydam Solicitors (2017–2019).",
    ],
    iconName: "HeartHandshake",
  },
  {
    id: "regulatory-compliance-advisory",
    slug: "regulatory-compliance-advisory",
    number: "06",
    title: "Regulatory, Compliance & Legal Advisory",
    shortDescription:
      "Compliance documentation, CAC engagements, workplace and labour advisory support, debt recovery, and practical legal guidance.",
    overview:
      "Navigating statutory and regulatory obligations proactively prevents costly disputes. Olubunmi assists senior counsel and organizations with compliance tasks, CAC engagements, tenancy and debt recovery advisory, and labour-related guidance—translating statutory requirements into clear, actionable steps.",
    keyServices: [
      "Compliance-related legal documentation and statutory filing support",
      "Corporate Affairs Commission (CAC) compliance engagements",
      "Advisory support on debt recovery, tenancy, and contractual compliance",
      "Supervised research and advisory support on labour abuse and NYSC corps member labour issues",
      "Statutory research across contract law, taxation, and regulatory frameworks",
    ],
    statutoryFramework: [
      "Companies and Allied Matters Act (CAMA) 2020",
      "Nigerian Labour Act & Workplace Protections",
      "Nigerian Taxation & Statutory Compliance Frameworks",
      "Applicable State Regulatory Guidelines",
    ],
    practicalExperienceHighlights: [
      "Supported compliance-related tasks and advisory work on tenancy and debt recovery at the Ministry of Justice, Osun State (2026).",
      "Provided pro bono advisory and advocacy support concerning labour issues affecting NYSC corps members in Osun State.",
      "Assisted with CAC engagements and research in contract and taxation at Adoydam Solicitors (2017–2019).",
    ],
    iconName: "FileCheck2",
  },
  {
    id: "public-sector-administrative-law",
    slug: "public-sector-administrative-law",
    number: "07",
    title: "Public-Sector & Administrative Law",
    shortDescription:
      "Government legal processes, administrative law analysis, Ministry of Justice drafting, and institutional correspondence.",
    overview:
      "Having served across two Nigerian State Ministries of Justice—in Uyo, Akwa Ibom State and Abere, Osun State—Olubunmi brings firsthand understanding of how public-sector legal departments operate, review institutional agreements, manage formal correspondence, and apply administrative law principles.",
    keyServices: [
      "Public-sector legal research and statutory analysis under senior counsel supervision",
      "Drafting and completion of official legal documentation and institutional correspondence",
      "Administrative law support and review of government legal processes",
      "Research on state involvement in matrimonial causes and adoption administration",
      "Public-sector advisory support on property, tenancy, and compliance matters",
    ],
    statutoryFramework: [
      "Constitution of the Federal Republic of Nigeria 1999 (as amended)",
      "Administrative Law & Public Service Legal Principles",
      "State Ministry of Justice Practice Guidelines",
      "Applicable State Statutory Instruments",
    ],
    practicalExperienceHighlights: [
      "NYSC Associate in Corporate & Legal Drafting at the Ministry of Justice, Abere, Osun State (2026).",
      "Legal Intern in Corporate & Legal Drafting at the Ministry of Justice, Uyo, Akwa Ibom State (2023).",
    ],
    iconName: "Landmark",
  },
  {
    id: "legal-research-human-rights",
    slug: "legal-research-human-rights",
    number: "08",
    title: "Legal Research, Human Rights & Pro Bono",
    shortDescription:
      "In-depth statutory and policy research (climate law, energy policy, child rights), human-rights advocacy, environmental awareness, and legal aid.",
    overview:
      "Deep legal research and public-interest advocacy lie at the heart of Olubunmi's legal identity. From authoring research papers on Nigerian climate law, energy-sector policy, and child rights to participating in prison visitation, legal-aid outreach, and environmental advocacy in Osogbo, she combines academic rigour with social impact.",
    keyServices: [
      "Structured legal research papers and statutory/policy analysis",
      "Climate law and Nigerian energy-sector policy research",
      "Human-rights advocacy and community legal enlightenment on civil and criminal law",
      "Prison visitation and legal-aid outreach support",
      "Environmental-law advocacy and public-awareness campaigns",
    ],
    statutoryFramework: [
      "Fundamental Rights (Chapter IV, 1999 Constitution)",
      "Child Rights Act & International Human Rights Instruments",
      "Nigerian Climate Change & Energy Policy Frameworks",
      "Legal Aid & Access to Justice Principles",
    ],
    practicalExperienceHighlights: [
      "Authored research papers on Climate Law & Energy-Sector Policy in Nigeria and Child Custody & Adoption in Nigeria.",
      "Supported environmental-law advocacy in Osogbo, Osun State, prison visitation legal-aid initiatives, and public legal enlightenment in Ogun State.",
    ],
    iconName: "ShieldCheck",
  },
];
