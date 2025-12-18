import { useState, useEffect } from "react";
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

const sectionIds = ["sponsors", "mentors", "vto", "other"];

const tocItems = [
  { id: "sponsors", label: "Sponsors", icon: DollarSign },
  { id: "mentors", label: "Mentors & Judges", icon: Lightbulb },
  { id: "vto", label: "Corporate VTO", icon: Clock },
  { id: "other", label: "Other Ways", icon: HandHeart },
];

const awardTiers = [
  {
    tier: "Flagship Award",
    amount: "$5,000",
    quantity: "1 available",
    color: "border-yellow-500 bg-yellow-500/10",
  },
  {
    tier: "Major Award",
    amount: "$2,500",
    quantity: "3 available",
    color: "border-accent bg-accent/10",
  },
  {
    tier: "Track Award",
    amount: "$1,000",
    quantity: "Many available",
    color: "border-primary bg-primary/5",
  },
];

const Partners = () => {
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("sponsors");

  const handleCTAClick = () => {
    setIsEmailSignupOpen(true);
  };

  // Track active section for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
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

      {/* Sticky Section Navigation */}
      <nav className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-3 gap-1 scrollbar-hide">
            {tocItems.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-smooth ${
                  activeSection === section.id
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <section.icon className="w-4 h-4" />
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Pathway 1: Sponsors */}
      <section id="sponsors" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Award Sponsorships</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
              Sponsors fund specific awards and become active participants—not passive funders. This is our primary event expense and requires dedicated attention.
            </p>
            
            {/* How It Works */}
            <Card className="border-accent border-2 mb-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  How Award Sponsorship Works
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-3">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-foreground mb-2">What Sponsors Do:</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Fund a specific award at your chosen tier</li>
                      <li>• Set your own award rubric (e.g., CoStar sponsors housing-focused award)</li>
                      <li>• Sit on the judging panel</li>
                      <li>• Vote on ALL awards, not just your own</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-2">Why It Matters:</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Direct influence on which solutions get recognized</li>
                      <li>• Shape civic tech in your area of expertise</li>
                      <li>• Connect with Richmond's builder community</li>
                      <li>• Your name on an award aligned with your mission</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Award Tiers */}
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {awardTiers.map((tier, idx) => (
                <Card key={idx} className={`border-2 shadow-elegant ${tier.color}`}>
                  <CardContent className="pt-6 text-center">
                    <p className="text-3xl font-bold text-foreground mb-1">{tier.amount}</p>
                    <p className="text-lg font-medium text-foreground">{tier.tier}</p>
                    <p className="text-sm text-muted-foreground">{tier.quantity}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Summary */}
            <div className="bg-muted/30 rounded-lg p-4 mb-6 text-sm">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Award Structure:</strong> 1× $5,000 flagship award • 3× $2,500 major awards • Multiple $1,000 track awards (as many as we can fund)
              </p>
            </div>
            
            <Button 
              onClick={handleCTAClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Sponsor an Award
            </Button>
          </div>
        </div>
      </section>

      {/* Pathway 2: Mentors & Judges */}
      <section id="mentors" className="py-16 md:py-24 bg-secondary/10">
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
      <section id="vto" className="py-16 md:py-24 bg-accent/5">
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
      <section id="other" className="py-16 md:py-24">
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

