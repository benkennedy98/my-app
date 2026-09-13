# Plan: Navbar Restructure + Pelt Tracker Page

## Current app structure (for reference)
- Next.js App Router, TypeScript, no backend/DB, no auth.
- `app/page.tsx` → `/` → currently a plain "Home" card.
- `app/rdr2/page.tsx` → `/rdr2` → currently the Hunting Guide (animal → weapon lookup).
- `app/components/Navbar.tsx` → hardcoded links: "Home" (`/`) and "RDR2" (`/rdr2`).
- `app/components/Card.tsx` → shared card/panel wrapper used by every page.
- `app/data/animals.ts` → static data file pattern already used for the Hunting Guide.
- Styling is a single `globals.css`, RDR2-themed (blood red / black, Bebas Neue + Alfa Slab One fonts).
- No database — anything "saved" today only lives in component state. For a tracker that needs to persist between visits, the natural fit here is **browser `localStorage`** (no server, no accounts).

## 1. Navbar restructure
- `Home` label → `RDR2`, same route `/`.
- `/` page content → becomes the RDR2 app landing page (replace the "Hello welcome to my app" placeholder with something like a short landing/menu — title + links/cards to "Hunting Guide" and "Pelt Tracker").
- `RDR2` label (currently pointing at `/rdr2`) → renamed to `Hunting Guide`.
  - Decision needed: keep the route at `/rdr2`, or rename the folder to `app/hunting-guide` for a cleaner URL? Recommend renaming to `/hunting-guide` for clarity since we're renaming everything else — flag this as a call-out in review.
- New navbar entry: `Pelt Tracker` → new route `/pelt-tracker`.
- Update `app/layout.tsx` metadata title if desired (currently generic "My App").

## 2. Pelt Tracker data model
Add `app/data/pelts.ts` modeled after the existing `animals.ts` pattern:

```ts
export type PeltType = "pelt" | "feather"

export interface PeltRequirement {
  animal: string
  type: PeltType
  count: number
}

export interface TrapperOutfit {
  id: string          // e.g. "total-checklist"
  name: string         // e.g. "Total Checklist"
  requirements: PeltRequirement[]
}

export const trapperOutfits: TrapperOutfit[] = [ ... ]
```

- Transcribe your 4 lists into this shape: **Total Checklist**, **Trapper Garments**, **Trapper Clothing**, **Trapper Saddle**. (The "[1]/[2]" columns in your notes are just print-layout columns, not different quality tiers — they'll collapse into one flat list per outfit.)
- Each row = one animal + pelt-or-feather + quantity needed for that specific outfit.

## 3. Progress tracking model
Per outfit, per requirement row, track:
- `collected: number` — how many you currently have banked (0 up to `count`), adjustable with +/- controls.
- `delivered: boolean` — whether you've turned that batch in to the trapper for that outfit (once true, row shows as complete/checked off).

Storage key shape: `pelt-tracker:{outfitId}:{animal}:{type}` → `{ collected, delivered }`, all persisted via a small `usePeltProgress` hook wrapping `localStorage`.

Open question for you: if the **same animal** appears in multiple outfits (e.g. Beaver in Total Checklist, Garments, and Clothing), do you want each outfit tracked independently (recommended — matches how the trapper actually consumes pelts per craft), or one shared "have I got a Beaver pelt" counter across all lists? Plan assumes independent tracking per outfit unless you say otherwise.

## 4. UI/UX
- New `app/components/PeltTracker.tsx` (client component), rendered from `app/pelt-tracker/page.tsx` inside the existing `Card` component — consistent with `HuntingGuide.tsx`/`rdr2/page.tsx` pattern.
- Layout: a tab or accordion per outfit (Total Checklist / Garments / Clothing / Saddle) so the page isn't one giant list.
- Each row: animal name, type (pelt/feather icon or label), `x / y collected` counter with +/- buttons, a "delivered" checkbox, visually dim/strike-through completed rows.
- Overall progress summary per outfit (e.g. "12/34 delivered").
- Reuse existing color/font variables from `globals.css`; add new styles for the tracker rows/tabs/progress bar.

## 5. File changes summary
| File | Change |
|---|---|
| `app/components/Navbar.tsx` | Update labels/links, add Pelt Tracker link |
| `app/page.tsx` | Replace placeholder with RDR2 landing content |
| `app/rdr2/page.tsx` (or moved to `app/hunting-guide/page.tsx`) | Rename only, content unchanged |
| `app/data/pelts.ts` | New — static outfit/requirement data |
| `app/hooks/usePeltProgress.ts` | New — localStorage-backed progress state |
| `app/components/PeltTracker.tsx` | New — tracker UI |
| `app/pelt-tracker/page.tsx` | New route |
| `app/globals.css` | New styles for tracker (rows, tabs, progress bar) |

## 6. Order of implementation
1. Navbar + route rename/relabel (small, low risk).
2. `pelts.ts` data file (transcribe your lists — I'll confirm the data back to you before wiring up UI).
3. `usePeltProgress` localStorage hook.
4. `PeltTracker` component + new route, styled to match existing theme.
5. Manual test: toggle collected/delivered, refresh browser, confirm persistence.
