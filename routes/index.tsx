/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import About from "@/components/About.tsx";
import { SocialLinks } from "@/components/SocialLinks.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Post, Project } from "@/types.d.tsx";
import { walk } from "walk";
import { Posts } from "@/components/Posts.tsx";
import { loadPost } from "@/utils/loadPost.ts";
import Footer from "../components/Footer.tsx";
import { Head } from "$fresh/runtime.ts";

const POSTS = new Map<string, Post>();
const POSTS_DIRECTORY = "posts/";

export const handler: Handlers<Project | null> = {
  async GET(_, ctx) {
    await loadContent(POSTS_DIRECTORY);
    return ctx.render();
  },
};

export default function Home({ data, ...props }: PageProps<Project[] | null>) {
  return (
    <div class={tw`mx-auto max-w-screen-sm px(4 sm:6 md:8) my(12 sm:20)`}>
      <Head>
        <title>Manuel Alférez</title>
        <meta
          name="description"
          content="Software Developer. GDG organizer. Trekking. Open Source. Chess player"
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Head>
      <About />
      <SocialLinks class={tw`mt(5 md:7)`} />
      <hr class={tw`w-5/6 mx-auto my-10`} />
      <Posts posts={POSTS} />
      <Footer />
    </div>
  );
}

async function loadContent(postsDirectory: string) {
  for await (const entry of walk(postsDirectory)) {
    if (entry.isFile && entry.path.endsWith(".md")) {
      const [key, post]: [string, Post] = await loadPost(
        postsDirectory,
        entry.path
      );
      POSTS.set(key, post);
    }
  }
}
