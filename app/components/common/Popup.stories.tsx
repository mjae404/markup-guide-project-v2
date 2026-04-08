import type { Meta } from "@storybook/nextjs-vite";
import { expect, within, userEvent } from "storybook/test";
import { useState } from "react";
import Popup from "@/app/components/common/Popup";
import Button from "@/app/components/common/Button";

const meta = {
  title: "Component/Popup",
  component: Popup,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ minHeight: "600px", padding: "40px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Popup>;

export default meta;

export const Small = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setIsOpen(true)}>Small 팝업 열기</Button>
        <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} title="Small 팝업" size="sm">
          <p>작은 크기의 팝업 다이얼로그입니다.</p>
        </Popup>
      </>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Small 팝업 열기");
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(canvas.getByRole("dialog")).toBeInTheDocument();
    await expect(canvas.getByText("Small 팝업")).toBeInTheDocument();
  },
};

export const Medium = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setIsOpen(true)}>Medium 팝업 열기</Button>
        <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} title="Medium 팝업" size="md">
          <p>중간 크기의 팝업 다이얼로그입니다. 더 넓은 콘텐츠 영역을 제공합니다.</p>
        </Popup>
      </>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Medium 팝업 열기"));
    await expect(canvas.getByRole("dialog")).toBeInTheDocument();
  },
};

export const Large = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setIsOpen(true)}>Large 팝업 열기</Button>
        <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} title="Large 팝업" size="lg">
          <p>큰 크기의 팝업 다이얼로그입니다. 폼, 테이블, 상세 정보 등 복잡한 콘텐츠를 담을 수 있습니다.</p>
        </Popup>
      </>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Large 팝업 열기"));
    await expect(canvas.getByText("Large 팝업")).toBeInTheDocument();
    const closeButton = canvas.getByLabelText("Close");
    await userEvent.click(closeButton);
  },
};
