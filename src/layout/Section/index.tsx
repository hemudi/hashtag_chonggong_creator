import theme from "@styles/theme";
import { ReactNode } from "react";
import { styled } from "styled-components";

interface SectionProps {
  title: string;
  description?: ReactNode;
  width?: `${number}px` | `${number}%` | "fit-content";
  height?: `${number}px` | `${number}%` | "fit-content";
  children: ReactNode;
}

const Section = ({ title, description = "", width, height, children }: SectionProps) => {
  return (
    <S.Section width={width} height={height}>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      {children}
      {/* <S.Contents>{children}</S.Contents> */}
    </S.Section>
  );
};

const S = {
  Section: styled.section<Pick<SectionProps, "width" | "height">>`
    ${theme.mixins.flexBox("column", "flex-start")}
    width: ${({ width = "100%" }) => width};
    height: ${({ height = "100%" }) => height};
    min-width: 400px;
    min-height: fit-content;
    padding: 10px;
  `,
  Title: styled.h2`
    width: 100%;
    font-size: ${theme.fonts.size.large};
    font-weight: ${theme.fonts.weight.bold};
  `,
  Description: styled.p`
    width: 100%;
    white-space: pre-line;
    font-size: ${theme.fonts.size.small};
    line-height: ${theme.fonts.size.medium};
    color: ${theme.palette.neutral_dark};
    padding: 5px 0 10px 0;
  `,
  Contents: styled.div`
    width: 100%;
    height: 100%;
  `,
};

export default Section;
