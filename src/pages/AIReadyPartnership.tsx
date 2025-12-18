import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Handshake, 
  Building2, 
  Settings, 
  Users, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  Scale,
  Target,
  Heart
} from "lucide-react";

const AIReadyPartnership = () => {
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
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Handshake className="w-4 h-4" />
              Partnership Proposal
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Hack for RVA × AI Ready RVA
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              A proposed partnership to deliver a large-scale civic technology hackathon focused on real-world impact for Richmond.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-accent/30 shadow-elegant bg-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent" />
                  Purpose
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  This document outlines a proposed partnership between <strong className="text-foreground">Hack for RVA</strong> and <strong className="text-foreground">AI Ready RVA</strong> to deliver a large-scale civic technology hackathon focused on real-world impact for the City of Richmond and local nonprofits.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The partnership is designed to leverage AI Ready RVA's operational strength while enabling Ford Prior and Crystal Harvey to continue leading event execution. We're open to making this an AI Ready RVA event—we have no brand to protect, just a shared goal of seeing this succeed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Partnership Model */}
      <section className="py-12 md:py-16 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">Core Partnership Model</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-border shadow-elegant">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">AI Ready RVA</h3>
                  <p className="text-muted-foreground">
                    Serves as the <strong className="text-foreground">financial and operational backbone</strong> of the event.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Ford & Crystal (Hack for RVA)</h3>
                  <p className="text-muted-foreground">
                    Continue to lead <strong className="text-foreground">event execution and day-to-day decisions</strong>.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <p className="text-lg font-semibold text-foreground">
                This is a <span className="text-accent">collaborative, non-funding</span> partnership focused on shared goals and clear decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Requesting */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">What Hack for RVA Is Requesting</h2>
            
            <div className="space-y-8">
              {/* 1. Financial & Legal */}
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-accent" />
                    1. Financial & Legal Backbone
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">AI Ready RVA would:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Act as the <strong className="text-foreground">fiscal host</strong> for the event</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Provide use of existing <strong className="text-foreground">insurance coverage</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Provide <strong className="text-foreground">banking and payment infrastructure</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Provide <strong className="text-foreground">contracting and vendor payment processes</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Serve as the <strong className="text-foreground">legal entity of record</strong> where required</span>
                    </li>
                  </ul>
                  <div className="bg-muted/50 rounded-lg p-4 mt-4">
                    <p className="text-sm text-muted-foreground font-medium">
                      No direct funding contribution is required or expected.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 2. Operational & Logistics */}
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-accent" />
                    2. Operational & Logistics Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-semibold text-foreground mb-3">AI Ready RVA would provide:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">Vendor coordination</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">Venue contracts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">Catering and logistics payments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">Volunteer coordination support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">Operational playbooks and trusted vendors</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-3">Ford & Crystal continue leading:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">Day-to-day execution</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">Timeline management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">On-the-ground decisions</span>
                        </li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-3 italic">
                        We're flexible on creative and programmatic details—happy to collaborate or defer to AI Ready RVA where it makes sense.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 3. Strategic Seat */}
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    3. Strategic Seat at the Table
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">AI Ready RVA would:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Hold a <strong className="text-foreground">formal advisory role</strong> in shaping the event</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Participate in <strong className="text-foreground">key planning discussions</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Help ensure alignment with <strong className="text-foreground">The R Prize</strong> and AI Ready RVA's broader charter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Contribute perspective on civic readiness, workforce development, responsible AI adoption, and long-term community impact</span>
                    </li>
                  </ul>
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> We welcome AI Ready RVA's input on creative and programmatic decisions. The key is <strong className="text-foreground">shared agreement on goals and clear decision-making mechanisms</strong>.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Care About */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">What We Care About</h2>
            
            <Card className="border-accent/30 shadow-elegant bg-accent/5">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong className="text-foreground">Shared agreement on goals</strong> — we want to make sure we're aligned on what success looks like</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong className="text-foreground">Clear decision-making mechanisms</strong> — who decides what, and how do we resolve disagreements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong className="text-foreground">Ford & Crystal as event leads</strong> — continuing to drive day-to-day execution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong className="text-foreground">A successful event</strong> — we have no brand to grow or protect; we just want this to work</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-accent/20">
                  <p className="text-foreground font-medium">
                    We're totally happy making this an AI Ready RVA event. The brand and creative details are flexible—what matters is the outcome.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mutual Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">Mutual Benefits</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-accent border-2 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">For Hack for RVA</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">Ability to operate at citywide scale responsibly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">Reduced administrative and legal friction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">Increased credibility with sponsors, venues, and city partners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">Alignment with an established civic institution</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-primary border-2 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">For AI Ready RVA</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">Flagship, high-visibility civic activation aligned with mission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">Direct influence on shaping real-world applied AI outcomes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">Strong alignment with the R Prize and workforce readiness goals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">Demonstrated leadership in responsible, implementation-focused civic tech</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Guiding Principles</h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="font-semibold text-foreground">Clear roles, clean boundaries</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="font-semibold text-foreground">Shared values, not shared confusion</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="font-semibold text-foreground">Execution over theory</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="font-semibold text-foreground">Real-world outcomes over demos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">Next Steps (Proposed)</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm flex-shrink-0">1</div>
                <p className="text-muted-foreground">Confirm partnership intent and scope</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm flex-shrink-0">2</div>
                <p className="text-muted-foreground">Define fiscal-hosting mechanics and constraints</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm flex-shrink-0">3</div>
                <p className="text-muted-foreground">Establish advisory touchpoints and cadence</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm flex-shrink-0">4</div>
                <p className="text-muted-foreground">Formalize agreement (lightweight MOU)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default AIReadyPartnership;