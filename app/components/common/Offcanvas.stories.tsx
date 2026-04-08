import type { Meta } from "@storybook/nextjs-vite";
import { expect, within, userEvent } from "storybook/test";
import { useState } from "react";
import Offcanvas from "@/app/components/common/Offcanvas";
import Button from "@/app/components/common/Button";

const meta = {
  title: "Component/Offcanvas",
  component: Offcanvas,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ minHeight: "500px", padding: "40px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Offcanvas>;

export default meta;

export const RightPanel = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setIsOpen(true)}>오른쪽 패널 열기</Button>
        <Offcanvas isOpen={isOpen} onClose={() => setIsOpen(false)} title="오른쪽 패널" position="right">
          <p>오른쪽에서 슬라이드되어 나타나는 패널입니다.</p>
          <p>네비게이션, 필터, 설정 등의 콘텐츠를 담을 수 있습니다.</p>
        </Offcanvas>
      </>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("오른쪽 패널 열기");
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(canvas.getByText("오른쪽 패널")).toBeInTheDocument();
  },
};

export const LeftPanel = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant="outline" onClick={() => setIsOpen(true)}>왼쪽 패널 열기</Button>
        <Offcanvas isOpen={isOpen} onClose={() => setIsOpen(false)} title="왼쪽 패널" position="left">
          <p>왼쪽에서 슬라이드되어 나타나는 패널입니다.</p>
        </Offcanvas>
      </>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("왼쪽 패널 열기"));
    await expect(canvas.getByText("왼쪽 패널")).toBeInTheDocument();
    const closeButton = canvas.getByLabelText("Close");
    await userEvent.click(closeButton);
  },
};
