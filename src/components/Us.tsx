import { Users } from "lucide-react";
import fordPrior from "@/assets/ford-prior.jpg";

const coreTeam = [
  { name: "Ford Prior", role: "Hype", image: fordPrior, linkedin: "https://www.linkedin.com/in/ford-prior" },
  { name: "Crystal Harvey", role: "Marketing & Comms", image: undefined, linkedin: undefined },
  { name: "Claire Jordan", role: "Onsite Ops", image: undefined, linkedin: undefined },
  { name: "Alex Otanez", role: "Private Partnerships", image: undefined, linkedin: undefined },
  { name: "Drew Cleveland", role: "Public Partnerships", image: undefined, linkedin: undefined },
  { name: "Michael Kolbe", role: "City Liaison", image: undefined, linkedin: undefined },
  { name: "Sinclair Jenks", role: "Engagement", image: undefined, linkedin: undefined },
  { name: "Adam Woodward", role: "University Partnerships", image: undefined, linkedin: undefined },
  { name: "Michael Gafarri", role: "Planning", image: undefined, linkedin: undefined },
];

const advisoryTeam = [
  { name: "Paul Devitt, PhD", role: "Integrations", image: undefined, linkedin: undefined },
  { name: "Danny Avula", role: "Strategy", image: undefined, linkedin: undefined },
  { name: "Ankit Matur", role: "Vision", image: undefined, linkedin: undefined },
  { name: "Christian Markow", role: "Experience", image: undefined, linkedin: undefined },
  { name: "April Palmer", role: "Vibe", image: undefined, linkedin: undefined },
  { name: "Nick Serfass", role: "Execution", image: undefined, linkedin: undefined },
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
            <p className="text-lg text-muted-foreground mb-2">
              100% volunteer planning & execution team
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              We are a vibrant mix of Richmonders passionate about bridging the gap between technology, business, and civic good
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
                  className="bg-card p-6 rounded-xl shadow-elegant hover:shadow-hover transition-smooth border border-border flex flex-col items-center text-center"
                >
                  {member.image && member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-4 hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover border-2 border-border"
                      />
                    </a>
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-muted mb-4 flex items-center justify-center border-2 border-border">
                      <Users className="w-12 h-12 text-muted-foreground" />
                    </div>
                  )}
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
                  className="bg-card p-6 rounded-xl shadow-elegant hover:shadow-hover transition-smooth border border-border flex flex-col items-center text-center"
                >
                  {member.image && member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-4 hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover border-2 border-border"
                      />
                    </a>
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-muted mb-4 flex items-center justify-center border-2 border-border">
                      <Users className="w-12 h-12 text-muted-foreground" />
                    </div>
                  )}
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
