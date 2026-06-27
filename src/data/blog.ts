import fs from "fs";
import matter from "gray-matter";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

const contentDir = () => path.join(process.cwd(), "content");

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

/** Raw MDX body + frontmatter for rendering with MDXRemote on the page. */
export async function getPost(slug: string) {
  const filePath = path.join(contentDir(), `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  return {
    content: rawContent,
    metadata: metadata as Metadata,
    slug,
  };
}

export async function getBlogPosts() {
  const dir = contentDir();
  const mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      const slug = path.basename(file, path.extname(file));
      const { metadata, content } = await getPost(slug);
      return { metadata, slug, content };
    }),
  );
}