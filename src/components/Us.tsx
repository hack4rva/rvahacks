import { Users } from "lucide-react";
import fordPrior from "@/assets/ford-prior.png";
import michaelKolbe from "@/assets/michael-kolbe.png";
import dannyAvula from "@/assets/danny-avula.png";
import crystalHarvey from "@/assets/crystal-harvey.png";

import tomBecker from "@/assets/tom-becker.png";
import ankitMathur from "@/assets/ankit-mathur.png";
import drewCleveland from "@/assets/drew-cleveland.png";
import alexOtanez from "@/assets/alex-otanez.png";
import aprilPalmer from "@/assets/april-palmer.png";
import nickSerfass from "@/assets/nick-serfass.png";
import sinclairJenks from "@/assets/sinclair-jenks.png";
import adamWoodward from "@/assets/adam-woodward.png";
import christianMarkow from "@/assets/christian-markow.png";
import heatherLyne from "@/assets/heather-lyne.png";
import richmondSeal from "@/assets/richmond-seal.png";
import aiReadyRvaLogo from "@/assets/ai-ready-rva-logo.png";

const coreTeam = [
  { name: "Ford Prior", role: "Floater", image: fordPrior, linkedin: "https://www.linkedin.com/in/ford-prior" },
  { name: "Crystal Harvey", role: "All Ops", image: crystalHarvey, linkedin: undefined },
  { name: "TBD", role: "Onsite Ops", image: undefined, linkedin: undefined },
  { name: "Michael Kolbe", role: "City Liaison", image: michaelKolbe, linkedin: undefined },
  { name: "Sinclair Jenks", role: "Community Engagement", image: sinclairJenks, linkedin: undefined },
  { name: "Christian Markow", role: "Group Innovation", image: christianMarkow, linkedin: undefined },
  { name: "Alex Otanez", role: "Corporate Partnerships", image: alexOtanez, linkedin: undefined },
  { name: "Heather Lyne", role: "Ecosystem", image: heatherLyne, linkedin: undefined },
  { name: "April Palmer", role: "K12+ Partnerships", image: aprilPalmer, linkedin: undefined },
];

const advisoryTeam = [
  { name: "Tom Becker", role: "Integrations", image: tomBecker, linkedin: undefined },
  { name: "Danny Avula", role: "Strategy", image: dannyAvula, linkedin: undefined },
  { name: "Ankit Mathur", role: "Vision", image: ankitMathur, linkedin: undefined },
  { name: "Adam Woodward", role: "Entrepreneurial Ecosystems", image: adamWoodward, linkedin: undefined },
  { name: "Drew Cleveland", role: "Vibe", image: drewCleveland, linkedin: undefined },
  { name: "Nick Serfass", role: "Execution", image: nickSerfass, linkedin: undefined },
];

const partners = [
  {
    name: "City of Richmond / Mayor's Office",
    subtitle:
      "Strategic priorities | Implementation pathway | City department champions",
    logo: richmondSeal,
  },
  {
    name: "AI Ready RVA",
    subtitle: "AI education | Workforce development | Community training",
    logo: aiReadyRvaLogo,
  },
];

export const Us = () => {
  return (
    <section id="us" className="py-20 md:py-32 bg-secondary/10">
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
                          className="w-24 h-24 rounded-full object-cover border-2 border-border"
                        />
                      </a>
                    ) : (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover border-2 border-border mb-4"
                      />
                    )
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
                          className="w-24 h-24 rounded-full object-cover border-2 border-border"
                        />
                      </a>
                    ) : (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover border-2 border-border mb-4"
                      />
                    )
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

          {/* Partners */}
          <div className="mt-16">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Users className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">
                Partners
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-card p-6 md:p-8 rounded-xl shadow-elegant hover:shadow-hover transition-smooth border border-border group hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Logo */}
                  <div className="h-20 md:h-24 bg-muted/40 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-smooth px-4">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="max-h-16 w-auto object-contain"
                      />
                    ) : (
                      <span className="text-muted-foreground/60 group-hover:text-accent font-bold text-lg text-center">
                        {partner.name}
                      </span>
                    )}
                  </div>
                  {/* Subtitle */}
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {partner.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
