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
    : description?.slice(0, MAX_LENGTH) + '...';
  return (
    <Card className="flex pb-2  ">
      <div className="flex-none">
        <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow ml-4 items-center flex-col group">
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              <a
                href={href || "#"}
                className="block cursor-pointer"
                target="_blank"
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
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              {period}
            </div>
          </div>
          {subtitle && <div className="font-sans text-xs pt-1">{subtitle}</div>}
        </CardHeader>
        <div className="mt-2 text-xs sm:text-sm">
          {displayText?.split(/\n/).map((line, index, array) =>
            index === 0 ? (
              line
            ) : (
              <React.Fragment key={line}>
                {line}
                {!line.endsWith('...') && index !== array.length - 1 && <br />}
              </React.Fragment>
            )
          )}
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`text-xs text-muted-foreground underline cursor-pointer hover:text-foreground ${isExpanded ? 'ml-2' : ''}`}
            >
              {isExpanded ? 'See Less' : 'See More'}
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};
