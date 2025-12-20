import { useState } from "react";
import { awardTiers, prizeTimeline, type PrizeAward } from "@/data";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface AwardCardProps {
  award: PrizeAward;
  featured?: boolean;
}

const AwardCard = ({ award, featured = false }: AwardCardProps) => {
  if (featured) {
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

  return null;
};

// Pillar badge colors mapping
const getPillarStyle = (award: PrizeAward) => {
  const pillarMatch = award.title.match(/Pillar (\d)/);
  const pillarNum = pillarMatch ? pillarMatch[1] : null;
  
  const colorMap: Record<string, { bg: string; border: string; text: string; hex: string }> = {
    'blue': { bg: 'bg-blue-500/20', border: 'border-blue-500/50', text: 'text-blue-600 dark:text-blue-400', hex: '#3b82f6' },
    'red': { bg: 'bg-red-500/20', border: 'border-red-500/50', text: 'text-red-600 dark:text-red-400', hex: '#ef4444' },
    'purple': { bg: 'bg-purple-500/20', border: 'border-purple-500/50', text: 'text-purple-600 dark:text-purple-400', hex: '#a855f7' },
    'emerald': { bg: 'bg-emerald-500/20', border: 'border-emerald-500/50', text: 'text-emerald-600 dark:text-emerald-400', hex: '#10b981' },
    'green': { bg: 'bg-green-500/20', border: 'border-green-500/50', text: 'text-green-600 dark:text-green-400', hex: '#22c55e' },
    'amber': { bg: 'bg-amber-500/20', border: 'border-amber-500/50', text: 'text-amber-600 dark:text-amber-400', hex: '#f59e0b' },
    'cyan': { bg: 'bg-cyan-500/20', border: 'border-cyan-500/50', text: 'text-cyan-600 dark:text-cyan-400', hex: '#06b6d4' },
  };
  
  const colorKey = Object.keys(colorMap).find(key => award.color?.includes(key)) || 'blue';
  return { ...colorMap[colorKey], pillarNum };
};

interface PillarBadgeProps {
  award: PrizeAward;
  isSelected: boolean;
  onClick: () => void;
}

const PillarBadge = ({ award, isSelected, onClick }: PillarBadgeProps) => {
  const style = getPillarStyle(award);
  const shortTitle = award.title.replace(/Pillar \d: /, '');
  
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-3 rounded-full border-2 shadow-sm hover:shadow-elegant transition-smooth ${
        isSelected
          ? `${style.border} ${style.bg}`
          : `border-border hover:${style.border} bg-card`
      }`}
    >
      <div 
        className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
        style={{ backgroundColor: style.hex }}
      >
        {style.pillarNum}
      </div>
      <span className="text-sm font-semibold text-card-foreground whitespace-nowrap">
        {shortTitle}
      </span>
      <span className={`text-xs font-bold ${style.text}`}>
        {award.amount}
      </span>
    </button>
  );
};

interface PrizesGridProps {
  className?: string;
  showTimeline?: boolean;
}

export const PrizesGrid = ({ className = "", showTimeline = true }: PrizesGridProps) => {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);
  
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
      <div className="mb-10">
        <h3 className="text-center text-lg font-semibold text-foreground mb-1">$2.5K Runner-Up Prizes</h3>
        <p className="text-center text-sm text-muted-foreground mb-4">Voted by judges and audience</p>
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          {runnerUpPrizes.map((prize, index) => (
            <AwardCard key={index} award={prize} featured />
          ))}
        </div>
      </div>

      {/* Pillar Awards Section - Interactive Bubbles */}
      <div className="mb-6">
        <h3 className="text-center text-lg font-semibold text-foreground mb-1">$1K Pillar Bounties</h3>
        <p className="text-center text-sm text-muted-foreground mb-6">
          Click a pillar to learn more. One award for each of the Mayor's 7 Pillars.
        </p>
      </div>

      {/* Interactive Pillar Badges */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {pillarAwards.map((award, index) => (
          <PillarBadge
            key={index}
            award={award}
            isSelected={selectedPillar === index}
            onClick={() => setSelectedPillar(selectedPillar === index ? null : index)}
          />
        ))}
      </div>

      {/* Expanded Detail Panel */}
      {selectedPillar !== null && (
        <div className="max-w-2xl mx-auto mb-6">
          <div 
            className="p-6 rounded-xl border-2 shadow-elegant animate-fade-in"
            style={{ 
              borderColor: getPillarStyle(pillarAwards[selectedPillar]).hex + '50',
              backgroundColor: getPillarStyle(pillarAwards[selectedPillar]).hex + '10'
            }}
          >
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{ backgroundColor: getPillarStyle(pillarAwards[selectedPillar]).hex }}
              >
                {getPillarStyle(pillarAwards[selectedPillar]).pillarNum}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-card-foreground">
                    {pillarAwards[selectedPillar].title}
                  </h3>
                  <span 
                    className="text-lg font-bold"
                    style={{ color: getPillarStyle(pillarAwards[selectedPillar]).hex }}
                  >
                    {pillarAwards[selectedPillar].amount}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {pillarAwards[selectedPillar].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Note */}
      <div className="text-center mt-8 space-y-2">
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

// Legacy named exports
export { awardTiers };
export const majorAwards: PrizeAward[] = awardTiers;
export const sponsorAwards: PrizeAward[] = [];
export const civicAwards: PrizeAward[] = [];