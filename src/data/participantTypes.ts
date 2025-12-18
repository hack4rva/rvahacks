/**
 * Single source of truth for participant types / roles.
 * Source: knowledge-base/08-participant-experience/
 * 
 * Terminology: Using "Hackers, Hustlers, Artists" as primary branding
 * with "Builders, Strategists, Creatives" as accessible alternatives.
 */
import { Code, TrendingUp, Palette, LucideIcon } from "lucide-react";

export interface ParticipantType {
  /** Primary title (playful branding) */
  title: string;
  /** Alternative title (inclusive/accessible) */
  altTitle: string;
  /** Short description of what they do */
  description: string;
  /** Lucide icon component */
  icon: LucideIcon;
  /** SVG path for custom icon (optional, for inline SVGs) */
  svgPath?: string;
}

export const participantTypes: ParticipantType[] = [
  {
    title: "Hackers",
    altTitle: "Builders",
    description: "Developers, engineers, data scientists—build the tech that powers solutions.",
    icon: Code,
    svgPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Hustlers",
    altTitle: "Strategists",
    description: "Strategists, domain experts, project managers—shape the vision and pitch.",
    icon: TrendingUp,
    svgPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Artists",
    altTitle: "Creatives",
    description: "Designers, storytellers, creatives—make solutions beautiful and usable.",
    icon: Palette,
    svgPath: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
];

/** Tagline using participant types */
export const participantTagline = "Hackers, Hustlers, and Artists competing for Gold, Glory, and the Good of RVA";

/** Alternative tagline for accessibility */
export const participantTaglineAlt = "Technologists, Strategists, and Creatives building real solutions for the Good of RVA";
