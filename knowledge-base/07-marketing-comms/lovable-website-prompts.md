# Website Design Prompts for Lovable

**Last Updated:** December 2024

---

## Overview

This document contains the design specifications and content prompts for building the Hack for RVA website using Lovable. Each section maps to a website component or page.

---

## Brand Guidelines

### Colors
- **Primary:** Navy blue — `#1E3A5F`
- **Accent:** Civic orange — `#FF6B35`
- **Secondary:** Richmond gold — `#FFD700`
- **Success:** Green — `#22C55E`
- **Background:** White/light gray
- **Text:** Dark gray/slate

### Typography
- **Headlines:** Bold, modern sans-serif (e.g., Inter, Outfit)
- **Body:** Clean sans-serif, good readability
- **Code/Technical:** Monospace

### Voice
- Inclusive and welcoming
- Action-oriented ("Build" not "Learn about")
- Civic-minded without being bureaucratic
- Optimistic but realistic

---

## Hero Section

**Purpose:** First impression, capture attention, communicate essence of event.

**Content:**
- **Headline:** "Hack for RVA"
- **Tagline:** "Build civic tech for Richmond. Win prizes. Ship real solutions."
- **Key Stats:** 48 hours | $15K+ prizes | 7 challenge tracks
- **Date/Location:** March 27-29, 2026 | Science Museum of Virginia
- **CTA Button:** "Registration Opens January 2026" (disabled until registration)

**Visual:**
- Richmond skyline background (subtle)
- Clean, modern, high-contrast
- Mobile-responsive

---

## Who Should Join Section

**Purpose:** Help visitors self-identify as potential participants.

**Content:**
Tiles/cards for each audience:

| Audience | Hook | Detail |
|----------|------|--------|
| Developers | "Build something real" | Frontend, backend, mobile, full-stack |
| Designers | "Design for impact" | UX, UI, visual, service design |
| Data Scientists | "Work with real city data" | Analysis, visualization, ML |
| Product Managers | "Lead a team" | Strategy, coordination |
| Students | "Level up your portfolio" | Learn by doing, mentorship |
| Domain Experts | "Share your knowledge" | Policy, community, subject matter |
| Career Changers | "Explore tech careers" | Supportive environment |
| Everyone | "No experience required" | All skill levels welcome |

---

## Challenges/Pillars Section

**Purpose:** Showcase the 7 civic challenge areas.

**Content:**
For each pillar:
- Icon or visual
- Pillar name (e.g., "Thriving City Hall")
- One-line description
- 2-3 example challenge areas

**Layout:**
- Grid or carousel of 7 cards
- Click to expand for more details
- Link to full Challenges page

---

## Event Format Section

**Purpose:** Explain how the weekend works.

**Content:**
- Visual timeline showing Friday → Saturday → Sunday
- Participation paths: Full Weekend, Friday Only, Saturday Sprint, Sunday Showcase
- Key milestones: Opening, Team Formation, Hacking, Submissions, Demos, Awards

**Visual:**
- Timeline graphic
- Icons for each milestone
- Clear time markers

---

## Team Section

**Purpose:** Show the people behind the event.

**Content:**
Core Team cards with:
- Photo
- Name
- Role title
- Brief description (1-2 sentences)

**Layout:**
- Grid of team member cards
- Consistent photo treatment (blue background)
- Role clearly visible

---

## Partners/Sponsors Section

**Purpose:** Showcase supporting organizations.

**Content:**
Tiers:
- Primary Partners: City of Richmond, Science Museum, AI Ready RVA
- Title Sponsor: (when confirmed)
- Pillar Sponsors: (when confirmed)
- Supporting Sponsors: (when confirmed)

**Layout:**
- Logo grid
- Organized by tier
- Link to "Become a Sponsor" CTA

---

## FAQ Section

**Purpose:** Answer common questions.

**Content:**
Accordion-style Q&A covering:
- What is a hackathon?
- Do I need to know how to code?
- How much does it cost? (FREE)
- How do I register?
- Do I need a team?
- What should I bring?
- What are the challenges?
- How are winners chosen?
- Can I leave and come back?
- What about food?
- Is there overnight hacking?

---

## Call-to-Action Sections

**Primary CTAs:**
- "Register Now" (when open)
- "Join the Mailing List" (pre-registration)
- "Get Involved" (volunteer, sponsor, mentor)

**Secondary CTAs:**
- "Learn More About Challenges"
- "Meet the Team"
- "Read the FAQ"

---

## Footer

**Content:**
- Logo
- Quick links: Home, About, Challenges, FAQ, Contact
- Social links: Twitter, LinkedIn, Instagram, Discord
- Email signup
- Copyright

---

## Responsive Design Notes

- Mobile-first approach
- Navigation: Hamburger menu on mobile
- Hero: Stack elements vertically on mobile
- Grids: Reduce columns on smaller screens
- CTAs: Full-width buttons on mobile
- Text: Readable at all sizes (min 16px body)

---

## Technical Notes for Lovable

- Use Tailwind CSS classes
- Use shadcn/ui components
- Store data in `/src/data/` files
- Reference KB sources in JSDoc comments
- Follow design system tokens in `index.css`

---

*Source: knowledge-base/07-marketing-comms/lovable-website-prompts.md*
