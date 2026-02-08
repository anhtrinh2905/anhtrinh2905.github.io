'use client'

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import { iconItem } from "@/types/honePageInfo";

interface CardWhatICanDoProps {
    linkToImage: string;
    title: string;
    icons: iconItem[];
    contain: string[];
}

const IconSvg = ({ color = "white", title = "Icon" }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    role="img"
    aria-label={title}
    style={{ color }}
    className="shrink-0"
  >
    <title>{title}</title>
    <path
      fill="currentColor"
      d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"
    />
  </svg>
);

export default function CardWhatICanDo({
    linkToImage='ml_image.png',
    title='Title',
    icons=[],
    contain=[],
} : CardWhatICanDoProps) {

    // Create transition
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="w-full lg:mt-20">
            <div className="mx-auto px-4">
                <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-start">
                
                {/* Left (image) */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView? {opacity: 1, x: 0} : {}}
                    transition={{ duration: 1.2, ease: "easeOut"}}
                    className="w-full lg:w-1/2 flex justify-center lg:justify-start"
                    >
                        <img
                        src={linkToImage}
                        alt={title}
                        className="object-contain"
                        />
                </motion.div>

                {/* Right (text) */}
                <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    animate={inView? {opacity: 1, x: 0} : {}}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="w-full lg:w-1/2"
                    >
                        <h2 className="font-semibold text-white flex justify-center">
                            {title}
                        </h2>

                        <div className="mt-6 flex flex-wrap justify-center items-center gap-5 mb-5 md:mb-0">
                        {icons.map((it) => (
                            <div key={it.title} className="flex flex-col items-center gap-2">
                            {/* Icon badge */}
                            <div
                                className="
                                flex items-center justify-center
                                h-12 w-12 lg:h-14 lg:w-14
                                rounded-xl
                                border border-white/15
                                bg-white/5 backdrop-blur-sm
                                shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                                transition-transform duration-200
                                hover:-translate-y-0.5
                                "
                                style={{
                                boxShadow: `0 10px 30px ${it.color}33`,
                                }}
                                title={it.title}
                            >
                                <Icon
                                icon={it.icon}
                                className="h-6 w-6 lg:h-8 lg:w-8"
                                style={{ color: it.color }}
                                />
                            </div>

                            <span className="hidden md:inline text-xs text-white/80">{it.title}</span>
                            </div>
                        ))}
                        </div>

                        <ul className="m-0 md:m-5 space-y-5">
                            { contain.map((text, idx) => (
                                <li key={idx} className="flex gap-3">
                                    <span>⚡</span>
                                    <p>{text}</p>
                                </li>
                            ))
                            }
                        </ul>

                </motion.div>
                </div>
            </div>
        </section>

    )
}