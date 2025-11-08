import { Award, Users, Lightbulb, Rocket, Target } from "lucide-react";

const awards = [
  {
    title: "Mayor's Choice",
    icon: Award,
    description: "Most useful solution for the city",
    sponsor: "The Office of Mayor Danny Avula",
  },
  {
    title: "People's Choice",
    icon: Users,
    description: "Most popular via live Doodle poll at the event",
    sponsor: "the Community",
  },
  {
    title: "Most Innovative",
    icon: Lightbulb,
    description: "Most creative and groundbreaking approach",
    sponsor: "Higher Education Partners",
  },
  {
    title: "Startup Material",
    icon: Rocket,
    description: "Greatest potential for real-world startup",
    sponsor: "Startup Ecosystem",
  },
  {
    title: "Moonshot",
    icon: Target,
    description: "Most ambitious and visionary solution",
    sponsor: "TBD",
  },
];

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
              Submit your solution by Saturday evening. 10 finalist teams will
              pitch live on Sunday. 5 judges, including Mayor
              Avula, will select winners and runners-up across 5 award
              categories.
            </p>
          </div>

          {/* Timeline */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-5 mb-10 max-w-3xl mx-auto">
            <div className="space-y-2.5">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                <p className="text-sm text-card-foreground">
                  <span className="font-bold">Saturday Evening:</span> All
                  solutions due
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                <p className="text-sm text-card-foreground">
                  <span className="font-bold">Sunday Finals:</span> 10
                  finalists present 5-minute live pitches
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                <p className="text-sm text-card-foreground">
                  <span className="font-bold">Winners Announced:</span> Winner
                  and runner-up for each category
                </p>
              </div>
            </div>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-3 shadow-elegant hover:shadow-hover transition-smooth"
              >
                {/* Icon */}
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <award.icon className="w-4 h-4 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-card-foreground mb-1">
                  {award.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-snug mb-2">
                  {award.description}
                </p>

                {/* Sponsor */}
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {award.sponsor}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Each category will have a winner and runner-up recognized at the
              awards ceremony.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
