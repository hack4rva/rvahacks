export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Bottom Bar */}
        <div>
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
