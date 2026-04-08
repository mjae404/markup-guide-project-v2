import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within, userEvent } from "storybook/test";
import Tooltip from "@/app/components/common/Tooltip";
import Button from "@/app/components/common/Button";

const meta = {
  title: "Component/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "400px", padding: "80px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    content: "상단 툴팁 메시지",
    position: "top",
    children: <Button variant="outline">위쪽 (Top)</Button>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText("위쪽 (Top)");
    await expect(trigger).toBeInTheDocument();
    await userEvent.hover(trigger);
    await expect(canvas.getByRole("tooltip")).toBeInTheDocument();
    await userEvent.unhover(trigger);
  },
};

export const Bottom: Story = {
  args: {
    content: "하단 툴팁 메시지",
    position: "bottom",
    children: <Button variant="outline">아래쪽 (Bottom)</Button>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText("아래쪽 (Bottom)");
    await userEvent.hover(trigger);
    await expect(canvas.getByRole("tooltip")).toBeInTheDocument();
  },
};

export const Left: Story = {
  args: {
    content: "좌측 툴팁 메시지",
    position: "left",
    children: <Button variant="outline">왼쪽 (Left)</Button>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText("왼쪽 (Left)");
    await userEvent.hover(trigger);
    await expect(canvas.getByRole("tooltip")).toBeInTheDocument();
  },
};

export const Right: Story = {
  args: {
    content: "우측 툴팁 메시지",
    position: "right",
    children: <Button variant="outline">오른쪽 (Right)</Button>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText("오른쪽 (Right)");
    await userEvent.hover(trigger);
    await expect(canvas.getByRole("tooltip")).toBeInTheDocument();
  },
};
