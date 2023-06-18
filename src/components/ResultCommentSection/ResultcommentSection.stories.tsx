import ResultCommentSection from "@components/ResultCommentSection";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ResultCommentSection> = {
  title: "Section/ResultComment/ResultCommentSection",
  component: ResultCommentSection,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ResultCommentSection>;
export const Default: Story = {};
