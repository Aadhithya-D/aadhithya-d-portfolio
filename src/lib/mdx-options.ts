import remarkGfm from "remark-gfm";

/**
 * Same stack as tn-fiscal-whitepaper: GFM tables + plain markdown strings
 * from project TS files (format `md` avoids treating `<` as JSX).
 */
export const mdxSerializeOptions = {
  mdxOptions: {
    format: "md" as const,
    remarkPlugins: [remarkGfm],
  },
};