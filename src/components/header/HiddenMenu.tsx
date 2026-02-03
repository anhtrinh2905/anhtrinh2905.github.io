"use client";

import { useState } from "react";
import Link from "next/link";
import { MENU_ITEMS } from "@/lib/menu";

export function HiddenMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 py-3">

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="relative z-50 right-4 top-4 ml-auto flex flex-col gap-1"
        aria-label="Toggle menu"
      >
        <span className="w-6 h-[2px] bg-white" />
        <span className="w-6 h-[2px] bg-white" />
        <span className="w-6 h-[2px] bg-white" />
      </button>

      {/* Overlay */}
      <div
        className={`
          fixed inset-0 z-40
          bg-black/60 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setOpen(false)}
      >
        {/* Side menu */}
        <nav
          className={`
            absolute right-0 top-15 h-full w-2/3
            bg-[#0f172a] p-6
            transform transition-transform duration-200 ease-out
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col gap-6 mt-12">
            {MENU_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
