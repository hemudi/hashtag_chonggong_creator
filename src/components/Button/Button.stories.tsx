import type { Meta, StoryObj } from "@storybook/react";

import Button from "@components/Button";
import Icon from "@components/Icon";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const TextButton: Story = {
  args: {
    size: "medium",
    children: "Button",
    onClick: () => {
      console.log("Button Clicked");
    },
  },
};

export const IconButton: Story = {
  args: {
    size: "medium",
    children: <Icon type="delete" alt="삭제" />,
    onClick: () => {
      console.log("Button Clicked");
    },
  },
};
