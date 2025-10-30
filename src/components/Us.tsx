import { Users } from "lucide-react";

const coreTeam = [
  { name: "Ford Prior", role: "Hype" },
  { name: "Crystal Harvey", role: "Marketing & Comms" },
  { name: "Claire Jordan", role: "Onsite Ops" },
  { name: "Alex Otanez", role: "Private Partnerships" },
  { name: "Drew Cleveland", role: "Public Partnerships" },
  { name: "Michael Kolbe", role: "City Liaison" },
  { name: "Sinclair Jenks", role: "Engagement" },
  { name: "Adam Woodward", role: "University Partnerships" },
  { name: "Michael Gafarri", role: "Planning" },
];

const advisoryTeam = [
  { name: "Paul Devitt, PhD", role: "Integrations" },
  { name: "Danny Avula", role: "Strategy" },
  { name: "Ankit Matur", role: "Vision" },
  { name: "Christian Markow", role: "Experience" },
  { name: "April Palmer", role: "Vibe" },
  { name: "Nick Serfass", role: "Execution" },
];

export const Us = () => {
  return (
    <section id="us" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              100% volunteer planning & execution team
            </p>
          </div>

          {/* Core Team */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Users className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">Core Team</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreTeam.map((member, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-elegant hover:shadow-hover transition-smooth border border-border"
                >
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {member.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Advisory Team */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Users className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">
                Advisory Team
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advisoryTeam.map((member, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-elegant hover:shadow-hover transition-smooth border border-border"
                >
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {member.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
