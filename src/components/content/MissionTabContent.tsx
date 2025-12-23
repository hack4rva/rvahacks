/**
 * Mission Tab Content - Embedded version of pillar analysis for About page
 * @source knowledge-base/01-planning-strategy/mayoral-action-plan.md
 */

import { useState } from "react";
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
  ArrowUp
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PillarAnalysisHero } from "@/components/pillar-analysis/PillarAnalysisHero";
import { OverviewTab } from "@/components/pillar-analysis/tabs/OverviewTab";
import { PillarTab } from "@/components/pillar-analysis/tabs/PillarTab";
import { DataInfrastructureTab } from "@/components/pillar-analysis/tabs/DataInfrastructureTab";
import { pillarData } from "@/data/pillarAnalysis";

const missionTabs = [
  { id: "overview", label: "Overview", icon: FileText },
  { id: "track-1", label: "Track 1", icon: Building2 },
  { id: "track-2", label: "Track 2", icon: Shield },
  { id: "track-3", label: "Track 3", icon: Briefcase },
  { id: "track-4", label: "Track 4", icon: TrendingUp },
  { id: "track-5", label: "Track 5", icon: Leaf },
  { id: "track-6", label: "Track 6", icon: Heart },
  { id: "track-7", label: "Track 7", icon: Globe },
  { id: "data", label: "Data", icon: Database },
];

export const MissionTabContent = () => {
  const [activeSubTab, setActiveSubTab] = useState("overview");

  const handleSubTabChange = (value: string) => {
    setActiveSubTab(value);
  };

  const currentTabIndex = missionTabs.findIndex(t => t.id === activeSubTab);
  const prevTab = currentTabIndex > 0 ? missionTabs[currentTabIndex - 1] : null;
  const nextTab = currentTabIndex < missionTabs.length - 1 ? missionTabs[currentTabIndex + 1] : null;

  return (
    <div className="space-y-6">
      <PillarAnalysisHero />
      
      {/* Sub-Tab Navigation */}
      <div className="border-b border-border">
        <Tabs value={activeSubTab} onValueChange={handleSubTabChange}>
          <TabsList className="h-auto w-full justify-start overflow-x-auto bg-transparent p-0 gap-0">
            {missionTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="relative px-3 md:px-4 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary font-medium text-xs md:text-sm whitespace-nowrap transition-all"
              >
                <tab.icon className="w-4 h-4 mr-1 md:mr-2 hidden sm:inline-block" />
                <span>{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Sub-Tab Content */}
      <div className="py-4">
        <Tabs value={activeSubTab} onValueChange={handleSubTabChange}>
          <TabsContent value="overview" className="mt-0">
            <OverviewTab onNavigateToPillar={(pillarId) => handleSubTabChange(pillarId)} />
          </TabsContent>
          
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <TabsContent key={num} value={`track-${num}`} className="mt-0">
              <PillarTab 
                pillarNumber={num} 
                data={pillarData[num - 1]}
                onNavigateToPillar={(trackId) => handleSubTabChange(trackId)}
              />
            </TabsContent>
          ))}
          
          <TabsContent value="data" className="mt-0">
            <DataInfrastructureTab />
          </TabsContent>
        </Tabs>

        {/* Sub-Tab Navigation Footer */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
          {prevTab ? (
            <button
              onClick={() => handleSubTabChange(prevTab.id)}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm font-medium">{prevTab.label}</span>
            </button>
          ) : (
            <div />
          )}
          
          <button
            onClick={() => handleSubTabChange("overview")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm">Return to Overview</span>
          </button>
          
          {nextTab ? (
            <button
              onClick={() => handleSubTabChange(nextTab.id)}
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
    </div>
  );
};
