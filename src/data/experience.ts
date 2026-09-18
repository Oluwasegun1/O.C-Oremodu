export interface SelectedMatter {
  id: string;
  category: string;
  title: string;
  summary: string;
  outcome: string;
  keyDetails: string[];
  jurisdiction: string;
}

export const SELECTED_MATTERS: SelectedMatter[] = [
  {
    id: "matter-corporate-restructuring",
    category: "Corporate & Commercial Law",
    title: "Cross-Border Commercial Advisory & Entity Restructuring",
    summary:
      "Advised a multi-jurisdictional logistics and technology venture on corporate restructuring, shareholder recapitalization, and regulatory licensing under CAMA 2020.",
    outcome:
      "Completed legal restructuring without business interruption, securing regulatory approvals from the Corporate Affairs Commission.",
    keyDetails: [
      "Drafted restructured Articles of Association and Founders' Agreements with multi-class voting rights.",
      "Conducted statutory audit of corporate records and regularized historical compliance returns.",
      "Structured employee stock option incentive scheme adhering to Nigerian labour and tax regulations.",
    ],
    jurisdiction: "Lagos, Nigeria / Cross-border",
  },
  {
    id: "matter-commercial-litigation",
    category: "Dispute Resolution & Litigation",
    title: "High-Stakes Commercial Contractual Dispute Defense",
    summary:
      "Provided lead representation and strategic defense for a commercial distributor in a multi-million naira breach of contract claim before the High Court of Lagos State.",
    outcome:
      "Successfully defended against unreasonable liquidated damages claims and facilitated a favorable consent judgment preserving trading relations.",
    keyDetails: [
      "Drafted detailed Statement of Defense establishing force majeure and mitigating supply chain disruptions.",
      "Resisted an ex-parte freezing application targeting client operational bank accounts.",
      "Steered contentious cross-examination that led opposing parties to seek court-connected settlement.",
    ],
    jurisdiction: "High Court of Lagos State (Commercial Division)",
  },
  {
    id: "matter-arbitration-infrastructure",
    category: "Arbitration & ADR",
    title: "Commercial Construction & Infrastructure Arbitration",
    summary:
      "Acted as co-counsel representing an indigenous engineering contractor in arbitration proceedings arising from delayed milestone payments and contract variations.",
    outcome:
      "Secured a favorable arbitral award covering substantiated variations and statutory interest.",
    keyDetails: [
      "Presented expert technical evidence reconciling bill of quantities with certified architectural certificates.",
      "Navigated expedited proceedings under the Arbitration and Mediation Act 2023.",
      "Drafted the formal Terms of Final Award recognized for enforcement before the High Court.",
    ],
    jurisdiction: "Lagos Court of Arbitration (LCA)",
  },
  {
    id: "matter-real-estate-conveyance",
    category: "Real Estate & Property Law",
    title: "Prime Commercial Real Estate Acquisition & Title Perfection",
    summary:
      "Advised an institutional investor on the due diligence, acquisition, and title perfection of a prime commercial property portfolio located in Ikoyi and Victoria Island.",
    outcome:
      "Identified hidden encumbrances during land registry search, renegotiated indemnity protections, and successfully secured Governor's Consent.",
    keyDetails: [
      "Conducted extensive investigation at the Lagos State Lands Bureau and verified Gazette coordinates.",
      "Structured escrow payment milestones linked to physical vacant possession and title document release.",
      "Prepared and registered Deeds of Assignment with certified land title issuance.",
    ],
    jurisdiction: "Lagos State Lands Registry, Alausa, Ikeja",
  },
  {
    id: "matter-employment-restructuring",
    category: "Employment & Labour Law",
    title: "Corporate Redundancy & Executive Severance Advisory",
    summary:
      "Advised a financial services institution on lawful workforce restructuring affecting regional branch personnel, ensuring full compliance with NICN jurisprudence.",
    outcome:
      "Executed redundancy program without any industrial action or contentious court litigation.",
    keyDetails: [
      "Formulated fair selection criteria and drafted standardized severance agreements with mutual full-and-final release clauses.",
      "Ensured statutory pension reconciliation and compliance with the Labour Act and Employees' Compensation Act.",
      "Represented management in amicable consultative sessions with employee representatives.",
    ],
    jurisdiction: "National Industrial Court of Nigeria (NICN) jurisdiction",
  },
  {
    id: "matter-regulatory-compliance",
    category: "Regulatory & Compliance",
    title: "NDPA 2023 Data Privacy Audit & SCUML Licensing",
    summary:
      "Conducted comprehensive legal diagnostic for a pan-African payments platform entering the Nigerian market, covering data protection and anti-money laundering compliance.",
    outcome:
      "Achieved full compliance status with the Nigeria Data Protection Commission (NDPC) and secured Special Control Unit against Money Laundering (SCUML) clearance.",
    keyDetails: [
      "Conducted Data Protection Impact Assessment (DPIA) on customer onboarding and cardholder data pipelines.",
      "Drafted external customer privacy policies, internal employee data manuals, and third-party data processing contracts.",
      "Interfaced directly with regulatory desk officers to expedite clearance certificates.",
    ],
    jurisdiction: "Federal Republic of Nigeria",
  },
];

export const LEGAL_PROCESS_STEPS = [
  {
    step: "01",
    title: "Initial Consultation",
    subtitle: "Understanding the Situation",
    description:
      "We begin with a thorough, confidential consultation to understand the factual background, your core objectives, immediate legal exposures, and commercial priorities.",
  },
  {
    step: "02",
    title: "Legal Assessment & Due Diligence",
    subtitle: "Evaluating the Merits",
    description:
      "We scrutinize relevant documents, contracts, statutory requirements, and applicable judicial precedents to evaluate legal strengths, vulnerabilities, and potential risks.",
  },
  {
    step: "03",
    title: "Strategy Formulation",
    subtitle: "Tailored Action Plan",
    description:
      "We design a clear, pragmatic legal strategy—whether negotiating settlement, drafting protective agreements, pursuing arbitration, or instituting court proceedings.",
  },
  {
    step: "04",
    title: "Representation & Active Advisory",
    subtitle: "Executing with Precision",
    description:
      "We execute the agreed strategy with disciplined rigor, keeping you informed at every milestone with clear updates, transparent communication, and dedicated advocacy.",
  },
];
