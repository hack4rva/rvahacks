import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Palette, 
  Search, 
  Scale, 
  Briefcase, 
  Landmark, 
  DollarSign, 
  Building2, 
  Heart, 
  Users, 
  Lightbulb,
  HandHeart
} from "lucide-react";

const GetInvolved = () => {
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
              Get Involved
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              Richmond's citywide civic hackathon needs builders, mentors, sponsors, and partners. Find your role.
            </p>
          </div>
        </div>
      </section>

      {/* Pathway 1: Participants */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Code className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Participants</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Build solutions that matter. Whether you code, design, research, or strategize—there's a team that needs you.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Builders & Engineers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Software developers, data engineers, no-code builders. Turn ideas into working prototypes.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Palette className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Designers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    UX/UI designers, product designers, visual thinkers. Make solutions intuitive and accessible.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Search className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Researchers & Strategists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Policy experts, researchers, business strategists. Ground solutions in real community needs.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Button 
              onClick={handleCTAClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Register as a Participant
            </Button>
          </div>
        </div>
      </section>

      {/* Pathway 2: Mentors & Judges */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Mentors & Judges</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Share your expertise to help teams build better solutions. Guide participants through technical, design, business, and civic challenges.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Technical Mentors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Help teams with architecture, APIs, data, and implementation challenges.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Palette className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Design Mentors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Guide UX decisions, user research, and accessible design practices.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Business Mentors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Advise on sustainability, pitch strategy, and go-to-market planning.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Landmark className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Civic Mentors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Provide context on city systems, policy constraints, and implementation realities.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleCTAClick}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Apply to Mentor
              </Button>
              <Button 
                onClick={handleCTAClick}
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
              >
                Apply to Judge
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pathway 3: Sponsors & Partners */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Sponsors & Partners</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Fund prizes, host hack locations, or present real civic problems for teams to solve. Multiple ways to support Richmond's civic tech movement.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Fund Prizes & Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Support prize pools, food, swag, and event operations. Multiple sponsorship tiers available with visibility and engagement opportunities.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Brand visibility to 350+ participants</li>
                    <li>• Named awards in your focus area</li>
                    <li>• Access to talent and solutions</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Scale className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Present Real Problems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Bring your organization's civic challenges to the hackathon. Get fresh perspectives and prototype solutions from diverse teams.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Define a challenge for teams</li>
                    <li>• Provide subject matter expertise</li>
                    <li>• Pathway to pilot winning solutions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Button 
              onClick={handleCTAClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Become a Sponsor or Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Special Callouts */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">We're Also Looking For</h2>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <Card className="border-accent/30 shadow-elegant bg-card">
                <CardHeader className="text-center pb-3">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lightbulb className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Domain Experts</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Specialists in housing, transportation, workforce development, and public health who can ground teams in real-world constraints and opportunities.
                  </p>
                  <Button 
                    onClick={handleCTAClick}
                    variant="outline"
                    size="sm"
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    Share Your Expertise
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-accent/30 shadow-elegant bg-card">
                <CardHeader className="text-center pb-3">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Nonprofits</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Organizations with real implementation needs who can provide problem context and a pathway to deploy winning solutions in the community.
                  </p>
                  <Button 
                    onClick={handleCTAClick}
                    variant="outline"
                    size="sm"
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    Bring a Challenge
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-accent/30 shadow-elegant bg-card">
                <CardHeader className="text-center pb-3">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <HandHeart className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Volunteers</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Help with registration, logistics, participant support, and making the event run smoothly across all locations throughout the weekend.
                  </p>
                  <Button 
                    onClick={handleCTAClick}
                    variant="outline"
                    size="sm"
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    Sign Up to Volunteer
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch to learn more. We'll help you find the right way to contribute to Richmond's civic tech movement.
            </p>
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elegant text-lg px-8 py-6"
            >
              Contact Us
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

export default GetInvolved;
