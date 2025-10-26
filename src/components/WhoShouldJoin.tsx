import { useState } from "react";
import { Lightbulb, Wrench, Code, Pencil, Megaphone, Heart } from "lucide-react";

const personas = [
  {
    icon: Lightbulb,
    label: "Entrepreneurs",
    description: "Build something that matters. Use your business skills to help Richmond's small businesses thrive, create economic opportunity, or reimagine City services.",
  },
  {
    icon: Wrench,
    label: "Inventors & Makers",
    description: "Apply your creative problem-solving to civic challenges. From hardware hacks to policy innovations to service design.",
  },
  {
    icon: Code,
    label: "Technologists",
    description: "Code for your community. Whether you're a data scientist, full-stack developer, GIS specialist, or UX designer—we need your skills.",
  },
  {
    icon: Pencil,
    label: "Designers & Researchers",
    description: "Create solutions that real Richmonders will actually use. User research, service design, and accessibility matter as much as code.",
  },
  {
    icon: Megaphone,
    label: "Community Leaders",
    description: "You know the problems. Help teams understand the real needs and ensure solutions serve everyone.",
  },
  {
    icon: Heart,
    label: "Families & Supporters",
    description: "Join us Sunday for the celebration! See what's possible when Richmond works together.",
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
              If you care about Richmond, there's a place for you. Click to learn more.
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
