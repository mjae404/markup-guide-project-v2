import type { Meta } from "@storybook/nextjs-vite";
import { expect, within, userEvent } from "storybook/test";
import { useState } from "react";
import Toast from "@/app/components/common/Toast";
import Button from "@/app/components/common/Button";

const meta = {
  title: "Component/Toast",
  component: Toast,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ minHeight: "400px", padding: "40px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;

export const Success = {
  render: () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setIsVisible(true)}>성공 토스트 표시</Button>
        <Toast message="작업이 성공적으로 완료되었습니다!" type="success" isVisible={isVisible} onClose={() => setIsVisible(false)} />
      </>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("성공 토스트 표시"));
    await expect(canvas.getByRole("alert")).toBeInTheDocument();
    await expect(canvas.getByText("작업이 성공적으로 완료되었습니다!")).toBeInTheDocument();
  },
};

export const Error = {
  render: () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
      <>
        <Button variant="secondary" onClick={() => setIsVisible(true)}>에러 토스트 표시</Button>
        <Toast message="오류가 발생했습니다. 다시 시도해 주세요." type="error" isVisible={isVisible} onClose={() => setIsVisible(false)} />
      </>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("에러 토스트 표시"));
    await expect(canvas.getByText("오류가 발생했습니다. 다시 시도해 주세요.")).toBeInTheDocument();
  },
};

export const Warning = {
  render: () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
      <>
        <Button variant="outline" onClick={() => setIsVisible(true)}>경고 토스트 표시</Button>
        <Toast message="입력 내용을 다시 확인해 주세요." type="warning" isVisible={isVisible} onClose={() => setIsVisible(false)} />
      </>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("경고 토스트 표시"));
    await expect(canvas.getByText("입력 내용을 다시 확인해 주세요.")).toBeInTheDocument();
  },
};

export const Info = {
  render: () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
      <>
        <Button variant="ghost" onClick={() => setIsVisible(true)}>정보 토스트 표시</Button>
        <Toast message="새로운 업데이트가 있습니다." type="info" isVisible={isVisible} onClose={() => setIsVisible(false)} />
      </>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("정보 토스트 표시"));
    await expect(canvas.getByRole("alert")).toBeInTheDocument();
    const closeButton = canvas.getByLabelText("Close");
    await userEvent.click(closeButton);
  },
};
