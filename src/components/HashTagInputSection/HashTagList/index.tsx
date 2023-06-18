/* eslint-disable react/jsx-key */
import HashTagItem from "@components/HashTagInputSection/HashTagList/HashTagItem";
import { useHashTagList } from "@store/hashtag";
import theme from "@styles/theme";
import { styled } from "styled-components";

const HashTagList = () => {
  const hashTagList = useHashTagList();
  return (
    <S.HashTagList>
      {hashTagList.map((value, index) => (
        <HashTagItem key={index} hashTag={value} num={index} />
      ))}
    </S.HashTagList>
  );
};

const S = {
  HashTagList: styled.ul`
    ${theme.mixins.flexBox("column")}
    width: 100%;
    height: 100%;
    gap: 10px;
    background-color: ${theme.palette.primary_light};
    padding: 10px;
  `,
};

export default HashTagList;
