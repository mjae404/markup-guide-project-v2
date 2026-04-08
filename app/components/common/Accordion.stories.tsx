import type { Meta } from "@storybook/nextjs-vite";
import { expect, within, userEvent } from "storybook/test";
import Accordion from "@/app/components/common/Accordion";

const sampleItems = [
  {
    title: "HTML이란 무엇인가요?",
    content:
      "HTML(HyperText Markup Language)은 웹 페이지의 구조를 정의하는 마크업 언어입니다. 태그를 사용하여 콘텐츠의 의미와 구조를 표현합니다.",
  },
  {
    title: "CSS의 역할은 무엇인가요?",
    content:
      "CSS(Cascading Style Sheets)는 HTML 요소의 시각적 표현을 담당합니다. 레이아웃, 색상, 폰트 등의 스타일을 정의할 수 있습니다.",
  },
  {
    title: "JavaScript는 어디에 사용되나요?",
    content:
      "JavaScript는 웹 페이지에 동적인 기능을 추가하는 프로그래밍 언어입니다. 사용자 상호작용, 데이터 처리, 애니메이션 등을 구현할 수 있습니다.",
  },
];

const meta = {
  title: "Component/Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;

export const Default = {
  args: {
    items: sampleItems,
    allowMultiple: false,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("HTML이란 무엇인가요?")).toBeInTheDocument();
    await expect(canvas.getByText("CSS의 역할은 무엇인가요?")).toBeInTheDocument();

    const buttons = canvas.getAllByRole("button");
    await expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
  },
};

export const SingleToggle = {
  args: {
    items: sampleItems,
    allowMultiple: false,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const firstButton = canvas.getByText("HTML이란 무엇인가요?");
    await userEvent.click(firstButton);
    await expect(firstButton.closest("button")).toHaveAttribute("aria-expanded", "true");

    const secondButton = canvas.getByText("CSS의 역할은 무엇인가요?");
    await userEvent.click(secondButton);
    await expect(secondButton.closest("button")).toHaveAttribute("aria-expanded", "true");
    await expect(firstButton.closest("button")).toHaveAttribute("aria-expanded", "false");
  },
};

export const AllowMultiple = {
  args: {
    items: sampleItems,
    allowMultiple: true,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const firstButton = canvas.getByText("HTML이란 무엇인가요?");
    const secondButton = canvas.getByText("CSS의 역할은 무엇인가요?");

    await userEvent.click(firstButton);
    await userEvent.click(secondButton);

    await expect(firstButton.closest("button")).toHaveAttribute("aria-expanded", "true");
    await expect(secondButton.closest("button")).toHaveAttribute("aria-expanded", "true");
  },
};

export const SingleItem = {
  args: {
    items: [sampleItems[0]],
    allowMultiple: false,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("HTML이란 무엇인가요?")).toBeInTheDocument();
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(1);
  },
};
