import Button from "@components/common/Button";
import TextArea from "@components/common/TextArea";
import useInputValue from "@hooks/useInputValue";
import { useHashTagCount } from "@store/hashtag";
import theme from "@styles/theme";
import { parsedBlahComment } from "@utils/format";
import { ChangeEvent, useEffect, useState } from "react";
import { styled } from "styled-components";

type CreateMode = "random" | "sequential" | "prevent";

const CREATE_MODE: { [key: string]: CreateMode } = {
  RANDOM: "random",
  SEQUENTIAL: "sequential",
  PREVENT: "prevent",
};

const BlahCommentInput = () => {
  const { value, deferredValue, setInputValue } = useInputValue("");
  const [blahCommentList, setBlahCommentList] = useState<string[]>([]);
  const [createMode, setCreateMode] = useState<CreateMode>(CREATE_MODE.PREVENT);
  const hashTagCount = useHashTagCount();

  useEffect(() => {
    if (deferredValue.length > 0) {
      setBlahCommentList(parsedBlahComment(deferredValue));
    }
  }, [deferredValue]);

  useEffect(() => {
    if (hashTagCount === 0 || blahCommentList.length < hashTagCount + 1) {
      setCreateMode(CREATE_MODE.PREVENT);
    } else if (blahCommentList.length > hashTagCount + 1) {
      setCreateMode(CREATE_MODE.RANDOM);
    } else {
      setCreateMode(CREATE_MODE.SEQUENTIAL);
    }
  }, [blahCommentList, hashTagCount]);

  const handleTextAreaChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(() => target.value);
  };

  return (
    <S.BlahCommentInput>
      <TextArea
        value={value}
        onChange={handleTextAreaChange}
        placeholder={`해시태그 사이에 추가하고 싶은 문장들을 작성해주세요\n유효한 양식으로 입력하시면 생성하기 버튼이 활성화됩니다.`}
      />
      <Button size="full" disabled={createMode === CREATE_MODE.PREVENT}>
        {"생성하기"}
      </Button>
    </S.BlahCommentInput>
  );
};

const S = {
  BlahCommentInput: styled.div`
    ${theme.mixins.flexBox("column")}
    width: 100%;
    height: 100%;
    gap: 10px;
  `,
};

export default BlahCommentInput;
