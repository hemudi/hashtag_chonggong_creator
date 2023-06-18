import ResultCommentTools from "@components/ResultCommentSection/ResultCommentTools";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ResultCommentTools> = {
  title: "Section/ResultComment/ResultCommentTools",
  component: ResultCommentTools,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ResultCommentTools>;
export const Default: Story = {};
