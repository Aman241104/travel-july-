export type Vehicle = {
  slug: string;
  name: string;
  seats: string;
  luggage: string;
  bestFor: string;
};

export const fleet: Vehicle[] = [
  {
    slug: "hatchback",
    name: "Hatchback",
    seats: "4 seater",
    luggage: "2 bags",
    bestFor: "Solo or two-person city hops",
  },
  {
    slug: "sedan",
    name: "Sedan",
    seats: "4 seater",
    luggage: "3 bags",
    bestFor: "Comfortable outstation rides",
  },
  {
    slug: "suv",
    name: "SUV / MUV",
    seats: "6–7 seater",
    luggage: "4–5 bags",
    bestFor: "Families and small groups",
  },
  {
    slug: "tempo",
    name: "Tempo Traveller",
    seats: "12–17 seater",
    luggage: "Bulk luggage",
    bestFor: "Group trips and events",
  },
];
