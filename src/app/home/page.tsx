"use client";

import { styled } from "styled-components";
import HashTagInputSection from "@components/HashTagInputSection";
import theme from "@styles/theme";

export default function HomePage() {
  return (
    <S.PageContents>
      <HashTagInputSection />
    </S.PageContents>
  );
}

const S = {
  PageContents: styled.div`
    width: 450px;
    height: 100%;
    background: ${theme.palette.white};
    padding: 10px;
    border-radius: 10px;
  `,
};
