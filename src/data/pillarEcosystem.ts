/**
 * Single source of truth for the 7-pillar stakeholder ecosystem.
 * Each pillar has: City Liaison + Nonprofit Partner + Corporate Sponsor
 * Source: knowledge-base/02-team-governance/pillar-ecosystem.md
 */

import { 
  Building2, 
  Home, 
  Users, 
  Briefcase, 
  Heart, 
  Leaf, 
  BookOpen,
  LucideIcon 
} from "lucide-react";

export type StakeholderStatus = 'not-started' | 'in-conversation' | 'confirmed' | 'complete';

export interface Stakeholder {
  name?: string;
  organization?: string;
  email?: string;
  status: StakeholderStatus;
  notes?: string;
}

export interface Pillar {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  description: string;
  focusAreas: string[];
  icon: LucideIcon;
  color: string;
  awardAmount: string;
  cityLiaison: Stakeholder;
  nonprofitPartner: Stakeholder;
  corporateSponsor: Stakeholder;
}

export const pillars: Pillar[] = [
  {
    id: 'thriving-city-hall',
    number: 1,
    title: 'Thriving City Hall',
    shortTitle: 'City Hall',
    description: 'Government efficiency, IT modernization, service delivery improvements.',
    focusAreas: [
      'Government efficiency',
      'IT modernization',
      'Service delivery',
      'Citizen engagement',
      'Open data'
    ],
    icon: Building2,
    color: 'blue',
    awardAmount: '$1,000',
    cityLiaison: { status: 'not-started' },
    nonprofitPartner: { status: 'not-started' },
    corporateSponsor: { status: 'not-started' },
  },
  {
    id: 'thriving-neighborhoods',
    number: 2,
    title: 'Thriving Neighborhoods',
    shortTitle: 'Neighborhoods',
    description: 'Housing production, affordability, eviction prevention, equitable development.',
    focusAreas: [
      'Housing production',
      'Affordability',
      'Eviction prevention',
      'Equitable development',
      'Zoning transparency'
    ],
    icon: Home,
    color: 'red',
    awardAmount: '$1,000',
    cityLiaison: { status: 'not-started' },
    nonprofitPartner: { status: 'not-started' },
    corporateSponsor: { status: 'not-started' },
  },
  {
    id: 'thriving-families',
    number: 3,
    title: 'Thriving Families',
    shortTitle: 'Families',
    description: 'Education, youth programs, out-of-school time, family support services.',
    focusAreas: [
      'K-12 education',
      'Youth programs',
      'Out-of-school time',
      'Family support',
      'Early childhood'
    ],
    icon: Users,
    color: 'purple',
    awardAmount: '$1,000',
    cityLiaison: { status: 'not-started' },
    nonprofitPartner: { status: 'not-started' },
    corporateSponsor: { status: 'not-started' },
  },
  {
    id: 'thriving-economy',
    number: 4,
    title: 'Thriving Economy',
    shortTitle: 'Economy',
    description: 'Workforce development, small business support, economic mobility.',
    focusAreas: [
      'Workforce development',
      'Job training',
      'Small business support',
      'Minority-owned businesses',
      'Economic mobility'
    ],
    icon: Briefcase,
    color: 'emerald',
    awardAmount: '$1,000',
    cityLiaison: { status: 'not-started' },
    nonprofitPartner: { status: 'not-started' },
    corporateSponsor: { status: 'not-started' },
  },
  {
    id: 'inclusive-communities',
    number: 5,
    title: 'Inclusive Communities',
    shortTitle: 'Communities',
    description: 'Health equity, civil rights, community belonging, social services access.',
    focusAreas: [
      'Health equity',
      'Civil rights',
      'Community belonging',
      'Social services access',
      'Disability inclusion'
    ],
    icon: Heart,
    color: 'pink',
    awardAmount: '$1,000',
    cityLiaison: { status: 'not-started' },
    nonprofitPartner: { status: 'not-started' },
    corporateSponsor: { status: 'not-started' },
  },
  {
    id: 'thriving-environment',
    number: 6,
    title: 'Thriving Environment',
    shortTitle: 'Environment',
    description: 'Climate action, green infrastructure, sustainability, environmental justice.',
    focusAreas: [
      'Climate action',
      'Green infrastructure',
      'Sustainability',
      'Environmental justice',
      'Clean energy'
    ],
    icon: Leaf,
    color: 'green',
    awardAmount: '$1,000',
    cityLiaison: { status: 'not-started' },
    nonprofitPartner: { status: 'not-started' },
    corporateSponsor: { status: 'not-started' },
  },
  {
    id: 'city-stories',
    number: 7,
    title: 'City Stories',
    shortTitle: 'Stories',
    description: 'Historical truth-telling, Shockoe Project, reconciliation, cultural preservation.',
    focusAreas: [
      'Historical truth-telling',
      'Shockoe Project',
      'Racial reconciliation',
      'Cultural preservation',
      'Community narratives'
    ],
    icon: BookOpen,
    color: 'amber',
    awardAmount: '$1,000',
    cityLiaison: { status: 'not-started' },
    nonprofitPartner: { status: 'not-started' },
    corporateSponsor: { status: 'not-started' },
  },
];

/**
 * Cross-cutting role: Data Ambassador
 * One person serving all 7 pillars
 */
export interface DataAmbassador {
  name?: string;
  email?: string;
  organization?: string;
  status: StakeholderStatus;
  notes?: string;
}

export const dataAmbassador: DataAmbassador = {
  status: 'not-started',
};

/**
 * Helper to get status badge styling
 */
export const getStatusStyle = (status: StakeholderStatus): { bg: string; text: string; label: string } => {
  switch (status) {
    case 'not-started':
      return { bg: 'bg-muted', text: 'text-muted-foreground', label: 'Not Started' };
    case 'in-conversation':
      return { bg: 'bg-yellow-500/10', text: 'text-yellow-600', label: 'In Conversation' };
    case 'confirmed':
      return { bg: 'bg-emerald-500/10', text: 'text-emerald-600', label: 'Confirmed' };
    case 'complete':
      return { bg: 'bg-accent/10', text: 'text-accent', label: 'Complete' };
  }
};

/**
 * Calculate overall pillar ecosystem completion
 */
export const getEcosystemProgress = (): { 
  total: number; 
  confirmed: number; 
  percentage: number;
} => {
  let confirmed = 0;
  const total = pillars.length * 3 + 1; // 7 pillars × 3 stakeholders + 1 Data Ambassador

  pillars.forEach(pillar => {
    if (pillar.cityLiaison.status === 'confirmed' || pillar.cityLiaison.status === 'complete') confirmed++;
    if (pillar.nonprofitPartner.status === 'confirmed' || pillar.nonprofitPartner.status === 'complete') confirmed++;
    if (pillar.corporateSponsor.status === 'confirmed' || pillar.corporateSponsor.status === 'complete') confirmed++;
  });

  if (dataAmbassador.status === 'confirmed' || dataAmbassador.status === 'complete') confirmed++;

  return {
    total,
    confirmed,
    percentage: Math.round((confirmed / total) * 100),
  };
};

/**
 * Get color classes for pillar
 */
export const getPillarColorClasses = (color: string): { 
  border: string; 
  bg: string; 
  text: string;
  icon: string;
} => {
  const colorMap: Record<string, { border: string; bg: string; text: string; icon: string }> = {
    blue: { border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-600', icon: 'text-blue-500' },
    red: { border: 'border-red-500/30', bg: 'bg-red-500/10', text: 'text-red-600', icon: 'text-red-500' },
    purple: { border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-600', icon: 'text-purple-500' },
    emerald: { border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-600', icon: 'text-emerald-500' },
    pink: { border: 'border-pink-500/30', bg: 'bg-pink-500/10', text: 'text-pink-600', icon: 'text-pink-500' },
    green: { border: 'border-green-500/30', bg: 'bg-green-500/10', text: 'text-green-600', icon: 'text-green-500' },
    amber: { border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-600', icon: 'text-amber-500' },
  };
  return colorMap[color] || colorMap.blue;
};

/**
 * Potential nonprofit partners by pillar (for recruitment reference)
 */
export const potentialNonprofitPartners: Record<string, string[]> = {
  'thriving-city-hall': [
    'Code for America brigade',
    'Civic tech groups',
    'Government transparency orgs'
  ],
  'thriving-neighborhoods': [
    'RVA Eviction Lab',
    'Housing Opportunities Made Equal',
    'Better Housing Coalition',
    'Richmond Redevelopment & Housing Authority'
  ],
  'thriving-families': [
    'Richmond Public Schools Foundation',
    'YMCA of Greater Richmond',
    'Boys & Girls Club',
    'ChildSavers'
  ],
  'thriving-economy': [
    'Venture Richmond',
    'Black Business Alliance',
    'SWaM organizations',
    'Community Business Partnership'
  ],
  'inclusive-communities': [
    'Health Brigade',
    'Side by Side',
    'Equality Virginia',
    'NAACP Richmond'
  ],
  'thriving-environment': [
    'Groundwork RVA',
    'James River Association',
    'Enrichmond Foundation',
    'Sierra Club Virginia'
  ],
  'city-stories': [
    'Maggie Walker NHS',
    'Black History Museum & Cultural Center',
    'Elegba Folklore Society',
    'Sacred Ground Historical Reclamation Project'
  ],
};

/**
 * Potential corporate sponsors by pillar (for recruitment reference)
 */
export const potentialCorporateSponsors: Record<string, string[]> = {
  'thriving-city-hall': [
    'CoStar Group',
    'Capital One',
    'CarMax',
    'Tech consulting firms'
  ],
  'thriving-neighborhoods': [
    'Real estate developers',
    'Banks and credit unions',
    'Construction companies',
    'Title companies'
  ],
  'thriving-families': [
    'Education technology companies',
    'Childcare providers',
    'Healthcare systems'
  ],
  'thriving-economy': [
    'Staffing agencies',
    'Business services firms',
    'Banks',
    'Accounting firms'
  ],
  'inclusive-communities': [
    'VCU Health',
    'Bon Secours',
    'Insurance companies',
    'Pharmaceutical companies'
  ],
  'thriving-environment': [
    'Dominion Energy',
    'Environmental services companies',
    'Solar/renewable energy companies'
  ],
  'city-stories': [
    'Media companies',
    'Tourism organizations',
    'Cultural institutions',
    'Publishing companies'
  ],
};

