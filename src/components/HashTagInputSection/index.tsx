import HashTagInput from "@components/HashTagInputSection/HashTagInput";
import HashTagList from "@components/HashTagInputSection/HashTagList";
import Section from "@layout/Section";
import theme from "@styles/theme";
import { styled } from "styled-components";

const HASHTAG_INPUT_SECTION_TITLE = "#1 해시태그 문구 입력";
const HASHTAG_INPUT_SECTION_DESCRIPTION = `트위터 실트에 올리고 싶은 문구를 입력해주세요.\n10~15자 사이가 권장되며 최대 다섯개까지 입력 가능합니다!`;

const HashTagInputSection = () => {
  return (
    <Section
      title={HASHTAG_INPUT_SECTION_TITLE}
      description={HASHTAG_INPUT_SECTION_DESCRIPTION}
      height="fit-content"
    >
      <S.Contents>
        <HashTagInput />
        <HashTagList />
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

export default HashTagInputSection;
