import { ReactNode } from "react";
import { styled } from "styled-components";
import theme from "@styles/theme";

const Main = ({ children }: { children: ReactNode }) => {
  return <S.Main>{children}</S.Main>;
};

const S = {
  Main: styled.main`
    ${theme.mixins.flexBox("row")}
    width: 100%;
    min-width: 800px;
    height: 100%;
    min-height: 800px;
  `,
};

export default Main;
