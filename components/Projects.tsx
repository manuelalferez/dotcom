/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import projects from "@/data/projects.json" assert { type: "json" };
import { GitHubIcon } from "./Icons.tsx";

const PROJECTS: Project[] = projects;

interface Project {
  title: string;
  description: string;
  link: string;
}

export default function Projects() {
  return (
    <div class={tw`flex flex-wrap gap(2 md:1) justify-center`}>
      {PROJECTS.map((project, i) => (
        <Item key={i} project={project} />
      ))}
    </div>
  );
}

function Item({ project }: { project: Project }) {
  return (
    <div
      class={tw`group w(72 md:64) border-2 border-gray-300 rounded-md shadow-xs`}
    >
      <div class={tw`group-hover:hidden h(28 sm:32) p-3`}>
        <h1
          class={tw`py-2 leading-tight text(gray-900 lg md:xl) font-semibold`}
        >
          {project.title}
        </h1>
        <p>{project.description}</p>
      </div>
      <a
        href={project.link}
        target="_blank"
        class={tw`hidden group-hover:flex bg-gray-300 h(28 sm:32) justify-center items-center`}
      >
        <GitHubIcon />
        <p class={tw`text(lg md:xl) ml-2`}>Source</p>
      </a>
    </div>
  );
}
