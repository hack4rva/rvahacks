import { useState } from "react";
import { Users, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import fordPrior from "@/assets/ford-prior.png";
import michaelKolbe from "@/assets/michael-kolbe.png";
import dannyAvula from "@/assets/danny-avula.png";
import crystalHarvey from "@/assets/crystal-harvey.png";
import ankitMathur from "@/assets/ankit-mathur.png";
import sinclairJenks from "@/assets/sinclair-jenks.png";
import christianMarkow from "@/assets/christian-markow.png";
import heatherLyne from "@/assets/heather-lyne-blue.png";
import ashHarris from "@/assets/ash-harris-blue.png";
import willMelton from "@/assets/will-melton.png";
import mikeHuddleston from "@/assets/mike-huddleston.png";

const coreTeam = [
  { 
    name: "Ford Prior", 
    role: "Event Director", 
    image: fordPrior, 
    linkedin: "https://www.linkedin.com/in/ford-prior", 
    bio: "Ford will oversee tech infrastructure, platform administration, and competition integrity. He'll recruit leadership for: Platform Admin, Hacker Space Lead, Judge Coordinator, and Help Desk Lead." 
  },
  { 
    name: "Crystal Harvey", 
    role: "Venue & Operations", 
    image: crystalHarvey, 
    linkedin: undefined, 
    bio: "Crystal will manage venue operations and logistics at the Science Museum. She'll recruit leadership for: Friday Operations Lead, Sunday Operations Lead, Registration Manager, and AV/Catering Coordinator." 
  },
  { 
    name: "Michael Kolbe", 
    role: "City Liaison", 
    image: michaelKolbe, 
    linkedin: undefined, 
    bio: "Michael will coordinate government stakeholders, Track content, and subject matter experts. He'll recruit leadership for: Track Room Captain Coordinator, SME Recruiter, and VIP/Speaker Host Lead." 
  },
  { 
    name: "Sinclair Jenks", 
    role: "Marketing & Comms", 
    image: sinclairJenks, 
    linkedin: undefined, 
    bio: "Sinclair will own brand, social media, press relations, and content strategy. He'll recruit leadership for: Outreach Lead, Marketing Content Lead, and Photography Lead." 
  },
  { 
    name: "Heather Lyne", 
    role: "Entrepreneurial Ecosystems", 
    image: heatherLyne, 
    linkedin: undefined, 
    bio: "Heather will coordinate mentorship programs and entrepreneurial support. She'll recruit leadership for: Art Lounge Lead, Hustle Corner Lead, and Mentor Coordinator." 
  },
  { 
    name: "Will Melton", 
    role: "Partnerships", 
    image: willMelton, 
    linkedin: undefined, 
    bio: "Will will cultivate ecosystem partnerships with community organizations and civic groups. He'll recruit leadership for: Community Partner Coordinator and Community Outreach Lead." 
  },
  { 
    name: "Mike Huddleston", 
    role: "Sponsorships", 
    image: mikeHuddleston, 
    linkedin: undefined, 
    bio: "Mike will drive corporate sponsor acquisition and manage sponsor relationships. He'll recruit leadership for: Corporate Sponsor Coordinator and Sponsor Experience Lead." 
  },
  { 
    name: "TBD", 
    role: "Community & Volunteers", 
    image: undefined, 
    linkedin: undefined, 
    bio: "This person will own volunteer recruitment, training, and participant experience. They'll recruit leadership for: Volunteer Coordinator, Site Captain Coordinator, and Team Formation Lead." 
  },
  { 
    name: "Christian Markow", 
    role: "Innovation & Challenge Design", 
    image: christianMarkow, 
    linkedin: undefined, 
    bio: "Christian will lead Track-specific problem definition, solution framing, and innovation methodology. He'll work with city Track Teams to translate complex civic challenges into actionable hackathon problems." 
  },
];

const advisoryTeam = [
  { name: "Danny Avula", role: "Strategy", image: dannyAvula, linkedin: undefined, bio: "" },
  { name: "Ankit Mathur", role: "Vision", image: ankitMathur, linkedin: undefined, bio: "" },
  { name: "Ash Harris", role: "Onsite Ops", image: ashHarris, linkedin: undefined, bio: "Ash serves in an advisory capacity for onsite operations, providing guidance and expertise as needed." },
];

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  bio: string;
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasBio = member.bio && member.bio.trim().length > 0;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="bg-card p-6 rounded-xl shadow-elegant hover:shadow-hover transition-smooth border border-border flex flex-col items-center text-center">
        {member.image ? (
          member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 hover:opacity-80 transition-opacity"
              onClick={(e) => e.stopPropagation()}
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
        
        {hasBio ? (
          <CollapsibleTrigger className="cursor-pointer group">
            <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors flex items-center gap-1">
              {member.name}
              <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </h4>
          </CollapsibleTrigger>
        ) : (
          <h4 className="text-lg font-bold text-foreground mb-1">
            {member.name}
          </h4>
        )}
        
        <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
        
        {hasBio && (
          <CollapsibleContent className="mt-3 pt-3 border-t border-border w-full">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {member.bio}
            </p>
          </CollapsibleContent>
        )}
      </div>
    </Collapsible>
  );
};

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
            <TeamMemberCard key={index} member={member} />
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
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};
