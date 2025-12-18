import { 
  Users, 
  UserCircle, 
  Building2, 
  Mic2, 
  Database, 
  Headphones, 
  Megaphone, 
  Scale, 
  Rocket,
  Briefcase
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Role {
  title: string;
  responsibilities: string[];
  owner?: string;
}

interface RoleCategory {
  name: string;
  icon: React.ElementType;
  color: string;
  roles: Role[];
}

const roleCategories: RoleCategory[] = [
  {
    name: "Core Leadership",
    icon: UserCircle,
    color: "bg-yellow-100 text-yellow-700 border-yellow-200",
    roles: [
      {
        title: "Event Manager / \"Quarterback\"",
        responsibilities: [
          "Oversees run-of-show on event days",
          "Manages venue staff coordination",
          "Handles emergencies and real-time decisions",
          "Final decision-maker on logistics"
        ]
      },
      {
        title: "Sponsorship Lead",
        responsibilities: [
          "Secures award sponsorships ($15k+ target)",
          "Manages tiered sponsorship packages (Title, Track, Meal, In-Kind)",
          "Coordinates with sponsors on award rubrics",
          "Ensures sponsor benefits delivery (branding, judge seats, speaking slots)"
        ]
      },
      {
        title: "Judge Coordinator",
        responsibilities: [
          "Recruits diverse judging panel (technical experts, city officials, community advocates)",
          "Manages judge logistics (Sunday morning Zoom room)",
          "Ensures sponsors get their judging panel seats",
          "Coordinates rubric alignment across awards"
        ]
      }
    ]
  },
  {
    name: "Venue & Logistics",
    icon: Building2,
    color: "bg-blue-100 text-blue-700 border-blue-200",
    roles: [
      {
        title: "Science Museum Liaison",
        responsibilities: [
          "Primary contact with SMV Gottwald Center",
          "Manages stage setup for Friday kickoff & Sunday awards",
          "Coordinates catering sponsors (breakfast Friday, appetizers/drinks Sunday)",
          "Handles museum security and after-hours arrangements"
        ]
      },
      {
        title: "Satellite Location Coordinator",
        responsibilities: [
          "Formalizes relationships with all 15 satellite venues",
          "Creates and executes MOUs/agreements",
          "Vets WiFi, power, and technical infrastructure at each location",
          "Coordinates with venues along Pulse line"
        ]
      },
      {
        title: "24/7 Access Coordinator",
        responsibilities: [
          "Sets up VCU Library 24/7 access",
          "Sets up University of Richmond Library 24/7 access",
          "Manages overnight access protocols"
        ]
      }
    ]
  },
  {
    name: "Programming & Content",
    icon: Mic2,
    color: "bg-purple-100 text-purple-700 border-purple-200",
    roles: [
      {
        title: "Friday Programming Lead",
        responsibilities: [
          "Vets Science Museum rooms for breakout sessions",
          "Ensures AV and recording equipment setup in all rooms",
          "Manages recording/broadcasting of all Friday sessions",
          "Coordinates with mayor's office for opening session"
        ]
      },
      {
        title: "Subject Matter Expert Recruiter",
        responsibilities: [
          "Recruits speakers for 3 breakout tracks: Housing & Land Use, Education & Workforce Development, Transportation & Mobility",
          "Secures commitments and manages speaker logistics",
          "Ensures speakers understand their role in context-setting"
        ]
      },
      {
        title: "Data Ambassador Coordinator",
        responsibilities: [
          "Recruits 3 Data Ambassadors (one per challenge track)",
          "These are distinct from Friday speakers—available throughout hacking period",
          "Ensures they understand their role: explaining data meaning, preventing wrong problem-solving",
          "Manages their availability schedule"
        ]
      }
    ]
  },
  {
    name: "Support Infrastructure (Virtual Help Desks)",
    icon: Headphones,
    color: "bg-green-100 text-green-700 border-green-200",
    roles: [
      {
        title: "Design Lounge Lead",
        responsibilities: [
          "Recruits and staffs design experts (VCU Brandcenter students, etc.)",
          "Manages virtual room throughout event",
          "Creates schedule for design mentor availability"
        ]
      },
      {
        title: "Hacker Space Lead",
        responsibilities: [
          "Recruits and staffs software engineering experts",
          "Manages virtual room throughout event",
          "Creates schedule for technical mentor availability"
        ]
      },
      {
        title: "Business Room Lead",
        responsibilities: [
          "Recruits and staffs MBAs and startup experts",
          "Manages virtual room throughout event",
          "Creates schedule for business mentor availability"
        ]
      },
      {
        title: "Mentor Coordinator",
        responsibilities: [
          "Manages Discord/Slack Mentor Queue system",
          "Implements MentorQ bot or similar",
          "Assigns mentors to teams based on tech stack needs",
          "Prevents mentor overwhelm"
        ]
      }
    ]
  },
  {
    name: "Technology & Data",
    icon: Database,
    color: "bg-cyan-100 text-cyan-700 border-cyan-200",
    roles: [
      {
        title: "Technology Support Coordinator",
        responsibilities: [
          "Secures Lovable sponsorship",
          "Coordinates Amazon Cloud Credits",
          "Explores university partnerships for dev resources",
          "Manages cloud credit distribution system"
        ]
      },
      {
        title: "City Data Liaison",
        responsibilities: [
          "Works with City IT to obtain datasets",
          "Coordinates with RVA Eviction Lab (VCU)",
          "Obtains GRTC GTFS feeds and OMBD MBE/ESB Directory",
          "Pre-event data cleaning and preparation",
          "Creates published data catalog for participants"
        ]
      },
      {
        title: "Platform Administrator",
        responsibilities: [
          "Manages Devpost setup and configuration",
          "Manages GitHub organization (github.com/RVA-Civic-Tech)",
          "Sets up Discord/Slack workspace",
          "Implements mentor queue bot",
          "Conducts WiFi stress test 30 days prior",
          "Ensures hardline ethernet for presentation stage"
        ]
      }
    ]
  },
  {
    name: "Community & Communications",
    icon: Megaphone,
    color: "bg-orange-100 text-orange-700 border-orange-200",
    roles: [
      {
        title: "Volunteer Coordinator",
        responsibilities: [
          "Recruits volunteers via Discord/Slack",
          "Manages volunteer assignments (check-in, room monitors, runners)",
          "Coordinates with university ACM chapters",
          "Engages corporate ERGs (Black Tech Matters, Women in Tech, Pride groups)",
          "Works with HandsOn Greater Richmond"
        ]
      },
      {
        title: "Social Media Manager",
        responsibilities: [
          "Manages event promotion",
          "Creates content calendar",
          "Coordinates with AI Ready RVA on marketing",
          "Live coverage during event"
        ]
      },
      {
        title: "Registration Manager",
        responsibilities: [
          "Coordinates with AI Ready RVA on registration capacity",
          "Manages satellite location sign-up sheet",
          "Tracks capacity limits"
        ]
      }
    ]
  },
  {
    name: "Legal & Compliance",
    icon: Scale,
    color: "bg-red-100 text-red-700 border-red-200",
    roles: [
      {
        title: "Legal/Compliance Lead",
        responsibilities: [
          "Drafts participant agreements",
          "Creates code of conduct",
          "Develops event rules",
          "Manages IP policy (open source requirements)",
          "Secures general liability insurance",
          "Secures cyber liability insurance (~$1,740)",
          "Creates waiver for Mayor's Choice Award commitment"
        ]
      }
    ]
  },
  {
    name: "Post-Event & Sustainability",
    icon: Rocket,
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    roles: [
      {
        title: "Post-Event Sustainability Coordinator",
        responsibilities: [
          "Establishes partnership with Lighthouse Labs or City Office of Strategic Initiatives",
          "Designs 3-month civic accelerator for top teams",
          "Creates adoption pathways with government \"champions\"",
          "Manages Civic Tech Index website",
          "Coordinates documentation requirements (README standards)"
        ]
      },
      {
        title: "Nonprofit Partnership Coordinator",
        responsibilities: [
          "Recruits nonprofits to expose their needs/requirements",
          "Manages nonprofit project adoption model",
          "Coordinates with nonprofits who can't sponsor but can adopt solutions"
        ]
      },
      {
        title: "Corporate Recruitment Specialist",
        responsibilities: [
          "Targets VTO policies at CarMax, Capital One, Dominion Energy",
          "Recruits corporate mentors",
          "Manages corporate ERG outreach"
        ]
      }
    ]
  }
];

export const OrganizationalRoles = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Organizational Roles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              23 key roles that need ownership to make Hack for RVA a success. These are volunteer positions—reach out if you'd like to contribute.
            </p>
          </div>

          <Accordion type="multiple" className="space-y-4">
            {roleCategories.map((category, idx) => (
              <AccordionItem 
                key={idx} 
                value={`category-${idx}`}
                className="bg-card rounded-xl border border-border shadow-elegant overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${category.color.split(' ')[0]}`}>
                      <category.icon className={`w-5 h-5 ${category.color.split(' ')[1]}`} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-card-foreground">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.roles.length} role{category.roles.length > 1 ? 's' : ''}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid gap-4 pt-2">
                    {category.roles.map((role, roleIdx) => (
                      <Card key={roleIdx} className="border-border">
                        <CardContent className="pt-4">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <h4 className="font-semibold text-foreground">{role.title}</h4>
                            <Badge variant="outline" className="text-xs shrink-0">
                              {role.owner || "TBD"}
                            </Badge>
                          </div>
                          <ul className="space-y-1">
                            {role.responsibilities.map((resp, respIdx) => (
                              <li key={respIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-accent mt-1.5">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Interested in taking on a role? We're looking for passionate volunteers.
            </p>
            <Badge className="bg-accent text-accent-foreground text-sm py-2 px-4">
              Contact us at hello@hackforrva.org
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};