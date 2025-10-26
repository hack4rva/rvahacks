import { Code, Users, Lightbulb, Award } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Build Real Solutions",
    description:
      "Work on projects that address actual challenges facing Richmond residents and businesses.",
  },
  {
    icon: Users,
    title: "Collaborate & Network",
    description:
      "Connect with fellow innovators, mentors, and civic leaders passionate about our city.",
  },
  {
    icon: Lightbulb,
    title: "Learn & Grow",
    description:
      "Participate in workshops, get mentorship, and expand your technical and civic skills.",
  },
  {
    icon: Award,
    title: "Win Prizes",
    description:
      "Compete for prizes and recognition while making a meaningful impact on Richmond.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            What is Hack for RVA?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hack for RVA is Richmond's premier civic hackathon, bringing
            together talented developers, designers, entrepreneurs, and civic
            leaders for an intensive weekend of innovation. Together, we'll
            tackle real challenges facing our city and build solutions that
            matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-elegant hover:shadow-hover transition-smooth border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
