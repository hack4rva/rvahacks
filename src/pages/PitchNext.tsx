import { Calendar, MapPin, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import richmondSeal from "@/assets/richmond-seal.png";
import qrCode from "@/assets/qr-hackforrva-transparent.png";

const PitchNext = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-accent flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
      {/* Back button - bottom left corner */}
      <Link 
        to="/pitch"
        className="absolute bottom-6 left-6 p-3 text-white/40 hover:text-white/80 hover:bg-white/10 rounded-full transition-all z-20"
      >
        <ChevronLeft className="w-8 h-8" />
      </Link>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Header */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Join Us
        </h1>

        {/* QR Code - Large and prominent */}
        <div className="bg-white/95 p-6 rounded-2xl shadow-2xl mb-8">
          <img 
            src={qrCode}
            alt="Scan to visit hackforrva.org"
            className="w-48 h-48 sm:w-64 sm:h-64"
          />
        </div>

        {/* URL */}
        <p className="text-2xl sm:text-3xl text-white font-mono font-bold mb-8">
          hackforrva.org
        </p>

        {/* Event details */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 text-lg sm:text-xl text-white/80">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span className="font-semibold">March 27–29, 2026</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Richmond, VA</span>
          </div>
        </div>

        {/* Richmond Seal */}
        <img 
          src={richmondSeal} 
          alt="City of Richmond" 
          className="w-20 h-20 opacity-80"
        />
      </div>
    </div>
  );
};

export default PitchNext;
