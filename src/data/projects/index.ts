// data/projects/index.ts
import { falconSight } from "@/data/projects/falcon-sight.ts";
import { roboGPT } from "./robogpt";
export type Project = {
    title: string;
    href: string;
    dates: string;
    active: boolean;
    timeline: string;
    role: string;
    teamSize: string;
    overview: string;
    technologies: string[];
    media: {
      type: "video" | "image";
      url: string;
      alt?: string;
    };
    markdown: string;
    links: Array<{
      type: string;
      href: string;
      icon: string;
    }>;
};

export const projects: Record<string, Project> = {
  "falconsight": falconSight as unknown as Project,
  "robogpt": roboGPT as unknown as Project,
  // Add more projects here
};

// Create a type definition file
// types/project.d.ts

