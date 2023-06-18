import { create } from "zustand";

export type HashTag = `#${string}`;

interface HashTagStoreState {
  hashTagList: HashTag[];
}

interface HashTagAction {
  addHashTag: (newHashtag: HashTag) => void;
  removeHashTag: (hashTagIndex: number) => void;
}

interface HashTagStore extends HashTagStoreState {
  actions: HashTagAction;
}

const HASHTAG_INIT_DATA: HashTagStoreState = {
  hashTagList: ["#플레이브_노아", "#플레이브_밤비", "#플레이브_은호", "#플레이브_하민"],
};

const useHashTagStore = create<HashTagStore>((set) => ({
  ...HASHTAG_INIT_DATA,
  actions: {
    addHashTag: (newHashtag: HashTag) => {
      set(({ hashTagList }) => ({ hashTagList: [...hashTagList, newHashtag] }));
    },
    removeHashTag: (hashTagIndex: number) => {
      set(({ hashTagList }) => ({ hashTagList: hashTagList.filter((_, index) => index !== hashTagIndex) }));
    },
  },
}));

export const useHashTagAction = () => useHashTagStore(({ actions }) => actions);
export const useHashTagList = () => useHashTagStore(({ hashTagList }) => hashTagList);
export const useHashTagCount = () => useHashTagStore(({ hashTagList }) => hashTagList.length);
