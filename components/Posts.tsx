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
    <div>
      {postIndex.map((post) => (
        <PostCard post={post} key={post.pathname} />
      ))}
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <div class={tw`mt-4 first:mt-0 border-1 rounded-md mb-1 p-4`}>
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
