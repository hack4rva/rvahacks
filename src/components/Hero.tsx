import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface HeroProps {
  onCTAClick: () => void;
}

export const Hero = ({ onCTAClick }: HeroProps) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden"
    >
      {/* Background Pattern with subtle parallax */}
      <div 
        className="absolute inset-0 opacity-10 transition-transform duration-1000"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
        }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div 
        ref={elementRef}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Hack for a{" "}
            <span className="text-accent">Better Richmond</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Richmond's entrepreneurs, inventors, and technologists unite to
            solve real problems for our city.
          </p>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 text-white/95">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" aria-hidden="true" />
              <span className="text-lg font-medium">March 6-8, 2026</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/50" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" aria-hidden="true" />
              <span className="text-lg font-medium">
                CoStar Headquarters, Richmond VA
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <Button
              size="lg"
              onClick={onCTAClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 font-bold shadow-hover transition-smooth hover:scale-105"
              aria-label="Sign up to stay updated about Hack for RVA"
            >
              Stay Updated
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};
