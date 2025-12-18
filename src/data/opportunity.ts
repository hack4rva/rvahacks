/**
 * Single source of truth for "The Opportunity" messaging.
 * Source: knowledge-base/01-planning-strategy/
 */

export interface OpportunityItem {
  title: string;
  description: string;
}

export const opportunityItems: OpportunityItem[] = [
  {
    title: "The Talent",
    description: "Thousands of technologists at major RVA companies and VCU",
  },
  {
    title: "The Leadership",
    description: "Mayor Danny Avula with a clear action plan for Richmond's future",
  },
  {
    title: "The Challenge",
    description: "Build solutions that grow jobs, cut poverty, support small businesses, and create wealth for all Richmonders",
  },
  {
    title: "The Moment",
    description: "A city ready to show what public-private partnership can achieve",
  },
];

export const opportunityIntro = "Richmond is at an inflection point. We have:";
export const opportunityConclusion = "But we've never channeled this energy toward civic good.";
export const opportunityCTA = "Until now.";
