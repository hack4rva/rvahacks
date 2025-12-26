import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Target, Calendar, ChevronDown, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { milestones, phases, planStats } from "@/data/communicationPlan";

export const PlanTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5" />
          Communication Plan
        </CardTitle>
        <CardDescription>
          13-level milestone framework — from foundation to implementation
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 p-4 bg-muted/30 rounded-lg">
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">{planStats.totalLevels}</p>
            <p className="text-xs text-muted-foreground">Total Levels</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-500">{planStats.completedLevels}</p>
            <p className="text-xs text-muted-foreground">Complete</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-500">{planStats.inProgressLevels}</p>
            <p className="text-xs text-muted-foreground">In Progress</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-muted-foreground">{planStats.notStartedLevels}</p>
            <p className="text-xs text-muted-foreground">Not Started</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-accent">{planStats.eventDate}</p>
            <p className="text-xs text-muted-foreground">Event Date</p>
          </div>
        </div>

        {/* Phase-by-Phase Breakdown */}
        <div className="space-y-8">
          {phases.map((phase) => {
            const phaseMilestones = milestones.filter(m => m.phase === phase.id);
            const phaseComplete = phaseMilestones.filter(m => m.status === 'complete').length;
            const phaseInProgress = phaseMilestones.filter(m => m.status === 'in-progress').length;
            
            return (
              <div key={phase.id} className="border border-border rounded-lg overflow-hidden">
                {/* Phase Header */}
                <div className={`p-4 ${
                  phase.id === 'foundation' ? 'bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-500' :
                  phase.id === 'ecosystem' ? 'bg-green-50 dark:bg-green-950/30 border-b-2 border-green-500' :
                  phase.id === 'the-work' ? 'bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-500' :
                  phase.id === 'resources' ? 'bg-orange-50 dark:bg-orange-950/30 border-b-2 border-orange-500' :
                  phase.id === 'launch' ? 'bg-red-50 dark:bg-red-950/30 border-b-2 border-red-500' :
                  'bg-gray-50 dark:bg-gray-950/30 border-b-2 border-gray-500'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-foreground">{phase.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground italic">{phase.theme}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs bg-muted px-2 py-1 rounded">
                        Levels {phase.levels}
                      </span>
                      <div className="flex items-center gap-1">
                        {phaseComplete > 0 && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            {phaseComplete} ✓
                          </span>
                        )}
                        {phaseInProgress > 0 && (
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                            {phaseInProgress} →
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Milestones */}
                <div className="divide-y divide-border">
                  {phaseMilestones.map((milestone) => (
                    <Collapsible key={milestone.level}>
                      <CollapsibleTrigger className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full p-3 sm:p-4 hover:bg-muted/50 transition-colors text-left gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg flex-shrink-0 ${
                            milestone.status === 'complete' ? 'bg-green-500 text-white' :
                            milestone.status === 'in-progress' ? 'bg-yellow-500 text-white' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            {milestone.level}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-foreground text-sm sm:text-base">{milestone.name}</h4>
                            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{milestone.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-4 flex-wrap ml-11 sm:ml-0">
                          {milestone.parallelWith && (
                            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded hidden sm:inline">
                              ⇄ Level {milestone.parallelWith.join(', ')}
                            </span>
                          )}
                          <div className="text-left sm:text-right">
                            <p className={`text-xs sm:text-sm font-bold ${
                              milestone.status === 'complete' ? 'text-green-600' :
                              milestone.status === 'in-progress' ? 'text-yellow-600' :
                              'text-muted-foreground'
                            }`}>
                              {milestone.progress}
                            </p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded whitespace-nowrap ${
                            milestone.status === 'complete' ? 'bg-green-100 text-green-800' :
                            milestone.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {milestone.status.replace('-', ' ')}
                          </span>
                          <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-3 sm:px-4 pb-4">
                        <div className="ml-0 sm:ml-14 space-y-4">
                          {/* Target Date */}
                          {milestone.targetDate && (
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span className="text-muted-foreground">Target:</span>
                              <span className="font-medium text-foreground">{milestone.targetDate}</span>
                            </div>
                          )}

                          {/* Components */}
                          {milestone.components && milestone.components.length > 0 && (
                            <div className="space-y-2">
                              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                                Components
                              </p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {milestone.components.map((component, idx) => (
                                  <div 
                                    key={idx}
                                    className={`flex items-center justify-between p-3 rounded border ${
                                      component.status === 'complete' ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800' :
                                      component.status === 'in-progress' ? 'bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800' :
                                      'bg-card border-border'
                                    }`}
                                  >
                                    <div className="flex items-center gap-2">
                                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                                        component.status === 'complete' ? 'bg-green-500' :
                                        component.status === 'in-progress' ? 'bg-yellow-500' :
                                        'bg-muted border border-muted-foreground/30'
                                      }`}>
                                        {component.status === 'complete' && (
                                          <CheckCircle2 className="w-3 h-3 text-white" />
                                        )}
                                        {component.status === 'in-progress' && (
                                          <Clock className="w-3 h-3 text-white" />
                                        )}
                                      </div>
                                      <div>
                                        <p className="text-sm font-medium text-foreground">{component.name}</p>
                                        {component.notes && (
                                          <p className="text-xs text-muted-foreground">{component.notes}</p>
                                        )}
                                      </div>
                                    </div>
                                    <span className="text-xs text-accent font-medium">{component.target}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Announcement Template */}
                          {milestone.announcementTemplate && (
                            <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
                              <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
                                Announcement
                              </p>
                              <p className="text-xs sm:text-sm text-foreground italic break-words">
                                "{milestone.announcementTemplate}"
                              </p>
                            </div>
                          )}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Visual */}
        <div className="mt-8 p-4 bg-muted/30 rounded-lg">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Progress Overview
          </h4>
          <div className="flex items-center gap-2">
            {milestones.map((m) => (
              <div 
                key={m.level}
                className={`flex-1 h-8 rounded flex items-center justify-center text-xs font-bold ${
                  m.status === 'complete' ? 'bg-green-500 text-white' :
                  m.status === 'in-progress' ? 'bg-yellow-500 text-white' :
                  'bg-muted text-muted-foreground'
                }`}
                title={`Level ${m.level}: ${m.name}`}
              >
                {m.level}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>Foundation</span>
            <span>Ecosystem</span>
            <span>The Work</span>
            <span>Resources</span>
            <span>Launch</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

