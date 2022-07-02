/** @jsx h */
import { h } from "preact";
import { Post } from "@/types.d.tsx";
import { PageProps, Handlers } from "$fresh/server.ts";
import { tw } from "@/utils/twind.ts";
import { css, apply } from "twind/css";
import { loadPost } from "@/utils/loadPost.ts";
import Markdown from "markdown-to-jsx";
import Footer from "../../components/Footer.tsx";
import { Head } from "$fresh/runtime.ts";

const POSTS_DIRECTORY = "posts/";

export const handler: Handlers<Post | null> = {
  async GET(_, ctx) {
    const { slug } = ctx.params;
    const [, post]: [string, Post] = await loadPost(
      POSTS_DIRECTORY,
      `${POSTS_DIRECTORY}${slug}.md`
    );

    if (post == null) {
      return ctx.render(null);
    }

    return ctx.render(post);
  },
};
export default function PostPage({ data, ...props }: PageProps<Post | null>) {
  const markdownStyles = css({
    a: apply`text-blue-600 hover:underline transition duration-75 ease-in-out`,
    h1: apply`leading-tight text(gray-900 2xl md:3xl) font-bold`,
    h2: apply`leading-tight text(gray-900 xl md:2xl) font-bold`,
    pre: apply`bg-gray-100 rounded-md p-4 overflow-auto`,
    code: apply`text-sm bg-gray-100 rounded-md p-1`,
    p: apply`text-justify`,
  });

  if (!data) {
    return <div>Post doesn't exist</div>;
  }

  return (
    <div class={tw`my(16 sm:20)`}>
      <div
        class={tw`${tw(
          markdownStyles
        )} md:mx-auto md:max-w-screen-sm px(4 sm:6 md:8)`}
      >
        <Head>
          <title>{data.title}</title>
          <meta
            name="description"
            content="Software Developer. GDG organizer. Trekking. Open Source. Chess player"
          />
          <link rel="shortcut icon" href="./favicon.png" type="image/png" />
        </Head>
        <h1>{data.title}</h1>
        <p class={tw`text-gray-500 pt-2 pb-10`}>
          {data.publishDate.toISOString().split("T")[0]}
        </p>
        <Markdown className={tw`space-y-7 py-2`}>{data.markdown}</Markdown>
      </div>
      <Footer />
    </div>
  );
}
