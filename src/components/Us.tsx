import { Users } from "lucide-react";
import fordPrior from "@/assets/ford-prior.png";
import michaelKolbe from "@/assets/michael-kolbe.png";
import dannyAvula from "@/assets/danny-avula.png";
import crystalHarvey from "@/assets/crystal-harvey.png";
import ankitMathur from "@/assets/ankit-mathur.png";
import sinclairJenks from "@/assets/sinclair-jenks.png";
import christianMarkow from "@/assets/christian-markow.png";
import heatherLyne from "@/assets/heather-lyne-blue.png";
import ashHarris from "@/assets/ash-harris-blue.png";

const coreTeam = [
  { name: "Ford Prior", role: "Co-Organizer", image: fordPrior, linkedin: "https://www.linkedin.com/in/ford-prior" },
  { name: "Crystal Harvey", role: "Co-Organizer", image: crystalHarvey, linkedin: undefined },
  { name: "Ash Harris", role: "Onsite Ops", image: ashHarris, linkedin: undefined },
  { name: "Michael Kolbe", role: "City Liaison", image: michaelKolbe, linkedin: undefined },
  { name: "Sinclair Jenks", role: "Community Engagement", image: sinclairJenks, linkedin: undefined },
  { name: "Heather Lyne", role: "Entrepreneurial Ecosystems", image: heatherLyne, linkedin: undefined },
];

const advisoryTeam = [
  { name: "Danny Avula", role: "Strategy", image: dannyAvula, linkedin: undefined },
  { name: "Ankit Mathur", role: "Vision", image: ankitMathur, linkedin: undefined },
  { name: "Christian Markow", role: "Group Innovation", image: christianMarkow, linkedin: undefined },
];

export const Us = () => {
  return (
    <div className="space-y-12">
      {/* Core Team */}
      <div>
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
              {member.image ? (
                member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover object-top"
                    />
                  </a>
                ) : (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover object-top mb-4"
                  />
                )
              ) : (
                <div className="w-24 h-24 rounded-full bg-muted mb-4 flex items-center justify-center">
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
              {member.image ? (
                member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover object-top"
                    />
                  </a>
                ) : (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover object-top mb-4"
                  />
                )
              ) : (
                <div className="w-24 h-24 rounded-full bg-muted mb-4 flex items-center justify-center">
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
  );
};
