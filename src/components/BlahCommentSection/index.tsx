import BlahCommentInput from "@components/BlahCommentSection/BlahCommentInput";
import Section from "@layout/Section";

const BLAH_COMMENT_SECTION_TITLE = "#2 아무 말 입력";
const BLAH_COMMENT_SECTION_DESCRIPTION = `해시태그 문구 사이에 추가하고 싶은 문장들을 자유롭게 작성해주세요.`;

const BlahCommentSection = () => {
  return (
    <Section title={BLAH_COMMENT_SECTION_TITLE} description={BLAH_COMMENT_SECTION_DESCRIPTION}>
      <div className="w-full h-full gap-1.5">
        <BlahCommentInput />
      </div>
    </Section>
  );
};

export default BlahCommentSection;
