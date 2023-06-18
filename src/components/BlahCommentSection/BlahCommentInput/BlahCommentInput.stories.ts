import BlahCommentInput from "@components/BlahCommentSection/BlahCommentInput";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BlahCommentInput> = {
  title: "Section/BlahComment/BlahCommentInput",
  component: BlahCommentInput,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BlahCommentInput>;
export const Default: Story = {};
