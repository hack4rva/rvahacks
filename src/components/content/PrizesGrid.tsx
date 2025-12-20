import { awardTiers, prizeTimeline, type PrizeAward } from "@/data";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award } from "lucide-react";

interface AwardCardProps {
  award: PrizeAward;
  featured?: boolean;
}

const AwardCard = ({ award, featured = false }: AwardCardProps) => (
  <Card className={`border-2 ${award.color || "border-border"} transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${featured ? "col-span-full" : ""}`}>
    <CardContent className={`${featured ? "py-8 px-6" : "pt-4 pb-4"} text-center`}>
      {featured ? (
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
      ) : (
        <>
          <div className="w-10 h-10 rounded-full bg-current/10 flex items-center justify-center mx-auto mb-3" style={{ color: award.color?.includes('blue') ? '#3b82f6' : award.color?.includes('red') ? '#ef4444' : award.color?.includes('purple') ? '#a855f7' : award.color?.includes('emerald') ? '#10b981' : award.color?.includes('green') ? '#22c55e' : award.color?.includes('amber') ? '#f59e0b' : award.color?.includes('cyan') ? '#06b6d4' : '#888' }}>
            <Award className="w-5 h-5" />
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">{award.amount}</p>
          <p className="text-sm font-semibold text-foreground leading-tight">{award.title}</p>
          <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{award.description}</p>
        </>
      )}
    </CardContent>
  </Card>
);

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

      {/* Award Tiers Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
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