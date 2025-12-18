import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, Clock, MapPin, Users } from "lucide-react";

interface RegistrationContentProps {
  onCTAClick: () => void;
}

export const RegistrationContent = ({ onCTAClick }: RegistrationContentProps) => {
  return (
    <div className="space-y-10">
      {/* Event Overview */}
      <section className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-xl font-bold text-foreground mb-3">What is Hack for RVA?</h2>
        <p className="text-muted-foreground mb-4">
          Hack for RVA is a 3-day civic hackathon happening <strong className="text-foreground">March 27-29, 2026</strong> at CoStar HQ and satellite locations across Richmond. 
          Teams of developers, designers, and community members work together to build real solutions for local nonprofits and city agencies.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-accent" />
            <span>CoStar HQ + Satellite Locations</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4 text-accent" />
            <span>200+ Participants Expected</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4 text-accent" />
            <span>March 27-29, 2026</span>
          </div>
        </div>
      </section>

      {/* Key Info */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent px-5 py-3 rounded-lg">
          <Calendar className="w-5 h-5 text-accent" />
          <span className="font-bold text-accent">Registration Opens January 2026</span>
        </div>
        
        <div className="flex items-center justify-center gap-3">
          <DollarSign className="w-8 h-8 text-accent" />
          <span className="text-4xl font-bold text-foreground">FREE</span>
        </div>
        <p className="text-muted-foreground">No registration fee. Meals and snacks provided during the event.</p>
      </section>

      {/* Attendance Options */}
      <section>
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-5 h-5 text-accent" />
          <h2 className="text-xl font-bold text-foreground">Attendance Options</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          The hackathon spans three days, but you don't have to attend all of them. Choose the schedule that works for you—whether that's the full weekend or just a single day.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-border">
            <CardHeader className="pb-2">
              <Badge variant="secondary" className="w-fit mb-1">Optional</Badge>
              <CardTitle className="text-lg">Friday</CardTitle>
              <CardDescription>March 27, 2026</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Kickoff presentations, team formation, and early brainstorming. Great for getting a head start.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-2">
              <Badge className="w-fit mb-1 bg-accent">Main Event</Badge>
              <CardTitle className="text-lg">Saturday</CardTitle>
              <CardDescription>March 28, 2026</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The core hacking day. Teams work intensively on their solutions with mentor support.
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent border-2">
            <CardHeader className="pb-2">
              <Badge className="w-fit mb-1 bg-accent">Recommended</Badge>
              <CardTitle className="text-lg">Full Weekend</CardTitle>
              <CardDescription>March 27-29, 2026</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Maximum time to develop, iterate, and refine your solution before final presentations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-2">
              <Badge variant="secondary" className="w-fit mb-1">Family-Friendly</Badge>
              <CardTitle className="text-lg">Sunday</CardTitle>
              <CardDescription>March 29, 2026</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Final presentations and awards ceremony. Open to family and friends to celebrate the winners.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who Should Register */}
      <section className="bg-muted/30 border border-border rounded-xl p-6">
        <h2 className="text-xl font-bold text-foreground mb-3">Who Should Register?</h2>
        <p className="text-muted-foreground mb-4">
          You don't need to be a coder to participate. Successful teams combine diverse skills:
        </p>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
          <li>• <strong className="text-foreground">Developers</strong> — Build the technical solution</li>
          <li>• <strong className="text-foreground">Designers</strong> — Create user experiences and visuals</li>
          <li>• <strong className="text-foreground">Project managers</strong> — Keep teams organized and on track</li>
          <li>• <strong className="text-foreground">Domain experts</strong> — Bring knowledge of the problem space</li>
          <li>• <strong className="text-foreground">Storytellers</strong> — Craft compelling presentations</li>
          <li>• <strong className="text-foreground">Community members</strong> — Represent end-user perspectives</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center pt-4">
        <p className="text-muted-foreground mb-4">
          Registration opens in January 2026. Sign up to be notified when spots become available.
        </p>
        <Button 
          onClick={onCTAClick}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
        >
          Get Notified When Registration Opens
        </Button>
      </section>
    </div>
  );
};
