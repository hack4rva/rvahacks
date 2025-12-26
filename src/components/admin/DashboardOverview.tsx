import { Users, Handshake, GraduationCap, Mail, Target, Calendar } from "lucide-react";
import { MetricCard, ActionItemsBanner, type ActionItem } from "./shared";
import { getTeamStats, getOpenRoles } from "@/data/teamDelegation";
import { sponsorshipStats } from "@/data/sponsorshipPipeline";
import { academiaStats, criticalDeadlines } from "@/data/academiaPartners";
import { planStats } from "@/data/communicationPlan";
import type { AdminSection } from "./AdminSidebar";

interface DashboardOverviewProps {
  onNavigate: (section: AdminSection) => void;
  signupCount?: number;
}

export const DashboardOverview = ({ onNavigate, signupCount = 0 }: DashboardOverviewProps) => {
  const teamStats = getTeamStats();
  const openRoles = getOpenRoles();

  // Build action items from various data sources
  const actionItems: ActionItem[] = [];

  // Add critical deadlines
  criticalDeadlines
    .filter(d => d.priority === 'critical' || d.priority === 'high')
    .slice(0, 3)
    .forEach(deadline => {
      const daysUntil = Math.ceil((new Date(deadline.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
      if (daysUntil <= 30) {
        actionItems.push({
          id: `deadline-${deadline.id}`,
          text: deadline.action,
          priority: daysUntil < 0 ? 'critical' : deadline.priority as 'critical' | 'high',
          section: 'academia',
          dueDate: new Date(deadline.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        });
      }
    });

  // Add open roles warning
  if (openRoles.length > 5) {
    actionItems.push({
      id: 'open-roles',
      text: `${openRoles.length} team roles still need assignments`,
      priority: 'high',
      section: 'team',
    });
  }

  // Add plan progress if behind
  if (planStats.inProgressLevels > 3) {
    actionItems.push({
      id: 'plan-progress',
      text: `${planStats.inProgressLevels} communication milestones in progress`,
      priority: 'medium',
      section: 'plan',
    });
  }

  const handleActionItemClick = (item: ActionItem) => {
    if (item.section) {
      onNavigate(item.section as AdminSection);
    }
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Command Center</h2>
        <p className="text-sm md:text-base text-muted-foreground mt-1">
          Quick overview of all workstreams — click any card to dive deeper
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        <MetricCard
          title="Team"
          value={`${teamStats.filledSubRoles}/${teamStats.totalSubRoles}`}
          label="roles filled"
          icon={Users}
          status={teamStats.openSubRoles > 10 ? 'warning' : 'default'}
          onClick={() => onNavigate('team')}
        />
        <MetricCard
          title="Plan"
          value={`${planStats.completedLevels}/${planStats.totalLevels}`}
          label="levels complete"
          icon={Target}
          status={planStats.inProgressLevels > 3 ? 'warning' : 'default'}
          onClick={() => onNavigate('plan')}
        />
        <MetricCard
          title="Sponsors"
          value={sponsorshipStats.totalCorporateTargets}
          label="corporate targets"
          icon={Handshake}
          onClick={() => onNavigate('sponsors')}
        />
        <MetricCard
          title="Academia"
          value={`${academiaStats.totalK12Districts + academiaStats.totalUniversities}`}
          label="school partners"
          icon={GraduationCap}
          status={academiaStats.criticalDeadlinesCount > 0 ? 'warning' : 'default'}
          onClick={() => onNavigate('academia')}
        />
        <MetricCard
          title="Signups"
          value={signupCount}
          label="interested"
          icon={Mail}
          onClick={() => onNavigate('signups')}
        />
        <MetricCard
          title="Event"
          value={planStats.eventDate}
          label="March 2025"
          icon={Calendar}
          onClick={() => onNavigate('plan')}
        />
      </div>

      {/* Action Items */}
      {actionItems.length > 0 && (
        <ActionItemsBanner 
          items={actionItems}
          onItemClick={handleActionItemClick}
          maxItems={5}
        />
      )}

      {/* Quick Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {/* Team Progress */}
        <div className="border border-border rounded-lg p-4 bg-card">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" />
            Team Status
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Core Leaders</span>
              <span className="font-medium">{teamStats.filledCoreLeaders}/{teamStats.totalCoreLeaders}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Sub-Roles Filled</span>
              <span className="font-medium">{teamStats.filledSubRoles}/{teamStats.totalSubRoles}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Open Positions</span>
              <span className="font-medium text-orange-500">{teamStats.openSubRoles}</span>
            </div>
            <div className="pt-2">
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-accent h-2 rounded-full transition-all"
                  style={{ width: `${(teamStats.filledSubRoles / teamStats.totalSubRoles) * 100}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1 text-right">
                {Math.round((teamStats.filledSubRoles / teamStats.totalSubRoles) * 100)}% complete
              </p>
            </div>
          </div>
          <button 
            onClick={() => onNavigate('team')}
            className="mt-4 text-sm text-accent hover:underline"
          >
            View team details →
          </button>
        </div>

        {/* Sponsor Pipeline */}
        <div className="border border-border rounded-lg p-4 bg-card">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Handshake className="w-5 h-5 text-accent" />
            Sponsor Pipeline
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Corporate Targets</span>
              <span className="font-medium">{sponsorshipStats.totalCorporateTargets}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Nonprofit Partners</span>
              <span className="font-medium">{sponsorshipStats.totalNonprofitPartners}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Anchor Tier ($25k+)</span>
              <span className="font-medium text-accent">{sponsorshipStats.anchorTierTargets}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Warm Connections</span>
              <span className="font-medium">{sponsorshipStats.totalWarmConnections}</span>
            </div>
          </div>
          <button 
            onClick={() => onNavigate('sponsors')}
            className="mt-4 text-sm text-accent hover:underline"
          >
            View pipeline →
          </button>
        </div>

        {/* Academia Status */}
        <div className="border border-border rounded-lg p-4 bg-card">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-accent" />
            Academia Status
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">K-12 Districts</span>
              <span className="font-medium">{academiaStats.totalK12Districts}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Specialty Schools</span>
              <span className="font-medium">{academiaStats.totalSpecialtySchools}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Universities</span>
              <span className="font-medium">{academiaStats.totalUniversities}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Compliance Items</span>
              <span className="font-medium">
                {academiaStats.complianceItemsComplete}/{academiaStats.complianceItemsTotal}
              </span>
            </div>
            {academiaStats.criticalDeadlinesCount > 0 && (
              <div className="pt-2 text-xs text-red-600 font-medium">
                ⚠️ {academiaStats.criticalDeadlinesCount} critical deadline(s) approaching
              </div>
            )}
          </div>
          <button 
            onClick={() => onNavigate('academia')}
            className="mt-4 text-sm text-accent hover:underline"
          >
            View academia details →
          </button>
        </div>
      </div>

      {/* TODO: Real-time signup count - Stub for Lovable/Supabase integration */}
      {/* 
        Future enhancement: Subscribe to Supabase real-time updates for signups
        const { data: liveCount } = useSubscription('email_signups', 'count');
      */}
    </div>
  );
};

