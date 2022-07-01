/** @jsx h */
import { h } from "preact";
import { Post } from "@/types.d.tsx";
import { tw } from "@/utils/twind.ts";

interface IndexProps {
  posts: Map<string, Post>;
}

export function Posts({ posts }: IndexProps) {
  const postIndex = [];
  for (const [_key, post] of posts.entries()) {
    postIndex.push(post);
  }
  postIndex.sort(
    (a, b) => (b.publishDate?.getTime() ?? 0) - (a.publishDate?.getTime() ?? 0)
  );

  return (
    <div class={tw`px(8 md:0) flex(col) md:mx-auto w(md:2/3)`}>
      {postIndex.map((post) => (
        <PostCard post={post} key={post.pathname} />
      ))}
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <div class={tw`pt-12 first:pt-0`}>
      <h3 class={tw`text-lg font-bold`}>
        <a
          class={tw`hover:text-blue-600 hover:underline transition duration-75 ease-in-out`}
          href={`${"posts"}${post.pathname}`}
        >
          {post.title}
        </a>
      </h3>
      <p class={tw`text-gray-500`}>
        {post.publishDate.toISOString().split("T")[0]}
      </p>
    </div>
  );
}
