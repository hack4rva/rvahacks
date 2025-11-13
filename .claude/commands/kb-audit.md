# /kb-audit

Run a comprehensive audit of knowledge base content health and completeness.

## Usage

```bash
/kb-audit [--quick] [--detailed] [--by-directory] [--fix-issues]
```

## What This Does

1. **Scans all KB files** for structure and content issues
2. **Identifies TBDs** and incomplete sections
3. **Finds orphaned content** (KB files not mapped to website)
4. **Detects broken links** and references
5. **Checks file freshness** (last update dates)
6. **Validates markdown** formatting
7. **Reports conflicts** between KB and website
8. **Generates health score** and recommendations

## Examples

```bash
# Quick health check
/kb-audit --quick

# Detailed audit with recommendations
/kb-audit --detailed

# Organize by directory and priority
/kb-audit --by-directory

# Auto-fix obvious issues
/kb-audit --fix-issues
```

## Quick Audit Output

```
KNOWLEDGE BASE QUICK AUDIT
═══════════════════════════════════════════════════════════════

📊 HEALTH SCORE: 87/100 🟢 GOOD

Files Scanned: 50+
  ✓ Well-structured: 42
  ⚠️ Needs review: 5
  ❌ Issues found: 3

Content Completeness: 94%
Last Updated: 2025-11-12
Average File Age: 8 days

═══════════════════════════════════════════════════════════════

🚨 ISSUES FOUND (3)

1. Missing Content - HIGH PRIORITY
   File: 06-challenge-design/README.md
   Issue: 3-5 challenges marked TBD
   Impact: Blocks full implementation of Challenges.tsx
   Action: See KB-READINESS-CHECKLIST.md

2. Outdated Reference - MEDIUM
   File: 04-partnerships/sponsor-outreach-process.md
   Issue: References outdated contact email
   Last Review: Oct 15, 2025 (4 weeks ago)
   Action: Review and update contacts

3. Broken Link - LOW
   File: 01-planning-strategy/hackathon-one-pager.md
   Issue: Link to MAP document not found
   Impacts: Historical reference only
   Action: Fix link to Mayor's Action Plan

═══════════════════════════════════════════════════════════════

📅 FRESHNESS ANALYSIS

Files Updated This Week: 3
  ✓ hackathon-one-pager.md (Nov 10)
  ✓ EVENT-FORMAT.md (Nov 9)
  ✓ 08-participant-experience/README.md (Nov 8)

Files Stale (30+ days): 8
  ⚠️ 01-planning-strategy/strategic-framework-costar.md (Oct 8)
  ⚠️ 09-legal-compliance/insurance.md (Oct 1)
  ⚠️ 11-post-event/success-stories.md (Oct 5)
  [... 5 more ...]

Recommendation: Review and refresh stale files if status changed

═══════════════════════════════════════════════════════════════

QUICK RECOMMENDATIONS

1. Finalize challenge descriptions (3-5 TBD)
2. Update partner contact information
3. Fix MAP link in hackathon-one-pager.md
4. Review 8 files updated 30+ days ago

KB Status: READY FOR PHASE 1 ✓
```

## Detailed Audit Output

```
KNOWLEDGE BASE DETAILED AUDIT REPORT
Generated: November 12, 2025 at 2:45 PM UTC

═══════════════════════════════════════════════════════════════

1. DIRECTORY HEALTH SCAN

Directory: 01-planning-strategy/
  Files: 7
  Status: ✓ HEALTHY
  Content: 90% complete
  Freshness: 3 of 7 updated in 2 weeks
  Issues: None

  Files:
    ✓ hackathon-one-pager.md (Nov 10) - Ready
    ✓ FORMAT-DECISION.md (Oct 30) - Complete
    ⚠️ strategic-framework-costar.md (Oct 8) - Review recommended
    [... 4 more ...]

Directory: 02-team-governance/
  Files: 3
  Status: ✓ HEALTHY
  Content: 95% complete
  Freshness: All updated recently
  Issues: None

  Files:
    ✓ README.md (Oct 28) - Current
    ✓ team-roles.md (Oct 25) - Current
    ✓ governance.md (Oct 20) - Review recommended

Directory: 03-meeting-notes/
  Files: 5 (active) + archive
  Status: ✓ HEALTHY
  Content: 100% complete
  Freshness: Latest Nov 12
  Issues: None

  Files:
    ✓ 2025-11-12-meeting-notes.md (Nov 12) - Latest
    ✓ 2025-10-24-meeting-notes.md (Oct 24) - Historical
    ✓ current-action-items.md (Nov 12) - Updated
    [... 2 more ...]

Directory: 06-challenge-design/
  Files: 3
  Status: ⚠️ NEEDS ATTENTION
  Content: 75% complete (5 of 8 challenges)
  Freshness: Oct 30
  Issues: TBD challenges blocking content

  Files:
    ✓ README.md (Oct 30) - Partial (5/8 challenges)
    ✓ map-alignment.md (Oct 30) - Complete
    ❌ Challenge 6-8 - TBD

[... other directories ...]

═══════════════════════════════════════════════════════════════

2. CONTENT COMPLETENESS ANALYSIS

Sections by Completion Level:

100% Complete (39 files):
  ✓ All content present and current
  ✓ No TBDs or placeholders
  ✓ Includes updates through Nov 12

  Examples:
    - 07-marketing-comms/lovable-website-prompts.md
    - 08-participant-experience/what-to-bring.md
    - 05-event-operations/EVENT-FORMAT.md

75-99% Complete (8 files):
  ⚠️ Minor missing content or needs refresh

  Examples:
    - 06-challenge-design/README.md (5/8 challenges)
    - 05-event-operations/run-of-show.md (mostly complete)
    - 04-partnerships/sponsor-research-plan.md (needs vendor refresh)

50-74% Complete (2 files):
  ⚠️ Significant missing content

  Examples:
    - 08-participant-experience/registration.md (TBD platform)

<50% Complete (1 file):
  ❌ Major work needed

  Examples:
    - [None currently] ✓

═══════════════════════════════════════════════════════════════

3. TBD & INCOMPLETE TRACKING

Total TBDs: 3

High Priority:
  ❌ 06-challenge-design/README.md
     Missing: 3-5 challenge descriptions
     Impact: Blocks Challenges.tsx full implementation
     Owner: Alex
     Due: Nov 20

  ❌ 08-participant-experience/registration.md
     Missing: Platform selection (Devpost vs alternative)
     Impact: Blocks Registration.tsx
     Owner: Crystal
     Due: Nov 15

  ❌ 05-event-operations/
     Missing: Logistics details (parking, meals, transportation)
     Impact: Blocks Logistics.tsx
     Owner: Nick
     Due: Nov 25

Medium Priority: 0
Low Priority: 0

═══════════════════════════════════════════════════════════════

4. LINK & REFERENCE VALIDATION

Broken Links Found: 1
  ❌ knowledge-base/01-planning-strategy/hackathon-one-pager.md
     Line 45: Link to "Mayor's Action Plan" - file not found
     Type: External reference
     Severity: Low (doesn't affect website)
     Fix: Update to correct link or remove

Valid Internal References: 127
  ✓ All cross-references between KB files valid
  ✓ All citations in website components valid

External Links: 23
  ✓ 22 verified and working
  ⚠️ 1 link may be outdated (last checked Oct 15)

═══════════════════════════════════════════════════════════════

5. MARKDOWN VALIDATION

Files Scanned: 50+

✓ Valid Markdown: 49
  - Proper headers
  - Correct list formatting
  - Valid tables
  - Proper code blocks

⚠️ Minor Issues: 1
  File: 03-meeting-notes/2025-10-24-meeting-notes.md
  Issue: Inconsistent heading levels (skips from # to ###)
  Severity: Low (readability only)
  Fix: Adjust heading structure

❌ Errors: 0

═══════════════════════════════════════════════════════════════

6. WEBSITE CONTENT SYNC AUDIT

KB Files Implemented on Website: 14 of 50 (28%)
  ✓ All high-priority files implemented
  ✓ All citations present and correct

KB Files Planned for Implementation: 8 (Phase 2-3)
  ✓ Ready to implement (content complete)

KB Files Not Planned for Website: 28 (internal/archived)
  ✓ Properly classified as internal-only

Content Freshness Issues:
  ⚠️ 2 KB files updated but website not yet synced
  Action: See /kb-sync-status

═══════════════════════════════════════════════════════════════

7. RECOMMENDATIONS (RANKED BY PRIORITY)

HIGH PRIORITY (Do This Week):

  1. Finalize 3-5 challenge descriptions
     Impact: Unblocks full Challenges.tsx implementation
     Owner: Alex
     Effort: Medium
     Time: 2-4 hours

  2. Confirm registration platform decision
     Impact: Unblocks Registration.tsx creation
     Owner: Crystal
     Effort: Low (decision only)
     Time: 1 hour meeting

  3. Update partner contact information
     Impact: Ensures accurate sponsorship outreach
     Owner: [TBD]
     Effort: Low
     Time: 1-2 hours

MEDIUM PRIORITY (This Month):

  1. Refresh stale files (30+ days old)
     Files: 8
     Effort: Medium
     Time: 4-6 hours total

  2. Fix broken MAP link in hackathon-one-pager.md
     Effort: Minimal
     Time: 15 minutes

  3. Validate all external links
     Effort: Low
     Time: 30 minutes

LOW PRIORITY (Ongoing):

  1. Archive old meeting notes (pre-Oct)
     Effort: Minimal
     Time: 30 minutes

  2. Add more post-event success stories
     Effort: Medium
     Time: As events complete

═══════════════════════════════════════════════════════════════

HEALTH METRICS

Overall Health Score: 87/100 🟟 GOOD

Breakdown:
  - Completeness: 94/100
  - Currency (freshness): 88/100
  - Accuracy: 92/100
  - Organization: 85/100
  - Links & References: 89/100

Trend: ↗ Improving (was 82/100 last month)

═══════════════════════════════════════════════════════════════

NEXT AUDIT: November 19, 2025

To track improvements:
- Re-run this audit in 1 week
- See progress on HIGH priority items
- Identify any new issues
```

## By Directory Output

```bash
/kb-audit --by-directory
```

Shows health for each directory with:
- File count and status
- Completeness percentage
- Freshness (last updated)
- Issues found
- Recommendations

## Auto-Fix Issues

```bash
/kb-audit --fix-issues
```

Can automatically fix:
- Inconsistent markdown formatting
- Broken internal links
- Outdated table of contents
- Missing header levels
- Date format inconsistencies

Requires confirmation before applying fixes.

## Tips

- **Run weekly:** Track KB health over time
- **Fix TBDs first:** Blockers prevent other work
- **Prioritize by impact:** Focus on issues affecting website
- **Link to audit:** Reference audit findings in decisions
- **Track improvements:** Run audit before/after big changes
- **Customize sweeps:** Focus on specific directories if needed

## Integration

Works with:
- `/kb-sync-status` - See how audit findings affect website
- `/add-meeting-notes` - Meeting decisions can resolve TBDs
- `/update-action-items` - Audit recommendations become action items

## Output Formats

```bash
/kb-audit --quick --json        # Machine-readable
/kb-audit --detailed --markdown # For documentation
/kb-audit --by-directory --csv  # For tracking
```

## See Also

- `KB-READINESS-CHECKLIST.md` - Quick checklist before Phase 1
- `LOVABLE-SYNC-PLAN.md` Part 1 - Content audit from original plan
- `/kb-sync-status` - See how KB affects website sync
