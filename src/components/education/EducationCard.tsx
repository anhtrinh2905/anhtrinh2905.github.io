'use client'

import { EducationCardProps } from "@/types/educationPageInfo";
import { motion } from "framer-motion";

export default function EducationCard({
  schoolName,
  period,
  major,
  bullets,
  logoSrc,
  logoAlt = "School logo",
  websiteUrl,
  websiteLabel = "Visit Website",
}: EducationCardProps) {
  return (
    <motion.div
      className="w-full overflow-x-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.12 },
        },
      }}
    >
      <div className="flex items-center gap-5">
        {/* Left logo bubble (flip) */}
        <motion.div
          className="hidden md:flex shrink-0"
          style={{ perspective: 1200 }}
          variants={{
            hidden: { opacity: 0, rotateY: -180, scale: 0.9 },
            show: {
              opacity: 1,
              rotateY: 0,
              scale: 1,
              transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <div className="h-40 w-40 rounded-full bg-white shadow-[0_12px_32px_rgba(0,0,0,0.5)] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt={logoAlt} className="h-35 w-35 object-contain" />
          </div>
        </motion.div>

        {/* Right card (slide from right) */}
        <motion.div
          className="flex-1 rounded-xl bg-white shadow-lg overflow-hidden border border-slate-200"
          variants={{
            hidden: { opacity: 0, x: 100 },
            show: {
              opacity: 1,
              x: 0,
              transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {/* Header */}
          <div className="bg-slate-200 px-6 py-5">
            <div className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] items-start justify-between gap-4">
              <p className="text-base md:text-xl lg:text-2xl font-extrabold text-slate-800 leading-snug">
                {schoolName}
              </p>
              <p className="text-sm md:text-base text-slate-700 font-semibold whitespace-nowrap">
                {period}
              </p>
            </div>

            <div className="mt-3 text-sm md:text-xl font-semibold text-slate-700">
              {major}
            </div>
          </div>

          {/* Body */}
          <div className="px-3 py-3">
            <ul className="space-y-2">
              {bullets.map((t, i) => (
                <motion.li
                  key={i}
                  className="flex gap-3 text-slate-700"
                  variants={{
                    hidden: { opacity: 0, x: 24 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  <span className="mt-1 select-none">⚡</span>
                  <span className="text-xs md:text-base lg:text-xl leading-relaxed">{t}</span>
                </motion.li>
              ))}
            </ul>

            {/* Footer button */}
            {websiteUrl && (
              <motion.div
                className="mt-2 flex justify-end"
                variants={{
                  hidden: { opacity: 0, x: 24 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center justify-center
                    rounded-lg bg-slate-200 px-5 py-3
                    font-semibold text-slate-800
                    hover:bg-white/20 hover:border-black hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:-translate-y-0.5
                    focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2
                    transition
                  "
                >
                  <span>{websiteLabel}</span>
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Mobile logo (stacked) */}
      <div className="md:hidden mt-5 flex justify-center">
        <div className="h-28 w-28 rounded-full bg-white shadow-lg flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt={logoAlt} className="h-16 w-16 object-contain" />
        </div>
      </div>
    </motion.div>
  );
}
