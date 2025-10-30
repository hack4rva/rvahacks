import { Building2, Home, Users, Briefcase, Heart, TreePine, BookText } from "lucide-react";
import { useState } from "react";

const pillars = [
  {
    icon: Building2,
    title: "A Thriving City Hall",
    description: "Transform Richmond's local government into a model public-sector organization that stewards resources effectively, meets community needs, and builds trust with residents and partners.",
  },
  {
    icon: Home,
    title: "Thriving Neighborhoods",
    description: "Meet the housing needs of a growing city, so that Richmonders across different income levels can access affordable housing in safe neighborhoods with strong public amenities.",
  },
  {
    icon: Users,
    title: "Thriving Families",
    description: "Support the education, health, and development of children and families — in and out of the classroom — so that students graduate from Richmond Public Schools well-prepared for success and connected to opportunities for further learning and career development.",
  },
  {
    icon: Briefcase,
    title: "A Thriving Economy",
    description: "Grow Richmond's economy by adding jobs, increasing tax revenue, and attracting capital investments. Connect people to jobs through transit and City initiatives. Reduce poverty, increase homeownership, and build wealth—especially for communities of color. Support small, minority-owned, and women-owned businesses. Build a vibrant downtown and invest in the Southside with new housing and neighborhood amenities.",
  },
  {
    icon: Heart,
    title: "Thriving and Inclusive Communities",
    description: "Protect everyone's rights — specifically the rights of immigrants and refugees, LGBTQ+ residents, other politically targeted groups, and the reproductive rights of women. Work to redress long-standing racial inequities in health and well-being.",
  },
  {
    icon: TreePine,
    title: "A Thriving and Sustainable Built Environment",
    description: "Support continued progress on the execution of the RVAgreen 2050 comprehensive plan. Shift toward a net zero greenhouse emission local economy through improved public and multimodal transportation, strong stewardship of our natural resources, greening neglected neighborhoods, and a strong commitment to sustainability across all departments.",
  },
  {
    icon: BookText,
    title: "A City That Tells its Stories",
    description: "Make Richmond a national model for telling the truth about its own history — including slavery, racism, and struggles for Black empowerment since the City's founding. Use the arts as a vehicle for telling these stories and for strengthening connections across the different cultures found in our city.",
  },
];

export const Challenges = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="challenges" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Danny's Action Plan
          </h2>
          <p className="text-xl text-foreground font-semibold leading-relaxed mb-4">
            Mayor Avula didn't just want to talk about ideas—he set a clear vision for the city we can build together. 
            The Mayoral Action Plan (MAP) is our roadmap: specific goals, measurable progress, and a shared commitment to make Richmond thrive for everyone.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            All civic challenges are aligned with the 7 Pillars of Mayor Avula's Action Plan. 
            We're focusing on what matters most to Richmond's future.
          </p>
          <a 
            href="https://rva.gov/press-releases-and-announcements/news/mayor-danny-avula-launches-mayoral-action-plan-map"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-smooth underline"
          >
            Read the Full Action Plan →
          </a>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-3">
            {pillars.map((pillar, index) => {
              const isActive = hoveredCard === index;
              return (
                <button
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onFocus={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`w-full text-left rounded-xl border transition-smooth bg-card/90 backdrop-blur-sm ${
                    isActive ? 'border-accent shadow-hover' : 'border-border hover:border-accent/40'
                  }`}
                >
                  <div className="flex items-center gap-3 p-4">
                    <div className={`rounded-lg bg-accent/10 flex items-center justify-center transition-smooth ${
                      isActive ? 'w-12 h-12' : 'w-10 h-10'
                    }`}>
                      <pillar.icon className={`text-accent ${isActive ? 'w-6 h-6' : 'w-5 h-5'}`} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-card-foreground font-bold">{pillar.title}</h3>
                      <p className="text-muted-foreground text-sm truncate">{pillar.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="lg:col-span-7">
            <div className="relative h-full rounded-2xl border border-border bg-card shadow-elegant overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
              <div className="relative p-6 lg:p-10 transition-smooth">
                {(() => {
                  const i = hoveredCard ?? 0;
                  const ActiveIcon = pillars[i].icon;
                  return (
                    <div className="space-y-5">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center">
                          <ActiveIcon className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground">{pillars[i].title}</h3>
                      </div>
                      <p className="text-muted-foreground text-base lg:text-lg">
                        {pillars[i].description}
                      </p>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 mb-16">
          <p className="text-muted-foreground">
            Specific challenge details will be announced closer to the event, aligned with these pillars.
          </p>
        </div>

        {/* Values Section */}
        <div className="max-w-5xl mx-auto mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-smooth">
              <h4 className="text-lg font-bold text-accent mb-3">Integrity</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We deal honestly with one another, welcome accountability, and are responsible for what we say and do.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-smooth">
              <h4 className="text-lg font-bold text-accent mb-3">Encouragement</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We create a positive, safe environment to work, learn, fail, improve, and serve together.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-smooth">
              <h4 className="text-lg font-bold text-accent mb-3">Excellence</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We focus on high standards of quality service delivery for our City, residents, businesses, and visitors.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-smooth">
              <h4 className="text-lg font-bold text-accent mb-3">Equity</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We commit to identifying and removing barriers while including all voices to build fair and just systems.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-smooth">
              <h4 className="text-lg font-bold text-accent mb-3">Partnership</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We collaborate and build up others, assuming positive intent. Better work gets done when we work together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
