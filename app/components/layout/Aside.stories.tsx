import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import Aside from "@/app/components/layout/Aside";
import { conventionMenu } from "@/app/data/menu";

const meta = {
  title: "Layout/Aside",
  component: Aside,
  parameters: {
    layout: "padded",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/convention/rule-standard",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Aside>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuGroup: conventionMenu,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("표준 규칙")).toBeInTheDocument();
    await expect(canvas.getByText("코드 규칙")).toBeInTheDocument();
    await expect(canvas.getByText("네임 규칙")).toBeInTheDocument();
  },
};
