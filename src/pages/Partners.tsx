import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion } from "@/components/ui/accordion";
import { awardTiers, prizePoolTotal } from "@/data";
import { 
  Code, Palette, Briefcase, Landmark, 
  Heart, Award, Clock, Trophy,
  MapPin, Users, Check, 
  Sparkles, Calendar, ArrowRight, Building2, ClipboardCheck,
  Star, Mic, BadgeCheck
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import richmondSeal from "@/assets/richmond-seal.png";
import scienceMuseumLogo from "@/assets/science-museum-virginia.png";
import aiReadyRvaLogo from "@/assets/ai-ready-rva-logo.png";
import { 
  PillarEcosystemAccordion, 
  RoleCategoryAccordion,
} from "@/components/volunteers";
import {
  preEventRoles,
  fridayRoles,
  saturdaySiteRoles,
  saturdayVirtualRoles,
  sundayRoles,
  supportRoles,
} from "@/data/volunteerRoles";

const institutionalPartners = [
  {
    name: "City of Richmond / Mayor's Office",
    subtitle: "Strategic priorities | Implementation pathway | City department champions",
    logo: richmondSeal,
  },
  {
    name: "Science Museum of Virginia",
    subtitle: "Venue Sponsor | Sunday Finals & Awards Ceremony",
    logo: scienceMuseumLogo,
  },
  {
    name: "AI Ready RVA",
    subtitle: "Fiscal Sponsor | Financial oversight | Legal structure | Grant administration",
    logo: aiReadyRvaLogo,
  },
];

// Sponsorship opportunities with status
type SponsorshipOpportunity = {
  id: string;
  title: string;
  category: "award" | "event" | "inkind";
  amount?: string;
  description: string;
  claimedBy?: string;
  icon: React.ReactNode;
  color: string;
};

// Featured sponsorship packages
type SponsorshipPackage = {
  id: string;
  title: string;
  amount: string;
  tagline: string;
  benefits: string[];
  featured?: boolean;
  claimedBy?: string;
};

const sponsorshipPackages: SponsorshipPackage[] = [
  {
    id: "title-sponsor",
    title: "Title Sponsor",
    amount: "$10,000",
    tagline: "Hack for RVA, Presented by [Your Company]",
    featured: true,
    benefits: [
      "Naming rights on all materials, signage, website & press",
      "Speaking slot at Opening Ceremony (300+ attendees)",
      "VIP judging panel seat for final presentations",
      "Dedicated recruitment table all weekend",
      "Logo on website, t-shirts, badges & all printed materials",
      "Named as Title Sponsor in all press releases",
      "Featured sponsor across all social media channels",
    ],
  },
  {
    id: "kickoff-sponsor",
    title: "Friday Kick-Off Sponsor",
    amount: "$5,000",
    tagline: "Friday Kick-Off & Breakfast, Sponsored by [Your Company]",
    benefits: [
      "Speaking slot Friday morning (3-5 min, 300+ attendees)",
      "VIP judging role for final presentations",
      "Branded breakfast experience for 300+ hackers",
      "Signage & table tents throughout the venue",
      "Logo on website, event signage & printed materials",
      "Recruitment access to 300+ tech professionals",
      "Featured social media posts as Kick-Off Sponsor",
    ],
  },
  {
    id: "sunday-brunch-sponsor",
    title: "Sunday Brunch & Awards Sponsor",
    amount: "$5,000",
    tagline: "Sunday Finals & Awards Brunch, Sponsored by [Your Company]",
    benefits: [
      "Speaking slot at Sunday finals ceremony",
      "VIP judging role for final presentations",
      "Branded brunch experience for finalists & guests",
      "Prime signage at Science Museum of Virginia",
      "Logo on website, event signage & printed materials",
      "Photo opportunities with winning teams",
      "Featured social media posts as Awards Sponsor",
    ],
  },
  {
    id: "peoples-choice-sponsor",
    title: "People's Choice Award",
    amount: "$2,500",
    tagline: "The [Your Company] People's Choice Award — voted by the community",
    benefits: [
      "Named award: 'The [Company] People's Choice Award'",
      "Present the award on stage at Sunday finals",
      "Logo featured on voting materials & ballot",
      "Judging seat for final presentations",
      "Logo on website, signage & event materials",
      "Social media recognition as award sponsor",
      "Direct engagement with winning team",
    ],
  },
  {
    id: "judges-choice-sponsor",
    title: "Judges' Choice Award",
    amount: "$2,500",
    tagline: "The [Your Company] Judges' Choice Award — excellence recognized by experts",
    benefits: [
      "Named award: 'The [Company] Judges' Choice Award'",
      "Present the award on stage at Sunday finals",
      "VIP seat on the judging panel",
      "Logo featured on all judging materials",
      "Logo on website, signage & event materials",
      "Social media recognition as award sponsor",
      "Direct engagement with winning team",
    ],
  },
  {
    id: "coffee-sponsor",
    title: "Coffee & Energy Sponsor",
    amount: "$1,000",
    tagline: "Keeping RVA caffeinated — Coffee by [Your Company]",
    benefits: [
      "Brand on all coffee stations all weekend",
      "Custom branded cups or signage",
      "Logo on website & event materials",
      "Social media recognition",
      "Constant visibility throughout event",
      "Perfect for food/beverage brands or local roasters",
    ],
  },
];

const sponsorshipOpportunities: SponsorshipOpportunity[] = [
  // Awards
  { id: "grand-prize", title: "Grand Prize", category: "award", amount: "$5,000", description: "Top overall solution", claimedBy: undefined, icon: <Trophy className="w-5 h-5" />, color: "yellow" },
  { id: "peoples-choice", title: "People's Choice", category: "award", amount: "$2,500", description: "Community-voted favorite", claimedBy: undefined, icon: <Heart className="w-5 h-5" />, color: "pink" },
  { id: "judges-choice", title: "Judges' Choice", category: "award", amount: "$2,500", description: "Panel-selected excellence", claimedBy: undefined, icon: <Award className="w-5 h-5" />, color: "violet" },
  { id: "track-1", title: "Track 1: City Hall", category: "award", amount: "$1,000", description: "Best government efficiency solution", claimedBy: undefined, icon: <Award className="w-5 h-5" />, color: "blue" },
  { id: "track-2", title: "Track 2: Neighborhoods", category: "award", amount: "$1,000", description: "Best housing/neighborhood solution", claimedBy: undefined, icon: <Award className="w-5 h-5" />, color: "blue" },
  { id: "track-3", title: "Track 3: Families", category: "award", amount: "$1,000", description: "Best education/youth solution", claimedBy: undefined, icon: <Award className="w-5 h-5" />, color: "blue" },
  { id: "track-4", title: "Track 4: Economy", category: "award", amount: "$1,000", description: "Best workforce/business solution", claimedBy: undefined, icon: <Award className="w-5 h-5" />, color: "blue" },
  { id: "track-5", title: "Track 5: Communities", category: "award", amount: "$1,000", description: "Best inclusion solution", claimedBy: undefined, icon: <Award className="w-5 h-5" />, color: "blue" },
  { id: "track-6", title: "Track 6: Environment", category: "award", amount: "$1,000", description: "Best sustainability solution", claimedBy: undefined, icon: <Award className="w-5 h-5" />, color: "blue" },
  { id: "track-7", title: "Track 7: City Stories", category: "award", amount: "$1,000", description: "Best historical/cultural solution", claimedBy: undefined, icon: <Award className="w-5 h-5" />, color: "blue" },
  // In-kind: Cloud & Media
  { id: "cloud-credits", title: "Cloud Credits", category: "inkind", description: "AWS, Azure, or GCP credits for teams", claimedBy: undefined, icon: <Code className="w-5 h-5" />, color: "accent" },
  { id: "photo-video", title: "Photography & Video", category: "inkind", description: "Professional documentation of the event", claimedBy: undefined, icon: <Sparkles className="w-5 h-5" />, color: "accent" },
  // In-kind: All-Night Hacking Venues (Universities)
  { id: "venue-ur", title: "University of Richmond", category: "inkind", description: "All-night hacking venue • Fri 6PM – Sun 9AM", claimedBy: undefined, icon: <Building2 className="w-5 h-5" />, color: "accent" },
  { id: "venue-vuu", title: "Virginia Union University", category: "inkind", description: "All-night hacking venue • Fri 6PM – Sun 9AM", claimedBy: undefined, icon: <Building2 className="w-5 h-5" />, color: "accent" },
  { id: "venue-vcu", title: "Virginia Commonwealth University", category: "inkind", description: "All-night hacking venue • Fri 6PM – Sun 9AM", claimedBy: undefined, icon: <Building2 className="w-5 h-5" />, color: "accent" },
  // In-kind: Hack-Friendly Locations (15 spots for single teams)
  { id: "team-venue-1", title: "Team Venue #1", category: "inkind", description: "Host 1 team • Fri 12–4:30PM, Sat 9AM–4:30PM", claimedBy: undefined, icon: <MapPin className="w-5 h-5" />, color: "accent" },
  { id: "team-venue-2", title: "Team Venue #2", category: "inkind", description: "Host 1 team • Fri 12–4:30PM, Sat 9AM–4:30PM", claimedBy: undefined, icon: <MapPin className="w-5 h-5" />, color: "accent" },
  { id: "team-venue-3", title: "Team Venue #3", category: "inkind", description: "Host 1 team • Fri 12–4:30PM, Sat 9AM–4:30PM", claimedBy: undefined, icon: <MapPin className="w-5 h-5" />, color: "accent" },
  { id: "team-venue-4", title: "Team Venue #4", category: "inkind", description: "Host 1 team • Fri 12–4:30PM, Sat 9AM–4:30PM", claimedBy: undefined, icon: <MapPin className="w-5 h-5" />, color: "accent" },
  { id: "team-venue-5", title: "Team Venue #5", category: "inkind", description: "Host 1 team • Fri 12–4:30PM, Sat 9AM–4:30PM", claimedBy: undefined, icon: <MapPin className="w-5 h-5" />, color: "accent" },
  { id: "team-venue-6", title: "Team Venue #6", category: "inkind", description: "Host 1 team • Fri 12–4:30PM, Sat 9AM–4:30PM", claimedBy: undefined, icon: <MapPin className="w-5 h-5" />, color: "accent" },
  { id: "team-venue-7", title: "Team Venue #7", category: "inkind", description: "Host 1 team • Fri 12–4:30PM, Sat 9AM–4:30PM", claimedBy: undefined, icon: <MapPin className="w-5 h-5" />, color: "accent" },
  { id: "team-venue-8", title: "Team Venue #8", category: "inkind", description: "Host 1 team • Fri 12–4:30PM, Sat 9AM–4:30PM", claimedBy: undefined, icon: <MapPin className="w-5 h-5" />, color: "accent" },
  { id: "team-venue-9", title: "Team Venue #9", category: "inkind", description: "Host 1 team • Fri 12–4:30PM, Sat 9AM–4:30PM", claimedBy: undefined, icon: <MapPin className="w-5 h-5" />, color: "accent" },
  { id: "team-venue-10", title: "Team Venue #10", category: "inkind", description: "Host 1 team • Fri 12–4:30PM, Sat 9AM–4:30PM", claimedBy: undefined, icon: <MapPin className="w-5 h-5" />, color: "accent" },
  { id: "team-venue-11", title: "Team Venue #11", category: "inkind", description: "Host 1 team • Fri 12–4:30PM, Sat 9AM–4:30PM", claimedBy: undefined, icon: <MapPin className="w-5 h-5" />, color: "accent" },
  { id: "team-venue-12", title: "Team Venue #12", category: "inkind", description: "Host 1 team • Fri 12–4:30PM, Sat 9AM–4:30PM", claimedBy: undefined, icon: <MapPin className="w-5 h-5" />, color: "accent" },
  { id: "team-venue-13", title: "Team Venue #13", category: "inkind", description: "Host 1 team • Fri 12–4:30PM, Sat 9AM–4:30PM", claimedBy: undefined, icon: <MapPin className="w-5 h-5" />, color: "accent" },
  { id: "team-venue-14", title: "Team Venue #14", category: "inkind", description: "Host 1 team • Fri 12–4:30PM, Sat 9AM–4:30PM", claimedBy: undefined, icon: <MapPin className="w-5 h-5" />, color: "accent" },
  { id: "team-venue-15", title: "Team Venue #15", category: "inkind", description: "Host 1 team • Fri 12–4:30PM, Sat 9AM–4:30PM", claimedBy: undefined, icon: <MapPin className="w-5 h-5" />, color: "accent" },
];

const tabs = [
  { id: "partners", label: "Partners" },
  { id: "sponsors", label: "Sponsors" },
  { id: "mentors", label: "Mentors" },
  { id: "volunteers", label: "Volunteers" },
];

const Partners = () => {
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const getInitialTab = () => {
    const hash = location.hash.replace("#", "");
    return tabs.some(t => t.id === hash) ? hash : "partners";
  };
  
  const [activeTab, setActiveTab] = useState(getInitialTab);

  // Combine Saturday roles for display
  const saturdayRoles = [...saturdaySiteRoles, ...saturdayVirtualRoles];

  const handleCTAClick = () => {
    setIsEmailSignupOpen(true);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`/partners#${value}`, { replace: true });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = location.hash.replace("#", "");
      if (tabs.some(t => t.id === hash)) {
        setActiveTab(hash);
      }
    };
    handleHashChange();
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={handleCTAClick} />
      
      {/* Spacer for fixed nav */}
      <div className="pt-20 md:pt-24" />

      {/* Tabs Section */}
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        {/* Sticky Tab Navigation */}
        <nav className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto py-3">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-transparent p-0">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="py-2.5 px-4 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground border border-border data-[state=active]:border-accent rounded-lg transition-smooth text-sm font-medium"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>
        </nav>

        {/* Tab Content */}
        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Partners Tab */}
              <TabsContent value="partners" className="mt-0 focus-visible:outline-none">
                <div className="space-y-5">
                  {/* Page Header */}
                  <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                      Partners
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Organizations making Hack for RVA possible through strategic support, venues, and infrastructure.
                    </p>
                  </div>

                  {/* Partners Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {institutionalPartners.map((partner, index) => (
                      <div
                        key={index}
                        className="bg-card p-6 rounded-xl shadow-elegant hover:shadow-hover transition-smooth border border-border group hover:scale-[1.02]"
                      >
                        <div className="h-20 bg-muted/40 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-smooth px-4">
                          {partner.logo ? (
                            <img 
                              src={partner.logo} 
                              alt={`${partner.name} logo`}
                              className="max-h-16 w-auto object-contain"
                            />
                          ) : (
                            <span className="text-muted-foreground/60 group-hover:text-accent font-bold text-base text-center">
                              {partner.name}
                            </span>
                          )}
                        </div>
                        <h4 className="font-semibold text-foreground text-center mb-2">{partner.name}</h4>
                        <p className="text-sm text-muted-foreground text-center leading-relaxed">
                          {partner.subtitle}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Become a Partner CTA */}
                  <div className="bg-muted/30 rounded-lg p-6 text-center">
                    <h3 className="text-lg font-bold text-foreground mb-2">Become a Partner</h3>
                    <p className="text-sm text-muted-foreground mb-4 max-w-xl mx-auto">
                      Interested in partnering with Hack for RVA? We're looking for organizations aligned with our mission to improve civic outcomes through technology.
                    </p>
                    <Button onClick={handleCTAClick} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                      Get in Touch
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Sponsors Tab */}
              <TabsContent value="sponsors" className="mt-0 focus-visible:outline-none">
                <div className="space-y-6">
                  {/* Page Header */}
                  <div className="text-center mb-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
                      Sponsors
                    </h2>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                      Sponsor an award or event. Set your own criteria, judge submissions, and put your name on solutions that matter.
                    </p>
                  </div>

                  {/* Featured Sponsorship Packages */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
                      <Star className="w-4 h-4 text-accent" />
                      Featured Sponsorship Packages
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {sponsorshipPackages.map((pkg) => (
                        <div
                          key={pkg.id}
                          className={`relative bg-card rounded-xl border-2 p-5 transition-all hover:shadow-lg ${
                            pkg.featured 
                              ? "border-accent shadow-accent/20" 
                              : "border-border hover:border-accent/50"
                          }`}
                        >
                          {pkg.featured && (
                            <div className="absolute -top-3 left-4">
                              <Badge className="bg-accent text-accent-foreground">
                                <Star className="w-3 h-3 mr-1" /> Premier
                              </Badge>
                            </div>
                          )}
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="text-lg font-bold text-foreground">{pkg.title}</h4>
                              <p className="text-2xl font-bold text-accent">{pkg.amount}</p>
                            </div>
                            {pkg.claimedBy ? (
                              <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30">
                                <Check className="w-3 h-3 mr-1" /> Claimed
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/30">
                                Available
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground italic mb-4">"{pkg.tagline}"</p>
                          <ul className="space-y-2">
                            {pkg.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <BadgeCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                          {!pkg.claimedBy && (
                            <Button 
                              onClick={handleCTAClick} 
                              className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground"
                            >
                              <Mic className="w-4 h-4 mr-2" />
                              Inquire About This Package
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30">
                        <Check className="w-3 h-3 mr-1" /> Claimed
                      </Badge>
                      <span className="text-muted-foreground">Sponsor secured</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/30">
                        Available
                      </Badge>
                      <span className="text-muted-foreground">Seeking sponsor</span>
                    </div>
                  </div>

                  {/* Award Sponsorships */}
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Award Sponsorships</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {sponsorshipOpportunities.filter(o => o.category === "award").map((opp) => {
                        const colorMap: Record<string, string> = {
                          yellow: "border-yellow-500/30 hover:border-yellow-500/60",
                          pink: "border-pink-500/30 hover:border-pink-500/60",
                          violet: "border-violet-500/30 hover:border-violet-500/60",
                          blue: "border-blue-500/30 hover:border-blue-500/60",
                        };
                        const iconColorMap: Record<string, string> = {
                          yellow: "text-yellow-500 bg-yellow-500/10",
                          pink: "text-pink-500 bg-pink-500/10",
                          violet: "text-violet-500 bg-violet-500/10",
                          blue: "text-blue-500 bg-blue-500/10",
                        };
                        return (
                          <div
                            key={opp.id}
                            className={`bg-card p-3 sm:p-4 rounded-lg border ${colorMap[opp.color]} transition-colors flex items-start gap-2 sm:gap-3`}
                          >
                            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 ${iconColorMap[opp.color]}`}>
                              {opp.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-start justify-between gap-1 sm:gap-2">
                                <div className="min-w-0">
                                  <p className="font-semibold text-foreground text-sm">{opp.title}</p>
                                  {opp.amount && <p className="text-xs text-muted-foreground">{opp.amount}</p>}
                                </div>
                                {opp.claimedBy ? (
                                  <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30 text-xs shrink-0">
                                    <Check className="w-3 h-3 mr-1" /> {opp.claimedBy}
                                  </Badge>
                                ) : (
                                  <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/30 text-xs shrink-0">
                                    Available
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">{opp.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* In-Kind Sponsorships */}
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">In-Kind Contributions</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {sponsorshipOpportunities.filter(o => o.category === "inkind").map((opp) => (
                        <div
                          key={opp.id}
                          className="bg-card p-3 sm:p-4 rounded-lg border border-accent/30 hover:border-accent/60 transition-colors flex items-start gap-2 sm:gap-3"
                        >
                          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 text-accent bg-accent/10">
                            {opp.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-start justify-between gap-1 sm:gap-2">
                              <p className="font-semibold text-foreground text-sm">{opp.title}</p>
                              <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/30 text-xs shrink-0">
                                Available
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{opp.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ways to Get Involved */}
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Ways to Get Involved</h3>
                    <div className="bg-card rounded-xl border border-border p-5">
                      <p className="text-sm text-muted-foreground mb-4">
                        Offer your best designers, technologists, and business folks as mentors to serve shifts during Friday and Saturday hacking. 
                        All lounges are <strong className="text-foreground">hybrid</strong> (in-person + virtual).
                      </p>
                      <div className="grid sm:grid-cols-3 gap-4 mb-4">
                        <div className="bg-pink-500/5 border border-pink-500/20 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Palette className="w-5 h-5 text-pink-500" />
                            <h4 className="font-semibold text-foreground">Artist Lounge</h4>
                          </div>
                          <p className="text-xs text-muted-foreground">Design & UX mentors helping teams with user experience, visual design, and prototyping.</p>
                        </div>
                        <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Briefcase className="w-5 h-5 text-amber-500" />
                            <h4 className="font-semibold text-foreground">Hustle Corner</h4>
                          </div>
                          <p className="text-xs text-muted-foreground">Business mentors guiding teams on pitch strategy, sustainability, and go-to-market.</p>
                        </div>
                        <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Code className="w-5 h-5 text-blue-500" />
                            <h4 className="font-semibold text-foreground">Hacker Space</h4>
                          </div>
                          <p className="text-xs text-muted-foreground">Technical mentors helping with architecture, APIs, data, and implementation.</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3 text-xs">
                        <div className="bg-muted/50 rounded px-3 py-1.5">
                          <span className="font-medium text-foreground">Friday:</span> 12PM – 5PM
                        </div>
                        <div className="bg-muted/50 rounded px-3 py-1.5">
                          <span className="font-medium text-foreground">Saturday:</span> 9AM – 5PM
                        </div>
                        <div className="bg-muted/50 rounded px-3 py-1.5">
                          <span className="font-medium text-foreground">Format:</span> Hybrid (in-person + virtual)
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-muted/30 rounded-lg p-5 text-center">
                    <p className="text-sm text-muted-foreground mb-3">
                      Interested in sponsoring or sending mentors? Reach out to discuss opportunities.
                    </p>
                    <Button onClick={handleCTAClick} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                      Get Involved
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Mentors Tab */}
              <TabsContent value="mentors" className="mt-0 focus-visible:outline-none">
                <div className="space-y-5">
                  {/* Page Header */}
                  <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                      Mentors
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Share your expertise with teams building civic solutions. Mentors guide participants through technical, design, business, and civic challenges—on your own schedule.
                    </p>
                  </div>

                  {/* Mentor Types */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { icon: Code, title: "Technical", desc: "Architecture, APIs, data, implementation" },
                      { icon: Palette, title: "Design", desc: "UX, user research, accessibility" },
                      { icon: Briefcase, title: "Business", desc: "Sustainability, pitch strategy, GTM" },
                      { icon: Landmark, title: "Civic", desc: "City systems, policy, implementation" },
                    ].map((type, idx) => (
                      <Card key={idx} className="border-border">
                        <CardContent className="pt-4">
                          <div className="flex items-center gap-2 mb-2">
                            <type.icon className="w-4 h-4 text-accent" />
                            <p className="font-medium text-foreground text-sm">{type.title}</p>
                          </div>
                          <p className="text-xs text-muted-foreground">{type.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* How It Works */}
                  <Card className="border-border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">How Mentoring Works</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                      <p>
                        We use a <strong className="text-foreground">Discord bot</strong> to manage mentor requests by specialty. 
                        Teams request help, mentors get notified by expertise area, and everyone's time is used efficiently.
                      </p>
                      <div className="grid sm:grid-cols-3 gap-3 mt-3">
                        <div className="bg-muted/50 rounded p-3">
                          <p className="font-medium text-foreground text-xs mb-1">Time Commitment</p>
                          <p className="text-xs">4-8 hours across the weekend</p>
                        </div>
                        <div className="bg-muted/50 rounded p-3">
                          <p className="font-medium text-foreground text-xs mb-1">Flexibility</p>
                          <p className="text-xs">Drop in when available</p>
                        </div>
                        <div className="bg-muted/50 rounded p-3">
                          <p className="font-medium text-foreground text-xs mb-1">Remote OK</p>
                          <p className="text-xs">Virtual mentoring supported</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* VTO Callout */}
                  <Card className="border-accent/30 bg-accent/5">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Clock className="w-4 h-4 text-accent" />
                        Use Your Corporate VTO
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      <p className="mb-2">
                        Many Richmond employers offer Volunteer Time Off. Mentoring at Hack for RVA qualifies:
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="bg-background rounded px-2 py-1"><strong>CarMax:</strong> 16 hrs/year</span>
                        <span className="bg-background rounded px-2 py-1"><strong>Capital One:</strong> 8+ hrs</span>
                        <span className="bg-background rounded px-2 py-1"><strong>Dominion:</strong> Matching program</span>
                      </div>
                      <p className="mt-2 text-xs">We provide documentation for your employer.</p>
                    </CardContent>
                  </Card>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={handleCTAClick} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                      Apply to Mentor
                    </Button>
                    <Button onClick={handleCTAClick} variant="outline" className="border-accent text-accent hover:bg-accent/10">
                      Apply to Judge
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Volunteers Tab */}
              <TabsContent value="volunteers" className="mt-0 focus-visible:outline-none">
                <div className="space-y-6">
                  {/* Page Header */}
                  <div className="text-center mb-6">
                    <Badge variant="outline" className="mb-3 border-accent text-accent">
                      <Sparkles className="w-3 h-3 mr-1" />
                      150-200 volunteers needed
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
                      Volunteers
                    </h2>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-4">
                      Hack for RVA needs passionate volunteers to make Richmond's largest civic hackathon a success. Browse roles below and sign up.
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      onClick={handleCTAClick}
                    >
                      Sign Up to Volunteer
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 bg-muted/30 rounded-lg border border-border">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1.5 mb-0.5">
                        <Building2 className="w-4 h-4 text-blue-500" />
                        <span className="text-xl font-bold text-foreground">22</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Stakeholders</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1.5 mb-0.5">
                        <Users className="w-4 h-4 text-emerald-500" />
                        <span className="text-xl font-bold text-foreground">45+</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Roles</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1.5 mb-0.5">
                        <ClipboardCheck className="w-4 h-4 text-purple-500" />
                        <span className="text-xl font-bold text-foreground">~1,600</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Hours</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1.5 mb-0.5">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="text-xl font-bold text-foreground">3</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Days</p>
                    </div>
                  </div>

                  {/* Accordions */}
                  <Accordion type="multiple" className="space-y-3">
                    {/* Track Teams Accordion */}
                    <PillarEcosystemAccordion />

                    {/* Pre-Event Roles */}
                    <RoleCategoryAccordion
                      id="pre-event"
                      title="Pre-Event Roles"
                      description="6-8 weeks before • Flexible hours"
                      roles={preEventRoles}
                      count="25-35 needed"
                      icon={Sparkles}
                      colorClass="bg-purple-500/10 text-purple-600"
                      onSignUp={handleCTAClick}
                    />

                    {/* Friday Roles */}
                    <RoleCategoryAccordion
                      id="friday"
                      title="Friday — Kickoff Day"
                      description="March 27 • Science Museum of Virginia"
                      roles={fridayRoles}
                      count="35-45 needed"
                      icon={Calendar}
                      colorClass="bg-blue-500/10 text-blue-600"
                      onSignUp={handleCTAClick}
                    />

                    {/* Saturday Roles */}
                    <RoleCategoryAccordion
                      id="saturday"
                      title="Saturday — Hacking Day"
                      description="March 28 • 15+ locations citywide + virtual"
                      roles={saturdayRoles}
                      count="60-80 needed"
                      icon={MapPin}
                      colorClass="bg-green-500/10 text-green-600"
                      onSignUp={handleCTAClick}
                    />

                    {/* Sunday Roles */}
                    <RoleCategoryAccordion
                      id="sunday"
                      title="Sunday — Finals & Awards"
                      description="March 29 • Science Museum of Virginia"
                      roles={sundayRoles}
                      count="30-40 needed"
                      icon={Award}
                      colorClass="bg-orange-500/10 text-orange-600"
                      onSignUp={handleCTAClick}
                    />

                    {/* Support / Mentor Roles */}
                    <RoleCategoryAccordion
                      id="support"
                      title="Support & Mentors"
                      description="Throughout event • Flexible shifts"
                      roles={supportRoles}
                      count="30-40 needed"
                      icon={Heart}
                      colorClass="bg-pink-500/10 text-pink-600"
                      onSignUp={handleCTAClick}
                    />
                  </Accordion>

                  {/* Bottom CTA */}
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 text-center">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      Ready to Make a Difference?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 max-w-lg mx-auto">
                      Every role has clear responsibilities, decision authority, and success criteria.
                    </p>
                    <Button 
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      onClick={handleCTAClick}
                    >
                      Sign Up to Volunteer
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  {/* Corporate VTO */}
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <h4 className="text-sm font-semibold text-foreground mb-1">Use Your Company's VTO</h4>
                    <div className="flex flex-wrap justify-center gap-2 text-xs">
                      <span className="bg-background rounded px-2 py-1"><strong>CarMax:</strong> 16 hrs/yr</span>
                      <span className="bg-background rounded px-2 py-1"><strong>Capital One:</strong> 8+ hrs</span>
                      <span className="bg-background rounded px-2 py-1"><strong>Dominion:</strong> Matching</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </div>
        </section>
      </Tabs>

      <Footer />
      <BackToTop />
      <EmailSignup open={isEmailSignupOpen} onOpenChange={setIsEmailSignupOpen} />
    </div>
  );
};

export default Partners;
