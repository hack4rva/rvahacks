import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link 
              to="/registration"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
            >
              Register
            </Link>
            <Link 
              to="/get-involved"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
            >
              Get Involved
            </Link>
            <Link 
              to="/code-of-conduct"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
            >
              Code of Conduct
            </Link>
            <Link 
              to="/logistics"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
            >
              Logistics
            </Link>
            <Link 
              to="/preparation"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
            >
              Preparation
            </Link>
          </div>
          
          <p className="text-sm text-primary-foreground/60">
            © 2025 Hack for RVA
          </p>
        </div>
      </div>
    </footer>
  );
};
