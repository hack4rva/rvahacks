import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Target, 
  Users, 
  Handshake, 
  GraduationCap, 
  Link2, 
  Mail,
  ChevronDown,
  AlertTriangle
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export type AdminSection = 
  | 'overview' 
  | 'plan' 
  | 'tracks' 
  | 'team' 
  | 'connectors' 
  | 'academia' 
  | 'sponsors' 
  | 'signups';

interface NavItem {
  id: AdminSection;
  label: string;
  icon: React.ElementType;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

interface AdminSidebarProps {
  activeSection: AdminSection;
  onNavigate: (section: AdminSection) => void;
  actionItemCount?: number;
}

const navGroups: NavGroup[] = [
  {
    label: "Planning",
    items: [
      { id: 'plan', label: 'Communication Plan', icon: Target },
      { id: 'tracks', label: 'Tracks', icon: LayoutDashboard },
    ]
  },
  {
    label: "People",
    items: [
      { id: 'team', label: 'Team', icon: Users },
      { id: 'connectors', label: 'Connectors', icon: Link2 },
      { id: 'academia', label: 'Academia', icon: GraduationCap },
    ]
  },
  {
    label: "Resources",
    items: [
      { id: 'sponsors', label: 'Sponsors', icon: Handshake },
      { id: 'signups', label: 'Signups', icon: Mail },
    ]
  }
];

export const AdminSidebar = ({ 
  activeSection, 
  onNavigate, 
  actionItemCount = 0 
}: AdminSidebarProps) => {
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['Planning', 'People', 'Resources']);

  const toggleGroup = (label: string) => {
    setExpandedGroups(prev => 
      prev.includes(label) 
        ? prev.filter(g => g !== label)
        : [...prev, label]
    );
  };

  return (
    <aside className="w-64 border-r border-border bg-card min-h-screen p-4 flex flex-col">
      {/* Overview Button */}
      <button
        onClick={() => onNavigate('overview')}
        className={cn(
          "flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-left mb-4 transition-colors",
          activeSection === 'overview' 
            ? "bg-accent text-accent-foreground font-medium" 
            : "hover:bg-muted text-foreground"
        )}
      >
        <LayoutDashboard className="w-5 h-5" />
        <span>Overview</span>
      </button>

      {/* Action Items Button (if any) */}
      {actionItemCount > 0 && (
        <button
          onClick={() => onNavigate('plan')} // Navigate to plan for action items
          className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-left mb-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <span className="text-red-700 dark:text-red-400 font-medium">Action Items</span>
          </div>
          <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
            {actionItemCount}
          </span>
        </button>
      )}

      {/* Navigation Groups */}
      <nav className="flex-1 space-y-2">
        {navGroups.map((group) => (
          <Collapsible 
            key={group.label}
            open={expandedGroups.includes(group.label)}
            onOpenChange={() => toggleGroup(group.label)}
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide hover:text-foreground transition-colors">
              {group.label}
              <ChevronDown className={cn(
                "w-4 h-4 transition-transform",
                expandedGroups.includes(group.label) ? "" : "-rotate-90"
              )} />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-1 space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={cn(
                      "flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left text-sm transition-colors",
                      activeSection === item.id 
                        ? "bg-accent text-accent-foreground font-medium" 
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </nav>

      {/* Footer */}
      <div className="pt-4 border-t border-border mt-4">
        <p className="text-xs text-muted-foreground text-center">
          Admin Dashboard v1.0
        </p>
      </div>
    </aside>
  );
};

