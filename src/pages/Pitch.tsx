import { Calendar, MapPin } from "lucide-react";
import richmondSeal from "@/assets/richmond-seal.png";
import qrCode from "@/assets/qr-code.png";

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

        {/* Date, Location & Stats */}
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
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white/60" />
          <span className="font-semibold whitespace-nowrap">30+ Teams</span>
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white/60" />
          <span className="font-semibold whitespace-nowrap">$15K+ Prizes</span>
        </div>

        {/* Richmond Seal */}
        <div className="flex justify-center">
          <img 
            src={richmondSeal} 
            alt="City of Richmond" 
            className="w-24 h-24 sm:w-32 sm:h-32 opacity-90"
          />
        </div>

        {/* QR Code & URL */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <img 
            src={qrCode}
            alt="Scan to visit hackforrva.org"
            className="w-20 h-20 sm:w-24 sm:h-24"
          />
          <p className="text-sm text-white/50 font-mono">
            hackforrva.org
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pitch;