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

export type BaseProps = {
  id: string;
  label: string;
  placeholder?: string;
  className?: string;      // wrapper
  fieldClassName?: string; // input/textarea
};

export type InputProps = BaseProps & {
  as?: "input";
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  required?: boolean;
  disabled?: boolean;
};

export type TextareaProps = BaseProps & {
  as: "textarea";
  rows?: number;
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  required?: boolean;
  disabled?: boolean;
};

export type ContactInputProps = InputProps | TextareaProps;