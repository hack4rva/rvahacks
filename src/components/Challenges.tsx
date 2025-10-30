import { Building2, Home, Users, Briefcase, Heart, TreePine, BookText } from "lucide-react";
import { useState } from "react";

const pillars = [
  {
    icon: Building2,
    title: "A Thriving City Hall",
    description: "We're transforming City Hall into a powerhouse that gets things done—delivering services efficiently, stewarding resources wisely, and earning your trust every single day.",
    goals: [
      "Do the basics better",
      "Keep standards high with continuous improvement",
      "Build pride with a strong shared vision",
      "Provide white glove service for all",
      "Boost resident satisfaction and trust",
      "Steward public resources responsibly"
    ],
    metrics: [
      "Lower employee turnover & vacancy rates",
      "Faster permit processing & business licenses",
      "More accurate tax bills, better bill payment",
      "Higher resident satisfaction with 311 & city services",
      "Better tax collection rates across the board"
    ]
  },
  {
    icon: Home,
    title: "Thriving Neighborhoods",
    description: "Building more homes for more people—from affordable housing to middle-income options—in safe neighborhoods packed with parks, pools, libraries, and amenities everyone deserves.",
    goals: [
      "Build more homes for more people",
      "Strengthen housing stability and fight evictions",
      "Connect neighborhoods to parks, pools & libraries",
      "Keep our neighborhoods safe and prepared"
    ],
    metrics: [
      "More new housing units, especially affordable ones",
      "Fewer cost-burdened households (paying >30% on housing)",
      "Reduced number of unhoused residents",
      "More visits to parks, libraries & rec facilities",
      "Faster response times to 911 calls"
    ]
  },
  {
    icon: Users,
    title: "Thriving Families",
    description: "Every child in Richmond deserves to thrive—in school and out. We're partnering with RPS to ensure kids graduate ready for success, with pathways to college, careers, and bright futures.",
    goals: [
      "Support RPS academic success",
      "Partner with schools for every child's future",
      "Get kids kindergarten-ready",
      "Connect youth to activities beyond the classroom",
      "Open doors after K-12 graduation",
      "Respond to families in crisis"
    ],
    metrics: [
      "More schools designated 'on track' or 'distinguished'",
      "Higher graduation rates & SOL performance",
      "More pre-K centers with on-site after-care",
      "More youth in after-school programs & athletics",
      "Higher % of grads entering college, service, or living-wage jobs"
    ]
  },
  {
    icon: Briefcase,
    title: "A Thriving Economy",
    description: "Growing jobs, cutting poverty, building wealth—especially for communities of color. Supporting small businesses, minority-owned enterprises, and creating a downtown where everyone wants to live, work, and play.",
    goals: [
      "Grow Richmond's economy with new jobs",
      "Connect people to jobs via transit & training",
      "Reduce poverty and build wealth",
      "Champion small & minority-owned businesses",
      "Build a vibrant downtown",
      "Invest in the Southside"
    ],
    metrics: [
      "More jobs added or retained through economic development",
      "Higher tax revenue from business activity",
      "Lower poverty levels across all races & ethnicities",
      "Higher homeownership rates, especially for communities of color",
      "More city spending with minority-owned businesses"
    ]
  },
  {
    icon: Heart,
    title: "Thriving and Inclusive Communities",
    description: "Protecting everyone's rights—immigrants, refugees, LGBTQ+ residents, women's reproductive freedom. Fighting racial inequities in health and wealth. Richmond is for everyone.",
    goals: [
      "Support immigrant communities",
      "Champion LGBTQ+ rights",
      "Defend reproductive freedom & maternal health",
      "Address racial inequities in health & wealth"
    ],
    metrics: [
      "Increased support services for immigrants & refugees",
      "Better protections for LGBTQ+ residents",
      "Improved maternal health outcomes",
      "Reduced racial disparities in health & economic well-being"
    ]
  },
  {
    icon: TreePine,
    title: "A Thriving and Sustainable Built Environment",
    description: "Racing toward net zero emissions with better transit, bike lanes, greener neighborhoods, and infrastructure built to last generations. RVAgreen 2050 is our roadmap to a sustainable future.",
    goals: [
      "Slash carbon emissions, aim for net zero",
      "Advance RVAgreen 2050 goals",
      "Partner with residents on environmental justice",
      "Build & maintain infrastructure for the future",
      "Make it easier to walk, roll, ride, or take the bus"
    ],
    metrics: [
      "Lower annual carbon emissions citywide",
      "Less flooding & better stormwater management",
      "Less waste going to landfills",
      "Better pavement & facility condition scores",
      "Higher GRTC ridership & more bike lane miles"
    ]
  },
  {
    icon: BookText,
    title: "A City That Tells its Stories",
    description: "Becoming a national model for truth-telling about our history—slavery, racism, and the courageous fight for justice. Using arts and culture to unite our diverse communities and share our humanity.",
    goals: [
      "Share Shockoe as a place for reckoning & repair",
      "Champion arts & culture storytelling",
      "Document Richmond's rich cultural history",
      "Help residents understand how City government works"
    ],
    metrics: [
      "Oral histories with veteran public servants",
      "Historical guides to Black empowerment & Civil Rights in RVA",
      "Participation in Virginia 250 commemorations",
      "More residents engaged with Richmond's cultural stories"
    ]
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
              <div className="relative p-6 lg:p-10 transition-smooth overflow-y-auto max-h-[600px]">
                {(() => {
                  const i = hoveredCard ?? 0;
                  const ActiveIcon = pillars[i].icon;
                  return (
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                          <ActiveIcon className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground">{pillars[i].title}</h3>
                      </div>
                      <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                        {pillars[i].description}
                      </p>
                      <div>
                        <h4 className="text-sm font-bold text-accent uppercase tracking-wide mb-3">Key Goals</h4>
                        <ul className="space-y-2">
                          {pillars[i].goals.map((goal, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                              <span className="text-accent mt-1">•</span>
                              <span>{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-accent uppercase tracking-wide mb-3">How We'll Measure Progress</h4>
                        <ul className="space-y-2">
                          {pillars[i].metrics.map((metric, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                              <span className="text-accent mt-1">✓</span>
                              <span>{metric}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-xl p-4 hover:border-accent/40 transition-smooth">
              <h4 className="text-base font-bold text-accent mb-2">Integrity</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We deal honestly with one another, welcome accountability, and are responsible for what we say and do.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 hover:border-accent/40 transition-smooth">
              <h4 className="text-base font-bold text-accent mb-2">Encouragement</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We create a positive, safe environment to work, learn, fail, improve, and serve together.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 hover:border-accent/40 transition-smooth">
              <h4 className="text-base font-bold text-accent mb-2">Excellence</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We focus on high standards of quality service delivery for our City, residents, businesses, and visitors.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 hover:border-accent/40 transition-smooth">
              <h4 className="text-base font-bold text-accent mb-2">Equity</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We commit to identifying and removing barriers while including all voices to build fair and just systems.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 hover:border-accent/40 transition-smooth">
              <h4 className="text-base font-bold text-accent mb-2">Partnership</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We collaborate and build up others, assuming positive intent. Better work gets done when we work together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
