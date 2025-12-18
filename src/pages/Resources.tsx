import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Cloud, Code, Zap, BookOpen, ExternalLink, Database, FileText, Github, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const datasetInventory = [
  {
    category: "Housing & Eviction",
    datasets: [
      { name: "RVA Eviction Lab Data", source: "VCU", description: "Eviction filings and outcomes across Richmond" },
      { name: "Virginia Evictors Catalog", source: "Legal Aid", description: "Database of serial eviction filers" },
      { name: "City Property Records", source: "City of Richmond", description: "Ownership, assessments, and transfers" }
    ]
  },
  {
    category: "Transportation",
    datasets: [
      { name: "GRTC GTFS Static", source: "GRTC", description: "Scheduled routes, stops, and times" },
      { name: "GRTC GTFS Real-time", source: "GRTC", description: "Live vehicle positions and arrival predictions" },
      { name: "LINK Service Areas", source: "GRTC", description: "On-demand micro-transit zones" }
    ]
  },
  {
    category: "Business & Workforce",
    datasets: [
      { name: "OMBD MBE/ESB Directory", source: "City of Richmond", description: "Minority and emerging small business registry" },
      { name: "City Business Licenses", source: "City of Richmond", description: "Active business permits and registrations" },
      { name: "Virginia Works LMI", source: "Virginia Employment Commission", description: "Labor market information and job trends" }
    ]
  },
  {
    category: "General Civic",
    datasets: [
      { name: "City 311 Requests", source: "City of Richmond", description: "Service requests and response data" },
      { name: "Census Demographics", source: "US Census Bureau", description: "Population, income, housing characteristics" },
      { name: "Richmond Open Data Portal", source: "City of Richmond", description: "Various city datasets and APIs" }
    ]
  }
];

const Resources = () => {
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);

  const handleCTAClick = () => {
    setIsEmailSignupOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={handleCTAClick} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Resources for Participants
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              Everything you need to build civic tech solutions. From cloud credits to curated datasets, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Dataset Inventory Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Dataset Inventory</h2>
            </div>
            <p className="text-muted-foreground mb-4 max-w-3xl">
              Pre-cleaned and validated datasets organized by challenge track. Our City Data Liaison handles data preparation before the event.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              <strong className="text-foreground">Note:</strong> Final dataset access and API documentation will be provided 2 weeks before the event.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {datasetInventory.map((category, idx) => (
                <Card key={idx} className="border-border shadow-elegant">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.datasets.map((dataset, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FileText className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-foreground text-sm">{dataset.name}</p>
                            <p className="text-xs text-muted-foreground">
                              <span className="text-primary">{dataset.source}</span> • {dataset.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Requirements */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Github className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Documentation Requirements</h2>
            </div>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              All projects must be published to the RVA Civic Tech GitHub organization with proper documentation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-accent border-2 shadow-elegant">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Required README.md</CardTitle>
                  <CardDescription>Every repository must include</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Project Overview:</strong> What problem it solves</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Installation:</strong> Step-by-step setup instructions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Configuration:</strong> Environment variables and settings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Deployment:</strong> How to deploy to production</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground"><strong className="text-foreground">License:</strong> OSI-approved (MIT recommended)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Civic Tech Index</CardTitle>
                  <CardDescription>All projects will be listed</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    After the hackathon, all projects will be cataloged in a public Civic Tech Index website showing:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Project name and description</li>
                    <li>• Challenge track and datasets used</li>
                    <li>• Current status (prototype, pilot, deployed)</li>
                    <li>• Team contact information</li>
                    <li>• Links to code, demo, and documentation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">GitHub Organization:</strong> All projects will be forked or created under <code className="bg-muted px-2 py-0.5 rounded">github.com/RVA-Civic-Tech</code>. This ensures long-term maintenance and discoverability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Credits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Cloud className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Cloud Credits</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              Free cloud credits available for participants to build and deploy their projects.
            </p>
            
            <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              <Card className="border-border shadow-elegant hover:shadow-hover transition-smooth">
                <CardHeader>
                  <Badge className="w-fit mb-2">Cloud Platform</Badge>
                  <CardTitle>AWS</CardTitle>
                  <CardDescription>Amazon Web Services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-foreground mb-2">What You Get:</p>
                      <p className="text-muted-foreground">$100 in AWS credits per participant</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Good For:</p>
                      <p className="text-muted-foreground">Full cloud infrastructure (compute, storage, databases)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">How to Access:</p>
                      <p className="text-muted-foreground">Pre-event signup link, 7-10 day approval process</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Duration:</p>
                      <p className="text-muted-foreground">12 months from issuance</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Access Details Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Tools Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Developer Tools</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              Essential tools for version control, collaboration, and deployment.
            </p>
            
            <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              <Card className="border-border shadow-elegant hover:shadow-hover transition-smooth">
                <CardHeader>
                  <Badge className="w-fit mb-2">Version Control</Badge>
                  <CardTitle>GitHub + Copilot</CardTitle>
                  <CardDescription>Code hosting, collaboration, and AI assistance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-foreground mb-2">What You Get:</p>
                      <p className="text-muted-foreground">GitHub Pro + Copilot AI assistance</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Good For:</p>
                      <p className="text-muted-foreground">Version control (essential!) + AI coding help</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Required:</p>
                      <p className="text-muted-foreground">Yes - all teams should use version control</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Access Details Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* No-Code Tools Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">No-Code Tools</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              Build powerful applications without writing code. Perfect for rapid prototyping and MVPs.
            </p>
            
            <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              <Card className="border-border shadow-elegant hover:shadow-hover transition-smooth">
                <CardHeader>
                  <Badge className="w-fit mb-2">AI Development</Badge>
                  <CardTitle>Lovable.dev</CardTitle>
                  <CardDescription>Build full-stack apps with AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-foreground mb-2">What You Get:</p>
                      <p className="text-muted-foreground">Premium access during event + 6 months for winners</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Good For:</p>
                      <p className="text-muted-foreground">Building professional web apps without coding</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Perfect For:</p>
                      <p className="text-muted-foreground">Non-technical team members, rapid UI development, civic interfaces</p>
                    </div>
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Accessibility:</strong> No coding experience required!
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Access Details Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Guides Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Getting Started Guides</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              Step-by-step guides to help you get up and running quickly.
            </p>
            
            <Card className="border-border shadow-elegant">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="start">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center gap-2">
                        <Badge>Essential</Badge>
                        <span>START-HERE.md</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-3">
                      <p>
                        Your first stop for getting oriented with the hackathon. Covers:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Event overview and schedule</li>
                        <li>Team formation process</li>
                        <li>Challenge selection guidance</li>
                        <li>First steps for getting started</li>
                      </ul>
                      <Button variant="outline" className="mt-4" disabled>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Guide (Coming Soon)
                      </Button>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="getting-started">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center gap-2">
                        <Badge>Technical</Badge>
                        <span>GETTING-STARTED.md</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-3">
                      <p>
                        Technical setup and development best practices:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Development environment setup</li>
                        <li>Version control with Git/GitHub</li>
                        <li>Using available tools and resources</li>
                        <li>Deployment and demo preparation</li>
                      </ul>
                      <Button variant="outline" className="mt-4" disabled>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Guide (Coming Soon)
                      </Button>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="civic-data">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center gap-2">
                        <Badge>Data Sources</Badge>
                        <span>Richmond Civic Data</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-3">
                      <p>
                        Access to Richmond's civic datasets and APIs:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>City open data portal</li>
                        <li>Transportation and infrastructure data</li>
                        <li>Demographics and community statistics</li>
                        <li>Public services and facilities data</li>
                      </ul>
                      <Button variant="outline" className="mt-4" disabled>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Access Data (Coming Soon)
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              More Resources Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Technical onboarding details will be sent 3 weeks before the event with links to all resources and setup instructions.
            </p>
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elegant text-lg px-8 py-6"
            >
              Get Resource Updates
            </Button>
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

export default Resources;