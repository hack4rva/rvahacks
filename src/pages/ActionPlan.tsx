import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Challenges } from "@/components/Challenges";
import { EmailSignup } from "@/components/EmailSignup";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Heart, 
  Rocket, 
  Calendar, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  Target,
  Users,
  Building2
} from "lucide-react";

const ActionPlan = () => {
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
              From Hackathon to Impact
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              Winning solutions don't end on Sunday. Learn how projects move from prototype to real-world implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 md:py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-elegant">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2">Our Approach: Realistic & Scoped</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This is not open-ended consulting. Implementation pathways are structured, time-bound, and focused on achievable outcomes. We prioritize solutions that can realistically move forward with existing resources and partnerships—not moonshots that require years of development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Pathways */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">Implementation Pathways</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Three routes from hackathon prototype to real-world deployment
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Mayor's Choice */}
              <Card className="border-accent border-2 shadow-elegant">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Mayor's Choice Award</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    The winner receives a commitment from the City of Richmond to explore implementation.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Direct connection to relevant city departments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Pilot program consideration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">90-day scoping engagement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Nonprofit Adoption */}
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Nonprofit Adoption</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Community organizations can adopt solutions that address their operational needs.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Matched with partner nonprofits pre-event</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Handoff documentation support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Optional ongoing volunteer engagement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Startup Path */}
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Startup Path</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    High-potential solutions can pursue independent development with ecosystem support. All projects are <a href="/code-of-conduct#open-source" className="text-accent underline hover:text-accent/80">fully open sourced</a>.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">All code uses OSI-approved licenses (MIT, Apache 2.0)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">City receives perpetual, royalty-free license</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Introductions to local accelerators & investors</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Civic Accelerator Section */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Rocket className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Civic Accelerator Model</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Avoiding "hackathon fatigue"—where great projects win prizes but never get used.
            </p>
            
            <Card className="border-border shadow-elegant mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent" />
                  3-Month Civic Accelerator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Top teams from each track can opt into a structured 3-month program to move their prototype toward real deployment.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Partnership</h4>
                    <p className="text-sm text-muted-foreground">
                      Lighthouse Labs and City's Office of Strategic Initiatives provide mentorship and resources.
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Government Champion</h4>
                    <p className="text-sm text-muted-foreground">
                      A city staff member shepherds each project through procurement, IT security, and deployment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  Adoption Pathways
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">City Adoption</h4>
                      <p className="text-sm text-muted-foreground">Solutions aligned with city priorities get fast-tracked through IT review and procurement.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Nonprofit Deployment</h4>
                      <p className="text-sm text-muted-foreground">Partner nonprofits commit to deploying and maintaining solutions that meet their needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Rocket className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Startup Formation</h4>
                      <p className="text-sm text-muted-foreground">Teams can incorporate and pursue the solution independently with ecosystem support.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Post-Event Timeline</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-10">
              What to expect after the hackathon ends
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">1</div>
                  <div className="w-0.5 h-full bg-border mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-foreground mb-1">Week 1: Awards & Documentation</h3>
                  <p className="text-sm text-muted-foreground">
                    Winners announced. Teams submit final documentation, code repositories, and handoff materials. Implementation pathway confirmed.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">2</div>
                  <div className="w-0.5 h-full bg-border mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-foreground mb-1">Weeks 2-4: Scoping & Introductions</h3>
                  <p className="text-sm text-muted-foreground">
                    Mayor's Choice winner meets with city staff. Nonprofit adopters receive team introductions. Startup candidates connect with ecosystem partners.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">3</div>
                  <div className="w-0.5 h-full bg-border mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-foreground mb-1">Months 2-3: Implementation Planning</h3>
                  <p className="text-sm text-muted-foreground">
                    Feasibility assessments completed. Pilot timelines established. Resource requirements defined. Go/no-go decisions made.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">4</div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Month 3+: Execution (If Approved)</h3>
                  <p className="text-sm text-muted-foreground">
                    Pilot programs launch. Ongoing collaboration optional and team-dependent. Success metrics tracked and shared.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">Setting Expectations</h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-border shadow-elegant bg-success/5">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                    What We Commit To
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Structured post-event engagement for winners</li>
                    <li>• Introductions to relevant stakeholders</li>
                    <li>• Documentation and handoff support</li>
                    <li>• Honest feasibility assessments</li>
                    <li>• Clear communication on next steps</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant bg-destructive/5">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                    What This Is Not
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Guaranteed implementation for all projects</li>
                    <li>• Open-ended consulting or support</li>
                    <li>• Funding commitment beyond prizes</li>
                    <li>• Long-term development partnerships</li>
                    <li>• Employment or contract guarantee</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <div className="pt-8">
        <Challenges />
      </div>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Build Something Real?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us March 27-29, 2026. Build solutions with a pathway to impact.
            </p>
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elegant text-lg px-8 py-6"
            >
              Stay Updated
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

export default ActionPlan;
