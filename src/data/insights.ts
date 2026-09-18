export interface LegalInsight {
  slug: string;
  title: string;
  category: "Corporate Law" | "Dispute Resolution" | "Real Estate" | "Employment Law" | "Arbitration" | "Regulatory";
  excerpt: string;
  readTime: string;
  publishDate: string;
  formattedDate: string;
  author: string;
  authorRole: string;
  summaryKeyPoints: string[];
  content: Array<{
    heading?: string;
    paragraphs: string[];
  }>;
  relatedPracticeAreaSlug: string;
}

export const LEGAL_INSIGHTS: LegalInsight[] = [
  {
    slug: "what-every-nigerian-business-should-know-before-signing-a-commercial-agreement",
    title: "What Every Nigerian Business Should Know Before Signing a Commercial Agreement",
    category: "Corporate Law",
    excerpt:
      "A commercial contract is only as protective as its dispute mechanisms, limitation clauses, and termination triggers. Here is what founders and commercial directors must scrutinize before execution.",
    readTime: "6 min read",
    publishDate: "2026-06-15",
    formattedDate: "June 15, 2026",
    author: "O.C Oremodu",
    authorRole: "Barrister & Solicitor of the Supreme Court of Nigeria",
    summaryKeyPoints: [
      "Ambiguity in termination for convenience vs. termination for cause is the leading driver of contract litigation in Nigerian courts.",
      "Always align force majeure clauses with Nigerian economic and infrastructural realities, including foreign exchange restrictions.",
      "Clear multi-tiered dispute escalation clauses prevent unnecessary and expensive court appearances.",
    ],
    content: [
      {
        heading: "The Presumption of Commercial Competence",
        paragraphs: [
          "Under Nigerian contract law, courts operate on the settled presumption that commercial entities entering into contracts do so with their eyes wide open. Except in rare cases involving fraud, duress, or fundamental illegality, Nigerian judges are hesitant to rewrite a bad bargain for a sophisticated business.",
          "Consequently, treating agreement execution as a mere formality or relying on verbal understandings made during negotiations creates substantial vulnerability. In the event of a dispute, the parole evidence rule will generally bar oral statements that contradict the written terms of the signed document.",
        ],
      },
      {
        heading: "Scrutinizing the Termination Mechanism",
        paragraphs: [
          "One of the most litigated provisions in Nigerian commercial practice is the termination clause. Contracts frequently contain vague language regarding 'material breach' without defining what constitutes materiality or establishing a realistic cure period.",
          "Parties should clearly distinguish between termination for cause (e.g., insolvency, regulatory revocation, persistent non-payment) and termination for convenience. If termination for convenience is allowed, the notice period and transition obligations must be commercially reasonable.",
        ],
      },
      {
        heading: "Dispute Resolution & Governing Law Clauses",
        paragraphs: [
          "A multi-tiered dispute resolution clause—mandating executive negotiation, followed by formal mediation, and finally arbitration—often saves millions in contentious legal expenses. Specifying the seat of arbitration as Lagos under the Arbitration and Mediation Act 2023 provides speed, confidentiality, and procedural predictability compared to open court trials.",
        ],
      },
    ],
    relatedPracticeAreaSlug: "corporate-commercial-law",
  },
  {
    slug: "understanding-the-basics-of-property-documentation-in-nigeria",
    title: "Understanding the Basics of Property Documentation & Title Perfection in Nigeria",
    category: "Real Estate",
    excerpt:
      "A receipt or Family Deed is not legal title. We examine the statutory hierarchy of real estate documents in Nigeria, from Gazettes to Governors Consent.",
    readTime: "8 min read",
    publishDate: "2026-05-22",
    formattedDate: "May 22, 2026",
    author: "O.C Oremodu",
    authorRole: "Barrister & Solicitor of the Supreme Court of Nigeria",
    summaryKeyPoints: [
      "A contract of sale only conveys an equitable interest; legal title vests upon registration and perfection.",
      "Under Section 22 of the Land Use Act, alienation of land without Governor's Consent renders the transaction inchoate.",
      "Physical inspection, community root checks, and official Land Registry searches are non-negotiable prerequisites.",
    ],
    content: [
      {
        heading: "The Myth of the 'Family Receipt'",
        paragraphs: [
          "In high-growth real estate corridors across Lagos and Ogun states, countless purchasers rely on purchase receipts, survey plans, and letters of allocation issued by indigenous landowning families (omoo-onile). While these documents may evidence an initial financial exchange, they do not confer statutory legal ownership.",
          "Under the Land Use Act 1978, all land within each state is vested in the State Governor in trust for the people. Private ownership exists as a leasehold right known as a Right of Occupancy, typically evidenced by a Certificate of Occupancy (C of O) or a Governor's Consent on a registered Deed of Assignment.",
        ],
      },
      {
        heading: "The Perfection Triad: Stamp Duty, Consent, and Registration",
        paragraphs: [
          "To transfer title from a holder of a C of O to a new buyer, the law mandates a three-step perfection process: stamping the deed at the Stamp Duty Office, applying for and securing Governor's Consent, and registering the perfected Deed of Assignment at the State Land Registry.",
          "Failure to complete perfection means the purchaser holds merely an equitable interest. In the event the dishonest seller purports to sell the same property to a second purchaser who subsequently perfects their title without notice, the original buyer may lose the land.",
        ],
      },
    ],
    relatedPracticeAreaSlug: "real-estate-property-law",
  },
  {
    slug: "arbitration-vs-litigation-under-the-arbitration-and-mediation-act-2023",
    title: "Arbitration vs. Litigation: What Businesses in Nigeria Must Consider Under the AMA 2023",
    category: "Arbitration",
    excerpt:
      "Nigeria's Arbitration and Mediation Act 2023 has fundamentally modernized commercial dispute resolution. How should your business choose between litigation and arbitration?",
    readTime: "7 min read",
    publishDate: "2026-04-10",
    formattedDate: "April 10, 2026",
    author: "O.C Oremodu",
    authorRole: "Barrister & Solicitor of the Supreme Court of Nigeria",
    summaryKeyPoints: [
      "The AMA 2023 introduces the Award Review Tribunal (ART), reducing appellate delays in Nigerian courts.",
      "Arbitration guarantees strict commercial confidentiality, protecting trade secrets and business reputation.",
      "Interim relief can now be granted quickly by emergency arbitrators even before the substantive tribunal is constituted.",
    ],
    content: [
      {
        heading: "A New Era with the AMA 2023",
        paragraphs: [
          "For decades, arbitration in Nigeria operated under the 1988 Arbitration and Conciliation Act, which struggled to curb delaying tactics by reluctant parties seeking recourse in traditional courts. The enactment of the Arbitration and Mediation Act 2023 (AMA 2023) has aligned Nigerian arbitration with global best practices.",
          "Key improvements include explicit recognition of electronic arbitration agreements, streamlined interim relief via emergency arbitrators, and the statutory recognition of mediation outcomes under the Singapore Convention framework.",
        ],
      },
      {
        heading: "Balancing Cost, Time, and Enforceability",
        paragraphs: [
          "While court litigation can be protracted through multiple levels of appeal, court fees are nominal compared to arbitrator honorariums and tribunal administration costs. For large commercial contracts, however, the direct cost of arbitration is far outweighed by the speed and finality of the award.",
        ],
      },
    ],
    relatedPracticeAreaSlug: "arbitration-adr",
  },
  {
    slug: "key-legal-considerations-when-starting-a-business-in-nigeria",
    title: "Key Legal Considerations When Starting a Business in Nigeria: Post-CAMA 2020 Realities",
    category: "Corporate Law",
    excerpt:
      "From single-shareholder companies to beneficial ownership registers and minimum capital requirements, here is how modern enterprises should incorporate.",
    readTime: "5 min read",
    publishDate: "2026-03-18",
    formattedDate: "March 18, 2026",
    author: "O.C Oremodu",
    authorRole: "Barrister & Solicitor of the Supreme Court of Nigeria",
    summaryKeyPoints: [
      "CAMA 2020 permits single-shareholder and single-director private companies for simplified operations.",
      "Companies with foreign participation must comply with NIPC registration and revised minimum share capital guidelines.",
      "Beneficial ownership disclosures (Persons with Significant Control - PSC) are strictly enforced by the Corporate Affairs Commission.",
    ],
    content: [
      {
        heading: "Choosing the Right Business Vehicle",
        paragraphs: [
          "The Companies and Allied Matters Act 2020 introduced modern business vehicles to Nigeria, including Limited Liability Partnerships (LLPs) and Limited Partnerships (LPs), alongside traditional Private Limited Companies (Ltd).",
          "For technology ventures and service businesses, incorporating with the Corporate Affairs Commission (CAC) is only step one. Post-incorporation compliance, including SCUML registration (where applicable) and tax clearance setup with the Federal Inland Revenue Service (FIRS), is vital to opening corporate bank accounts and executing contracts.",
        ],
      },
      {
        heading: "Governance & Founders' Safeguards",
        paragraphs: [
          "Founders frequently make the mistake of adopting standard off-the-shelf Articles of Association without executing a custom Shareholders' Agreement. Without vesting schedules, dispute deadlocks, and drag-along clauses, internal shareholder disputes can paralyze an otherwise promising business.",
        ],
      },
    ],
    relatedPracticeAreaSlug: "corporate-commercial-law",
  },
  {
    slug: "employment-contracts-essential-clauses-and-nicn-jurisprudence",
    title: "Employment Contracts in Nigeria: Important Issues Employers and Employees Should Understand",
    category: "Employment Law",
    excerpt:
      "Section 254C of the Nigerian Constitution grants the National Industrial Court expansive jurisdiction to enforce international best labour practices. What does this mean for workplace contracts?",
    readTime: "7 min read",
    publishDate: "2026-02-05",
    formattedDate: "February 5, 2026",
    author: "O.C Oremodu",
    authorRole: "Barrister & Solicitor of the Supreme Court of Nigeria",
    summaryKeyPoints: [
      "The common law rule that 'an employer can terminate for good, bad, or no reason' has been modified by the National Industrial Court.",
      "Broad, indefinite non-compete clauses are regularly struck down as unreasonable restraints of trade.",
      "Clear workplace policies on harassment, data confidentiality, and disciplinary due process are essential for employer protection.",
    ],
    content: [
      {
        heading: "The Shift Away from Common Law Hire-and-Fire",
        paragraphs: [
          "Traditionally, English common law allowed an employer to terminate employment at will, provided appropriate notice or salary in lieu of notice was given. In Nigeria, however, the National Industrial Court of Nigeria (NICN) has held in numerous landmark judgments that international labour standards (particularly ILO Convention No. 158) require valid reasons connected with the capacity or conduct of the employee or operational requirements of the enterprise.",
        ],
      },
      {
        heading: "Drafting Enforceable Restrictive Covenants",
        paragraphs: [
          "Employers seeking to protect confidential client connections and intellectual property must draft restrictive covenants with geographical and temporal moderation. Clauses that attempt to prevent an employee from working in their chosen profession anywhere in Nigeria for years are routinely invalidated.",
        ],
      },
    ],
    relatedPracticeAreaSlug: "employment-labour-law",
  },
];
