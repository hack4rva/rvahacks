import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Countdown } from "@/components/Countdown";
import { Footer } from "@/components/Footer";
import { EmailSignup } from "@/components/EmailSignup";

const Index = () => {
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);

  const handleCTAClick = () => {
    setIsEmailSignupOpen(true);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navigation onCTAClick={handleCTAClick} />
      <Hero onCTAClick={handleCTAClick} />
      <Countdown />
      <Footer />
      <EmailSignup
        open={isEmailSignupOpen}
        onOpenChange={setIsEmailSignupOpen}
      />
    </div>
  );
};

export default Index;
