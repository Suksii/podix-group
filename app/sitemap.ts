import type { MetadataRoute } from "next";
import { site } from "@/components/site";
import { usluge } from "@/components/data/usluge";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/usluge", "/radovi", "/o-nama", "/kontakt"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const uslugePages = usluge.map((u) => ({
    url: `${site.url}/usluge/${u.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...uslugePages];
}
