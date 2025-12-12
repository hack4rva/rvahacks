import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Laptop, Brain, MapPin } from "lucide-react";

const Preparation = () => {
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
              Prepare for Hack for RVA
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              Get ready for an incredible weekend of civic innovation. Here's everything you need to know before you arrive.
            </p>
          </div>
        </div>
      </section>

      {/* What to Bring Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What to Bring</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle>Essential Items</CardTitle>
                  <CardDescription>Must-have items for the hackathon</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Laptop (fully charged) with charger</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Valid photo ID</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Water bottle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Phone charger</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle>Recommended Items</CardTitle>
                  <CardDescription>Nice to have for comfort and productivity</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span>Headphones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span>Notebook and pen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span>Comfortable clothes and shoes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span>Light jacket or sweater</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Prep Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Laptop className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Digital Preparation</h2>
            </div>
            
            <Card className="border-border shadow-elegant">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="accounts">
                    <AccordionTrigger className="text-lg font-semibold">Account Setup</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-3">
                      <p>Create or verify you have access to these accounts before the event:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>GitHub account (for version control and collaboration)</li>
                        <li>Slack workspace invitation (check your email)</li>
                        <li>Any API keys you might need (Google Maps, OpenAI, etc.)</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="software">
                    <AccordionTrigger className="text-lg font-semibold">Software Installation</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-3">
                      <p>Install these tools ahead of time to save setup time:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Code editor (VS Code, Sublime, etc.)</li>
                        <li>Git for version control</li>
                        <li>Node.js and npm (for web development)</li>
                        <li>Python (if working with data/AI)</li>
                        <li>Postman or similar API testing tool</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="updates">
                    <AccordionTrigger className="text-lg font-semibold">System Updates</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-3">
                      <p>Don't let updates slow you down during the hackathon:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Update your operating system</li>
                        <li>Update all development tools and IDEs</li>
                        <li>Clear up disk space (at least 10GB free recommended)</li>
                        <li>Test your laptop battery life</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mental Preparation Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Brain className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Mental Preparation</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Come with Ideas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Browse the challenge categories beforehand. Think about Richmond's civic issues that interest you. Come ready to share and collaborate.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Be Open-Minded</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You'll meet people with diverse skills and backgrounds. Be ready to learn, teach, and pivot your approach based on team dynamics.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Pace Yourself</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    It's a marathon, not a sprint. Take breaks, stay hydrated, and remember that sustainable progress beats burnout.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Day-of Navigation Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Day-of Navigation</h2>
            </div>
            
            <Card className="border-border shadow-elegant">
              <CardHeader>
                <CardTitle>Arrival Instructions</CardTitle>
                <CardDescription>Make your arrival smooth and stress-free</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-muted-foreground">Science Museum of Virginia</p>
                  <p className="text-sm text-muted-foreground mt-1">2500 W Broad St, Richmond, VA 23220</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Check-in Time</h3>
                  <p className="text-muted-foreground">Friday, March 6, 2026 (optional)</p>
                  <p className="text-muted-foreground">Saturday, March 7, 2026 - Main event starts</p>
                  <p className="text-sm text-muted-foreground mt-1">Arrive early to get settled and meet your team</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Parking & Transportation</h3>
                  <p className="text-muted-foreground">Details on parking options and public transportation will be provided to registered participants</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">What Happens First</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Check in at the registration desk</li>
                    <li>Get your name badge and swag</li>
                    <li>Join the opening session for welcome and overview</li>
                    <li>Team formation and challenge selection</li>
                    <li>Start hacking!</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
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

export default Preparation;
