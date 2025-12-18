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

export const Prizes = () => {
  return (
    <section id="prizes" className="py-16 md:py-28 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Prizes & Recognition
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Submit your solution by Saturday evening. Finalist teams will
              pitch live on Sunday. Judges, including Mayor
              Avula, will select winners across multiple award categories.
            </p>
          </div>

          {/* Timeline */}
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
      </div>
    </section>
  );
};