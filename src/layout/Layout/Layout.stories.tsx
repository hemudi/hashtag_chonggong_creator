import type { Meta, StoryObj } from "@storybook/react";
import Layout from "src/layout/Layout";

const meta: Meta<typeof Layout> = {
  title: "Layout/Layout",
  component: Layout,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Layout>;
export const Default: Story = {
  args: {
    children: <div className="flex items-center justify-center w-full h-full">Main Contents</div>,
  },
};
