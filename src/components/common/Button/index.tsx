import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  size: "small" | "medium" | "full";
  disabled?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ButtonSize = {
  small: "w-12 h-10",
  medium: "w-24 h-10",
  full: "w-full h-10",
};

const Button = ({ size, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`${ButtonSize[size]} flex items-center justify-center text-slate-200 bg-black rounded-md text-xs sm:text-sm enabled:hover:bg-black enabled:active:bg-primary-500 enabled:active:text-black disabled:bg-neutral-200 disabled:text-neutral-500 ${className}`}
      {...props}
    ></button>
  );
};

export default Button;
