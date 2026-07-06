<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---
## Handoff — Claude Code — 2026-07-06

### Completed This Session
- [x] Rebranded the whole site from "Kestrel Voyages" (general travel: cabs + hotels + flights + visa) to "Akshar Travels" — a cab-only outstation taxi company, per manager brief relayed via WhatsApp.
- [x] Rebuilt the homepage (`src/app/page.tsx`) mirroring rahultravels.com's section structure: Hero + tabbed booking widget → Trip Types → Why Choose Us → Fleet → Popular Routes → How It Works → Testimonials → Stats → FAQ → CTA.
- [x] Replaced `src/data/services.ts` scope from general travel services (packages/hotels/flights/visa) to 4 cab trip types: one-way, round-trip, local/hourly, airport transfer. Updated `ServiceIcon.tsx` icon set to match (dropped hotel/plane/passport icons, added route/clock/plane-transfer).
- [x] New `BookingWidget.tsx` (replaces `QuickEnquiryStrip.tsx`) — Oneway/Round Trip/Local tabs, mirrors rahultravels.com's booking widget.
- [x] New sections/data: `WhyChooseUs.tsx`, `Fleet.tsx` (+`data/fleet.ts`), `PopularRoutes.tsx` (+`data/routes.ts`), `Faq.tsx` (+`data/faqs.ts`).
- [x] Updated `/services` and `/enquiry` pages' copy/metadata for cab-only framing; `Footer.tsx`/`ContactPanel.tsx` copy no longer references "travel desk" or "travel partners".
- [x] `src/data/nav.ts` `siteInfo` now has explicit `[PHONE]`/`[EMAIL]`/`[CITY]` placeholders — **real Akshar Travels contact details still need to be dropped in before this goes live**.

### State Left In
- Working tree has uncommitted changes (not committed per session convention — user hasn't asked to commit yet).
- Build, lint, and typecheck all pass (`npm run build`, `npm run lint`, `npx tsc --noEmit`). Verified in-browser via Playwright: booking widget tab switching, homepage content, `/services`, and `/enquiry?service=oneway&from=..&to=..` prefill all work.
- No photos were used anywhere — vector/icon illustrations only (see Gotchas below for why).

### Next Steps
1. Get real Akshar Travels phone/email/address/WhatsApp number from the manager and replace the `[PHONE]`/`[EMAIL]`/`[CITY]`/`[STATE]` placeholders in `src/data/nav.ts`.
2. Get real fleet/city-route pricing to replace the illustrative numbers in `src/data/routes.ts` (marked with a `TODO` — currently invented, not sourced from Rahul Travels or real Akshar data).
3. Manager said "baaki pages ban jayenge" (other pages later) — only the homepage was rebuilt to cab-only scope; `/services` and `/enquiry` were updated cosmetically (copy/metadata) but not restructured beyond what already existed.
4. Consider replacing the vector fleet illustrations with real photos once the manager/user decides on a licensed photo source (stock subscription or commissioned shoot) — see gotcha below.

### New Gotchas Discovered
- A globally-enabled `tdd-guard` plugin (`~/.claude/settings.json` → `enabledPlugins`) blocks every Edit/Write in *any* project unless a failing test precedes it — this repo has no test runner and the work here is almost entirely content/copy. Disabled **for this project only** via `.claude/tdd-guard/data/config.json` → `{ "guardEnabled": false }` (the plugin's own supported per-project override, not a hook bypass). It's still active globally for other repos.
- The manager's brief asked to reuse rahultravels.com's photos directly. Declined: those are a different live business's proprietary photography, and copying them onto Akshar Travels' production site is a real copyright/passing-off risk (confirmed with the user). Built the whole site with hand-rolled SVG/vector illustrations instead — matches the existing design system's zero-photography aesthetic and sidesteps the risk entirely.
- Also declined to copy Rahul Travels' real phone/email/address/stats verbatim (would mean a different company's real business displaying wrong contact info to genuine customers). Used explicit `[PHONE]`/`[EMAIL]`/etc. placeholders instead — see Next Steps #1.
---
