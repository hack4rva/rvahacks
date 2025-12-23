/**
 * Individual Pillar Deep Dive Tab - Storytelling Structure
 * Restructured to tell a narrative about the pillar and the mayor's goals
 * All content preserved from accordion-based structure
 */

import { 
  AlertCircle,
  Target,
  TrendingUp,
  BarChart3,
  Database,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Handshake,
  ExternalLink,
  AlertTriangle,
  Clock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { InsightCallout } from "../InsightCallout";
import { CrossReferenceLink } from "../CrossReferenceLink";
import { PillarData } from "@/data/pillarAnalysis";

interface PillarTabProps {
  pillarNumber: number;
  data: PillarData;
  onNavigateToPillar: (pillarId: string) => void;
}

const pillarColors: Record<number, string> = {
  1: "border-l-blue-500",
  2: "border-l-red-500",
  3: "border-l-purple-500",
  4: "border-l-emerald-500",
  5: "border-l-green-500",
  6: "border-l-amber-500",
  7: "border-l-cyan-500",
};

const complexityColors = {
  low: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  medium: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  high: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
};

export const PillarTab = ({ pillarNumber, data, onNavigateToPillar }: PillarTabProps) => {
  // Separate recommendations by priority
  const quickWinRecs = data.recommendations?.filter(rec => rec.priority === "quick-win") || [];
  const longTermRecs = data.recommendations?.filter(rec => rec.priority === "long-term") || [];

  return (
    <div className={`max-w-4xl mx-auto space-y-12 border-l-4 ${pillarColors[pillarNumber]} pl-6`}>
      
      {/* ============================================
          SECTION 1: THE CHALLENGE (Hook)
          ============================================ */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <Badge variant="outline" className="text-sm font-semibold">
            Track {pillarNumber}
          </Badge>
          <Badge className={complexityColors[data.complexity]}>
            {data.complexity.charAt(0).toUpperCase() + data.complexity.slice(1)} Complexity
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {data.jurisdictionalScope}
          </Badge>
        </div>
        
        <h2 className="text-3xl font-bold text-foreground">{data.name}</h2>
        
        {/* The Challenge - a compelling opening that hooks the reader */}
        <div className="bg-muted/30 rounded-lg p-6 space-y-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">
                {data.coreThesis}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 2: THE MAYOR'S VISION
          ============================================ */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">The Mayor's Vision</h3>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          Mayor Avula's approach to this track focuses on transforming how Richmond operates—not just meeting targets, 
          but fundamentally reshaping how the city delivers on its promises to residents.
        </p>

        {/* Key Objectives */}
        {data.keyObjectives && data.keyObjectives.length > 0 && (
          <div className="grid gap-3 mt-4">
            {data.keyObjectives.map((objective, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border-l-2 border-primary">
                <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <p className="text-foreground">{objective}</p>
              </div>
            ))}
          </div>
        )}

        {/* Full Definition HTML Content */}
        {data.definition && (
          <div className="mt-6 p-6 bg-card border rounded-lg">
            <h4 className="text-lg font-semibold text-foreground mb-4">Strategic Context</h4>
            <div className="prose prose-sm max-w-none text-muted-foreground [&_h4]:text-foreground [&_h4]:font-semibold [&_strong]:text-foreground [&_table]:w-full [&_table]:text-sm [&_th]:text-left [&_th]:py-2 [&_td]:py-2 [&_tr]:border-b" 
                 dangerouslySetInnerHTML={{ __html: data.definition }} />
          </div>
        )}
      </section>

      {/* ============================================
          SECTION 3: HOW WE GET THERE (Theory of Change)
          ============================================ */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">How We Get There</h3>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          Understanding the causal logic behind this track helps identify where interventions—and data—can make the biggest impact.
        </p>

        {/* Full Operational HTML Content */}
        {data.operational && (
          <div className="mt-4 p-6 bg-card border rounded-lg">
            <div className="prose prose-sm max-w-none text-muted-foreground [&_h4]:text-foreground [&_h4]:font-semibold [&_strong]:text-foreground [&_table]:w-full [&_table]:text-sm [&_th]:text-left [&_th]:py-2 [&_td]:py-2 [&_tr]:border-b" 
                 dangerouslySetInnerHTML={{ __html: data.operational }} />
          </div>
        )}

        {/* Dependencies as narrative connections */}
        {data.dependencies && data.dependencies.length > 0 && (
          <div className="mt-6">
            <InsightCallout type="dependency" title="Connected to Other Tracks">
              <p className="mb-3">This track doesn't exist in isolation. Progress here depends on—and enables—progress elsewhere:</p>
              <div className="space-y-2">
                {data.dependencies.map((dep, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>
                      <CrossReferenceLink 
                        pillarId={dep.pillarId}
                        label={dep.label}
                        onClick={() => onNavigateToPillar(dep.pillarId)}
                      />
                      <span className="text-muted-foreground"> — {dep.description}</span>
                    </span>
                  </div>
                ))}
              </div>
            </InsightCallout>
          </div>
        )}
      </section>

      {/* ============================================
          SECTION 4: WHAT COULD GO WRONG (Risks)
          ============================================ */}
      {data.risks && data.risks.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            <h3 className="text-2xl font-bold text-foreground">What Could Go Wrong</h3>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Every ambitious plan faces obstacles. Understanding these risks helps teams design solutions that anticipate real-world challenges:
          </p>

          <div className="grid gap-4 mt-4">
            {data.risks.map((risk, idx) => (
              <div key={idx} className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <h5 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  {risk.title}
                </h5>
                <p className="text-sm text-muted-foreground mt-2 ml-8">{risk.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ============================================
          SECTION 5: MEASURING PROGRESS
          ============================================ */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">How We'll Know It's Working</h3>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          The Mayor's Action Plan doesn't just set goals—it defines how success will be measured. 
          These metrics tell the story of progress (or reveal where Richmond is falling short):
        </p>

        {data.metrics && data.metrics.length > 0 ? (
          <div className="grid gap-4 mt-4">
            {data.metrics.map((metric, idx) => (
              <Card key={idx} className="bg-card border">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h5 className="font-semibold text-foreground">{metric.name}</h5>
                      <p className="text-sm text-muted-foreground mt-1">{metric.description}</p>
                      {metric.timeline && (
                        <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Timeline: {metric.timeline}
                        </p>
                      )}
                    </div>
                    {metric.target && (
                      <div className="text-right flex-shrink-0">
                        <span className="text-xs text-muted-foreground uppercase">Target</span>
                        <p className="font-bold text-primary">{metric.target}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground p-4 bg-muted/30 rounded-lg">
            Metrics to be defined based on detailed pillar analysis.
          </p>
        )}
      </section>

      {/* ============================================
          SECTION 6: THE DATA LANDSCAPE
          ============================================ */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Database className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">The Data Landscape</h3>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          To measure progress, you need data. Here's what Richmond has available—and critically, 
          <strong className="text-foreground"> what's missing</strong>. These gaps represent real opportunities for hackathon teams.
        </p>

        {/* What We Have - Existing Data Assets */}
        {data.dataAssets?.existing && data.dataAssets.existing.length > 0 && (
          <div className="mt-6">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              What We Have
            </h4>
            <div className="grid gap-3">
              {data.dataAssets.existing.map((asset, idx) => (
                <div key={idx} className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{asset.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">{asset.description}</p>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-2">Source: {asset.source}</p>
                    </div>
                    {asset.quality && (
                      <Badge variant="outline" className={`flex-shrink-0 text-xs ${
                        asset.quality === 'high' ? 'border-green-500 text-green-600' :
                        asset.quality === 'medium' ? 'border-amber-500 text-amber-600' :
                        'border-red-500 text-red-600'
                      }`}>
                        {asset.quality} quality
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* What's Missing - The Opportunity */}
        {data.dataAssets?.missing && data.dataAssets.missing.length > 0 && (
          <div className="mt-8">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
              <XCircle className="w-5 h-5 text-amber-500" />
              What's Missing <span className="text-sm font-normal text-muted-foreground ml-2">(Your Opportunity)</span>
            </h4>
            <div className="grid gap-3">
              {data.dataAssets.missing.map((asset, idx) => (
                <div key={idx} className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="font-medium text-foreground">{asset.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{asset.description}</p>
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-2">{asset.source}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Partners - Who Has the Data */}
        {data.partners && data.partners.length > 0 && (
          <div className="mt-8">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
              <Handshake className="w-5 h-5 text-primary" />
              Who Has the Data
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              These organizations hold critical data assets that could inform solutions:
            </p>
            <div className="grid gap-4">
              {data.partners.map((partner, idx) => (
                <Card key={idx} className="bg-card">
                  <CardContent className="p-4">
                    <h5 className="font-semibold text-foreground">{partner.name}</h5>
                    <p className="text-sm text-muted-foreground mt-1">{partner.role}</p>
                    <div className="mt-3 p-3 bg-primary/5 rounded border-l-2 border-primary">
                      <span className="text-xs font-semibold text-primary uppercase">Key Data Asset</span>
                      <p className="text-sm text-foreground mt-1">{partner.dataAsset}</p>
                      {partner.sourceUrl && (
                        <a 
                          href={partner.sourceUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2"
                        >
                          <ExternalLink className="w-3 h-3" />
                          View Source
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ============================================
          SECTION 7: YOUR OPPORTUNITY
          ============================================ */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Lightbulb className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Your Opportunity</h3>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          Now you understand the challenge, the vision, and the data landscape. Here's where hackathon teams can make a real difference:
        </p>

        {/* Quick Wins - High Impact, Achievable in Hackathon */}
        {quickWinRecs.length > 0 && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              Quick Wins — Achievable This Weekend
            </h4>
            <div className="grid gap-4">
              {quickWinRecs.map((rec, idx) => (
                <Card key={idx} className="border-2 border-primary/30 bg-primary/5">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center flex-shrink-0 text-lg">
                        {idx + 1}
                      </span>
                      <div>
                        <h5 className="font-semibold text-foreground text-lg">{rec.title}</h5>
                        <p className="text-muted-foreground mt-2">{rec.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Long-Term Recommendations */}
        {longTermRecs.length > 0 && (
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              Longer-Term Opportunities — Start the Foundation
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              These projects require more time, but a hackathon prototype could demonstrate the concept and build momentum:
            </p>
            <div className="grid gap-4">
              {longTermRecs.map((rec, idx) => (
                <Card key={idx} className="border border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <span className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center flex-shrink-0 text-lg">
                        {idx + 1}
                      </span>
                      <div>
                        <h5 className="font-semibold text-foreground text-lg">{rec.title}</h5>
                        <p className="text-muted-foreground mt-2">{rec.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Fallback if no recommendations */}
        {(!data.recommendations || data.recommendations.length === 0) && (
          <InsightCallout type="recommendation" title="Look for the Gaps">
            Review the missing data assets above—each one represents an opportunity to build something that helps Richmond measure what matters. 
            Consider dashboards, data integrations, or analysis tools that could fill these gaps.
          </InsightCallout>
        )}

        {/* Final CTA */}
        <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <p className="text-center text-foreground font-medium">
            Ready to tackle {data.name.toLowerCase()}? Build something that helps Richmond track progress, 
            identify problems, or make better decisions.
          </p>
        </div>
      </section>
    </div>
  );
};
