import { OpenSourceIconProps } from "@/types/contactPageInfo";
import Link from "next/link";

export default function OpenSourceIcon({
    href, 
    label, 
    icon: Icon,
    iconColor="#000000",
}:OpenSourceIconProps){
    return (
        <Link
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        className={[
            "inline-flex items-center justify-center",
            "transition-transform duration-200 ease-out",
            "hover:scale-125 hover:brightness-125",
            "active:scale-110 active:brightness-150",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/90",
        ].join(" ")}
        >
            <Icon 
                className="pointer-events-none h-8 w-8 md:h-12 md:w-12 lg:h-14 lg:w-14 bg-white rounded-2xl" 
                style={{ color: iconColor}}
                />
        </Link>
    )
}