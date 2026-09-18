export interface PracticeArea {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  overview: string;
  keyServices: string[];
  statutoryFramework: string[];
  typicalMatters: string[];
  iconName: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "corporate-commercial",
    slug: "corporate-commercial-law",
    number: "01",
    title: "Corporate & Commercial Law",
    shortDescription:
      "Business structuring, commercial agreements, corporate governance, joint ventures, and general corporate advisory.",
    overview:
      "We advise companies, boards of directors, shareholders, and founders throughout the complete enterprise lifecycle. From pre-incorporation structuring under the Companies and Allied Matters Act (CAMA 2020) to intricate commercial agreements, shareholder negotiations, and board compliance, our counsel helps organizations build resilient foundations and manage commercial risk.",
    keyServices: [
      "Company incorporation, corporate structuring & entity reclassification",
      "Drafting & negotiation of commercial agreements, MOUs, SLAs, and partnership contracts",
      "Shareholders' agreements, subscription contracts & founders' agreements",
      "Corporate governance audits, board secretarial advisory & director fiduciary duties",
      "Mergers, acquisitions, restructuring & corporate due diligence",
    ],
    statutoryFramework: [
      "Companies and Allied Matters Act (CAMA) 2020",
      "Corporate Affairs Commission (CAC) Regulations",
      "Federal Competition and Consumer Protection Act (FCCPA) 2018",
      "Nigerian Investment Promotion Commission (NIPC) Act",
    ],
    typicalMatters: [
      "Structuring cross-border joint ventures between foreign investors and Nigerian indigenous entities.",
      "Drafting multi-tier shareholder agreements with pre-emption and drag-along protections.",
      "Conducting comprehensive legal due diligence for target entity acquisition.",
    ],
    iconName: "Briefcase",
  },
  {
    id: "dispute-resolution",
    slug: "dispute-resolution-litigation",
    number: "02",
    title: "Dispute Resolution & Litigation",
    shortDescription:
      "Representation and strategic advocacy in civil and commercial disputes before Nigerian superior courts of record.",
    overview:
      "Commercial disputes require calm judgment, rigorous procedural precision, and an honest appraisal of risk versus reward. We represent clients before the High Courts of Lagos State and other states, the Federal High Court, and appellate courts in contentious commercial disputes, debt recovery, contractual breaches, shareholder conflicts, and injunctive relief applications.",
    keyServices: [
      "Commercial litigation & contract enforcement before Superior Courts of Record",
      "Urgent interlocutory applications, Mareva injunctions & asset preservation orders",
      "Banking & financial recovery litigation and insolvency proceedings",
      "Shareholder disputes, minority protection & derivative actions",
      "Appellate advocacy before the Court of Appeal and Supreme Court of Nigeria",
    ],
    statutoryFramework: [
      "Constitution of the Federal Republic of Nigeria 1999 (as amended)",
      "High Court of Lagos State (Civil Procedure) Rules",
      "Federal High Court (Civil Procedure) Rules",
      "Sheriffs and Civil Process Act",
    ],
    typicalMatters: [
      "Defending high-value contractual breach claims arising from maritime and supply-chain defaults.",
      "Securing emergency freezing orders to preserve disputed commercial assets pending substantive trial.",
      "Representing minority shareholders in petitions alleging unfairly prejudicial conduct under CAMA.",
    ],
    iconName: "Scale",
  },
  {
    id: "arbitration",
    slug: "arbitration-adr",
    number: "03",
    title: "Arbitration & Alternative Dispute Resolution",
    shortDescription:
      "Strategic guidance and representation in domestic and international commercial arbitration and formal mediation.",
    overview:
      "Arbitration provides a confidential, specialized, and efficient alternative to public courtroom litigation. As an accredited Member of the Chartered Institute of Arbitrators (MCIArb), we assist clients in drafting effective arbitration clauses, navigating domestic arbitration under Nigeria's Arbitration and Mediation Act 2023, and enforcing arbitral awards.",
    keyServices: [
      "Arbitration agreement drafting, multi-tiered dispute clauses & forum selection",
      "Counsel representation in domestic and institutional arbitrations (LCA, ICC, LCIA)",
      "Applications for emergency arbitrator relief and interim preservation measures",
      "Recognition, registration and enforcement of arbitral awards in Nigeria",
      "Court proceedings relating to arbitrator appointment and challenging flawed awards",
    ],
    statutoryFramework: [
      "Arbitration and Mediation Act 2023 (AMA 2023)",
      "New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards",
      "Lagos Court of Arbitration (LCA) Arbitration Rules",
      "UNCITRAL Model Law on International Commercial Arbitration",
    ],
    typicalMatters: [
      "Representing an engineering consortium in multi-million naira construction contract arbitration.",
      "Securing high-court recognition and enforcement of an international arbitral award against a debtor.",
      "Designing bespoke dispute escalation frameworks for public-private partnership infrastructure projects.",
    ],
    iconName: "Gavel",
  },
  {
    id: "real-estate",
    slug: "real-estate-property-law",
    number: "04",
    title: "Real Estate & Property Law",
    shortDescription:
      "Property transactions, title verification, commercial leases, development structuring, and property dispute resolution.",
    overview:
      "Nigerian real estate transactions are notoriously vulnerable to title defects, regulatory delays, and fraudulent conveyances. We provide rigorous title investigation at the Land Registry, draft watertight Deeds of Assignment, structure joint-development schemes, and shepherd Governor's Consent and Certificate of Occupancy (C of O) regularizations.",
    keyServices: [
      "Comprehensive title search & legal due diligence at State Lands Registries",
      "Drafting Deeds of Assignment, Leases, Mortgages & Development Agreements",
      "Processing Governor's Consent, C of O issuance & title perfection in Lagos & Abuja",
      "Structuring joint venture agreements between landowners and property developers",
      "Litigation and mediation for property ownership disputes, trespass & tenancy issues",
    ],
    statutoryFramework: [
      "Land Use Act 1978",
      "Lagos State Land Registration Law 2015",
      "Tenancy Law of Lagos State 2011",
      "Urban and Regional Planning and Development Law",
    ],
    typicalMatters: [
      "Navigating title regularization and Governor's Consent on a prime commercial parcel in Ikoyi, Lagos.",
      "Structuring a multi-unit residential development agreement protecting funding partners from cost-overruns.",
      "Resolving family land succession disputes and securing authentic registered conveyance for institutional buyers.",
    ],
    iconName: "Building2",
  },
  {
    id: "employment-labour",
    slug: "employment-labour-law",
    number: "05",
    title: "Employment & Labour Law",
    shortDescription:
      "Executive employment contracts, workplace policies, statutory compliance, redundancy, and National Industrial Court disputes.",
    overview:
      "Employment relations in Nigeria operate under stringent statutory standards interpreted by the National Industrial Court of Nigeria (NICN), particularly regarding international best labour practices under Section 254C of the Constitution. We advise employers on compliant terminations, executive severance, workplace policies, and trade union relations.",
    keyServices: [
      "Drafting executive employment contracts, restrictive covenants & non-compete agreements",
      "Formulating comprehensive employee handbooks, disciplinary protocols & code of conduct",
      "Structuring lawful redundancy processes, restructuring & exit compensation packages",
      "Pension Reform Act, NHF, ITF, NSITF compliance advisory and health & safety audits",
      "Defense and representation before the National Industrial Court of Nigeria (NICN)",
    ],
    statutoryFramework: [
      "Labour Act (Cap L1, LFN 2004)",
      "National Industrial Court Act 2006 & NICN Civil Procedure Rules 2017",
      "Pension Reform Act 2014 & Employees' Compensation Act 2010",
      "International Labour Organization (ILO) Conventions applicable in Nigeria",
    ],
    typicalMatters: [
      "Guiding a financial services institution through lawful organizational restructuring and severance package design.",
      "Enforcing post-termination non-solicitation clauses against former senior executive team members.",
      "Defending an employer against unfair dismissal and harassment allegations before the NICN Lagos Division.",
    ],
    iconName: "Users2",
  },
  {
    id: "intellectual-property",
    slug: "intellectual-property",
    number: "06",
    title: "Intellectual Property Law",
    shortDescription:
      "Trademark registration, copyright protection, IP licensing, trade secret safeguards, and anti-counterfeiting advisory.",
    overview:
      "Intangible assets often represent the core valuation of contemporary businesses. We assist creators, technology startups, FMCG brands, and corporate entities in registering and defending their trademarks, patents, and designs before the Nigerian Trademarks, Patents and Designs Registry, as well as negotiating robust commercial licensing arrangements.",
    keyServices: [
      "Trademark search, application, opposition and registration in Nigeria",
      "Copyright ownership structuring, creator assignment agreements & licensing contracts",
      "Software licensing, technology transfer agreements & NOTAP compliance",
      "Trade secret protection policies, non-disclosure agreements (NDAs) & IP audits",
      "Cease-and-desist actions, brand protection & trademark infringement litigation",
    ],
    statutoryFramework: [
      "Trade Marks Act (Cap T13, LFN 2004)",
      "Copyright Act 2022",
      "Patents and Designs Act (Cap P2, LFN 2004)",
      "National Office for Technology Acquisition and Promotion (NOTAP) Act",
    ],
    typicalMatters: [
      "Filing trademark opposition proceedings before the Registrar to block confusingly similar brand registration.",
      "Structuring software licensing and royalty distribution agreements for a pan-African fintech company.",
      "Securing NOTAP approval and registration for foreign technology management agreements.",
    ],
    iconName: "ShieldCheck",
  },
  {
    id: "family-private-client",
    slug: "family-private-client",
    number: "07",
    title: "Family & Private Client",
    shortDescription:
      "Estate planning, wills, probate administration, family trust structures, and matrimonial legal counsel.",
    overview:
      "Handling personal legal affairs demands legal discretion, emotional empathy, and strategic foresight. We advise high-net-worth individuals, business families, and private clients on preserving generational wealth, drafting wills, administering estates through the Probate Registry, and navigating matrimonial disputes with dignity.",
    keyServices: [
      "Drafting Wills, Codicils & family private living trust instruments",
      "Processing Grants of Probate and Letters of Administration at the High Court Probate Registry",
      "Asset succession structuring, inter-generational wealth transfer & family business governance",
      "Matrimonial proceedings, judicial separation, dissolution of marriage & ancillary relief",
      "Child custody, guardianship arrangements & maintenance agreements",
    ],
    statutoryFramework: [
      "Matrimonial Causes Act (Cap M7, LFN 2004)",
      "Wills Law of Lagos State and applicable state administration laws",
      "High Court of Lagos State (Probate) Rules",
      "Child's Right Act & Child's Right Law of Lagos State",
    ],
    typicalMatters: [
      "Drafting a multi-jurisdictional estate plan and testamentary trust protecting family assets across Nigeria and the UK.",
      "Shepherding complex Letters of Administration applications involving contested multi-heir beneficiaries.",
      "Negotiating confidential separation agreements and equitable division of matrimonial property.",
    ],
    iconName: "HeartHandshake",
  },
  {
    id: "regulatory-compliance",
    slug: "regulatory-compliance",
    number: "08",
    title: "Regulatory & Compliance Advisory",
    shortDescription:
      "Statutory compliance, data protection (NDPA 2023), licensing, anti-money laundering, and governmental liaison.",
    overview:
      "Operating in Nigeria requires careful navigation of overlapping regulatory authorities. We provide proactive compliance diagnostics to prevent punitive sanctions, assist foreign entities with local operating permits, and support organizations in meeting the strict standards of the Nigeria Data Protection Act (NDPA 2023).",
    keyServices: [
      "Nigeria Data Protection Act (NDPA 2023) compliance audits & privacy policies",
      "Securing business permits, expatriate quotas & NIPC investor incentives",
      "Anti-Money Laundering (AML/CFT) & Special Control Unit against Money Laundering (SCUML) registration",
      "Sectoral regulatory liaison (CBN, SEC, NAFDAC, NCC, FCCPC, CAC)",
      "Periodic corporate compliance health-checks and statutory filing management",
    ],
    statutoryFramework: [
      "Nigeria Data Protection Act 2023 (NDPA)",
      "Money Laundering (Prevention and Prohibition) Act 2022",
      "Immigration Act 2015 & Immigration Regulations",
      "Federal Competition and Consumer Protection Act (FCCPA) 2018",
    ],
    typicalMatters: [
      "Guiding an international e-commerce operator through comprehensive NDPA 2023 compliance.",
      "Processing expatriate quotas and business permits for foreign technical personnel in Lagos.",
      "Managing regulatory disclosures and resolution of inquiries with federal oversight authorities.",
    ],
    iconName: "FileCheck2",
  },
];
