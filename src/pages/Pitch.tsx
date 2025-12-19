import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import richmondSeal from "@/assets/richmond-seal.png";

const Pitch = () => {

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
        <div className="flex flex-nowrap items-center justify-center gap-3 sm:gap-6 mb-12 text-lg sm:text-2xl text-white/80">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="font-semibold whitespace-nowrap">March 27–29, 2026</span>
          </div>
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white/60" />
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="font-semibold whitespace-nowrap">Richmond, VA</span>
          </div>
        </div>

        {/* Richmond Seal */}
        <div className="flex justify-center">
          <img 
            src={richmondSeal} 
            alt="City of Richmond" 
            className="w-24 h-24 sm:w-32 sm:h-32 opacity-90"
          />
        </div>

      {/* Next button - bottom right corner */}
      <Link 
        to="/pitch/next"
        className="absolute bottom-6 right-6 px-4 py-2 text-white/30 hover:text-white/70 transition-colors text-2xl z-20"
      >
        →
      </Link>
      </div>
    </div>
  );
};

export default Pitch;