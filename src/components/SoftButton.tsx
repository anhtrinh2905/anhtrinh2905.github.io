"use client";

import React from "react";

type SoftButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export default function SoftButton({
  label = "Explore",
  className = "",
  ...props
}: SoftButtonProps) {
  return (
    <button
      className={[
        // layout
        "flex items-center justify-center gap-5",
        "px-10 py-4",
        "rounded-full",

        // typography
        "font-bold uppercase tracking-[0.5px]",
        "text-[#7e97b8]",

        // background & border
        "bg-[#e0e8ef]",
        "border-2 border-[rgba(255,255,255,0.333)]",

        // neumorphism shadow
        "shadow-[-2px_-1px_8px_#ffffff,4px_2px_16px_rgba(95,157,231,0.48)]",

        // transform & transition
        "transform transition-all duration-200",

        // hover
        "hover:text-[#516d91]",
        "hover:bg-[#E5EDF5]",
        "hover:shadow-[-1px_-1px_4px_#ffffff,2px_1px_8px_rgba(95,157,231,0.48)]",

        // active
        "active:shadow-none",

        // Non whitespace
        "whitespace-nowrap",

        className,
      ].join(" ")}
      {...props}
    >
      <p>{label}</p>
    </button>
  );
}
