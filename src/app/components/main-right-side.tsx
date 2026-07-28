"use client";
import BlurFade from "@/components/magicui/blur-fade";
// import { ProjectCard } from "@/components/project-card"; // used by commented-out Projects section
import { ResumeCard } from "@/components/resume-card";
import { SocialLinks } from "@/components/social-links";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function RightSideMain() {
  return (
    <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
      <section id="work" className="space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h2 className="text-xl font-bold tracking-tight">Work Experience</h2>
        </BlurFade>
        <div className="flex flex-col gap-y-5">
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 2 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education" className="space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold tracking-tight">Education</h2>
        </BlurFade>
        <div className="flex flex-col gap-y-5">
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 3 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                period={`${education.start} - ${education.end}`}
                description={education.degree}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="awards" className="space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
          <h2 className="text-xl font-bold tracking-tight">
            Awards and Achievements
          </h2>
        </BlurFade>
        <div className="flex flex-col gap-y-5">
          {DATA.awards.map((award, id) => (
            <BlurFade
              key={award.title}
              delay={BLUR_FADE_DELAY * 3.5 + id * 0.05}
            >
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-x-3">
                  <h3 className="text-sm font-semibold leading-snug">
                    {"href" in award && award.href ? (
                      <a
                        href={award.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:opacity-80"
                      >
                        {award.title}
                      </a>
                    ) : (
                      award.title
                    )}
                  </h3>
                  <div className="shrink-0 pt-0.5 text-right text-xs tabular-nums text-muted-foreground sm:text-sm">
                    {award.year}
                  </div>
                </div>
                {award.org && (
                  <div className="text-xs text-foreground sm:text-sm">
                    {award.org}
                  </div>
                )}
                {award.description && (
                  <p className="text-xs leading-relaxed text-foreground sm:text-sm">
                    {award.description}
                  </p>
                )}
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Projects section hidden on home - shared /projects/[id] URLs still work */}

      <footer id="contact" className="border-t border-border/60 pt-8 pb-2">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="flex flex-col items-center gap-4">
            <SocialLinks className="justify-center" />
            <p className="text-xs text-muted-foreground sm:text-sm">
              © 2026 {DATA.name}
            </p>
          </div>
        </BlurFade>
      </footer>
    </div>
  );
}
