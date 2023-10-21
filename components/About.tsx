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
          src="https://pbs.twimg.com/profile_images/1699038279566278656/FPm4vnr5_400x400.jpg"
          alt="manuel alferez"
          class={tw`w-28 h-28 rounded-full`}
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
        I'm a software developer and an open source enthusiast. I work as a
        Solutions Engineer at{" "}
        <a href="https://www.hubtype.com/" target="_blank" class={linkClass}>
          Hubtype
        </a>{" "}
        and participate as a member of{" "}
        <a
          href="https://www.meetup.com/es-ES/GDG-Jaen/"
          target="_blank"
          class={linkClass}
        >
          Google Developer Groups.
        </a>{" "}
        Ask me about Open Source, hiking, or just for a chat. Check out my
        fantastic{" "}
        <a
          href="https://flowinance.vercel.app/"
          target="_blank"
          class={linkClass}
        >
          Flowinance
        </a>{" "}
        project. I'm very proud of it.
      </p>
    </div>
  );
}
