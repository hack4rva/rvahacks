import { Users, Target, Calendar, DollarSign, Gift } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Participants",
  },
  {
    icon: Target,
    value: "7",
    label: "City Goals",
  },
  {
    icon: Calendar,
    value: "48 Hours",
    label: "Friday AM - Saturday PM",
  },
  {
    icon: DollarSign,
    value: "$25K",
    label: "Prize Money",
  },
  {
    icon: Gift,
    value: "Free",
    label: "Registration, lunch, swag",
  },
];

export const About = () => {
  return (
    <section id="what" className="py-16 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8 text-center animate-fade-in">
            What We're Building
          </h2>

          <p className="text-lg text-foreground/90 leading-relaxed text-center mb-12 max-w-3xl mx-auto animate-fade-in">
            Hack for RVA brings together Richmond's brightest minds to solve
            real problems for the City of Richmond.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card p-4 md:p-6 rounded-xl shadow-elegant hover:shadow-hover transition-smooth border border-border hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
