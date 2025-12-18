import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, Palette, Briefcase, Landmark, 
  Heart, Lightbulb, HandHeart, Award, Clock, Search
} from "lucide-react";

const tabs = [
  { id: "sponsors", label: "Sponsors" },
  { id: "mentors", label: "Mentors" },
  { id: "volunteers", label: "Volunteers" },
];

const awardTiers = [
  { tier: "Mayor's Choice", amount: "$5,000", quantity: "1 available", desc: "Best Overall Solution", color: "border-yellow-500 bg-yellow-500/10" },
  { tier: "Housing Award", amount: "$2,500", quantity: "Focus Area", desc: "Eviction prevention, tenant rights, affordable housing", color: "border-accent bg-accent/10" },
  { tier: "Jobs Award", amount: "$2,500", quantity: "Focus Area", desc: "Workforce development, small business, economic mobility", color: "border-accent bg-accent/10" },
  { tier: "Transit Award", amount: "$2,500", quantity: "Focus Area", desc: "Transportation access, mobility equity, GRTC integration", color: "border-accent bg-accent/10" },
  { tier: "Track Awards", amount: "$1,000", quantity: "Many available", desc: "Sponsor-defined criteria", color: "border-primary bg-primary/5" },
];

const Partners = () => {
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const getInitialTab = () => {
    const hash = location.hash.replace("#", "");
    return tabs.some(t => t.id === hash) ? hash : "sponsors";
  };
  
  const [activeTab, setActiveTab] = useState(getInitialTab);

  const handleCTAClick = () => {
    setIsEmailSignupOpen(true);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`/partners#${value}`, { replace: true });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = location.hash.replace("#", "");
      if (tabs.some(t => t.id === hash)) {
        setActiveTab(hash);
      }
    };
    handleHashChange();
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={handleCTAClick} />
      
      {/* Spacer for fixed nav */}
      <div className="pt-20 md:pt-24" />

      {/* Tabs Section */}
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        {/* Sticky Tab Navigation */}
        <nav className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto py-3">
              <TabsList className="grid w-full grid-cols-3 h-auto gap-2 bg-transparent p-0">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="py-2.5 px-4 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground border border-border data-[state=active]:border-accent rounded-lg transition-smooth text-sm font-medium"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>
        </nav>

        {/* Tab Content */}
        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Sponsors Tab */}
              <TabsContent value="sponsors" className="mt-0 focus-visible:outline-none">
                <div className="space-y-5">
                  {/* Page Header */}
                  <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                      Sponsors
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Sponsor an award and become an active participant in shaping Richmond's civic tech future—set your own criteria, judge submissions, and put your name on solutions that matter.
                    </p>
                  </div>

                  {/* How Sponsorship Works */}
                  <Card className="border-accent border-2">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Award className="w-5 h-5 text-accent" />
                        How Award Sponsorship Works
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Sponsors are active participants, not passive funders. This is our primary event expense.
                      </p>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-medium text-foreground mb-2">What Sponsors Do:</p>
                          <ul className="text-muted-foreground space-y-1">
                            <li>• Fund a specific award at your chosen tier</li>
                            <li>• Set your own award rubric (e.g., housing-focused, transit innovation)</li>
                            <li>• Sit on the judging panel</li>
                            <li>• Vote on ALL awards, not just your own</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-2">What You Get:</p>
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
                  <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    {awardTiers.map((tier, idx) => (
                      <Card key={idx} className={`border-2 ${tier.color}`}>
                        <CardContent className="pt-4 pb-4 text-center">
                          <p className="text-2xl font-bold text-foreground mb-0.5">{tier.amount}</p>
                          <p className="text-sm font-medium text-foreground">{tier.tier}</p>
                          <p className="text-xs text-muted-foreground mt-1">{tier.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  {/* Summary + CTA */}
                  <div className="bg-muted/30 rounded-lg p-4 text-sm">
                    <p className="text-muted-foreground mb-4">
                      <strong className="text-foreground">Award Structure:</strong> 1× $5,000 flagship • 3× $2,500 focus area awards (Housing, Jobs, Transit) • Multiple $1,000 track awards
                    </p>
                    <Button onClick={handleCTAClick} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                      Sponsor an Award
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Mentors Tab */}
              <TabsContent value="mentors" className="mt-0 focus-visible:outline-none">
                <div className="space-y-5">
                  {/* Page Header */}
                  <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                      Mentors
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Share your expertise with teams building civic solutions. Mentors guide participants through technical, design, business, and civic challenges—on your own schedule.
                    </p>
                  </div>

                  {/* Mentor Types */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { icon: Code, title: "Technical", desc: "Architecture, APIs, data, implementation" },
                      { icon: Palette, title: "Design", desc: "UX, user research, accessibility" },
                      { icon: Briefcase, title: "Business", desc: "Sustainability, pitch strategy, GTM" },
                      { icon: Landmark, title: "Civic", desc: "City systems, policy, implementation" },
                    ].map((type, idx) => (
                      <Card key={idx} className="border-border">
                        <CardContent className="pt-4">
                          <div className="flex items-center gap-2 mb-2">
                            <type.icon className="w-4 h-4 text-accent" />
                            <p className="font-medium text-foreground text-sm">{type.title}</p>
                          </div>
                          <p className="text-xs text-muted-foreground">{type.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* How It Works */}
                  <Card className="border-border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">How Mentoring Works</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                      <p>
                        We use a <strong className="text-foreground">Discord bot</strong> to manage mentor requests by specialty. 
                        Teams request help, mentors get notified by expertise area, and everyone's time is used efficiently.
                      </p>
                      <div className="grid sm:grid-cols-3 gap-3 mt-3">
                        <div className="bg-muted/50 rounded p-3">
                          <p className="font-medium text-foreground text-xs mb-1">Time Commitment</p>
                          <p className="text-xs">4-8 hours across the weekend</p>
                        </div>
                        <div className="bg-muted/50 rounded p-3">
                          <p className="font-medium text-foreground text-xs mb-1">Flexibility</p>
                          <p className="text-xs">Drop in when available</p>
                        </div>
                        <div className="bg-muted/50 rounded p-3">
                          <p className="font-medium text-foreground text-xs mb-1">Remote OK</p>
                          <p className="text-xs">Virtual mentoring supported</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* VTO Callout */}
                  <Card className="border-accent/30 bg-accent/5">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Clock className="w-4 h-4 text-accent" />
                        Use Your Corporate VTO
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      <p className="mb-2">
                        Many Richmond employers offer Volunteer Time Off. Mentoring at Hack for RVA qualifies:
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="bg-background rounded px-2 py-1"><strong>CarMax:</strong> 16 hrs/year</span>
                        <span className="bg-background rounded px-2 py-1"><strong>Capital One:</strong> 8+ hrs</span>
                        <span className="bg-background rounded px-2 py-1"><strong>Dominion:</strong> Matching program</span>
                      </div>
                      <p className="mt-2 text-xs">We provide documentation for your employer.</p>
                    </CardContent>
                  </Card>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={handleCTAClick} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                      Apply to Mentor
                    </Button>
                    <Button onClick={handleCTAClick} variant="outline" className="border-accent text-accent hover:bg-accent/10">
                      Apply to Judge
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Volunteers Tab */}
              <TabsContent value="volunteers" className="mt-0 focus-visible:outline-none">
                <div className="space-y-5">
                  {/* Page Header */}
                  <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                      Volunteers
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Contribute your time, domain knowledge, or organizational resources to help make the hackathon a success for all participants.
                    </p>
                  </div>

                  {/* Volunteer Roles */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <Card className="border-border">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center gap-2">
                          <Search className="w-4 h-4 text-accent" />
                          Domain Experts
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground">
                        <p className="mb-3">
                          Specialists in housing, transit, workforce, public health who ground teams in real-world constraints.
                        </p>
                        <Button onClick={handleCTAClick} variant="outline" size="sm" className="w-full border-accent text-accent hover:bg-accent/10">
                          Share Expertise
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-border">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center gap-2">
                          <Heart className="w-4 h-4 text-accent" />
                          Nonprofits
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground">
                        <p className="mb-3">
                          Organizations with real needs who can provide problem context and deploy winning solutions.
                        </p>
                        <Button onClick={handleCTAClick} variant="outline" size="sm" className="w-full border-accent text-accent hover:bg-accent/10">
                          Bring a Challenge
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-border">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center gap-2">
                          <HandHeart className="w-4 h-4 text-accent" />
                          Event Volunteers
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground">
                        <p className="mb-3">
                          Help with registration, logistics, participant support across all locations.
                        </p>
                        <Button onClick={handleCTAClick} variant="outline" size="sm" className="w-full border-accent text-accent hover:bg-accent/10">
                          Sign Up
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* General CTA */}
                  <div className="bg-muted/30 rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-3">
                      Not sure how to help? Reach out and we'll find the right fit.
                    </p>
                    <Button onClick={handleCTAClick} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </div>
          </div>
        </section>
      </Tabs>

      <Footer />
      <BackToTop />
      <EmailSignup open={isEmailSignupOpen} onOpenChange={setIsEmailSignupOpen} />
    </div>
  );
};

export default Partners;
