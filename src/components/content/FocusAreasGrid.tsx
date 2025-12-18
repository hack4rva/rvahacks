import { Home, GraduationCap, Car } from "lucide-react";

const focusAreas = [
  {
    icon: Home,
    title: "Housing & Land Use",
    description: "Tackle affordability, zoning transparency, and equitable development across Richmond's neighborhoods.",
  },
  {
    icon: GraduationCap,
    title: "Education & Workforce Development",
    description: "Connect residents to skills training, job pathways, and economic opportunity.",
  },
  {
    icon: Car,
    title: "Transportation & Mobility",
    description: "Improve access to transit, reduce commute barriers, and enable citywide connectivity.",
  },
];

interface FocusAreasGridProps {
  /** Show full descriptions or just titles */
  compact?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const FocusAreasGrid = ({ compact = false, className = "" }: FocusAreasGridProps) => {
  return (
    <div className={`grid md:grid-cols-3 gap-4 ${className}`}>
      {focusAreas.map((area, index) => (
        <div
          key={index}
          className="bg-card p-6 rounded-xl border border-border shadow-elegant hover:border-accent/40 transition-smooth"
        >
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
            <area.icon className="w-6 h-6 text-accent" />
          </div>
          <h4 className="text-lg font-bold text-foreground mb-2">{area.title}</h4>
          {!compact && (
            <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export { focusAreas };

