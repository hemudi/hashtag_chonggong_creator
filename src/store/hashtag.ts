import { createRandomHashTagComment, createSequentialHashTagComment } from "@utils/format";

import { create } from "zustand";

export type HashTag = `#${string}` | string;
export type CreateMode = "random" | "sequential" | "prevent";

export const CREATE_MODE: { [key: string]: CreateMode } = {
  RANDOM: "random",
  SEQUENTIAL: "sequential",
  PREVENT: "prevent",
};

interface HashTagStoreState {
  createMode: CreateMode;
  hashTagList: HashTag[];
  blahCommentList: string[];
  hashTagComment: string;
}

interface HashTagAction {
  addHashTag: (newHashtag: HashTag) => void;
  removeHashTag: (hashTagIndex: number) => void;
  setBlahCommentList: (blahCommentList: string[]) => void;
  setHashTagComment: (hashTagComment: string) => void;
  setCreateMode: (currentMode: CreateMode) => void;
}

interface HashTagStore extends HashTagStoreState {
  actions: HashTagAction;
}

const HASHTAG_INIT_DATA: HashTagStoreState = {
  hashTagList: ["#테스트"],
  blahCommentList: [],
  hashTagComment: "",
  createMode: CREATE_MODE.PREVENT,
};

const useHashTagStore = create<HashTagStore>((set) => ({
  ...HASHTAG_INIT_DATA,
  actions: {
    setCreateMode: (currentMode: CreateMode) => {
      set(() => ({ createMode: currentMode }));
    },
    addHashTag: (newHashtag: HashTag) => {
      set(({ hashTagList }) => {
        if (hashTagList.indexOf(newHashtag) >= 0) return { hashTagList };
        return { hashTagList: [...hashTagList, newHashtag] };
      });
    },
    removeHashTag: (hashTagIndex: number) => {
      set(({ hashTagList }) => ({ hashTagList: hashTagList.filter((_, index) => index !== hashTagIndex) }));
    },
    setBlahCommentList: (newBlahCommentList: string[]) => {
      set(() => ({ blahCommentList: newBlahCommentList }));
    },
    setHashTagComment: (newHashTagComment: string) => {
      set(() => ({ hashTagComment: newHashTagComment }));
    },
  },
}));

export const useHashTagAction = () => useHashTagStore(({ actions }) => actions);

export const useHashTagList = () => useHashTagStore(({ hashTagList }) => hashTagList);
export const useHashTagCount = () => useHashTagStore(({ hashTagList }) => hashTagList.length);

export const useBlahCommentList = () =>
  useHashTagStore(({ blahCommentList, actions }) => ({
    blahCommentList,
    setBlahCommentList: actions.setBlahCommentList,
  }));

export const useCreateMode = () =>
  useHashTagStore(({ createMode, actions }) => ({ createMode, setCreateMode: actions.setCreateMode }));

export const useHashTagComment = () => {
  const { hashTagList, blahCommentList, hashTagComment, createMode, actions } = useHashTagStore();
  const { setHashTagComment } = actions;

  const createHashTagComment = () => {
    switch (createMode) {
      case CREATE_MODE.PREVENT:
        break;
      case CREATE_MODE.RANDOM:
        setHashTagComment(createRandomHashTagComment(hashTagList, blahCommentList));
        break;
      case CREATE_MODE.SEQUENTIAL:
        setHashTagComment(createSequentialHashTagComment(hashTagList, blahCommentList));
        break;
      default:
        break;
    }
  };

  return { createHashTagComment, hashTagComment };
};
