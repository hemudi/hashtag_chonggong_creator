import BlahCommentSection from "@components/BlahCommentSection";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BlahCommentSection> = {
  title: "Section/BlahComment/BlahCommentSection",
  component: BlahCommentSection,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BlahCommentSection>;
export const Default: Story = {};
