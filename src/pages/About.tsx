import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PrizesGrid, 
  ScheduleTimeline, 
  LeadershipSection,
  FAQAccordion 
} from "@/components/content";
import { Award, Heart, Rocket, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { participantTypes } from "@/data";

const tabs = [
  { id: "schedule", label: "Schedule" },
  { id: "prizes", label: "Prizes" },
  { id: "participants", label: "Who Joins" },
  { id: "team", label: "Team" },
  { id: "impact", label: "Impact" },
  { id: "faq", label: "FAQ" },
];

const About = () => {
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const getInitialTab = () => {
    const hash = location.hash.replace("#", "");
    return tabs.some(t => t.id === hash) ? hash : "schedule";
  };
  
  const [activeTab, setActiveTab] = useState(getInitialTab);

  const handleCTAClick = () => {
    setIsEmailSignupOpen(true);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`/about#${value}`, { replace: true });
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

      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        {/* Sticky Tab Navigation */}
        <nav className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto py-3">
              <div className="grid w-full grid-cols-4 md:grid-cols-7 h-auto gap-2">
                {/* Mission Link */}
                <Link
                  to="/mission"
                  className="py-2.5 px-4 border border-accent/50 bg-accent/10 text-accent rounded-lg transition-smooth text-sm font-medium text-center hover:bg-accent/20"
                >
                  Mission
                </Link>
                {/* Regular Tabs */}
                <TabsList className="contents bg-transparent p-0">
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
          </div>
        </nav>

        {/* Tab Content */}
        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Schedule Tab */}
              <TabsContent value="schedule" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Event Schedule
                  </h2>
                  <p className="text-lg text-muted-foreground mb-2">
                    A citywide hackathon with centralized kickoff and distributed hacking
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Hack both days or choose what fits your schedule
                  </p>
                </div>

                <ScheduleTimeline />
              </TabsContent>

              {/* Prizes Tab */}
              <TabsContent value="prizes" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Prizes & Recognition
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                    Over $15K in prizes across 10 categories. Submit your solution by Saturday evening. Finalist teams will
                    pitch live on Sunday. Judges, including Mayor Avula, will select winners.
                  </p>
                </div>

                <PrizesGrid />
              </TabsContent>

              {/* Participants Tab */}
              <TabsContent value="participants" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Who Participates
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Every winning team needs {participantTypes.map(p => p.title).join(", ").replace(/, ([^,]*)$/, ", and $1")}. Find your role.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 mb-12">
                  {participantTypes.map((type, index) => (
                    <Card key={index} className="border-border shadow-elegant hover:shadow-hover transition-smooth">
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                          {type.svgPath ? (
                            <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={type.svgPath} />
                            </svg>
                          ) : (
                            <type.icon className="w-8 h-8 text-accent" />
                          )}
                        </div>
                        <CardTitle>{type.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-muted-foreground">
                          {type.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center">
                  <Button 
                    onClick={handleCTAClick}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Stay Updated
                  </Button>
                </div>
              </TabsContent>

              {/* Team Tab */}
              <TabsContent value="team" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                      Who Makes This Happen
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      A coalition of leaders from across Richmond's tech, civic, nonprofit, and education sectors.
                    </p>
                  </div>

                  <LeadershipSection showGetInvolvedLink={true} />

                  <div className="text-center mt-10">
                    <Link to="/team">
                      <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                        Meet the Full Team <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>

              {/* Impact Tab */}
              <TabsContent value="impact" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                    What Happens After
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Winning solutions don't end on Sunday. Here's how projects move to real-world implementation.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
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

                  <Card className="border-border shadow-elegant">
                    <CardHeader className="pb-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                        <Rocket className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">Startup Path</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        High-potential solutions can pursue independent development with ecosystem support. All hackathon projects are open source licensed, so teams are free to build upon their work.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Introductions to local accelerators</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Investor and mentor connections</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Richmond tech community support</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
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
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center">
                  <Link to="/action-plan">
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                      Read Full Implementation Details <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>

              {/* FAQ Tab */}
              <TabsContent value="faq" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Everything you need to know about participating in Hack for RVA.
                  </p>
                </div>

                <div className="max-w-3xl mx-auto">
                  <FAQAccordion />
                </div>
              </TabsContent>
            </div>
          </div>
        </section>
      </Tabs>

      <Footer />
      <BackToTop />
      <EmailSignup
        open={isEmailSignupOpen}
        onOpenChange={setIsEmailSignupOpen}
      />
    </div>
  );
};

export default About;