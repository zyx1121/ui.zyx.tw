# Design system — ui.zyx.tw

> Copy in, own outright. The registry's job is to ship pieces that *already* feel finished — variants done, edge cases done, dark mode done. If it's not, it doesn't belong in `registry.json` yet.

## Anchor tokens (`app/globals.css`)

- `--radius: 1rem` — base radius. All `rounded-*` utilities derive from it. Pronounced enough that buttons read as soft-pill, not Material 4dp.
- `--block: oklch(0.97 0.004 85)` — warm-grey for section/block backgrounds. **No border** — separation comes from this color, not a stroke.
- `--block-foreground: var(--foreground)` — text on block bg.

Dark mode pairs (under `.dark`):
- `--block: oklch(0.21 0.004 85)`
- everything else inherits via the existing `.dark` block

## Radius scale

All radius tokens derive from `--radius`. Don't hardcode `rounded-[18px]` — pick from the scale or extend the scale.

| Utility | Multiplier | px @ `--radius: 1rem` | Use for |
|---|---|---|---|
| `rounded-sm` | 0.6× | 9.6px | inline chips, badges |
| `rounded-md` | 0.8× | 12.8px | inputs, small surfaces |
| `rounded-full` | — | pill | **buttons** — pill shape, height-defined radius |
| `rounded-lg` | 1.0× | 16px | cards, modal corners |
| `rounded-xl` | 1.4× | 22.4px | **blocks / sections** |
| `rounded-2xl` | 1.8× | 28.8px | hero containers, full-bleed feature blocks |

Button and block live in the same scale on purpose — when a button sits inside a block, the corners feel related, not random.

## Component contracts

Every item shipped in `registry.json` must satisfy:

1. **Dark variant works** — uses `bg-foreground` / `bg-background` / `bg-block` tokens, never raw `bg-black` / `bg-white`. Toggling `.dark` on `<html>` flips cleanly.
2. **Loading state present** *(async-capable only)* — interactive components that can trigger async work expose `loading` (or `isPending`) prop. Visual: spinner or skeleton, `aria-busy="true"`, underlying interactive disabled. Static blocks (`Hero`, `Section`) are exempt.
3. **No border on blocks** — blocks lean on `--block` background for separation. Border on a block = drift back to Material; resist.
4. **Reduced motion respected** — animations gated by `@media (prefers-reduced-motion: no-preference)` or `motion`'s built-in handling.

If a component can't satisfy 1–4, it lives under `registry/_drafts/` and stays out of `items[]`. Half-finished components are debt; the registry only ships finished ones.

## Item types & locations

| Type | Path | Examples | Visual rule |
|---|---|---|---|
| `registry:ui` | `registry/ui/` | `button.tsx`, `input.tsx`, `badge.tsx` | primitives — `rounded-md` |
| `registry:block` | `registry/blocks/` | `hero.tsx`, `showreel.tsx`, `logo-grid.tsx` | section composites — `bg-block`, `rounded-xl`, **no border** |
| `registry:component` | `registry/components/` | `data-table.tsx`, `command-palette.tsx` | middle ground — depends |

## Adding a new item

1. Drop source at `registry/<type>/<name>.tsx`
2. Append item to `registry.json` (set `type`, `target`, `dependencies`, `registryDependencies: []`)
3. `bun run registry:build` regen `public/r/`
4. Push — Vercel rebuilds + serves

Before flipping to `items[]`: did you walk rules 1–4? If not, ship to `_drafts/` and come back.

## What we explicitly don't do

- **No border on blocks.** Background contrast does the work.
- **No raw hex / rgb in component files.** Always token-via-class. The whole point of `--block`, `--foreground`, etc. is that swapping themes shouldn't require touching component source.
- **No CSS-in-JS.** Tailwind utility classes only. The registry exists to ship plain `.tsx` files that drop into any shadcn project without bringing emotion/styled-components.
- **No `class-variance-authority` unless variants actually justify it.** A 3-variant button doesn't need cva — a `Record<Variant, string>` lookup reads cleaner. Add cva when the variant matrix exceeds ~6 combinations.
