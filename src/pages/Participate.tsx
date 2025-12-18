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
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in">
              Participant Hub
            </h1>
            <p className="text-base sm:text-lg font-medium text-accent mb-4 animate-fade-in" style={{ animationDelay: "50ms" }}>
              Hackers, Hustlers, and Artists competing for Gold, Glory, and the Good of RVA
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Everything you need to participate. From logistics to resources, we've got you covered.
            </p>
            
            {/* Quick Overview Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`p-4 rounded-xl border transition-smooth text-left ${
                    activeTab === tab.id 
                      ? "bg-accent/10 border-accent" 
                      : "bg-card border-border hover:border-accent/50"
                  }`}
                >
                  <tab.icon className={`w-5 h-5 mb-2 ${activeTab === tab.id ? "text-accent" : "text-muted-foreground"}`} />
                  <h3 className="font-semibold text-sm text-foreground">{tab.label}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {tab.id === "logistics" && "Where, when, what to expect"}
                    {tab.id === "preparation" && "How to prepare for the event"}
                    {tab.id === "resources" && "Tools, APIs, and datasets"}
                    {tab.id === "register" && "Sign up & join a team"}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              {/* Tab Navigation */}
              <div className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-md pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-transparent p-0">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="flex items-center gap-2 py-3 px-4 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground border border-border data-[state=active]:border-accent rounded-lg transition-smooth"
                    >
                      <tab.icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{tab.label}</span>
                      <span className="sm:hidden">{tab.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Tab Content */}
              <div className="mt-8">
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
            </Tabs>
          </div>
        </div>
      </section>

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

