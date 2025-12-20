import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Clock, MapPin, Users, CheckCircle2, AlertTriangle, 
  Zap, Target, GraduationCap, Star, ExternalLink 
} from "lucide-react";
import { type RoleCard, getCategoryLabel } from "@/data/volunteerRoles";

interface RoleDetailModalProps {
  role: RoleCard | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSignUp?: () => void;
}

const getLocationLabel = (location: RoleCard['location']): string => {
  switch (location) {
    case 'science-museum': return 'Science Museum of Virginia';
    case 'satellite': return 'Satellite Venues (citywide)';
    case 'virtual': return 'Virtual (from home)';
    case 'varies': return 'Varies by assignment';
  }
};

const getColorClasses = (color: string): { bg: string; text: string } => {
  const colorMap: Record<string, { bg: string; text: string }> = {
    blue: { bg: 'bg-blue-500/10', text: 'text-blue-600' },
    green: { bg: 'bg-green-500/10', text: 'text-green-600' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-600' },
    pink: { bg: 'bg-pink-500/10', text: 'text-pink-600' },
    orange: { bg: 'bg-orange-500/10', text: 'text-orange-600' },
    cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-600' },
    yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-600' },
    red: { bg: 'bg-red-500/10', text: 'text-red-600' },
    emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-600' },
    gray: { bg: 'bg-gray-500/10', text: 'text-gray-600' },
  };
  return colorMap[color] || colorMap.blue;
};

export const RoleDetailModal = ({ role, open, onOpenChange, onSignUp }: RoleDetailModalProps) => {
  if (!role) return null;

  const colorClasses = getColorClasses(role.color);
  const Icon = role.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6">
            {/* Header */}
            <DialogHeader className="mb-4">
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl ${colorClasses.bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-7 h-7 ${colorClasses.text}`} />
                </div>
                <div className="flex-1">
                  <DialogTitle className="text-xl mb-1">{role.title}</DialogTitle>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">{getCategoryLabel(role.category)}</Badge>
                    {role.trainingRequired && (
                      <Badge variant="secondary" className="bg-purple-500/10 text-purple-600">
                        <GraduationCap className="w-3 h-3 mr-1" />
                        Training Required
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </DialogHeader>

            {/* Description */}
            <p className="text-muted-foreground mb-4">{role.description}</p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <Clock className="w-4 h-4 mx-auto mb-1 text-accent" />
                <p className="text-xs text-muted-foreground">Commitment</p>
                <p className="text-sm font-medium text-foreground">{role.commitment}</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <MapPin className="w-4 h-4 mx-auto mb-1 text-accent" />
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium text-foreground">{getLocationLabel(role.location)}</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <Users className="w-4 h-4 mx-auto mb-1 text-accent" />
                <p className="text-xs text-muted-foreground">Needed</p>
                <p className="text-sm font-medium text-foreground">{role.quantity}</p>
              </div>
            </div>

            <Separator className="my-4" />

            {/* You Own */}
            <div className="mb-4">
              <h3 className="flex items-center gap-2 font-semibold text-foreground mb-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                You Own
              </h3>
              <ul className="space-y-1">
                {role.youOwn.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-green-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* You Escalate */}
            <div className="mb-4">
              <h3 className="flex items-center gap-2 font-semibold text-foreground mb-2">
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
                You Escalate
              </h3>
              <div className="space-y-2">
                {role.youEscalate.map((rule, idx) => (
                  <div key={idx} className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-2">
                    <p className="text-sm text-foreground font-medium">{rule.situation}</p>
                    <p className="text-xs text-muted-foreground">
                      → {rule.escalateTo} <span className="text-yellow-600">({rule.channel})</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Decision Authority */}
            <div className="mb-4">
              <h3 className="flex items-center gap-2 font-semibold text-foreground mb-2">
                <Zap className="w-4 h-4 text-blue-500" />
                Decision Authority
              </h3>
              <ul className="space-y-1">
                {role.decisionAuthority.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Success Criteria */}
            <div className="mb-4">
              <h3 className="flex items-center gap-2 font-semibold text-foreground mb-2">
                <Target className="w-4 h-4 text-accent" />
                Success Criteria
              </h3>
              <p className="text-sm text-muted-foreground bg-accent/5 border border-accent/20 rounded-lg p-3">
                {role.successCriteria}
              </p>
            </div>

            <Separator className="my-4" />

            {/* Skills */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="flex items-center gap-2 font-semibold text-foreground mb-2 text-sm">
                  <Star className="w-4 h-4 text-red-500" />
                  Required Skills
                </h3>
                <div className="flex flex-wrap gap-1">
                  {role.skillsRequired.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="flex items-center gap-2 font-semibold text-foreground mb-2 text-sm">
                  <Star className="w-4 h-4 text-muted-foreground" />
                  Preferred Skills
                </h3>
                <div className="flex flex-wrap gap-1">
                  {role.skillsPreferred.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Reports To */}
            <div className="bg-muted/30 rounded-lg p-3 mb-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Reports to:</span> {role.reportsTo}
              </p>
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <Button 
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={onSignUp}
              >
                Sign Up for This Role
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => onOpenChange(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

