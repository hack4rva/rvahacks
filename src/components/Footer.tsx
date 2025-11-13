export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-4">
          <a 
            href="/code-of-conduct"
            className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth underline"
          >
            Code of Conduct
          </a>
          <p className="text-sm text-primary-foreground/60">
            © 2025 Hack for RVA
          </p>
        </div>
      </div>
    </footer>
  );
};
