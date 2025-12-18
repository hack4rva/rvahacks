import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Palette, 
  Search, 
  Briefcase, 
  Landmark, 
  DollarSign, 
  Heart, 
  Lightbulb,
  HandHeart,
  Star,
  Award,
  Utensils,
  Cloud,
  Clock
} from "lucide-react";

const sponsorTiers = [
  {
    name: "Title Sponsor",
    amount: "$15,000",
    icon: Star,
    color: "border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20",
    benefits: [
      "Logo on all materials and website",
      "Speaking slot at kickoff ceremony",
      "Judge seat on final panel",
      "Resume access for recruiting",
      "Named award in your focus area",
      "VIP reception invitation"
    ]
  },
  {
    name: "Track Sponsor",
    amount: "$5,000",
    icon: Award,
    color: "border-accent bg-accent/5",
    benefits: [
      "Logo on specific challenge track",
      "Branding on track datasets",
      "Mentorship opportunities",
      "Recruiting table at event",
      "Social media recognition"
    ]
  },
  {
    name: "Meal Sponsor",
    amount: "$2,500",
    icon: Utensils,
    color: "border-primary bg-primary/5",
    benefits: [
      "Branding on food stations",
      "Logo on event signage",
      "Social media shoutouts",
      "Recruiting table at event"
    ]
  },
  {
    name: "In-Kind Sponsor",
    amount: "Value varies",
    icon: Cloud,
    color: "border-border bg-muted/50",
    benefits: [
      "Cloud credits (AWS, Google Cloud)",
      "Software licenses",
      "API access",
      "Swag and prizes"
    ]
  }
];

const Partners = () => {
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
              Partner with Us
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              Richmond's citywide civic hackathon needs sponsors, mentors, and volunteers. Find your role.
            </p>
          </div>
        </div>
      </section>

      {/* Pathway 1: Sponsors */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Sponsorship Tiers</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Fund prizes, support operations, and connect with Richmond's civic tech community. Multiple tiers available.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {sponsorTiers.map((tier, idx) => (
                <Card key={idx} className={`border-2 shadow-elegant ${tier.color}`}>
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center mb-2">
                      <tier.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <CardTitle className="text-lg">{tier.name}</CardTitle>
                    <CardDescription className="text-xl font-bold text-foreground">{tier.amount}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i}>• {benefit}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button 
              onClick={handleCTAClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Become a Sponsor
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

            {/* Mentor Queue System Callout */}
            <div className="bg-card border border-border rounded-xl p-6 mb-8">
              <h3 className="font-bold text-foreground mb-2">Mentor Queue System</h3>
              <p className="text-sm text-muted-foreground">
                We use a Discord bot to manage mentor requests by specialty. Teams can request help, mentors get notified by their expertise area, and everyone's time is used efficiently. No more wandering around looking for the right person.
              </p>
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

      {/* Corporate VTO Section */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Corporate Volunteer Time Off</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Many Richmond employers offer Volunteer Time Off (VTO) for civic engagement. Mentoring at Hack for RVA qualifies.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <Card className="border-border shadow-elegant">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-foreground mb-2">CarMax</h3>
                  <p className="text-sm text-muted-foreground">16 hours paid volunteer time per year</p>
                </CardContent>
              </Card>
              <Card className="border-border shadow-elegant">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-foreground mb-2">Capital One</h3>
                  <p className="text-sm text-muted-foreground">8+ hours for community service</p>
                </CardContent>
              </Card>
              <Card className="border-border shadow-elegant">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-foreground mb-2">Dominion Energy</h3>
                  <p className="text-sm text-muted-foreground">Matching volunteer hours program</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Check with your employer:</strong> If your company offers VTO or CSR volunteer programs, mentoring at Hack for RVA is a perfect use. We can provide documentation for your employer's records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Callouts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">We're Also Looking For</h2>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <Card className="border-accent/30 shadow-elegant bg-card">
                <CardHeader className="text-center pb-3">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Search className="w-7 h-7 text-accent" />
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
      <section className="py-16 md:py-24 bg-secondary/10">
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

export default Partners;

