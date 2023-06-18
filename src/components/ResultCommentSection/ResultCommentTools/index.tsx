import Button from "@components/common/Button";
import { useHashTagComment } from "@store/hashtag";
import theme from "@styles/theme";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const ResultCommentTools = () => {
  const { hashTagComment } = useHashTagComment();
  const [isSharable, setIsSharable] = useState<boolean>(false);

  useEffect(() => {
    if (hashTagComment.length > 0) {
      setIsSharable(() => true);
    } else {
      setIsSharable(() => false);
    }
  }, [hashTagComment]);

  const handleCopyButtonClick = () => {
    window.navigator.clipboard.writeText(hashTagComment);
  };

  const handleShareButtonClick = () => {
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(hashTagComment));
  };

  return (
    <S.ResultCommentTools>
      <Button size="full" disabled={!isSharable} onClick={handleCopyButtonClick}>
        복사하기
      </Button>
      <Button size="full" disabled={!isSharable} onClick={handleShareButtonClick}>
        트위터로 공유하기
      </Button>
    </S.ResultCommentTools>
  );
};

const S = {
  ResultCommentTools: styled.div`
    ${theme.mixins.flexBox()}
    width: 100%;
    gap: 10px;
  `,
};

export default ResultCommentTools;
