# /create-page

Create a new website page from knowledge base content.

## Usage

```bash
/create-page [page-name] [--kb-source KB_FILE] [--phase 2|3] [--dry-run]
```

## What This Does

1. **Identifies KB source(s)** for the new page
2. **Creates React component** (`src/pages/PageName.tsx` or `src/components/PageName.tsx`)
3. **Extracts content** from KB files
4. **Implements component** with proper JSDoc citations
5. **Adds TypeScript types** and exports
6. **Integrates with navigation** (adds to `Navigation.tsx` and routing)
7. **Tests component** (TypeScript, imports, formatting)
8. **Commits and pushes** to main branch

## Examples

```bash
# Create Preparation page from KB (Phase 2)
/create-page Preparation

# Create GetInvolved page (Phase 2)
/create-page GetInvolved

# Create with explicit KB source
/create-page CodeOfConduct --kb-source code-of-conduct.md

# Dry run (see what would be created)
/create-page Resources --dry-run

# Create and skip navigation update
/create-page Impact --skip-nav
```

## Interactive Mode

Run without parameters to:
1. See list of planned pages from LOVABLE-SYNC-PLAN.md
2. Select page to create
3. Confirm KB sources
4. Preview component structure
5. Review navigation changes
6. Create and commit

## Planned Pages Reference

### Phase 2 Pages (Weeks 3-4)

```bash
/create-page Preparation      # from what-to-bring.md
/create-page Registration     # from registration.md
/create-page Logistics        # from EVENT-FORMAT.md + custom
/create-page GetInvolved      # from sponsor + volunteer files
/create-page Resources        # from cloud + tools files
```

### Phase 3 Pages (Weeks 5-6)

```bash
/create-page CodeOfConduct    # from code-of-conduct.md
/create-page Impact           # from impact measurement files
```

## Output Example

### Creation Process

```
Creating: Preparation.tsx

Step 1: Identify KB Sources
  ✓ knowledge-base/08-participant-experience/what-to-bring.md (primary)
  ✓ knowledge-base/08-participant-experience/what-to-expect.md (supporting)

Step 2: Create Component File
  Creating: src/pages/Preparation.tsx
  ✓ Component created with proper React hooks

Step 3: Add JSDoc Header
  ✓ Added JSDoc with KB source citations
  ✓ Documented component purpose and KB files

Step 4: Extract and Implement Content
  Extracting from what-to-bring.md...
    ✓ Packing list
    ✓ Preparation timeline
    ✓ Pre-event digital setup
    ✓ Mental preparation tips

  Creating components...
    ✓ PackingListSection
    ✓ PreparationTimeline
    ✓ DigitalSetupGuide
    ✓ FAQSection

Step 5: Add TypeScript Types
  ✓ Props interfaces defined
  ✓ Type exports created
  ✓ Component typed as React.FC<Props>

Step 6: Update Navigation
  Updating: src/components/Navigation.tsx
    ✓ Added "Preparation" link to navigation
    ✓ Imported new page component

  Updating: src/App.tsx (or routing config)
    ✓ Added route: /preparation
    ✓ Lazy loading enabled
    ✓ URL slug configured

Step 7: TypeScript Check
  Running tsc...
  ✓ No type errors
  ✓ All imports resolved
  ✓ Props correctly typed

Step 8: Format & Lint
  Running prettier...
  ✓ Code formatted

  Running eslint...
  ✓ No linting errors
  ✓ React hooks rules followed
  ✓ Accessibility warnings: 0

Step 9: Commit & Push
  Staging files...
    ✓ src/pages/Preparation.tsx
    ✓ src/components/Navigation.tsx
    ✓ src/App.tsx

  Committing...
  ✓ feat: create Preparation page from KB

  Pushing...
  ✓ origin/main

SUMMARY
═══════════════════════════════════════════════════════════════
✅ Created: src/pages/Preparation.tsx
✅ Updated: Navigation and routing
✅ Components: 4 sub-components created
✅ Type Check: Passed
✅ Lint Check: Passed
✅ Committed: feat: create Preparation page from KB

Page is now live at: /preparation
KB Source: knowledge-base/08-participant-experience/what-to-bring.md
Citation: ✓ Added to JSDoc
```

## Dry Run Output

```bash
/create-page Preparation --dry-run
```

```
DRY RUN: Would create Preparation.tsx

Files Created:
  src/pages/Preparation.tsx (287 lines)

Files Modified:
  src/components/Navigation.tsx (+2 lines)
  src/App.tsx (+4 lines)

Component Structure:
  export const Preparation: React.FC = () => {
    return (
      <Layout>
        <Hero title="Get Ready for Hack for RVA" />
        <PackingListSection />
        <PreparationTimeline />
        <DigitalSetupGuide />
        <FAQSection />
      </Layout>
    );
  };

Navigation Changes:
  + Link: { href: '/preparation', label: 'Preparation' }

Routing Changes:
  + Route: { path: '/preparation', component: Preparation }

KB Citations:
  + // See knowledge-base/08-participant-experience/what-to-bring.md
  + // See knowledge-base/08-participant-experience/what-to-expect.md

To apply: Run /create-page Preparation
```

## Component Template

```typescript
/**
 * Preparation Component
 *
 * Helps participants prepare for Hack for RVA hackathon
 *
 * Content sources:
 * - knowledge-base/08-participant-experience/what-to-bring.md
 * - knowledge-base/08-participant-experience/what-to-expect.md
 *
 * @component
 */

import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';

export const Preparation: React.FC = () => {
  return (
    <Layout>
      {/* Hero section with title and overview */}
      <Hero
        title="Get Ready for Hack for RVA"
        subtitle="Everything you need to prepare for the hackathon"
      />

      {/* Content sections from KB */}
      <PackingListSection />
      <PreparationTimeline />
      <DigitalSetupGuide />
      <FAQSection />
    </Layout>
  );
};

export default Preparation;
```

## Integration

Works with:
- `/sync-page` - Update content in existing pages
- `/add-meeting-notes` - Meeting decisions can trigger new page creation
- `/kb-sync-status` - Shows pages ready to be created
- Navigation system - Automatically adds to nav and routing

## Options

```bash
--kb-source [file]    # Specify custom KB source
--phase 2|3          # Specify which phase
--skip-nav           # Don't update Navigation.tsx
--component          # Create as component not page
--dry-run            # Preview without creating
--no-commit          # Create but don't commit
--lazy-load          # Enable code splitting/lazy loading
--async              # Mark component as suspenseful
```

## Tips

- **Follow order:** Create Phase 2 pages in order (Preparation → Registration → etc.)
- **Review KB first:** Use `/kb-readiness-checklist` to ensure KB content is ready
- **Use dry-run:** Preview component structure before creating
- **Link content:** Component automatically cites KB files
- **Update nav:** Navigation auto-updates with new page
- **Consistent styling:** Use existing shadcn/ui components and Tailwind

## Error Handling

### If KB source missing
```
❌ Error: KB source file not found
   Looking for: code-of-conduct.md
   Searched: knowledge-base/

Use --kb-source to specify explicit path:
  /create-page CodeOfConduct --kb-source 09-legal-compliance/code-of-conduct.md
```

### If page already exists
```
❌ Error: Page already exists
   File: src/pages/Preparation.tsx

Use --force to overwrite (careful!)
  /create-page Preparation --force
```

## Testing

After creation:
1. Component type-checks
2. Linting passes
3. Formatting applied
4. Navigation updates
5. Routing works
6. All imports resolve

## See Also

- `LOVABLE-SYNC-PLAN.md` Part 2 - Page mapping and KB sources
- `LOVABLE-SYNC-PLAN.md` Part 3 - Phase 2 & 3 pages to create
- `/sync-page` - Update existing pages
- `/kb-sync-status` - See what's ready to create
