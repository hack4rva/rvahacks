import { Lightbulb, Wrench, Code, Pencil, Megaphone, Heart } from "lucide-react";

const personas = [
  {
    icon: Lightbulb,
    headline: "Entrepreneurs",
    description:
      "Build something that matters. Use your business skills to help Richmond's small businesses thrive, create economic opportunity, or reimagine City services.",
  },
  {
    icon: Wrench,
    headline: "Inventors & Makers",
    description:
      "Apply your creative problem-solving to civic challenges. From hardware hacks to policy innovations to service design.",
  },
  {
    icon: Code,
    headline: "Technologists",
    description:
      "Code for your community. Whether you're a data scientist, full-stack developer, GIS specialist, or UX designer—we need your skills.",
  },
  {
    icon: Pencil,
    headline: "Designers & Researchers",
    description:
      "Create solutions that real Richmonders will actually use. User research, service design, and accessibility matter as much as code.",
  },
  {
    icon: Megaphone,
    headline: "Community Leaders",
    description:
      "You know the problems. Help teams understand the real needs and ensure solutions serve everyone.",
  },
  {
    icon: Heart,
    headline: "Families & Supporters",
    description:
      "Join us Sunday for the celebration! See what's possible when Richmond works together.",
  },
];

export const WhoShouldJoin = () => {
  return (
    <section id="who" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Who Should Join
            </h2>
            <p className="text-lg text-muted-foreground">
              If you care about Richmond, there's a place for you
            </p>
          </div>

          {/* Personas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personas.map((persona, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-elegant hover:shadow-hover transition-smooth border-2 border-border hover:border-accent/30 text-center h-full flex flex-col"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <persona.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Headline */}
                <h3 className="text-xl font-bold text-card-foreground mb-4">
                  {persona.headline}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {persona.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
