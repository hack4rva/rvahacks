import { Building2, Home, Users, Briefcase, Heart, TreePine, BookText } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
