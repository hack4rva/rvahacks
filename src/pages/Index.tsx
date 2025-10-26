import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Opportunity } from "@/components/Opportunity";
import { EventFormat } from "@/components/EventFormat";
import { CivicChallenges } from "@/components/CivicChallenges";
import { WhatMakesDifferent } from "@/components/WhatMakesDifferent";
import { Challenges } from "@/components/Challenges";
import { Partners } from "@/components/Partners";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { EmailSignup } from "@/components/EmailSignup";

const Index = () => {
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);

  const handleCTAClick = () => {
    setIsEmailSignupOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation onCTAClick={handleCTAClick} />
      <Hero onCTAClick={handleCTAClick} />
      <About />
      <Opportunity />
      <EventFormat />
      <CivicChallenges />
      <WhatMakesDifferent />
      <Challenges />
      <Partners />
      <FAQ />
      <Footer />
      <EmailSignup
        open={isEmailSignupOpen}
        onOpenChange={setIsEmailSignupOpen}
      />
    </div>
  );
};

export default Index;
