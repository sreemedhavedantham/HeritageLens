import {
  LandingView,
  ExploreIndiaView,
  StateView,
  PlanView,
  ItineraryView,
  VirtualHubView,
  VirtualCityView,
  LocalVoicesView,
  NotFoundView,
} from "./views.js";
import { PlaceModalContent } from "./components.js";
import { generateItinerary, STATES } from "./data.js";

const app = document.getElementById("app");
const modalRoot = document.getElementById("modal-root");

let lastItinerary = null; // in-memory demo state, no backend needed

function parseRoute(hash) {
  const path = (hash || "#/").replace(/^#/, "");
  const segments = path.split("/").filter(Boolean);

  if (segments.length === 0) return { view: "home" };
  if (segments[0] === "explore") return { view: "explore" };
  if (segments[0] === "state" && segments[1]) return { view: "state", id: segments[1] };
  if (segments[0] === "plan") return { view: "plan" };
  if (segments[0] === "itinerary") return { view: "itinerary" };
  if (segments[0] === "virtual" && segments[1]) return { view: "virtual-city", id: segments[1] };
  if (segments[0] === "virtual") return { view: "virtual" };
  if (segments[0] === "local") return { view: "local" };
  return { view: "404" };
}

function render() {
  const route = parseRoute(window.location.hash);
  let html = "";

  switch (route.view) {
    case "home":
      html = LandingView();
      break;
    case "explore":
      html = ExploreIndiaView();
      break;
    case "state":
      html = StateView(route.id);
      break;
    case "plan":
      html = PlanView();
      break;
    case "itinerary":
      html = ItineraryView(lastItinerary);
      break;
    case "virtual":
      html = VirtualHubView();
      break;
    case "virtual-city":
      html = VirtualCityView(route.id);
      break;
    case "local":
      html = LocalVoicesView();
      break;
    default:
      html = NotFoundView();
  }

  app.innerHTML = html;
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  wirePlanForm();
}

// ---------------------------------------------------------------------------
// Navigation (event delegation)
// ---------------------------------------------------------------------------
document.addEventListener("click", (e) => {
  const navEl = e.target.closest("[data-nav]");
  if (navEl) {
    e.preventDefault();
    const target = navEl.getAttribute("data-nav");
    if (window.location.hash === target) {
      render();
    } else {
      window.location.hash = target;
    }
    return;
  }

  const placeEl = e.target.closest("[data-open-place]");
  if (placeEl) {
    e.preventDefault();
    openPlaceModal(placeEl.dataset.state, placeEl.dataset.place);
    return;
  }

  const closeEl = e.target.closest("[data-close-modal]");
  if (closeEl) {
    e.preventDefault();
    closeModal();
    return;
  }

  const tabEl = e.target.closest("[data-itinerary-tab]");
  if (tabEl) {
    const index = tabEl.dataset.itineraryTab;
    document
      .querySelectorAll("[data-itinerary-tab]")
      .forEach((el) => el.classList.toggle("itinerary-tab--active", el === tabEl));
    document
      .querySelectorAll("[data-itinerary-panel]")
      .forEach((el) =>
        el.classList.toggle("itinerary-panel--active", el.dataset.itineraryPanel === index)
      );
    return;
  }
});

window.addEventListener("hashchange", render);

// ---------------------------------------------------------------------------
// Place detail modal
// ---------------------------------------------------------------------------
function openPlaceModal(stateId, placeId) {
  modalRoot.innerHTML = `
    <div class="modal-backdrop" data-close-modal>
      <div class="modal-card" role="dialog" aria-modal="true">
        <button class="modal-close" data-close-modal aria-label="Close">✕</button>
        ${PlaceModalContent(stateId, placeId)}
      </div>
    </div>
  `;
  modalRoot.classList.add("modal-root--open");
  document.body.classList.add("no-scroll");
}

function closeModal() {
  modalRoot.classList.remove("modal-root--open");
  document.body.classList.remove("no-scroll");
  modalRoot.innerHTML = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ---------------------------------------------------------------------------
// Plan My Visit form logic
// ---------------------------------------------------------------------------
function wirePlanForm() {
  const form = document.getElementById("plan-form");
  if (!form) return;

  const arrivalInput = form.querySelector("#arrival");
  const departureInput = form.querySelector("#departure");
  const chipsWrap = document.getElementById("available-days");
  const errorEl = document.getElementById("plan-error");

  function computeAvailableDays() {
    const arrival = arrivalInput.value;
    const departure = departureInput.value;
    if (!arrival || !departure) {
      chipsWrap.innerHTML = `<span class="chip chip--muted">Select arrival &amp; departure dates</span>`;
      return [];
    }
    const start = new Date(arrival);
    const end = new Date(departure);
    if (end <= start) {
      chipsWrap.innerHTML = `<span class="chip chip--muted">Departure must be after arrival</span>`;
      return [];
    }
    // Available days = day after arrival through departure (arrival day is
    // for settling in — a small realistic touch for the demo).
    const days = [];
    const cursor = new Date(start);
    cursor.setDate(cursor.getDate() + 1);
    while (cursor <= end) {
      days.push(
        cursor.toLocaleDateString("en-IN", { day: "numeric", month: "short" })
      );
      cursor.setDate(cursor.getDate() + 1);
    }
    chipsWrap.innerHTML = days.length
      ? days.map((d) => `<span class="chip">${d}</span>`).join("")
      : `<span class="chip chip--muted">No full days available</span>`;
    return days;
  }

  arrivalInput.addEventListener("change", computeAvailableDays);
  departureInput.addEventListener("change", computeAvailableDays);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    errorEl.textContent = "";

    const days = computeAvailableDays();
    if (!days.length) {
      errorEl.textContent = "Please choose valid arrival and departure dates first.";
      return;
    }

    const destination = form.destination.value;
    const stayArea = form.stayArea.value.trim() || "your stay";
    const interestBoxes = Array.from(form.querySelectorAll('input[name="interest"]:checked')).map(
      (i) => i.value
    );
    if (!interestBoxes.length) {
      errorEl.textContent = "Select at least one interest to build your itinerary.";
      return;
    }
    const interests = {
      monuments: interestBoxes.includes("monuments"),
      temples: interestBoxes.includes("temples"),
      food: interestBoxes.includes("food"),
    };

    const plan = generateItinerary(destination, { days, interests, stayArea });

    lastItinerary = { stateId: destination, stayArea, plan };
    window.location.hash = "#/itinerary";
  });
}

render();
