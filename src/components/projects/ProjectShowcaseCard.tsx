"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ProjectShowcaseCardProps } from "@/types/projectsPageInfo";
import { FaCode } from "react-icons/fa6";
import { IoDocumentAttach } from "react-icons/io5";

export default function ProjectShowcaseCard({
  title,
  description,
  techs,
  codeUrl,
  detailUrl,
  media,
  className = ""
}: ProjectShowcaseCardProps) {
  // Create transition
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-200px" });
  return (
    <section ref={ref} className={`w-full ${className} px-5 md:px-10 overflow-y-hidden`}>
      {/* Wrapper */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={inView? {opacity: 1, y: 0} : {}}
        transition={{ duration: 1.2, ease: "easeOut"}}
        className="relative mx-auto max-w-5xl rounded-2xl border border-white/90">

          {/* Media area */}
          <div className="relative overflow-hidden rounded-t-2xl bg-black/20">
            {/* Keep nice aspect like screenshot */}
            <div className="relative w-full max-h-2xl">
              {media.type === "image" ? (
                <img
                  src={media.src}
                  alt={media.alt}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              ) : (
                <video
                  className="h-full w-full object-cover"
                  src={media.src}
                  poster={media.poster}
                  muted
                  playsInline
                  autoPlay
                  loop
                  controls={false}
                />
              )}

              {/* Subtle overlay like UI screenshot */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>

        {/* BOTTOM: Purple info panel (overlaps) */}
        <div
          className="relative rounded-b-2xl px-7 py-8 shadow-2xl ring-1 ring-white/10 bg-[#7ca7d4]"
        >
          <p className="text-xl md:text-xl lg:text-2xl font-semibold tracking-tight uppercase text-[#4d2d48] mb-2">
            {title}
          </p>

          <p className="text-xs md:text-sm lg:text-base leading-relaxed text-[#4a1945]">
            {description}
          </p>

          {/* Tech chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            {techs.map((t) => (
              <span
                key={t}
                className="text-[10px] md:text-sm font-medium rounded-full border border-[#4d2d48]/50 bg-[#4d2d48]/10 px-3 py-1 text-white/80"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {codeUrl ? (
              <Link
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    inline-flex items-center gap-2 rounded-xl 
                    border border-[#4d2d48]/50 bg-[#4d2d48]/40 px-4 py-2 
                    text-xs md:text-sm lg:text-base font-semibold text-white 
                    shadow-sm transition hover:bg-[#4d2d48]/20 hover:scale-[1.06]
                    focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                {/* simple icon */}
                <FaCode className="w-4 h-4 md:w-6 md:h-6"/> CODE
              </Link>
            ) : null}

            {detailUrl ? (
              <Link
                href={detailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    inline-flex items-center gap-2 rounded-xl ml-5
                    border border-[#4d2d48]/50 bg-[#4d2d48]/40 px-4 py-2 
                    text-xs md:text-sm lg:text-base font-semibold text-white 
                    shadow-sm transition hover:bg-[#4d2d48]/20 hover:scale-[1.06]
                    focus:outline-none focus:ring-2 focus:ring-white/30
                "
              >
                <IoDocumentAttach className="w-4 h-4 md:w-6 md:h-6"/> DETAILS
              </Link>
            ) : null}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
