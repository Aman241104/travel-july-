export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  blurb: string;
  description: string;
  features: string[];
  icon: "car" | "map" | "hotel" | "plane" | "passport";
};

export const services: Service[] = [
  {
    slug: "cabs",
    title: "Outstation Cabs",
    shortTitle: "Cabs",
    blurb: "One-way and round-trip rides between cities, on your schedule.",
    description:
      "Book a comfortable, verified ride for your next intercity trip. Whether it's a quick one-way hop or a multi-day round trip, our drivers know the route and the roads.",
    features: [
      "One-way & round trips across 60+ cities",
      "Sedans, SUVs and tempo travellers for groups",
      "Verified, background-checked drivers",
      "Transparent per-km pricing — no surge, ever",
    ],
    icon: "car",
  },
  {
    slug: "packages",
    title: "Holiday Packages",
    shortTitle: "Packages",
    blurb: "Curated multi-day trips, planned so you don't have to.",
    description:
      "From hill-station escapes to coastal getaways, our holiday packages are built around real itineraries our team has actually travelled — not a generic template.",
    features: [
      "Curated 3–10 day itineraries",
      "Hill station, beach and heritage circuits",
      "Stays hand-vetted by our travel desk",
      "Flexible for solo travellers, groups or private trips",
    ],
    icon: "map",
  },
  {
    slug: "hotels",
    title: "Hotel Bookings",
    shortTitle: "Hotels",
    blurb: "500+ partner stays, from budget to boutique.",
    description:
      "Skip the endless tab-switching. We match you with the right stay for your trip and budget, with rates checked against the market before you book.",
    features: [
      "500+ partner hotels across India",
      "Options from budget to luxury",
      "Free cancellation on select stays",
      "Best-rate match guarantee",
    ],
    icon: "hotel",
  },
  {
    slug: "flights",
    title: "Flight Assistance",
    shortTitle: "Flights",
    blurb: "Domestic and international fares, with a human backup.",
    description:
      "Search fares yourself or let us handle it — either way, you get a real support line if your flight changes, gets delayed, or needs rebooking.",
    features: [
      "Domestic & international fare search",
      "24/7 rebooking support",
      "Fare-drop alerts on request",
      "Group booking assistance",
    ],
    icon: "plane",
  },
  {
    slug: "visa",
    title: "Visa Assistance",
    shortTitle: "Visa",
    blurb: "Document checklists and status tracking, sorted.",
    description:
      "Visa paperwork is the least fun part of travel planning. We help you get the checklist right the first time and keep you posted as your application moves.",
    features: [
      "Tourist & business visa support",
      "Document checklist & review",
      "Application-status tracking",
      "Partnered agents across 40+ countries",
    ],
    icon: "passport",
  },
];
