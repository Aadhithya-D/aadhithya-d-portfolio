import { MDXRemote } from "next-mdx-remote/rsc";
import { portfolioMdxComponents } from "@/components/mdx/mdx-components";
import { mdxSerializeOptions } from "@/lib/mdx-options";

/** Server-side markdown/MDX (next-mdx-remote + remark-gfm), same pattern as tn-fiscal-whitepaper. */
export async function MarkdownContent({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={portfolioMdxComponents}
      options={mdxSerializeOptions}
    />
  );
}