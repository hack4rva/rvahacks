import { useState } from "react";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { 
  PillarEcosystemAccordion, 
  RoleCategoryAccordion,
  VolunteerSignupModal
} from "@/components/volunteers";
import {
  preEventRoles,
  fridayRoles,
  saturdaySiteRoles,
  saturdayVirtualRoles,
  sundayRoles,
  supportRoles,
} from "@/data/volunteerRoles";
import { 
  Building2, Users, ClipboardCheck, 
  Calendar, ArrowRight, Sparkles, Heart,
  MapPin, Monitor, Award
} from "lucide-react";

const Volunteers = () => {
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);
  const [isVolunteerSignupOpen, setIsVolunteerSignupOpen] = useState(false);

  const handleCTAClick = () => {
    setIsEmailSignupOpen(true);
  };

  const handleVolunteerSignup = () => {
    setIsVolunteerSignupOpen(true);
  };

  // Combine Saturday roles for display
  const saturdayRoles = [...saturdaySiteRoles, ...saturdayVirtualRoles];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={handleCTAClick} />
      
      <main className="pt-24 pb-16">
        {/* Hero Section - Compact */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-purple-500/5" />
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          
          <div className="relative container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="text-center max-w-2xl mx-auto">
              <Badge variant="outline" className="mb-4 border-accent text-accent">
                <Sparkles className="w-3 h-3 mr-1" />
                150-200 volunteers needed
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                Be Part of <span className="text-accent">Something Big</span>
              </h1>
              
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Hack for RVA needs passionate volunteers to make Richmond's largest civic hackathon a success. Browse roles below and sign up.
              </p>
              
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={handleVolunteerSignup}
              >
                Sign Up to Volunteer
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Stats - Compact */}
        <section className="border-y border-border bg-muted/30">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Building2 className="w-4 h-4 text-blue-500" />
                  <span className="text-2xl font-bold text-foreground">22</span>
                </div>
                <p className="text-xs text-muted-foreground">Pillar Stakeholders</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-emerald-500" />
                  <span className="text-2xl font-bold text-foreground">45+</span>
                </div>
                <p className="text-xs text-muted-foreground">Volunteer Roles</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <ClipboardCheck className="w-4 h-4 text-purple-500" />
                  <span className="text-2xl font-bold text-foreground">~1,600</span>
                </div>
                <p className="text-xs text-muted-foreground">Hours Needed</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span className="text-2xl font-bold text-foreground">3</span>
                </div>
                <p className="text-xs text-muted-foreground">Days of Impact</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content - Accordions */}
        <section className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Accordion type="multiple" className="space-y-3">
            {/* Pillar Ecosystem Accordion */}
            <PillarEcosystemAccordion />

            {/* Pre-Event Roles */}
            <RoleCategoryAccordion
              id="pre-event"
              title="Pre-Event Roles"
              description="6-8 weeks before • Flexible hours"
              roles={preEventRoles}
              count="25-35 needed"
              icon={Sparkles}
              colorClass="bg-purple-500/10 text-purple-600"
              onSignUp={handleVolunteerSignup}
            />

            {/* Friday Roles */}
            <RoleCategoryAccordion
              id="friday"
              title="Friday — Kickoff Day"
              description="March 27 • Science Museum of Virginia"
              roles={fridayRoles}
              count="35-45 needed"
              icon={Calendar}
              colorClass="bg-blue-500/10 text-blue-600"
              onSignUp={handleVolunteerSignup}
            />

            {/* Saturday Roles */}
            <RoleCategoryAccordion
              id="saturday"
              title="Saturday — Hacking Day"
              description="March 28 • 15+ locations citywide + virtual"
              roles={saturdayRoles}
              count="60-80 needed"
              icon={MapPin}
              colorClass="bg-green-500/10 text-green-600"
              onSignUp={handleVolunteerSignup}
            />

            {/* Sunday Roles */}
            <RoleCategoryAccordion
              id="sunday"
              title="Sunday — Finals & Awards"
              description="March 29 • Science Museum of Virginia"
              roles={sundayRoles}
              count="30-40 needed"
              icon={Award}
              colorClass="bg-orange-500/10 text-orange-600"
              onSignUp={handleVolunteerSignup}
            />

            {/* Support / Mentor Roles */}
            <RoleCategoryAccordion
              id="support"
              title="Support & Mentors"
              description="Throughout event • Flexible shifts"
              roles={supportRoles}
              count="30-40 needed"
              icon={Heart}
              colorClass="bg-pink-500/10 text-pink-600"
              onSignUp={handleVolunteerSignup}
            />
          </Accordion>
        </section>

        {/* Bottom CTA */}
        <section className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 sm:p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              Ready to Make a Difference?
            </h2>
            <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
              Every role has clear responsibilities, decision authority, and success criteria. You'll know exactly what you own.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={handleVolunteerSignup}
            >
              Sign Up to Volunteer
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* Corporate VTO Section - Compact */}
        <section className="border-t border-border bg-muted/30">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Use Your Company's VTO
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Many Richmond employers offer Volunteer Time Off:
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                <Badge variant="outline" className="py-1 px-2.5 text-xs">
                  <span className="font-semibold">CarMax:</span>&nbsp;16 hrs/yr
                </Badge>
                <Badge variant="outline" className="py-1 px-2.5 text-xs">
                  <span className="font-semibold">Capital One:</span>&nbsp;8+ hrs
                </Badge>
                <Badge variant="outline" className="py-1 px-2.5 text-xs">
                  <span className="font-semibold">Dominion:</span>&nbsp;Matching
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                We provide VTO documentation upon request.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
      
      {/* Modals */}
      <EmailSignup
        open={isEmailSignupOpen}
        onOpenChange={setIsEmailSignupOpen}
      />
      <VolunteerSignupModal
        open={isVolunteerSignupOpen}
        onOpenChange={setIsVolunteerSignupOpen}
      />
    </div>
  );
};

export default Volunteers;
