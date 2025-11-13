import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, GraduationCap } from "lucide-react";

const GetInvolved = () => {
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
              Get Involved
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              Join us in making Hack for RVA a success. Whether you want to sponsor, volunteer, or mentor, there's a place for you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Involvement Options */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Become a Sponsor */}
              <Card className="border-border shadow-elegant hover:shadow-hover transition-smooth flex flex-col">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Become a Sponsor</CardTitle>
                  <CardDescription>
                    Support civic innovation in Richmond
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div className="space-y-4 mb-6">
                    <p className="text-muted-foreground">
                      Partner with us to empower local developers, designers, and civic innovators. Your support helps provide resources, prizes, and an unforgettable experience.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Brand visibility to 100+ participants</li>
                      <li>• Access to top talent and innovators</li>
                      <li>• Community impact and recognition</li>
                      <li>• Multiple sponsorship tiers available</li>
                    </ul>
                  </div>
                  <Button 
                    onClick={handleCTAClick}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    Learn About Sponsorship
                  </Button>
                </CardContent>
              </Card>

              {/* Volunteer */}
              <Card className="border-border shadow-elegant hover:shadow-hover transition-smooth flex flex-col">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Volunteer</CardTitle>
                  <CardDescription>
                    Help make the event run smoothly
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div className="space-y-4 mb-6">
                    <p className="text-muted-foreground">
                      Be part of the team that brings Hack for RVA to life. We need enthusiastic volunteers to help with logistics, registration, and participant support.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Flexible time commitments available</li>
                      <li>• Network with amazing people</li>
                      <li>• Gain event experience</li>
                      <li>• Contribute to your community</li>
                    </ul>
                  </div>
                  <Button 
                    onClick={handleCTAClick}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    Sign Up to Volunteer
                  </Button>
                </CardContent>
              </Card>

              {/* Mentor */}
              <Card className="border-border shadow-elegant hover:shadow-hover transition-smooth flex flex-col">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Mentor</CardTitle>
                  <CardDescription>
                    Guide teams to success
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div className="space-y-4 mb-6">
                    <p className="text-muted-foreground">
                      Share your expertise with hackathon teams. Help participants overcome technical challenges, refine their ideas, and create impactful civic solutions.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Share your professional expertise</li>
                      <li>• Flexible mentorship schedule</li>
                      <li>• Help shape civic solutions</li>
                      <li>• Give back to the community</li>
                    </ul>
                  </div>
                  <Button 
                    onClick={handleCTAClick}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    Become a Mentor
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Get Involved Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why Get Involved?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Hack for RVA is more than just a hackathon—it's an opportunity to strengthen Richmond's civic tech community, 
              empower innovators, and create real solutions for our city's challenges.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-xl mb-2 text-foreground">Make an Impact</h3>
                <p className="text-muted-foreground">
                  Help create solutions that directly address Richmond's civic challenges and improve our community.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-foreground">Build Community</h3>
                <p className="text-muted-foreground">
                  Connect with passionate individuals who care about civic innovation and technology for good.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-foreground">Shape the Future</h3>
                <p className="text-muted-foreground">
                  Be part of building Richmond's civic tech ecosystem and inspiring the next generation of innovators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch to learn more about sponsorship opportunities, volunteer roles, or mentorship. 
              We'll provide all the details you need to get started.
            </p>
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elegant text-lg px-8 py-6"
            >
              Contact Us to Get Involved
            </Button>
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

export default GetInvolved;
