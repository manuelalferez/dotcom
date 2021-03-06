/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { ResumeIcon, IconLink } from "@/components/Icons.tsx";

export default function About() {
  const linkClass = tw`text-blue-600 hover:underline transition duration-75 ease-in-out`;
  return (
    <div>
      <div class={tw`flex flex(col sm:row)`}>
        <img
          src="https://avatars.githubusercontent.com/u/38152841?v=4"
          alt="manuel alferez"
          class={tw`w(20 md:28) h(20 md:28) rounded-full`}
        />
        <div class={tw`flex items-center gap-6`}>
          <div class={tw`flex flex-col justify-center py(2 md:0) sm:pl-4`}>
            <p class={tw`leading-tight text(gray-900 xl md:2xl)`}>Hello, I'm</p>
            <h1
              class={tw`leading-tight text(gray-900 2xl md:3xl) font-semibold`}
            >
              Manuel Alférez
            </h1>
          </div>
          <IconLink
            href="https://github.com/manuelalferez/resume/blob/master/resume.pdf"
            title="Resume"
            icon={ResumeIcon}
          />
        </div>
      </div>

      <p class={tw`mt(4 md:10) leading-7 text(gray-900 lg)`}>
        I'm doing stuff with JavaScript, sharing code on GitHub and
        participating as a member of{" "}
        <a
          href="https://www.meetup.com/es-ES/GDG-Jaen/"
          target="_blank"
          class={linkClass}
        >
          Google Developer Groups.
        </a>{" "}
        Ask me about Open Source, hiking or just for a chat. Do you want to work
        together?
      </p>
    </div>
  );
}
