import { Users, Lightbulb, Heart, Building2, Landmark, GraduationCap, Briefcase } from "lucide-react";

const sectors = [
  { icon: Briefcase, label: "Tech Industry" },
  { icon: Landmark, label: "City Government" },
  { icon: Heart, label: "Nonprofits" },
  { icon: GraduationCap, label: "Higher Education" },
];

const teams = [
  {
    title: "Organizers",
    icon: Users,
    description: "Cross-sector leaders coordinating strategy, logistics, and partnerships to make the hackathon happen.",
    count: "Core Team",
  },
  {
    title: "Advisors",
    icon: Lightbulb,
    description: "Domain experts and civic leaders providing guidance on challenges, judging criteria, and implementation pathways.",
    count: "Advisory Board",
  },
  {
    title: "Volunteers",
    icon: Heart,
    description: "Community members supporting operations, mentorship, and participant experience throughout the weekend.",
    count: "Join Us",
  },
];

export const Leadership = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Who Makes This Happen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A coalition of leaders from across Richmond's tech, civic, nonprofit, and education sectors.
            </p>
          </div>

          {/* Cross-sector badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground"
              >
                <sector.icon className="w-4 h-4 text-accent" />
                {sector.label}
              </div>
            ))}
          </div>

          {/* Team Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {teams.map((team, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border shadow-elegant hover:border-accent/40 transition-smooth text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <team.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{team.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {team.description}
                </p>
                <span className="inline-block px-3 py-1 rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                  {team.count}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <p className="text-center text-sm text-muted-foreground mt-10">
            Interested in joining the team? <a href="/partners" className="text-accent hover:underline">Get involved →</a>
          </p>
        </div>
      </div>
    </section>
  );
};