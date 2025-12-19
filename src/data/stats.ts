/**
 * Single source of truth for event statistics displayed on the site.
 * Source: knowledge-base/01-planning-strategy/
 */
import { Users, Target, Calendar, DollarSign, Gift, LucideIcon } from "lucide-react";

export interface EventStat {
  icon: LucideIcon;
  value: string;
  label: string;
}

/** Full stats for About page and detailed views */
export const eventStatsDetailed: EventStat[] = [
  {
    icon: Users,
    value: "30+",
    label: "Teams",
  },
  {
    icon: Target,
    value: "1",
    label: "City Goal",
  },
  {
    icon: Calendar,
    value: "48 Hours",
    label: "Friday AM - Saturday PM",
  },
  {
    icon: DollarSign,
    value: "$15K",
    label: "Prize Money",
  },
  {
    icon: Gift,
    value: "Free",
    label: "Registration, lunch, swag",
  },
];

/** Compact stats for Hero and quick views */
export const eventStatsHero = {
  duration: { value: "48hrs", label: "Duration" },
  prizePool: { value: "$15K+", label: "Awards Pool" },
  participants: { value: "30+", label: "Teams" },
};
