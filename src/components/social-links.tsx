"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {Object.entries(DATA.contact.social).map(([platform, { url, icon }]) => (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-transparent bg-muted/60 text-foreground transition-all hover:scale-[1.03] hover:border-border hover:bg-muted"
          aria-label={`Visit my ${platform} profile`}
        >
          {icon({
            className: "h-4 w-4",
          })}
        </a>
      ))}
      <ModeToggle />
    </div>
  );
}
