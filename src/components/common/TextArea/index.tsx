import { ChangeEvent, FocusEvent } from "react";

type TextAreaProps = {
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  cols?: number;
  rows?: number;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({ ...props }: TextAreaProps) => {
  return (
    <textarea
      className="w-full h-40 text-sm resize-none border-2 border-secondary-200 rounded-md focus:outline-none focus:border-primary-200 text-gray p-1.5"
      {...props}
    />
  );
};

export default TextArea;
