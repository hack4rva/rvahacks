/**
 * Single source of truth for network connectors.
 * People who bridge networks and can make introductions.
 * Source: knowledge-base/02-team-governance/
 */

export interface Connector {
  name: string;
  description: string;
}

export const connectors: Connector[] = [
  {
    name: "Dawson Boyer",
    description: "Community connector with broad Richmond network",
  },
  {
    name: "Drew Cleveland",
    description: "Startup and entrepreneurial ecosystem connections",
  },
  {
    name: "Nick Serfass",
    description: "Tech community and professional network",
  },
  {
    name: "Paul Devitt",
    description: "Business and civic leadership connections",
  },
  {
    name: "Danny Avula",
    description: "Public health and government network",
  },
  {
    name: "Ankit Mathur",
    description: "Technology and innovation community",
  },
  {
    name: "Judy Crenshaw",
    description: "Community and neighborhood connections",
  },
  {
    name: "Debbie Irwin",
    description: "Economic development and business community",
  },
];

