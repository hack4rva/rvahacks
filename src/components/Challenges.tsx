import { Briefcase } from "lucide-react";

const track = {
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
};

export const Challenges = () => {
  return (
    <section id="action-plan" className="py-16 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Building a Thriving Economy
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-4 max-w-3xl mx-auto">
            This Track from Mayor Danny Avula's Action Plan focuses on economic growth, poverty reduction, and wealth building for all Richmonders.
          </p>
          <div className="text-center mb-12">
            <a 
              href="https://dannyavula.com/our-action-plan-for-richmond" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
            >
              View Full Action Plan →
            </a>
          </div>

          {/* Single track display */}
          <div className="bg-card border border-accent rounded-xl p-8 shadow-glow animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-12 h-12 text-accent" />
              <h3 className="text-3xl font-bold text-foreground">
                {track.title}
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              {track.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-accent">→</span> Goals
                </h4>
                <ul className="space-y-3">
                  {track.goals.map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/50 hover:border-accent/50 transition-colors">
                      <span className="text-accent font-bold text-lg">•</span>
                      <span className="text-muted-foreground">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-accent">📊</span> Key Metrics
                </h4>
                <ul className="space-y-3">
                  {track.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/50 hover:border-accent/50 transition-colors">
                      <span className="text-accent font-bold text-lg">•</span>
                      <span className="text-muted-foreground">{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
              Our Values
            </h3>
            <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              These guiding principles shape how we work together and serve our community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="bg-card border border-border rounded-lg p-3 hover:border-accent/40 transition-smooth">
                <h4 className="text-sm font-bold text-accent mb-1">Integrity</h4>
                <p className="text-xs text-muted-foreground leading-snug">
                  We deal honestly with one another, welcome accountability, and are responsible for what we say and do.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-3 hover:border-accent/40 transition-smooth">
                <h4 className="text-sm font-bold text-accent mb-1">Encouragement</h4>
                <p className="text-xs text-muted-foreground leading-snug">
                  We create a positive, safe environment to work, learn, fail, improve, and serve together.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-3 hover:border-accent/40 transition-smooth">
                <h4 className="text-sm font-bold text-accent mb-1">Excellence</h4>
                <p className="text-xs text-muted-foreground leading-snug">
                  We focus on high standards of quality service delivery for our City, residents, businesses, and visitors.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-3 hover:border-accent/40 transition-smooth">
                <h4 className="text-sm font-bold text-accent mb-1">Equity</h4>
                <p className="text-xs text-muted-foreground leading-snug">
                  We commit to identifying and removing barriers while including all voices to build fair and just systems.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-3 hover:border-accent/40 transition-smooth">
                <h4 className="text-sm font-bold text-accent mb-1">Partnership</h4>
                <p className="text-xs text-muted-foreground leading-snug">
                  We collaborate and build up others, assuming positive intent. Better work gets done when we work together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
