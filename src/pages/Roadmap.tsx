import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { CampaignRoadmap } from "@/components/CampaignRoadmap";
import { CalendarDays } from "lucide-react";

const Roadmap = () => {
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);

  const handleCTAClick = () => {
    setIsEmailSignupOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={handleCTAClick} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <CalendarDays className="w-8 h-8 text-accent" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Campaign Roadmap
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              12 weeks from launch to event. Here's how we're building Richmond's first civic hackathon.
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                January 6 → March 29, 2026
              </span>
              <span>
                Event: <strong className="text-foreground">March 27–29</strong> @ Science Museum
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <CampaignRoadmap />
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

export default Roadmap;

