import { motifSVG } from "./icons.js";
import { STATES, getCategoryOfPlace } from "./data.js";

export function Navbar(active = "") {
  const links = [
    { href: "#/", label: "Home", key: "home" },
    { href: "#/explore", label: "Explore India", key: "explore" },
    { href: "#/plan", label: "Plan My Visit", key: "plan" },
    { href: "#/virtual", label: "Virtual Exploration", key: "virtual" },
    { href: "#/local", label: "Local Voices", key: "local" },
  ];
  return `
    <header class="nav">
      <div class="nav-inner">
        <a href="#/" class="nav-brand" data-nav="#/">
          <span class="nav-brand-mark">${motifSVG("compass", 26)}</span>
          <span class="nav-brand-text">HeritageLens</span>
        </a>
        <nav class="nav-links">
          ${links
            .map(
              (l) => `<a href="${l.href}" data-nav="${l.href}" class="nav-link ${
                active === l.key ? "nav-link--active" : ""
              }">${l.label}</a>`
            )
            .join("")}
        </nav>
      </div>
    </header>
  `;
}

export function Footer() {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="nav-brand-mark">${motifSVG("compass", 22)}</span>
          <span class="nav-brand-text">HeritageLens</span>
        </div>
        <p class="footer-tag">One India. Thousands of stories.</p>
        <p class="footer-note">
          Prototype for an ideathon demo — all content shown is mock/demo data
          for illustration, not a production travel service.
        </p>
      </div>
    </footer>
  `;
}

export function SectionEyebrow(text) {
  return `<div class="eyebrow"><span class="eyebrow-rule"></span>${text}</div>`;
}

export function VerifiedBadge() {
  return `<span class="badge badge--verified">${motifSVG("compass", 14)} Verified Heritage Information</span>`;
}

export function LocalBadge() {
  return `<span class="badge badge--local">${motifSVG("compass", 14)} Local Perspective</span>`;
}

export function PlaceCard(stateId, place, category) {
  const badge = category === "food" ? LocalBadge() : VerifiedBadge();
  const sub =
    category === "food"
      ? place.description
      : place.location;
  return `
    <button class="card place-card" data-open-place data-state="${stateId}" data-place="${place.id}">
      <div class="place-card-art place-card-art--${place.motif}">
        ${motifSVG(place.motif, 48)}
      </div>
      <div class="place-card-body">
        <h3 class="place-card-title">${place.name}</h3>
        <p class="place-card-sub">${sub}</p>
        ${badge}
      </div>
    </button>
  `;
}

export function PlaceModalContent(stateId, placeId) {
  const state = STATES[stateId];
  const category = getCategoryOfPlace(stateId, placeId);
  const pool =
    category === "monument" ? state.monuments : category === "temple" ? state.temples : state.food;
  const place = pool.find((p) => p.id === placeId);
  if (!place) return "";

  if (category === "food") {
    return `
      <div class="modal-art modal-art--${place.motif}">${motifSVG(place.motif, 64)}</div>
      <div class="modal-body">
        ${LocalBadge()}
        <h2 class="modal-title">${place.name}</h2>
        <p class="modal-text">${place.description}</p>
        <div class="modal-divider"></div>
        <h4 class="modal-label">Why locals recommend it</h4>
        <p class="modal-text modal-text--local">${place.whyLocals}</p>
      </div>
    `;
  }

  return `
    <div class="modal-art modal-art--${place.motif}">${motifSVG(place.motif, 64)}</div>
    <div class="modal-body">
      ${VerifiedBadge()}
      <h2 class="modal-title">${place.name}</h2>
      <p class="modal-text">${place.significance}</p>
      <div class="modal-divider"></div>
      <div class="modal-meta-grid">
        <div>
          <h4 class="modal-label">Location</h4>
          <p class="modal-meta-value">${place.location}</p>
        </div>
        <div>
          <h4 class="modal-label">Timings</h4>
          <p class="modal-meta-value">${place.timings}</p>
        </div>
        <div>
          <h4 class="modal-label">Approx. visit duration</h4>
          <p class="modal-meta-value">${place.duration}</p>
        </div>
      </div>
    </div>
  `;
}

export function LocalVoiceCard(v, cityLabel) {
  return `
    <div class="card voice-card">
      <span class="voice-mark">&ldquo;</span>
      <p class="voice-question">${v.question}</p>
      <p class="voice-answer">${v.answer}</p>
      <div class="voice-footer">
        ${LocalBadge()}
        <span class="voice-contributor">Local contributor — ${cityLabel}</span>
      </div>
    </div>
  `;
}

export function StatePill(state, selected) {
  return `
    <button class="state-pill ${selected ? "state-pill--active" : ""}" data-nav="#/state/${state.id}">
      ${state.name}
    </button>
  `;
}
