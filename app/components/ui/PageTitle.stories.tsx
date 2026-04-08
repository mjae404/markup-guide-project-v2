import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import PageTitle from "@/app/components/ui/PageTitle";

const meta = {
  title: "UI/PageTitle",
  component: PageTitle,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "기본 정책",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("기본 정책")).toBeInTheDocument();
  },
};

export const WithBadge: Story = {
  args: {
    children: "표준 규칙",
    badge: "Convention",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Convention")).toBeInTheDocument();
    await expect(canvas.getByText("표준 규칙")).toBeInTheDocument();
  },
};
