/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { ForkIcon, RepoIcon, StarIcon } from "./Icons.tsx";
import { PageProps } from "$fresh/server.ts";
import { Project } from "@/types.d.tsx";

export default function Projects({ data }: PageProps<Project[] | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }
  return (
    <div class={tw`flex flex-wrap gap(2 md:1) justify-center`}>
      {data.map((project, i) => (
        <Item key={i} project={project} />
      ))}
    </div>
  );
}

function Item({ project }: { project: Project }) {
  const wrappedClass = tw`flex items-center gap-1`;
  return (
    <div class={tw`w(72 md:64) border-1 border-gray-300 rounded-md p-4`}>
      <div class={tw`${wrappedClass}`}>
        <RepoIcon />
        <a
          href={project.link}
          class={tw`text-blue-600 hover:underline transition duration-75 ease-in-out`}
          target="_blank"
        >
          {project.owner == "manuelalferez"
            ? project.repo
            : `${project.owner}/${project.repo}`}
        </a>
      </div>
      <p class={tw`mt-2 text-xs text-gray-600`}>{project.description}</p>
      <div class={tw`flex items-center gap-5 text-gray-600 text-xs mt-2`}>
        <div class={tw`${wrappedClass}`}>
          <div
            class={tw`w-4 h-4 rounded-full`}
            style={`background-color: ${project.languageColor}`}
          ></div>
          <p>{project.language}</p>
        </div>
        <div class={tw`${wrappedClass}`}>
          <StarIcon />
          <p>{project.stars}</p>
        </div>
        <div class={tw`${wrappedClass}`}>
          <ForkIcon />
          <p>{project.forks}</p>
        </div>
      </div>
    </div>
  );
}
