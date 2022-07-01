/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import About from "@/islands/About.tsx";
import { SocialLinks } from "@/components/SocialLinks.tsx";
import Projects from "@/components/Projects.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Project } from "../types/global.tsx";

export const handler: Handlers<Project | null> = {
  async GET(_, ctx) {
    const jsonResponse = await fetch(
      "https://gh-pinned-repos.egoist.sh/?username=manuelalferez"
    );
    if (jsonResponse.status === 404) {
      return ctx.render(null);
    }
    const projects: Project = await jsonResponse.json();
    return ctx.render(projects);
  },
};

export default function Home({ data, ...props }: PageProps<Project[] | null>) {
  return (
    <div class={tw`mx-auto max-w-screen-sm px(4 sm:6 md:8) my(12 sm:20)`}>
      <About />
      <SocialLinks class={tw`mt(5 md:7)`} />
      <hr class={tw`w-5/6 mx-auto my-10`} />
      <Projects data={data} {...props} />
    </div>
  );
}
