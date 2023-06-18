"use client";

import { styled } from "styled-components";
import HashTagInputSection from "@components/HashTagInputSection";
import theme from "@styles/theme";
import BlahCommentSection from "@components/BlahCommentSection";
import ResultCommentSection from "@components/ResultCommentSection";
import { Analytics } from "@vercel/analytics/react";

export default function HomePage() {
  return (
    <>
      <S.PageContents>
        <HashTagInputSection />
        <BlahCommentSection />
        <ResultCommentSection />
      </S.PageContents>
      <Analytics />
    </>
  );
}

const S = {
  PageContents: styled.div`
    ${theme.mixins.flexBox("column")}
    height: fit-content;
    background: ${theme.palette.white};
    padding: 10px;
    border-radius: 10px;
    @media (min-width: 600px) {
      width: 570px;
      min-width: 570px;
    }
  `,
};
