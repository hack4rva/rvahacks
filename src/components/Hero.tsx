import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

interface HeroProps {
  onCTAClick: () => void;
}

export const Hero = ({ onCTAClick }: HeroProps) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden"
    >
      {/* Background Pattern with parallax effect */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Engineer the City We Want to Live In
          </h1>

          {/* Byline */}
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-accent mb-6 tracking-wide">
            Technologists, Strategists, and Creatives building real solutions for the Good of RVA
          </p>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            A civic tech hackathon. One weekend. Impact that lasts beyond Sunday.
          </p>

          {/* Key Stats - Simplified */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">48hrs</div>
              <div className="text-sm text-white/80 uppercase tracking-wider">Duration</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30" aria-hidden="true" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">$25K+</div>
              <div className="text-sm text-white/80 uppercase tracking-wider">Awards Pool</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30" aria-hidden="true" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">350+</div>
              <div className="text-sm text-white/80 uppercase tracking-wider">Participants</div>
            </div>
          </div>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 text-white/95">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" aria-hidden="true" />
              <span className="text-lg font-medium">March 27–29, 2026</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/50" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" aria-hidden="true" />
              <span className="text-lg font-medium">
                Science Museum of VA & Citywide
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              disabled
              className="bg-accent/50 text-accent-foreground text-lg px-8 py-6 font-bold cursor-not-allowed"
              aria-label="Registration opens January 1"
            >
              Registration Opens January 1
            </Button>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 font-semibold transition-smooth"
                aria-label="Learn more about the event"
              >
                Learn More
              </Button>
            </Link>
          </div>
          
          {/* Secondary CTA */}
          <div className="mt-4">
            <button
              onClick={onCTAClick}
              className="text-white/70 hover:text-white text-sm underline underline-offset-4 transition-smooth"
            >
              Stay Updated
            </button>
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
