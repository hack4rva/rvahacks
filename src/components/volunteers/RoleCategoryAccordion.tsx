import { useState } from "react";
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { RoleDetailModal } from "./RoleDetailModal";
import { type RoleCard as RoleCardType, getCategoryLabel } from "@/data/volunteerRoles";
import { Clock, MapPin, ChevronRight, LucideIcon } from "lucide-react";

interface RoleCategoryAccordionProps {
  id: string;
  title: string;
  description: string;
  roles: RoleCardType[];
  count: string;
  icon: LucideIcon;
  colorClass: string;
  onSignUp?: () => void;
}

const getLocationLabel = (location: RoleCardType['location']): string => {
  switch (location) {
    case 'science-museum': return 'Science Museum';
    case 'satellite': return 'Satellite Venues';
    case 'virtual': return 'Virtual';
    case 'varies': return 'Varies';
  }
};

export const RoleCategoryAccordion = ({ 
  id, 
  title, 
  description, 
  roles, 
  count, 
  icon: Icon, 
  colorClass,
  onSignUp
}: RoleCategoryAccordionProps) => {
  const [selectedRole, setSelectedRole] = useState<RoleCardType | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleRoleClick = (role: RoleCardType) => {
    setSelectedRole(role);
    setModalOpen(true);
  };

  return (
    <>
      <AccordionItem value={id} className="border border-border rounded-xl bg-card overflow-hidden">
        <AccordionTrigger className="px-4 sm:px-6 py-4 hover:no-underline hover:bg-muted/50">
          <div className="flex items-center gap-3 sm:gap-4 w-full">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${colorClass}`}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1 text-left min-w-0">
              <h3 className="font-semibold text-foreground text-sm sm:text-base">{title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground truncate">{description}</p>
            </div>
            <Badge variant="outline" className="shrink-0 text-xs">
              {count}
            </Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 sm:px-6 pb-4">
          <div className="space-y-2">
            {roles.map((role) => {
              const RoleIcon = role.icon;
              return (
                <button
                  key={role.id}
                  onClick={() => handleRoleClick(role)}
                  className="w-full text-left p-3 rounded-lg border border-border hover:border-accent/50 hover:bg-muted/30 transition-all group flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0 group-hover:bg-accent/10">
                    <RoleIcon className="w-4 h-4 text-muted-foreground group-hover:text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm truncate">{role.title}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span className="truncate">{role.commitment}</span>
                      </span>
                      <span className="flex items-center gap-1 hidden sm:flex">
                        <MapPin className="w-3 h-3" />
                        <span>{getLocationLabel(role.location)}</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge variant="secondary" className="text-xs hidden sm:inline-flex">
                      {role.quantity}
                    </Badge>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent" />
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Quick stats for the category */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
            <span>{roles.length} roles</span>
            <span>•</span>
            <span>{roles.filter(r => r.trainingRequired).length} require training</span>
            <span>•</span>
            <span>{roles.filter(r => r.location === 'virtual').length} virtual</span>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Role Detail Modal */}
      <RoleDetailModal
        role={selectedRole}
        open={modalOpen}
        onOpenChange={setModalOpen}
        onSignUp={onSignUp}
      />
    </>
  );
};

