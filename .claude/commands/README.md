# Claude Code Commands for RVA Hacks

Custom skills for managing knowledge base, synchronizing content to website, and maintaining living documentation.

## Available Commands

### 📝 Meeting & Documentation

**`/add-meeting-notes`** - Add meeting transcript to knowledge base
- Create structured meeting notes
- Extract action items and decisions
- Sync to current action items tracker
- Auto-commit and push to main
- **Usage:** `/add-meeting-notes [date] [attendees] [summary]`

**`/update-action-items`** - Manage and track action items
- View all active action items
- Update status (Pending → In Progress → Complete)
- Track blockers and dependencies
- Generate action item reports
- **Usage:** `/update-action-items [--status] [--add] [--close] [--report]`

### 📊 Content Sync & Status

**`/kb-sync-status`** - Check KB → Website content sync status
- Identify KB changes not yet on website
- Find out-of-sync pages
- Report unimplemented KB content
- Verify content citations
- **Usage:** `/kb-sync-status [--detailed] [--by-page] [--by-kb-file]`

**`/sync-page`** - Sync a specific page from KB
- Update page from latest KB content
- Verify TypeScript and formatting
- Auto-commit changes
- Push to main branch
- **Usage:** `/sync-page [page-name] [--force] [--dry-run]`

**`/create-page`** - Create a new page from KB content
- Generate React component from KB
- Extract and implement content
- Update navigation automatically
- Test and commit new page
- **Usage:** `/create-page [page-name] [--kb-source FILE] [--phase 2|3] [--dry-run]`

### 🔍 Audits & Reporting

**`/kb-audit`** - Comprehensive knowledge base health audit
- Scan all KB files for issues
- Identify TBDs and blockers
- Find orphaned content
- Validate markdown and links
- Generate health score and recommendations
- **Usage:** `/kb-audit [--quick] [--detailed] [--by-directory] [--fix-issues]`

## Common Workflows

### Starting Your Day

```bash
/kb-sync-status --quick        # See what's changed
/update-action-items --status  # Check your action items
```

### After a Meeting

```bash
/add-meeting-notes "2025-11-12" "Ford, Crystal, Alex" "Event planning update"
# Automatically extracts action items and syncs
```

### Updating Website Content

```bash
/kb-sync-status --detailed     # See what needs updating
/sync-page Home                # Update a single page
# Or update all out-of-sync pages
/sync-page --all
```

### Implementing Phase 2

```bash
/kb-audit --quick              # Check KB health
/create-page Preparation       # Create Preparation page
/create-page Registration      # Create Registration page
/create-page GetInvolved       # Create GetInvolved page
# ... continue with other Phase 2 pages
```

### Weekly Status Check

```bash
/kb-audit --quick              # Overall health
/kb-sync-status --report       # Sync status
/update-action-items --report  # Action item progress
```

## Command Quick Reference

| Command | Purpose | Frequency | Time |
|---------|---------|-----------|------|
| `/add-meeting-notes` | Capture meeting insights | After meetings | 5-10 min |
| `/update-action-items` | Track progress | Daily/Weekly | 5-15 min |
| `/kb-sync-status` | Monitor sync | Daily | 2-5 min |
| `/sync-page` | Update content | Weekly | 10-20 min |
| `/create-page` | New pages | As needed | 15-30 min |
| `/kb-audit` | Full health check | Weekly | 5-15 min |

## Recommended Schedule

### Daily
- Start: `/kb-sync-status --quick`
- End of day: `/update-action-items --status`

### After Each Meeting
- `/add-meeting-notes [details]`
  - Auto-syncs action items and commits to main

### Weekly (Monday)
- `/kb-audit --quick`
- `/kb-sync-status --detailed`
- `/update-action-items --report`

### During Phase 1 (Weeks 1-2)
- Each day: `/sync-page [pagename]`
  - Update 1-2 pages per day to stay on schedule

### During Phase 2-3 (Weeks 3-6)
- Each day: `/create-page [newpage]`
  - Create 1-2 new pages per day

### Monthly (End of month)
- `/kb-audit --detailed`
- Review health score and recommendations
- Plan next month's KB updates

## Integration with Other Tools

### Works With
- **Git:** All commands auto-commit and push
- **GitHub:** Integrates with Actions workflows
- **Lovable:** Commands track website → KB mapping
- **Meeting transcripts:** `/add-meeting-notes` processes transcripts

### Complements
- `LOVABLE-SYNC-PLAN.md` - Master implementation guide
- `SYNC-PLAN-QUICK-REFERENCE.md` - Daily reference
- `AGENTS.md` - How all agents interact with KB/app
- `.cursorrules` - Cursor IDE rules for development

## Tips & Tricks

### Save Time with Options

```bash
# Dry run before committing
/sync-page Home --dry-run      # Preview changes
/create-page Resources --dry-run # See what would be created

# Bulk operations
/sync-page --all               # Update all out-of-sync pages
/kb-audit --fix-issues         # Auto-fix common problems

# Machine-readable output
/kb-sync-status --json         # For scripting
/update-action-items --csv     # Export to spreadsheet
/kb-audit --markdown           # For documentation
```

### Track Changes

All commands create git commits with clear messages:
- `docs: add meeting notes from 2025-11-12`
- `feat: sync Home.tsx from hackathon-one-pager.md`
- `feat: create Preparation page from KB`
- `docs: complete action item - finalize challenges`

### Link to Context

Commands automatically reference:
- KB file sources (via JSDoc)
- Meeting notes and decisions
- Action item tracking
- Website page changes

### Get Help

Each command has detailed documentation:
```bash
/add-meeting-notes --help
/kb-sync-status --help
/sync-page --help
# ... etc
```

## Troubleshooting

### "KB file not found"
- Check file path in `LOVABLE-SYNC-PLAN.md` Part 2
- Use `/kb-audit` to scan all KB files
- Specify explicit path with `--kb-source`

### "Page already exists"
- Use `--force` to overwrite (if intended)
- Or use `/sync-page` to update instead of create

### "Sync shows conflicts"
- Use `--dry-run` to review before applying
- Check `/kb-sync-status --detailed` for conflicts
- Review both KB and website versions

### "Action item won't close"
- Verify action item exists in `current-action-items.md`
- Check exact wording matches
- Use interactive mode to select from list

### "No changes detected"
- KB file may not have been modified
- Use `--force` to update anyway
- Check file dates in `/kb-audit`

## Best Practices

1. **Use dry-run first** - Preview changes before committing
2. **Run quick audits daily** - Catch issues early
3. **Link everything** - Commands create clear citations
4. **Commit frequently** - Each action creates a commit
5. **Review before push** - Check diffs before commands auto-push
6. **Keep KB current** - Regular audits help identify stale content
7. **Track action items** - Don't let decisions get lost
8. **Sync after meetings** - Capture insights immediately

## File Structure

```
.claude/
└── commands/
    ├── README.md (this file)
    ├── add-meeting-notes.md
    ├── update-action-items.md
    ├── kb-sync-status.md
    ├── sync-page.md
    ├── create-page.md
    └── kb-audit.md
```

## Quick Links

- **Implementation Plan:** See `LOVABLE-SYNC-PLAN.md`
- **Quick Reference:** See `SYNC-PLAN-QUICK-REFERENCE.md`
- **Agent Guide:** See `knowledge-base/AGENTS.md`
- **IDE Rules:** See `.cursorrules`
- **Readiness:** See `KB-READINESS-CHECKLIST.md`

## Getting Started

### First Time
1. Read this file (you're here!)
2. Read `SYNC-PLAN-QUICK-REFERENCE.md`
3. Run `/kb-audit --quick` to see KB health
4. Review `KB-READINESS-CHECKLIST.md`

### Start Phase 1
1. Run `/kb-sync-status --detailed` to see what needs syncing
2. Each day, run `/sync-page [pagename]` for each Phase 1 page
3. After meetings, run `/add-meeting-notes`
4. Weekly, run `/kb-audit --quick`

### Start Phase 2
1. Review `LOVABLE-SYNC-PLAN.md` Part 3 for Phase 2 pages
2. Each day, run `/create-page [pagename]`
3. When KB content updates, run `/sync-page`
4. Continue action item tracking with `/update-action-items`

---

**Last Updated:** November 12, 2025
**Total Commands:** 6 major skills
**Status:** Ready to use

For detailed documentation on each command, see the respective `.md` files in this directory.
