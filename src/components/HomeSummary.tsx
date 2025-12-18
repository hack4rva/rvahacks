import { Home, GraduationCap, Car } from "lucide-react";

const focusAreasSummary = [
  {
    icon: Home,
    title: "Housing & Land Use",
  },
  {
    icon: GraduationCap,
    title: "Education & Workforce",
  },
  {
    icon: Car,
    title: "Transportation & Mobility",
  },
];

export const HomeSummary = () => {
  return (
    <section id="what" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-center animate-fade-in">
            What We're Building
          </h2>

          <p className="text-lg text-foreground/90 leading-relaxed text-center mb-4 max-w-3xl mx-auto animate-fade-in">
            Hack for RVA brings together Richmond's brightest minds to build
            a thriving economy for the City of Richmond.
          </p>
          
          <p className="text-base text-muted-foreground leading-relaxed text-center mb-10 max-w-2xl mx-auto animate-fade-in">
            In partnership with the City of Richmond and local nonprofits, winning solutions have real pathways to implementation and lasting community impact.
          </p>

          {/* Focus Areas - Compact */}
          <div className="grid md:grid-cols-3 gap-4 mb-10 animate-fade-in">
            {focusAreasSummary.map((area, index) => (
              <div
                key={index}
                className="bg-card p-5 rounded-xl border border-border shadow-sm hover:border-accent/40 transition-smooth text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <area.icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-base font-semibold text-foreground">{area.title}</h4>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

