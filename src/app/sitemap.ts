import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/enquiry"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
