import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within, userEvent } from "storybook/test";
import Header from "@/app/components/layout/Header";

const meta = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("웹퍼블리싱 가이드")).toBeInTheDocument();
    await expect(canvas.getByText("기본 정책")).toBeInTheDocument();
    await expect(canvas.getByText("규칙 가이드")).toBeInTheDocument();
    await expect(canvas.getByText("웹접근성")).toBeInTheDocument();
  },
};

export const MobileMenuOpen: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByLabelText("메뉴 열기");
    await expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);
    await expect(canvas.getByLabelText("메뉴 닫기")).toBeInTheDocument();
  },
};
