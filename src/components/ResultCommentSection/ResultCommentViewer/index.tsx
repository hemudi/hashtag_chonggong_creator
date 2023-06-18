import TextArea from "@components/common/TextArea";
import { useHashTagComment } from "@store/hashtag";
import theme from "@styles/theme";
import { styled } from "styled-components";

const ResultCommentViewer = () => {
  const { hashTagComment } = useHashTagComment();
  return <S.ResultCommentViewer value={hashTagComment} disabled />;
};

const S = {
  ResultCommentViewer: styled(TextArea)`
    &:disabled {
      color: ${theme.palette.black};
      background-color: ${theme.palette.white};
    }
  `,
};

export default ResultCommentViewer;
