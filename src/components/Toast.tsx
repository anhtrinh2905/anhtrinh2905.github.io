"use client";

import { useEffect } from "react";

type ToastProps = {
  open: boolean;
  message: string;
  variant?: "success" | "error";
  durationMs?: number;
  onClose: () => void;
};

export function Toast({
  open,
  message,
  variant = "success",
  durationMs = 2500,
  onClose,
}: ToastProps) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, durationMs);
    return () => clearTimeout(t);
  }, [open, durationMs, onClose]);

  if (!open) return null;

  const styles =
    variant === "success"
      ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-100"
      : "border-rose-400/30 bg-rose-500/10 text-rose-100";

  const dot = variant === "success" ? "bg-emerald-400" : "bg-rose-400";

  return (
    <div className="fixed right-4 top-4 z-50">
      <div
        className={[
          "flex items-start gap-3 rounded-xl border px-4 py-3 shadow-lg backdrop-blur",
          "animate-[toastIn_220ms_ease-out]",
          styles,
        ].join(" ")}
        role="status"
        aria-live="polite"
      >
        <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${dot}`} />
        <div className="text-sm leading-5">{message}</div>

        <button
          onClick={onClose}
          className="ml-2 rounded-md px-2 py-1 text-xs opacity-80 hover:opacity-100"
          aria-label="Close toast"
          type="button"
        >
          ✕
        </button>
      </div>

      <style jsx>{`
        @keyframes toastIn {
          from {
            transform: translateY(-8px);
            opacity: 0;
          }
          to {
            transform: translateY(0px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
