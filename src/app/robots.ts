import type { MetadataRoute } from "next";
import { DATA } from "@/data/resume";

// Everyone's welcome, AI crawlers included: the point is to be easy to find.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${DATA.url}/sitemap.xml`,
  };
}
