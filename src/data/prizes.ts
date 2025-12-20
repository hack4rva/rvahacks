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
    description: "Ready for Integration",
    color: "border-yellow-500 bg-yellow-500/10",
  },
  {
    title: "People's Choice",
    amount: "$2,500",
    description: "Audience Favorite",
    color: "border-pink-500 bg-pink-500/10",
  },
  {
    title: "Judges' Choice",
    amount: "$2,500",
    description: "Best Overall Solution",
    color: "border-violet-500 bg-violet-500/10",
  },
  {
    title: "Pillar 1: Thriving City Hall",
    amount: "$1,000",
    description: "Government efficiency, service delivery, IT modernization",
    color: "border-blue-500 bg-blue-500/10",
  },
  {
    title: "Pillar 2: Thriving Neighborhoods",
    amount: "$1,000",
    description: "Housing production, affordability, eviction prevention",
    color: "border-red-500 bg-red-500/10",
  },
  {
    title: "Pillar 3: Thriving Families",
    amount: "$1,000",
    description: "Education, youth programs, out-of-school time",
    color: "border-purple-500 bg-purple-500/10",
  },
  {
    title: "Pillar 4: Thriving Economy",
    amount: "$1,000",
    description: "Workforce development, small business, economic mobility",
    color: "border-emerald-500 bg-emerald-500/10",
  },
  {
    title: "Pillar 5: Inclusive Communities",
    amount: "$1,000",
    description: "Health equity, civil rights, community belonging",
    color: "border-green-500 bg-green-500/10",
  },
  {
    title: "Pillar 6: Thriving Environment",
    amount: "$1,000",
    description: "Climate action, green infrastructure, sustainability",
    color: "border-amber-500 bg-amber-500/10",
  },
  {
    title: "Pillar 7: City Stories",
    amount: "$1,000",
    description: "Historical truth-telling, Shockoe Project, reconciliation",
    color: "border-cyan-500 bg-cyan-500/10",
  },
];

/** Prize pool total */
export const prizePoolTotal = "$17K+";

/** Submission timeline */
export const prizeTimeline = [
  { label: "Saturday Evening", description: "All solutions due" },
  { label: "Sunday Finals", description: "Finalists present live pitches" },
  { label: "Winners Announced", description: "Awards ceremony with Mayor Avula" },
];