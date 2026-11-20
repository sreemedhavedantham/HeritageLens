import { states } from "https://esm.sh/vardhan-maps@0.6.0/data";
import { STATES } from "./data.js";

const WIDTH = 650;
const HEIGHT = 700;
const PADDING = 12;

const STATE_COLORS = [
  "#DDAFA8", // dusty terracotta
  "#E6D1A5", // soft ochre
  "#AFC4A3", // sage
  "#A9C9CC", // muted teal
  "#B9B2CE", // soft lavender
  "#D7B0C4", // dusty rose
  "#AFC2D3", // powder blue
  "#D9C2A4", // warm sand
  "#B7C6B8", // eucalyptus
  "#D6B5A2", // muted clay
];

function normalizeName(name = "") {
  return name.toLowerCase().replace(/[^a-z]/g, "");
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function getRings(feature) {
  const geometry = feature.geometry;

  if (!geometry) return [];

  if (geometry.type === "Polygon") {
    return geometry.coordinates;
  }

  if (geometry.type === "MultiPolygon") {
    return geometry.coordinates.flat();
  }

  return [];
}

function getFeatureName(feature) {
  return (
    feature.properties?.name ??
    feature.properties?.NAME_1 ??
    feature.properties?.st_nm ??
    feature.properties?.state ??
    "Unknown state"
  );
}

function getAllCoordinates(features) {
  return features.flatMap((feature) => getRings(feature).flat());
}

function createProjection(features) {
  const coordinates = getAllCoordinates(features);

  const averageLatitude =
    coordinates.reduce((total, point) => total + point[1], 0) /
    coordinates.length;

  const longitudeScale = Math.cos((averageLatitude * Math.PI) / 180);

  const points = coordinates.map(([longitude, latitude]) => [
    longitude * longitudeScale,
    latitude,
  ]);

  const minX = Math.min(...points.map(([x]) => x));
  const maxX = Math.max(...points.map(([x]) => x));
  const minY = Math.min(...points.map(([, y]) => y));
  const maxY = Math.max(...points.map(([, y]) => y));

  const scale = Math.min(
    (WIDTH - PADDING * 2) / (maxX - minX),
    (HEIGHT - PADDING * 2) / (maxY - minY)
  );

  const drawnWidth = (maxX - minX) * scale;
  const drawnHeight = (maxY - minY) * scale;
  const offsetX = (WIDTH - drawnWidth) / 2;
  const offsetY = (HEIGHT - drawnHeight) / 2;

  return ([longitude, latitude]) => {
    const x = longitude * longitudeScale;

    return [
      offsetX + (x - minX) * scale,
      offsetY + (maxY - latitude) * scale,
    ];
  };
}

function makePath(feature, project) {
  return getRings(feature)
    .map((ring) =>
      ring
        .map((coordinate, index) => {
          const [x, y] = project(coordinate);
          return `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
        })
        .join(" ") + " Z"
    )
    .join(" ");
}

function makeLabel(feature, project) {
  const rings = getRings(feature).filter((ring) => ring.length > 3);

  if (!rings.length) return "";

  const largestRing = rings.reduce((largest, ring) =>
    ring.length > largest.length ? ring : largest
  );

  const points = largestRing.slice(0, -1).map(project);
  const x = points.reduce((sum, point) => sum + point[0], 0) / points.length;
  const y = points.reduce((sum, point) => sum + point[1], 0) / points.length;

  return `
    <text class="map-state-label" x="${x.toFixed(1)}" y="${y.toFixed(1)}">
      ${escapeHTML(getFeatureName(feature))}
    </text>
  `;
}

export function renderIndiaMap() {
  const features = states.features;
  const project = createProjection(features);

  const shapes = features
    .map((feature, index) => {
      const name = getFeatureName(feature);

      const matchingState = Object.values(STATES).find(
        (state) => normalizeName(state.name) === normalizeName(name)
      );

      const color = STATE_COLORS[index % STATE_COLORS.length];
      const path = makePath(feature, project);

      return `
        <path
          class="map-state${matchingState ? " map-state--available" : ""}"
          d="${path}"
          fill="${color}"
          ${
            matchingState
              ? `data-nav="#/state/${matchingState.id}" tabindex="0" role="link"`
              : ""
          }
          aria-label="${
            matchingState
              ? `Explore ${escapeHTML(name)}`
              : escapeHTML(name)
          }"
        >
          <title>${escapeHTML(name)}</title>
        </path>
        ${makeLabel(feature, project)}
      `;
    })
    .join("");

  return `
    <div class="india-map-container">
      <svg
        class="india-map"
        viewBox="0 0 ${WIDTH} ${HEIGHT}"
        role="img"
        aria-label="Map of India showing state and union-territory boundaries"
      >
        ${shapes}
      </svg>
      <small class="india-map-attribution">
        Map data © OpenStreetMap contributors
      </small>
    </div>
  `;
}