/**
 * Single source of truth for focus area / challenge domain data.
 * Source: knowledge-base/06-challenge-design/
 */
import { Home, GraduationCap, Car, LucideIcon } from "lucide-react";

export interface FocusArea {
  icon: LucideIcon;
  title: string;
  shortTitle?: string;
  description: string;
}

export const focusAreas: FocusArea[] = [
  {
    icon: Home,
    title: "Housing & Land Use",
    shortTitle: "Housing",
    description: "Tackle affordability, zoning transparency, and equitable development across Richmond's neighborhoods.",
  },
  {
    icon: GraduationCap,
    title: "Education & Workforce Development",
    shortTitle: "Workforce",
    description: "Connect residents to skills training, job pathways, and economic opportunity.",
  },
  {
    icon: Car,
    title: "Transportation & Mobility",
    shortTitle: "Transportation",
    description: "Improve access to transit, reduce commute barriers, and enable citywide connectivity.",
  },
];
