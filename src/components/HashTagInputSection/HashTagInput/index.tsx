import Button from "@components/common/Button";
import Input from "@components/common/Input";
import useInputValue from "@hooks/useInputValue";
import { useHashTagAction, useHashTagCount } from "@store/hashtag";
import { createHashTag } from "@utils/format";
import { ChangeEvent, useEffect, useState, KeyboardEvent } from "react";

const HASHTAG_MAX_COUNT = 5;

const HashTagInput = () => {
  const [isAddible, setIsAddible] = useState<boolean>(true);
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

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (isListFulled || !isAddible) return;
    if (e.key === "Enter") {
      handleAddButtonClick();
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-10 gap-2.5">
      <Input
        value={value}
        placeholder={isListFulled ? "더이상 추가할수 없습니다!" : "해시태그로 쓰고 싶은 문구를 입력하세요!"}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        disabled={isListFulled}
      />
      <Button disabled={!isAddible} size="medium" onClick={handleAddButtonClick}>
        {isAddible ? (isListFulled ? "리스트 꽉 참" : "추가하기") : "추가하기"}
      </Button>
    </div>
  );
};

export default HashTagInput;
