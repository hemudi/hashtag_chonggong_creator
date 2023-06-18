import theme from "@styles/theme";
import { Palette } from "@styles/theme/colors";
import { MouseEventHandler, ReactNode } from "react";
import { css, styled } from "styled-components";

interface ButtonProps {
  size: "large" | "medium" | "small" | "full";
  disabled?: boolean;
  children: ReactNode;
  backColor?: keyof Palette;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ size, backColor, ...props }: ButtonProps) => {
  return <S.Button size={size} {...props}></S.Button>;
};

const S = {
  Button: styled.button<ButtonProps>`
    ${({ size = "medium" }) => ButtonSizeStyle[size]}
    background-color: ${({ backColor = "primary" }) => theme.palette[backColor]};
    border-radius: 10px;
    font-size: ${theme.fonts.size.small};
    font-weight: ${theme.fonts.weight.regular};
    &:enabled:hover {
      background-color: ${({ backColor = "primary" }) =>
        backColor === "primary" ? theme.palette.primary_dark : theme.palette.secondary_dark};
    }
    &:enabled:active {
      background-color: ${({ backColor = "primary" }) => theme.palette[backColor]};
      border: 2px solid
        ${({ backColor = "primary" }) =>
          backColor === "primary" ? theme.palette.primary_dark : theme.palette.secondary_dark};
    }
    &:disabled {
      color: ${theme.palette.neutral_dark};
      background-color: ${theme.palette.neutral_light};
      cursor: not-allowed;
    }
  `,
};

const ButtonSizeStyle = {
  small: css`
    width: 50px;
    height: 40px;
  `,
  medium: css`
    width: 100px;
    height: 40px;
  `,
  large: css`
    width: 520px;
    height: 40px;
  `,
  full: css`
    width: 100%;
    height: 40px;
  `,
};

export default Button;
