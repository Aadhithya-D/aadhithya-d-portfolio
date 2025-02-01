// app/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import { ProjectLeftSide } from "@/app/projects/[id]/components/project-left-side";
import { ProjectRightSide } from "@/app/projects/[id]/components/project-right-side";
import GridPattern from "@/components/ui/grid-pattern";
import { projects } from "@/data/projects";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id];
  if (!project) {
    notFound();
  }


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
                    title={project.title}
                    date={project.dates}
                    overview={project.overview}
                    technologies={project.technologies}
                    timeline={project.timeline}
                    role={project.role}
                    team={project.teamSize}
                    media={project.media}
                  />
                </div>
              </div>
              <div className="md:w-[60%] w-[100%] py-6">
                <div className="h-full bg-background rounded-xl border-2 overflow-y-auto">
                  <ProjectRightSide markdown={project.markdown} />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <main className="p-2 sm:hidden">
        <ProjectLeftSide
          title={project.title}
          date={project.dates}
          overview={project.overview}
          technologies={project.technologies}
          timeline={project.timeline}
          role={project.role}
          team={project.teamSize}
        />
        <ProjectRightSide markdown={project.markdown} />
      </main>
    </div>
  );
}
