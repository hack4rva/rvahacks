export const Partners = () => {
  return (
    <section id="partners" className="py-20 md:py-32 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Partners
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Hack for RVA is made possible through the generous support of our
            partners who share our vision for a better Richmond.
          </p>
        </div>

        {/* Venue Partner Highlight */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-elegant border border-border text-center">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Venue Partner
            </h3>
            <div className="text-4xl font-bold text-primary mb-2">CoStar</div>
            <p className="text-muted-foreground">
              Proud to host Hack for RVA at CoStar Headquarters in Richmond
            </p>
          </div>
        </div>

        {/* Partner Logos Grid - Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-40 h-24 bg-muted rounded-lg flex items-center justify-center"
              >
                <span className="text-muted-foreground font-medium">
                  Partner Logo
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            Interested in partnering with us?
          </p>
          <a
            href="mailto:sponsors@hackforrva.org"
            className="text-primary hover:text-primary-light font-semibold transition-smooth underline"
          >
            sponsors@hackforrva.org
          </a>
        </div>
      </div>
    </section>
  );
};
