"use client";

import { ProjectLeftSide } from "@/components/project-left-side";
import { ProjectRightSide } from "@/components/project-right-side";
import GridPattern from "@/components/ui/grid-pattern";
import { Globe } from "lucide-react";

type TechDetail = {
  name: string;
  description: string;
  icon?: string;
};

const projects = 
  {
    title: "Chat Collect",
    href: "https://chatcollect.com",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    timeline: "6 Weeks",
    role: "Full-stack Developer",
    teamSize: "1",
    overview: "With the release of the OpenAI GPT Store...",
    technologies: ["Next.js", "Typescript", "PostgreSQL"],
    media: {
      type: "video",
      url: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
      alt: "Chat Collect Demo"
    },
    sections: [
      {
        title: "Project Overview",
        type: "paragraph",
        content: "Detailed description of the project goals and vision..."
      },
      {
        title: "Technical Challenges",
        type: "list",
        content: [
          "Implementing real-time analytics with WebSockets",
          "Handling rate limiting for OpenAI API",
          "Ensuring GDPR compliance for user data"
        ]
      },
      {
        title: "Tech Stack Deep Dive",
        type: "tech-stack",
        content: [
          {
            name: "Next.js App Router",
            description: "Handled dynamic routing and server-side rendering",
            icon: "nextjs"
          },
          {
            name: "Prisma ORM",
            description: "Used for database schema management",
            icon: "prisma"
          }
        ]
      },
      {
        title: "Key Outcomes",
        type: "grid",
        content: [
          "Reduced API costs by 40% through caching",
          "Achieved 99.9% uptime with Cloudflare",
          "Onboarded 500+ active users in first month"
        ]
      }
    ],
    links: [
      {
        type: "Website",
        href: "https://chatcollect.com",
        icon: <Globe className="size-3" />
      }
    ]
  }


export default function ProjectPage({  }: { params: { id: string } }) {
  return (
    <div className="">
      <div className="hidden sm:block">
        <div className="min-h-screen flex items-center justify-center sm:bg-primary-background">
          <GridPattern
            width={30}
            height={30}
            x={-1}
            y={-1}
            strokeDasharray={"4 2"}
            className="absolute inset-0 size-full opacity-80 bg-primary-background"
          />
          <main className="h-[100vh] p-6 w-full relative">
            <div className="flex h-[calc(100%+3rem)] w-full -my-6 -mb-8 gap-3 flex-col md:flex-row">
              <div className="md:w-[40%] w-[100%] py-6">
                <div className="h-full bg-background border-2 rounded-xl overflow-y-auto">
                  <ProjectLeftSide
                    title={projects.title}
                    date={projects.dates}
                    overview={projects.overview}
                    technologies={projects.technologies}
                    timeline={projects.timeline}
                    role={projects.role}
                    team={projects.teamSize}
                  />
                </div>
              </div>
              <div className="md:w-[60%] w-[100%] py-6">
                <div className="h-full bg-background rounded-xl border-2 overflow-y-auto">
                  <ProjectRightSide sections={projects.sections as { title: string; type: "paragraph" | "list" | "tech-stack" | "grid"; content: string | string[] | TechDetail[]; }[]} />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <main className="p-2 sm:hidden">
        {/* <ProjectLeftSide
          title={mockProject.title}
          date={mockProject.date}
          overview={mockProject.overview}
          technologies={mockProject.technologies}
          timeline={mockProject.timeline}
          role={mockProject.role}
          team={mockProject.team}
        />
        <ProjectRightSide
          description={mockProject.description}
          challenges={mockProject.challenges}
          outcomes={mockProject.outcomes}
          technicalDetails={mockProject.technicalDetails}
        /> */}
      </main>
    </div>
  );
}