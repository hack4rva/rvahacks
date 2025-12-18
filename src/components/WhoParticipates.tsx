import { Link } from "react-router-dom";
import { ArrowRight, Code, TrendingUp, Palette } from "lucide-react";

const participantTypes = [
  {
    title: "Builders",
    description: "Developers, engineers, data scientists—build the tech that powers solutions",
    icon: Code,
  },
  {
    title: "Strategists",
    description: "Domain experts, project managers, policymakers—shape the vision and pitch",
    icon: TrendingUp,
  },
  {
    title: "Creatives",
    description: "Designers, storytellers, researchers—make solutions beautiful and usable",
    icon: Palette,
  },
];

export const WhoParticipates = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Who Participates
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-in">
              Every great team needs Builders, Strategists, and Creatives. Find your role.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {participantTypes.map((type, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border shadow-elegant hover:shadow-hover transition-smooth text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
                  <type.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <Link 
              to="/about#participants"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-smooth"
            >
              Learn more about participating <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
