import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Us } from "@/components/Us";
import { EmailSignup } from "@/components/EmailSignup";
import { useState } from "react";

const Team = () => {
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);

  const handleCTAClick = () => {
    setIsEmailSignupOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation onCTAClick={handleCTAClick} />
      <div className="pt-20">
        <Us />
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

export default Team;
