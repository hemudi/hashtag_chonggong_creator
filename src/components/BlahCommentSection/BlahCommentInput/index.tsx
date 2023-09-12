import Button from "@components/common/Button";
import TextArea from "@components/common/TextArea";
import useInputValue from "@hooks/useInputValue";
import {
  CREATE_MODE,
  CreateMode,
  useBlahCommentList,
  useCreateMode,
  useHashTagComment,
  useHashTagCount,
} from "@store/hashtag";
import { parsedBlahComment } from "@utils/format";
import { ChangeEvent, useEffect } from "react";

const PLACE_HOLDER = `10자 이상의 문장을 Enter 로 구분해서 입력해주세요.\n유효한 양식으로 입력하시면 생성하기 버튼이 활성화됩니다.\n입력하신 문장의 개수에 따라 순차 생성과 랜덤 생성으로 구분됩니다.\n\n순차생성 : 해시태그 개수 + 1개 문장\n랜덤생성 : 해시태그 개수 + 1개 이상의 문장`;

const BlahCommentInput = () => {
  const hashTagCount = useHashTagCount();
  const { createMode, setCreateMode } = useCreateMode();
  const { value, deferredValue, setInputValue } = useInputValue("");
  const { blahCommentList, setBlahCommentList } = useBlahCommentList();
  const { createHashTagComment } = useHashTagComment();

  useEffect(() => {
    if (deferredValue.length > 0) {
      setBlahCommentList(parsedBlahComment(deferredValue));
    }
  }, [deferredValue, setBlahCommentList]);

  useEffect(() => {
    if (hashTagCount === 0 || blahCommentList.length < hashTagCount + 1) {
      setCreateMode(CREATE_MODE.PREVENT);
    } else if (blahCommentList.length > hashTagCount + 1) {
      setCreateMode(CREATE_MODE.RANDOM);
    } else {
      setCreateMode(CREATE_MODE.SEQUENTIAL);
    }
  }, [blahCommentList, hashTagCount, setCreateMode]);

  const handleTextAreaChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(() => target.value);
  };

  const handleCreateButtonClick = () => {
    createHashTagComment();
  };

  return (
    <div className="flex flex-col justify-center items-center gap-1.5 w-full h-full">
      <TextArea value={value} onChange={handleTextAreaChange} placeholder={PLACE_HOLDER} />
      <Button
        className="gt-create"
        size="full"
        disabled={createMode === CREATE_MODE.PREVENT}
        onClick={handleCreateButtonClick}
      >
        {createMode === CREATE_MODE.PREVENT
          ? "생성 불가"
          : createMode === CREATE_MODE.RANDOM
          ? "랜덤으로 생성하기"
          : createMode === CREATE_MODE.SEQUENTIAL
          ? "순서대로 생성하기"
          : "생성하기"}
      </Button>
    </div>
  );
};

export default BlahCommentInput;
