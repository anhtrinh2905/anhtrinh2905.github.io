import type { IconType } from "react-icons";

export type ContactGlassCardProps = {
  label: string;
  value: string;
  icon: IconType;
  href?: string;
};

export type OpenSourceIconProps = {
  href: string;
  label: string;
  icon: IconType;
  iconColor?: string;
};