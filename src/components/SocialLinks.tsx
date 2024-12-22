import * as React from "react";
import { socialLinks } from "../data";

export function SocialLinks() {
  return (
    <div className="flex gap-5 items-start self-stretch my-auto">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.url} tabIndex={0}>
          <img
            loading="lazy"
            src={link.icon}
            className="object-contain shrink-0 aspect-square w-[30px]"
            alt={link.alt}
          />
        </a>
      ))}
    </div>
  );
}
