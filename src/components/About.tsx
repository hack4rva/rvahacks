import { Users, Target, Calendar, DollarSign, Gift, Home, GraduationCap, Car } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "350+",
    label: "Participants",
  },
  {
    icon: Target,
    value: "1",
    label: "City Goal",
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

const focusAreas = [
  {
    icon: Home,
    title: "Housing & Land Use",
    description: "Tackle affordability, zoning transparency, and equitable development across Richmond's neighborhoods.",
  },
  {
    icon: GraduationCap,
    title: "Education & Workforce Development",
    description: "Connect residents to skills training, job pathways, and economic opportunity.",
  },
  {
    icon: Car,
    title: "Transportation & Mobility",
    description: "Improve access to transit, reduce commute barriers, and enable citywide connectivity.",
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

          <p className="text-lg text-foreground/90 leading-relaxed text-center mb-6 max-w-3xl mx-auto animate-fade-in">
            Hack for RVA brings together Richmond's brightest minds to build
            a thriving economy for the City of Richmond.
          </p>
          
          <p className="text-base text-muted-foreground leading-relaxed text-center mb-12 max-w-3xl mx-auto animate-fade-in">
            This isn't just about building apps—it's about designing civic systems that work. In partnership with the <strong className="text-foreground">City of Richmond</strong> and local nonprofits, winning solutions will have real pathways to implementation, pilot programs, and lasting community impact.
          </p>

          {/* Focus Areas */}
          <div className="grid md:grid-cols-3 gap-4 mb-16 animate-fade-in">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border shadow-elegant hover:border-accent/40 transition-smooth"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{area.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
              The Opportunity
            </h3>
            <div className="bg-card p-6 md:p-8 rounded-xl border border-border shadow-elegant">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Richmond is at an inflection point. We have:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-xl">✅</span>
                  <div>
                    <strong className="text-foreground">The Talent</strong>
                    <p className="text-sm text-muted-foreground">Thousands of technologists at major RVA companies and VCU</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-xl">✅</span>
                  <div>
                    <strong className="text-foreground">The Leadership</strong>
                    <p className="text-sm text-muted-foreground">Mayor Danny Avula with a clear action plan for Richmond's future</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-xl">✅</span>
                  <div>
                    <strong className="text-foreground">The Challenge</strong>
                    <p className="text-sm text-muted-foreground">Build solutions that grow jobs, cut poverty, support small businesses, and create wealth for all Richmonders</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-xl">✅</span>
                  <div>
                    <strong className="text-foreground">The Moment</strong>
                    <p className="text-sm text-muted-foreground">A city ready to show what public-private partnership can achieve</p>
                  </div>
                </div>
              </div>
              <p className="text-foreground font-semibold mt-6 text-center">
                But we've never channeled this energy toward civic good. <span className="text-accent">Until now.</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card p-3 md:p-4 rounded-xl shadow-elegant hover:shadow-hover transition-smooth border border-border hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <stat.icon className="w-4 h-4 text-accent" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">
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
