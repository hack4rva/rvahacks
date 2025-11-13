# Lovable Sync Plan - Quick Reference Guide

**Full Plan:** See `LOVABLE-SYNC-PLAN.md` for complete details

---

## 🎯 The Big Picture

```
Knowledge Base (Staging)
  ↓ (approved by human)
Website Pages (Implementation)
  ↗ (NO reverse sync)
```

**Key Rule:** Content flows ONE WAY: KB → Website, never Website → KB

---

## 📊 Content Inventory at a Glance

**Total KB files that could be migrated:** 40-50
**High priority (Phase 1):** 14 files
**Medium priority (Phase 2-3):** 12 files
**Low priority (internal only):** 18+ files

---

## 🗂️ KB Content by Directory

| Directory | Files | Status | Priority |
|-----------|-------|--------|----------|
| 07-Marketing-Comms | 3 | Ready | HIGH |
| 08-Participant-Experience | 4 | Ready | HIGH |
| 05-Event-Operations | 6 | Ready | HIGH-MED |
| 06-Challenge-Design | 3 | 5/8 complete | HIGH |
| 04-Partnerships | 8 | Ready | HIGH-MED |
| 02-Team-Governance | 3 | Ready | MED |
| 01-Planning-Strategy | 7 | Ready | MED-LOW |
| 13-Resources | 6 | Ready | MED |
| 09-Legal-Compliance | 5 | Ready | MED |

---

## 📄 Current Pages & KB Sources

| Website Page | Primary KB Source | Status |
|---|---|---|
| **Home** | lovable-website-prompts.md | Ready |
| **About** | hackathon-one-pager.md + team-governance | Ready |
| **Challenges** | 06-challenge-design/README.md | 5/8 challenges |
| **Event Format** | EVENT-FORMAT.md | Ready |
| **Who Should Join** | hackathon-one-pager.md | Ready |
| **Partners** | 04-partnerships/* | Ready |
| **FAQ** | Multiple KB files | Ready |
| **Team** | 02-team-governance/* | Ready |
| **Action Plan** | map-alignment.md | Ready |
| **Preparation** (NEW) | what-to-bring.md | Ready |
| **Registration** (NEW) | registration.md | TBD: Platform |
| **Logistics** (UPDATE) | EVENT-FORMAT.md | Partial |
| **Get Involved** (NEW) | sponsor + volunteer files | Ready |
| **Resources** (NEW) | cloud + tools files | Ready |
| **Code of Conduct** (NEW) | code-of-conduct.md | Ready |
| **Impact** (NEW - post-event) | 12-impact-measurement/ | Template |

---

## ⏱️ Three-Phase Timeline

### Phase 1: Foundation (Weeks 1-2)
**Goal:** Core website with essential content

Pages:
- Home, About, Challenges, Event Format, Who Should Join
- Partners, FAQ, Team, Action Plan

**Deliverable:** 9 updated pages with KB content

---

### Phase 2: Participant Resources (Weeks 3-4)
**Goal:** Participant-focused pages

Pages:
- Preparation, Registration, Logistics, Get Involved, Resources

**Deliverable:** 5 new pages with KB content

---

### Phase 3: Legal & Post-Event (Weeks 5-6)
**Goal:** Legal compliance and post-event prep

Pages:
- Code of Conduct, Impact template, Footer updates

**Deliverable:** Legal pages + post-event template

---

## 🔄 Workflow for Syncing Content

### When KB Changes:
1. **Identify** what changed in KB file
2. **Assess** which website pages need updating
3. **Update** the affected components with new content
4. **Cite** KB source in JSDoc comment
5. **Commit** with reference to KB file path
6. **Deploy** to production

### When Adding New Page:
1. **Find** the relevant KB content
2. **Create** new component in src/pages/ or src/components/
3. **Add** JSDoc header with KB references
4. **Implement** content from KB files
5. **Add** to navigation and routing
6. **Test** and deploy
7. **Update** this plan with new page mapping

---

## 📝 Content Sync Checklist (Per Page/File)

- [ ] KB file(s) identified and complete
- [ ] Content extracted from KB
- [ ] Formatted for web (headers, lists, links)
- [ ] Component created/updated
- [ ] JSDoc header added with KB citation
- [ ] No hardcoded content without KB reference
- [ ] Links tested and functional
- [ ] Mobile responsive
- [ ] Code review passed
- [ ] Deployed to production
- [ ] Content log updated

---

## 🚨 Critical Rules

### ✅ DO:
- ✓ Read KB first before implementing features
- ✓ Add JSDoc comments citing KB sources
- ✓ Use KB as source of truth
- ✓ Let humans decide what moves from KB to app
- ✓ Flag KB gaps or TBDs in code comments
- ✓ Track content changes in sync log

### ❌ DON'T:
- ✗ Hardcode content without KB source
- ✗ Update KB files from code changes
- ✗ Assume KB is wrong if app differs
- ✗ Use mock data or placeholders
- ✗ Skip KB documentation
- ✗ Auto-sync content (all sync is manual and intentional)

---

## 📋 TBD Items Blocking Website Launch

**These need KB updates before full implementation:**

1. **Registration Platform** (registration.md)
   - Status: TBD - need to confirm Devpost vs. other
   - Website Impact: Registration.tsx
   - Blocking: No

2. **Remaining 3-5 Challenges** (06-challenge-design/README.md)
   - Status: 5/8 complete
   - Website Impact: Challenges.tsx
   - Blocking: Partial (show 5 challenges initially)

3. **Logistics Details** (05-event-operations/ needs update)
   - Missing: Parking, transportation, meals details
   - Website Impact: Logistics.tsx
   - Blocking: No (use placeholder)

**Action:** Resolve these TBDs to unblock Phase 2-3

---

## 🔗 KB Files Most Used by Website

**Top 10 files feeding into website:**

1. lovable-website-prompts.md (design specs for all pages)
2. hackathon-one-pager.md (event overview, home, about)
3. what-to-expect.md (event format, FAQ, participant guide)
4. EVENT-FORMAT.md (schedule, event details)
5. README.md (08-participant-experience) (resources, mentorship)
6. README.md (06-challenge-design) (challenge descriptions, judging)
7. README.md (04-partnerships) (partners, sponsors)
8. map-alignment.md (challenge alignment, impact)
9. registration.md (registration flow)
10. what-to-bring.md (preparation guide)

---

## 📊 Content Status Matrix

| File | Complete | Ready | Implemented | Notes |
|------|----------|-------|-------------|-------|
| lovable-website-prompts.md | ✓ | ✓ | Phase 1 | Design specs |
| hackathon-one-pager.md | ✓ | ✓ | Phase 1 | Event overview |
| EVENT-FORMAT.md | ✓ | ✓ | Phase 1 | Schedule |
| what-to-expect.md | ✓ | ✓ | Phase 1 | Participant guide |
| registration.md | ✗ | ✗ | Phase 2 | Platform TBD |
| what-to-bring.md | ✓ | ✓ | Phase 2 | Preparation |
| README.md (08) | ✓ | ✓ | Phase 1-2 | Resources |
| README.md (06) | ~ | ✓ | Phase 1 | 5/8 challenges |
| README.md (04) | ✓ | ✓ | Phase 1 | Partners |
| map-alignment.md | ✓ | ✓ | Phase 1 | MAP alignment |
| sponsor-perks-engagement.md | ✓ | ✓ | Phase 2 | Sponsor benefits |
| code-of-conduct.md | ✓ | ✓ | Phase 3 | Legal |

---

## 🛠️ Tools & Files Needed

**Reference Documents:**
- `LOVABLE-SYNC-PLAN.md` - Full implementation plan
- `AGENTS.md` - How all agents interact with KB/app
- `.cursorrules` - Cursor IDE rules
- This file - Quick reference

**KB Directory:**
- `knowledge-base/` - All source content

**Website Code:**
- `src/pages/` - Page components
- `src/components/` - UI components
- `.cursorrules` - Local IDE rules

---

## 💡 Common Scenarios

### Scenario 1: Update event date in KB
1. Find: `hackathon-one-pager.md` (shows date)
2. Find in app: Home.tsx, EventFormat.tsx, FAQ.tsx
3. Update: New date in all three components
4. Add comment: `// See knowledge-base/01-planning-strategy/hackathon-one-pager.md`
5. Commit: `feat: update event date from KB`

### Scenario 2: Add new challenge
1. Add: New challenge in `knowledge-base/06-challenge-design/README.md`
2. Update: `src/components/Challenges.tsx`
3. Add: Challenge to component's data array
4. Comment: `// See knowledge-base/06-challenge-design/README.md`
5. Deploy: New challenge appears on website

### Scenario 3: Create new page from KB content
1. Find: KB content for new page (e.g., volunteer info)
2. Check: Part 2 of LOVABLE-SYNC-PLAN.md for page mapping
3. Create: New component `src/pages/NewPage.tsx`
4. Add JSDoc: List KB sources at top
5. Implement: Content from KB files
6. Add to Nav: Update Navigation.tsx
7. Commit & Deploy

---

## 📞 Quick Help

**"I need to sync KB content to the website"**
→ See LOVABLE-SYNC-PLAN.md Part 5

**"I'm adding a new website page"**
→ See LOVABLE-SYNC-PLAN.md Part 4

**"KB and website have different info"**
→ KB is source of truth; update website

**"I found KB content is incomplete"**
→ Add // TODO comment and flag to KB owner

**"Should I update KB from website code?"**
→ NO - Never. KB is source of truth.

**"What's the sync workflow?"**
→ See "Workflow for Syncing Content" above

---

## 📈 Success Metrics

Track these to ensure sync plan is working:

- **Content Freshness:** Website updates within 2 weeks of KB changes
- **Citation Rate:** 100% of content has JSDoc KB reference
- **Hardcoded Content:** 0 pieces without KB source
- **TBD Tracking:** All tracked with owner + deadline
- **Sync Latency:** < 7 days from KB change to deployment
- **Build Status:** Always passing
- **KB-App Conflicts:** < 1 per month

---

**Last Updated:** November 12, 2025
**Full Plan:** LOVABLE-SYNC-PLAN.md
**Questions:** Review LOVABLE-SYNC-PLAN.md Part 8 (FAQ)
