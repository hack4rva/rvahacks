/**
 * Overview & Framework Tab
 * Establishes the analytical foundation for the Pillar Analysis
 */

import { 
  Network, 
  ArrowRight
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

      </Accordion>
    </div>
  );
};
