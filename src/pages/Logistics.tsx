import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Car, 
  Bus, 
  UtensilsCrossed, 
  Accessibility, 
  ClipboardCheck, 
  Calendar,
  Building2,
  Wifi,
  Plug,
  Shield,
  Moon,
  Backpack,
  Laptop,
  Coffee,
  AlertTriangle,
  GraduationCap,
  Clock
} from "lucide-react";

const Logistics = () => {
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);

  const handleCTAClick = () => {
    setIsEmailSignupOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={handleCTAClick} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Event Logistics
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              A citywide hackathon with centralized kickoff and distributed hacking locations across Richmond.
            </p>
          </div>
        </div>
      </section>

      {/* Event Dates Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-accent border-2 shadow-elegant bg-accent/5">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Calendar className="w-12 h-12 text-accent" />
                </div>
                <CardTitle className="text-3xl">March 27–29, 2026</CardTitle>
                <CardDescription className="text-lg">Friday – Sunday</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-background rounded-lg p-4">
                    <Badge className="mb-2">Kickoff</Badge>
                    <p className="font-semibold text-foreground">Friday, March 27</p>
                    <p className="text-sm text-muted-foreground">Science Museum of Virginia</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border-2 border-accent">
                    <Badge className="mb-2 bg-accent">Hacking</Badge>
                    <p className="font-semibold text-foreground">Saturday, March 28</p>
                    <p className="text-sm text-muted-foreground">Satellite locations citywide</p>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <Badge variant="secondary" className="mb-2">Finals</Badge>
                    <p className="font-semibold text-foreground">Sunday, March 29</p>
                    <p className="text-sm text-muted-foreground">Science Museum of Virginia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Primary Venue Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Primary Venue</h2>
            </div>
            
            <Card className="border-accent border-2 shadow-elegant mb-6">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-accent">Kickoff & Awards Hub</Badge>
                <CardTitle className="text-2xl">Science Museum of Virginia</CardTitle>
                <CardDescription>2500 W Broad St, Richmond, VA 23220</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The Science Museum serves as our central hub for Friday kickoff and Sunday finals. All participants gather here to launch the hackathon and return for the awards ceremony.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Friday at Science Museum</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Opening remarks and challenge briefings</li>
                      <li>• Team formation and domain breakouts</li>
                      <li>• Lunch provided</li>
                      <li>• Disperse to satellite locations by evening</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Sunday at Science Museum</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Finalist teams return for live pitches</li>
                      <li>• Judging panel with Mayor Avula</li>
                      <li>• Awards ceremony</li>
                      <li>• Family-friendly celebration</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Satellite Locations Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Satellite Hacking Locations</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Saturday hacking happens across Richmond at multiple host sites. Choose your location during registration.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <Badge variant="secondary" className="w-fit mb-2">Co-Working</Badge>
                  <CardTitle className="text-lg">Co-Working Spaces</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Downtown and Scott's Addition locations with dedicated desks, meeting rooms, and professional amenities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <Badge variant="secondary" className="w-fit mb-2">Corporate</Badge>
                  <CardTitle className="text-lg">Corporate Hosts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Richmond tech companies opening their offices to host hackathon teams with enterprise infrastructure.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <Badge variant="secondary" className="w-fit mb-2">Public</Badge>
                  <CardTitle className="text-lg">Library Branches</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Richmond Public Library locations with meeting spaces, free WiFi, and community access.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-accent/50 border-2 shadow-elegant">
                <CardHeader className="pb-3">
                  <Badge className="w-fit mb-2 bg-accent">24/7 Option</Badge>
                  <CardTitle className="text-lg">University Libraries</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    VCU and UR libraries with extended hours for teams who want to hack through the night.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <Badge variant="secondary" className="w-fit mb-2">Nonprofit</Badge>
                  <CardTitle className="text-lg">Community Centers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Neighborhood-based locations for teams focused on hyperlocal civic challenges.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <Badge variant="secondary" className="w-fit mb-2">Remote</Badge>
                  <CardTitle className="text-lg">Virtual Participation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Can't be there in person? Remote participation allowed with virtual mentor support.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <p className="text-sm text-card-foreground">
                <strong>Note:</strong> Final location list and capacity will be announced when registration opens. Location assignments confirmed closer to the event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Hacking Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Moon className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">24/7 Hacking Options</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-accent" />
                    <CardTitle>University Libraries</CardTitle>
                  </div>
                  <CardDescription>Extended hours for overnight hacking</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Select university libraries will remain open for registered hackathon participants who want to work through the night.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• VCU Cabell Library (hours TBD)</li>
                    <li>• University of Richmond Boatwright Library (hours TBD)</li>
                  </ul>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">
                      <strong>Access:</strong> Valid hackathon registration + university guest pass required. Details provided to registered participants.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    <CardTitle>Extended Hours Sites</CardTitle>
                  </div>
                  <CardDescription>Late-night options (not 24/7)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Some satellite locations will offer extended hours until midnight or later, though not full overnight access.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Select co-working spaces</li>
                    <li>• Corporate host sites (varies by host)</li>
                  </ul>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">
                      <strong>Tip:</strong> If you plan to hack overnight, select a 24/7 university library during registration.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Bus className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Transit & Transportation</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="border-accent/50 border-2 shadow-elegant">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-accent">Recommended</Badge>
                  <CardTitle>GRTC Pulse Bus Rapid Transit</CardTitle>
                  <CardDescription>Fast, frequent service along Broad Street</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    The Pulse BRT line runs directly to the Science Museum of Virginia and connects many satellite locations along the Broad Street corridor.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Science Museum stop:</strong> Direct access to primary venue</li>
                    <li>• Runs every 10-15 minutes during peak hours</li>
                    <li>• Connects downtown, VCU, Scott's Addition</li>
                    <li>• $1.50 fare / free transfers within 90 minutes</li>
                  </ul>
                  <a 
                    href="https://ridegrtc.com/services/routes/pulse" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline inline-block"
                  >
                    View Pulse route map →
                  </a>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle>Other Transit Options</CardTitle>
                  <CardDescription>Alternative ways to get around</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-1">GRTC Local Routes</h4>
                    <p className="text-sm text-muted-foreground">Multiple bus routes serve satellite locations throughout Richmond.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-1">Rideshare</h4>
                    <p className="text-sm text-muted-foreground">Uber and Lyft available throughout Richmond. Drop-off zones at all venues.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-1">Bike</h4>
                    <p className="text-sm text-muted-foreground">Bike racks at Science Museum. Many satellite locations bike-accessible.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-border shadow-elegant">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-accent" />
                  <CardTitle>Parking</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Science Museum of Virginia</h4>
                    <p className="text-sm text-muted-foreground">Free parking in museum lot for hackathon participants. Details provided in welcome packet.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Satellite Locations</h4>
                    <p className="text-sm text-muted-foreground">Parking varies by location. Information included with your location assignment.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Bring Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Backpack className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What to Bring</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                    <Laptop className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Essential Tech</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>✓ Laptop and charger</li>
                    <li>✓ Phone and charger</li>
                    <li>✓ Power strip (if you have one)</li>
                    <li>✓ Headphones</li>
                    <li>✓ Any hardware you're building with</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                    <ClipboardCheck className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Check-In Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>✓ Valid photo ID</li>
                    <li>✓ Registration confirmation (digital OK)</li>
                    <li>✓ Location assignment email</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                    <Coffee className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Personal Comfort</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>✓ Water bottle</li>
                    <li>✓ Snacks (meals provided, but just in case)</li>
                    <li>✓ Layers (venues can be cold)</li>
                    <li>✓ Medications you need</li>
                    <li>✓ Comfort items for overnight (if applicable)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WiFi & Power Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Wifi className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">WiFi & Power</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-accent" />
                    <CardTitle>WiFi Access</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    All official hackathon locations provide WiFi access. Connection details shared at check-in.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Science Museum:</strong> Dedicated hackathon network</li>
                    <li>• <strong>University libraries:</strong> Guest credentials provided</li>
                    <li>• <strong>Co-working/corporate:</strong> Host network access</li>
                    <li>• <strong>Public libraries:</strong> Free public WiFi</li>
                  </ul>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">
                      <strong>Tip:</strong> Bring a mobile hotspot as backup if you're working on something bandwidth-intensive.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Plug className="w-5 h-5 text-accent" />
                    <CardTitle>Power Access</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    All locations have power outlets, but availability varies. Plan accordingly.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Science Museum:</strong> Power strips provided at team tables</li>
                    <li>• <strong>Co-working spaces:</strong> Outlets at every desk</li>
                    <li>• <strong>Libraries:</strong> Outlets available, may need to share</li>
                    <li>• <strong>Smaller venues:</strong> Bring your own power strip</li>
                  </ul>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">
                      <strong>Recommended:</strong> Bring a power strip to share with your team.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Security & Safety</h2>
            </div>
            
            <div className="space-y-6">
              <Card className="border-destructive/30 shadow-elegant">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                    <CardTitle>Important Security Notes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                    <p className="text-sm text-foreground font-medium mb-2">Overnight Security</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Most satellite locations do NOT have overnight security.</strong> Only 24/7 university library sites have security personnel present throughout the night. Do not leave valuables unattended at other locations.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Your Responsibility</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Keep valuables with you at all times</li>
                        <li>• Don't leave laptops unattended</li>
                        <li>• Lock your car if you drove</li>
                        <li>• Travel with others after dark</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Venue Security</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Science Museum: Event staff on-site during hours</li>
                        <li>• University libraries: Campus security 24/7</li>
                        <li>• Corporate sites: Building security varies</li>
                        <li>• Public spaces: No dedicated security</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle>Emergency Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Emergency contact information will be provided in your participant welcome packet. For immediate emergencies, call 911.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Event organizers will have a dedicated contact line available throughout the weekend for non-emergency issues.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Meals Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <UtensilsCrossed className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Meals & Dietary</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle>Meal Schedule</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-foreground">Friday (Science Museum)</p>
                    <ul className="text-sm text-muted-foreground ml-4 mt-1">
                      <li>• Lunch provided</li>
                      <li>• Snacks and beverages</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Saturday (Satellite Locations)</p>
                    <ul className="text-sm text-muted-foreground ml-4 mt-1">
                      <li>• Varies by location—details in assignment</li>
                      <li>• Snacks provided at most sites</li>
                      <li>• Some locations near food options</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sunday (Science Museum)</p>
                    <ul className="text-sm text-muted-foreground ml-4 mt-1">
                      <li>• Light refreshments</li>
                      <li>• Snacks at awards ceremony</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle>Dietary Accommodations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    We accommodate dietary restrictions where meals are provided:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Vegetarian / Vegan</li>
                    <li>• Gluten-free</li>
                    <li>• Kosher / Halal</li>
                    <li>• Food allergies</li>
                  </ul>
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">
                      <strong>Important:</strong> Indicate dietary needs during registration.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Accessibility className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Accessibility</h2>
            </div>
            
            <Card className="border-border shadow-elegant">
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground">
                  We're committed to making Hack for RVA accessible. The Science Museum of Virginia is fully ADA compliant.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Physical Accessibility</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Wheelchair accessible entrances</li>
                      <li>• Accessible restrooms</li>
                      <li>• Elevator access</li>
                      <li>• Accessible parking</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Other Accommodations</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Sign language interpreters (upon request)</li>
                      <li>• Quiet spaces available</li>
                      <li>• Service animals welcome</li>
                      <li>• Nursing room available</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Need accommodation?</strong> Contact us during registration or email us in advance. Satellite location accessibility varies—let us know your needs and we'll help find the right site.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <EmailSignup
        open={isEmailSignupOpen}
        onOpenChange={setIsEmailSignupOpen}
      />
    </div>
  );
};

export default Logistics;