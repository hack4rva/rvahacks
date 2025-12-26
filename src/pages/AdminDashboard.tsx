import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  AdminSidebar,
  MobileAdminSidebar,
  DashboardOverview,
  PlanTab,
  ScheduleTab,
  TeamTab,
  TracksTab,
  SponsorsTab,
  AcademiaTab,
  ConnectorsTab,
  SignupsTab,
  type AdminSection
} from "@/components/admin";
import { criticalDeadlines } from "@/data/academiaPartners";
import { getOpenRoles } from "@/data/teamDelegation";

interface Signup {
  id: string;
  email: string;
  first_name?: string;
  interest?: string;
  created_at: string;
}

const sectionTitles: Record<AdminSection, string> = {
  overview: 'Command Center',
  plan: 'Communication Plan',
  schedule: 'Master Schedule',
  team: 'Team Structure',
  tracks: 'Track Stakeholders',
  sponsors: 'Sponsors & Partners',
  academia: 'K-12 & Higher Ed Partners',
  connectors: 'Network Connectors',
  signups: 'Email Signups',
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState<AdminSection>('overview');
  const [signups, setSignups] = useState<Signup[]>([]);
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
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
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

  // Calculate action items count for sidebar badge
  const getActionItemCount = () => {
    let count = 0;
    
    // Count critical deadlines in next 30 days
    criticalDeadlines.forEach(d => {
      if (d.priority === 'critical' || d.priority === 'high') {
        const daysUntil = Math.ceil((new Date(d.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
        if (daysUntil <= 30) count++;
      }
    });
    
    // Count open roles
    const openRoles = getOpenRoles();
    if (openRoles.length > 5) count++;
    
    return count;
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <DashboardOverview onNavigate={setActiveSection} signupCount={signups.length} />;
      case 'plan':
        return <PlanTab />;
      case 'schedule':
        return <ScheduleTab />;
      case 'team':
        return <TeamTab />;
      case 'tracks':
        return <TracksTab />;
      case 'sponsors':
        return <SponsorsTab />;
      case 'academia':
        return <AcademiaTab />;
      case 'connectors':
        return <ConnectorsTab />;
      case 'signups':
        return <SignupsTab signups={signups} onExport={exportToCSV} />;
      default:
        return <DashboardOverview onNavigate={setActiveSection} signupCount={signups.length} />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }
                    
                    return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <AdminSidebar 
        activeSection={activeSection} 
        onNavigate={setActiveSection}
        actionItemCount={getActionItemCount()}
      />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-auto w-full">
        {/* Header */}
        <header className="flex justify-between items-center mb-6 md:mb-8 gap-3">
          <div className="flex items-center gap-3">
            {/* Mobile menu trigger */}
            <MobileAdminSidebar
              activeSection={activeSection}
              onNavigate={setActiveSection}
              actionItemCount={getActionItemCount()}
            />
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-foreground">
                {sectionTitles[activeSection]}
              </h1>
              {activeSection !== 'overview' && (
                <button 
                  onClick={() => setActiveSection('overview')}
                  className="text-xs md:text-sm text-muted-foreground hover:text-accent mt-1"
                >
                  ← Back to overview
                </button>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => navigate("/")} variant="outline" size="sm" className="hidden sm:flex">
              Home
            </Button>
            <Button onClick={handleLogout} variant="outline" size="sm">
              Logout
            </Button>
          </div>
        </header>

        {/* Content */}
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;
