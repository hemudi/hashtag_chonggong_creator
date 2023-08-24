import ResultCommentTools from "@components/ResultCommentSection/ResultCommentTools";
import ResultCommentViewer from "@components/ResultCommentSection/ResultCommentViewer";
import Section from "@layout/Section";
import theme from "@styles/theme";
import { styled } from "styled-components";

const RESULT_COMMENT_TITLE = "#3 결과 확인 및 공유";
const RESULT_COMMENT_DESCRIPTION = `생성된 총공글을 확인해보세요!\n원하는 양식대로 생성되었다면 복사해서 붙여넣거나 바로 트위터로 공유해보세요!`;

const ResultCommentSection = () => {
  return (
    <Section title={RESULT_COMMENT_TITLE} description={RESULT_COMMENT_DESCRIPTION}>
      <div className="flex flex-col items-center justify-center w-full h-full gap-1.5">
        <ResultCommentViewer />
        <ResultCommentTools />
      </div>
    </Section>
  );
};

export default ResultCommentSection;
