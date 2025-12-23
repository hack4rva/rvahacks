import { MapPin, Users } from "lucide-react";
import { schedule, hybridModelDescription, scheduleFlexibilityMessage } from "@/data";

interface ScheduleTimelineProps {
  className?: string;
  /** Show the distributed model callout */
  showCallout?: boolean;
}

export const ScheduleTimeline = ({ className = "", showCallout = true }: ScheduleTimelineProps) => {
  return (
    <div className={className}>
      {/* Distributed Model Callout */}
      {showCallout && (
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-12 max-w-2xl mx-auto flex items-center gap-3">
          <Users className="w-5 h-5 text-accent flex-shrink-0" />
          <p className="text-sm text-card-foreground">
            <strong>Hybrid model:</strong> {hybridModelDescription}
          </p>
        </div>
      )}

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
                <div className="flex items-start gap-1.5 text-sm text-muted-foreground mb-4 min-w-0">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="font-medium break-words">{event.location}</span>
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
          {scheduleFlexibilityMessage}
        </p>
      </div>
    </div>
  );
};

// Re-export schedule for backwards compatibility
export { schedule };
