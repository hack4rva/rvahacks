import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LogisticsContent, 
  PreparationContent, 
  ResourcesContent, 
  RegistrationContent 
} from "@/components/participate";
import { eventDates } from "@/data";

const tabs = [
  { id: "logistics", label: "Logistics" },
  { id: "preparation", label: "Preparation" },
  { id: "resources", label: "Resources" },
  { id: "register", label: "Register" },
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
                    className="py-2.5 px-4 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground border border-border data-[state=active]:border-accent rounded-lg transition-smooth text-sm font-medium"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>
        </nav>


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

