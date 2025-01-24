"use client";

import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import BlurFade from './magicui/blur-fade';
import { Badge } from './ui/badge';

interface ProjectLeftSideProps {
  title: string;
  date: string;
  overview: string;
  technologies: string[];
  timeline: string;
  role: string;
  team: string;
  media?: {
    type: "image" | "video";
    url: string;
    alt?: string;
  };
}

const BLUR_FADE_DELAY = 0.04;

export function ProjectLeftSide({
  title,
  date,
  overview,
  technologies,
  timeline,
  role,
  team,
  media = {
    type: "image",
    url: "/device.png",
    alt: "Project preview"
  }
}: ProjectLeftSideProps) {
  const router = useRouter();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-12 pt-6 max-w-4xl mx-auto"
    >
      <Button
        variant="ghost"
        className="px-0 w-full hover:bg-transparent text-muted-foreground"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        <div className="ml-auto px-3 py-1 text-xs rounded-md bg-accent/50 text-accent-foreground">{date}</div>
      </Button>

      <div className='space-y-6'>

      <div className="space-y-4">
        <div className="text-3xl font-semibold tracking-tight">{title}</div>
        
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <span>{timeline}</span>
          <span>•</span>
          <span>{role}</span>
          <span>•</span>
          <span>{team} team members</span>
        </div>
      </div>

      <div className="relative aspect-video rounded-lg overflow-hidden border">
        {media.type === "image" ? (
          <Image
            src={media.url}
            alt={media.alt || "Project preview"}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <video controls className="w-full h-full object-cover" />
        )}
      </div>

      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">{overview}</p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
              <BlurFade key={tech} delay={BLUR_FADE_DELAY * 10 * 0.05}>
              <Badge key={tech}>{tech}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
      </div>
    </motion.div>
  );
}