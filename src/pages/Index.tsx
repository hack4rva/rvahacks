import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Countdown } from "@/components/Countdown";
import { HomeSummary } from "@/components/HomeSummary";
import { WhoParticipates } from "@/components/WhoParticipates";
import { HomeCTA } from "@/components/HomeCTA";
import { Footer } from "@/components/Footer";
import { EmailSignup } from "@/components/EmailSignup";
import { BackToTop } from "@/components/BackToTop";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { FAQAccordion } from "@/components/content";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);

  const handleCTAClick = () => {
    setIsEmailSignupOpen(true);
  };

  return (
    <div className="min-h-screen">
      <ProgressIndicator />
      <Navigation onCTAClick={handleCTAClick} />
      <Hero onCTAClick={handleCTAClick} />
      <Countdown />
      <HomeSummary />
      <WhoParticipates />
      
      {/* Quick FAQ Section - Just a few key questions */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
                Quick Answers
              </h2>
              <p className="text-lg text-muted-foreground animate-fade-in">
                Common questions about participating
              </p>
            </div>
            
            <FAQAccordion limit={4} />
            
            <div className="text-center mt-8 animate-fade-in">
              <Link 
                to="/about#faq"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-smooth"
              >
                See all FAQs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HomeCTA onCTAClick={handleCTAClick} />
      <Footer />
      <BackToTop />
      <EmailSignup
        open={isEmailSignupOpen}
        onOpenChange={setIsEmailSignupOpen}
      />
    </div>
  );
};

export default Index;
