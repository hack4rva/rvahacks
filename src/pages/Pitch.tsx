import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EmailSignup } from "@/components/EmailSignup";
import { Calendar, MapPin } from "lucide-react";

const Pitch = () => {
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-accent flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Event Name */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight">
          Hack for RVA
        </h1>

        {/* Tagline - 15 words or less */}
        <p className="text-2xl sm:text-3xl md:text-4xl text-white/90 font-medium mb-12 leading-relaxed">
          Richmond's first civic hackathon.<br />
          Build solutions. Shape your city.
        </p>

        {/* Date & Location */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-xl sm:text-2xl text-white/80">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6" />
            <span className="font-semibold">March 6–8, 2026</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/60" />
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6" />
            <span className="font-semibold">Richmond, VA</span>
          </div>
        </div>

        {/* CTA */}
        <Button
          onClick={() => setIsEmailSignupOpen(true)}
          size="lg"
          className="bg-white text-primary hover:bg-white/90 text-xl px-10 py-7 font-bold shadow-2xl hover:scale-105 transition-transform"
        >
          Join Us
        </Button>

        {/* URL hint */}
        <p className="mt-12 text-lg text-white/60 font-mono">
          hackforrva.org
        </p>
      </div>

      <EmailSignup open={isEmailSignupOpen} onOpenChange={setIsEmailSignupOpen} />
    </div>
  );
};

export default Pitch;