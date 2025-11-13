# /sync-page

Sync a website page from updated KB content and commit changes.

## Usage

```bash
/sync-page [page-name] [--force] [--dry-run]
```

## What This Does

1. **Identifies KB sources** for the specified page
2. **Checks for KB updates** since last page sync
3. **Extracts new content** from KB files
4. **Updates the page component** with new content
5. **Adds/updates JSDoc citations** to KB sources
6. **Tests the component** (TypeScript, formatting)
7. **Commits and pushes** to main branch

## Examples

```bash
# Update Home page from KB
/sync-page Home

# Update Challenges page
/sync-page Challenges

# Dry run (see what would change, don't commit)
/sync-page EventFormat --dry-run

# Force update even if no changes detected
/sync-page Partners --force

# Update all out-of-sync pages
/sync-page --all
```

## Interactive Mode

Run without parameters to:
1. See list of all pages
2. Select which page to sync
3. Review changes before committing
4. See what KB files will be used

## What Happens

### Step 1: Identify KB Sources
```
Page: Home.tsx
KB Sources:
  - hackathon-one-pager.md (primary)
  - 07-marketing-comms/README.md (supporting)
  - 02-team-governance/README.md (team mentions)
```

### Step 2: Check for Updates
```
Last Sync: Nov 8, 2025 10:15 AM
KB File Updates Since Then:
  ⚠️ hackathon-one-pager.md - Nov 10 (UPDATED - 2 days old)
  ✓ 07-marketing-comms/README.md - Nov 5 (no changes)
  ✓ 02-team-governance/README.md - Oct 25 (no changes)

Action: Page is out of sync. Will update from hackathon-one-pager.md
```

### Step 3-5: Extract & Update Content
```
Extracting from hackathon-one-pager.md...
  - Event name and tagline ✓
  - Event positioning ✓
  - Hero section copy ✓
  - Challenge list ✓
  - Team highlights ✓

Updating src/pages/Home.tsx...
  - Updated Hero component ✓
  - Updated ChallengePreview component ✓
  - Added new team member cards ✓
  - Updated JSDoc citations ✓
```

### Step 6: Test Component
```
TypeScript Checking...
  ✓ No type errors
  ✓ All imports valid
  ✓ Props properly typed

Formatting Check...
  ✓ Prettier formatted
  ✓ Linter clean
  ✓ No warnings
```

### Step 7: Commit & Push
```
Staging changes...
  src/pages/Home.tsx

Committing...
  ✓ Commit: "feat: sync Home.tsx from hackathon-one-pager.md"

Pushing to main...
  ✓ Pushed to origin/main
  ✓ Build triggered on GitHub Actions
```

## Dry Run Output

```bash
/sync-page EventFormat --dry-run
```

```
DRY RUN: EventFormat.tsx sync

KB Sources:
  - 05-event-operations/EVENT-FORMAT.md
  - 08-participant-experience/what-to-expect.md

Changes Detected:
  ✓ Updated schedule in EVENT-FORMAT.md

What Would Change:
  src/pages/EventFormat.tsx
    - Lines 45-78: Update schedule section
    - Lines 120-130: Update participation paths
    - Lines 200-210: Add new FAQ section

JSDoc Updates:
    // See knowledge-base/05-event-operations/EVENT-FORMAT.md (updated Nov 9)

Estimated Impact:
  - Lines changed: 45
  - Components affected: 2
  - Functions modified: 3

To apply: Run /sync-page EventFormat
```

## Common Pages

```bash
/sync-page Home       # Home/Index page
/sync-page About      # About page
/sync-page Challenges # Challenges page
/sync-page EventFormat # Event format page
/sync-page FAQ        # FAQ page
/sync-page Partners   # Partners page
/sync-page Team       # Team page
/sync-page WhoShouldJoin # Who should join page
/sync-page ActionPlan # Mayor's Action Plan page
```

## Phase 2-3 Pages (New Pages)

For new pages, use `/create-page` instead:
```bash
/create-page Preparation   # Create Preparation.tsx from KB
/create-page Registration  # Create Registration.tsx from KB
/create-page GetInvolved   # Create GetInvolved.tsx from KB
```

## Output Formats

### Default (Human-Readable)
```
✅ Synced: Home.tsx from hackathon-one-pager.md
📝 Changes: 45 lines updated
✓ Type Check: Passed
✓ Lint Check: Passed
✓ Formatted: Prettier applied
✓ Committed: feat: sync Home.tsx from hackathon-one-pager.md
✓ Pushed: origin/main
```

### Detailed (--verbose)
- Shows all git diffs
- Lists every line changed
- Reports all linting warnings (even non-blocking)
- Shows full commit message and metadata

### JSON (--json)
```json
{
  "page": "Home.tsx",
  "status": "success",
  "kb_sources": ["hackathon-one-pager.md"],
  "changes": {
    "lines_added": 12,
    "lines_removed": 8,
    "lines_modified": 25
  },
  "commit": "feat: sync Home.tsx from hackathon-one-pager.md",
  "commit_hash": "a7b3c4d",
  "pushed": true
}
```

## Error Handling

### If KB source not found
```
❌ Error: KB source not found
   Page: Home.tsx
   Looking for: hackathon-one-pager.md
   Not found at: knowledge-base/01-planning-strategy/

Possible solutions:
  1. Check LOVABLE-SYNC-PLAN.md Part 2 for correct KB source
  2. KB file may have been moved or renamed
  3. Use /kb-sync-status to verify content mapping
```

### If no changes detected
```
ℹ️ No changes detected
   Page: Partners.tsx
   KB Source: 04-partnerships/README.md
   Last KB update: Oct 25
   Last Page update: Oct 26 (1 day after KB)

The page appears to be up to date.
Use --force to update anyway.
```

### If conflicts detected
```
⚠️ Conflicts detected
   File: src/pages/EventFormat.tsx
   Conflicting changes:
     - KB suggests: New schedule section
     - Code has: Custom schedule component

Manual review needed. Use --dry-run to review conflicts first.
```

## Tips

- **Review before pushing:** Use `--dry-run` first to see what changes
- **Target outdated pages:** Use `/kb-sync-status` to find out-of-date pages
- **Bulk sync:** Use `/sync-all-pages` to update all pages at once
- **Track changes:** All syncs are tracked in git with clear commit messages
- **Citations matter:** Always verify JSDoc cites the correct KB file

## Integration with Workflows

Triggered automatically by:
- `/kb-sync-status` with recommendation
- `/add-meeting-notes` if decisions affect page content
- GitHub Actions (on KB file changes)

Works with:
- `/create-page` - Create new pages
- `/kb-audit` - Deep content audit
- `/update-action-items` - Keep action items synced

## See Also

- `LOVABLE-SYNC-PLAN.md` Part 2 - Content-to-page mapping
- `LOVABLE-SYNC-PLAN.md` Part 4 - Repeatable workflow
- `SYNC-PLAN-QUICK-REFERENCE.md` - Daily reference
- `/kb-sync-status` - Find pages needing sync
