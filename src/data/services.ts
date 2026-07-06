export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  blurb: string;
  description: string;
  features: string[];
  icon: "car" | "route" | "clock" | "plane-transfer";
};

export const services: Service[] = [
  {
    slug: "oneway",
    title: "One-Way Outstation Cabs",
    shortTitle: "One-Way",
    blurb: "Point-to-point intercity rides — pay only for the distance you travel.",
    description:
      "Heading to another city and not coming straight back? Book a one-way outstation cab and pay only for a single leg — no round-trip minimum, no dead-mileage charges tacked on.",
    features: [
      "One-way fares across 50+ cities",
      "Sedans, SUVs and tempo travellers",
      "ID-verified, background-checked drivers",
      "Transparent per-km pricing — no surge, ever",
    ],
    icon: "car",
  },
  {
    slug: "round-trip",
    title: "Round Trip Cabs",
    shortTitle: "Round Trip",
    blurb: "Same cab, same driver, there and back — built for multi-day trips.",
    description:
      "Planning a trip with stops along the way, or just want the same driver waiting for the return leg? Round trip bookings hold the vehicle for your full itinerary at a flat per-day rate.",
    features: [
      "Flexible multi-day and multi-city itineraries",
      "Same driver for the entire trip",
      "Toll, parking and driver allowance shown upfront",
      "Free waiting time built into every quote",
    ],
    icon: "route",
  },
  {
    slug: "local",
    title: "Local & Hourly Rentals",
    shortTitle: "Local",
    blurb: "Cabs by the hour for in-city errands, events or half-day plans.",
    description:
      "Need a car for a few hours in town — meetings, shopping, a wedding, or shuttling between events? Book by the hour or for a fixed package (e.g. 4hr/40km, 8hr/80km) and skip the per-trip haggling.",
    features: [
      "Hourly packages from 2 to 12 hours",
      "No minimum-distance surprises",
      "Same-day and advance booking",
      "Ideal for events, meetings and city touring",
    ],
    icon: "clock",
  },
  {
    slug: "airport",
    title: "Airport Transfers",
    shortTitle: "Airport",
    blurb: "On-time pickup and drop for flights, tracked against your actual landing time.",
    description:
      "Flight delays shouldn't be your problem to manage. We track your flight and adjust pickup timing automatically, so your cab is waiting whether you land early or late.",
    features: [
      "Live flight tracking, no extra charge",
      "Free waiting time for arrivals",
      "Meet-and-greet with a name board on request",
      "Fixed fares — no airport surge pricing",
    ],
    icon: "plane-transfer",
  },
];
