import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  Laptop, 
  Brain, 
  Users, 
  Target,
  Database,
  Upload,
  AlertTriangle,
  Lightbulb,
  Clock,
  FileCode,
  Github
} from "lucide-react";

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
              Preparation Guide
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              Set yourself up for success. Here's how to prepare for 48 hours of civic innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Pre-Event Ideation Section */}
      <section className="py-12 md:py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-accent/30 shadow-elegant">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-accent" />
                  <CardTitle>Come with Ideas, Not Code</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success" /> Encouraged
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Research the challenge areas</li>
                      <li>• Sketch rough ideas and concepts</li>
                      <li>• Identify potential data sources</li>
                      <li>• Think about who your solution helps</li>
                      <li>• Learn new tools or frameworks</li>
                    </ul>
                  </div>
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-destructive" /> Don't Overbuild
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• No pre-written code for your project</li>
                      <li>• No complete designs or prototypes</li>
                      <li>• No working demos before the event</li>
                      <li>• Don't lock into one solution too early</li>
                      <li>• Leave room for team collaboration</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  The hackathon is about rapid iteration and collaboration. If you arrive with a finished product, you miss the best part—building together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Formation Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Team Formation Tips</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">If You're Coming Solo</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Teams form Friday morning during kickoff</li>
                    <li>• Introduce yourself and your skills</li>
                    <li>• Look for complementary skills (devs need designers, designers need devs)</li>
                    <li>• Join a team working on a problem you care about</li>
                    <li>• Don't be afraid to pitch your own idea</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">If You're Bringing a Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Ideal team size: 3-5 people</li>
                    <li>• Mix of skills: technical, design, domain expertise</li>
                    <li>• Assign a team lead for decision-making</li>
                    <li>• Stay open to adding 1-2 new members</li>
                    <li>• Coordinate schedules in advance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Best teams combine:</strong> Someone who codes, someone who designs, someone who understands the problem domain, and someone who can pitch. You don't need all four, but diversity helps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scoping Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Scoping a 48-Hour Project</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Time Budget</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>4-6 hrs:</strong> Problem definition & research</li>
                    <li>• <strong>6-8 hrs:</strong> Design & architecture</li>
                    <li>• <strong>20-24 hrs:</strong> Building</li>
                    <li>• <strong>4-6 hrs:</strong> Testing & polish</li>
                    <li>• <strong>4-6 hrs:</strong> Documentation & pitch prep</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Scope Right</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Solve ONE problem well</li>
                    <li>• Build a working demo, not a finished product</li>
                    <li>• Focus on the core user journey</li>
                    <li>• Cut features ruthlessly</li>
                    <li>• "Done" beats "perfect"</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center mb-2">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                  </div>
                  <CardTitle className="text-lg">Common Pitfalls</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Building a "platform" instead of a solution</li>
                    <li>• Adding features instead of finishing core</li>
                    <li>• Spending too long on design polish</li>
                    <li>• Not leaving time for submission</li>
                    <li>• Ignoring the pitch until Sunday</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Data Readiness Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Database className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Data Readiness</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle>Explore Available Data</CardTitle>
                  <CardDescription>Know what's available before you arrive</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Richmond has many open data sources. Familiarize yourself with what's available:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Richmond Open Data Portal</strong> – city datasets</li>
                    <li>• <strong>Virginia Open Data</strong> – state-level data</li>
                    <li>• <strong>Census Data</strong> – demographics and economics</li>
                    <li>• <strong>GRTC Data</strong> – transit information</li>
                    <li>• <strong>Challenge-specific datasets</strong> – provided at kickoff</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle>Data Tips</CardTitle>
                  <CardDescription>Save time during the hackathon</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Download datasets you might use beforehand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Test API access before the event</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Have a backup plan if data isn't available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Mock data is fine for demos—note it in your submission</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Expectations Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Upload className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Submission Expectations</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-accent/50 border-2 shadow-elegant">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-5 h-5 text-accent" />
                    <CardTitle>Devpost Submission</CardTitle>
                  </div>
                  <CardDescription>Required for all teams</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    All projects must be submitted via Devpost by Saturday evening. Your submission includes:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Project name and tagline</strong></li>
                    <li>• <strong>Description</strong> – problem, solution, impact</li>
                    <li>• <strong>Demo video</strong> (2-3 minutes recommended)</li>
                    <li>• <strong>Screenshots</strong> of your solution</li>
                    <li>• <strong>Tech stack</strong> and tools used</li>
                    <li>• <strong>Team members</strong></li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-accent/50 border-2 shadow-elegant">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-accent" />
                    <CardTitle>GitHub Repository</CardTitle>
                  </div>
                  <CardDescription>Required for all code-based projects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Your code must be in a public GitHub repo. Include:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>README</strong> with setup instructions</li>
                    <li>• <strong>License</strong> (we recommend MIT)</li>
                    <li>• <strong>Commit history</strong> showing weekend work</li>
                    <li>• <strong>No pre-event commits</strong> on hackathon code</li>
                    <li>• <strong>Link in Devpost</strong> submission</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-border shadow-elegant">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Submission Timeline</h4>
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="font-semibold text-foreground">Saturday 6 PM</p>
                    <p className="text-muted-foreground">Devpost submissions open</p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3 border border-accent/20">
                    <p className="font-semibold text-foreground">Saturday 10 PM</p>
                    <p className="text-muted-foreground">Final submission deadline</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="font-semibold text-foreground">Sunday Morning</p>
                    <p className="text-muted-foreground">Finalists announced</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Digital Prep Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Laptop className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Technical Setup</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle>Accounts to Create</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>GitHub</strong> – for code collaboration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>Devpost</strong> – for project submission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>Slack</strong> – event communication (invite sent)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>Cloud providers</strong> – AWS/GCP/Azure if needed</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle>Software to Install</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Code editor (VS Code recommended)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Git for version control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Node.js, Python, or your preferred runtime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Run all system updates before arriving</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mental Prep Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Brain className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Mindset</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Stay Flexible</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Your first idea might not be your best. Be ready to pivot based on what you learn from mentors and teammates.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Pace Yourself</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    48 hours is a marathon. Take breaks, sleep if you need to, and don't burn out before submission time.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Focus on Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Judges care about civic impact, not just technical complexity. A simple solution that works beats a complex one that doesn't.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Before You Arrive</h2>
            <p className="text-muted-foreground mb-8">
              Make sure you've reviewed these important pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/registration">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  Registration Details
                </Button>
              </Link>
              <Link to="/code-of-conduct">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  Code of Conduct
                </Button>
              </Link>
              <Link to="/logistics">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  Event Logistics
                </Button>
              </Link>
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

export default Preparation;