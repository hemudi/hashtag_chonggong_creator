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
