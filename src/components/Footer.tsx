import { Mail, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Hack<span className="text-accent">RVA</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Richmond's civic hackathon bringing together innovators to build
              solutions for our city.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#challenges"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  Challenges
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:info@hackforrva.org"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <Mail size={16} />
                info@hackforrva.org
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} Hack for RVA. Made with ❤️ in Richmond,
            Virginia.
          </p>
        </div>
      </div>
    </footer>
  );
};
