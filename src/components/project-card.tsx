"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full relative"
      }
    >
      <div className="absolute top-2 right-2 text-muted-foreground">
        <ArrowUpRight className="h-4 w-4 font-bold" />
      </div>
      <div className={cn("block", className)}>
        <Link href={`/projects/${title.toLowerCase().replace(/ /g, "-")}`} className="block">
          <div className="relative h-40 w-full">
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                onError={(e) => {
                  console.error('Error loading video:', e);
                  e.currentTarget.style.display = 'none';
                }}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
              />
            ) : image ? (
              <div className="relative w-full h-full bg-gradient-to-b from-muted/10 via-muted/20 to-muted/30 dark:from-muted/5 dark:via-muted/10 dark:to-muted/15">
                <Image
                  src={image}
                  alt={title}
                  width={400}
                  height={300}
                  className="w-full h-full object-contain mix-blend-normal"
                />
              </div>
            ) : null}
          </div>
        </Link>
      </div>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
