import BlahCommentInput from "@components/BlahCommentSection/BlahCommentInput";
import Section from "@layout/Section";
import theme from "@styles/theme";
import { styled } from "styled-components";

const BLAH_COMMENT_SECTION_TITLE = "#2 아무 말 입력";
const BLAH_COMMENT_SECTION_DESCRIPTION = `해시태그 문구 사이에 추가하고 싶은 문장들을 자유롭게 작성해주세요.`;

const BlahCommentSection = () => {
  return (
    <Section
      title={BLAH_COMMENT_SECTION_TITLE}
      description={BLAH_COMMENT_SECTION_DESCRIPTION}
      height="fit-content"
    >
      <S.Contents>
        <BlahCommentInput />
      </S.Contents>
    </Section>
  );
};

const S = {
  Contents: styled.div`
    ${theme.mixins.flexBox("column")}
    width: 100%;
    height: 100%;
    gap: 10px;
  `,
};
export default BlahCommentSection;
