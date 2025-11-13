import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Cloud, Code, Zap, BookOpen, ExternalLink } from "lucide-react";

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
              Everything you need to build amazing civic tech solutions. From cloud credits to developer tools, we've got you covered.
            </p>
            <p className="text-sm text-muted-foreground mt-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
              All participants receive access to professional development tools and hosting platforms, eliminating cost barriers.
            </p>
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
                      <p className="font-semibold text-foreground mb-2">Special Feature:</p>
                      <p className="text-muted-foreground">AWS Cloud9 collaborative coding environment</p>
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
                      <p className="font-semibold text-foreground mb-2">Why Use:</p>
                      <p className="text-muted-foreground">Industry standard, team collaboration</p>
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
                      <p className="font-semibold text-foreground mb-2">Why Use:</p>
                      <p className="text-muted-foreground">AI-powered, dramatically faster prototyping</p>
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
      <section className="py-16 md:py-24">
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
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              More Resources Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're working on providing you with the best possible resources for the hackathon. 
              Sign up to be notified when new resources and guides are available.
            </p>
            <p className="text-sm text-muted-foreground">
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
