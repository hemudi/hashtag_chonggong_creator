import theme from "@styles/theme";
import { styled } from "styled-components";

const DEVELOPER_INFO = {
  NAME: "해삼스무디",
  LINK: "https://twitter.com/plave_smoothie",
};

const Footer = () => {
  return (
    <S.Footer>
      <S.Link href={DEVELOPER_INFO.LINK} target="_blank">{`Developed By. ${DEVELOPER_INFO.NAME}`}</S.Link>
    </S.Footer>
  );
};

const S = {
  Footer: styled.footer`
    ${theme.mixins.flexBox()}
    width: 100%;
    height: 60px;
    gap: 10px;
  `,
  Author: styled.span`
    color: ${theme.colors.grey700};
    font-size: ${theme.fonts.size.small};
  `,
  Link: styled.a`
    color: ${theme.colors.grey700};
    font-size: ${theme.fonts.size.small};
    &:hover {
      color: ${theme.palette.primary_dark};
    }
  `,
};

export default Footer;
