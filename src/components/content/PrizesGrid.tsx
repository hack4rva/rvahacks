import { awardTiers, prizeTimeline, type PrizeAward } from "@/data";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award } from "lucide-react";

interface AwardCardProps {
  award: PrizeAward;
  featured?: boolean;
}

const AwardCard = ({ award, featured = false }: AwardCardProps) => {
  // Extract pillar number from title if present
  const pillarMatch = award.title.match(/Pillar (\d)/);
  const pillarNum = pillarMatch ? pillarMatch[1] : null;
  
  // Get color for the pillar
  const getColor = () => {
    if (award.color?.includes('blue')) return '#3b82f6';
    if (award.color?.includes('red')) return '#ef4444';
    if (award.color?.includes('purple')) return '#a855f7';
    if (award.color?.includes('emerald')) return '#10b981';
    if (award.color?.includes('green')) return '#22c55e';
    if (award.color?.includes('amber')) return '#f59e0b';
    if (award.color?.includes('cyan')) return '#06b6d4';
    return '#888';
  };

  if (featured) {
    return (
      <Card className={`border-2 ${award.color || "border-border"} transition-all duration-200 hover:shadow-lg`}>
        <CardContent className="py-8 px-6 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center">
              <Trophy className="w-8 h-8 text-yellow-500" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400 uppercase tracking-wide mb-1">Grand Prize</p>
              <p className="text-4xl sm:text-5xl font-bold text-foreground mb-1">{award.amount}</p>
              <p className="text-lg font-semibold text-foreground">{award.title}</p>
              <p className="text-sm text-muted-foreground mt-1">{award.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Compact pillar card
  return (
    <Card className={`border-2 ${award.color || "border-border"} transition-all duration-200 hover:scale-[1.02] hover:shadow-lg min-w-[140px] flex-1`}>
      <CardContent className="py-4 px-3 text-center">
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold text-sm"
          style={{ backgroundColor: getColor() }}
        >
          {pillarNum || <Award className="w-4 h-4" />}
        </div>
        <p className="text-xl font-bold text-foreground mb-1">{award.amount}</p>
        <p className="text-xs font-semibold text-foreground leading-tight line-clamp-2">
          {award.title.replace(/Pillar \d: /, '')}
        </p>
      </CardContent>
    </Card>
  );
};

interface PrizesGridProps {
  className?: string;
  /** Show the timeline section */
  showTimeline?: boolean;
}

export const PrizesGrid = ({ className = "", showTimeline = true }: PrizesGridProps) => {
  const [grandPrize, ...pillarAwards] = awardTiers;
  
  return (
    <div className={className}>
      {/* Timeline */}
      {showTimeline && (
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-5 mb-12 max-w-3xl mx-auto">
          <div className="space-y-2.5">
            {prizeTimeline.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                <p className="text-sm text-card-foreground">
                  <span className="font-bold">{item.label}:</span> {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Grand Prize - Featured */}
      <div className="mb-8">
        <AwardCard award={grandPrize} featured />
      </div>

      {/* Pillar Awards Section */}
      <div className="mb-6">
        <h3 className="text-center text-lg font-semibold text-foreground mb-1">Pillar Awards</h3>
        <p className="text-center text-sm text-muted-foreground mb-6">One award for each of the Mayor's 7 Pillars</p>
      </div>

      {/* Award Tiers - Single Row */}
      <div className="flex gap-2 overflow-x-auto pb-2 md:overflow-visible md:justify-center">
        {pillarAwards.map((award, index) => (
          <AwardCard key={index} award={award} />
        ))}
      </div>

      {/* Note */}
      <div className="text-center mt-10 space-y-2">
        <p className="text-sm text-muted-foreground">
          Each pillar category will have a winner recognized at the awards ceremony.
        </p>
        <p className="text-sm text-muted-foreground italic">
          Solutions may address multiple pillars—judges will determine the best fit.
        </p>
      </div>
    </div>
  );
};

// Legacy named exports (kept for backwards compatibility with older imports)
export { awardTiers };
export const majorAwards: PrizeAward[] = awardTiers;
export const sponsorAwards: PrizeAward[] = [];
export const civicAwards: PrizeAward[] = [];