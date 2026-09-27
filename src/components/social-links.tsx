"use client";

import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-1 pt-1", className)}>
      {Object.entries(DATA.contact.social).map(([platform, { url, icon }]) => (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-md text-foreground/65 transition-colors hover:bg-black/5 hover:text-foreground"
          aria-label={`Visit my ${platform} profile`}
        >
          {icon({
            className: "h-3.5 w-3.5",
          })}
        </a>
      ))}
    </div>
  );
}
