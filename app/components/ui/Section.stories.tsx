import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import Section, { SubTitle, SectionDesc } from "@/app/components/ui/Section";

const meta = {
  title: "UI/Section",
  component: Section,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "프로젝트 환경",
    children: <p>섹션 콘텐츠 영역입니다.</p>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("프로젝트 환경")).toBeInTheDocument();
    await expect(canvas.getByText("섹션 콘텐츠 영역입니다.")).toBeInTheDocument();
  },
};

export const WithSubTitleAndDesc: Story = {
  args: {
    title: "HTML 코드 규칙",
    children: (
      <>
        <SubTitle>기본 규칙</SubTitle>
        <SectionDesc>
          모든 태그는 소문자로 작성하며, 들여쓰기는 2칸 스페이스를 사용합니다.
        </SectionDesc>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("HTML 코드 규칙")).toBeInTheDocument();
    await expect(canvas.getByText("기본 규칙")).toBeInTheDocument();
  },
};

export const WithId: Story = {
  args: {
    title: "시맨틱 마크업",
    id: "semantic",
    children: <p>ID가 지정된 섹션입니다.</p>,
  },
  play: async ({ canvasElement }) => {
    const section = canvasElement.querySelector("#semantic");
    await expect(section).toBeTruthy();
  },
};
