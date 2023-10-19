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
import Header from "../components/Header.tsx";
import Projects from "../components/Projects.tsx";

const POSTS = new Map<string, Post>();
const POSTS_DIRECTORY = "posts/";

export const handler: Handlers<Project | null> = {
  async GET(_, ctx) {
    const jsonResponse = await fetch(
      "https://gh-pinned-repos.egoist.dev/?username=manuelalferez"
    );
    await loadContent(POSTS_DIRECTORY);
    if (jsonResponse.status === 404) {
      return ctx.render(null);
    }
    const projects: Project = await jsonResponse.json();
    return ctx.render(projects);
  },
};

export default function Home({ data, ...props }: PageProps<Project[] | null>) {
  return (
    <div>
      <Header />
      <div class={tw`mx-auto max-w-screen-sm px(4 sm:6 md:8) my(12 sm:20)`}>
        <Head>
          <title>Manuel Alférez</title>
          <meta
            name="description"
            content="Software Developer. GDG organizer. Trekking. Open Source. Chess player"
          />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;600;800&display=swap"
            rel="stylesheet"
          />
        </Head>

        <About />
        <SocialLinks class={tw`mt(5 md:7)`} />
        <hr class={tw`w-5/6 mx-auto my-10`} />
        <Projects data={data} {...props} />
        <hr class={tw`w-5/6 mx-auto my-10`} />
        <Posts posts={POSTS} />
        <Footer />
      </div>
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
