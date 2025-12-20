import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { RoleCard } from "./RoleCard";
import { RoleDetailModal } from "./RoleDetailModal";
import { 
  preEventRoles, 
  fridayRoles, 
  saturdaySiteRoles, 
  saturdayVirtualRoles, 
  sundayRoles, 
  supportRoles,
  type RoleCard as RoleCardType,
  type RoleCategory,
  getVolunteerCounts
} from "@/data/volunteerRoles";

interface VolunteerRoleGridProps {
  onSignUp?: () => void;
}

const categoryTabs: { value: string; label: string; roles: RoleCardType[] }[] = [
  { value: 'all', label: 'All Roles', roles: [] },
  { value: 'pre-event', label: 'Pre-Event', roles: preEventRoles },
  { value: 'friday', label: 'Friday', roles: fridayRoles },
  { value: 'saturday', label: 'Saturday', roles: [...saturdaySiteRoles, ...saturdayVirtualRoles] },
  { value: 'sunday', label: 'Sunday', roles: sundayRoles },
  { value: 'support', label: 'Mentors', roles: supportRoles },
];

export const VolunteerRoleGrid = ({ onSignUp }: VolunteerRoleGridProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [selectedRole, setSelectedRole] = useState<RoleCardType | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const volunteerCounts = getVolunteerCounts();

  const allRoles = useMemo(() => [
    ...preEventRoles,
    ...fridayRoles,
    ...saturdaySiteRoles,
    ...saturdayVirtualRoles,
    ...sundayRoles,
    ...supportRoles
  ], []);

  const filteredRoles = useMemo(() => {
    let roles: RoleCardType[] = [];
    
    if (activeTab === 'all') {
      roles = allRoles;
    } else if (activeTab === 'saturday') {
      roles = [...saturdaySiteRoles, ...saturdayVirtualRoles];
    } else {
      const tab = categoryTabs.find(t => t.value === activeTab);
      roles = tab?.roles || [];
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      roles = roles.filter(role => 
        role.title.toLowerCase().includes(query) ||
        role.description.toLowerCase().includes(query) ||
        role.skillsRequired.some(s => s.toLowerCase().includes(query)) ||
        role.skillsPreferred.some(s => s.toLowerCase().includes(query))
      );
    }

    return roles;
  }, [activeTab, searchQuery, allRoles]);

  const handleRoleClick = (role: RoleCardType) => {
    setSelectedRole(role);
    setModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
          Volunteer Roles
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse open volunteer positions. Each role has clear responsibilities, autonomy, and a defined commitment.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {volunteerCounts.map((item) => (
          <Badge 
            key={item.category} 
            variant="outline" 
            className="py-1.5 px-3 text-sm"
          >
            <span className="font-semibold text-foreground">{item.count}</span>
            <span className="text-muted-foreground ml-1">{item.label}</span>
          </Badge>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search roles, skills, or keywords..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="overflow-x-auto pb-2">
          <TabsList className="w-full md:w-auto inline-flex h-auto gap-1 bg-transparent p-0">
            {categoryTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="py-2 px-4 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground border border-border data-[state=active]:border-accent rounded-lg transition-smooth text-sm font-medium whitespace-nowrap"
              >
                {tab.label}
                {tab.value !== 'all' && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({tab.value === 'saturday' 
                      ? saturdaySiteRoles.length + saturdayVirtualRoles.length 
                      : tab.roles.length})
                  </span>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Content */}
        <div className="mt-6">
          {filteredRoles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No roles found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredRoles.map((role) => (
                <RoleCard
                  key={role.id}
                  role={role}
                  onClick={() => handleRoleClick(role)}
                />
              ))}
            </div>
          )}
        </div>
      </Tabs>

      {/* Results Count */}
      <div className="text-center text-sm text-muted-foreground">
        Showing {filteredRoles.length} of {allRoles.length} roles
      </div>

      {/* Modal */}
      <RoleDetailModal
        role={selectedRole}
        open={modalOpen}
        onOpenChange={setModalOpen}
        onSignUp={onSignUp}
      />
    </div>
  );
};

