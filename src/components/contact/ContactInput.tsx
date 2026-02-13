// components/ContactField.tsx
import React from "react";
import { ContactInputProps } from "@/types/contactPageInfo";

export default function ContactField(props: ContactInputProps) {
  const {
    id,
    label,
    placeholder,
    className = "",
    fieldClassName = "",
  } = props;

  const commonFieldClass = [
    "w-full rounded-2xl bg-slate-700/35",
    "px-6 py-4",
    "text-sm md:text-base lg:text-xl text-white/90 placeholder:text-white/35",
    "border border-white/25 outline-none",
    "transition duration-200",
    "focus:border-teal-200/80 focus:ring-4 focus:ring-teal-200/20",
    "focus:shadow-[0_0_0_2px_rgba(153,246,228,0.55),0_12px_40px_rgba(0,0,0,0.35)]",
    "disabled:opacity-60 disabled:cursor-not-allowed",
    fieldClassName,
  ].join(" ");

  return (
    <div className={["w-full", className].join(" ")}>
      <label htmlFor={id} className="mb-3 block text-white/90">
        <span className="text-sm md:text-base lg:text-xl uppercase">{label}</span>
      </label>

      {"as" in props && props.as === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          rows={props.rows ?? 6}
          value={props.value}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          required={props.required}
          disabled={props.disabled}
          className={[commonFieldClass, "resize-none align-top"].join(" ")}
        />
      ) : (
        <input
          id={id}
          type={props.type ?? "text"}
          placeholder={placeholder}
          value={props.value}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          required={props.required}
          disabled={props.disabled}
          className={commonFieldClass}
        />
      )}
    </div>
  );
}
