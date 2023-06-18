import HashTagList from "@components/HashTagInputSection/HashTagList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HashTagList> = {
  title: "Section/HashTag/HashTagList",
  component: HashTagList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HashTagList>;
export const Default: Story = {};
