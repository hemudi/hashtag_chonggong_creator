import { MouseEvent } from "react";
import { styled } from "styled-components";
import theme from "@styles/theme";
import Button from "@components/common/Button";
import Icon from "@components/common/Icon";
import { useHashTagAction } from "@store/hashtag";

interface HashTagItemProps {
  num: number;
  hashTag: string;
}

const HashTagItem = ({ num, hashTag, ...props }: HashTagItemProps) => {
  const { removeHashTag } = useHashTagAction();

  const handleClickRemoveButton = () => {
    removeHashTag(num);
  };

  return (
    <S.Item>
      <S.Index>{num}</S.Index>
      <S.HashTag>{hashTag}</S.HashTag>
      <Button size="small" onClick={handleClickRemoveButton}>
        <Icon type="delete" alt="해시태그 삭제" />
      </Button>
    </S.Item>
  );
};

const S = {
  Item: styled.li`
    ${theme.mixins.flexBox("row")}
    width: 100%;
    height: 40px;
    font-size: ${theme.fonts.size.base};
    border-radius: 10px;
    background-color: ${theme.palette.white};
    gap: 10px;
    box-shadow: 2px 2px 3px ${theme.palette.neutral};
  `,
  Index: styled.div`
    ${theme.mixins.flexBox()}
    width: 50px;
    height: 100%;
    background-color: ${theme.palette.primary};
    border-radius: 10px;
    font-weight: ${theme.fonts.weight.bold};
    font-size: ${theme.fonts.size.large};
  `,
  HashTag: styled.span`
    display: inline-block;
    width: 95%;
    line-height: ${theme.fonts.size.base};
  `,
};

export default HashTagItem;
