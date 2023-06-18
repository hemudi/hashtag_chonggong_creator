import HashTagItem from "@components/HashTagInputSection/HashTagList/HashTagItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HashTagItem> = {
  title: "HashTag/HashTagItem",
  component: HashTagItem,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HashTagItem>;
export const Default: Story = {
  args: {
    num: 1,
    hashTag: "#플레이브_100일_축하해",
  },
};
