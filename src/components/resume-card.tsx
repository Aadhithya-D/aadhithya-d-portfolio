"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import React, { useState } from "react";
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
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 200; // characters to show initially
  
  const shouldTruncate = description && description.length > MAX_LENGTH;
  const displayText = !shouldTruncate || isExpanded 
    ? description 
    : description?.slice(0, MAX_LENGTH).trimEnd() + "... ";
  return (
    <Card className="flex gap-3 border-0 bg-transparent p-0 shadow-none sm:gap-4">
      <div className="flex-none pt-0.5">
        <Avatar className="size-11 border bg-muted sm:size-12">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="min-w-0 flex-1 group">
        <CardHeader className="space-y-0 p-0">
          <div className="flex items-start justify-between gap-x-3 text-base">
            <h3 className="inline-flex min-w-0 flex-wrap items-center gap-x-1 font-semibold leading-snug text-sm">
              <a
                href={href || "#"}
                className="block cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CenterUnderline label={title} />
              </a>

              {badges && (
                <span className="inline-flex gap-x-1">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs"
                      key={index}
                    >
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
            <div className="pt-1 font-sans text-xs text-foreground sm:text-sm">
              {subtitle}
            </div>
          )}
        </CardHeader>
        {description && (
          <div className="mt-2 text-xs leading-relaxed text-foreground sm:text-sm">
            {displayText?.split(/\n/).map((line, index, array) =>
              index === 0 ? (
                <React.Fragment key={index}>{line}</React.Fragment>
              ) : (
                <React.Fragment key={index}>
                  {line}
                  {!line.endsWith("...") && index !== array.length - 1 && <br />}
                </React.Fragment>
              )
            )}
            {shouldTruncate && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`text-xs text-muted-foreground underline underline-offset-2 cursor-pointer hover:text-foreground ${isExpanded ? "ml-1.5" : ""}`}
              >
                {isExpanded ? "See Less" : "See More"}
              </button>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};
