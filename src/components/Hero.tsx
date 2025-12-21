import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { eventDates, venues } from "@/data";
import richmondSkyline from "@/assets/richmond-skyline.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex-1 flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${richmondSkyline})` }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-primary/75" />

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
          <Button
            size="default"
            disabled
            className="bg-accent/50 text-accent-foreground font-semibold cursor-not-allowed"
          >
            Registration Opens January 2026
          </Button>
        </div>
      </div>
    </section>
  );
};
