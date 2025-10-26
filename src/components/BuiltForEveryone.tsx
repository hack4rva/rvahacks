import { CheckCircle2 } from "lucide-react";

const inclusionFeatures = [
  "Flexible schedule (choose Friday OR Saturday)",
  "Family-friendly Sunday celebration",
  "No registration fee",
  "Free meals and refreshments",
  "Scholarships for transit/childcare if needed",
  "Non-technical roles explicitly welcomed",
  "Collaborative, not competitive culture",
];

export const BuiltForEveryone = () => {
  return (
    <section id="inclusion" className="py-20 md:py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Richmond's Hackathon Should Look Like Richmond
            </h2>
            <p className="text-lg text-muted-foreground">
              Intentionally designed for accessibility
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Checklist Column */}
            <div className="space-y-4">
              {inclusionFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-card/50 rounded-lg hover:bg-card transition-smooth"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90 leading-relaxed font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Callout Box Column */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-accent/10 border-2 border-accent/30 rounded-2xl p-8 shadow-elegant">
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">40%</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    TARGET: Women/Non-binary Participants
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Typical hackathons are 15% — we're doing better
                  </p>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[40%] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Additional Callout */}
              <div className="mt-6 p-6 bg-card rounded-xl border border-border">
                <p className="text-foreground/80 leading-relaxed text-center">
                  <strong className="text-foreground">Need support to attend?</strong>
                  <br />
                  We offer scholarships for transit, childcare, or other accessibility needs.
                  No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
