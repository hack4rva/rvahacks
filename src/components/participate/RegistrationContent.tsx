import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, Clock, MapPin, Users, Utensils, Trophy } from "lucide-react";

interface RegistrationContentProps {
  onCTAClick: () => void;
}

export const RegistrationContent = ({ onCTAClick }: RegistrationContentProps) => {
  return (
    <div className="space-y-5">
      {/* Event Overview - Dense Hero */}
      <div className="bg-accent/5 border-2 border-accent rounded-xl p-4">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <h2 className="text-xl font-bold text-foreground">Hack for RVA</h2>
          <Badge className="bg-accent">March 27-29, 2026</Badge>
          <Badge variant="secondary">3-Day Civic Hackathon</Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Teams of developers, designers, and community members build real solutions for Richmond nonprofits and city agencies. 
          Work on challenges in housing, transit, small business, and civic engagement—with mentorship from local experts.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>Science Museum + Satellite Sites</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Users className="w-3.5 h-3.5 text-accent" />
            <span>200+ Expected Participants</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Utensils className="w-3.5 h-3.5 text-accent" />
            <span>All Meals Provided</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Trophy className="w-3.5 h-3.5 text-accent" />
            <span>Cash Prizes + Resources</span>
          </div>
        </div>
      </div>

      {/* Registration Info + Who Should Join */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="border-accent border-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              Registration Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-accent" />
              <div>
                <p className="text-2xl font-bold text-foreground">FREE</p>
                <p className="text-xs text-muted-foreground">No registration fee</p>
              </div>
            </div>
            <div className="bg-accent/10 border border-accent rounded-lg p-2 text-center">
              <p className="font-semibold text-accent text-sm">Opens January 2026</p>
            </div>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• All meals and snacks provided during event</li>
              <li>• Choose your satellite hacking location</li>
              <li>• Select which days you'll attend</li>
              <li>• Indicate dietary restrictions and accessibility needs</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              Who Should Register?
            </CardTitle>
            <p className="text-xs text-muted-foreground">You don't need to be a coder. Successful teams combine diverse skills:</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <div className="bg-muted/50 rounded p-2">
                <p className="font-medium text-foreground">Developers</p>
                <p>Build technical solutions</p>
              </div>
              <div className="bg-muted/50 rounded p-2">
                <p className="font-medium text-foreground">Designers</p>
                <p>Create UX and visuals</p>
              </div>
              <div className="bg-muted/50 rounded p-2">
                <p className="font-medium text-foreground">Domain Experts</p>
                <p>Know the problem space</p>
              </div>
              <div className="bg-muted/50 rounded p-2">
                <p className="font-medium text-foreground">Storytellers</p>
                <p>Craft winning pitches</p>
              </div>
              <div className="bg-muted/50 rounded p-2">
                <p className="font-medium text-foreground">Project Managers</p>
                <p>Keep teams organized</p>
              </div>
              <div className="bg-muted/50 rounded p-2">
                <p className="font-medium text-foreground">Community Members</p>
                <p>Represent end users</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Options - Compact Grid */}
      <Card className="border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent" />
            Attendance Options
          </CardTitle>
          <p className="text-xs text-muted-foreground">Choose the schedule that works for you—full weekend or single days.</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <Badge variant="secondary" className="text-xs mb-1">Optional</Badge>
              <p className="font-medium text-foreground text-sm">Friday</p>
              <p className="text-xs text-muted-foreground">Kickoff, team formation, early brainstorming</p>
            </div>
            <div className="bg-accent/10 border border-accent rounded-lg p-3 text-center">
              <Badge className="bg-accent text-xs mb-1">Main Event</Badge>
              <p className="font-medium text-foreground text-sm">Saturday</p>
              <p className="text-xs text-muted-foreground">Core hacking day with mentor support</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <Badge variant="secondary" className="text-xs mb-1">Family-Friendly</Badge>
              <p className="font-medium text-foreground text-sm">Sunday</p>
              <p className="text-xs text-muted-foreground">Final pitches, awards ceremony</p>
            </div>
            <div className="bg-primary/5 border-2 border-primary rounded-lg p-3 text-center">
              <Badge className="text-xs mb-1">Recommended</Badge>
              <p className="font-medium text-foreground text-sm">Full Weekend</p>
              <p className="text-xs text-muted-foreground">Maximum time to build and iterate</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA - Compact */}
      <div className="text-center bg-muted/30 rounded-xl p-4">
        <p className="text-sm text-muted-foreground mb-3">
          Registration opens January 2026. Get notified when spots become available.
        </p>
        <Button 
          onClick={onCTAClick}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
        >
          Get Notified When Registration Opens
        </Button>
      </div>
    </div>
  );
};
