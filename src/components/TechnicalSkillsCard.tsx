import * as React from "react";
import { technicalSkills } from "../data";

export function TechnicalSkillsCard() {
  return (
    <div className="flex flex-col justify-between px-5 pt-10 pb-5 rounded-xl bg-zinc-800 min-w-[240px] w-[358px]">
      <div className="flex flex-col w-full">
        <div className="text-2xl text-zinc-100">Technical Skills</div>
        <div className="mt-2.5 text-base text-white">
          {technicalSkills.map((skill) => skill.name).join(", ")}
        </div>
      </div>
      <div className="flex flex-col mt-28 w-full text-base text-white whitespace-nowrap max-md:mt-10">
        <div className="w-full min-h-0 border border-white border-solid" />
        <div className="flex gap-2.5 items-start self-end px-2.5 py-1 mt-2.5 rounded-lg">
          <div>Resume</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/96c4355e02a7cacaf17efa92e718268172c4b87ee846527651e3387f1853f118?apiKey=0fe3c92d70f947bd8019826ed857d2fb&"
            className="object-contain shrink-0 w-5 aspect-square"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
