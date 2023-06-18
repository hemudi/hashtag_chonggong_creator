"use client";

import Footer from "@layout/Footer";
import Header from "@layout/Header";
import Main from "@layout/Main";
import theme from "@styles/theme";
import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.Layout>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </S.Layout>
  );
};

const S = {
  Layout: styled.div`
    ${theme.mixins.flexBox("column", "center", "flex-start")}
    min-height: 100vh;
  `,
};

export default Layout;
