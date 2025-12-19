/**
 * Overview & Framework Tab
 * Establishes the analytical foundation for the Pillar Analysis
 */

import { 
  BookOpen, 
  Network, 
  AlertTriangle, 
  FlaskConical,
  ArrowRight,
  CheckCircle2,
  Link2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InsightCallout } from "../InsightCallout";
import { PillarDependencyDiagram } from "../PillarDependencyDiagram";

interface OverviewTabProps {
  onNavigateToPillar: (pillarId: string) => void;
}

export const OverviewTab = ({ onNavigateToPillar }: OverviewTabProps) => {
  const coreValues = [
    { name: "Integrity", description: "Transparent, honest governance that builds public trust" },
    { name: "Encouragement", description: "Fostering a supportive environment for innovation and growth" },
    { name: "Excellence", description: "Commitment to the highest standards of public service" },
    { name: "Equity", description: "Ensuring fair access to opportunities and resources for all residents" },
    { name: "Partnership", description: "Collaborative approaches with communities, institutions, and stakeholders" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-3">Overview & Framework</h2>
        <p className="text-lg text-muted-foreground">
          Understanding the analytical foundation and interconnected nature of Richmond's Mayoral Action Plan.
        </p>
      </div>

      <Accordion type="multiple" defaultValue={["paradigm", "architecture"]} className="space-y-4">
        {/* The Governance Paradigm Shift */}
        <AccordionItem value="paradigm" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-xl font-semibold text-foreground">The Governance Paradigm Shift</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Mayor Danny Avula's January 2025 inauguration marked a pivotal moment in Richmond's municipal history. The Mayoral Action Plan (MAP) represents a deliberate departure from traditional comprehensive planning approaches—documents that often gather dust on shelves—toward an <strong className="text-foreground">operational framework</strong> designed for continuous execution and accountability.
              </p>
              
              <p>
                Where traditional comprehensive plans articulate long-term visions with minimal accountability mechanisms, the MAP establishes specific metrics, timelines, and cross-departmental dependencies that can be tracked, measured, and reported to the public.
              </p>

              <InsightCallout type="insight" title="Key Distinction">
                The MAP is not a policy wishlist—it's an operational blueprint that treats municipal governance as an integrated system requiring coordination, measurement, and adaptive management.
              </InsightCallout>

              {/* Core Values */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Five Core Values</h4>
                <div className="grid gap-3">
                  {coreValues.map((value) => (
                    <div key={value.name} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-foreground">{value.name}:</span>{" "}
                        <span className="text-muted-foreground">{value.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Architectural Vision */}
        <AccordionItem value="architecture" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <Network className="w-5 h-5 text-primary" />
              <span className="text-xl font-semibold text-foreground">Architectural Vision</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-4 text-muted-foreground">
              <p>
                The seven pillars of the MAP are not isolated policy domains but an <strong className="text-foreground">interconnected system</strong> where progress in one area enables or constrains progress in others. Understanding these dependencies is crucial for effective implementation and realistic expectation-setting.
              </p>

              <PillarDependencyDiagram onPillarClick={onNavigateToPillar} />

              <InsightCallout type="dependency" title="The Connective Tissue">
                Pillar 1 (A Thriving City Hall) serves as the operational foundation for all other pillars. Staff vacancies, permitting delays, and administrative inefficiencies create cascading bottlenecks that impede housing development, economic investment, and service delivery across the entire municipal apparatus.
              </InsightCallout>

              <div className="mt-4">
                <h4 className="text-lg font-semibold text-foreground mb-3">Cross-Pillar Examples</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>
                      <button 
                        onClick={() => onNavigateToPillar("pillar-1")}
                        className="text-primary hover:underline font-medium"
                      >
                        Pillar 1
                      </button>{" "}
                      vacancy rates → permit processing speed →{" "}
                      <button 
                        onClick={() => onNavigateToPillar("pillar-2")}
                        className="text-primary hover:underline font-medium"
                      >
                        Pillar 2
                      </button>{" "}
                      housing development
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>
                      <button 
                        onClick={() => onNavigateToPillar("pillar-4")}
                        className="text-primary hover:underline font-medium"
                      >
                        Pillar 4
                      </button>{" "}
                      economic development → job creation →{" "}
                      <button 
                        onClick={() => onNavigateToPillar("pillar-3")}
                        className="text-primary hover:underline font-medium"
                      >
                        Pillar 3
                      </button>{" "}
                      workforce readiness
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>
                      <button 
                        onClick={() => onNavigateToPillar("pillar-5")}
                        className="text-primary hover:underline font-medium"
                      >
                        Pillar 5
                      </button>{" "}
                      infrastructure investment → quality of life →{" "}
                      <button 
                        onClick={() => onNavigateToPillar("pillar-7")}
                        className="text-primary hover:underline font-medium"
                      >
                        Pillar 7
                      </button>{" "}
                      regional competitiveness
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Critical Dependencies */}
        <AccordionItem value="dependencies" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span className="text-xl font-semibold text-foreground">Critical Dependencies</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-4 text-muted-foreground">
              <p>
                The MAP's ambitious goals face several structural dependencies that require careful attention and proactive management.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <Card className="bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-amber-800 dark:text-amber-200">Data Infrastructure Fragmentation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-amber-700 dark:text-amber-300">
                    Municipal data exists in siloed systems with inconsistent formats, making cross-pillar analysis and real-time decision-making challenging.
                  </CardContent>
                </Card>

                <Card className="bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-amber-800 dark:text-amber-200">Partner Institution Reliance</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-amber-700 dark:text-amber-300">
                    Critical outcomes depend on entities outside direct municipal control: Richmond Public Schools, Virginia Dept. of Health, PlanRVA, and regional partners.
                  </CardContent>
                </Card>

                <Card className="bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-amber-800 dark:text-amber-200">Workforce Capacity</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-amber-700 dark:text-amber-300">
                    Persistent vacancies in key departments create bottlenecks that ripple across all service delivery areas.
                  </CardContent>
                </Card>

                <Card className="bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-amber-800 dark:text-amber-200">Federated Data Model Need</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-amber-700 dark:text-amber-300">
                    Success requires building a data governance structure that enables sharing while respecting institutional autonomy and privacy requirements.
                  </CardContent>
                </Card>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Research Methodology */}
        <AccordionItem value="methodology" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <FlaskConical className="w-5 h-5 text-primary" />
              <span className="text-xl font-semibold text-foreground">Research Methodology</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-4 text-muted-foreground">
              <p>
                This analysis employs an <strong className="text-foreground">evidence-based deconstruction approach</strong>, examining each pillar through multiple analytical lenses:
              </p>

              <div className="space-y-3">
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Structural Integrity Analysis</h4>
                  <p className="text-sm">
                    Examining whether stated goals have clear causal pathways to desired outcomes, and whether proposed metrics actually measure what matters.
                  </p>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Causal Logic Evaluation</h4>
                  <p className="text-sm">
                    Testing the implicit theory of change: Do bureaucratic metrics (permits issued, vacancies filled) connect meaningfully to social outcomes (housing affordability, public safety)?
                  </p>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Data Ecosystem Mapping</h4>
                  <p className="text-sm">
                    Identifying existing data assets, critical gaps, and the institutional relationships needed to build comprehensive measurement systems.
                  </p>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Implementation Feasibility</h4>
                  <p className="text-sm">
                    Assessing resource requirements, political economy considerations, and practical constraints that will shape execution.
                  </p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
