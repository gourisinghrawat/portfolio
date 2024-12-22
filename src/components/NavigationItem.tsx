import * as React from "react";
interface NavigationItemProps {
  label: string;
  isActive?: boolean;
}

export function NavigationItem({ label, isActive }: NavigationItemProps) {
  return (
    <div
      className={`gap-2.5 self-stretch my-auto ${
        isActive ? "font-bold text-black border-b-2 border-black w-[113px]" : ""
      }`}
    >
      {label}
    </div>
  );
}
