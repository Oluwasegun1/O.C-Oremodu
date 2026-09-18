import { MetadataRoute } from "next";
import { PRACTICE_AREAS } from "@/data/practice-areas";
import { LEGAL_INSIGHTS } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://adebayolegal.ng";

  const staticRoutes = [
    "",
    "/about",
    "/practice-areas",
    "/experience",
    "/insights",
    "/contact",
    "/privacy-policy",
    "/terms-of-use",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const practiceAreaRoutes = PRACTICE_AREAS.map((pa) => ({
    url: `${baseUrl}/practice-areas/${pa.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const insightRoutes = LEGAL_INSIGHTS.map((art) => ({
    url: `${baseUrl}/insights/${art.slug}`,
    lastModified: new Date(art.publishDate).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...practiceAreaRoutes, ...insightRoutes];
}
