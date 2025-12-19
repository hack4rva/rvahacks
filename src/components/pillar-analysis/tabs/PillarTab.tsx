/**
 * Individual Pillar Deep Dive Tab
 * Consistent structure for each of the 7 pillars
 */

import { 
  Target,
  Cog,
  BarChart3,
  Database,
  Link2,
  AlertTriangle,
  Lightbulb
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
import { DataAssetGrid } from "../DataAssetGrid";
import { CrossReferenceLink } from "../CrossReferenceLink";
import { PillarData } from "@/data/pillarAnalysis";

interface PillarTabProps {
  pillarNumber: number;
  data: PillarData;
  onNavigateToPillar: (pillarId: string) => void;
}

const complexityColors = {
  low: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  medium: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  high: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
};

const pillarColors: Record<number, string> = {
  1: "border-l-blue-500",
  2: "border-l-red-500",
  3: "border-l-purple-500",
  4: "border-l-emerald-500",
  5: "border-l-green-500",
  6: "border-l-amber-500",
  7: "border-l-cyan-500",
};

export const PillarTab = ({ pillarNumber, data, onNavigateToPillar }: PillarTabProps) => {
  return (
    <div className={`max-w-4xl mx-auto space-y-8 border-l-4 ${pillarColors[pillarNumber]} pl-6`}>
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="outline" className="text-sm font-semibold">
            Pillar {pillarNumber}
          </Badge>
          <Badge className={complexityColors[data.complexity]}>
            {data.complexity.charAt(0).toUpperCase() + data.complexity.slice(1)} Complexity
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {data.jurisdictionalScope}
          </Badge>
        </div>
        
        <h2 className="text-3xl font-bold text-foreground">{data.name}</h2>
        
        <p className="text-lg text-muted-foreground italic border-l-2 border-primary pl-4">
          {data.coreThesis}
        </p>
      </div>

      <Accordion type="multiple" defaultValue={["definition", "operational", "metrics"]} className="space-y-4">
        {/* Pillar Definition & Strategic Intent */}
        <AccordionItem value="definition" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-5">
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">Definition & Strategic Intent</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-4 text-muted-foreground">
              <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: data.definition || '<p>Detailed analysis content to be added.</p>' }} />
              
              {data.keyObjectives && data.keyObjectives.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-base font-semibold text-foreground mb-3">Key Objectives</h4>
                  <ul className="space-y-2">
                    {data.keyObjectives.map((objective, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Operational Components */}
        <AccordionItem value="operational" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-5">
            <div className="flex items-center gap-3">
              <Cog className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">Operational Components</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-4 text-muted-foreground">
              <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: data.operational || '<p>Operational details to be added.</p>' }} />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Metrics & Success Indicators */}
        <AccordionItem value="metrics" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-5">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">Metrics & Success Indicators</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-4">
              {data.metrics && data.metrics.length > 0 ? (
                <div className="grid gap-3">
                  {data.metrics.map((metric, idx) => (
                    <Card key={idx} className="bg-muted/30">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <h5 className="font-medium text-foreground">{metric.name}</h5>
                            <p className="text-sm text-muted-foreground mt-1">{metric.description}</p>
                          </div>
                          {metric.target && (
                            <Badge variant="outline" className="flex-shrink-0">
                              Target: {metric.target}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">Metrics to be defined based on detailed pillar analysis.</p>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Data Ecosystem Analysis */}
        <AccordionItem value="data" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-5">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">Data Ecosystem Analysis</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <DataAssetGrid 
              existingAssets={data.dataAssets?.existing || []}
              missingAssets={data.dataAssets?.missing || []}
            />
          </AccordionContent>
        </AccordionItem>

        {/* Implementation Dependencies */}
        <AccordionItem value="dependencies" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-5">
            <div className="flex items-center gap-3">
              <Link2 className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">Implementation Dependencies</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-4">
              {data.dependencies && data.dependencies.length > 0 ? (
                <div className="space-y-3">
                  {data.dependencies.map((dep, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      <CrossReferenceLink 
                        pillarId={dep.pillarId}
                        label={dep.label}
                        onClick={() => onNavigateToPillar(dep.pillarId)}
                      />
                      <span className="text-muted-foreground">{dep.description}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">Cross-pillar dependencies to be documented.</p>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Risk Factors & Challenges */}
        <AccordionItem value="risks" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-5">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span className="text-lg font-semibold text-foreground">Risk Factors & Challenges</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-3">
              {data.risks && data.risks.length > 0 ? (
                data.risks.map((risk, idx) => (
                  <InsightCallout key={idx} type="warning" title={risk.title}>
                    {risk.description}
                  </InsightCallout>
                ))
              ) : (
                <p className="text-muted-foreground">Risk analysis to be added.</p>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Strategic Recommendations */}
        <AccordionItem value="recommendations" className="border border-border rounded-lg px-6 bg-card">
          <AccordionTrigger className="hover:no-underline py-5">
            <div className="flex items-center gap-3">
              <Lightbulb className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">Strategic Recommendations</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="space-y-4">
              {data.recommendations && data.recommendations.length > 0 ? (
                <div className="grid gap-3">
                  {data.recommendations.map((rec, idx) => (
                    <Card key={idx} className={rec.priority === "quick-win" ? "border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20" : ""}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">
                            {idx + 1}
                          </span>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h5 className="font-medium text-foreground">{rec.title}</h5>
                              {rec.priority === "quick-win" && (
                                <Badge className="bg-green-100 text-green-800 text-xs">Quick Win</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{rec.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">Recommendations to be developed based on full analysis.</p>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
