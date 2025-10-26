import { Users, Building2, Target, Zap } from "lucide-react";

const opportunities = [
  {
    icon: Users,
    title: "The Talent",
    description:
      "Thousands of technologists at CoStar, CarMax, Capital One, Dominion, and VCU",
  },
  {
    icon: Building2,
    title: "The Leadership",
    description:
      "Mayor Danny Avula with a clear action plan for Richmond's future",
  },
  {
    icon: Target,
    title: "The Challenges",
    description:
      "Real civic problems that need solving, from climate resilience to small business support",
  },
  {
    icon: Zap,
    title: "The Moment",
    description:
      "A city ready to show what public-private partnership can achieve",
  },
];

export const Opportunity = () => {
  return (
    <section id="opportunity" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 inline-block relative">
              The Opportunity
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-accent rounded-full" />
            </h2>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Why Richmond, Why Now
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((item, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-xl shadow-elegant hover:shadow-hover transition-smooth border border-border hover:border-accent/40 h-full flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/15 transition-smooth">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
