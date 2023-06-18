/* eslint-disable react/jsx-key */
import HashTagItem from "@components/HashTagInputSection/HashTagList/HashTagItem";
import { useHashTagList } from "@store/hashtag";
import theme from "@styles/theme";
import { styled } from "styled-components";

const HashTagList = () => {
  const hashTagList = useHashTagList();
  return (
    <S.HashTagList>
      {hashTagList.length > 0
        ? hashTagList.map((value, index) => <HashTagItem key={index} hashTag={value} num={index + 1} />)
        : "추가 된 해시태그가 없습니다!"}
    </S.HashTagList>
  );
};

const S = {
  HashTagList: styled.ul`
    ${theme.mixins.flexBox("column")}
    ${theme.mixins.preventDraggable()}
    width: 100%;
    height: 100%;
    min-height: 40px;
    gap: 10px;
    color: ${theme.palette.neutral_dark};
    background-color: ${theme.palette.primary_light};
    border-radius: 10px;
    padding: 10px;
  `,
};

export default HashTagList;
