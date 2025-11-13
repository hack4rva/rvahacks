import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, FileText, Clock, CheckCircle2 } from "lucide-react";

const Registration = () => {
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
              Register for Hack for RVA
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Secure your spot for Richmond's premier civic hackathon. Join us March 6-8, 2026.
            </p>
            
            {/* Registration Opens Banner */}
            <div className="inline-flex items-center gap-3 bg-accent/10 border-2 border-accent px-6 py-4 rounded-lg animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Calendar className="w-6 h-6 text-accent" />
              <span className="text-lg font-bold text-accent">Registration Opens January 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <DollarSign className="w-12 h-12 text-accent" />
              <h2 className="text-5xl sm:text-6xl font-bold text-foreground">FREE</h2>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              No registration fee. No hidden costs. Just bring your passion for civic innovation.
            </p>
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elegant text-lg px-8 py-6"
            >
              Get Notified When Registration Opens
            </Button>
          </div>
        </div>
      </section>

      {/* Attendance Options Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Attendance Options</h2>
            </div>
            <p className="text-muted-foreground mb-8 text-lg">
              Choose the days that work best for your schedule. You can attend any combination that fits your availability.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-border shadow-elegant hover:shadow-hover transition-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary">Optional</Badge>
                  </CardTitle>
                  <CardTitle className="text-2xl">Friday Only</CardTitle>
                  <CardDescription>March 6, 2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Full-day optional kickoff. Great for getting a head start and meeting your team.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant hover:shadow-hover transition-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="default" className="bg-accent">Main Event</Badge>
                  </CardTitle>
                  <CardTitle className="text-2xl">Saturday Only</CardTitle>
                  <CardDescription>March 7, 2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All-day hacking session. The core event day where most development happens.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent border-2 shadow-elegant hover:shadow-hover transition-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="default" className="bg-accent">Recommended</Badge>
                  </CardTitle>
                  <CardTitle className="text-2xl">Full Weekend</CardTitle>
                  <CardDescription>March 6-8, 2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The complete experience. Maximum time to develop, iterate, and present your solution.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant hover:shadow-hover transition-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary">Family</Badge>
                  </CardTitle>
                  <CardTitle className="text-2xl">Sunday Only</CardTitle>
                  <CardDescription>March 8, 2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Family-friendly awards ceremony. See the final presentations and celebrate winners.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Collect Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What We Collect</h2>
            </div>
            <p className="text-muted-foreground mb-8 text-lg">
              We only collect essential information to ensure a great experience for all participants.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Full name</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Email address</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Phone number (emergency contact)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle>Event Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Attendance days (Fri/Sat/Sun)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Dietary restrictions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>T-shirt size</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle>Professional Background</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Skills and expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Organization/company (optional)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>GitHub/LinkedIn profile (optional)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle>Challenge Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Preferred challenge areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Team formation preference</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Experience level</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Platform Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border shadow-elegant bg-muted/30">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Registration Platform</CardTitle>
                <CardDescription className="text-lg">
                  We're finalizing the registration system to ensure the best experience
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="inline-flex items-center gap-3 bg-background px-6 py-4 rounded-lg border border-border">
                  <span className="text-2xl font-bold text-muted-foreground">Platform TBD - Coming Soon</span>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Details about the registration platform and process will be announced when registration opens in January 2026. 
                  Sign up for notifications to be the first to know!
                </p>
                <Button 
                  onClick={handleCTAClick}
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elegant"
                >
                  Stay Updated on Registration
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Don't Miss Your Chance
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be among the first to register when spots open in January 2026. 
              Get notified immediately and secure your place at Hack for RVA.
            </p>
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elegant text-lg px-8 py-6"
            >
              Get Early Registration Notification
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

export default Registration;
