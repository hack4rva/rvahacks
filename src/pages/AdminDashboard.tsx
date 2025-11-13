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
import { Edit, Plus, Trash2 } from "lucide-react";

interface Document {
  id: string;
  title: string;
  content: string | null;
  category: string;
  created_at: string;
  updated_at: string;
  assignee: string | null;
  due_date: string | null;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'pending' | 'in-progress' | 'completed' | 'blocked';
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [signups, setSignups] = useState<any[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDocDialogOpen, setIsDocDialogOpen] = useState(false);
  const [editingDoc, setEditingDoc] = useState<Document | null>(null);
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
    assignee: "",
    due_date: "",
    priority: "medium",
    status: "pending"
  });
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterPriority, setFilterPriority] = useState<string>("all");
  const [filterAssignee, setFilterAssignee] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("due_date");

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
    setDocuments((data || []) as Document[]);
  };

  const teamMembers = [
    "Ford Prior", "Crystal Harvey", "Michael Kolbe", "Sinclair Jenks",
    "Christian Markow", "Alex Otanez", "Adam Woodward", "April Palmer",
    "Tom Becker", "Danny Avula", "Ankit Mathur", "Drew Cleveland", "Nick Serfass"
  ];

  const getFilteredAndSortedDocuments = () => {
    let filtered = documents;

    if (filterStatus !== "all") {
      filtered = filtered.filter(doc => doc.status === filterStatus);
    }
    if (filterPriority !== "all") {
      filtered = filtered.filter(doc => doc.priority === filterPriority);
    }
    if (filterAssignee !== "all") {
      filtered = filtered.filter(doc => doc.assignee === filterAssignee);
    }

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "due_date") {
        if (!a.due_date) return 1;
        if (!b.due_date) return -1;
        return new Date(a.due_date).getTime() - new Date(b.due_date).getTime();
      }
      if (sortBy === "priority") {
        const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      if (sortBy === "status") {
        return a.status.localeCompare(b.status);
      }
      return 0;
    });

    return sorted;
  };

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
            assignee: docForm.assignee || null,
            due_date: docForm.due_date || null,
            priority: docForm.priority,
            status: docForm.status,
          })
          .eq("id", editingDoc.id);

        if (error) throw error;
        toast({ title: "Document updated successfully" });
      } else {
        const { error } = await supabase
          .from("admin_documents")
          .insert({
            title: docForm.title,
            content: docForm.content,
            category: docForm.category,
            assignee: docForm.assignee || null,
            due_date: docForm.due_date || null,
            priority: docForm.priority,
            status: docForm.status,
            created_by: user.id,
          });

        if (error) throw error;
        toast({ title: "Document created successfully" });
      }

      setIsDocDialogOpen(false);
      setEditingDoc(null);
      setDocForm({ 
        title: "", 
        content: "", 
        category: "budget",
        assignee: "",
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

  const handleEditDocument = (doc: Document) => {
    setEditingDoc(doc);
    setDocForm({
      title: doc.title,
      content: doc.content || "",
      category: doc.category,
      assignee: doc.assignee || "",
      due_date: doc.due_date || "",
      priority: doc.priority,
      status: doc.status,
    });
    setIsDocDialogOpen(true);
  };

  const handleDeleteDocument = async (id: string) => {
    if (!confirm("Are you sure you want to delete this document?")) return;

    try {
      const { error } = await supabase
        .from("admin_documents")
        .delete()
        .eq("id", id);

      if (error) throw error;
      toast({ title: "Document deleted successfully" });
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
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="documents">Internal Documents</TabsTrigger>
            <TabsTrigger value="signups">Email Signups</TabsTrigger>
          </TabsList>

          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Internal Documents</CardTitle>
                    <CardDescription>
                      Manage budget, action items, and other internal knowledge
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
                          assignee: "",
                          due_date: "",
                          priority: "medium",
                          status: "pending"
                        });
                      }}>
                        <Plus className="w-4 h-4 mr-2" />
                        New Document
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>
                          {editingDoc ? "Edit Document" : "Create New Document"}
                        </DialogTitle>
                        <DialogDescription>
                          Add or update internal documents and knowledge
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
                              onValueChange={(value) => setDocForm({ ...docForm, assignee: value })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select assignee" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="">Unassigned</SelectItem>
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
                {/* Filters and Sorting */}
                <div className="mb-6 p-4 bg-muted/50 rounded-lg space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[200px]">
                      <Label className="text-sm">Filter by Status</Label>
                      <Select value={filterStatus} onValueChange={setFilterStatus}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Statuses</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="in-progress">In Progress</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="blocked">Blocked</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex-1 min-w-[200px]">
                      <Label className="text-sm">Filter by Priority</Label>
                      <Select value={filterPriority} onValueChange={setFilterPriority}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Priorities</SelectItem>
                          <SelectItem value="critical">Critical</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex-1 min-w-[200px]">
                      <Label className="text-sm">Filter by Assignee</Label>
                      <Select value={filterAssignee} onValueChange={setFilterAssignee}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Assignees</SelectItem>
                          <SelectItem value="">Unassigned</SelectItem>
                          {teamMembers.map((member) => (
                            <SelectItem key={member} value={member}>{member}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex-1 min-w-[200px]">
                      <Label className="text-sm">Sort By</Label>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="due_date">Due Date</SelectItem>
                          <SelectItem value="priority">Priority</SelectItem>
                          <SelectItem value="status">Status</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4 flex gap-4">
                  {Object.entries(categoryCounts).map(([category, count]) => (
                    <div key={category} className="text-sm">
                      <span className="font-medium capitalize">{category.replace('-', ' ')}</span>: {count}
                    </div>
                  ))}
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Priority</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Assignee</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {getFilteredAndSortedDocuments().map((doc) => (
                      <TableRow key={doc.id}>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            doc.priority === 'critical' ? 'bg-red-100 text-red-800' :
                            doc.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                            doc.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {doc.priority}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            doc.status === 'completed' ? 'bg-green-100 text-green-800' :
                            doc.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                            doc.status === 'blocked' ? 'bg-red-100 text-red-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {doc.status.replace('-', ' ')}
                          </span>
                        </TableCell>
                        <TableCell className="font-medium">{doc.title}</TableCell>
                        <TableCell className="capitalize">{doc.category.replace('-', ' ')}</TableCell>
                        <TableCell>{doc.assignee || <span className="text-muted-foreground">Unassigned</span>}</TableCell>
                        <TableCell>
                          {doc.due_date ? (
                            <span className={
                              new Date(doc.due_date) < new Date() && doc.status !== 'completed'
                                ? 'text-red-600 font-medium'
                                : ''
                            }>
                              {new Date(doc.due_date).toLocaleDateString()}
                            </span>
                          ) : (
                            <span className="text-muted-foreground">No date</span>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEditDocument(doc)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteDocument(doc.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
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
