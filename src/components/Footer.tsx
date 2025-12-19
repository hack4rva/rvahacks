import { Link } from "react-router-dom";

const footerLinks = {
  event: [
    { label: "About", href: "/about" },
    { label: "Schedule", href: "/about#schedule" },
    { label: "Prizes", href: "/about#prizes" },
    { label: "FAQ", href: "/about#faq" },
  ],
  participate: [
    { label: "Logistics", href: "/participate#logistics" },
    { label: "Preparation", href: "/participate#preparation" },
    { label: "Resources", href: "/participate#resources" },
  ],
  getInvolved: [
    { label: "Sponsor", href: "/partners" },
    { label: "Mentor", href: "/partners" },
    { label: "Volunteer", href: "/partners" },
  ],
  organization: [
    { label: "Team", href: "/team" },
    { label: "Action Plan", href: "/action-plan" },
    { label: "Code of Conduct", href: "/code-of-conduct" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Event Info */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Event Info</h4>
            <ul className="space-y-2">
              {footerLinks.event.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Participate */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Participate</h4>
            <ul className="space-y-2">
              {footerLinks.participate.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Get Involved</h4>
            <ul className="space-y-2">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Organization</h4>
            <ul className="space-y-2">
              {footerLinks.organization.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2025 Hack for RVA. A citywide civic hackathon for Richmond, Virginia.
          </p>
          <div className="flex gap-4 text-sm text-primary-foreground/60">
            <Link to="/code-of-conduct" className="hover:text-primary-foreground transition-smooth">
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
