import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface CTABannerProps {
  onCTAClick: () => void;
}

export const CTABanner = ({ onCTAClick }: CTABannerProps) => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

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
