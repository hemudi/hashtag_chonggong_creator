import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  size: "small" | "medium" | "full";
  disabled?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ButtonSize = {
  small: "w-12 h-10",
  medium: "w-24 h-10",
  full: "w-full h-10",
};

const Button = ({ size, ...props }: ButtonProps) => {
  return (
    <button
      className={`${ButtonSize[size]} flex items-center justify-center text-neutral-800 bg-secondary-100 rounded-md text-sm enabled:hover:bg-primary-200 enabled:active:bg-primary-500 disabled:bg-neutral-200 disabled:text-neutral-500`}
      {...props}
    ></button>
  );
};

export default Button;
