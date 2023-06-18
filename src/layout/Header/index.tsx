import theme from "@styles/theme";
import { styled } from "styled-components";

const TITLE_TEXT = "#HashTag_Conggong_Creator";
const DESCRIPTION_TEXT = "트위터 실시간 트렌드 총공글을 쉽게 생성해보세요!";

const Header = () => {
  return (
    <S.Header>
      <S.Title>{TITLE_TEXT}</S.Title>
      <S.Description>{DESCRIPTION_TEXT}</S.Description>
    </S.Header>
  );
};

const S = {
  Header: styled.header`
    ${theme.mixins.flexBox("column")}
    ${theme.mixins.preventDraggable()}
    width: 100%;
    padding: 30px;
  `,
  Title: styled.h1`
    font-size: ${theme.fonts.size.xxLarge};
    font-weight: ${theme.fonts.weight.bold};
  `,
  Description: styled.span`
    color: ${theme.palette.neutral_dark};
    font-size: ${theme.fonts.size.medium};
  `,
};

export default Header;
