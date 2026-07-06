export type PopularRoute = {
  from: string;
  to: string;
  distanceKm: number;
  // TODO: replace with real per-route fares from Akshar Travels' pricing sheet
  startingFare: number;
};

export const popularRoutes: PopularRoute[] = [
  { from: "Pune", to: "Mumbai", distanceKm: 150, startingFare: 2499 },
  { from: "Pune", to: "Goa", distanceKm: 460, startingFare: 6999 },
  { from: "Mumbai", to: "Nashik", distanceKm: 170, startingFare: 2799 },
  { from: "Pune", to: "Shirdi", distanceKm: 190, startingFare: 2999 },
  { from: "Mumbai", to: "Pune Airport", distanceKm: 150, startingFare: 2499 },
  { from: "Pune", to: "Mahabaleshwar", distanceKm: 120, startingFare: 2199 },
] as const;
