import type { MetadataRoute } from "next";
import { DATA } from "@/data/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: DATA.url, changeFrequency: "monthly", priority: 1 },
    { url: `${DATA.url}/llms.txt`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
