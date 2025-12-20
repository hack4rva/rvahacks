/**
 * Single source of truth for event schedule and timeline.
 * Source: knowledge-base/05-event-operations/
 */
import { Briefcase, Laptop, Award, LucideIcon } from "lucide-react";
import { eventDates, venues } from "./eventInfo";

export interface ScheduleEvent {
  day: string;
  time: string;
  location: string;
  title: string;
  icon: LucideIcon;
  highlights: string[];
  description: string;
  tag: string;
  isPublic: boolean;
}

export const schedule: ScheduleEvent[] = [
  {
    day: eventDates.friday.label,
    time: "10 AM - 6 PM",
    location: venues.primary.name,
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
    day: eventDates.saturday.label,
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
    day: eventDates.sunday.label,
    time: "3 PM - 6 PM",
    location: venues.primary.name,
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

/** Hybrid model explanation */
export const hybridModelDescription = "Kickoff and awards at the Science Museum. Hacking happens at satellite locations across Richmond—co-working spaces, libraries, and corporate hosts.";

/** Schedule flexibility message */
export const scheduleFlexibilityMessage = "Work both days for maximum impact, or hack the day that fits your schedule—everyone celebrates together Sunday.";
