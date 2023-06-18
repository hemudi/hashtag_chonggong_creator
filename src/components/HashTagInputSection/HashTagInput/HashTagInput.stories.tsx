import HashTagInput from "@components/HashTagInputSection/HashTagInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HashTagInput> = {
  title: "HashTag/HashTagInput",
  component: HashTagInput,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HashTagInput>;
export const Default: Story = {};
