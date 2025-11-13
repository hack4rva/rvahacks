# Lovable Website Content Sync Plan
## RVA Hacks - Knowledge Base → Website Migration Strategy

**Document Purpose:** Step-by-step plan for migrating content from the knowledge base to the Lovable website, establishing a repeatable workflow for ongoing updates and new pages.

**Last Updated:** November 12, 2025
**Status:** DRAFT - Ready for Review and Implementation

---

## Executive Summary

The RVA Hacks knowledge base contains **40-50 files** suitable for website migration across 6-8 directories. This plan:

1. **Prioritizes content** by urgency and impact (3 phases)
2. **Maps KB content to website pages** (content-to-page matrix)
3. **Establishes repeatable workflows** for ongoing updates
4. **Defines roles & responsibilities** for content sync
5. **Provides step-by-step instructions** for each content type
6. **Creates a sustainable content management process** as you add new pages

**Key Principle:** The knowledge base is the single source of truth. Website updates follow KB updates, never the reverse.

---

## Part 1: Content Audit Summary

### By Directory

**📣 07-Marketing-Comms** (3 files)
- lovable-website-prompts.md (Website design specs - HIGH priority)
- README.md (Brand guidelines - HIGH priority)
- Marketing presentation PDF (MEDIUM)

**👨‍💻 08-Participant-Experience** (4 files)
- what-to-expect.md (Event overview - HIGH priority)
- what-to-bring.md (Preparation guide - MEDIUM-HIGH priority)
- registration.md (Registration details - HIGH priority, partial)
- README.md (Strategy & resources - HIGH priority)

**🎪 05-Event-Operations** (6 files)
- EVENT-FORMAT.md (Schedule & format - HIGH priority)
- run-of-show.md (Operational timeline - MEDIUM, internal)
- emergency-procedures.md (Safety - LOW, internal)
- volunteer-management.md (Volunteer info - MEDIUM)
- README.md (Overview - MEDIUM)
- venue/costar-meeting-checklist.md (Venue - LOW, internal)

**🎯 06-Challenge-Design** (3 files)
- README.md (Challenge framework & descriptions - HIGH priority)
- map-alignment.md (MAP alignment - MEDIUM-HIGH priority)
- judging-criteria.md (Judging - MEDIUM)

**🤝 04-Partnerships** (8 files)
- README.md (Partnership strategy - HIGH priority)
- sponsor-perks-engagement.md (Sponsor benefits - MEDIUM-HIGH priority)
- sponsor-research-plan.md (Sponsor list - MEDIUM)
- sponsor-outreach-process.md (How to sponsor - MEDIUM)
- dominion-energy-sponsorship-pitch.md (Example pitch - LOW)
- cloud-provider-research.md (Tech resources - MEDIUM)
- Partners.pdf (Partner logos - HIGH priority)
- mlh-fundraising-guide/ (Reference - LOW)

**👥 02-Team-Governance** (3 files)
- README.md (Team structure & contact - MEDIUM priority)
- team-roles.md (Role descriptions - MEDIUM)
- governance.md (Decision-making - LOW)

**📋 01-Planning-Strategy** (7 files)
- hackathon-one-pager.md (Event overview - HIGH priority)
- FORMAT-DECISION.md (Format rationale - MEDIUM)
- kick-off-email.md (Announcement - LOW)
- README.md (Planning overview - LOW)
- strategic-framework-costar.md (Strategy - LOW, internal)
- large-scale-assessment.md (Scale analysis - LOW, internal)
- date-selection-validation.md (Date confirmation - LOW, internal)

**📖 13-Resources** (6 files)
- START-HERE.md (Getting started - MEDIUM)
- GETTING-STARTED.md (Onboarding - MEDIUM)
- README.md (Directory overview - LOW)
- ACTION-ITEMS-ASAP.md (Internal priorities - LOW)
- CRITICAL-RESEARCH-QUESTIONS.md (Internal research - LOW)
- RESEARCH-NEEDS.md (Internal research - LOW)

**⚖️ 09-Legal-Compliance** (5 files)
- code-of-conduct.md (Code of conduct - MEDIUM)
- terms-conditions.md (Legal - MEDIUM)
- participant-waiver.md (Legal - MEDIUM)
- ip-licensing.md (IP policy - MEDIUM)
- permits.md (Permits - LOW, internal)

### Content by Priority

**HIGH PRIORITY (Implement First):** 14 files
- lovable-website-prompts.md
- hackathon-one-pager.md
- EVENT-FORMAT.md
- what-to-expect.md
- registration.md (partial - needs clarification)
- README.md (08-participant-experience)
- README.md (06-challenge-design)
- README.md (07-marketing-comms)
- README.md (04-partnerships)
- Partners.pdf

**MEDIUM-HIGH PRIORITY:** 8 files
- what-to-bring.md
- map-alignment.md
- sponsor-perks-engagement.md
- README.md (02-team-governance)

**MEDIUM PRIORITY:** 12 files
- FORMAT-DECISION.md
- run-of-show.md (extract public info only)
- volunteer-management.md
- sponsor-research-plan.md
- sponsor-outreach-process.md
- cloud-provider-research.md
- team-roles.md
- code-of-conduct.md
- terms-conditions.md
- participant-waiver.md
- START-HERE.md
- GETTING-STARTED.md

**LOW PRIORITY (Internal Only):** 18+ files
- Strategic frameworks
- Financial budgets
- Internal meeting notes
- Research documents
- Detailed operational timelines

---

## Part 2: Content-to-Page Mapping

### Current Lovable Pages & Content Sources

#### Page: **Home / Index.tsx**
**Purpose:** Landing page, introduction to the event

**Content from KB:**
- Hero section: lovable-website-prompts.md (Hero prompt)
- Tagline: "Engineer the City We Want to Live In" (hackathon-one-pager.md)
- Event dates: March 6-8, 2026 (hackathon-one-pager.md)
- Location: CoStar HQ, Richmond, VA (hackathon-one-pager.md)
- CTA buttons: Register, Learn More, Get Involved (lovable-website-prompts.md)

**Files to Use:**
```
knowledge-base/07-marketing-comms/lovable-website-prompts.md → "Hero Section"
knowledge-base/01-planning-strategy/hackathon-one-pager.md → Event positioning
knowledge-base/07-marketing-comms/README.md → Brand messaging
```

**Status:** Ready to implement
**Comments:** lovable-website-prompts.md already has detailed Hero section specifications

---

#### Page: **About.tsx**
**Purpose:** Tell the story of why RVA Hacks exists, the opportunity, partnerships

**Content from KB:**
- What we're building: hackathon-one-pager.md (sections: "The Opportunity", "What Makes This Different")
- Why civic innovation matters: hackathon-one-pager.md
- Who we are: README.md (02-team-governance)
- Core leadership: Ford Prior, Crystal Harvey, team members (02-team-governance)
- Partners & collaborators: Partners.pdf + README.md (04-partnerships)
- Our values: "Zero barrier to entry", "Inclusive by design" (08-participant-experience/README.md)

**Files to Use:**
```
knowledge-base/01-planning-strategy/hackathon-one-pager.md → Story, opportunity, vision
knowledge-base/02-team-governance/README.md → Team leadership
knowledge-base/04-partnerships/README.md → Partnerships overview
knowledge-base/04-partnerships/Partners.pdf → Partner logos
knowledge-base/07-marketing-comms/README.md → Brand story and values
knowledge-base/08-participant-experience/README.md → Inclusion principles
```

**Status:** Ready to implement
**Comments:** Strong content exists; needs design layout decision

---

#### Page: **Challenges.tsx** (NEW or update existing CivicChallenges.tsx)
**Purpose:** Showcase the 8-10 civic challenges teams can work on

**Content from KB:**
- Challenge descriptions (all 8): README.md (06-challenge-design) - has 5 detailed, 3-5 TBD
- Challenge categories: Code, Data, Design, Policy (README.md 06-challenge-design)
- Mayor's Action Plan alignment: map-alignment.md
- Judging criteria: judging-criteria.md
- Example challenges with implementation paths (README.md 06-challenge-design)

**Files to Use:**
```
knowledge-base/06-challenge-design/README.md → Challenge descriptions and framework
knowledge-base/06-challenge-design/map-alignment.md → MAP alignment details
knowledge-base/06-challenge-design/judging-criteria.md → How challenges are judged
knowledge-base/01-planning-strategy/hackathon-one-pager.md → Challenge list intro
```

**Status:** PARTIAL (5 challenges complete, 3-5 TBD)
**Action Required:** Finalize remaining 3-5 challenge descriptions in KB before implementing
**Comments:** Challenge data structure: name, description, problem statement, impact, skills needed, award/category

---

#### Page: **EventFormat.tsx** (Update existing)
**Purpose:** Explain the event format, schedule, and participant paths

**Content from KB:**
- 33-hour overnight format explanation: EVENT-FORMAT.md
- Three participation paths: Event-FORMAT.md (Friday-only, Sat+Fri, Full weekend, Sunday-only)
- Hourly schedule: EVENT-FORMAT.md
- What to expect at the event: what-to-expect.md
- Team composition guidance: what-to-expect.md

**Files to Use:**
```
knowledge-base/05-event-operations/EVENT-FORMAT.md → Event format and schedule
knowledge-base/08-participant-experience/what-to-expect.md → Participant expectations
knowledge-base/05-event-operations/run-of-show.md → Detailed timeline (extract public-facing parts only)
```

**Status:** Ready to implement
**Comments:** Schedule is detailed; consider visual timeline component

---

#### Page: **WhoShouldJoin.tsx** (Update existing)
**Purpose:** Help people determine if they should participate

**Content from KB:**
- Target audiences: Students, professionals, career-changers, underrepresented groups (hackathon-one-pager.md + README.md 07-marketing-comms)
- No experience required: 08-participant-experience/README.md
- What roles do we need: Students, Engineers, Designers, Data people, PM/Community roles (what-to-expect.md)
- Diversity & inclusion statement: 08-participant-experience/README.md

**Files to Use:**
```
knowledge-base/01-planning-strategy/hackathon-one-pager.md → Who should join personas
knowledge-base/07-marketing-comms/README.md → Target audience messaging
knowledge-base/08-participant-experience/README.md → "Zero barrier to entry" principle
knowledge-base/08-participant-experience/what-to-expect.md → Team roles needed
```

**Status:** Ready to implement
**Comments:** Strong messaging exists; needs tone/style alignment with rest of site

---

#### Page: **Preparation.tsx** (NEW - participant guide)
**Purpose:** Help people prepare for the hackathon

**Content from KB:**
- What to bring: what-to-bring.md
- What to expect: what-to-expect.md
- Getting started technically: what-to-bring.md (Pre-event digital prep)
- Mentorship programs: README.md (08-participant-experience)
- Cloud resources available: cloud-provider-research.md + README.md (08-participant-experience)
- Developer tools provided: README.md (08-participant-experience)

**Files to Use:**
```
knowledge-base/08-participant-experience/what-to-bring.md → Packing list and prep
knowledge-base/08-participant-experience/what-to-expect.md → Overview and team structure
knowledge-base/08-participant-experience/README.md → Resources, mentorship, tech stack
knowledge-base/04-partnerships/cloud-provider-research.md → Cloud credits info
```

**Status:** Ready to implement (excellent content exists)
**Comments:** Consider making this an interactive checklist or multi-step guide

---

#### Page: **Registration.tsx** (NEW - or update signup flow)
**Purpose:** Guide people through registration and event details

**Content from KB:**
- When registration opens: January 2026 mid-month (registration.md)
- Registration platform: Devpost (registration.md - PARTIAL: "TBD")
- What we collect: registration.md (name, email, phone, age, emergency contact, dietary, t-shirt size, legal agreements)
- Cost: FREE (registration.md)
- Attendance options: Friday only, Saturday only, both, or Sunday-only public (registration.md)
- Optional information: demographics, skill assessment, challenge preferences (registration.md)

**Files to Use:**
```
knowledge-base/08-participant-experience/registration.md → Registration details and flow
knowledge-base/08-participant-experience/what-to-expect.md → Event dates and format
```

**Status:** PARTIAL (needs platform confirmation and exact dates)
**Action Required:** Confirm Devpost platform decision and Jan 2026 exact opening date before finalizing page
**Comments:** Integration needed: Devpost API for actual registration widget, or link to external registration

---

#### Page: **Partners.tsx** (Update existing)
**Purpose:** Showcase sponsors and partners

**Content from KB:**
- Primary partners: City of Richmond, CoStar Group, RTC (README.md 04-partnerships)
- Sponsorship tiers and benefits: sponsor-perks-engagement.md
- Partner logos: Partners.pdf
- How to become a sponsor: sponsor-outreach-process.md
- Why sponsor: dominion-energy-sponsorship-pitch.md (example) + sponsor-perks-engagement.md

**Files to Use:**
```
knowledge-base/04-partnerships/Partners.pdf → Partner logos and info
knowledge-base/04-partnerships/README.md → Primary partners and strategy
knowledge-base/04-partnerships/sponsor-perks-engagement.md → Sponsorship tiers and benefits
knowledge-base/04-partnerships/sponsor-outreach-process.md → How to sponsor section
knowledge-base/04-partnerships/cloud-provider-research.md → Tech partner offerings
```

**Status:** Ready to implement (mostly complete)
**Comments:** Consider separating "Partners" from "Sponsors" into two sections

---

#### Page: **FAQ.tsx** (Update existing)
**Purpose:** Answer common participant questions

**Content from KB:**
- What is a hackathon?: what-to-expect.md
- What's the event format?: EVENT-FORMAT.md
- What should I bring?: what-to-bring.md
- Do I need experience?: README.md (08-participant-experience)
- How much does it cost?: registration.md (FREE)
- How do I register?: registration.md
- What are the challenges?: README.md (06-challenge-design)
- How are winners chosen?: judging-criteria.md
- Do I need a team?: what-to-expect.md
- What if I can't make all 3 days?: EVENT-FORMAT.md (multiple participation paths)
- Will there be mentorship?: README.md (08-participant-experience)

**Files to Use:**
```
knowledge-base/08-participant-experience/what-to-expect.md → Event format and team questions
knowledge-base/08-participant-experience/what-to-bring.md → Preparation FAQ
knowledge-base/05-event-operations/EVENT-FORMAT.md → Schedule and format FAQ
knowledge-base/08-participant-experience/registration.md → Registration FAQ
knowledge-base/06-challenge-design/README.md → Challenge FAQ
knowledge-base/06-challenge-design/judging-criteria.md → Judging FAQ
```

**Status:** Ready to compile
**Comments:** Good questions exist in KB; just need to organize into Q&A format

---

#### Page: **Logistics.tsx** (Update existing)
**Purpose:** Practical participant logistics (venue, parking, meals, etc.)

**Content from KB:**
- Venue: CoStar Headquarters, Richmond, VA (EVENT-FORMAT.md)
- Parking: [TBD in KB]
- Meals provided: Food/beverage plan [need to check KB]
- Check-in process: run-of-show.md (contains detail)
- Accessibility information: [May be in accessibility or need to add]
- Transportation: [May need to add to KB]
- What to expect day-of: what-to-expect.md
- Emergency contacts: [In emergency procedures, keep internal]

**Files to Use:**
```
knowledge-base/05-event-operations/EVENT-FORMAT.md → Venue and basic info
knowledge-base/05-event-operations/run-of-show.md → Schedule and check-in (extract public info)
knowledge-base/08-participant-experience/what-to-expect.md → Day-of expectations
[May need to add: parking, transportation, meals details to KB first]
```

**Status:** PARTIAL (needs KB updates on logistics details)
**Action Required:** Add parking, meals, transportation, accessibility info to 05-event-operations/
**Comments:** Consider adding a map or location details

---

#### Page: **Team.tsx** (Update existing)
**Purpose:** Showcase the core organizing team

**Content from KB:**
- Core team members: Ford Prior, Crystal Harvey, Alex, Tom, Nick, Michael Colby (README.md 02-team-governance)
- Roles and responsibilities: team-roles.md
- Team photos: src/assets/ (already exist)
- Contact information: info@hackforrva.org (TBD in KB)

**Files to Use:**
```
knowledge-base/02-team-governance/README.md → Core team list
knowledge-base/02-team-governance/team-roles.md → Role descriptions
src/assets/ → Team photos (already in app)
```

**Status:** Ready to implement (content + assets exist)
**Comments:** Photos already in place; just need bio/role updates from KB

---

#### Page: **ActionPlan.tsx** (Exists - Mayor's Action Plan)
**Purpose:** Show alignment with Richmond's Mayor's Action Plan

**Content from KB:**
- MAP Pillar 4 focus: "A Thriving Economy" (hackathon-one-pager.md)
- Challenge alignment: map-alignment.md (detailed alignment with 5 challenges)
- How challenges address MAP: map-alignment.md
- Implementation KPIs: map-alignment.md

**Files to Use:**
```
knowledge-base/06-challenge-design/map-alignment.md → Detailed alignment and KPIs
knowledge-base/01-planning-strategy/hackathon-one-pager.md → Pillar 4 context
```

**Status:** Ready to implement (detailed content exists)
**Comments:** map-alignment.md has excellent implementation details

---

#### Page: **AdminDashboard.tsx** (Exists - admin only)
**Purpose:** Internal admin management dashboard

**Content from KB:** NONE - This is internal application code, no KB sync needed

---

### Pages Not Yet in App (Potential New Pages)

#### **GetInvolved.tsx** (NEW)
**Purpose:** Ways to contribute: volunteer, mentor, sponsor

**Content from KB:**
- Volunteer opportunities: volunteer-management.md
- How to sponsor: sponsor-outreach-process.md + sponsor-perks-engagement.md
- Mentorship opportunities: README.md (08-participant-experience)

#### **Resources.tsx** (NEW)
**Purpose:** Links to helpful resources for participants

**Content from KB:**
- Technical setup guide: README.md (08-participant-experience)
- Cloud provider links: cloud-provider-research.md
- Developer tools: README.md (08-participant-experience)
- Getting started guides: START-HERE.md, GETTING-STARTED.md

#### **Rules.tsx** or **CodeOfConduct.tsx** (NEW)
**Purpose:** Code of conduct and event rules

**Content from KB:**
- Code of conduct: code-of-conduct.md
- Terms and conditions: terms-conditions.md (link/reference)
- Participant waiver: participant-waiver.md (link/reference)

#### **Impact.tsx** (NEW - Post-event)
**Purpose:** Post-event results and impact showcase

**Content from KB:**
- Impact measurement framework: 12-impact-measurement/kpi-framework.md
- Success stories: 11-post-event/success-stories.md (created post-event)

---

## Part 3: Three-Phase Implementation Plan

### Phase 1: Foundation (Weeks 1-2)
**Goal:** Implement core website with essential content

**Pages to Create/Update:**
1. ✅ Home (Index.tsx) - Use lovable-website-prompts.md
2. ✅ About (About.tsx)
3. ✅ Challenges (CivicChallenges.tsx - update)
4. ✅ EventFormat (EventFormat.tsx - update)
5. ✅ WhoShouldJoin (WhoShouldJoin.tsx - update)
6. ✅ Partners (Partners.tsx - update)
7. ✅ FAQ (FAQ.tsx - update)
8. ✅ Team (Team.tsx - update)
9. ✅ ActionPlan (ActionPlan.tsx - update)

**KB Files to Use:**
- lovable-website-prompts.md
- hackathon-one-pager.md
- EVENT-FORMAT.md
- what-to-expect.md
- README.md (6 files: 07, 08, 06, 04, 02, 01)
- Partners.pdf
- map-alignment.md
- judging-criteria.md (if exists)

**Deliverables:**
- All 9 pages updated with KB content
- JSDoc comments citing KB sources
- No hardcoded content without KB references
- All links functional
- Brand guidelines applied

**Success Criteria:**
- All content synced from KB
- All pages formatted and styled
- Mobile responsive
- No broken links

---

### Phase 2: Participant Resources (Weeks 3-4)
**Goal:** Add participant-focused pages and resources

**Pages to Create:**
1. ✅ Preparation.tsx (NEW)
2. ✅ Registration.tsx (NEW)
3. ✅ Logistics.tsx (UPDATE)
4. ✅ GetInvolved.tsx (NEW)
5. ✅ Resources.tsx (NEW)

**KB Files to Use:**
- what-to-bring.md
- registration.md (after platform confirmed)
- volunteer-management.md
- sponsor-perks-engagement.md
- cloud-provider-research.md
- START-HERE.md

**Deliverables:**
- Participant preparation guide
- Registration flow or Devpost integration
- Volunteer/sponsor signup information
- Resource links page
- Technical setup guide

**Success Criteria:**
- Clear registration path
- All participant resources accessible
- Volunteer/sponsor contact information
- Mobile-optimized resource pages

---

### Phase 3: Legal & Post-Event (Weeks 5-6)
**Goal:** Complete legal/compliance pages and prepare post-event sections

**Pages to Create:**
1. ✅ CodeOfConduct.tsx or Rules.tsx (NEW)
2. ✅ Impact.tsx (NEW - prepare template)
3. ✅ Footer updates (legal links)

**KB Files to Use:**
- code-of-conduct.md
- terms-conditions.md
- participant-waiver.md
- 12-impact-measurement/ (post-event)
- 11-post-event/ (post-event)

**Deliverables:**
- Code of conduct page
- Footer with legal links
- Impact measurement template (for post-event)
- Privacy/terms links

**Success Criteria:**
- Legal compliance covered
- Code of conduct visible
- Post-event template ready for launch
- All legal documents linked

---

## Part 4: Repeatable Workflow for Ongoing Updates

### Standard Update Workflow

**When KB Content Changes:**

1. **Identify Changed Content**
   - File path
   - What changed (new, updated, or deleted)
   - Reason for change

2. **Assess Website Impact**
   - Which pages reference this KB file?
   - Is update urgent or can it wait for next batch?
   - Does it require new pages or just updates to existing pages?

3. **Make Website Updates**
   - Update the affected component(s)
   - Add/update JSDoc comment: `// See knowledge-base/XX/file.md (updated Nov 12)`
   - Test the changes locally
   - Ensure formatting matches KB content

4. **Commit & Document**
   - Git commit: `feat: sync KB updates from [KB file] to [pages]`
   - Include reference to KB file path and date
   - Link to the KB commit if applicable

5. **Deploy**
   - Test on staging
   - Deploy to production
   - No reverse sync - KB stays unchanged

**Example:**
```
KB Change: hackathon-one-pager.md updated with new challenge description

Website Impact Assessment:
- Challenges.tsx (challenge list) - NEEDS UPDATE
- Home/Index.tsx (mentions challenges) - No change needed
- FAQ.tsx (challenge descriptions) - NEEDS UPDATE

Action:
- Update src/components/Challenges.tsx with new description
- Update src/pages/Index.tsx if needed
- Add comment: // See knowledge-base/01-planning-strategy/hackathon-one-pager.md
- Commit: "feat: update challenge descriptions from KB"
- Test and deploy

KB: Unchanged (source of truth)
App: Updated (implementation reflects KB)
```

---

### Creating New Pages from KB Content

**When you want to add a new website page:**

1. **Identify the need**
   - What information should this page show?
   - What pages/sections link to it?

2. **Find KB content**
   - Search knowledge-base/ for relevant files
   - Identify primary source (one main file + supporting references)
   - Check if content is complete or marked TBD

3. **Create the page component**
   - Create `/src/pages/NewPage.tsx` or `/src/components/NewComponent.tsx`
   - Add JSDoc header with KB references:
     ```typescript
     /**
      * NewPage component
      *
      * Content sourced from:
      * - knowledge-base/XX/file1.md (primary)
      * - knowledge-base/XX/file2.md (supporting)
      */
     ```

4. **Implement content**
   - Pull content directly from KB files
   - Adapt formatting for web (headers, lists, etc.)
   - Link to original KB file in comments for sections

5. **Add to navigation**
   - Update Navigation.tsx
   - Add to routing if needed (in App.tsx or router config)

6. **Test & deploy**
   - Local testing
   - Staging review
   - Production deployment

7. **Document the mapping**
   - Update Part 2 of this plan with the new page
   - Add to "Pages" section in this document

**Example:**
```
New Page: GetInvolved.tsx

Step 1: Need identified - Users ask "How can I help?"

Step 2: KB content found:
- knowledge-base/04-partnerships/sponsor-outreach-process.md (how to sponsor)
- knowledge-base/04-partnerships/sponsor-perks-engagement.md (benefits)
- knowledge-base/05-event-operations/volunteer-management.md (how to volunteer)

Step 3: Create component with JSDoc

Step 4: Implement three sections: Sponsor, Volunteer, Mentor

Step 5: Add to Navigation.tsx and routing

Step 6: Test & deploy

Step 7: Update LOVABLE-SYNC-PLAN.md Part 2 with new page mapping
```

---

### Handling KB "TBD" Content

**When KB content is incomplete (marked TBD):**

1. **Identify the TBD**
   - What's missing?
   - Who needs to provide it?
   - When is it due?

2. **Option A: Placeholder in App**
   ```typescript
   // See knowledge-base/08/registration.md
   // TODO: KB TBD - Registration platform selection pending (due Jan 1)
   // For now, show: "Registration opens January 2026"
   ```

3. **Option B: Conditional Rendering**
   ```typescript
   {registrationPlatform === 'TBD' ? (
     <p>Registration details coming soon</p>
   ) : (
     <RegistrationForm platform={registrationPlatform} />
   )}
   ```

4. **Option C: Feature Flag**
   - Hide incomplete section behind feature flag
   - Enable when KB content is finalized

5. **Follow Up**
   - Email KB owner/maintainer
   - Flag in PR comments
   - Update KB with deadline if missing
   - Track in ACTION-ITEMS-ASAP.md

---

### Content Version Control

**Linking App Code to KB Versions:**

Each component should cite which KB file version it's based on:

```typescript
/**
 * EventFormat Component
 *
 * Content sources (version control):
 * - EVENT-FORMAT.md (last updated Oct 31, 2025)
 *   - Schedule: 33-hour format (Friday 9 AM - Sunday 12 PM)
 *   - Paths: 4 participation options
 * - what-to-expect.md (last updated Oct 25, 2025)
 *   - Team composition guidance
 *   - Detailed schedule
 *
 * TODO: Update component after KB changes (tracking via git commits)
 */
```

When KB file updates, update the "last updated" date in the JSDoc comment.

---

## Part 5: Step-by-Step Content Sync Instructions

### For Each KB File → Website Page Migration

**Template: How to Sync a KB File to Website**

#### Step 1: Prepare
- [ ] Open KB file in one window: `knowledge-base/XX/filename.md`
- [ ] Open website component in another: `src/pages/PageName.tsx`
- [ ] Read entire KB file to understand context
- [ ] Check for TBD items or incomplete sections

#### Step 2: Extract Content
- [ ] Identify sections/headings in KB file
- [ ] Note which content is:
  - Public-facing (show on website)
  - Internal (skip for website)
  - TBD (placeholder or skip)
- [ ] Copy relevant content text

#### Step 3: Format for Web
- [ ] Convert markdown headers to component structure
- [ ] Turn bullet lists into JSX lists or components
- [ ] Adapt tone/voice if needed (match website style)
- [ ] Create components for complex sections
- [ ] Check for links and update if needed

#### Step 4: Implement in Component
- [ ] Add JSDoc header with KB file reference
- [ ] Paste/organize content into component
- [ ] Apply Tailwind CSS classes for styling
- [ ] Use shadcn/ui components where appropriate
- [ ] Add comments citing KB sections

#### Step 5: Code Quality
- [ ] TypeScript types are correct
- [ ] No hardcoded content without KB citation
- [ ] Formatting consistent with rest of app
- [ ] No broken links or missing imports
- [ ] Mobile responsive

#### Step 6: Test
- [ ] Component renders without errors
- [ ] Content displays correctly
- [ ] Links work
- [ ] Mobile view works
- [ ] No console errors

#### Step 7: Commit
- [ ] `git add src/pages/PageName.tsx`
- [ ] `git commit -m "feat: sync [KB file name] to [Page name]"`
- [ ] Include KB file path in commit message
- [ ] Optional: Reference KB commit if available

#### Step 8: Deploy
- [ ] Test on staging
- [ ] Review changes
- [ ] Deploy to production

---

### Specific Instructions by Content Type

#### Type 1: Content Lists (e.g., team members, challenges, partners)

**Example:** Syncing team members from `02-team-governance/README.md` to `Team.tsx`

**Steps:**
1. Open KB file and find team member list
2. Extract name, role, photo filename from KB
3. Create array in component:
   ```typescript
   // See knowledge-base/02-team-governance/README.md
   const teamMembers = [
     { name: "Ford Prior", role: "Vision, Strategy", photo: "ford-prior.jpg" },
     // ...
   ];
   ```
4. Map over array in JSX to render team members
5. Add comment linking to KB file

---

#### Type 2: Descriptive Content (e.g., event format, what to expect)

**Example:** Syncing event description from `01-planning-strategy/hackathon-one-pager.md` to `About.tsx`

**Steps:**
1. Copy relevant sections from KB
2. Identify main heading, subheadings, paragraphs
3. Implement in component:
   ```typescript
   // See knowledge-base/01-planning-strategy/hackathon-one-pager.md
   export function EventStory() {
     return (
       <section>
         <h2>What We're Building</h2>
         <p>// Paragraph from KB...</p>
         <h3>The Opportunity</h3>
         <p>// Content from KB...</p>
       </section>
     );
   }
   ```
4. Add citations in comments for each section

---

#### Type 3: Timeline/Schedule (e.g., event schedule, run of show)

**Example:** Syncing schedule from `05-event-operations/EVENT-FORMAT.md` to `EventFormat.tsx`

**Steps:**
1. Extract timeline data from KB (dates, times, events)
2. Create timeline data structure:
   ```typescript
   // See knowledge-base/05-event-operations/EVENT-FORMAT.md
   const schedule = [
     { time: "9:00 AM", event: "Check-in opens", day: "Friday" },
     { time: "10:00 AM", event: "Opening Ceremony", day: "Friday" },
     // ...
   ];
   ```
3. Create Timeline component or use visual timeline library
4. Map data to render timeline
5. Add comment with KB reference

---

#### Type 4: Q&A Content (e.g., FAQ)

**Example:** Creating FAQ from multiple KB files

**Steps:**
1. Search all KB files for common questions
2. Extract Q&A pairs from files like what-to-expect.md, registration.md, etc.
3. Create FAQ data structure:
   ```typescript
   // Sources:
   // - knowledge-base/08-participant-experience/what-to-expect.md
   // - knowledge-base/08-participant-experience/registration.md
   // - knowledge-base/05-event-operations/EVENT-FORMAT.md
   const faqs = [
     {
       q: "What's a civic hackathon?",
       a: "// Content from what-to-expect.md"
     },
     // ...
   ];
   ```
4. Render with accordion or expand/collapse component
5. Add citations in data structure

---

## Part 6: Content Management System

### Tracking Content Changes

**Create a "Content Sync Log" to track updates:**

```
Knowledge Base Content Sync Log
================================

Date       | KB File                              | Change               | Website Pages Affected | Status      | Deployed
-----------|--------------------------------------|----------------------|------------------------|-------------|----------
Nov 12     | hackathon-one-pager.md              | Updated challenge    | Challenges, Home       | ✓ Synced   | ✓ Nov 12
Nov 12     | 08-participant/registration.md      | TBD → Platform TBD   | Registration.tsx       | ⏳ Waiting  | —
Nov 11     | 05-event-ops/EVENT-FORMAT.md        | New schedule         | EventFormat, FAQ       | ✓ Synced   | ✓ Nov 11
Nov 10     | 04-partnerships/README.md           | Added new partner    | Partners.tsx           | ✓ Synced   | ✓ Nov 10
```

**Where to maintain this log:**
- Option 1: In this document (Part 6 section)
- Option 2: In a separate `CONTENT-SYNC-LOG.md` file
- Option 3: In GitHub issue tracking (label: "KB Sync")

---

### Bi-Weekly Content Audit

**Every 2 weeks, review:**

1. **KB Files Modified**
   - Check git log in `knowledge-base/` directory
   - Identify modified files in last 2 weeks

2. **Website Impact**
   - Which pages reference the modified KB files?
   - Are website pages up-to-date?

3. **Audit Checklist**
   - [ ] All new KB files reviewed
   - [ ] All modified KB files assessed for website impact
   - [ ] Website content updated or flagged if needs KB clarification
   - [ ] Content sync log updated
   - [ ] No hardcoded content without KB references
   - [ ] All TBD items tracked and assigned

4. **Report**
   - Send summary to team
   - Flag any KB TBDs blocking website updates
   - Plan next sync batch

---

### Content Ownership Matrix

**Who maintains what:**

| Content Area | KB Owner | Website Owner | Frequency | Notes |
|---|---|---|---|---|
| Marketing/Brand | Crystal Harvey | Frontend Dev | Weekly | lovable-website-prompts.md |
| Event Format | Crystal Harvey | Frontend Dev | Monthly | EVENT-FORMAT.md |
| Challenges | Alex | Frontend Dev | Monthly | 06-challenge-design/ |
| Participant Experience | TBD | Frontend Dev | Monthly | 08-participant-experience/ |
| Partnerships/Sponsors | Alex, Tom | Frontend Dev | Monthly | 04-partnerships/ |
| Team Info | Ford, Crystal | Frontend Dev | Monthly | 02-team-governance/ |
| Legal/Compliance | [TBD] | Frontend Dev | As-needed | 09-legal-compliance/ |
| Planning/Strategy | Ford | Frontend Dev (ref only) | As-needed | 01-planning-strategy/ (not public) |

---

## Part 7: Implementation Checklist

### Pre-Launch Checklist (Before Phase 1 starts)

- [ ] .cursorrules file created and shared with team
- [ ] AGENTS.md document created and reviewed
- [ ] This LOVABLE-SYNC-PLAN.md document finalized
- [ ] Lovable custom knowledge updated with project guidelines
- [ ] Team understands KB → App workflow (no reverse sync)
- [ ] All stakeholders reviewed content-to-page mapping (Part 2)

### Phase 1 Launch Checklist

**Before starting Phase 1:**
- [ ] lovable-website-prompts.md reviewed and finalized
- [ ] hackathon-one-pager.md latest version obtained
- [ ] All referenced KB files exist and are accessible
- [ ] Design/styling decisions made (use existing Lovable design + Tailwind)
- [ ] Development environment set up
- [ ] Git workflow confirmed

**Completion checklist:**
- [ ] All 9 Phase 1 pages created/updated
- [ ] All content synced from KB with JSDoc citations
- [ ] No hardcoded content without KB reference
- [ ] All links tested and functional
- [ ] Mobile responsive design verified
- [ ] Code review completed
- [ ] No console errors
- [ ] Deployed to production
- [ ] Content sync log updated

---

### Phase 2 Checklist

**Before starting Phase 2:**
- [ ] Phase 1 deployed and stable
- [ ] Participant content finalized in KB (no major TBDs)
- [ ] Registration platform confirmed
- [ ] Logistics details (parking, meals, etc.) added to KB

**Completion checklist:**
- [ ] 5 new participant pages created
- [ ] All content from KB synced
- [ ] Registration flow connected (API or external link)
- [ ] Volunteer/sponsor signup forms functional
- [ ] Resource links verified
- [ ] Mobile responsive
- [ ] Code review completed
- [ ] Deployed to production

---

### Phase 3 Checklist

**Before starting Phase 3:**
- [ ] Legal documents finalized (code of conduct, terms, waiver)
- [ ] Post-event measurement framework defined
- [ ] Phase 2 deployed and stable

**Completion checklist:**
- [ ] Legal pages created
- [ ] Code of conduct published
- [ ] Footer updated with legal links
- [ ] Post-event template created (not yet live)
- [ ] All legal documents reviewed by [TBD legal contact]
- [ ] Accessibility audit completed
- [ ] Code review completed
- [ ] Deployed to production

---

## Part 8: Common Questions & Troubleshooting

### Q: What if KB content changes after I've implemented it on the website?

**A:** Update the website page using the standard workflow:
1. Note what changed in KB
2. Update affected website pages
3. Update JSDoc comment with new date
4. Commit with reference to KB file
5. Deploy

No reverse sync—KB stays as source of truth.

---

### Q: What if I find the website should be different from what KB says?

**A:** Flag it for human review. Don't change KB from code. Instead:
1. Add code comment: `// NOTE: Consider KB update - this implementation uses X instead of Y because...`
2. Create GitHub issue tagged "KB-Review"
3. Let human developer decide if KB should be updated
4. If KB updates, update code accordingly

---

### Q: What if KB has a TBD but we need to launch the website?

**A:** Use placeholder content:
1. Add `// TODO: KB TBD` comment
2. Show temporary message: "Coming soon" or placeholder
3. Keep implementation structure ready for real content
4. Track in ACTION-ITEMS-ASAP.md with deadline
5. Update when KB content is finalized

---

### Q: How do I know which KB file to use for a page?

**A:** Check Part 2 (Content-to-Page Mapping) of this document. It lists:
- Which KB files feed into each page
- What content to extract
- Any TBDs or pending decisions

---

### Q: Should I ever update the knowledge base from the website code?

**A:** **NO.** Never. The workflow is strictly:
- KB (human updates) → Website (developer implements)
- Not: Website → KB

If you discover KB should update, ask the human who maintains KB.

---

### Q: What if a KB file is incomplete or outdated?

**A:** Add a note in the code:
```typescript
// NOTE: See knowledge-base/XX/file.md - marked as draft/incomplete
// Human review needed before full implementation
```

And flag it in a GitHub issue for KB owner to review.

---

### Q: How do I handle images, logos, PDFs from KB?

**A:**
- Images: Check `src/assets/` - if not there, request from KB owner
- Logos (Partners.pdf): Extract and save to `src/assets/logos/`
- PDFs: Link to PDF in KB repo or host on website
- Always cite where the asset came from in JSDoc comment

---

## Part 9: Tools & References

### Files to Reference

- **This document:** `/LOVABLE-SYNC-PLAN.md`
- **Cursor rules:** `.cursorrules`
- **Agent guidelines:** `knowledge-base/AGENTS.md`
- **Custom knowledge:** (In Lovable UI, not file)
- **KB content:** `knowledge-base/` directory

### Git Commands

```bash
# See KB file changes
git log knowledge-base/XX/filename.md

# See which website files reference a KB file
grep -r "knowledge-base/XX" src/

# Create a new page
git checkout -b feat/new-page

# Commit KB sync
git commit -m "feat: sync [KB file] to [Page name]"
```

### Lovable Tips

- Use lovable-website-prompts.md to generate component designs
- Reference brand guidelines in custom knowledge
- Use component library consistently (shadcn/ui)
- Keep styling in Tailwind, not inline CSS

---

## Part 10: Success Metrics

### How to measure if the sync plan is working

**Metrics:**
1. **Content Freshness:** All website content updated within 2 weeks of KB changes
2. **Citation Rate:** 100% of public content has JSDoc KB reference
3. **Hardcoded Content:** 0 pieces of hardcoded content without KB source
4. **TBD Items:** All tracked and assigned owner + deadline
5. **Sync Latency:** Average time from KB change to website deployment < 7 days
6. **Build Status:** Always green (no broken builds)
7. **KB-App Conflicts:** < 1 per month (and resolved within 48 hours)

---

## Appendix: Content Status Dashboard

### Current Content Completion Status

**HIGH PRIORITY (Launch Phase 1):**
- [x] lovable-website-prompts.md - READY
- [x] hackathon-one-pager.md - READY
- [x] EVENT-FORMAT.md - READY
- [x] what-to-expect.md - READY
- [ ] registration.md - TBD: Platform selection
- [x] README.md (07-marketing-comms) - READY
- [x] README.md (06-challenge-design) - PARTIAL: 5/8 challenges complete
- [x] README.md (04-partnerships) - READY
- [x] README.md (02-team-governance) - READY
- [x] Partners.pdf - READY

**MEDIUM-HIGH PRIORITY (Phase 2):**
- [x] what-to-bring.md - READY
- [x] map-alignment.md - READY
- [x] sponsor-perks-engagement.md - READY
- [x] README.md (08-participant-experience) - READY

**MEDIUM PRIORITY (Phase 2-3):**
- [x] volunteer-management.md - READY
- [ ] run-of-show.md - PARTIAL: Needs public/private split
- [x] code-of-conduct.md - READY
- [x] terms-conditions.md - READY
- [x] cloud-provider-research.md - READY
- [x] START-HERE.md - READY

---

## Summary & Next Steps

### What This Plan Provides

1. ✅ **Inventory:** Complete audit of 40-50 KB files suitable for website
2. ✅ **Mapping:** Clear content-to-page mapping for all current and planned pages
3. ✅ **Phasing:** 3-phase rollout plan (Weeks 1-6)
4. ✅ **Workflow:** Repeatable process for ongoing KB → Website syncs
5. ✅ **Instructions:** Step-by-step guides for different content types
6. ✅ **Checklist:** Implementation checklists for each phase
7. ✅ **Tools:** Templates and commands for daily work

### Immediate Actions

1. **Review this document** - Get stakeholder sign-off on content mapping
2. **Confirm priorities** - Validate Phase 1 content is final/ready
3. **Finalize TBDs** - Resolve 3 pending items:
   - Registration platform choice (Devpost vs. other)
   - Remaining 3-5 challenge descriptions
   - Logistics details (parking, meals, transportation)
4. **Start Phase 1** - Begin syncing high-priority content to website
5. **Track progress** - Use Content Sync Log to track status

### Timeline

- **Week 1-2:** Phase 1 implementation
- **Week 3-4:** Phase 2 implementation
- **Week 5-6:** Phase 3 implementation
- **Week 7+:** Ongoing maintenance and updates

---

**Document Created:** November 12, 2025
**Status:** DRAFT - Ready for Review
**Next Review:** After Phase 1 completion
**Questions:** Contact [KB owner] or [Web dev owner]
