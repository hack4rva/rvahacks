import costarLogo from "@/assets/costar-logo.png";

export const Partners = () => {
  const primaryPartners = [
    {
      name: "City of Richmond / Mayor's Office",
      subtitle:
        "Strategic priorities | Implementation pathway | City department champions",
      logo: null,
    },
    {
      name: "CoStar Group",
      subtitle: "Venue & facilities | PropTech expertise | Employee mentors",
      logo: costarLogo,
    },
    {
      name: "Richmond Technology Council",
      subtitle: "Community outreach | Tech mentorship | Event operations",
      logo: null,
    },
  ];

  const targetPartners = [
    "Dominion Energy",
    "CarMax",
    "Capital One",
    "VCU",
    "Venture Richmond",
  ];

  return (
    <section id="partners" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Powered By Richmond
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A partnership between city government, industry leaders, and
              community
            </p>
          </div>

          {/* Primary Partners */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-foreground mb-8 text-center">
              Primary Partners
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {primaryPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-xl shadow-elegant hover:shadow-hover transition-smooth border border-border group"
                >
                  {/* Logo */}
                  <div className="h-24 bg-muted/40 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-smooth px-4">
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

          {/* Target Partners */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-foreground mb-8 text-center">
              In Conversation With
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {targetPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-sm border border-border hover:border-accent/30 transition-smooth group"
                >
                  <div className="h-20 bg-muted/30 rounded flex items-center justify-center group-hover:bg-accent/10 transition-smooth">
                    <span className="text-muted-foreground/50 group-hover:text-accent font-semibold text-sm text-center px-2">
                      {partner}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 space-y-4">
            <p className="text-lg text-muted-foreground mb-6">
              Interested in partnering with us?
            </p>
            <a
              href="mailto:sponsors@hackforrva.org"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-elegant hover:shadow-hover transition-smooth"
            >
              Become a Partner
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              Email: sponsors@hackforrva.org
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
