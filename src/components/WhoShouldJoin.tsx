import { useState } from "react";
import { Code, TrendingUp, Palette, Heart } from "lucide-react";

const personas = [
  {
    icon: Code,
    label: "Hackers",
    description: "Software developers, data scientists, engineers, no-code builders. You turn ideas into working prototypes. Whether you're writing Python, building in Bubble, or wrangling APIs—we need your skills to make solutions real.",
  },
  {
    icon: TrendingUp,
    label: "Hustlers",
    description: "Business strategists, project managers, policy experts, domain specialists. You shape the vision, understand the problem deeply, manage the team, and pitch to judges. Great ideas need people who can make them viable.",
  },
  {
    icon: Palette,
    label: "Artists",
    description: "UX/UI designers, graphic designers, storytellers, content creators. You make solutions beautiful, accessible, and human. From wireframes to pitch decks to demo videos—your creativity brings ideas to life.",
  },
  {
    icon: Heart,
    label: "Community",
    description: "Join us Sunday for the public celebration! See what's possible when Richmond works together. Bring your family, friends, and neighbors to the awards ceremony at the Science Museum.",
  },
];

export const WhoShouldJoin = () => {
  const [selectedPersona, setSelectedPersona] = useState<number | null>(null);

  return (
    <section id="who" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Who Should Join
            </h2>
            <p className="text-base text-muted-foreground">
              Every winning team needs Hackers, Hustlers, and Artists. Click to learn more.
            </p>
          </div>

          {/* Compact Personas Bubbles */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {personas.map((persona, index) => (
              <button
                key={index}
                onClick={() => setSelectedPersona(selectedPersona === index ? null : index)}
                className={`inline-flex items-center gap-2 px-4 py-3 bg-card rounded-full border-2 shadow-sm hover:shadow-elegant transition-smooth ${
                  selectedPersona === index
                    ? "border-accent bg-accent/5"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <persona.icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-semibold text-card-foreground whitespace-nowrap">
                  {persona.label}
                </span>
              </button>
            ))}
          </div>

          {/* Description Panel */}
          {selectedPersona !== null && (
            <div className="bg-card p-6 rounded-xl border-2 border-accent/30 shadow-elegant animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  {(() => {
                    const Persona = personas[selectedPersona];
                    return <Persona.icon className="w-6 h-6 text-accent" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {personas[selectedPersona].label}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {personas[selectedPersona].description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
