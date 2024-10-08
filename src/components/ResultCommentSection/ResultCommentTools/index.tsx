import Button from "@components/common/Button";
import { useHashTagComment } from "@store/hashtag";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ResultCommentTools = () => {
  const { hashTagComment } = useHashTagComment();
  const [isSharable, setIsSharable] = useState<boolean>(false);

  useEffect(() => {
    if (hashTagComment.length > 0) {
      setIsSharable(() => true);
    } else {
      setIsSharable(() => false);
    }
  }, [hashTagComment]);

  const handleCopyButtonClick = () => {
    window.navigator.clipboard.writeText(hashTagComment).then(() => {
      toast("복사되었습니다!");
    });
  };

  const handleShareButtonClick = () => {
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(hashTagComment));
  };

  return (
    <div className="flex items-center justify-center w-full gap-1.5">
      <Button className="gt-copy" size="full" disabled={!isSharable} onClick={handleCopyButtonClick}>
        복사하기
      </Button>
      <Button className="gt-share" size="full" disabled={!isSharable} onClick={handleShareButtonClick}>
        트위터로 공유하기
      </Button>
    </div>
  );
};

export default ResultCommentTools;
