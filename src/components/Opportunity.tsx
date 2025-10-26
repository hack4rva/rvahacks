import { Users, Building2, Target, Zap } from "lucide-react";

const opportunities = [
  { icon: Users, label: "The Talent" },
  { icon: Building2, label: "The Leadership" },
  { icon: Target, label: "The Challenges" },
  { icon: Zap, label: "The Moment" },
];

export const Opportunity = () => {
  return (
    <section id="opportunity" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
            Why Richmond, Why Now
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            The talent. The leadership. The challenges. The moment.
          </p>

          {/* Compact Bubbles */}
          <div className="flex flex-wrap justify-center gap-3">
            {opportunities.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border hover:border-accent/50 shadow-sm hover:shadow-elegant transition-smooth cursor-default"
              >
                <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm font-semibold text-card-foreground whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
