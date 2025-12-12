import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Car, Bus, UtensilsCrossed, Accessibility, ClipboardCheck, Calendar } from "lucide-react";

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
              Everything you need to know about getting to Hack for RVA, what to expect, and how to prepare for the event.
            </p>
          </div>
        </div>
      </section>

      {/* Event Dates Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-accent border-2 shadow-elegant bg-accent/5">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Calendar className="w-12 h-12 text-accent" />
                </div>
                <CardTitle className="text-3xl">March 27-29, 2026</CardTitle>
                <CardDescription className="text-lg">Friday - Sunday</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-background rounded-lg p-4">
                    <Badge className="mb-2">Optional</Badge>
                    <p className="font-semibold text-foreground">Friday, March 27</p>
                    <p className="text-sm text-muted-foreground">Full-day kickoff</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border-2 border-accent">
                    <Badge className="mb-2 bg-accent">Main Event</Badge>
                    <p className="font-semibold text-foreground">Saturday, March 28</p>
                    <p className="text-sm text-muted-foreground">All-day hacking</p>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <Badge variant="secondary" className="mb-2">Family</Badge>
                    <p className="font-semibold text-foreground">Sunday, March 29</p>
                    <p className="text-sm text-muted-foreground">Awards ceremony</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Venue Information Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Venue Information</h2>
            </div>
            
            <Card className="border-border shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Science Museum of Virginia</CardTitle>
                <CardDescription>2500 W Broad St, Richmond, VA 23220</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Address</h3>
                  <p className="text-muted-foreground">
                    Specific venue address and directions will be provided to registered participants closer to the event date.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Facilities</h3>
                  <p className="text-muted-foreground mb-2">
                    The venue will provide:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>High-speed WiFi throughout</li>
                    <li>Power outlets and charging stations</li>
                    <li>Common areas for collaboration</li>
                    <li>Presentation spaces for demos</li>
                    <li>Quiet areas for focused work</li>
                  </ul>
                </div>
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Note:</strong> Detailed venue information, including maps and facility details, 
                    will be sent to all registered participants via email before the event.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ... continue with remaining sections ... */}

      {/* Parking Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Car className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Parking</h2>
            </div>
            
            <Card className="border-border shadow-elegant">
              <CardHeader>
                <Badge className="w-fit mb-2">TBD</Badge>
                <CardTitle>Parking Information</CardTitle>
                <CardDescription>Details will be finalized soon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We're currently working on securing convenient parking options for all participants. 
                  Information will include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>On-site parking availability</li>
                  <li>Nearby parking garages and lots</li>
                  <li>Street parking options</li>
                  <li>Parking costs (if any)</li>
                  <li>Validation information</li>
                </ul>
                <p className="text-sm text-muted-foreground italic">
                  Parking details will be sent to registered participants before the event.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Bus className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Transportation</h2>
            </div>
            
            <Card className="border-border shadow-elegant">
              <CardHeader>
                <Badge className="w-fit mb-2">TBD</Badge>
                <CardTitle>Public Transit & Alternative Transportation</CardTitle>
                <CardDescription>Getting to the venue without driving</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Richmond offers several transportation options. Details will be provided about:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Public Transit</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-sm">
                      <li>GRTC bus routes and stops</li>
                      <li>Schedule information</li>
                      <li>Fare details</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Other Options</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-sm">
                      <li>Rideshare pickup/dropoff zones</li>
                      <li>Bike parking locations</li>
                      <li>Walking directions from downtown</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Transportation guide will be included in your participant welcome packet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meals & Dietary Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <UtensilsCrossed className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Meals & Dietary Accommodations</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle>Meal Schedule</CardTitle>
                  <CardDescription>Food will be provided throughout the event</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-foreground">Friday (Optional)</p>
                    <ul className="text-sm text-muted-foreground ml-4 mt-1">
                      <li>• Lunch provided</li>
                      <li>• Snacks and beverages</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Saturday (Main Event)</p>
                    <ul className="text-sm text-muted-foreground ml-4 mt-1">
                      <li>• Breakfast</li>
                      <li>• Lunch</li>
                      <li>• Dinner</li>
                      <li>• Snacks throughout the day</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sunday (Awards)</p>
                    <ul className="text-sm text-muted-foreground ml-4 mt-1">
                      <li>• Light refreshments</li>
                      <li>• Snacks</li>
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground italic">
                    Specific meal times will be shared in the event schedule.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle>Dietary Accommodations</CardTitle>
                  <CardDescription>We'll accommodate your dietary needs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    We're committed to ensuring everyone can enjoy the meals provided. We will accommodate:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-sm">
                    <li>Vegetarian options</li>
                    <li>Vegan options</li>
                    <li>Gluten-free options</li>
                    <li>Kosher options</li>
                    <li>Halal options</li>
                    <li>Food allergies</li>
                    <li>Other dietary restrictions</li>
                  </ul>
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-3 mt-3">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Important:</strong> Please indicate your dietary requirements 
                      during registration so we can prepare accordingly.
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
              <CardHeader>
                <CardTitle>Inclusive Event Experience</CardTitle>
                <CardDescription>We're committed to making Hack for RVA accessible to everyone</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We're working to ensure the venue and event are accessible for all participants:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Physical Accessibility</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-sm">
                      <li>Wheelchair accessible entrances</li>
                      <li>Accessible restrooms</li>
                      <li>Elevator access to all floors</li>
                      <li>Accessible seating areas</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Other Accommodations</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-sm">
                      <li>Sign language interpreters (upon request)</li>
                      <li>Quiet spaces available</li>
                      <li>Service animals welcome</li>
                      <li>Accessible parking spots</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Need accommodation?</strong> Please contact us during registration 
                    or email us in advance so we can ensure your needs are met. We're happy to work with you to make the 
                    event accessible and comfortable.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Check-In Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <ClipboardCheck className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Check-In Process</h2>
            </div>
            
            <Card className="border-border shadow-elegant">
              <CardHeader>
                <CardTitle>Day-of Arrival Instructions</CardTitle>
                <CardDescription>What to expect when you arrive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">What to Bring</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Valid photo ID</li>
                    <li>Your laptop and charger</li>
                    <li>Confirmation email (digital or printed)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Check-In Steps</h3>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Arrive at the registration desk</li>
                    <li>Show your ID and confirmation</li>
                    <li>Receive your name badge and swag</li>
                    <li>Get your event schedule and venue map</li>
                    <li>Proceed to the opening session or workspace</li>
                  </ol>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Recommended Arrival Times</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Friday:</strong> Arrive 15-30 minutes before kickoff</p>
                    <p><strong className="text-foreground">Saturday:</strong> Arrive 30 minutes early to get settled</p>
                    <p><strong className="text-foreground">Sunday:</strong> Arrive 15 minutes before presentations begin</p>
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Running late?</strong> No problem! Our registration desk will be 
                    open throughout the event. Just check in when you arrive.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Questions About Logistics?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're here to help! If you have any questions about venue access, parking, transportation, 
              or any other logistics, please don't hesitate to reach out.
            </p>
            <button 
              onClick={handleCTAClick}
              className="inline-flex items-center justify-center px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-elegant transition-smooth"
            >
              Contact Us
            </button>
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
