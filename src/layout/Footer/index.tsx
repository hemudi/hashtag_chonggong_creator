import theme from "@styles/theme";
import { styled } from "styled-components";

const AUTHOR_NICKNAME = "Heasam Smoothie";

const Footer = () => {
  return (
    <S.Footer>
      <S.Author>{`Created By. ${AUTHOR_NICKNAME}`}</S.Author>
    </S.Footer>
  );
};

const S = {
  Footer: styled.footer`
    ${theme.mixins.flexBox()}
    width: 100%;
    height: 60px;
  `,
  Author: styled.span`
    color: ${theme.colors.grey700};
  `,
  Link: styled.a`
    color: ${theme.palette.primary_dark};
  `,
};

export default Footer;
