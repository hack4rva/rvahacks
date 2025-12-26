import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  ChevronDown, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Users,
  Target,
  Megaphone,
  FileText,
  Mail,
  Milestone,
  Lightbulb,
  AlertCircle,
  Printer
} from "lucide-react";
import { 
  weeklySchedule, 
  preReqs, 
  hardDeadlines, 
  printLeadTimes,
  identifiedGaps,
  quickWins,
  ownerMatrix,
  scheduleStats,
  type Task,
  type TaskType,
  type TaskStatus
} from "@/data/scheduleData";

const typeIcons: Record<TaskType, React.ElementType> = {
  event: Calendar,
  content: FileText,
  team: Users,
  comms: Mail,
  milestone: Milestone,
};

const typeColors: Record<TaskType, string> = {
  event: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300',
  content: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300',
  team: 'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300',
  comms: 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300',
  milestone: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300',
};

const statusColors: Record<TaskStatus, string> = {
  complete: 'bg-green-500',
  'in-progress': 'bg-yellow-500',
  pending: 'bg-gray-300 dark:bg-gray-600',
  blocked: 'bg-red-500',
};

const TaskBadge = ({ type }: { type: TaskType }) => {
  const Icon = typeIcons[type];
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${typeColors[type]}`}>
      <Icon className="w-3 h-3" />
      {type.toUpperCase()}
    </span>
  );
};

const TaskItem = ({ task }: { task: Task }) => (
  <div className={`flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 p-3 rounded-lg border ${
    task.priority === 'critical' ? 'border-red-300 bg-red-50 dark:bg-red-950/20' : 'border-border bg-card'
  }`}>
    <div className={`w-3 h-3 rounded-full mt-0.5 flex-shrink-0 ${statusColors[task.status]}`} />
    <div className="flex-1 min-w-0">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div className="min-w-0">
          <p className="font-medium text-foreground text-sm">{task.title}</p>
          {task.notes && (
            <p className="text-xs text-muted-foreground mt-1 break-words">{task.notes}</p>
          )}
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <TaskBadge type={task.type} />
          {task.priority === 'critical' && (
            <Badge variant="destructive" className="text-xs">CRITICAL</Badge>
          )}
        </div>
      </div>
      <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground flex-wrap">
        {task.owner && <span>Owner: <strong>{task.owner}</strong></span>}
        {task.date && <span>Date: <strong>{task.date}</strong></span>}
      </div>
    </div>
  </div>
);

export const ScheduleTab = () => {
  const [expandedWeeks, setExpandedWeeks] = useState<number[]>([1, 2]);

  const toggleWeek = (weekNumber: number) => {
    setExpandedWeeks(prev =>
      prev.includes(weekNumber)
        ? prev.filter(w => w !== weekNumber)
        : [...prev, weekNumber]
    );
  };

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 bg-muted/30 rounded-lg">
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground">{scheduleStats.totalWeeks}</p>
          <p className="text-xs text-muted-foreground">Total Weeks</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-500">{scheduleStats.totalEvents}</p>
          <p className="text-xs text-muted-foreground">Events</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-red-500">{scheduleStats.totalMilestones}</p>
          <p className="text-xs text-muted-foreground">Milestones</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-orange-500">{scheduleStats.criticalDeadlines}</p>
          <p className="text-xs text-muted-foreground">Hard Deadlines</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-accent">Mar 27-29</p>
          <p className="text-xs text-muted-foreground">Event Date</p>
        </div>
      </div>

      <Tabs defaultValue="prereqs" className="w-full">
        <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5 h-auto">
          <TabsTrigger value="prereqs" className="flex items-center gap-1 text-xs sm:text-sm py-2">
            <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Pre-Reqs</span>
            <span className="xs:hidden">Reqs</span>
          </TabsTrigger>
          <TabsTrigger value="calendar" className="flex items-center gap-1 text-xs sm:text-sm py-2">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Calendar</span>
            <span className="xs:hidden">Cal</span>
          </TabsTrigger>
          <TabsTrigger value="deadlines" className="flex items-center gap-1 text-xs sm:text-sm py-2">
            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Deadlines</span>
            <span className="xs:hidden">Due</span>
          </TabsTrigger>
          <TabsTrigger value="quickwins" className="flex items-center gap-1 text-xs sm:text-sm py-2 hidden sm:flex">
            <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4" />
            Wins
          </TabsTrigger>
          <TabsTrigger value="owners" className="flex items-center gap-1 text-xs sm:text-sm py-2 hidden sm:flex">
            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
            Owners
          </TabsTrigger>
        </TabsList>

        {/* PRE-REQS TAB */}
        <TabsContent value="prereqs" className="space-y-6 mt-6">
          <Card className="border-red-200 dark:border-red-800">
            <CardHeader className="bg-red-50 dark:bg-red-950/30">
              <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                <AlertTriangle className="w-5 h-5" />
                🔴 CRITICAL — Complete by Jan 3
              </CardTitle>
              <CardDescription>These items are blockers — nothing else works until they're done.</CardDescription>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {preReqs.critical.map((prereq) => (
                <div key={prereq.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 gap-2">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ${statusColors[prereq.status]}`} />
                    <div className="min-w-0">
                      <p className="font-medium text-foreground text-sm">{prereq.title}</p>
                      <p className="text-xs text-muted-foreground break-words">{prereq.dependency}</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right ml-6 sm:ml-0 flex-shrink-0">
                    <p className="text-sm font-medium text-foreground">{prereq.owner}</p>
                    <p className="text-xs text-muted-foreground">Due: {prereq.dueDate}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-yellow-200 dark:border-yellow-800">
            <CardHeader className="bg-yellow-50 dark:bg-yellow-950/30">
              <CardTitle className="flex items-center gap-2 text-yellow-700 dark:text-yellow-400">
                <Clock className="w-5 h-5" />
                🟡 HIGH PRIORITY — Complete by Jan 5
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {preReqs.highPriority.map((prereq) => (
                <div key={prereq.id} className="flex items-center justify-between p-3 rounded-lg border border-border bg-card">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${statusColors[prereq.status]}`} />
                    <div>
                      <p className="font-medium text-foreground">{prereq.title}</p>
                      <p className="text-xs text-muted-foreground">{prereq.dependency}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{prereq.owner}</p>
                    <p className="text-xs text-muted-foreground">Due: {prereq.dueDate}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                🟢 PREP WORK — Complete by Jan 5
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {preReqs.prep.map((prereq) => (
                <div key={prereq.id} className="flex items-center justify-between p-3 rounded-lg border border-border bg-card">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${statusColors[prereq.status]}`} />
                    <div>
                      <p className="font-medium text-foreground">{prereq.title}</p>
                      <p className="text-xs text-muted-foreground">{prereq.dependency}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{prereq.owner}</p>
                    <p className="text-xs text-muted-foreground">Due: {prereq.dueDate}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* CALENDAR TAB */}
        <TabsContent value="calendar" className="space-y-4 mt-6">
          {weeklySchedule.map((week) => {
            const hasMilestones = week.milestonesDue.length > 0;
            const hasCritical = week.mainActivities.some(a => a.priority === 'critical');
            
            return (
              <Collapsible 
                key={week.weekNumber}
                open={expandedWeeks.includes(week.weekNumber)}
                onOpenChange={() => toggleWeek(week.weekNumber)}
              >
                <CollapsibleTrigger className={`flex flex-col sm:flex-row sm:items-center sm:justify-between w-full p-3 sm:p-4 rounded-lg border text-left transition-colors gap-3 ${
                  hasCritical ? 'border-red-300 bg-red-50 dark:bg-red-950/20 hover:bg-red-100 dark:hover:bg-red-950/30' :
                  hasMilestones ? 'border-yellow-300 bg-yellow-50 dark:bg-yellow-950/20 hover:bg-yellow-100 dark:hover:bg-yellow-950/30' :
                  'border-border bg-card hover:bg-muted/50'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center font-bold text-sm sm:text-lg flex-shrink-0 ${
                      week.weekNumber === 12 ? 'bg-accent text-accent-foreground' :
                      hasCritical ? 'bg-red-500 text-white' :
                      hasMilestones ? 'bg-yellow-500 text-white' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      W{week.weekNumber}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">
                        {week.startDate} - {week.endDate}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{week.theme}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4 ml-13 sm:ml-0 flex-wrap">
                    <div className="text-left sm:text-right">
                      <p className="text-xs sm:text-sm font-medium text-foreground">{week.daysUntilEvent} days</p>
                      <p className="text-xs text-muted-foreground hidden sm:block">until event</p>
                    </div>
                    {week.milestonesDue.length > 0 && (
                      <Badge variant="destructive" className="text-xs">
                        {week.milestonesDue.length} MS
                      </Badge>
                    )}
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform flex-shrink-0 ${
                      expandedWeeks.includes(week.weekNumber) ? '' : '-rotate-90'
                    }`} />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 p-4 border rounded-lg bg-card space-y-6">
                  {/* Milestones Due */}
                  {week.milestonesDue.length > 0 && (
                    <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
                      <p className="text-xs font-semibold text-red-700 dark:text-red-400 uppercase tracking-wide mb-2">
                        ⚠️ Milestones Due This Week
                      </p>
                      <ul className="space-y-1">
                        {week.milestonesDue.map((milestone, idx) => (
                          <li key={idx} className="text-sm font-medium text-foreground">• {milestone}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Prep Tasks */}
                  {week.prepTasks.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                        📋 Prep Tasks (Complete Before Week Starts)
                      </p>
                      <div className="space-y-2">
                        {week.prepTasks.map((task) => (
                          <TaskItem key={task.id} task={task} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Main Activities */}
                  {week.mainActivities.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                        🎯 Main Activities
                      </p>
                      <div className="space-y-2">
                        {week.mainActivities.map((task) => (
                          <TaskItem key={task.id} task={task} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Follow-Up Tasks */}
                  {week.followUpTasks.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                        ✉️ Follow-Up Tasks (Within 48 Hours)
                      </p>
                      <div className="space-y-2">
                        {week.followUpTasks.map((task) => (
                          <TaskItem key={task.id} task={task} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Parallel Workstreams */}
                  {week.parallelWorkstreams && week.parallelWorkstreams.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                        ⇄ Parallel Workstreams
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {week.parallelWorkstreams.map((ws, idx) => (
                          <div key={idx} className="p-2 rounded border border-border bg-muted/30 text-sm">
                            <p className="font-medium text-accent">{ws.workstream}</p>
                            <p className="text-muted-foreground">{ws.activities}</p>
                            <p className="text-xs text-muted-foreground mt-1">Owner: {ws.owner}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Resource Conflicts */}
                  {week.resourceConflicts && week.resourceConflicts.length > 0 && (
                    <div className="p-3 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
                      <p className="text-xs font-semibold text-orange-700 dark:text-orange-400 uppercase tracking-wide mb-2">
                        ⚠️ Resource Conflicts
                      </p>
                      <ul className="space-y-1">
                        {week.resourceConflicts.map((conflict, idx) => (
                          <li key={idx} className="text-sm text-foreground">• {conflict}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Quick Wins */}
                  {week.quickWins && week.quickWins.length > 0 && (
                    <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                      <p className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide mb-2">
                        🎯 Quick Wins
                      </p>
                      <ul className="space-y-1">
                        {week.quickWins.map((win, idx) => (
                          <li key={idx} className="text-sm text-foreground">• {win}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Running Metrics */}
                  {week.runningMetrics && week.runningMetrics.length > 0 && (
                    <div className="p-3 rounded-lg bg-muted/50 border border-border">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        📊 Running Metrics (Cumulative)
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {week.runningMetrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <p className="text-lg font-bold text-foreground">{metric.value}</p>
                            <p className="text-xs text-muted-foreground">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </TabsContent>

        {/* DEADLINES TAB */}
        <TabsContent value="deadlines" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                Hard Deadlines
              </CardTitle>
              <CardDescription>These dates cannot be moved — missing them has serious consequences.</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                {hardDeadlines.map((deadline, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-lg bg-red-500 text-white flex flex-col items-center justify-center flex-shrink-0">
                        <p className="text-xs font-medium">{deadline.date.split(' ')[0]}</p>
                        <p className="text-lg font-bold">{deadline.date.split(' ')[1] || ''}</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{deadline.constraint}</p>
                        <p className="text-sm text-red-600 dark:text-red-400">Impact if missed: {deadline.impact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Printer className="w-5 h-5" />
                Print Material Lead Times
              </CardTitle>
              <CardDescription>5-7 day lead times for all printed materials.</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-2">
                {printLeadTimes.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-border bg-card">
                    <div>
                      <p className="font-medium text-foreground">{item.item}</p>
                      <p className="text-sm text-muted-foreground">Needed for: {item.neededFor}</p>
                    </div>
                    <Badge variant="outline" className="font-mono">Order by {item.orderBy}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-yellow-500" />
                Identified Gaps
              </CardTitle>
              <CardDescription>Weeks with no scheduled activities — consider adding touchpoints.</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-2">
                {identifiedGaps.map((gap, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-yellow-200 dark:border-yellow-800 bg-yellow-50/50 dark:bg-yellow-950/20">
                    <div>
                      <p className="font-medium text-foreground">{gap.week}</p>
                      <p className="text-sm text-muted-foreground">{gap.gap}</p>
                    </div>
                    <p className="text-sm text-yellow-700 dark:text-yellow-400">💡 {gap.recommendation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* QUICK WINS TAB */}
        <TabsContent value="quickwins" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                Quick Wins Summary
              </CardTitle>
              <CardDescription>Assets that serve multiple purposes — maximize efficiency.</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                {quickWins.map((win, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-foreground">{win.asset}</p>
                        <p className="text-sm text-muted-foreground mt-1">Created for: <strong>{win.createdFor}</strong></p>
                      </div>
                    </div>
                    <div className="mt-2 p-2 rounded bg-green-100 dark:bg-green-900/30">
                      <p className="text-sm text-green-800 dark:text-green-300">
                        <Megaphone className="w-4 h-4 inline mr-1" />
                        Also serves: {win.alsoServes}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* OWNERS TAB */}
        <TabsContent value="owners" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Owner Responsibility Matrix
              </CardTitle>
              <CardDescription>Who owns what across the campaign.</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                {ownerMatrix.map((owner, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-border bg-card">
                    <p className="font-semibold text-foreground text-lg">{owner.owner}</p>
                    <p className="text-sm text-muted-foreground mt-1">{owner.responsibilities}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

