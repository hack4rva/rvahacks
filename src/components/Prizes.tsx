import { majorAwards, sponsorAwards, civicAwards, prizeTimeline, type PrizeAward } from "@/data";

interface AwardCardProps {
  award: PrizeAward;
}

const AwardCard = ({ award }: AwardCardProps) => (
  <div className="bg-card border border-border rounded-lg p-3 shadow-elegant hover:shadow-hover transition-smooth">
    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
      <award.icon className="w-4 h-4 text-primary" />
    </div>
    <h3 className="text-sm font-bold text-card-foreground mb-1">{award.title}</h3>
    <p className="text-xs text-muted-foreground leading-snug mb-2">{award.description}</p>
    <div className="pt-2 border-t border-border">
      <p className="text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">{award.sponsor}</span>
      </p>
    </div>
  </div>
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

          {/* Major Awards */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">Major Awards</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {majorAwards.map((award, index) => (
                <AwardCard key={index} award={award} />
              ))}
            </div>
          </div>

          {/* Sponsor Awards */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">Sponsor Awards</h3>
            <p className="text-sm text-muted-foreground text-center mb-4">Tied to specific civic domains</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
              {sponsorAwards.map((award, index) => (
                <AwardCard key={index} award={award} />
              ))}
            </div>
          </div>

          {/* Special Civic Awards */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">Special Civic Awards</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
              {civicAwards.map((award, index) => (
                <AwardCard key={index} award={award} />
              ))}
            </div>
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