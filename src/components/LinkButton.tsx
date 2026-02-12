import Link, { type LinkProps } from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type LinkButtonProps = LinkProps &
  Omit<ComponentPropsWithoutRef<"a">, "href"> & {
    textToShow: string;
  };

export default function LinkButton({ textToShow, className = "", ...props }: LinkButtonProps) {
  return (
    <div className="flex justify-center mt-4">
      <Link
        {...props}
        className={[
          "inline-flex items-center justify-center",
          "px-6 py-3",
          "font-semibold tracking-[0.25em] uppercase",
          "text-white",
          "border border-white/70",
          "rounded-xl",
          "bg-white/10 backdrop-blur-sm",
          "shadow-[0_8px_24px_rgba(0,0,0,0.25)]",
          "transition-all duration-200",
          "hover:bg-white/20 hover:border-white hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:-translate-y-0.5",
          "active:translate-y-0 active:scale-[0.98] active:bg-white/25",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
          className,
        ].join(" ")}
      >
        <p>{textToShow}</p>
      </Link>
    </div>
  );
}
