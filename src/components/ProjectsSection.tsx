import * as React from "react";
import { projects, achievements, experiences } from "../data";

export function ProjectsSection() {
  return (
    <div className="flex flex-col px-5 py-12 w-full font-medium bg-green-200 rounded-xl min-h-[605px] text-zinc-950">
      <div className="flex gap-2.5 items-center w-full">
        <div className="self-stretch my-auto text-3xl">Projects</div>
        <div className="flex flex-1 shrink gap-2.5 items-center self-stretch my-auto text-base basis-0 min-w-[240px]">
          <div className="self-stretch my-auto">View All</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/575e24c97c3c7244c7182ff5a266ede371888e069fee04fd78c593f4bd1a8c7d?apiKey=0fe3c92d70f947bd8019826ed857d2fb&"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            alt=""
          />
        </div>
      </div>
      {projects.map((project, index) => (
        <div key={index}>
          <div className="mt-2.5 text-base">{project.title}</div>
          <img
            loading="lazy"
            src={project.image}
            className="object-contain mt-2.5 w-full rounded-xl aspect-[1.79]"
            alt={project.imageAlt}
          />
        </div>
      ))}
      <div className="mt-2.5 w-full min-h-0 border border-solid border-zinc-800" />
      <div className="mt-2.5 text-3xl">Achievements</div>
      {achievements.map((achievement, index) => (
        <div key={index} className="mt-2.5 text-base">
          {achievement.title}
        </div>
      ))}
      <div className="mt-2.5 w-full min-h-0 border border-solid border-zinc-800" />
      <div className="mt-2.5 text-3xl">Experience</div>
      {experiences.map((experience, index) => (
        <div key={index} className="mt-2.5 text-base">
          {experience.title}
        </div>
      ))}
    </div>
  );
}
