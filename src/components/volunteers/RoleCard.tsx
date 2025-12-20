import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Users, ChevronRight } from "lucide-react";
import { type RoleCard as RoleCardType, getCategoryLabel } from "@/data/volunteerRoles";

interface RoleCardProps {
  role: RoleCardType;
  onClick?: () => void;
  compact?: boolean;
}

const getLocationLabel = (location: RoleCardType['location']): string => {
  switch (location) {
    case 'science-museum': return 'Science Museum';
    case 'satellite': return 'Satellite Venues';
    case 'virtual': return 'Virtual';
    case 'varies': return 'Varies';
  }
};

const getColorClasses = (color: string): { bg: string; text: string; border: string } => {
  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-500/10', text: 'text-blue-600', border: 'border-blue-500/30' },
    green: { bg: 'bg-green-500/10', text: 'text-green-600', border: 'border-green-500/30' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-600', border: 'border-purple-500/30' },
    pink: { bg: 'bg-pink-500/10', text: 'text-pink-600', border: 'border-pink-500/30' },
    orange: { bg: 'bg-orange-500/10', text: 'text-orange-600', border: 'border-orange-500/30' },
    cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-600', border: 'border-cyan-500/30' },
    yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-600', border: 'border-yellow-500/30' },
    red: { bg: 'bg-red-500/10', text: 'text-red-600', border: 'border-red-500/30' },
    emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-600', border: 'border-emerald-500/30' },
    gray: { bg: 'bg-gray-500/10', text: 'text-gray-600', border: 'border-gray-500/30' },
  };
  return colorMap[color] || colorMap.blue;
};

export const RoleCard = ({ role, onClick, compact = false }: RoleCardProps) => {
  const colorClasses = getColorClasses(role.color);
  const Icon = role.icon;

  if (compact) {
    return (
      <button
        onClick={onClick}
        className={`w-full text-left p-3 rounded-lg border ${colorClasses.border} hover:border-accent/50 bg-card hover:shadow-sm transition-all group`}
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg ${colorClasses.bg} flex items-center justify-center shrink-0`}>
            <Icon className={`w-4 h-4 ${colorClasses.text}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-foreground text-sm truncate">{role.title}</p>
            <p className="text-xs text-muted-foreground truncate">{role.commitment}</p>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
        </div>
      </button>
    );
  }

  return (
    <Card 
      className={`${colorClasses.border} border hover:border-accent/50 hover:shadow-elegant transition-all cursor-pointer group`}
      onClick={onClick}
    >
      <CardContent className="pt-4">
        <div className="flex items-start gap-3 mb-3">
          <div className={`w-10 h-10 rounded-lg ${colorClasses.bg} flex items-center justify-center shrink-0`}>
            <Icon className={`w-5 h-5 ${colorClasses.text}`} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground text-sm">{role.title}</h3>
            <Badge variant="outline" className="text-xs mt-1">
              {getCategoryLabel(role.category)}
            </Badge>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {role.description}
        </p>

        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{role.commitment}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>{getLocationLabel(role.location)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{role.quantity} needed</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {role.skillsRequired.slice(0, 3).map((skill, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {role.skillsRequired.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{role.skillsRequired.length - 3}
            </Badge>
          )}
        </div>

        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full text-accent hover:bg-accent/10 group-hover:bg-accent/5"
        >
          Learn More
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

