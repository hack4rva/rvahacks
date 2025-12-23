/**
 * Hero section for Pillar Analysis page
 */

import { useState } from "react";
import { ChevronDown, ChevronUp, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export const TrackAnalysisHero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Title - matching other tab headers */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Track Analysis
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive breakdown of Richmond's{" "}
              <span className="text-primary font-medium">Seven Tracks</span>{" "}
              for hackathon participants
            </p>
          </div>

          {/* Hackathon Context Card */}
          <Card className="text-left bg-card/80 backdrop-blur-sm border-border/50 shadow-lg">
            <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/30 transition-colors rounded-t-lg">
                  <div className="flex items-center gap-3">
                    <Network className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-semibold text-foreground">What You Need to Know</h2>
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
                      <em className="text-foreground">The hackathon is organized around 7 Tracks—aligned with the seven pillars from Mayor Avula's Mayoral Action Plan. We refer to them as "Tracks" throughout the hackathon to emphasize the focus areas teams can work within.</em>
                    </p>
                    <p className="mb-4">
                      Mayor Danny Avula's <strong className="text-foreground">Mayoral Action Plan (MAP)</strong> is the city's operational roadmap for making Richmond thrive. Each Track covers a key area—from City Hall efficiency to neighborhood development to environmental sustainability.
                    </p>
                    <p className="mb-4">
                      For this hackathon, understanding these Tracks helps you identify <strong className="text-foreground">real problems with available data</strong>. Each Track has goals, metrics the city wants to track, and gaps where data is missing or fragmented.
                    </p>
                    <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mt-4">
                      <p className="text-sm font-medium text-foreground mb-1">How to Use This</p>
                      <p className="text-sm">
                        Browse the Tracks to find challenges that match your skills. Look for data gaps—these are opportunities to build something that helps the city measure what matters.
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

// Backward compatibility alias
export const PillarAnalysisHero = TrackAnalysisHero;
