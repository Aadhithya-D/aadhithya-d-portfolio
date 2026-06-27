import BlurFade from "@/components/magicui/blur-fade";
import { MarkdownContent } from "@/components/mdx/markdown-content";
import "highlight.js/styles/github-dark.css";

interface ProjectRightSideProps {
  markdown: string;
}

const BLUR_FADE_DELAY = 0.04;

export function ProjectRightSide({ markdown }: ProjectRightSideProps) {
  return (
    <div className="space-y-8 p-12 mx-auto">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div
          className="prose prose-neutral dark:prose-dark
        prose-headings:font-semibold
        prose-a:text-blue-600 hover:prose-a:text-blue-500
        prose-code:before:hidden prose-code:after:hidden
        max-w-none"
        >
          <MarkdownContent source={markdown} />
        </div>
      </BlurFade>
    </div>
  );
}