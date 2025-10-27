import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface CTABannerProps {
  onCTAClick: () => void;
}

export const CTABanner = ({ onCTAClick }: CTABannerProps) => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" aria-hidden="true" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Registration opens January 2026. Join the waitlist to be first in
            line.
          </p>
          <Button
            size="lg"
            onClick={onCTAClick}
            className="bg-white hover:bg-white/90 text-primary text-lg px-8 py-6 font-bold shadow-hover hover:scale-105 transition-smooth"
            aria-label="Sign up to stay updated about Hack for RVA"
          >
            Count Me In
          </Button>
        </div>
      </div>
    </section>
  );
};
