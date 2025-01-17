"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import Navbar from "./navbar";
import { Badge } from "@/components/ui/badge";
import VerticalCutReveal from "./fancy/vertical-cut-reveal";
import ShineBorder from "./ui/shine-border";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Popup from "./pop-up";
import { useTheme } from 'next-themes'
import BookingLayout from "./calendar-component";

const BLUR_FADE_DELAY = 0.04;

export function LeftSideMain() {
  const { theme } = useTheme()
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="space-y-8 p-8">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <div className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-4xl/none">
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
            <BlurFade delay={BLUR_FADE_DELAY}>
              <ShineBorder
                className="inline-flex"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                borderRadius={9999}
                borderWidth={3}
              >
                <Avatar className="size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </ShineBorder>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <Navbar />
      
      <Popup
        trigger={<div><BookingLayout /></div>}
      >
        <Cal
          namespace="15min"
          calLink="aadhithya-d/15min"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </Popup>
    </div>
  );
}
