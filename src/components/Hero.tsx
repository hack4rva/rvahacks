import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { eventDates, venues } from "@/data";

interface HeroProps {
  onCTAClick: () => void;
}

export const Hero = ({ onCTAClick }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative flex-1 flex items-center justify-center gradient-hero overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 leading-tight">
            Hack for RVA
          </h1>

          {/* Tagline - direct, no fluff */}
          <p className="text-lg sm:text-xl text-accent font-medium mb-4">
            Build civic tech for Richmond. Win prizes. Ship real solutions.
          </p>

          {/* Key Stats - compact row */}
          <div className="flex items-center justify-center gap-6 mb-4 text-white">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">48h</div>
              <div className="text-xs text-white/70 uppercase">Hackathon</div>
            </div>
            <div className="w-px h-8 bg-white/30" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">$15K+</div>
              <div className="text-xs text-white/70 uppercase">Prizes</div>
            </div>
            <div className="w-px h-8 bg-white/30" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">7</div>
              <div className="text-xs text-white/70 uppercase">Pillars</div>
            </div>
          </div>

          {/* Event Details - single line */}
          <div className="flex items-center justify-center gap-4 mb-5 text-white/90 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-accent" />
              {eventDates.fullRange}
            </span>
            <span className="text-white/40">•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-accent" />
              {venues.primary.shortName}
            </span>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              size="default"
              disabled
              className="bg-accent/50 text-accent-foreground font-semibold cursor-not-allowed"
            >
              Registration Opens Jan 1
            </Button>
            <Button
              size="default"
              onClick={onCTAClick}
              className="bg-white text-primary font-semibold hover:bg-white/90"
            >
              Stay Updated!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
