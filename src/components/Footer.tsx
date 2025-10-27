import { MapPin } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Challenges", href: "#civic-challenges" },
  { label: "Partners", href: "#partners" },
  { label: "FAQ", href: "#faq" },
  { label: "Become a Sponsor", href: "mailto:sponsors@hackforrva.org" },
  { label: "Code of Conduct", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Hack for RVA */}
          <div>
            <div className="text-xl font-bold mb-4">
              Hack for RVA 2026 | Richmond's Civic Hackathon
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4 leading-relaxed">
              Let's engineer the city we want to live in.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Event Details */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Event Details</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <p>
                <strong className="text-primary-foreground block mb-1">
                  March 6-8, 2026
                </strong>
              </p>
              <p>
                <strong className="text-primary-foreground block mb-1">
                  CoStar Headquarters
                </strong>
                Richmond, VA
              </p>
              <a
                href="#"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <MapPin size={16} />
                View Map
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60 text-center md:text-left">
              © 2025 Hack for RVA. A partnership between City of Richmond,
              CoStar Group, and Richmond Technology Council.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-accent transition-smooth"
              >
                Privacy Policy
              </a>
              <span className="text-primary-foreground/40">|</span>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-accent transition-smooth"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
