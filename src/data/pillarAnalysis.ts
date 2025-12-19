/**
 * Pillar Analysis Data
 * Data structures for the 7 pillars of Richmond's Mayoral Action Plan
 * @source knowledge-base/01-planning-strategy/mayoral-action-plan.md
 */

import { DataAsset } from "@/components/pillar-analysis/DataAssetGrid";

export interface Metric {
  name: string;
  description: string;
  target?: string;
  timeline?: string;
}

export interface Dependency {
  pillarId: string;
  label: string;
  description: string;
}

export interface Risk {
  title: string;
  description: string;
}

export interface Recommendation {
  title: string;
  description: string;
  priority?: "quick-win" | "long-term";
}

export interface PillarData {
  pillarNumber: number;
  name: string;
  coreThesis: string;
  complexity: "low" | "medium" | "high";
  jurisdictionalScope: string;
  definition?: string;
  keyObjectives?: string[];
  operational?: string;
  metrics?: Metric[];
  dataAssets?: {
    existing: DataAsset[];
    missing: DataAsset[];
  };
  dependencies?: Dependency[];
  risks?: Risk[];
  recommendations?: Recommendation[];
}

/**
 * Placeholder data for all 7 pillars
 * Content to be populated with full research analysis
 */
export const pillarData: PillarData[] = [
  {
    pillarNumber: 1,
    name: "A Thriving City Hall",
    coreThesis: "Municipal efficiency and workforce excellence form the operational foundation upon which all other pillars depend.",
    complexity: "high",
    jurisdictionalScope: "Direct Municipal Control",
    keyObjectives: [
      "Reduce vacancy rates in critical departments below 10%",
      "Decrease permit processing times by 40%",
      "Improve employee retention through competitive compensation",
      "Modernize administrative systems and workflows",
      "Establish culture of accountability and service excellence"
    ],
    definition: "<p>Pillar 1 addresses the fundamental challenge of municipal capacity: a city government cannot deliver on ambitious policy goals if it lacks the workforce, systems, and culture to execute effectively.</p><p>This pillar recognizes that City Hall itself is the primary implementation mechanism for all other initiatives. Vacancies in planning, permitting, code enforcement, and public works create cascading delays that undermine housing development, economic investment, and quality of life improvements.</p>",
    operational: "<p>Key operational components include:</p><ul><li><strong>Workforce Development:</strong> Competitive hiring, retention bonuses, professional development pathways</li><li><strong>Process Modernization:</strong> Digital permitting, automated workflows, customer service portals</li><li><strong>Performance Management:</strong> Clear metrics, regular reporting, accountability structures</li><li><strong>Organizational Culture:</strong> Service orientation, cross-departmental collaboration, innovation incentives</li></ul>",
    metrics: [
      { name: "Staff Vacancy Rate", description: "Percentage of funded positions unfilled", target: "< 10%" },
      { name: "Permit Processing Time", description: "Average days from application to decision", target: "40% reduction" },
      { name: "Employee Satisfaction", description: "Annual survey score", target: "> 75%" },
      { name: "Customer Service Rating", description: "Resident satisfaction with city services", target: "> 80%" }
    ],
    dataAssets: {
      existing: [
        { name: "HR Management System", description: "Employee records, vacancies, hiring pipeline", source: "Human Resources", quality: "medium" },
        { name: "Permitting Database", description: "Application status, processing times", source: "Planning & Development", quality: "medium" }
      ],
      missing: [
        { name: "Real-time Vacancy Dashboard", description: "Live view of vacancies by department with hiring pipeline status", source: "Proposed: HR + Finance integration" },
        { name: "Process Performance Metrics", description: "Granular workflow timing data for bottleneck identification", source: "Proposed: Process mining tools" }
      ]
    },
    dependencies: [
      { pillarId: "pillar-2", label: "Pillar 2: Safety", description: "Code enforcement capacity directly impacts neighborhood safety outcomes" },
      { pillarId: "pillar-4", label: "Pillar 4: Economy", description: "Permit processing speed affects business investment decisions" },
      { pillarId: "pillar-5", label: "Pillar 5: Environment", description: "Infrastructure projects require adequate project management capacity" }
    ],
    risks: [
      { title: "Compensation Competitiveness", description: "Regional competition for government talent may require salary adjustments beyond current budget capacity." },
      { title: "Institutional Knowledge Loss", description: "Retirements and departures concentrate knowledge in fewer individuals, creating single points of failure." }
    ],
    recommendations: [
      { title: "Targeted Hiring Bonuses", description: "Implement signing bonuses for hard-to-fill positions in permitting and inspection", priority: "quick-win" },
      { title: "Process Automation Sprint", description: "Identify top 5 highest-volume processes for digital transformation", priority: "quick-win" },
      { title: "Workforce Strategy Plan", description: "Develop comprehensive 3-year workforce development and succession planning strategy", priority: "long-term" }
    ]
  },
  {
    pillarNumber: 2,
    name: "Safe & Thriving Neighborhoods",
    coreThesis: "Public safety and housing quality are interconnected systems requiring coordinated investment in prevention, enforcement, and community development.",
    complexity: "high",
    jurisdictionalScope: "Shared - Municipal, County, State Partners",
    keyObjectives: [
      "Reduce violent crime through prevention and intervention",
      "Increase affordable housing production",
      "Strengthen code enforcement for property standards",
      "Expand community-based safety initiatives",
      "Address homelessness through housing-first approaches"
    ]
  },
  {
    pillarNumber: 3,
    name: "A City of Opportunity",
    coreThesis: "Workforce development, education alignment, and pathway programs create genuine economic mobility for residents.",
    complexity: "high",
    jurisdictionalScope: "Sphere of Influence - RPS, Community Colleges, Employers",
    keyObjectives: [
      "Align workforce training with employer needs",
      "Expand youth employment and internship programs",
      "Improve educational outcomes through RPS partnership",
      "Create career pathways in high-growth sectors",
      "Reduce barriers to employment for justice-involved residents"
    ]
  },
  {
    pillarNumber: 4,
    name: "A Thriving Economy",
    coreThesis: "Strategic economic development requires business attraction, small business support, and equitable growth that benefits all communities.",
    complexity: "medium",
    jurisdictionalScope: "Direct Municipal + Regional Partners",
    keyObjectives: [
      "Attract major employers and investment",
      "Support small and minority-owned businesses",
      "Revitalize commercial corridors",
      "Expand innovation economy and tech sector",
      "Ensure economic benefits reach underserved areas"
    ]
  },
  {
    pillarNumber: 5,
    name: "Thriving Environment & Infrastructure",
    coreThesis: "Sustainable infrastructure investment addresses climate resilience, transportation equity, and quality of life across all neighborhoods.",
    complexity: "high",
    jurisdictionalScope: "Direct Municipal + GRTC, State DOT",
    keyObjectives: [
      "Improve transportation connectivity and transit access",
      "Address stormwater and flooding vulnerabilities",
      "Expand parks and green space equity",
      "Reduce carbon footprint and improve air quality",
      "Modernize aging infrastructure systems"
    ]
  },
  {
    pillarNumber: 6,
    name: "Truth, Reconciliation & Reparations",
    coreThesis: "Addressing historical inequities requires honest accounting of the past and intentional investment in communities that have been systematically underserved.",
    complexity: "high",
    jurisdictionalScope: "Direct Municipal Policy + Community Partnership",
    keyObjectives: [
      "Document and acknowledge historical harms",
      "Develop reparations framework with community input",
      "Target investments in historically redlined areas",
      "Support Black-owned businesses and institutions",
      "Create pathways for community wealth-building"
    ]
  },
  {
    pillarNumber: 7,
    name: "A Regional Capital",
    coreThesis: "Richmond's success depends on effective regional collaboration while maintaining the city's distinct identity and interests.",
    complexity: "medium",
    jurisdictionalScope: "Regional - PlanRVA, Neighboring Jurisdictions",
    keyObjectives: [
      "Strengthen regional economic development coordination",
      "Improve transportation connections across jurisdictions",
      "Collaborate on housing and workforce challenges",
      "Position Richmond as regional leader",
      "Ensure city interests in regional decision-making"
    ]
  }
];
