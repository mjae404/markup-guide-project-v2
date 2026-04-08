import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within, userEvent } from "storybook/test";
import { useState } from "react";
import Checkbox from "@/app/components/common/Checkbox";

const meta = {
  title: "Component/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    label: "체크되지 않은 항목",
    checked: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("체크되지 않은 항목")).toBeInTheDocument();
    const checkbox = canvas.getByRole("checkbox");
    await expect(checkbox).not.toBeChecked();
  },
};

export const Checked: Story = {
  args: {
    label: "체크된 항목",
    checked: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await expect(checkbox).toBeChecked();
  },
};

export const Disabled: Story = {
  args: {
    label: "비활성화된 항목",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await expect(checkbox).toBeDisabled();
  },
};

export const Interactive = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        label="라벨을 클릭해보세요"
        checked={checked}
        onChange={setChecked}
      />
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await expect(checkbox).not.toBeChecked();
    await userEvent.click(canvas.getByText("라벨을 클릭해보세요"));
    await expect(checkbox).toBeChecked();
    await userEvent.click(canvas.getByText("라벨을 클릭해보세요"));
    await expect(checkbox).not.toBeChecked();
  },
};
