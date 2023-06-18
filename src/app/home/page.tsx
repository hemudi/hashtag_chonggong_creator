"use client";

import { styled } from "styled-components";
import HashTagInputSection from "@components/HashTagInputSection";
import theme from "@styles/theme";
import BlahCommentSection from "@components/BlahCommentSection";

export default function HomePage() {
  return (
    <S.PageContents>
      <HashTagInputSection />
      <BlahCommentSection />
    </S.PageContents>
  );
}

const S = {
  PageContents: styled.div`
    width: 570px;
    min-width: 450px;
    height: 100%;
    background: ${theme.palette.white};
    padding: 10px;
    border-radius: 10px;
  `,
};
