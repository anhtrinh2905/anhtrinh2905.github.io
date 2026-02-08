"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Scroll to top"
      className={`
        fixed right-5 bottom-5 z-50
        h-14 w-14 rounded-full
        border border-white/20
        bg-white/5 backdrop-blur-sm
        shadow-[0_10px_30px_rgba(0,0,0,0.35)]
        grid place-items-center
        transition-all duration-200
        hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.45)]
        active:translate-y-0 active:scale-95
        ${show ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
      `}
    >
      {/* arrow up */}
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
