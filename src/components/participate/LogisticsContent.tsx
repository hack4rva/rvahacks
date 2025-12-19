import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, Bus, UtensilsCrossed, Accessibility, 
  Calendar, Building2, Wifi, Moon, 
  Laptop, Coffee, AlertTriangle, Shield
} from "lucide-react";
import { eventDates, venues } from "@/data";

export const LogisticsContent = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
          Logistics
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about getting to the event, what to bring, and where to find food, parking, and accessibility accommodations.
        </p>
      </div>

      {/* Event Dates - Compact Hero */}
      <div className="bg-accent/5 border-2 border-accent rounded-xl p-4">
        <div className="flex items-center gap-3 mb-3">
          <Calendar className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold text-foreground">{eventDates.fullRange}</h2>
          <Badge className="bg-accent">Fri–Sun</Badge>
        </div>
        <div className="grid grid-cols-3 gap-3 text-sm">
          <div className="bg-background rounded-lg p-3 text-center">
            <p className="font-semibold text-foreground">{eventDates.friday.shortLabel}</p>
            <p className="text-xs text-muted-foreground">Kickoff @ Science Museum</p>
          </div>
          <div className="bg-background rounded-lg p-3 text-center border-2 border-accent">
            <p className="font-semibold text-foreground">{eventDates.saturday.shortLabel}</p>
            <p className="text-xs text-muted-foreground">Hacking @ Satellite Sites</p>
          </div>
          <div className="bg-background rounded-lg p-3 text-center">
            <p className="font-semibold text-foreground">{eventDates.sunday.shortLabel}</p>
            <p className="text-xs text-muted-foreground">Finals @ Science Museum</p>
          </div>
        </div>
      </div>

      {/* Venues - Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Primary Venue */}
        <Card className="border-accent border-2">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                {venues.primary.name}
              </CardTitle>
              <Badge className="bg-accent text-xs">Main Hub</Badge>
            </div>
            <p className="text-xs text-muted-foreground">{venues.primary.address}</p>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="font-medium text-foreground text-xs mb-1">Friday:</p>
                <ul className="text-xs text-muted-foreground space-y-0.5">
                  <li>• Opening & challenge briefings</li>
                  <li>• Team formation</li>
                  <li>• Lunch provided</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground text-xs mb-1">Sunday:</p>
                <ul className="text-xs text-muted-foreground space-y-0.5">
                  <li>• Finalist pitches</li>
                  <li>• Judging with Mayor</li>
                  <li>• Awards ceremony</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Satellite Locations */}
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Building2 className="w-4 h-4 text-accent" />
              Saturday Hacking Sites
            </CardTitle>
            <p className="text-xs text-muted-foreground">Choose your location during registration</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {venues.satellite.map((loc) => (
                <div key={loc.type} className="bg-muted/50 rounded p-2">
                  <p className="font-medium text-foreground">{loc.type}</p>
                  <p className="text-muted-foreground">{loc.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 24/7 + Transportation Row */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Moon className="w-4 h-4 text-accent" />
              Overnight Hacking
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-muted-foreground text-xs mb-2">Select university libraries offer 24/7 access for registered participants:</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• <strong className="text-foreground">VCU Cabell Library</strong> – Extended hours TBD</li>
              <li>• <strong className="text-foreground">UR Boatwright Library</strong> – Extended hours TBD</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-2 bg-muted/50 p-2 rounded">
              Guest passes provided to registered participants.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Bus className="w-4 h-4 text-accent" />
              Getting There
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs space-y-2">
            <div className="flex items-start gap-2">
              <Badge variant="secondary" className="text-xs shrink-0">Recommended</Badge>
              <div>
                <p className="font-medium text-foreground">GRTC Pulse BRT</p>
                <p className="text-muted-foreground">Direct to Science Museum • FREE • Every 10-15 min</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-muted-foreground">
              <div><strong className="text-foreground">Rideshare:</strong> Uber/Lyft available</div>
              <div><strong className="text-foreground">Bike:</strong> Racks at all venues</div>
              <div><strong className="text-foreground">Parking:</strong> Free at Science Museum</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* What to Bring + Amenities - Compact Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Laptop className="w-4 h-4 text-accent" />
              Essential Gear
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>✓ Laptop + charger</li>
              <li>✓ Phone + charger</li>
              <li>✓ Power strip (if you have one)</li>
              <li>✓ Headphones</li>
              <li>✓ Valid photo ID</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Coffee className="w-4 h-4 text-accent" />
              Personal Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>✓ Water bottle</li>
              <li>✓ Snacks (meals provided)</li>
              <li>✓ Layers (venues can be cold)</li>
              <li>✓ Any medications</li>
              <li>✓ Overnight comfort items</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Wifi className="w-4 h-4 text-accent" />
              Venue Amenities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>✓ High-speed WiFi</li>
              <li>✓ Power outlets at every seat</li>
              <li>✓ Meals & coffee provided</li>
              <li>✓ Wheelchair accessible</li>
              <li>✓ Quiet rooms available</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Food & Accessibility - Compact */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-accent" />
              Food & Drinks
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs">
            <div className="grid grid-cols-2 gap-2 text-muted-foreground mb-2">
              <div><strong className="text-foreground">Friday:</strong> Lunch + snacks</div>
              <div><strong className="text-foreground">Saturday:</strong> Breakfast, lunch, dinner + snacks</div>
              <div><strong className="text-foreground">Sunday:</strong> Breakfast + celebration food</div>
              <div><strong className="text-foreground">All days:</strong> Coffee, tea, water</div>
            </div>
            <p className="bg-muted/50 p-2 rounded">
              <strong className="text-foreground">Dietary needs:</strong> Indicate during registration. Vegetarian/vegan, gluten-free, halal, and kosher options available.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Accessibility className="w-4 h-4 text-accent" />
              Accessibility & Safety
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground space-y-2">
            <ul className="space-y-1">
              <li>• All venues are ADA accessible</li>
              <li>• ASL interpreters available upon request</li>
              <li>• Quiet/sensory-friendly spaces</li>
              <li>• Nursing rooms at primary venues</li>
            </ul>
            <div className="flex items-start gap-2 bg-muted/50 p-2 rounded">
              <Shield className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>First aid staff and security on-site at all times. Code of Conduct enforced.</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Info - Compact Footer */}
      <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-3 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-destructive shrink-0" />
        <div className="text-xs">
          <p className="font-semibold text-foreground mb-1">Emergency Information</p>
          <p className="text-muted-foreground">
            Event staff trained in first aid. <strong>Emergency: 911</strong> • <strong>Non-emergency:</strong> Contact any staff member or use the event Slack #help channel.
          </p>
        </div>
      </div>
    </div>
  );
};
