import TextArea from "@components/common/TextArea";
import { useHashTagComment } from "@store/hashtag";

const ResultCommentViewer = () => {
  const { hashTagComment } = useHashTagComment();
  return <TextArea value={hashTagComment} disabled />;
};

export default ResultCommentViewer;
