import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, ChevronDown, Handshake, Link2, GraduationCap, AlertTriangle, CheckCircle2, Clock, School, Building2, Target, Calendar, TrendingUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { pillarRecruitment, warmConnections, crossPillarFoundations, sponsorshipStats, implementationTimeline, pillarStakeholders } from "@/data/sponsorshipPipeline";
import { k12Districts, specialtySchools, universities, criticalDeadlines, complianceChecklist, diplomaSeals, academiaStats } from "@/data/academiaPartners";
import { milestones, phases, planStats, type Milestone, type Phase } from "@/data/communicationPlan";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [signups, setSignups] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAdminAndFetchData();
  }, []);

  const checkAdminAndFetchData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/login");
        return;
      }

      const { data: roleData, error: roleError } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (roleError || !roleData) {
        toast({
          variant: "destructive",
          title: "Access Denied",
          description: "You don't have admin privileges.",
        });
        navigate("/");
        return;
      }

      setIsAdmin(true);
      await fetchSignups();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSignups = async () => {
    const { data, error } = await supabase
      .from("email_signups")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    setSignups(data || []);
  };

  // Connectors - people who help bridge networks and make introductions
  const connectors = [
    {
      name: "Dawson Boyer",
      description: "Community connector with broad Richmond network",
    },
    {
      name: "Drew Cleveland",
      description: "Startup and entrepreneurial ecosystem connections",
    },
    {
      name: "Nick Serfass",
      description: "Tech community and professional network",
    },
    {
      name: "Paul Devitt",
      description: "Business and civic leadership connections",
    },
    {
      name: "Danny Avula",
      description: "Public health and government network",
    },
    {
      name: "Ankit Mathur",
      description: "Technology and innovation community",
    },
    {
      name: "Debbie Irwin",
      description: "Economic development and business community",
    },
  ];

  // Team delegation structure - Core Leaders and their sub-role assignments
  const teamDelegation = [
    {
      name: "Ford Prior",
      role: "Co-Organizer",
      focus: "Tech, Platform, Judging",
      subRoles: [
        { title: "Platform Administrator", assignee: "Tom Becker" },
        { title: "Hacker Space Lead", assignee: "Michael Ghaffari" },
        { title: "Technical Mentor", assignee: "Kenton Vizdos" },
        { title: "Technical Mentor", assignee: "Mohammad Hassan" },
        { title: "Accessibility Mentor", assignee: "J. Albert Bowden II" },
        { title: "Security Mentor", assignee: "Mike Mitchell" },
        { title: "Judge Coordinator", assignee: "Ankit Mathur" },
        { title: "Judge — Thriving Economy", assignee: "Debbie Irwin" },
        { title: "Judge — Product/Innovation", assignee: "Alex Otanez" },
        { title: "Help Desk Lead", assignee: "David Cariello" },
      ]
    },
    {
      name: "Crystal Harvey",
      role: "Co-Organizer", 
      focus: "Venue & Operations",
      subRoles: [
        { title: "Friday Operations Lead", assignee: null },
        { title: "Sunday Operations Lead", assignee: null },
        { title: "Registration Manager", assignee: null },
        { title: "AV Coordinator", assignee: null },
        { title: "Catering Coordinator", assignee: "Bridget Cochran" },
      ]
    },
    {
      name: "Michael Kolbe",
      role: "City Liaison",
      focus: "Government Stakeholders, Pillars, SMEs",
      subRoles: [
        { title: "Challenge Design Facilitator", assignee: "Ryan Shriver" },
        { title: "Pillar Coordinator", assignee: null },
        { title: "SME Recruiter", assignee: null },
        { title: "VIP/Speaker Host Lead", assignee: null },
      ]
    },
    {
      name: "Sinclair Jenks",
      role: "Marketing & Comms",
      focus: "Brand, Social Media, Press, Content",
      subRoles: [
        { title: "Outreach Lead", assignee: null },
        { title: "Marketing Content Lead", assignee: "Carly Manning" },
        { title: "Photography Lead", assignee: null },
      ]
    },
    {
      name: "Heather Lyne",
      role: "Entrepreneurial Ecosystems",
      focus: "Mentorship, Pitch Coaching, Design Support",
      subRoles: [
        { title: "Design Lounge Lead", assignee: "Alyssa Paulette" },
        { title: "Design Mentor", assignee: "Madison Johnson" },
        { title: "Design Mentor", assignee: "Larry Thacker" },
        { title: "Pitch Coaching Lead", assignee: "April Palmer" },
        { title: "Product Advisor", assignee: "Alex Otanez" },
        { title: "Business Mentor", assignee: "Adam Woodward" },
        { title: "Workshop Facilitator", assignee: "Nick Pericle" },
      ]
    },
    {
      name: "Will Melton",
      role: "Sponsorships & Partnerships",
      focus: "Corporate Sponsors, Nonprofit Partners",
      subRoles: [
        { title: "Corporate Sponsor Coordinator", assignee: null },
        { title: "Nonprofit Partner Coordinator", assignee: null },
      ]
    },
    {
      name: "TBD",
      role: "Community & Volunteers",
      focus: "Volunteer Recruitment, Site Captains, Participant Experience",
      subRoles: [
        { title: "Volunteer Coordinator", assignee: null },
        { title: "Volunteer Recruitment Advisor", assignee: "Claire Jordan" },
        { title: "Site Captain Coordinator", assignee: null },
        { title: "Team Formation Lead", assignee: "Christian Markow" },
      ]
    },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const exportToCSV = () => {
    const headers = ["Email", "First Name", "Interest", "Created At"];
    const rows = signups.map(s => [
      s.email,
      s.first_name || "",
      s.interest || "",
      new Date(s.created_at).toLocaleString()
    ]);

    const csv = [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(","))
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `email-signups-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="space-x-2">
            <Button onClick={() => navigate("/")} variant="outline">
              Home
            </Button>
            <Button onClick={handleLogout} variant="outline">
              Logout
            </Button>
          </div>
        </div>

        <Tabs defaultValue="plan" className="w-full">
          <TabsList className="flex flex-wrap gap-2 h-auto p-2 bg-muted/50 border border-border rounded-lg mb-8">
            <TabsTrigger value="plan" className="flex-1 min-w-[100px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Plan</TabsTrigger>
            <TabsTrigger value="team" className="flex-1 min-w-[100px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Team</TabsTrigger>
            <TabsTrigger value="pillars" className="flex-1 min-w-[100px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Pillars</TabsTrigger>
            <TabsTrigger value="sponsors" className="flex-1 min-w-[100px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Sponsors</TabsTrigger>
            <TabsTrigger value="academia" className="flex-1 min-w-[100px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Academia</TabsTrigger>
            <TabsTrigger value="connectors" className="flex-1 min-w-[100px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Connectors</TabsTrigger>
            <TabsTrigger value="signups" className="flex-1 min-w-[100px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Signups</TabsTrigger>
          </TabsList>

          <TabsContent value="plan">
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
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-lg font-bold text-foreground">{phase.name}</h3>
                              <p className="text-sm text-muted-foreground italic">{phase.theme}</p>
                            </div>
                            <div className="flex items-center gap-3">
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
                              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-muted/50 transition-colors text-left">
                                <div className="flex items-center gap-4">
                                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                                    milestone.status === 'complete' ? 'bg-green-500 text-white' :
                                    milestone.status === 'in-progress' ? 'bg-yellow-500 text-white' :
                                    'bg-muted text-muted-foreground'
                                  }`}>
                                    {milestone.level}
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-foreground">{milestone.name}</h4>
                                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  {milestone.parallelWith && (
                                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                                      ⇄ Level {milestone.parallelWith.join(', ')}
                                    </span>
                                  )}
                                  <div className="text-right">
                                    <p className={`text-sm font-bold ${
                                      milestone.status === 'complete' ? 'text-green-600' :
                                      milestone.status === 'in-progress' ? 'text-yellow-600' :
                                      'text-muted-foreground'
                                    }`}>
                                      {milestone.progress}
                                    </p>
                                    <p className="text-xs text-muted-foreground">{milestone.targetCount}</p>
                                  </div>
                                  <span className={`text-xs px-2 py-1 rounded ${
                                    milestone.status === 'complete' ? 'bg-green-100 text-green-800' :
                                    milestone.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-gray-100 text-gray-800'
                                  }`}>
                                    {milestone.status.replace('-', ' ')}
                                  </span>
                                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                                </div>
                              </CollapsibleTrigger>
                              <CollapsibleContent className="px-4 pb-4">
                                <div className="ml-14 space-y-4">
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
                                        Announcement Template
                                      </p>
                                      <p className="text-sm text-foreground italic">
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
          </TabsContent>

          <TabsContent value="team">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Team Structure
                </CardTitle>
                <CardDescription>
                  Core leadership and their recruited leadership volunteers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {teamDelegation.map((leader, idx) => (
                    <div 
                      key={idx} 
                      className="border border-border rounded-lg p-4 bg-card"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className={`text-lg font-bold ${leader.name === 'TBD' ? 'text-muted-foreground italic' : 'text-foreground'}`}>
                            {leader.name}
                          </h3>
                          <p className="text-sm font-medium text-accent">{leader.role}</p>
                          <p className="text-xs text-muted-foreground mt-1">{leader.focus}</p>
                        </div>
                      </div>
                      
                      <div className="border-t border-border pt-3 mt-3">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Leadership Roles to Fill
                        </p>
                        <div className="space-y-2">
                          {leader.subRoles.map((subRole, subIdx) => (
                            <div 
                              key={subIdx}
                              className="flex items-center justify-between py-1.5 px-2 rounded bg-muted/50"
                            >
                              <span className="text-sm text-foreground">{subRole.title}</span>
                              {subRole.assignee ? (
                                <span className="text-sm font-medium text-accent">
                                  {subRole.assignee}
                                </span>
                              ) : (
                                <span className="text-xs text-muted-foreground italic">
                                  Unassigned
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary Stats */}
                <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-3">Team Summary</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-foreground">{teamDelegation.length}</p>
                      <p className="text-xs text-muted-foreground">Core Leaders</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">
                        {teamDelegation.reduce((acc, l) => acc + l.subRoles.length, 0)}
                      </p>
                      <p className="text-xs text-muted-foreground">Leadership Roles</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent">
                        {teamDelegation.reduce((acc, l) => acc + l.subRoles.filter(r => r.assignee).length, 0)}
                      </p>
                      <p className="text-xs text-muted-foreground">Filled</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-orange-500">
                        {teamDelegation.reduce((acc, l) => acc + l.subRoles.filter(r => !r.assignee).length, 0)}
                      </p>
                      <p className="text-xs text-muted-foreground">Unfilled</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pillars">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-lg">🏛️</span>
                  Pillar Stakeholders
                </CardTitle>
                <CardDescription>
                  7 Pillars × 4 Roles — Each pillar needs: Breakout Owner + City Hall Owner + Corporate Rep + Nonprofit Rep
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-2 font-semibold">Pillar</th>
                        <th className="text-left py-2 px-2 font-semibold">Breakout Owner</th>
                        <th className="text-left py-2 px-2 font-semibold">City Hall Owner</th>
                        <th className="text-left py-2 px-2 font-semibold">Corporate Rep</th>
                        <th className="text-left py-2 px-2 font-semibold">Nonprofit Rep</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pillarStakeholders.map((pillar) => (
                        <tr key={pillar.id} className="border-b border-border/50">
                          <td className="py-3 px-2">
                            <span className="font-medium">{pillar.id}. {pillar.name}</span>
                            <p className="text-xs text-muted-foreground">{pillar.focus}</p>
                          </td>
                          <td className="py-3 px-2">
                            {pillar.breakoutOwner ? (
                              <span className="text-sm font-medium text-accent">{pillar.breakoutOwner}</span>
                            ) : (
                              <span className="text-xs text-muted-foreground italic">Unassigned</span>
                            )}
                          </td>
                          <td className="py-3 px-2">
                            {pillar.cityHallOwner ? (
                              <span className="text-sm font-medium text-accent">{pillar.cityHallOwner}</span>
                            ) : (
                              <span className="text-xs text-muted-foreground italic">Unassigned</span>
                            )}
                          </td>
                          <td className="py-3 px-2">
                            {pillar.corporateRep ? (
                              <span className="text-sm font-medium text-accent">{pillar.corporateRep}</span>
                            ) : (
                              <span className="text-xs text-muted-foreground italic">Unassigned</span>
                            )}
                          </td>
                          <td className="py-3 px-2">
                            {pillar.nonprofitRep ? (
                              <span className="text-sm font-medium text-accent">{pillar.nonprofitRep}</span>
                            ) : (
                              <span className="text-xs text-muted-foreground italic">Unassigned</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-3">Pillar Coverage Summary</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-accent">
                        {pillarStakeholders.filter(p => p.breakoutOwner).length}/7
                      </p>
                      <p className="text-xs text-muted-foreground">Breakout Owners</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent">
                        {pillarStakeholders.filter(p => p.cityHallOwner).length}/7
                      </p>
                      <p className="text-xs text-muted-foreground">City Hall Owners</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent">
                        {pillarStakeholders.filter(p => p.corporateRep).length}/7
                      </p>
                      <p className="text-xs text-muted-foreground">Corporate Reps</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent">
                        {pillarStakeholders.filter(p => p.nonprofitRep).length}/7
                      </p>
                      <p className="text-xs text-muted-foreground">Nonprofit Reps</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sponsors">
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
                        connection for sponsorship conversation. goHappy could sponsor workforce/jobs-related 
                        challenges or provide mentorship on employee experience solutions.
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
                        internally and connect us to C1's community relations or corporate giving team. Strong fit 
                        for "Thriving City Hall" (government IT modernization) or title/major sponsor. C1 has 
                        history of sponsoring RVA tech events and recruiting from hackathons.
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
          </TabsContent>

          <TabsContent value="connectors">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Link2 className="w-5 h-5" />
                  Connectors
                </CardTitle>
                <CardDescription>
                  Key people who bridge networks and can make introductions to sponsors, partners, and community stakeholders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {connectors.map((connector, idx) => (
                    <div key={idx} className="border border-border rounded-lg p-4 bg-card hover:bg-muted/30 transition-colors">
                      <h5 className="font-bold text-foreground">{connector.name}</h5>
                      <p className="text-xs text-muted-foreground mt-1">{connector.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="academia">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  K-12 & Higher Ed Partners
                </CardTitle>
                <CardDescription>
                  Educational partnerships, contacts, and critical deadlines for student recruitment
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Critical Deadlines Alert */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    Critical Deadlines
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {criticalDeadlines.filter(d => d.priority === 'critical' || d.priority === 'high').map((deadline) => {
                      const daysUntil = Math.ceil((new Date(deadline.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
                      const isUrgent = daysUntil <= 30;
                      const isPast = daysUntil < 0;
                      return (
                        <div 
                          key={deadline.id} 
                          className={`border rounded-lg p-4 ${
                            isPast ? 'border-red-500 bg-red-50 dark:bg-red-950/20' :
                            isUrgent ? 'border-orange-500 bg-orange-50 dark:bg-orange-950/20' :
                            'border-border bg-card'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <span className={`text-xs px-2 py-1 rounded font-medium ${
                              deadline.priority === 'critical' ? 'bg-red-100 text-red-800' :
                              'bg-orange-100 text-orange-800'
                            }`}>
                              {deadline.priority.toUpperCase()}
                            </span>
                            <span className={`text-xs font-bold ${
                              isPast ? 'text-red-600' :
                              isUrgent ? 'text-orange-600' :
                              'text-muted-foreground'
                            }`}>
                              {isPast ? `${Math.abs(daysUntil)} days overdue` : `${daysUntil} days`}
                            </span>
                          </div>
                          <p className="font-medium text-sm text-foreground">{deadline.action}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Due: {new Date(deadline.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">{deadline.notes}</p>
                          <div className="mt-2 flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">Owner:</span>
                            <span className={`text-xs ${deadline.owner === 'TBD' ? 'text-orange-500 italic' : 'text-accent font-medium'}`}>
                              {deadline.owner}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* K-12 Districts */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <School className="w-5 h-5" />
                    K-12 School Districts
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Primary contacts for CTE departments. Mac Beaton (HCPS) support "essentially guarantees ACE center participation."
                  </p>
                  <div className="space-y-4">
                    {k12Districts.map((district) => (
                      <Collapsible key={district.abbreviation} className="border border-border rounded-lg">
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-bold text-accent">{district.abbreviation}</span>
                            <div className="text-left">
                              <h5 className="font-semibold text-foreground">{district.name}</h5>
                              <p className="text-xs text-muted-foreground">{district.cteLeader.name} • {district.cteLeader.title}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className={`text-xs px-2 py-1 rounded ${
                              district.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                              district.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                              district.status === 'meeting-scheduled' ? 'bg-purple-100 text-purple-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {district.status.replace('-', ' ')}
                            </span>
                            <ChevronDown className="w-4 h-4 text-muted-foreground" />
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 pb-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            <div>
                              <p className="text-sm font-medium text-foreground mb-2">Strategic Alignment</p>
                              <p className="text-xs text-muted-foreground">{district.strategicAlignment}</p>
                              <p className="text-sm font-medium text-foreground mt-3 mb-1">Value Prop</p>
                              <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">{district.valueProp}</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground mb-2">Key Schools</p>
                              <ul className="text-xs text-muted-foreground space-y-1">
                                {district.keySchools.map((school, idx) => (
                                  <li key={idx}>• {school}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          {district.specialists && district.specialists.length > 0 && (
                            <div className="mt-3">
                              <p className="text-sm font-medium text-foreground mb-2">CTE Specialists</p>
                              <div className="flex flex-wrap gap-2">
                                {district.specialists.map((spec, idx) => (
                                  <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                                    {spec.name} ({spec.focus})
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                            <div>
                              <span className="text-muted-foreground">Spring Break:</span>
                              <p className="font-medium">{district.springBreakStart}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Field Trip Lead Time:</span>
                              <p className="font-medium">{district.fieldTripLeadTime}</p>
                            </div>
                            {district.busDeadline && (
                              <div>
                                <span className="text-muted-foreground">Bus Deadline:</span>
                                <p className="font-medium text-red-600">{district.busDeadline}</p>
                              </div>
                            )}
                          </div>
                          {district.notes && (
                            <div className="mt-3 p-2 bg-muted/30 rounded text-xs text-muted-foreground italic">
                              {district.notes}
                            </div>
                          )}
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                </div>

                {/* Specialty Schools */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <span className="text-lg">🎯</span>
                    Specialty Schools (Highest Priority)
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 px-2 font-semibold">School</th>
                          <th className="text-left py-2 px-2 font-semibold">Type</th>
                          <th className="text-left py-2 px-2 font-semibold">Compatibility</th>
                          <th className="text-left py-2 px-2 font-semibold">March 27 Status</th>
                          <th className="text-left py-2 px-2 font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {specialtySchools.map((school) => (
                          <tr key={school.name} className="border-b border-border/50">
                            <td className="py-3 px-2">
                              <div>
                                <span className="font-medium">{school.name}</span>
                                {school.highlight && (
                                  <p className="text-xs text-green-600 font-medium mt-1">{school.highlight}</p>
                                )}
                                <p className="text-xs text-muted-foreground mt-1">{school.alignment}</p>
                              </div>
                            </td>
                            <td className="py-3 px-2">
                              <span className="text-xs bg-muted px-2 py-1 rounded capitalize">{school.type.replace('-', ' ')}</span>
                            </td>
                            <td className="py-3 px-2">
                              <span className={`text-xs px-2 py-1 rounded font-medium ${
                                school.compatibility === 'high' ? 'bg-green-100 text-green-800' :
                                school.compatibility === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {school.compatibility}
                              </span>
                            </td>
                            <td className="py-3 px-2">
                              <span className={`text-xs ${school.march27Status.includes('HOLIDAY') ? 'text-green-600 font-medium' : 'text-muted-foreground'}`}>
                                {school.march27Status}
                              </span>
                            </td>
                            <td className="py-3 px-2">
                              <span className={`text-xs px-2 py-1 rounded ${
                                school.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                school.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {school.status.replace('-', ' ')}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Universities */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    University Partners
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {universities.map((uni) => (
                      <div key={uni.abbreviation} className="border border-border rounded-lg p-4 bg-card">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h5 className="font-bold text-foreground">{uni.abbreviation}</h5>
                            <p className="text-sm text-muted-foreground">{uni.name}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded ${
                            uni.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                            uni.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {uni.status.replace('-', ' ')}
                          </span>
                        </div>
                        <p className="text-xs text-accent font-medium mb-3">{uni.role}</p>
                        <div className="space-y-2">
                          {uni.departments.map((dept, idx) => (
                            <div key={idx} className="text-xs p-2 bg-muted/30 rounded">
                              <p className="font-medium text-foreground">{dept.name}</p>
                              <p className="text-muted-foreground">{dept.contact} • {dept.title}</p>
                              <p className="text-muted-foreground mt-1 italic">{dept.alignment}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-950/20 rounded text-xs">
                          <span className="font-medium text-blue-800 dark:text-blue-200">Transport:</span>
                          <p className="text-blue-700 dark:text-blue-300">{uni.transportationNotes}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Diploma Seals */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <span className="text-lg">🎓</span>
                    Diploma Seals (Marketing to Schools)
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Position the hackathon as a qualifying activity for these Virginia diploma seals to justify field trip approvals.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {diplomaSeals.map((seal, idx) => (
                      <div key={idx} className="border border-border rounded-lg p-4 bg-card">
                        <h5 className="font-bold text-foreground">{seal.name}</h5>
                        <div className="mt-2 space-y-2 text-xs">
                          <div>
                            <span className="font-medium text-muted-foreground">Requirement:</span>
                            <p className="text-foreground">{seal.requirement}</p>
                          </div>
                          <div>
                            <span className="font-medium text-muted-foreground">Hackathon Fit:</span>
                            <p className="text-foreground">{seal.hackathonFit}</p>
                          </div>
                          <div className="p-2 bg-accent/10 rounded">
                            <span className="font-medium text-accent">Action:</span>
                            <p className="text-foreground">{seal.action}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compliance Checklist */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Compliance Checklist
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Required for mixing minors (K-12) with adults. Based on VCU "Safety and Protection of Minors" policy.
                  </p>
                  <div className="space-y-2">
                    {complianceChecklist.map((item) => (
                      <div 
                        key={item.id}
                        className={`flex items-start gap-3 p-3 rounded border ${
                          item.status === 'complete' ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800' :
                          item.status === 'in-progress' ? 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800' :
                          'bg-card border-border'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          item.status === 'complete' ? 'bg-green-500 text-white' :
                          item.status === 'in-progress' ? 'bg-blue-500 text-white' :
                          'bg-muted border-2 border-muted-foreground/30'
                        }`}>
                          {item.status === 'complete' && <CheckCircle2 className="w-3 h-3" />}
                          {item.status === 'in-progress' && <Clock className="w-3 h-3" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-medium text-sm text-foreground">{item.requirement}</p>
                              <p className="text-xs text-muted-foreground mt-1">{item.details}</p>
                            </div>
                            <span className="text-xs bg-muted px-2 py-1 rounded">{item.category}</span>
                          </div>
                          {item.deadline && (
                            <p className="text-xs text-red-600 mt-1">Deadline: {item.deadline}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Summary Stats */}
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-3">Academia Summary</h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-foreground">{academiaStats.totalK12Districts}</p>
                      <p className="text-xs text-muted-foreground">K-12 Districts</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{academiaStats.totalSpecialtySchools}</p>
                      <p className="text-xs text-muted-foreground">Specialty Schools</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{academiaStats.totalUniversities}</p>
                      <p className="text-xs text-muted-foreground">Universities</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-red-500">{academiaStats.criticalDeadlinesCount}</p>
                      <p className="text-xs text-muted-foreground">Critical Deadlines</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent">
                        {academiaStats.complianceItemsComplete}/{academiaStats.complianceItemsTotal}
                      </p>
                      <p className="text-xs text-muted-foreground">Compliance Items</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signups">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Email Signups</CardTitle>
                    <CardDescription>
                      Total signups: {signups.length}
                    </CardDescription>
                  </div>
                  <Button onClick={exportToCSV} variant="outline">
                    Export CSV
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>First Name</TableHead>
                      <TableHead>Interest</TableHead>
                      <TableHead>Created At</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {signups.map((signup) => (
                      <TableRow key={signup.id}>
                        <TableCell>{signup.email}</TableCell>
                        <TableCell>{signup.first_name || "-"}</TableCell>
                        <TableCell>{signup.interest || "-"}</TableCell>
                        <TableCell>
                          {new Date(signup.created_at).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
