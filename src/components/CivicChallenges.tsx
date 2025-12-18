import { Home, GraduationCap, Bus, FileCode, AlertTriangle, TrendingUp, MapPin, Building2, Briefcase, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const challengeTracks = [
  {
    id: "housing",
    icon: Home,
    title: "Housing & Land Use",
    tagline: "Addressing Richmond's housing crisis with data-driven solutions",
    badge: "Track 1",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    dataAmbassador: "TBD - Housing Policy Expert",
    projects: [
      {
        name: "Serial Filer Dashboard",
        description: "Cross-reference evictors with property records to identify patterns and support tenant advocacy.",
        dataNeeds: ["RVA Eviction Lab data", "Virginia Evictors Catalog", "City property records"]
      },
      {
        name: "Displacement Early Warning System",
        description: "Track eviction spikes and rent increases to identify neighborhoods at risk before displacement occurs.",
        dataNeeds: ["Eviction filings", "Rental market data", "Census demographics"]
      },
      {
        name: "Tenant Rights Chatbot",
        description: "Help tenants understand their rights with deadline calculators, document templates, and next-step guidance.",
        dataNeeds: ["Virginia tenant law", "Court procedures", "Legal aid resources"]
      }
    ]
  },
  {
    id: "workforce",
    icon: GraduationCap,
    title: "Education & Workforce Development",
    tagline: "Building pathways to economic opportunity for all Richmonders",
    badge: "Track 2",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    dataAmbassador: "TBD - Workforce Development Expert",
    projects: [
      {
        name: "Procurement Equity Analyzer",
        description: "Compare City spending against MBE directory to identify gaps and opportunities for minority businesses.",
        dataNeeds: ["City procurement data", "OMBD MBE/ESB Directory", "Business licenses"]
      },
      {
        name: "Commercial Corridor Health Tracker",
        description: "Monitor vacancy rates, business turnover, and investment patterns in key commercial corridors.",
        dataNeeds: ["Business licenses", "Property data", "311 requests"]
      },
      {
        name: "Workforce Center Accessibility Mapper",
        description: "Show transit access and service availability for Richmond's workforce centers by neighborhood.",
        dataNeeds: ["Virginia Works LMI", "GRTC routes", "Census data"]
      }
    ]
  },
  {
    id: "transportation",
    icon: Bus,
    title: "Transportation & Mobility",
    tagline: "Making Richmond more connected and accessible",
    badge: "Track 3",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
    dataAmbassador: "TBD - Transit Planning Expert",
    projects: [
      {
        name: "Ghost Bus Buster",
        description: "Analyze GTFS data to identify scheduled buses that don't arrive and improve service reliability.",
        dataNeeds: ["GRTC GTFS static feed", "GRTC GTFS real-time feed", "Service alerts"]
      },
      {
        name: "Job Access Isochrones",
        description: "Compare transit vs. car accessibility to major employment centers, visualizing the mobility gap.",
        dataNeeds: ["GRTC routes", "Employment data", "Census commute patterns"]
      },
      {
        name: "Micro-transit Integration",
        description: "Design better connections between GRTC fixed routes and LINK on-demand service.",
        dataNeeds: ["GRTC schedules", "LINK service areas", "Ridership patterns"]
      }
    ]
  }
];

export const CivicChallenges = () => {
  return (
    <section id="civic-challenges" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Challenge Tracks
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Three focused tracks with specific project ideas. Each track has a Data Ambassador to help teams understand context and avoid "solving the wrong problem."
            </p>
          </div>

          {/* Data Ambassador Callout */}
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Data Ambassadors</h3>
                <p className="text-sm text-muted-foreground">
                  Each track has a dedicated Data Ambassador—a subject matter expert who explains what the data means, provides context on city systems, and helps teams avoid common pitfalls. They're available throughout the hacking period, distinct from technical mentors.
                </p>
              </div>
            </div>
          </div>

          {/* Challenge Tracks */}
          <Accordion type="single" collapsible className="space-y-6">
            {challengeTracks.map((track) => (
              <AccordionItem 
                key={track.id} 
                value={track.id}
                className="bg-card rounded-xl border border-border shadow-elegant overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline">
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <track.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left flex-1">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border ${track.badgeColor} mb-1`}>
                        {track.badge}
                      </span>
                      <h3 className="text-xl font-bold text-card-foreground">{track.title}</h3>
                      <p className="text-sm text-muted-foreground">{track.tagline}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pt-4 border-t border-border">
                    {/* Data Ambassador */}
                    <div className="bg-muted/50 rounded-lg p-3 mb-6">
                      <p className="text-sm">
                        <strong className="text-foreground">Data Ambassador:</strong>{" "}
                        <span className="text-muted-foreground">{track.dataAmbassador}</span>
                      </p>
                    </div>

                    {/* Project Ideas */}
                    <h4 className="font-semibold text-foreground mb-4">Project Ideas</h4>
                    <div className="space-y-4">
                      {track.projects.map((project, idx) => (
                        <div key={idx} className="bg-secondary/5 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <FileCode className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <div>
                              <h5 className="font-semibold text-foreground mb-1">{project.name}</h5>
                              <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                              <div className="flex flex-wrap gap-1">
                                {project.dataNeeds.map((data, i) => (
                                  <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                                    {data}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Bottom Note */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground font-medium">
              Teams can propose their own projects within these tracks or combine elements across tracks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};