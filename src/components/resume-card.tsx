"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import CenterUnderline from "./fancy/underline-center";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative rounded-lg px-1 py-2.5 transition-colors hover:bg-black/[0.03]"
      onMouseEnter={() => description && setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => description && setOpen((value) => !value)}
    >
      <div className="flex gap-3 sm:gap-3.5">
        <Avatar className="size-10 shrink-0 rounded-[8px] border border-black/5 bg-[#efe8da] sm:size-11">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain p-0.5" />
          <AvatarFallback className="rounded-[8px]">{altText[0]}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-x-3">
            <h3 className="text-sm font-medium leading-snug">
              <a
                href={href || "#"}
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                <CenterUnderline label={title} />
              </a>
              {badges && badges.length > 0 && (
                <span className="ml-1 inline-flex gap-x-1">
                  {badges.map((badge) => (
                    <Badge variant="secondary" className="text-xs" key={badge}>
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
            </h3>
            <div className="shrink-0 pt-0.5 text-right text-xs tabular-nums text-muted-foreground sm:text-sm">
              {period}
            </div>
          </div>
          {subtitle && (
            <div className="pt-0.5 text-xs text-muted-foreground sm:text-sm">
              {subtitle}
            </div>
          )}
        </div>
      </div>

      {description && open && (
        <div className="absolute left-0 right-0 top-full z-20 mt-1.5 rounded-xl border border-[#ddd4c4] bg-[#faf6ee] px-3.5 py-3 shadow-[0_10px_28px_rgba(45,40,30,0.12)]">
          <p className="text-[13px] leading-relaxed text-[#3a3732]">{description}</p>
        </div>
      )}
    </div>
  );
};
