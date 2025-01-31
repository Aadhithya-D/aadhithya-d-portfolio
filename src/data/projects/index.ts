// data/projects/index.ts
import { chatCollect } from "@/data/projects/chat-collect.ts";
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
  "chat-collect": chatCollect as unknown as Project,
  // Add more projects here
};

// Create a type definition file
// types/project.d.ts

