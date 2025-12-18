import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, Clock } from "lucide-react";

interface RegistrationContentProps {
  onCTAClick: () => void;
}

export const RegistrationContent = ({ onCTAClick }: RegistrationContentProps) => {
  return (
    <div className="space-y-10">
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
        <p className="text-muted-foreground">No fees. Just bring your passion for civic innovation.</p>
      </section>

      {/* Attendance Options */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-accent" />
          <h2 className="text-xl font-bold text-foreground">Attendance Options</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-border">
            <CardHeader className="pb-2">
              <Badge variant="secondary" className="w-fit mb-1">Optional</Badge>
              <CardTitle className="text-lg">Friday</CardTitle>
              <CardDescription>March 27</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Kickoff & team formation</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-2">
              <Badge className="w-fit mb-1 bg-accent">Main Event</Badge>
              <CardTitle className="text-lg">Saturday</CardTitle>
              <CardDescription>March 28</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">All-day hacking</p>
            </CardContent>
          </Card>

          <Card className="border-accent border-2">
            <CardHeader className="pb-2">
              <Badge className="w-fit mb-1 bg-accent">Recommended</Badge>
              <CardTitle className="text-lg">Full Weekend</CardTitle>
              <CardDescription>March 27-29</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Complete experience</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-2">
              <Badge variant="secondary" className="w-fit mb-1">Family</Badge>
              <CardTitle className="text-lg">Sunday</CardTitle>
              <CardDescription>March 29</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Awards ceremony</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pt-4">
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
