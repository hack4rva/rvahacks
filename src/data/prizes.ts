/**
 * Single source of truth for prizes and awards.
 * Source: knowledge-base/06-challenge-design/
 */
import { Award, Users, Lightbulb, Rocket, Target, Code, Heart, Home, GraduationCap, Car, LucideIcon } from "lucide-react";

export interface PrizeAward {
  title: string;
  icon: LucideIcon;
  description: string;
  sponsor: string;
}

export const majorAwards: PrizeAward[] = [
  {
    title: "Mayor's Choice",
    icon: Award,
    description: "Most impactful civic solution—includes commitment to real-world implementation with City partners",
    sponsor: "The Office of Mayor Danny Avula",
  },
  {
    title: "People's Choice",
    icon: Users,
    description: "Most popular via live community vote at the event",
    sponsor: "the Community",
  },
  {
    title: "Most Innovative",
    icon: Lightbulb,
    description: "Most creative and groundbreaking approach to civic challenges",
    sponsor: "Higher Education Partners",
  },
  {
    title: "Startup Material",
    icon: Rocket,
    description: "Greatest potential for sustained real-world impact",
    sponsor: "Startup Ecosystem",
  },
];

export const sponsorAwards: PrizeAward[] = [
  {
    title: "Housing & Land Use",
    icon: Home,
    description: "Best solution addressing affordability, zoning, or equitable development",
    sponsor: "Category Partner",
  },
  {
    title: "Workforce & Education",
    icon: GraduationCap,
    description: "Best solution connecting residents to skills, jobs, or economic mobility",
    sponsor: "Category Partner",
  },
  {
    title: "Transportation & Mobility",
    icon: Car,
    description: "Best solution improving transit access and citywide connectivity",
    sponsor: "Category Partner",
  },
];

export const civicAwards: PrizeAward[] = [
  {
    title: "Best Technical Implementation",
    icon: Code,
    description: "Most impressive technical execution and architecture",
    sponsor: "Judges' Selection",
  },
  {
    title: "Moonshot",
    icon: Target,
    description: "Most ambitious and visionary long-term solution",
    sponsor: "Judges' Selection",
  },
  {
    title: "Best Social Impact",
    icon: Heart,
    description: "Greatest potential for lasting community benefit",
    sponsor: "Judges' Selection",
  },
];

/** Prize pool total */
export const prizePoolTotal = "$25K+";

/** Submission timeline */
export const prizeTimeline = [
  { label: "Saturday Evening", description: "All solutions due" },
  { label: "Sunday Finals", description: "Finalists present live pitches" },
  { label: "Winners Announced", description: "Awards ceremony with Mayor Avula" },
];
