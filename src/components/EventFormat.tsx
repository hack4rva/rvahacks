import { Briefcase, Laptop, Award, MapPin } from "lucide-react";

const schedule = [
  {
    day: "FRIDAY, MARCH 6",
    time: "10 AM - 10 PM",
    location: "CoStar",
    title: "Hacking Day 1",
    icon: Briefcase,
    description:
      "Kickoff with Mayor Avula and a 101 on his 7 pillars. Team formation happens—lead or join a team. Deep-dive SME presentations & Q&A on each challenge. Then start building. Ideal for professionals who can dedicate Friday—then celebrate with family on Sunday.",
    tag: "12 hours",
    isPublic: false,
  },
  {
    day: "SATURDAY, MARCH 7",
    time: "9 AM - 10 PM",
    location: "CoStar",
    title: "Hacking Day 2",
    icon: Laptop,
    description:
      "Continue building with your team or jump in fresh if Friday didn't work for you. Perfect for students with Friday classes or anyone joining for the weekend. Submit your solution by evening for finalist selection.",
    tag: "13 hours",
    isPublic: false,
  },
  {
    day: "SUNDAY, MARCH 8",
    time: "12 PM - 3 PM",
    location: "Hardywood Brewery",
    title: "Community Celebration",
    icon: Award,
    description:
      "Public demos and project presentations. 10 finalist teams pitch live. 5 judges, including Mayor Avula, select winners across 5 award categories. Awards ceremony and celebration. Bring your family—everyone's welcome!",
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
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Event Schedule
            </h2>
            <p className="text-lg text-muted-foreground">
              Hack both days or choose what fits your schedule
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
              Work both days for maximum impact, or hack the day that fits your schedule—everyone celebrates together Sunday.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
