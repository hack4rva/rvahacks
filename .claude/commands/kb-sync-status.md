# /kb-sync-status

Check KB → Website content sync status and identify missing updates.

## Usage

```bash
/kb-sync-status [--detailed] [--by-page] [--by-kb-file]
```

## What This Does

1. **Audits KB content** - Scans all KB files for modifications
2. **Checks website implementations** - Verifies which pages use which KB files
3. **Identifies out-of-sync content** - Finds KB changes not yet on website
4. **Reports missing implementations** - Shows what KB content hasn't been implemented yet
5. **Tracks content citations** - Verifies all website content has KB references

## Examples

```bash
# Quick sync status overview
/kb-sync-status

# Detailed report with recommendations
/kb-sync-status --detailed

# Group by website page
/kb-sync-status --by-page

# Group by KB file
/kb-sync-status --by-kb-file
```

## Output: Quick Status

```
╔═══════════════════════════════════════════════════════════════╗
║           KB → Website Sync Status Report                     ║
║                                                               ║
║  Updated KB Files (last 7 days): 3                           ║
║  Pages Needing Sync: 2                                       ║
║  Unimplemented KB Content: 5 files                           ║
║  Content Missing Citations: 2 instances                      ║
║                                                               ║
║  Overall Sync Health: 🟡 GOOD (95% up-to-date)             ║
╚═══════════════════════════════════════════════════════════════╝

KB Files Modified (Last 7 Days):
  ✓ hackathon-one-pager.md (Nov 10)
  ✓ EVENT-FORMAT.md (Nov 9)
  ✓ README.md (08-participant-experience) (Nov 8)

Pages Needing Updates:
  🔴 Home.tsx - hackathon-one-pager.md changed
  🔴 EventFormat.tsx - EVENT-FORMAT.md changed

Unimplemented KB Content:
  📋 what-to-bring.md - Not yet on website
  📋 volunteer-management.md - Not yet on website
  📋 code-of-conduct.md - Not yet on website
  📋 sponsor-perks-engagement.md - Not yet on website
  📋 START-HERE.md - Not yet on website

Next Steps:
  1. Update Home.tsx from hackathon-one-pager.md
  2. Update EventFormat.tsx from EVENT-FORMAT.md
  3. See LOVABLE-SYNC-PLAN.md Phase 2 for implementation order
```

## Output: Detailed Status (--detailed)

```
SYNC REPORT - RVA Hacks Knowledge Base → Website
Generated: November 12, 2025 at 14:32 UTC

═══════════════════════════════════════════════════════════════

1. KB FILES MODIFIED THIS WEEK

File: knowledge-base/01-planning-strategy/hackathon-one-pager.md
  - Last Modified: Nov 10, 2025 10:15 AM
  - Changes: Updated challenge descriptions
  - Affects Pages: Home.tsx, Challenges.tsx
  - Website Status: OUT OF SYNC ⚠️
  - Recommendation: Update both pages immediately
  - JSDoc Status: ✓ Properly cited in Home.tsx, ✓ Cited in Challenges.tsx

File: knowledge-base/05-event-operations/EVENT-FORMAT.md
  - Last Modified: Nov 9, 2025 2:45 PM
  - Changes: Added new schedule details
  - Affects Pages: EventFormat.tsx, FAQ.tsx
  - Website Status: OUT OF SYNC ⚠️
  - Recommendation: Update EventFormat.tsx
  - JSDoc Status: ✓ Cited in EventFormat.tsx

File: knowledge-base/08-participant-experience/README.md
  - Last Modified: Nov 8, 2025 5:20 PM
  - Changes: Added new mentorship program details
  - Affects Pages: WhoShouldJoin.tsx, Preparation.tsx (future)
  - Website Status: PARTIAL SYNC ⚠️
  - Recommendation: Review and update if needed
  - JSDoc Status: ✓ Cited in WhoShouldJoin.tsx

═══════════════════════════════════════════════════════════════

2. PAGES NEEDING UPDATES

Page: src/pages/Home.tsx
  - KB Source: hackathon-one-pager.md
  - KB Last Modified: Nov 10, 2025
  - Page Last Updated: Nov 8, 2025
  - Status: ⚠️ OUT OF SYNC (2 days old)
  - Changes Needed: Review updated challenge descriptions
  - Action: Run `/sync-page Home` to update

Page: src/pages/EventFormat.tsx
  - KB Source: EVENT-FORMAT.md
  - KB Last Modified: Nov 9, 2025
  - Page Last Updated: Nov 9, 2025
  - Status: ✓ UP TO DATE
  - Last Sync Commit: 85a3c2f (Nov 9, 10:45 AM)

═══════════════════════════════════════════════════════════════

3. UNIMPLEMENTED KB CONTENT (PHASE 2 & 3)

Phase 2 - Participant Resources (Weeks 3-4):

  File: what-to-bring.md
    - Priority: MEDIUM-HIGH
    - Target Page: Preparation.tsx (NEW)
    - KB Status: ✓ READY TO IMPLEMENT
    - Size: 8.0 KB, 200 lines
    - Estimated Work: 2-4 hours

  File: volunteer-management.md
    - Priority: MEDIUM
    - Target Page: GetInvolved.tsx (NEW)
    - KB Status: ✓ READY TO IMPLEMENT
    - Size: 8.4 KB, 180 lines
    - Estimated Work: 2-3 hours

  File: sponsor-perks-engagement.md
    - Priority: MEDIUM-HIGH
    - Target Page: Partners.tsx (UPDATE)
    - KB Status: ✓ READY TO IMPLEMENT
    - Size: 13.4 KB, 320 lines
    - Estimated Work: 3-4 hours

Phase 3 - Legal & Post-Event (Weeks 5-6):

  File: code-of-conduct.md
    - Priority: MEDIUM
    - Target Page: CodeOfConduct.tsx (NEW)
    - KB Status: ✓ READY TO IMPLEMENT
    - Size: [TBD] KB
    - Estimated Work: 2-3 hours

═══════════════════════════════════════════════════════════════

4. CONTENT CITATION AUDIT

Files with Proper KB Citations:
  ✓ Home.tsx - Cites hackathon-one-pager.md
  ✓ About.tsx - Cites 02-team-governance/README.md
  ✓ EventFormat.tsx - Cites EVENT-FORMAT.md
  ✓ Challenges.tsx - Cites 06-challenge-design/README.md
  ✓ Partners.tsx - Cites 04-partnerships/README.md

Files Missing KB Citations:
  ⚠️ FAQ.tsx - No JSDoc reference to KB sources
  ⚠️ WhoShouldJoin.tsx - Partial citations (missing some sources)

Recommendation: Add JSDoc comments citing KB files to all components

═══════════════════════════════════════════════════════════════

5. SYNC METRICS

Total KB Files: 50+
  - Implemented on Website: 14 (28%)
  - Ready to Implement: 8 (16%)
  - In Progress: 0 (0%)
  - Pending Decisions: 3 TBD items (6%)
  - Internal/Not for Website: 18+ (36%)

Total Website Pages: 9 (Phase 1)
  - Up to Date: 9 (100%)
  - Out of Sync: 0 (0%)
  - Need Review: 0 (0%)

Sync Latency: 2.3 days (average time from KB change to website update)
  - Target: < 7 days
  - Status: ✓ GOOD

═══════════════════════════════════════════════════════════════

RECOMMENDATIONS

High Priority:
  1. Update Home.tsx from hackathon-one-pager.md (2 days old)
  2. Add KB citations to FAQ.tsx
  3. Complete KB citations in WhoShouldJoin.tsx

Medium Priority:
  1. Add JSDoc citations to all future components
  2. Document any KB files that intentionally differ from website
  3. Review LOVABLE-SYNC-PLAN.md Part 2 for Phase 2 content

Low Priority:
  1. Consider automating citation checks
  2. Set up weekly sync status reports
  3. Archive old meeting notes

═══════════════════════════════════════════════════════════════

For Detailed Mapping: See LOVABLE-SYNC-PLAN.md Part 2
For Implementation Order: See SYNC-PLAN-QUICK-REFERENCE.md
For Full Audit: Use `/kb-audit` command
```

## Output: By Page (--by-page)

```
SYNC STATUS BY PAGE

Home.tsx
  ├─ KB Source: hackathon-one-pager.md
  ├─ Status: OUT OF SYNC ⚠️ (2 days old)
  ├─ Last KB Update: Nov 10
  ├─ Last Page Update: Nov 8
  └─ Action: Update immediately

About.tsx
  ├─ KB Source: 02-team-governance/README.md
  ├─ Status: ✓ UP TO DATE
  ├─ Last KB Update: Oct 25
  ├─ Last Page Update: Oct 26
  └─ Action: None needed

EventFormat.tsx
  ├─ KB Source: EVENT-FORMAT.md
  ├─ Status: ✓ UP TO DATE
  ├─ Last KB Update: Nov 9
  ├─ Last Page Update: Nov 9
  └─ Action: None needed

[... etc for all 9 pages ...]

Preparation.tsx (PLANNED - Phase 2)
  ├─ KB Source: what-to-bring.md
  ├─ Status: NOT IMPLEMENTED
  ├─ KB Ready: ✓ YES
  ├─ Estimated Work: 2-4 hours
  └─ Action: Implement in Phase 2
```

## Integration

- Scans git logs to detect KB file changes
- Checks JSDoc comments in website components
- Tracks last sync commits per page
- Compares timestamps (KB vs Website)
- Identifies citation gaps

## Related Commands

- `/sync-page [name]` - Update a specific page from KB
- `/kb-audit` - Deep audit of all KB content
- `/add-meeting-notes` - Add meeting notes and trigger sync status check
- `/update-action-items` - Sync action items to website

## See Also

- `LOVABLE-SYNC-PLAN.md` - Content mapping and implementation schedule
- `SYNC-PLAN-QUICK-REFERENCE.md` - Quick reference guide
- `KB-READINESS-CHECKLIST.md` - What's ready vs. TBD
