/**
 * Mission Page - Pillar Analysis
 * A comprehensive research presentation interface for Richmond's Mayoral Action Plan
 * @source knowledge-base/01-planning-strategy/mayoral-action-plan.md
 */

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Building2, 
  Shield, 
  Briefcase, 
  TrendingUp, 
  Leaf, 
  Heart, 
  Globe,
  Database,
  ChevronLeft,
  ChevronRight,
  FileText,
  Network,
  ArrowUp
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PillarAnalysisHero } from "@/components/pillar-analysis/PillarAnalysisHero";
import { OverviewTab } from "@/components/pillar-analysis/tabs/OverviewTab";
import { PillarTab } from "@/components/pillar-analysis/tabs/PillarTab";
import { DataInfrastructureTab } from "@/components/pillar-analysis/tabs/DataInfrastructureTab";
import { pillarData } from "@/data/pillarAnalysis";

const tabs = [
  { id: "overview", label: "Overview", icon: FileText },
  { id: "track-1", label: "Track 1", icon: Building2, shortLabel: "City Hall" },
  { id: "track-2", label: "Track 2", icon: Shield, shortLabel: "Neighborhoods" },
  { id: "track-3", label: "Track 3", icon: Briefcase, shortLabel: "Families" },
  { id: "track-4", label: "Track 4", icon: TrendingUp, shortLabel: "Economy" },
  { id: "track-5", label: "Track 5", icon: Leaf, shortLabel: "Communities" },
  { id: "track-6", label: "Track 6", icon: Heart, shortLabel: "Environment" },
  { id: "track-7", label: "Track 7", icon: Globe, shortLabel: "Stories" },
  { id: "data-infrastructure", label: "Data & Recommendations", icon: Database },
];

const Mission = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const getInitialTab = () => {
    const hash = location.hash.replace("#", "");
    return tabs.find(t => t.id === hash)?.id || "overview";
  };
  
  const [activeTab, setActiveTab] = useState(getInitialTab);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && tabs.find(t => t.id === hash)) {
        setActiveTab(hash);
      }
    };
    
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleTabChange = (value: string, scrollToTop: boolean = true) => {
    setActiveTab(value);
    navigate(`#${value}`, { replace: true });
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const currentTabIndex = tabs.findIndex(t => t.id === activeTab);
  const prevTab = currentTabIndex > 0 ? tabs[currentTabIndex - 1] : null;
  const nextTab = currentTabIndex < tabs.length - 1 ? tabs[currentTabIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={() => {}} />
      
      <main className="pt-20">
        <PillarAnalysisHero />
        
        {/* Tab Navigation */}
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={(value) => {
              // Don't scroll to top for pillar tabs, only for overview and data-infrastructure
              const shouldScroll = value === "overview" || value === "data-infrastructure";
              handleTabChange(value, shouldScroll);
            }}>
              <TabsList className="h-auto w-full justify-start overflow-x-auto bg-transparent p-0 gap-0">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="relative px-4 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary font-medium text-sm whitespace-nowrap transition-all"
                  >
                    <tab.icon className="w-4 h-4 mr-2 hidden md:inline-block" />
                    <span className="hidden lg:inline">{tab.label}</span>
                    <span className="lg:hidden">
                      {tab.shortLabel || tab.label}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Tab Content */}
        <div className="container mx-auto px-4 py-8 md:py-12">
          <Tabs value={activeTab} onValueChange={(value) => {
            const shouldScroll = value === "overview" || value === "data-infrastructure";
            handleTabChange(value, shouldScroll);
          }}>
            <TabsContent value="overview" className="mt-0">
              <OverviewTab onNavigateToPillar={(pillarId) => handleTabChange(pillarId, false)} />
            </TabsContent>
            
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <TabsContent key={num} value={`track-${num}`} className="mt-0">
                <PillarTab 
                  pillarNumber={num} 
                  data={pillarData[num - 1]}
                  onNavigateToPillar={(trackId) => handleTabChange(trackId, false)}
                />
              </TabsContent>
            ))}
            
            <TabsContent value="data-infrastructure" className="mt-0">
              <DataInfrastructureTab />
            </TabsContent>
          </Tabs>

          {/* Tab Navigation Footer */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            {prevTab ? (
              <button
                onClick={() => handleTabChange(prevTab.id)}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm font-medium">{prevTab.label}</span>
              </button>
            ) : (
              <div />
            )}
            
            <button
              onClick={() => handleTabChange("overview")}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Return to Overview</span>
            </button>
            
            {nextTab ? (
              <button
                onClick={() => handleTabChange(nextTab.id)}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-sm font-medium">{nextTab.label}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Mission;
