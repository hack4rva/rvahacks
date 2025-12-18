/**
 * Single source of truth for leadership/team structure info.
 * Source: knowledge-base/02-team-governance/
 */
import { Users, Lightbulb, Heart, Briefcase, Landmark, GraduationCap, LucideIcon } from "lucide-react";

export interface Sector {
  icon: LucideIcon;
  label: string;
}

export interface TeamRole {
  title: string;
  icon: LucideIcon;
  description: string;
  count: string;
}

export const sectors: Sector[] = [
  { icon: Briefcase, label: "Tech Industry" },
  { icon: Landmark, label: "City Government" },
  { icon: Heart, label: "Nonprofits" },
  { icon: GraduationCap, label: "Higher Education" },
];

export const teamRoles: TeamRole[] = [
  {
    title: "Organizers",
    icon: Users,
    description: "Cross-sector leaders coordinating strategy, logistics, and partnerships to make the hackathon happen.",
    count: "Core Team",
  },
  {
    title: "Advisors",
    icon: Lightbulb,
    description: "Domain experts and civic leaders providing guidance on challenges, judging criteria, and implementation pathways.",
    count: "Advisory Board",
  },
  {
    title: "Volunteers",
    icon: Heart,
    description: "Community members supporting operations, mentorship, and participant experience throughout the weekend.",
    count: "Join Us",
  },
];

export const leadershipTagline = "A coalition of leaders from across Richmond's tech, civic, nonprofit, and education sectors.";
