import { useState } from "react";
import { Users, Building2, Target, Zap } from "lucide-react";

const opportunities = [
  {
    icon: Users,
    label: "The Talent",
    description: "Thousands of technologists at CoStar, CarMax, Capital One, Dominion, and VCU",
  },
  {
    icon: Building2,
    label: "The Leadership",
    description: "Mayor Danny Avula with a clear action plan for Richmond's future",
  },
  {
    icon: Target,
    label: "The Challenges",
    description: "Real civic problems that need solving, from climate resilience to small business support",
  },
  {
    icon: Zap,
    label: "The Moment",
    description: "A city ready to show what public-private partnership can achieve",
  },
];

export const Opportunity = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <section id="opportunity" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              Why Richmond, Why Now
            </h2>
            <p className="text-sm text-muted-foreground">
              Click to learn more about the opportunity
            </p>
          </div>

          {/* Compact Bubbles */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {opportunities.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedItem(selectedItem === index ? null : index)}
                className={`inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border shadow-sm hover:shadow-elegant transition-smooth ${
                  selectedItem === index
                    ? "border-accent bg-accent/5"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm font-semibold text-card-foreground whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Description Panel */}
          {selectedItem !== null && (
            <div className="bg-card p-5 rounded-xl border-2 border-accent/30 shadow-elegant animate-fade-in">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  {(() => {
                    const Item = opportunities[selectedItem];
                    return <Item.icon className="w-5 h-5 text-accent" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-card-foreground mb-1">
                    {opportunities[selectedItem].label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {opportunities[selectedItem].description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
