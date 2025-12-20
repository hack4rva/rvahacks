/**
 * Data Infrastructure & Recommendations Tab
 * Synthesizes cross-cutting insights and modernization roadmap
 */

import { 
  Database,
  Map,
  Brain,
  DollarSign,
  Clock,
  CheckCircle2,
  ArrowRight,
  FileSpreadsheet,
  AlertCircle,
  ExternalLink,
  MapPin,
  Handshake,
  Home,
  GraduationCap,
  Building,
  HeartPulse,
  Landmark,
  GitBranch,
  Layers
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InsightCallout } from "../InsightCallout";

// Sources and references
const sources = {
  mapPdf: "https://rva.gov/sites/default/files/2025-10/2025-MAP-Oct15_F.pdf",
  mapLaunch: "https://rva.gov/press-releases-and-announcements/news/mayor-danny-avula-launches-mayoral-action-plan-map",
  mapPillars: "https://www.rva.gov/mayors-office/pillars",
  cityThatServes: "https://rva.gov/mayors-office/city-serves",
  richmond300: "https://www.rva.gov/economic-development/richmond-300",
  richmond300Guide: "https://rva.gov/sites/default/files/2025-03/R300_Amended_RRHA_lowres_20250321.pdf",
  masterPlan: "https://www.rva.gov/planning-development-review/master-plan",
  homeEviction: "https://homeofva.org/wp-content/uploads/2020/04/EvictionCrisis_RVA_Booklet_1_24_20.pdf",
  rpsGraduation: "https://citizenportal.ai/articles/6498150/Virginia/Richmond-Public-Schools-graduation-rate-rises-to-801-district-outlines-targeted-strategies-as-SOL-scores-climb",
  nextUpRva: "https://nextuprva.org/impact-and-reports/",
  cisRichmond: "https://cisrva.org/wp-content/uploads/2024/11/Annual-Report-2024.pdf",
  procurementMeta: "https://data.richmondgov.com/api/views/xqn7-jvv2/files/440cac8d-6393-4b64-8749-0cf00a512bd9?download=true&filename=Procurement_Metadata.pdf",
  communityWealth: "https://www.rva.gov/community-wealth-building/focus-areas",
  marchOfDimes: "https://www.marchofdimes.org/peristats/reports/virginia/report-card",
  climateVuln: "https://www.rva.gov/sites/default/files/2023-01/RVAClimateVulnerabilityRiskAssessmentSummary.pdf",
  rvaGreen2050: "https://www.epa.gov/system/files/documents/2023-12/rva-green-2050-climate-equity-action-plan-2030.pdf",
  shockoeRenderings: "https://www.richmonder.org/as-richmonds-265-million-shockoe-project-continues-to-take-shape-see-renderings-of-a-future-memorial/",
  burialGround: "https://www.rva.gov/press-releases-and-announcements/news/city-richmond-advances-plans-african-burial-ground-memorial",
  shockoeProject: "https://theshockoeproject.com/",
  openDataInfo: "https://www.rva.gov/information-technology/open-data-portal",
  openDataPortal: "https://data.richmondgov.com/",
  budgetRecap: "https://data.richmondgov.com/Well-Managed-Government/Recap/j44b-5mi4",
  gisMapping: "https://www.rva.gov/assessor-real-estate/gismapping",
  fy2025Budget: "https://rva.gov/sites/default/files/2024-06/FY25%20Proposed%20Annual%20Fiscal%20Plan%20-%20Web%20Version%20V2.pdf",
  betterHousing: "http://www.ecosproject.com/wp/wp-content/uploads/2023/05/Data2020_BuildingHomesTogether_Final_20221012.pdf",
  planRvaCeds: "https://planrva.org/wp-content/uploads/CEDS_ReportAppendices.pdf",
  planRvaMetrics: "https://planrva.org/planrvas-data-team-calculates-regions-key-metrics/",
  vdoeDashboards: "https://www.doe.virginia.gov/state-board-data-funding/data-reports/statistics-reports/interactive-data-dashboards",
  vdhMaternal: "https://www.vdh.virginia.gov/data/maternal-child-health/pregnancy-associated-deaths/",
  rchdChildbirth: "https://www.vdh.virginia.gov/richmond-city/healthy-childbirth-and-infancy/",
  jlarcChildCare: "https://jlarc.virginia.gov/pdfs/reports/Rpt579.pdf",
  rvaGov: "https://www.rva.gov/"
};

// Note: Pillar-specific ODP data is now embedded in each pillar's dataAssets in pillarAnalysis.ts

const priorityDatasets = [
  {
    name: "Employee Vacancy & Turnover Rates",
    goals: "Goal A-A, A-B",
    status: "Unavailable Publicly",
    statusType: "gap",
    description: "While budget documents list authorized FTEs, the real-time vacancy rate is not published as an open dataset.",
    importance: "This is the 'lead domino' for Pillar 1. Without it, the public cannot hold the administration accountable for 'getting things done.'",
    proxy: "Overtime expenditures in the City Budget (high overtime often signals understaffing).",
    sourceKey: "fy2025Budget"
  },
  {
    name: "Housing Unit Production & Affordability",
    goals: "Goal B-A, B-B",
    status: "Fragmented",
    statusType: "warning",
    description: "The City tracks permits, but 'affordability' (AMI levels) is often tracked separately by nonprofits like Better Housing Coalition or PlanRVA.",
    importance: "A consolidated 'Housing Pipeline Dashboard' that merges permit data with AMI restrictions from subsidy contracts.",
    sourceKey: "betterHousing"
  },
  {
    name: "Eviction Filings",
    goals: "Goal B-B",
    status: "External",
    statusType: "warning",
    description: "This data resides with the courts. It is scraped and analyzed by third parties like Housing Opportunities Made Equal (HOME) and the RVA Eviction Lab.",
    importance: "The City needs to formalize a feed of this data to track 'housing stability' in real-time, rather than relying on annual reports.",
    sourceKey: "homeEviction"
  },
  {
    name: "RPS School Performance",
    goals: "Goal C-A",
    status: "State-Held",
    statusType: "warning",
    description: "The Virginia Department of Education (VDOE) publishes SOL scores, graduation rates, and chronic absenteeism data.",
    importance: "Integrate VDOE API feeds directly into the MAP dashboard to create a 'single pane of glass' for residents.",
    sourceKey: "vdoeDashboards"
  },
  {
    name: "Community Health Metrics",
    goals: "Pillar 5",
    status: "VDH Dashboards",
    statusType: "warning",
    description: "Data on maternal health, opioid overdoses, and life expectancy is held by the Virginia Department of Health.",
    importance: "State data is often aggregated to the 'Health District' level (Richmond City + Henrico County). Must be disaggregated to census tract or neighborhood level for MAP equity goals.",
    sourceKey: "vdhMaternal"
  }
];

// Cross-Pillar Analysis Hypotheses
const crossPillarAnalyses = [
  {
    from: "Housing (Pillar 2)",
    to: "Education (Pillar 3)",
    hypothesis: "Neighborhoods with high eviction filing rates have lower SOL pass rates and higher chronic absenteeism.",
    method: "Spatial correlation of HOME eviction data (geocoded) with VDOE school performance data. This analysis can target 'stabilization services' (rental assistance) to the catchment zones of struggling schools."
  },
  {
    from: "City Hall (Pillar 1)",
    to: "Economy (Pillar 4)",
    hypothesis: "Reducing the average time for permit processing (Goal A) correlates with an increase in small business formation rates.",
    method: "Time-series analysis of Permit Duration vs. Business License Issuance lag."
  }
];

// Implementation Roadmap Phases (Detailed)
const implementationPhases = [
  {
    phase: "Phase 1: Foundation",
    timeline: "Months 1-3",
    subtitle: "Getting the Basics Right",
    color: "border-blue-500 bg-blue-50/50 dark:bg-blue-950/20",
    deliverables: [
      { name: "Internal Vacancy Dashboard", description: "Immediate visibility for the Mayor and CAO into the workforce crisis (Pillar 1)." },
      { name: "MAP Data Inventory", description: "A complete catalog of all relevant ODP datasets and external partner data assets." }
    ],
    action: "Establish a Data Governance Council involving IT, the CAO's office, and key agency heads to enforce data quality standards and unblock silos."
  },
  {
    phase: "Phase 2: Infrastructure",
    timeline: "Months 4-6",
    subtitle: "Building the Pipes",
    color: "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20",
    deliverables: [
      { name: "RVA 311 SLA Protocol", description: "Define 'on-time' for every single request type (e.g., 'Missed Trash: 24 hours,' 'Pothole: 48 hours')." },
      { name: "Partner MOUs", description: "Sign formal data-sharing agreements with RPS, RRHA, and VDH to secure flows of Tier 2 data (education, housing, health)." }
    ],
    action: "Launch the Procurement Dashboard to track spending transparency and SWaM participation in real-time."
  },
  {
    phase: "Phase 3: Analysis & Storytelling",
    timeline: "Months 7-9",
    subtitle: "Connecting the Dots",
    color: "border-purple-500 bg-purple-50/50 dark:bg-purple-950/20",
    deliverables: [
      { name: "Cross-Pillar Equity Report", description: "The first analytical product showing how housing, health, and jobs intersect spatially in Richmond." },
      { name: "Shockoe Project Milestones Update", description: "A public report on the fundraising and design progress of the memorialization campus." }
    ],
    action: "Conduct Community Data Walks to present initial findings to residents and validate the narrative."
  },
  {
    phase: "Phase 4: Public Launch",
    timeline: "Months 10-12",
    subtitle: "Accountability",
    color: "border-amber-500 bg-amber-50/50 dark:bg-amber-950/20",
    deliverables: [
      { name: "Public MAP Dashboard", description: "A user-friendly, open-data powered website tracking the 7 Pillars with simple 'Red/Yellow/Green' status indicators for the public." },
      { name: "Annual 'State of the Thriving City' Report", description: "A narrative report that combines hard metrics with the 'Stories' from Pillar 7, closing the loop on the MAP's promise." }
    ],
    action: ""
  }
];

// Guiding Research Questions
const guidingQuestions = [
  {
    title: "Implementation Realism",
    question: "Are we measuring what we control, or what we hope for?",
    context: "The City controls building permits; it hopes for private developers to build affordable housing. Metrics must distinguish between 'Output' (Permits issued) and 'Outcome' (Units built)."
  },
  {
    title: "Equity Diagnosis",
    question: "Who is burdened by our 'improvements'?",
    context: "Does aggressive code enforcement (Pillar 2, Goal D) lead to the displacement of low-income homeowners who cannot afford repairs? The data must look for these negative externalities."
  },
  {
    title: "Conceptual Clarity",
    question: "Does 'Thriving' mean the same thing in every neighborhood?",
    context: "In Stratford Hills, thriving might mean 'more bike lanes.' In Blackwell, it might mean 'no shootings.' The metrics for Pillar 5 (Inclusive Communities) must be flexible enough to respect these differing priorities."
  }
];

// Partnership Ecosystem Data
const partnershipEcosystems = [
  {
    category: "Housing & Neighborhoods",
    icon: Home,
    color: "text-red-500",
    partners: [
      {
        name: "Partnership for Housing Affordability (PHA) & PlanRVA",
        role: "Manage the Market Value Analysis (MVA)—a sophisticated tool that classifies neighborhoods by market strength (distressed, middle, strong). Superior to simple tax assessments for targeting affordable housing investments.",
        dataAsset: "Regional housing supply data, cost-burden analysis, neighborhood market classification",
        sourceKey: "planRvaCeds"
      },
      {
        name: "Housing Opportunities Made Equal (HOME)",
        role: "Primary watchdog for fair housing. Holds data on fair housing complaints and eviction defense cases.",
        dataAsset: "Qualitative and quantitative data on discrimination patterns that City systems (311) will never capture",
        sourceKey: "homeEviction"
      },
      {
        name: "Better Housing Coalition (BHC)",
        role: "Nonprofit developer with visibility into affordable housing pipeline.",
        dataAsset: "Pipeline data—knows what affordable units are in financing/development before they hit the City's permitting system",
        sourceKey: "betterHousing"
      }
    ]
  },
  {
    category: "Education & Youth",
    icon: GraduationCap,
    color: "text-purple-500",
    partners: [
      {
        name: "Communities in Schools (CIS) & NextUp RVA",
        role: "Intermediaries managing the network of out-of-school time (OST) providers.",
        dataAsset: "Out-of-School Time Participation & Quality—tracks 'Tier 2 & 3' supports with granular data on attendance, behavior, and coursework (ABC) for specific at-risk cohorts",
        sourceKey: "cisRichmond"
      },
      {
        name: "Richmond Public Schools (RPS)",
        role: "Primary educator. A robust MOU is needed to link academic data with City human services data.",
        dataAsset: "Student-level academic and attendance data",
        sourceKey: "rpsGraduation"
      }
    ]
  },
  {
    category: "Economic Development",
    icon: Building,
    color: "text-emerald-500",
    partners: [
      {
        name: "Greater Richmond Partnership (GRP)",
        role: "Regional economic development organization.",
        dataAsset: "Business attraction pipeline and regional labor market analysis",
        sourceKey: null
      },
      {
        name: "ChamberRVA",
        role: "Business advocacy organization providing external validation for Pillar 4.",
        dataAsset: "'Upward Mobility' Dashboard—tracks workforce readiness, skills gaps, and regional alignment",
        sourceKey: "planRvaMetrics"
      }
    ]
  },
  {
    category: "Health & Environment",
    icon: HeartPulse,
    color: "text-green-500",
    partners: [
      {
        name: "Richmond City Health District (RCHD)",
        role: "Public health authority (state agency embedded in the city).",
        dataAsset: "Health Equity Metrics—Maternity Navigation program data (clients served, outcomes) for Pillar 5",
        sourceKey: "rchdChildbirth"
      },
      {
        name: "RVA Clean City Commission & Science Museum of Virginia",
        role: "Environmental advocacy and research.",
        dataAsset: "Urban Heat Island Maps—hyperlocal temperature data used to target tree plantings for Pillar 6",
        sourceKey: "rvaGreen2050"
      }
    ]
  },
  {
    category: "History & Culture",
    icon: Landmark,
    color: "text-amber-500",
    partners: [
      {
        name: "Shockoe Institute & National Slavery Museum Foundation",
        role: "Stewards of the 'Stories' pillar.",
        dataAsset: "Qualitative & Historical Data—oral histories, archaeological findings, and descendant community registries that constitute the 'truth' in Pillar 7",
        sourceKey: "shockoeProject"
      }
    ]
  }
];

// All sources for the Works Cited section
const worksCited = [
  { id: 1, title: "Mayoral Action Plan 2025 (PDF)", url: sources.mapPdf },
  { id: 2, title: "Mayor Danny Avula Launches the Mayoral Action Plan (MAP)", url: sources.mapLaunch },
  { id: 3, title: "MAP Pillars | Richmond", url: sources.mapPillars },
  { id: 4, title: "A City that Serves | Richmond", url: sources.cityThatServes },
  { id: 5, title: "Richmond 300: A Guide for Growth", url: sources.richmond300 },
  { id: 6, title: "Richmond 300 Master Plan", url: sources.masterPlan },
  { id: 7, title: "Richmond's Eviction Crisis - Housing Opportunities Made Equal", url: sources.homeEviction },
  { id: 8, title: "RPS Graduation Rate Analysis", url: sources.rpsGraduation },
  { id: 9, title: "NextUp RVA Impact and Reports", url: sources.nextUpRva },
  { id: 10, title: "Communities In Schools Richmond Annual Report", url: sources.cisRichmond },
  { id: 11, title: "Community Wealth Building Focus Areas", url: sources.communityWealth },
  { id: 12, title: "March of Dimes Report Card for Virginia", url: sources.marchOfDimes },
  { id: 13, title: "RVAgreen 2050 Climate Vulnerability Assessment", url: sources.climateVuln },
  { id: 14, title: "RVA Green 2050 Climate Equity Action Plan", url: sources.rvaGreen2050 },
  { id: 15, title: "Shockoe Project Renderings", url: sources.shockoeRenderings },
  { id: 16, title: "African Burial Ground Memorial and Reconciliation Plaza", url: sources.burialGround },
  { id: 17, title: "The Shockoe Project", url: sources.shockoeProject },
  { id: 18, title: "Open Data Portal | Richmond", url: sources.openDataInfo },
  { id: 19, title: "Richmond Open Data Portal", url: sources.openDataPortal },
  { id: 20, title: "City Budget Recap - Open Data Portal", url: sources.budgetRecap },
  { id: 21, title: "GIS/Mapping | Richmond", url: sources.gisMapping },
  { id: 22, title: "FY 2025 Proposed Annual Fiscal Plan", url: sources.fy2025Budget },
  { id: 23, title: "Building Homes Together - Better Housing Coalition", url: sources.betterHousing },
  { id: 24, title: "Plan RVA CEDS Report", url: sources.planRvaCeds },
  { id: 25, title: "Plan RVA Key Metrics", url: sources.planRvaMetrics },
  { id: 26, title: "VDOE Interactive Data Dashboards", url: sources.vdoeDashboards },
  { id: 27, title: "VDH Pregnancy-Associated Deaths Data", url: sources.vdhMaternal },
  { id: 28, title: "RCHD Healthy Childbirth and Infancy", url: sources.rchdChildbirth },
  { id: 29, title: "JLARC Child Care Report", url: sources.jlarcChildCare },
  { id: 30, title: "Procurement Metadata", url: sources.procurementMeta }
];

export const DataInfrastructureTab = () => {
  const roadmapPhases = [
    {
      phase: "Phase 1: Foundation",
      timeline: "0-6 months",
      color: "border-blue-500 bg-blue-50/50 dark:bg-blue-950/20",
      items: [
        "Conduct comprehensive data asset inventory across all departments",
        "Establish data governance committee with cross-departmental representation",
        "Implement standardized data quality assessment protocols",
        "Begin pilot integration projects with high-priority datasets"
      ]
    },
    {
      phase: "Phase 2: Integration",
      timeline: "6-18 months",
      color: "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20",
      items: [
        "Deploy federated data platform with partner institution connections",
        "Establish data sharing agreements with RPS, VDH, PlanRVA",
        "Build cross-pillar analytics dashboards for leadership",
        "Implement automated data quality monitoring"
      ]
    },
    {
      phase: "Phase 3: Intelligence",
      timeline: "18-36 months",
      color: "border-purple-500 bg-purple-50/50 dark:bg-purple-950/20",
      items: [
        "Deploy predictive analytics for resource allocation",
        "Enable real-time cross-pillar impact analysis",
        "Establish public-facing transparency dashboards",
        "Implement continuous improvement feedback loops"
      ]
    }
  ];

  const getQualityBadge = (quality: string) => {
    switch (quality) {
      case "high":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">High Quality</Badge>;
      case "medium":
        return <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">Medium</Badge>;
      case "low":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">Low</Badge>;
      case "gap":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">Critical Gap</Badge>;
      default:
        return null;
    }
  };

  const getStatusBadge = (statusType: string, status: string) => {
    switch (statusType) {
      case "gap":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">{status}</Badge>;
      case "warning":
        return <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">{status}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-3">Data Infrastructure & Recommendations</h2>
        <p className="text-lg text-muted-foreground">
          Cross-cutting insights and a modernization roadmap for enabling the Mayoral Action Plan through data.
        </p>
      </div>

      <Accordion type="multiple" defaultValue={["priority-datasets", "current-state"]} className="space-y-4">
        
        {/* Note: Pillar-specific ODP data is now shown in each pillar's Data Ecosystem section */}

        {/* Priority Datasets to Locate - NEW SECTION */}
        <AccordionItem value="priority-datasets" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              <span className="text-xl font-semibold text-foreground">Priority Datasets to Locate</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-4 text-muted-foreground">
              <p>
                To fully operationalize the MAP, the following datasets must be located, validated, or constructed:
              </p>

              <div className="space-y-4">
                {priorityDatasets.map((dataset, idx) => (
                  <Card key={idx} className={dataset.statusType === "gap" ? "border-red-200 dark:border-red-800" : "border-amber-200 dark:border-amber-800"}>
                    <CardHeader className="pb-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <CardTitle className="text-base">{dataset.name}</CardTitle>
                        <Badge variant="outline" className="text-xs">{dataset.goals}</Badge>
                        {getStatusBadge(dataset.statusType, dataset.status)}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm">{dataset.description}</p>
                      <InsightCallout type={dataset.statusType === "gap" ? "warning" : "insight"} title="Why It Matters">
                        {dataset.importance}
                      </InsightCallout>
                      {dataset.proxy && (
                        <p className="text-xs text-muted-foreground mt-2">
                          <strong>Proxy Available:</strong> {dataset.proxy}
                        </p>
                      )}
                      {dataset.sourceKey && (
                        <div className="flex items-center gap-1 mt-2">
                          <ExternalLink className="w-3 h-3 text-primary" />
                          <a 
                            href={sources[dataset.sourceKey as keyof typeof sources]} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs text-primary hover:underline"
                          >
                            View Source
                          </a>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Cross-Reference Requirements - NEW SECTION */}
        <AccordionItem value="cross-reference" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-xl font-semibold text-foreground">Cross-Reference Requirements</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-4 text-muted-foreground">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="bg-muted/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Map className="w-4 h-4 text-primary" />
                      Geocoding Strategy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p>State and federal datasets often use <strong className="text-foreground">zip codes or census tracts</strong>. City operations use <strong className="text-foreground">Council Districts</strong>.</p>
                    <p className="mt-2">A robust <em>spatial crosswalk table</em> is required to map health and education outcomes to Council Districts, enabling political accountability for specific representatives.</p>
                  </CardContent>
                </Card>

                <Card className="bg-muted/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Temporal Alignment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p>The City operates on a <strong className="text-foreground">Fiscal Year (July 1 - June 30)</strong>. Federal data (Census) and some state data use <strong className="text-foreground">Calendar Years</strong>.</p>
                    <p className="mt-2">Trend analysis must explicitly account for these offsets to avoid misleading correlations.</p>
                  </CardContent>
                </Card>
              </div>

              <InsightCallout type="recommendation" title="Implementation Priority">
                Before any cross-pillar analysis can be conducted, the City must invest in building and maintaining geographic and temporal crosswalk tables as foundational data infrastructure.
              </InsightCallout>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Partnership Ecosystem - NEW SECTION */}
        <AccordionItem value="partnership-ecosystem" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <Handshake className="w-5 h-5 text-primary" />
              <span className="text-xl font-semibold text-foreground">Partnership Ecosystem</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-6 text-muted-foreground">
              <p>
                The MAP explicitly lists <strong className="text-foreground">Partnership</strong> as a core value—an acknowledgment that the City does not possess all the levers or data required to make Richmond thrive. The administration must act as a <em>convener</em>, federating data from a rich ecosystem of partners.
              </p>

              <div className="space-y-6">
                {partnershipEcosystems.map((ecosystem, idx) => {
                  const IconComponent = ecosystem.icon;
                  return (
                    <Card key={idx} className="bg-muted/20">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <IconComponent className={`w-5 h-5 ${ecosystem.color}`} />
                          {ecosystem.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {ecosystem.partners.map((partner, pIdx) => (
                          <div key={pIdx} className="p-4 bg-background rounded-lg border border-border">
                            <h5 className="font-semibold text-foreground mb-2">{partner.name}</h5>
                            <p className="text-sm mb-3">{partner.role}</p>
                            <div className="flex items-start gap-2 p-2 bg-primary/5 rounded border-l-2 border-primary">
                              <Database className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <div className="flex-1">
                                <span className="text-xs font-semibold text-primary uppercase">Data Asset</span>
                                <p className="text-sm text-foreground">{partner.dataAsset}</p>
                                {partner.sourceKey && (
                                  <a 
                                    href={sources[partner.sourceKey as keyof typeof sources]} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1"
                                  >
                                    <ExternalLink className="w-3 h-3" />
                                    View Source
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <InsightCallout type="recommendation" title="Convening Strategy">
                The City should establish formal data-sharing MOUs with each partner organization, defining update frequencies, data formats, and privacy protections. This transforms ad-hoc collaboration into systematic intelligence.
              </InsightCallout>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Current State Assessment */}
        <AccordionItem value="current-state" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-primary" />
              <span className="text-xl font-semibold text-foreground">Current State Assessment</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Richmond's current data infrastructure reflects decades of organic growth rather than strategic design. Municipal data exists across dozens of systems with varying levels of accessibility, quality, and documentation.
              </p>

              <div className="grid gap-4 md:grid-cols-2 mt-4">
                <Card className="border-amber-200 dark:border-amber-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Layers className="w-4 h-4 text-amber-500" />
                      Fragmentation Issues
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>• Siloed departmental databases with inconsistent schemas</p>
                    <p>• Legacy systems lacking modern API access</p>
                    <p>• Duplicate data entry creating version conflicts</p>
                    <p>• Manual reporting processes causing delays</p>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 dark:border-amber-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Layers className="w-4 h-4 text-amber-500" />
                      Opacity Challenges
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>• Limited data dictionaries and documentation</p>
                    <p>• Institutional knowledge concentrated in individuals</p>
                    <p>• Unclear data ownership and stewardship</p>
                    <p>• Inconsistent access controls and permissions</p>
                  </CardContent>
                </Card>
              </div>

              <InsightCallout type="insight" title="Inventory Findings">
                Preliminary assessment identifies 40+ distinct data systems across city departments, with less than 30% having documented data schemas or quality metrics.
              </InsightCallout>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* The Federated Data Model */}
        <AccordionItem value="federated-model" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <Map className="w-5 h-5 text-primary" />
              <span className="text-xl font-semibold text-foreground">The Federated Data Model</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Rather than attempting to centralize all municipal data—an approach that typically fails due to institutional resistance and technical complexity—the recommended approach is a <strong className="text-foreground">federated data model</strong> that enables cross-system querying while respecting institutional autonomy.
              </p>

              <div className="p-4 border border-border rounded-lg bg-muted/30">
                <h4 className="font-semibold text-foreground mb-3">Conceptual Framework</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-0.5">1</Badge>
                    <span><strong>Data Remains at Source:</strong> Each department/partner maintains ownership and control of their data systems</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-0.5">2</Badge>
                    <span><strong>Standardized Interfaces:</strong> Common APIs and data exchange formats enable interoperability</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-0.5">3</Badge>
                    <span><strong>Federated Query Layer:</strong> Central platform can query across systems without data duplication</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-0.5">4</Badge>
                    <span><strong>Governed Access:</strong> Role-based permissions respect privacy requirements and institutional agreements</span>
                  </div>
                </div>
              </div>

              <h4 className="font-semibold text-foreground mt-6 mb-3">Partner Institution Roles</h4>
              <div className="grid gap-3">
                {[
                  { name: "Richmond Public Schools", role: "Educational outcomes, attendance, workforce pipeline data" },
                  { name: "Virginia Dept. of Health", role: "Public health metrics, vital statistics, health equity indicators" },
                  { name: "PlanRVA", role: "Regional planning data, transportation, economic development" },
                  { name: "GRTC", role: "Transit accessibility, ridership, service coverage" },
                  { name: "State Agencies", role: "Employment, housing, social services data" }
                ].map((partner, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">{partner.name}:</span>{" "}
                      <span>{partner.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Modernization Roadmap */}
        <AccordionItem value="roadmap" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-xl font-semibold text-foreground">Modernization Roadmap</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-6">
              {roadmapPhases.map((phase, idx) => (
                <Card key={idx} className={`border-l-4 ${phase.color}`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{phase.phase}</CardTitle>
                      <Badge variant="secondary">{phase.timeline}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Contextual Intelligence Framework */}
        <AccordionItem value="intelligence" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <Brain className="w-5 h-5 text-primary" />
              <span className="text-xl font-semibold text-foreground">Contextual Intelligence Framework</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-4 text-muted-foreground">
              <p>
                The ultimate goal is not merely data integration, but <strong className="text-foreground">contextual intelligence</strong>—the ability to understand how actions in one domain ripple across the entire municipal system.
              </p>

              <InsightCallout type="insight" title="What This Enables">
                Imagine a city leader asking: "If we accelerate permit processing by 20%, what is the projected impact on affordable housing starts, construction employment, and property tax revenue over 24 months?" A contextual intelligence framework provides evidence-based answers.
              </InsightCallout>

              <div className="mt-4">
                <h4 className="font-semibold text-foreground mb-3">Success Metrics for Data Modernization</h4>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    { metric: "Data Accessibility", target: "80% of priority datasets queryable via API" },
                    { metric: "Cross-Pillar Analysis", target: "All 7 pillars connected in analytics platform" },
                    { metric: "Decision Latency", target: "Real-time dashboards for key metrics" },
                    { metric: "Partner Integration", target: "5+ institutional data sharing agreements" }
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 bg-muted/30 rounded-lg">
                      <p className="font-medium text-foreground text-sm">{item.metric}</p>
                      <p className="text-sm text-muted-foreground">{item.target}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Investment Requirements */}
        <AccordionItem value="investment" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-primary" />
              <span className="text-xl font-semibold text-foreground">Investment Requirements</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Successful implementation requires sustained investment across three dimensions:
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Technology Infrastructure</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <p>• Cloud data platform</p>
                    <p>• API gateway and integration tools</p>
                    <p>• Analytics and visualization</p>
                    <p>• Security and compliance</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Human Capital</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <p>• Chief Data Officer role</p>
                    <p>• Data engineers and analysts</p>
                    <p>• Departmental data stewards</p>
                    <p>• Training and capacity building</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Institutional Partnerships</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <p>• Legal agreements</p>
                    <p>• Joint governance structures</p>
                    <p>• Shared analytics resources</p>
                    <p>• Long-term commitment</p>
                  </CardContent>
                </Card>
              </div>

              <InsightCallout type="recommendation" title="Investment Philosophy">
                Data infrastructure investment should be viewed as foundational—like roads or utilities—not as a discretionary IT expense. The returns manifest across all seven pillars through improved decision-making, reduced redundancy, and enhanced accountability.
              </InsightCallout>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Analytical Strategy & Methodological Considerations */}
        <AccordionItem value="analytical-strategy" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <GitBranch className="w-5 h-5 text-primary" />
              <span className="text-xl font-semibold text-foreground">Analytical Strategy & Methodology</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-6 text-muted-foreground">
              <p>
                To extract actionable intelligence from this data, the City must employ specific analytical strategies that leverage the <strong className="text-foreground">intersections between pillars</strong>.
              </p>

              {/* Cross-Pillar Analysis */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Cross-Pillar Analysis</h4>
                <div className="space-y-4">
                  {crossPillarAnalyses.map((analysis, idx) => (
                    <Card key={idx} className="bg-muted/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center gap-2">
                          <span className="text-primary">{analysis.from}</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                          <span className="text-primary">{analysis.to}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase">Hypothesis</span>
                          <p className="text-sm text-foreground">{analysis.hypothesis}</p>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase">Method</span>
                          <p className="text-sm">{analysis.method}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Spatial Analysis & Disaggregation */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Spatial Analysis & Disaggregation</h4>
                <Card className="border-primary/30 bg-primary/5">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">The "One Richmond" Test</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <p>
                      A city-wide average is often a lie. A "thriving" score of <strong className="text-foreground">8/10</strong> is meaningless if the West End is a <strong className="text-green-600">10</strong> and the East End is a <strong className="text-red-600">4</strong>.
                    </p>
                    <p className="font-medium text-foreground">All MAP metrics must be disaggregated by:</p>
                    <div className="grid gap-2 mt-2">
                      <div className="flex items-center gap-2 p-2 bg-background rounded border border-border">
                        <Badge variant="outline">Race/Ethnicity</Badge>
                        <span>To track the "Inclusive Communities" pillar</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-background rounded border border-border">
                        <Badge variant="outline">Geography</Badge>
                        <span>Council Districts (political accountability) and Census Tracts (neighborhood targeting)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-4">
                  <InsightCallout type="recommendation" title="Equity Index Template">
                    The City should utilize the <strong>Climate Equity Index</strong> from RVAgreen 2050 as a template. This index overlays social vulnerability with climate risk. A broader "MAP Equity Index" could overlay health, housing, and economic factors to generate a single composite score for prioritizing CIP investments.
                  </InsightCallout>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>


        {/* Data Sources & Resources */}
        <AccordionItem value="works-cited" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <FileSpreadsheet className="w-5 h-5 text-primary" />
              <span className="text-xl font-semibold text-foreground">Data Sources & Resources</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-4 text-muted-foreground">
              <p className="text-sm">
                All sources accessed December 19, 2025. This analysis draws from official City of Richmond documents, state agency data, nonprofit reports, and regional planning resources.
              </p>

              <div className="grid gap-2">
                {worksCited.map((source) => (
                  <div key={source.id} className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                    <Badge variant="outline" className="text-xs min-w-[28px] justify-center">{source.id}</Badge>
                    <a 
                      href={source.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-foreground hover:text-primary hover:underline flex-1"
                    >
                      {source.title}
                      <ExternalLink className="w-3 h-3 inline-block ml-1 opacity-50" />
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2 text-sm">Primary Source</h4>
                <a 
                  href={sources.mapPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Mayoral Action Plan 2025 (Official PDF)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
