import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FocusAreasGrid, 
  OpportunityBox, 
  StatsBar, 
  PrizesGrid, 
  ScheduleTimeline, 
  LeadershipSection,
  FAQAccordion 
} from "@/components/content";
import { Award, Heart, Rocket, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { eventDates, participantTypes, participantTagline } from "@/data";

const sectionIds = ["mission", "schedule", "prizes", "participants", "team", "impact", "faq"];

const About = () => {
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("mission");

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
        behavior: "instant"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={handleCTAClick} />
      
      {/* Spacer for fixed nav */}
      <div className="pt-20 md:pt-24" />

      {/* Sticky Section Navigation */}
      <nav className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-3 gap-1 scrollbar-hide">
            {[
              { id: "mission", label: "Mission" },
              { id: "schedule", label: "Schedule" },
              { id: "prizes", label: "Prizes" },
              { id: "participants", label: "Who Joins" },
              { id: "team", label: "Team" },
              { id: "impact", label: "Impact" },
              { id: "faq", label: "FAQ" },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-smooth ${
                  activeSection === section.id
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>


      {/* Section 1: Mission & Vision */}
      <section id="mission" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              What We're Building
            </h2>

            <p className="text-lg text-foreground/90 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Hack for RVA brings together Richmond's brightest minds to build
              a thriving economy for the City of Richmond.
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed text-center mb-12 max-w-3xl mx-auto">
              This isn't just about building apps—it's about designing civic systems that work. In partnership with the <strong className="text-foreground">City of Richmond</strong> and local nonprofits, winning solutions will have real pathways to implementation, pilot programs, and lasting community impact.
            </p>

            {/* Focus Areas */}
            <FocusAreasGrid className="mb-16" />

            {/* The Opportunity */}
            <div className="max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
                The Opportunity
              </h3>
              <OpportunityBox />
            </div>

            {/* Stats */}
            <StatsBar />
          </div>
        </div>
      </section>

      {/* Section 2: How It Works / Schedule */}
      <section id="schedule" className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* Section 3: Prizes & Recognition */}
      <section id="prizes" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Prizes & Recognition
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Over $25K in prizes across 10 categories. Submit your solution by Saturday evening. Finalist teams will
                pitch live on Sunday. Judges, including Mayor Avula, will select winners.
              </p>
            </div>

            <PrizesGrid />
          </div>
        </div>
      </section>

      {/* Section 4: Who Participates */}
      <section id="participants" className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
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

          </div>
        </div>
      </section>

      {/* Section 5: Who Makes This Happen */}
      <section id="team" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Section 6: What Happens After (Implementation) */}
      <section id="impact" className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
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
                    High-potential solutions can pursue independent development with ecosystem support.
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

            {/* Expectations */}
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
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Got questions? We've got answers.
              </p>
            </div>

            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Build Something Real?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us March 27-29, 2026. Build solutions with a pathway to impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={handleCTAClick}
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6"
              >
                Stay Updated
              </Button>
            </div>
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

export default About;

