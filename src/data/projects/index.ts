// data/projects/index.ts
import { falconSight } from "@/data/projects/falcon-sight.ts";
import { roboGPT } from "./robogpt";
import { fitNut } from "./fitnut";
import { drippyAI } from "./drippyai";
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
  "fitnut": fitNut as unknown as Project,
  "drippy-ai": drippyAI as unknown as Project,
};
