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
  ArrowRight
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

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-3">Data Infrastructure & Recommendations</h2>
        <p className="text-lg text-muted-foreground">
          Cross-cutting insights and a modernization roadmap for enabling the Mayoral Action Plan through data.
        </p>
      </div>

      <Accordion type="multiple" defaultValue={["current-state", "federated-model", "roadmap"]} className="space-y-4">
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
                Imagine a city leader asking: "If we accelerate permit processing by 20%, what's the projected impact on affordable housing starts, construction employment, and property tax revenue over 24 months?" A contextual intelligence framework provides evidence-based answers.
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
      </Accordion>
    </div>
  );
};
