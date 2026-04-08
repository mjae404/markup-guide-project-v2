import type { Meta } from "@storybook/nextjs-vite";
import { expect, within, userEvent } from "storybook/test";
import Dropdown from "@/app/components/common/Dropdown";
import Button from "@/app/components/common/Button";

const sampleItems = [
  { label: "프로필", onClick: () => {} },
  { label: "설정", onClick: () => {} },
  { label: "로그아웃", onClick: () => {} },
];

const meta = {
  title: "Component/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;

export const Default = {
  args: {
    trigger: <Button variant="outline">메뉴 열기</Button>,
    items: sampleItems,
    align: "left" as const,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("메뉴 열기")).toBeInTheDocument();
  },
};

export const OpenOnClick = {
  args: {
    trigger: <Button variant="primary">메뉴 열기</Button>,
    items: sampleItems,
    align: "left" as const,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText("메뉴 열기");
    await userEvent.click(trigger);
    await expect(canvas.getByText("프로필")).toBeInTheDocument();
    await expect(canvas.getByText("설정")).toBeInTheDocument();
    await expect(canvas.getByText("로그아웃")).toBeInTheDocument();
  },
};

export const AlignRight = {
  args: {
    trigger: <Button variant="secondary">오른쪽 정렬</Button>,
    items: sampleItems,
    align: "right" as const,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("오른쪽 정렬")).toBeInTheDocument();
  },
};

export const ToggleClose = {
  args: {
    trigger: <Button variant="outline">토글 메뉴</Button>,
    items: sampleItems,
    align: "left" as const,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText("토글 메뉴");
    await userEvent.click(trigger);
    await expect(canvas.getByText("프로필")).toBeInTheDocument();
    await userEvent.click(trigger);
  },
};

export const ManyItems = {
  args: {
    trigger: <Button variant="ghost">옵션</Button>,
    items: [
      { label: "항목 1", onClick: () => {} },
      { label: "항목 2", onClick: () => {} },
      { label: "항목 3", onClick: () => {} },
      { label: "항목 4", onClick: () => {} },
      { label: "항목 5", onClick: () => {} },
    ],
    align: "left" as const,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText("옵션");
    await userEvent.click(trigger);
    await expect(canvas.getByText("항목 1")).toBeInTheDocument();
    await expect(canvas.getByText("항목 5")).toBeInTheDocument();
  },
};
