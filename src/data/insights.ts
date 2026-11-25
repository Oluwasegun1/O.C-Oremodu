export interface LegalInsight {
  slug: string;
  type: "Research Paper" | "Practice Brief";
  title: string;
  category:
    | "Climate & Energy Law"
    | "Family & Child Rights"
    | "Property & Land Law"
    | "ADR & Mediation"
    | "Corporate & Commercial";
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
    slug: "child-custody-and-adoption-in-nigeria-child-rights-and-matrimonial-causes",
    type: "Research Paper",
    title: "Child Custody and Adoption in Nigeria: Reviewing the Child Rights Act and Matrimonial Causes Act",
    category: "Family & Child Rights",
    excerpt:
      "A statutory review examining how Nigeria's Child Rights Act and Matrimonial Causes Act interact in determining child custody, welfare benchmarks, and formal adoption processes.",
    readTime: "7 min read",
    publishDate: "2026-06-10",
    formattedDate: "Research Paper • 2026",
    author: "Olubunmi Chioma Oremodu",
    authorRole: "Legal Practitioner — LL.B, B.L, AICMC",
    summaryKeyPoints: [
      "Both the Child Rights Act and Section 71 of the Matrimonial Causes Act elevate the best interests and welfare of the child as the paramount consideration in custody disputes.",
      "Effective adoption administration depends on clear alignment between statutory requirements, state domestication of child-rights laws, and institutional oversight by Ministries of Justice and social welfare authorities.",
      "Structured mediation in custody and child support matters often produces more durable, child-centered outcomes than adversarial litigation alone.",
    ],
    content: [
      {
        heading: "Statutory Foundations Governing Child Welfare in Nigeria",
        paragraphs: [
          "Questions surrounding child custody and adoption sit at the intersection of private family life and public statutory protection. In Nigeria, two core statutory instruments frame legal analysis in this area: the Matrimonial Causes Act—which governs custody, guardianship, and maintenance arising from statutory marriages—and the Child Rights Act, enacted to domesticate comprehensive child-welfare standards across the federation.",
          "Across both frameworks, Nigerian courts consistently hold that parental preference or financial superiority cannot override the overall welfare of the child. Judges assess emotional stability, educational continuity, healthcare access, safe home environments, and—where appropriate—the child's own wishes.",
        ],
      },
      {
        heading: "Navigating Adoption & State Institutional Oversight",
        paragraphs: [
          "Unlike informal fostering arrangements that remain common across communities, legal adoption permanently transfers parental rights and responsibilities through judicial order. Because adoption carries profound legal consequences for identity, inheritance, and child protection, state authorities and Ministries of Justice play a vital supervisory role in verifying eligibility, consent, and home suitability.",
          "Harmonizing statutory adoption procedures across Nigerian states—particularly ensuring uniform domestication and implementation of Child Rights legislation—remains critical to protecting children from irregular placements and legal uncertainty.",
        ],
      },
      {
        heading: "The Role of Mediation in Custody & Child Support Matters",
        paragraphs: [
          "In practical family law settings, adversarial courtroom battles frequently deepen hostility between parents who must continue co-parenting long after proceedings conclude. Structured ADR and mediation offer a constructive forum to establish workable visitation schedules, child support commitments, and shared decision-making while keeping the child's wellbeing at the center.",
        ],
      },
    ],
    relatedPracticeAreaSlug: "family-matrimonial-estates",
  },
  {
    slug: "climate-law-and-energy-sector-policy-in-nigeria",
    type: "Research Paper",
    title: "Climate Law and Energy-Sector Policy in Nigeria: Balancing Transition, Regulation & Development",
    category: "Climate & Energy Law",
    excerpt:
      "An examination of Nigeria's evolving climate-law architecture and energy-sector policy landscape, exploring regulatory alignment, environmental stewardship, and sustainable energy pathways.",
    readTime: "8 min read",
    publishDate: "2026-04-18",
    formattedDate: "Research Paper",
    author: "Olubunmi Chioma Oremodu",
    authorRole: "Legal Practitioner — LL.B, B.L, AICMC",
    summaryKeyPoints: [
      "Nigeria faces the dual imperative of expanding reliable energy access for economic growth while meeting national and international climate commitments.",
      "Coherent legal and policy frameworks are essential to translate climate goals into enforceable compliance standards across upstream, midstream, and power-sector operations.",
      "Environmental-law advocacy and public awareness reinforce statutory regulation by fostering institutional and community accountability.",
    ],
    content: [
      {
        heading: "The Intersection of Energy Policy and Climate Regulation",
        paragraphs: [
          "As Africa's largest population and a major energy-producing nation, Nigeria occupies a uniquely complex position in global climate governance. Domestic energy policy must simultaneously address chronic power-generation deficits, industrial growth demands, and the environmental impacts of fossil-fuel extraction and gas flaring.",
          "Examining Nigerian climate law alongside energy-sector policies reveals the importance of institutional coordination. Statutory mandates only achieve meaningful environmental impact when regulatory agencies, operators, and state governments share clear compliance metrics, monitoring mechanisms, and enforcement capacity.",
        ],
      },
      {
        heading: "Regulatory Coherence & Sustainable Transition Pathways",
        paragraphs: [
          "A credible energy transition in Nigeria cannot rely on aspirational policy statements alone. It requires predictable legal incentives for renewable energy deployment, clearer licensing and grid-integration rules, and consistent enforcement of environmental impact assessments across energy projects.",
          "Legal practitioners play a vital role in this ecosystem—helping bridge policy design, corporate regulatory compliance, contract drafting for cleaner energy projects, and community environmental-law enlightenment.",
        ],
      },
      {
        heading: "Public Awareness and Environmental Stewardship",
        paragraphs: [
          "Beyond national statutes, lasting environmental protection depends on informed citizens and active local advocacy. Strengthening public legal literacy around environmental rights and obligations empowers communities to engage constructively with regulators and project developers.",
        ],
      },
    ],
    relatedPracticeAreaSlug: "legal-research-human-rights",
  },
  {
    slug: "property-documentation-and-land-verification-essentials-in-nigeria",
    type: "Practice Brief",
    title: "Essential Safeguards in Nigerian Property Documentation, Leases & Land Verification",
    category: "Property & Land Law",
    excerpt:
      "Why careful document verification, clear sale of land agreements, and properly drafted commercial leases are indispensable to avoiding title disputes and tenancy friction.",
    readTime: "6 min read",
    publishDate: "2026-03-14",
    formattedDate: "Practice Brief • 2026",
    author: "Olubunmi Chioma Oremodu",
    authorRole: "Legal Practitioner — LL.B, B.L, AICMC",
    summaryKeyPoints: [
      "Independent verification of root of title and identity of the vendor protects buyers against land grabbing and duplicate conveyances.",
      "Well-drafted sale of land agreements and commercial leases prevent costly ambiguities over possession, rent review, repairs, and termination.",
      "Early legal review of tenancy and debt recovery terms reduces the likelihood of protracted court proceedings.",
    ],
    content: [
      {
        heading: "Verification Before Payment",
        paragraphs: [
          "Many property disputes in Nigerian courts originate from buyers parting with purchase funds before conducting thorough documentary and physical verification. Confirming the authenticity of title records, survey details, and the vendor's legal capacity to transfer interest is the single most effective safeguard against land grabbing and fraudulent sales.",
        ],
      },
      {
        heading: "Precision in Sale Agreements and Commercial Leases",
        paragraphs: [
          "Whether documenting a sale of land or negotiating a commercial lease, vague templates often fail when disagreements arise. Clear clauses covering payment milestones, vacant possession, permitted use, maintenance obligations, renewal terms, and dispute escalation protect both landlords and tenants while preserving commercial relationships.",
        ],
      },
    ],
    relatedPracticeAreaSlug: "property-land-matters",
  },
  {
    slug: "adr-and-mediation-practical-value-in-civil-and-family-disputes",
    type: "Practice Brief",
    title: "The Practical Value of Mediation & Out-of-Court Settlement in Civil and Matrimonial Disputes",
    category: "ADR & Mediation",
    excerpt:
      "How structured mediation enables parties in commercial, labour, and family disputes to resolve conflicts confidentially, cost-effectively, and with lasting compliance.",
    readTime: "5 min read",
    publishDate: "2026-02-08",
    formattedDate: "Practice Brief • 2026",
    author: "Olubunmi Chioma Oremodu",
    authorRole: "Legal Practitioner — LL.B, B.L, AICMC",
    summaryKeyPoints: [
      "Mediation preserves confidentiality and ongoing relationships in ways public adversarial trials rarely can.",
      "Voluntary, well-documented settlement agreements tend to achieve stronger compliance in child support, tenancy, and commercial recovery matters.",
      "Combining legal knowledge with AICMC mediation principles helps parties evaluate realistic options and reach durable terms.",
    ],
    content: [
      {
        heading: "When Settlement Serves Parties Better Than Trial",
        paragraphs: [
          "Court litigation remains indispensable where urgent injunctive protection, constitutional interpretation, or authoritative legal precedent is needed. Yet for many everyday civil, commercial, tenancy, and family disputes, congested court dockets and escalating costs can leave both sides exhausted.",
          "Mediation empowers parties to craft practical solutions tailored to their actual financial and personal circumstances—reducing delay while maintaining dignity and privacy.",
        ],
      },
      {
        heading: "Documenting Enforceable Outcomes",
        paragraphs: [
          "A successful mediation must culminate in clear, unambiguous written terms of settlement. Careful legal drafting ensures that agreed timelines, payment schedules, custody arrangements, and mutual obligations are well-defined and capable of enforcement if necessary.",
        ],
      },
    ],
    relatedPracticeAreaSlug: "adr-mediation",
  },
];
