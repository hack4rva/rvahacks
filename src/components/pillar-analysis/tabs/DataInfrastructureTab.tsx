/**
 * Data Infrastructure & Recommendations Tab
 * Synthesizes cross-cutting insights and modernization roadmap
 */

import { 
  Database,
  Layers,
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
  Milestone,
  HelpCircle,
  BookOpen
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

// Open Data Portal inventory data
const odpInventory = [
  {
    pillar: "Pillar 1: City Hall",
    datasets: [
      { name: "City Budget - General Fund", quality: "high", notes: "10+ years of history. Essential for tracking fiscal inputs. Updated annually." },
      { name: "City Contracts", quality: "medium", notes: "Lists active contracts but lacks compliance/performance data. Updated monthly." },
      { name: "Payment Register", quality: "high", notes: "Granular transparency on vendor payments. Essential for tracking 'timely payments' (Goal A)." }
    ]
  },
  {
    pillar: "Pillar 2: Neighborhoods",
    datasets: [
      { name: "Real Estate Sales / Assessments", quality: "high", notes: "Parcel-level granularity. Excellent for tracking gentrification trends and property value shifts." },
      { name: "Building Permits (Implied)", quality: "medium", notes: "Usually available via Socrata/GIS. Leading indicator for 'New Housing Units' (Goal A)." },
      { name: "Eviction Data", quality: "gap", notes: "Critical Gap: The City does not publish eviction filings. This data exists in court records only." }
    ]
  },
  {
    pillar: "Pillar 3: Families",
    datasets: [
      { name: "RPS Academic Data", quality: "gap", notes: "No direct RPS academic data is hosted on the City ODP." }
    ]
  },
  {
    pillar: "Pillar 4: Economy",
    datasets: [
      { name: "Business Licenses (Limited)", quality: "low", notes: "Often aggregated. Lacks 'minority-owned' (SWaM) flags publicly, making Goal D difficult to track." }
    ]
  },
  {
    pillar: "Pillar 6: Environment",
    datasets: [
      { name: "GIS Layers (Floods, Parcels)", quality: "high", notes: "Strong GIS integration for land use and flood zones (Shockoe)." }
    ]
  },
  {
    pillar: "Pillar 7: Stories",
    datasets: [
      { name: "Oral Histories / Qualitative", quality: "gap", notes: "Qualitative data (oral histories) is not suitable for Socrata formats." }
    ]
  }
];

const priorityDatasets = [
  {
    name: "Employee Vacancy & Turnover Rates",
    goals: "Goal A-A, A-B",
    status: "Unavailable Publicly",
    statusType: "gap",
    description: "While budget documents list authorized FTEs, the real-time vacancy rate is not published as an open dataset.",
    importance: "This is the 'lead domino' for Pillar 1. Without it, the public cannot hold the administration accountable for 'getting things done.'",
    proxy: "Overtime expenditures in the City Budget (high overtime often signals understaffing)."
  },
  {
    name: "Housing Unit Production & Affordability",
    goals: "Goal B-A, B-B",
    status: "Fragmented",
    statusType: "warning",
    description: "The City tracks permits, but 'affordability' (AMI levels) is often tracked separately by nonprofits like Better Housing Coalition or PlanRVA.",
    importance: "A consolidated 'Housing Pipeline Dashboard' that merges permit data with AMI restrictions from subsidy contracts."
  },
  {
    name: "Eviction Filings",
    goals: "Goal B-B",
    status: "External",
    statusType: "warning",
    description: "This data resides with the courts. It is scraped and analyzed by third parties like Housing Opportunities Made Equal (HOME) and the RVA Eviction Lab.",
    importance: "The City needs to formalize a feed of this data to track 'housing stability' in real-time, rather than relying on annual reports."
  },
  {
    name: "RPS School Performance",
    goals: "Goal C-A",
    status: "State-Held",
    statusType: "warning",
    description: "The Virginia Department of Education (VDOE) publishes SOL scores, graduation rates, and chronic absenteeism data.",
    importance: "Integrate VDOE API feeds directly into the MAP dashboard to create a 'single pane of glass' for residents."
  },
  {
    name: "Community Health Metrics",
    goals: "Pillar 5",
    status: "VDH Dashboards",
    statusType: "warning",
    description: "Data on maternal health, opioid overdoses, and life expectancy is held by the Virginia Department of Health.",
    importance: "State data is often aggregated to the 'Health District' level (Richmond City + Henrico County). Must be disaggregated to census tract or neighborhood level for MAP equity goals."
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
        dataAsset: "Regional housing supply data, cost-burden analysis, neighborhood market classification"
      },
      {
        name: "Housing Opportunities Made Equal (HOME)",
        role: "Primary watchdog for fair housing. Holds data on fair housing complaints and eviction defense cases.",
        dataAsset: "Qualitative and quantitative data on discrimination patterns that City systems (311) will never capture"
      },
      {
        name: "Better Housing Coalition (BHC)",
        role: "Nonprofit developer with visibility into affordable housing pipeline.",
        dataAsset: "Pipeline data—knows what affordable units are in financing/development before they hit the City's permitting system"
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
        dataAsset: "Out-of-School Time Participation & Quality—tracks 'Tier 2 & 3' supports with granular data on attendance, behavior, and coursework (ABC) for specific at-risk cohorts"
      },
      {
        name: "Richmond Public Schools (RPS)",
        role: "Primary educator. A robust MOU is needed to link academic data with City human services data.",
        dataAsset: "Student-level academic and attendance data"
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
        dataAsset: "Business attraction pipeline and regional labor market analysis"
      },
      {
        name: "ChamberRVA",
        role: "Business advocacy organization providing external validation for Pillar 4.",
        dataAsset: "'Upward Mobility' Dashboard—tracks workforce readiness, skills gaps, and regional alignment"
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
        dataAsset: "Health Equity Metrics—Maternity Navigation program data (clients served, outcomes) for Pillar 5"
      },
      {
        name: "RVA Clean City Commission & Science Museum of Virginia",
        role: "Environmental advocacy and research.",
        dataAsset: "Urban Heat Island Maps—hyperlocal temperature data used to target tree plantings for Pillar 6"
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
        dataAsset: "Qualitative & Historical Data—oral histories, archaeological findings, and descendant community registries that constitute the 'truth' in Pillar 7"
      }
    ]
  }
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

      <Accordion type="multiple" defaultValue={["odp-inventory", "priority-datasets", "current-state"]} className="space-y-4">
        
        {/* Open Data Portal Inventory - NEW SECTION */}
        <AccordionItem value="odp-inventory" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <FileSpreadsheet className="w-5 h-5 text-primary" />
              <span className="text-xl font-semibold text-foreground">Open Data Portal Inventory</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-6 text-muted-foreground">
              <p>
                A comprehensive audit of Richmond's data landscape reveals a dichotomy: the city possesses a robust technical infrastructure for "open data" (Socrata-based), yet the specific <strong className="text-foreground">"human-centric" datasets</strong> required to track the MAP's equity and outcome goals are often siloed, fragmented, or non-existent in the public domain.
              </p>

              <div className="flex items-center gap-2 text-sm">
                <ExternalLink className="w-4 h-4" />
                <a 
                  href="https://data.richmondgov.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  City of Richmond Open Data Portal
                </a>
              </div>

              {/* ODP Inventory by Pillar */}
              <div className="space-y-4 mt-4">
                {odpInventory.map((pillar, idx) => (
                  <Card key={idx} className="bg-muted/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-semibold">{pillar.pillar}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {pillar.datasets.map((dataset, dIdx) => (
                          <div key={dIdx} className="flex flex-col sm:flex-row sm:items-start gap-2 p-3 bg-background rounded-lg border border-border">
                            <div className="flex items-center gap-2 min-w-[200px]">
                              {dataset.quality === "gap" ? (
                                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                              ) : (
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                              )}
                              <span className="font-medium text-foreground text-sm">{dataset.name}</span>
                            </div>
                            <div className="flex-1 flex flex-col sm:flex-row sm:items-start gap-2">
                              {getQualityBadge(dataset.quality)}
                              <span className="text-sm text-muted-foreground">{dataset.notes}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

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
                              <div>
                                <span className="text-xs font-semibold text-primary uppercase">Data Asset</span>
                                <p className="text-sm text-foreground">{partner.dataAsset}</p>
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

        {/* Implementation Roadmap & Deliverables */}
        <AccordionItem value="implementation-roadmap" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <Milestone className="w-5 h-5 text-primary" />
              <span className="text-xl font-semibold text-foreground">Implementation Roadmap</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-6 text-muted-foreground">
              <p>
                This roadmap outlines the phases for maturing the MAP from a document into a <strong className="text-foreground">data-driven operating system</strong>.
              </p>

              <div className="space-y-6">
                {implementationPhases.map((phase, idx) => (
                  <Card key={idx} className={`border-l-4 ${phase.color}`}>
                    <CardHeader className="pb-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg">{phase.phase}</CardTitle>
                          <p className="text-sm text-muted-foreground italic">"{phase.subtitle}"</p>
                        </div>
                        <Badge variant="secondary">{phase.timeline}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        {phase.deliverables.map((deliverable, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium text-foreground">{deliverable.name}</span>
                              <p className="text-sm text-muted-foreground mt-1">{deliverable.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {phase.action && (
                        <div className="flex items-start gap-2 p-3 bg-primary/5 rounded border-l-2 border-primary">
                          <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-xs font-semibold text-primary uppercase">Action</span>
                            <p className="text-sm text-foreground">{phase.action}</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Guiding Research Questions */}
        <AccordionItem value="guiding-questions" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="text-xl font-semibold text-foreground">Guiding Research Questions</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-6 text-muted-foreground">
              <p>
                To ensure the MAP remains a living framework, the administration must continually interrogate the data with these critical questions:
              </p>

              <div className="space-y-4">
                {guidingQuestions.map((q, idx) => (
                  <Card key={idx} className="bg-muted/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Badge variant="outline" className="text-primary border-primary">{q.title}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="font-semibold text-foreground text-lg italic">"{q.question}"</p>
                      <p className="text-sm">
                        <strong className="text-muted-foreground">Context:</strong> {q.context}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Conclusion */}
        <AccordionItem value="conclusion" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-xl font-semibold text-foreground">Conclusion</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                The Mayoral Action Plan represents a sophisticated attempt to impose <strong className="text-foreground">order, values, and accountability</strong> onto the complex organism of Richmond city government. Its seven-pillar structure is sound, correctly identifying that external success (Neighborhoods, Families, Economy) is contingent upon internal administrative health (City Hall).
              </p>

              <Card className="border-amber-300 dark:border-amber-700 bg-amber-50/50 dark:bg-amber-950/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-500" />
                    The Critical Dependency
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    The vision of a "Thriving Richmond" faces a critical dependency: <strong className="text-foreground">Data</strong>. The current data ecosystem is transparent in form (open budget, contracts) but lacks the <em>connective intelligence</em> required to solve wicked problems like intergenerational poverty or maternal health disparities.
                  </p>
                </CardContent>
              </Card>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-foreground mb-3">Immediate Priority for the Avula Administration</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Close the "Tier 1" data gaps—specifically regarding <strong className="text-foreground">workforce vacancies</strong> and <strong className="text-foreground">service level performance</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Formalize data-sharing partnerships with the institutions (RPS, VDH, Courts) that hold the keys to the city's social health</span>
                  </li>
                </ul>
              </div>

              <InsightCallout type="insight" title="The Path Forward">
                By treating data not as a byproduct of government but as a <strong>strategic asset</strong>, the MAP can evolve from a static PDF into a dynamic operating system, driving Richmond toward a future where "thriving" is not just a slogan, but a <em>measurable reality for every resident</em>.
              </InsightCallout>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
