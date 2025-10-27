import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Challenges } from "@/components/Challenges";
import { EmailSignup } from "@/components/EmailSignup";
import { useState } from "react";

const ActionPlan = () => {
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);

  const handleCTAClick = () => {
    setIsEmailSignupOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation onCTAClick={handleCTAClick} />
      <div className="pt-20">
        <Challenges />
      </div>
      <Footer />
      <BackToTop />
      <EmailSignup
        open={isEmailSignupOpen}
        onOpenChange={setIsEmailSignupOpen}
      />
    </div>
  );
};

export default ActionPlan;
