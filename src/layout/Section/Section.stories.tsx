import type { Meta, StoryObj } from "@storybook/react";
import Section from "src/layout/Section";

const meta: Meta<typeof Section> = {
  title: "Layout/Section",
  component: Section,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Section>;
export const Default: Story = {
  args: {
    title: "#2 아무 말 문장 입력",
    description: (
      <>
        <strong>추가한 해시태그 개수 + 1 개의 10자 이상의 문장</strong>을 <strong>Enter 로 구분</strong>해서
        입력해주세요.
        <br />
        만약 추가한 해시태그 개수 + 1 개 보다 많은 문장을 입력하시면 랜덤으로 섞여서 생성됩니다!
      </>
    ),
    children: <textarea className="w-full h-full" />,
  },
};
