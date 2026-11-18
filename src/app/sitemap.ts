import type { MetadataRoute } from "next";
import { DATA } from "@/data/resume";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  // Build time is a good-enough lastModified: the site only changes on deploy.
  const lastModified = new Date();
  return [
    { url: DATA.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${DATA.url}/llms.txt`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...Object.keys(projects).map((id) => ({
      url: `${DATA.url}/projects/${id}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
