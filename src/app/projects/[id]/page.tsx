"use client";

import { ProjectLeftSide } from "@/components/project-left-side";
import { ProjectRightSide } from "@/components/project-right-side";
import GridPattern from "@/components/ui/grid-pattern";

const mockProject = {
  id: "1",
  title: "Sample Project",
  date: "2023-03-01",
  overview: "A comprehensive project that demonstrates various technical capabilities and problem-solving approaches.",
  description: "This is a sample project description that showcases the project's key features and goals.",
  technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  challenges: [
    "Implementing real-time data synchronization",
    "Optimizing performance for large datasets",
    "Creating a responsive and accessible UI"
  ],
  outcomes: [
    "Improved user engagement by 40%",
    "Reduced loading time by 60%",
    "Successfully deployed to production"
  ],
  timeline: "3 months",
  role: "Lead Developer",
  team: "4 members",
  technicalDetails: [
    {
      title: "Architecture",
      content: "Built using a modern tech stack with React and Next.js for optimal performance."
    },
    {
      title: "Performance Optimization",
      content: "Implemented lazy loading and code splitting to improve initial load times."
    }
  ]
};

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
                    title={mockProject.title}
                    date={mockProject.date}
                    overview={mockProject.overview}
                    technologies={mockProject.technologies}
                    timeline={mockProject.timeline}
                    role={mockProject.role}
                    team={mockProject.team}
                  />
                </div>
              </div>
              <div className="md:w-[60%] w-[100%] py-6">
                <div className="h-full bg-background rounded-xl border-2 overflow-y-auto">
                  <ProjectRightSide
                    description={mockProject.description}
                    challenges={mockProject.challenges}
                    outcomes={mockProject.outcomes}
                    technicalDetails={mockProject.technicalDetails}
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <main className="p-2 sm:hidden">
        <ProjectLeftSide
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
        />
      </main>
    </div>
  );
}