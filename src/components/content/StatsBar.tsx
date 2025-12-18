import { Users, Target, Calendar, DollarSign, Gift } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "350+",
    label: "Participants",
  },
  {
    icon: Target,
    value: "1",
    label: "City Goal",
  },
  {
    icon: Calendar,
    value: "48 Hours",
    label: "Friday AM - Saturday PM",
  },
  {
    icon: DollarSign,
    value: "$25K",
    label: "Prize Money",
  },
  {
    icon: Gift,
    value: "Free",
    label: "Registration, lunch, swag",
  },
];

interface StatsBarProps {
  className?: string;
}

export const StatsBar = ({ className = "" }: StatsBarProps) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 ${className}`}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-card p-3 md:p-4 rounded-xl shadow-elegant hover:shadow-hover transition-smooth border border-border hover:scale-105 animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <stat.icon className="w-4 h-4 text-accent" />
            </div>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
            {stat.value}
          </div>
          <div className="text-xs md:text-sm text-muted-foreground font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export { stats };

