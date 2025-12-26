/**
 * Campaign Roadmap - Narrative 6-phase timeline
 * Source: knowledge-base/01-planning-strategy/master-schedule.md (accelerated timeline)
 */

import { CheckCircle2, AlertTriangle } from "lucide-react";

interface Phase {
  number: string;
  dates: string;
  daysOut: string;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  actions: string[];
  announcements: { date: string; content: string }[];
  deadlines?: string[];
}

const phases: Phase[] = [
  {
    number: "1",
    dates: "Jan 6–12",
    daysOut: "80 days out",
    title: "Launch & Open Registration",
    color: "text-blue-700 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    borderColor: "border-blue-400",
    actions: [
      "First pitch at RVA JS Meetup (Jan 6)",
      "Campus blitz at VCU + UVA (Jan 10)",
      "City Council public comment (Jan 12)",
      "Foundation partners locked (AI Ready RVA, CoStar, Science Museum)",
      "Registration system goes live",
    ],
    announcements: [
      { date: "Jan 10", content: '"Hack for RVA is official"' },
      { date: "Jan 10", content: '"Registration is open"' },
      { date: "Jan 10", content: "Founding partner logos" },
    ],
  },
  {
    number: "2",
    dates: "Jan 13–19",
    daysOut: "73 days out",
    title: "Activate Community + Lock Core Team",
    color: "text-indigo-700 dark:text-indigo-400",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
    borderColor: "border-indigo-400",
    actions: [
      "Beers & Bugs sticky note session — problem extraction (Jan 13)",
      "RVA Tech C-Suite pitch to Nick Serfass (Jan 15)",
      "RVA Code & Coffee — recruit squad leaders (Jan 17)",
      "Core team finalized (7 leads confirmed)",
    ],
    announcements: [
      { date: "Jan 17", content: "Core team spotlight" },
      { date: "Jan 17", content: "Individual LinkedIn posts from each leader" },
      { date: "Jan 17", content: "Email drip #1 to signups" },
    ],
  },
  {
    number: "3",
    dates: "Jan 20–31",
    daysOut: "59 days out",
    title: "Build the Network: Pillars + Academia + Leadership",
    color: "text-amber-700 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    borderColor: "border-amber-400",
    actions: [
      "21 pillar stakeholders confirmed (3 per track)",
      "27 leadership sub-roles staffed",
      "VCU + UR partnerships confirmed",
      "Challenge brief drafting in parallel",
    ],
    announcements: [
      { date: "Jan 30", content: "Academia partners announcement" },
      { date: "Jan 31", content: '"7 Pillars. 21 Leaders."' },
      { date: "Jan 31", content: "Leadership crew introduction" },
    ],
    deadlines: ["K-12 bus requests submitted (Jan 30 — HARD)"],
  },
  {
    number: "4",
    dates: "Feb 3–14",
    daysOut: "41 days out",
    title: "Complete the Ecosystem: Challenges + Satellites + Prize Pool",
    color: "text-pink-700 dark:text-pink-400",
    bgColor: "bg-pink-50 dark:bg-pink-950/30",
    borderColor: "border-pink-400",
    actions: [
      "RVA JS return visit — momentum update (Feb 3)",
      "CyberVA recruitment — security pros (Feb 12)",
      "7 challenge briefs finalized + published",
      "15+ satellite locations locked",
      "$17K prize pool secured",
      "150+ volunteers recruited",
    ],
    announcements: [
      { date: "Feb 7", content: '"Hack anywhere" — 15 venues' },
      { date: "Feb 7", content: "Challenge reveal + data packages" },
      { date: "Feb 14", content: '"$17,000 in prizes"' },
      { date: "Feb 14", content: "Volunteer appreciation post" },
    ],
  },
  {
    number: "5",
    dates: "Feb 17–Mar 9",
    daysOut: "18 days out",
    title: "Platforms Ready + Media Push",
    color: "text-emerald-700 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    borderColor: "border-emerald-400",
    actions: [
      "Devpost + Discord + GitHub configured (Feb 21)",
      "Op-ed publishes in RTD/Richmond Mag (Mar 7–14)",
      "City Council return visit (Mar 9)",
      "Volunteer training sessions",
    ],
    announcements: [
      { date: "Feb 21", content: '"Platforms ready" + registration push' },
      { date: "Mar 7", content: "Op-ed shared across channels" },
      { date: "Mar 7", content: "Press outreach (local TV, RVA Mag)" },
    ],
    deadlines: ["Insurance bound $1M/$2M (Mar 1 — HARD)"],
  },
  {
    number: "🎉",
    dates: "Mar 10–29",
    daysOut: "17 → 0 days",
    title: "Final Push → Event",
    color: "text-green-700 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-950/30",
    borderColor: "border-green-500",
    actions: [
      "Post-spring break campus blitz (Mar 16)",
      "Museum District Town Hall (Mar 20)",
      "Mar 27: Kickoff @ Science Museum",
      "Mar 28: Hacking @ 15+ locations",
      "Mar 29: Finals & Awards",
    ],
    announcements: [
      { date: "Mar 20", content: '"1 week until Hack for RVA"' },
      { date: "Mar 24-29", content: "Daily countdown posts" },
      { date: "Mar 27-29", content: "Live event coverage" },
      { date: "Mar 29", content: "Winner announcements" },
    ],
    deadlines: [
      "Permission slips collected (Mar 15 — HARD)",
      "Background checks complete (Mar 20 — HARD)",
    ],
  },
];

const hardDeadlines = [
  { date: "Jan 10", item: "Registration live" },
  { date: "Jan 30", item: "K-12 bus requests" },
  { date: "Feb 11", item: "VCU minors registration" },
  { date: "Feb 14", item: "Prize pool secured" },
  { date: "Mar 1", item: "Insurance bound" },
  { date: "Mar 15", item: "Permission slips" },
  { date: "Mar 20", item: "Background checks" },
  { date: "Mar 25", item: "Registration closes" },
];

const targetMetrics = [
  { value: "300+", label: "Participants" },
  { value: "30+", label: "Teams" },
  { value: "$17K", label: "Prizes" },
  { value: "150+", label: "Volunteers" },
  { value: "15+", label: "Venues" },
];

export const CampaignRoadmap = () => {
  return (
    <div className="space-y-8">
      {/* Timeline */}
      <div className="relative space-y-6">
        {phases.map((phase, index) => (
          <div key={index} className="relative flex gap-4 md:gap-6">
            {/* Timeline connector */}
            {index < phases.length - 1 && (
              <div className="absolute left-5 md:left-6 top-14 bottom-0 w-0.5 bg-border" />
            )}
            
            {/* Phase marker */}
            <div className="flex flex-col items-center flex-shrink-0 z-10">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${phase.bgColor} ${phase.color} flex items-center justify-center font-bold text-lg border-2 ${phase.borderColor}`}>
                {phase.number}
              </div>
              <div className="text-xs text-muted-foreground text-center mt-1 font-medium">
                {phase.dates}
              </div>
            </div>

            {/* Phase content */}
            <div className={`flex-1 ${phase.bgColor} rounded-xl p-4 md:p-5 border-l-4 ${phase.borderColor}`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <h3 className={`font-bold text-lg ${phase.color}`}>
                  {phase.title}
                </h3>
                <span className="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded-full w-fit">
                  {phase.daysOut}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Actions */}
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    What Happens
                  </h4>
                  <ul className="space-y-1.5">
                    {phase.actions.map((action, i) => (
                      <li key={i} className="text-sm text-foreground flex items-start gap-2">
                        <span className="text-muted-foreground mt-0.5">→</span>
                        <span>{action}</span>
                      </li>
                    ))}
                    {phase.deadlines?.map((deadline, i) => (
                      <li key={`deadline-${i}`} className="text-sm text-destructive font-medium flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{deadline}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Announcements */}
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    📣 Announce
                  </h4>
                  <ul className="space-y-1.5">
                    {phase.announcements.map((ann, i) => (
                      <li key={i} className="text-sm text-foreground flex items-start gap-2">
                        <span className="text-xs font-medium text-muted-foreground min-w-[50px]">{ann.date}</span>
                        <span>{ann.content}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section: Metrics + Deadlines */}
      <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border">
        {/* Target Metrics */}
        <div>
          <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-4">
            Target Metrics
          </h4>
          <div className="flex flex-wrap gap-6">
            {targetMetrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                <div className="text-xs text-muted-foreground uppercase">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hard Deadlines */}
        <div>
          <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-4">
            Hard Deadlines
          </h4>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
            {hardDeadlines.map((deadline, i) => (
              <div key={i} className="text-sm flex gap-2">
                <span className="font-bold text-destructive min-w-[50px]">{deadline.date}</span>
                <span className="text-muted-foreground">{deadline.item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Footer */}
      <div className="text-sm text-muted-foreground pt-4 border-t border-border">
        <strong className="text-foreground">Core Team:</strong> Ford Prior (Chief Hacker) • Crystal Harvey (Ops Director) • Michael Kolbe (City Liaison) • Sinclair Jenks (Marketing) • Heather Lyne (Entrepreneurship) • Will Melton (Sponsorships)
      </div>
    </div>
  );
};

