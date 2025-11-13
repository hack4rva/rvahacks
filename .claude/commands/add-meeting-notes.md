# /add-meeting-notes

Add a new meeting transcript to the knowledge base, integrate into meeting notes, and commit changes.

## Usage

```bash
/add-meeting-notes [date] [attendees] [summary]
```

## What This Does

1. **Creates a new meeting notes file** with today's date
   - Location: `knowledge-base/03-meeting-notes/YYYY-MM-DD-meeting-notes.md`
   - Structured format with attendees, decisions, action items

2. **Processes the meeting transcript**
   - Extracts key decisions and action items
   - Identifies topics discussed
   - Notes any TBDs or follow-ups

3. **Updates the meeting notes index**
   - Adds entry to `knowledge-base/03-meeting-notes/current-action-items.md`
   - Links to new meeting file
   - Integrates action items into tracking

4. **Archives previous notes** (optional)
   - Moves old notes to `knowledge-base/archive/` if directory gets too large
   - Maintains clean, current meeting notes directory

5. **Commits and pushes to main**
   - Git commit: `docs: add meeting notes from [date]`
   - Pushes to main branch
   - Maintains living documentation repo

## Example

```bash
/add-meeting-notes "2025-11-12" "Ford, Crystal, Alex, Tom" "Discussed event format, challenge finalization, sponsorship timeline"
```

This will:
- Create `knowledge-base/03-meeting-notes/2025-11-12-meeting-notes.md`
- Update `knowledge-base/03-meeting-notes/current-action-items.md`
- Commit: `docs: add meeting notes from 2025-11-12`
- Push to main

## Interactive Mode

Run without parameters and you'll be prompted for:
- Meeting date (defaults to today)
- Attendees (comma-separated names)
- Meeting summary (what was discussed)
- Topics covered (checkboxes for quick selection)
- Key decisions (free text)
- Action items with owners (structured input)
- TBDs and follow-ups

## Template

The skill uses this template:

```markdown
# Meeting Notes - [Date]

**Date:** [Date]
**Attendees:** [List]
**Duration:** [Duration]

## Summary
[One paragraph overview of meeting]

## Topics Discussed
- [Topic 1] - [brief note]
- [Topic 2] - [brief note]

## Key Decisions Made
- Decision 1: [Description]
- Decision 2: [Description]

## Action Items
| Item | Owner | Due Date | Status |
|------|-------|----------|--------|
| Action 1 | Person | Date | Pending |
| Action 2 | Person | Date | In Progress |

## TBDs / Follow-ups
- TBD 1: [Description] - (owner if known)
- TBD 2: [Description] - (owner if known)

## Next Meeting
Date: [Date if scheduled]
Purpose: [If known]

---
*Meeting notes added to knowledge base on [date]*
*See knowledge-base/03-meeting-notes/current-action-items.md for active action items*
```

## Integration with KB

- Action items automatically sync to `current-action-items.md`
- TBDs automatically sync to `knowledge-base/13-resources/RESEARCH-NEEDS.md`
- Decisions automatically cross-reference related KB files
- Creates living documentation that stays current

## Output

```
✅ Created: knowledge-base/03-meeting-notes/2025-11-12-meeting-notes.md
✅ Updated: knowledge-base/03-meeting-notes/current-action-items.md
✅ Synced: Knowledge base action items
✅ Committed: docs: add meeting notes from 2025-11-12
✅ Pushed: origin/main

Meeting notes are live on main branch.
Summary: [summary]
Action Items: [X] items tracked
TBDs: [X] follow-ups flagged
```

## Tips

- **Quick entry:** Use inline parameters for fast note-taking
- **Detailed entry:** Run interactively for structured meeting documentation
- **Review before push:** Check the generated file before automatic push
- **Link decisions:** Reference relevant KB files when discussing decisions
- **Track blockers:** Use TBDs section to flag items blocking other work

## Integration with Other Skills

Works with:
- `/update-action-items` - Sync action item status updates
- `/kb-sync-status` - See how meeting notes feed into website content
- `/research-tracker` - TBDs from meetings get tracked here

## See Also

- `knowledge-base/03-meeting-notes/` - All meeting notes
- `knowledge-base/03-meeting-notes/current-action-items.md` - Active actions from all meetings
- `knowledge-base/13-resources/RESEARCH-NEEDS.md` - TBDs from meetings
- `AGENTS.md` - How meeting documentation feeds KB/app workflow
