"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import { Badge } from "@/components/ui/badge";
import VerticalCutReveal from "../../components/fancy/vertical-cut-reveal";
import ShineBorder from "../../components/ui/shine-border";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Popup from "../../components/pop-up";
import BookingLayout from "../../components/calendar-component";
import { ModeToggle } from "@/components/mode-toggle";
import { CalendarCheck2 } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start", // 'start', 'center', 'end', or 'nearest'
    });
  }
};

export function LeftSideMain() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="space-y-6 p-8">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <div className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-4xl/none px-1">
                <VerticalCutReveal
                  splitBy="characters"
                  staggerDuration={0.025}
                  staggerFrom="first"
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 21,
                  }}
                >
                  {`Hi, I'm ${DATA.name} 👋`}
                </VerticalCutReveal>
              </div>
              <div className="max-w-[600px] md:text-lg">
                <VerticalCutReveal
                  splitBy="words"
                  staggerDuration={0.025}
                  staggerFrom="first"
                  reverse={true}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 21,
                    delay: 0.5,
                  }}
                >
                  {DATA.description}
                </VerticalCutReveal>
              </div>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="flex-shrink-0 block sm:hidden lg:block">
              <ShineBorder
                className="inline-flex"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                borderRadius={9999}
                borderWidth={3}
              >
                <Avatar className="size-28 sm:size-20 lg:size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </ShineBorder>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="prose max-w-full text-pretty font-sans text-sm text-foreground dark:prose-invert">
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </BlurFade>
      </section>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="flex flex-wrap gap-2">
          <div
            className="hidden md:flex items-center gap-1.5 rounded-lg px-3 py-2 transition-all
             h-9
             border-2 border-transparent
             bg-neutral-100 hover:border-neutral-300
             dark:bg-neutral-800 dark:hover:border-neutral-500
             text-neutral-900 hover:text-neutral-900
             dark:text-neutral-100 dark:hover:text-neutral-100
             hover:scale-[1.02]"
            onClick={() => {
              handleScroll("calendar");
            }}
          >
            <CalendarCheck2 className="h-4 w-4 " />
            <span className="text-sm">Schedule</span>
          </div>
          {Object.entries(DATA.contact.social).map(
            ([platform, { url, icon }]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg p-2 transition-all
                 h-9 w-9
                 border-2 border-transparent
                 bg-neutral-100 hover:border-neutral-300
                 dark:bg-neutral-800 dark:hover:border-neutral-500
                 text-neutral-900 hover:text-neutral-900
                 dark:text-neutral-100 dark:hover:text-neutral-100
                 hover:scale-[1.02]"
                aria-label={`Visit my ${platform} profile`}
              >
                {icon({
                  className: "h-4 w-4",
                })}
              </a>
            )
          )}
          <ModeToggle />
        </div>
      </BlurFade>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="space-y-3">
            {Object.entries(DATA.skills.categories).map(
              ([category, skills], categoryIdx) => (
                <div
                  key={category}
                  className="flex flex-nowrap items-top gap-x-2"
                >
                  <BlurFade delay={BLUR_FADE_DELAY * 4 + categoryIdx * 0.1}>
                    <h3 className="whitespace-nowrap text-sm font-medium text-foreground">
                      {category}:
                    </h3>
                  </BlurFade>

                  <div className="flex flex-wrap gap-1">
                    {skills.map((skill, skillIdx) => (
                      <BlurFade
                        key={skill}
                        delay={
                          BLUR_FADE_DELAY * 4 +
                          categoryIdx * 0.1 +
                          skillIdx * 0.05
                        }
                      >
                        <Badge className="text-xs">{skill}</Badge>
                      </BlurFade>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <section id="calendar">
        <BlurFade delay={BLUR_FADE_DELAY * 30}>
          <Popup
            trigger={
              <div>
                <BookingLayout />
              </div>
            }
          >
            <Cal
              namespace="15min"
              calLink="aadhithya-d/15min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          </Popup>
        </BlurFade>
      </section>
    </div>
  );
}
