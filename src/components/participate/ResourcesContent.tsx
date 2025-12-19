import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cloud, Code, Zap, BookOpen, ExternalLink, Database, FileText, Github, CheckCircle2 } from "lucide-react";

const datasetInventory = [
  {
    category: "Housing & Eviction",
    datasets: [
      { name: "RVA Eviction Lab Data", source: "VCU" },
      { name: "Virginia Evictors Catalog", source: "Legal Aid" },
      { name: "City Property Records", source: "City of Richmond" }
    ]
  },
  {
    category: "Transportation",
    datasets: [
      { name: "GRTC GTFS Static/Real-time", source: "GRTC" },
      { name: "LINK Service Areas", source: "GRTC" }
    ]
  },
  {
    category: "Business & Workforce",
    datasets: [
      { name: "OMBD MBE/ESB Directory", source: "City of Richmond" },
      { name: "City Business Licenses", source: "City of Richmond" },
      { name: "Virginia Works LMI", source: "VEC" }
    ]
  },
  {
    category: "General Civic",
    datasets: [
      { name: "City 311 Requests", source: "City of Richmond" },
      { name: "Census Demographics", source: "US Census" },
      { name: "Richmond Open Data Portal", source: "City of Richmond" }
    ]
  }
];

export const ResourcesContent = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
          Resources
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Datasets, tools, and documentation to help you build your project—including open data sources, cloud credits, and getting-started guides.
        </p>
      </div>

      {/* Dataset Inventory - Compact Table */}
      <Card className="border-border">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Database className="w-5 h-5 text-accent" />
              Dataset Inventory
            </CardTitle>
            <Badge variant="secondary" className="text-xs">Access provided 2 weeks before event</Badge>
          </div>
          <p className="text-xs text-muted-foreground">Pre-cleaned datasets organized by challenge track. City Data Liaison handles preparation.</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {datasetInventory.map((cat, idx) => (
              <div key={idx} className="bg-muted/30 rounded-lg p-3">
                <p className="font-medium text-foreground text-sm mb-2">{cat.category}</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {cat.datasets.map((ds, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <FileText className="w-3 h-3 text-accent mt-0.5 shrink-0" />
                      <span><strong className="text-foreground">{ds.name}</strong> ({ds.source})</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Documentation Requirements - Compact */}
      <Card className="border-accent border-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Github className="w-5 h-5 text-accent" />
            Documentation Requirements
          </CardTitle>
          <p className="text-xs text-muted-foreground">All projects published to RVA Civic Tech GitHub organization</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div>
              <p className="font-medium text-foreground mb-2">Required README.md</p>
              <ul className="text-muted-foreground space-y-1">
                <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-accent" /> Project overview & problem solved</li>
                <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-accent" /> Step-by-step installation</li>
                <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-accent" /> Environment config & deployment</li>
                <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-accent" /> OSI license (MIT recommended)</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-foreground mb-2">Civic Tech Index</p>
              <p className="text-muted-foreground mb-2">After the hackathon, all projects cataloged publicly showing:</p>
              <ul className="text-muted-foreground space-y-0.5">
                <li>• Project name, challenge track, datasets used</li>
                <li>• Status (prototype/pilot/deployed)</li>
                <li>• Team contacts, code/demo links</li>
              </ul>
            </div>
          </div>
          <div className="bg-accent/5 border border-accent/20 rounded p-2 mt-3 text-xs">
            <strong className="text-foreground">GitHub Organization:</strong> <code className="bg-muted px-1 rounded">github.com/hack4rva</code>
          </div>
        </CardContent>
      </Card>

      {/* Tools - Dense Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="border-border">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-accent" />
              <CardTitle className="text-base">AWS Credits</CardTitle>
            </div>
            <Badge variant="secondary" className="text-xs w-fit">Cloud Platform</Badge>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground space-y-2">
            <p><strong className="text-foreground">$100/participant</strong> for compute, storage, databases</p>
            <p><strong className="text-foreground">Duration:</strong> 12 months from issuance</p>
            <p><strong className="text-foreground">Access:</strong> Pre-event signup, 7-10 day approval</p>
            <Button variant="outline" size="sm" className="w-full mt-2 text-xs" disabled>
              <ExternalLink className="w-3 h-3 mr-1" /> Coming Soon
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-accent" />
              <CardTitle className="text-base">GitHub + Copilot</CardTitle>
            </div>
            <Badge variant="secondary" className="text-xs w-fit">Version Control</Badge>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground space-y-2">
            <p><strong className="text-foreground">GitHub Pro</strong> + <strong className="text-foreground">Copilot AI</strong></p>
            <p><strong className="text-foreground">Essential:</strong> All teams should use version control</p>
            <p><strong className="text-foreground">Good for:</strong> Code hosting, collaboration, AI coding help</p>
            <Button variant="outline" size="sm" className="w-full mt-2 text-xs" disabled>
              <ExternalLink className="w-3 h-3 mr-1" /> Coming Soon
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              <CardTitle className="text-base">Lovable.dev</CardTitle>
            </div>
            <Badge variant="secondary" className="text-xs w-fit">No-Code AI</Badge>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground space-y-2">
            <p><strong className="text-foreground">Premium access</strong> during event + 6 months for winners</p>
            <p><strong className="text-foreground">Perfect for:</strong> Non-technical members, rapid UI development</p>
            <p className="bg-accent/10 rounded p-1 text-center">No coding experience required!</p>
            <Button variant="outline" size="sm" className="w-full mt-2 text-xs" disabled>
              <ExternalLink className="w-3 h-3 mr-1" /> Coming Soon
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Getting Started Guides - Compact */}
      <Card className="border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-accent" />
            Getting Started Guides
          </CardTitle>
          <p className="text-xs text-muted-foreground">Step-by-step guides to get you up and running quickly</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-accent text-xs">Essential</Badge>
                <span className="font-medium text-foreground text-sm">START-HERE.md</span>
              </div>
              <p className="text-xs text-muted-foreground">Event overview, schedule, team formation, challenge selection</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">Technical</Badge>
                <span className="font-medium text-foreground text-sm">GETTING-STARTED.md</span>
              </div>
              <p className="text-xs text-muted-foreground">Dev environment, Git/GitHub, using available tools, deployment</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">Data</Badge>
                <span className="font-medium text-foreground text-sm">Richmond Civic Data</span>
              </div>
              <p className="text-xs text-muted-foreground">City open data, transportation, demographics, public services</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
