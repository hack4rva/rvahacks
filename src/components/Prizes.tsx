import { Award, Users, Lightbulb, Rocket, Target } from "lucide-react";

const awards = [
  {
    title: "Mayor's Choice",
    icon: Award,
    description: "Most useful solution for the city",
    sponsor: "Mayor Danny Avula",
  },
  {
    title: "People's Choice",
    icon: Users,
    description: "Most popular via live Doodle poll at the event",
    sponsor: "Venture Richmond",
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
    sponsor: "CoStar",
  },
];

export const Prizes = () => {
  return (
    <section id="prizes" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Prizes & Recognition
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Submit your solution by Saturday evening. 10 finalist teams will
              pitch live on Sunday at Brambly Park. 5 judges, including Mayor
              Avula, will select winners and runners-up across 5 award
              categories.
            </p>
          </div>

          {/* Timeline */}
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-12 max-w-3xl mx-auto">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-card-foreground">
                  <span className="font-bold">Saturday Evening:</span> All
                  solutions due
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-card-foreground">
                  <span className="font-bold">Sunday at Brambly Park:</span> 10
                  finalists present 5-minute live pitches
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-card-foreground">
                  <span className="font-bold">Winners Announced:</span> Winner
                  and runner-up for each category
                </p>
              </div>
            </div>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-elegant hover:shadow-hover transition-smooth"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <award.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {award.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {award.description}
                </p>

                {/* Sponsor */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Sponsored by{" "}
                    <span className="font-semibold text-foreground">
                      {award.sponsor}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Each category will have a winner and runner-up recognized at the
              awards ceremony.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
