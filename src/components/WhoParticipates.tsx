import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const participantTypes = [
  {
    title: "Builders & Engineers",
    description: "Software developers, data engineers, no-code builders",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Designers",
    description: "UX/UI designers, product designers, visual thinkers",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Domain Experts",
    description: "Policy experts, researchers, community advocates",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
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
              You don't need to be a programmer. Diverse skills build better solutions.
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
                  {type.icon}
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
              See all participant types <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

