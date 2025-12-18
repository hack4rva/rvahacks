import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, Laptop, Brain, Users, Target,
  Database, Upload, AlertTriangle, Lightbulb, Clock, Github
} from "lucide-react";

export const PreparationContent = () => {
  return (
    <div className="space-y-6">
      {/* Page Intro */}
      <div className="mb-2">
        <p className="text-muted-foreground">
          Get ready for hack weekend with tips on team formation, project scoping, technical setup, and what to do (and not do) before the event.
        </p>
      </div>

      {/* Pre-Event Ideation - Compact */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="border-success/30 bg-success/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              Do Before the Event
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>✓ Research challenge areas and Richmond civic issues</li>
              <li>✓ Sketch rough ideas and concepts</li>
              <li>✓ Identify potential data sources</li>
              <li>✓ Think about who your solution helps</li>
              <li>✓ Learn new tools or frameworks</li>
              <li>✓ Set up your development environment</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-destructive/30 bg-destructive/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              Don't Do Before the Event
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>✗ Pre-written code for your project</li>
              <li>✗ Complete designs or prototypes</li>
              <li>✗ Working demos built beforehand</li>
              <li>✗ Lock into one solution too early</li>
              <li>✗ Build alone—leave room for team collaboration</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-2 italic">
              If you arrive with a finished product, you miss the best part—building together.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Team Formation + Scoping - Dense Layout */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              Team Formation
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs space-y-3">
            <div>
              <p className="font-medium text-foreground mb-1">Coming solo?</p>
              <ul className="text-muted-foreground space-y-0.5">
                <li>• Teams form Friday morning during kickoff</li>
                <li>• Look for complementary skills</li>
                <li>• Join a team working on a problem you care about</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">Bringing a team?</p>
              <ul className="text-muted-foreground space-y-0.5">
                <li>• Ideal size: 3-5 people</li>
                <li>• Mix: technical + design + domain expertise</li>
                <li>• Stay open to adding 1-2 new members</li>
              </ul>
            </div>
            <div className="bg-muted/50 rounded p-2">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Best teams combine:</strong> Someone who codes, someone who designs, someone who understands the problem, and someone who can pitch.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Target className="w-4 h-4 text-accent" />
              Scoping a 48-Hour Project
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs space-y-3">
            <div>
              <p className="font-medium text-foreground mb-1">Time Budget</p>
              <div className="grid grid-cols-2 gap-1 text-muted-foreground">
                <span>• 4-6 hrs: Problem research</span>
                <span>• 6-8 hrs: Design/architecture</span>
                <span>• 20-24 hrs: Building</span>
                <span>• 4-6 hrs: Testing/polish</span>
                <span>• 4-6 hrs: Pitch prep</span>
              </div>
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">Scope Right</p>
              <ul className="text-muted-foreground space-y-0.5">
                <li>• Solve ONE problem well</li>
                <li>• Build a working demo, not a finished product</li>
                <li>• Focus on the core user journey</li>
                <li>• "Done" beats "perfect"</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-destructive mb-1">Common Pitfalls</p>
              <ul className="text-muted-foreground space-y-0.5">
                <li>• Building a "platform" instead of a solution</li>
                <li>• Adding features instead of finishing core</li>
                <li>• Ignoring the pitch until Sunday</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data + Submission - Compact */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Database className="w-4 h-4 text-accent" />
              Data Readiness
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs space-y-2">
            <p className="text-muted-foreground">Explore available data before you arrive:</p>
            <ul className="text-muted-foreground space-y-0.5">
              <li>• <strong className="text-foreground">Richmond Open Data Portal</strong> – city datasets</li>
              <li>• <strong className="text-foreground">Virginia Open Data</strong> – state-level data</li>
              <li>• <strong className="text-foreground">Census Data</strong> – demographics</li>
              <li>• <strong className="text-foreground">GRTC Data</strong> – transit info</li>
              <li>• <strong className="text-foreground">Challenge-specific datasets</strong> – provided at kickoff</li>
            </ul>
            <div className="bg-muted/50 rounded p-2 space-y-1">
              <p className="text-muted-foreground">✓ Download datasets beforehand</p>
              <p className="text-muted-foreground">✓ Test API access before event</p>
              <p className="text-muted-foreground">✓ Mock data is fine for demos—note it</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-accent border-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Upload className="w-4 h-4 text-accent" />
              Submission Requirements
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs space-y-3">
            <div>
              <p className="font-medium text-foreground mb-1">Devpost Submission (Required)</p>
              <ul className="text-muted-foreground space-y-0.5">
                <li>• Project name, tagline, description</li>
                <li>• Demo video (2-3 min recommended)</li>
                <li>• Screenshots + tech stack</li>
                <li>• Team members</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">GitHub Repo (Required for code)</p>
              <ul className="text-muted-foreground space-y-0.5">
                <li>• README with setup instructions</li>
                <li>• OSI license (MIT recommended)</li>
                <li>• Commit history showing weekend work</li>
              </ul>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded p-2">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Deadline:</strong> Saturday 10 PM • Finalists announced Sunday AM
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Technical Setup + Mindset - Compact Footer */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Laptop className="w-4 h-4 text-accent" />
              Technical Setup Checklist
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs">
            <div className="grid grid-cols-2 gap-2 text-muted-foreground">
              <div>
                <p className="font-medium text-foreground mb-1">Accounts</p>
                <ul className="space-y-0.5">
                  <li>✓ GitHub</li>
                  <li>✓ Devpost</li>
                  <li>✓ Slack (invite sent)</li>
                  <li>✓ Cloud provider (if needed)</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Software</p>
                <ul className="space-y-0.5">
                  <li>✓ Code editor (VS Code)</li>
                  <li>✓ Git for version control</li>
                  <li>✓ Node.js/Python/etc.</li>
                  <li>✓ Run system updates!</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Brain className="w-4 h-4 text-accent" />
              Mindset for Success
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-muted/50 rounded p-2 text-center">
                <p className="font-medium text-foreground mb-1">Stay Flexible</p>
                <p className="text-muted-foreground">First ideas rarely survive. Embrace pivots.</p>
              </div>
              <div className="bg-muted/50 rounded p-2 text-center">
                <p className="font-medium text-foreground mb-1">Collaborate</p>
                <p className="text-muted-foreground">Ask for help. Share knowledge freely.</p>
              </div>
              <div className="bg-muted/50 rounded p-2 text-center">
                <p className="font-medium text-foreground mb-1">Pace Yourself</p>
                <p className="text-muted-foreground">Sleep beats all-nighters. Take breaks.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
