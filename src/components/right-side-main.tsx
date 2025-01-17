/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useRef, useState } from "react";

const BLUR_FADE_DELAY = 0.04;
const SECTIONS = [
  "work",
  "education",
  "projects",
  "hackathons",
  "contact",
] as const;
type Section = (typeof SECTIONS)[number];

export function RightSideMain() {
  const [activeTab, setActiveTab] = useState<Section>("work");
  const isScrollingRef = useRef(false);
  const observersRef = useRef(new Map());

  useEffect(() => {
    const createObserver = (sectionId: Section) => {
      const options = {
        root: null,
        rootMargin: sectionId === "contact" ? "-20% 0px" : "-50% 0px",
        threshold: 0,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrollingRef.current) {
            setActiveTab(sectionId);
          }
        });
      }, options);

      return observer;
    };

    const handleScroll = () => {
      if (
        !isScrollingRef.current &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 100
      ) {
        setActiveTab("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    SECTIONS.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = createObserver(sectionId);
        observer.observe(element);
        observersRef.current.set(sectionId, observer);
      }
    });

    return () => {
      observersRef.current.forEach((observer) => observer.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (sectionId: Section) => {
    setActiveTab(sectionId);

    isScrollingRef.current = true;

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000); // Using 1000ms to be safe
    }
  };

  return (
    <div className="space-y-8 pb-8">
      <div className="hidden sm:block z-10 sticky top-0 bg-background px-4 py-4 rounded-t-xl border-b-2">
        <div className="">
          <Tabs value={activeTab} className="">
            <TabsList className="h-10 pl-2 pr-2 pt-2 pb-2">
              <TabsTrigger value="work" onClick={() => handleScroll("work")}>
                Work Experience
              </TabsTrigger>
              <TabsTrigger
                value="education"
                onClick={() => handleScroll("education")}
              >
                Education
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                onClick={() => handleScroll("projects")}
              >
                Projects
              </TabsTrigger>
              <TabsTrigger
                value="hackathons"
                onClick={() => handleScroll("hackathons")}
              >
                Hackathons
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                onClick={() => handleScroll("contact")}
              >
                Contact
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <section id="work" className="scroll-m-24">
        <div className="flex min-h-0 flex-col gap-y-3 pl-12 pr-12 pt-4 sm:pt-0">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
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
      <section id="education" className="pl-12 pr-12 scroll-m-24">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
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
      <section id="projects" className="pl-12 pr-12 scroll-m-16">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons" className="pl-12 pr-12 scroll-m-16">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact" className="pl-12 pr-12">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
