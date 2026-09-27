"use client";
import { SocialLinks } from "@/components/social-links";
import { DATA } from "@/data/resume";

export function LeftSideMain() {
  return (
    <div className="space-y-5">
      <p className="text-[13px] text-muted-foreground">{DATA.location}</p>

      <section id="hero" className="flex items-start justify-between gap-6">
        <div className="min-w-0 flex-1 space-y-3 pt-0.5">
          <h1 className="font-serif text-[1.85rem] font-normal leading-tight tracking-tight text-[#2b2924] sm:text-[2.15rem]">
            Hi, I&apos;m Aadhithya.
          </h1>
          <p className="max-w-[28rem] text-[15px] leading-relaxed text-[#3a3732] sm:text-base">
            Building natural, affordable speech for Indian languages.
          </p>
          <p className="text-[13px] text-muted-foreground">
            Vakyam AI · IIT Madras Incubation Cell · Emergent Ventures
          </p>
          <SocialLinks />
        </div>
        <img
          src={DATA.avatarUrl}
          alt={DATA.name}
          className="h-[7.25rem] w-[6.35rem] shrink-0 rounded-[10px] object-cover object-top sm:h-[8.35rem] sm:w-[7.25rem]"
        />
      </section>
    </div>
  );
}
