import { Trees, Smartphone, Store, Droplet, MapPin } from "lucide-react";

const challenges = [
  {
    icon: Trees,
    title: "Tree Equity Scorecard",
    tagline: "Help Richmond achieve RVAgreen 2050 goals",
    brief:
      "Build a GIS dashboard showing tree canopy coverage, heat vulnerability, and where to plant next.",
    badge: "PropTech Track",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
  },
  {
    icon: Smartphone,
    title: "One-Click RVA Reporting",
    tagline: "Modernize how residents connect with City Hall",
    brief:
      "Redesign 311 reporting so issues get to the right department, fast.",
    badge: "City Hall Modernization",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
  },
  {
    icon: Store,
    title: "Richmond Business Navigator",
    tagline: "Support Richmond's entrepreneurs",
    brief:
      "Help new businesses understand zoning, licenses, and support programs in one place.",
    badge: "Economic Opportunity",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
  },
  {
    icon: Droplet,
    title: "Flood Risk Mapper",
    tagline: "Build climate resilience",
    brief:
      "Show residents their flood risk and what the City is doing about it.",
    badge: "PropTech Track",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
  },
  {
    icon: MapPin,
    title: "Green Space Access Map",
    tagline: "Ensure every Richmonder can reach quality parks",
    brief:
      "Track progress toward 10-minute access for all neighborhoods.",
    badge: "PropTech Track",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
  },
];

export const CivicChallenges = () => {
  return (
    <section id="civic-challenges" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Real Problems, Real Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Co-designed with City departments and aligned with Mayor Avula's
              Action Plan
            </p>
          </div>

          {/* Challenges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-xl border border-border shadow-elegant hover:shadow-hover transition-smooth overflow-hidden"
              >
                {/* Card Content */}
                <div className="p-6">
                  {/* Badge */}
                  <div className="mb-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${challenge.badgeColor}`}
                    >
                      {challenge.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <challenge.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {challenge.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-muted-foreground text-sm mb-3">
                    {challenge.tagline}
                  </p>

                  {/* Brief - Hidden by default, shown on hover */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                    <div className="pt-3 border-t border-border">
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {challenge.brief}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground font-medium">
              Plus 3-5 more challenges announced in February 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
