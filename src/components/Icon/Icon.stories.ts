import Icon from "@components/Icon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  title: "Common/Icon",
  component: Icon,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Icon>;
export const Default: Story = {
  args: {
    type: "delete",
    size: "medium",
    alt: "삭제",
  },
};
