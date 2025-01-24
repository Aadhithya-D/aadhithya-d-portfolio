"use client";

import BlurFade from "./magicui/blur-fade";

interface ProjectRightSideProps {
  description: string;
  challenges: string[];
  outcomes: string[];
  technicalDetails?: {
    title: string;
    content: string;
  }[];
}
const BLUR_FADE_DELAY = 0.04;

export function ProjectRightSide({
  description,
  challenges,
  outcomes,
  technicalDetails,
}: ProjectRightSideProps) {
  return (
    <div className="space-y-8 p-12 mx-auto">
      <div className="space-y-6">
        <div className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </BlurFade>
        </div>

        <div className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-semibold">Key Challenges</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <ul className="space-y-3 list-disc list-inside text-muted-foreground">
              {challenges.map((challenge, idx) => (
                <li key={idx}>{challenge}</li>
              ))}
            </ul>
          </BlurFade>
        </div>

        <div className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-semibold">Outcomes</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <ul className="space-y-3 list-disc list-inside text-muted-foreground">
              {outcomes.map((outcome, idx) => (
                <li key={idx}>{outcome}</li>
              ))}
            </ul>
          </BlurFade>
        </div>

        {technicalDetails && (
          <div className="space-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <h2 className="text-xl font-semibold">Technical Details</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                {technicalDetails.map((detail, idx) => (
                  <li key={idx}>{detail.content}</li>
                ))}
              </ul>
            </BlurFade>
          </div>
        )}
      </div>
    </div>
  );
}