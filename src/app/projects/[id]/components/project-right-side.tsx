/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import BlurFade from "@/components/magicui/blur-fade";
import "highlight.js/styles/github-dark.css";
import Markdown from "react-markdown";
import { cn } from "@/lib/utils";
import Link from "next/link";
import remarkGfm from "remark-gfm";

interface ProjectRightSideProps {
  markdown: string;
}

const BLUR_FADE_DELAY = 0.04;

export function ProjectRightSide({ markdown }: ProjectRightSideProps) {
  return (
    <div className="space-y-8 p-12 mx-auto">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Markdown
          className="prose prose-neutral dark:prose-dark 
        prose-headings:font-semibold
        prose-a:text-blue-600 hover:prose-a:text-blue-500
        prose-code:before:hidden prose-code:after:hidden
        max-w-none"
          components={{
            h1: ({ node, ...props }) => (
              <h1
                className="text-4xl max-w-full text-pretty font-sans font-bold tracking-tight mt-12 mb-6 first:mt-0"
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <h2
                className="text-3xl max-w-full text-pretty font-sans font-bold tracking-tight mt-8 mb-6 first:mt-0"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="text-2xl max-w-full text-pretty font-sans font-semibold mt-8 mb-4"
                {...props}
              />
            ),

            ul: ({ node, ...props }: { node?: any; depth?: number } & React.HTMLAttributes<HTMLUListElement>) => (
              <ul
                className={cn(
                  "max-w-full text-pretty font-sans list-disc",
                  props.depth && props.depth > 0 ? "pl-6 mt-2" : "pl-4",
                  "[&_ul]:list-[circle] [&_ol]:list-[upper-roman]"
                )}
                {...props}
              />
            ),
            ol: ({ node, ...props }: { node?: any; depth?: number } & React.HTMLAttributes<HTMLUListElement>) => (
              <ol
                className={cn(
                  "max-w-full text-pretty font-sans list-decimal",
                  props.depth && props.depth > 0 ? "pl-6 mt-2" : "pl-4",
                  "[&_ul]:list-[circle] [&_ol]:list-[upper-roman]"
                )}
                {...props}
              />
            ),
            li: ({ node, ...props }) => (
              <li
                className="leading-relaxed [&>p]:inline [&>p]:m-0"
                {...props}
              />
            ),

            p: ({ node, ...props }) => (
              <p
                className="text-foreground max-w-full text-pretty font-sans leading-relaxed [&:not(:first-child)]:mt-6"
                {...props}
              />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="border-l-4 border-primary pl-4 italic text-muted-foreground mt-6"
                {...props}
              />
            ),
            a: ({ node, href, ...props }) => (
              <Link
                href={href || "#"}
                className="font-medium text-primary hover:text-primary/80 text-decoration-line: underline;"
                target="_blank"
                rel="noopener noreferrer"
                {...props}
              />
            ),
            code: ({ node, className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <div className="rounded-lg bg-[#0d1117] overflow-hidden my-6">
                  <div className="flex items-center px-4 py-2 bg-[#161b22] text-sm text-gray-300">
                    <span className="flex-1">{match[1]}</span>
                  </div>
                  <pre className="p-4">
                    <code className={`language-${match[1]} hljs`}>
                      {String(children).replace(/\n$/, "")}
                    </code>
                  </pre>
                </div>
              ) : (
                <code
                  className={cn(
                    "relative rounded bg-accent/50 px-[0.3rem] py-[0.2rem] font-mono text-sm",
                    className
                  )}
                  {...props}
                >
                  {children}
                </code>
              );
            },
            pre: ({ node, ...props }: { node?: any } & React.HTMLAttributes<HTMLPreElement>) => <pre {...props} />,
            table: ({ node, ...props }) => (
              <div className="my-6 w-full overflow-y-auto">
                <table className="w-full" {...props} />
              </div>
            ),
            th: ({ node, ...props }) => (
              <th
                className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
                {...props}
              />
            ),
            td: ({ node, ...props }) => (
              <td
                className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
                {...props}
              />
            ),
            hr: ({ node, ...props }) => (
              <hr
                className="my-8 border-t border-muted-foreground/30"
                {...props}
              />
            ),
          }}
          rehypePlugins={[remarkGfm]}
        >
          {markdown}
        </Markdown>
      </BlurFade>
    </div>
  );
}
