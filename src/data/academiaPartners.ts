/**
 * Academia Partners Data
 * Source: knowledge-base/02-team-governance/academia-k12.md
 * 
 * Contains K-12 district contacts, specialty schools, university partners,
 * critical deadlines, and compliance checklist items for hackathon planning.
 */

// =============================================================================
// TYPES
// =============================================================================

export interface CTESpecialist {
  name: string;
  focus: string;
}

export interface K12District {
  name: string;
  abbreviation: string;
  cteLeader: { name: string; title: string };
  specialists?: CTESpecialist[];
  strategicAlignment: string;
  valueProp: string;
  springBreakStart: string;
  keySchools: string[];
  fieldTripLeadTime: string;
  busDeadline?: string;
  notes?: string;
  status: 'not-contacted' | 'contacted' | 'meeting-scheduled' | 'confirmed' | 'declined';
}

export interface SpecialtySchool {
  name: string;
  type: 'magnet' | 'governors-academy' | 'regional';
  contact: { name: string; title: string };
  compatibility: 'high' | 'medium' | 'low';
  march27Status: string;
  alignment: string;
  notes: string;
  highlight?: string;
  status: 'not-contacted' | 'contacted' | 'confirmed' | 'declined';
}

export interface UniversityDepartment {
  name: string;
  contact: string;
  title: string;
  alignment: string;
}

export interface University {
  name: string;
  abbreviation: string;
  role: string;
  departments: UniversityDepartment[];
  serviceLearningOffice?: string;
  transportationNotes: string;
  status: 'not-contacted' | 'contacted' | 'confirmed' | 'declined';
}

export interface CriticalDeadline {
  id: string;
  date: string;
  action: string;
  owner: string;
  status: 'pending' | 'in-progress' | 'complete';
  notes: string;
  priority: 'critical' | 'high' | 'medium';
}

export interface ComplianceItem {
  id: string;
  category: string;
  requirement: string;
  details: string;
  deadline?: string;
  status: 'not-started' | 'in-progress' | 'complete';
}

export interface DiplomaSeals {
  name: string;
  requirement: string;
  hackathonFit: string;
  action: string;
}

// =============================================================================
// K-12 DISTRICTS
// =============================================================================

export const k12Districts: K12District[] = [
  {
    name: "Richmond Public Schools",
    abbreviation: "RPS",
    cteLeader: { 
      name: "Dr. Rhonda Turner", 
      title: "Associate Director of Career and Technical Education" 
    },
    specialists: [
      { name: "Shana Griffin", focus: "Trade & Industrial" },
      { name: "Parcilla Salley", focus: "Business/IT" }
    ],
    strategicAlignment: "Equity and Real-World Learning focus. Need to boost CCCR accreditation indicators.",
    valueProp: "WBL Accreditation",
    springBreakStart: "April 1",
    keySchools: ["Richmond Technical Center (RTC)", "Richmond Community High School", "Open High School"],
    fieldTripLeadTime: "4 weeks",
    notes: "March 27 is regular school day. End of Quarter is March 21 - students in 'lull' period. Risk: Eid al-Fitr proximity may cause early departures.",
    status: 'not-contacted'
  },
  {
    name: "Henrico County Public Schools",
    abbreviation: "HCPS",
    cteLeader: { 
      name: "Mac Beaton", 
      title: "Director of Workforce & Career Development" 
    },
    specialists: [
      { name: "Fahryka Bray", focus: "Business & Marketing" },
      { name: "Beverly Cocke", focus: "Administrative Coordinator" }
    ],
    strategicAlignment: "'Life-Ready' graduate profile. Heavy promotion of ACE centers and diploma seals.",
    valueProp: "'Life-Ready' Seals",
    springBreakStart: "March 30",
    keySchools: ["Center for Information Technology (Deep Run HS)", "Hermitage ACE Center", "Highland Springs ACE Center"],
    fieldTripLeadTime: "6 weeks (commercial) / 4 weeks (school bus)",
    busDeadline: "February 13, 2026",
    notes: "Mac Beaton is nationally recognized CTE leader. His support essentially GUARANTEES ACE center participation.",
    status: 'not-contacted'
  },
  {
    name: "Chesterfield County Public Schools",
    abbreviation: "CCPS",
    cteLeader: { 
      name: "Chad Maclin", 
      title: "Director of Career and Technical Education" 
    },
    specialists: [
      { name: "Dr. Emily Stains", focus: "Director of Secondary Curriculum" },
      { name: "Dr. Nancy Hoover", focus: "Director, Governor's Academy for Engineering Studies" }
    ],
    strategicAlignment: "3E Readiness framework (Enrollment, Employment, Enlistment). Strong engineering focus.",
    valueProp: "STEM Hours",
    springBreakStart: "March 30",
    keySchools: ["Governor's Academy for Engineering Studies (L.C. Bird HS)"],
    fieldTripLeadTime: "6 weeks",
    notes: "Largest division in region. L.C. Bird is far from downtown - transportation is major hurdle. CTE Advisory Committee meets monthly.",
    status: 'not-contacted'
  }
];

// =============================================================================
// SPECIALTY SCHOOLS
// =============================================================================

export const specialtySchools: SpecialtySchool[] = [
  {
    name: "CodeRVA Regional High School",
    type: "regional",
    contact: { name: "Executive Director", title: "TBD" },
    compatibility: "high",
    march27Status: "In Session",
    alignment: "Designed specifically for CS and workforce integration. Students do 200+ hour internships.",
    notes: "Near The Diamond, accessible via public transit. Frame as 'Flex Day' or sanctioned off-site learning.",
    highlight: "HIGHEST COMPATIBILITY - Purpose-built for hackathon participation",
    status: 'not-contacted'
  },
  {
    name: "Maggie L. Walker Governor's School",
    type: "magnet",
    contact: { name: "Administration", title: "TBD" },
    compatibility: "high",
    march27Status: "POTENTIAL HOLIDAY (if <5 snow days used)",
    alignment: "High-achieving students. If March 27 is a holiday, zero field trip bureaucracy needed.",
    notes: "Calendar provision: 'If fewer than 5 instructional days are lost, March 27 becomes School Holiday'",
    highlight: "SNOW DAY OPPORTUNITY - Check winter weather status",
    status: 'not-contacted'
  },
  {
    name: "Governor's Academy for Engineering Studies",
    type: "governors-academy",
    contact: { name: "Dr. Nancy Hoover", title: "Director" },
    compatibility: "medium",
    march27Status: "In Session",
    alignment: "Premier partner for hardware and engineering-focused hackathon projects.",
    notes: "Located at L.C. Bird HS - transportation barrier. Dr. Hoover is key gatekeeper.",
    status: 'not-contacted'
  },
  {
    name: "Wilder School",
    type: "magnet",
    contact: { name: "Administration", title: "TBD" },
    compatibility: "high",
    march27Status: "In Session",
    alignment: "Public policy and civic engagement focus aligns with civic tech hackathon themes.",
    notes: "VCU's L. Douglas Wilder School for Government and Public Affairs - strong civic engagement pipeline.",
    highlight: "HIGHEST PRIORITY - Civic engagement and public policy alignment",
    status: 'not-contacted'
  }
];

// =============================================================================
// UNIVERSITIES
// =============================================================================

export const universities: University[] = [
  {
    name: "Virginia Commonwealth University",
    abbreviation: "VCU",
    role: "Host Partner / Primary Mentor Source",
    departments: [
      { 
        name: "College of Engineering - Computer Science", 
        contact: "Dr. Kemal Akkaya", 
        title: "Department Chair",
        alignment: "Student orgs: ACM, RamDev"
      },
      { 
        name: "Service Learning Office", 
        contact: "Service Learning Coordinator", 
        title: "TBD",
        alignment: "Register as 'Service Learning Designated' activity for syllabi integration"
      },
      { 
        name: "Da Vinci Center", 
        contact: "Director", 
        title: "TBD",
        alignment: "Cross-disciplinary innovation hub. Shift Retail Lab as venue option."
      }
    ],
    serviceLearningOffice: "Register hackathon as Service Learning Designated activity",
    transportationNotes: "Downtown anchor - excellent transit access via Pulse BRT",
    status: 'not-contacted'
  },
  {
    name: "University of Richmond",
    abbreviation: "UR",
    role: "Civic Engagement Partner",
    departments: [
      { 
        name: "Bonner Center for Civic Engagement (CCE)", 
        contact: "Sylvia Gale", 
        title: "Executive Director",
        alignment: "Gateway to UR's civic-minded students"
      },
      { 
        name: "Student Engagement", 
        contact: "Blake Stack", 
        title: "Senior Associate Director",
        alignment: "City Excursions program could transport students"
      }
    ],
    transportationNotes: "Geographically separated from downtown. CCE operates shuttles and has City Excursions program.",
    status: 'not-contacted'
  },
  {
    name: "Virginia State University",
    abbreviation: "VSU",
    role: "Diversity Partner",
    departments: [
      { 
        name: "Engineering & Computer Science", 
        contact: "Dr. Dawit Haile", 
        title: "Dean",
        alignment: "Vital for ensuring diversity in participant pool"
      }
    ],
    transportationNotes: "In Ettrick - offer 'transportation scholarship' or chartered bus to ensure access.",
    status: 'not-contacted'
  }
];

// =============================================================================
// CRITICAL DEADLINES
// =============================================================================

export const criticalDeadlines: CriticalDeadline[] = [
  {
    id: "bus-requests",
    date: "2026-02-13",
    action: "Submit bus transportation requests to HCPS/CCPS",
    owner: "TBD",
    status: 'pending',
    notes: "6-week lead time required for commercial buses. 4 weeks for school buses.",
    priority: 'critical'
  },
  {
    id: "vcu-minors",
    date: "2026-02-25",
    action: "Complete VCU Protection of Minors registration",
    owner: "TBD",
    status: 'pending',
    notes: "VCU requires programs to register 30 days in advance. Hard deadline for March 27 event.",
    priority: 'critical'
  },
  {
    id: "teacher-toolkits",
    date: "2026-02-15",
    action: "Distribute Teacher Toolkits to CS faculty",
    owner: "TBD",
    status: 'pending',
    notes: "Target: CodeRVA, MLWGS, ACE Centers. Teachers need materials to justify field trips.",
    priority: 'high'
  },
  {
    id: "background-checks",
    date: "2026-03-20",
    action: "Finalize chaperone background checks",
    owner: "TBD",
    status: 'pending',
    notes: "All Tier I/II staff must be cleared. Collect attestations.",
    priority: 'high'
  },
  {
    id: "insurance",
    date: "2026-03-01",
    action: "Bind special event liability insurance",
    owner: "TBD",
    status: 'pending',
    notes: "$1M/$2M limits. List venue as 'Additional Insured'. Providers: GatherGuard, Eventsured, Markel.",
    priority: 'high'
  },
  {
    id: "waivers",
    date: "2026-03-15",
    action: "Collect all parent-signed permission slips",
    owner: "TBD",
    status: 'pending',
    notes: "Must include: Medical release, Media release, AUP, Liability waiver.",
    priority: 'high'
  },
  {
    id: "lanyards",
    date: "2026-03-01",
    action: "Purchase color-coded lanyard system",
    owner: "TBD",
    status: 'pending',
    notes: "RED = Minors, GREEN = University Students, BLUE = Background-Checked Mentors/Staff",
    priority: 'medium'
  }
];

// =============================================================================
// COMPLIANCE CHECKLIST
// =============================================================================

export const complianceChecklist: ComplianceItem[] = [
  {
    id: "vcu-registration",
    category: "Legal",
    requirement: "VCU Protection of Minors Office Registration",
    details: "Event registered with VCU Protection of Minors Office by Feb 25.",
    deadline: "2026-02-25",
    status: 'not-started'
  },
  {
    id: "background-tier1",
    category: "Background Checks",
    requirement: "Tier I Staff (Supervisors) - Background Checked",
    details: "Multi-state criminal background check + Sex Offender Registry check (biennial). Mandatory Training.",
    status: 'not-started'
  },
  {
    id: "background-tier2",
    category: "Background Checks",
    requirement: "Tier II Staff (Mentors) - Background Checked",
    details: "Background check + Training required for one-on-one interaction.",
    status: 'not-started'
  },
  {
    id: "chaperone-ratios",
    category: "Safety",
    requirement: "1:10 Adult-to-Minor Ratio Confirmed",
    details: "Maintain ratio for all time blocks. Use K-12 teachers as primary chaperones (already background-checked).",
    status: 'not-started'
  },
  {
    id: "rule-of-two",
    category: "Safety",
    requirement: "'Rule of Two' Briefed to All Participants",
    details: "Never allow a minor to be alone with a single adult. Always two adults present.",
    status: 'not-started'
  },
  {
    id: "waivers-collected",
    category: "Legal",
    requirement: "Parent-Signed Forms Collected for Every Minor",
    details: "Liability/Media/Medical forms. Must include allergies, emergency contacts.",
    status: 'not-started'
  },
  {
    id: "insurance-bound",
    category: "Legal",
    requirement: "Special Event Liability Insurance Policy Bound",
    details: "$1M per occurrence / $2M aggregate. List venue as 'Additional Insured'.",
    status: 'not-started'
  },
  {
    id: "lanyard-system",
    category: "Safety",
    requirement: "Color-Coded Lanyard System Purchased",
    details: "RED = Minors, GREEN = University Students, BLUE = Background-Checked Mentors/Staff. Protocol distributed to security.",
    status: 'not-started'
  },
  {
    id: "bus-requests-filed",
    category: "Logistics",
    requirement: "Bus Requests Filed with District Transportation",
    details: "Submit to HCPS/CCPS by Feb 13. 6-week lead time for commercial buses.",
    deadline: "2026-02-13",
    status: 'not-started'
  }
];

// =============================================================================
// DIPLOMA SEALS (for marketing to schools)
// =============================================================================

export const diplomaSeals: DiplomaSeals[] = [
  {
    name: "Excellence in Civics Education Seal",
    requirement: "50 hours of voluntary community service",
    hackathonFit: "Frame event as 'Civic Tech' - building tools for the public good (RVAgreen 2050 data). Counts as civic service.",
    action: "Provide 'Civics Service Log' at registration desk. Students can log ~15-20 hours (Fri-Sun)."
  },
  {
    name: "STEM Seal",
    requirement: "50 hours (or 25 for certain cohorts) of WBL in a STEM area",
    hackathonFit: "Event qualifies as 'Service Learning' or 'Job Shadowing' WBL experience.",
    action: "Issue formal 'WBL Verification Letter' signed by organizers and corporate partners (rvatech/) outlining STEM competencies."
  }
];

// =============================================================================
// TRANSPORTATION INFO
// =============================================================================

export const transportationInfo = {
  grtcPulse: {
    name: "GRTC Pulse BRT",
    status: "Zero Fare",
    frequency: "Every 15 minutes",
    coverage: "Willow Lawn (Henrico) to Rockett's Landing, passing VCU and downtown",
    note: "Create 'Pulse Guides' for each school showing route to venue"
  },
  schoolBusCost: "$300-$500 per bus per day (varies by district policy)",
  exampleRoute: "CodeRVA Students: Walk to The Diamond Station → Pulse Eastbound → Exit at VCU/VUU Station"
};

// =============================================================================
// OUTREACH TEMPLATE (for reference)
// =============================================================================

export const outreachTemplate = {
  subject: "Proposal: High-Quality WBL Event for Students - March 27-29",
  targetAudience: "CTE Directors",
  keyPoints: [
    "Designed to meet High-Quality Work-Based Learning (HQWBL) requirements",
    "Aligns with STEM and Civics Education Diploma Seals",
    "15+ hours of Service Learning (Civics Seal)",
    "Industry Mentorship (STEM Seal)",
    "Applies 2024 CS SOLs regarding Data Analysis using RVAgreen 2050 data",
    "Request: Designate as approved field trip for Friday, March 27"
  ]
};

// =============================================================================
// SUMMARY STATS
// =============================================================================

export const academiaStats = {
  totalK12Districts: k12Districts.length,
  totalSpecialtySchools: specialtySchools.length,
  totalUniversities: universities.length,
  criticalDeadlinesCount: criticalDeadlines.filter(d => d.priority === 'critical').length,
  complianceItemsTotal: complianceChecklist.length,
  complianceItemsComplete: complianceChecklist.filter(c => c.status === 'complete').length,
  estimatedK12Capacity: 100,
  estimatedUniversityCapacity: 100
};

