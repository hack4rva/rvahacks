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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="challenges" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Danny's Action Plan
          </h2>
          <p className="text-xl text-foreground font-semibold leading-relaxed mb-4">
            Mayor Avula didn't just want to talk about ideas—he set a clear vision for the city we can build together. 
            The Mayoral Action Plan (MAP) is our roadmap: specific goals, measurable progress, and a shared commitment to make Richmond thrive for everyone.
          </p>
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-3">
            {pillars.map((pillar, index) => {
              const isActive = hoveredCard === index;
              return (
                <button
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onFocus={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`w-full text-left rounded-xl border transition-smooth bg-card/90 backdrop-blur-sm ${
                    isActive ? 'border-accent shadow-hover' : 'border-border hover:border-accent/40'
                  }`}
                >
                  <div className="flex items-center gap-3 p-4">
                    <div className={`rounded-lg bg-accent/10 flex items-center justify-center transition-smooth ${
                      isActive ? 'w-12 h-12' : 'w-10 h-10'
                    }`}>
                      <pillar.icon className={`text-accent ${isActive ? 'w-6 h-6' : 'w-5 h-5'}`} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-card-foreground font-bold">{pillar.title}</h3>
                      <p className="text-muted-foreground text-sm truncate">{pillar.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="lg:col-span-7">
            <div className="relative h-full rounded-2xl border border-border bg-card shadow-elegant overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
              <div className="relative p-6 lg:p-10 transition-smooth">
                {(() => {
                  const i = hoveredCard ?? 0;
                  const ActiveIcon = pillars[i].icon;
                  return (
                    <div className="space-y-5">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center">
                          <ActiveIcon className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground">{pillars[i].title}</h3>
                      </div>
                      <p className="text-muted-foreground text-base lg:text-lg">
                        {pillars[i].description}
                      </p>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
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
