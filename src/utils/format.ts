import { HashTag } from "@store/hashtag";

export const createHashTag = (hashTagText: string): HashTag => {
  const hashTag = (hashTagText.indexOf("#") !== 0 ? "#" : "") + hashTagText.replaceAll(" ", "_");
  return hashTag as HashTag;
};
