# Claude Code Complete Setup
## Knowledge Base, Website Sync, and Automation Skills

**Created:** November 12, 2025
**Status:** Ready to Use
**Location:** `/Users/williamprior/Development/GitHub/rvahacks/`

---

## What You've Got

Complete system for managing your knowledge base, syncing to Lovable website, and maintaining living documentation with automated git commits and pushes to main.

### Three Categories of Setup

#### 1. **System Architecture & Rules** (Foundation)
- `.cursorrules` - Cursor IDE rules for KB/app separation
- `knowledge-base/AGENTS.md` - How all agents interact with KB and app
- Custom Knowledge (Lovable UI) - Project guidelines for Lovable
- `knowledge-base/README.md` - Updated with links to agent guides

#### 2. **Implementation Plans** (Guidance)
- `LOVABLE-SYNC-PLAN.md` - 1,248 lines, 10 parts, complete implementation guide
- `SYNC-PLAN-QUICK-REFERENCE.md` - Daily reference guide
- `KNOWLEDGE-BASE-SETUP-INDEX.md` - Navigation and organization guide
- `KB-READINESS-CHECKLIST.md` - What's ready vs. TBD

#### 3. **Claude Code Skills** (Automation)
- `.claude/commands/` - 6 major skills (2,016 lines)
  - `/add-meeting-notes` - Capture meetings, auto-sync KB
  - `/update-action-items` - Track progress and blockers
  - `/kb-sync-status` - Monitor KB → Website sync
  - `/sync-page` - Update pages from KB
  - `/create-page` - Create new pages from KB
  - `/kb-audit` - Comprehensive health checks

---

## File Organization

```
rvahacks/
├── .cursorrules                          ← Cursor IDE rules
├── knowledge-base/
│   ├── AGENTS.md                         ← Agent interaction guide
│   ├── README.md                         ← Updated with links
│   └── [all KB content directories]
├── .claude/
│   └── commands/
│       ├── README.md                     ← Master index for skills
│       ├── add-meeting-notes.md
│       ├── update-action-items.md
│       ├── kb-sync-status.md
│       ├── sync-page.md
│       ├── create-page.md
│       └── kb-audit.md
├── LOVABLE-SYNC-PLAN.md                  ← Implementation plan
├── SYNC-PLAN-QUICK-REFERENCE.md          ← Daily reference
├── KNOWLEDGE-BASE-SETUP-INDEX.md         ← Navigation guide
├── KB-READINESS-CHECKLIST.md             ← Pre-Phase 1 checklist
└── CLAUDE-CODE-SETUP.md                  ← This file
```

---

## Quick Start (5 Minutes)

### 1. Review
Read `.claude/commands/README.md` to see all available skills

### 2. Try
```bash
/kb-audit --quick              # Check KB health
/kb-sync-status --quick        # See what changed
```

### 3. After Next Meeting
```bash
/add-meeting-notes "2025-11-12" "Ford, Crystal, Alex, Tom" "Discussed Phase 1"
```

### 4. Start Phase 1
```bash
/sync-page Home --dry-run      # Preview changes
/sync-page Home                # Apply changes
```

---

## How These Three Pieces Work Together

### The Rules (Foundation)
`.cursorrules` and `AGENTS.md` define:
- How KB and app code are separate
- One-way sync (KB → App, never reverse)
- Who decides what moves from KB to app
- How to handle ambiguity

### The Plans (Guidance)
`LOVABLE-SYNC-PLAN.md` and related docs show:
- What KB content exists (50+ files audited)
- Where it should go on website (16 pages total)
- How to implement it (3 phases, 6 weeks)
- Repeatable workflows for ongoing updates

### The Skills (Automation)
`.claude/commands/` make it easy to:
- Capture meetings with auto-sync
- Track action items and blockers
- Monitor KB → Website sync status
- Update pages automatically
- Create new pages from KB
- Audit KB health

**Together:** They create a system where meetings inform KB, KB feeds website, and everything stays in sync automatically.

---

## Daily Workflow

### Morning (2-3 minutes)
```bash
/kb-sync-status --quick
/update-action-items --status
```

### After Meetings (5-10 minutes)
```bash
/add-meeting-notes "date" "attendees" "summary"
# Auto-syncs everything and commits to main
```

### During Development (5-20 minutes)
```bash
/sync-page [pagename]     # Update a page
/create-page [pagename]   # Create new page
/kb-audit --quick         # Health check
```

### Weekly (15-30 minutes)
```bash
/kb-audit --detailed
/kb-sync-status --report
/update-action-items --report
```

---

## Key Features

### ✅ Meeting Documentation
- Capture transcripts
- Auto-extract decisions and action items
- Sync to knowledge base
- Maintain living documentation
- Auto-commit and push to main

### ✅ Content Synchronization
- One-way sync: KB → Website (never reverse)
- Check sync status daily
- Update pages individually or in bulk
- Create new pages from KB content
- All changes tracked with clear git commits

### ✅ Project Tracking
- Monitor action items from meetings
- Track blockers and dependencies
- See completion status
- Link to decisions and KB files
- Generate progress reports

### ✅ Quality Assurance
- Validate all KB files
- Identify incomplete content (TBDs)
- Find orphaned content
- Check for broken links
- Generate health scores and recommendations

---

## Implementation Phases

### Phase 1 (Weeks 1-2): Foundation
- 9 core pages implemented from KB
- All high-priority KB content synced
- Website launches with essential pages

**Use:** `/sync-page` to update each page, one per day

### Phase 2 (Weeks 3-4): Participant Resources
- 5 new participant-focused pages created
- Registration, preparation, resources, getting involved
- Medium-priority KB content implemented

**Use:** `/create-page` to create new pages from KB

### Phase 3 (Weeks 5-6): Legal & Post-Event
- Legal compliance pages
- Code of conduct
- Post-event impact tracking
- Footer updates

**Use:** `/create-page` and `/sync-page` for final touches

---

## Connection to Other Documents

### `.cursorrules`
- **Purpose:** Local IDE rules
- **When to Use:** Cursor IDE reads automatically
- **Covers:** KB/app separation, code standards

### `knowledge-base/AGENTS.md`
- **Purpose:** How all agents interact
- **When to Use:** Share with team, reference when unsure
- **Covers:** Human, AI, and automated agent roles

### `LOVABLE-SYNC-PLAN.md`
- **Purpose:** Complete implementation guide
- **When to Use:** Detailed reference during implementation
- **Covers:** Content audit, mapping, phases, workflows, checklists

### `SYNC-PLAN-QUICK-REFERENCE.md`
- **Purpose:** Daily reference guide
- **When to Use:** During daily work
- **Covers:** Quick lookup, common scenarios, status

### `KB-READINESS-CHECKLIST.md`
- **Purpose:** Pre-Phase 1 confirmation
- **When to Use:** Before starting Phase 1
- **Covers:** What's ready, what's TBD, blockers

### `.claude/commands/`
- **Purpose:** Automation and tooling
- **When to Use:** Daily operations
- **Covers:** Meeting capture, status checks, page updates

---

## Example Scenarios

### Scenario 1: After a Team Meeting
```bash
/add-meeting-notes "2025-11-12" "Ford, Crystal, Alex" "Finalized Phase 1 timeline"
# Automatically:
# - Creates meeting notes file
# - Extracts action items
# - Updates action items tracker
# - Syncs to KB
# - Commits to git: "docs: add meeting notes from 2025-11-12"
# - Pushes to main
```

### Scenario 2: KB Content Changed
```bash
/kb-sync-status --detailed    # See what changed
/sync-page Home --dry-run     # Preview changes
/sync-page Home               # Apply changes
# Automatically:
# - Updates Home.tsx with new content
# - Updates JSDoc citations
# - Runs TypeScript check
# - Formats code
# - Commits: "feat: sync Home.tsx from hackathon-one-pager.md"
# - Pushes to main
```

### Scenario 3: Creating Phase 2 Pages
```bash
/create-page Preparation --dry-run
/create-page Preparation
/create-page Registration
/create-page GetInvolved
# Automatically:
# - Creates React components
# - Extracts KB content
# - Updates navigation
# - Tests components
# - Commits: "feat: create [PageName] from KB"
# - Pushes to main
```

### Scenario 4: Weekly Health Check
```bash
/kb-audit --quick             # Overall health
/kb-sync-status --report      # Detailed sync status
/update-action-items --report # Progress on action items
# Identifies:
# - Stale content needing refresh
# - Pages out of sync
# - Blocked action items
# - Health score and recommendations
```

---

## Troubleshooting

### "I'm not sure what to do first"
→ Read `SYNC-PLAN-QUICK-REFERENCE.md` (10 min)
→ Then read `.claude/commands/README.md` (5 min)

### "I want to implement Phase 1"
→ Check `KB-READINESS-CHECKLIST.md` (confirm ready)
→ Run `/kb-sync-status --detailed` (see what needs syncing)
→ Use `/sync-page` to update each page

### "KB and website have different content"
→ KB is source of truth
→ Update website from KB using `/sync-page`
→ Never update KB from website code

### "I'm adding a new page"
→ Check `LOVABLE-SYNC-PLAN.md` Part 2 (find KB source)
→ Use `/create-page [name]` to create from KB

### "I don't know if action item is done"
→ Run `/update-action-items --status`
→ Update status for each action item
→ Run `/update-action-items --report` to see progress

### "KB content seems incomplete"
→ Run `/kb-audit --quick` (see health score)
→ Check `KB-READINESS-CHECKLIST.md` (see what's TBD)
→ Run `/kb-audit --detailed` (see specific issues)

---

## Integration Points

### Git Commits
All skills automatically create meaningful commits:
- `docs: add meeting notes from YYYY-MM-DD`
- `feat: sync [Page].tsx from [KB-file].md`
- `feat: create [NewPage] from KB`
- `docs: update action item - [description]`
- `docs: complete action item - [description]`

All commits are:
- Clear and descriptive
- Referenced to KB files
- Tracked in git history
- Pushed to main branch

### GitHub Actions
Can be triggered by:
- KB file changes (auto-sync website)
- Meeting notes (auto-extract action items)
- Manual commands (immediate updates)

### Lovable Custom Knowledge
Uses these guidelines:
- KB as single source of truth
- One-way sync (KB → Website)
- All content traces back to KB
- No reverse sync from code

---

## Success Metrics

Track these to ensure the system is working:

1. **KB Health:** Run `/kb-audit` weekly (target: 85+/100)
2. **Sync Latency:** KB changes to website (target: < 7 days)
3. **Content Citations:** % of website content citing KB (target: 100%)
4. **Action Items:** Completion rate (target: 90%+)
5. **Phase Progress:** Pages implemented on schedule

---

## Next Steps

### This Week
1. Read `SYNC-PLAN-QUICK-REFERENCE.md`
2. Review `.claude/commands/README.md`
3. Confirm Phase 1 is ready to launch
4. Decide on 3 TBD items

### Week 1-2 (Phase 1)
1. Use `/sync-page` to update each of 9 core pages
2. Use `/kb-sync-status` to monitor progress
3. Use `/add-meeting-notes` after each meeting
4. Commit daily to main

### Week 3-4 (Phase 2)
1. Use `/create-page` to create 5 participant pages
2. Use `/sync-page` to update existing pages as KB changes
3. Use `/update-action-items` to track progress
4. Run `/kb-audit` weekly

### Week 5-6 (Phase 3)
1. Use `/create-page` for legal and post-event pages
2. Final updates and polish
3. Full audit before launch
4. Deploy to production

---

## Support & Documentation

### Quick Reference
- `.claude/commands/README.md` - All skills overview

### Detailed Docs
- `LOVABLE-SYNC-PLAN.md` - Complete implementation guide
- `SYNC-PLAN-QUICK-REFERENCE.md` - Daily reference
- Individual skill files - `.claude/commands/[skillname].md`

### Architecture Docs
- `.cursorrules` - IDE rules
- `AGENTS.md` - Agent interaction guide
- `KNOWLEDGE-BASE-SETUP-INDEX.md` - Navigation guide

### Status & Checklists
- `KB-READINESS-CHECKLIST.md` - Pre-Phase 1
- `KNOWLEDGE-BASE-SETUP-INDEX.md` - Navigation guide
- `CLAUDE-CODE-SETUP.md` - This file

---

## Summary

You now have:

✅ **Clear Rules** - How KB and website work together
✅ **Comprehensive Plans** - 3-phase implementation guide
✅ **Automation Skills** - 6 major commands for daily work
✅ **Documentation** - Extensive guides and references
✅ **Git Integration** - Auto-commit and push on every action
✅ **Quality Assurance** - Audits, validation, and health checks

**You're ready to:**
- ✅ Start Phase 1 immediately
- ✅ Capture meetings with auto-sync
- ✅ Monitor KB → Website content sync
- ✅ Create new pages from KB
- ✅ Track action items and progress
- ✅ Maintain living documentation
- ✅ Keep everything in git with clear history

---

**Everything is in place. You're ready to launch!**

Next step: Read `.claude/commands/README.md` and start using the skills.
