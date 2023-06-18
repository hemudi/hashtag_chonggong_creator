import ResultCommentViewer from "@components/ResultCommentSection/ResultCommentViewer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ResultCommentViewer> = {
  title: "Section/ResultComment/ResultCommentViewer",
  component: ResultCommentViewer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ResultCommentViewer>;
export const Default: Story = {};
