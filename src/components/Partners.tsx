import costarLogo from "@/assets/costar-logo.png";
import richmondSeal from "@/assets/richmond-seal.png";

export const Partners = () => {
  const primaryPartners = [
    {
      name: "City of Richmond / Mayor's Office",
      subtitle:
        "Strategic priorities | Implementation pathway | City department champions",
      logo: richmondSeal,
    },
    {
      name: "CoStar Group",
      subtitle: "Venue & facilities | PropTech expertise | Employee mentors",
      logo: costarLogo,
    },
  ];

  return (
    <section id="partners" className="py-16 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Powered By Richmond
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A partnership between city government, industry leaders, and
              community
            </p>
          </div>

          {/* Primary Partners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {primaryPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-card p-6 md:p-8 rounded-xl shadow-elegant hover:shadow-hover transition-smooth border border-border group hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Logo */}
                <div className="h-20 md:h-24 bg-muted/40 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-smooth px-4">
                  {partner.logo ? (
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="max-h-16 w-auto object-contain"
                    />
                  ) : (
                    <span className="text-muted-foreground/60 group-hover:text-accent font-bold text-lg text-center">
                      {partner.name}
                    </span>
                  )}
                </div>
                {/* Subtitle */}
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {partner.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
