import { Building2, Home, Users, Briefcase, Heart, TreePine, BookText } from "lucide-react";
import { useState } from "react";

const pillars = [
  {
    icon: Building2,
    title: "A Thriving City Hall",
    description: "A City Hall that gets things done",
  },
  {
    icon: Home,
    title: "Thriving Neighborhoods",
    description: "Neighborhoods that meet our housing needs",
  },
  {
    icon: Users,
    title: "Thriving Families",
    description: "Communities where every child succeeds",
  },
  {
    icon: Briefcase,
    title: "A Thriving Economy",
    description: "An economy that leaves no one behind",
  },
  {
    icon: Heart,
    title: "Thriving and Inclusive Communities",
    description: "Where everyone's rights are protected",
  },
  {
    icon: TreePine,
    title: "A Thriving and Sustainable Built Environment",
    description: "Planned for future generations",
  },
  {
    icon: BookText,
    title: "A City That Tells its Stories",
    description: "And tells the truth about its past",
  },
];

export const Challenges = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section id="challenges" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Danny's Action Plan
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            All civic challenges are aligned with the 7 Pillars of Mayor Avula's Action Plan. 
            We're focusing on what matters most to Richmond's future.
          </p>
          <a 
            href="https://rva.gov/press-releases-and-announcements/news/mayor-danny-avula-launches-mayoral-action-plan-map"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-smooth underline"
          >
            Read the Full Action Plan →
          </a>
        </div>

        {/* Desktop: Expandable Shell Layout */}
        <div className="hidden lg:block max-w-6xl mx-auto perspective-1000">
          <div className="relative h-[600px] flex items-center justify-center">
            {pillars.map((pillar, index) => {
              const isExpanded = expandedCard === index;
              const angle = (index - 3) * 8; // Spread cards in an arc
              const baseTranslateY = Math.abs(index - 3) * 15; // Create arc shape
              
              return (
                <div
                  key={index}
                  onMouseEnter={() => setExpandedCard(index)}
                  onMouseLeave={() => setExpandedCard(null)}
                  className="absolute transition-all duration-500 ease-out cursor-pointer"
                  style={{
                    zIndex: isExpanded ? 50 : 10 - Math.abs(index - 3),
                    transform: isExpanded 
                      ? `translateX(${(index - 3) * 280}px) translateY(0px) scale(1.05) rotateY(0deg)`
                      : `translateX(${(index - 3) * 60}px) translateY(${baseTranslateY}px) scale(0.9) rotateY(${angle}deg)`,
                    opacity: isExpanded ? 1 : 0.85,
                  }}
                >
                  <div className={`bg-card rounded-2xl shadow-2xl border-2 transition-all duration-500 ${
                    isExpanded 
                      ? 'border-accent w-[260px] h-[400px] p-8' 
                      : 'border-border w-[200px] h-[300px] p-6'
                  }`}>
                    <div className={`rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 transition-all duration-500 ${
                      isExpanded ? 'w-16 h-16' : 'w-12 h-12'
                    }`}>
                      <pillar.icon className={`text-accent transition-all duration-500 ${
                        isExpanded ? 'w-8 h-8' : 'w-6 h-6'
                      }`} />
                    </div>
                    <h3 className={`font-bold text-card-foreground mb-3 leading-tight transition-all duration-500 ${
                      isExpanded ? 'text-xl' : 'text-base'
                    }`}>
                      {pillar.title}
                    </h3>
                    <p className={`text-muted-foreground leading-relaxed transition-all duration-500 ${
                      isExpanded ? 'text-base opacity-100' : 'text-sm opacity-70'
                    }`}>
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: Grid Layout */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group bg-card p-6 rounded-xl shadow-elegant hover:shadow-hover transition-smooth border border-border hover:border-accent/40 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                <pillar.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2 leading-tight">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Specific challenge details will be announced closer to the event, aligned with these pillars.
          </p>
        </div>
      </div>
    </section>
  );
};
