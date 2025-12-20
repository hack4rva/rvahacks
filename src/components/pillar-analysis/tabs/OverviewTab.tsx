/**
 * Overview & Framework Tab
 * Establishes the analytical foundation for the Pillar Analysis
 */

import { 
  Network, 
  AlertTriangle, 
  ArrowRight,
  Handshake,
  Home,
  GraduationCap,
  Building,
  HeartPulse,
  Landmark
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

// Key partner organizations for quick reference
const keyPartners = [
  {
    category: "Housing",
    icon: Home,
    color: "text-red-500",
    partners: ["PlanRVA", "Housing Opportunities Made Equal (HOME)", "Better Housing Coalition"]
  },
  {
    category: "Education",
    icon: GraduationCap,
    color: "text-purple-500",
    partners: ["Richmond Public Schools", "Communities in Schools", "NextUp RVA"]
  },
  {
    category: "Economy",
    icon: Building,
    color: "text-emerald-500",
    partners: ["Greater Richmond Partnership", "ChamberRVA"]
  },
  {
    category: "Health",
    icon: HeartPulse,
    color: "text-green-500",
    partners: ["Richmond City Health District", "Virginia Dept. of Health"]
  },
  {
    category: "History",
    icon: Landmark,
    color: "text-amber-500",
    partners: ["Shockoe Institute", "National Slavery Museum Foundation"]
  }
];

export const OverviewTab = ({ onNavigateToPillar }: OverviewTabProps) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-3">Overview & Framework</h2>
        <p className="text-lg text-muted-foreground">
          Understanding the analytical foundation and interconnected nature of Richmond's Mayoral Action Plan.
        </p>
      </div>

      <Accordion type="multiple" defaultValue={["architecture", "dependencies", "partners"]} className="space-y-4">
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

        {/* Key Partners */}
        <AccordionItem value="partners" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-3">
              <Handshake className="w-5 h-5 text-primary" />
              <span className="text-xl font-semibold text-foreground">Key Partner Organizations</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-4 text-muted-foreground">
              <p>
                The MAP's success depends on collaboration with partner institutions that hold critical data and deliver key services. These organizations are essential for hackathon teams to understand.
              </p>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {keyPartners.map((category) => (
                  <Card key={category.category} className="bg-muted/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-semibold flex items-center gap-2">
                        <category.icon className={`w-4 h-4 ${category.color}`} />
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="text-xs space-y-1">
                        {category.partners.map((partner) => (
                          <li key={partner} className="text-muted-foreground">• {partner}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-sm">
                See the <strong className="text-foreground">Data</strong> tab for detailed information about each partner's data assets and how to access them.
              </p>
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

      </Accordion>
    </div>
  );
};
