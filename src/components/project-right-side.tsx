// ProjectRightSide.tsx
"use client";

import BlurFade from "./magicui/blur-fade";

const BLUR_FADE_DELAY = 0.4;


type TechDetail = {
  name: string;
  description: string;
  icon?: string;
};

interface ProjectRightSideProps {
  sections: Array<{
    title: string;
    type: "paragraph" | "list" | "grid" | "tech-stack";
    content: string | string[] | TechDetail[];
  }>;
}

export function ProjectRightSide({ sections }: ProjectRightSideProps) {
  return (
    <div className="space-y-8 p-12 mx-auto">
      {sections.map((section, index) => (
        <BlurFade key={section.title} delay={BLUR_FADE_DELAY * (5 + index)}>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            
            {section.type === 'paragraph' && (
              <p className="text-muted-foreground leading-relaxed">
                {section.content as string}
              </p>
            )}

            {section.type === 'list' && (
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                {(section.content as string[]).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {section.type === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(section.content as string[]).map((item, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-accent/50">
                    {item}
                  </div>
                ))}
              </div>
            )}

            {section.type === 'tech-stack' && (
              <div className="grid grid-cols-1 gap-4">
                {(section.content as TechDetail[]).map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-accent/50">
                    {tech.icon}
                    <div>
                      <h3 className="font-medium">{tech.name}</h3>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </BlurFade>
      ))}
    </div>
  );
}