/**
 * Communication Plan Milestones
 * Source: knowledge-base/01-planning-strategy/communication-plan.md
 */

export type MilestoneStatus = 'complete' | 'in-progress' | 'not-started';
export type Phase = 'foundation' | 'ecosystem' | 'the-work' | 'resources' | 'launch' | 'epilogue';

export interface MilestoneComponent {
  name: string;
  target: string;
  status: MilestoneStatus;
  notes?: string;
}

export interface Milestone {
  level: number;
  phase: Phase;
  name: string;
  description: string;
  targetCount: string;
  status: MilestoneStatus;
  progress: string;
  components?: MilestoneComponent[];
  targetDate?: string;
  parallelWith?: number[];
  announcementTemplate?: string;
}

export const phases: { id: Phase; name: string; theme: string; levels: string }[] = [
  { id: 'foundation', name: 'Act I: Foundation', theme: '"It\'s Real"', levels: '1-2' },
  { id: 'ecosystem', name: 'Act II: Ecosystem', theme: '"We Have the People"', levels: '3-5' },
  { id: 'the-work', name: 'Act III: The Work', theme: '"We Know What We\'re Doing"', levels: '6-8' },
  { id: 'resources', name: 'Act IV: Resources', theme: '"We Have What We Need"', levels: '9-10' },
  { id: 'launch', name: 'Act V: Launch', theme: '"We\'re Open"', levels: '11-12' },
  { id: 'epilogue', name: 'Epilogue', theme: 'Implementation', levels: '13' },
];

export const milestones: Milestone[] = [
  {
    level: 1,
    phase: 'foundation',
    name: 'Foundation Lock',
    description: 'Date, venue, fiscal sponsor, title sponsor, kickoff meeting',
    targetCount: '5 components',
    status: 'in-progress',
    progress: '2 of 5',
    targetDate: 'End of January 2026',
    components: [
      { name: 'Event Date', target: 'March 27-29, 2026', status: 'complete', notes: 'Friday evening → Sunday evening' },
      { name: 'Venue Partner', target: 'Science Museum of Virginia', status: 'complete', notes: 'Crystal Harvey as liaison' },
      { name: 'Fiscal Sponsor', target: 'AI Ready RVA', status: 'in-progress', notes: 'In discussions' },
      { name: 'Title Sponsor', target: 'CoStar ($50K+)', status: 'in-progress', notes: 'Will Melton leading' },
      { name: 'Founding Partners Kickoff', target: 'All parties aligned', status: 'not-started', notes: 'Required to complete Level 1' },
    ],
    announcementTemplate: 'Hack for RVA is official. With AI Ready RVA as our fiscal sponsor, CoStar as our title sponsor, the Science Museum of Virginia as our home, and the full backing of the City of Richmond—Richmond\'s first civic hackathon is locked for March 27-29, 2026.',
  },
  {
    level: 2,
    phase: 'foundation',
    name: 'Core Team',
    description: '7 leadership areas defined and staffed',
    targetCount: '7 roles',
    status: 'in-progress',
    progress: '6 of 7',
    targetDate: 'Mid-February 2026',
    components: [
      { name: 'Chief Hacker', target: 'Overall vision', status: 'complete', notes: 'Ford Prior' },
      { name: 'Ops Director', target: 'Logistics, catering, AV', status: 'complete', notes: 'Crystal Harvey' },
      { name: 'City Liaison', target: 'Government stakeholders', status: 'complete', notes: 'Michael Kolbe' },
      { name: 'Marketing & Comms', target: 'Brand, social, press', status: 'complete', notes: 'Sinclair Jenks' },
      { name: 'Entrepreneurial Ecosystems', target: 'Mentorship, coaching', status: 'complete', notes: 'Heather Lyne' },
      { name: 'Sponsorships & Partnerships', target: 'Corporate, nonprofit', status: 'complete', notes: 'Will Melton' },
      { name: 'Community & Volunteers', target: 'Volunteer recruitment', status: 'not-started', notes: 'TBD' },
    ],
  },
  {
    level: 3,
    phase: 'ecosystem',
    name: 'Track Teams',
    description: '21 stakeholders across 7 Tracks (3 each: Community Partner Rep, City Partner, Breakout Coordinator)',
    targetCount: '21 people',
    status: 'not-started',
    progress: '0 of 21',
    targetDate: 'End of February 2026',
    parallelWith: [6],
  },
  {
    level: 4,
    phase: 'ecosystem',
    name: 'Corporate Partners',
    description: 'Corporate Partner rep added to each Track (completes the "foursome")',
    targetCount: '7 people',
    status: 'not-started',
    progress: '0 of 7',
    targetDate: 'Mid-March 2026',
  },
  {
    level: 5,
    phase: 'ecosystem',
    name: 'Satellite Locations',
    description: 'Distributed hack spaces including 2 all-night venues (UR + VCU)',
    targetCount: '~15 locations',
    status: 'not-started',
    progress: '0 of ~15',
    targetDate: 'Mid-March 2026',
    components: [
      { name: 'All-Night: UR', target: '24-hour access', status: 'not-started' },
      { name: 'All-Night: VCU', target: 'daVinci Center', status: 'not-started' },
      { name: 'Daytime Satellites', target: '~13 venues', status: 'not-started', notes: 'Coworking, corporate, libraries' },
    ],
  },
  {
    level: 6,
    phase: 'the-work',
    name: 'Challenge Design',
    description: '7 crisp problem statements with research + raw data',
    targetCount: '7 challenges',
    status: 'not-started',
    progress: '0 of 7',
    targetDate: 'Early March 2026',
    parallelWith: [3],
    components: [
      { name: 'Problem Statements', target: '7 Tracks', status: 'not-started' },
      { name: 'Research Briefs', target: 'Context docs', status: 'not-started' },
      { name: 'Data Packages', target: 'Curated datasets', status: 'not-started' },
      { name: 'Grading Rubrics', target: 'Evaluation criteria', status: 'not-started' },
    ],
  },
  {
    level: 7,
    phase: 'the-work',
    name: 'Leadership Crew',
    description: '23 sub-roles beyond core leadership (special t-shirt tier)',
    targetCount: '23 roles',
    status: 'not-started',
    progress: '0 of 23',
    targetDate: 'End of February 2026',
  },
  {
    level: 8,
    phase: 'the-work',
    name: 'Academia Pipeline',
    description: 'K-12 districts + specialty schools + universities confirmed',
    targetCount: '10+ partners',
    status: 'not-started',
    progress: '0 of 10',
    targetDate: 'Mid-February 2026',
    components: [
      { name: 'K-12 Districts', target: 'RPS, Henrico, Chesterfield', status: 'not-started', notes: 'Bus deadline: Feb 13' },
      { name: 'Specialty Schools', target: 'CodeRVA, MLWGS, Gov Academy', status: 'not-started' },
      { name: 'Universities', target: 'VCU, UR, VSU', status: 'not-started' },
      { name: 'Compliance', target: 'VCU minors registration', status: 'not-started', notes: 'Deadline: Feb 25' },
    ],
  },
  {
    level: 9,
    phase: 'resources',
    name: 'Prize Pool Secured',
    description: '$17K+ in awards funded and committed',
    targetCount: '$17K+',
    status: 'not-started',
    progress: '$0',
    targetDate: 'Mid-March 2026',
    components: [
      { name: "Mayor's Choice", target: '$5,000', status: 'not-started', notes: 'Title Sponsor' },
      { name: "People's Choice", target: '$2,500', status: 'not-started', notes: 'Title Sponsor' },
      { name: "Judges' Choice", target: '$2,500', status: 'not-started', notes: 'Title Sponsor' },
      { name: '7 Track Awards', target: '$7,000 ($1K each)', status: 'not-started', notes: 'Track Sponsors' },
    ],
  },
  {
    level: 10,
    phase: 'resources',
    name: 'Volunteer Army',
    description: '150-200 volunteers recruited + trained',
    targetCount: '150-200',
    status: 'not-started',
    progress: '0',
    targetDate: 'Mid-March 2026',
    components: [
      { name: 'Pre-Event', target: '25-35', status: 'not-started' },
      { name: 'Friday', target: '35-45', status: 'not-started' },
      { name: 'Saturday', target: '60-80', status: 'not-started' },
      { name: 'Sunday', target: '30-40', status: 'not-started' },
      { name: 'Support (Mentors)', target: '30-40', status: 'not-started' },
    ],
  },
  {
    level: 11,
    phase: 'launch',
    name: 'Platform Ready',
    description: 'Devpost + Discord + GitHub configured, tested',
    targetCount: '3 platforms',
    status: 'not-started',
    progress: '0 of 3',
    targetDate: 'Early March 2026',
    components: [
      { name: 'Devpost', target: 'Submissions configured', status: 'not-started' },
      { name: 'Discord', target: 'Channels + bots', status: 'not-started' },
      { name: 'GitHub Org', target: 'Team repos ready', status: 'not-started' },
    ],
  },
  {
    level: 12,
    phase: 'launch',
    name: 'Registration Open',
    description: '300+ participants / 30+ teams registered',
    targetCount: '300+ / 30+',
    status: 'not-started',
    progress: '0',
    targetDate: 'Early March 2026',
    components: [
      { name: 'Participants', target: '300+', status: 'not-started' },
      { name: 'Teams', target: '30+', status: 'not-started' },
      { name: 'Diversity Targets', target: '30% women, 40% URM', status: 'not-started' },
    ],
  },
  {
    level: 13,
    phase: 'epilogue',
    name: 'Implementation Handoff',
    description: 'Top winners have 90-day plans + city department matches',
    targetCount: '3+ solutions',
    status: 'not-started',
    progress: '0',
    targetDate: 'End of June 2026',
    components: [
      { name: '90-Day Roadmaps', target: 'Top 3+ winners', status: 'not-started' },
      { name: 'City Matches', target: 'Department intros', status: 'not-started' },
      { name: 'Demo Day', target: 'City council presentation', status: 'not-started' },
    ],
  },
];

// Summary statistics
export const planStats = {
  totalLevels: milestones.length,
  completedLevels: milestones.filter(m => m.status === 'complete').length,
  inProgressLevels: milestones.filter(m => m.status === 'in-progress').length,
  notStartedLevels: milestones.filter(m => m.status === 'not-started').length,
  eventDate: 'March 27-29, 2026',
};

