import { HashTag } from "@store/hashtag";

export const createHashTag = (hashTagText: string): HashTag => {
  const hashTag = (hashTagText.indexOf("#") !== 0 ? "#" : "") + hashTagText.replaceAll(" ", "_");
  return hashTag as HashTag;
};

export const parsedBlahComment = (blahComment: string): string[] => {
  return blahComment
    .replace(/ /g, "") // 공백제거
    .split("\n") // Enter 로 구분
    .filter((value) => value !== "" && value.length >= 10); // 10자 넘는 문장만
};

export const createRandomHashTagComment = (hashTagList: HashTag[], blahCommentList: string[]): string => {
  const count = hashTagList.length + 1;
  const maxIndex = blahCommentList.length;
  const randomIndexList = getRandomNumbers(maxIndex, count);
  const result =
    hashTagList.reduce(
      (prev, hashTag, index) => `${prev}${blahCommentList[randomIndexList[index]]}\n${hashTag}\n`,
      ""
    ) + blahCommentList[randomIndexList[randomIndexList.length - 1]];
  return result;
};

export const createSequentialHashTagComment = (hashTagList: HashTag[], blahCommentList: string[]): string => {
  const result =
    hashTagList.reduce((prev, hashTag, index) => `${prev}${blahCommentList[index]}\n${hashTag}\n`, "") +
    blahCommentList[blahCommentList.length - 1];
  return result;
};

const getRandomNumbers = (max: number, count: number): number[] => {
  const numbers = Array.from({ length: max }, (_, index) => index);
  const randomNumbers = new Set<number>();
  while (randomNumbers.size < count) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomNumber = numbers[randomIndex];
    randomNumbers.add(randomNumber);
    numbers.splice(randomIndex, 1);
  }
  return Array.from(randomNumbers);
};
