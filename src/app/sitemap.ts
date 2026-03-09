import type { MetadataRoute } from "next";
import { getStarterSeoCities } from "@/lib/citySeo";

const SITE_URL = "https://www.vagabundo.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/en`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${SITE_URL}/bs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${SITE_URL}/en/features`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${SITE_URL}/bs/features`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    }
  ];

  const cityPages: MetadataRoute.Sitemap = getStarterSeoCities().flatMap(
    (city) => [
      {
        url: `${SITE_URL}/en/city/${city.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7
      },
      {
        url: `${SITE_URL}/bs/city/${city.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7
      }
    ]
  );

  return [...staticPages, ...cityPages];
}