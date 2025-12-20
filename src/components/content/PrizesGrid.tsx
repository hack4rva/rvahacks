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
    // Determine icon color based on award color
    const iconColor = award.color?.includes('yellow') ? 'text-yellow-500' : 
                      award.color?.includes('pink') ? 'text-pink-500' : 
                      award.color?.includes('violet') ? 'text-violet-500' : 'text-yellow-500';
    const bgColor = award.color?.includes('yellow') ? 'bg-yellow-500/20' : 
                    award.color?.includes('pink') ? 'bg-pink-500/20' : 
                    award.color?.includes('violet') ? 'bg-violet-500/20' : 'bg-yellow-500/20';
    const textColor = award.color?.includes('yellow') ? 'text-yellow-600 dark:text-yellow-400' : 
                      award.color?.includes('pink') ? 'text-pink-600 dark:text-pink-400' : 
                      award.color?.includes('violet') ? 'text-violet-600 dark:text-violet-400' : 'text-yellow-600 dark:text-yellow-400';
    
    return (
      <Card className={`border-2 ${award.color || "border-border"} transition-all duration-200 hover:shadow-lg hover:scale-[1.02]`}>
        <CardContent className="py-6 px-4 text-center">
          <div className={`w-14 h-14 rounded-full ${bgColor} flex items-center justify-center mx-auto mb-3`}>
            <Trophy className={`w-7 h-7 ${iconColor}`} />
          </div>
          <p className={`text-xs font-medium ${textColor} uppercase tracking-wide mb-1`}>
            {award.title === "Mayor's Choice" ? "Grand Prize" : "Top Prize"}
          </p>
          <p className="text-3xl font-bold text-foreground mb-1">{award.amount}</p>
          <p className="text-sm font-semibold text-foreground">{award.title}</p>
          <p className="text-xs text-muted-foreground mt-1">{award.description}</p>
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
  // Separate prizes: grand prize (index 0), runner-up prizes (1-2), pillar awards (3+)
  const grandPrize = awardTiers[0];
  const runnerUpPrizes = awardTiers.slice(1, 3);
  const pillarAwards = awardTiers.slice(3);
  
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
      <div className="mb-8 max-w-md mx-auto">
        <AwardCard award={grandPrize} featured />
      </div>

      {/* Runner-Up Prizes */}
      <div className="mb-8">
        <h3 className="text-center text-lg font-semibold text-foreground mb-1">$2.5K Runner-Up Prizes</h3>
        <p className="text-center text-sm text-muted-foreground mb-4">Voted by judges and audience</p>
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          {runnerUpPrizes.map((prize, index) => (
            <AwardCard key={index} award={prize} featured />
          ))}
        </div>
      </div>

      {/* Pillar Awards Section */}
      <div className="mb-6">
        <h3 className="text-center text-lg font-semibold text-foreground mb-1">$1K Pillar Bounties</h3>
        <p className="text-center text-sm text-muted-foreground mb-6">One award for each of the Mayor's 7 Pillars</p>
      </div>

      {/* Award Tiers - 4 top, 3 bottom centered */}
      <div className="space-y-3">
        <div className="flex justify-center gap-3">
          {pillarAwards.slice(0, 4).map((award, index) => (
            <div key={index} className="w-[160px]">
              <AwardCard award={award} />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3">
          {pillarAwards.slice(4).map((award, index) => (
            <div key={index + 4} className="w-[160px]">
              <AwardCard award={award} />
            </div>
          ))}
        </div>
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