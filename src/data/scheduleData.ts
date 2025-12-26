/**
 * Master Schedule Data
 * Source: knowledge-base/01-planning-strategy/master-schedule.md
 */

export type TaskType = 'event' | 'content' | 'team' | 'comms' | 'milestone';
export type TaskStatus = 'complete' | 'in-progress' | 'pending' | 'blocked';
export type TaskPriority = 'critical' | 'high' | 'medium' | 'low';

export interface Task {
  id: string;
  title: string;
  type: TaskType;
  status: TaskStatus;
  owner?: string;
  date?: string;
  notes?: string;
  priority?: TaskPriority;
  dependencies?: string[];
}

export interface WeekSchedule {
  weekNumber: number;
  startDate: string;
  endDate: string;
  daysUntilEvent: string;
  theme: string;
  milestonesDue: string[];
  prepTasks: Task[];
  mainActivities: Task[];
  followUpTasks: Task[];
  parallelWorkstreams?: { workstream: string; activities: string; owner: string }[];
  resourceConflicts?: string[];
  quickWins?: string[];
  runningMetrics?: { label: string; value: string }[];
}

export interface PreReq {
  id: string;
  title: string;
  priority: TaskPriority;
  owner: string;
  dependency: string;
  status: TaskStatus;
  dueDate: string;
}

export const preReqs: { critical: PreReq[]; highPriority: PreReq[]; prep: PreReq[] } = {
  critical: [
    { id: 'prereq-1', title: 'Order business cards (500 min)', priority: 'critical', owner: 'Ford', dependency: 'Needed for Jan 6 RVA JS', status: 'pending', dueDate: 'Jan 3' },
    { id: 'prereq-2', title: 'Landing page live (hackforrva.com)', priority: 'critical', owner: 'Ford', dependency: 'QR codes point here', status: 'pending', dueDate: 'Jan 3' },
    { id: 'prereq-3', title: 'QR code generated + tested', priority: 'critical', owner: 'Ford', dependency: 'Links to landing page', status: 'pending', dueDate: 'Jan 3' },
    { id: 'prereq-4', title: '5-min pitch deck finalized', priority: 'critical', owner: 'Ford', dependency: 'Jan 6 presentation', status: 'pending', dueDate: 'Jan 3' },
    { id: 'prereq-5', title: 'Sponsor one-pager drafted', priority: 'critical', owner: 'Will', dependency: 'Enables all sponsor asks', status: 'pending', dueDate: 'Jan 3' },
  ],
  highPriority: [
    { id: 'prereq-6', title: 'Email Nick Serfass (lock Jan 15 slot)', priority: 'high', owner: 'Ford', dependency: 'RVA Tech C-Suite access', status: 'pending', dueDate: 'Jan 5' },
    { id: 'prereq-7', title: 'Email Aaron Baker (Data & AI Summit booth)', priority: 'high', owner: 'Ford', dependency: 'Feb event presence', status: 'pending', dueDate: 'Jan 5' },
    { id: 'prereq-8', title: 'Email Michael Kolbe (op-ed co-author)', priority: 'high', owner: 'Ford', dependency: 'March content', status: 'pending', dueDate: 'Jan 5' },
    { id: 'prereq-9', title: 'Secure $500-$1K seed funding', priority: 'high', owner: 'Ford/Will', dependency: 'Credibility capital', status: 'pending', dueDate: 'Jan 5' },
    { id: 'prereq-10', title: 'Scout Beers & Bugs venue (Jan 13)', priority: 'high', owner: 'TBD', dependency: 'Wall space + taping', status: 'pending', dueDate: 'Jan 5' },
    { id: 'prereq-11', title: 'Draft Council member emails (4 districts)', priority: 'high', owner: 'Ford', dependency: 'Personalized asks', status: 'pending', dueDate: 'Jan 5' },
  ],
  prep: [
    { id: 'prereq-12', title: 'Rehearse 5-min pitch 3x', priority: 'medium', owner: 'Ford', dependency: 'Confidence at RVA JS', status: 'pending', dueDate: 'Jan 5' },
    { id: 'prereq-13', title: 'USB backup of slides', priority: 'medium', owner: 'Ford', dependency: 'AV contingency', status: 'pending', dueDate: 'Jan 5' },
    { id: 'prereq-14', title: 'Print 50 cards (home printer backup)', priority: 'medium', owner: 'Ford', dependency: 'If order delayed', status: 'pending', dueDate: 'Jan 5' },
    { id: 'prereq-15', title: 'Confirm VCU/UVA postering rules', priority: 'medium', owner: 'TBD', dependency: 'Jan 10 campus blitz', status: 'pending', dueDate: 'Jan 5' },
  ],
};

export const hardDeadlines: { date: string; constraint: string; impact: string }[] = [
  { date: 'Feb 13', constraint: 'HCPS/CCPS bus requests due', impact: 'No K-12 transportation' },
  { date: 'Feb 25', constraint: 'VCU Protection of Minors registration', impact: "Can't host minors" },
  { date: 'Feb 28', constraint: 'Prize pool $17K+ secured', impact: "Announcement can't happen" },
  { date: 'Mar 1', constraint: 'Challenge briefs finalized', impact: "Participants can't prep" },
  { date: 'Mar 1', constraint: 'Insurance bound ($1M/$2M)', impact: 'Event at risk' },
  { date: 'Mar 7', constraint: 'Registration system live', impact: "Can't accept signups" },
  { date: 'Mar 7-14', constraint: 'Op-ed publishes (2-3 weeks before)', impact: 'Miss media window' },
  { date: 'Mar 15', constraint: 'Parent permission slips collected', impact: "Minors can't attend" },
  { date: 'Mar 20', constraint: 'Chaperone background checks done', impact: 'Compliance failure' },
];

export const printLeadTimes: { item: string; orderBy: string; neededFor: string }[] = [
  { item: 'Business cards (500)', orderBy: 'Dec 30', neededFor: 'Jan 6 RVA JS' },
  { item: 'Posters/flyers (100)', orderBy: 'Jan 3', neededFor: 'Jan 10 campus blitz' },
  { item: 'T-shirts (organizers, 30)', orderBy: 'Feb 7', neededFor: 'Feb 14 team photos' },
  { item: 'T-shirts (volunteers, 200)', orderBy: 'Mar 7', neededFor: 'Mar 27 event' },
  { item: 'Banners/signage', orderBy: 'Mar 14', neededFor: 'Mar 27 event' },
];

export const weeklySchedule: WeekSchedule[] = [
  {
    weekNumber: 1,
    startDate: 'Jan 6',
    endDate: 'Jan 12',
    daysUntilEvent: '80-74',
    theme: 'Establish Credibility',
    milestonesDue: [],
    prepTasks: [
      { id: 'w1-prep-1', title: 'Cards printed and in hand', type: 'content', status: 'pending', owner: 'Ford' },
      { id: 'w1-prep-2', title: '5-min pitch rehearsed (3x minimum)', type: 'team', status: 'pending', owner: 'Ford' },
      { id: 'w1-prep-3', title: 'QR code tested live', type: 'content', status: 'pending', owner: 'Ford' },
      { id: 'w1-prep-4', title: 'VCU/UVA postering rules confirmed', type: 'comms', status: 'pending', owner: 'TBD' },
      { id: 'w1-prep-5', title: 'Chalk + posters procured', type: 'content', status: 'pending', owner: 'TBD' },
      { id: 'w1-prep-6', title: 'City Council public comment registered', type: 'comms', status: 'pending', owner: 'Ford' },
    ],
    mainActivities: [
      { 
        id: 'w1-main-1', 
        title: 'RVA JS Meetup', 
        type: 'event', 
        status: 'pending', 
        owner: 'Ford', 
        date: 'Mon Jan 6',
        notes: 'First technical validation. Key message: "The City has pre-cleared open source adoption pathways."'
      },
      { 
        id: 'w1-main-2', 
        title: 'UVA + VCU Campus Blitz', 
        type: 'event', 
        status: 'pending', 
        owner: 'TBD', 
        date: 'Fri Jan 10',
        notes: 'Intercept students before semester commitments. 200+ flyers target.'
      },
      { 
        id: 'w1-main-3', 
        title: 'City Council Meeting', 
        type: 'event', 
        status: 'pending', 
        owner: 'Ford', 
        date: 'Sun Jan 12',
        notes: 'Official government visibility. Legitimacy anchor.'
      },
    ],
    followUpTasks: [
      { id: 'w1-fu-1', title: 'Email all RVA JS contacts collected', type: 'comms', status: 'pending', owner: 'Ford', date: 'Jan 8' },
      { id: 'w1-fu-2', title: 'Post recap photo to social media', type: 'content', status: 'pending', owner: 'Sinclair', date: 'Jan 8' },
      { id: 'w1-fu-3', title: 'Email Council members (personalized follow-up)', type: 'comms', status: 'pending', owner: 'Ford', date: 'Jan 14' },
      { id: 'w1-fu-4', title: 'Log all contacts in CRM/spreadsheet', type: 'team', status: 'pending', owner: 'TBD', date: 'Jan 13' },
    ],
    quickWins: [
      'RVA JS pitch deck → becomes template for all future tech meetups',
      'Council talking points → reuse for all government conversations',
      'Campus flyer design → reuse for March campus blitz',
    ],
    runningMetrics: [
      { label: 'Events Completed', value: '3' },
      { label: 'Cards Distributed', value: '~50' },
      { label: 'Email Signups', value: '~25' },
      { label: 'Sponsor Dollars', value: '$0' },
    ],
  },
  {
    weekNumber: 2,
    startDate: 'Jan 13',
    endDate: 'Jan 19',
    daysUntilEvent: '73-67',
    theme: 'Community Activation',
    milestonesDue: [],
    prepTasks: [
      { id: 'w2-prep-1', title: 'Beers & Bugs venue confirmed', type: 'team', status: 'pending', owner: 'TBD' },
      { id: 'w2-prep-2', title: '7 poster boards (one per MAP pillar) procured', type: 'content', status: 'pending', owner: 'TBD' },
      { id: 'w2-prep-3', title: 'Sticky notes + markers purchased', type: 'content', status: 'pending', owner: 'TBD' },
      { id: 'w2-prep-4', title: 'Nick Serfass meeting confirmed', type: 'comms', status: 'pending', owner: 'Ford' },
      { id: 'w2-prep-5', title: 'RVA Code & Coffee attendance confirmed', type: 'team', status: 'pending', owner: 'Ford' },
      { id: 'w2-prep-6', title: '"Founding Sponsor" pitch deck ready', type: 'content', status: 'pending', owner: 'Will' },
    ],
    mainActivities: [
      { 
        id: 'w2-main-1', 
        title: 'Beers & Bugs + Sticky Note Session', 
        type: 'event', 
        status: 'pending', 
        owner: 'Ford', 
        date: 'Mon Jan 13',
        notes: 'Generate crowd-sourced problem statements. Output: raw problem statements for challenge briefs.'
      },
      { 
        id: 'w2-main-2', 
        title: 'RVA Tech C-Suite (Nick Serfass)', 
        type: 'event', 
        status: 'pending', 
        owner: 'Ford', 
        date: 'Wed Jan 15',
        notes: 'Corporate sponsor pipeline + executive credibility. CTA: "Sponsor a track ($2.5K–$5K)"'
      },
      { 
        id: 'w2-main-3', 
        title: 'RVA Code & Coffee', 
        type: 'event', 
        status: 'pending', 
        owner: 'Ford', 
        date: 'Sat Jan 17',
        notes: 'Recruit squad leaders (team captains who rally 3-5 others).'
      },
    ],
    followUpTasks: [
      { id: 'w2-fu-1', title: 'Photograph sticky note boards', type: 'content', status: 'pending', owner: 'TBD', date: 'Jan 13' },
      { id: 'w2-fu-2', title: 'Synthesize sticky notes into problem themes', type: 'team', status: 'pending', owner: 'Ford', date: 'Jan 15' },
      { id: 'w2-fu-3', title: 'Email all C-Suite contacts with one-pager', type: 'comms', status: 'pending', owner: 'Will', date: 'Jan 17' },
      { id: 'w2-fu-4', title: 'Email squad leader recruits with next steps', type: 'comms', status: 'pending', owner: 'Ford', date: 'Jan 19' },
      { id: 'w2-fu-5', title: 'Post Beers & Bugs photos to social', type: 'content', status: 'pending', owner: 'Sinclair', date: 'Jan 15' },
    ],
    parallelWorkstreams: [
      { workstream: 'Level 1 (Foundation)', activities: 'Fiscal sponsor discussions with AI Ready RVA', owner: 'Ford' },
      { workstream: 'Level 1 (Foundation)', activities: 'Title sponsor discussions with CoStar', owner: 'Will' },
      { workstream: 'Level 8 (Academia)', activities: 'Initial outreach to RPS, Henrico, Chesterfield CTE leaders', owner: 'TBD' },
      { workstream: 'Level 8 (Academia)', activities: 'VCU/UR partnership discussions', owner: 'TBD' },
    ],
    quickWins: [
      'Sticky note photos → content for sponsor decks, social media, AND challenge brief validation',
      'Squad leader commitments → they recruit 3-5 each = exponential reach',
    ],
    runningMetrics: [
      { label: 'Events Completed', value: '6' },
      { label: 'Cards Distributed', value: '~100' },
      { label: 'Email Signups', value: '~60' },
      { label: 'Sponsor Leads', value: '~5' },
      { label: 'Sponsor Dollars', value: '$0' },
    ],
  },
  {
    weekNumber: 3,
    startDate: 'Jan 20',
    endDate: 'Jan 26',
    daysUntilEvent: '66-60',
    theme: 'Foundation Lock Sprint',
    milestonesDue: ['LEVEL 1 - Foundation Lock (Jan 24)'],
    prepTasks: [
      { id: 'w3-prep-1', title: 'AI Ready RVA agreement drafted', type: 'team', status: 'pending', owner: 'Ford' },
      { id: 'w3-prep-2', title: 'CoStar commitment confirmed', type: 'team', status: 'pending', owner: 'Will' },
      { id: 'w3-prep-3', title: 'Kickoff meeting scheduled (all founding partners)', type: 'team', status: 'pending', owner: 'Ford' },
      { id: 'w3-prep-4', title: 'Level 1 announcement drafted', type: 'content', status: 'pending', owner: 'Sinclair' },
    ],
    mainActivities: [
      { 
        id: 'w3-main-1', 
        title: 'Foundation Lock Sprint', 
        type: 'team', 
        status: 'pending', 
        owner: 'Ford/Will', 
        date: 'Mon-Thu',
        notes: 'Close remaining Level 1 components: fiscal sponsor, title sponsor, kickoff meeting.'
      },
      { 
        id: 'w3-main-2', 
        title: 'MILESTONE: Foundation Lock', 
        type: 'milestone', 
        status: 'pending', 
        owner: 'Ford', 
        date: 'Fri Jan 24',
        notes: 'Announcement: Press release + social media + website update. "Hack for RVA is official."',
        priority: 'critical'
      },
    ],
    followUpTasks: [
      { id: 'w3-fu-1', title: 'Publish Level 1 announcement', type: 'content', status: 'pending', owner: 'Sinclair', date: 'Jan 24' },
      { id: 'w3-fu-2', title: 'Email all contacts with announcement', type: 'comms', status: 'pending', owner: 'Ford', date: 'Jan 25' },
      { id: 'w3-fu-3', title: 'Pitch to RTD, Richmond Magazine', type: 'comms', status: 'pending', owner: 'Sinclair', date: 'Jan 26' },
      { id: 'w3-fu-4', title: 'Update website with sponsor logos', type: 'content', status: 'pending', owner: 'Ford', date: 'Jan 26' },
    ],
    parallelWorkstreams: [
      { workstream: 'Level 2 (Core Team)', activities: 'Identify Community & Volunteers lead candidate', owner: 'Ford' },
      { workstream: 'Level 3 (Pillars)', activities: 'Begin nonprofit partner outreach (7 pillars)', owner: 'Michael' },
      { workstream: 'Level 6 (Challenges)', activities: 'Refine sticky note themes into draft problem statements', owner: 'Ford' },
      { workstream: 'Level 8 (Academia)', activities: 'Schedule meetings with CTE leaders', owner: 'TBD' },
    ],
    resourceConflicts: [
      'Ford is pulled between Foundation Lock negotiations AND continuing outreach',
      'Will is critical for CoStar close — may need to deprioritize other sponsor outreach this week',
    ],
    runningMetrics: [
      { label: 'Events Completed', value: '6 (no new events)' },
      { label: 'Cards Distributed', value: '~100' },
      { label: 'Email Signups', value: '~60' },
      { label: 'Sponsor Dollars', value: '$10,000 (if CoStar closes)' },
    ],
  },
  {
    weekNumber: 4,
    startDate: 'Jan 27',
    endDate: 'Feb 2',
    daysUntilEvent: '59-53',
    theme: 'Team Formation',
    milestonesDue: ['LEVEL 2 - Core Team (Jan 31)'],
    prepTasks: [
      { id: 'w4-prep-1', title: 'Community & Volunteers candidates identified', type: 'team', status: 'pending', owner: 'Ford' },
      { id: 'w4-prep-2', title: 'Level 2 team photos scheduled', type: 'content', status: 'pending', owner: 'Sinclair' },
      { id: 'w4-prep-3', title: 'Level 2 announcement drafted', type: 'content', status: 'pending', owner: 'Sinclair' },
      { id: 'w4-prep-4', title: 'First email drip campaign drafted', type: 'comms', status: 'pending', owner: 'Sinclair' },
    ],
    mainActivities: [
      { 
        id: 'w4-main-1', 
        title: 'Core Team Finalization', 
        type: 'team', 
        status: 'pending', 
        owner: 'Ford', 
        date: 'Mon-Thu',
        notes: 'Fill Community & Volunteers role. Interview candidates, make offer, onboard.'
      },
      { 
        id: 'w4-main-2', 
        title: 'MILESTONE: Core Team Complete', 
        type: 'milestone', 
        status: 'pending', 
        owner: 'Ford', 
        date: 'Fri Jan 31',
        notes: 'Announcement: Team spotlight blog post + social media.',
        priority: 'critical'
      },
    ],
    followUpTasks: [
      { id: 'w4-fu-1', title: 'Publish Level 2 announcement', type: 'content', status: 'pending', owner: 'Sinclair', date: 'Jan 31' },
      { id: 'w4-fu-2', title: 'Each core leader posts on LinkedIn', type: 'content', status: 'pending', owner: 'All', date: 'Feb 2' },
      { id: 'w4-fu-3', title: 'Email drip #1: "Thanks for hearing us—here\'s the full pitch"', type: 'comms', status: 'pending', owner: 'Sinclair', date: 'Feb 2' },
      { id: 'w4-fu-4', title: 'Update website team page', type: 'content', status: 'pending', owner: 'Ford', date: 'Feb 2' },
    ],
    parallelWorkstreams: [
      { workstream: 'Level 3 (Pillars)', activities: 'Continue nonprofit partner outreach', owner: 'Michael' },
      { workstream: 'Level 6 (Challenges)', activities: 'Draft problem statements for 3+ pillars', owner: 'Ford + Michael' },
      { workstream: 'Level 7 (Leadership Crew)', activities: 'Identify candidates for 23 sub-roles', owner: 'All core team' },
      { workstream: 'Level 8 (Academia)', activities: 'Meet with RPS CTE leader (Dr. Rhonda Turner)', owner: 'TBD' },
      { workstream: 'Level 8 (Academia)', activities: 'Meet with Henrico CTE leader (Mac Beaton)', owner: 'TBD' },
    ],
    runningMetrics: [
      { label: 'Events Completed', value: '6' },
      { label: 'Cards Distributed', value: '~100' },
      { label: 'Email Signups', value: '~80' },
      { label: 'Sponsor Dollars', value: '$10,000' },
    ],
  },
  {
    weekNumber: 5,
    startDate: 'Feb 3',
    endDate: 'Feb 9',
    daysUntilEvent: '52-46',
    theme: 'Corporate & Security Push',
    milestonesDue: [],
    prepTasks: [
      { id: 'w5-prep-1', title: 'RVA JS return visit confirmed', type: 'team', status: 'pending', owner: 'Ford' },
      { id: 'w5-prep-2', title: 'Feb 6 event details clarified', type: 'team', status: 'pending', owner: 'TBD' },
      { id: 'w5-prep-3', title: 'Hack for RVA T-shirts ordered (organizer batch)', type: 'content', status: 'pending', owner: 'Sinclair' },
      { id: 'w5-prep-4', title: 'Challenge brief previews ready (3+ tracks)', type: 'content', status: 'pending', owner: 'Ford' },
      { id: 'w5-prep-5', title: 'CyberVA booth/table secured', type: 'team', status: 'pending', owner: 'TBD' },
    ],
    mainActivities: [
      { 
        id: 'w5-main-1', 
        title: 'RVA JS Meetup (Return Visit)', 
        type: 'event', 
        status: 'pending', 
        owner: 'Ford', 
        date: 'Mon Feb 3',
        notes: 'Update on progress. New CTA: Early registration incentive.'
      },
      { 
        id: 'w5-main-2', 
        title: 'Corporate Networking Event (TBD)', 
        type: 'event', 
        status: 'pending', 
        owner: 'TBD', 
        date: 'Thu Feb 6',
        notes: 'Recruit corporate teams. ⚠️ NEEDS CLARIFICATION: What event is this?'
      },
    ],
    followUpTasks: [
      { id: 'w5-fu-1', title: 'Email RVA JS attendees with registration link', type: 'comms', status: 'pending', owner: 'Ford', date: 'Feb 5' },
      { id: 'w5-fu-2', title: 'Email corporate contacts from Feb 6 event', type: 'comms', status: 'pending', owner: 'Will', date: 'Feb 8' },
      { id: 'w5-fu-3', title: 'Post team photos in branded shirts', type: 'content', status: 'pending', owner: 'Sinclair', date: 'Feb 8' },
    ],
    parallelWorkstreams: [
      { workstream: 'Level 3 (Pillars)', activities: 'Confirm 10+ of 21 stakeholders', owner: 'Michael' },
      { workstream: 'Level 4 (Corporate)', activities: 'Pillar sponsor outreach ($1K each)', owner: 'Will' },
      { workstream: 'Level 5 (Satellites)', activities: 'Outreach to Common House, Startup Virginia, libraries', owner: 'Crystal' },
      { workstream: 'Level 7 (Leadership)', activities: 'Confirm 10+ of 23 sub-roles', owner: 'Core Team' },
      { workstream: 'Level 8 (Academia)', activities: 'Meet with Chesterfield CTE (Chad Maclin)', owner: 'TBD' },
      { workstream: 'Level 9 (Prize Pool)', activities: 'Pillar sponsor asks ($1K x 7)', owner: 'Will' },
    ],
    resourceConflicts: [
      'Everyone is pulled between Level 3 (pillars), Level 7 (leadership), Level 8 (academia), and sponsor outreach',
      'Recommendation: Split focus by person — Michael → Pillars, Will → Sponsors, Crystal → Satellites, Ford → Academia + Leadership',
    ],
    runningMetrics: [
      { label: 'Events Completed', value: '8' },
      { label: 'Registered Participants', value: '~20' },
      { label: 'Sponsor Dollars', value: '~$12,000' },
    ],
  },
  {
    weekNumber: 6,
    startDate: 'Feb 10',
    endDate: 'Feb 16',
    daysUntilEvent: '45-39',
    theme: 'Triple Milestone Week',
    milestonesDue: ['LEVEL 8 - Academia Pipeline (Feb 13) ⚠️ HARD', 'LEVEL 3 - Pillar Teams (Feb 14)', 'LEVEL 7 - Leadership Crew (Feb 14)'],
    prepTasks: [
      { id: 'w6-prep-1', title: 'HCPS/CCPS bus request forms completed', type: 'team', status: 'pending', owner: 'TBD', priority: 'critical' },
      { id: 'w6-prep-2', title: 'All 21 pillar stakeholders confirmed', type: 'team', status: 'pending', owner: 'Michael' },
      { id: 'w6-prep-3', title: 'All 27 leadership roles confirmed', type: 'team', status: 'pending', owner: 'All' },
      { id: 'w6-prep-4', title: 'CyberVA table setup planned', type: 'content', status: 'pending', owner: 'TBD' },
      { id: 'w6-prep-5', title: 'Teacher Toolkits drafted', type: 'content', status: 'pending', owner: 'TBD' },
    ],
    mainActivities: [
      { 
        id: 'w6-main-1', 
        title: 'CyberVA @ Convention Center', 
        type: 'event', 
        status: 'pending', 
        owner: 'TBD', 
        date: 'Wed Feb 12',
        notes: 'Recruit security professionals for Thriving City Hall track.'
      },
      { 
        id: 'w6-main-2', 
        title: 'HARD DEADLINE: Academia Pipeline', 
        type: 'milestone', 
        status: 'pending', 
        owner: 'TBD', 
        date: 'Thu Feb 13',
        notes: 'Submit bus requests to HCPS/CCPS. At least 2 K-12 districts confirmed.',
        priority: 'critical'
      },
      { 
        id: 'w6-main-3', 
        title: 'MILESTONE: Pillar Teams + Leadership Crew', 
        type: 'milestone', 
        status: 'pending', 
        owner: 'Michael/All', 
        date: 'Fri Feb 14',
        notes: '21 pillar stakeholders + 27 leadership roles confirmed.',
        priority: 'critical'
      },
    ],
    followUpTasks: [
      { id: 'w6-fu-1', title: 'Distribute Teacher Toolkits to confirmed schools', type: 'comms', status: 'pending', owner: 'TBD', date: 'Feb 15' },
      { id: 'w6-fu-2', title: 'Publish pillar teams announcement', type: 'content', status: 'pending', owner: 'Sinclair', date: 'Feb 15' },
      { id: 'w6-fu-3', title: 'Email all stakeholders with onboarding info', type: 'comms', status: 'pending', owner: 'Ford', date: 'Feb 16' },
      { id: 'w6-fu-4', title: 'Email drip #2: "City partners confirmed, tracks finalized"', type: 'comms', status: 'pending', owner: 'Sinclair', date: 'Feb 16' },
    ],
    parallelWorkstreams: [
      { workstream: 'Level 4 (Corporate)', activities: 'Continue pillar sponsor recruitment', owner: 'Will' },
      { workstream: 'Level 5 (Satellites)', activities: 'Confirm 10+ locations', owner: 'Crystal' },
      { workstream: 'Level 6 (Challenges)', activities: 'Finalize 5+ of 7 challenge briefs', owner: 'Ford + Michael' },
      { workstream: 'Level 9 (Prize Pool)', activities: 'Push toward $15K target', owner: 'Will' },
    ],
    resourceConflicts: [
      'CRITICAL: Academia deadline (Feb 13) is hard — cannot be missed',
      'Recommendation: Ford focuses exclusively on academia until Feb 13',
      'Recommendation: Michael drives pillar confirmation',
      'Recommendation: Will handles all sponsor conversations',
    ],
    runningMetrics: [
      { label: 'Events Completed', value: '9' },
      { label: 'Registered Participants', value: '~40' },
      { label: 'Pillar Stakeholders', value: '21 of 21' },
      { label: 'Leadership Crew', value: '27 of 27' },
      { label: 'Sponsor Dollars', value: '~$14,000' },
    ],
  },
  {
    weekNumber: 7,
    startDate: 'Feb 17',
    endDate: 'Feb 23',
    daysUntilEvent: '38-32',
    theme: 'Ecosystem Complete',
    milestonesDue: ['LEVEL 4 - Corporate Pillars (Feb 21)', 'LEVEL 5 - Satellite Locations (Feb 21)', 'LEVEL 6 - Challenge Design (Feb 21)'],
    prepTasks: [
      { id: 'w7-prep-1', title: 'All 7 pillar sponsors committed', type: 'team', status: 'pending', owner: 'Will' },
      { id: 'w7-prep-2', title: 'All satellite locations confirmed', type: 'team', status: 'pending', owner: 'Crystal' },
      { id: 'w7-prep-3', title: 'All 7 challenge briefs drafted', type: 'content', status: 'pending', owner: 'Ford + Michael' },
      { id: 'w7-prep-4', title: 'Research briefs attached to each challenge', type: 'content', status: 'pending', owner: 'Pre-Event Prep Team' },
      { id: 'w7-prep-5', title: 'Data packages curated for each pillar', type: 'content', status: 'pending', owner: 'Data Ambassador' },
    ],
    mainActivities: [
      { 
        id: 'w7-main-1', 
        title: 'Final Push on Levels 4, 5, 6', 
        type: 'team', 
        status: 'pending', 
        owner: 'All', 
        date: 'Mon-Thu',
        notes: 'Close remaining pillar sponsors, finalize satellite venues, complete challenge briefs.'
      },
      { 
        id: 'w7-main-2', 
        title: 'MILESTONE: Ecosystem + Challenges Complete', 
        type: 'milestone', 
        status: 'pending', 
        owner: 'All', 
        date: 'Fri Feb 21',
        notes: 'Triple announcement: partnership complete, hack anywhere, challenges set.',
        priority: 'critical'
      },
    ],
    followUpTasks: [
      { id: 'w7-fu-1', title: 'Publish all three announcements', type: 'content', status: 'pending', owner: 'Sinclair', date: 'Feb 22' },
      { id: 'w7-fu-2', title: 'Email all registered participants with challenge previews', type: 'comms', status: 'pending', owner: 'Ford', date: 'Feb 23' },
      { id: 'w7-fu-3', title: 'VCU Protection of Minors registration submitted', type: 'team', status: 'pending', owner: 'TBD', date: 'Feb 25' },
    ],
    parallelWorkstreams: [
      { workstream: 'Level 9 (Prize Pool)', activities: 'Close to $17K', owner: 'Will' },
      { workstream: 'Level 10 (Volunteers)', activities: 'Recruitment push via HandsOn Greater Richmond', owner: 'Community Lead' },
      { workstream: 'Level 11 (Platforms)', activities: 'Begin Devpost/Discord/GitHub configuration', owner: 'Platform Admin' },
    ],
    runningMetrics: [
      { label: 'Events Completed', value: '9' },
      { label: 'Registered Participants', value: '~60' },
      { label: 'Satellite Locations', value: '~15' },
      { label: 'Sponsor Dollars', value: '~$17,000' },
    ],
  },
  {
    weekNumber: 8,
    startDate: 'Feb 24',
    endDate: 'Mar 2',
    daysUntilEvent: '31-25',
    theme: 'Resources Secured',
    milestonesDue: ['LEVEL 9 - Prize Pool (Feb 28)', 'LEVEL 10 - Volunteer Army (Feb 28)'],
    prepTasks: [
      { id: 'w8-prep-1', title: 'All prize funds committed', type: 'team', status: 'pending', owner: 'Will' },
      { id: 'w8-prep-2', title: '150+ volunteers in pipeline', type: 'team', status: 'pending', owner: 'Community Lead' },
      { id: 'w8-prep-3', title: 'Judging panels confirmed', type: 'team', status: 'pending', owner: 'Ford' },
      { id: 'w8-prep-4', title: 'Michael Kolbe op-ed drafted', type: 'content', status: 'pending', owner: 'Ford + Michael' },
      { id: 'w8-prep-5', title: 'Insurance bound ($1M/$2M)', type: 'team', status: 'pending', owner: 'Crystal' },
    ],
    mainActivities: [
      { 
        id: 'w8-main-1', 
        title: 'MILESTONE: Resources Secured', 
        type: 'milestone', 
        status: 'pending', 
        owner: 'All', 
        date: 'Sat Feb 28',
        notes: '$17K+ prize pool confirmed, 150+ volunteers recruited.',
        priority: 'critical'
      },
    ],
    followUpTasks: [
      { id: 'w8-fu-1', title: 'Publish prize pool announcement', type: 'content', status: 'pending', owner: 'Sinclair', date: 'Mar 1' },
      { id: 'w8-fu-2', title: 'Email drip #3: "Early bird registration closing soon"', type: 'comms', status: 'pending', owner: 'Sinclair', date: 'Mar 1' },
      { id: 'w8-fu-3', title: 'Volunteer training schedule published', type: 'team', status: 'pending', owner: 'Community Lead', date: 'Mar 2' },
    ],
    parallelWorkstreams: [
      { workstream: 'Level 11 (Platforms)', activities: 'Complete Devpost/Discord/GitHub configuration', owner: 'Platform Admin' },
      { workstream: 'Level 11 (Platforms)', activities: 'End-to-end testing', owner: 'Platform Admin' },
      { workstream: 'Level 12 (Registration)', activities: 'Prepare registration page for launch', owner: 'Ford' },
    ],
    runningMetrics: [
      { label: 'Events Completed', value: '9' },
      { label: 'Registered Participants', value: '~80' },
      { label: 'Volunteers Recruited', value: '150+' },
      { label: 'Sponsor Dollars', value: '$17,000+' },
    ],
  },
  {
    weekNumber: 9,
    startDate: 'Mar 3',
    endDate: 'Mar 9',
    daysUntilEvent: '24-18',
    theme: 'Launch Week',
    milestonesDue: ['LEVEL 11 - Platform Ready (Mar 7)', 'LEVEL 12 - Registration Open (Mar 7)'],
    prepTasks: [
      { id: 'w9-prep-1', title: 'All platforms tested end-to-end', type: 'team', status: 'pending', owner: 'Platform Admin' },
      { id: 'w9-prep-2', title: 'Registration page live', type: 'content', status: 'pending', owner: 'Ford' },
      { id: 'w9-prep-3', title: 'Marketing campaign assets ready', type: 'content', status: 'pending', owner: 'Sinclair' },
      { id: 'w9-prep-4', title: 'Op-ed submitted to RTD', type: 'comms', status: 'pending', owner: 'Ford + Michael' },
      { id: 'w9-prep-5', title: 'Press kit prepared', type: 'content', status: 'pending', owner: 'Sinclair' },
    ],
    mainActivities: [
      { 
        id: 'w9-main-1', 
        title: 'MILESTONE: Registration Open', 
        type: 'milestone', 
        status: 'pending', 
        owner: 'Ford', 
        date: 'Sat Mar 7',
        notes: '"Registration is open. Richmond, it\'s your turn." Goal: 50+ registrations in first 48 hours.',
        priority: 'critical'
      },
      { 
        id: 'w9-main-2', 
        title: 'City Council Hearing (Return Visit)', 
        type: 'event', 
        status: 'pending', 
        owner: 'Ford', 
        date: 'Sun Mar 9',
        notes: 'Momentum signal. CTA: "Registration closes March 25"'
      },
    ],
    followUpTasks: [
      { id: 'w9-fu-1', title: 'Monitor registration numbers hourly', type: 'team', status: 'pending', owner: 'Ford', date: 'Ongoing' },
      { id: 'w9-fu-2', title: 'Respond to all media inquiries', type: 'comms', status: 'pending', owner: 'Sinclair', date: 'Ongoing' },
      { id: 'w9-fu-3', title: 'Email drip #4: "Final call—register by March 20"', type: 'comms', status: 'pending', owner: 'Sinclair', date: 'Mar 9' },
    ],
    parallelWorkstreams: [
      { workstream: 'Marketing', activities: 'Social media campaign launch', owner: 'Sinclair' },
      { workstream: 'Marketing', activities: 'Press outreach (RTD, Richmond Mag, local TV)', owner: 'Sinclair' },
      { workstream: 'Content', activities: 'Op-ed publishing window (Mar 7-14)', owner: 'Ford + Michael' },
    ],
    runningMetrics: [
      { label: 'Events Completed', value: '10' },
      { label: 'Registered Participants', value: '100+ (target 300)' },
      { label: 'Volunteers Recruited', value: '150+' },
      { label: 'Sponsor Dollars', value: '$17,000+' },
    ],
  },
  {
    weekNumber: 10,
    startDate: 'Mar 10',
    endDate: 'Mar 16',
    daysUntilEvent: '17-11',
    theme: 'Registration Push',
    milestonesDue: [],
    prepTasks: [
      { id: 'w10-prep-1', title: 'Campus blitz materials reprinted', type: 'content', status: 'pending', owner: 'TBD' },
      { id: 'w10-prep-2', title: 'Updated stats for all materials', type: 'content', status: 'pending', owner: 'Sinclair' },
      { id: 'w10-prep-3', title: 'Parent permission slip forms ready', type: 'team', status: 'pending', owner: 'TBD' },
      { id: 'w10-prep-4', title: 'Collect all permission slips by Mar 15', type: 'team', status: 'pending', owner: 'TBD', priority: 'critical' },
    ],
    mainActivities: [
      { 
        id: 'w10-main-1', 
        title: 'Post-Spring Break Campus Blitz', 
        type: 'event', 
        status: 'pending', 
        owner: 'TBD', 
        date: 'Sun Mar 16',
        notes: 'Same as Jan 10, but now with proof (logos, photos, stats). Target: 30+ registrations.'
      },
    ],
    followUpTasks: [
      { id: 'w10-fu-1', title: 'Email all campus contacts', type: 'comms', status: 'pending', owner: 'Ford', date: 'Mar 17' },
      { id: 'w10-fu-2', title: 'Post campus photos to social', type: 'content', status: 'pending', owner: 'Sinclair', date: 'Mar 17' },
    ],
    parallelWorkstreams: [
      { workstream: 'Op-Ed', activities: 'Publish if not already live', owner: 'Ford + Michael' },
      { workstream: 'Registration', activities: 'Daily social media push', owner: 'Sinclair' },
      { workstream: 'Volunteers', activities: 'Training sessions begin', owner: 'Community Lead' },
      { workstream: 'Logistics', activities: 'Final venue walkthrough at Science Museum', owner: 'Crystal' },
    ],
    runningMetrics: [
      { label: 'Events Completed', value: '11' },
      { label: 'Registered Participants', value: '200+ (target 300)' },
      { label: 'Teams Formed', value: '20+ (target 30)' },
    ],
  },
  {
    weekNumber: 11,
    startDate: 'Mar 17',
    endDate: 'Mar 23',
    daysUntilEvent: '10-4',
    theme: 'Final Push',
    milestonesDue: ['Chaperone Background Checks (Mar 20)'],
    prepTasks: [
      { id: 'w11-prep-1', title: 'Museum District Town Hall confirmed', type: 'team', status: 'pending', owner: 'TBD' },
      { id: 'w11-prep-2', title: 'Final volunteer training complete', type: 'team', status: 'pending', owner: 'Community Lead' },
      { id: 'w11-prep-3', title: 'Chaperone background checks complete', type: 'team', status: 'pending', owner: 'TBD', priority: 'critical' },
      { id: 'w11-prep-4', title: 'All print materials ordered (banners, signage)', type: 'content', status: 'pending', owner: 'Crystal' },
      { id: 'w11-prep-5', title: 'Volunteer t-shirts ordered', type: 'content', status: 'pending', owner: 'Crystal' },
    ],
    mainActivities: [
      { 
        id: 'w11-main-1', 
        title: 'Museum District Town Hall', 
        type: 'event', 
        status: 'pending', 
        owner: 'TBD', 
        date: 'Thu Mar 20',
        notes: 'Last major public touchpoint. Non-coders welcome. Urgency: "Registration closes in 7 days."'
      },
    ],
    followUpTasks: [
      { id: 'w11-fu-1', title: 'Email all contacts with "last chance" message', type: 'comms', status: 'pending', owner: 'Sinclair', date: 'Mar 22' },
      { id: 'w11-fu-2', title: 'Post "1 week until Hack for RVA" content', type: 'content', status: 'pending', owner: 'Sinclair', date: 'Mar 20' },
    ],
    parallelWorkstreams: [
      { workstream: 'Registration', activities: 'Final push across all channels', owner: 'All' },
      { workstream: 'Logistics', activities: 'Catering orders finalized', owner: 'Crystal' },
      { workstream: 'Logistics', activities: 'AV equipment confirmed', owner: 'Crystal' },
      { workstream: 'Platforms', activities: 'Final Discord/Devpost updates', owner: 'Platform Admin' },
    ],
    runningMetrics: [
      { label: 'Events Completed', value: '12' },
      { label: 'Registered Participants', value: '280+ (target 300)' },
      { label: 'Teams Formed', value: '28+ (target 30)' },
    ],
  },
  {
    weekNumber: 12,
    startDate: 'Mar 24',
    endDate: 'Mar 29',
    daysUntilEvent: '3-0',
    theme: 'Event Week',
    milestonesDue: ['🎉 HACK FOR RVA — March 27-29'],
    prepTasks: [
      { id: 'w12-prep-1', title: 'Final registration count confirmed', type: 'team', status: 'pending', owner: 'Ford' },
      { id: 'w12-prep-2', title: 'All volunteer shifts confirmed', type: 'team', status: 'pending', owner: 'Community Lead' },
      { id: 'w12-prep-3', title: 'All materials delivered to venue', type: 'team', status: 'pending', owner: 'Crystal' },
      { id: 'w12-prep-4', title: 'Final tech check (WiFi, AV, power)', type: 'team', status: 'pending', owner: 'Platform Admin' },
      { id: 'w12-prep-5', title: 'Emergency procedures reviewed', type: 'team', status: 'pending', owner: 'Crystal' },
      { id: 'w12-prep-6', title: 'Discord announcements scheduled', type: 'content', status: 'pending', owner: 'Platform Admin' },
    ],
    mainActivities: [
      { 
        id: 'w12-main-1', 
        title: 'Day 1: Kickoff', 
        type: 'event', 
        status: 'pending', 
        owner: 'All', 
        date: 'Fri Mar 27',
        notes: 'Registration, networking, pillar breakout sessions. Teams form.',
        priority: 'critical'
      },
      { 
        id: 'w12-main-2', 
        title: 'Day 2: Hacking', 
        type: 'event', 
        status: 'pending', 
        owner: 'All', 
        date: 'Sat Mar 28',
        notes: 'All-day hacking across main venue + satellites. Mentors rotating.',
        priority: 'critical'
      },
      { 
        id: 'w12-main-3', 
        title: 'Day 3: Demos & Awards', 
        type: 'event', 
        status: 'pending', 
        owner: 'All', 
        date: 'Sun Mar 29',
        notes: 'Final hacking, demos, judging, awards ceremony.',
        priority: 'critical'
      },
    ],
    followUpTasks: [],
    runningMetrics: [
      { label: 'Registered Participants', value: '300+' },
      { label: 'Teams', value: '30+' },
      { label: 'Volunteers', value: '150-200' },
      { label: 'Prize Pool', value: '$17,000+' },
      { label: 'Events Completed', value: '12' },
      { label: 'Total Contacts Made', value: '500+' },
    ],
  },
];

// Calculate schedule stats
export const scheduleStats = {
  totalWeeks: weeklySchedule.length,
  totalEvents: weeklySchedule.reduce((sum, week) => 
    sum + week.mainActivities.filter(a => a.type === 'event').length, 0),
  totalMilestones: weeklySchedule.reduce((sum, week) => 
    sum + week.mainActivities.filter(a => a.type === 'milestone').length, 0),
  criticalDeadlines: hardDeadlines.length,
  preReqsTotal: preReqs.critical.length + preReqs.highPriority.length + preReqs.prep.length,
};

// Identified gaps
export const identifiedGaps: { week: string; gap: string; recommendation: string }[] = [
  { week: 'Week 3 (Jan 20-26)', gap: 'No in-person events', recommendation: 'Add informal coffee chat or sponsor meeting' },
  { week: 'Week 4 (Jan 27 - Feb 2)', gap: 'No in-person events', recommendation: 'Add Code & Coffee return visit' },
  { week: 'Week 8 (Feb 24 - Mar 2)', gap: 'No in-person events', recommendation: 'Add volunteer recruitment event' },
];

// Quick wins summary
export const quickWins: { asset: string; createdFor: string; alsoServes: string }[] = [
  { asset: '5-min pitch deck', createdFor: 'RVA JS (Jan 6)', alsoServes: 'All tech meetups, sponsor meetings' },
  { asset: 'Council talking points', createdFor: 'City Council (Jan 12)', alsoServes: 'All government conversations' },
  { asset: 'Campus flyer design', createdFor: 'Campus Blitz (Jan 10)', alsoServes: 'March campus blitz' },
  { asset: 'Sticky note photos', createdFor: 'Beers & Bugs (Jan 13)', alsoServes: 'Sponsor decks, social media, challenge validation' },
  { asset: 'Squad leader network', createdFor: 'Code & Coffee (Jan 17)', alsoServes: 'Exponential participant recruitment' },
  { asset: 'Team photo', createdFor: 'Level 2 (Jan 31)', alsoServes: 'All future announcements, website, press' },
  { asset: 'Challenge brief previews', createdFor: 'CyberVA (Feb 12)', alsoServes: 'Early registration incentive, website content' },
  { asset: 'Michael Kolbe op-ed', createdFor: 'March publication', alsoServes: 'Legitimacy, press pickup, resharing' },
];

// Owner responsibility matrix
export const ownerMatrix: { owner: string; responsibilities: string }[] = [
  { owner: 'Ford Prior', responsibilities: 'Chief Hacker, Academia Pipeline, Platform decisions, Pitches' },
  { owner: 'Crystal Harvey', responsibilities: 'Ops Director, Satellite locations, Logistics, Catering, AV' },
  { owner: 'Michael Kolbe', responsibilities: 'City Liaison, Pillar recruitment, Government relationships' },
  { owner: 'Sinclair Jenks', responsibilities: 'Marketing & Comms, Social media, Press, All announcements' },
  { owner: 'Heather Lyne', responsibilities: 'Entrepreneurial Ecosystems, Mentorship, Art Lounge, Hustle Corner' },
  { owner: 'Will Melton', responsibilities: 'Sponsorships & Partnerships, Prize pool, Corporate relationships' },
  { owner: 'TBD (Community Lead)', responsibilities: 'Volunteers, Participant experience, Team formation' },
];

