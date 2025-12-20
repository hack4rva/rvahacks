/**
 * Data Resources Tab
 * Hackathon-focused: data sources, partnerships, and cross-pillar analysis inspiration
 */

import { 
  Database,
  ArrowRight,
  FileSpreadsheet,
  ExternalLink,
  Handshake,
  Home,
  GraduationCap,
  Building,
  HeartPulse,
  Landmark,
  GitBranch
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-3">Data Resources</h2>
        <p className="text-lg text-muted-foreground">
          Data sources, partnership ecosystem, and cross-pillar analysis inspiration for hackathon participants.
        </p>
      </div>

      <Accordion type="multiple" defaultValue={["works-cited"]} className="space-y-4">
        
        {/* Data Sources & Resources - FIRST (most actionable) */}
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

        {/* Partnership Ecosystem - SECOND (where to dig deeper) */}
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
                The MAP explicitly lists <strong className="text-foreground">Partnership</strong> as a core value—an acknowledgment that the City does not possess all the levers or data required to make Richmond thrive. These organizations hold valuable data assets for hackathon solutions.
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
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Cross-Pillar Analysis - THIRD (inspiration for connections) */}
        <AccordionItem value="cross-pillar-analysis" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <GitBranch className="w-5 h-5 text-primary" />
              <span className="text-xl font-semibold text-foreground">Cross-Pillar Analysis Ideas</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-6 text-muted-foreground">
              <p>
                The most impactful hackathon solutions will connect data across pillars. Here are example hypotheses showing how challenges intersect—use these as inspiration for your own cross-pillar analysis.
              </p>

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

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground">
                  <strong>Challenge yourself:</strong> Can you find connections between other pillars? What happens when you overlay housing data with health outcomes, or workforce data with education metrics?
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  );
};
