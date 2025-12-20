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

export interface Partner {
  name: string;
  role: string;
  dataAsset: string;
  sourceUrl?: string;
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
  partners?: Partner[];
}

/**
 * Complete pillar data with full research analysis
 */
export const pillarData: PillarData[] = [
  // ============================================================
  // PILLAR 1: A THRIVING CITY HALL
  // ============================================================
  {
    pillarNumber: 1,
    name: "A Thriving City Hall",
    coreThesis: "External service delivery is a lagging indicator of internal organizational health. If the bureaucracy is thriving—defined by low vacancies, high morale, and efficient systems—services will naturally improve.",
    complexity: "high",
    jurisdictionalScope: "Direct Municipal Control",
    keyObjectives: [
      "Goal A: Do the Basics Better—focus on core machinery of government",
      "Goal B: Lead Well—introduce meaningful accountability through performance reviews",
      "Goal E: White Glove Service—complete SOPs and SLAs for all 311 request types",
      "Reduce vacancy rates in critical departments below 6-8%",
      "Modernize IT systems to reduce administrative friction"
    ],
    definition: `<p>This pillar serves as the <strong>foundational substrate</strong> for the entire administration. The overarching theory of change is that external service delivery is a lagging indicator of internal organizational health.</p>
    <p>The seven goals (A-G) under this pillar operationalize abstract concepts of "trust" into hard administrative metrics, transforming aspirational governance into measurable outcomes.</p>
    <h4 class="font-semibold text-foreground mt-4 mb-2">Goal A: Do the Basics Better</h4>
    <p>This goal focuses on the core machinery of government. The primary metric is the <strong>employee vacancy rate</strong>—the single most critical "lead measure" in the MAP.</p>
    <p><em>Causal Relationship:</em> A vacancy in Procurement leads to delays in contract execution (Goal A metrics: contract compliance rate, timely payment of bills), which discourages small businesses from working with the city (Pillar 4). Similarly, vacancies in Planning and Development Review slow permit processing (Goal E metrics), directly impeding housing production (Pillar 2).</p>
    <h4 class="font-semibold text-foreground mt-4 mb-2">Goal B: Lead Well (Accountability)</h4>
    <p>This goal introduces meaningful performance reviews and turnover rates as metrics. Historically, municipal performance reviews can become "tick-box" exercises. By linking review completion rates to turnover rates, the MAP attempts to measure the <em>quality</em> of management.</p>
    <h4 class="font-semibold text-foreground mt-4 mb-2">Goal E: White Glove Service</h4>
    <p>This goal mandates completion of Standard Operating Procedures (SOPs) and Service Level Agreements (SLAs) for all 311 request types. The shift to SLAs (e.g., "pothole repaired within 48 hours") transforms the metric from passive observation of speed to an <strong>active promise of quality</strong>.</p>`,
    operational: `<p><strong>IT Modernization:</strong> The metric tracking "% of IT systems that are current generation" is a proxy for administrative friction. Legacy systems increase labor hours required for routine tasks, exacerbating the impact of vacancies.</p>
    <p><strong>Cultural Shift:</strong> The hypothesis is that employees who receive constructive feedback are less likely to leave, stabilizing the workforce and reducing costly turnover cycles.</p>
    <p><strong>Operational Shift:</strong> Currently, many cities track "average days to close." The shift to SLAs creates an accountability loop where failure to meet an SLA triggers a process review, enabling continuous improvement.</p>
    <h4 class="font-semibold text-foreground mt-4 mb-2">Benchmarks and Context</h4>
    <p>High-performing municipal organizations (Charlotte, NC; Austin, TX) typically target vacancy rates below 6-8%. Richmond's vacancy rate has historically hovered significantly higher in key operational departments.</p>
    <p>The "White Glove" aspiration mirrors the <strong>CitiStat performance management models</strong> used in Baltimore, requiring high-frequency data review meetings to diagnose service failures in real-time.</p>`,
    metrics: [
      { name: "Employee Vacancy Rate", description: "Primary lead measure for organizational health—vacancies cascade into service delivery failures", target: "< 6-8%" },
      { name: "IT Systems Currency", description: "Percentage of IT systems that are current generation, reducing administrative friction", target: "100% modernized" },
      { name: "Performance Review Completion", description: "Linked to turnover rates to measure management quality, not just compliance", target: "100%" },
      { name: "Turnover Rate", description: "Indicator of workforce stability and management effectiveness", target: "Below sector average" },
      { name: "Contract Compliance Rate", description: "Measures procurement efficiency affecting vendor relations", target: "> 95%" },
      { name: "Timely Payment of Bills", description: "Critical for small business relationships and procurement health", target: "< 30 days" },
      { name: "311 SLA Compliance", description: "Percentage of 311 requests meeting defined Service Level Agreements", target: "> 90%" }
    ],
    dataAssets: {
      existing: [
        { name: "HR Management System", description: "Employee records, vacancies, hiring pipeline tracking", source: "Human Resources", quality: "medium" },
        { name: "311 Request System", description: "Service requests and average closure times", source: "Customer Service", quality: "medium" },
        { name: "Procurement Database", description: "Contract status, payment processing times", source: "Finance/Procurement", quality: "medium" },
        { name: "City Budget - General Fund", description: "10+ years of history. Essential for tracking fiscal inputs. Updated annually.", source: "Open Data Portal", quality: "high" },
        { name: "City Contracts", description: "Lists active contracts but lacks compliance/performance data. Updated monthly.", source: "Open Data Portal", quality: "medium" },
        { name: "Payment Register", description: "Granular transparency on vendor payments. Essential for tracking 'timely payments' goal.", source: "Open Data Portal", quality: "high" }
      ],
      missing: [
        { name: "Real-time Vacancy Dashboard", description: "Live view of vacancies by department with hiring pipeline status and time-to-fill metrics", source: "Proposed: HR + Finance integration" },
        { name: "SLA Performance Tracking", description: "Granular tracking of 311 SLA compliance by request type with automatic alerting", source: "Proposed: 311 system enhancement" },
        { name: "IT Modernization Index", description: "Systematic inventory of all systems with age, support status, and replacement timeline", source: "Proposed: IT Department audit" },
        { name: "Employee Vacancy & Turnover Rates", description: "While budget documents list authorized FTEs, the real-time vacancy rate is not published as an open dataset. This is the 'lead domino' for Pillar 1.", source: "Priority Gap" }
      ]
    },
    dependencies: [
      { pillarId: "pillar-2", label: "Pillar 2: Neighborhoods", description: "Vacancies in Planning and Development Review slow permit processing, directly impeding housing production" },
      { pillarId: "pillar-4", label: "Pillar 4: Economy", description: "Procurement delays discourage small businesses from working with the city" },
      { pillarId: "pillar-5", label: "Pillar 5: Environment", description: "Infrastructure projects require adequate project management capacity" }
    ],
    risks: [
      { title: "Compensation Competitiveness", description: "Regional competition for government talent may require salary adjustments beyond current budget capacity. High-performing peer cities offer more competitive packages." },
      { title: "CitiStat Implementation Burden", description: "High-frequency data review meetings require cultural change and sustained leadership commitment that may be difficult to maintain." },
      { title: "Legacy System Dependencies", description: "Some legacy systems may be deeply integrated with critical operations, making modernization risky and expensive." }
    ],
    recommendations: [
      { title: "Targeted Hiring Bonuses", description: "Implement signing bonuses for hard-to-fill positions in Procurement, Planning, and IT based on peer city benchmarks", priority: "quick-win" },
      { title: "SLA Definition Sprint", description: "Conduct 90-day sprint to define SLAs for top 20 highest-volume 311 request types", priority: "quick-win" },
      { title: "CitiStat Pilot", description: "Launch weekly performance review meetings for three high-impact departments before citywide rollout", priority: "quick-win" },
      { title: "IT Modernization Roadmap", description: "Complete comprehensive IT audit and develop 3-year system replacement strategy with budget projections", priority: "long-term" }
    ],
    partners: []
  },

  // ============================================================
  // PILLAR 2: THRIVING NEIGHBORHOODS
  // ============================================================
  {
    pillarNumber: 2,
    name: "Thriving Neighborhoods",
    coreThesis: "Housing production must be integrated with neighborhood health—moving beyond simple unit counts to address affordability, spatial equity, and alignment with the Richmond 300 Master Plan.",
    complexity: "high",
    jurisdictionalScope: "Shared - Municipal, State, Federal Partners",
    keyObjectives: [
      "Goal A: Build more homes—increase housing production across all types",
      "Goal B: Ensure affordability—address needs across all income levels",
      "Reduce cost-burdened households (>30% of income on housing)",
      "Align development with Richmond 300 Priority Growth Nodes",
      "De-concentrate poverty through spatial equity in housing placement"
    ],
    definition: `<p>Pillar 2 integrates the physical production of housing with the social and economic conditions of the neighborhoods they inhabit. It moves beyond a simple "unit count" approach to a more <strong>holistic view of neighborhood health</strong>.</p>
    <h4 class="font-semibold text-foreground mt-4 mb-2">Integration of Housing, Affordability, and Amenities</h4>
    <p>The interaction between Goal A (Build more homes) and Goal B (Affordability) is complex:</p>
    <ul class="list-disc pl-5 space-y-2 mt-2">
      <li><strong>Housing Production vs. Affordability:</strong> Pure market-rate production can alleviate supply constraints but may not address the needs of the most vulnerable without specific affordability requirements.</li>
      <li><strong>Metric Alignment:</strong> The MAP tracks "new housing units"—but this data must be segmented by Area Median Income (AMI) levels. A unit affordable at 80% AMI ($60,000+) does not serve a resident at 30% AMI ($22,000), who is most at risk of eviction.</li>
      <li><strong>Spatial Equity:</strong> The phrase "across different income levels" and tracking by council districts implies a commitment to de-concentrating poverty.</li>
    </ul>
    <h4 class="font-semibold text-foreground mt-4 mb-2">Richmond 300 Interface</h4>
    <p>The MAP acts as the <strong>implementation vehicle</strong> for the Richmond 300 Master Plan. Richmond 300 designates "Priority Growth Nodes" (e.g., Boulevard, Manchester). The MAP's success will be judged on whether housing production aligns with these nodes rather than encroaching on stable neighborhoods in an unplanned manner.</p>`,
    operational: `<h4 class="font-semibold text-foreground mb-2">Defining "Cost-Burdened"</h4>
    <p><strong>Operational Definition:</strong> The MAP aims to reduce cost-burdened households. Federally (HUD), this is defined as paying more than 30% of gross income on housing. In Richmond, <strong>over 50% of renters</strong> fall into this category.</p>
    <p><strong>Severe Cost Burden:</strong> The MAP must track "severe cost burden" (>50% of income) as a separate, critical KPI, as this population is one emergency away from homelessness.</p>
    <h4 class="font-semibold text-foreground mt-4 mb-2">AMI Segmentation Requirements</h4>
    <table class="w-full text-sm mt-2 border-collapse">
      <thead><tr class="border-b"><th class="text-left py-2">AMI Level</th><th class="text-left py-2">Income (approx.)</th><th class="text-left py-2">Target Population</th></tr></thead>
      <tbody>
        <tr class="border-b"><td class="py-2">30% AMI</td><td class="py-2">~$22,000</td><td class="py-2">Extremely low income, highest eviction risk</td></tr>
        <tr class="border-b"><td class="py-2">50% AMI</td><td class="py-2">~$37,000</td><td class="py-2">Very low income</td></tr>
        <tr class="border-b"><td class="py-2">80% AMI</td><td class="py-2">~$60,000</td><td class="py-2">Low income</td></tr>
        <tr><td class="py-2">120% AMI</td><td class="py-2">~$89,000</td><td class="py-2">Moderate income</td></tr>
      </tbody>
    </table>`,
    metrics: [
      { name: "New Housing Units", description: "Total units produced, segmented by AMI level and council district", target: "TBD based on Richmond 300" },
      { name: "Cost-Burdened Households", description: "Percentage of households paying >30% of income on housing", target: "Reduce from 50%+" },
      { name: "Severely Cost-Burdened", description: "Percentage paying >50% of income—critical eviction risk population", target: "Reduce significantly" },
      { name: "Affordable Unit Production", description: "Units at 30%, 50%, and 80% AMI levels", target: "Proportional to need" },
      { name: "Priority Growth Node Alignment", description: "Percentage of new development in Richmond 300 designated nodes", target: "> 70%" }
    ],
    dataAssets: {
      existing: [
        { name: "Permit Database", description: "New construction permits and unit counts", source: "Planning & Development", quality: "high" },
        { name: "ACS Housing Data", description: "American Community Survey cost-burden estimates", source: "US Census", quality: "medium" },
        { name: "Real Estate Sales / Assessments", description: "Parcel-level granularity. Excellent for tracking gentrification trends and property value shifts.", source: "Open Data Portal / GIS", quality: "high" },
        { name: "Building Permits", description: "Usually available via Socrata/GIS. Leading indicator for 'New Housing Units' goal.", source: "Open Data Portal", quality: "medium" }
      ],
      missing: [
        { name: "AMI-Segmented Production Tracking", description: "Real-time tracking of housing production by affordability level", source: "Proposed: Enhanced permit system" },
        { name: "Eviction Risk Index", description: "Predictive model for households at risk of eviction", source: "Proposed: Court records + utility data integration" },
        { name: "Spatial Equity Dashboard", description: "Geographic visualization of housing investment by neighborhood", source: "Proposed: GIS integration" },
        { name: "Eviction Filings Data", description: "Critical Gap: The City does not publish eviction filings. This data exists in court records only and is scraped by third parties like HOME and RVA Eviction Lab.", source: "Priority Gap" },
        { name: "Housing Unit Production & Affordability", description: "Fragmented: City tracks permits, but 'affordability' (AMI levels) is often tracked separately by nonprofits like Better Housing Coalition or PlanRVA.", source: "Priority Gap" }
      ]
    },
    dependencies: [
      { pillarId: "pillar-1", label: "Pillar 1: City Hall", description: "Permit processing speed directly determines housing production velocity" },
      { pillarId: "pillar-4", label: "Pillar 4: Economy", description: "Economic opportunity affects housing affordability and household income" },
      { pillarId: "pillar-6", label: "Pillar 6: Reconciliation", description: "Historical redlining patterns must inform equitable housing investment" }
    ],
    risks: [
      { title: "Market Rate Dominance", description: "Without strong affordability requirements, production may not serve lowest-income residents" },
      { title: "NIMBY Resistance", description: "Density in Priority Growth Nodes may face community opposition" },
      { title: "Federal Funding Uncertainty", description: "Affordable housing production depends heavily on federal tax credits and subsidies" }
    ],
    recommendations: [
      { title: "Mandatory AMI Reporting", description: "Require all permitted projects to report anticipated AMI levels for tracking", priority: "quick-win" },
      { title: "Severe Cost-Burden KPI", description: "Establish separate tracking and intervention programs for >50% cost-burdened households", priority: "quick-win" },
      { title: "Inclusionary Zoning Study", description: "Evaluate mandatory affordability requirements for new development", priority: "long-term" }
    ],
    partners: [
      {
        name: "Partnership for Housing Affordability (PHA) & PlanRVA",
        role: "Manage the Market Value Analysis (MVA)—a sophisticated tool that classifies neighborhoods by market strength (distressed, middle, strong). Superior to simple tax assessments for targeting affordable housing investments.",
        dataAsset: "Regional housing supply data, cost-burden analysis, neighborhood market classification",
        sourceUrl: "https://planrva.org/wp-content/uploads/CEDS_ReportAppendices.pdf"
      },
      {
        name: "Housing Opportunities Made Equal (HOME)",
        role: "Primary watchdog for fair housing. Holds data on fair housing complaints and eviction defense cases.",
        dataAsset: "Qualitative and quantitative data on discrimination patterns that City systems (311) will never capture",
        sourceUrl: "https://homeofva.org/wp-content/uploads/2020/04/EvictionCrisis_RVA_Booklet_1_24_20.pdf"
      },
      {
        name: "Better Housing Coalition (BHC)",
        role: "Nonprofit developer with visibility into affordable housing pipeline.",
        dataAsset: "Pipeline data—knows what affordable units are in financing/development before they hit the City's permitting system",
        sourceUrl: "http://www.ecosproject.com/wp/wp-content/uploads/2023/05/Data2020_BuildingHomesTogether_Final_20221012.pdf"
      }
    ]
  },

  // ============================================================
  // PILLAR 3: THRIVING FAMILIES
  // ============================================================
  {
    pillarNumber: 3,
    name: "Thriving Families",
    coreThesis: "The city's most significant governance challenge: bridging the administrative separation between City Government and Richmond Public Schools to ensure every child succeeds.",
    complexity: "high",
    jurisdictionalScope: "Sphere of Influence - RPS (School Board), Community Partners",
    keyObjectives: [
      "Goal C: Support education through partnership with RPS",
      "Expand high-quality Out-of-School Time (OST) programs",
      "Establish data sharing agreements to track outcomes",
      "Leverage City-controlled wraparound services",
      "Measure OST quality using validated assessment tools"
    ],
    definition: `<p>This pillar addresses the city's most significant governance challenge: the <strong>administrative separation</strong> between the City Government (Mayor/Council) and Richmond Public Schools (School Board).</p>
    <h4 class="font-semibold text-foreground mt-4 mb-2">Bridging the Governance Gap</h4>
    <p>Since the Mayor cannot direct RPS operations, the MAP relies on "Partnership" as a core value. The City's leverage comes through:</p>
    <ul class="list-disc pl-5 space-y-2 mt-2">
      <li><strong>Funding:</strong> The local contribution to the RPS budget</li>
      <li><strong>Wraparound Services:</strong> The City controls libraries, parks, and social services that support the "whole child"</li>
      <li><strong>Cross-Institutional Metrics:</strong> Goal C (Support education) requires data sharing to track how City investments correlate with educational outcomes</li>
    </ul>
    <h4 class="font-semibold text-foreground mt-4 mb-2">Data Sharing Agreements (DSAs)</h4>
    <p>To operationalize "every child succeeds," the City needs a DSA with RPS to link student data (anonymized) with City data (e.g., participation in NextUp RVA after-school programs). This would allow the City to determine if investments in out-of-school time (OST) are correlating with improved academic outcomes.</p>`,
    operational: `<h4 class="font-semibold text-foreground mb-2">Defining "High-Quality" Out-of-School Time</h4>
    <p>"High-quality" cannot be a subjective label. It must be defined by validated assessment tools:</p>
    <ul class="list-disc pl-5 space-y-2 mt-2">
      <li><strong>Youth Program Quality Intervention (YPQI) Scores:</strong> Nationally validated tool for assessing program quality</li>
      <li><strong>Staff-to-Youth Ratios:</strong> Adequate staffing for meaningful engagement</li>
      <li><strong>Emotional Safety:</strong> Climate surveys measuring student sense of belonging</li>
      <li><strong>Academic Enrichment Content:</strong> Alignment with learning standards</li>
    </ul>
    <p class="mt-3">NextUp RVA serves as the coordinating entity for OST programs, making it the natural data aggregator for quality metrics.</p>
    <h4 class="font-semibold text-foreground mt-4 mb-2">Key Educational Metrics</h4>
    <p>Tracking "every child succeeds" implies monitoring:</p>
    <ul class="list-disc pl-5 space-y-1 mt-2">
      <li>SOL (Standards of Learning) scores</li>
      <li>Graduation rates</li>
      <li>Chronic absenteeism rates</li>
      <li>College/career readiness indicators</li>
    </ul>`,
    metrics: [
      { name: "OST Enrollment", description: "Number of students participating in out-of-school time programs", target: "Increase annually" },
      { name: "YPQI Scores", description: "Youth Program Quality Intervention scores for OST programs", target: "> 4.0 (on 5-point scale)" },
      { name: "RPS Academic Outcomes", description: "SOL scores, graduation rates, chronic absenteeism (via DSA)", target: "Align with RPS goals" },
      { name: "Program-to-Outcome Correlation", description: "Statistical relationship between City OST investment and academic improvement", target: "Positive correlation" }
    ],
    dataAssets: {
      existing: [
        { name: "NextUp RVA Enrollment", description: "Participation data for coordinated OST programs", source: "NextUp RVA", quality: "medium" },
        { name: "Library Program Data", description: "Youth participation in library programs", source: "Richmond Public Library", quality: "medium" },
        { name: "Parks & Rec Youth Programs", description: "Recreation program enrollment and completion", source: "Parks & Recreation", quality: "medium" },
        { name: "VDOE School Performance Data", description: "SOL scores, graduation rates, and chronic absenteeism data from state dashboards", source: "Virginia Dept. of Education", quality: "high" }
      ],
      missing: [
        { name: "RPS Data Sharing Agreement", description: "Anonymized student data linked to City program participation", source: "Proposed: City-RPS DSA" },
        { name: "YPQI Assessment Database", description: "Standardized quality scores across all OST providers", source: "Proposed: NextUp RVA" },
        { name: "Longitudinal Student Tracking", description: "Multi-year tracking of students through City programs and educational outcomes", source: "Proposed: Integrated data system" },
        { name: "RPS Academic Data on ODP", description: "No direct RPS academic data is hosted on the City Open Data Portal. Must come from VDOE or RPS directly.", source: "Priority Gap" }
      ]
    },
    dependencies: [
      { pillarId: "pillar-1", label: "Pillar 1: City Hall", description: "City services (libraries, parks, social services) provide wraparound support" },
      { pillarId: "pillar-4", label: "Pillar 4: Economy", description: "Youth employment programs bridge education to workforce" },
      { pillarId: "pillar-7", label: "Pillar 7: Stories", description: "Curriculum integration of historical narratives" }
    ],
    risks: [
      { title: "RPS Partnership Limitations", description: "Mayor cannot direct RPS operations; progress depends on School Board alignment and cooperation" },
      { title: "Data Privacy Concerns", description: "Student data sharing requires careful privacy protections that may limit analysis" },
      { title: "OST Quality Variation", description: "Wide variation in program quality across providers may undermine aggregate impact" }
    ],
    recommendations: [
      { title: "Data Sharing Agreement", description: "Prioritize DSA negotiation with RPS as foundational infrastructure", priority: "quick-win" },
      { title: "YPQI Mandate", description: "Require YPQI assessments for all City-funded OST programs", priority: "quick-win" },
      { title: "Joint City-RPS Dashboard", description: "Create shared accountability dashboard for family-focused metrics", priority: "long-term" }
    ],
    partners: [
      {
        name: "Communities in Schools (CIS) & NextUp RVA",
        role: "Intermediaries managing the network of out-of-school time (OST) providers.",
        dataAsset: "Out-of-School Time Participation & Quality—tracks 'Tier 2 & 3' supports with granular data on attendance, behavior, and coursework (ABC) for specific at-risk cohorts",
        sourceUrl: "https://cisrva.org/wp-content/uploads/2024/11/Annual-Report-2024.pdf"
      },
      {
        name: "Richmond Public Schools (RPS)",
        role: "Primary educator. A robust MOU is needed to link academic data with City human services data.",
        dataAsset: "Student-level academic and attendance data",
        sourceUrl: "https://citizenportal.ai/articles/6498150/Virginia/Richmond-Public-Schools-graduation-rate-rises-to-801-district-outlines-targeted-strategies-as-SOL-scores-climb"
      }
    ]
  },

  // ============================================================
  // PILLAR 4: A THRIVING ECONOMY
  // ============================================================
  {
    pillarNumber: 4,
    name: "A Thriving Economy",
    coreThesis: "A pivot from traditional 'smokestack chasing' economic development to a model focused on economic inclusion and wealth building for historically marginalized residents.",
    complexity: "medium",
    jurisdictionalScope: "Direct Municipal + Regional Partners",
    keyObjectives: [
      "Prioritize outcomes for historically marginalized residents",
      "Increase SWaM (Small, Women-owned, Minority-owned) business participation",
      "Move residents from poverty to stability to wealth",
      "Create living-wage job opportunities",
      "Track asset accumulation, not just income"
    ],
    definition: `<p>Pillar 4 represents a pivot from traditional "smokestack chasing" economic development to a model focused on <strong>economic inclusion and wealth building</strong>.</p>
    <h4 class="font-semibold text-foreground mt-4 mb-2">Key Economic Indicators (KEIs) and Methodologies</h4>
    <p><strong>Methodological Shift:</strong> Traditional metrics focus on "jobs announced" and "capital investment." The MAP's KEIs likely prioritize outcomes for residents, specifically those historically marginalized.</p>
    <p><strong>Attribution Modeling:</strong> Isolating the City's impact from macroeconomic trends (e.g., national inflation) is difficult. The City must focus on "inputs" and "outputs" it controls:</p>
    <ul class="list-disc pl-5 space-y-2 mt-2">
      <li>Number of businesses certified as SWaM</li>
      <li>Volume of procurement dollars flowing to SWaM businesses</li>
      <li>City-facilitated job placements with living wages</li>
    </ul>
    <h4 class="font-semibold text-foreground mt-4 mb-2">Wealth Building Spectrum</h4>
    <p>The goal of moving residents "from poverty to stability to wealth" implies a <strong>longitudinal view</strong> that tracks asset accumulation rather than just income:</p>
    <ul class="list-disc pl-5 space-y-1 mt-2">
      <li>Homeownership rates</li>
      <li>Small business equity</li>
      <li>Retirement savings</li>
    </ul>`,
    operational: `<h4 class="font-semibold text-foreground mb-2">Office of Community Wealth Building (OCWB)</h4>
    <p>The OCWB is central to this pillar's execution. Key metrics needed:</p>
    <ul class="list-disc pl-5 space-y-2 mt-2">
      <li><strong>Living-Wage Placements:</strong> Number of residents placed in jobs meeting living wage threshold</li>
      <li><strong>Career Progression:</strong> Tracking wage growth over time for program participants</li>
      <li><strong>Business Development:</strong> Support for resident entrepreneurs</li>
    </ul>
    <h4 class="font-semibold text-foreground mt-4 mb-2">Living Wage Definition</h4>
    <p>The goal specifies "living-wage job opportunities." Richmond must adopt a specific definition:</p>
    <p><strong>ALICE Threshold:</strong> Asset Limited, Income Constrained, Employed—often significantly higher than the federal poverty line, accounting for local cost of housing and childcare.</p>
    <p class="mt-2">For Richmond, the ALICE threshold for a family of four is approximately <strong>$65,000-$75,000</strong>, compared to the federal poverty line of ~$30,000.</p>`,
    metrics: [
      { name: "SWaM Procurement Volume", description: "Dollars flowing to Small, Women-owned, and Minority-owned businesses", target: "30% of total procurement" },
      { name: "SWaM Certifications", description: "Number of businesses with active SWaM certification", target: "Increase annually" },
      { name: "Living-Wage Placements", description: "OCWB job placements meeting ALICE threshold", target: "> 500 annually" },
      { name: "Homeownership Rate", description: "Percentage of residents who own their homes (wealth indicator)", target: "Increase in target areas" },
      { name: "Small Business Survival Rate", description: "Percentage of new businesses surviving 3+ years", target: "> 70%" }
    ],
    dataAssets: {
      existing: [
        { name: "SWaM Certification Database", description: "Registry of certified small, women-owned, and minority businesses", source: "Procurement", quality: "high" },
        { name: "OCWB Program Data", description: "Job placement and training program outcomes", source: "OCWB", quality: "medium" },
        { name: "Business License Data", description: "New business registrations and renewals. Often aggregated and lacks 'minority-owned' (SWaM) flags publicly.", source: "Finance / Open Data Portal", quality: "low" }
      ],
      missing: [
        { name: "Longitudinal Wealth Tracking", description: "Multi-year tracking of asset accumulation for program participants", source: "Proposed: OCWB + financial institutions" },
        { name: "ALICE-Aligned Wage Data", description: "Job placements categorized by ALICE threshold attainment", source: "Proposed: OCWB enhancement" },
        { name: "Procurement Attribution", description: "Tracking how SWaM dollars flow through local economy", source: "Proposed: Economic modeling" },
        { name: "SWaM Participation Flags", description: "Business license data lacks public 'minority-owned' flags, making Goal D (SWaM participation) difficult to track on ODP.", source: "Priority Gap" }
      ]
    },
    dependencies: [
      { pillarId: "pillar-1", label: "Pillar 1: City Hall", description: "Procurement efficiency affects SWaM business relationships" },
      { pillarId: "pillar-3", label: "Pillar 3: Families", description: "Education and youth programs feed workforce pipeline" },
      { pillarId: "pillar-2", label: "Pillar 2: Neighborhoods", description: "Housing affordability affects worker retention and business locations" }
    ],
    risks: [
      { title: "Macroeconomic Volatility", description: "National economic conditions may overwhelm local policy impacts" },
      { title: "SWaM Capacity Constraints", description: "Small businesses may lack capacity to absorb increased procurement volume" },
      { title: "Living Wage Political Resistance", description: "ALICE-based wage requirements may face business community opposition" }
    ],
    recommendations: [
      { title: "Adopt ALICE Threshold", description: "Formally adopt ALICE standard as Richmond's living wage definition for City programs", priority: "quick-win" },
      { title: "SWaM Capacity Building", description: "Create mentorship and capacity-building programs for SWaM businesses to handle larger contracts", priority: "long-term" },
      { title: "Wealth Dashboard", description: "Develop public dashboard tracking wealth-building metrics beyond income", priority: "long-term" }
    ],
    partners: [
      {
        name: "Greater Richmond Partnership (GRP)",
        role: "Regional economic development organization.",
        dataAsset: "Business attraction pipeline and regional labor market analysis"
      },
      {
        name: "ChamberRVA",
        role: "Business advocacy organization providing external validation for Pillar 4.",
        dataAsset: "'Upward Mobility' Dashboard—tracks workforce readiness, skills gaps, and regional alignment",
        sourceUrl: "https://planrva.org/planrvas-data-team-calculates-regions-key-metrics/"
      }
    ]
  },

  // ============================================================
  // PILLAR 5: THRIVING AND INCLUSIVE COMMUNITIES
  // ============================================================
  {
    pillarNumber: 5,
    name: "Thriving & Inclusive Communities",
    coreThesis: "Measuring equity requires tracking both outcomes (life expectancy gaps) and process (representation, investment distribution), with special attention to the qualitative experience of marginalized communities.",
    complexity: "high",
    jurisdictionalScope: "Direct Municipal Policy + Community Partnership",
    keyObjectives: [
      "Redress long-standing racial inequities through process and outcome equity",
      "Protect reproductive and LGBTQ+ rights",
      "Measure community sentiment and psychological safety",
      "Ensure equitable distribution of capital investments",
      "Track representation on boards and commissions"
    ],
    definition: `<p>This pillar focuses on the <strong>qualitative experience</strong> of the city—belonging, safety, and civil rights. It moves beyond traditional metrics to address how residents <em>feel</em> about their place in the community.</p>
    <h4 class="font-semibold text-foreground mt-4 mb-2">Measuring Inequity and Rights</h4>
    <p><strong>Process Equity:</strong> Redressing "long-standing racial inequities" is not just about outcomes (e.g., life expectancy gaps) but about <em>process</em>:</p>
    <ul class="list-disc pl-5 space-y-2 mt-2">
      <li><strong>Representation:</strong> Diversity on City boards and commissions by race and geography</li>
      <li><strong>Investment Distribution:</strong> Equitable allocation of Capital Improvement Plan (CIP) projects</li>
      <li><strong>Decision-Making Access:</strong> Who participates in public processes</li>
    </ul>
    <h4 class="font-semibold text-foreground mt-4 mb-2">Reproductive and LGBTQ+ Rights</h4>
    <p><strong>Qualitative Indicators:</strong> Measuring "feeling safe and supported" requires community sentiment surveys. Crime statistics alone do not capture the <em>psychological safety</em> of marginalized groups.</p>`,
    operational: `<h4 class="font-semibold text-foreground mb-2">Health as Rights Proxy</h4>
    <p>Reproductive freedom is linked to health outcomes. The City must track maternal health disparities as a proxy for accessibility and quality of reproductive care:</p>
    <ul class="list-disc pl-5 space-y-2 mt-2">
      <li><strong>Black/White Preterm Birth Gap:</strong> Currently graded "F" for Richmond</li>
      <li><strong>Maternal Mortality Disparities:</strong> Significant racial gaps persist</li>
      <li><strong>Access to Care:</strong> Geographic availability of reproductive health services</li>
    </ul>
    <h4 class="font-semibold text-foreground mt-4 mb-2">CIP Equity Analysis</h4>
    <p>Every Capital Improvement Plan project should be analyzed for:</p>
    <ul class="list-disc pl-5 space-y-1 mt-2">
      <li>Geographic distribution relative to need</li>
      <li>Historical investment patterns (addressing past underinvestment)</li>
      <li>Community input and co-design</li>
    </ul>`,
    metrics: [
      { name: "Board/Commission Representation", description: "Demographic diversity on appointed bodies by race and geography", target: "Reflect city demographics" },
      { name: "CIP Equity Score", description: "Distribution of capital investment relative to neighborhood need", target: "Progressive allocation" },
      { name: "Community Sentiment Survey", description: "Perception of safety and belonging among marginalized groups", target: "Biennial survey" },
      { name: "Maternal Health Disparity", description: "Black/White gap in preterm births and maternal mortality", target: "Reduce gap by 50%" },
      { name: "Hate Crime Reports", description: "Tracking of bias-motivated incidents (recognizing underreporting)", target: "Reduce + increase reporting" }
    ],
    dataAssets: {
      existing: [
        { name: "Board Appointment Records", description: "Demographics of appointed officials", source: "City Clerk", quality: "medium" },
        { name: "CIP Project Database", description: "Capital project locations and budgets", source: "Budget Office", quality: "high" },
        { name: "VDH Health Data", description: "Maternal and child health statistics", source: "Virginia Dept of Health", quality: "high" }
      ],
      missing: [
        { name: "Community Sentiment Survey", description: "Regular assessment of psychological safety and belonging", source: "Proposed: Community partnership" },
        { name: "CIP Equity Analysis Tool", description: "Systematic scoring of projects for equity impact", source: "Proposed: Budget Office" },
        { name: "Service Access Mapping", description: "Geographic analysis of reproductive and LGBTQ+ health services", source: "Proposed: VDH + community orgs" },
        { name: "Community Health Metrics (Disaggregated)", description: "State data on maternal health, opioid overdoses, and life expectancy is held by VDH but often aggregated to 'Health District' level. Must be disaggregated to census tract or neighborhood level for MAP equity goals.", source: "Priority Gap" }
      ]
    },
    dependencies: [
      { pillarId: "pillar-6", label: "Pillar 6: Reconciliation", description: "Historical truth-telling provides foundation for equity work" },
      { pillarId: "pillar-2", label: "Pillar 2: Neighborhoods", description: "Housing patterns reflect and reinforce inclusion/exclusion" },
      { pillarId: "pillar-3", label: "Pillar 3: Families", description: "Family services must be inclusive of all family structures" }
    ],
    risks: [
      { title: "Sentiment Survey Validity", description: "Marginalized communities may distrust government surveys, leading to non-response bias" },
      { title: "Political Polarization", description: "Reproductive and LGBTQ+ rights positions may face organized opposition" },
      { title: "Health Data Limitations", description: "Small population sizes may limit statistical reliability of disparity analysis" }
    ],
    recommendations: [
      { title: "Community-Led Surveying", description: "Partner with trusted community organizations to conduct sentiment surveys", priority: "quick-win" },
      { title: "CIP Equity Scoring", description: "Implement equity score for all proposed capital projects before approval", priority: "quick-win" },
      { title: "Health Equity Task Force", description: "Convene cross-sector group to address maternal health disparities", priority: "long-term" }
    ],
    partners: [
      {
        name: "Richmond City Health District (RCHD)",
        role: "Public health authority (state agency embedded in the city).",
        dataAsset: "Health Equity Metrics—Maternity Navigation program data (clients served, outcomes)",
        sourceUrl: "https://www.vdh.virginia.gov/richmond-city/healthy-childbirth-and-infancy/"
      },
      {
        name: "Virginia Department of Health (VDH)",
        role: "State health agency providing vital statistics and population health data.",
        dataAsset: "Maternal and child health statistics, pregnancy-associated deaths data, and community health assessments",
        sourceUrl: "https://www.vdh.virginia.gov/data/maternal-child-health/pregnancy-associated-deaths/"
      }
    ]
  },

  // ============================================================
  // PILLAR 6: THRIVING AND SUSTAINABLE BUILT ENVIRONMENT
  // ============================================================
  {
    pillarNumber: 6,
    name: "Thriving Environment & Infrastructure",
    coreThesis: "Operationalizing RVAgreen 2050 requires integrating a climate lens into every budget and procurement decision while addressing environmental justice through targeted investment in historically neglected neighborhoods.",
    complexity: "high",
    jurisdictionalScope: "Direct Municipal + GRTC, State DOT, Utilities",
    keyObjectives: [
      "Achieve net zero emissions by 2050 per RVAgreen 2050",
      "Integrate climate lens into CIP and procurement",
      "Address Urban Heat Island effect in formerly redlined areas",
      "Increase tree canopy coverage equitably",
      "Ensure 10-minute walk access to quality green space"
    ],
    definition: `<p>This pillar operationalizes the <strong>RVAgreen 2050 climate action plan</strong>, integrating environmental goals into daily city operations rather than treating sustainability as a separate initiative.</p>
    <h4 class="font-semibold text-foreground mt-4 mb-2">RVAgreen 2050 Integration</h4>
    <p><strong>Accountability Loops:</strong> The goal is net zero emissions by 2050. This requires integrating a "climate lens" into the budget and procurement process:</p>
    <ul class="list-disc pl-5 space-y-2 mt-2">
      <li>Every CIP project scored on carbon impact</li>
      <li>Procurement preferences for low-carbon vendors</li>
      <li>Fleet electrification timeline</li>
    </ul>
    <h4 class="font-semibold text-foreground mt-4 mb-2">Spatial Justice</h4>
    <p>The pillar explicitly mentions "greening neglected neighborhoods." This directly addresses the <strong>Urban Heat Island (UHI) effect</strong>, which disproportionately affects formerly redlined neighborhoods where tree canopy was systematically removed.</p>`,
    operational: `<h4 class="font-semibold text-foreground mb-2">Key Environmental Metrics</h4>
    <table class="w-full text-sm mt-2 border-collapse">
      <thead><tr class="border-b"><th class="text-left py-2">Metric</th><th class="text-left py-2">Frequency</th><th class="text-left py-2">Notes</th></tr></thead>
      <tbody>
        <tr class="border-b"><td class="py-2">Tree Plantings</td><td class="py-2">Annual</td><td class="py-2">By census tract for equity tracking</td></tr>
        <tr class="border-b"><td class="py-2">Bike Lane Miles</td><td class="py-2">Annual</td><td class="py-2">Network connectivity matters</td></tr>
        <tr class="border-b"><td class="py-2">Tree Canopy %</td><td class="py-2">2-3 years</td><td class="py-2">By census tract</td></tr>
        <tr class="border-b"><td class="py-2">GHG Emissions</td><td class="py-2">2-3 years</td><td class="py-2">Carbon inventory</td></tr>
        <tr><td class="py-2">Green Space Access</td><td class="py-2">Annual</td><td class="py-2">10-minute walk (Richmond 300 goal)</td></tr>
      </tbody>
    </table>
    <h4 class="font-semibold text-foreground mt-4 mb-2">Richmond 300 Connection</h4>
    <p>The goal of "quality green space within a 10-minute walk" comes directly from Richmond 300. This requires both new park creation and improvements to existing facilities to meet the "quality" standard.</p>`,
    metrics: [
      { name: "GHG Emissions", description: "Citywide greenhouse gas inventory tracking progress to net zero", target: "Net zero by 2050" },
      { name: "Tree Canopy Coverage", description: "Percentage by census tract, with equity weighting", target: "40% citywide, equitable distribution" },
      { name: "10-Minute Walk Access", description: "Residents within 10-minute walk of quality green space", target: "100% coverage" },
      { name: "CIP Carbon Score", description: "Average carbon impact score of capital projects", target: "Negative (net reduction)" },
      { name: "Fleet Electrification", description: "Percentage of city fleet that is electric/hybrid", target: "50% by 2030" }
    ],
    dataAssets: {
      existing: [
        { name: "GHG Inventory", description: "Periodic citywide carbon emissions estimate", source: "Office of Sustainability", quality: "medium" },
        { name: "Tree Canopy Analysis", description: "Satellite-derived canopy coverage maps", source: "GIS/Sustainability", quality: "high" },
        { name: "Parks Inventory", description: "Location and amenities of city parks", source: "Parks & Recreation", quality: "high" },
        { name: "GIS Layers (Floods, Parcels)", description: "Strong GIS integration for land use and flood zones (Shockoe). Useful for climate vulnerability mapping.", source: "Open Data Portal / GIS", quality: "high" }
      ],
      missing: [
        { name: "CIP Carbon Scoring", description: "Systematic carbon impact assessment for all capital projects", source: "Proposed: Budget Office + Sustainability" },
        { name: "Real-time Air Quality", description: "Neighborhood-level air quality monitoring network", source: "Proposed: Sensor network" },
        { name: "Green Space Quality Index", description: "Assessment of park condition, not just existence", source: "Proposed: Parks assessment tool" },
        { name: "Community Health Metrics", description: "Data on maternal health, opioid overdoses, life expectancy held by VDH. Often aggregated to Health District level—must be disaggregated for MAP equity goals.", source: "Priority Gap - VDH" }
      ]
    },
    dependencies: [
      { pillarId: "pillar-1", label: "Pillar 1: City Hall", description: "Sustainability integration requires capacity in Budget and Procurement offices" },
      { pillarId: "pillar-2", label: "Pillar 2: Neighborhoods", description: "Green infrastructure investment should align with housing development" },
      { pillarId: "pillar-6", label: "Pillar 6: Reconciliation", description: "Environmental justice must address historical patterns of environmental racism" }
    ],
    risks: [
      { title: "Capital Cost Premium", description: "Sustainable infrastructure often has higher upfront costs despite lifecycle savings" },
      { title: "Measurement Complexity", description: "Carbon accounting for diverse projects requires specialized expertise" },
      { title: "Equity vs. Speed Tradeoff", description: "Equity-focused planting may be slower than easier high-canopy area maintenance" }
    ],
    recommendations: [
      { title: "CIP Carbon Scoring", description: "Require carbon impact assessment for all capital projects over $1M", priority: "quick-win" },
      { title: "Tree Equity Map", description: "Create public dashboard showing canopy by neighborhood with investment priorities", priority: "quick-win" },
      { title: "Fleet Electrification Plan", description: "Develop comprehensive timeline for vehicle replacement with EV alternatives", priority: "long-term" }
    ],
    partners: [
      {
        name: "RVA Clean City Commission & Science Museum of Virginia",
        role: "Environmental advocacy and research.",
        dataAsset: "Urban Heat Island Maps—hyperlocal temperature data used to target tree plantings",
        sourceUrl: "https://www.epa.gov/system/files/documents/2023-12/rva-green-2050-climate-equity-action-plan-2030.pdf"
      }
    ]
  },

  // ============================================================
  // PILLAR 7: A CITY THAT TELLS ITS STORIES
  // ============================================================
  {
    pillarNumber: 7,
    name: "A City That Tells Its Stories",
    coreThesis: "Unique to Richmond: positioning historical reckoning as a core municipal function comparable to public works or safety, with the Shockoe Project as the flagship initiative.",
    complexity: "high",
    jurisdictionalScope: "Direct Municipal Policy + National Partners",
    keyObjectives: [
      "Develop the $265M Shockoe heritage campus",
      "Tell the truth about Richmond's role in slavery",
      "Engage descendant communities authentically",
      "Achieve national recognition as a model",
      "Integrate narratives into RPS curriculum"
    ],
    definition: `<p>This pillar is <strong>unique to Richmond</strong>, positioning historical reckoning as a core municipal function comparable to public works or safety. No other major city has elevated truth-telling to a pillar of its governance framework.</p>
    <h4 class="font-semibold text-foreground mt-4 mb-2">The Shockoe Project</h4>
    <p>The development of the <strong>$265 million heritage campus</strong> is the flagship initiative. This creates a measurable accountability framework:</p>
    <ul class="list-disc pl-5 space-y-2 mt-2">
      <li><strong>Fundraising Milestones:</strong> $58M already allocated; remaining capital campaign</li>
      <li><strong>Planning Approvals:</strong> Planning Commission sign-offs and zoning</li>
      <li><strong>Construction Timeline:</strong> Phases and completion targets</li>
    </ul>
    <h4 class="font-semibold text-foreground mt-4 mb-2">Qualitative Success Measures</h4>
    <p>"Telling the truth" is measured by the <em>integrity of the process</em>:</p>
    <ul class="list-disc pl-5 space-y-1 mt-2">
      <li>Community engagement sessions and participation</li>
      <li>Endorsement by descendant communities</li>
      <li>Peer recognition (e.g., "national model" status via museum accreditations)</li>
    </ul>`,
    operational: `<h4 class="font-semibold text-foreground mb-2">Truth and Reconciliation Framework</h4>
    <p>This pillar draws on global Truth and Reconciliation frameworks. Success indicators include:</p>
    <ul class="list-disc pl-5 space-y-2 mt-2">
      <li><strong>Curriculum Integration:</strong> Incorporation of these narratives into the RPS curriculum (Pillar 3 connection)</li>
      <li><strong>Visitor Demographics:</strong> Ensuring the site serves residents, not just tourists</li>
      <li><strong>Economic Benefit:</strong> Local business and employment impact from heritage tourism</li>
    </ul>
    <h4 class="font-semibold text-foreground mt-4 mb-2">National Recognition Pathway</h4>
    <p>Achieving "national model" status requires:</p>
    <ul class="list-disc pl-5 space-y-1 mt-2">
      <li>American Alliance of Museums (AAM) accreditation</li>
      <li>Academic partnerships for scholarly validation</li>
      <li>Peer city consultations (other cities seeking to replicate)</li>
      <li>National media recognition</li>
    </ul>`,
    metrics: [
      { name: "Fundraising Progress", description: "Capital campaign status toward $265M goal", target: "$265M total" },
      { name: "Planning Milestones", description: "Regulatory approvals and construction phases", target: "Per project timeline" },
      { name: "Community Engagement", description: "Participation in planning process, especially descendant communities", target: "Meaningful representation" },
      { name: "Curriculum Integration", description: "RPS adoption of developed historical content", target: "All grades, age-appropriate" },
      { name: "Visitor Demographics", description: "Balance of local residents vs. tourists", target: "> 40% local" }
    ],
    dataAssets: {
      existing: [
        { name: "Capital Campaign Tracking", description: "Fundraising progress and donor database", source: "Project Office", quality: "high" },
        { name: "Community Engagement Records", description: "Meeting attendance and feedback", source: "Project Office", quality: "medium" }
      ],
      missing: [
        { name: "Descendant Community Registry", description: "Systematic tracking of descendant community input and endorsement", source: "Proposed: Community partnership" },
        { name: "Curriculum Adoption Tracking", description: "RPS integration of historical content by grade level", source: "Proposed: RPS partnership" },
        { name: "Economic Impact Model", description: "Tracking of heritage tourism economic benefits to local businesses", source: "Proposed: Economic Development" },
        { name: "Oral Histories / Qualitative Data", description: "Qualitative data (oral histories, archaeological findings) is not suitable for Socrata formats and requires alternative archival approaches.", source: "Priority Gap - Qualitative" }
      ]
    },
    dependencies: [
      { pillarId: "pillar-3", label: "Pillar 3: Families", description: "Curriculum integration requires RPS partnership" },
      { pillarId: "pillar-4", label: "Pillar 4: Economy", description: "Heritage tourism contributes to economic development" },
      { pillarId: "pillar-5", label: "Pillar 5: Inclusion", description: "Truth-telling supports broader equity and inclusion goals" }
    ],
    risks: [
      { title: "Fundraising Shortfall", description: "Large capital campaign in challenging philanthropic environment" },
      { title: "Descendant Community Division", description: "Diverse perspectives within descendant communities on appropriate commemoration" },
      { title: "Political Opposition", description: "Historical truth-telling may face organized political resistance" }
    ],
    recommendations: [
      { title: "Descendant Community Council", description: "Formalize advisory structure with descendant community representation", priority: "quick-win" },
      { title: "RPS Curriculum Partnership", description: "Begin curriculum development in parallel with site construction", priority: "quick-win" },
      { title: "National Network Building", description: "Connect with peer cities and institutions for mutual learning and recognition", priority: "long-term" }
    ],
    partners: [
      {
        name: "Shockoe Institute & National Slavery Museum Foundation",
        role: "Stewards of the 'Stories' pillar.",
        dataAsset: "Qualitative & Historical Data—oral histories, archaeological findings, and descendant community registries that constitute the 'truth' in Pillar 7",
        sourceUrl: "https://theshockoeproject.com/"
      }
    ]
  }
];
