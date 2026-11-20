import { STATES, COMING_SOON_STATES, generateItinerary } from "./data.js";
import { motifSVG } from "./icons.js";
import { renderIndiaMap } from "./map.js";
import {
  Navbar,
  Footer,
  SectionEyebrow,
  VerifiedBadge,
  LocalBadge,
  PlaceCard,
  LocalVoiceCard,
  StatePill,
} from "./components.js";

const AVAILABLE_STATES = Object.values(STATES);

// ---------------------------------------------------------------------------
// LANDING
// ---------------------------------------------------------------------------
export function LandingView() {
  return `
    ${Navbar("home")}
    <main>
      <section class="hero">
        <div class="hero-pattern" aria-hidden="true"></div>
        <div class="hero-inner">
          ${SectionEyebrow("Culture &amp; Heritage of India")}
          <h1 class="hero-title">Discover India Beyond<br/>the Tourist Map.</h1>
          <p class="hero-sub">
            Explore India's heritage, food and local stories — guided by verified
            history and the people who call these places home.
          </p>
          <div class="hero-cta-row">
            <a href="#/explore" data-nav="#/explore" class="btn btn--primary">Explore India</a>
            <a href="#/plan" data-nav="#/plan" class="btn btn--ghost">Plan My Visit</a>
          </div>
          <div class="hero-stamp-row">
            ${VerifiedBadge()}
            ${LocalBadge()}
          </div>
        </div>
      </section>

      <section class="section">
        <p class="section-kicker">One India. Thousands of stories.</p>
        <div class="feature-grid">
          <a href="#/explore" data-nav="#/explore" class="card feature-card">
            <div class="feature-icon">${motifSVG("compass", 36)}</div>
            <h3>Explore by State</h3>
            <p>Start with an interactive map and move from state to city to street.</p>
          </a>
          <a href="#/local" data-nav="#/local" class="card feature-card">
            <div class="feature-icon">${motifSVG("cup", 36)}</div>
            <h3>Local Voices</h3>
            <p>Lived-in recommendations from people who actually call these places home.</p>
          </a>
          <a href="#/virtual" data-nav="#/virtual" class="card feature-card">
            <div class="feature-icon">${motifSVG("globe", 36)}</div>
            <h3>Virtual Heritage</h3>
            <p>Not travelling yet? Explore monuments, temples and food from anywhere.</p>
          </a>
          <a href="#/plan" data-nav="#/plan" class="card feature-card">
            <div class="feature-icon">${motifSVG("market", 36)}</div>
            <h3>Personalised Itinerary</h3>
            <p>Tell us your dates and interests — get a flexible day-by-day plan.</p>
          </a>
        </div>
      </section>

      <section class="section section--map-teaser">
        <div class="map-teaser-grid">
          <div>
            ${SectionEyebrow("Explore India")}
            <h2 class="section-title">Every state has a story.<br/>Start with one.</h2>
            <p class="section-body">
              We're building HeritageLens state by state. Telangana, Maharashtra,
              Rajasthan and Kerala are fully explorable today — more states are on
              the way.
            </p>
            <a href="#/explore" data-nav="#/explore" class="btn btn--primary">Open the map</a>
          </div>
          <div class="map-teaser-art">${renderIndiaMap({})}</div>
        </div>
      </section>
    </main>
    ${Footer()}
  `;
}

// ---------------------------------------------------------------------------
// EXPLORE INDIA (MAP)
// ---------------------------------------------------------------------------
export function ExploreIndiaView() {
  return `
    ${Navbar("explore")}
    <main>
      <section class="section page-header">
        ${SectionEyebrow("Explore India")}
        <h1 class="section-title">Select a state to begin.</h1>
        <p class="section-body">
          Four states are fully explorable in this prototype. Others appear on
          the map and are marked as coming soon.
        </p>
      </section>
      <section class="section explore-map-section">
        <div class="explore-map-wrap">
          ${renderIndiaMap({})}
        </div>
        <div class="explore-state-list">
          <h3 class="explore-list-title">Fully explorable now</h3>
          <div class="state-pill-row">
            ${AVAILABLE_STATES.map((s) => StatePill(s)).join("")}
          </div>
          <h3 class="explore-list-title explore-list-title--muted">Coming soon</h3>
          <div class="state-pill-row">
            ${COMING_SOON_STATES.map(
              (s) => `<span class="state-pill state-pill--soon">${s.name}</span>`
            ).join("")}
          </div>
        </div>
      </section>
    </main>
    ${Footer()}
  `;
}

// ---------------------------------------------------------------------------
// STATE EXPLORATION PAGE
// ---------------------------------------------------------------------------
export function StateView(stateId) {
  const state = STATES[stateId];
  if (!state) return NotFoundView();

  return `
    ${Navbar("explore")}
    <main>
      <section class="state-hero state-hero--${state.accent}">
        <div class="state-hero-inner">
          ${SectionEyebrow(state.name)}
          <h1 class="section-title">Explore ${state.name}</h1>
          <p class="section-body">${state.intro}</p>
          <div class="hero-cta-row">
            <a href="#/plan" data-nav="#/plan" class="btn btn--primary">Plan My Visit</a>
            <a href="#/virtual" data-nav="#/virtual" class="btn btn--ghost">Explore Virtually</a>
          </div>
        </div>
      </section>

      <section class="section">
        ${SectionEyebrow("Food & Local Experiences")}
        <h2 class="section-title section-title--sm">Taste the everyday culture</h2>
        <div class="card-grid">
          ${state.food.map((p) => PlaceCard(stateId, p, "food")).join("")}
        </div>
      </section>

      <section class="section">
        ${SectionEyebrow("Monuments & Heritage")}
        <h2 class="section-title section-title--sm">Verified landmarks</h2>
        <div class="card-grid">
          ${state.monuments.map((p) => PlaceCard(stateId, p, "monument")).join("")}
        </div>
      </section>

      <section class="section">
        ${SectionEyebrow("Temples & Cultural Sites")}
        <h2 class="section-title section-title--sm">Sacred spaces</h2>
        <div class="card-grid">
          ${state.temples.map((p) => PlaceCard(stateId, p, "temple")).join("")}
        </div>
      </section>

      <section class="section section--muted">
        ${SectionEyebrow("From the Locals")}
        <h2 class="section-title section-title--sm">Perspectives you won't find in a guidebook</h2>
        <div class="card-grid card-grid--voices">
          ${state.localVoices.map((v) => LocalVoiceCard(v, state.city)).join("")}
        </div>
      </section>

      <section class="section other-states">
        <h3 class="explore-list-title">Explore another state</h3>
        <div class="state-pill-row">
          ${AVAILABLE_STATES.filter((s) => s.id !== stateId)
            .map((s) => StatePill(s))
            .join("")}
        </div>
      </section>
    </main>
    ${Footer()}
  `;
}

// ---------------------------------------------------------------------------
// PLAN MY VISIT
// ---------------------------------------------------------------------------
export function PlanView() {
  return `
    ${Navbar("plan")}
    <main>
      <section class="section page-header">
        ${SectionEyebrow("Plan My Visit")}
        <h1 class="section-title">Build your personalised itinerary.</h1>
        <p class="section-body">
          Tell us where you're staying and what you're interested in — we'll put
          together a flexible, day-by-day plan.
        </p>
      </section>

      <section class="section">
        <form class="plan-form card" id="plan-form">
          <div class="form-row">
            <label class="form-label" for="destination">Destination</label>
            <select class="form-input" id="destination" name="destination" required>
              ${AVAILABLE_STATES.map(
                (s) => `<option value="${s.id}">${s.city}, ${s.name}</option>`
              ).join("")}
            </select>
          </div>

          <div class="form-row">
            <label class="form-label" for="stay-area">Where are you staying?</label>
            <input class="form-input" id="stay-area" name="stayArea" type="text" placeholder="e.g. Banjara Hills" required />
          </div>

          <div class="form-row form-row--split">
            <div>
              <label class="form-label" for="arrival">Arrival</label>
              <input class="form-input" id="arrival" name="arrival" type="date" required />
            </div>
            <div>
              <label class="form-label" for="departure">Departure</label>
              <input class="form-input" id="departure" name="departure" type="date" required />
            </div>
          </div>

          <div class="form-row">
            <span class="form-label">Available days</span>
            <div id="available-days" class="available-days-chips">
              <span class="chip chip--muted">Select arrival &amp; departure dates</span>
            </div>
          </div>

          <div class="form-row">
            <span class="form-label">Interests</span>
            <div class="interest-checks">
              <label class="checkbox-pill">
                <input type="checkbox" name="interest" value="monuments" checked />
                <span>${motifSVG("fort", 20)} Monuments</span>
              </label>
              <label class="checkbox-pill">
                <input type="checkbox" name="interest" value="temples" checked />
                <span>${motifSVG("temple", 20)} Temples</span>
              </label>
              <label class="checkbox-pill">
                <input type="checkbox" name="interest" value="food" checked />
                <span>${motifSVG("bowl", 20)} Food &amp; Local Experiences</span>
              </label>
            </div>
          </div>

          <button type="submit" class="btn btn--primary btn--wide">Generate Itinerary</button>
          <p class="form-note" id="plan-error"></p>
        </form>
      </section>
    </main>
    ${Footer()}
  `;
}

// ---------------------------------------------------------------------------
// ITINERARY RESULT
// ---------------------------------------------------------------------------
export function ItineraryView(itineraryState) {
  if (!itineraryState) {
    return `
      ${Navbar("plan")}
      <main>
        <section class="section page-header">
          ${SectionEyebrow("Itinerary")}
          <h1 class="section-title">No itinerary yet.</h1>
          <p class="section-body">Fill in the Plan My Visit form to generate one.</p>
          <a href="#/plan" data-nav="#/plan" class="btn btn--primary">Plan My Visit</a>
        </section>
      </main>
      ${Footer()}
    `;
  }

  const { stateId, stayArea, plan } = itineraryState;
  const state = STATES[stateId];

  return `
    ${Navbar("plan")}
    <main>
      <section class="section page-header">
        ${SectionEyebrow("Your Itinerary")}
        <h1 class="section-title">${state.city}, ${state.name}</h1>
        <p class="section-body">Staying near ${stayArea} · ${plan.length} day${plan.length > 1 ? "s" : ""} planned</p>
      </section>

      <section class="section">
        <div class="itinerary-tabs" role="tablist">
          ${plan
            .map(
              (day, i) => `
            <button class="itinerary-tab ${i === 0 ? "itinerary-tab--active" : ""}" data-itinerary-tab="${i}">
              Day ${i + 1}
            </button>`
            )
            .join("")}
        </div>

        ${plan
          .map(
            (day, i) => `
          <div class="itinerary-panel ${i === 0 ? "itinerary-panel--active" : ""}" data-itinerary-panel="${i}">
            <div class="itinerary-panel-head">
              <span class="chip chip--accent">DAY ${i + 1} — ${day.theme}</span>
              <span class="itinerary-date">${day.date}</span>
            </div>
            <ol class="itinerary-stops">
              ${day.stops
                .map(
                  (stop, si) => `
                <li class="itinerary-stop">
                  <div class="itinerary-stop-index">${si + 1}</div>
                  <div class="itinerary-stop-art">${motifSVG(stop.motif, 36)}</div>
                  <div class="itinerary-stop-body">
                    <h4>${stop.name}</h4>
                    <p class="itinerary-stop-meta">${stop.travelTime}</p>
                    <p class="itinerary-stop-meta">
                      ${stop.duration ? `Visit duration: ${stop.duration}` : "Flexible visit"}
                      ${stop.timings ? ` · Hours: ${stop.timings}` : ""}
                    </p>
                  </div>
                </li>`
                )
                .join("")}
            </ol>
          </div>`
          )
          .join("")}

        <p class="itinerary-disclaimer">
          Itinerary is flexible and may change with traffic, timings and local
          conditions. Travel times shown are estimates for this prototype.
        </p>

        <div class="hero-cta-row">
          <a href="#/plan" data-nav="#/plan" class="btn btn--ghost">Adjust preferences</a>
          <a href="#/state/${stateId}" data-nav="#/state/${stateId}" class="btn btn--ghost">Back to ${state.name}</a>
        </div>
      </section>
    </main>
    ${Footer()}
  `;
}

// ---------------------------------------------------------------------------
// VIRTUAL EXPLORATION
// ---------------------------------------------------------------------------
export function VirtualHubView() {
  return `
    ${Navbar("virtual")}
    <main>
      <section class="section page-header">
        ${SectionEyebrow("Virtual Exploration")}
        <h1 class="section-title">Not visiting yet? Explore from anywhere.</h1>
        <p class="section-body">
          Pick a city to explore its heritage virtually — monuments, temples and
          food culture, without leaving your screen.
        </p>
      </section>
      <section class="section">
        <div class="card-grid">
          ${AVAILABLE_STATES.map(
            (s) => `
            <button class="card virtual-city-card" data-nav="#/virtual/${s.id}">
              <div class="place-card-art place-card-art--globe">${motifSVG("globe", 44)}</div>
              <h3 class="place-card-title">Explore ${s.city} Virtually</h3>
              <p class="place-card-sub">${s.tagline}</p>
              <span class="btn btn--ghost btn--sm">Explore →</span>
            </button>`
          ).join("")}
        </div>
      </section>
    </main>
    ${Footer()}
  `;
}

export function VirtualCityView(stateId) {
  const state = STATES[stateId];
  if (!state) return NotFoundView();

  return `
    ${Navbar("virtual")}
    <main>
      <section class="state-hero state-hero--${state.accent}">
        <div class="state-hero-inner">
          ${SectionEyebrow(`Virtual · ${state.city}`)}
          <h1 class="section-title">Explore ${state.city} Virtually</h1>
          <p class="section-body">${state.intro}</p>
          <p class="form-note">
            This is a simulated preview using illustrated cards for the prototype
            — not a live 360° environment.
          </p>
        </div>
      </section>

      <section class="section">
        ${SectionEyebrow("Monuments & Heritage")}
        <div class="card-grid">
          ${state.monuments.map((p) => PlaceCard(stateId, p, "monument")).join("")}
        </div>
      </section>
      <section class="section">
        ${SectionEyebrow("Temples & Cultural Sites")}
        <div class="card-grid">
          ${state.temples.map((p) => PlaceCard(stateId, p, "temple")).join("")}
        </div>
      </section>
      <section class="section">
        ${SectionEyebrow("Food & Local Culture")}
        <div class="card-grid">
          ${state.food.map((p) => PlaceCard(stateId, p, "food")).join("")}
        </div>
      </section>
    </main>
    ${Footer()}
  `;
}

// ---------------------------------------------------------------------------
// LOCAL VOICES (aggregate)
// ---------------------------------------------------------------------------
export function LocalVoicesView() {
  return `
    ${Navbar("local")}
    <main>
      <section class="section page-header">
        ${SectionEyebrow("From the Locals")}
        <h1 class="section-title">Local Perspective, clearly labelled.</h1>
        <p class="section-body">
          Historical facts are shown as verified information. Everything below
          is a lived, local point of view — not an official historical record.
        </p>
      </section>
      ${AVAILABLE_STATES.map(
        (state) => `
        <section class="section">
          ${SectionEyebrow(`${state.name} · ${state.city}`)}
          <div class="card-grid card-grid--voices">
            ${state.localVoices.map((v) => LocalVoiceCard(v, state.city)).join("")}
          </div>
        </section>`
      ).join("")}
    </main>
    ${Footer()}
  `;
}

export function NotFoundView() {
  return `
    ${Navbar()}
    <main>
      <section class="section page-header">
        <h1 class="section-title">Page not found</h1>
        <p class="section-body">This part of HeritageLens isn't in the prototype yet.</p>
        <a href="#/" data-nav="#/" class="btn btn--primary">Back home</a>
      </section>
    </main>
    ${Footer()}
  `;
}
