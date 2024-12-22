import * as React from "react";
import { NavigationItem } from "./components/NavigationItem";
import { TechnicalSkillsCard } from "./components/TechnicalSkillsCard";
import { ProjectsSection } from "./components/ProjectsSection";
import { SocialLinks } from "./components/SocialLinks";

export function Portfolio() {
  return (
    <div className="flex overflow-hidden flex-col justify-center px-7 py-5 bg-stone-900 max-md:px-5">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-center px-5 py-6 w-full text-2xl bg-green-200 rounded-xl max-md:max-w-full">
          <div className="self-stretch my-auto font-bold text-zinc-950 w-[241px]">
            Gouri Singh Rawat
          </div>
          <div className="flex gap-10 items-center self-stretch my-auto text-center whitespace-nowrap min-w-[240px] text-black text-opacity-50 max-md:max-w-full">
            <NavigationItem label="Developer" isActive={true} />
            <NavigationItem label="Editor" />
            <NavigationItem label="Designer" />
          </div>
        </div>
        <div className="flex flex-wrap gap-5 items-center mt-5 w-full max-md:max-w-full">
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[791px] max-md:max-w-full">
            <div className="flex flex-wrap gap-5 items-center w-full text-3xl font-medium text-zinc-950 max-md:max-w-full">
              <div className="grow shrink gap-2.5 self-stretch px-5 pt-52 pb-16 my-auto bg-green-200 rounded-xl min-h-[400px] min-w-[240px] w-[437px] max-md:pt-24 max-md:max-w-full">
                Turning real-world problems into impactful, scalable software
                solutions.
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/bc485ce5ddc97de722c5846f4c79b6b1f8e907a1ff7b1ae2c7d675ced62f9384?apiKey=0fe3c92d70f947bd8019826ed857d2fb&"
                className="object-contain grow shrink self-stretch my-auto rounded-xl aspect-[0.69] min-w-[240px] w-[222px]"
                alt="Profile"
              />
            </div>
            <div className="flex flex-wrap gap-5 self-end mt-5 w-full max-w-[794px] min-h-[274px] max-md:max-w-full">
              <div className="flex-1 shrink gap-2.5 pt-20 pr-10 pb-10 pl-5 h-full text-xl bg-green-200 rounded-xl min-w-[240px] text-zinc-950 max-md:pr-5">
                I am a pre-final year engineering student with expertise in
                UI/UX design, video editing, and creative direction at Fooddle.
              </div>
              <TechnicalSkillsCard />
            </div>
          </div>
          <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
            <ProjectsSection />
            <div className="flex gap-10 justify-between items-center px-5 py-3.5 mt-5 w-full bg-green-200 rounded-xl min-h-[63px]">
              <div className="self-stretch my-auto text-2xl font-medium text-zinc-950 w-[145px]">
                Contact Me
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
