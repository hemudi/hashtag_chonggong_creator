import theme from "@styles/theme";
import { ChangeEvent, FocusEvent } from "react";
import styled from "styled-components";

type TextInputTypes = "text" | "email" | "number" | "password" | "search" | "tel" | "date" | "url";

interface InputProps {
  id?: string;
  name?: string;
  type?: TextInputTypes;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  return <S.Input {...props} />;
};

const S = {
  Input: styled.input<InputProps>`
    width: 100%;
    height: 40px;
    border: 2px solid ${theme.palette.primary};
    border-radius: 10px;
    padding: 0 10px;
    font-size: ${theme.fonts.size.base};
    background-color: ${theme.palette.white};
    &:focus {
      border-color: ${theme.palette.primary_dark};
      background-color: "orange";
    }
  `,
};

export default Input;
