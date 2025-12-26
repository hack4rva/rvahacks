import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Users, ChevronDown, Clock } from "lucide-react";
import { teamDelegation, getTeamStats, type SubRole } from "@/data/teamDelegation";

export const TeamTab = () => {
  const stats = getTeamStats();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="w-5 h-5" />
          Team Structure
        </CardTitle>
        <CardDescription>
          Core leadership and their recruited leadership volunteers — click any role to see responsibilities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {teamDelegation.map((leader, idx) => (
            <Collapsible key={idx} className="border border-border rounded-lg bg-card">
              <CollapsibleTrigger className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full p-3 sm:p-4 hover:bg-muted/50 transition-colors text-left gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0 ${
                    leader.name === 'TBD' ? 'bg-orange-500 text-white' : 'bg-accent text-accent-foreground'
                  }`}>
                    {leader.name === 'TBD' ? '?' : leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <h3 className={`text-base sm:text-lg font-bold ${leader.name === 'TBD' ? 'text-orange-500 italic' : 'text-foreground'}`}>
                      {leader.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-accent">{leader.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-13 sm:ml-0">
                  <div className="text-left sm:text-right">
                    <p className="text-sm font-bold text-foreground">
                      {leader.subRoles.filter(r => r.assignee || (r.volunteers && r.volunteers.length > 0)).length}/{leader.subRoles.length}
                    </p>
                    <p className="text-xs text-muted-foreground">roles filled</p>
                  </div>
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="border-t border-border">
                {/* Core Leader Details */}
                <div className="p-4 bg-muted/30">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Responsibilities
                      </p>
                      <ul className="text-sm text-foreground space-y-1">
                        {leader.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <span className="text-accent">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Why This Role Matters
                      </p>
                      <p className="text-sm text-muted-foreground italic leading-relaxed">
                        {leader.whyItMatters}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub-roles */}
                <div className="p-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Sub-Roles
                  </p>
                  <div className="space-y-2">
                    {leader.subRoles.map((subRole: SubRole, subIdx: number) => {
                      // Check if this is a pool role (has volunteers array) or single role
                      const isPoolRole = subRole.volunteers && Array.isArray(subRole.volunteers);
                      const volunteerCount = isPoolRole ? subRole.volunteers!.length : 0;
                      const isFilled = isPoolRole ? volunteerCount > 0 : !!subRole.assignee;
                      
                      return (
                        <Collapsible key={subIdx}>
                          <CollapsibleTrigger className="flex flex-col xs:flex-row xs:items-center justify-between w-full py-2 px-3 rounded bg-muted/50 hover:bg-muted transition-colors text-left gap-2">
                            <div className="flex items-center gap-3 min-w-0">
                              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${isFilled ? 'bg-green-500' : 'bg-orange-500'}`} />
                              <span className="text-sm font-medium text-foreground break-words">{subRole.title}</span>
                              {isPoolRole && subRole.targetCount && (
                                <span className="text-xs text-muted-foreground whitespace-nowrap">
                                  (need {subRole.targetCount})
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 flex-wrap ml-5 xs:ml-0">
                              {isPoolRole ? (
                                <span className={`text-xs px-2 py-0.5 rounded ${
                                  volunteerCount > 0 ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                                }`}>
                                  {volunteerCount} volunteer{volunteerCount !== 1 ? 's' : ''}
                                </span>
                              ) : subRole.assignee ? (
                                <span className="text-sm font-medium text-accent">
                                  {subRole.assignee}
                                </span>
                              ) : (
                                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                                  Open
                                </span>
                              )}
                              <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2 ml-0 sm:ml-5 p-3 bg-card border border-border rounded-lg">
                            <div className="space-y-3">
                              <div>
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                                  What This Role Does
                                </p>
                                <p className="text-sm text-foreground">{subRole.description}</p>
                              </div>
                              <div>
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                                  Why It Matters
                                </p>
                                <p className="text-sm text-muted-foreground italic">{subRole.whyItMatters}</p>
                              </div>
                              
                              {/* Show volunteers list for pool roles */}
                              {isPoolRole && volunteerCount > 0 && (
                                <div>
                                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                                    Volunteers ({volunteerCount})
                                  </p>
                                  <div className="space-y-1">
                                    {subRole.volunteers!.map((vol, vIdx) => (
                                      <div key={vIdx} className="flex items-center justify-between py-1.5 px-2 bg-muted/50 rounded text-sm">
                                        <span className="text-foreground">{vol.name}</span>
                                        {vol.focus && (
                                          <span className="text-xs text-accent">{vol.focus}</span>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                  {subRole.targetCount && (
                                    <p className="text-xs text-muted-foreground mt-2">
                                      Still recruiting: need {subRole.targetCount} total
                                    </p>
                                  )}
                                </div>
                              )}
                              
                              <div className="flex items-center gap-2 pt-2 border-t border-border">
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{subRole.commitment}</span>
                              </div>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      );
                    })}
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 p-4 bg-muted/30 rounded-lg">
          <h4 className="font-semibold mb-3">Team Summary</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.totalCoreLeaders}</p>
              <p className="text-xs text-muted-foreground">Core Leaders</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.filledCoreLeaders}</p>
              <p className="text-xs text-muted-foreground">Filled Core</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.totalSubRoles}</p>
              <p className="text-xs text-muted-foreground">Sub-Roles</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">{stats.filledSubRoles}</p>
              <p className="text-xs text-muted-foreground">Filled</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-500">{stats.openSubRoles}</p>
              <p className="text-xs text-muted-foreground">Open</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

