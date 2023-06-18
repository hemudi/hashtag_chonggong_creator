import theme from "@styles/theme";
import { ChangeEvent, FocusEvent } from "react";
import { styled } from "styled-components";

type Resize = "both" | "none" | "horizontal" | "vertical" | "auto";

type TextAreaProps = {
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  cols?: number;
  rows?: number;
  resize?: Resize;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({ resize = "none", ...props }: TextAreaProps) => {
  return <S.TextArea resize={resize} {...props} />;
};

const S = {
  TextArea: styled.textarea<TextAreaProps>`
    width: 100%;
    height: 150px;
    border: 2px solid ${theme.palette.primary};
    border-radius: 10px;
    padding: 10px;
    font-size: ${theme.fonts.size.small};
    resize: ${({ resize }) => resize};
    outline-color: ${theme.palette.primary_dark};
  `,
};

export default TextArea;
