import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HomeCTAProps {
  onCTAClick: () => void;
}

export const HomeCTA = ({ onCTAClick }: HomeCTAProps) => {
  return (
    <section className="py-16 md:py-24 bg-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Ready to Build Something Real?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
            Join us March 27-29, 2026. Build solutions with a pathway to real civic impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Link to="/participate#register">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
              >
                Register Now
              </Button>
            </Link>
            <Button 
              onClick={onCTAClick}
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6"
            >
              Stay Updated
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

