import { awardTiers, prizeTimeline, type PrizeAward } from "@/data";
import { Card, CardContent } from "@/components/ui/card";

interface AwardCardProps {
  award: PrizeAward;
}

const AwardCard = ({ award }: AwardCardProps) => (
  <Card className={`border-2 ${award.color || "border-border"}`}>
    <CardContent className="pt-4 pb-4 text-center">
      <p className="text-2xl font-bold text-foreground mb-0.5">{award.amount}</p>
      <p className="text-sm font-medium text-foreground">{award.title}</p>
      <p className="text-xs text-muted-foreground mt-1">{award.description}</p>
    </CardContent>
  </Card>
);

interface PrizesGridProps {
  className?: string;
  /** Show the timeline section */
  showTimeline?: boolean;
}

export const PrizesGrid = ({ className = "", showTimeline = true }: PrizesGridProps) => {
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

      {/* Award Tiers */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {awardTiers.map((award, index) => (
          <AwardCard key={index} award={award} />
        ))}
      </div>

      {/* Note */}
      <div className="text-center mt-8 space-y-2">
        <p className="text-sm text-muted-foreground">
          Each category will have a winner and runner-up recognized at the awards ceremony.
        </p>
        <p className="text-sm text-muted-foreground italic">
          Some awards include post-event collaboration expectations.
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