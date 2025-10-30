import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Countdown } from "@/components/Countdown";
import { About } from "@/components/About";
import { EventFormat } from "@/components/EventFormat";
import { Prizes } from "@/components/Prizes";
import { Us } from "@/components/Us";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { EmailSignup } from "@/components/EmailSignup";
import { BackToTop } from "@/components/BackToTop";
import { ProgressIndicator } from "@/components/ProgressIndicator";

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
      <About />
      <Prizes />
      <EventFormat />
      <Us />
      <FAQ />
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
