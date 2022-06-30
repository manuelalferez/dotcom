/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import About from "../islands/About.tsx";
import { SocialLinks } from "../components/SocialLinks.tsx";

export default function Home() {
  return (
    <div class={tw`mx-auto max-w-screen-sm px(4 sm:6 md:8) my(12 sm:20)`}>
      <About />
      <SocialLinks class={tw`mt(5 md:7)`} />
    </div>
  );
}
