import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { 
  PillarEcosystemGrid, 
  VolunteerRoleGrid, 
  VolunteerSignupForm 
} from "@/components/volunteers";
import { 
  Building2, Users, ClipboardCheck, Heart, 
  Calendar, ArrowRight, Sparkles
} from "lucide-react";

const Volunteers = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);

  const handleCTAClick = () => {
    setIsEmailSignupOpen(true);
  };

  const handleSignUp = () => {
    setActiveTab("signup");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={handleCTAClick} />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-purple-500/5" />
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          
          <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4 border-accent text-accent">
                <Sparkles className="w-3 h-3 mr-1" />
                150-200 volunteers needed
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Be Part of <span className="text-accent">Something Big</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                Hack for RVA needs passionate volunteers to make Richmond's largest civic hackathon a success. 
                From pillar stakeholders to day-of volunteers, there's a role for everyone.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={handleSignUp}
                >
                  Sign Up to Volunteer
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => setActiveTab("roles")}
                >
                  Browse Roles
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="border-y border-border bg-muted/30">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Building2 className="w-5 h-5 text-blue-500" />
                  <span className="text-3xl font-bold text-foreground">22</span>
                </div>
                <p className="text-sm text-muted-foreground">Pillar Stakeholders</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-emerald-500" />
                  <span className="text-3xl font-bold text-foreground">45+</span>
                </div>
                <p className="text-sm text-muted-foreground">Unique Volunteer Roles</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <ClipboardCheck className="w-5 h-5 text-purple-500" />
                  <span className="text-3xl font-bold text-foreground">~1,600</span>
                </div>
                <p className="text-sm text-muted-foreground">Volunteer Hours</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span className="text-3xl font-bold text-foreground">3</span>
                </div>
                <p className="text-sm text-muted-foreground">Days of Impact</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="h-auto p-1 bg-muted/50 border border-border">
                <TabsTrigger 
                  value="overview" 
                  className="px-6 py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="pillars" 
                  className="px-6 py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  <Building2 className="w-4 h-4 mr-2" />
                  Pillars
                </TabsTrigger>
                <TabsTrigger 
                  value="roles" 
                  className="px-6 py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Roles
                </TabsTrigger>
                <TabsTrigger 
                  value="signup" 
                  className="px-6 py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  <ClipboardCheck className="w-4 h-4 mr-2" />
                  Sign Up
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Overview Tab */}
            <TabsContent value="overview" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg dark:prose-invert mx-auto">
                  <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                    Why Volunteer?
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
                    <div className="bg-card border border-border rounded-xl p-6">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <Sparkles className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Make Real Impact
                      </h3>
                      <p className="text-muted-foreground">
                        Help build solutions that address Richmond's biggest challenges — from housing to education to climate. Your work matters.
                      </p>
                    </div>
                    
                    <div className="bg-card border border-border rounded-xl p-6">
                      <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-purple-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Connect with Leaders
                      </h3>
                      <p className="text-muted-foreground">
                        Work alongside city officials, nonprofit leaders, and tech executives. Expand your network while doing good.
                      </p>
                    </div>
                    
                    <div className="bg-card border border-border rounded-xl p-6">
                      <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                        <ClipboardCheck className="w-6 h-6 text-emerald-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Clear Expectations
                      </h3>
                      <p className="text-muted-foreground">
                        Every role has defined responsibilities, decision authority, and success criteria. You'll know exactly what you own.
                      </p>
                    </div>
                    
                    <div className="bg-card border border-border rounded-xl p-6">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                        <Calendar className="w-6 h-6 text-blue-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Flexible Commitment
                      </h3>
                      <p className="text-muted-foreground">
                        From 2-hour shifts to full-weekend roles, choose what works for your schedule. Virtual and in-person options available.
                      </p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                    Role Categories
                  </h2>
                  
                  <div className="space-y-4 not-prose">
                    <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-yellow-600" />
                        Pillar Stakeholders (22 relationships)
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        City liaisons, nonprofit partners, and corporate sponsors for each of the 7 pillars. These are recruited partnerships, not traditional volunteer roles.
                      </p>
                    </div>
                    
                    <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-600" />
                        Pre-Event Volunteers (25-35 people)
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        Outreach ambassadors, data prep, marketing content creation. Flexible hours 6-8 weeks before the event.
                      </p>
                    </div>
                    
                    <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        Event Day Volunteers (100-130 people)
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        Registration, wayfinding, room captains, site captains, AV support, catering, photography, and more across all three days.
                      </p>
                    </div>
                    
                    <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        <Heart className="w-5 h-5 text-emerald-600" />
                        Support Volunteers (30-40 people)
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        Technical mentors, design mentors, pitch coaches, subject matter experts. Share your expertise with hackathon teams.
                      </p>
                    </div>
                  </div>

                  <div className="text-center mt-12">
                    <Button 
                      size="lg" 
                      className="bg-accent hover:bg-accent/90"
                      onClick={() => setActiveTab("roles")}
                    >
                      Explore All Roles
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Pillars Tab */}
            <TabsContent value="pillars" className="mt-0">
              <PillarEcosystemGrid />
            </TabsContent>

            {/* Roles Tab */}
            <TabsContent value="roles" className="mt-0">
              <VolunteerRoleGrid onSignUp={handleSignUp} />
            </TabsContent>

            {/* Signup Tab */}
            <TabsContent value="signup" className="mt-0">
              <VolunteerSignupForm />
            </TabsContent>
          </Tabs>
        </section>

        {/* Corporate VTO Section */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Use Your Company's VTO
              </h2>
              <p className="text-muted-foreground mb-6">
                Many Richmond employers offer Volunteer Time Off (VTO). Here are some examples:
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Badge variant="outline" className="py-1.5 px-3">
                  <span className="font-semibold">CarMax:</span>&nbsp;16 hrs/year
                </Badge>
                <Badge variant="outline" className="py-1.5 px-3">
                  <span className="font-semibold">Capital One:</span>&nbsp;8+ hrs
                </Badge>
                <Badge variant="outline" className="py-1.5 px-3">
                  <span className="font-semibold">Dominion Energy:</span>&nbsp;Matching
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                We provide documentation for employer VTO programs upon request.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
      <EmailSignup
        open={isEmailSignupOpen}
        onOpenChange={setIsEmailSignupOpen}
      />
    </div>
  );
};

export default Volunteers;

