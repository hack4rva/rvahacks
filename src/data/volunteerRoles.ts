/**
 * Single source of truth for volunteer role definitions.
 * Each role includes the autonomy framework (youOwn, youEscalate, decisionAuthority, successCriteria).
 * Source: knowledge-base/02-team-governance/role-cards/
 */

import { 
  ClipboardCheck, MapPin, Presentation, Monitor, UtensilsCrossed, Camera,
  Users, UserCircle, HelpCircle, Headphones,
  Trash2, Code, Palette, Mic, Brain,
  Megaphone, Database, Building2, Sparkles, Package, LucideIcon
} from "lucide-react";

export type RoleCategory = 
  | 'track-stakeholder' 
  | 'cross-cutting' 
  | 'pre-event' 
  | 'friday' 
  | 'saturday-site' 
  | 'saturday-virtual' 
  | 'sunday' 
  | 'support';

export type RoleLocation = 'science-museum' | 'satellite' | 'virtual' | 'varies';

export interface EscalationRule {
  situation: string;
  escalateTo: string;
  channel: string;
}

export interface RoleCard {
  id: string;
  title: string;
  category: RoleCategory;
  
  // Core info
  description: string;
  commitment: string;
  quantity: string;
  
  // Autonomy framework
  youOwn: string[];
  youEscalate: EscalationRule[];
  decisionAuthority: string[];
  successCriteria: string;
  
  // Requirements
  skillsRequired: string[];
  skillsPreferred: string[];
  
  // Logistics
  reportsTo: string;
  location: RoleLocation;
  trainingRequired: boolean;
  
  // Display
  icon: LucideIcon;
  color: string;
}

// ============================================================================
// PRE-EVENT VOLUNTEERS
// ============================================================================

export const preEventRoles: RoleCard[] = [
  {
    id: 'outreach-ambassador',
    title: 'Outreach Ambassador',
    category: 'pre-event',
    description: 'Recruit participants at universities, meetups, and community groups. Present about Hack for RVA and distribute promotional materials.',
    commitment: '2-4 hrs/week for 6 weeks',
    quantity: '8-10',
    youOwn: [
      'Recruit participants at assigned events',
      'Present about Hack for RVA at campuses and meetups',
      'Distribute promotional materials',
      'Share social media content in your networks',
      'Track outreach results and report back'
    ],
    youEscalate: [
      { situation: 'Request for official partnership', escalateTo: 'Sponsorship Lead', channel: 'Slack' },
      { situation: 'Media inquiry', escalateTo: 'Social Media Manager', channel: 'Slack immediately' },
      { situation: 'Large group interested in attending', escalateTo: 'Volunteer Coordinator', channel: 'Slack' }
    ],
    decisionAuthority: [
      'Choose which events to attend within your area',
      'Adapt messaging for different audiences',
      'Give away promotional items as you see fit'
    ],
    successCriteria: 'Attend at least 4 outreach events; reach 100+ potential participants; 10+ registrations attributed to your outreach.',
    skillsRequired: ['Public speaking comfort', 'Enthusiasm about civic tech', 'Self-directed'],
    skillsPreferred: ['Existing community connections', 'Event promotion experience', 'Active social media'],
    reportsTo: 'Social Media Manager',
    location: 'varies',
    trainingRequired: true,
    icon: Megaphone,
    color: 'orange'
  },
  {
    id: 'data-prep-volunteer',
    title: 'Data Prep Volunteer',
    category: 'pre-event',
    description: 'Clean and format datasets, create data dictionaries, test API endpoints, and prepare data for easy team access.',
    commitment: '4-8 hours total',
    quantity: '3-5',
    youOwn: [
      'Clean and format assigned datasets',
      'Create data dictionaries explaining fields',
      'Test API endpoints and document access patterns',
      'Identify and document data quality issues',
      'Create sample queries and starter code'
    ],
    youEscalate: [
      { situation: 'Data access issues', escalateTo: 'City Data Liaison', channel: 'Slack' },
      { situation: 'Sensitive data discovered', escalateTo: 'City Data Liaison', channel: 'Slack immediately' },
      { situation: 'Technical platform issues', escalateTo: 'Platform Administrator', channel: 'Slack' }
    ],
    decisionAuthority: [
      'How to structure data documentation',
      'Which data cleaning approaches to use',
      'How to format sample code'
    ],
    successCriteria: 'All assigned datasets documented and accessible; data ready 1 week before event.',
    skillsRequired: ['Data analysis experience', 'Familiarity with CSV/JSON/APIs', 'Attention to detail'],
    skillsPreferred: ['Python or R experience', 'SQL knowledge', 'GitHub proficiency'],
    reportsTo: 'City Data Liaison',
    location: 'virtual',
    trainingRequired: true,
    icon: Database,
    color: 'cyan'
  },
  {
    id: 'registration-support',
    title: 'Registration Support',
    category: 'pre-event',
    description: 'Monitor registrations, answer email questions, follow up on incomplete signups, and track metrics.',
    commitment: '2-3 hrs/week for 6 weeks',
    quantity: '2-3',
    youOwn: [
      'Monitor registration platform for new signups',
      'Follow up on incomplete registrations',
      'Answer email questions about registration',
      'Track registration metrics',
      'Process accommodation requests'
    ],
    youEscalate: [
      { situation: 'Registration system technical issues', escalateTo: 'Platform Administrator', channel: 'Slack' },
      { situation: 'Capacity questions', escalateTo: 'Registration Manager', channel: 'Slack' },
      { situation: 'Special accommodation requests', escalateTo: 'Volunteer Coordinator', channel: 'Slack' }
    ],
    decisionAuthority: [
      'Standard email responses',
      'Minor registration corrections',
      'Follow-up timing'
    ],
    successCriteria: 'All emails answered within 24 hours; incomplete registrations followed up within 48 hours.',
    skillsRequired: ['Email communication', 'Attention to detail', 'Customer service'],
    skillsPreferred: ['Event registration experience', 'CRM experience', 'Multilingual'],
    reportsTo: 'Registration Manager',
    location: 'virtual',
    trainingRequired: true,
    icon: ClipboardCheck,
    color: 'green'
  },
  {
    id: 'venue-scout',
    title: 'Venue Scout',
    category: 'pre-event',
    description: 'Visit satellite venues to assess WiFi, power, capacity, and accessibility. Document findings with photos.',
    commitment: '2-3 hours per venue',
    quantity: '5-8',
    youOwn: [
      'Visit assigned satellite venues',
      'Document WiFi speed and reliability',
      'Count outlets and assess power access',
      'Assess workspace capacity',
      'Note accessibility features',
      'Complete venue assessment checklist with photos'
    ],
    youEscalate: [
      { situation: 'Venue contact unresponsive', escalateTo: 'Satellite Location Coordinator', channel: 'Slack' },
      { situation: 'Major infrastructure concerns', escalateTo: 'Satellite Location Coordinator', channel: 'Slack' },
      { situation: 'Safety issues', escalateTo: 'Event Manager', channel: 'Slack immediately' }
    ],
    decisionAuthority: [
      'When to schedule venue visits',
      'How to document findings',
      'Whether to suggest venue improvements'
    ],
    successCriteria: 'All assigned venues visited and assessed; report submitted 3 weeks before event.',
    skillsRequired: ['Reliable transportation', 'Attention to detail', 'Basic tech literacy'],
    skillsPreferred: ['Event planning experience', 'Local Richmond knowledge', 'Photography skills'],
    reportsTo: 'Satellite Location Coordinator',
    location: 'varies',
    trainingRequired: false,
    icon: Building2,
    color: 'blue'
  },
  {
    id: 'marketing-content-creator',
    title: 'Marketing Content Creator',
    category: 'pre-event',
    description: 'Create social media graphics, promotional copy, and event collateral following brand guidelines.',
    commitment: 'Variable (project-based)',
    quantity: '3-5',
    youOwn: [
      'Create social media graphics and posts',
      'Write promotional copy for various channels',
      'Design event collateral',
      'Develop countdown content',
      'Create speaker spotlight posts'
    ],
    youEscalate: [
      { situation: 'Brand or messaging questions', escalateTo: 'Social Media Manager', channel: 'Slack' },
      { situation: 'Requests for official statements', escalateTo: 'Event Manager', channel: 'Slack' },
      { situation: 'Partner/sponsor logo usage questions', escalateTo: 'Sponsorship Lead', channel: 'Slack' }
    ],
    decisionAuthority: [
      'Creative direction within brand guidelines',
      'Content timing and format',
      'Platform-specific adaptations'
    ],
    successCriteria: 'Content delivered on schedule; brand guidelines followed; engagement metrics improve.',
    skillsRequired: ['Graphic design skills', 'Strong writing', 'Social media understanding'],
    skillsPreferred: ['Video editing', 'Photography', 'Civic/nonprofit messaging experience'],
    reportsTo: 'Social Media Manager',
    location: 'virtual',
    trainingRequired: false,
    icon: Sparkles,
    color: 'pink'
  },
  {
    id: 'swag-coordinator',
    title: 'Swag Coordinator',
    category: 'pre-event',
    description: 'Receive and inventory swag items, pack swag bags, and coordinate transport to venue.',
    commitment: '4-6 hours total',
    quantity: '2-3',
    youOwn: [
      'Receive and inventory swag items',
      'Pack swag bags (200-300 bags)',
      'Coordinate sponsor item inclusion',
      'Organize bags by size if applicable',
      'Transport bags to venue'
    ],
    youEscalate: [
      { situation: 'Shipment delays', escalateTo: 'Event Manager', channel: 'Slack' },
      { situation: 'Inventory shortages', escalateTo: 'Event Manager', channel: 'Slack' },
      { situation: 'Sponsor item issues', escalateTo: 'Sponsorship Lead', channel: 'Slack' }
    ],
    decisionAuthority: [
      'Packing schedule and logistics',
      'Bag organization approach',
      'How to handle minor shortages'
    ],
    successCriteria: 'All bags packed 2 days before event; transported to venue on time.',
    skillsRequired: ['Organization skills', 'Ability to lift boxes', 'Reliable transportation helpful'],
    skillsPreferred: ['Event logistics experience', 'Access to packing space'],
    reportsTo: 'Event Manager',
    location: 'varies',
    trainingRequired: false,
    icon: Package,
    color: 'purple'
  }
];

// ============================================================================
// FRIDAY VOLUNTEERS
// ============================================================================

export const fridayRoles: RoleCard[] = [
  {
    id: 'registration-lead',
    title: 'Registration Lead',
    category: 'friday',
    description: 'First face participants see. Manage check-in flow, distribute badges and swag, handle edge cases.',
    commitment: '8:30 AM - 12:00 PM',
    quantity: '3-4',
    youOwn: [
      'Set up registration tables before doors open',
      'Check in registered participants',
      'Distribute swag bags and materials',
      'Handle walk-in registrations if capacity allows',
      'Track no-shows and late arrivals'
    ],
    youEscalate: [
      { situation: 'Registration system technical issues', escalateTo: 'Registration Manager', channel: 'In person/Slack' },
      { situation: 'Capacity questions', escalateTo: 'Registration Manager', channel: 'In person' },
      { situation: 'Media/VIP arrival', escalateTo: 'Event Manager', channel: 'Radio/Slack' }
    ],
    decisionAuthority: [
      'Minor name corrections on badges',
      'Provide replacement materials',
      'Open additional check-in lanes if queue exceeds 10 min'
    ],
    successCriteria: 'Average check-in time under 2 minutes; no complaints; all materials distributed.',
    skillsRequired: ['Customer service', 'Organization', 'Work quickly under pressure'],
    skillsPreferred: ['Event registration experience', 'Multilingual'],
    reportsTo: 'Registration Manager',
    location: 'science-museum',
    trainingRequired: true,
    icon: ClipboardCheck,
    color: 'green'
  },
  {
    id: 'wayfinder',
    title: 'Wayfinder',
    category: 'friday',
    description: 'Station at key intersections to direct participants to rooms, restrooms, and food areas.',
    commitment: 'Rotating 2-hour shifts (9 AM - 6 PM)',
    quantity: '6-8',
    youOwn: [
      'Station at assigned location',
      'Direct participants to rooms and amenities',
      'Answer basic schedule questions',
      'Proactively help lost-looking participants',
      'Report issues to central command'
    ],
    youEscalate: [
      { situation: 'Medical issue', escalateTo: 'Event Manager + 911', channel: 'Radio immediately' },
      { situation: 'Lost child', escalateTo: 'Event Manager', channel: 'Radio immediately' },
      { situation: 'Venue issue (spill, broken equipment)', escalateTo: 'Science Museum Liaison', channel: 'Radio' }
    ],
    decisionAuthority: [
      'How to phrase directions',
      'Whether to walk someone to destination',
      'How long to stay at post during slow periods'
    ],
    successCriteria: 'No one visibly lost for more than 30 seconds; positive feedback.',
    skillsRequired: ['Friendly demeanor', 'Clear communication', 'Ability to stand for extended periods'],
    skillsPreferred: ['Event volunteering experience', 'Knowledge of Science Museum'],
    reportsTo: 'Science Museum Liaison',
    location: 'science-museum',
    trainingRequired: true,
    icon: MapPin,
    color: 'blue'
  },
  {
    id: 'track-room-captain',
    title: 'Track Room Captain',
    category: 'friday',
    description: 'Manage Track breakout sessions. Greet stakeholders, introduce speakers, facilitate panel, manage Q&A.',
    commitment: 'Per session (60-90 min each)',
    quantity: '14-21',
    youOwn: [
      'Arrive 15 min early to prep room',
      'Greet City Partner, Community Partner envoy, Corporate Partner rep',
      'Introduce all three speakers',
      'Facilitate panel flow and Q&A',
      'Give time warnings (10-min, 5-min, 1-min)',
      'Ensure recording is running'
    ],
    youEscalate: [
      { situation: 'Speaker no-show 5 min before start', escalateTo: 'Friday Programming Lead', channel: 'Phone immediately' },
      { situation: 'AV equipment failure', escalateTo: 'AV Runner', channel: 'Radio' },
      { situation: 'Room capacity exceeded', escalateTo: 'Event Manager', channel: 'Radio' },
      { situation: 'Stakeholder conflict', escalateTo: 'Event Manager', channel: 'Discreetly, in person' }
    ],
    decisionAuthority: [
      'Extend Q&A by up to 5 minutes',
      'Rearrange seating for accessibility',
      'Pause session briefly for technical fix',
      'Redirect off-topic questions'
    ],
    successCriteria: 'Session on time; all stakeholder voices heard; recording captured everything.',
    skillsRequired: ['Public speaking comfort', 'Time management', 'Assertiveness'],
    skillsPreferred: ['Facilitation experience', 'Domain knowledge in Track topic'],
    reportsTo: 'Friday Programming Lead',
    location: 'science-museum',
    trainingRequired: true,
    icon: Presentation,
    color: 'purple'
  },
  {
    id: 'av-runner',
    title: 'AV Runner',
    category: 'friday',
    description: 'Set up and manage AV equipment across all session rooms. Troubleshoot issues during sessions.',
    commitment: 'Full day (8:00 AM - 6:00 PM)',
    quantity: '3-4',
    youOwn: [
      'Set up AV equipment in all rooms',
      'Test mics, projectors, recording equipment',
      'Monitor rooms via radio during sessions',
      'Respond to AV issues within 2 minutes',
      'Manage recording start/stop'
    ],
    youEscalate: [
      { situation: 'Equipment failure you can\'t fix', escalateTo: 'Science Museum Liaison', channel: 'Radio' },
      { situation: 'Recording lost or corrupted', escalateTo: 'Event Manager', channel: 'Radio immediately' },
      { situation: 'Safety hazard', escalateTo: 'Event Manager', channel: 'Radio' }
    ],
    decisionAuthority: [
      'Which backup equipment to deploy',
      'When to swap batteries proactively',
      'Whether to pause for AV fix vs. continue'
    ],
    successCriteria: 'All sessions have working AV; all recorded successfully; response time under 2 minutes.',
    skillsRequired: ['Technical aptitude', 'Basic AV familiarity', 'Problem-solving'],
    skillsPreferred: ['Professional AV experience', 'Science Museum systems knowledge'],
    reportsTo: 'Science Museum Liaison',
    location: 'science-museum',
    trainingRequired: true,
    icon: Monitor,
    color: 'cyan'
  },
  {
    id: 'catering-coordinator-friday',
    title: 'Catering Coordinator',
    category: 'friday',
    description: 'Set up food service areas, monitor food levels, maintain dietary accommodation table.',
    commitment: 'Meal shifts (Breakfast: 8-10 AM, Lunch: 11:30 AM - 1:30 PM)',
    quantity: '4-6',
    youOwn: [
      'Set up food service areas',
      'Monitor and replenish food levels',
      'Maintain dietary accommodation table',
      'Keep beverage stations stocked',
      'Clear and clean after meals'
    ],
    youEscalate: [
      { situation: 'Food running low', escalateTo: 'Science Museum Liaison', channel: 'In person' },
      { situation: 'Dietary restriction not accommodated', escalateTo: 'Science Museum Liaison', channel: 'In person' },
      { situation: 'Allergic reaction', escalateTo: '911 + Event Manager', channel: 'Immediately' }
    ],
    decisionAuthority: [
      'Food station layout',
      'When to replenish',
      'How to label dietary options'
    ],
    successCriteria: 'Food available throughout meal times; dietary accommodations labeled; no safety incidents.',
    skillsRequired: ['Food safety awareness', 'Physical ability to carry', 'Customer service'],
    skillsPreferred: ['Food service experience', 'Dietary restriction knowledge'],
    reportsTo: 'Science Museum Liaison',
    location: 'science-museum',
    trainingRequired: true,
    icon: UtensilsCrossed,
    color: 'orange'
  },
  {
    id: 'photographer-friday',
    title: 'Photographer',
    category: 'friday',
    description: 'Capture candid moments, Track sessions, team formation, and speaker portraits throughout the day.',
    commitment: 'Full day (9:00 AM - 6:00 PM)',
    quantity: '2',
    youOwn: [
      'Capture candids throughout day',
      'Photograph Track sessions',
      'Document team formation',
      'Get speaker portraits and group shots',
      'Upload photos for social media use'
    ],
    youEscalate: [
      { situation: 'Someone requests no photos', escalateTo: 'Social Media Manager', channel: 'Slack' },
      { situation: 'Equipment failure', escalateTo: 'Event Manager', channel: 'Slack' }
    ],
    decisionAuthority: [
      'Composition and framing',
      'When to move around room',
      'Which moments to prioritize'
    ],
    successCriteria: 'At least 10 usable photos per Track session; photos uploaded within 4 hours.',
    skillsRequired: ['Photography skills', 'Work unobtrusively', 'Photo organization'],
    skillsPreferred: ['Event photography experience', 'Photo editing skills', 'Own professional camera'],
    reportsTo: 'Social Media Manager',
    location: 'science-museum',
    trainingRequired: false,
    icon: Camera,
    color: 'pink'
  },
  {
    id: 'team-formation-facilitator',
    title: 'Team Formation Facilitator',
    category: 'friday',
    description: 'Run team formation activities. Help solo attendees find teams with complementary skills.',
    commitment: '11:00 AM - 2:00 PM',
    quantity: '3-4',
    youOwn: [
      'Run team formation activities',
      'Help solo attendees find teammates',
      'Facilitate skill-matching conversations',
      'Ensure no one feels left out',
      'Guide teams through challenge selection'
    ],
    youEscalate: [
      { situation: 'Participant feels excluded', escalateTo: 'Volunteer Coordinator', channel: 'In person' },
      { situation: 'Team conflict emerging', escalateTo: 'Volunteer Coordinator', channel: 'In person' },
      { situation: 'Questions about rules', escalateTo: 'Event Manager', channel: 'Slack' }
    ],
    decisionAuthority: [
      'Team formation activity format',
      'How to group people for mixing',
      'When to intervene with struggling solos'
    ],
    successCriteria: 'All solo attendees matched to teams; no one left out; teams have skill diversity.',
    skillsRequired: ['Facilitation skills', 'Social awareness', 'Energy and enthusiasm'],
    skillsPreferred: ['Previous hackathon experience', 'Team-building experience'],
    reportsTo: 'Volunteer Coordinator',
    location: 'science-museum',
    trainingRequired: true,
    icon: Users,
    color: 'purple'
  },
  {
    id: 'vip-speaker-host',
    title: 'VIP/Speaker Host',
    category: 'friday',
    description: 'VIP handler for Track Team stakeholders. Greet, escort, ensure comfort, keep on schedule.',
    commitment: 'Full day (8:30 AM - 5:00 PM)',
    quantity: '2-3',
    youOwn: [
      'Greet Track Team stakeholders upon arrival',
      'Escort VIPs to green room',
      'Ensure speakers have refreshments',
      'Confirm AV needs with Room Captain',
      'Keep speakers on schedule',
      'Facilitate cross-sector introductions'
    ],
    youEscalate: [
      { situation: 'VIP running late or no-show', escalateTo: 'Event Manager', channel: 'Phone immediately' },
      { situation: 'VIP complaint or concern', escalateTo: 'Event Manager', channel: 'In person, discreetly' },
      { situation: 'Media request to interview VIP', escalateTo: 'Social Media Manager', channel: 'Slack' }
    ],
    decisionAuthority: [
      'Green room setup',
      'When to prompt VIPs about timing',
      'Who to introduce to whom'
    ],
    successCriteria: 'All VIPs feel well cared for; sessions start on time; networking happens.',
    skillsRequired: ['Hospitality mindset', 'Professional demeanor', 'Discretion'],
    skillsPreferred: ['VIP handling experience', 'Knowledge of Richmond civic leaders'],
    reportsTo: 'Event Manager',
    location: 'science-museum',
    trainingRequired: true,
    icon: UserCircle,
    color: 'yellow'
  },
  {
    id: 'information-desk',
    title: 'Information Desk',
    category: 'friday',
    description: 'Staff central information desk. Answer questions, distribute materials, handle lost and found.',
    commitment: 'Rotating (9:00 AM - 6:00 PM)',
    quantity: '2-3',
    youOwn: [
      'Staff information desk throughout event',
      'Answer schedule and logistics questions',
      'Distribute event materials',
      'Handle lost and found',
      'Track common questions'
    ],
    youEscalate: [
      { situation: 'Complaint or issue', escalateTo: 'Volunteer Coordinator', channel: 'In person' },
      { situation: 'Registration question', escalateTo: 'Registration Manager', channel: 'In person' },
      { situation: 'Media inquiry', escalateTo: 'Social Media Manager', channel: 'Slack' }
    ],
    decisionAuthority: [
      'How to answer common questions',
      'Lost and found procedures'
    ],
    successCriteria: 'Questions answered promptly; desk staffed throughout; common questions logged.',
    skillsRequired: ['Friendly demeanor', 'Good listener', 'Event schedule knowledge'],
    skillsPreferred: ['Event volunteering experience', 'Multilingual'],
    reportsTo: 'Registration Manager',
    location: 'science-museum',
    trainingRequired: true,
    icon: HelpCircle,
    color: 'green'
  }
];

// ============================================================================
// SATURDAY VOLUNTEERS (SITE-LEVEL)
// ============================================================================

export const saturdaySiteRoles: RoleCard[] = [
  {
    id: 'site-captain',
    title: 'Site Captain',
    category: 'saturday-site',
    description: 'Primary point of contact for a satellite venue. Own the participant experience at your site.',
    commitment: 'Full day (9:00 AM - 6:00 PM) or split shift',
    quantity: '15-30 total (1-2 per site)',
    youOwn: [
      'Open venue and set up hacking space',
      'Greet teams as they arrive',
      'First point of contact for any issues',
      'Ensure WiFi, power, amenities work',
      'Coordinate meal deliveries if applicable',
      'Communicate site status every 2 hours',
      'Close venue and ensure safe departure'
    ],
    youEscalate: [
      { situation: 'Code of Conduct violation', escalateTo: 'Event Manager', channel: 'Slack DM immediately' },
      { situation: 'Medical emergency', escalateTo: '911, then Event Manager', channel: 'Phone, then Slack' },
      { situation: 'Technical problem unsolvable locally', escalateTo: 'Platform Administrator', channel: 'Discord #tech-help' },
      { situation: 'Venue issue (HVAC, security)', escalateTo: 'Satellite Location Coordinator', channel: 'Phone' }
    ],
    decisionAuthority: [
      'Rearrange furniture for team needs',
      'Order emergency supplies up to $50',
      'Adjust local schedule',
      'Grant brief extensions for site-specific issues'
    ],
    successCriteria: 'All teams submit on time; positive experience reported; no major incidents.',
    skillsRequired: ['Leadership', 'Problem-solving', 'Clear communication', 'Calm under pressure'],
    skillsPreferred: ['Event management experience', 'Technical background', 'First aid certification'],
    reportsTo: 'Satellite Location Coordinator',
    location: 'satellite',
    trainingRequired: true,
    icon: MapPin,
    color: 'blue'
  },
  {
    id: 'site-tech-support',
    title: 'Site Tech Support',
    category: 'saturday-site',
    description: 'Troubleshoot WiFi, power, and hardware issues at satellite venue. Help with submission process.',
    commitment: 'On-call at site',
    quantity: '15 (1 per site, can combine with other role)',
    youOwn: [
      'Troubleshoot WiFi connectivity',
      'Help with power and outlet access',
      'Assist with basic hardware issues',
      'Support Devpost submission process',
      'Help with video conferencing for mentors'
    ],
    youEscalate: [
      { situation: 'WiFi infrastructure problem', escalateTo: 'Platform Administrator', channel: 'Discord #tech-help' },
      { situation: 'Team needs mentor help', escalateTo: 'Mentor Queue Manager', channel: 'Discord #mentor-queue' },
      { situation: 'Coding issue beyond basic help', escalateTo: 'Hacker Mentors', channel: 'Discord #hacker-space' }
    ],
    decisionAuthority: [
      'Troubleshooting steps to try',
      'Whether to recommend mobile hotspot',
      'When to recommend early submission due to tech issues'
    ],
    successCriteria: 'Tech issues resolved within 15 minutes; no missed submissions due to tech.',
    skillsRequired: ['Technical troubleshooting', 'Patience', 'Basic networking knowledge'],
    skillsPreferred: ['IT support experience', 'Dev tools familiarity', 'Video conferencing experience'],
    reportsTo: 'Platform Administrator',
    location: 'satellite',
    trainingRequired: true,
    icon: Monitor,
    color: 'cyan'
  },
];

// ============================================================================
// SATURDAY VOLUNTEERS (VIRTUAL)
// ============================================================================

export const saturdayVirtualRoles: RoleCard[] = [
  {
    id: 'help-desk-monitor',
    title: 'Help Desk Monitor',
    category: 'saturday-virtual',
    description: 'Staff virtual help rooms. Welcome teams, understand questions, route to available mentors.',
    commitment: '2-3 hour shifts (coverage 9 AM - 10 PM)',
    quantity: '6-8',
    youOwn: [
      'Staff virtual help room during shift',
      'Welcome teams who join voice channel',
      'Understand questions and route to mentors',
      'Track queue if multiple teams waiting',
      'Follow up to ensure teams got help',
      'Log common questions'
    ],
    youEscalate: [
      { situation: 'No mentors available for specialty', escalateTo: 'Mentor Coordinator', channel: 'Discord DM' },
      { situation: 'Question requires Data Ambassador', escalateTo: 'Data Ambassador', channel: 'Discord' },
      { situation: 'Mentor not responding', escalateTo: 'Mentor Coordinator', channel: 'Discord DM' }
    ],
    decisionAuthority: [
      'Which mentor to assign based on question',
      'How long to let conversations run',
      'When to suggest text channel instead'
    ],
    successCriteria: 'Teams acknowledged within 5 minutes; wait time under 15 minutes; helpful interactions.',
    skillsRequired: ['Customer service', 'Basic hackathon understanding', 'Voice communication comfort'],
    skillsPreferred: ['Technical or design background', 'Hackathon experience', 'Queue management'],
    reportsTo: 'Mentor Coordinator',
    location: 'virtual',
    trainingRequired: true,
    icon: Headphones,
    color: 'green'
  },
];

// ============================================================================
// SUNDAY VOLUNTEERS
// ============================================================================

export const sundayRoles: RoleCard[] = [
  {
    id: 'setup-crew',
    title: 'Setup Crew',
    category: 'sunday',
    description: 'Arrive early to set up venue for finals. Arrange seating, signage, stage area.',
    commitment: '8:00 AM - 10:00 AM',
    quantity: '4-6',
    youOwn: [
      'Set up venue for finals',
      'Arrange seating',
      'Set up signage',
      'Prepare stage area',
      'Set up green room and check-in'
    ],
    youEscalate: [
      { situation: 'Venue access issues', escalateTo: 'Science Museum Liaison', channel: 'Phone' },
      { situation: 'Missing equipment', escalateTo: 'Event Manager', channel: 'Slack' },
      { situation: 'Safety concerns', escalateTo: 'Event Manager', channel: 'In person' }
    ],
    decisionAuthority: [
      'Seating arrangement within guidelines',
      'Minor layout adjustments',
      'Signage placement'
    ],
    successCriteria: 'Venue ready by 10 AM; signage correct; no last-minute scrambles.',
    skillsRequired: ['Physical ability to move furniture', 'Attention to detail', 'Early morning availability'],
    skillsPreferred: ['Event setup experience', 'Knowledge of Science Museum'],
    reportsTo: 'Event Manager',
    location: 'science-museum',
    trainingRequired: false,
    icon: Building2,
    color: 'blue'
  },
  {
    id: 'finalist-coordinator',
    title: 'Finalist Coordinator',
    category: 'sunday',
    description: 'Check in finalist teams, manage green room, confirm presentation order.',
    commitment: '9:00 AM - 12:00 PM',
    quantity: '2-3',
    youOwn: [
      'Check in finalist teams',
      'Verify team roster and presenters',
      'Manage green room logistics',
      'Confirm presentation order',
      'Ensure teams can test AV',
      'Coordinate team lineup for stage'
    ],
    youEscalate: [
      { situation: 'Finalist team no-show', escalateTo: 'Event Manager', channel: 'Phone immediately' },
      { situation: 'Team wants to change presenters', escalateTo: 'Event Manager', channel: 'In person' },
      { situation: 'AV test reveals issues', escalateTo: 'Stage Manager', channel: 'In person' }
    ],
    decisionAuthority: [
      'Green room logistics',
      'Minor schedule adjustments (< 5 min)',
      'How to handle nervous presenters'
    ],
    successCriteria: 'All teams checked in and briefed; presentation order confirmed; teams feel prepared.',
    skillsRequired: ['Organization', 'Calm under pressure', 'Clear communication'],
    skillsPreferred: ['Event coordination experience', 'Experience with speakers'],
    reportsTo: 'Event Manager',
    location: 'science-museum',
    trainingRequired: true,
    icon: Users,
    color: 'purple'
  },
  {
    id: 'judge-liaison',
    title: 'Judge Liaison',
    category: 'sunday',
    description: 'VIP handler for judging panel. Ensure judges comfortable, manage deliberation room.',
    commitment: 'Full day (9:00 AM - 6:00 PM)',
    quantity: '3-4',
    youOwn: [
      'Greet judges upon arrival',
      'Escort to judge room',
      'Ensure refreshments available',
      'Distribute judging materials',
      'Manage deliberation room (no interruptions)',
      'Collect scorecards',
      'Keep judges on schedule'
    ],
    youEscalate: [
      { situation: 'Judge late or no-show', escalateTo: 'Judge Coordinator', channel: 'Phone immediately' },
      { situation: 'Judge has conflict of interest', escalateTo: 'Judge Coordinator', channel: 'In person, discreetly' },
      { situation: 'Scoring discrepancy', escalateTo: 'Judge Coordinator', channel: 'In person' },
      { situation: 'Media wants to interview judges', escalateTo: 'Social Media Manager', channel: 'Slack' }
    ],
    decisionAuthority: [
      'Order additional refreshments',
      'Adjust break timing by up to 10 min',
      'Relocate judges if room has issues',
      'Limit deliberation room access'
    ],
    successCriteria: 'Judges feel well-cared-for; deliberations smooth; scores collected on time.',
    skillsRequired: ['Hospitality', 'Discretion', 'Organization'],
    skillsPreferred: ['VIP handling experience', 'Knowledge of Richmond civic leaders'],
    reportsTo: 'Judge Coordinator',
    location: 'science-museum',
    trainingRequired: true,
    icon: UserCircle,
    color: 'yellow'
  },
  {
    id: 'photographer-sunday',
    title: 'Photographer/Videographer',
    category: 'sunday',
    description: 'Document finalist pitches, award ceremony, and celebration.',
    commitment: 'Full day (10:00 AM - 7:00 PM)',
    quantity: '2-3',
    youOwn: [
      'Document finalist pitches',
      'Capture judge reactions',
      'Photograph award ceremony',
      'Get winner celebration shots',
      'Capture audience/family moments',
      'Document celebration'
    ],
    youEscalate: [
      { situation: 'Someone requests no photos', escalateTo: 'Social Media Manager', channel: 'Slack' },
      { situation: 'Equipment failure', escalateTo: 'Event Manager', channel: 'Slack' }
    ],
    decisionAuthority: [
      'Composition and positioning',
      'Which moments to prioritize',
      'When to move for better angle',
      'Photo selection for immediate sharing'
    ],
    successCriteria: 'Key moments captured; every winner documented; photos uploaded within 2 hours.',
    skillsRequired: ['Photography/videography skills', 'Work unobtrusively', 'Equipment proficiency'],
    skillsPreferred: ['Event photography experience', 'Video editing', 'Own professional equipment'],
    reportsTo: 'Social Media Manager',
    location: 'science-museum',
    trainingRequired: false,
    icon: Camera,
    color: 'pink'
  },
  {
    id: 'cleanup-crew',
    title: 'Cleanup Crew',
    category: 'sunday',
    description: 'Break down venue after event. Return to original condition.',
    commitment: '6:00 PM - 8:00 PM',
    quantity: '6-8',
    youOwn: [
      'Break down seating and tables',
      'Collect signage',
      'Break down stage area',
      'Collect lost and found',
      'Dispose of trash and recycling',
      'Return venue to original condition'
    ],
    youEscalate: [
      { situation: 'Venue damage discovered', escalateTo: 'Science Museum Liaison', channel: 'In person' },
      { situation: 'Equipment missing', escalateTo: 'Event Manager', channel: 'Slack' },
      { situation: 'Found valuable item', escalateTo: 'Event Manager', channel: 'In person' }
    ],
    decisionAuthority: [
      'Order of breakdown tasks',
      'How to organize equipment',
      'When cleanup is complete'
    ],
    successCriteria: 'Venue restored; equipment accounted for; Science Museum satisfied.',
    skillsRequired: ['Physical ability to move furniture', 'Willingness to do manual work', 'Attention to detail'],
    skillsPreferred: ['Event breakdown experience', 'Knowledge of venue requirements'],
    reportsTo: 'Science Museum Liaison',
    location: 'science-museum',
    trainingRequired: false,
    icon: Trash2,
    color: 'gray'
  }
];

// ============================================================================
// SUPPORT VOLUNTEERS
// ============================================================================

export const supportRoles: RoleCard[] = [
  {
    id: 'hacker-mentor',
    title: 'Hacker Mentor',
    category: 'support',
    description: 'Share engineering expertise with teams. Help with architecture, debugging, deployment.',
    commitment: '2-4 hour shifts (flexible)',
    quantity: '8-12',
    youOwn: [
      'Respond to mentor queue requests',
      'Join team video calls or visit in person',
      'Provide guidance without taking over keyboard',
      'Help with architecture decisions',
      'Suggest appropriate tools',
      'Help debug tricky issues'
    ],
    youEscalate: [
      { situation: 'Team needs help outside expertise', escalateTo: 'Mentor Coordinator', channel: 'Discord #mentor-queue' },
      { situation: 'Team seems stuck or demoralized', escalateTo: 'Volunteer Coordinator', channel: 'Discord DM' },
      { situation: 'Potential cheating', escalateTo: 'Event Manager', channel: 'Slack DM' }
    ],
    decisionAuthority: [
      'Spend up to 30 minutes with single team',
      'Recommend specific technologies',
      'Suggest teams pivot or narrow scope',
      'Connect teams with other mentors'
    ],
    successCriteria: 'Teams make meaningful progress; feel unblocked; learn something new.',
    skillsRequired: ['Strong technical skills', 'Teaching ability', 'Patience', 'Video call comfort'],
    skillsPreferred: ['Full-stack experience', 'Hackathon experience', 'Civic tech knowledge'],
    reportsTo: 'Hacker Space Lead',
    location: 'varies',
    trainingRequired: false,
    icon: Code,
    color: 'cyan'
  },
  {
    id: 'artist-mentor',
    title: 'Artist Mentor',
    category: 'support',
    description: 'Share design expertise with teams. Help with UX, visual design, accessibility.',
    commitment: '2-4 hour shifts (flexible)',
    quantity: '6-8',
    youOwn: [
      'Respond to design help requests',
      'Review wireframes and prototypes',
      'Advise on user experience',
      'Help with accessibility',
      'Guide visual design decisions',
      'Assist with pitch deck design'
    ],
    youEscalate: [
      { situation: 'Team needs technical implementation', escalateTo: 'Hacker Mentor', channel: 'Discord #hacker-space' },
      { situation: 'Team needs user research context', escalateTo: 'Data Ambassador', channel: 'Discord' },
      { situation: 'Team needs pitch help', escalateTo: 'Hustle Mentor', channel: 'Discord #hustle-corner' }
    ],
    decisionAuthority: [
      'Design direction recommendations',
      'Tool suggestions',
      'Scope advice on design deliverables',
      'Whether to prioritize UX vs. visual polish'
    ],
    successCriteria: 'Teams have usable, coherent designs; accessibility addressed; pitch materials professional.',
    skillsRequired: ['Strong design skills', 'Constructive feedback', 'Patience with non-designers', 'Rapid prototyping'],
    skillsPreferred: ['Product design experience', 'Hackathon experience', 'Civic tech or social impact design'],
    reportsTo: 'Art Lounge Lead',
    location: 'varies',
    trainingRequired: false,
    icon: Palette,
    color: 'pink'
  },
  {
    id: 'pitch-coach',
    title: 'Pitch Coach',
    category: 'support',
    description: 'Help teams tell their story effectively. Work on narrative, presentation, demo flow.',
    commitment: 'Saturday evening + Sunday morning',
    quantity: '4-6',
    youOwn: [
      'Run pitch practice sessions',
      'Help structure 3-5 minute story',
      'Coach on delivery',
      'Advise on demo flow',
      'Provide feedback on slides',
      'Help anticipate judge questions',
      'Build presenter confidence'
    ],
    youEscalate: [
      { situation: 'Team has no working demo', escalateTo: 'Hacker Mentor', channel: 'Discord #hacker-space' },
      { situation: 'Team conflict affecting prep', escalateTo: 'Volunteer Coordinator', channel: 'Slack DM' },
      { situation: 'Team needs subject matter input', escalateTo: 'Data Ambassador or SME', channel: 'Discord' }
    ],
    decisionAuthority: [
      'Practice session format',
      'Direct feedback on content and delivery',
      'Recommend teams cut or add content',
      'Pair teams for peer feedback'
    ],
    successCriteria: 'Teams feel confident; stay within time limits; tell clear story.',
    skillsRequired: ['Presentation skills', 'Storytelling', 'Constructive feedback', 'Patience'],
    skillsPreferred: ['Startup pitch experience', 'Public speaking coaching', 'Previous hackathon judging'],
    reportsTo: 'Hustle Corner Lead',
    location: 'varies',
    trainingRequired: false,
    icon: Mic,
    color: 'orange'
  },
  {
    id: 'subject-matter-expert',
    title: 'Subject Matter Expert',
    category: 'support',
    description: 'Provide domain knowledge for specific Tracks. Explain real-world context and constraints.',
    commitment: 'On-call via Discord',
    quantity: '8-12',
    youOwn: [
      'Be available via Discord for domain questions',
      'Provide real-world context',
      'Explain how things actually work',
      'Point out practical constraints',
      'Share relevant resources',
      'Validate solution realism'
    ],
    youEscalate: [
      { situation: 'Question outside expertise', escalateTo: 'Other SME or Data Ambassador', channel: 'Discord' },
      { situation: 'Team needs technical help', escalateTo: 'Hacker Mentor', channel: 'Discord #hacker-space' },
      { situation: 'Team needs data access', escalateTo: 'City Data Liaison', channel: 'Discord' }
    ],
    decisionAuthority: [
      'How much time to spend per team',
      'Whether to proactively check in',
      'What resources to share',
      'When to recommend team pivot'
    ],
    successCriteria: 'Teams in your domain feel supported; solutions grounded in reality.',
    skillsRequired: ['Deep domain expertise', 'Explain complex topics simply', 'Discord availability'],
    skillsPreferred: ['Richmond-specific experience', 'Previous hackathon experience'],
    reportsTo: 'Volunteer Coordinator',
    location: 'virtual',
    trainingRequired: true,
    icon: Brain,
    color: 'purple'
  },
];

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const allRoles: RoleCard[] = [
  ...preEventRoles,
  ...fridayRoles,
  ...saturdaySiteRoles,
  ...saturdayVirtualRoles,
  ...sundayRoles,
  ...supportRoles
];

export const getRoleById = (id: string): RoleCard | undefined => {
  return allRoles.find(role => role.id === id);
};

export const getRolesByCategory = (category: RoleCategory): RoleCard[] => {
  return allRoles.filter(role => role.category === category);
};

export const getCategoryLabel = (category: RoleCategory): string => {
  const labels: Record<RoleCategory, string> = {
    'track-stakeholder': 'Track Stakeholders',
    'cross-cutting': 'Cross-Cutting',
    'pre-event': 'Pre-Event',
    'friday': 'Friday',
    'saturday-site': 'Saturday (On-Site)',
    'saturday-virtual': 'Saturday (Virtual)',
    'sunday': 'Sunday',
    'support': 'Support / Mentors'
  };
  return labels[category];
};

export const getCategoryColor = (category: RoleCategory): string => {
  const colors: Record<RoleCategory, string> = {
    'track-stakeholder': 'yellow',
    'cross-cutting': 'cyan',
    'pre-event': 'purple',
    'friday': 'blue',
    'saturday-site': 'green',
    'saturday-virtual': 'emerald',
    'sunday': 'orange',
    'support': 'pink'
  };
  return colors[category];
};

/**
 * Get total volunteer count by category
 */
export const getVolunteerCounts = (): { category: RoleCategory; label: string; count: string }[] => {
  return [
    { category: 'pre-event', label: 'Pre-Event', count: '25-35' },
    { category: 'friday', label: 'Friday', count: '35-45' },
    { category: 'saturday-site', label: 'Saturday (Site)', count: '30-45' },
    { category: 'saturday-virtual', label: 'Saturday (Virtual)', count: '6-8' },
    { category: 'sunday', label: 'Sunday', count: '16-26' },
    { category: 'support', label: 'Support/Mentors', count: '25-35' }
  ];
};

