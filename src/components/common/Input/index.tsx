import { ChangeEvent, FocusEvent, KeyboardEvent } from "react";

type TextInputTypes = "text" | "email" | "number" | "password" | "search" | "tel" | "date" | "url";

interface InputProps {
  id?: string;
  name?: string;
  type?: TextInputTypes;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  return (
    <input
      className="w-full h-10 px-1.5 bg-white border-2 border-black rounded-md focus:outline-none disabled:border-gray text-gray text-xs sm:text-sm "
      {...props}
    />
  );
};

export default Input;
