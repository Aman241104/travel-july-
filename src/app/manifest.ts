import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Akshar Travels — Outstation Cabs",
    short_name: "Akshar Travels",
    description:
      "Book one-way, round-trip, local and airport-transfer cabs across 50+ cities.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f2",
    theme_color: "#09090b",
    icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }],
  };
}
