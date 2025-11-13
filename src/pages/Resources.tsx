import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Cloud, Code, Zap, Link as LinkIcon, BookOpen, ExternalLink } from "lucide-react";

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
              Everything you need to build amazing civic tech solutions. From cloud credits to no-code tools, we've got you covered.
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
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border shadow-elegant hover:shadow-hover transition-smooth">
                <CardHeader>
                  <Badge className="w-fit mb-2">Cloud Platform</Badge>
                  <CardTitle>AWS</CardTitle>
                  <CardDescription>Amazon Web Services</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Access to compute, storage, databases, and more. Perfect for building scalable applications.
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant hover:shadow-hover transition-smooth">
                <CardHeader>
                  <Badge className="w-fit mb-2">Cloud Platform</Badge>
                  <CardTitle>Azure</CardTitle>
                  <CardDescription>Microsoft Azure</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Cloud computing services for building, testing, and deploying applications.
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant hover:shadow-hover transition-smooth">
                <CardHeader>
                  <Badge className="w-fit mb-2">Cloud Platform</Badge>
                  <CardTitle>Google Cloud</CardTitle>
                  <CardDescription>Google Cloud Platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Powerful infrastructure and machine learning tools for your civic solutions.
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details Coming Soon
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
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border shadow-elegant hover:shadow-hover transition-smooth">
                <CardHeader>
                  <Badge className="w-fit mb-2">Version Control</Badge>
                  <CardTitle>GitHub</CardTitle>
                  <CardDescription>Code hosting and collaboration</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Host your code, collaborate with your team, and manage your project with industry-standard version control.
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant hover:shadow-hover transition-smooth">
                <CardHeader>
                  <Badge className="w-fit mb-2">Hosting</Badge>
                  <CardTitle>Deployment Platforms</CardTitle>
                  <CardDescription>Vercel, Netlify, Railway</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Deploy your applications quickly and easily with modern hosting platforms optimized for web apps.
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details Coming Soon
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
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border shadow-elegant hover:shadow-hover transition-smooth">
                <CardHeader>
                  <Badge className="w-fit mb-2">AI Development</Badge>
                  <CardTitle>Lovable</CardTitle>
                  <CardDescription>Build full-stack apps with AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Create production-ready web applications using natural language. From idea to deployment in minutes.
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant hover:shadow-hover transition-smooth">
                <CardHeader>
                  <Badge className="w-fit mb-2">App Builder</Badge>
                  <CardTitle>Glide</CardTitle>
                  <CardDescription>Build mobile apps from spreadsheets</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Transform your data into beautiful mobile and web apps without coding.
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* APIs & Services Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <LinkIcon className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">APIs & Services</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              Integrate powerful third-party services into your civic solutions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border shadow-elegant hover:shadow-hover transition-smooth">
                <CardHeader>
                  <Badge className="w-fit mb-2">Communications</Badge>
                  <CardTitle>Twilio</CardTitle>
                  <CardDescription>SMS, voice, and video APIs</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Add messaging, voice calls, and video capabilities to your application.
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant hover:shadow-hover transition-smooth">
                <CardHeader>
                  <Badge className="w-fit mb-2">Payments</Badge>
                  <CardTitle>Stripe</CardTitle>
                  <CardDescription>Payment processing</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Accept payments, manage subscriptions, and handle financial transactions securely.
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant hover:shadow-hover transition-smooth">
                <CardHeader>
                  <Badge className="w-fit mb-2">Data</Badge>
                  <CardTitle>More APIs</CardTitle>
                  <CardDescription>Maps, weather, data sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Access to various APIs for maps, weather data, government data, and more.
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details Coming Soon
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
