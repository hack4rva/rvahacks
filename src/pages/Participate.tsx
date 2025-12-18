import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, BookOpen, Wrench, UserPlus } from "lucide-react";
import { 
  LogisticsContent, 
  PreparationContent, 
  ResourcesContent, 
  RegistrationContent 
} from "@/components/participate";
import { eventDates } from "@/data";

const tabs = [
  { id: "logistics", label: "Logistics", icon: MapPin },
  { id: "preparation", label: "Preparation", icon: BookOpen },
  { id: "resources", label: "Resources", icon: Wrench },
  { id: "register", label: "Register", icon: UserPlus },
];

const Participate = () => {
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get initial tab from URL hash
  const getInitialTab = () => {
    const hash = location.hash.replace("#", "");
    return tabs.some(t => t.id === hash) ? hash : "logistics";
  };
  
  const [activeTab, setActiveTab] = useState(getInitialTab);

  const handleCTAClick = () => {
    setIsEmailSignupOpen(true);
  };

  // Update URL when tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`/participate#${value}`, { replace: true });
  };

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = location.hash.replace("#", "");
      if (tabs.some(t => t.id === hash)) {
        setActiveTab(hash);
      }
    };
    
    handleHashChange();
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={handleCTAClick} />
      
      {/* Spacer for fixed nav */}
      <div className="pt-20 md:pt-24" />

      {/* Sticky Tab Navigation */}
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <nav className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto py-3">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-transparent p-0">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="flex items-center gap-2 py-2.5 px-3 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground border border-border data-[state=active]:border-accent rounded-lg transition-smooth text-sm"
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>
        </nav>

        {/* Hero Section - Now below sub-nav */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3 animate-fade-in">
                Participant Hub
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "50ms" }}>
                Hack for RVA is a 3-day civic hackathon on <strong className="text-foreground">{eventDates.fullRange}</strong> where teams build real solutions for Richmond nonprofits and city agencies. 
                Below you'll find everything you need to prepare, from venue logistics to technical resources.
              </p>
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <TabsContent value="logistics" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                <LogisticsContent />
              </TabsContent>

              <TabsContent value="preparation" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                <PreparationContent />
              </TabsContent>

              <TabsContent value="resources" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                <ResourcesContent />
              </TabsContent>

              <TabsContent value="register" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                <RegistrationContent onCTAClick={handleCTAClick} />
              </TabsContent>
            </div>
          </div>
        </section>
      </Tabs>

      <Footer />
      <BackToTop />
      <EmailSignup
        open={isEmailSignupOpen}
        onOpenChange={setIsEmailSignupOpen}
      />
    </div>
  );
};

export default Participate;

