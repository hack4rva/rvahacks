/**
 * Single source of truth for team delegation structure.
 * Core leaders and their sub-role assignments.
 * Source: knowledge-base/02-team-governance/
 */

export interface Volunteer {
  name: string;
  focus: string;
}

export interface SubRole {
  title: string;
  assignee: string | null;
  description: string;
  whyItMatters: string;
  commitment: string;
  volunteers?: Volunteer[];
  targetCount?: string;
}

export interface CoreLeader {
  name: string;
  role: string;
  focus: string;
  responsibilities: string[];
  whyItMatters: string;
  subRoles: SubRole[];
}

export const teamDelegation: CoreLeader[] = [
  {
    name: "Ford Prior",
    role: "Event Director",
    focus: "Tech, Platform, Judging",
    responsibilities: [
      "Overall event vision and strategy",
      "Mayor's office relationship",
      "Platform and technology decisions",
      "Judging framework and criteria",
    ],
    whyItMatters: "The Event Director is the single point of accountability for the entire hackathon — ensuring all teams are aligned, decisions get made, and the event delivers on its promise to the Mayor's office.",
    subRoles: [
      { title: "Platform Administrator", assignee: "Tom Becker", description: "Manage Devpost, Discord, and GitHub infrastructure. Configure submission workflows, test platforms, run day-of operations.", whyItMatters: "Smooth platform operations prevent submission failures and keep 300 participants connected throughout the weekend.", commitment: "3-5 hrs/week Feb-Mar + weekend" },
      { title: "Hacker Space Lead", assignee: "Michael Ghaffari", description: "Staff and manage the Hacker Space with software engineers, security experts, and technical specialists. Create shift schedules, manage mentor queue, pair teams with the right expertise.", whyItMatters: "The Hacker Space is where code gets written and bugs get squashed. This role ensures every team has access to the technical firepower they need.", commitment: "3-4 hrs/week Feb-Mar + weekend" },
      { title: "Hacker Mentor", assignee: null, volunteers: [
        { name: "Kenton Vizdos", focus: "Full-Stack Development" },
        { name: "Mohammad Hassan", focus: "CI/CD & DevOps" },
        { name: "Mike Mitchell", focus: "Security & Data Protection" },
      ], targetCount: "8-12", description: "Staff the Hacker Space — the technical mentorship hub where teams get help with code, architecture, APIs, databases, security, and deployment. Respond to mentor queue requests, pair program with stuck teams, review code, and help teams make smart technical decisions within hackathon constraints.", whyItMatters: "The Hacker Space is the engine room of the hackathon. When teams hit technical walls — broken APIs, deployment failures, architecture questions — Hacker Mentors get them unstuck. Real engineers helping real teams build real solutions is the core of what makes a hackathon valuable.", commitment: "2-4 hr shifts during event" },
      { title: "Accessibility Mentor", assignee: "J. Albert Bowden II", description: "Ensure solutions are accessible. Advise teams on WCAG compliance, screen reader support, keyboard navigation.", whyItMatters: "Civic tech must work for everyone. Accessibility isn't optional — it's how we ensure solutions serve all Richmonders.", commitment: "On-call during event" },
      { title: "Judge Coordinator", assignee: "Ankit Mathur", description: "Recruit 15-20 judges, design rubrics with pillar stakeholders, manage Sunday judging rounds, orchestrate finals.", whyItMatters: "Fair, rigorous judging ensures the best solutions win — and get implemented. This role protects the integrity of the competition.", commitment: "3-5 hrs/week Feb-Mar + Sunday" },
      { title: "Judge", assignee: null, volunteers: [
        { name: "Debbie Irwin", focus: "Economy Track" },
        { name: "Alex Otanez", focus: "Product/Innovation" },
      ], targetCount: "15-20", description: "Evaluate solutions based on rubric criteria. Score submissions, provide feedback, participate in deliberations.", whyItMatters: "Domain experts ensure winning solutions actually address real challenges and are technically sound.", commitment: "Sunday judging (4-6 hrs)" },
      { title: "Help Desk Lead", assignee: "David Cariello", description: "Manage general help desk, troubleshoot issues, triage questions to right resources, track common problems.", whyItMatters: "When participants hit friction, help desk is first response. Fast resolution keeps teams productive.", commitment: "3-4 hrs/week Feb-Mar + weekend" },
    ]
  },
  {
    name: "Crystal Harvey",
    role: "Venue & Operations", 
    focus: "Science Museum, Logistics, Day-of",
    responsibilities: [
      "Science Museum relationship and logistics",
      "Catering and food service",
      "AV and technical setup",
      "Day-of operations coordination",
    ],
    whyItMatters: "Venue & Operations owns the physical experience — ensuring 300 participants have a professional, well-run environment where they can focus on building solutions, not logistics.",
    subRoles: [
      { title: "Friday Operations Lead", assignee: null, description: "Own all Friday logistics: registration flow, kickoff ceremonies, pillar sessions, team formation, evening transition.", whyItMatters: "Friday sets the tone. A smooth kickoff energizes teams; friction kills momentum before hacking begins.", commitment: "Full Friday + planning" },
      { title: "Sunday Operations Lead", assignee: null, description: "Own all Sunday logistics: demo setup, judging logistics, finals production, awards ceremony, cleanup.", whyItMatters: "Sunday is the payoff. Professional execution of finals makes winners feel recognized and sponsors feel valued.", commitment: "Full Sunday + planning" },
      { title: "Registration Manager", assignee: null, description: "Design check-in process, coordinate badge production, train desk volunteers, manage credentials.", whyItMatters: "First impressions matter. Efficient registration starts the weekend right; chaos creates frustration.", commitment: "2-3 hrs/week Feb-Mar + Friday/Sunday" },
      { title: "AV Coordinator", assignee: null, description: "Set up and test all AV equipment. Manage microphones, projectors, recordings. Troubleshoot issues.", whyItMatters: "AV failures derail sessions. Reliable equipment ensures speakers are heard and sessions are captured.", commitment: "Full event + setup/testing" },
      { title: "Catering Coordinator", assignee: "Bridget Cochran", description: "Coordinate with caterers, manage food setup and replenishment, handle dietary accommodations, maintain clean stations.", whyItMatters: "Fed hackers are happy hackers. Smooth food service keeps energy high without disrupting workflow.", commitment: "Event weekend + planning" },
    ]
  },
  {
    name: "Michael Kolbe",
    role: "City Liaison",
    focus: "Government Stakeholders, Tracks, SMEs",
    responsibilities: [
      "City department engagement",
      "Track challenge design",
      "Subject matter expert recruitment",
      "Government data access",
    ],
    whyItMatters: "City Liaison bridges the hackathon to city government — ensuring challenges address real city needs and solutions have a path to implementation through city departments.",
    subRoles: [
      { title: "Challenge Design Facilitator", assignee: "Ryan Shriver", description: "Work with city departments and community partners to define specific, solvable problems. Create rubrics showing what good solutions look like.", whyItMatters: "Good challenge design is the difference between 'cool demo' and 'implementable solution'. This role shapes what teams build.", commitment: "8-12 hrs total in Jan-Feb" },
      { title: "Track Coordinator", assignee: null, description: "Recruit and manage the 21 Track Team stakeholders (3 per Track). Ensure each Track has City, Community, and Corporate partner representation.", whyItMatters: "Track Teams are the backbone of the event. Without stakeholders, challenges lack authenticity and solutions lack champions.", commitment: "5-8 hrs/week Jan-Mar" },
      { title: "SME Recruiter", assignee: null, description: "Recruit subject matter experts from city departments and nonprofits. Coordinate their availability for sessions and Discord support.", whyItMatters: "SMEs ground solutions in reality. They tell teams 'we've tried that' or 'that would be amazing' — context code can't provide.", commitment: "3-4 hrs/week Jan-Mar" },
      { title: "VIP/Speaker Host Lead", assignee: null, description: "Greet stakeholders, escort VIPs, ensure speakers are prepared, facilitate introductions, handle VIP needs.", whyItMatters: "City officials and nonprofit leaders need white-glove treatment. Their experience determines whether they champion solutions post-event.", commitment: "Full Friday + some Sunday" },
    ]
  },
  {
    name: "Sinclair Jenks",
    role: "Marketing & Comms",
    focus: "Brand, Social Media, Press, Content",
    responsibilities: [
      "Brand identity and visual design",
      "Website and social media",
      "Press and media relations",
      "Participant communications",
    ],
    whyItMatters: "Marketing & Comms tells Richmond's story — building awareness that drives registrations, captures moments that inspire future civic tech, and earns media coverage that validates the model.",
    subRoles: [
      { title: "Outreach Lead", assignee: null, description: "Lead pre-event promotion campaigns. Coordinate with partners for cross-promotion. Drive registration targets.", whyItMatters: "300 participants don't appear magically. Outreach converts awareness to signups across diverse communities.", commitment: "5-8 hrs/week Jan-Mar" },
      { title: "Marketing Content Lead", assignee: "Carly Manning", description: "Create blog posts, social content, email campaigns. Document pillar challenges and stakeholder stories.", whyItMatters: "Great content builds excitement and explains why this matters. It's how we move from 'hackathon' to 'civic innovation movement'.", commitment: "3-5 hrs/week Jan-Mar" },
      { title: "Photography Lead", assignee: null, description: "Coordinate photographers during event. Capture candids, sessions, teams, awards. Organize and share photos for social/press.", whyItMatters: "Photos become the permanent record. Great event photography drives post-event coverage and next year's recruitment.", commitment: "Full event weekend" },
    ]
  },
  {
    name: "Heather Lyne",
    role: "Entrepreneurial Ecosystems",
    focus: "Art Lounge, Hustle Corner, Pitch Coaching",
    responsibilities: [
      "Art Lounge (VCU Brandcenter)",
      "Hustle Corner (business & product strategy)",
      "Pitch coaching and presentation skills",
      "Workshop facilitation",
    ],
    whyItMatters: "Entrepreneurial Ecosystems ensures teams don't just build code — they build solutions with beautiful design, compelling stories, and viable paths to implementation.",
    subRoles: [
      { title: "Art Lounge Lead", assignee: "Alyssa Paulette", description: "Staff the Art Lounge with VCU Brandcenter mentors and creative professionals. Coordinate design critiques, visual feedback sessions, and UX guidance.", whyItMatters: "The Art Lounge is where solutions get their visual identity. Great civic tech needs great design — this role ensures teams have access to creative expertise.", commitment: "3-4 hrs/week Feb-Mar + weekend" },
      { title: "Artist Mentor", assignee: null, volunteers: [
        { name: "Madison Johnson", focus: "UX/UI Design" },
        { name: "Larry Thacker", focus: "Visual Design" },
      ], targetCount: "6-8", description: "Staff the Art Lounge — the creative mentorship hub where teams get help with user experience, visual design, branding, and presentation aesthetics. Review wireframes, advise on color and typography, help with pitch deck visuals, and ensure solutions are user-centered and visually compelling.", whyItMatters: "The Art Lounge transforms functional prototypes into delightful experiences. Artist Mentors help teams think beyond 'does it work' to 'does it feel right' — ensuring solutions are intuitive, accessible, and beautiful.", commitment: "2-4 hr shifts during event" },
      { title: "Hustle Corner Lead", assignee: "April Palmer", description: "Staff the Hustle Corner with business strategists, product thinkers, and pitch coaches. Coordinate mock pitches, business model feedback, and implementation planning.", whyItMatters: "The Hustle Corner is where solutions get their story and strategy. A great product with a bad pitch loses — this role ensures teams can articulate impact and viability.", commitment: "Saturday evening + Sunday" },
      { title: "Hustle Mentor", assignee: null, volunteers: [
        { name: "Alex Otanez", focus: "Product Strategy" },
        { name: "Adam Woodward", focus: "Business Models" },
        { name: "Nick Pericle", focus: "Workshops & Facilitation" },
      ], targetCount: "4-6", description: "Staff the Hustle Corner — the business mentorship hub where teams get help with product strategy, business models, sustainability planning, and pitch preparation. Run mock pitch sessions, advise on feature prioritization, help teams articulate their value proposition, and coach presentation delivery.", whyItMatters: "The Hustle Corner ensures solutions are more than demos — they're viable, fundable, implementable ideas. Hustle Mentors help teams answer 'so what?' — connecting technical work to real-world impact, city adoption pathways, and compelling narratives.", commitment: "2-4 hr shifts during event" },
    ]
  },
  {
    name: "Will Melton",
    role: "Sponsorships & Partnerships",
    focus: "Corporate Partners, Community Partners",
    responsibilities: [
      "Corporate partner recruitment",
      "Sponsorship package development",
      "Partner relationship management",
      "Sponsorship fulfillment",
    ],
    whyItMatters: "Sponsorships & Partnerships secures the resources that make the event possible — funding, prizes, mentors, and the cross-sector legitimacy that makes solutions adoptable.",
    subRoles: [
      { title: "Corporate Partner Coordinator", assignee: null, description: "Support sponsor outreach, track pipeline, manage sponsor communications, ensure fulfillment of sponsor benefits.", whyItMatters: "Corporate Partners fund Track bounties, food, and swag. Good partner management means they come back next year.", commitment: "3-5 hrs/week Jan-Mar" },
      { title: "Community Partner Coordinator", assignee: null, description: "Build relationships with 7+ community organizations across Tracks. Manage expectations, coordinate participation, ensure authentic community voice.", whyItMatters: "Community Partners ensure solutions address real needs — not just interesting technical problems. They're the voice of the community.", commitment: "3-5 hrs/week Jan-Mar + event" },
    ]
  },
  {
    name: "TBD",
    role: "Community & Volunteers",
    focus: "Volunteer Recruitment, Site Captains, Participant Experience",
    responsibilities: [
      "Volunteer recruitment and coordination",
      "Participant experience design",
      "Team formation facilitation",
      "Community outreach",
    ],
    whyItMatters: "Community & Volunteers is the human infrastructure — ensuring 150-200 volunteers are recruited, trained, and deployed to create an experience where every participant feels supported.",
    subRoles: [
      { title: "Volunteer Coordinator", assignee: null, description: "Recruit 150-200 volunteers. Design training, create shift schedules, handle no-shows, manage day-of support.", whyItMatters: "Volunteers are the engine. Without them, registration doesn't happen, food doesn't flow, and participants feel abandoned.", commitment: "5-8 hrs/week Feb-Mar + event" },
      { title: "Volunteer Recruitment Advisor", assignee: "Claire Jordan", description: "Provide guidance on volunteer recruitment strategy and channels.", whyItMatters: "Strategic advice ensures we recruit diverse, reliable volunteers from the right communities.", commitment: "Advisory (2-3 hrs total)" },
      { title: "Site Captain Coordinator", assignee: null, description: "Recruit and train Site Captains for 15+ satellite locations. Establish communication protocols with main venue.", whyItMatters: "Distributed hacking only works if every location has a capable captain. This role scales the event citywide.", commitment: "3-5 hrs/week Feb-Mar" },
      { title: "Team Formation Lead", assignee: "Christian Markow", description: "Design and facilitate team formation activities. Ensure solo attendees find teams, skill-match participants.", whyItMatters: "Nobody should feel left out. Great team formation creates diverse, capable teams — and prevents the loneliness that kills participation.", commitment: "Friday afternoon/evening" },
    ]
  },
];

/**
 * Get computed team statistics
 */
export const getTeamStats = () => {
  const totalCoreLeaders = teamDelegation.length;
  const filledCoreLeaders = teamDelegation.filter(l => l.name !== 'TBD').length;
  const totalSubRoles = teamDelegation.reduce((acc, l) => acc + l.subRoles.length, 0);
  const filledSubRoles = teamDelegation.reduce((acc, l) => 
    acc + l.subRoles.filter(r => r.assignee || (r.volunteers && r.volunteers.length > 0)).length, 0);
  const openSubRoles = totalSubRoles - filledSubRoles;

  return {
    totalCoreLeaders,
    filledCoreLeaders,
    totalSubRoles,
    filledSubRoles,
    openSubRoles,
  };
};

/**
 * Get all open (unassigned) roles
 */
export const getOpenRoles = () => {
  const openRoles: { leader: string; role: SubRole }[] = [];
  
  teamDelegation.forEach(leader => {
    leader.subRoles.forEach(role => {
      if (!role.assignee && (!role.volunteers || role.volunteers.length === 0)) {
        openRoles.push({ leader: leader.name, role });
      }
    });
  });
  
  return openRoles;
};

