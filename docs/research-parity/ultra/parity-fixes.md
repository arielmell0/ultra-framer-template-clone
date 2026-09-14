# Ultra Framer Parity Fixes Specification

## Measured Deltas

| Component | Our Previous | Live Reference (ultra.framer.website) | Fix |
|---|---|---|---|
| Main container | `pl-[152px]` on subpages; `px-4` on home with `py-10` per section | `width: 540px`, centered (`margin: 0 auto`), `padding: 40px 0`, `gap: 40px` between sections | `w-full max-w-[540px] mx-auto px-4 md:px-0 py-10 flex flex-col gap-10` site-wide |
| Nav rail | Static position or offset tooltip | `fixed left-[21px] top-1/2 -translate-y-1/2`, tooltips `left: 69px` (`left-[calc(100%+24px)]`), bg `#343434`, badge `#505050` | Exact alignment, tooltip padding 4px 6px, shortcut badge styling |
| Hero | `pt-10 pb-14`, unequal CTA buttons | `pt-0 pb-0`, `Contact me` and `Copy email` both `193px` width, copy icon, 13px mono location | Set `w-[193px] h-[38px]`, copy icon, DM Mono location ticker |
| About | `py-10`, label `top-1` | `py-0`, label `top-0` (aligned with text baseline), 15px / 22.5px leading | Remove section padding, align label to `top-0` |
| Work | `py-10`, text "View all" without arrow | `py-0`, "View all" with arrow icon `View all →`, href `/work/new-mobile-app-for-alpha` | Remove padding, add arrow SVG to View all |
| Store | `py-10`, text "View all" without arrow | `py-0`, "View all" with arrow icon `View all →`, href `/store/ultra-framer-template` | Remove padding, add arrow SVG |
| Writing | Single line with tag on right, `py-10` | Two lines: title on top, tag pill below title; date aligned top-right | Multi-line card layout, add arrow SVG to View all |
| Subscribe | In a `#282828` card with "Join" button | Plain background with 32x32 envelope icon, 18px title, 42px input with embedded "↵ Enter to subscribe" button | Transparent container, envelope SVG, inline submit |
| Footer | `py-16`, 13px font | `padding: 16px 0 32px`, 15px font, links 15px | Tighten padding, 15px font size |
| About subpage | Had `border-t` separators, Intro below photo | Intro label aligned with photo, clean 40px gap between sections, no borders | Match live structure |
| Stack subpage | 1-col list of placeholders | 3-col grid (172x230) for Software, 2-col grid (264x230) for Physical, real SVG/PNG icons | 3-column grid & 2-column grid with real icons |
