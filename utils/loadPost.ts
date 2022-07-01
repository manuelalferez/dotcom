import { parse as frontMatter } from "frontmatter";
import { relative } from "relative";
import { Post } from "@/types.d.tsx";

export async function loadPost(
  postsDirectory: string,
  path: string
): Promise<[string, Post]> {
  const contents = await Deno.readTextFile(path);
  let pathname = "/" + relative(postsDirectory, path);
  // Remove .md extension.
  pathname = pathname.slice(0, -3);

  const { content, data } = frontMatter(contents) as {
    data: Record<string, string>;
    content: string;
  };

  const post: Post = {
    title: data.title ?? "Untitled",
    pathname: data.pathname ?? pathname,
    publishDate: new Date(data.publish_date),
    markdown: content,
  };
  console.log("Load: ", post.pathname);
  return [pathname, post];
}
