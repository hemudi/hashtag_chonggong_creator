import BlahCommentInput from "@components/BlahCommentSection/BlahCommentInput";
import Section from "@layout/Section";

const BLAH_COMMENT_SECTION_TITLE = "#2 아무 말 입력";
const BLAH_COMMENT_SECTION_DESCRIPTION = `해시태그 사이에 추가하고 싶은 문장들을 자유롭게 작성해주세요.\n10 글자가 넘지 않는 문장은 생성 시 포함되지 않습니다.\n특수문자, 이모티콘, 숫자는 생성 시 자동으로 필터링됩니다.`;

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
