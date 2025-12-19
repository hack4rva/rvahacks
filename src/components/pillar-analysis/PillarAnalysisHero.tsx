/**
 * Hero section for Pillar Analysis page
 */

import { useState } from "react";
import { ChevronDown, ChevronUp, Network } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export const PillarAnalysisHero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const pillars = [
    { num: 1, name: "City Hall", color: "bg-blue-500" },
    { num: 2, name: "Safety", color: "bg-red-500" },
    { num: 3, name: "Opportunity", color: "bg-purple-500" },
    { num: 4, name: "Economy", color: "bg-emerald-500" },
    { num: 5, name: "Environment", color: "bg-green-500" },
    { num: 6, name: "Reconciliation", color: "bg-amber-500" },
    { num: 7, name: "Regional", color: "bg-cyan-500" },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Context Badge */}
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-primary/30 bg-primary/5">
            Mayor Danny Avula Administration • January 2025
          </Badge>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-mono tracking-tight">
            Pillar Analysis
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            A Comprehensive Deconstruction of the{" "}
            <span className="text-primary font-medium">Seven Pillars</span>{" "}
            of a Thriving Richmond
          </p>

          {/* Pillar Nodes Visualization */}
          <div className="flex justify-center items-center gap-2 md:gap-3 mb-10 flex-wrap">
            {pillars.map((pillar, idx) => (
              <div key={pillar.num} className="flex items-center">
                <div 
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${pillar.color} flex items-center justify-center text-white font-bold text-sm md:text-base shadow-lg`}
                  title={pillar.name}
                >
                  {pillar.num}
                </div>
                {idx < pillars.length - 1 && (
                  <div className="w-4 md:w-6 h-0.5 bg-border mx-1" />
                )}
              </div>
            ))}
          </div>

          {/* Executive Summary Card */}
          <Card className="text-left bg-card/80 backdrop-blur-sm border-border/50 shadow-lg">
            <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/30 transition-colors rounded-t-lg">
                  <div className="flex items-center gap-3">
                    <Network className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-semibold text-foreground">Executive Summary</h2>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <CardContent className="pt-0 pb-6 px-6">
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    <p className="mb-4">
                      The Mayoral Action Plan (MAP) represents a paradigm shift from reactive governance to a proactive <strong className="text-foreground">"culture of delivery"</strong>—a framework where municipal operations are measured, transparent, and accountable to tangible outcomes rather than bureaucratic processes.
                    </p>
                    <p className="mb-4">
                      This analysis deconstructs the seven strategic pillars that form the architectural foundation of Mayor Danny Avula's vision for Richmond. Each pillar represents not merely a policy domain, but an interconnected system of metrics, dependencies, and institutional relationships that must function cohesively to achieve the administration's stated objectives.
                    </p>
                    <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mt-4">
                      <p className="text-sm font-medium text-foreground mb-1">Key Insight</p>
                      <p className="text-sm">
                        The MAP's success hinges on recognizing that these pillars are not siloed initiatives but interconnected systems. Pillar 1 (City Hall efficiency) serves as the operational bottleneck for all other pillars—vacancy rates in critical departments directly throttle permit processing, code enforcement, and service delivery across the entire municipal apparatus.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        </div>
      </div>
    </section>
  );
};
