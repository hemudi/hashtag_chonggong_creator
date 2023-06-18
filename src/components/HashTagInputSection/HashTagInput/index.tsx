import Button from "@components/common/Button";
import Input from "@components/common/Input";
import useInputValue from "@hooks/useInputValue";
import { useHashTagAction, useHashTagCount } from "@store/hashtag";
import theme from "@styles/theme";
import { createHashTag } from "@utils/format";
import { ChangeEvent, useEffect, useState } from "react";
import { styled } from "styled-components";

const HASHTAG_MAX_COUNT = 5;

const HashTagInput = () => {
  const [isAddible, setIsAddible] = useState<boolean>(false);
  const [isListFulled, setIsListFulled] = useState<boolean>(false);
  const { value, deferredValue, setInputValue } = useInputValue("");
  const hashTagCount = useHashTagCount();
  const { addHashTag } = useHashTagAction();

  useEffect(() => {
    if (hashTagCount >= HASHTAG_MAX_COUNT) {
      setIsListFulled(true);
    } else {
      setIsListFulled(false);
    }
  }, [hashTagCount]);

  useEffect(() => {
    if (isListFulled) {
      setIsAddible(false);
      return;
    }

    if (!deferredValue || deferredValue.length === 0) {
      setIsAddible(false);
    } else {
      setIsAddible(true);
    }
  }, [isListFulled, deferredValue]);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const handleAddButtonClick = () => {
    setInputValue((value) => {
      addHashTag(createHashTag(value));
      return "";
    });
  };

  return (
    <S.HashTagInput>
      <Input
        value={value}
        placeholder="해시태그로 쓰고 싶은 문구를 입력하세요"
        onChange={handleInputChange}
      />
      <Button disabled={!isAddible} size="medium" onClick={handleAddButtonClick}>
        {isListFulled ? "리스트 꽉 참" : "추가하기"}
      </Button>
    </S.HashTagInput>
  );
};

const S = {
  HashTagInput: styled.div`
    ${theme.mixins.flexBox()}
    width: 100%;
    height: 40px;
    gap: 10px;
  `,
};

export default HashTagInput;
