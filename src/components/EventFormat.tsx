import { Briefcase, Laptop, Award, MapPin, Users, Video } from "lucide-react";

const schedule = [
  {
    day: "FRIDAY, MARCH 27",
    time: "10 AM - 6 PM",
    location: "Science Museum of Virginia",
    title: "Kickoff & Launch",
    icon: Briefcase,
    highlights: [
      "Morning kickoff at Science Museum",
      "Plenary session + domain breakouts",
      "Team formation and challenge deep-dives",
      "Teams disperse to satellite hack locations",
    ],
    description:
      "Join us at the Science Museum for opening remarks, challenge briefings, and team formation. After lunch, teams head to their chosen hack location across the city to begin building.",
    tag: "Centralized start",
    isPublic: false,
  },
  {
    day: "SATURDAY, MARCH 28",
    time: "9 AM - 12 PM",
    location: "Multiple locations citywide",
    title: "Citywide Hacking",
    icon: Laptop,
    highlights: [
      "Hacking at satellite locations across Richmond",
      "Optional morning check-in (virtual)",
      "Virtual mentor support throughout the day",
      "Submit solutions by evening",
    ],
    description:
      "Teams work from their chosen locations—co-working spaces, libraries, corporate hosts, or home. Mentors available via video throughout the day. All solutions due by evening for finalist selection.",
    tag: "Distributed",
    isPublic: false,
  },
  {
    day: "SUNDAY, MARCH 29",
    time: "10 AM - 3 PM",
    location: "Science Museum of Virginia",
    title: "Finals & Awards",
    icon: Award,
    highlights: [
      "Morning virtual judging round",
      "Finalist teams pitch live",
      "Awards ceremony with Mayor Avula",
      "Community celebration—families welcome",
    ],
    description:
      "Finalists return to the Science Museum for live pitches. Judges including Mayor Avula select winners. Celebrate with the community at the awards ceremony.",
    tag: "Open to public",
    isPublic: true,
  },
];

export const EventFormat = () => {
  return (
    <section id="format" className="py-16 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Event Schedule
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              A citywide hackathon with centralized kickoff and distributed hacking
            </p>
            <p className="text-sm text-muted-foreground">
              Hack both days or choose what fits your schedule
            </p>
          </div>

          {/* Distributed Model Callout */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-12 max-w-2xl mx-auto flex items-center gap-3">
            <Users className="w-5 h-5 text-accent flex-shrink-0" />
            <p className="text-sm text-card-foreground">
              <strong>Hybrid model:</strong> Kickoff and awards at the Science Museum. Hacking happens at satellite locations across Richmond—co-working spaces, libraries, and corporate hosts.
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-border" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
              {schedule.map((event, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-accent border-4 border-background z-10" />

                  {/* Card */}
                  <div
                    className={`bg-card p-6 rounded-xl shadow-elegant hover:shadow-hover transition-smooth border-2 h-full flex flex-col ${
                      event.isPublic
                        ? "border-accent/40 bg-accent/5"
                        : "border-border"
                    }`}
                  >
                    {/* Day Header */}
                    <div className="text-xs font-bold text-primary tracking-wider mb-2">
                      {event.day}
                    </div>

                    {/* Time Badge */}
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-3 w-fit">
                      {event.time}
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{event.location}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <event.icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-card-foreground mb-3">
                      {event.title}
                    </h3>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-4">
                      {event.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                      {event.description}
                    </p>

                    {/* Tag */}
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold w-fit ${
                        event.isPublic
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {event.tag}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-12">
            <p className="text-lg font-medium text-foreground/80">
              Work both days for maximum impact, or hack the day that fits your schedule—everyone celebrates together Sunday.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
