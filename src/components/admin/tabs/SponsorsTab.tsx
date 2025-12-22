import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Handshake, ChevronDown } from "lucide-react";
import { 
  pillarRecruitment, 
  warmConnections, 
  crossPillarFoundations, 
  sponsorshipStats, 
  implementationTimeline 
} from "@/data/sponsorshipPipeline";

export const SponsorsTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Handshake className="w-5 h-5" />
          Sponsors & Partners
        </CardTitle>
        <CardDescription>
          Sponsorship pipeline, pillar recruitment, and partnership opportunities
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">{sponsorshipStats.totalCorporateTargets}</p>
            <p className="text-xs text-muted-foreground">Corporate Targets</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">{sponsorshipStats.totalNonprofitPartners}</p>
            <p className="text-xs text-muted-foreground">Nonprofit Partners</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-accent">{sponsorshipStats.anchorTierTargets}</p>
            <p className="text-xs text-muted-foreground">Anchor Sponsors ($25k+)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-500">{sponsorshipStats.totalWarmConnections}</p>
            <p className="text-xs text-muted-foreground">Warm Connections</p>
          </div>
        </div>

        {/* Active Pipeline */}
        <div className="mb-8">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <span className="text-lg">💰</span> Active Pipeline
          </h4>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4 bg-card">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h5 className="font-bold text-foreground">Parallel Web Systems</h5>
                  <p className="text-sm text-accent">$100M Series A • AI Infrastructure</p>
                  <p className="text-xs text-muted-foreground mt-1">Contact: Matt Harris (Engineering)</p>
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                  Inbound Lead
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Parallel is building infrastructure for AI agents to search and research across the web. 
                Matt Harris (local Richmond engineer, ex-Netflix, ex-Capital One) reached out asking how 
                Parallel could get involved as a sponsor. Strong fit for a tech/API sponsor — could offer 
                API credits for participants, sponsor an "AI Agents" challenge category, or provide 
                technical mentors. Their $100M Series A funding suggests capacity for meaningful sponsorship.
              </p>
              <p className="text-xs text-muted-foreground mt-2 italic">
                → Assign to Will Melton for follow-up
              </p>
            </div>

            <div className="border border-border rounded-lg p-4 bg-card">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h5 className="font-bold text-foreground">goHappy</h5>
                  <p className="text-sm text-accent">HR Tech • Frontline Employee Engagement</p>
                  <p className="text-xs text-muted-foreground mt-1">Contact: Larry Thacker (Principal UX Designer)</p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  Team Connection
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                goHappy builds employee engagement tools for frontline workers — surveys with AI sentiment 
                analysis, recognition programs, and referral systems. Strong alignment with the "Thriving 
                Economy" pillar, specifically workforce development and jobs challenges. Larry Thacker 
                (15+ years UX, ex-CarMax, ex-LendingTree) is joining as a Design Mentor, creating a natural 
                connection for sponsorship conversation.
              </p>
              <p className="text-xs text-muted-foreground mt-2 italic">
                → Explore with Larry; assign to Will Melton if interested
              </p>
            </div>

            <div className="border border-border rounded-lg p-4 bg-card">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h5 className="font-bold text-foreground">Capital One</h5>
                  <p className="text-sm text-accent">Financial Services • Tech & Innovation</p>
                  <p className="text-xs text-muted-foreground mt-1">Contact: Mohammad Hassan (Director, Software Engineering)</p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  Team Connection
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Capital One is a major Richmond employer and tech leader with strong community engagement 
                programs. Mohammad Hassan (Director of Software Engineering, 5+ years at C1, leads CI/CD 
                and developer tools) is joining as a Technical Mentor. He could champion the hackathon 
                internally and connect us to C1's community relations or corporate giving team.
              </p>
              <p className="text-xs text-muted-foreground mt-2 italic">
                → Ask Mohammad about internal sponsorship intro; assign to Will Melton
              </p>
            </div>
          </div>
        </div>
        
        {/* Pillar-by-Pillar Breakdown */}
        <div className="mb-8">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <span className="text-lg">🎯</span> Pillar Sponsor & Partner Targets
          </h4>
          <div className="space-y-4">
            {pillarRecruitment.map((pillar) => (
              <Collapsible key={pillar.id} className="border border-border rounded-lg">
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-accent">{pillar.id}</span>
                    <div className="text-left">
                      <h5 className="font-semibold text-foreground">{pillar.name}</h5>
                      <p className="text-xs text-accent font-medium">{pillar.pitchContext.angle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {pillar.corporateTargets.length} corps
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      {pillar.nonprofitPartners.length} nonprofits
                    </span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4">
                  {/* Strategic Context */}
                  <div className="mb-4 p-3 bg-muted/30 rounded-lg border-l-4 border-accent">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.pitchContext.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Corporate Targets */}
                    <div className="space-y-3">
                      <h6 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Corporate Sponsor Targets
                      </h6>
                      {pillar.corporateTargets.map((target, idx) => (
                        <Collapsible key={idx} className="p-3 bg-blue-50/50 dark:bg-blue-950/20 rounded border border-blue-100 dark:border-blue-900">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-medium text-sm text-foreground">{target.organization}</p>
                              <p className="text-xs text-muted-foreground">{target.contact} • {target.title}</p>
                            </div>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded whitespace-nowrap">
                              {target.tier}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">{target.relevance}</p>
                          {target.sources && target.sources.length > 0 && (
                            <div className="mt-1 flex flex-wrap gap-1">
                              {target.sources.map((source) => (
                                <a
                                  key={source.id}
                                  href={source.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-0.5 text-xs text-blue-600 hover:text-blue-800 hover:underline"
                                >
                                  [{source.id}]
                                </a>
                              ))}
                            </div>
                          )}
                          {target.extendedNotes && (
                            <>
                              <CollapsibleTrigger className="mt-2 text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer">
                                <ChevronDown className="w-3 h-3" /> Extended Notes
                              </CollapsibleTrigger>
                              <CollapsibleContent className="mt-2 p-2 bg-white/50 dark:bg-black/20 rounded text-xs text-muted-foreground leading-relaxed">
                                {target.extendedNotes}
                              </CollapsibleContent>
                            </>
                          )}
                        </Collapsible>
                      ))}
                    </div>
                    
                    {/* Nonprofit Partners */}
                    <div className="space-y-3">
                      <h6 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Nonprofit Partner Targets
                      </h6>
                      {pillar.nonprofitPartners.map((partner, idx) => (
                        <Collapsible key={idx} className="p-3 bg-green-50/50 dark:bg-green-950/20 rounded border border-green-100 dark:border-green-900">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-medium text-sm text-foreground">{partner.organization}</p>
                              <p className="text-xs text-muted-foreground">{partner.contact} • {partner.title}</p>
                            </div>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded whitespace-nowrap">
                              {partner.role}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">{partner.alignment}</p>
                          {partner.sources && partner.sources.length > 0 && (
                            <div className="mt-1 flex flex-wrap gap-1">
                              {partner.sources.map((source) => (
                                <a
                                  key={source.id}
                                  href={source.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-0.5 text-xs text-green-600 hover:text-green-800 hover:underline"
                                >
                                  [{source.id}]
                                </a>
                              ))}
                            </div>
                          )}
                          {partner.extendedNotes && (
                            <>
                              <CollapsibleTrigger className="mt-2 text-xs text-green-600 hover:text-green-800 flex items-center gap-1 cursor-pointer">
                                <ChevronDown className="w-3 h-3" /> Extended Notes
                              </CollapsibleTrigger>
                              <CollapsibleContent className="mt-2 p-2 bg-white/50 dark:bg-black/20 rounded text-xs text-muted-foreground leading-relaxed">
                                {partner.extendedNotes}
                              </CollapsibleContent>
                            </>
                          )}
                        </Collapsible>
                      ))}
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
        
        {/* Implementation Timeline */}
        <div className="mb-8">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <span className="text-lg">📅</span> Implementation Timeline
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-border rounded-lg p-4 bg-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded font-medium">
                  {implementationTimeline.phase1.deadline}
                </span>
              </div>
              <h5 className="font-bold text-foreground">{implementationTimeline.phase1.name}</h5>
              <p className="text-xs text-muted-foreground mt-1">{implementationTimeline.phase1.description}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {implementationTimeline.phase1.targets.map((target, idx) => (
                  <span key={idx} className="text-xs bg-muted px-2 py-0.5 rounded">{target}</span>
                ))}
              </div>
            </div>
            <div className="border border-border rounded-lg p-4 bg-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-medium">
                  {implementationTimeline.phase2.deadline}
                </span>
              </div>
              <h5 className="font-bold text-foreground">{implementationTimeline.phase2.name}</h5>
              <p className="text-xs text-muted-foreground mt-1">{implementationTimeline.phase2.description}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {implementationTimeline.phase2.targets.map((target, idx) => (
                  <span key={idx} className="text-xs bg-muted px-2 py-0.5 rounded">{target}</span>
                ))}
              </div>
            </div>
            <div className="border border-border rounded-lg p-4 bg-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded font-medium">
                  {implementationTimeline.phase3.deadline}
                </span>
              </div>
              <h5 className="font-bold text-foreground">{implementationTimeline.phase3.name}</h5>
              <p className="text-xs text-muted-foreground mt-1">{implementationTimeline.phase3.description}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {implementationTimeline.phase3.targets.map((target, idx) => (
                  <span key={idx} className="text-xs bg-muted px-2 py-0.5 rounded">{target}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Warm Connections - Key Influencers */}
        <div className="mb-8">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <span className="text-lg">🔗</span> Warm Connections (Key Influencers)
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            These individuals bridge multiple organizations and are high-value targets for initial outreach.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {warmConnections.map((connection, idx) => (
              <div key={idx} className="border border-border rounded-lg p-4 bg-card">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h5 className="font-bold text-foreground">{connection.name}</h5>
                    <p className="text-sm text-accent">{connection.role}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  <span className="font-medium">Network:</span> {connection.network}
                </p>
                <p className="text-xs text-foreground bg-muted/50 p-2 rounded italic">
                  {connection.strategy}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-Pillar Foundations */}
        <div>
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <span className="text-lg">🏛️</span> Cross-Pillar Foundations
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            These foundations support initiatives across all pillars — ideal for general operating support or "Grand Prize" sponsorships.
          </p>
          <div className="space-y-3">
            {crossPillarFoundations.map((foundation, idx) => (
              <div key={idx} className="border border-border rounded-lg p-4 bg-card">
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="font-bold text-foreground">{foundation.organization}</h5>
                    <p className="text-sm text-muted-foreground">{foundation.focus}</p>
                  </div>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full whitespace-nowrap">
                    Cross-Pillar
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="font-medium text-foreground">Contact:</span>{" "}
                    <span className="text-muted-foreground">{foundation.contact}</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Strategy:</span>{" "}
                    <span className="text-muted-foreground">{foundation.contactStrategy}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

