import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-4">
            <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              About
            </Link>
            <Link to="/participate" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Participate
            </Link>
            <Link to="/partners" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Partners
            </Link>
          </div>
          <p className="text-primary-foreground/50">
            © 2025 Hack for RVA
          </p>
        </div>
      </div>
    </footer>
  );
};
