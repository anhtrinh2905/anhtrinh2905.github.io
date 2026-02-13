import { ContactGlassCardProps } from "@/types/contactPageInfo";

export default function ContactGlassCard({
  label,
  value,
  icon: Icon,
  href,
}: ContactGlassCardProps) {
  const content = (
    <div
      className={[
        "w-full",
        "flex items-center gap-6 md:gap-8 lg:gap-10",
        "rounded-2xl",
        "border border-white/15",
        "bg-white/5 backdrop-blur-md",
        "px-4 md:px-8 py-2 md:py-4",
        "shadow-[0_18px_60px_rgba(0,0,0,0.25)]",
        "transition-transform duration-300 ease-out",
        "hover:-translate-y-0.5 hover:scale-[1.01]",
      ].join(" ")}
    >
      {/* Icon box */}
      <div className="flex items-center justify-center rounded-1xl ring-1 ring-white/10">
        <div className="text-[#ffffff]">
          <Icon className="w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 text-[#8acbd3]" />
        </div>
      </div>

      {/* Text */}
      <div className="min-w-0">
        <p className="font-medium text-[#8acbd3]/60">{label}</p>
        <p className="mt-1 truncate font-semibold tracking-wide text-[#9ccfd5]">
          {value}
        </p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      {content}
    </a>
  );
}
