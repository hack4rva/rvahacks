import { Lightbulb, Wrench, Code, Pencil, Megaphone, Heart } from "lucide-react";

const personas = [
  { icon: Lightbulb, label: "Entrepreneurs" },
  { icon: Wrench, label: "Inventors & Makers" },
  { icon: Code, label: "Technologists" },
  { icon: Pencil, label: "Designers & Researchers" },
  { icon: Megaphone, label: "Community Leaders" },
  { icon: Heart, label: "Families & Supporters" },
];

export const WhoShouldJoin = () => {
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
              If you care about Richmond, there's a place for you
            </p>
          </div>

          {/* Compact Personas Bubbles */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {personas.map((persona, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-3 bg-card rounded-full border-2 border-border hover:border-accent/50 shadow-sm hover:shadow-elegant transition-smooth cursor-default"
              >
                <persona.icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-semibold text-card-foreground whitespace-nowrap">
                  {persona.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
