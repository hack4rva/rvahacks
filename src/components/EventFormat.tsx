import { Briefcase, Laptop, Award } from "lucide-react";

const schedule = [
  {
    day: "FRIDAY, MARCH 6",
    time: "10 AM - 10 PM",
    title: "Professional Track",
    icon: Briefcase,
    description:
      "For entrepreneurs and professionals who can dedicate a full day. Kickoff with Mayor Avula, team formation, and deep work.",
    tag: "12 hours",
    isPublic: false,
  },
  {
    day: "SATURDAY, MARCH 7",
    time: "9 AM - 10 PM",
    title: "Weekend Warrior Track",
    icon: Laptop,
    description:
      "For students, parents, and weekend warriors. Build mode with mentor support and solution development.",
    tag: "13 hours",
    isPublic: false,
  },
  {
    day: "SUNDAY, MARCH 8",
    time: "12 PM - 3 PM",
    title: "Community Celebration",
    icon: Award,
    description:
      "For everyone—families welcome! Public demos, project presentations, and awards ceremony with the Mayor.",
    tag: "Open to public",
    isPublic: true,
  },
];

export const EventFormat = () => {
  return (
    <section id="format" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Choose Your Path
            </h2>
            <p className="text-lg text-muted-foreground">
              A flexible weekend designed for everyone
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
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4 w-fit">
                      {event.time}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <event.icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-card-foreground mb-3">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
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
              Attend Friday <span className="text-primary font-bold">OR</span>{" "}
              Saturday (or both!), then celebrate together Sunday.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
