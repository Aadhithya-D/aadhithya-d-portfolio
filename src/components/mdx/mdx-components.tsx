import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const portfolioMdxComponents: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        "text-4xl max-w-full text-pretty font-sans font-bold tracking-tight mt-12 mb-6 first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "text-3xl max-w-full text-pretty font-sans font-bold tracking-tight mt-8 mb-6 first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "text-2xl max-w-full text-pretty font-sans font-semibold mt-8 mb-4",
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn(
        "max-w-full text-pretty font-sans list-disc pl-4 [&_ul]:list-[circle] [&_ol]:list-[upper-roman]",
        className,
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={cn(
        "max-w-full text-pretty font-sans list-decimal pl-4 [&_ul]:list-[circle] [&_ol]:list-[upper-roman]",
        className,
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("leading-relaxed [&>p]:inline [&>p]:m-0", className)} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn(
        "text-foreground max-w-full text-pretty font-sans leading-relaxed [&:not(:first-child)]:mt-6",
        className,
      )}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "border-l-4 border-primary pl-4 italic text-muted-foreground mt-6",
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, href, ...props }) => {
    const external = href?.startsWith("http");
    if (external) {
      return (
        <a
          href={href}
          className={cn("font-medium text-primary hover:text-primary/80 underline", className)}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      );
    }
    return (
      <Link
        href={href ?? "#"}
        className={cn("font-medium text-primary hover:text-primary/80 underline", className)}
        {...props}
      />
    );
  },
  code: ({ className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    if (match) {
      return (
        <div className="rounded-lg bg-[#0d1117] overflow-hidden my-6">
          <div className="flex items-center px-4 py-2 bg-[#161b22] text-sm text-gray-300">
            <span className="flex-1">{match[1]}</span>
          </div>
          <pre className="p-4">
            <code className={`language-${match[1]} hljs`}>{String(children).replace(/\n$/, "")}</code>
          </pre>
        </div>
      );
    }
    return (
      <code
        className={cn(
          "relative rounded bg-accent/50 px-[0.3rem] py-[0.2rem] font-mono text-sm",
          className,
        )}
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: (props) => <pre {...props} />,
  table: ({ className, ...props }) => (
    <div className="my-6 w-full overflow-x-auto rounded-lg border border-border">
      <table className={cn("w-full border-collapse text-sm", className)} {...props} />
    </div>
  ),
  thead: ({ className, ...props }) => (
    <thead className={cn("border-b border-border bg-muted/50", className)} {...props} />
  ),
  tbody: ({ className, ...props }) => (
    <tbody className={cn("divide-y divide-border", className)} {...props} />
  ),
  tr: ({ className, ...props }) => <tr className={cn("hover:bg-muted/30", className)} {...props} />,
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "border border-border px-4 py-2 text-left font-bold text-foreground",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td className={cn("border border-border px-4 py-2 text-left", className)} {...props} />
  ),
  hr: ({ className, ...props }) => (
    <hr className={cn("my-8 border-t border-muted-foreground/30", className)} {...props} />
  ),
};