<<<<<<< HEAD
# HeritageLens — Ideathon Prototype

A frontend-only prototype for the theme **Culture & Heritage**: discover
India's heritage through verified history *and* authentic local voices.

This is a demo prototype, not a production app — there is no backend,
database, or authentication. All content is static/mock data.

## How to run it

No build step, no `npm install`, no dependencies. It's plain HTML/CSS/JS
using ES modules.

**Option A — just open it**
Double-click `index.html` (most browsers run ES modules from `file://`,
but some block it — if cards don't respond, use Option B).

**Option B — one-line local server (recommended for the demo)**

```bash
cd heritagelens
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

(Any static server works — `npx serve`, VS Code's "Live Server", etc.)

## Project structure

```
heritagelens/
├── index.html      # entry point, loads fonts + styles.css + app.js
├── styles.css       # entire design system (tokens, layout, components)
├── app.js           # router + event delegation + form/modal logic
├── views.js         # one render function per screen (Landing, State, Plan, ...)
├── components.js     # reusable pieces: navbar, footer, cards, badges, modal
├── map.js            # stylised India map SVG + clickable state pins
├── icons.js           # small hand-drawn-style SVG motifs (no image files needed)
└── data.js             # ALL mock content: states, places, local voices,
                         # plus the itinerary generator function
```

### Architecture, in short

- **No framework.** It's a tiny hash-based single-page app: `app.js` reads
  `window.location.hash`, decides which view to render, and swaps the
  `#app` div's `innerHTML`. This keeps the code readable for a demo/viva
  without hiding logic inside a build pipeline.
- **One click listener, not many.** Instead of re-binding click handlers
  after every re-render, `app.js` uses **event delegation**: a single
  `document.addEventListener('click', ...)` checks `data-nav`,
  `data-open-place`, `data-close-modal`, and `data-itinerary-tab`
  attributes on whatever was clicked. This is what makes buttons/cards
  "just work" across re-renders.
- **Data is separated from presentation.** `data.js` holds every fact,
  description, and badge label. `views.js` and `components.js` only know
  how to *lay out* that data — they never hardcode content. This is the
  main thing to point to if a professor asks about architecture.
- **The Verified vs. Local distinction is structural, not cosmetic.**
  Every place object in `data.js` is a monument/temple (→ always renders
  `VerifiedBadge()`) or a food/local item (→ always renders
  `LocalBadge()`). The component, not the content author, decides which
  badge appears — so the two categories can never get mixed up.
- **The itinerary is generated, not hand-written.** `generateItinerary()`
  in `data.js` takes selected interests + available days + a state's data
  pool and produces a day-by-day plan (see the "Plan My Visit" flow).
  It's a simple rotation, not a real optimiser — intentionally, since this
  is a prototype.

## Adding another state later

1. Open `data.js` and add a new entry to the `STATES` object, following
   the same shape as `telangana` (`monuments`, `temples`, `food`,
   `localVoices`, `tagline`, `intro`, `accent`, `mapLabel`).
2. Pick an `accent` value already styled in `styles.css`
   (`red`, `teal`, `saffron`, `green` — or add a new
   `.state-hero--yourcolor` rule).
3. Give it a `mapLabel: { x, y }` position (viewBox is `0 0 650 650` in
   `map.js`) so it gets a pin on the India map.
4. That's it — the state page, place cards, modal, Plan My Visit
   dropdown, Virtual Exploration hub, and Local Voices page all pull from
   `STATES` automatically. No other file needs to change.

If you just want a state to *appear* on the map without full data yet,
add it to `COMING_SOON_STATES` instead — it renders as a greyed-out,
non-clickable pin.

## Notes for the demo

- Images are custom-drawn SVG motifs (in `icons.js`), not stock photos —
  this avoids broken external image links during the demo and keeps a
  consistent, on-brand illustration style.
- The app never claims live traffic data, real-time temple timings, or a
  nationwide local network — travel times are explicitly labelled
  "Estimated," and the itinerary page carries a visible disclaimer, per
  the brief.
=======
# HeritageLens
>>>>>>> 112b21d4a8d61167b60d9d373239ce45b84e19ae
