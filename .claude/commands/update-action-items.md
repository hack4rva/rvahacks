# /update-action-items

Manage and track action items from meetings in the knowledge base.

## Usage

```bash
/update-action-items [--status] [--add] [--close] [--report]
```

## What This Does

1. **Reviews current action items** from `knowledge-base/03-meeting-notes/current-action-items.md`
2. **Allows updates to statuses** (Pending → In Progress → Completed)
3. **Tracks completion dates** and owner confirmations
4. **Reflects updates in meeting notes** for historical record
5. **Archives completed items** to meeting record
6. **Commits changes** to main branch

## Examples

```bash
# See all active action items
/update-action-items --status

# Add new action item
/update-action-items --add

# Mark action item as complete
/update-action-items --close "Finalize challenge descriptions"

# Generate action item report
/update-action-items --report

# Interactive mode (prompts for all options)
/update-action-items
```

## Interactive Mode

Run without parameters to:
1. See list of all active action items
2. Select an item to update
3. Change status (Pending → In Progress → Completed)
4. Add notes or blockers
5. Link to related KB files or website pages
6. Confirm changes and commit

## Output Examples

### Status View (--status)

```
╔═══════════════════════════════════════════════════════════════╗
║              Active Action Items Summary                      ║
║                                                               ║
║  Total Active: 12                                            ║
║  Pending: 7                                                  ║
║  In Progress: 4                                              ║
║  Blocked: 1                                                  ║
╚═══════════════════════════════════════════════════════════════╝

PENDING (7 items)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Finalize 3-5 additional challenge descriptions
   Owner: Alex
   Due: Nov 20, 2025
   Source: Meeting 2025-11-12
   Priority: HIGH
   Blocker: Registration platform decision

2. Confirm registration platform (Devpost or alternative)
   Owner: Crystal
   Due: Nov 15, 2025
   Source: Meeting 2025-11-12
   Priority: HIGH
   Blocks: [Sync registration.md, Create Registration.tsx]

3. Add logistics details (parking, meals, transportation)
   Owner: Nick
   Due: Nov 25, 2025
   Source: Meeting 2025-11-12
   Priority: MEDIUM
   Related: knowledge-base/05-event-operations/

IN PROGRESS (4 items)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Implement Phase 1 website pages (9 pages)
   Owner: [Development team]
   Started: Nov 12, 2025
   Due: Nov 26, 2025 (target)
   Progress: 0/9 pages started
   Status: Starting next week

2. Review and finalize KB content for Phase 1
   Owner: Ford, Crystal
   Started: Nov 12, 2025
   Progress: In review
   Status: Waiting for confirmation

BLOCKED (1 item)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Create Registration.tsx page
   Owner: [Development team]
   Blocked by: "Confirm registration platform" (Crystal)
   Unblocks when: Platform decision made
   Can be started: Once Devpost confirmed
```

### Add New Item (--add)

```
Adding new action item...

Item Description:
  > Deploy Phase 1 to production

Owner:
  > Crystal

Due Date:
  > 2025-11-26

Priority (HIGH/MEDIUM/LOW):
  > HIGH

Related KB Files (optional):
  > knowledge-base/LOVABLE-SYNC-PLAN.md

Related Website Pages (optional):
  > Home.tsx, About.tsx, Challenges.tsx

Blocker/Dependencies (optional):
  > None

Notes:
  > Deploy after all Phase 1 pages tested and reviewed

✅ Created action item:
   - Deploy Phase 1 to production
   - Owner: Crystal
   - Due: Nov 26, 2025
   - Priority: HIGH

Updated: knowledge-base/03-meeting-notes/current-action-items.md
Committed: "docs: add action item - deploy phase 1"
Pushed: origin/main
```

### Close Item (--close)

```
Marking as complete: "Finalize challenge descriptions"

Completed by: Alex
Completion date: Nov 19, 2025
Final status: ✓ COMPLETED

Notes (optional):
  > All 8 challenges finalized and documented in KB

✅ Closed action item
   - Moved to: knowledge-base/03-meeting-notes/2025-11-19-meeting-notes.md
   - Archived in: current-action-items.md (marked completed)
   - Commit: "docs: complete action item - finalize challenge descriptions"
   - Pushed: origin/main

This completion unblocks:
  - Sync Challenges.tsx from KB
  - Update challenge descriptions on website
```

### Report View (--report)

```
ACTION ITEM REPORT
Generated: November 12, 2025

═══════════════════════════════════════════════════════════════

OVERVIEW METRICS

Total Active Items: 12
  - Pending: 7 (58%)
  - In Progress: 4 (33%)
  - Blocked: 1 (8%)
  - Overdue: 0 (0%)

Completion Rate: 64% (9 of 14 items completed since Oct 25)
Average Completion Time: 4.2 days
On-Time Completion: 89%

═══════════════════════════════════════════════════════════════

BY OWNER

Ford Prior:
  - Total Assigned: 2
  - Pending: 2
  - In Progress: 0
  - Completed: 0
  - On Track: ✓ (both items on schedule)

Crystal Harvey:
  - Total Assigned: 5
  - Pending: 2 (registration platform, deploy phase 1)
  - In Progress: 2
  - Completed: 1
  - On Track: ⚠️ (1 item overdue by 2 days)

Alex:
  - Total Assigned: 3
  - Pending: 1 (challenges TBD)
  - In Progress: 1
  - Completed: 1
  - On Track: ✓ (on schedule)

[... etc for all team members ...]

═══════════════════════════════════════════════════════════════

BLOCKERS & DEPENDENCIES

Blocking Multiple Items: 1
  ❌ "Confirm registration platform"
     - Owner: Crystal
     - Due: Nov 15
     - Status: NOT STARTED
     - Blocks: 3 items
       1. Update registration.md
       2. Create Registration.tsx
       3. Deploy website

═══════════════════════════════════════════════════════════════

UPCOMING DEADLINES (Next 7 Days)

  Nov 15 - Confirm registration platform (OVERDUE!)
  Nov 20 - Finalize challenge descriptions
  Nov 25 - Add logistics details

═══════════════════════════════════════════════════════════════

RECOMMENDATIONS

1. 🚨 URGENT: Contact Crystal about registration platform decision
   - This is blocking 3 items
   - Already 2 days overdue
   - Needed to unblock Registration.tsx

2. Track Phase 1 implementation progress
   - Started: Next week
   - Due: Nov 26
   - Currently: 0/9 pages

3. Monitor logistics details completion
   - Assigned to: Nick
   - Due: Nov 25
   - Status: Not started
   - Should start this week

4. Archive completed items from Oct 25
   - 9 items ready to archive
   - Keeps current list clean and focused

═══════════════════════════════════════════════════════════════

For detailed action items: See knowledge-base/03-meeting-notes/current-action-items.md
For meeting context: See knowledge-base/03-meeting-notes/
```

## Integration with Other Commands

Automatically triggered by:
- `/add-meeting-notes` - Action items extracted from meeting notes
- `/kb-sync-status` - Shows if action items are blocking content syncs
- `/sync-page` - Tracks which action items are completed pages

Works with:
- `/meeting-transcript` - Process meeting audio to extract action items
- `/research-tracker` - Track research action items

## File Structure

**Primary File:** `knowledge-base/03-meeting-notes/current-action-items.md`

```markdown
| Item | Owner | Due Date | Status | Source |
|------|-------|----------|--------|--------|
| Finalize challenges | Alex | Nov 20 | Pending | Meeting 11-12 |
| ...
```

**Archive Location:** `knowledge-base/03-meeting-notes/YYYY-MM-DD-meeting-notes.md`
- Completed items linked to original meeting where assigned

## Tips

- **Track blockers:** Use blocker field to see dependencies
- **Link to KB:** Reference KB files affected by action items
- **Link to website:** Reference page implementations that complete items
- **Regular reviews:** Run `--report` weekly to track progress
- **Prioritize:** HIGH priority items need to be tracked closely
- **Archive:** Completed items stay in meeting record for history

## Output Format Options

```bash
/update-action-items --status --json      # Machine-readable
/update-action-items --report --csv       # Export to CSV
/update-action-items --status --markdown  # For documentation
```

## See Also

- `knowledge-base/03-meeting-notes/` - All meeting records
- `knowledge-base/13-resources/ACTION-ITEMS-ASAP.md` - Time-sensitive items
- `/add-meeting-notes` - Add meeting notes with action items
- `/kb-sync-status` - See how action items affect KB/website sync
