import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Users, ChevronDown, Handshake, Link2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { KanbanBoard, Task, ColumnId } from "@/components/admin";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { pillarRecruitment, warmConnections, crossPillarFoundations, sponsorshipStats, implementationTimeline, pillarStakeholders } from "@/data/sponsorshipPipeline";

// Using Task type from KanbanBoard for documents

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [signups, setSignups] = useState<any[]>([]);
  const [documents, setDocuments] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDocDialogOpen, setIsDocDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [editingDoc, setEditingDoc] = useState<Task | null>(null);
  const [viewingDoc, setViewingDoc] = useState<Task | null>(null);
  const [docForm, setDocForm] = useState<{
    title: string;
    content: string;
    category: string;
    assignee: string;
    due_date: string;
    priority: 'low' | 'medium' | 'high' | 'critical';
    status: 'pending' | 'in-progress' | 'completed' | 'blocked';
  }>({
    title: "",
    content: "",
    category: "budget",
    assignee: "unassigned",
    due_date: "",
    priority: "medium",
    status: "pending"
  });

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
      await Promise.all([fetchSignups(), fetchDocuments()]);
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

  const fetchDocuments = async () => {
    const { data, error } = await supabase
      .from("admin_documents")
      .select("*")
      .order("priority", { ascending: false })
      .order("due_date", { ascending: true });

    if (error) throw error;
    setDocuments((data || []) as unknown as Task[]);
  };

  const teamMembers = [
    "Ford Prior", "Crystal Harvey", "Michael Kolbe", "Sinclair Jenks",
    "Christian Markow", "Alex Otanez", "Adam Woodward", "April Palmer",
    "Tom Becker", "Danny Avula", "Ankit Mathur", "Drew Cleveland", "Nick Serfass",
    "Will Melton", "Heather Lyne", "Ash Harris", "Ryan Shriver", "Debbie Irwin",
    "Gray Crenshaw", "Bridget Cochran", "Carly Manning", "Michael Ghaffari", "Nick Pericle",
    "Claire Jordan", "Kenton Vizdos", "Alyssa Paulette", "J. Albert Bowden II", "Madison Johnson",
    "David Cariello", "Mike Mitchell", "Larry Thacker", "Mohammad Hassan"
  ];

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

  const handleSaveDocument = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      if (editingDoc) {
        const { error } = await supabase
          .from("admin_documents")
          .update({
            title: docForm.title,
            content: docForm.content,
            category: docForm.category,
            assignee: docForm.assignee === "unassigned" ? null : docForm.assignee,
            due_date: docForm.due_date || null,
            priority: docForm.priority,
            status: docForm.status,
          })
          .eq("id", editingDoc.id);

        if (error) throw error;
        toast({ title: "Task updated successfully" });
      } else {
        const { error } = await supabase
          .from("admin_documents")
          .insert({
            title: docForm.title,
            content: docForm.content,
            category: docForm.category,
            assignee: docForm.assignee === "unassigned" ? null : docForm.assignee,
            due_date: docForm.due_date || null,
            priority: docForm.priority,
            status: docForm.status,
            created_by: user.id,
          });

        if (error) throw error;
        toast({ title: "Task created successfully" });
      }

      setIsDocDialogOpen(false);
      setEditingDoc(null);
      setDocForm({ 
        title: "", 
        content: "", 
        category: "budget",
        assignee: "unassigned",
        due_date: "",
        priority: "medium",
        status: "pending"
      });
      fetchDocuments();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  const handleEditDocument = (doc: Task) => {
    setEditingDoc(doc);
    setDocForm({
      title: doc.title,
      content: doc.content || "",
      category: doc.category,
      assignee: doc.assignee || "unassigned",
      due_date: doc.due_date || "",
      priority: doc.priority,
      status: doc.status,
    });
    setIsDocDialogOpen(true);
  };

  const handleDeleteDocument = async (id: string) => {
    if (!confirm("Are you sure you want to delete this task?")) return;

    try {
      const { error } = await supabase
        .from("admin_documents")
        .delete()
        .eq("id", id);

      if (error) throw error;
      toast({ title: "Task deleted successfully" });
      fetchDocuments();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  const categoryCounts = documents.reduce((acc, doc) => {
    acc[doc.category] = (acc[doc.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const handleAddTask = (status: ColumnId) => {
    setEditingDoc(null);
    setDocForm({
      title: "",
      content: "",
      category: "action-items",
      assignee: "unassigned",
      due_date: "",
      priority: "medium",
      status: status,
    });
    setIsDocDialogOpen(true);
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

        <Tabs defaultValue="documents" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="documents">Tasks</TabsTrigger>
            <TabsTrigger value="team">Team Delegation</TabsTrigger>
            <TabsTrigger value="signups">Email Signups</TabsTrigger>
          </TabsList>

          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Task Board</CardTitle>
                    <CardDescription>
                      Drag tasks between columns to update status
                    </CardDescription>
                  </div>
                  <Dialog open={isDocDialogOpen} onOpenChange={setIsDocDialogOpen}>
                    <DialogTrigger asChild>
                      <Button onClick={() => {
                        setEditingDoc(null);
                        setDocForm({ 
                          title: "", 
                          content: "", 
                          category: "budget",
                          assignee: "unassigned",
                          due_date: "",
                          priority: "medium",
                          status: "pending"
                        });
                      }}>
                        <Plus className="w-4 h-4 mr-2" />
                        New Task
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>
                          {editingDoc ? "Edit Task" : "Create New Task"}
                        </DialogTitle>
                        <DialogDescription>
                          Add or update tasks
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="category">Category</Label>
                          <Select
                            value={docForm.category}
                            onValueChange={(value) => setDocForm({ ...docForm, category: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="budget">Budget</SelectItem>
                              <SelectItem value="action-items">Action Items</SelectItem>
                              <SelectItem value="strategy">Strategy</SelectItem>
                              <SelectItem value="operations">Operations</SelectItem>
                              <SelectItem value="sponsorship">Sponsorship</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="title">Title</Label>
                          <Input
                            id="title"
                            value={docForm.title}
                            onChange={(e) => setDocForm({ ...docForm, title: e.target.value })}
                            placeholder="Document title"
                          />
                        </div>
                        <div>
                          <Label htmlFor="content">Content</Label>
                          <Textarea
                            id="content"
                            value={docForm.content}
                            onChange={(e) => setDocForm({ ...docForm, content: e.target.value })}
                            placeholder="Document content..."
                            rows={10}
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="assignee">Assignee</Label>
                            <Select
                              value={docForm.assignee}
                              onValueChange={(value) => setDocForm({ ...docForm, assignee: value === "unassigned" ? "" : value })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select assignee" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="unassigned">Unassigned</SelectItem>
                                {teamMembers.map((member) => (
                                  <SelectItem key={member} value={member}>{member}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label htmlFor="due_date">Due Date</Label>
                            <Input
                              id="due_date"
                              type="date"
                              value={docForm.due_date}
                              onChange={(e) => setDocForm({ ...docForm, due_date: e.target.value })}
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="priority">Priority</Label>
                            <Select
                              value={docForm.priority}
                              onValueChange={(value: any) => setDocForm({ ...docForm, priority: value })}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="low">Low</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="high">High</SelectItem>
                                <SelectItem value="critical">Critical</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label htmlFor="status">Status</Label>
                            <Select
                              value={docForm.status}
                              onValueChange={(value: any) => setDocForm({ ...docForm, status: value })}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="in-progress">In Progress</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="blocked">Blocked</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" onClick={() => setIsDocDialogOpen(false)}>
                            Cancel
                          </Button>
                          <Button onClick={handleSaveDocument}>
                            {editingDoc ? "Update" : "Create"}
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <KanbanBoard
                  tasks={documents}
                  onTasksChange={fetchDocuments}
                  onEdit={handleEditDocument}
                  onDelete={handleDeleteDocument}
                  onAddTask={handleAddTask}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Team Delegation
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

                {/* Pillar Stakeholders */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <span className="text-lg">🏛️</span> Pillar Stakeholders (7 Pillars × 4 Roles)
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Each pillar needs: Breakout Owner + City Hall Owner + Corporate Rep + Nonprofit Rep
                  </p>
                  
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

                  <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                      <div>
                        <p className="text-lg font-bold text-accent">
                          {pillarStakeholders.filter(p => p.breakoutOwner).length}/7
                        </p>
                        <p className="text-xs text-muted-foreground">Breakout Owners</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-accent">
                          {pillarStakeholders.filter(p => p.cityHallOwner).length}/7
                        </p>
                        <p className="text-xs text-muted-foreground">City Hall Owners</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-accent">
                          {pillarStakeholders.filter(p => p.corporateRep).length}/7
                        </p>
                        <p className="text-xs text-muted-foreground">Corporate Reps</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-accent">
                          {pillarStakeholders.filter(p => p.nonprofitRep).length}/7
                        </p>
                        <p className="text-xs text-muted-foreground">Nonprofit Reps</p>
                      </div>
                    </div>
                  </div>
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

                {/* Potential Sponsors */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <span className="text-lg">💰</span> Sponsorship Pipeline
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

                {/* Pillar Recruitment Tracker - Data from knowledge-base/02-team-governance/assignments.md */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Handshake className="w-5 h-5" /> Pillar Sponsor & Partner Recruitment
                  </h4>
                  
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
                  
                  {/* Pillar-by-Pillar Breakdown */}
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
                <div className="mt-8">
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
                <div className="mt-8">
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
                <div className="mt-8">
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

                {/* Connectors */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Link2 className="w-5 h-5" /> Connectors
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Key people who bridge networks and can make introductions to sponsors, partners, and community stakeholders.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {connectors.map((connector, idx) => (
                      <div key={idx} className="border border-border rounded-lg p-4 bg-card hover:bg-muted/30 transition-colors">
                        <h5 className="font-bold text-foreground">{connector.name}</h5>
                        <p className="text-xs text-muted-foreground mt-1">{connector.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* View Document Dialog */}
          <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{viewingDoc?.title}</DialogTitle>
                <DialogDescription>
                  <div className="flex items-center gap-4 mt-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      viewingDoc?.priority === 'critical' ? 'bg-red-100 text-red-800' :
                      viewingDoc?.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                      viewingDoc?.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {viewingDoc?.priority}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      viewingDoc?.status === 'completed' ? 'bg-green-100 text-green-800' :
                      viewingDoc?.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                      viewingDoc?.status === 'blocked' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {viewingDoc?.status?.replace('-', ' ')}
                    </span>
                    <span className="text-sm text-muted-foreground capitalize">
                      {viewingDoc?.category.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <span><strong>Assignee:</strong> {viewingDoc?.assignee || 'Unassigned'}</span>
                    <span><strong>Due:</strong> {viewingDoc?.due_date ? new Date(viewingDoc.due_date).toLocaleDateString() : 'No date'}</span>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <ReactMarkdown
                    components={{
                      h1: ({node, ...props}) => <h1 className="text-2xl font-bold mb-4 mt-6" {...props} />,
                      h2: ({node, ...props}) => <h2 className="text-xl font-bold mb-3 mt-5" {...props} />,
                      h3: ({node, ...props}) => <h3 className="text-lg font-semibold mb-2 mt-4" {...props} />,
                      h4: ({node, ...props}) => <h4 className="text-base font-semibold mb-2 mt-3" {...props} />,
                      p: ({node, ...props}) => <p className="mb-3 leading-relaxed" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc list-inside mb-3 space-y-1" {...props} />,
                      ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-3 space-y-1" {...props} />,
                      li: ({node, ...props}) => <li className="ml-4" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-bold text-foreground" {...props} />,
                      em: ({node, ...props}) => <em className="italic" {...props} />,
                      a: ({node, ...props}) => <a className="text-primary hover:underline" {...props} />,
                      blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-border pl-4 italic my-3" {...props} />,
                      code: ({node, inline, ...props}: any) => 
                        inline ? 
                          <code className="bg-muted px-1.5 py-0.5 rounded text-sm" {...props} /> :
                          <code className="block bg-muted p-3 rounded text-sm overflow-x-auto" {...props} />,
                      hr: ({node, ...props}) => <hr className="my-4 border-border" {...props} />,
                    }}
                  >
                    {viewingDoc?.content || "No content"}
                  </ReactMarkdown>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
                  Close
                </Button>
                <Button onClick={() => {
                  if (viewingDoc) {
                    setIsViewDialogOpen(false);
                    handleEditDocument(viewingDoc);
                  }
                }}>
                  Edit
                </Button>
              </div>
            </DialogContent>
          </Dialog>

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
