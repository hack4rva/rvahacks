import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "What", href: "/#what" },
  { label: "Why", href: "/#prizes" },
  { label: "How", href: "/#how" },
  { label: "When", href: "/#format" },
  { label: "Partners", href: "/#partners" },
  { label: "FAQ", href: "/#faq" },
  { label: "Who", href: "/team" },
  { label: "Action Plan", href: "/action-plan" },
];

interface NavigationProps {
  onCTAClick: () => void;
}

export const Navigation = ({ onCTAClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-smooth font-medium focus:outline-2 focus:outline-accent"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={onCTAClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elegant"
              aria-label="Sign up to stay updated"
            >
              Stay Updated
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border" role="navigation" aria-label="Mobile navigation">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-foreground/80 hover:text-primary transition-smooth font-medium py-2 focus:outline-2 focus:outline-accent"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => {
                onCTAClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              aria-label="Sign up to stay updated"
            >
              Stay Updated
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
