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
    removeHashTag(num - 1);
  };

  return (
    <S.Item>
      <S.Index>{num}</S.Index>
      <S.HashTag>{hashTag}</S.HashTag>
      <Button size="small" backColor="secondary" onClick={handleClickRemoveButton}>
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
    color: ${theme.palette.black};
    background-color: ${theme.palette.white};
    gap: 10px;
    box-shadow: 2px 2px 3px ${theme.palette.neutral};
    overflow: hidden;
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
  HashTag: styled.div`
    ${theme.mixins.flexBox("column", "flex-start")}
    width: 100%;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
    text-overflow: ellipsis;
  `,
};

export default HashTagItem;
