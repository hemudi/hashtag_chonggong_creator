import HashTagInputSection from "@components/HashTagInputSection";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HashTagInputSection> = {
  title: "HashTag/HashTagInputSection",
  component: HashTagInputSection,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HashTagInputSection>;
export const Default: Story = {};
