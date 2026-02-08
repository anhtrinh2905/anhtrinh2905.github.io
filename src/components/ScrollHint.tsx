interface CrollHintProps {
    id: string;
}

export default function ScrollHint({
    id = '',
}: CrollHintProps){
    const linkToSection = "#" + id;
    return(
        <div>
            <a
                href={linkToSection}
                aria-label="Scroll down to What I can do"
                className="
                group
                flex h-12 w-12 items-center justify-center
                rounded-full
                border border-white/20
                bg-white/5 backdrop-blur-sm
                shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                transition
                hover:bg-white/10 hover:-translate-y-0.5
                active:scale-95
                animate-bounce
                "
            >
                <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-white/80 transition group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M12 5v14" />
                <path d="M19 12l-7 7-7-7" />
                </svg>
            </a>
        </div>
    )
}