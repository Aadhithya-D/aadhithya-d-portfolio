"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SocialLinks } from "@/components/social-links";
import { DATA } from "@/data/resume";
// import { Badge } from "@/components/ui/badge"; // used by commented-out Skills section
import VerticalCutReveal from "../../components/fancy/vertical-cut-reveal";
import ShineBorder from "../../components/ui/shine-border";

const BLUR_FADE_DELAY = 0.04;

export function LeftSideMain() {
  return (
    <div className="space-y-6">
      <section id="hero">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          <div className="min-w-0 flex-1 space-y-3">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
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
            </h1>
            <div className="max-w-[600px] text-base leading-relaxed text-foreground sm:text-lg">
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
          <BlurFade delay={BLUR_FADE_DELAY} className="shrink-0">
            <ShineBorder
              className="inline-flex"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              borderRadius={9999}
              borderWidth={3}
            >
              <Avatar className="size-20 border sm:size-24">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </ShineBorder>
          </BlurFade>
        </div>
      </section>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <SocialLinks />
      </BlurFade>

      {/* Skills section hidden for founder-facing layout
      <section id="skills">...</section>
      */}
    </div>
  );
}
