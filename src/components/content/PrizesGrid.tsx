import { Award, Users, Lightbulb, Rocket, Target, Code, Heart, Home, GraduationCap, Car } from "lucide-react";

const majorAwards = [
  {
    title: "Mayor's Choice",
    icon: Award,
    description: "Most impactful civic solution—includes commitment to real-world implementation with City partners",
    sponsor: "The Office of Mayor Danny Avula",
  },
  {
    title: "People's Choice",
    icon: Users,
    description: "Most popular via live community vote at the event",
    sponsor: "the Community",
  },
  {
    title: "Most Innovative",
    icon: Lightbulb,
    description: "Most creative and groundbreaking approach to civic challenges",
    sponsor: "Higher Education Partners",
  },
  {
    title: "Startup Material",
    icon: Rocket,
    description: "Greatest potential for sustained real-world impact",
    sponsor: "Startup Ecosystem",
  },
];

const sponsorAwards = [
  {
    title: "Housing & Land Use",
    icon: Home,
    description: "Best solution addressing affordability, zoning, or equitable development",
    sponsor: "Sponsor TBD",
  },
  {
    title: "Workforce & Education",
    icon: GraduationCap,
    description: "Best solution connecting residents to skills, jobs, or economic mobility",
    sponsor: "Sponsor TBD",
  },
  {
    title: "Transportation & Mobility",
    icon: Car,
    description: "Best solution improving transit access and citywide connectivity",
    sponsor: "Sponsor TBD",
  },
];

const civicAwards = [
  {
    title: "Best Technical Implementation",
    icon: Code,
    description: "Most impressive technical execution and architecture",
    sponsor: "TBD",
  },
  {
    title: "Moonshot",
    icon: Target,
    description: "Most ambitious and visionary long-term solution",
    sponsor: "TBD",
  },
  {
    title: "Best Social Impact",
    icon: Heart,
    description: "Greatest potential for lasting community benefit",
    sponsor: "TBD",
  },
];

interface AwardCardProps {
  award: {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
    sponsor: string;
  };
}

const AwardCard = ({ award }: AwardCardProps) => (
  <div className="bg-card border border-border rounded-lg p-3 shadow-elegant hover:shadow-hover transition-smooth">
    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
      <award.icon className="w-4 h-4 text-primary" />
    </div>
    <h3 className="text-sm font-bold text-card-foreground mb-1">{award.title}</h3>
    <p className="text-xs text-muted-foreground leading-snug mb-2">{award.description}</p>
    <div className="pt-2 border-t border-border">
      <p className="text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">{award.sponsor}</span>
      </p>
    </div>
  </div>
);

interface PrizesGridProps {
  className?: string;
  /** Show the timeline section */
  showTimeline?: boolean;
}

export const PrizesGrid = ({ className = "", showTimeline = true }: PrizesGridProps) => {
  return (
    <div className={className}>
      {/* Timeline */}
      {showTimeline && (
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-5 mb-12 max-w-3xl mx-auto">
          <div className="space-y-2.5">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
              <p className="text-sm text-card-foreground">
                <span className="font-bold">Saturday Evening:</span> All solutions due
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
              <p className="text-sm text-card-foreground">
                <span className="font-bold">Sunday Finals:</span> Finalists present live pitches
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
              <p className="text-sm text-card-foreground">
                <span className="font-bold">Winners Announced:</span> Awards ceremony with Mayor Avula
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Major Awards */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-foreground mb-4 text-center">Major Awards</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {majorAwards.map((award, index) => (
            <AwardCard key={index} award={award} />
          ))}
        </div>
      </div>

      {/* Sponsor Awards */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-foreground mb-4 text-center">Sponsor Awards</h3>
        <p className="text-sm text-muted-foreground text-center mb-4">Tied to specific civic domains</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {sponsorAwards.map((award, index) => (
            <AwardCard key={index} award={award} />
          ))}
        </div>
      </div>

      {/* Special Civic Awards */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-foreground mb-4 text-center">Special Civic Awards</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {civicAwards.map((award, index) => (
            <AwardCard key={index} award={award} />
          ))}
        </div>
      </div>

      {/* Note */}
      <div className="text-center mt-8 space-y-2">
        <p className="text-sm text-muted-foreground">
          Each category will have a winner and runner-up recognized at the awards ceremony.
        </p>
        <p className="text-sm text-muted-foreground italic">
          Some awards include post-event collaboration expectations.
        </p>
      </div>
    </div>
  );
};

export { majorAwards, sponsorAwards, civicAwards };

