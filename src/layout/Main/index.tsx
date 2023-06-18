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
    height: 100%;
  `,
};

export default Main;
