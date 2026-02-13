// components/SendMessageButton.tsx
import React from "react";

type SendMessageButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
};

export default function SendMessageButton({
  text = "Send Message",
  className = "",
  ...props
}: SendMessageButtonProps) {
  return (
    <button
      type="button"
      className={[
        "w-full",
        "rounded-2xl",
        "bg-white/10",
        "px-4 py-4",
        "border borber-white",
        "uppercase tracking-wide text-white/80",
        "shadow-[0_18px_50px_rgba(0,0,0,0.35)]",
        "transition-transform duration-200 ease-out",
        "hover:brightness-120 hover:bg-white/20 hover:text-white hover:scale-[1.03]",
        "active:scale-[0.99] active:brightness-95",
        "focus:outline-none focus-visible:ring-4 focus-visible:ring-[#bff6ea]/40",
        className,
      ].join(" ")}
      {...props}
    >
      <span className="inline-flex items-center justify-center gap-4">
        <span>{text}</span>
        <span aria-hidden className="leading-none">
          →
        </span>
      </span>
    </button>
  );
}
