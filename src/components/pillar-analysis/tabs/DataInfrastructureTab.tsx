/**
 * Data Resources Tab
 * Hackathon-focused: data sources and cross-pillar analysis inspiration
 * Note: Partnership ecosystem moved to individual pillar tabs
 */

import { 
  Database,
  ArrowRight,
  FileSpreadsheet,
  ExternalLink,
  GitBranch
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
          Data sources and cross-pillar analysis inspiration for hackathon participants. Partner information is now shown within each pillar tab.
        </p>
      </div>

      <Accordion type="multiple" defaultValue={["works-cited"]} className="space-y-4">
        
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

        {/* Cross-Pillar Analysis */}
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
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center gap-2 text-base font-semibold">
                        <span className="text-primary">{analysis.from}</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <span className="text-primary">{analysis.to}</span>
                      </div>
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