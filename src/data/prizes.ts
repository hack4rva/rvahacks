/**
 * Single source of truth for prizes and awards.
 * Source: knowledge-base/06-challenge-design/
 */

export interface PrizeAward {
  title: string;
  amount: string;
  description: string;
  color?: string;
}

export const awardTiers: PrizeAward[] = [
  {
    title: "Mayor's Choice",
    amount: "$5,000",
    description: "Best Overall Solution",
    color: "border-yellow-500 bg-yellow-500/10",
  },
  {
    title: "Housing Award",
    amount: "$2,500",
    description: "Eviction prevention, tenant rights, affordable housing",
    color: "border-accent bg-accent/10",
  },
  {
    title: "Jobs Award",
    amount: "$2,500",
    description: "Workforce development, small business, economic mobility",
    color: "border-accent bg-accent/10",
  },
  {
    title: "Transit Award",
    amount: "$2,500",
    description: "Transportation access, mobility equity, GRTC integration",
    color: "border-accent bg-accent/10",
  },
  {
    title: "Track Awards",
    amount: "$1,000",
    description: "Sponsor-defined criteria",
    color: "border-primary bg-primary/5",
  },
];

/** Prize pool total */
export const prizePoolTotal = "$15K+";

/** Submission timeline */
export const prizeTimeline = [
  { label: "Saturday Evening", description: "All solutions due" },
  { label: "Sunday Finals", description: "Finalists present live pitches" },
  { label: "Winners Announced", description: "Awards ceremony with Mayor Avula" },
];