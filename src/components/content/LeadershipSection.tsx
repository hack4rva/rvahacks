import { sectors, teamRoles } from "@/data";

interface LeadershipSectionProps {
  className?: string;
  /** Show the "Get involved" link at the bottom */
  showGetInvolvedLink?: boolean;
}

export const LeadershipSection = ({ className = "", showGetInvolvedLink = true }: LeadershipSectionProps) => {
  return (
    <div className={className}>
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
        {teamRoles.map((team, index) => (
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
      {showGetInvolvedLink && (
        <p className="text-center text-sm text-muted-foreground mt-10">
          Interested in joining the team? <a href="/partners" className="text-accent hover:underline">Get involved →</a>
        </p>
      )}
    </div>
  );
};

// Re-export for backwards compatibility
export { sectors, teamRoles as teams };
