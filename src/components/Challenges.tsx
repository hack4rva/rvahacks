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

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, index) => {
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-gradient-to-br from-card to-card/95 rounded-2xl shadow-lg border-2 cursor-pointer overflow-hidden transition-all duration-500 ease-out ${
                  isHovered 
                    ? 'md:col-span-2 lg:col-span-2 border-accent shadow-2xl scale-[1.02] z-20' 
                    : 'border-border hover:border-accent/40 z-10'
                }`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : ''
                }`} />
                
                <div className={`relative p-6 transition-all duration-500 ${
                  isHovered ? 'md:p-8' : ''
                }`}>
                  <div className={`rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 transition-all duration-500 ${
                    isHovered ? 'w-16 h-16' : 'w-12 h-12'
                  }`}>
                    <pillar.icon className={`text-accent transition-all duration-500 ${
                      isHovered ? 'w-8 h-8' : 'w-6 h-6'
                    }`} />
                  </div>
                  
                  <h3 className={`font-bold text-card-foreground mb-3 leading-tight transition-all duration-500 ${
                    isHovered ? 'text-xl md:text-2xl' : 'text-lg'
                  }`}>
                    {pillar.title}
                  </h3>
                  
                  <p className={`text-muted-foreground leading-relaxed transition-all duration-500 ${
                    isHovered ? 'text-base md:text-lg' : 'text-sm'
                  }`}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
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
