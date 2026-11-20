// ---------------------------------------------------------------------------
// HeritageLens — mock/demo data
// All content below is static demo data for an ideathon prototype.
// Historical descriptions are intentionally kept short and general — this is
// NOT a verified encyclopedia, and the app never claims otherwise.
// ---------------------------------------------------------------------------

export const STATES = {
  telangana: {
    id: "telangana",
    name: "Telangana",
    city: "Hyderabad",
    tagline: "The City of Nizams, Biryani & Baroque Domes",
    intro:
      "Telangana blends Qutb Shahi and Nizami grandeur with deep Telugu temple traditions and one of India's most celebrated food cultures. Hyderabad's Old City hums with pearl markets, minarets and centuries of layered history.",
    accent: "red", // heritage-red
    mapLabel: { x: 545, y: 330 },
    available: true,
    monuments: [
      {
        id: "charminar",
        name: "Charminar",
        motif: "arch",
        location: "Old City, Hyderabad",
        significance:
          "Built in 1591 by Muhammad Quli Qutb Shah, the Charminar's four grand arches and minarets have anchored Hyderabad's Old City for over four centuries.",
        timings: "9:00 AM – 5:30 PM",
        duration: "45–60 min",
      },
      {
        id: "golconda-fort",
        name: "Golconda Fort",
        motif: "fort",
        location: "Golconda, Hyderabad",
        significance:
          "Once a stronghold of the Qutb Shahi dynasty and a hub of the diamond trade, Golconda Fort is known for its acoustic engineering and sweeping hilltop views.",
        timings: "8:00 AM – 5:30 PM",
        duration: "2–3 hrs",
      },
      {
        id: "chowmahalla-palace",
        name: "Chowmahalla Palace",
        motif: "palace",
        location: "Khilwat, Hyderabad",
        significance:
          "The ceremonial seat of the Nizams of Hyderabad, Chowmahalla Palace houses royal courtyards, vintage cars and a chandelier-lit durbar hall.",
        timings: "10:00 AM – 5:00 PM",
        duration: "1–1.5 hrs",
      },
    ],
    temples: [
      {
        id: "birla-mandir",
        name: "Birla Mandir",
        motif: "temple",
        location: "Naubath Pahad, Hyderabad",
        significance:
          "Built entirely in white marble overlooking Hussain Sagar, this temple was completed in 1976 and blends South Indian, Rajasthani and Utkal styles.",
        timings: "7:00 AM – 12:00 PM, 3:00 PM – 9:00 PM",
        duration: "30–45 min",
      },
      {
        id: "peddamma-temple",
        name: "Peddamma Temple",
        motif: "temple",
        location: "Jubilee Hills, Hyderabad",
        significance:
          "A revered shrine to the village deity Peddamma, especially significant during the Bonalu festival honouring the goddess.",
        timings: "6:00 AM – 8:00 PM",
        duration: "20–30 min",
      },
      {
        id: "swarnagiri-temple",
        name: "Swarnagiri Temple",
        motif: "temple",
        location: "Hyderabad outskirts",
        significance:
          "A hillside shrine known locally for its quiet courtyards — a peaceful stop away from the city's bustle.",
        timings: "6:00 AM – 8:00 PM",
        duration: "20–30 min",
      },
    ],
    food: [
      {
        id: "biryani",
        name: "Hyderabadi Biryani",
        motif: "bowl",
        description:
          "Dum-cooked basmati rice layered with marinated meat and saffron, sealed and slow-cooked — Hyderabad's most iconic dish.",
        whyLocals:
          "Locals will tell you the best biryani isn't always at the famous chains — smaller neighbourhood joints often guard family recipes passed down for generations.",
      },
      {
        id: "haleem",
        name: "Haleem",
        motif: "bowl",
        description:
          "A slow-cooked stew of wheat, lentils and meat, pounded to a rich paste — traditionally prepared during Ramzan.",
        whyLocals:
          "Locals wait in line at Old City stalls the moment Haleem season begins, comparing notes on whose pot is thickest this year.",
      },
      {
        id: "irani-chai",
        name: "Irani Chai",
        motif: "cup",
        description:
          "Strong, milky tea served in Hyderabad's Irani cafés, best paired with Osmania biscuits.",
        whyLocals:
          "Ask a local and they'll have a favourite Irani café corner — usually one your map app has never heard of.",
      },
      {
        id: "old-city-food-street",
        name: "Old City Food Streets",
        motif: "market",
        description:
          "The lanes around Charminar turn into an open-air kitchen after sunset, with kebabs, fruit chaat and sweets sold from stalls.",
        whyLocals:
          "Locals recommend going hungry and going late — the street really wakes up after 8 PM.",
      },
    ],
    localVoices: [
      {
        question: "Where would a local take you for authentic Hyderabad food?",
        answer:
          "Skip the queue outside the famous names — ask any auto driver near Madina Circle where they eat, and follow them.",
      },
      {
        question: "What's a place tourists often miss?",
        answer:
          "The quiet stepwells tucked behind Golconda rarely make it onto itineraries, but they're some of the calmest spots in the city.",
      },
      {
        question: "What should a first-time visitor know?",
        answer:
          "Meals here run late — dinner spots really fill up after 9 PM, so don't plan an early night if you want the full food experience.",
      },
      {
        question: "Any everyday ritual visitors should try?",
        answer:
          "Start a morning the way many here do — a cutting chai and Osmania biscuit at a corner Irani café before the city gets busy.",
      },
    ],
  },

  maharashtra: {
    id: "maharashtra",
    name: "Maharashtra",
    city: "Mumbai",
    tagline: "Forts, Konkan Coast & Maratha Legacy",
    intro:
      "From Shivaji's hill forts to Mumbai's colonial-era landmarks and the Ajanta-Ellora cave complexes, Maharashtra layers Maratha valour, coastal Konkan culture and centuries of trade history.",
    accent: "teal",
    mapLabel: { x: 430, y: 300 },
    available: true,
    monuments: [
      {
        id: "gateway-of-india",
        name: "Gateway of India",
        motif: "arch",
        location: "Apollo Bunder, Mumbai",
        significance:
          "Completed in 1924 to commemorate a royal visit, this basalt archway has become Mumbai's most recognised waterfront landmark.",
        timings: "Open 24 hours (viewing area)",
        duration: "30–45 min",
      },
      {
        id: "ajanta-ellora",
        name: "Ajanta & Ellora Caves",
        motif: "fort",
        location: "Near Aurangabad",
        significance:
          "Rock-cut cave complexes carved between the 2nd century BCE and 10th century CE, featuring Buddhist, Hindu and Jain monastic art.",
        timings: "9:00 AM – 5:00 PM (closed Mondays)",
        duration: "3–4 hrs",
      },
    ],
    temples: [
      {
        id: "siddhivinayak",
        name: "Siddhivinayak Temple",
        motif: "temple",
        location: "Prabhadevi, Mumbai",
        significance:
          "One of Mumbai's most visited shrines to Lord Ganesha, drawing devotees from across the city, especially on Tuesdays.",
        timings: "5:30 AM – 10:00 PM",
        duration: "30–45 min",
      },
      {
        id: "trimbakeshwar",
        name: "Trimbakeshwar Temple",
        motif: "temple",
        location: "Nashik",
        significance:
          "One of the twelve Jyotirlingas of Shiva, and the source of the sacred Godavari river.",
        timings: "5:30 AM – 9:00 PM",
        duration: "45–60 min",
      },
    ],
    food: [
      {
        id: "vada-pav",
        name: "Vada Pav",
        motif: "bowl",
        description:
          "A spiced potato fritter tucked into a soft bun with chutneys — Mumbai's everyday street snack.",
        whyLocals:
          "Locals have a favourite stall near their commute, not a famous chain — ask around your neighbourhood, not the guidebook.",
      },
      {
        id: "misal-pav",
        name: "Misal Pav",
        motif: "bowl",
        description:
          "A fiery sprouted-lentil curry topped with farsan, onions and lime, served with bread rolls.",
        whyLocals:
          "The best misal is judged by heat and freshness of the topping — locals order it 'extra tarri' if they can handle the spice.",
      },
    ],
    localVoices: [
      {
        question: "What's a place tourists often miss?",
        answer:
          "The Irani cafés tucked into old Fort-area lanes are quietly disappearing — worth seeking out before they're gone.",
      },
      {
        question: "What should a first-time visitor know?",
        answer:
          "Local trains are the fastest way around the city, but avoid rush hour if you're carrying luggage.",
      },
    ],
  },

  rajasthan: {
    id: "rajasthan",
    name: "Rajasthan",
    city: "Jaipur",
    tagline: "Desert Forts, Painted Havelis & Royal Courts",
    intro:
      "Rajasthan's fortified cities and desert palaces trace centuries of Rajput valour, Mughal exchange and vibrant folk tradition, from Jaipur's pink sandstone streets to the dunes beyond Jaisalmer.",
    accent: "saffron",
    mapLabel: { x: 300, y: 190 },
    available: true,
    monuments: [
      {
        id: "amber-fort",
        name: "Amber Fort",
        motif: "fort",
        location: "Amer, Jaipur",
        significance:
          "A hilltop fort-palace built from pale sandstone and marble, known for its mirrored Sheesh Mahal and elephant-gate courtyards.",
        timings: "8:00 AM – 5:30 PM",
        duration: "2–3 hrs",
      },
      {
        id: "hawa-mahal",
        name: "Hawa Mahal",
        motif: "palace",
        location: "Jaipur Old City",
        significance:
          "Built in 1799, this honeycombed pink sandstone façade let royal women observe street life while remaining unseen.",
        timings: "9:00 AM – 4:30 PM",
        duration: "30–45 min",
      },
    ],
    temples: [
      {
        id: "karni-mata",
        name: "Karni Mata Temple",
        motif: "temple",
        location: "Deshnoke, Bikaner",
        significance:
          "A temple dedicated to the sage-warrior Karni Mata, notable for the sacred kabbas (rats) that live within its halls.",
        timings: "5:00 AM – 10:00 PM",
        duration: "30–45 min",
      },
      {
        id: "dilwara-temples",
        name: "Dilwara Temples",
        motif: "temple",
        location: "Mount Abu",
        significance:
          "A cluster of Jain temples celebrated for marble carvings so fine the stone appears almost translucent.",
        timings: "12:00 PM – 5:00 PM (for non-Jain visitors)",
        duration: "45–60 min",
      },
    ],
    food: [
      {
        id: "dal-baati-churma",
        name: "Dal Baati Churma",
        motif: "bowl",
        description:
          "Baked wheat rolls served with spiced lentils and a sweet crumbled-wheat churma — a classic Rajasthani thali centrepiece.",
        whyLocals:
          "Locals say a good baati should crack, not crumble, when you press it — a small test worth trying yourself.",
      },
      {
        id: "ghewar",
        name: "Ghewar",
        motif: "bowl",
        description:
          "A disc-shaped, honeycombed sweet soaked in sugar syrup, traditionally made during the monsoon and festival season.",
        whyLocals:
          "Ask a local which sweet shop makes theirs fresh that morning — texture matters more than the name on the signboard.",
      },
    ],
    localVoices: [
      {
        question: "What's a place tourists often miss?",
        answer:
          "The stepwells scattered around Jaipur's old neighbourhoods are cool, quiet and almost empty compared to the forts.",
      },
      {
        question: "What should a first-time visitor know?",
        answer:
          "Desert evenings get cold fast, even after a hot afternoon — pack a layer if you're heading out post-sunset.",
      },
    ],
  },

  kerala: {
    id: "kerala",
    name: "Kerala",
    city: "Kochi",
    tagline: "Backwaters, Spice Trade & Coastal Traditions",
    intro:
      "Kerala's palm-fringed backwaters, spice-trade harbours and classical art forms like Kathakali reflect a coastal culture shaped by centuries of maritime trade and monsoon rhythms.",
    accent: "green",
    mapLabel: { x: 340, y: 470 },
    available: true,
    monuments: [
      {
        id: "mattancherry-palace",
        name: "Mattancherry Palace",
        motif: "palace",
        location: "Kochi",
        significance:
          "A 16th-century palace, later renovated by the Dutch, known for its Kerala mural paintings depicting Hindu epics.",
        timings: "10:00 AM – 5:00 PM (closed Fridays)",
        duration: "45–60 min",
      },
      {
        id: "bekal-fort",
        name: "Bekal Fort",
        motif: "fort",
        location: "Kasaragod",
        significance:
          "A keyhole-shaped coastal fort built in the 17th century, offering sweeping views over the Arabian Sea.",
        timings: "8:00 AM – 5:30 PM",
        duration: "1–1.5 hrs",
      },
    ],
    temples: [
      {
        id: "padmanabhaswamy",
        name: "Padmanabhaswamy Temple",
        motif: "temple",
        location: "Thiruvananthapuram",
        significance:
          "An ancient temple dedicated to Vishnu, built in a distinctive Dravidian style with a towering gopuram.",
        timings: "3:30 AM – 12:00 PM, 5:00 PM – 7:20 PM",
        duration: "30–45 min",
      },
      {
        id: "guruvayur-temple",
        name: "Guruvayur Temple",
        motif: "temple",
        location: "Guruvayur, Thrissur",
        significance:
          "One of Kerala's most significant Krishna temples, at the centre of daily rituals and major festival processions.",
        timings: "3:00 AM – 12:00 PM, 4:30 PM – 9:00 PM",
        duration: "30–45 min",
      },
    ],
    food: [
      {
        id: "appam-stew",
        name: "Appam with Stew",
        motif: "bowl",
        description:
          "Lacy, fermented rice-and-coconut pancakes served with a mild coconut-milk vegetable or meat stew.",
        whyLocals:
          "Locals say the lace-edge and soft centre are the real test of a good appam — worth ordering a second to compare.",
      },
      {
        id: "kerala-sadya",
        name: "Kerala Sadya",
        motif: "bowl",
        description:
          "A traditional vegetarian feast served on a banana leaf, with rice and a wide spread of curries, pickles and payasam.",
        whyLocals:
          "Ask locally about the order dishes are meant to be eaten in — it's part of the ritual, not just the taste.",
      },
    ],
    localVoices: [
      {
        question: "What's a place tourists often miss?",
        answer:
          "The smaller backwater canals away from the houseboat routes are quieter and feel far more like everyday village life.",
      },
      {
        question: "What should a first-time visitor know?",
        answer:
          "Monsoon season transforms the landscape and is considered by many locals to be Kerala's most beautiful — and most humid — time to visit.",
      },
    ],
  },
};

// States shown on the map but without full demo data yet.
export const COMING_SOON_STATES = [
  { id: "punjab", name: "Punjab", mapLabel: { x: 300, y: 90 } },
  { id: "gujarat", name: "Gujarat", mapLabel: { x: 220, y: 250 } },
  { id: "tamil-nadu", name: "Tamil Nadu", mapLabel: { x: 400, y: 520 } },
  { id: "west-bengal", name: "West Bengal", mapLabel: { x: 620, y: 260 } },
  { id: "uttar-pradesh", name: "Uttar Pradesh", mapLabel: { x: 440, y: 190 } },
  { id: "goa", name: "Goa", mapLabel: { x: 350, y: 380 } },
];

export function getPlaceById(stateId, placeId) {
  const state = STATES[stateId];
  if (!state) return null;
  const pools = [...state.monuments, ...state.temples, ...state.food];
  return pools.find((p) => p.id === placeId) || null;
}

export function getCategoryOfPlace(stateId, placeId) {
  const state = STATES[stateId];
  if (!state) return null;
  if (state.monuments.find((p) => p.id === placeId)) return "monument";
  if (state.temples.find((p) => p.id === placeId)) return "temple";
  if (state.food.find((p) => p.id === placeId)) return "food";
  return null;
}

// ---------------------------------------------------------------------------
// Itinerary generator — combines selected categories into a day-wise plan.
// This is a simple deterministic mock generator, not a real optimiser.
// ---------------------------------------------------------------------------
const DAY_THEMES = [
  "HERITAGE",
  "HISTORY + CULTURE",
  "TEMPLES + LOCAL",
  "CULTURE & CUISINE",
  "HIDDEN CORNERS",
];

const TRAVEL_TIME_POOL = [
  "15–20 min",
  "20–25 min",
  "10–15 min",
  "25–30 min",
  "18–22 min",
];

export function generateItinerary(stateId, { days, interests, stayArea }) {
  const state = STATES[stateId];
  if (!state) return [];

  const monumentQueue = interests.monuments ? [...state.monuments] : [];
  const templeQueue = interests.temples ? [...state.temples] : [];
  const foodQueue = interests.food ? [...state.food] : [];

  const plan = days.map((date, dayIndex) => {
    const stops = [];

    if (monumentQueue.length) {
      stops.push(monumentQueue[dayIndex % monumentQueue.length]);
    }
    if (templeQueue.length) {
      stops.push(templeQueue[dayIndex % templeQueue.length]);
    }
    if (foodQueue.length) {
      stops.push(foodQueue[dayIndex % foodQueue.length]);
    }

    const stopsWithMeta = stops.map((place, i) => ({
      ...place,
      travelTime:
        i === 0
          ? `Approx. 15–25 min from ${stayArea || "your stay"}`
          : `Estimated travel time: ${
              TRAVEL_TIME_POOL[(dayIndex + i) % TRAVEL_TIME_POOL.length]
            }`,
    }));

    return {
      date,
      theme: DAY_THEMES[dayIndex % DAY_THEMES.length],
      stops: stopsWithMeta,
    };
  });

  return plan;
}
